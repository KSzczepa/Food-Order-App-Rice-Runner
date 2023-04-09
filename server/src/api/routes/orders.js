const express = require('express');
const router = express.Router();

const ordersController = require('../controllers/orders');

router.get('/', ordersController.fetchOrders);

router.post('/:orderID', ordersController.saveOrder); 

router.delete('/:orderID', ordersController.deleteOrder);

module.exports = router;