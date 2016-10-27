var express = require('express');
var router = express.Router();
var Customer = require('../model/Customer');

//validate if customer exists in database
router.get('/api/customer/validate/:id', function (req, res, next) {
    Customer.findOne({ '_id': req.params.id }
        , '_id'
        , function (err, cust) {
            if (err) throw err;
            if (cust)
                res.send(cust._id);
            else
                res.send("NotFound");
        })
});

module.exports = router;
