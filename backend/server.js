const express = require('express');
const app = express();
const PORT = 5000;
const bodyParser = require('body-parser');
const fileUpload = require ('express-fileupload');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');

app.use(cors());
// connect DB
mongoose.connect(process.env.DB_LINK + process.env.DB_NAME, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then(() => {
    console.log('MongoDB database is connected........');
})
.catch((error) => {
    console.log('Database is not connected because:' + error.message)
});

// body parser use
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));


// static folder use
app.use(express.static(__dirname + '/public'));


// fileUpload setup

app.use(fileUpload());
//routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.listen(PORT, () => {
    console.log(' The Server is running on :' + PORT)
})