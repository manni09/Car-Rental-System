var express = require('express');
var router = express.Router();
var Vehicle = require('../model/Vehicle');


router.get('/vehicles', function (req, res, next) {
    let model = req.query.model;
    let year = req.query.year;
    let type = req.query.type;

    if (model != null || year != null || type != null) {
        Vehicle.find({ $or: [{ model: model }, { year: year }, { type: type }] }).exec(function (err, vehicle) {
            if (err) throw err;
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({data: vehicle}));
        });
    } else {
        Vehicle.find({}).exec(function (err, vehicle) {
            if (err) throw err;
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({data: vehicle}));
        });
    }
});

module.exports = router;