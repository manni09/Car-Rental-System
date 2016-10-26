var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vehicleSchema = new Schema({
    _id: Number,
    model: String, 
    year: Number,
    image_path: String,
    type: String,
    Rent: {
        price_per_day: Number, 
        isRented: Boolean
    }
}, {
    versionKey: false
});

var Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;