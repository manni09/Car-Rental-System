
var express = require('express');
var Customer = require('../model/Customer');
var router = express.Router();

router.post('/add', function (req, res, next) {
    console.log(req.body.customer);
    let customer = new Customer(req.body.customer);
    customer._id = null;
    if (customer != []) {
        customer.save(function (err) {
            if (err) {
                throw err;
            }
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ data: req.body.customer }));
        });
    }
});

router.put('/edit', function (req, res, next) {
    let customer = new Customer(req.body.customer);
    if (customer != []) {

    customer.findOneAndUpdate({_id:req.params.id}, req.body, function (err, place) {
         if (err) throw err;
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ data: customer }));
          });

        // customer.update({_id: customer._id}, {    }, (function (err) {
        //     if (err) throw err;
        //     res.setHeader('Content-Type', 'application/json');
        //     res.send(JSON.stringify({ data: customer }));
        // }));
    }
});


router.delete('/delete', function (req, res, next) {
    let customer = new Customer(req.body.customer);
    Customer.findByIdAndRemove(customer._id, function (err) {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ data: customer }));
    });
});

router.get('/get', function (req, res, next) {
    let customer = new Customer(req.body.customer);
    Customer.find({}).exec(function (err, customer) {
        if (err) throw err; 
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ data: customer }));
    });
});

router.get('/get/reservation', function (req, res, next) {
    let query = req.body.pick_date;
    Customer.find({reservations: { $elemMatch: {pick_date: query}}}).exec(function (err, customers) {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ data: customers }));
    });
});


module.exports = router;
