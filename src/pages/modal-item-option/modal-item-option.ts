import {Component} from '@angular/core';
import {NavController, ModalController, AlertController} from 'ionic-angular';
import {ItemService} from '../../services/item-service';
import {OrderConfirmPage} from "../order-confirm/order-confirm";
import {ApiProvider} from "../../providers/api/api";
import { NavParams } from 'ionic-angular/navigation/nav-params';
import {HomePage} from '../home/home'



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-modal-item-option',
  templateUrl: 'modal-item-option.html'
})
export class ModalItemOptionPage {
  // current item
public biaya: any;
public ip;
public order= {
  bank_id: 0,
  address: '',
  city_id: '',
  city_name: '',
  province: '',
  postal_code: '',
  kurir: '',
  service: '',
  biaya_kurir: '',
  items: []
};
 public item:any;
 public cart: any;
 public alamat: any;
 public kurir: any;
 public service: any;
public viewType = 'list';
//  public url: 'http://localhost:8000/uploads/'
  constructor(public alerCtrl: AlertController,public nav: NavController, public itemService: ItemService, 
    public modalCtrl: ModalController, public apiProvider: ApiProvider, public navParams: NavParams) {
      this.ip = localStorage.getItem('ip');
    this.item = navParams.get("item");
    this.cart = this.navParams.get('cart');
    console.log(this.item,"ini item")
    this.apiProvider.getAlamat().then(data => {
      this.alamat = data;
      console.log(this.alamat);
    }).catch(err => {
      console.log(err);
    })
  }

  buy() {
    this.order.bank_id = 1
    this.order.address = this.alamat.address
    this.order.city_id = this.alamat.city_id
    this.order.city_name = this.alamat.city_name
    this.order.postal_code = this.alamat.postal_code
    this.order.province = this.alamat.province
    this.order.kurir = this.kurir
    this.order.service =this.biaya.service
    this.order.biaya_kurir = this.biaya.cost[0].value
    this.order.items = this.cart
    this.apiProvider.order(this.order).then(data =>{
      console.log(data);
    }).catch(err => {
      console.log(err);
    })
    this.nav.setRoot(HomePage)
  }
  
  subTotal() {
    let total = 0;
    if (this.cart.length){
      this.cart.forEach(element => {
        total = total + ((element.product.harga_awal + element.harga) * element.kuantitas)    
        console.log(element.product.harga_awal, element.harga, element.kuantitas);  
      });
      // console.log(total, 'total');
      return total;
    }
  }

  change() {
    console.log(this.biaya);
  }
    
  changed(){
    let berat =0;
    if(this.cart){
      this.cart.forEach(element => {
        berat = berat + element.berat
      });
    }
    console.log(this.cart.berat,'berat', this.cart);
    this.apiProvider.shipping(berat, this.kurir).then(data => {
      this.service = data;
      console.log(this.service);
    }).catch(err => {
      console.log(err);
    })
  }

viewList() {
    this.viewType = 'list';
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

  // swith to grid view
  viewGrid() {
    this.viewType = 'grid';
  }

  // get item options group name
  getOptionGroupsName(item) {
    let optionGroups = [];
    for (let i = 0; i < item.option_groups.length; i++) {
      optionGroups.push(item.option_groups[i].name);
    }

    return optionGroups.join(',');
  }

  // make array with range is n
  range(n) {
    return new Array(n);
  }

  // open item option modal
  showOptions(item) {
    // show modal
    let modal = this.modalCtrl.create(OrderConfirmPage, {item: item});
    // listen for modal close
    modal.onDidDismiss(confirm => {
      if (confirm) {
        // apply filter here
      } else {
        // do nothing
      }
    });

    modal.present();
  }

doConfirm() {
    let confirm = this.alerCtrl.create({
      message: 'Produk Berhasil dimasukan ke Keranjang Belanja',
      buttons: [
        {
          text: 'Lanjutkan Belanja',
          handler: () => {
            console.log('Lanjutkan Belanja');
          }
        },
        {
          text: 'Bayar',
          handler: () => {
            console.log('Bayar');
          }
        }
      ]
    });
    confirm.present()
  }

}
