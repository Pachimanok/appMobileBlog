"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_post_post_module_ts"],{

/***/ 1802:
/*!*********************************************!*\
  !*** ./src/app/post/post-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPageRoutingModule": () => (/* binding */ PostPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.page */ 8461);




const routes = [
    {
        path: '',
        component: _post_page__WEBPACK_IMPORTED_MODULE_0__.PostPage
    }
];
let PostPageRoutingModule = class PostPageRoutingModule {
};
PostPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PostPageRoutingModule);



/***/ }),

/***/ 2076:
/*!*************************************!*\
  !*** ./src/app/post/post.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPageModule": () => (/* binding */ PostPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _post_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-routing.module */ 1802);
/* harmony import */ var _post_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.page */ 8461);







let PostPageModule = class PostPageModule {
};
PostPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _post_routing_module__WEBPACK_IMPORTED_MODULE_0__.PostPageRoutingModule
        ],
        declarations: [_post_page__WEBPACK_IMPORTED_MODULE_1__.PostPage]
    })
], PostPageModule);



/***/ }),

/***/ 8461:
/*!***********************************!*\
  !*** ./src/app/post/post.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostPage": () => (/* binding */ PostPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _post_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.page.html?ngResource */ 5070);
/* harmony import */ var _post_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.page.scss?ngResource */ 3293);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 1502);







let PostPage = class PostPage {
    constructor(activatedRoute, http, DataSvc) {
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.DataSvc = DataSvc;
    }
    ngOnInit() {
        this.postId = this.activatedRoute.snapshot.paramMap.get('id');
        this.DataSvc.getOne(this.postId)
            .subscribe(res => {
            console.log(res);
            this.dato = res;
        });
    }
};
PostPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
PostPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-post',
        template: _post_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService],
        styles: [_post_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PostPage);



/***/ }),

/***/ 3293:
/*!************************************************!*\
  !*** ./src/app/post/post.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3N0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5070:
/*!************************************************!*\
  !*** ./src/app/post/post.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Post Unico\n       </ion-title>\n       <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"home\"></ion-back-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<style>\n  .content-ltr.hydrated{\n    position: absolute !important;\n  }\n</style>\n<ion-content >\n    <ion-card>\n      <img src=\"{{dato.url}}\">\n      <ion-card-header>\n        <ion-card-title>{{ dato.name }} </ion-card-title>\n        <ion-card-subtitle>\n        <h5>{{ dato.subtitulo}}</h5>\n        </ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <div\n          [innerHTML]=\"dato.body\" \n        >\n        </div>\n      </ion-card-content>\n    </ion-card>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" style=\"margin-bottom: 3rem;\">\n      <ion-fab-button>\n        <ion-icon name=\"add\"></ion-icon>\n      </ion-fab-button> \n      <ion-fab-list side=\"top\">\n        <ion-fab-button><ion-icon name=\"cash-outline\"></ion-icon></ion-fab-button>\n     \n        <ion-fab-button><ion-icon name=\"logo-twitter\"></ion-icon></ion-fab-button>\n      \n        <ion-fab-button><ion-icon name=\"logo-whatsapp\"></ion-icon></ion-fab-button>\n      </ion-fab-list>\n    </ion-fab>\n<br><br>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_post_post_module_ts.js.map