webpackJsonp([0],{

/***/ 143:
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
webpackEmptyAsyncContext.id = 143;

/***/ }),

/***/ 185:
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
webpackEmptyAsyncContext.id = 185;

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__discovery_discovery__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookmark_bookmark__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__discovery_discovery__["a" /* DiscoveryPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__bookmark_bookmark__["a" /* BookmarkPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\TUGAS\Joints\Ionic\KultureJourney\src\pages\tabs\tabs.html"*/'<ion-tabs color="tabs-color" no-border>\n  <ion-tab [root]="tab1Root" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabIcon="compass"></ion-tab>\n  <ion-tab [root]="tab3Root" tabIcon="bookmark"></ion-tab>\n  <ion-tab [root]="tab4Root" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"D:\TUGAS\Joints\Ionic\KultureJourney\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscoveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DiscoveryPage = (function () {
    function DiscoveryPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    DiscoveryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-discovery',template:/*ion-inline-start:"D:\TUGAS\Joints\Ionic\KultureJourney\src\pages\discovery\discovery.html"*/'<ion-header no-border>\n  <ion-navbar transparent>\n    <ion-title>\n        <ion-item no-lines>\n            <ion-select [(ngModel)]="trending" big col-6>\n              <ion-option value="t" selected="true">TRENDING</ion-option>\n              <ion-option value="f">FAVORITE</ion-option>\n              <ion-option value="u">UNIQUE</ion-option>\n            </ion-select>\n          </ion-item>\n    </ion-title>\n    <ion-buttons end>\n        <button ion-button clear big icon-start><ion-icon name="more" color="dark"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen padding>\n  <ion-slides spaceBetween="-14" >\n    <ion-slide >\n        <ion-card>\n            <img src="href=../../assets/imgs/Artikel_3.jpg" rel="nofollow">\n          <ion-card-content>\n            <ion-card-title color="dark-grey">\n              Singkawang\n            </ion-card-title><h3 ion-text color="light-grey">\n           Locals believed that the Tatung parade tradition has lasted for more than 250 years\n            </h3>\n          <br><button ion-button clear big icon-start color="buttons">DISCOVER</button><br><p small ion-text color="light-grey">Event of Kalimantan</p>\n          </ion-card-content>\n        </ion-card>\n  </ion-slide>\n  \n  <ion-slide>\n      <ion-card>\n          <img src="href=../../assets/imgs/Artikel_3.jpg" rel="nofollow">\n        <ion-card-content>\n          <ion-card-title color="dark-grey">\n            Singkawang\n          </ion-card-title><h3 ion-text color="light-grey">\n         Locals believed that the Tatung parade tradition has lasted for more than 250 years\n          </h3>\n          <br><button ion-button clear big icon-start color="buttons">DISCOVER</button><br><p ion-text color="light-grey">Event of Kalimantan</p>\n        </ion-card-content>\n      </ion-card>\n  </ion-slide>\n  <ion-slide>\n      <ion-card>\n          <img src="href=../../assets/imgs/Artikel_3.jpg" rel="nofollow">\n        <ion-card-content>\n          <ion-card-title color="dark-grey">\n            Singkawang\n          </ion-card-title><h3 ion-text color="light-grey">\n         Locals believed that the Tatung parade tradition has lasted for more than 250 years\n          </h3>\n          <br><button ion-button clear big icon-start color="buttons">DISCOVER</button><br><p ion-text color="light-grey">Event of Kalimantan</p>\n        </ion-card-content>\n      </ion-card>\n  </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"D:\TUGAS\Joints\Ionic\KultureJourney\src\pages\discovery\discovery.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], DiscoveryPage);
    return DiscoveryPage;
}());

