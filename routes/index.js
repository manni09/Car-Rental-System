var express = require('express');
var router = express.Router();
var Vehicle = require('../model/Vehicle');

/* GET home page. */
router.get('/', function (req, res, next) {
  var vehicle = new Vehicle({
    _id: 1234,
    model: 'BMW',
    year: '2005',
    image_path: '/bmw1234.jpg',
    type: 'Automobile',
    Rent: {
        price_per_day: '10', 
        isRented: false
    }
  });

   vehicle.save(function (err) {
     if(err) throw err;
     console.log("Saved!")
     res.render('index');
   });
   
});

module.exports = router;
