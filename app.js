const express = require('express');
const bodyParser = require('body-parser');
var mysql = require('mysql');

const dbconfig = require('./dbms');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(require('./routes'));
app.listen(3000);