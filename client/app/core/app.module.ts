import { SearchReservationComponent } from './../search/searchReservation.component';
import './rxjs-extensions';
import { VehicleService } from './../shared/vehicle.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';


import { AppComponent } from '../core/app.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { SearchVehicleComponent } from './../search/searchVehicle.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'search/customer/reservation',
        component: SearchReservationComponent
      }
    ])
  ],
  declarations: [AppComponent, DashboardComponent, SearchVehicleComponent, SearchReservationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
