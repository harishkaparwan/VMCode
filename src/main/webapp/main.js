(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _vmdashboard_vmdashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vmdashboard/vmdashboard.component */ "./src/app/vmdashboard/vmdashboard.component.ts");
/* harmony import */ var _vmmainlayout_vmmainlayout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vmmainlayout/vmmainlayout.component */ "./src/app/vmmainlayout/vmmainlayout.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var routes = [
    { path: '', pathMatch: 'full', component: _vmmainlayout_vmmainlayout_component__WEBPACK_IMPORTED_MODULE_4__["VmmainlayoutComponent"] },
    { path: 'dashboard', component: _vmdashboard_vmdashboard_component__WEBPACK_IMPORTED_MODULE_3__["VmdashboardComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerTab{\n  width: 100%;\n  height:20px;\n  background-color: #e89ef5;\n}\ntable {\n    width: 100%;\n    padding-top: 30px;\n    background-color: #7b1fa2;\n  }\n.custom-card {\n    background-color: #e89ef5;\n  }\nbody{\n  background-color: #7b1fa2;\n}\n.mattablinks{\n  background-color:#000 !important;\n}\ntd.container1 {\n    width: 30%;\n    height: 100%;\n    overflow:hidden;\n    padding: 30px !important;\n   \n}\ntd.container2 {\n  width: 70%;\n  height: 100%;\n  overflow:hidden;\n  padding: 30px !important;\n}\ntd.container {\n    height: 220px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGO0VBQ0UseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmLHdCQUF3Qjs7QUFFNUI7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLHdCQUF3QjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlclRhYntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDoyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg5ZWY1O1xufVxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YjFmYTI7XG4gIH1cbiAgLmN1c3RvbS1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg5ZWY1O1xuICB9XG5ib2R5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IxZmEyO1xufVxuLm1hdHRhYmxpbmtze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDAgIWltcG9ydGFudDtcbn0gXG50ZC5jb250YWluZXIxIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgcGFkZGluZzogMzBweCAhaW1wb3J0YW50O1xuICAgXG59XG50ZC5jb250YWluZXIyIHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIHBhZGRpbmc6IDMwcHggIWltcG9ydGFudDtcbn1cbnRkLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAyMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _vmlogin_vmlogin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vmlogin/vmlogin.component */ "./src/app/vmlogin/vmlogin.component.ts");
/* harmony import */ var _vmregform_vmregform_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vmregform/vmregform.component */ "./src/app/vmregform/vmregform.component.ts");
/* harmony import */ var _vmregform_vmregform_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vmregform/vmregform.service */ "./src/app/vmregform/vmregform.service.ts");
/* harmony import */ var _vmdashboard_vmdashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vmdashboard/vmdashboard.component */ "./src/app/vmdashboard/vmdashboard.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _vm_theme_material_vm_theme_material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vm-theme-material/vm-theme-material.module */ "./src/app/vm-theme-material/vm-theme-material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _vmmainlayout_vmmainlayout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vmmainlayout/vmmainlayout.component */ "./src/app/vmmainlayout/vmmainlayout.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _vmregform_vmregform_component__WEBPACK_IMPORTED_MODULE_7__["VmregformComponent"],
                _vmdashboard_vmdashboard_component__WEBPACK_IMPORTED_MODULE_9__["VmdashboardComponent"],
                _vmlogin_vmlogin_component__WEBPACK_IMPORTED_MODULE_6__["VmloginComponent"],
                _vmmainlayout_vmmainlayout_component__WEBPACK_IMPORTED_MODULE_13__["VmmainlayoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _vm_theme_material_vm_theme_material_module__WEBPACK_IMPORTED_MODULE_11__["VmThemeMaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"]
            ],
            providers: [_vmregform_vmregform_service__WEBPACK_IMPORTED_MODULE_8__["VmregformService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/vm-theme-material/vm-theme-material.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/vm-theme-material/vm-theme-material.module.ts ***!
  \***************************************************************/
/*! exports provided: VmThemeMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmThemeMaterialModule", function() { return VmThemeMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");












var VmThemeMaterialModule = /** @class */ (function () {
    function VmThemeMaterialModule() {
    }
    VmThemeMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]
            ],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"]]
        })
    ], VmThemeMaterialModule);
    return VmThemeMaterialModule;
}());



/***/ }),

