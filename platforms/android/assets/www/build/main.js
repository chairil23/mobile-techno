webpackJsonp([8],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_category__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {CategoryPage} from '../category/category';
// import {CartPage} from "../cart/cart";
// import {StatusBar} from '@ionic-native/status-bar';
// import {SplashScreen} from '@ionic-native/splash-screen';
// import {Platform} from 'ionic-angular';
/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CategoriesPage = (function () {
    function CategoriesPage(nav, categoryService) {
        // this.categories = categoryService.getAll();
        var _this = this;
        this.nav = nav;
        this.categoryService = categoryService;
        this.showLevel1 = null;
        this.showLevel2 = null;
        this.categoryService.getMenu()
            .subscribe(function (response) {
            _this.categories = response;
            console.log(_this.categories);
        });
    }
    CategoriesPage.prototype.toggleLevel1 = function (idx) {
        if (this.isLevel1Shown(idx)) {
            this.showLevel1 = null;
        }
        else {
            this.showLevel1 = idx;
        }
    };
    ;
    CategoriesPage.prototype.viewSub = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__category_category__["a" /* CategoryPage */], { id: id });
    };
    CategoriesPage.prototype.isLevel1Shown = function (idx) {
        return this.showLevel1 === idx;
    };
    ;
    CategoriesPage.prototype.goToCart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]);
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/categories/categories.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Categories</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="goToCart()">\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="categories">\n  <ion-list>\n    <ion-item *ngFor="let category of categories; let i=index" (click)="toggleLevel1(\'idx\'+i)" [ngClass]="{active: isLevel1Shown(\'idx\'+i)}">\n    <h4>\n    {{category.cat_name}} \n    <ion-icon color="success" item-right [name]="isLevel1Shown(\'idx\'+i) ? \'arrow-dropdown\' : \'arrow-dropright\'"></ion-icon>\n    </h4>\n    <ion-list *ngIf="isLevel1Shown(\'idx\'+i)">\n      <ion-item *ngFor="let sub of category.subcategories">\n        <h4 (click)="viewSub(sub.id)"> \n        {{sub.name}}\n        </h4>\n      </ion-item>\n    </ion-list>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/categories/categories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

// view category
// viewCategory(categoryId) {
//   this.nav.push(CategoryPage, {id: categoryId});
// }
// view cart
// goToCart() {
//   this.nav.setRoot(CartPage);
// }
//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_category_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_item__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cart_cart__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_navigation_nav_params__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CategoryPage = (function () {
    function CategoryPage(nav, itemService, categoryService, modalCtrl, actionSheetCtrl, apiProvider, navParams) {
        // get list items of a category as sample
        // this.items = itemService.getByCategory(1);
        this.nav = nav;
        this.itemService = itemService;
        this.categoryService = categoryService;
        this.modalCtrl = modalCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.apiProvider = apiProvider;
        this.navParams = navParams;
        // view type
        this.viewType = 'list';
        // sort by
        this.sortBy = 'Best Match';
        // set category info
        // this.category = categoryService.getItem(1);
        this.id = navParams.get("id");
        this.getSub(this.id);
    }
    CategoryPage.prototype.getSub = function (id) {
        var _this = this;
        this.apiProvider.getSubProduct(id).then(function (data) {
            _this.subcategory = data;
            console.log(_this.subcategory);
        });
    };
    // switch to list view
    CategoryPage.prototype.viewList = function () {
        this.viewType = 'list';
    };
    // swith to grid view
    CategoryPage.prototype.viewGrid = function () {
        this.viewType = 'grid';
    };
    // get discount percent
    CategoryPage.prototype.discountPercent = function (originPrice, salePrice) {
        return Math.round((salePrice - originPrice) * 100 / originPrice);
    };
    // view a item
    CategoryPage.prototype.viewItem = function (itemId) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__item_item__["a" /* ItemPage */], { id: itemId });
    };
    // view cart
    CategoryPage.prototype.goToCart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__cart_cart__["a" /* CartPage */]);
    };
    CategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-category',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/category/category.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ subcategory?.name }}</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="goToCart()">\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!--List of items-->\n  <ion-list no-margin class="list-full-border list-products"\n            [ngClass]="{\'grid\': viewType == \'grid\', \'list\': viewType == \'list\'}">\n    <ion-item class="product" *ngFor="let item of subcategory?.products" (click)="viewItem(item.id)">\n      <ion-thumbnail item-left>\n        <img src="http://localhost:8000/uploads/{{ item.images }}">\n      </ion-thumbnail>\n      <!--item\'s information-->\n      <div>\n        <div text-wrap>{{ item.jdl_Pdk }}</div>\n        <div>\n          <span ion-text color="danger" *ngIf="item.sale_price">{{ item.harga_awal | currency:\'Rp \':true }}</span>\n          <span ion-text color="danger" *ngIf="!item.sale_price">{{ item.harga_awal | currency:\'Rp \':true }}</span>\n        </div>\n        <div class="origin-price text-sm">\n          <span *ngIf="item.sale_price" class="text-decoration">{{ item.harga_awal | currency:\'Rp \':true }}</span>\n          <span *ngIf="item.sale_price" class="discount-rate" ion-text color="danger">{{ discountPercent(item.harga_awal, item.harga_awal) }}%</span>\n        </div>\n        <div class="bottom-info text-sm">\n          <span ion-text color="gray" class="pull-left" *ngIf="item.shipping == 0">Free shipping</span>\n          <span ion-text color="gray" class="pull-left" *ngIf="item.shipping != 0">Shipping: {{ item.harga_awal | currency:\'Rp \':true}}</span>\n          <span ion-text color="gray" class="pull-right">\n            2 Orders\n          </span>\n          <div class="clear"></div>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n\n<!--Footer buttons-->\n<ion-footer class="category">\n  <ion-toolbar position="bottom">\n    <!--filter button-->\n    <ion-buttons text-center start>\n      <button ion-button icon-left (click)="viewGrid()">\n        <ion-icon name="apps"></ion-icon>\n        Grid View\n      </button>\n    </ion-buttons>\n    <!--attribute button-->\n    <ion-buttons text-center end>\n      <button ion-button icon-left (click)="viewList()">\n        <ion-icon name="list"></ion-icon>\n        List View\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/category/category.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */], __WEBPACK_IMPORTED_MODULE_3__services_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular_navigation_nav_params__["a" /* NavParams */]])
    ], CategoryPage);
    return CategoryPage;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalItemOptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_confirm_order_confirm__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ModalItemOptionPage = (function () {
    function ModalItemOptionPage(alerCtrl, nav, itemService, modalCtrl, apiProvider, navParams) {
        var _this = this;
        this.alerCtrl = alerCtrl;
        this.nav = nav;
        this.itemService = itemService;
        this.modalCtrl = modalCtrl;
        this.apiProvider = apiProvider;
        this.navParams = navParams;
        this.order = {
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
        this.viewType = 'list';
        this.item = navParams.get("item");
        this.cart = this.navParams.get('cart');
        console.log(this.item, "ini item");
        this.apiProvider.getAlamat().then(function (data) {
            _this.alamat = data;
            console.log(_this.alamat);
        }).catch(function (err) {
            console.log(err);
        });
    }
    ModalItemOptionPage.prototype.buy = function () {
        this.order.bank_id = 1;
        this.order.address = this.alamat.address;
        this.order.city_id = this.alamat.city_id;
        this.order.city_name = this.alamat.city_name;
        this.order.postal_code = this.alamat.postal_code;
        this.order.province = this.alamat.province;
        this.order.kurir = this.kurir;
        this.order.service = this.biaya.service;
        this.order.biaya_kurir = this.biaya.cost[0].value;
        this.order.items = this.cart;
        this.apiProvider.order(this.order).then(function (data) {
            console.log(data);
        }).catch(function (err) {
            console.log(err);
        });
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    ModalItemOptionPage.prototype.subTotal = function () {
        var total = 0;
        if (this.cart.length) {
            this.cart.forEach(function (element) {
                total = total + ((element.product.harga_awal + element.harga) * element.kuantitas);
                console.log(element.product.harga_awal, element.harga, element.kuantitas);
            });
            // console.log(total, 'total');
            return total;
        }
    };
    ModalItemOptionPage.prototype.change = function () {
        console.log(this.biaya);
    };
    ModalItemOptionPage.prototype.changed = function () {
        var _this = this;
        var berat = 0;
        if (this.cart) {
            this.cart.forEach(function (element) {
                berat = berat + element.berat;
            });
        }
        console.log(this.cart.berat, 'berat', this.cart);
        this.apiProvider.shipping(berat, this.kurir).then(function (data) {
            _this.service = data;
            console.log(_this.service);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ModalItemOptionPage.prototype.viewList = function () {
        this.viewType = 'list';
    };
    ModalItemOptionPage.prototype.option = function (item) {
        if (item) {
            var array = [];
            if (item.jenis_cetak) {
                array.push(item.jenis_cetak);
            }
            if (item.jenis_kertas) {
                array.push(item.jenis_kertas);
            }
            if (item.bentuk) {
                array.push(item.bentuk);
            }
            if (item.ukuran) {
                array.push(item.ukuran);
            }
            if (item.jilid) {
                array.push(item.jilid);
            }
            if (item.lembar) {
                array.push(item.lembar);
            }
            if (item.material) {
                array.push(item.material);
            }
            if (item.model) {
                array.push(item.model);
            }
            if (item.bahan) {
                array.push(item.bahan);
            }
            if (item.sisi) {
                array.push(item.sisi);
            }
            if (item.kain) {
                array.push(item.kain);
            }
            if (item.cetak_belakang) {
                array.push(item.cetak_belakang);
            }
            if (item.cetak_depan) {
                array.push(item.cetak_depan);
            }
            if (item.cetak_lengan_kanan) {
                array.push(item.cetak_lengan_kanan);
            }
            console.log(array.join(', '));
            // console.log(item, 'option')
            return array.join(',  ');
        }
    };
    // swith to grid view
    ModalItemOptionPage.prototype.viewGrid = function () {
        this.viewType = 'grid';
    };
    // get item options group name
    ModalItemOptionPage.prototype.getOptionGroupsName = function (item) {
        var optionGroups = [];
        for (var i = 0; i < item.option_groups.length; i++) {
            optionGroups.push(item.option_groups[i].name);
        }
        return optionGroups.join(',');
    };
    // make array with range is n
    ModalItemOptionPage.prototype.range = function (n) {
        return new Array(n);
    };
    // open item option modal
    ModalItemOptionPage.prototype.showOptions = function (item) {
        // show modal
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__order_confirm_order_confirm__["a" /* OrderConfirmPage */], { item: item });
        // listen for modal close
        modal.onDidDismiss(function (confirm) {
            if (confirm) {
                // apply filter here
            }
            else {
                // do nothing
            }
        });
        modal.present();
    };
    ModalItemOptionPage.prototype.doConfirm = function () {
        var confirm = this.alerCtrl.create({
            message: 'Produk Berhasil dimasukan ke Keranjang Belanja',
            buttons: [
                {
                    text: 'Lanjutkan Belanja',
                    handler: function () {
                        console.log('Lanjutkan Belanja');
                    }
                },
                {
                    text: 'Bayar',
                    handler: function () {
                        console.log('Bayar');
                    }
                }
            ]
        });
        confirm.present();
    };
    ModalItemOptionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal-item-option',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/modal-item-option/modal-item-option.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Checkout</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content class=" common-bg">\n      <!--Choose shipping location-->\n      <div class="card">\n          <div class="card-header" padding>\n              Kurir:\n          </div>\n          <div>\n            <ion-item>\n              <ion-label>Jasa Kurir</ion-label>\n              <ion-select [(ngModel)]="kurir" (ionChange)="changed()">\n                <ion-label>Jasa Kurir</ion-label>\n                  <ion-option value="jne">Jalur Nugraha Ekakurir (JNE)</ion-option>\n                  <ion-option value="tiki">Citra Van Titipan Kilat (TIKI)</ion-option>\n                  <ion-option value="pos">POS Indonesia (POS)</ion-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>Service</ion-label>\n                <ion-select [(ngModel)]="biaya" *ngIf="service" (ionChange)="change()">\n                    <ion-label>POS Indonesia (POS)</ion-label>\n                    <ion-option *ngFor="let x of service.rajaongkir.results[0].costs" [value]="x">{{x.description}} ({{x.service}})</ion-option>\n                    \n                </ion-select> \n            </ion-item>\n                 \n          </div>\n          <div class="card-header" padding>\n            Shipping address:\n          </div>\n          <div padding>\n            <span ion-text color="secondary">{{alamat?.address}} {{alamat?.city_name}} {{alamat?.province}}</span>\n          </div>\n        </div> \n    <div *ngFor="let item of cart; let idx = index" >\n      <ion-list no-margin class="list-full-border list-products"\n                [ngClass]="{\'grid\': viewType == \'grid\', \'list\': viewType == \'list\'}">\n        <ion-item class="product">\n          <ion-thumbnail item-left *ngIf="item.product.images.length">\n            <img src="http://localhost:8000/uploads/{{ item.product.images[0].images }}" alt="{{ item.jdl_Pdk }}">\n          </ion-thumbnail>\n          <!--item\'s information-->\n          <div>\n            <div text-wrap>{{ item?.product.jdl_Pdk }}</div>\n            <div padding-bottom>\n                <span class="pull-left" ion-text color="danger">{{ item.harga + item.product.harga_awal | currency:\'Rp \':true }} </span>\n                <span class="pull-right" ion-text>  x {{item.kuantitas}}</span>\n                <div class="clear"></div>\n            </div>\n            <h6 text-wrap>\n              {{option(item)}}\n                <!-- <div class="input-qty">\n                  <span class="btn">\n                  <ion-icon name="ios-remove"></ion-icon>\n                  </span>\n                  <input type="text" [(ngModel)]="item.kuantitas">\n                  <span class="btn">\n                  <ion-icon name="ios-add"></ion-icon>\n                  </span>\n                  <div class="clear"></div>\n                </div>-->\n                <div class="pull-right bottom-info text-lg trash-btn">\n                  <ion-icon name="trash" color="gray" class="pull-right" (click)="remove(idx, item.id)"></ion-icon>\n                  <div class="clear"></div>\n                </div> \n            </h6>\n          </div>\n        </ion-item>\n      </ion-list>\n      </div>\n      <div class="card" margin-top>\n          <div class="card-footer" padding>\n            <div>\n              <span class="pull-left" ion-text color="gray">Subtotal</span>\n              <span class="pull-right" ion-text color="gray" *ngIf="cart">{{ subTotal()| currency:\'Rp \':true }}</span>\n              <div class="clear"></div>\n            </div>\n            <div>\n              <span class="pull-left" ion-text color="gray">Shipping</span>\n              <span class="pull-right" ion-text color="gray">{{ biaya?.cost[0].value | currency:\'Rp \':true }}</span>\n              <div class="clear"></div>\n            </div>\n          </div>\n        </div>\n    </ion-content>\n  \n  <ion-footer class="cart-footer" padding>\n    <ion-title>\n      <span ion-text color="gray">Total</span>\n      <br/>\n      <span class="bold" ion-text color="danger">{{ subTotal() + biaya?.cost[0].value| currency:\'Rp \':true }}</span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="buy()" color="danger">\n        Beli\n      </button>\n    </ion-buttons>\n  </ion-footer>\n  '/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/modal-item-option/modal-item-option.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__["a" /* NavParams */]])
    ], ModalItemOptionPage);
    return ModalItemOptionPage;
}());

