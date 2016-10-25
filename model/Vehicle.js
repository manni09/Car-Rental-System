var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vehicleSchema = new Schema({
    _id: number,
    model: string,
    year: number,
    image_path: string,
    type: string,
    Rent: {
        price_per_day: number, 
        isRented: boolean
    }
});

var Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;