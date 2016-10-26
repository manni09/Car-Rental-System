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
var vehicle_service_1 = require('./../shared/vehicle.service');
var core_1 = require('@angular/core');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var Observable_1 = require('rxjs/Observable');
var DashboardComponent = (function () {
    function DashboardComponent(vehicleService) {
        this.vehicleService = vehicleService;
        this.searchCar = new BehaviorSubject_1.BehaviorSubject('');
        this.queryType = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicles = this.searchCar
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (query) { return query ? _this.vehicleService.getVehiclesByQuery(query, _this.queryType) : _this.vehicleService.getVehicles(); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    DashboardComponent.prototype.onSearch = function (queryStr, queryType) {
        this.queryType = queryStr ? queryType : "";
        this.searchCar.next(queryStr);
    };
    DashboardComponent.prototype.onSearchByType = function (type) {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: '/app/dashboard/dashboard.template.html',
            providers: [vehicle_service_1.VehicleService]
        }), 
        __metadata('design:paramtypes', [vehicle_service_1.VehicleService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map