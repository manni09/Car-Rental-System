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
var customer_service_1 = require('./../shared/customer.service');
var core_1 = require('@angular/core');
var Subject_1 = require('rxjs/Subject');
var Observable_1 = require('rxjs/Observable');
var SearchReservationComponent = (function () {
    function SearchReservationComponent(customerService) {
        this.customerService = customerService;
        this.searchCar = new Subject_1.Subject();
    }
    SearchReservationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customers = this.searchCar
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (query) { return query ? _this.customerService.getCustomerById(query) : _this.customerService.getCustomer(); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    SearchReservationComponent.prototype.onSearch = function (queryId) {
        this.searchCar.next(queryId);
    };
    SearchReservationComponent = __decorate([
        core_1.Component({
            selector: 'my-search-reservation',
            templateUrl: '/app/search/searchCustomer.template.html',
            providers: [customer_service_1.CustomerService]
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService])
    ], SearchReservationComponent);
    return SearchReservationComponent;
}());
exports.SearchReservationComponent = SearchReservationComponent;
//# sourceMappingURL=searchCustomer.component.js.map