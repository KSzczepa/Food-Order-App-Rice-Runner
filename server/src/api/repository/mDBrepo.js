const mongodb = require('mongodb');
const getDB = require('../util/database').getDB;

exports.fetchAll = () => {
    const db = getDB();
    return db.collection('menu').find().toArray().then(products => {
      return products;
    }).catch(err => {
      console.log(err);
    });
};

exports.saveOrder = (userOrder) => {
    const db = getDB();
    let dbOp;
    if (userOrder._id) {
      //update the product
      dbOp = db.collection('orders')
        .updateOne({ _id: userOrder._id }, { $set: userOrder });
    }
    else {
      //insert it
      dbOp = db.collection('orders').insertOne(userOrder);   //insert JS object {name: 'Sth', price: 12.99}
    }
    return dbOp;
};