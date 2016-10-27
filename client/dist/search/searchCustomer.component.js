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
var SearchCustomerComponent = (function () {
    function SearchCustomerComponent(customerService) {
        this.customerService = customerService;
        this.searchCustomer = new Subject_1.Subject();
    }
    SearchCustomerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customers = this.searchCustomer
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (query) { return query ? _this.customerService.getCustomerByReservationDate(query) : Observable_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    SearchCustomerComponent.prototype.onSearch = function (queryId) {
        this.searchCustomer.next(queryId);
    };
    SearchCustomerComponent = __decorate([
        core_1.Component({
            selector: 'my-search-reservation',
            templateUrl: '/app/search/searchCustomer.template.html',
            providers: [customer_service_1.CustomerService]
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService])
    ], SearchCustomerComponent);
    return SearchCustomerComponent;
}());
exports.SearchCustomerComponent = SearchCustomerComponent;
//# sourceMappingURL=searchCustomer.component.js.map