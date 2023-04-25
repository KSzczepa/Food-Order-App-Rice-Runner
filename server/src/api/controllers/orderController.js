const mongodb = require('mongodb');

const OrderService = require('../services/orderService');

exports.saveOrder = (req, res, next) => {
	const orderRequestData = {
		userdata: req.body.user,
		order: req.body.orderedItems
	}
	OrderService.save(orderRequestData)
		.then(result => {
			res.status(200).send(result);
		})
		.catch(err => {
			console.log(err);
		});
};