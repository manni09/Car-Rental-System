var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    _id: string,
    first_name: string,
    last_name: string,
    address: {
        street: string,
        city: string,
        state: string,
        zip: number
    },
    phone: string,
    email: string,
    description: string,
    reservations: [{pick_date: Date, return_date: Date, vehicles:[number]}]
});

var Customer = mongoose.model('Cutomer', customerSchema);

module.exports = Customer;