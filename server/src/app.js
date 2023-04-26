const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const mongoConnect = require('./api/util/database').mongoConnect;

const menuRoutes = require('./api/routes/menuRoute');
const orderRoutes = require('./api/routes/orderRoute');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

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

app.use('/menu', menuRoutes);
app.use('/orders', orderRoutes);

// mongoose.connect('mongodb+srv://JustUser:xO8ijc3PL7TtBmeo@cluster0.iun9qhb.mongodb.net/RiceRunnerDatabase?retryWrites=true&w=majority')
//     .then(() => console.log('Connected to mongoDB with mongoose'));

mongoConnect((client) => {
    // console.log('MongoDB server is running!');
  });

//previous version


// //Routes which should handle requests
// const productRoutes = require('./api/routes/products');
// const orderRoutes = require('./api/routes/orders');
// const usersRoutes = require('./api/routes/users');

// //for firebase
// const menuRoutes = require('./api/routes/users');


// app.use(morgan('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));


// app.use('/products', productRoutes);
// app.use('/orders', orderRoutes);
// app.use('/users', usersRoutes);

// //for firebase
// app.use('/menu', menuRoutes);

module.exports = app;

// exports.app = functions.https.onRequest(app);