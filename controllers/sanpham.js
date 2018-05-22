var SanPhamModel = require('../models/sanpham');
var cm = require('../models/sanpham');
var jwt = require('jsonwebtoken');
var passport = require("passport");
var passportJWT = require("passport-jwt");

var ExtractJwt = passportJWT.ExtractJwt;
var JwtStrategy = passportJWT.Strategy;

var jwtOptions = {}
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = 'BaoQuyetQuynh';

var strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
    console.log('payload received', jwt_payload);
    next(null, jwt_payload)
});
passport.use(strategy);
exports.create = function (req, res) {
    // Create and Save a new Note
    var value = req.body;

    SanPhamModel.create(value, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};


exports.findAll = function (req, res) {
    // Retrieve and return all notes from the database.
    SanPhamModel.findAll(function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    }
    );
};

exports.findOne = function (req, res) {
    // Find a single note with a noteId
    var value = req.params.masanpham;

    SanPhamModel.findOne(value, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.update = function (req, res) {
    // Update a note identified by the noteId in the request
    var id = req.params.masanpham;

    SanPhamModel.findOne(id, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        if (!data) {
            res.status(404).send(err);
            return;
        }

        var value = req.body;
        value.masanpham = id;

        SanPhamModel.update(value, function(err, data){
            if(err) {
                res.status(500).send(err);
                return;
            } else {
                res.send(data);
            }
        });

    });
};


exports.delete = function (req, res) {
    // Delete a note with the specified noteId in the request
    var value = req.params.masanpham;

    SanPhamModel.delete(value, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.home = (req, res) => {
    SanPhamModel.findAll(function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.render('index', {title: 'Sản Phẩm', data});
    }
    );
};
