import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CategoryService} from '../../services/category-service';
import {ItemService} from '../../services/item-service';
import {CategoriesPage} from "../categories/categories";
import {CategoryPage} from "../category/category";
import {ItemPage} from "../item/item";
import {SearchPage} from "../search/search";
import {CartPage} from "../cart/cart";
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // list slides for slider
  public ip;
  public slides = [
    {
      src: 'assets/img/slide_1.jpg'
    },
    {
      src: 'assets/img/slide_2.jpg'
    },
    {
      src: 'assets/img/slide_3.jpg'
    }
  ];

  // list categories
  public categories: any;
  public subcategory: any;
  public image: any;
public viewType = 'grid';
  // list of items
  public items: any;
  public url: 'http://localhost:8000/uploads/'

  constructor(public nav: NavController, public categoryService: CategoryService, public itemService: ItemService ) {
    // this.categories = categoryService.getAll();
    this.ip = localStorage.getItem('ip');

    itemService.getAll().subscribe((response) => {
      this.subcategory = response
      console.log(this.subcategory);
    })
  }

  // view categories
  viewCategories() {
    this.nav.push(CategoriesPage);
  }

  // view a category
  viewSub(id) {
    this.nav.push(CategoryPage,{id: id})
  }


  // view a item
  viewItem(itemId) {
    this.nav.push(ItemPage, {id: itemId})
  }

  // go to search page
  goToSearch() {
    this.nav.push(SearchPage);
  }

  // view cart
  goToCart() {
    this.nav.setRoot(CartPage);
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
}