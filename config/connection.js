var mysql = require('mysql');

var connection = mysql.connection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'burgers_db'
});

connection.connect(function(err) {
	if (err) {
		console.log('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id: ' + connection.threadID);
});

module.exports = connection;