const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const morgan = require('morgan');


const connection = mysql.createConnection({
    // host: 'localhost',
    host: 'host.docker.internal',
    port: 3306,
    database: 'food_db1',
    user: 'root',
    password: 'password'
});


connection.connect((err) => {
    if (err) {
        console.log('error occured while connecting', err);
    }
    else {
        console.log('connection created with mysql successfully');
    }
});


//get the whole row
router.get('/', (req, res, next) => {
    // const receivedID = req.body.id;
    // connection.query("SELECT * FROM menu WHERE mealID = ?", [receivedID], (err, response, fields)=>{
    connection.query("SELECT * FROM food_db1.menu", (err, response, fields)=>{
        if (err) {
            console.log(err);
        }
        else {
            const data = JSON.parse(JSON.stringify(response));
            res.send(data);
        }
    });
});


router.post('/', (req, res, next) => {
    // const product = {
    //     name: req.body.name,
    //     price: req.body.price
    // };
    res.status(200).json({
        message: "Handling POST to /products",
        // createdProduct: product
    });
});
 
//get only 1 product
router.get('/:ID', (req, res, next) => {
    const id = req.params.ID;
    connection.query("SELECT * FROM menu WHERE mealID = ?", [id], (err, response, fields)=>{
            if (err) {
                console.log(err);
            }
            else {
                const data = JSON.parse(JSON.stringify(response));
                res.send(data);
            }
        });
});


// router.patch('/:mealID', (req, res, next) => {
//     res.status(200).json({
//         message: 'Updated product!'
//     });
// });


// router.delete('/:mealID', (req, res, next) => {
//     res.status(200).json({
//         message: 'Deleted product!'
//     });
// });


module.exports = router;