//# sourceMappingURL=discovery.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookmarkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookmarkPage = (function () {
    function BookmarkPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BookmarkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bookmark',template:/*ion-inline-start:"D:\TUGAS\Joints\Ionic\KultureJourney\src\pages\bookmark\bookmark.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Bookmark\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n \n</ion-content>\n'/*ion-inline-end:"D:\TUGAS\Joints\Ionic\KultureJourney\src\pages\bookmark\bookmark.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], BookmarkPage);
    return BookmarkPage;
}());

//# sourceMappingURL=bookmark.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\TUGAS\Joints\Ionic\KultureJourney\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar transparent>\n    <ion-searchbar\n  [(ngModel)]="myInput"\n  [showCancelButton]="shouldShowCancel"\n  (ionInput)="onInput($event)"\n  (ionCancel)="onCancel($event)">\n</ion-searchbar>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen padding>\n    <ion-slides show-pager="false">\n  <ion-slide *ngFor="let slide of slides">\n  <ion-card>\n    <img src="href=../../assets/imgs/1604996_English_KeyArt-OfficialVideoImage_6d99329f-2f58-e711-8175-020165574d09.jpg" rel="nofollow">\n  </ion-card>\n</ion-slide>\n\n<ion-slide>\n  <ion-card>\n    <img src="href=../../assets/imgs/1604996_English_KeyArt-OfficialVideoImage_6d99329f-2f58-e711-8175-020165574d09.jpg" rel="nofollow">\n  </ion-card>\n</ion-slide>\n<ion-slide>\n  <ion-card>\n    <img src="href=../../assets/imgs/1604996_English_KeyArt-OfficialVideoImage_6d99329f-2f58-e711-8175-020165574d09.jpg" rel="nofollow">\n  </ion-card>\n</ion-slide>\n\n  <ion-slide>\n  <ion-card>\n    <img src="href=../../assets/imgs/1604996_English_KeyArt-OfficialVideoImage_6d99329f-2f58-e711-8175-020165574d09.jpg" rel="nofollow">\n  </ion-card>\n</ion-slide>\n<ion-slide>\n  <ion-card>\n    <img src="href=../../assets/imgs/1604996_English_KeyArt-OfficialVideoImage_6d99329f-2f58-e711-8175-020165574d09.jpg" rel="nofollow">\n  </ion-card>\n</ion-slide>\n<ion-slide>\n  <ion-card>\n    <img src="href=../../assets/imgs/1604996_English_KeyArt-OfficialVideoImage_6d99329f-2f58-e711-8175-020165574d09.jpg" rel="nofollow">\n  </ion-card>\n</ion-slide>\n</ion-slides>\n\n<ion-slides show-pager="false">\n  <ion-slide *ngFor="let slide of slides">\n  <ion-card>\n    <img src="href=../../assets/imgs/1604996_English_KeyArt-OfficialVideoImage_6d99329f-2f58-e711-8175-020165574d09.jpg" rel="nofollow">\n  </ion-card>\n</ion-slide>\n\n<ion-slide>\n  <ion-card>\n    <img src="href=../../assets/imgs/1604996_English_KeyArt-OfficialVideoImage_6d99329f-2f58-e711-8175-020165574d09.jpg" rel="nofollow">\n  </ion-card>\n</ion-slide>\n<ion-slide>\n  <ion-card>\n    <img src="href=../../assets/imgs/1604996_English_KeyArt-OfficialVideoImage_6d99329f-2f58-e711-8175-020165574d09.jpg" rel="nofollow">\n  </ion-card>\n</ion-slide>\n\n  <ion-slide>\n  <ion-card>\n    <img src="href=../../assets/imgs/1604996_English_KeyArt-OfficialVideoImage_6d99329f-2f58-e711-8175-020165574d09.jpg" rel="nofollow">\n  </ion-card>\n</ion-slide>\n<ion-slide>\n  <ion-card>\n    <img src="href=../../assets/imgs/1604996_English_KeyArt-OfficialVideoImage_6d99329f-2f58-e711-8175-020165574d09.jpg" rel="nofollow">\n  </ion-card>\n</ion-slide>\n<ion-slide>\n  <ion-card>\n    <img src="href=../../assets/imgs/1604996_English_KeyArt-OfficialVideoImage_6d99329f-2f58-e711-8175-020165574d09.jpg" rel="nofollow">\n  </ion-card>\n</ion-slide>\n</ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"D:\TUGAS\Joints\Ionic\KultureJourney\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePage = (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\TUGAS\Joints\Ionic\KultureJourney\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Profile\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\TUGAS\Joints\Ionic\KultureJourney\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(299);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_discovery_discovery__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_bookmark_bookmark__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var firebaseConfig = {
    apiKey: "AIzaSyDWt4eCzFBQiCvVl0r9iBjYF4VrYatStzY",
    authDomain: "kulture-journey.firebaseapp.com",
    databaseURL: "https://kulture-journey.firebaseio.com",
    projectId: "kulture-journey",
    storageBucket: "kulture-journey.appspot.com",
    messagingSenderId: "413081514719"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_discovery_discovery__["a" /* DiscoveryPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_bookmark_bookmark__["a" /* BookmarkPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_discovery_discovery__["a" /* DiscoveryPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_bookmark_bookmark__["a" /* BookmarkPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\TUGAS\Joints\Ionic\KultureJourney\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\TUGAS\Joints\Ionic\KultureJourney\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[278]);
//# sourceMappingURL=main.js.map