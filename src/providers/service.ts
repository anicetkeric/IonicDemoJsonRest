import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Service {

public SERVICE_URL='https://jsonplaceholder.typicode.com';

  constructor(public http: Http) {
    console.log('Hello Service Provider');
  }


 getUsers(){
          let method = '/users';
            return this.http.get(this.SERVICE_URL+method)
            .map(res =>(res.json()))
            .catch(this.handleError);
}

    handleError(error) {
        console.log('handleError(error) '+error+' *****');
        return Observable.throw(error || 'Server error');
    }


}
