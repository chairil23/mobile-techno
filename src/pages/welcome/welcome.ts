import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {LoginPage} from '../login/login';
import {RegisterPage} from "../register/register";
import {ApiProvider} from '../../providers/api/api';
import {UserService} from '../../services/user-service'


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  public ip: string;

  constructor(public nav: NavController, public apiProvider: ApiProvider, public userService: UserService) {
  }

  // go to login page
  login() {
    this.nav.push(LoginPage);
  }

  set(){
    this.apiProvider.ip = this.ip;
    this.userService.ip = this.ip;
    console.log(this.userService.ip);
    console.log(this.apiProvider.ip);
    localStorage.setItem('ip', this.ip);
  }

  // go to register page
  register() {
    this.nav.push(RegisterPage);
  }
}
