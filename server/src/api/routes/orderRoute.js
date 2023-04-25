const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const ordersController = require('../controllers/orderController');

// router.get('/', ordersController.fetchOrders);

router.post('/', ordersController.saveOrder); 

// router.delete('/:orderID', ordersController.deleteOrder);

module.exports = router;