import {Component} from '@angular/core';
import {NavController, NavParams, ViewController, ToastController} from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";
import {ItemService} from '../../services/item-service';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-order-confirm',
  templateUrl: 'order-confirm.html'
})
export class OrderConfirmPage {

   public item: any;
   public value: any;
   public form = {
    product_id: '',
    kuantitas: 1,
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
    no_telpon: null,
    alamat: '',
    email: '',
    jabatan: '',
    material: '',
    logo: '',
    berat: '',
    harga: '',
    subcategory_id: ''
   };
   public materials;

  constructor(public nav: NavController, public itemService: ItemService, public navParams: NavParams,
              public viewCtrl: ViewController, public toastCtrl: ToastController,
            public apiProvider: ApiProvider) {
    this.item = navParams.get('item');
    this.form.subcategory_id = this.item.subcategory_id;
    this.form.product_id = this.item.id 
    this.apiProvider.getMaterial(this.item.subcategory_id).then(data => {
      this.materials = data[0];
      console.log(this.materials)
    }).catch(err => {
      console.log(err);
    })
    // this.item.option_price = 0;
  }

  // choose a option
  // chooseOption(optionGroup, option) {
  //   for (let i = 0; i < optionGroup.options.length; i++) {
  //     optionGroup.options[i].active = false;
  //   }

  //   option.active = true;
  //   optionGroup.currentOption = option;

  //   // recalculate price
  //   this.calculatePrice();
  // }

  // calculate item price
  // calculatePrice() {
  //   this.item.option_price = 0;
  //   for (let i = 0; i < this.item.option_groups.length; i++) {
  //     if (this.item.option_groups[i].currentOption)
  //       this.item.option_price += this.item.option_groups[i].currentOption.price;
  //   }
  // }

  // add to card
  // addCart(item) {
  //   let toast = this.toastCtrl.create({
  //     message: 'Item added to card',
  //     duration: 500,
  //     position: 'middle'
  //   });

  //   toast.present();
  // }

  // buy now
  // buy(item) {

  // }

  // close modal
  kertas(){
    let m = [
      
    ];
    
    if(this.materials) {
      this.materials.materials.forEach(x => {
        let k = m.find(element =>  element.jns_kertas === x.jns_kertas);
        // console.log(x, m, 'materials')
        if(!k) {  
          // console.log('yes')
          m.push(x);
        }
      });
    }
    // console.log(m);
    return m;
  }

  material(){
    let m = [
      
    ];
    
    if(this.materials) {
      this.materials.materials.forEach(x => {
        let k = m.find(element =>  element.jns_material === x.jns_material);
        // console.log(x, m, 'materials')
        if(!k) {  
          // console.log('yes')
          m.push(x);
        }
      });
    }
    // console.log(m);
    return m;
  }

  ukuran(){
    let m = [
      
    ];
    
    if(this.materials) {
      this.materials.materials.forEach(x => {
        let k = m.find(element =>  element.ukuran === x.ukuran);
        // console.log(x, m, 'materials')
        if(!k) {  
          // console.log('yes')
          m.push(x);
        }
      });
    }
    // console.log(m);
    return m;
  }

  modelBantal(){
    let m = [
      
    ];
    
    if(this.materials) {
      this.materials.materials.forEach(x => {
        let k = m.find(element =>  element.model_bantal === x.model_bantal);
        // console.log(x, m, 'materials')
        if(!k) {  
          // console.log('yes')
          m.push(x);
        }
      });
    }
    // console.log(m);
    return m;
  }

  warna(){
    let m = [
      
    ];
    
    if(this.materials) {
      this.materials.materials.forEach(x => {
        let k = m.find(element =>  element.warna === x.warna);
        // console.log(x, m, 'materials')
        if(!k) {  
          // console.log('yes')
          m.push(x);
        }
      });
    }
    // console.log(m);
    return m;
  }

