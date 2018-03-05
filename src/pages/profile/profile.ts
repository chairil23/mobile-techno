import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})

export class ProfilePage {
  public username;
  email = 'rani@mail.com';  
  phone = '098099009999';
  jk = 1;
  myDate = 15/12/1994;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = localStorage.getItem('username');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
