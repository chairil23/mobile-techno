import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { Ionic2RatingModule } from 'ionic2-rating';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';

// import services
import {CategoryService} from '../services/category-service';
import {ItemService} from '../services/item-service';
import {UserService} from '../services/user-service';
import {StoreService} from '../services/store-service';
import {CartService} from '../services/cart-service';
import {OrderService} from '../services/order-service';
import {NewsService} from '../services/news-service';

// end import services
// end import services

// import pages
import {CartPage} from '../pages/cart/cart';
import {CategoriesPage} from '../pages/categories/categories';
import {CategoryPage} from '../pages/category/category';
import {ChangePasswordPage} from '../pages/change-password/change-password';
import {CurrencyConverterPage} from '../pages/currency-converter/currency-converter';
import {ForgotPasswordPage} from '../pages/forgot-password/forgot-password';
import {HomePage} from '../pages/home/home';
import {ItemPage} from '../pages/item/item';
import {LoginPage} from '../pages/login/login';
import {ModalFilterPage} from '../pages/modal-filter/modal-filter';
import {ModalItemOptionPage} from '../pages/modal-item-option/modal-item-option';
import {MyAccountPage} from '../pages/my-account/my-account';
import {MyOrderPage} from '../pages/my-order/my-order';
import {OrderConfirmPage} from '../pages/order-confirm/order-confirm';
import {RegisterPage} from '../pages/register/register';
import {SearchPage} from '../pages/search/search';
import {SettingsPage} from '../pages/settings/settings';
import {StorePage} from '../pages/store/store';
import {TabAttributePage} from '../pages/tab-attribute/tab-attribute';
import {TabFilterPage} from '../pages/tab-filter/tab-filter';
import {WelcomePage} from '../pages/welcome/welcome';
import {WishListPage} from '../pages/wish-list/wish-list';
import {MessagePage} from '../pages/message/message';
import { ApiProvider } from '../providers/api/api';
import { MessageItemPage } from '../pages/message-item/message-item';
import {ProfilePage} from '../pages/profile/profile';
import {AlamatPage} from '../pages/alamat/alamat';
import {FreelancePage} from '../pages/freelance/freelance';
import {PembayaranPage} from '../pages/pembayaran/pembayaran'
import {UlasanPage} from '../pages/ulasan/ulasan'
import {CheckoutPage} from '../pages/checkout/checkout'
// end import pages

@NgModule({
  declarations: [
    MyApp,
    CartPage,
    CategoriesPage,
    CategoryPage,
    ChangePasswordPage,
    CurrencyConverterPage,
    ForgotPasswordPage,
    HomePage,
    ItemPage,
    LoginPage,
    ModalFilterPage,
    ModalItemOptionPage,
    MyAccountPage,
    MyOrderPage,
    OrderConfirmPage,
    RegisterPage,
    SearchPage,
    SettingsPage,
    StorePage,
    TabAttributePage,
    TabFilterPage,
    WelcomePage,
    WishListPage,
    MessagePage,
    MessageItemPage,
    ProfilePage,
    AlamatPage,
    FreelancePage,
    PembayaranPage,
    UlasanPage,
    CheckoutPage
  ],
  imports: [
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    BrowserModule,HttpModule,HttpClientModule,
    IonicModule.forRoot(MyApp),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CartPage,
    CategoriesPage,
    CategoryPage,
    ChangePasswordPage,
    CurrencyConverterPage,
    ForgotPasswordPage,
    HomePage,
    ItemPage,
    LoginPage,
    ModalFilterPage,
    ModalItemOptionPage,
    MyAccountPage,
    MyOrderPage,
    OrderConfirmPage,
    RegisterPage,
    SearchPage,
    SettingsPage,
    StorePage,
    TabAttributePage,
    TabFilterPage,
    WelcomePage,
    WishListPage,
    MessagePage,
    MessageItemPage,
    ProfilePage,
    AlamatPage,
    FreelancePage,
    PembayaranPage,
    UlasanPage,
    CheckoutPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
    StatusBar,
    SplashScreen,
    CategoryService,
    ItemService,
    UserService,
    StoreService,
    CartService,
    OrderService,
    NewsService,
    ApiProvider,
    FileTransfer,
    // FileUploadOptions,
    FileTransferObject,
    File,
    Camera
    /* import services */
  ]
})
export class AppModule {
}
