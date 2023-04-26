const mongodb = require('mongodb');

const Product = require('../models/product');
const Repository = require('../repository/mDBrepo');

const ObjectId = mongodb.ObjectId;

exports.fetchAll = () => {
    return Repository.fetchAll();
};