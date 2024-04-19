const express = require('express')

const app = express()

const productRoute = require('./routes/productRoute')
const userRoute = require('./routes/userRoute')
const serviceRoute = require('./routes/serviceRoute')

const port = 8090
const fs = require('fs')


const productPage = fs.readFileSync('./pages/product.html', 'utf-8')
const userPage = fs.readFileSync('./pages/user.html', 'utf-8')
const servicePage = fs.readFileSync('./pages/services.html', 'utf-8')

app.get('/', (req, res) => {
    res.send(productPage, userPage, servicePage);
})


app.use(productRoute, userRoute, serviceRoute);

app.use(express.json())












app.listen(port, () => {
    console.log(`server don start. click http://localhost:${port} to open website`)
})