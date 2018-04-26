import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CarService } from './cars.service';
import { Car } from './car';

@Component({
   selector: 'app-report',
   templateUrl: './report.component.html'
})
export class ReportComponent implements OnInit { 
   observableCars: Observable<Car[]>
   cars: Car[];
   errorMessage: String;
   columnDefs = [
        {headerName: 'Make', field: 'make' },
        {headerName: 'Model', field: 'model' },
        {headerName: 'Price', field: 'price'}
    ];
   constructor(private carService: CarService) { }
   ngOnInit(): void 
   {
         this.observableCars = this.carService.getCarsWithObservable();
	this.observableCars.subscribe(
            cars => this.cars = cars,
            error =>  this.errorMessage = <any>error
			);
   }
} 




/*import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit
{
	columnDefs = [
        {headerName: 'Make', field: 'make' },
        {headerName: 'Model', field: 'model' },
        {headerName: 'Price', field: 'price'}
    ];

     rowData: any;
	 constructor(private http: Http) {

    }

    ngOnInit() {
       //const url='http://localhost:4200/assets/data/cars.json';
		/*this.http.get(url).subscribe(
		response => {
			console.log(response); 
			//console.log(this.rowData); 
		},
		msg => {
		console.error(`Error: ${msg.status} ${msg.statusText}`);
		}
		);
		this.rowData=this.http.get(url).map((response:response)=>response.json());
		
		console.log("this.rowData"+this.rowData);
    }
}
*/