//# sourceMappingURL=modal-item-option.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item_service__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var OrderConfirmPage = (function () {
    function OrderConfirmPage(nav, itemService, navParams, viewCtrl, toastCtrl, apiProvider) {
        var _this = this;
        this.nav = nav;
        this.itemService = itemService;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.apiProvider = apiProvider;
        this.form = {
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
        this.item = navParams.get('item');
        this.form.subcategory_id = this.item.subcategory_id;
        this.form.product_id = this.item.id;
        this.apiProvider.getMaterial(this.item.subcategory_id).then(function (data) {
            _this.materials = data[0];
            console.log(_this.materials);
        }).catch(function (err) {
            console.log(err);
        });
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
    OrderConfirmPage.prototype.kertas = function () {
        var m = [];
        if (this.materials) {
            this.materials.materials.forEach(function (x) {
                var k = m.find(function (element) { return element.jns_kertas === x.jns_kertas; });
                // console.log(x, m, 'materials')
                if (!k) {
                    // console.log('yes')
                    m.push(x);
                }
            });
        }
        // console.log(m);
        return m;
    };
    OrderConfirmPage.prototype.material = function () {
        var m = [];
        if (this.materials) {
            this.materials.materials.forEach(function (x) {
                var k = m.find(function (element) { return element.jns_material === x.jns_material; });
                // console.log(x, m, 'materials')
                if (!k) {
                    // console.log('yes')
                    m.push(x);
                }
            });
        }
        // console.log(m);
        return m;
    };
    OrderConfirmPage.prototype.ukuran = function () {
        var m = [];
        if (this.materials) {
            this.materials.materials.forEach(function (x) {
                var k = m.find(function (element) { return element.ukuran === x.ukuran; });
                // console.log(x, m, 'materials')
                if (!k) {
                    // console.log('yes')
                    m.push(x);
                }
            });
        }
        // console.log(m);
        return m;
    };
    OrderConfirmPage.prototype.modelBantal = function () {
        var m = [];
        if (this.materials) {
            this.materials.materials.forEach(function (x) {
                var k = m.find(function (element) { return element.model_bantal === x.model_bantal; });
                // console.log(x, m, 'materials')
                if (!k) {
                    // console.log('yes')
                    m.push(x);
                }
            });
        }
        // console.log(m);
        return m;
    };
    OrderConfirmPage.prototype.warna = function () {
        var m = [];
        if (this.materials) {
            this.materials.materials.forEach(function (x) {
                var k = m.find(function (element) { return element.warna === x.warna; });
                // console.log(x, m, 'materials')
                if (!k) {
                    // console.log('yes')
                    m.push(x);
                }
            });
        }
        // console.log(m);
        return m;
    };
    OrderConfirmPage.prototype.modelCetak = function () {
        var m = [];
        if (this.materials) {
            this.materials.materials.forEach(function (x) {
                var k = m.find(function (element) { return element.jns_finishing === x.jns_finishing; });
                // console.log(x, m, 'materials')
                if (!k) {
                    // console.log('yes')
                    m.push(x);
                }
            });
        }
        // console.log(m);
        return m;
    };
    OrderConfirmPage.prototype.sisi = function () {
        var m = [];
        if (this.materials) {
            this.materials.materials.forEach(function (x) {
                var k = m.find(function (element) { return element.sisi === x.sisi; });
                // console.log(x, m, 'materials')
                if (!k) {
                    // console.log('yes')
                    m.push(x);
                }
            });
        }
        // console.log(m);
        return m;
    };
    OrderConfirmPage.prototype.bahan = function () {
        var m = [];
        if (this.materials) {
            this.materials.materials.forEach(function (x) {
                var k = m.find(function (element) { return element.bahan === x.bahan; });
                // console.log(x, m, 'materials')
                if (!k) {
                    // console.log('yes')
                    m.push(x);
                }
            });
        }
        // console.log(m);
        return m;
    };
    OrderConfirmPage.prototype.jilid = function () {
        var m = [];
        if (this.materials) {
            this.materials.materials.forEach(function (x) {
                var k = m.find(function (element) { return element.tipe_jilid === x.tipe_jilid; });
                // console.log(x, m, 'materials')
                if (!k) {
                    // console.log('yes')
                    m.push(x);
                }
            });
        }
        // console.log(m);
        return m;
    };
    OrderConfirmPage.prototype.mug = function () {
        var m = [];
        if (this.materials) {
            this.materials.materials.forEach(function (x) {
                var k = m.find(function (element) { return element.jns_mug === x.jns_mug; });
                // console.log(x, m, 'materials')
                if (!k) {
                    // console.log('yes')
                    m.push(x);
                }
            });
        }
        // console.log(m);
        return m;
    };
    OrderConfirmPage.prototype.kain = function () {
        var m = [];
        if (this.materials) {
            this.materials.materials.forEach(function (x) {
                var k = m.find(function (element) { return element.jns_mug === x.jns_mug; });
                // console.log(x, m, 'materials')
                if (!k) {
                    // console.log('yes')
                    m.push(x);
                }
            });
        }
        // console.log(m);
        return m;
    };
    OrderConfirmPage.prototype.cetakDepan = function () {
        var m = [];
        if (this.materials) {
            this.materials.materials.forEach(function (x) {
                var k = m.find(function (element) { return element.cetak_depan === x.cetak_depan; });
                // console.log(x, m, 'materials')
                if (!k) {
                    // console.log('yes')
                    m.push(x);
                }
            });
        }
        // console.log(m);
        return m;
    };
    OrderConfirmPage.prototype.cetakBelakang = function () {
        var m = [];
        if (this.materials) {
            this.materials.materials.forEach(function (x) {
                var k = m.find(function (element) { return element.cetak_depan === x.cetak_depan; });
                // console.log(x, m, 'materials')
                if (!k) {
                    // console.log('yes')
                    m.push(x);
                }
            });
        }
        // console.log(m);
        return m;
    };
    OrderConfirmPage.prototype.cetakLengan = function () {
        var m = [];
        if (this.materials) {
            this.materials.materials.forEach(function (x) {
                var k = m.find(function (element) { return element.cetak_depan === x.cetak_depan; });
                // console.log(x, m, 'materials')
                if (!k) {
                    // console.log('yes')
                    m.push(x);
                }
            });
        }
        // console.log(m);
        return m;
    };
    OrderConfirmPage.prototype.finishing = function () {
        var m = [];
        if (this.materials) {
            this.materials.materials.forEach(function (x) {
                var k = m.find(function (element) { return element.jns_finishing === x.jns_finishing; });
                // console.log(x, m, 'materials')
                if (!k) {
                    // console.log('yes')
                    m.push(x);
                }
            });
        }
        // console.log(m);
        return m;
    };
    OrderConfirmPage.prototype.simpan = function () {
        // console.log(this.form);
        this.viewCtrl.dismiss(this.form);
    };
    OrderConfirmPage.prototype.changed = function ($event) {
        var _this = this;
        this.apiProvider.getValue(this.form).then(function (data) {
            _this.value = data;
            _this.form.berat = _this.value.berat;
            _this.form.harga = _this.value.harga;
            console.log(_this.value);
        }).catch(function (err) {
            console.log(err);
        });
    };
    OrderConfirmPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss(true);
    };
    OrderConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-order-confirm',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/order-confirm/order-confirm.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="closeModal()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Option Produk</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n    <div class="border-bottom">\n        <ion-item class="no-border">\n          <ion-label>Jumlah Pesanan</ion-label>\n          <ion-input min="1" type="number" class="myCustomSelect"[(ngModel)]="form.kuantitas">\n          </ion-input>\n        </ion-item>\n      </div>\n  <div class="border-bottom">\n    <ion-item class="no-border">\n      <ion-label>Jenis Kertas</ion-label>\n      <ion-select class="myCustomSelect" *ngIf="kertas().length" [(ngModel)]="form.jenis_kertas" (ionChange)="changed()" [multiple]="false">\n        <ion-option *ngFor="let material of kertas()" [value]="material.jns_kertas">{{material?.jns_kertas}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </div>\n  <div class="border-bottom">\n    <ion-item class="no-border">\n      <ion-label>Finishing</ion-label>\n      <ion-select class="myCustomSelect" *ngIf="finishing().length" [(ngModel)]="form.jenis_cetak" (ionChange)="changed()">\n          <ion-option *ngFor="let material of finishing()" [value]="material.jns_finishing">{{material?.jns_finishing}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </div>\n  <div class="border-bottom" *ngIf="item.subcategory_id === 8">\n      <ion-item class="no-border">\n        <ion-label>Material</ion-label>\n        <ion-select class="myCustomSelect" [(ngModel)]="form.material" *ngIf="material().length">\n          <ion-option *ngFor="let material of maaterial()" [value]="material.jns_material">{{material?.jns_mmaterial}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n\n\n    <div class="border-bottom" *ngIf="item.subcategory_id === 1 || item.subcategory_id === 2" >\n      <ion-item class="no-border">\n        <ion-label>Nama</ion-label>\n          <ion-input type="text" class="myCustomSelect"  [(ngModel)]="form.nama">\n        </ion-input>\n      </ion-item>\n    </div>\n    <div class="border-bottom" *ngIf="item.subcategory_id === 1 || item.subcategory_id === 2 || item.subcategory_id === 3 || item.subcategory_id === 4 || item.subcategory_id === 5 || item.subcategory_id === 6 || item.subcategory_id === 7">\n      <ion-item class="no-border">\n        <ion-label>Nama Perusahan</ion-label>\n        <ion-input type="text" class="myCustomSelect"  [(ngModel)]="form.nama_perusahaan">\n        </ion-input>\n      </ion-item>\n    </div>\n    <div class="border-bottom" *ngIf="item.subcategory_id === 1 || item.subcategory_id === 2">\n      <ion-item class="no-border">\n        <ion-label>Jabatan</ion-label>\n        <ion-input type="text" class="myCustomSelect"  [(ngModel)]="form.jabatan">\n        </ion-input>\n      </ion-item>\n    </div>\n    <div class="border-bottom" *ngIf="item.subcategory_id === 1 || item.subcategory_id === 2 || item.subcategory_id === 3 || item.subcategory_id === 4 || item.subcategory_id === 6 || item.subcategory_id === 7">\n      <ion-item class="no-border">\n        <ion-label>No. Telepon</ion-label>\n        <ion-input type="number" class="myCustomSelect"  [(ngModel)]="form.no_telpon">\n        </ion-input>\n      </ion-item>\n    </div>\n    <div class="border-bottom" *ngIf="item.subcategory_id === 1 || item.subcategory_id === 2 || item.subcategory_id === 3 || item.subcategory_id === 4 || item.subcategory_id === 6 || item.subcategory_id === 7">\n      <ion-item class="no-border">\n        <ion-label>Alamat</ion-label>\n        <ion-input type="text" class="myCustomSelect"  [(ngModel)]="form.alamat">\n        </ion-input>\n      </ion-item>\n    </div>\n    <div class="border-bottom" *ngIf="item.subcategory_id === 1 || item.subcategory_id === 2 || item.subcategory_id === 3 || item.subcategory_id === 4 || item.subcategory_id === 6 || item.subcategory_id === 7">\n      <ion-item class="no-border">\n        <ion-label>Email</ion-label>\n        <ion-input type="text" class="myCustomSelect"  [(ngModel)]="form.email">\n        </ion-input>\n      </ion-item>\n    </div>\n    <div class="border-bottom" *ngIf="item.subcategory_id === 3 || item.subcategory_id === 5 || item.subcategory_id === 6 || item.subcategory_id === 7 || item.subcategory_id === 8 || item.subcategory_id === 9 || item.subcategory_id === 10 || item.subcategory_id === 12 || item.subcategory_id === 16 || item.subcategory_id === 17">\n      <ion-item class="no-border">\n        <ion-label>Ukuran</ion-label>\n        <ion-select class="myCustomSelect"  [(ngModel)]="form.ukuran" *ngIf="ukuran().length">\n          <ion-option *ngFor="let material of ukuran()" [value]="material.ukuran">{{material?.ukuran}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <div class="border-bottom" *ngIf="item.subcategory_id === 12">\n        <ion-item class="no-border">\n          <ion-label>Model Bantal</ion-label>\n          <ion-select class="myCustomSelect"  [(ngModel)]="form.model" *ngIf="modelBantal().length"> \n            <ion-option *ngFor="let material of modelBantal()" [value]="material.model_bantal">{{material?.model_bantal}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </div>\n    <div class="border-bottom" *ngIf="item.subcategory_id === 5 || item.subcategory_id === 10 || item.subcategory_id === 12 || item.subcategory_id === 16 || item.subcategory_id === 17">\n      <ion-item class="no-border">\n        <ion-label>Warna</ion-label>\n        <ion-select class="myCustomSelect"  [(ngModel)]="form.warna" *ngIf="warna().length">\n          <ion-option *ngFor="let material of warna()" [value]="material.warna">{{material?.warna}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <div class="border-bottom" *ngIf="item.subcategory_id === 10">\n      <ion-item class="no-border">\n        <ion-label>Model Cetak</ion-label>\n        <ion-select class="myCustomSelect"  [(ngModel)]="form.jenis_cetak" *ngIf="modelCetak().length">\n          <ion-option *ngFor="let material of modelCetak()" [value]="material.jns_finishing">{{material?.jns_finishing}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <div class="border-bottom" *ngIf="item.subcategory_id === 10">\n      <ion-item class="no-border">\n        <ion-label>Sisi</ion-label>\n        <ion-select class="myCustomSelect"  [(ngModel)]="form.sisi" *ngIf="sisi().length">\n          <ion-option *ngFor="let material of sisi()" [value]="material.sisi">{{material?.sisi}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <div class="border-bottom" *ngIf="item.subcategory_id === 10 || item.subcategory_id === 16 || item.subcategory_id === 17">\n      <ion-item class="no-border">\n        <ion-label>Bahan</ion-label>\n        <ion-select class="myCustomSelect"  [(ngModel)]="form.bahan"  *ngIf="bahan().length">\n          <ion-option *ngFor="let material of bahan()" [value]="material.bahan">{{material?.bahan}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <div class="border-bottom" *ngIf="item.subcategory_id === 6">\n      <ion-item class="no-border">\n        <ion-label>Type Jilid</ion-label>\n        <ion-select class="myCustomSelect"  [(ngModel)]="form.jilid" *ngIf="jilid().length">\n          <ion-option *ngFor="let material of jilid()" [value]="material.tipe_jilid">{{material?.tipe_jilid}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <div class="border-bottom" *ngIf="item.subcategory_id === 11">\n      <ion-item class="no-border">\n        <ion-label>Jenis Mug</ion-label>\n        <ion-select class="myCustomSelect"  [(ngModel)]="form.model" *ngIf="mug().length">\n          <ion-option *ngFor="let material of mug()" [value]="material.jns_mug">{{material?.jns_mug}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <div class="border-bottom" *ngIf="item.subcategory_id === 12">\n      <ion-item class="no-border">\n        <ion-label>Kain</ion-label>\n        <ion-select class="myCustomSelect"  [(ngModel)]="form.kain" *ngIf="kain().length">\n          <ion-option *ngFor="let material of kain()" [value]="material.jenis_kain">{{material?.jenis_kain}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <div class="border-bottom" *ngIf="item.subcategory_id === 13 || item.subcategory_id === 14 || item.subcategory_id === 15">\n      <ion-item class="no-border">\n        <ion-label>Ukuran</ion-label>\n        <ion-input type="text" class="myCustomSelect" placeholder="P x L"  [(ngModel)]="form.ukuran"></ion-input>\n      </ion-item>\n    </div>\n    <div class="border-bottom" *ngIf="item.subcategory_id === 16 || item.subcategory_id === 17">\n      <ion-item class="no-border">\n        <ion-label>Area Cetak Depan</ion-label>\n        <ion-select class="myCustomSelect" (ngModel)]="form.cetak_depan" *ngIf="cetakDepan().length">\n            <ion-option *ngFor="let material of cetakDepan()" [value]="material.cetak_depan">{{material?.cetak_depan}}</ion-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <div class="border-bottom" *ngIf="item.subcategory_id === 16 || item.subcategory_id === 17">\n        <ion-item class="no-border">\n          <ion-label>Area Cetak Belakang</ion-label>\n          <ion-select class="myCustomSelect"  [(ngModel)]="form.cetak_belakang" *ngIf="cetakBelakang().length">\n            <ion-option *ngFor="let material of cetakBelakang()" [value]="material.cetak_belakang">{{material?.cetak_belakang}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </div>\n      <div class="border-bottom" *ngIf="item.subcategory_id === 17">\n        <ion-item class="no-border">\n          <ion-label>Area Cetak Lengan</ion-label>\n          <ion-select class="myCustomSelect"  [(ngModel)]="form.cetak_lengan_kanan" *ngIf="cetakLengan().length">\n            <ion-option *ngFor="let material of cetakLengan()" [value]="material.cetak_lengan">{{material?.cetak_lengan}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </div>\n\n\n\n\n    <div class="border-bottom">\n      <ion-item class="no-border">\n        <ion-label>Logo: </ion-label>\n        <ion-input type="file" class="myCustomSelect" placeholder="Upload">\n        </ion-input>\n      </ion-item>\n    </div>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button color="primary" block (click)="simpan()">Simpan</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/order-confirm/order-confirm.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_item_service__["a" /* ItemService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], OrderConfirmPage);
    return OrderConfirmPage;
}());

