var express = require('express');
var router = express.Router();
var Vehicle = require('../model/Vehicle');

router.get('/*', function (req, res, next) {
  res.render('indexds');
});

module.exports = router;
