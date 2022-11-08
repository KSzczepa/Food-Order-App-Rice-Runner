const { application } = require('express');
const express = require('express');
const app = express();
const mysql = require('mysql');
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


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



// const connection = mysql.createConnection({
//     host: 'localhost',
//     port: 3306,
//     database: 'food_db1',
//     user: 'root',
//     password: 'password'
// });

// connection.connect((err) => {
//     if (err) {
//         console.log('error occured while connecting', err);
//     }
//     else {
//         console.log('connection created with mysql successfully');
//     }
// });

// let receivedID = 'm2';

// app.get("/fetch", (req, res) => {
//     connection.query("SELECT * FROM meals WHERE mealID = ?", [receivedID], (err, res, fields)=>{
//         if (err) {
//             console.log(err);
//         }
//         else {
//             const data = JSON.parse(JSON.stringify(res));
//             console.log(data);
//         }
//     })
    
// });


app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;