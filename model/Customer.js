var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    _id: Number,
    first_name: String,
    last_name: String,
    address: {
        street: String,
        city: String,
        state: String,
        zip: Number
    },
    phone: String,
    email: String,
    description: String,
    reservations: [{pick_date: Date, return_date: Date, vehicles:Number}]
}, {
    versionKey: false
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;