//# sourceMappingURL=order-confirm.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, userService, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.regData = { name: '', password: '', email: '' };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('VIew Register Sukses');
    };
    RegisterPage.prototype.doSignup = function () {
        var _this = this;
        this.showLoader();
        this.userService.register(this.regData).then(function (result) {
            _this.loading.dismiss();
            _this.navCtrl.pop();
            console.log('Berhasil Daftar');
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    RegisterPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    RegisterPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/register/register.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="register">\n<form (submit)="doSignup()">\n  <ion-list class="list-form">\n\n    <ion-item>\n      <ion-input [(ngModel)]="regData.name"  name="name" type="text" placeholder="Name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input [(ngModel)]="regData.email" name="email" type="text" placeholder="Email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input [(ngModel)]="regData.password" name="password" type="password" placeholder="Password"></ion-input>\n    </ion-item>\n\n  <ion-item>\n    <ion-input [(ngModel)]="regData.password" name="password" type="password" placeholder="Konfiramsi Password"></ion-input>\n  </ion-item>\n</ion-list>\n\n  <button ion-button color="primary" block type="submit">Create Account</button>\n</form>\n\n  <div class="align-bottom" padding text-center>\n    Have an account? <span class="bold" (click)="login()">Sign in</span>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlamatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AlamatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlamatPage = (function () {
    function AlamatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alamat = 'jl. Kapten patimura gg. senggol';
        this.prov = 1;
        this.kot = 1;
    }
    AlamatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlamatPage');
    };
    AlamatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-alamat',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/alamat/alamat.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Alamat</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-item>\n      <ion-label>Alamat</ion-label>\n      <ion-input [(ngModel)]="alamat"></ion-input>\n    </ion-item>\n   <ion-item>\n      <ion-label>Provinsi</ion-label>\n      <ion-select [(ngModel)]="prov">\n        <ion-option value="1">SumateraUtara</ion-option>\n        <ion-option value="0">Perempuan</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jenis Kelamin</ion-label>\n      <ion-select [(ngModel)]="kot">\n        <ion-option value="1">Binjai</ion-option>\n        <ion-option value="0">Perempuan</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-content>\n  '/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/alamat/alamat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], AlamatPage);
    return AlamatPage;
}());

//# sourceMappingURL=alamat.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreelancePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FreelancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FreelancePage = (function () {
    function FreelancePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.username = 'Rani';
        this.email = 'rani@mail.com';
        this.phone = '08964343434334';
        this.jk = 0;
    }
    FreelancePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FreelancePage');
    };
    FreelancePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-freelance',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/freelance/freelance.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <ion-title>Menjadi Freelancer</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-item>\n      <ion-label>User Name</ion-label>\n      <ion-input [(ngModel)]="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>E-mail</ion-label>\n      <ion-input [(ngModel)]="email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Jenis Kelamin</ion-label>\n      <ion-select [(ngModel)]="jk">\n        <ion-option value="1">Laki-Laki</ion-option>\n        <ion-option value="0">Perempuan</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>No Ponsel</ion-label>\n      <ion-input [(ngModel)]="phone"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>No Rekening</ion-label>\n      <ion-input [(ngModel)]="rekening"></ion-input>\n    </ion-item>\n  </ion-content>\n  '/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/freelance/freelance.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], FreelancePage);
    return FreelancePage;
}());

//# sourceMappingURL=freelance.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MessageItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessageItemPage = (function () {
    function MessageItemPage(navCtrl, navParams, apiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.data = {
            message: '',
            image: ''
        };
        this.list = new Array();
        this.user_id = localStorage.getItem('user_id');
        this.user_id = parseInt(this.user_id);
        this.message = this.navParams.get('message');
        this.apiProvider.message(this.message.id).then(function (data) {
            _this.messages = data;
            _this.messages.forEach(function (element) {
                _this.list.push(element);
            });
            console.log(_this.messages);
        }).catch(function (err) {
            console.log(err);
        });
    }
    MessageItemPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom(300); //300ms animation speed
        }, 1000);
    };
    MessageItemPage.prototype.sendMessage = function () {
        var _this = this;
        console.log(this.message);
        var data = {
            to_user_id: this.message.freelancer_id,
            order_id: this.message.id,
            message: this.data.message,
            images: this.data.image
        };
        this.apiProvider.sendMessage(data).then(function (res) {
            console.log(res);
            _this.list.push(res);
            _this.data = {
                message: '',
                image: ''
            };
        }).catch(function (err) {
            console.log(err);
        });
        setTimeout(function () {
            _this.content.scrollToBottom(300); //300ms animation speed
        }, 1000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], MessageItemPage.prototype, "content", void 0);
    MessageItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-message-item',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/message-item/message-item.html"*/'<!--\n  Generated template for the MessageItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar  color="primary">\n    <ion-title>{{message.jdl_Pdk}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n      <ion-item *ngFor="let message of list" no-lines>\n        <!-- <div class="chat-status" text-center>\n          <span class="chat-date">{{message.created_at | date:\'short\'}}</span>\n          <span class="chat-content-center">{{message.message}}</span>\n        </div> -->\n        <!-- <ng-template #message> -->\n          <div class="chat-message" text-right *ngIf="message.fr_user_id === user_id">\n            <div class="right-bubble">\n              <span class="msg-name">Me</span>\n              <p class="msg-date">{{message.created_at | date:\'short\'}}</p>\n              <span text-wrap>{{message.message}}</span>\n            </div>\n          </div>\n          <div class="chat-message" text-left *ngIf="message.fr_user_id !== user_id">\n            <div class="left-bubble">\n              <span class="msg-name">{{message.freelance}}</span>\n              <p class="msg-date">{{message.created_at | date:\'short\'}}</p>\n              <img src="http://localhost:8000/messages/{{message.images}}">\n              <span text-wrap>{{message.message}}</span>\n              <div *ngIf="message.images">\n                <button ion-button [disabled]="message.ket === 0">Perubahan {{message.ket}}</button>\n                <button ion-button>Setuju</button>\n              </div>\n            </div>\n          </div>\n        <!-- </ng-template> -->\n      </ion-item>\n    </ion-list>\n  </ion-content>\n  <ion-footer>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-10>\n          <ion-textarea #txtChat type="text" placeholder="Type a message" [(ngModel)]="data.message" name="message"></ion-textarea>\n        </ion-col>\n        <ion-col col-2 (click)="sendMessage()">\n          <ion-icon name="paper-plane"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-footer>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/message-item/message-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], MessageItemPage);
    return MessageItemPage;
}());

//# sourceMappingURL=message-item.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_message_item_message_item__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagePage = (function () {
    function MessagePage(navCtrl, navParams, apiProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.apiProvider.messageList().then(function (data) {
            _this.list = data;
        }).catch(function (err) {
            console.log(err);
        });
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagePage');
    };
    MessagePage.prototype.viewMessage = function (message) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_message_item_message_item__["a" /* MessageItemPage */], { message: message });
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/message/message.html"*/'<!--\n  Generated template for the MessagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Message</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="my-order common-bg">\n  <ion-list no-margin>\n    <ion-item class="list-full-border" *ngFor="let message of list" (click)="viewMessage(message)">\n      <ion-icon name="chatboxes" item-end></ion-icon>\n      {{message.jdl_Pdk}}\n      <ion-item>\n        <p ion-text> \n          Freelance: {{message.freelance}}\n        </p>\n      </ion-item>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/message/message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PembayaranPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the PembayaranPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PembayaranPage = (function () {
    function PembayaranPage(navCtrl, navParams, transfer, camera, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transfer = transfer;
        this.camera = camera;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.order = this.navParams.get('order');
    }
    PembayaranPage.prototype.getImage = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageURI = imageData;
        }, function (err) {
            console.log(err);
            _this.toastCtrl.create(err);
        });
    };
    PembayaranPage.prototype.uploadFile = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Uploading..."
        });
        loader.present();
        var fileTransfer = this.transfer.create();
        var options = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {}
        };
        fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
            .then(function (data) {
            console.log(data + " Uploaded Successfully");
            _this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg";
            loader.dismiss();
            _this.presentToast("Image uploaded successfully");
        }, function (err) {
            console.log(err);
            loader.dismiss();
            _this.presentToast(err);
        });
    };
    PembayaranPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PembayaranPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PembayaranPage');
    };
    PembayaranPage.prototype.total = function () {
        console.log(this.order);
        if (this.order) {
            var total_1 = 0;
            this.order.orders.forEach(function (element) {
                total_1 = total_1 + ((element.harga + element.product.harga_awal) * element.kuantitas);
            });
            return total_1 + this.order.biaya_kurir;
        }
        else {
            return 0;
        }
    };
    PembayaranPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-pembayaran',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/pembayaran/pembayaran.html"*/'<!--\n  Generated template for the PembayaranPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>pembayaran</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="card">\n            <div class="border-bottom">\n            <ion-item class="no-borde " text-wrap>\n            <span class="pull-center bold" ion-text color="danger">Mohon ikuti langkah-langkah berikut:</span>\n            </ion-item>\n            </div>\n            <div class="border-bottom">\n            <ion-item class="no-border" text-wrap>\n            <span>1. Pembayaran melalui transfer ke Bank Mandiri atas Nama Technographic dengan nomor Rekening 1111 231 109 231\n           </span>\n           </ion-item>\n           </div>\n           <div class="border-bottom">\n            <ion-item class="no-border" text-wrap>\n             <span>2. Tunjukkan bukti pembayaran dengan memfoto/menscan bukti pembayarannya dengan menguploadnya melaui tombol dibawah ini\n            </span>\n            </ion-item>\n            </div>\n            <div class="border-bottom">\n            <ion-item class="no-border" text-wrap>\n             <span> 3. Pesanan akan diproses setelah melakukan pembayaran dan menunjukkan bukti pembayaran sesuai llangkah no 2\n            </span>\n            </ion-item>\n            </div>\n            <!-- <div class="border-bottom">\n            <ion-item class="no-border" text-wrap>\n            <span>4. Pesanan akan hilang jika tidak melakukan pembayaran dalam kurun waktu 24 jam dimulai dari pembuatan pesanan        \n            </span>\n            </ion-item>\n            </div> -->\n </div>\n     <div class="card light-bg">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n          <span class="pull-left bold" ion-text color="gray">Total Pembayaran:</span>\n          <span class="pull-right bold" ion-text color="danger" style="padding-bottom:20px">{{ total() | currency:\'Rp \':true }}</span><br>\n          <span class="pull-right"><button ion-button color="secondary" (click)="getImage()">Lampirkan</button> <button ion-button color="primary">Kirim</button></span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/pembayaran/pembayaran.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */]])
    ], PembayaranPage);
    return PembayaranPage;
}());

