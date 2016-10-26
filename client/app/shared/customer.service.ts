import { Customer } from './Customer';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomerService {

    private vehicleUrl = 'api/search/customer';

    constructor(private http: Http) { }

    getCustomer(): Promise<Customer[]> {
        return this.http.get(this.vehicleUrl).toPromise().then(res => res.json().data as Customer[]).catch(this.handleError);
    }

    getCustomerById(queryId: string): Promise<Customer[]> {
        return this.http.get(this.vehicleUrl + '?id=' + queryId).toPromise().then(res => res.json().data as Customer[]).catch(this.handleError);
    }

    getCustomerByReservation(queryId: string, queryReserv:string): Promise<Customer[]> {
        return this.http.get(this.vehicleUrl + '?id=' + queryId + '&queryReserv=' + queryReserv).toPromise().then(res => res.json().data as Customer[]).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
} 