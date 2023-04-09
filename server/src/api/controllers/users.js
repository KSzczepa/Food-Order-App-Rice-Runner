const mysql = require('mysql2');
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


exports.addUser = (req, res, next) => {
    if (req.params.val === 'login') {
        const password = req.body.password;

        connection.query("SELECT * FROM user_data.users", (err, response, fields)=>{
            if (err) {
                console.log(err);
            }
            else {
                const data = JSON.parse(JSON.stringify(response));
                for (let i=0; i<data.length; i++) {
                    console.log('verify:', passwordHash.verify(password, data[i].password));
                }
                
                if (passwordHash.verify(password, data[0].password)){
                    res.send({isRegistered: true, data: data[0]});
                }
                else {
                    res.send({isRegistered: false, data: null});
                }
                
            }
        });
    }
    else if (req.params === 'sign') {

        const userData = {
            ID: req.body.ID,
            login: req.body.login,
            password: req.body.password,
            email: req.body.email,
            name: req.body.name,
            street: req.body.street,
            city: req.body.city,
            postalCode: req.body.postalCode,
            phoneNumber: req.body.phoneNumber,
        };
        //first we should validate again user's data
        //check if threre is no user registered with the same;
        //ID, login, password, email or phone number

        connection.query("SELECT * FROM user_data.users", (err, response, fields)=>{
            if (err) {
                console.log(err);
            }
            else {
                const data = JSON.parse(JSON.stringify(response));
                for (let i=0; i<data.length; i++) {
                    if (data[i].login || data[i].password || data[i].email || data[i].phoneNumber) {
                        res.send({message: "Error"});
                    }
                }
                
                
                
            }
        });

    }

};