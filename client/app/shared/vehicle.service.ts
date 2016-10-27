import { Http, Headers, RequestOptions } from '@angular/http';
import { Vehicle } from './Vehicle';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VehicleService {

    private vehicleUrl = 'api/search/vehicles';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getVehicles(): Promise<Vehicle[]> {
        return this.http.get(this.vehicleUrl).toPromise().then(res => res.json().data as Vehicle[]).catch(this.handleError);
    }

    getVehiclesByQuery(queryStr: string, queryType: string): Promise<Vehicle[]> {
        return this.http.get(this.vehicleUrl + '?' + queryType + '=' + queryStr).toPromise().then(res => res.json().data as Vehicle[]).catch(this.handleError);
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
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
} 