var db = require('./manageDB');
var moment = require('moment');

exports.findAll = function (callback) {
    db.executeQuery("select * from sanpham", function (err, data){
        callback(err, data);
    });
}

exports.create = function (value ,callback) {
	var query = "INSERT INTO sanpham SET ?";
	value.ngaynhap = moment().format("YYYY-MM-DD");
	db.executeParamsQuery(query, value, 
		function (err, data) {
        	callback(err, data);
        }
    );
}

exports.delete = function (value, callback) {
	var query = "Delete From sanpham Where masanpham = ?";
	db.executeParamsQuery(query, value, function(err, data){
		callback(err, data);
	});
}

exports.update = function (value, callback) {
	var query = "Update sanpham Set tensanpham=?, gia=?, soluong=?, luotxem=?, daban=?, hinhanh=?, loaisanpham=? Where masanpham = ?";
	db.executeParamsQuery(query, [value.tensanpham, value.gia, value.soluong, value.luotxem, value.daban, value.hinhanh, value.loaisanpham, value.masanpham], function(err, data){
		callback(err, data);
	});
}

exports.findOne = function (value, callback) {
	var query = "Select* From sanpham Where masanpham = ?";
	db.executeParamsQuery(query, value, function(err, data){
		callback(err, data);
	});
}

