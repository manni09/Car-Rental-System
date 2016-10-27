var express = require('express');
var router = express.Router();
var Vehicle = require('../model/Vehicle');

/* GET home page. */
<<<<<<< HEAD
router.get('/', function (req, res, next) {
  // var vehicle = new Vehicle({
  //   _id: 1234,
  //   model: 'BMW',
  //   year: '2005',
  //   image_path: '/bmw1234.jpg',
  //   type: 'Automobile',
  //   Rent: {
  //       price_per_day: '10', 
  //       isRented: false
  //   }
  // });

  //  vehicle.save(function (err) {
  //    if(err) throw err;
  //    console.log("Saved!")
  //    res.render('index');
  //  });
  res.render('index');
=======
router.get('/*', function (req, res, next) {
  res.render('indexds');
>>>>>>> f7e3fe6f41b2fcdd4e40982a59cdd09e0d0a1317
});

module.exports = router;
