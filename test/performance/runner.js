module.exports = {
    name: 'Cerebro',
    tests: {
        simple: require('./cases/simple.js'),
        'simple with override': require('./cases/simple_override.js'),
        enum: require('./cases/enum.js'),
        range: require('./cases/range.js'),
        'custom evaluator': require('./cases/custom_evaluator.js'),
        'cross setting dependencies': require('./cases/cross_setting.js'),
        'multiple dimensions': require('./cases/multiple_dimensions.js'),
        'multiple except blocks': require('./cases/multiple_except_blocks.js'),
        'random percentage': require('./cases/random_percentage.js'),
        'fixed percentage': require('./cases/fixed_percentage.js'),
        template: require('./cases/template.js'),
        huge: require('./cases/huge.js')
    }
};
