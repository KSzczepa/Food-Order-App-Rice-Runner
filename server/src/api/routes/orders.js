const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    // host: 'localhost',
    host: 'host.docker.internal',
    port: 3306,
    // database: 'user_orders',
    user: 'root',
    password: 'password',
    multipleStatements: true
});

connection.connect((err) => {
    if (err) {
        console.log('error occured while connecting', err);
    }
    else {
        console.log('connection created with mysql successfully');
    }
});


router.get('/', (req, res, next) => {
    res.status(201).json({
        message: "Orders were fetched"
    });
});



router.post('/:orderID', (req, res, next) => {

    console.log(req.body);

    const user = {
        name: req.body.user.name,
        street: req.body.user.street,
        city: req.body.user.city,
        postalCode: req.body.user.postalCode,
        phoneNumber: req.body.user.phoneNumber
    }


    order = req.body.orderedItems;
    
    var mysql_comm = "CREATE DATABASE "+ req.params.orderID + ";";
    mysql_comm += "CREATE TABLE `"+req.params.orderID+"`.`user` (name varchar(20), street varchar(100), city varchar(20), postalCode varchar(5), phoneNumber varchar(9));";
    mysql_comm += "INSERT INTO `"+req.params.orderID+"`.`user` (name, street, city, postalCode, phoneNumber) VALUES ('"+user.name+"', '"+user.street+"', '"+user.city+"', '"+user.postalCode+"', '"+user.phoneNumber+"');";
    mysql_comm += "CREATE TABLE `"+req.params.orderID+"`.`order` (name varchar(45), amount int, price float);";
    for (let i=0; i<order.length; i++) {
        mysql_comm += "INSERT INTO `"+req.params.orderID+"`.`order` (name, amount, price) VALUES ('"+order[i].name+"', "+order[i].amount+", "+order[i].price+");";
    }


    connection.query(mysql_comm, (err, response, fields)=>{
        if (err) {
            console.log(err);
        }
        else {
            console.log('Database created');
        }
    });
  
   
    res.status(200).json({
        message: "Orders were created"
    });
});
 
// router.get('/:orderID', (req, res, next) => {
//     const id=req.params.orderID;
//     res.status(200).json({
//         message: "Order details",
//         orderID: id
//     });
// });

router.delete('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'Order deleted!',
        OrderID: req.params.orderID
    });
});

module.exports = router;