//# sourceMappingURL=pembayaran.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.email = 'rani@mail.com';
        this.phone = '098099009999';
        this.jk = 1;
        this.myDate = 15 / 12 / 1994;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Email</ion-label>\n    <ion-input [(ngModel)]="email"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Nomor Ponsel</ion-label>\n    <ion-input [(ngModel)]="phone"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Jenis Kelamin</ion-label>\n    <ion-select [(ngModel)]="jk">\n      <ion-option value="1">Laki-Laki</ion-option>\n      <ion-option value="0">Perempuan</ion-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Tanggal Lahir</ion-label>\n    <ion-datetime displayFormat="MM/DD/YYYY" [(ngModel)]="myDate">MM/DD/YYYY</ion-datetime>\n  </ion-item>\n</ion-content>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UlasanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the UlasanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UlasanPage = (function () {
    function UlasanPage(navCtrl, navParams, apiProvider, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.viewCtrl = viewCtrl;
        this.form = {
            product_id: '',
            rate: 0,
            judul: '',
            komen: ''
        };
        this.form.product_id = this.navParams.get('id');
    }
    UlasanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UlasanPage');
    };
    UlasanPage.prototype.onModelChange = function (e) {
        this.form.rate = e;
        console.log(this.form.judul, this.form.rate);
    };
    UlasanPage.prototype.send = function () {
        var _this = this;
        if (this.form.rate) {
            this.apiProvider.postUlasan(this.form).then(function (data) {
                _this.data = data;
                _this.viewCtrl.dismiss(_this.data);
            }).catch(function (err) {
                console.log(err);
            });
        }
    };
    UlasanPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    UlasanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ulasan',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/ulasan/ulasan.html"*/'<!--\n  Generated template for the UlasanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Ulasan</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-title padding>\n        <h2 class="title" bold>\n            Mohon Bagikan Pengalaman anda\n        </h2>\n        <h4>\n            Berikan Peringkat untuk produk ini:\n        </h4>\n    </ion-card-title>\n    <rating [(ngModel)]="form.rate" \n      max="5" \n      emptyStarIconName="star-outline" \n      halfStarIconName="star-half" \n      starIconName="star" \n      nullable="false"\n      class="ulasan"\n      (ngModelChange)="onModelChange($event)"\n      > \n    </rating>\n    \n    <ion-item>\n      <ion-label floating>Judul Ulasan (optional):</ion-label>\n      <ion-input [readonly]="!form.rate" type="text" [(ngModel)]="form.judul" name="judul"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label  floating>Deskripsi Ulasan:</ion-label>\n      <ion-textarea [readonly]="!form.rate" type="text" [(ngModel)]="form.komen" name="komen"></ion-textarea>\n      <span>Dengan mengirimkan ulasan ini, Saya setuju nama saya ditampilkan sebagai {{user}}</span>\n    </ion-item>\n    \n  </ion-card>\n  <button ion-button (click)="dismiss()">Cancel</button>\n  <button ion-button [disabled]="!form.rate || !form.komen" (click)="send()">Post</button>\n</ion-content>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/ulasan/ulasan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], UlasanPage);
    return UlasanPage;
}());

//# sourceMappingURL=ulasan.js.map

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 136;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = (function () {
    function ApiProvider(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.apiUrl = 'http://localhost:8000/api';
        this.storage.get('token').then(function (val) {
            _this.token = val;
            console.log('storage get');
        }).catch(function (err) {
            console.log(err);
        });
        console.log('Hello ApiProvider Provider');
        console.log(this.getToken(), 'getToken');
        console.log(this.token, 'token');
    }
    ApiProvider.prototype.getToken = function () {
    };
    ApiProvider.prototype.doLogin = function (form) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/login', JSON.stringify(form))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.getSubProduct = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/subcategory/' + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getProduct = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/productlist/' + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.postToCart = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/item', JSON.stringify(data), {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json' }
            }).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.postToWist = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/item', JSON.stringify(data), {
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json' }
            }).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.getCart = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/item', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            }).subscribe(function (res) {
                resolve(res);
                console.log(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.getWist = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/item', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            }).subscribe(function (res) {
                resolve(res);
                console.log(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.order = function (form) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/order', form, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            }).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.getTransaction = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/transaction', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            }).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.shipping = function (berat, kurir) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/cost/berat/' + berat + '/kurir/' + kurir, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            }).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.messageList = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/messages', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.message = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/messages/' + id, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            }).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.sendMessage = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/sendmessage', data, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            }).subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ApiProvider.prototype.getMaterial = function (subcategory_id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/material/' + subcategory_id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.cetakInfo = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/message/cetak/' + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.perubahan = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.apiUrl + 'message/perubahan', data, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getUlasan = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/ulasan/' + id, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.postUlasan = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.apiUrl + '/ulasan/', data, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.productFreelancer = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/products-freelancer_/' + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.setuju = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.apiUrl + '/message/setuju/', data, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.rate = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/rate/' + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.orderDiterima = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/order/diterima/' + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getValue = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(_this.apiUrl + '/material/', data, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.delItem = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(_this.apiUrl + '/item/' + id, {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider.prototype.getAlamat = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/user/alamat', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('token'),
                    'Content-Type': 'application/json'
                }
            })
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/alamat/alamat.module": [
		331,
		7
	],
	"../pages/checkout/checkout.module": [
		332,
		6
	],
	"../pages/freelance/freelance.module": [
		333,
		5
	],
	"../pages/message-item/message-item.module": [
		334,
		4
	],
	"../pages/message/message.module": [
		335,
		3
	],
	"../pages/pembayaran/pembayaran.module": [
		336,
		2
	],
	"../pages/profile/profile.module": [
		337,
		1
	],
	"../pages/ulasan/ulasan.module": [
		338,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 177;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_carts__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartService = (function () {
    function CartService() {
        this.carts = __WEBPACK_IMPORTED_MODULE_1__mock_carts__["a" /* CARTS */];
    }
    CartService.prototype.getAll = function () {
        return this.carts;
    };
    CartService.prototype.getItem = function (id) {
        for (var i = 0; i < this.carts.length; i++) {
            if (this.carts[i].id === parseInt(id)) {
                return this.carts[i];
            }
        }
        return null;
    };
    CartService.prototype.remove = function (item) {
        this.carts.splice(this.carts.indexOf(item), 1);
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart-service.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__item_item__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(http, loadingCtrl, nav, categoryService) {
        // this.categories = categoryService.getAll();
        var _this = this;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.nav = nav;
        this.categoryService = categoryService;
        this.searchQuery = '';
        this.viewType = 'list';
        var loadingPopup = this.loadingCtrl.create({
            content: 'Loading posts...'
        });
        this.http.get('http://localhost:8000/api/products').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.posts = data;
            _this.initializeItems();
            // Hide the loading message
            loadingPopup.dismiss();
        });
    }
    // view a item
    SearchPage.prototype.viewItem = function (itemId) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__item_item__["a" /* ItemPage */], { id: itemId });
    };
    // switch to list view
    SearchPage.prototype.viewList = function () {
        this.viewType = 'list';
    };
    // swith to grid view
    SearchPage.prototype.viewGrid = function () {
        this.viewType = 'grid';
    };
    // get discount percent
    SearchPage.prototype.discountPercent = function (originPrice, salePrice) {
        return Math.round((salePrice - originPrice) * 100 / originPrice);
    };
    SearchPage.prototype.initializeItems = function () {
        this.items = this.posts;
    };
    SearchPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.jdl_Pdk.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/search/search.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Search</ion-title> \n  </ion-navbar>\n</ion-header>\n<ion-content>\n <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n <!--List of items-->\n  <ion-list no-margin class="list-full-border list-products"\n            [ngClass]="{\'grid\': viewType == \'grid\', \'list\': viewType == \'list\'}">\n    <ion-item class="product" *ngFor="let item of items" (click)="viewItem(item.id)">\n      <ion-thumbnail item-left>\n        <img src="http://localhost:8000/uploads/{{ item.images }}">\n      </ion-thumbnail>\n      <!--item\'s information-->\n      <div>\n        <div text-wrap>{{ item.jdl_Pdk }}</div>\n        <div>\n          <span ion-text color="danger" *ngIf="item.sale_price">{{ item.harga_awal | currency:\'Rp \':true }}</span>\n          <span ion-text color="danger" *ngIf="!item.sale_price">{{ item.harga_awal | currency:\'Rp \':true }}</span>\n        </div>\n        <div class="origin-price text-sm">\n          <span *ngIf="item.sale_price" class="text-decoration">{{ item.harga_awal | currency:\'Rp \':true }}</span>\n        </div>\n        <div class="bottom-info text-sm">\n          <span ion-text color="gray" class="pull-left" *ngIf="item.shipping == 0">Free shipping</span>\n          <span ion-text color="gray" class="pull-left" *ngIf="item.shipping != 0">Shipping: {{ item.harga_awal | currency:\'Rp \':true}}</span>\n          <span ion-text color="gray" class="pull-right">\n            2 Orders\n          </span>\n          <div class="clear"></div>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(nav) {
        this.nav = nav;
    }
    // submit email
    ForgotPasswordPage.prototype.send = function () {
        // enter your code here
        // back to login page
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/forgot-password/forgot-password.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Forgot Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="forgot-password">\n  <ion-list class="list-form">\n\n    <ion-item>\n      <ion-input type="text" placeholder="Enter your email"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button color="primary" block (click)="send()">RESET</button>\n</ion-content>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/forgot-password/forgot-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(nav) {
        this.nav = nav;
    }
    // go to login page
    WelcomePage.prototype.login = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    // go to register page
    WelcomePage.prototype.register = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding class="welcome">\n\n  <div class="align-bottom" padding>\n    <div padding-left padding-right>\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col no-padding>\n            <button ion-button block color="danger" (click)="login()">Sign In</button>\n          </ion-col>\n          <ion-col no-padding padding-left>\n            <button ion-button block color="danger" (click)="register()">Register</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_password_change_password__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alamat_alamat__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__freelance_freelance__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var MyAccountPage = (function () {
    function MyAccountPage(nav, userService) {
        this.nav = nav;
        this.userService = userService;
    }
    // go to changing password page
    MyAccountPage.prototype.changePassword = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__change_password_change_password__["a" /* ChangePasswordPage */]);
    };
    MyAccountPage.prototype.profile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
    };
    MyAccountPage.prototype.alamat = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__alamat_alamat__["a" /* AlamatPage */]);
    };
    MyAccountPage.prototype.freelance = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__freelance_freelance__["a" /* FreelancePage */]);
    };
    MyAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my-account',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/my-account/my-account.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!-- Profile -->\n  <ion-item-group>    \n    <ion-item-divider bgColor>PROFILE</ion-item-divider>\n    <ion-item>\n    <span class="bold" ion-text color="gray" class="pull-left">Name</span>\n    <span class="bold" class="pull-right">Chairil Azmi</span>\n  </ion-item>\n    <ion-item (click)="profile()">\n      <ion-icon name="md-create"></ion-icon>\n      Edit profile\n    </ion-item>\n    <ion-item (click)="changePassword()">\n      <ion-icon name="lock"></ion-icon>\n      Change password\n    </ion-item>\n    <ion-item (click)="alamat()">\n      <ion-icon name="map"></ion-icon>\n      Alamat\n    </ion-item>\n    <ion-item (click)="freelance()">\n      <ion-icon name="laptop"></ion-icon>\n      Menjadi Freelancer Designer\n    </ion-item>\n\n  </ion-item-group>\n\n  <!-- Other -->\n</ion-content>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/my-account/my-account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], MyAccountPage);
    return MyAccountPage;
}());

//# sourceMappingURL=my-account.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ChangePasswordPage = (function () {
    function ChangePasswordPage(nav) {
        this.nav = nav;
    }
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/change-password/change-password.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Change Password</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="change-password">\n  <ion-list class="list-form">\n\n    <ion-item>\n      <ion-input type="password" placeholder="Your password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="password" placeholder="New password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button color="secondary" block>Save</button>\n</ion-content>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/change-password/change-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_pembayaran_pembayaran__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var MyOrderPage = (function () {
    function MyOrderPage(nav, orderService, apiProvider) {
        // set sample data
        // this.orders = orderService.getAll();
        var _this = this;
        this.nav = nav;
        this.orderService = orderService;
        this.apiProvider = apiProvider;
        this.viewType = 'list';
        this.apiProvider.getTransaction().then(function (data) {
            _this.orders = data;
            console.log(_this.orders, 'my-order');
        }).catch(function (err) {
            console.log(err);
        });
    }
    MyOrderPage.prototype.option = function (item) {
        if (item) {
            var array = [];
            if (item.jenis_cetak) {
                array.push(item.jenis_cetak);
            }
            if (item.jenis_kertas) {
                array.push(item.jenis_kertas);
            }
            if (item.bentuk) {
                array.push(item.bentuk);
            }
            if (item.ukuran) {
                array.push(item.ukuran);
            }
            if (item.jilid) {
                array.push(item.jilid);
            }
            if (item.lembar) {
                array.push(item.lembar);
            }
            if (item.material) {
                array.push(item.material);
            }
            if (item.model) {
                array.push(item.model);
            }
            if (item.bahan) {
                array.push(item.bahan);
            }
            if (item.sisi) {
                array.push(item.sisi);
            }
            if (item.kain) {
                array.push(item.kain);
            }
            if (item.cetak_belakang) {
                array.push(item.cetak_belakang);
            }
            if (item.cetak_depan) {
                array.push(item.cetak_depan);
            }
            if (item.cetak_lengan_kanan) {
                array.push(item.cetak_lengan_kanan);
            }
            console.log(array.join(', '));
            // console.log(item, 'option')
            return array.join(',  ');
        }
    };
    MyOrderPage.prototype.total = function (orders) {
        if (orders) {
            var total_1 = 0;
            orders.forEach(function (element) {
                total_1 = total_1 + ((element.harga + element.product.harga_awal) * element.kuantitas);
            });
            return total_1;
        }
        else {
            return 0;
        }
    };
    MyOrderPage.prototype.pembayaran = function (order) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_pembayaran_pembayaran__["a" /* PembayaranPage */], { order: order });
    };
    MyOrderPage.prototype.viewList = function () {
        this.viewType = 'list';
    };
    // swith to grid view
    MyOrderPage.prototype.viewGrid = function () {
        this.viewType = 'grid';
    };
    MyOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my-order',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/my-order/my-order.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Orders</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="my-order common-bg">\n    <div class="card light-bg" margin-top *ngFor="let order of orders; let orderIndex = index">\n      <div class="card-header" padding>\n        <div>Order Id: {{ order.kode_invoice }}</div>\n        <div>Order Time: {{ order.created_at }}</div>\n        \n      </div>\n  \n      <ion-list class="list-full-border list-products" no-margin>\n        <ion-item class="product" *ngFor="let item of order.orders; let i = index" (click)="pembayaran(order)">\n            <ion-thumbnail item-left *ngIf="item.product.images.length">\n                <img src="http://localhost:8000/uploads/{{ item.product.images[0].images }}">\n              </ion-thumbnail>\n          <!--item\'s information-->\n          <div>\n              <div text-wrap>{{ item?.product.jdl_Pdk }}</div>\n              <div padding-bottom>\n                  <span class="pull-left" ion-text color="danger">{{ item.harga + item.product.harga_awal | currency:\'Rp  \':true }} </span>\n                  <span class="pull-right" ion-text>  x {{item.kuantitas}}</span>\n                  <div class="clear"></div>\n              </div>\n              <h6 text-wrap>\n                {{option(item)}}\n              </h6>\n          </div>\n        </ion-item>\n      </ion-list>\n  \n      <div class="card-footer" padding>\n        <div>\n          <span class="pull-left" ion-text color="gray">Total Produk</span>\n          <span class="pull-right bold" ion-text color="danger">{{ total(order.orders)| currency:\'Rp  \':true }}</span>\n          <div class="clear"></div>\n          <div>\n            <span class="pull-left" ion-text color="gray">Shipping</span>\n            <span class="pull-right" ion-text color="gray">{{ order.biaya_kurir | currency:\'Rp  \':true }}</span>\n            <div class="clear"></div>\n          </div>\n          <div>\n            <span class="pull-left" ion-text color="gray">Total</span>\n            <span class="pull-right" ion-text color="gray">{{ order.biaya_kurir +  total(order.orders)| currency:\'Rp  \':true }}</span>\n            <div class="clear"></div>\n          </div>\n          <p>Belum dibayar</p>\n        </div>\n      </div>\n  \n    </div>\n  </ion-content>\n  \n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/my-order/my-order.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], MyOrderPage);
    return MyOrderPage;
}());

