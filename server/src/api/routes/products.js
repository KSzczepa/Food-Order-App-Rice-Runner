const express = require('express');
const router = express.Router();


const productController = require('../controllers/products');


//get the whole row
router.get('/', productController.getAllProducts);

router.post('/', productController.postProduct);
 
//get only 1 product
router.get('/:ID', productController.getSingleProduct);


// router.patch('/:mealID', (req, res, next) => {
//     res.status(200).json({
//         message: 'Updated product!'
//     });
// });


// router.delete('/:mealID', (req, res, next) => {
//     res.status(200).json({
//         message: 'Deleted product!'
//     });
// });


module.exports = router;