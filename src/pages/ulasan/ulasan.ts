import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {ApiProvider} from '../../providers/api/api'

/**
 * Generated class for the UlasanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ulasan',
  templateUrl: 'ulasan.html',
})
export class UlasanPage {

  public rate;
  public form = {
    product_id: '',
    rate: 0,
    judul: '',
    komen: ''
  }
  public data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              public apiProvider: ApiProvider, public viewCtrl: ViewController) {
                this.form.product_id = this.navParams.get('id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UlasanPage');
  }

  onModelChange(e){
    
    this.form.rate = e;
    console.log(this.form.judul, this.form.rate);
  }

  send() {
    if (this.form.rate) {
      this.apiProvider.postUlasan(this.form).then(data => {
        this.data = data;
        this.viewCtrl.dismiss(this.data);
      }).catch(err => {
        console.log(err);
      })
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
