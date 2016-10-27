var express = require('express');
var router = express.Router();
var Vehicle = require('../model/Vehicle');

/* GET home page. */
router.get('/*', function (req, res, next) {
  res.render('indexds');
});

module.exports = router;
