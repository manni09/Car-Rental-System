var express = require('express');
var router = express.Router();
var Vehicle = require('../model/Vehicle');
var path = require('path');
var fs = require('fs');

router.post('/add', function (req, res, next) {
    var vehicle = new Vehicle(req.body.vehicle);
    var imageString = req.body.vehicle.image_path;
    var buffer = new Buffer(imageString.split(",")[1], 'base64');
    var appDir = path.dirname(require.main.filename);
    fs.writeFile(appDir + "\\Images\\" + vehicle._id + ".jpg", buffer);
    req.body.vehicle.image_path = "";
    vehicle.image_path = "";
    vehicle.save(function (err) {
        if (err) throw err;
        res.send(req.body.vehicle);
    });
});

module.exports = router;
