exports.getAllProducts = (req, res) => {
    res.status(200);
    res.json([
        {
            Pname: 'Samsung A100',
            Pprice: '#150000'
        },
        {
            Pname: 'Tecno phantom',
            price: '#120000'
        },
        {
            Pname: 'iphone 6',
            Pprice: '#70000'
        }
    ])
}

exports.getOneProduct = (req, res) => {
    res.status(200);
    res.json({
        Pname: 'Samsung A100',
        Pprice: '#150000'
    })
}

exports.updateOneProduct = (req, res) => {
    res.status(200);
    res.json({
        message: 'Product updated'
    })
}

exports.deleteOneProduct = (req, res) => {
    res.status(200);
    res.json({
        message: 'Product deleted'
    })
}

exports.createOneProduct = (req, res) => {
    res.status(200);
    res.json({
        message: 'Product created'
    })
}