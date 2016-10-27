import { VehicleComponent } from './../vehicle/vehicle.component';
import { VehicleModule } from './../vehicle/vehicle.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from '../core/app.component';
import { DashboardComponent } from './../dashboard/dashboard.component';

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
      }
    ])
  ],
  declarations: [AppComponent, DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
