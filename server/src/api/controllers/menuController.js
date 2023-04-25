// //https://ricerunner-4cdfa-default-rtdb.europe-west1.firebasedatabase.app/

const mongodb = require('mongodb');

const Product = require('../models/product');
const ProductService = require('../services/productService');

const ObjectId = mongodb.ObjectId;

exports.getAllProducts = (req, res, next) => {
  ProductService.fetchAll()
    .then(products => {
      res.send(products);
    })
    .catch(err => console.log(err));

};

// exports.postProduct = (req, res, next) => {

// };

// exports.getSingleProduct = (req, res, next) => {
//     const id = req.params.ID;

// };