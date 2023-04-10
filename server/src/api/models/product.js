const mongodb = require('mongodb');
const getDB = require('../util/database').getDB;

class Product {
  constructor(id, name, description, price) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this._id = new mongodb.ObjectId(id);
  }

//   save() {
//     const db = getDB();
//     let dbOp;
//     if (this._id) {
//       //update the product
//       dbOp = db.collection('products')
//         .updateOne({ _id: this._id }, { $set: this });
//     }
//     else {
//       //insert it
//       dbOp = db.collection('products').insertOne(this);   //insert JS object {name: 'Sth', price: 12.99}
//     }
//     return dbOp;
//   }

  static fetchAll() {
    const db = getDB();
    // return db.collection('products').find({title: 'A book'});
    return db.collection('menu').find().toArray().then(products => {
      console.log(products);
      return products;
    }).catch(err => {
      console.log(err);
    });
  }

//   static findById(prodId) {
//     const db = getDB();
//     return db.collection('products').find({ _id: new mongodb.ObjectId(prodId) })
//       .next()
//       .then(product => {
//         console.log(product);
//         return product;
//       }).catch(err => {
//         console.log(err);
//       }); //{} - this is filter
//   }

}


module.exports = Product;
