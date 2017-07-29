import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

	public id;

  constructor(public navCtrl: NavController,public navParams: NavParams) {
  		this.id = navParams.get("id");
  }
}