var express = require('express');
var router = express.Router();

var ctdonhang = require('../controllers/ctdonhang');

router.post('/ctdonhang', ctdonhang.create);

router.get('/ctdonhang', ctdonhang.findAll);

router.get('/ctdonhang/:madonhang', ctdonhang.findOne);

router.put('/ctdonhang/:madonhang', ctdonhang.update);

router.delete('/ctdonhang/:madonhang', ctdonhang.delete);

module.exports = router;
