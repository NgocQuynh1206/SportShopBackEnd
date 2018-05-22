var express = require('express');
var router = express.Router();
var passport = require('../models/jwtService');
var donhang = require('../controllers/donhang');

router.post('/donhang',passport.authenticate('jwt', { session: false }), donhang.create);

router.get('/donhang',passport.authenticate('jwt', { session: false }), donhang.findAll);

router.get('/donhang/:madonhang',passport.authenticate('jwt', { session: false }), donhang.findOne);

router.put('/donhang/:madonhang',passport.authenticate('jwt', { session: false }), donhang.update);

router.delete('/donhang/:madonhang',passport.authenticate('jwt', { session: false }), donhang.delete);

module.exports = router;
