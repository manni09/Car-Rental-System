import { Http } from '@angular/http';
import { Vehicle } from './Vehicle';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class VehicleService {

    private vehicleUrl = 'api/search/vehicles';

    constructor(private http: Http) { }

    getVehicles(): Promise<Vehicle[]> {
        return this.http.get(this.vehicleUrl).toPromise().then(res => res.json().data as Vehicle[]).catch(this.handleError);
    }

    getVehiclesByQuery(queryStr: string, queryType:string): Promise<Vehicle[]> {
        return this.http.get(this.vehicleUrl + '?' + queryType + '=' + queryStr).toPromise().then(res => res.json().data as Vehicle[]).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
} 