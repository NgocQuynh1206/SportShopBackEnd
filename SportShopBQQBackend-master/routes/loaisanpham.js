var express = require('express');
var router = express.Router();

var loaisanpham = require('../controllers/loaisanpham');

router.post('/loaisanpham', loaisanpham.create);

router.get('/loaisanpham', loaisanpham.findAll);

router.get('/loaisanpham/:maloai', loaisanpham.findOne);

router.put('/loaisanpham/:maloai', loaisanpham.update);

router.delete('/loaisanpham/:maloai', loaisanpham.delete);

module.exports = router;