/***/ "./src/app/vmdashboard/vmdashboard.component.css":
/*!*******************************************************!*\
  !*** ./src/app/vmdashboard/vmdashboard.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZtZGFzaGJvYXJkL3ZtZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/vmdashboard/vmdashboard.component.html":
/*!********************************************************!*\
  !*** ./src/app/vmdashboard/vmdashboard.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mattablinks\">\n    <nav mat-tab-nav-bar [backgroundColor]=\"background\" style=\"background-color:#000\">\n         <img src=\"../../assets/logo.png\">\n      </nav>\n  </div>\n<p>\n  Welcome vmdashboard works!\n</p>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/vmdashboard/vmdashboard.component.ts":
/*!******************************************************!*\
  !*** ./src/app/vmdashboard/vmdashboard.component.ts ***!
  \******************************************************/
/*! exports provided: VmdashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmdashboardComponent", function() { return VmdashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VmdashboardComponent = /** @class */ (function () {
    function VmdashboardComponent() {
    }
    VmdashboardComponent.prototype.ngOnInit = function () {
    };
    VmdashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vmdashboard',
            template: __webpack_require__(/*! ./vmdashboard.component.html */ "./src/app/vmdashboard/vmdashboard.component.html"),
            styles: [__webpack_require__(/*! ./vmdashboard.component.css */ "./src/app/vmdashboard/vmdashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VmdashboardComponent);
    return VmdashboardComponent;
}());



/***/ }),

/***/ "./src/app/vmlogin/vmlogin.component.css":
/*!***********************************************!*\
  !*** ./src/app/vmlogin/vmlogin.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZtbG9naW4vdm1sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/vmlogin/vmlogin.component.html":
/*!************************************************!*\
  !*** ./src/app/vmlogin/vmlogin.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card> ALREADY REGISTERED?\n      <mat-card-subtitle>If you have an account with us, please log in. </mat-card-subtitle>\n      <div class=\"example-container\">\n          <form class=\"example-form\" #vmlogin=\"ngForm\" (ngSubmit)=\"save(vmlogin.value)\"> \n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Email Address\"  [(ngModel)]=\"vmlogin.username\"  name=\"username\">\n               \n              </mat-form-field>\n              <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Password\" [(ngModel)]=\"vmlogin.password\"  name=\"password\">\n              </mat-form-field>\n              \n              <section class=\"example-section\">\n                  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vmlogin.is_remember\"  name=\"is_remember\">Remember Me</mat-checkbox>\n                 </section>\n               <button mat-raised-button color=\"primary\"   [disabled]=\"!vmlogin.form.valid\"\n               matTooltip=\"Info about the action\"\n               aria-label=\"Button that displays a tooltip when focused or hovered\"><mat-icon>send</mat-icon>Login</button>\n               <button mat-raised-button color=\"warn\"><mat-icon>undo</mat-icon>Reset</button>\n            </form>\n          \n        </div>\n    </mat-card>"

/***/ }),

/***/ "./src/app/vmlogin/vmlogin.component.ts":
/*!**********************************************!*\
  !*** ./src/app/vmlogin/vmlogin.component.ts ***!
  \**********************************************/
/*! exports provided: VmloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmloginComponent", function() { return VmloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var VmloginComponent = /** @class */ (function () {
    function VmloginComponent(_fb) {
        this._fb = _fb;
        this.checked = false;
        this.vmlogin = {};
        this.remember = false;
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
    }
    VmloginComponent.prototype.ngOnInit = function () {
        this.vmlogin = this._fb.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]],
        });
    };
    VmloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vmlogin',
            template: __webpack_require__(/*! ./vmlogin.component.html */ "./src/app/vmlogin/vmlogin.component.html"),
            styles: [__webpack_require__(/*! ./vmlogin.component.css */ "./src/app/vmlogin/vmlogin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], VmloginComponent);
    return VmloginComponent;
}());



/***/ }),

