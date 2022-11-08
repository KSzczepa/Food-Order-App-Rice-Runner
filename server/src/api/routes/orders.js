const express = require('express');
const router = express.Router();
const morgan = require('morgan');


router.get('/', (req, res, next) => {
    res.status(201).json({
        message: "Orders were fetched"
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "Orders were created",
        bodymsg: req.body
    });
});
 
router.get('/:orderID', (req, res, next) => {
    const id=req.params.orderID;
    res.status(200).json({
        message: "Order details",
        orderID: id
    });
});

router.delete('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Order deleted!',
        OrderID: req.params.orderID
    });
});

module.exports = router;