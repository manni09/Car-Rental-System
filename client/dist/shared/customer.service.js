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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/add/operator/toPromise');
var CustomerService = (function () {
    function CustomerService(http) {
        this.http = http;
        this.customerUrl = 'api/customer';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    CustomerService.prototype.getCustomer = function () {
        return this.http.get(this.customerUrl).toPromise().then(function (res) { return res.json().data; }).catch(this.handleError);
    };
    CustomerService.prototype.getCustomerById = function (queryId) {
        return this.http.get(this.customerUrl + '/get?id=' + queryId).toPromise().then(function (res) { return res.json().data; }).catch(this.handleError);
    };
    CustomerService.prototype.getCustomerByReservationDate = function (reservationDate) {
        return this.http.get(this.customerUrl + '/get/reservation?pick_date=' + reservationDate).toPromise().then(function (res) { return res.json().data; }).catch(this.handleError);
    };
    CustomerService.prototype.create = function (customer) {
        return this.http
            .post(this.customerUrl + '/add', JSON.stringify({ customer: customer }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    CustomerService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    CustomerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CustomerService);
    return CustomerService;
}());
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map