//# sourceMappingURL=my-order.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_orders__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderService = (function () {
    function OrderService() {
        this.orders = __WEBPACK_IMPORTED_MODULE_1__mock_orders__["a" /* ORDERS */];
    }
    OrderService.prototype.getAll = function () {
        return this.orders;
    };
    OrderService.prototype.getItem = function (id) {
        for (var i = 0; i < this.orders.length; i++) {
            if (this.orders[i].id === parseInt(id)) {
                return this.orders[i];
            }
        }
        return null;
    };
    OrderService.prototype.remove = function (item) {
        this.orders.splice(this.orders.indexOf(item), 1);
    };
    OrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], OrderService);
    return OrderService;
}());

//# sourceMappingURL=order-service.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_stores__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreService = (function () {
    function StoreService() {
        this.stores = __WEBPACK_IMPORTED_MODULE_1__mock_stores__["a" /* STORES */];
    }
    StoreService.prototype.getAll = function () {
        return this.stores;
    };
    StoreService.prototype.getItem = function (id) {
        for (var i = 0; i < this.stores.length; i++) {
            if (this.stores[i].id === parseInt(id)) {
                return this.stores[i];
            }
        }
        return null;
    };
    StoreService.prototype.remove = function (item) {
        this.stores.splice(this.stores.indexOf(item), 1);
    };
    StoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], StoreService);
    return StoreService;
}());

//# sourceMappingURL=store-service.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var TabFilterPage = (function () {
    function TabFilterPage(nav, viewCtrl) {
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        // set filter value
        this.filter = {
            shipTo: ''
        };
    }
    // close modal
    TabFilterPage.prototype.closeModal = function () {
        // this.nav.pop();
        // this.viewCtrl.dismiss(true);
    };
    TabFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tab-filter',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/tab-filter/tab-filter.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="closeModal()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Search Result(105)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="tab-filter">\n  <!--filter list-->\n  <ion-list class="list-no-border">\n    <ion-item>\n      <ion-label>Ship to</ion-label>\n      <ion-select [(ngModel)]="filter.shipTo">\n        <ion-option value="">All Regions</ion-option>\n        <ion-option value="vn">Vietnam</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item class="price-ranger">\n      <ion-label>Price</ion-label>\n      <ion-input type="text" placeholder="Min"></ion-input>\n      -\n      <ion-input type="text" placeholder="Max"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Free shipping</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Once pice only</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sale items</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n<!--Footer buttons-->\n<ion-footer class="category">\n  <ion-toolbar position="bottom">\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">\n        CANCEL\n      </button>\n      <button ion-button (click)="closeModal()">\n        <span ion-text color="gray">APPLY</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/tab-filter/tab-filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], TabFilterPage);
    return TabFilterPage;
}());

//# sourceMappingURL=tab-filter.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabAttributePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var TabAttributePage = (function () {
    function TabAttributePage(nav, viewCtrl) {
        this.nav = nav;
        this.viewCtrl = viewCtrl;
        // all attributes
        this.attr = {
            category: 1,
            sleeve: '',
            fabric: ''
        };
    }
    // close modal
    TabAttributePage.prototype.closeModal = function () {
        // this.nav.pop();
        // this.viewCtrl.dismiss(true);
    };
    TabAttributePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tab-attribute',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/tab-attribute/tab-attribute.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="closeModal()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Search Result(105)</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="tab-attribute">\n  <!--select attributes-->\n  <ion-list class="list-no-border">\n    <ion-item>\n      <ion-label>Categories</ion-label>\n      <ion-select [(ngModel)]="attr.category">\n        <ion-option value="1">Dress</ion-option>\n        <ion-option value="2">Skirt</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Sleeve Length</ion-label>\n      <ion-select [(ngModel)]="attr.sleeve">\n        <ion-option value="">All</ion-option>\n        <ion-option value="1">Short</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Fabric Type</ion-label>\n      <ion-select [(ngModel)]="attr.fabric">\n        <ion-option value="">All</ion-option>\n        <ion-option value="1">Batik</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n\n<!--Footer buttons-->\n<ion-footer class="category">\n  <ion-toolbar position="bottom">\n    <ion-buttons end>\n      <button ion-button (click)="closeModal()">\n        CANCEL\n      </button>\n      <button ion-button (click)="closeModal()">\n        <span ion-text color="gray">APPLY</span>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/tab-attribute/tab-attribute.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], TabAttributePage);
    return TabAttributePage;
}());

//# sourceMappingURL=tab-attribute.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckoutPage = (function () {
    function CheckoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cart = this.navParams.get('cart');
        console.log(this.cart, 'cartvv');
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutPage');
    };
    CheckoutPage.prototype.option = function (item) {
        if (item) {
            var array = [];
            if (item.jenis_cetak) {
                array.push(item.jenis_cetak);
            }
            if (item.jenis_kertas) {
                array.push(item.jenis_kertas);
            }
            if (item.bentuk) {
                array.push(item.bentuk);
            }
            if (item.ukuran) {
                array.push(item.ukuran);
            }
            if (item.jilid) {
                array.push(item.jilid);
            }
            if (item.lembar) {
                array.push(item.lembar);
            }
            if (item.material) {
                array.push(item.material);
            }
            if (item.model) {
                array.push(item.model);
            }
            if (item.bahan) {
                array.push(item.bahan);
            }
            if (item.sisi) {
                array.push(item.sisi);
            }
            if (item.kain) {
                array.push(item.kain);
            }
            if (item.cetak_belakang) {
                array.push(item.cetak_belakang);
            }
            if (item.cetak_depan) {
                array.push(item.cetak_depan);
            }
            if (item.cetak_lengan_kanan) {
                array.push(item.cetak_lengan_kanan);
            }
            console.log(array.join(', '));
            // console.log(item, 'option')
            return array.join(',  ');
        }
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/checkout/checkout.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Cart</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content class=" common-bg">\n    <!--Choose shipping location-->\n  <div *ngFor="let item of cart; let idx = index" >\n    <ion-list no-margin class="list-full-border list-products"\n              [ngClass]="{\'grid\': viewType == \'grid\', \'list\': viewType == \'list\'}">\n      <ion-item class="product">\n        <ion-thumbnail item-left *ngIf="item.product.images.length">\n          <img src="http://localhost:8000/uploads/{{ item.product.images[0].images }}" alt="{{ item.jdl_Pdk }}">\n        </ion-thumbnail>\n        <!--item\'s information-->\n        <div>\n          <div text-wrap>{{ item?.product.jdl_Pdk }}</div>\n          <div padding-bottom>\n              <span class="pull-left" ion-text color="danger">{{ item.harga + item.product.harga_awal | currency:\'Rp \':true }} </span>\n              <span class="pull-right" ion-text>  x {{item.kuantitas}}</span>\n              <div class="clear"></div>\n          </div>\n          <h6 text-wrap>\n            {{option(item)}}\n              <!-- <div class="input-qty">\n                <span class="btn">\n                <ion-icon name="ios-remove"></ion-icon>\n                </span>\n                <input type="text" [(ngModel)]="item.kuantitas">\n                <span class="btn">\n                <ion-icon name="ios-add"></ion-icon>\n                </span>\n                <div class="clear"></div>\n              </div>-->\n              <div class="pull-right bottom-info text-lg trash-btn">\n                <ion-icon name="trash" color="gray" class="pull-right" (click)="remove(idx, item.id)"></ion-icon>\n                <div class="clear"></div>\n              </div> \n          </h6>\n        </div>\n      </ion-item>\n    </ion-list>\n    </div>\n  </ion-content>\n  <!-- <ion-footer class="cart-footer" padding>\n    <ion-title>\n      <span ion-text color="gray">Total</span>\n      <br/>\n      <span *ngIf="cart" ion-text color="danger">{{subTotal() | currency:\'Rp \':true }}</span>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="checkout()" color="danger">\n        Checkout\n      </button>\n    </ion-buttons>\n  </ion-footer> -->\n  '/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/checkout/checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(258);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic2_rating__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_category_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_item_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_store_service__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_cart_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_order_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_news_service__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cart_cart__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_categories_categories__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_category_category__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_change_password_change_password__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_currency_converter_currency_converter__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_forgot_password_forgot_password__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_item_item__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_modal_filter_modal_filter__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_modal_item_option_modal_item_option__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_my_account_my_account__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_my_order_my_order__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_order_confirm_order_confirm__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_register_register__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_search_search__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_settings_settings__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_store_store__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_tab_attribute_tab_attribute__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_tab_filter_tab_filter__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_welcome_welcome__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_wish_list_wish_list__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_message_message__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_api_api__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_message_item_message_item__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_profile_profile__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_alamat_alamat__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_freelance_freelance__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_pembayaran_pembayaran__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_ulasan_ulasan__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_checkout_checkout__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import services







// end import services
// end import services
// import pages































// end import pages
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_currency_converter_currency_converter__["a" /* CurrencyConverterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_item_item__["a" /* ItemPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_modal_filter_modal_filter__["a" /* ModalFilterPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_modal_item_option_modal_item_option__["a" /* ModalItemOptionPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_my_order_my_order__["a" /* MyOrderPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_order_confirm_order_confirm__["a" /* OrderConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_store_store__["a" /* StorePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_tab_attribute_tab_attribute__["a" /* TabAttributePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_tab_filter_tab_filter__["a" /* TabFilterPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_wish_list_wish_list__["a" /* WishListPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_message_item_message_item__["a" /* MessageItemPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_alamat_alamat__["a" /* AlamatPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_freelance_freelance__["a" /* FreelancePage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_pembayaran_pembayaran__["a" /* PembayaranPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_ulasan_ulasan__["a" /* UlasanPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_checkout_checkout__["a" /* CheckoutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/alamat/alamat.module#AlamatPageModule', name: 'AlamatPage', segment: 'alamat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/freelance/freelance.module#FreelancePageModule', name: 'FreelancePage', segment: 'freelance', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message-item/message-item.module#MessageItemPageModule', name: 'MessageItemPage', segment: 'message-item', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pembayaran/pembayaran.module#PembayaranPageModule', name: 'PembayaranPage', segment: 'pembayaran', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ulasan/ulasan.module#UlasanPageModule', name: 'UlasanPage', segment: 'ulasan', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic2_rating__["a" /* Ionic2RatingModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_category_category__["a" /* CategoryPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_currency_converter_currency_converter__["a" /* CurrencyConverterPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_item_item__["a" /* ItemPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_modal_filter_modal_filter__["a" /* ModalFilterPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_modal_item_option_modal_item_option__["a" /* ModalItemOptionPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_my_account_my_account__["a" /* MyAccountPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_my_order_my_order__["a" /* MyOrderPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_order_confirm_order_confirm__["a" /* OrderConfirmPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_store_store__["a" /* StorePage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_tab_attribute_tab_attribute__["a" /* TabAttributePage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_tab_filter_tab_filter__["a" /* TabFilterPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_wish_list_wish_list__["a" /* WishListPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_message_message__["a" /* MessagePage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_message_item_message_item__["a" /* MessageItemPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_alamat_alamat__["a" /* AlamatPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_freelance_freelance__["a" /* FreelancePage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_pembayaran_pembayaran__["a" /* PembayaranPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_ulasan_ulasan__["a" /* UlasanPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_checkout_checkout__["a" /* CheckoutPage */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__services_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_14__services_item_service__["a" /* ItemService */],
                __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_16__services_store_service__["a" /* StoreService */],
                __WEBPACK_IMPORTED_MODULE_17__services_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_18__services_order_service__["a" /* OrderService */],
                __WEBPACK_IMPORTED_MODULE_19__services_news_service__["a" /* NewsService */],
                __WEBPACK_IMPORTED_MODULE_43__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */],
                // FileUploadOptions,
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */]
                /* import services */
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_items__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'http://localhost:8000/api/';
var ItemService = (function () {
    function ItemService(http) {
        // this.items = ITEMS;
        this.http = http;
    }
    ItemService.prototype.getAll = function () {
        return this.http.get(apiUrl + 'subcategory/')
            .map(function (response) { return response.json(); });
    };
    // getAll() {
    //   return this.items;
    // }
    ItemService.prototype.getByCategory = function (catId) {
        var items = [];
        for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */].length; i++) {
            if (__WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */][i].category_id == catId) {
                items.push(__WEBPACK_IMPORTED_MODULE_1__mock_items__["a" /* ITEMS */][i]);
            }
        }
        return items;
    };
    ItemService.prototype.getItem = function (id) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].id === parseInt(id)) {
                return this.items[i];
            }
        }
        return null;
    };
    ItemService.prototype.remove = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    ItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], ItemService);
    return ItemService;
}());

