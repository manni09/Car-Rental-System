import './rxjs-extensions';
import { VehicleService } from './../shared/vehicle.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';


import { AppComponent } from '../core/app.component';
import { DashboardComponent } from './../dashboard/dashboard.component';
import { SearchComponent } from './../search/search.component';

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
      }
    ])
  ],
  declarations: [AppComponent, DashboardComponent, SearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
