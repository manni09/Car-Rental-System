import { VehicleService } from './vehicle.service';
import { VehicleComponent } from './vehicle.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [VehicleComponent],
  exports: [VehicleComponent],
  providers: [VehicleService]
})
export class VehicleModule { }
