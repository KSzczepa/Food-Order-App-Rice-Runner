const { application } = require('express');
const express = require('express');
const app = express();
const mysql = require('mysql2');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST');
        return res.status(200).json({});
    }
    next();
});

//Routes which should handle requests
const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');
const usersRoutes = require('./api/routes/users');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/users', usersRoutes);

module.exports = app;