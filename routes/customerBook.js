
var express = require('express');
var Customer = require('../model/Customer');
var router = express.Router();

/* This method returns customer book form */
router.get('/getForm', function (req, res, next) {
     res.render('customerBookForm');
});

/* This method add customer */
router.get('/bookCustomer', function (req, res, next) {

//db.customers.find({},{_id:1}).sort({_id:-1}).limit(1);

 //var cust = Customer.find({},{_id:1}).sort({_id:-1}).limit(1);
 //id = cust._id +  1;
//console.log("id is: " + data._id);
// var cust=new Customer(req.body.customer);
 //cust._id = id;



 // res.render('customerBookForm');
//  var cust=new Customer(req.body.customer);

    // var newCustomer = new Customer({
    // _id: req.body.customer._id,
    // first_name: req.body.customer.first_name,
    // last_name: req.body.customer.last_name,
    // address: {
    //     street: req.body.customer.address.street.street,
    //     city: req.body.customer.address.city,
    //     state: req.body.customer.state,
    //     zip: req.body.customer.address.zip,
    // },
    // phone: req.body.customer.phone,
    // email: req.body.customer.email,
    // description: req.body.customer.description,
    // reservations: [
    //          {pick_date: req.body.customer.reservations.pick_date,
    //          return_date: req.body.customer.reservations.return_date, 
    //          vehicles:req.body.customer.reservations.vehicles._id}]
    //   });


var cust = new Customer({
    _id: 2,
    first_name: 'tam',
    last_name: 'mak',
    address: {
        street: '501 w stone ave',
        city: 'fairfield',
        state: 'Ia',
        zip: 52557
    },
    phone: '206-643-7526',
    email: 'string',
    description: 'description',
    reservations: [
        {pick_date: new Date(08/07/2016), return_date: new Date(2016/08/09), vehicles:123}]
});

//res.render('customerBookForm');
//    cust.save(function (err) {
//      if(err) throw err;
//      console.log("Customer Saved!")
//      res.render('customerBookForm');
//    });
   
});

module.exports = router;
