import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { RegisterPage } from '../register/register';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
   constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  login = {};
  doLogin(loginForm)
  {
  	if(loginForm.form.valid)
	  	console.log(loginForm);
  }
    openPage(page) {
       this.navCtrl.setRoot(RegisterPage,{id:"Hello"});
    }
}
