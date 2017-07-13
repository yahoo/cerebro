module.exports = [{
    setting: 'independent',
    value: false
}, {
    setting: 'dependent',
    value: false,
    except: [{
        value: true,
        setting: 'independent'
    }]
}];
