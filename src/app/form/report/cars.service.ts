import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Car } from './car';

@Injectable()
export class CarService {
    url='http://localhost:4200/assets/data/cars.json';
    constructor(private http:Http) { }
    getCarsWithObservable(): Observable<Car[]> {
        return this.http.get(this.url)
	        .map(this.extractData)
	        .catch(this.handleErrorObservable);
    }
    getCarsWithPromise(): Promise<Car[]> {
        return this.http.get(this.url).toPromise()
	    .then(this.extractData)
	    .catch(this.handleErrorPromise);
    }
    private extractData(res: Response) {
		//let body = res.json();
		let body = [
 { make: 'Toyota', model: 'Celica', price: 35000 },
 { make: 'Ford', model: 'Mondeo', price: 32000 },
 { make: 'Porsche', model: 'Boxter', price: 72000 }
];
        return body;
    }
    private handleErrorObservable (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.message || error);
    }
    private handleErrorPromise (error: Response | any) {
	console.error(error.message || error);
	return Promise.reject(error.message || error);
    }	
} 