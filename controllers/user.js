var UserModel = require('../models/user');
var cm = require('../models/user');

exports.create = function (req, res) {
    // Create and Save a new Note
    var value = req.body;

    UserModel.create(value, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};


exports.findAll = function (req, res) {
    // Retrieve and return all notes from the database.
    UserModel.findAll(function (err, data) {
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
    var value = req.params.id;

    UserModel.findOne(value, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.update = function (req, res) {
    // Update a note identified by the noteId in the request
    var id = req.params.id;

    UserModel.findOne(id, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        if (!data) {
            res.status(404).send(err);
            return;
        }

        var value = req.body;
        value.id = id;

        UserModel.update(value, function(err, data){
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
    var value = req.params.id;

    UserModel.delete(value, function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.send(data);
    });
};

exports.home = (req, res) => {
    UserModel.findAll(function (err, data) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        res.render('index', {title: 'Tài Khoản', data});
    }
    );
};
