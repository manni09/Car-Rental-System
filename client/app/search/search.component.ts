import { Vehicle } from './../shared/Vehicle';
import { VehicleService } from './../shared/vehicle.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'my-search',
    templateUrl: '/app/search/search.template.html',
    providers: [VehicleService]
})

export class SearchComponent implements OnInit {
    vehicles: Observable<Vehicle[]>;
    private searchCar = new BehaviorSubject('');
    private queryType: string = '';

    constructor(private vehicleService: VehicleService) { 
    }

    ngOnInit(): void {
        this.vehicles = this.searchCar
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(query => query ? this.vehicleService.getVehiclesByQuery(query, this.queryType) : this.vehicleService.getVehicles())
            .catch(error => {
                console.log(error);
                return Observable.of<Vehicle[]>([]);
            });
    }

    onSearch(queryStr: string, queryType: string): void {
        this.queryType = queryStr ? queryType : "";
        this.searchCar.next(queryStr);
    }

    onSearchByType(type:number): void{
        
    }
}