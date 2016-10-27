
import { VehicleComponent } from './../vehicle/vehicle.component';
import { VehicleModule } from './../vehicle/vehicle.module';

import { CustomerComponent } from './../customer/customer.component';
import { SearchCustomerComponent } from './../search/searchCustomer.component';
import './rxjs-extensions';
import { VehicleService } from './../shared/vehicle.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from '../core/app.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { SearchVehicleComponent } from './../search/searchVehicle.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, VehicleModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/vehicle',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {

        path: 'vehicle',
        component: VehicleComponent
      },
      {
        path: 'search/customer/reservation',
        component: SearchCustomerComponent
      },
      {
        path: 'customer/new',
        component: CustomerComponent
      },

    ])
  ],
  declarations: [AppComponent, DashboardComponent, SearchVehicleComponent, SearchCustomerComponent, CustomerComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
