# IonicDemoJsonRest
Ionic 2 Consuming JSON data from web service REST

# Overview
Ionic is an open-source SDK framework for building and deploying hybrid mobile apps for Android, iOS and Windows platforms. You can use the standard web technologies that you're already familiar with (HTML, CSS/SASS, JS) to build a single app that's usable across multiple platforms [Read more](https://ionicframework.com/getting-started/).

This example, we will use the service rest  online [JSONPlaceholder](https://jsonplaceholder.typicode.com/). 

# Prerequisites

1.	**Install NodeJs**
2.	**Installing Ionic & Cordova** <br>
``` npm install -g ionic cordova ```

## Starting your first Ionic 2 project

``` ionic start IonicDemoJsonRest blank --v2 ```


## Create REST service API call

``` ionic start IonicDemoJsonRest blank --v2 ```


Go to this newly created folder.<br>
``` cd IonicDemoJsonRest/ ```

add a provider <br>
```ionic g provider Service ```

Add providers tag in app.module.ts

Then add in provider @NgModule.

### Service.ts 
```javascript

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
```
-	We use **Angular’s http** object to access the REST services.
-	The Angular 2 http object methods (get, post, put, etc.) don’t return Promises: they return **Observables** from the RxJS library.
-	The **Observable.map()** function is used to transform the response in a format easily consumable by the observer.
-	**import 'rxjs/add/operator/map';** and **import 'rxjs/add/operator/catch';** adds all the operators to Observable (map, catch, etc).

In this example we use observable. 

* promise:
  * returns a single value
  * not cancellable
* observable
  * works with multiple values over time
  * cancellable
  * supports map, filter, reduce and similar operators
  * proposed feature for ES 2016
  * use Reactive Extensions (RxJS)
  * an array whose items arrive asynchronously over time

### call service in home page
#### home.html

```html
<ion-header>
  <ion-navbar>
    <ion-title>
      Ionic Blank
    </ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
<ion-list>
    <ion-item *ngFor="let user of newsData">      
     <span>  {{user.name}} - {{user.username}}</span>
    </ion-item>
  </ion-list>
</ion-content>
```
#### Call service in home.ts

```javascript
users() {
 this.api.getUsers().subscribe(data => {
    console.log(data);
 //alert(JSON.stringify(data));
     this.newsData=data;
    
  }, (err) => {
    console.log(err);
  });
}
```
