
var express = require('express');
var Customer = require('../model/Customer');
var router = express.Router();

router.post('/add', function (req, res, next) {
    let customer = req.body.customer || [];
    if (customer != []) {
        customer.save(function (err) {
            if (err) throw err;
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ data: customer }));
        });
    }
});

router.put('/edit', function (req, res, next) {
    let customer = req.body.customer || [];
    if (customer != []) {
        customer.update({_id: customer._id}, {}, (function (err) {
            if (err) throw err;
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify({ data: customer }));
        }));
    }
});


router.delete('/delete', function (req, res, next) {
    let customer = req.body.customer || [];
    Customer.findByIdAndRemove(customer._id, function (err) {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ data: customer }));
    });
});

router.post('/get', function (req, res, next) {
    let customer = req.body.customer || [];
    Customer.find({}).exec(function (err, customer) {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ data: customer }));
    });
});


module.exports = router;
