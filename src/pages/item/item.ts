import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {ItemService} from '../../services/item-service';
import {ModalItemOptionPage} from "../modal-item-option/modal-item-option";
import {ApiProvider} from "../../providers/api/api";
import { NavParams } from 'ionic-angular/navigation/nav-params';
import {UlasanPage} from '../ulasan/ulasan';
import {OrderConfirmPage} from "../order-confirm/order-confirm";


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {
  public ip;
  // item info
  public option;
  public user_id;
  public products: any;
  public item: any;
  public switch = 'ulasan';
  public id;
  public ulasan: any;
  public rate: Object;
  public images: any;
   form= {
    product_id: '',
    kuantitas: '',
    jenis_kertas: '',
    model: '',
    kain: '',
    ukuran: '',
    warna: '',
    jenis_cetak: '',
    bahan: '',
    sisi: '',
    jilid: '',
    lembar: '',
    cetak_depan: '',
    cetak_belakang: '',
    cetak_lengan_kanan: '',
    cetak_lengan_kiri: '',
    kaos_metode: '',
    nama: '',
    nama_perusahaan: '',
    no_telpon: '',
    alamat: '',
    email: '',
    jabatan: '',
    material: '',
    logo: ''
  };
  finishing= [
    {text: 'Laminating Glossy'},
    {text: 'Embosse'}
  ]
    
  
  quantity: Array<Object>;
  jenis_kertas: Array<Object>;
  
  

  constructor(public nav: NavController, public itemService: ItemService, 
    public modalCtrl: ModalController, public apiProvider: ApiProvider, public navParams: NavParams) {
      this.ip = localStorage.getItem('ip')
    // get the first item as sample data
    // this.item = itemService.getItem(1);
    this.user_id = localStorage.getItem('user_id');
    this.quantity= [
      {text: 50},
      {text: 100}
    ]
  
    this.jenis_kertas= [
      {text: 'Standard'},
      {text: 'Extra Fancy'}
    ]
    this.id = navParams.get("id");

    this.getItem(this.id);
    this.form.product_id = this.id
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdduserPage');
  }

  onChange(){
    console.log(this.form.kuantitas);
  }

  addToCart() {
    this.apiProvider.postToCart(this.form).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }

  addToWist(){
    this.apiProvider.postToWist(this.id).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    });
  }


  getItem(id) {
    this.apiProvider.getProduct(id).then(data =>{
      this.item = data;
      this.images = this.item.images;
      this.apiProvider.rate(this.item.freelancer_id).then(data => {
        this.rate = data;
      }).catch(err => {
        console.log(err);
      })
      console.log(this.images);
      this.apiProvider.getUlasan(this.item.id).then(data => {
        this.ulasan = data;
        console.log(this.ulasan);
      }).catch(err =>  {
        console.log(err);
      })
      this.apiProvider.productFreelancer(this.item.freelancer_id).then(data => {
        this.products = data;
      }).catch(err => {
        console.log(err);
      })
    }).catch(err => {
      console.log(err);
    });
  }

  // add or remove item on wish list
  toggleWishList(item) {
    item.on_wish_list = !item.on_wish_list;
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
    viewOption(item) {
    this.nav.push(ModalItemOptionPage, {item: item})
  }

  tulisUlasan(id){
    let modal = this.modalCtrl.create(UlasanPage, {id: id});
    modal.onDidDismiss(data => {
      if (data) {
        this.ulasan = data;
      }
    })
    modal.present();
  }

  valid (){
    if(this.ulasan) {
      let user = this.ulasan.find(x => x.user_id === this.user_id)
      if(user) {
        return true;
      } else {
        return false;
      }
    }
  }

  viewItem(itemId) {
    this.nav.push(ItemPage, {id: itemId})
  }

  showOptions(item) {
    console.log('hai');
    // show modal
    let modal = this.modalCtrl.create(OrderConfirmPage, {item: item});
    // listen for modal close
    modal.onDidDismiss(data => {
      if (data) {
       this.option = data;
      }
    });

    modal.present();
  }

  options(){
    {
      // id: '',
      // subcategory_id: '',
      // satuan: '',
      // jlh_pesanan: '',
      // jns_finishing: '',
      // harga: '',
      // jns_kertas: '',
      // bentuk: '',
      // ukuran: '',
      // tipe_jilid: '',
      // jlh_lembar: '',
      // jns_material: '',
      // model_pegangan: '',
      // bahan: '',
      // sisi: '',
      // jns_mug: '',
      // model_bantal: '',
      // jenis_kain: '',
      // cetak_belakang: '',
      // cetak_depan: '',
      // cetak_lengan: '',
      // cetak_kiri: '',
      // berat: '',
      // created_at: '',
      // updated_at: ''
    }
    if(this.option) {
      let array = []
      if (this.option.jenis_cetak) {
        array.push(this.option.jenis_cetak)
      }
      if (this.option.jenis_kertas) {
        array.push(this.option.jenis_kertas)
      }
      if (this.option.bentuk) {
        array.push(this.option.bentuk)
      }
      if (this.option.ukuran) {
        array.push(this.option.ukuran)
      }
      if (this.option.jilid) {
        array.push(this.option.jilid)
      }
      if (this.option.lembar) {
        array.push(this.option.lembar)
      }
      if (this.option.material) {
        array.push(this.option.material)
      }
      if (this.option.model) {
        array.push(this.option.model)
      }
      if (this.option.bahan) {
        array.push(this.option.bahan)
      }
      if (this.option.sisi) {
        array.push(this.option.sisi)
      }
      if (this.option.kain) {
        array.push(this.option.kain)
      }
      if (this.option.cetak_belakang) {
        array.push(this.option.cetak_belakang)
      }
      if (this.option.cetak_depan) {
        array.push(this.option.cetak_depan)
      }
      if (this.option.cetak_lengan_kanan) {
        array.push(this.option.cetak_lengan_kanan)
      }
      console.log(array.join(', '))
      console.log(this.option, 'option')
      return array.join(',  ')
    }
  }

  beli() {
    console.log(this.option);

    this.apiProvider.postToCart(this.option)
  }
}
