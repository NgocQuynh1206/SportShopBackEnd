var db = require('./manageDB');

exports.login = function (value, callback) {
	var query = "select id, firstname, email, password, role from taikhoan Where email = ? and password = ?";
	db.executeParamsQuery(query, [value.email, value.password], function(err, data){
		callback(err, data);
	});
}