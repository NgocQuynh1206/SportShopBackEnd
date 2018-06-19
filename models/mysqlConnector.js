 // Load module
 var mysql = require('mysql');
 // Initialize pool
 var pool      =    mysql.createPool({
     host     : 'us-cdbr-iron-east-04.cleardb.net',
     user     : 'b97c46713bc01e',
+    password : '4e6cb8ff',
     database : 'heroku_94045600a237def',
     debug    :  false
 });
 module.exports = pool;
