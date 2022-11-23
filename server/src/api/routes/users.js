const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
// import passwordHash from 'password-hash';
const passwordHash = require('password-hash');


const connection = mysql.createConnection({
    host: 'localhost',
    // host: 'host.docker.internal',
    port: 3306,
    database: 'user_data',
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


router.post('/', (req, res, next) => {
    const password = req.body.password;
    const hashedPassword = passwordHash.generate(password);

    connection.query("SELECT * FROM user_data.users", (err, response, fields)=>{
        if (err) {
            console.log(err);
        }
        else {
            const data = JSON.parse(JSON.stringify(response));
            for (let i=0; i<data.length; i++) {
                console.log('verify:', passwordHash.verify(password, data[0].password));
            }
            // const hashedpassword = data.password;
            
            if (passwordHash.verify(password, data[0].password)){
                res.send({isRegistered: true, data: data});
            }
            else {
                res.send({isRegistered: false, data: null});
            }
            
        }
    });

});

module.exports = router;