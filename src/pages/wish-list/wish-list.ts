import {Component} from '@angular/core';
import {NavController, ModalController, AlertController} from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import {ItemService} from '../../services/item-service';
import {ItemPage} from "../item/item";

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-wish-list',
  templateUrl: 'wish-list.html'
})
export class WishListPage {
  // list items of this category
  public ip;

public viewType = 'list';
public wist: any;
public _subtotal: any;
  constructor(public alerCtrl: AlertController,public modalCtrl: ModalController,public nav: NavController, public itemService: ItemService, public apiProvider: ApiProvider) {
    // get list items
    this.ip = localStorage.getItem('ip');
    this.apiProvider.getWist().then((data) => {
      this.wist = data;
      console.log(data, 'cart');
    }).catch((err) => {
      console.log(err);
    });
    this.getWist();
  }
   getWist() {
    console.log('getWist')
  }

  // view a item
  viewItem(itemId) {
    this.nav.push(ItemPage, {id: itemId})
  }

  // get discount percent
  discountPercent(originPrice, salePrice) {
    return Math.round((salePrice - originPrice) * 100 / originPrice)
  }

  // remove item from wish list
  remove(index) {
    this.wist.splice(index, 1);
  }

     viewList() {
    this.viewType = 'list';
  }

  // swith to grid view
  viewGrid() {
    this.viewType = 'grid';
  }

  doConfirm() {
    let confirm = this.alerCtrl.create({
      message: 'Produk Berhasil dimasukan ke Keranjang Belanja',
      buttons: [
        {
          text: 'Oke',
          handler: () => {
            console.log('Lanjutkan Belanja');
          }
        }
      ]
    });
    confirm.present()
  }

}
