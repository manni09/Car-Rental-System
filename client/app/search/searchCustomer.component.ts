import { CustomerService } from './../shared/customer.service';
import { Customer } from './../shared/Customer';
import { VehicleService } from './../shared/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject }           from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'my-search-reservation',
    templateUrl: '/app/search/searchCustomer.template.html',
    providers: [CustomerService]
})

export class SearchCustomerComponent implements OnInit{
    customers: Observable<Customer[]>;
    private searchCustomer = new Subject<string>();

    constructor(private customerService: CustomerService) { 
    }

    ngOnInit(): void {
        this.customers = this.searchCustomer
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(query => query ? this.customerService.getCustomerByReservationDate(query) : Observable.of<Customer[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Customer[]>([]);
            });
    }

    onSearch(queryId: string): void {
        this.searchCustomer.next(queryId);
    }
}