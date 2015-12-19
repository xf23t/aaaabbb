var express = require('express');  
var mysql = require('mysql');
var router = express.Router();
var connection = mysql.createConnection({

	'host' :  'aws-rds-my-sql.czyy7a7mm4rr.us-west-2.rds.amazonaws.com',  
    'user' :  'user',
    'password' :  'password',  
    'database' : 'board',

});
router.get('/', function(req, res, next) {  connection.query('sele
ct id, title, timestamp from board ' +
'order by timestamp desc;', function (error, cursor) {
res.json(cursor);
});
});
module.exports = router;