// import { Injectable } from '@angular/core';
// import { Http, Response } from "@angular/http";
// import 'rxjs/add/operator/map';
// // import {CATEGORIES} from "./mock-categories";
// let apiUrl = 'http://localhost:8000/api/';
// @Injectable()
// export class ItemService {
//   constructor(public http: Http) {
//      console.log('Hello Subcategory Provider');
//   }
//  getSubcategory(id){
//         return this.http.get(apiUrl+'subcategory/'+id)
//          .map((response:Response)=>response.json());
//  }
// } 
//# sourceMappingURL=item-service.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_my_account_my_account__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_categories_categories__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_my_order_my_order__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_message_message__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import pages








// end import pages
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.pages = [
            {
                title: 'Home',
                icon: 'ios-home-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]
            },
            {
                title: 'Categories',
                icon: 'ios-list-box-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_9__pages_categories_categories__["a" /* CategoriesPage */]
            },
            {
                title: 'Cart',
                icon: 'ios-cart-outline',
                count: 1,
                component: __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__["a" /* CartPage */]
            },
            {
                title: 'My Order',
                icon: 'ios-timer-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_10__pages_my_order_my_order__["a" /* MyOrderPage */]
            },
            {
                title: 'Message',
                icon: 'ios-mail-outline',
                component: __WEBPACK_IMPORTED_MODULE_11__pages_message_message__["a" /* MessagePage */]
            },
            {
                title: 'My Account',
                icon: 'ios-contact-outline',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_7__pages_my_account_my_account__["a" /* MyAccountPage */]
            },
            {
                title: 'Logout',
                icon: 'log-out',
                count: 0,
                component: __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]
            },
        ];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */];
        this.username = localStorage.getItem('username');
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-content class="menu-left">\n    <!-- User profile -->\n    <div padding class="menu-left menu-bg">\n      <a menuClose>\n        <h4 ion-text color="light">{{username}}</h4>\n      </a>\n    </div>\n\n    <ion-list class="list-full-border">\n      <button ion-item menuClose *ngFor="let page of pages" (click)="openPage(page)">\n        <ion-icon item-left name="{{ page.icon }}"></ion-icon>\n        {{ page.title }}\n        <!-- <ion-badge color="danger" item-right *ngIf="page.count">{{ page.count }}</ion-badge> -->\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/app/app.html"*/,
            queries: {
                nav: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */]('content')
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

// // import { Component } from '@angular/core';
// // import { Platform, App, MenuController } from 'ionic-angular';
// // import { StatusBar } from '@ionic-native/status-bar';
// // import { SplashScreen } from '@ionic-native/splash-screen';
// // import { SplitPane } from '../services/split-pane';
// // import { WelcomePage } from '../pages/welcome/welcome';
// // @Component({
// //template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-content class="menu-left">\n    <!-- User profile -->\n    <div padding class="menu-left menu-bg">\n      <a menuClose>\n        <h4 ion-text color="light">{{username}}</h4>\n      </a>\n    </div>\n\n    <ion-list class="list-full-border">\n      <button ion-item menuClose *ngFor="let page of pages" (click)="openPage(page)">\n        <ion-icon item-left name="{{ page.icon }}"></ion-icon>\n        {{ page.title }}\n        <!-- <ion-badge color="danger" item-right *ngIf="page.count">{{ page.count }}</ion-badge> -->\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/app/app.html"*/
// // })
// // export class MyApp {
// //   rootPage:any = WelcomePage;
// //   constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public app: App, public splitPane: SplitPane, public menu: MenuController) {
// //     platform.ready().then(() => {
// //       // Okay, so the platform is ready and our plugins are available.
// //       // Here you can do any higher level native things you might need.
// //       statusBar.styleDefault();
// //       splashScreen.hide();
// //     });
// //   }
// //    backToWelcome(){
// //    const root = this.app.getRootNav();
// //     root.popToRoot();
// //   }
//   // logout(){
//   //   //Api Token Logout 
//   //   localStorage.clear();
//   //   this.menu.enable(false);
//   //    setTimeout(()=> this.backToWelcome(), 1000);
// //   }
// // }
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ITEMS; });
var ITEMS = [
    {
        id: 1,
        category_id: 1,
        name: "Xiaomi Mi 4",
        price: 300.0,
        sale_price: 250,
        shipping: 0,
        num_orders: 1102,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        thumb: "assets/img/items/item_3.jpg",
        images: [
            "assets/img/items/detail/d_1.jpg",
            "assets/img/items/detail/d_2.jpg",
            "assets/img/items/detail/d_3.jpg",
            "assets/img/items/detail/d_4.jpg",
        ],
        short_description: "Original Xiaomi Mi4 M4 FDD LTE 4G Phone Snapdragon 801 Quad Core 5 Inch 1080P FHD IPS 13.0MP MIUI 7 White Black Mobile Phones.",
        description: "",
        option_groups: [
            {
                name: "Bundle",
                options: [
                    {
                        name: "Standard",
                        price: 0
                    },
                    {
                        name: "Add Silicon Case",
                        price: 1
                    },
                    {
                        name: "Add Tempered Glass",
                        price: 1
                    },
                ]
            },
            {
                name: "Color",
                options: [
                    {
                        name: "MI4 CU LTE White",
                        price: 2
                    }
                ]
            }
        ],
        reviews: [
            {
                avatar: "assets/img/user/max.png",
                name: "Slimer",
                time: "01 Jul 2016",
                content: "fast shipping, good communication with seller, understands everything, the phone is working, it seems to be original and not used, came with google play preinstaled and euro plug adapter, batery last 2 days, beautiful phone, did not pay tax at the end but almost.., packed well,",
                stars: 4
            },
            {
                avatar: "assets/img/user/mike.png",
                name: "Muhammed M.",
                time: "01 Jul 2016",
                content: "prodovec ubludok ,tovar ne priehal , i on ne vozvrayil mne svoi dengi,pishy эклюзивно для Русских, chtobi etot geltorotiy ne ponyal",
                stars: 5
            },
        ],
        seller: {
            id: 1,
            name: "FANTACY TECHNOLOGY",
            num_orders: 11102,
            rating: 4.8,
            num_wish_list: 2101,
        }
    },
    {
        id: 2,
        category_id: 1,
        name: "Makeup tool",
        price: 30,
        shipping: 0,
        num_orders: 1102,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        sale_price: null,
        thumb: "assets/img/items/item_4.jpg",
        images: [
            "assets/img/detail/d_1.jpg",
            "assets/img/detail/d_2.jpg",
            "assets/img/detail/d_3.jpg"
        ]
    },
    {
        id: 3,
        category_id: 1,
        name: "Zara coat",
        price: 30,
        shipping: 0,
        num_orders: 1102,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        sale_price: null,
        thumb: "assets/img/items/item_5.jpg",
        images: [
            "assets/img/detail/d_1.jpg",
            "assets/img/detail/d_2.jpg",
            "assets/img/detail/d_3.jpg"
        ]
    },
    {
        id: 4,
        category_id: 1,
        name: "Car phone",
        price: 30,
        shipping: 0,
        num_orders: 1102,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        sale_price: 20,
        thumb: "assets/img/items/item_6.jpg",
        images: [
            "assets/img/detail/d_1.jpg",
            "assets/img/detail/d_2.jpg",
            "assets/img/detail/d_3.jpg"
        ]
    },
    {
        id: 5,
        category_id: 1,
        name: "Iphone 6 case",
        price: 30,
        shipping: 0,
        num_orders: 1102,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        sale_price: 20,
        thumb: "assets/img/items/item_1.jpg",
        images: [
            "assets/img/detail/d_1.jpg",
            "assets/img/detail/d_2.jpg",
            "assets/img/detail/d_3.jpg"
        ]
    },
    {
        id: 6,
        category_id: 1,
        name: "Makeup",
        price: 30,
        shipping: 0,
        num_orders: 1102,
        rating: 4.8,
        num_wish_list: 201,
        on_wish_list: false,
        sale_price: null,
        thumb: "assets/img/items/item_2.jpg",
        images: [
            "assets/img/detail/d_1.jpg",
            "assets/img/detail/d_2.jpg",
            "assets/img/detail/d_3.jpg"
        ]
    }
];
//# sourceMappingURL=mock-items.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CARTS; });
var CARTS = {
    subtotal: 930,
    shipping: 30,
    total: 950,
    sellers: [
        {
            id: 1,
            name: "FANTACY  TECHNOLOGY",
            subtotal: 900,
            shipping: 20,
            total: 920,
            items: [
                {
                    id: 1,
                    name: "Xiaomi Mi 4",
                    price: 300,
                    quantity: 1,
                    thumb: "assets/img/items/item_3.jpg",
                    options: [
                        "Bundle 2",
                        "White"
                    ]
                },
                {
                    id: 1,
                    name: "Xiaomi Mi 5",
                    price: 300,
                    quantity: 2,
                    thumb: "assets/img/items/item_3.jpg",
                    options: [
                        "Bundle 2",
                        "White"
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "Jahurto Inexpensive",
            subtotal: 20,
            shipping: 10,
            total: 30,
            items: [
                {
                    id: 1,
                    name: "Zara coat",
                    price: 20,
                    quantity: 1,
                    thumb: "assets/img/items/item_5.jpg",
                    options: [
                        "XL",
                        "Pink"
                    ]
                }
            ]
        }
    ]
};
//# sourceMappingURL=mock-carts.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ORDERS; });
var ORDERS = [
    {
        id: 3,
        transaction_id: "111200002223",
        created_at: "2016-09-23 23:00:00",
        total: 360,
        items: [
            {
                id: 1,
                name: "Xiaomi Mi 4",
                quantity: 1,
                price: 300,
                thumb: "assets/img/items/item_3.jpg",
            },
            {
                id: 2,
                category_id: 1,
                name: "Makeup tool",
                quantity: 2,
                price: 30,
                thumb: "assets/img/items/item_4.jpg",
            }
        ]
    },
    {
        id: 2,
        transaction_id: "111200002222",
        created_at: "2016-09-23 23:00:00",
        total: 360,
        items: [
            {
                id: 1,
                name: "Zara coat",
                quantity: 1,
                price: 30,
                thumb: "assets/img/items/item_5.jpg",
            },
            {
                id: 2,
                category_id: 1,
                name: "Makeup tool",
                quantity: 2,
                price: 30,
                thumb: "assets/img/items/item_4.jpg",
            }
        ]
    },
    {
        id: 1,
        transaction_id: "111200002221",
        created_at: "2016-09-23 23:00:00",
        total: 360,
        items: [
            {
                id: 1,
                name: "Xiaomi Mi 4",
                quantity: 1,
                price: 300,
                thumb: "assets/img/items/item_3.jpg",
            },
            {
                id: 2,
                category_id: 1,
                name: "Car phone",
                quantity: 2,
                price: 30,
                thumb: "assets/img/items/item_6.jpg",
            }
        ]
    }
];
//# sourceMappingURL=mock-orders.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STORES; });
var STORES = [];
//# sourceMappingURL=mock-stores.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_newss__ = __webpack_require__(325);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsService = (function () {
    function NewsService() {
        this.newss = __WEBPACK_IMPORTED_MODULE_1__mock_newss__["a" /* NEWSS */];
    }
    NewsService.prototype.getAll = function () {
        return this.newss;
    };
    NewsService.prototype.getItem = function (id) {
        for (var i = 0; i < this.newss.length; i++) {
            if (this.newss[i].id === parseInt(id)) {
                return this.newss[i];
            }
        }
        return null;
    };
    NewsService.prototype.remove = function (item) {
        this.newss.splice(this.newss.indexOf(item), 1);
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], NewsService);
    return NewsService;
}());

//# sourceMappingURL=news-service.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NEWSS; });
var NEWSS = [];
//# sourceMappingURL=mock-newss.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrencyConverterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CurrencyConverterPage = (function () {
    function CurrencyConverterPage(nav) {
        this.nav = nav;
    }
    CurrencyConverterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-currency-converter',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/currency-converter/currency-converter.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>CurrencyConverter</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="currency-converter">\n\n</ion-content>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/currency-converter/currency-converter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], CurrencyConverterPage);
    return CurrencyConverterPage;
}());

//# sourceMappingURL=currency-converter.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_filter_tab_filter__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_attribute_tab_attribute__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ModalFilterPage = (function () {
    function ModalFilterPage(nav, navParams) {
        this.nav = nav;
        this.navParams = navParams;
        // tabs
        this.tabFilter = __WEBPACK_IMPORTED_MODULE_2__tab_filter_tab_filter__["a" /* TabFilterPage */];
        this.tabAttribute = __WEBPACK_IMPORTED_MODULE_3__tab_attribute_tab_attribute__["a" /* TabAttributePage */];
        this.selectedIndex = 0;
        if (navParams.get('tabName') == 'attribute') {
            this.selectedIndex = 1;
        }
    }
    ModalFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-modal-filter',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/modal-filter/modal-filter.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-tabs class="modal-filter" color="primary" tabbarPlacement="top" [selectedIndex]="selectedIndex" #filterTabs>\n  <ion-tab tabTitle="FILTER" [root]="tabFilter"></ion-tab>\n  <ion-tab tabTitle="ATTRIBUTES" [root]="tabAttribute"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/modal-filter/modal-filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], ModalFilterPage);
    return ModalFilterPage;
}());

