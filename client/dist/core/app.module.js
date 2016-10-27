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
var vehicle_component_1 = require('./../vehicle/vehicle.component');
var vehicle_module_1 = require('./../vehicle/vehicle.module');
var customer_component_1 = require('./../customer/customer.component');
var searchCustomer_component_1 = require('./../search/searchCustomer.component');
require('./rxjs-extensions');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var app_component_1 = require('../core/app.component');
var dashboard_component_1 = require('./../dashboard/dashboard.component');
var searchVehicle_component_1 = require('./../search/searchVehicle.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, vehicle_module_1.VehicleModule,
                router_1.RouterModule.forRoot([
                    {
                        path: '',
                        redirectTo: '/dashboard',
                        pathMatch: 'full'
                    },
                    {
                        path: 'dashboard',
                        component: dashboard_component_1.DashboardComponent
                    },
                    {
                        path: 'vehicle',
                        component: vehicle_component_1.VehicleComponent
                    },
                    {
                        path: 'search/customer/reservation',
                        component: searchCustomer_component_1.SearchCustomerComponent
                    },
                    {
                        path: 'customer/new',
                        component: customer_component_1.CustomerComponent
                    },
                ])
            ],
            declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent, searchVehicle_component_1.SearchVehicleComponent, searchCustomer_component_1.SearchCustomerComponent, customer_component_1.CustomerComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map