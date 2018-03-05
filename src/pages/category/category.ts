import {Component} from '@angular/core';
import {NavController, ActionSheetController, ModalController} from 'ionic-angular';

import {ItemService} from '../../services/item-service';
import {CategoryService} from '../../services/category-service';
import {ModalFilterPage} from "../modal-filter/modal-filter";
import {ItemPage} from "../item/item";
import {CartPage} from "../cart/cart";
import {ApiProvider} from "../../providers/api/api"
import { NavParams } from 'ionic-angular/navigation/nav-params';

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {
  // list items of this category
  public ip;
  public items: any;

  // category info
  public category: any;

  // view type
  public viewType = 'list';

  // sort by
  public sortBy = 'Best Match';

  public subcategory: any;

  public id;

  constructor(public nav: NavController, public itemService: ItemService, public categoryService: CategoryService,
              public modalCtrl: ModalController, public actionSheetCtrl: ActionSheetController, public apiProvider: ApiProvider,
              public navParams: NavParams) {
                this.ip = localStorage.getItem('ip');
    // get list items of a category as sample
    // this.items = itemService.getByCategory(1);

    // set category info
    // this.category = categoryService.getItem(1);
    this.id = navParams.get("id");

    this.getSub(this.id);
  }

  getSub(id) {
    this.apiProvider.getSubProduct(id).then(data => {
      this.subcategory=data;
      console.log(this.subcategory);
    });
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

  // view a item
  viewItem(itemId) {
    this.nav.push(ItemPage, {id: itemId})
  }

  // view cart
  goToCart() {
    this.nav.setRoot(CartPage);
  }
}
