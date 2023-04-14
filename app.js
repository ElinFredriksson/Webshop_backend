const express = require('express');
const app = express();
const cors = require ('cors');

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api/products', require('./controllers/productController.js'))
app.use('/api/users', require('./controllers/userController.js'))
app.use('/api/orders', require('./controllers/orderController.js'))

module.exports = app;


