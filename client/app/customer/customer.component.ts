import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../shared/Customer';


@Component({
    moduleId: module.id,
    selector: 'my-customer',
    templateUrl: 'customer.component.html',
    styleUrls: [ 'customer.component.css' ]
})

export class CustomerComponent {

     STATES = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE",
                "FL","GA","GU","HI","IA","ID", "IL","IN","KS",
                "KY","LA","MA","MD","ME","MH","MI","MN","MO",
                "MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", 
                "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN",
                "TX","UT","VA","VI","VT","WA","WI","WV","WY"];
  


 }