//# sourceMappingURL=modal-filter.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var SettingsPage = (function () {
    function SettingsPage(nav) {
        this.nav = nav;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/settings/settings.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list class="list-full-border">\n    <ion-item class="item-divider">General</ion-item>\n\n    <ion-item>\n      <ion-label>Vibrate on touch</ion-label>\n      <ion-toggle checked="false" color="secondary"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Stay awake</ion-label>\n      <ion-toggle checked="false" color="secondary"></ion-toggle>\n    </ion-item>\n\n    <ion-item>\n      Choose a custom ringtone\n      <ion-icon name="ios-arrow-forward" color="gray" item-right></ion-icon>\n    </ion-item>\n\n    <ion-item class="item-divider">Storage</ion-item>\n\n    <ion-item>\n      Clean cash history data\n      <ion-icon name="ios-arrow-forward" color="gray" item-right></ion-icon>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_store_service__ = __webpack_require__(232);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var StorePage = (function () {
    function StorePage(nav, storeService) {
        this.nav = nav;
        this.storeService = storeService;
    }
    StorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-store',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/store/store.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Store</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="store">\n\n</ion-content>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/store/store.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_store_service__["a" /* StoreService */]])
    ], StorePage);
    return StorePage;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_item__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var WishListPage = (function () {
    function WishListPage(alerCtrl, modalCtrl, nav, itemService, apiProvider) {
        var _this = this;
        this.alerCtrl = alerCtrl;
        this.modalCtrl = modalCtrl;
        this.nav = nav;
        this.itemService = itemService;
        this.apiProvider = apiProvider;
        // list items of this category
        this.viewType = 'list';
        // get list items
        this.apiProvider.getWist().then(function (data) {
            _this.wist = data;
            console.log(data, 'cart');
        }).catch(function (err) {
            console.log(err);
        });
        this.getWist();
    }
    WishListPage.prototype.getWist = function () {
        console.log('getWist');
    };
    // view a item
    WishListPage.prototype.viewItem = function (itemId) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__item_item__["a" /* ItemPage */], { id: itemId });
    };
    // get discount percent
    WishListPage.prototype.discountPercent = function (originPrice, salePrice) {
        return Math.round((salePrice - originPrice) * 100 / originPrice);
    };
    // remove item from wish list
    WishListPage.prototype.remove = function (index) {
        this.wist.splice(index, 1);
    };
    WishListPage.prototype.viewList = function () {
        this.viewType = 'list';
    };
    // swith to grid view
    WishListPage.prototype.viewGrid = function () {
        this.viewType = 'grid';
    };
    WishListPage.prototype.doConfirm = function () {
        var confirm = this.alerCtrl.create({
            message: 'Produk Berhasil dimasukan ke Keranjang Belanja',
            buttons: [
                {
                    text: 'Oke',
                    handler: function () {
                        console.log('Lanjutkan Belanja');
                    }
                }
            ]
        });
        confirm.present();
    };
    WishListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-wish-list',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/wish-list/wish-list.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>WishList</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class=" common-bg">\n\n  <div *ngFor="let item of wist; let idx = index" >\n  <ion-list no-margin class="list-full-border list-products"\n            [ngClass]="{\'grid\': viewType == \'grid\', \'list\': viewType == \'list\'}">\n    <ion-item class="product">\n      <ion-thumbnail item-left>\n        <img src="http://localhost:8000/uploads/{{ item.images }}" alt="{{ item.jdl_Pdk }}">\n      </ion-thumbnail>\n      <!--item\'s information-->\n      <div>\n        <div text-wrap>{{ item?.jdl_Pdk }}</div>\n        <div padding-bottom>\n            <span class="pull-left" ion-text color="danger">{{ item.harga_awal | currency:\'Rp \':true }}</span>\n            <div class="clear"></div>\n            <div>\n              <div class="clear"></div>\n               <div class="pull-right bottom-info text-lg trash-btn">\n              <ion-icon name="trash" color="gray" class="pull-right" (click)="remove(idx)"></ion-icon>\n              <div class="clear"></div>\n            </div>\n            </div>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n  </div>\n</ion-content>\n<ion-footer class="cart-footer" padding>\n  <ion-buttons end>\n    <button ion-button (click)="doConfirm()" color="danger">\n      Tambahkan Semua Ke Keranjang\n    </button>\n  </ion-buttons>\n</ion-footer>'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/wish-list/wish-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_item_service__["a" /* ItemService */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], WishListPage);
    return WishListPage;
}());

//# sourceMappingURL=wish-list.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {CATEGORIES} from "./mock-categories";
var apiUrl = 'http://localhost:8000/api/';
var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
        console.log('Hello Category Provider');
    }
    CategoryService.prototype.getMenu = function () {
        return this.http.get(apiUrl + 'categories')
            .map(function (response) { return response.json(); });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CategoryService);
    return CategoryService;
}());

