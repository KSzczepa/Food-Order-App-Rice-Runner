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

}


module.exports = Product;
