var express = require('express');
var router = express.Router();

var user = require('../controllers/user');

// Create a new Note
router.post('/user', user.create);

// Retrieve all user
router.get('/user', user.findAll);

// Retrieve a single Note with noteId
router.get('/user/:id', user.findOne);

// Update a Note with id
router.put('/user/:id', user.update);

// Delete a Note with id
router.delete('/user/:id', user.delete);

module.exports = router;
