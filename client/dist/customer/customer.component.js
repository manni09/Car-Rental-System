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
var router_1 = require('@angular/router');
var CustomerComponent = (function () {
    function CustomerComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
        this.STATES = ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE",
            "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS",
            "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO",
            "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY",
            "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN",
            "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];
    }
    CustomerComponent.prototype.ngOnInit = function () {
        if (!this.customer)
            this.customer = {
                _id: 0, first_name: '', last_name: '', address: { street: '', city: '', state: '', zip: 0 },
                phone: '', email: '', description: '', reservations: []
            };
    };
    CustomerComponent.prototype.NewCustomer = function () {
        var _this = this;
        this.customerService.create(this.customer).then(function (x) { return _this.customer = x; });
        this.router.navigate(['/']);
    };
    CustomerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-customer',
            templateUrl: '/app/customer/customer.component.html',
            //styleUrls: ['/app/customer/customer.component.css'],
            providers: [customer_service_1.CustomerService]
        }), 
        __metadata('design:paramtypes', [customer_service_1.CustomerService, router_1.Router])
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=customer.component.js.map