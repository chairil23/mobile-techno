import {Component} from '@angular/core';
import {NavController, LoadingController} from 'ionic-angular';
import {CategoryService} from '../../services/category-service';
import {CategoriesPage} from "../categories/categories";
import {CategoryPage} from "../category/category";
import {ItemPage} from "../item/item";
import {CartPage} from "../cart/cart";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  public ip;
private posts: any; // <- I've added the private keyword 
  private searchQuery: string = '';
  private items: any; // <- items property is now of the same type as posts
  // list categories
  public categories: any;
  public subcategory: any;
  public viewType = 'list';
  public url: 'http://localhost:8000/uploads/'

  constructor(private http: Http, private loadingCtrl: LoadingController,public nav: NavController, public categoryService: CategoryService) {
    // this.categories = categoryService.getAll();
    this.ip = localStorage.getItem('ip');

     let loadingPopup = this.loadingCtrl.create({
      content: 'Loading posts...'
    });

    this.http.get('http://'+localStorage.getItem('ip')+'/api/products').map(res => res.json()).subscribe(data => {
        this.posts = data;
        this.initializeItems();
        // Hide the loading message
        loadingPopup.dismiss();
    });
  }


  // view a item
  viewItem(itemId) {
    this.nav.push(ItemPage, {id: itemId})
  }

    // switch to list view
  viewList() {
    this.viewType = 'list';
  }

  // swith to grid view
  viewGrid() {
    this.viewType = 'grid';
  }

  // get discount percent
  discountPercent(originPrice, salePrice) {
    return Math.round((salePrice - originPrice) * 100 / originPrice)
  }
  initializeItems() {
    this.items = this.posts;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.jdl_Pdk.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}

