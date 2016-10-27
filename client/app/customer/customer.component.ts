import { CustomerService } from './../shared/customer.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../shared/Customer';


@Component({
    moduleId: module.id,
    selector: 'my-customer',
    templateUrl: '/app/customer/customer.component.html',
    //styleUrls: ['/app/customer/customer.component.css'],
    providers: [CustomerService]
})

export class CustomerComponent implements OnInit {

    customer: Customer;

    STATES: string[] = ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC", "DE",
        "FL", "GA", "GU", "HI", "IA", "ID", "IL", "IN", "KS",
        "KY", "LA", "MA", "MD", "ME", "MH", "MI", "MN", "MO",
        "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY",
        "OH", "OK", "OR", "PA", "PR", "PW", "RI", "SC", "SD", "TN",
        "TX", "UT", "VA", "VI", "VT", "WA", "WI", "WV", "WY"];
    constructor(private customerService: CustomerService, private router: Router) {

    }
    ngOnInit(): void {
        if (!this.customer)
            this.customer = {
                _id: 0, first_name: '', last_name: '', address: { street: '', city: '', state: '', zip: 0 },
                phone: '', email: '', description: '', reservations: []
            }
    }

    NewCustomer(): void {
        this.customerService.create(this.customer).then(x => this.customer = x);
        this.router.navigate(['/']);
    }
}