import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  public cart: any;
  public ip;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ip = localStorage.getItem('ip');
    this.cart = this.navParams.get('cart');
    console.log(this.cart, 'cartvv');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  option(item){
    if(item) {
      let array = []
      if (item.jenis_cetak) {
        array.push(item.jenis_cetak)
      }
      if (item.jenis_kertas) {
        array.push(item.jenis_kertas)
      }
      if (item.bentuk) {
        array.push(item.bentuk)
      }
      if (item.ukuran) {
        array.push(item.ukuran)
      }
      if (item.jilid) {
        array.push(item.jilid)
      }
      if (item.lembar) {
        array.push(item.lembar)
      }
      if (item.material) {
        array.push(item.material)
      }
      if (item.model) {
        array.push(item.model)
      }
      if (item.bahan) {
        array.push(item.bahan)
      }
      if (item.sisi) {
        array.push(item.sisi)
      }
      if (item.kain) {
        array.push(item.kain)
      }
      if (item.cetak_belakang) {
        array.push(item.cetak_belakang)
      }
      if (item.cetak_depan) {
        array.push(item.cetak_depan)
      }
      if (item.cetak_lengan_kanan) {
        array.push(item.cetak_lengan_kanan)
      }
      console.log(array.join(', '))
      // console.log(item, 'option')
      return array.join(',  ')
    }
  }

}