//# sourceMappingURL=category-service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_item_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_item_option_modal_item_option__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ulasan_ulasan__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order_confirm_order_confirm__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var ItemPage = (function () {
    function ItemPage(nav, itemService, modalCtrl, apiProvider, navParams) {
        this.nav = nav;
        this.itemService = itemService;
        this.modalCtrl = modalCtrl;
        this.apiProvider = apiProvider;
        this.navParams = navParams;
        this.switch = 'ulasan';
        this.form = {
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
        this.finishing = [
            { text: 'Laminating Glossy' },
            { text: 'Embosse' }
        ];
        // get the first item as sample data
        // this.item = itemService.getItem(1);
        this.user_id = localStorage.getItem('user_id');
        this.quantity = [
            { text: 50 },
            { text: 100 }
        ];
        this.jenis_kertas = [
            { text: 'Standard' },
            { text: 'Extra Fancy' }
        ];
        this.id = navParams.get("id");
        this.getItem(this.id);
        this.form.product_id = this.id;
    }
    ItemPage_1 = ItemPage;
    ItemPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdduserPage');
    };
    ItemPage.prototype.onChange = function () {
        console.log(this.form.kuantitas);
    };
    ItemPage.prototype.addToCart = function () {
        this.apiProvider.postToCart(this.form).then(function (data) {
            console.log(data);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ItemPage.prototype.addToWist = function () {
        this.apiProvider.postToWist(this.id).then(function (data) {
            console.log(data);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ItemPage.prototype.getItem = function (id) {
        var _this = this;
        this.apiProvider.getProduct(id).then(function (data) {
            _this.item = data;
            _this.images = _this.item.images;
            _this.apiProvider.rate(_this.item.freelancer_id).then(function (data) {
                _this.rate = data;
            }).catch(function (err) {
                console.log(err);
            });
            console.log(_this.images);
            _this.apiProvider.getUlasan(_this.item.id).then(function (data) {
                _this.ulasan = data;
                console.log(_this.ulasan);
            }).catch(function (err) {
                console.log(err);
            });
            _this.apiProvider.productFreelancer(_this.item.freelancer_id).then(function (data) {
                _this.products = data;
            }).catch(function (err) {
                console.log(err);
            });
        }).catch(function (err) {
            console.log(err);
        });
    };
    // add or remove item on wish list
    ItemPage.prototype.toggleWishList = function (item) {
        item.on_wish_list = !item.on_wish_list;
    };
    // get item options group name
    ItemPage.prototype.getOptionGroupsName = function (item) {
        var optionGroups = [];
        for (var i = 0; i < item.option_groups.length; i++) {
            optionGroups.push(item.option_groups[i].name);
        }
        return optionGroups.join(',');
    };
    // make array with range is n
    ItemPage.prototype.range = function (n) {
        return new Array(n);
    };
    ItemPage.prototype.viewOption = function (item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__modal_item_option_modal_item_option__["a" /* ModalItemOptionPage */], { item: item });
    };
    ItemPage.prototype.tulisUlasan = function (id) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__ulasan_ulasan__["a" /* UlasanPage */], { id: id });
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.ulasan = data;
            }
        });
        modal.present();
    };
    ItemPage.prototype.valid = function () {
        var _this = this;
        if (this.ulasan) {
            var user = this.ulasan.find(function (x) { return x.user_id === _this.user_id; });
            if (user) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    ItemPage.prototype.viewItem = function (itemId) {
        this.nav.push(ItemPage_1, { id: itemId });
    };
    ItemPage.prototype.showOptions = function (item) {
        var _this = this;
        console.log('hai');
        // show modal
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__order_confirm_order_confirm__["a" /* OrderConfirmPage */], { item: item });
        // listen for modal close
        modal.onDidDismiss(function (data) {
            if (data) {
                _this.option = data;
            }
        });
        modal.present();
    };
    ItemPage.prototype.options = function () {
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
        if (this.option) {
            var array = [];
            if (this.option.jenis_cetak) {
                array.push(this.option.jenis_cetak);
            }
            if (this.option.jenis_kertas) {
                array.push(this.option.jenis_kertas);
            }
            if (this.option.bentuk) {
                array.push(this.option.bentuk);
            }
            if (this.option.ukuran) {
                array.push(this.option.ukuran);
            }
            if (this.option.jilid) {
                array.push(this.option.jilid);
            }
            if (this.option.lembar) {
                array.push(this.option.lembar);
            }
            if (this.option.material) {
                array.push(this.option.material);
            }
            if (this.option.model) {
                array.push(this.option.model);
            }
            if (this.option.bahan) {
                array.push(this.option.bahan);
            }
            if (this.option.sisi) {
                array.push(this.option.sisi);
            }
            if (this.option.kain) {
                array.push(this.option.kain);
            }
            if (this.option.cetak_belakang) {
                array.push(this.option.cetak_belakang);
            }
            if (this.option.cetak_depan) {
                array.push(this.option.cetak_depan);
            }
            if (this.option.cetak_lengan_kanan) {
                array.push(this.option.cetak_lengan_kanan);
            }
            console.log(array.join(', '));
            console.log(this.option, 'option');
            return array.join(',  ');
        }
    };
    ItemPage.prototype.beli = function () {
        console.log(this.option);
        this.apiProvider.postToCart(this.option);
    };
    ItemPage = ItemPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-item',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/item/item.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ item?.jdl_Pdk }}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class=" common-bg">\n  <div class="card light-bg">\n    <!-- slider on top-->\n    <ion-slides pager autoplay="2000" class="border-bottom">\n      <ion-slide>\n        <img *ngIf="item?.images" src="http://localhost:8000/uploads/{{ item?.images[0].images }}" alt="">\n      </ion-slide>\n    </ion-slides>\n    <div class="rlt">\n    </div>\n    <div text-center padding margin-top class="border-bottom">\n      <h2>{{item?.jdl_Pdk}}</h2>\n      <h3 class="price" ion-text color="danger" margin-top *ngIf="item?.harga_awal">{{ item?.harga_awal | currency:\'Rp \':true\n        }}</h3>\n    </div>\n    <!-- <ion-grid>\n      <ion-row class="item-stats">\n        <ion-col text-center>\n          <div class="text-lg">5</div>\n          <span class="text-sm" ion-text color="gray">Ulasan</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n  </div>\n <!--Description-->\n  <div class="card light-bg" margin-top>\n    <div class="border-bottom bold" ion-text color="gray" padding>Deskripsi Produk</div>\n    <div padding>{{ item?.description }}</div>\n  </div>\n  <div class="card light-bg" margin-top>\n    <div class="border-bottom bold" ion-text color="gray" padding>\n      <span text-left> Option Produk</span>\n      <span text-right class="bold" ion-text color="secondary" (click)="showOptions(item)">SELECT</span>\n      <span float-right *ngIf="option?.kuantitas">x{{option?.kuantitas}}</span>\n    </div>\n    <div text-wrap padding>{{options()}}</div>\n  </div>\n \n   <!--Seller info-->\n  <div class="card light-bg" margin-top>\n    <div padding class="border-bottom bold" ion-text color="gray">\n      Seller info\n    </div>\n    <div class="border-bottom" padding>\n      <ion-item class="freelance">\n        <ion-avatar item-start>\n          <img *ngIf="item?.photo" src="http://localhost:8000/member/{{item?.photo}}">\n        </ion-avatar>\n        <h2> {{item?.username}}</h2>\n        <rating *ngIf="rate" [(ngModel)]="rate.rate" \n                readOnly="true" \n                max="5" \n                emptyStarIconName="star-outline" \n                halfStarIconName="star-half" \n                starIconName="star" \n                nullable="false"> \n        </rating>\n      </ion-item>\n    </div>\n\n    <!-- <ion-grid>\n      <ion-row class="item-stats">\n        <ion-col text-center>\n          <div class="text-lg">5</div>\n          <span class="text-sm" ion-text color="gray">Ulasan</span>\n        </ion-col>\n        <ion-col text-center>\n          <div class="text-lg">2</div>\n          <span class="text-sm" ion-text color="gray">Produk</span>\n        </ion-col>  \n      </ion-row>\n    </ion-grid> -->\n    <ion-segment [(ngModel)]="switch">\n        <ion-segment-button value="ulasan">\n          Ulasan\n        </ion-segment-button>\n        <ion-segment-button value="productlist">\n          Produk\n        </ion-segment-button>\n      </ion-segment>\n  </div>\n\n  <!--Feed backs-->\n  <div [ngSwitch]="switch">\n    <div class="card light-bg" margin-top *ngSwitchCase="\'ulasan\'">\n      <div padding class="ulasan header border-bottom bold" ion-text color="gray">\n        <span class="title ulasan" style="float: left;">Ulasan</span> \n        <button float-end small ion-button [disabled]="valid" (click)="tulisUlasan(item.id)">Tulis Ulasan Anda</button>\n      </div>\n      <div *ngFor="let x of ulasan">\n        <ion-item text-wrap class="ulasan">\n          <h2>{{x?.username}}</h2>\n          <div>\n            <div>\n              <span class="pull-left">\n                {{x?.judul}}\n              </span>\n              <span class="pull-right text-sm">\n                  <rating *ngIf="x" [(ngModel)]="x.rate" \n                    readOnly="true" \n                    max="5" \n                    emptyStarIconName="star-outline" \n                    halfStarIconName="star-half" \n                    starIconName="star" \n                    nullable="false"\n                    class="ulasan"> \n                  </rating>\n              </span>\n              <div class="clear"></div>\n            </div>\n            <div>\n              <span class="text-sm" ion-text color="gray">{{x?.created_at}}</span><br>\n            </div>\n            <br>\n            <p class="text-sm">\n              {{x?.komen}}\n            </p>\n          </div>\n        </ion-item>\n      </div>        \n    </div>\n    <div *ngSwitchCase="\'productlist\'">\n      <ion-scroll scrollX=true style="white-space:nowrap; height: 200px">\n        <div class="inner">\n          <ion-card no-margin *ngFor="let product of products" (click)="viewItem(product.id)">\n            <ion-thumbnail *ngIf="product.images.length">\n              <img *ngIf="product.images" src="http://localhost:8000/uploads/{{ product?.images[0].images }}" alt="">\n            </ion-thumbnail>\n            \n            <ion-card-title text-center text-wrap>\n              {{product?.jdl_Pdk}}\n            </ion-card-title>\n            <ion-card-content text-center *ngIf="product.materials.length">\n              <div class="price" ion-text color="danger">{{product?.materials[0].harga + product?.harga_awal |  currency:\'Rp \':true}}</div>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </ion-scroll>\n    </div>\n  </div>\n     <ion-grid>\n      <ion-row>\n        <ion-col>\n          <button ion-button color="primary" (click)="beli()" block>Masukkan Keranang</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/item/item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_navigation_nav_params__["a" /* NavParams */]])
    ], ItemPage);
    return ItemPage;
    var ItemPage_1;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cart_service__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_item_option_modal_item_option__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var CartPage = (function () {
    function CartPage(nav, cartService, apiProvider) {
        var _this = this;
        this.nav = nav;
        this.cartService = cartService;
        this.apiProvider = apiProvider;
        // public kurir: string;
        this.viewType = 'list';
        this.items = [
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
        ];
        this.kurir = 'jne';
        this.service = {
            cost: [
                {
                    value: '',
                    etd: '',
                    note: ''
                }
            ],
            service: '',
            descriptions: ''
        };
        // set cart data
        // this.cart = cartService.getAll();
        this.apiProvider.getCart().then(function (data) {
            _this.cart = data;
            _this.subTotal = _this.subTotal;
            // console.log(data, 'cart');
        }).catch(function (err) {
            // console.log(err);
        });
        this.getCart();
    }
    CartPage.prototype.getCart = function () {
        console.log('getcart');
    };
    // remove item
    CartPage.prototype.remove = function (itemIndex, id) {
        var _this = this;
        this.apiProvider.delItem(id).then(function (data) {
            _this.cart.splice(itemIndex, 1);
            // console.log(data);
        }).catch(function (err) {
            // console.log(err);
        });
    };
    // place order
    CartPage.prototype.checkout = function () {
        console.log(this.cart, 'asdsad');
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__modal_item_option_modal_item_option__["a" /* ModalItemOptionPage */], { cart: this.cart });
        // this.nav.setRoot(MyOrderPage, {cart: this.cart});
    };
    CartPage.prototype.subTotal = function () {
        var total = 0;
        if (this.cart.length) {
            this.cart.forEach(function (element) {
                total = total + ((element.product.harga_awal + element.harga) * element.kuantitas);
                console.log(element.product.harga_awal, element.harga, element.kuantitas);
            });
            // console.log(total, 'total');
            return total;
        }
    };
    CartPage.prototype.option = function (item) {
        if (item) {
            var array = [];
            if (item.jenis_cetak) {
                array.push(item.jenis_cetak);
            }
            if (item.jenis_kertas) {
                array.push(item.jenis_kertas);
            }
            if (item.bentuk) {
                array.push(item.bentuk);
            }
            if (item.ukuran) {
                array.push(item.ukuran);
            }
            if (item.jilid) {
                array.push(item.jilid);
            }
            if (item.lembar) {
                array.push(item.lembar);
            }
            if (item.material) {
                array.push(item.material);
            }
            if (item.model) {
                array.push(item.model);
            }
            if (item.bahan) {
                array.push(item.bahan);
            }
            if (item.sisi) {
                array.push(item.sisi);
            }
            if (item.kain) {
                array.push(item.kain);
            }
            if (item.cetak_belakang) {
                array.push(item.cetak_belakang);
            }
            if (item.cetak_depan) {
                array.push(item.cetak_depan);
            }
            if (item.cetak_lengan_kanan) {
                array.push(item.cetak_lengan_kanan);
            }
            console.log(array.join(', '));
            // console.log(item, 'option')
            return array.join(',  ');
        }
    };
    CartPage.prototype.total = function () {
        this._total = this._subtotal + 20000;
    };
    CartPage.prototype.viewList = function () {
        this.viewType = 'list';
    };
    // swith to grid view
    CartPage.prototype.viewGrid = function () {
        this.viewType = 'grid';
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/cart/cart.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cart</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class=" common-bg">\n  <!--Choose shipping location-->\n<div *ngFor="let item of cart; let idx = index" >\n  <ion-list no-margin class="list-full-border list-products"\n            [ngClass]="{\'grid\': viewType == \'grid\', \'list\': viewType == \'list\'}">\n    <ion-item class="product">\n      <ion-thumbnail item-left *ngIf="item.product.images.length">\n        <img src="http://localhost:8000/uploads/{{ item.product.images[0].images }}" alt="{{ item.jdl_Pdk }}">\n      </ion-thumbnail>\n      <!--item\'s information-->\n      <div>\n        <div text-wrap>{{ item?.product.jdl_Pdk }}</div>\n        <div padding-bottom>\n            <span class="pull-left" ion-text color="danger">{{ item.harga + item.product.harga_awal | currency:\'Rp \':true }} </span>\n            <span class="pull-right" ion-text>  x {{item.kuantitas}}</span>\n            <div class="clear"></div>\n        </div>\n        <h6 text-wrap>\n          {{option(item)}}\n            <!-- <div class="input-qty">\n              <span class="btn">\n              <ion-icon name="ios-remove"></ion-icon>\n              </span>\n              <input type="text" [(ngModel)]="item.kuantitas">\n              <span class="btn">\n              <ion-icon name="ios-add"></ion-icon>\n              </span>\n              <div class="clear"></div>\n            </div>-->\n            <div class="pull-right bottom-info text-lg trash-btn">\n              <ion-icon name="trash" color="gray" class="pull-right" (click)="remove(idx, item.id)"></ion-icon>\n              <div class="clear"></div>\n            </div> \n        </h6>\n      </div>\n    </ion-item>\n  </ion-list>\n  </div>\n</ion-content>\n<ion-footer class="cart-footer" padding>\n  <ion-title>\n    <span ion-text color="gray">Total</span>\n    <br/>\n    <span *ngIf="cart" ion-text color="danger">{{subTotal() | currency:\'Rp \':true }}</span>\n  </ion-title>\n  <ion-buttons end>\n    <button ion-button (click)="checkout()" color="danger">\n      Checkout\n    </button>\n  </ion-buttons>\n</ion-footer>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/cart/cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {MyApp} from '../../app/app.component'


/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(nav, userService, loadingCtrl, toastCtrl, storage) {
        this.nav = nav;
        this.userService = userService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loginData = { email: '', password: '' };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('VIew Login Sukses');
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        this.showLoader();
        this.userService.login(this.loginData).then(function (result) {
            _this.loading.dismiss();
            _this.data = result;
            // this.storage.set('user_id', this.data.user_id);
            // this.storage.set('token', this.data.api_token);
            // let token;
            // this.storage.get('token').then((val) => {
            //   console.log(val);
            //   token = val;
            //   console.log(token, 'wew');
            // })
            localStorage.setItem('token', _this.data.api_token);
            localStorage.setItem('user_id', _this.data.id);
            console.log(_this.data.username);
            localStorage.setItem('username', _this.data.username);
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
            console.log('Berhasil Masuk');
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast(err);
        });
    };
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    // go to forgot password page
    LoginPage.prototype.forgotPwd = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    LoginPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/login/login.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding class="login">\n <form (submit)="doLogin()">\n      <ion-list class="list-form">\n        <ion-item>\n          <ion-input [(ngModel)]="loginData.email"  name="email" type="text" value="" placeholder="Email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input [(ngModel)]="loginData.password"  name="password" type="password" placeholder="Password"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button color="primary" block type="submit">LOGIN</button>\n </form>\n      <div class="align-bottom" padding text-center>\n        No Account? <span class="bold" (click)="register()">Register</span>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

// import {Component} from '@angular/core';
// import {NavController, ToastController } from 'ionic-angular';
// import {MyApp} from '../../app/app.component';
// import {UserService} from '../../services/user-service';
// /**
//  * Generated class for the Login page.
//  *
//  * See http://ionicframework.com/docs/components/#navigation for more info
//  * on Ionic pages and navigation.
//  */
// @Component({
//   selector: 'page-login',
//template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/login/login.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding class="login">\n <form (submit)="doLogin()">\n      <ion-list class="list-form">\n        <ion-item>\n          <ion-input [(ngModel)]="loginData.email"  name="email" type="text" value="" placeholder="Email"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input [(ngModel)]="loginData.password"  name="password" type="password" placeholder="Password"></ion-input>\n        </ion-item>\n      </ion-list>\n      <button ion-button color="primary" block type="submit">LOGIN</button>\n </form>\n      <div class="align-bottom" padding text-center>\n        No Account? <span class="bold" (click)="register()">Register</span>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/login/login.html"*/,
// })
// export class LoginPage {
//   resposeData : any;
//   userData = {"email":"", "password":""};
//   constructor(public navCtrl: NavController, public userService: UserService, private toastCtrl:ToastController) {
//   }
//   ionViewDidLoad() {
//     console.log('ionViewDidLoad Login');
//   }
//   login(){
//    if(this.userData.email && this.userData.password){
//     this.userService.postData(this.userData, "login").then((result) =>{
//     this.resposeData = result;
//     console.log(this.resposeData);
//     if(this.resposeData.userData){
//      localStorage.setItem('userData', JSON.stringify(this.resposeData) )
//     this.navCtrl.push(MyApp);
//   }
//   else{
//     this.presentToast("Please give valid username and password");
//   }
//     }, (err) => {
//       //Connection failed message
//     });
//    }
//    else{
//     this.presentToast("Give username and password");
//    }
//   }
//   presentToast(msg) {
//     let toast = this.toastCtrl.create({
//       message: msg,
//       duration: 2000
//     });
//     toast.present();
//   }
// }
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_category_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_item_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories_categories__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__category_category__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_item__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cart_cart__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(nav, categoryService, itemService) {
        // this.categories = categoryService.getAll();
        var _this = this;
        this.nav = nav;
        this.categoryService = categoryService;
        this.itemService = itemService;
        // list slides for slider
        this.slides = [
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
        this.viewType = 'grid';
        itemService.getAll().subscribe(function (response) {
            _this.subcategory = response;
            console.log(_this.subcategory);
        });
    }
    // view categories
    HomePage.prototype.viewCategories = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__categories_categories__["a" /* CategoriesPage */]);
    };
    // view a category
    HomePage.prototype.viewSub = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__category_category__["a" /* CategoryPage */], { id: id });
    };
    // view a item
    HomePage.prototype.viewItem = function (itemId) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__item_item__["a" /* ItemPage */], { id: itemId });
    };
    // go to search page
    HomePage.prototype.goToSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */]);
    };
    // view cart
    HomePage.prototype.goToCart = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_8__cart_cart__["a" /* CartPage */]);
    };
    // switch to list view
    HomePage.prototype.viewList = function () {
        this.viewType = 'list';
    };
    // swith to grid view
    HomePage.prototype.viewGrid = function () {
        this.viewType = 'grid';
    };
    // get discount percent
    HomePage.prototype.discountPercent = function (originPrice, salePrice) {
        return Math.round((salePrice - originPrice) * 100 / originPrice);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/hai/project/mobile-ecommerce/src/pages/home/home.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="goToSearch()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      <button ion-button (click)="goToCart()">\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class=" common-bg">\n  <!-- slider on top-->\n  <ion-slides pager autoplay="2000">\n    <ion-slide *ngFor="let slide of slides">\n      <img src="{{ slide.src }}" alt="">\n    </ion-slide>\n  </ion-slides>\n  <!--List of items-->\n  <div style="background-color: white" *ngFor="let sub of subcategory" >\n    <h4 class="nsub">{{sub.name}}</h4>\n    <span ion-text color="primary" class="pull-right" (click)="viewSub(sub.id)" style="margin-right: 7px">Lihat Semua</span>\n  <ion-list no-margin class="list-full-border list-products"\n            [ngClass]="{\'grid\': viewType == \'grid\', \'list\': viewType == \'list\'}">\n    <ion-item class="product" *ngFor="let item of sub?.products" (click)="viewItem(item.id)">\n      <ion-thumbnail item-left *ngIf="item.images.length">\n        <img src="http://localhost:8000/uploads/{{ item.images[0].images }}">\n      </ion-thumbnail>\n      <!--item\'s information-->\n      <div>\n        <div text-wrap>{{ item.jdl_Pdk }}</div>\n        <div>\n          <span ion-text color="danger" *ngIf="item.harga_awal">{{ item?.harga_awal | currency:\'Rp \':true }}</span>\n        </div>\n      </div>\n    </ion-item>\n  </ion-list>\n  </div>\n</ion-content>\n<ion-footer class="category">\n  <ion-toolbar position="bottom">\n    <!--filter button-->\n    <ion-buttons text-center start>\n      <button ion-button icon-left (click)="viewGrid()">\n        <ion-icon name="apps"></ion-icon>\n        Grid View\n      </button>\n    </ion-buttons>\n    <!--attribute button-->\n    <ion-buttons text-center end>\n      <button ion-button icon-left (click)="viewList()">\n        <ion-icon name="list"></ion-icon>\n        List View\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n'/*ion-inline-end:"/home/hai/project/mobile-ecommerce/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_3__services_item_service__["a" /* ItemService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
// import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// //let apiUrl = "http://localhost/PHP-Slim-Restful/api/";
// let apiUrl = 'http://localhost:8000/api/auth/';
// /*
//   Generated class for the AuthService provider.
//   See https://angular.io/docs/ts/latest/guide/dependency-injection.html
//   for more info on providers and Angular 2 DI.
// */
// @Injectable()
// export class UserService {
//   constructor(public http: Http) {
//     console.log('Hello AuthService Provider');
//   }
//   postData(credentials, type){
//     return new Promise((resolve, reject) =>{
//       let headers = new Headers();
//       this.http.post(apiUrl+type, JSON.stringify(credentials), {headers: headers}).
//       subscribe(res =>{
//         resolve(res.json());
//       }, (err) =>{
//         reject(err);
//       });
//     });
//   }
// }



var apiUrl = 'http://localhost:8000/api/auth/';
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        console.log('Auth Sukses');
    }
    UserService.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(apiUrl + 'login', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    UserService.prototype.register = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(apiUrl + 'register', JSON.stringify(data), { headers: headers })
                .subscribe(function (res) {
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    UserService.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('X-Auth-Token', localStorage.getItem('token'));
            _this.http.post(apiUrl + 'logout', {}, { headers: headers })
                .subscribe(function (res) {
                localStorage.clear();
            }, function (err) {
                reject(err);
            });
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=user-service.js.map

/***/ })

},[236]);
//# sourceMappingURL=main.js.map