import { Customer } from './Customer';
import { Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CustomerService {

    private customerUrl = 'api/customer';
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getCustomer(): Promise<Customer[]> {
        return this.http.get(this.customerUrl).toPromise().then(res => res.json().data as Customer[]).catch(this.handleError);
    }

    getCustomerById(queryId: string): Promise<Customer[]> {
        return this.http.get(this.customerUrl + '/get?id=' + queryId).toPromise().then(res => res.json().data as Customer[]).catch(this.handleError);
    }

    getCustomerByReservationDate(reservationDate: string): Promise<Customer[]> {
        return this.http.get(this.customerUrl + '/get/reservation?pick_date=' + reservationDate).toPromise().then(res => res.json().data as Customer[]).catch(this.handleError);
    }

    create(customer: Customer): Promise<Customer> {
        return this.http
            .post(this.customerUrl + '/add', JSON.stringify({customer: customer}), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data as Customer)
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
} 