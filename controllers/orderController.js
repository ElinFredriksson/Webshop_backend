const router = require('express').Router();
const { verifyToken } = require('../authentication/auth');
const {createNewOrder, getOrders} = require('../models/orderModel')

router.post('/', verifyToken, createNewOrder )

router.get('/', verifyToken, getOrders)

module.exports = router;