/***/ "./src/app/vmmainlayout/vmmainlayout.component.css":
/*!*********************************************************!*\
  !*** ./src/app/vmmainlayout/vmmainlayout.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerTab{\n    width: 100%;\n    height:20px;\n    background-color: #e89ef5;\n  }\n  table {\n      width: 100%;\n      padding-top: 30px;\n      background-color: #7b1fa2;\n    }\n  .custom-card {\n      background-color: #e89ef5;\n    }\n  body{\n    background-color: #7b1fa2;\n  }\n  .mattablinks{\n    background-color:#000 !important;\n  }\n  td.container1 {\n      width: 30%;\n      height: 100%;\n      overflow:hidden;\n      padding: 30px !important;\n     \n  }\n  td.container2 {\n    width: 70%;\n    height: 100%;\n    overflow:hidden;\n    padding: 30px !important;\n  }\n  td.container {\n      height: 220px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm1tYWlubGF5b3V0L3ZtbWFpbmxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7RUFDM0I7RUFDQTtNQUNJLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIseUJBQXlCO0lBQzNCO0VBQ0E7TUFDRSx5QkFBeUI7SUFDM0I7RUFDRjtJQUNFLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsZ0NBQWdDO0VBQ2xDO0VBQ0E7TUFDSSxVQUFVO01BQ1YsWUFBWTtNQUNaLGVBQWU7TUFDZix3QkFBd0I7O0VBRTVCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZix3QkFBd0I7RUFDMUI7RUFDQTtNQUNJLGFBQWE7RUFDakIiLCJmaWxlIjoic3JjL2FwcC92bW1haW5sYXlvdXQvdm1tYWlubGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyVGFie1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDoyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlODllZjU7XG4gIH1cbiAgdGFibGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3YjFmYTI7XG4gICAgfVxuICAgIC5jdXN0b20tY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTg5ZWY1O1xuICAgIH1cbiAgYm9keXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2IxZmEyO1xuICB9XG4gIC5tYXR0YWJsaW5rc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDAgIWltcG9ydGFudDtcbiAgfSBcbiAgdGQuY29udGFpbmVyMSB7XG4gICAgICB3aWR0aDogMzAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xuICAgICAgcGFkZGluZzogMzBweCAhaW1wb3J0YW50O1xuICAgICBcbiAgfVxuICB0ZC5jb250YWluZXIyIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgcGFkZGluZzogMzBweCAhaW1wb3J0YW50O1xuICB9XG4gIHRkLmNvbnRhaW5lciB7XG4gICAgICBoZWlnaHQ6IDIyMHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/vmmainlayout/vmmainlayout.component.html":
/*!**********************************************************!*\
  !*** ./src/app/vmmainlayout/vmmainlayout.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mattablinks\">\n    <nav mat-tab-nav-bar [backgroundColor]=\"background\" style=\"background-color:#000\">\n         <img src=\"../../assets/logo.png\">\n      </nav>\n  </div>\n    <table style=\"padding-top:30px;\">\n    <tr>\n    <td class=\"container2\">  <app-vmregform></app-vmregform></td>\n    <td class=\"container1\"> \n        <mat-card [ngClass]=\"{'custom-card':true}\"> Sign-in Here<mat-icon>account_circle</mat-icon>\n            <mat-card-subtitle>  <app-vmlogin> </app-vmlogin>  </mat-card-subtitle>\n        </mat-card>\n      </td>\n    \n    </tr>\n\n   </table>\n"

/***/ }),

/***/ "./src/app/vmmainlayout/vmmainlayout.component.ts":
/*!********************************************************!*\
  !*** ./src/app/vmmainlayout/vmmainlayout.component.ts ***!
  \********************************************************/
/*! exports provided: VmmainlayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmmainlayoutComponent", function() { return VmmainlayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VmmainlayoutComponent = /** @class */ (function () {
    function VmmainlayoutComponent() {
    }
    VmmainlayoutComponent.prototype.ngOnInit = function () {
    };
    VmmainlayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vmmainlayout',
            template: __webpack_require__(/*! ./vmmainlayout.component.html */ "./src/app/vmmainlayout/vmmainlayout.component.html"),
            styles: [__webpack_require__(/*! ./vmmainlayout.component.css */ "./src/app/vmmainlayout/vmmainlayout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VmmainlayoutComponent);
    return VmmainlayoutComponent;
}());



/***/ }),

