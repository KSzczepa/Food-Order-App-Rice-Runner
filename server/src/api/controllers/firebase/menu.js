// //https://ricerunner-4cdfa-default-rtdb.europe-west1.firebasedatabase.app/

const mongodb = require('mongodb');

const Product = require('../../models/product');

const ObjectId = mongodb.ObjectId;

exports.getAllProducts = (req, res, next) => {
    console.log("fetch data");
    Product.fetchAll()
    .then(products => {
      console.log(products);
      res.send(products);
    })
    .catch(err => console.log(err));

};

// exports.postProduct = (req, res, next) => {

// };

// exports.getSingleProduct = (req, res, next) => {
//     const id = req.params.ID;

// };