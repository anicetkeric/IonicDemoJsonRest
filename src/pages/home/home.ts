import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {Service} from '../../providers/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

newsData:any;
loading:any;

  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, private api:Service) {
    
this.loading = this.loadingCtrl.create({
  content: `
  <ion-spinner ></ion-spinner>`
});

this.users();

  }


users() {
 this.api.getUsers().subscribe(data => {
    console.log(data);
 //alert(JSON.stringify(data));
     this.newsData=data;
    
  }, (err) => {
    console.log(err);
  });
}
}
