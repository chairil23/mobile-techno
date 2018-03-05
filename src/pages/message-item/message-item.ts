import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the MessageItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message-item',
  templateUrl: 'message-item.html',
})

export class MessageItemPage {
  @ViewChild(Content) content: Content;
  message: any;
  messages: any;
  data = {
    message: '',
    image: ''
  };
  list=new Array<Object>();
  public ip;
  user_id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.ip = localStorage.getItem('ip');
    this.user_id = localStorage.getItem('user_id');
    this.user_id = parseInt(this.user_id);
    this.message = this.navParams.get('message');
    this.apiProvider.message(this.message.id).then(data => {
      this.messages = data;
      this.messages.forEach(element => {
        this.list.push(element);
      });
      console.log(this.messages)
    }).catch(err => {
      console.log(err);
    });
    
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.content.scrollToBottom(300);//300ms animation speed
    }, 1000);
  }

  perubahan(message) {
    let form ={
      to_user_id: message.fr_user_id,
      order_id: message.order_id,
      message: 'desain ini butuh perubahan',
      image: message.images
      
    }
    console.log(message.images);
    this.apiProvider.perubahan(form).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    })
  }

  sendMessage() {
    console.log(this.message)
    let data = {
      to_user_id: this.message.freelancer_id,
      order_id: this.message.id,
      message: this.data.message,
      images: this.data.image
    }
    this.apiProvider.sendMessage(data).then(res =>  {
      console.log(res)
      this.list.push(res);
      this.data = {
        message: '',
        image: ''
      }
    }).catch(err => {
      console.log(err);
    })

    setTimeout(() => {
      this.content.scrollToBottom(300);//300ms animation speed
    }, 1000);
  }



}
