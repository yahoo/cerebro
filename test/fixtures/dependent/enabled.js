module.exports = [{
    setting: 'independent',
    value: true
}, {
    setting: 'dependent',
    value: false,
    except: [{
        value: true,
        setting: 'independent'
    }]
}];
