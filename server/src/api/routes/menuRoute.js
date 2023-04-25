const express = require('express');
const router = express.Router();


const menuController = require('../controllers/menuController');


//get the whole row
router.get('/', menuController.getAllProducts);

// router.post('/', menuController.postProduct);
 
//get only 1 product
// router.get('/:ID', menuController.getSingleProduct);


module.exports = router;