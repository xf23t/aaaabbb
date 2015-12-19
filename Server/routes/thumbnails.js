var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var connection = mysql.createConnection({
    'host': ",'user':",
    'password': ",'database': ".
});

router.get('/', function (req, res, next) {
    connection.query('select id, title, timestamp from board' + 'order by timestamp desc;', function (error, cursor) {

        res.json(cursor);
    });
});

module.exports = roouter;

