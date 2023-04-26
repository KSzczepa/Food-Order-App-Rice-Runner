const mongodb = require('mongodb');

const Order = require('../models/order');
const Repository = require('../repository/mDBrepo');

const ObjectId = mongodb.ObjectId;

exports.save = (orderToSave) => {
    
	const userOrder = new Order(orderToSave.userdata, orderToSave.order);
    const updatedDB = Repository.saveOrder(userOrder);
    return updatedDB;
};