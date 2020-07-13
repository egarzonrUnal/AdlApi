const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');

let data = [];
data = require('./data.json')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/products/:bankName', (req, res) => {
    let products = data.filter(product => {
        return product.accountInformation.bank === req.params.bankName
    })
    res.send(products)
})

app.get('/banks', (req, res) => {
    let products = []
    data.map(product => {
        if (products.indexOf(product.accountInformation.bank) === -1) {
            products.push(product.accountInformation.bank)
        }
    })
    res.send(products.sort())
})

app.listen(3000, () => {
    console.log('Api rest listen 3000')
})