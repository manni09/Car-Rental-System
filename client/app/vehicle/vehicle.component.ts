import { VehicleService } from './../shared/vehicle.service';
import { Vehicle } from './../shared/Vehicle';
import { Component } from '@angular/core';

@Component({
    selector: 'vehicle',
    templateUrl: '/app/vehicle/vehicle.template.html'
})

export class VehicleComponent {

    constructor(private vehicleService: VehicleService) { }
    path: string;

    vehicle: Vehicle = {
        _id: 0,
        model: '',
        year: 1999,
        image_path: '',
        type: '',
        Rent: { price_per_day: 0, isRented: false }
    };
    onSubmit() {

        this.vehicleService.registerVehicle(this.vehicle)
            .then(veh => {
                //console.log(veh);
                alert("successfully registered");
                this.vehicle._id = 0;
                this.path = ' ';
                this.vehicle.model = ' ';
                this.vehicle.Rent.price_per_day = 0;
                this.vehicle.type = ' ';
                this.vehicle.year = 1999;
            })
    }
    browseImage(event: any) {
        if (event) {
            let that = this;
            var reader = new FileReader();
            reader.onload = function (ev: any) {
                that.path = event.target.files[0].name;
                console.log(event.target.files[0].name);
                that.vehicle.image_path = ev.target.result;
                //console.log(that.vehicle);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

}
