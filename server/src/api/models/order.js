const mongodb = require('mongodb');
const getDB = require('../util/database').getDB;

class Order {
  constructor(userdata, order, id) {
    this.userdata = userdata;
    this.order = order;

    if(id)
      this._id = new mongodb.ObjectId(id);
   }
}

module.exports = Order;
