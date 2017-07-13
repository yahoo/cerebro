module.exports = [{
    setting: 'sender',
    value: 'foo@yahoo.com'
}, {
    setting: 'helpUrl',
    value: '',
    except: [{
        value: 'foo/',
        helper: ['foo']
    }, {
        value: 'bar/',
        helper: ['bar']
    }, {
        value: 'baz/',
        helper: ['baz']
    }, {
        value: 'foo1/',
        helper: ['foo1']
    }, {
        value: 'bar1/',
        helper: ['bar1']
    }, {
        value: 'baz1',
        helper: ['baz1']
    }, {
        value: 'foo2/',
        helper: ['foo2']
    }]
}, {
    setting: 'dateOverride',
    value: 1428938850
}, {
    setting: 'testIds',
    value: [
        '10',
        '20',
        '30',
        '40'
    ]
}, {
    setting: 'alienMap',
    value: {
        1: 'hello',
        2: 'world',
        3: 'from',
        4: 'the',
        5: 'aliens'
    }
}, {
    setting: 'assetMap',
    value: {}
}, {
    setting: 'foo',
    value: '',
    except: [{
        value: '',
        partners: ['all']
    }, {
        value: '',
        buckets: ['1']
    }, {
        value: 'a',
        buckets: ['2'],
        intls: ['us']
    }]
}, {
    setting: 'version',
    value: 'v1.0'
}];
