var express = require('express');
var router = express.Router();

var donhang = require('../controllers/donhang');

router.post('/donhang', donhang.create);

router.get('/donhang', donhang.findAll);

router.get('/donhang/:madonhang', donhang.findOne);

router.put('/donhang/:madonhang', donhang.update);

router.delete('/donhang/:madonhang', donhang.delete);

module.exports = router;
