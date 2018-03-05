import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {CartService} from '../../services/cart-service';
import {MyOrderPage} from "../my-order/my-order";
import { ApiProvider } from '../../providers/api/api';
import {CheckoutPage} from '../checkout/checkout'
import { CheckType } from '@angular/core/src/view';
import {ModalItemOptionPage} from '../modal-item-option/modal-item-option'

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  public cart: any;
  public _total: number;
  public _subtotal: any;
  // public kurir: string;
  public viewType = 'list';
  items= [
    {
      code: 'tiki',
      name: 'Citra Van Titipan Kilat (TIKI)'
    },
    {
      code: 'jne',
      name: 'Jalur Nugraha Ekakurir (JNE)'
    },
    {
      code: 'pos',
      name: 'POS Indonesia (POS)'
    }
  ]
  kurir= 'jne'
  service= {
    cost: [
      {
        value: '',
        etd: '',
        note: ''
      }
    ],
    service: '',
    descriptions: ''
  }
  jKurir: any;
  public ip;

  constructor(public nav: NavController, public cartService: CartService, public apiProvider: ApiProvider) {
    this.ip = localStorage.getItem('ip');
    // set cart data
    // this.cart = cartService.getAll();
    this.apiProvider.getCart().then((data) => {
      this.cart = data;
      this.subTotal = this.subTotal;
      // console.log(data, 'cart');
    }).catch((err) => {
      // console.log(err);
    });
    this.getCart();

      
  }

  getCart() {
    console.log('getcart')
  }

  // remove item
  remove(itemIndex, id) {
    this.apiProvider.delItem(id).then(data =>{
      this.cart.splice(itemIndex, 1);
      // console.log(data);
    }).catch(err => {
      // console.log(err);
    })
    
  }

  // place order
  checkout() {
    console.log(this.cart, 'asdsad');
   
    this.nav.push(ModalItemOptionPage, {cart: this.cart})
    
    
    // this.nav.setRoot(MyOrderPage, {cart: this.cart});

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

  total() {
    this._total = this._subtotal + 20000;
    
  }

     viewList() {
    this.viewType = 'list';
  }

  // swith to grid view
  viewGrid() {
    this.viewType = 'grid';
  }

    // getShipping() {
    //   this.apiProvider.shipping(this.kurir).then(data => {
    //     this.service = data
    //   })
    // }
}
