module.exports = [{
    setting: 'optionA',
    value: true
}, {
    setting: 'optionB',
    value: false
}, {
    setting: 'optionC',
    value: false,
    except: [{
        value: true,
        buckets: [
            '1',
            '2',
            '3'
        ]
    }]
}, {
    setting: 'optionD',
    value: true,
    except: [{
        value: false,
        buckets: [
            '8',
            '9'
        ]
    }]
}];
