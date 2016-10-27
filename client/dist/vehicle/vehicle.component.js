"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var vehicle_service_1 = require('./vehicle.service');
var core_1 = require('@angular/core');
var VehicleComponent = (function () {
    function VehicleComponent(vehicleService) {
        this.vehicleService = vehicleService;
        this.vehicle = {
            _id: 0,
            model: '',
            year: 1999,
            image_path: '',
            type: '',
            Rent: { price_per_day: 0, isRented: false }
        };
    }
    VehicleComponent.prototype.onSubmit = function () {
        var _this = this;
        this.vehicleService.registerVehicle(this.vehicle)
            .then(function (veh) {
            //console.log(veh);
            alert("successfully registered");
            _this.vehicle._id = 0;
            _this.path = ' ';
            _this.vehicle.model = ' ';
            _this.vehicle.Rent.price_per_day = 0;
            _this.vehicle.type = ' ';
            _this.vehicle.year = 1999;
        });
    };
    VehicleComponent.prototype.browseImage = function (event) {
        if (event) {
            var that_1 = this;
            var reader = new FileReader();
            reader.onload = function (ev) {
                that_1.path = event.target.files[0].name;
                console.log(event.target.files[0].name);
                that_1.vehicle.image_path = ev.target.result;
                //console.log(that.vehicle);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    VehicleComponent = __decorate([
        core_1.Component({
            selector: 'vehicle',
            templateUrl: '/app/vehicle/vehicle.template.html'
        }), 
        __metadata('design:paramtypes', [vehicle_service_1.VehicleService])
    ], VehicleComponent);
    return VehicleComponent;
}());
exports.VehicleComponent = VehicleComponent;
//# sourceMappingURL=vehicle.component.js.map