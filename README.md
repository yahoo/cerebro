Cerebro
===============

[![Build Status](https://travis-ci.org/yahoo/cerebro.svg?branch=master)](https://travis-ci.org/yahoo/cerebro)
[![Coverage Status](https://coveralls.io/repos/github/yahoo/cerebro/badge.svg?branch=master)](https://coveralls.io/github/yahoo/cerebro?branch=master)

A generic configuration system for Node.js.

Cerebro receives two inputs:
  - the context, which is all data associated with a specific user or request.  each individual piece of context is referred to as a `dimension`.
  - the configuration, which are the values which will be chosen based on what the context is.

Cerebro outputs the resolved configuration.

## Usage

```js
import Cerebro from 'cerebro';

const configuration = [{
  setting: 'timer',
  value: 30,
  except: [{
    value: 15,
    environment: ['alpha']
  }]
}];

const context = {
  environment: 'alpha'
};

// initialize Cerebro
const cerebro = new Cerebro(configuration);
const resolvedConfiguration = cerebro.resolveConfig(context);

console.log(resolvedConfiguration);
// -> { timer: 15 } because the setting `timer` is set to 15 when the environment is alpha.
// for all other environments, the resolvedConfiguration would be { timer: 30 }
```


## Configuration Rules
For configuration, Cerebro expects an array that contains objects that have a `setting` and a `value`.  `setting` is the name of the configuration setting, and `value` is the value that will be assigned to it.  `value` can be any JSON data type.

Here is an example configuration object:

```
[{
  setting: 'timer',
  value: 30,
  except: [{
    value: 15,
    environment: ['alpha']
  }]
}]
```

Settings must explicitly set the value in the `except` blocks.

Settings are expected to follow these rules:
- Setting must be a string.
- Value must not be undefined.
- Except must be an array.
- The elements of except must be objects.
- An element of except must contain value, and this value must not be undefined.

Settings are defined formally in `src/validators/schema.json`.

### Evaluation Order

If all the criteria in an `except` block is met, the value in the except block will be used.  The except blocks are checked in order, and it exits once it finds a match.  If no `except` block matches fully, then the default value is used.

Here is an example:

```js
import Cerebro from ('cerebro');

const configuration = [{
  setting: 'timer',
  value: 30,
  except: [{
    value: 15,
    environment: ['alpha']
  }, {
    value: 20,
    environment: ['alpha'],
    bucket: 'a'
  }]
}];

const context = {
  environment: 'alpha',
  bucket: 'a'
};

// initialize Cerebro
const cerebro = new Cerebro(configuration);
const resolvedConfiguration = cerebro.resolveConfig(context);

console.log(resolvedConfiguration);
// -> { timer: 15 } because the setting `timer` is set to 15 when the environment is alpha.
// in this case, {timer: 20} would never be hit because {timer: 15} will cause the evaluation
// to end immediately when environment is alpha
```

## Supported Formats for Context Checks in Except

### Enums
Given an except block that accepts multiple values for the same dimension, enable the setting if a dimension in the context object matches one of those values.  For example, if the configuration has something like this:

```js
[{
  setting: 'enableNewFeature',
  value: false,
  except: [{
    value: true,
    bucket: ['a', 'b']
  }]
}];
```

The setting should be enabled if the context object contains the dimension `bucket: 'a'` or `bucket: 'b'`.

Enums also support two additional options, `none` and `all`.  Here's what the configuration would look like:

```js
[{
    setting: 'enableNewFeature',
    value: false,
    except: [{
        value: true,
        partner: [
            'all'
        ]
    }]
}];
```

In this case, if the context object contains __any__ partner, the setting will be enabled.  If the context contains no partner, the setting will be disabled.  In other words, the setting is only enabled for partners.

```js
[{
  setting: 'enableNewFeature',
  value: false,
  except: [{
    value: true,
    partner: ['none']
  }]
}];
```

Similar logic applies to `none`.  If the context contains no partner, the setting will be enabled.  If the context contains any partner, the setting will be disabled.  In other words, the setting is disabled only for partners.

### Ranges
A configuration may contain a range of values.  The range may be inclusive or exclusive.

An inclusive range looks like this: `rangeExample: ['1000..2000']`.
An exclusive range looks like this: `rangeExample: ['1000...2000']`.

Here’s an example of a setting using a range:

```js
[{
  setting: 'enableNewFeature',
  value: false,
  except: [{
    value: true,
    userBirthdayYear: ['2000...2010']
  }]
}];
```

Thus, if the context contains a dimension called `userBirthdayYear` that is anywhere between 2000 and 2010, exclusive, the setting will be enabled.

### Setting Dependency
One setting may depend on another setting.  In this case, the configuration would look something like this:

```js
[{
  setting: 'independent',
  value: false,
  except: [{
    value: true,
    environment: ['alpha']
  }]
}, {
  setting: 'dependent',
  value: false,
  except: [{
    value: true,
    setting: 'independent'
  }]
}];
```

In this case, the dependent setting will not be enabled unless the independent setting is also enabled.

The setting dependency may be extended to depend on multiple settings.  In this case, the evaluation will be true only when each and every specified setting is true.  In other words, this is an AND operation between the specified settings (an OR operation can be achieved in other ways, such as using separate exception blocks).

For example:
```js
- setting: andOfFooAndBar
  value: false
  except:
    - value: true
      settings:
        - foo
        - bar
```
or
```js
- setting: andOfFooAndBar
  value: false
  except:
    - value: true
      settings: [foo, bar]

```

### Custom Evaluators
We may want to evaluate a context in a custom way.  For example, we may want to use do a partial string match using a regex.

Below is an example of the configuration:

```js
[{
    setting: 'enableNewFeature',
    value: false,
    except: [{
        value: true,
        partialLocale: ['en']
    }]
}]
```

To use a custom evaluator, you must pass an object called `customEvaluators` through the `options` object in the Cerebro constructor.  This object will have the name of the dimension it is to evaluate as a key and the evaluation function as value.

The evaluation function will receive two parameters, a `dimensionValue`, which is the value given in the configuration (`en` in the above example), and `testValue`, which is the value passed in the context.

The evaluation function must return a boolean.  If it does not return a boolean, the return value will be coerced to a boolean.

For the above configuration, the `customEvaluators` would look like this:

var customEvaluators = {
    customDimension: function(dimensionValue, testValue) {}
};

The `dimensionValue` would be [“en”], and the testValue would be whatever the value of `customDimension` was in the context.

## Overrides
We may want to override a certain setting, regardless of what the configuration says.  To do this, the client must pass an object, `overrides`, into the Cerebro constructor.  The keys of the `overrides` object will be the setting names and the value will be the value of the setting.  Typically, these overrides would come from the request URL, but any source can be used.

### Labels
Label metadata may be added to each entry in the form of an array of strings.  This does not affect the evaluation of setting entries into their resulting values.  It's stricly meant as a way to contextualize those values.  

For instance, values that are not wanted as part of a client payload can be marked "server".  

Note that this could be used to create subsets of values that no longer have all of the original entries with contraints such as dependencies.  

An alternative way to organize and contextualize is to group settings into separate files.


```js
[{
    setting: 'enableNewFeature',
    labels: ['server', 'namedFeatureGroup'],
    value: false,
    except: [{
        value: true,
        partialLocale: ['en']
    }]
}]
```

## Thanks

* Many thanks to Alasdair Mercer for donating the naming rights :) 
