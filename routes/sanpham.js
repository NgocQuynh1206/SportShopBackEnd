var express = require('express');
var router = express.Router();
var passport = require('../models/jwtService');
var sanpham = require('../controllers/sanpham');

router.post('/sanpham',passport.authenticate('jwt', { session: false }), sanpham.create);

router.get('/sanpham', sanpham.findAll);

router.get('/sanpham/:masanpham', sanpham.findOne);

router.put('/sanpham/:masanpham',passport.authenticate('jwt', { session: false }), sanpham.update);

router.delete('/sanpham/:masanpham',passport.authenticate('jwt', { session: false }), sanpham.delete);

module.exports = router;
