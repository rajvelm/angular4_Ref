import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {Http,HttpModule,Response,RequestOptions } from '@angular/http'
import { CarService } from './cars.service';
import { Car } from './car';
import { GridOptions } from "ag-grid";

@Component({
   selector: 'app-report',
   templateUrl: './report.component.html',
   providers: [CarService] 
})
export class ReportComponent implements OnInit { 
   
	rowData:any;
	columnDefs:any;
   constructor(public carService: CarService,private _http:Http) {
	/* this.columnDefs = [
        {headerName: 'Make', field: 'make' },
        {headerName: 'Model', field: 'model' },
        {headerName: 'Price', field: 'price'}
    ];  */
	this.columnDefs = [
        {headerName: 'ID', field: 'id' },
        {headerName: 'First Name', field: 'first_name' },
        {headerName: 'Last NAme', field: 'last_name'}
    ];
   }
   gridOptions: GridOptions;
  private rowSelection;
  private gridApi;
  private gridColumnApi;
  
   //someProperty:String='';
   ngOnInit()
   {
	   this.carService.getCars().subscribe((data)=>{this.rowData=data.data});
	   //this.cars=this.observableCars
	//this.observableCars.subscribe(
     //       cars => this.cars = cars,
       //     error =>  this.errorMessage = <any>error
		//	);
			console.log(this.rowData);
		//this.someProperty=this.carService.myData();
   }
   onAddRow() 
   {
     const req = this._http.post('https://reqres.in/api/users', {
      name: 'foo',
      job: 'bar'
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }
  onRemoveSelected()
  {
	  alert("Delete");
  }
  updateItems()
  {
	  alert("Update");
  }
} 

function createNewRowData() {
  var newData = {
    name: "Adam ",
    job:"test"
  };
  return newData;
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