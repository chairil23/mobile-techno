import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

import {OrderService} from "../../services/order-service";
import { ApiProvider } from '../../providers/api/api';
import {PembayaranPage} from '../../pages/pembayaran/pembayaran'

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-my-order',
  templateUrl: 'my-order.html'
})
export class MyOrderPage {
  public ip
  // sample data
  public orders: any;
public viewType = 'list';
  constructor(public nav: NavController, public orderService: OrderService, public apiProvider: ApiProvider) {
    this.ip = localStorage.getItem('ip');
    // set sample data
    // this.orders = orderService.getAll();

    this.apiProvider.getTransaction().then(data => {
      this.orders = data;
      console.log(this.orders, 'my-order');
    }).catch(err => {
      console.log(err);
    })

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

  total (orders) {
    if(orders) {
      let total = 0;
      
      orders.forEach(element => {
        total = total +( (element.harga + element.product.harga_awal) * element.kuantitas)
      });

      return total;
    } else {
      return 0;
    }
  }

  pembayaran(order) {
    this.nav.push(PembayaranPage, {order: order})
  }

   viewList() {
    this.viewType = 'list';
  }

  // swith to grid view
  viewGrid() {
    this.viewType = 'grid';
  }
  
}
