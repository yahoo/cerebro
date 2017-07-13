module.exports = [{
    setting: 'template',
    value: 'https://foo.com',
    except: [{
        value: 'https://${partner}.com',
        partner: 'bar'
    }]
}];
