require('./models/db');

const express = require ('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

const employeeController = require('./controllers/EmployeeController');
const storeController = require('./controllers/StoreController');

var app = express();
var PORT = 3000 || process.env.PORT;

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views'));
app.engine('hbs', exphbs( {extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(PORT, () => {
    console.log('Express server started at port: 3000');
});

app.use('/employee', employeeController);
app.use('/store', storeController);