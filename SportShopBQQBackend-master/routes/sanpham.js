var express = require('express');
var router = express.Router();

var sanpham = require('../controllers/sanpham');

router.post('/sanpham', sanpham.create);

router.get('/sanpham', sanpham.findAll);

router.get('/sanpham/:masanpham', sanpham.findOne);

router.put('/sanpham/:masanpham', sanpham.update);

router.delete('/sanpham/:masanpham', sanpham.delete);

module.exports = router;
