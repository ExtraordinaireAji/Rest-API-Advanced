exports.getAllServicess = (req, res) => {
    res.status(200);
    res.json([
        {
            serviceName: 'Web development',
            serviceCharge: '#120000'
        },
        {
            serviceName: 'Business development',
            serviceCharge: '#150000'
        },
        {
            serviceName: 'UI/UX',
            serviceCharge: '#100000'
        },
    ])
}

exports.getOneService = (req, res) => {
    res.status(200);
    res.json({
        serviceName: 'Web development',
        serviceCharge: '#120000'
    })
}

exports.updateOneService = (req, res) => {
    res.status(200);
    res.json({
        message: 'service updated'
    })
}

exports.deleteOneService = (req, res) => {
    res.status(200);
    res.json({
        message: 'Service deleted'
    })
}

exports.createOneService = (req, res) => {
    res.status(200);
    res.json({
        message: 'service created'
    })
}