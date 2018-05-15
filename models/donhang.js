var db = require('./manageDB');

exports.findAll = function (callback) {
    db.executeQuery("select * from donhang", function (err, data){
        callback(err, data);
    });
}

exports.create = function (value ,callback) {
	var query = "INSERT INTO donhang SET ?";
	db.executeParamsQuery(query, value, function (err, data){
        callback(err, data);
    });
}

exports.delete = function (value, callback) {
	var query = "Delete From donhang Where madonhang = ?";
	db.executeParamsQuery(query, value, function(err, data){
		callback(err, data);
	});
}

exports.update = function (value, callback) {
	var query = "Update donhang Set email=?, ngaydat=?, diachigiaohang=?, sdt=?, ngaygiaodukien=?, ngaygiaothucte=?, tongtien=?, tinhtrang=? Where madonhang = ?";
	db.executeParamsQuery(query, [value.email, value.ngaydat, value.diachigiaohang, value.sdt, value.ngaygiaodukien, value.ngaygiaothucte, value.tongtien, value.tinhtrang, value.madonhang], function(err, data){
		callback(err, data);
	});
}

exports.findOne = function (value, callback) {
	var query = "Select* From donhang Where madonhang = ?";
	db.executeParamsQuery(query, value, function(err, data){
		callback(err, data);
	});
}

