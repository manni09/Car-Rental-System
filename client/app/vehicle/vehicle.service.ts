import { Vehicle } from './../shared/Vehicle';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class VehicleService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    constructor(private http: Http) {
    }
    registerVehicle(vehicle: Vehicle): Promise<Vehicle> {
        let body = JSON.stringify({ vehicle: vehicle });

        let options = new RequestOptions({ headers: this.headers });
        return this.http
            .post('api/vehicle/add', body, options)
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
