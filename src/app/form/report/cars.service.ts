import { Injectable } from '@angular/core';
import { Http,Response,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/catch';
//import 'rxjs/add/operator/toPromise';
//import { Car } from './car';

@Injectable()
export class CarService {
	
	private headers:Headers;
	
    constructor(private _http:Http)
	{
		this.headers= new Headers();
		this.headers.append('Content-Type','application/json');
		this.headers.append('Accept','application/json');
		this.headers.append('Access-Control-Allow-Origin','*');
	}	
	
	
	public getCars(): any
	{
		return this._http.get('https://reqres.in/api/users?page=2')
		.map((response:Response)=>response.json());
		
	}
	//this.cars= this.fetchData();
	//console.log("service 2:"+this.cars);
	/*myData()
	{
		return 'This is my data!';
	}*/
}	
    /*getCarsWithObservable(): Observable<Car[]> {
        return this.http.get(this.url)
	        .map(this.extractData)
	        .catch(this.handleErrorObservable);
    }*/
    /*getCarsWithPromise(): Promise<Car[]> {
        return this.http.get(this.url).toPromise()
	    .then(this.extractData)
	    .catch(this.handleErrorPromise);
    }
    private extractData(res: Response) {
		//console.log("Response:"+res);
		//console.log("/n Body:"+res.config);
		//console.log("/n status ok:"+res.status);

		//let body = res.json(); ----this is procedure for response json conversion but //some json parse problem is there ..dont know why check with this..
		// time being use hardcoded json format
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
*/