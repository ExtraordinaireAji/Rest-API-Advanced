exports.getAllUsers= (req, res) => {
    res.status(200);
    res.json([
        {
            Uname: 'Rahmon Ajala',
            age: '50 years old',
            gender: 'male'
        },
        {
            Uname: 'Saheed Ajala',
            age: '30 years old',
            gender: 'male'
        },
        {
            Uname: 'Jamie Dickson',
            age: '50 years old',
            gender: 'male'
        }
    ])
}

exports.getOneUser = (req, res) => {
    res.status(200);
    res.json({
        Uname: 'Rahmon Ajala',
        age: '50 years old',
        gender: 'male'
    })
}

exports.updateOneUser = (req, res) => {
    res.status(200);
    res.json({
        message: 'user updated'
    })
}

exports.deleteOneUser = (req, res) => {
    res.status(200);
    res.json({
        message: 'user deleted'
    })
}

exports.createOneUser = (req, res) => {
    res.status(200);
    res.json({
        message: 'user created'
    })
}