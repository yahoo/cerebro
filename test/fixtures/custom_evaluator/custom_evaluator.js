module.exports = [{
    setting: 'customEvaluator',
    value: false,
    except: [{
        value: true,
        customCondition: {
            evaluator: 'evaluateCondition',
            dimensionValue: ['en']
        }
    }]
}];