  modelCetak(){
    let m = [
      
    ];
    
    if(this.materials) {
      this.materials.materials.forEach(x => {
        let k = m.find(element =>  element.jns_finishing === x.jns_finishing);
        // console.log(x, m, 'materials')
        if(!k) {  
          // console.log('yes')
          m.push(x);
        }
      });
    }
    // console.log(m);
    return m;
  }

  sisi(){
    let m = [
      
    ];
    
    if(this.materials) {
      this.materials.materials.forEach(x => {
        let k = m.find(element =>  element.sisi === x.sisi);
        // console.log(x, m, 'materials')
        if(!k) {  
          // console.log('yes')
          m.push(x);
        }
      });
    }
    // console.log(m);
    return m;
  }

  bahan(){
    let m = [
      
    ];
    
    if(this.materials) {
      this.materials.materials.forEach(x => {
        let k = m.find(element =>  element.bahan === x.bahan);
        // console.log(x, m, 'materials')
        if(!k) {  
          // console.log('yes')
          m.push(x);
        }
      });
    }
    // console.log(m);
    return m;
  }

  jilid(){
    let m = [
      
    ];
    
    if(this.materials) {
      this.materials.materials.forEach(x => {
        let k = m.find(element =>  element.tipe_jilid === x.tipe_jilid);
        // console.log(x, m, 'materials')
        if(!k) {  
          // console.log('yes')
          m.push(x);
        }
      });
    }
    // console.log(m);
    return m;
  }

  mug(){
    let m = [
      
    ];
    
    if(this.materials) {
      this.materials.materials.forEach(x => {
        let k = m.find(element =>  element.jns_mug === x.jns_mug);
        // console.log(x, m, 'materials')
        if(!k) {  
          // console.log('yes')
          m.push(x);
        }
      });
    }
    // console.log(m);
    return m;
  }

  kain(){
    let m = [
      
    ];
    
    if(this.materials) {
      this.materials.materials.forEach(x => {
        let k = m.find(element =>  element.jns_mug === x.jns_mug);
        // console.log(x, m, 'materials')
        if(!k) {  
          // console.log('yes')
          m.push(x);
        }
      });
    }
    // console.log(m);
    return m;
  }

  cetakDepan(){
    let m = [
      
    ];
    
    if(this.materials) {
      this.materials.materials.forEach(x => {
        let k = m.find(element =>  element.cetak_depan === x.cetak_depan);
        // console.log(x, m, 'materials')
        if(!k) {  
          // console.log('yes')
          m.push(x);
        }
      });
    }
    // console.log(m);
    return m;
  }  

  cetakBelakang(){
    let m = [
      
    ];
    
    if(this.materials) {
      this.materials.materials.forEach(x => {
        let k = m.find(element =>  element.cetak_depan === x.cetak_depan);
        // console.log(x, m, 'materials')
        if(!k) {  
          // console.log('yes')
          m.push(x);
        }
      });
    }
    // console.log(m);
    return m;
  }  

  cetakLengan(){
    let m = [
      
    ];
    
    if(this.materials) {
      this.materials.materials.forEach(x => {
        let k = m.find(element =>  element.cetak_depan === x.cetak_depan);
        // console.log(x, m, 'materials')
        if(!k) {  
          // console.log('yes')
          m.push(x);
        }
      });
    }
    // console.log(m);
    return m;
  }  

  finishing(){
    let m = [
      
    ];
    
    if(this.materials) {
      this.materials.materials.forEach(x => {
        let k = m.find(element =>  element.jns_finishing === x.jns_finishing);
        // console.log(x, m, 'materials')
        if(!k) {  
          // console.log('yes')
          m.push(x);
        }
      });
    }
    // console.log(m);
    return m;
  }

  simpan (){
    // console.log(this.form);
    this.viewCtrl.dismiss(this.form);
  }

  changed($event){
    this.apiProvider.getValue(this.form).then(data => {
      this.value = data;
      this.form.berat = this.value.berat;
      this.form.harga = this.value.harga;
      console.log(this.value);
    }).catch(err => {
      console.log(err);
    })
  }

  closeModal() {
    this.viewCtrl.dismiss(true);
  }
}