/***/ "./src/app/vmregform/vmregform.component.css":
/*!***************************************************!*\
  !*** ./src/app/vmregform/vmregform.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 70%;\n    padding:30px;\n    border: 2px #000;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  .custom-card {\n    background-color: #e89ef5;\n  }\n  \n  .example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n  \n  .example-section {\n    display: flex;\n    align-content: center;\n    align-items: center;\n    height: 60px;\n  }\n  \n  .example-margin {\n    margin: 0 10px;\n    padding-bottom:20px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdm1yZWdmb3JtL3ZtcmVnZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFDQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTs7RUFFQSxpQkFBaUI7QUFDbkI7O0VBRUE7SUFDSSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdm1yZWdmb3JtL3ZtcmVnZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgcGFkZGluZzozMHB4O1xuICAgIGJvcmRlcjogMnB4ICMwMDA7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jdXN0b20tY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U4OWVmNTtcbiAgfVxuXG4gIC5leGFtcGxlLWJ1dHRvbi1yb3cgYnV0dG9uLFxuLmV4YW1wbGUtYnV0dG9uLXJvdyBhIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5leGFtcGxlLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1tYXJnaW4ge1xuICAgIG1hcmdpbjogMCAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOjIwcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/vmregform/vmregform.component.html":
/*!****************************************************!*\
  !*** ./src/app/vmregform/vmregform.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-card [ngClass]=\"{'custom-card':true}\"> CREATE AN ACCOUNT <mat-icon>account_box</mat-icon>\n<mat-card-subtitle> *Please enter the following information to create your account. </mat-card-subtitle>\n<div class=\"example-container\">\n    <form class=\"example-form\" #vmregform=\"ngForm\" (ngSubmit)=\"save(vmregform.value)\"> \n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"First Name\"  [(ngModel)]=\"vmregform.firstname\"  name=\"firstname\" required>\n         \n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Middle Name/Initial\" minlength=\"1\"  [(ngModel)]=\"vmregform.middlename\"  name=\"middlename\" required>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Last Name\" [(ngModel)]=\"vmregform.lastname\"  name=\"lastname\" required>\n        </mat-form-field>\n       \n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Email\"  [(ngModel)]=\"vmregform.email\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"email\" required>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Password\" [(ngModel)]=\"vmregform.password\"   type=\"password\"  name=\"password\" minlength=\"6\" required>\n \n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Confirm Password\" [(ngModel)]=\"vmregform.confirm\" password-verify=\"[[vmregform.password]]\" type=\"password\"  name=\"confirm\" required >\n            <div [hidden]=\"vmregform.password == vmregform.confirm\">Passwords do not match and Password should be 6 digit!</div>\n        </mat-form-field>\n        <section class=\"example-section\">\n            <mat-checkbox class=\"example-margin\" [(ngModel)]=\"vmregform.is_subscribed\"  name=\"is_subscribed\">Sign Up for Newsletter</mat-checkbox>\n           </section>\n         <button mat-raised-button color=\"primary\"   [disabled]=\"!vmregform.form.valid\"\n         matTooltip=\"Info about the action\"\n         aria-label=\"Button that displays a tooltip when focused or hovered\"><mat-icon>save</mat-icon>Register</button>\n         <button mat-raised-button color=\"warn\"><mat-icon>undo</mat-icon>Reset</button>\n      </form>\n    \n  </div>\n  <mat-card-footer>* All Fields are mandatory</mat-card-footer>\n</mat-card>"

/***/ }),

/***/ "./src/app/vmregform/vmregform.component.ts":
/*!**************************************************!*\
  !*** ./src/app/vmregform/vmregform.component.ts ***!
  \**************************************************/
/*! exports provided: VmregformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmregformComponent", function() { return VmregformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _vmregform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vmregform.service */ "./src/app/vmregform/vmregform.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var VmregformComponent = /** @class */ (function () {
    function VmregformComponent(_fb, vmregformService, router) {
        this._fb = _fb;
        this.vmregformService = vmregformService;
        this.router = router;
        this.checked = false;
        this.vmregform = {};
        this.submitted = false;
        this.middlename = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.lastname = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.firstname = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.confirmation = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
        ]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
    }
    VmregformComponent.prototype.ngOnInit = function () {
        //this.vmregform= this._fb.group({
        this.vmregform.firstname = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]];
        this.vmregform.lastname = ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]];
        // });
    };
    VmregformComponent.prototype.getErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    VmregformComponent.prototype.navigate = function () {
        this.router.navigateByUrl('/dashboard');
    };
    VmregformComponent.prototype.save = function (form) {
        var _this = this;
        console.log('Saving Form successfull::');
        this.vmregformService.save(form).subscribe(function (result) {
            console.log('Form saved successfull::' + result);
            _this.navigate();
        }, function (error) { return console.error(error); });
    };
    VmregformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vmregform',
            template: __webpack_require__(/*! ./vmregform.component.html */ "./src/app/vmregform/vmregform.component.html"),
            styles: [__webpack_require__(/*! ./vmregform.component.css */ "./src/app/vmregform/vmregform.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _vmregform_service__WEBPACK_IMPORTED_MODULE_3__["VmregformService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], VmregformComponent);
    return VmregformComponent;
}());



/***/ }),

/***/ "./src/app/vmregform/vmregform.service.ts":
/*!************************************************!*\
  !*** ./src/app/vmregform/vmregform.service.ts ***!
  \************************************************/
/*! exports provided: VmregformService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VmregformService", function() { return VmregformService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var VmregformService = /** @class */ (function () {
    function VmregformService(http) {
        this.http = http;
        this.API = 'api/signup';
    }
    VmregformService.prototype.save = function (vmregform) {
        var result;
        result = this.http.post(this.API, vmregform);
        return result;
    };
    VmregformService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VmregformService);
    return VmregformService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Harish/git/VMCode_git/client/vmclient/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map