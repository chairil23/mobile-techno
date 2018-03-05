import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  // apiUrl = 'http://localhost:8000/api';
  public token: any; 
  public ip;
  apiUrl;
  

  constructor(public http: HttpClient, private storage: Storage) {
    this.ip = localStorage.getItem('ip');
    this.apiUrl='http://'+ this.ip+'/api' 
    this.storage.get('token').then(val => {
      this.token = val;
      console.log('storage get')
     }).catch(err => {
       console.log(err);
     });
    console.log(this.ip);
  }

  getToken(){
   
  }

  doLogin(form) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/login', JSON.stringify(form))
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
    })
  }
  
  getSubProduct(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/subcategory/'+id)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        })
    })
  }

  getProduct(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/productlist/'+id)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err)
        })
    })
  }

  postToCart(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/item', JSON.stringify(data), {
        headers: {'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'}
      }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    })
  }

    postToWist(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/item', JSON.stringify(data), {
        headers: {'Authorization': 'Bearer '+ localStorage.getItem('token'),
        'Content-Type': 'application/json'}
      }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    })
  }

  getCart() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/item', {
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      }).subscribe(res => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    });
  }

   getWist() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/item', {
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      }).subscribe(res => {
        resolve(res);
        console.log(res);
      }, err => {
        reject(err);
      });
    });
  }

  order(form) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/order', form, {
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }
  getTransaction() {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/transaction', {
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  shipping(berat, kurir) {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/cost/berat/' + berat + '/kurir/' + kurir, {
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    })
  }

  messageList () {
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/messages',{
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      })
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    }) 
  }
  message(id){
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/messages/'+id, {
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    })
  }
  
  sendMessage(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/sendmessage', data, { 
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      }).subscribe(res => {
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }

   getMaterial(subcategory_id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/material/'+subcategory_id)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        })
    })
  }
  cetakInfo (id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/message/cetak/' + id)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        })
    })
  }

  perubahan (data) {
    return new Promise (resolve => {
      this.http.post(this.apiUrl + '/message/perubahan', data, {
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      }).subscribe( data => {
        resolve(data);
      }, err => {
        console.log(err)
      })
    })
  }

  getUlasan (id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/ulasan/' +id, {
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      })
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        })
    })
  }

  postUlasan (data) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/ulasan/', data, {
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      }).subscribe (data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }

  productFreelancer (id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/products-freelancer_/' + id)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        })
    })
  }

  setuju (data) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/message/setuju/', data, {
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }
  
  rate (id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/rate/' + id)
        .subscribe(data =>{
          resolve(data);
        }, err => {
          console.log(err);
        })
    })
  }

  orderDiterima (id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/order/diterima/' + id)
        .subscribe(data => {
          resolve(data);
        }, err => {
          console.log(err);
        })
    })
  }

  getValue(data) {
    return new Promise(resolve => {
      this.http.post(this.apiUrl + '/material/', data, {
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      }).subscribe (data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }

  delItem(id) {
    return new Promise(resolve => {
      this.http.delete(this.apiUrl + '/item/' +id, {
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }

  getAlamat() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/user/alamat', {
        headers: {
          'Authorization': 'Bearer '+ localStorage.getItem('token'),
          'Content-Type': 'application/json'
        }
      })
        .subscribe(data => {
          resolve(data);
        }, err=> {
          console.log(err);
        })
    })
  }
  
}
