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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/book-details/book-details.component */ "./src/app/components/book-details/book-details.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_request_book_request_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/request-book/request-book.component */ "./src/app/components/request-book/request-book.component.ts");
/* harmony import */ var _components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-book/add-book.component */ "./src/app/components/add-book/add-book.component.ts");
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/admin.guard */ "./src/app/guards/admin.guard.ts");
/* harmony import */ var _components_requested_books_requested_books_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/requested-books/requested-books.component */ "./src/app/components/requested-books/requested-books.component.ts");
/* harmony import */ var _components_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin-home/admin-home.component */ "./src/app/components/admin-home/admin-home.component.ts");
/* harmony import */ var _components_report_report_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/report/report.component */ "./src/app/components/report/report.component.ts");
/* harmony import */ var _components_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/add-admin/add-admin.component */ "./src/app/components/add-admin/add-admin.component.ts");
/* harmony import */ var _guards_default_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/default.guard */ "./src/app/guards/default.guard.ts");
/* harmony import */ var _guards_profile_guard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guards/profile.guard */ "./src/app/guards/profile.guard.ts");
/* harmony import */ var _components_update_book_update_book_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/update-book/update-book.component */ "./src/app/components/update-book/update-book.component.ts");
/* harmony import */ var _components_profile_edit_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/profile/edit/edit.component */ "./src/app/components/profile/edit/edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'books/:bookName', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'books/book-details/:id', component: _components_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_7__["BookDetailsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], canActivate: [_guards_default_guard__WEBPACK_IMPORTED_MODULE_16__["DefaultGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], canActivate: [_guards_default_guard__WEBPACK_IMPORTED_MODULE_16__["DefaultGuard"]] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"], canActivate: [_guards_profile_guard__WEBPACK_IMPORTED_MODULE_17__["ProfileGuard"]] },
    { path: 'requestBook', component: _components_request_book_request_book_component__WEBPACK_IMPORTED_MODULE_9__["RequestBookComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'addBook', component: _components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_10__["AddBookComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: 'requestedBooks', component: _components_requested_books_requested_books_component__WEBPACK_IMPORTED_MODULE_12__["RequestedBooksComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: 'adminHome', component: _components_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_13__["AdminHomeComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: 'reports', component: _components_report_report_component__WEBPACK_IMPORTED_MODULE_14__["ReportComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: 'addAdmin', component: _components_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_15__["AddAdminComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: 'updateBook/:id', component: _components_update_book_update_book_component__WEBPACK_IMPORTED_MODULE_18__["UpdateBookComponent"], canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_11__["AdminGuard"]] },
    { path: 'profile/edit', component: _components_profile_edit_edit_component__WEBPACK_IMPORTED_MODULE_19__["EditComponent"], canActivate: [_guards_profile_guard__WEBPACK_IMPORTED_MODULE_17__["ProfileGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "body{\r\n  background: #303030;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"main-container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var ng2_carouselamos__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng2-carouselamos */ "./node_modules/ng2-carouselamos/dist/index.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_home_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/home/search-bar/search-bar.component */ "./src/app/components/home/search-bar/search-bar.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_home_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/home/search-result/search-result.component */ "./src/app/components/home/search-result/search-result.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/book-details/book-details.component */ "./src/app/components/book-details/book-details.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/admin-home/admin-home.component */ "./src/app/components/admin-home/admin-home.component.ts");
/* harmony import */ var _components_request_book_request_book_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/request-book/request-book.component */ "./src/app/components/request-book/request-book.component.ts");
/* harmony import */ var _components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/add-book/add-book.component */ "./src/app/components/add-book/add-book.component.ts");
/* harmony import */ var _components_requested_books_requested_books_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/requested-books/requested-books.component */ "./src/app/components/requested-books/requested-books.component.ts");
/* harmony import */ var _components_report_report_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/report/report.component */ "./src/app/components/report/report.component.ts");
/* harmony import */ var _components_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/add-admin/add-admin.component */ "./src/app/components/add-admin/add-admin.component.ts");
/* harmony import */ var _components_update_book_update_book_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/update-book/update-book.component */ "./src/app/components/update-book/update-book.component.ts");
/* harmony import */ var _components_profile_edit_edit_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/profile/edit/edit.component */ "./src/app/components/profile/edit/edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//angular material imports











































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_26__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_27__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_28__["HomeComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_29__["ProfileComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_31__["RegisterComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_32__["DashboardComponent"],
                _components_home_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_30__["SearchBarComponent"],
                _components_home_search_result_search_result_component__WEBPACK_IMPORTED_MODULE_33__["SearchResultComponent"],
                _components_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_35__["BookDetailsComponent"],
                _components_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_35__["DialogOverviewDialog"],
                _components_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_37__["DialogOverviewDialogRemoveBook"],
                _components_requested_books_requested_books_component__WEBPACK_IMPORTED_MODULE_40__["DialogOverviewDialogRequestedBook"],
                _components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_39__["DialogOverviewDialogUpdateBook"],
                _components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_39__["DialogOverviewDialogDeleteBook"],
                _components_request_book_request_book_component__WEBPACK_IMPORTED_MODULE_38__["RequestBookComponent"],
                _components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_39__["AddBookComponent"],
                _components_requested_books_requested_books_component__WEBPACK_IMPORTED_MODULE_40__["RequestedBooksComponent"],
                _components_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_37__["AdminHomeComponent"],
                _components_report_report_component__WEBPACK_IMPORTED_MODULE_41__["ReportComponent"],
                _components_add_admin_add_admin_component__WEBPACK_IMPORTED_MODULE_42__["AddAdminComponent"],
                _components_update_book_update_book_component__WEBPACK_IMPORTED_MODULE_43__["UpdateBookComponent"],
                _components_profile_edit_edit_component__WEBPACK_IMPORTED_MODULE_44__["EditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_24__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_34__["HttpClientModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatProgressSpinnerModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                ng2_carouselamos__WEBPACK_IMPORTED_MODULE_21__["Ng2CarouselamosModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__["MatBadgeModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"]
            ],
            entryComponents: [
                _components_book_details_book_details_component__WEBPACK_IMPORTED_MODULE_35__["DialogOverviewDialog"],
                _components_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_37__["DialogOverviewDialogRemoveBook"],
                _components_requested_books_requested_books_component__WEBPACK_IMPORTED_MODULE_40__["DialogOverviewDialogRequestedBook"],
                _components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_39__["DialogOverviewDialogUpdateBook"],
                _components_add_book_add_book_component__WEBPACK_IMPORTED_MODULE_39__["DialogOverviewDialogDeleteBook"],
            ],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_36__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_25__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-admin/add-admin.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/add-admin/add-admin.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 70%;\r\n  margin-left: calc((100vw - 70%)/2);\r\n  margin-top: 100px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#title{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: 'Bitter', sans-serif;\r\n}\r\n\r\n#form {\r\n  width: 70%;\r\n  min-width: 250px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nform{\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.left-section, .right-section{\r\n  width: 46%;\r\n  float: left;\r\n  padding: 2%;\r\n}\r\n\r\n#register-btn{\r\n  margin: 0 2%;\r\n  width: 96%;\r\n  height: 50px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 1em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/add-admin/add-admin.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/add-admin/add-admin.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"title\">\n    <h1><span>Add an Admin</span></h1>\n  </div>\n  <div id=\"form\">\n    <form (submit)=\"onAddAdminSubmit()\">\n      <div class=\"left-section\">\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>First Name</mat-label>\n          <input matInput autocomplete=\"off\" placeholder=\"First Name\" [formControl]=\"firstNameFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error *ngIf=\"firstNameFormControl.hasError('required')\">\n            First name is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Last Name</mat-label>\n          <input matInput autocomplete=\"off\" placeholder=\"Last Name\" [formControl]=\"lastNameFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error *ngIf=\"lastNameFormControl.hasError('required')\">\n            Last name is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Email</mat-label>\n          <input matInput autocomplete=\"off\" placeholder=\"Email\" [formControl]=\"emailFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"right-section\">\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Password</mat-label>\n          <input matInput placeholder=\"Enter your password\" [formControl]=\"passwordFormControl\" [type]=\"hide ? 'password' : 'text'\">\n          <mat-error *ngIf=\"passwordFormControl.hasError('required')\"> Password is <strong>required</strong></mat-error>\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Re-enter Password</mat-label>\n          <input matInput placeholder=\"Enter your password\" [formControl]=\"rePasswordFormControl\" [type]=\"rehide ? 'password' : 'text'\">\n          <mat-error *ngIf=\"rePasswordFormControl.hasError('required')\"> Re-enter the password</mat-error>\n          <mat-icon matSuffix (click)=\"rehide = !rehide\">{{rehide ? 'visibility' : 'visibility_off'}}</mat-icon>\n        </mat-form-field>\n      </div>\n      <button class=\"full-width\" id=\"register-btn\" mat-raised-button color=\"primary\">Add The Admin</button>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/add-admin/add-admin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/add-admin/add-admin.component.ts ***!
  \*************************************************************/
/*! exports provided: MyErrorStateMatcher, AddAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAdminComponent", function() { return AddAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var AddAdminComponent = /** @class */ (function () {
    function AddAdminComponent(snackBar, router, authService) {
        var _this = this;
        this.snackBar = snackBar;
        this.router = router;
        this.authService = authService;
        this.hide = true;
        this.rehide = true;
        this.firstNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.lastNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.rePasswordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                // trick the Router into believing it's last link wasn't previously loaded
                _this.router.navigated = false;
            }
        });
    }
    AddAdminComponent.prototype.ngOnInit = function () {
    };
    AddAdminComponent.prototype.onAddAdminSubmit = function () {
        var _this = this;
        if (!this.firstNameFormControl.invalid &&
            !this.lastNameFormControl.invalid &&
            !this.emailFormControl.invalid &&
            !this.passwordFormControl.invalid &&
            !this.rePasswordFormControl.invalid) {
            if (this.passwordFormControl.value !== this.rePasswordFormControl.value) {
                this.snackBar.open('Passwords Does Not Match', 'Close', {
                    duration: 2000
                });
            }
            else {
                var user_1 = {
                    firstName: this.firstNameFormControl.value,
                    lastName: this.lastNameFormControl.value,
                    email: this.emailFormControl.value,
                    password: this.passwordFormControl.value,
                    type: 'admin'
                };
                this.authService.checkAdminAvailability(user_1).subscribe(function (data) {
                    if (data['success']) {
                        _this.authService.registerUser(user_1).subscribe(function (data) {
                            if (data['success']) {
                                _this.snackBar.open("Admin Added Successfully", "Close", {
                                    duration: 3000
                                });
                                _this.router.navigate(['/addAdmin']);
                            }
                        });
                    }
                    else {
                        _this.snackBar.open("You Are Already Registered, Please Login", "Close", {
                            duration: 3000
                        });
                    }
                });
            }
        }
    };
    AddAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-admin',
            template: __webpack_require__(/*! ./add-admin.component.html */ "./src/app/components/add-admin/add-admin.component.html"),
            styles: [__webpack_require__(/*! ./add-admin.component.css */ "./src/app/components/add-admin/add-admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AddAdminComponent);
    return AddAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/add-book/add-book.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-book/add-book.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 70%;\r\n  margin-left: calc((100vw - 70%)/2);\r\n  margin-top: 100px;\r\n}\r\n\r\n.content-add-book{\r\n  width: 100%;\r\n  min-width: 250px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.content{\r\n  width: 100%;\r\n  min-width: 250px;\r\n  margin-top: 20px;\r\n}\r\n\r\n#title{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: 'Bitter', sans-serif;\r\n}\r\n\r\n#form {\r\n  width: 70%;\r\n  min-width: 250px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nform{\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.left-section, .right-section{\r\n  width: 46%;\r\n  float: left;\r\n  padding: 2%;\r\n}\r\n\r\n#register-btn{\r\n  margin: 0 2%;\r\n  width: 96%;\r\n  height: 50px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 1em;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\ntd, th {\r\n  width: 25%;\r\n}\r\n\r\n.loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/add-book/add-book.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-book/add-book.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-tab-group>\n    <mat-tab label=\"Add Book\">\n      <div class=\"content-add-book\">\n        <div id=\"form\">\n          <form (submit)=\"onAddBookSubmit()\">\n            <div class=\"left-section\">\n              <mat-form-field appearance=\"outline\" class=\"full-width\">\n                <mat-label>Book Name</mat-label>\n                <input matInput autocomplete=\"off\" placeholder=\"Book Name\" [formControl]=\"bookNameFormControl\"\n                       [errorStateMatcher]=\"matcher\">\n                <mat-error *ngIf=\"bookNameFormControl.hasError('required')\">\n                  First name is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" class=\"full-width\">\n                <mat-label>Author</mat-label>\n                <input matInput autocomplete=\"off\" placeholder=\"Author\" [formControl]=\"authorFormControl\"\n                       [errorStateMatcher]=\"matcher\">\n                <mat-error *ngIf=\"authorFormControl.hasError('required')\">\n                  Author name is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" class=\"full-width\">\n                <mat-label>Pages</mat-label>\n                <input matInput autocomplete=\"off\" placeholder=\"Index Number\" [formControl]=\"pagesFormControl\"\n                       [errorStateMatcher]=\"matcher\">\n                <mat-error *ngIf=\"pagesFormControl.hasError('pattern')\">\n                  <strong>Only numbers</strong> are allowed\n                </mat-error>\n                <mat-error *ngIf=\"pagesFormControl.hasError('required')\">\n                  Number of pages is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" class=\"full-width\">\n                <mat-label>Edition</mat-label>\n                <input matInput autocomplete=\"off\" placeholder=\"Edition\" [formControl]=\"editionFormControl\"\n                       [errorStateMatcher]=\"matcher\">\n                <mat-error *ngIf=\"editionFormControl.hasError('required')\">\n                  Edition is <strong>required</strong>\n                </mat-error>\n                <mat-error *ngIf=\"editionFormControl.hasError('pattern')\">\n                  <strong>Only numbers</strong> are allowed\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <div class=\"right-section\">\n              <mat-form-field appearance=\"outline\" class=\"full-width\">\n                <mat-label>Publisher</mat-label>\n                <input matInput autocomplete=\"off\" placeholder=\"Publisher\" [formControl]=\"publisherFormControl\"\n                       [errorStateMatcher]=\"matcher\">\n                <mat-error *ngIf=\"publisherFormControl.hasError('required')\">\n                  Publisher is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" class=\"full-width\">\n                <mat-label>Published Year</mat-label>\n                <input matInput autocomplete=\"off\" maxlength=\"4\" placeholder=\"Published Year\" [formControl]=\"yearFormControl\"\n                       [errorStateMatcher]=\"matcher\">\n                <mat-error *ngIf=\"yearFormControl.hasError('required')\">\n                  Published year is <strong>required</strong>\n                </mat-error>\n                <mat-error *ngIf=\"yearFormControl.hasError('minlength') || yearFormControl.hasError('pattern')\">\n                  Invalid Year Format\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" class=\"full-width\">\n                <mat-label>Image Url</mat-label>\n                <input matInput autocomplete=\"off\" placeholder=\"Image Url\" [formControl]=\"imageUrlFormControl\"\n                       [errorStateMatcher]=\"matcher\">\n                <mat-error *ngIf=\"imageUrlFormControl.hasError('required')\">\n                  Image Url is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <mat-form-field appearance=\"outline\" class=\"full-width\">\n                <mat-label>Number of Copies</mat-label>\n                <input autocomplete=\"off\" matInput placeholder=\"Number of Copies\" [formControl]=\"copiesFormControl\"\n                       [errorStateMatcher]=\"matcher\">\n                <mat-error *ngIf=\"copiesFormControl.hasError('required')\">\n                  Number of copies is <strong>required</strong>\n                </mat-error>\n                <mat-error *ngIf=\"copiesFormControl.hasError('pattern')\">\n                  <strong>Only numbers</strong> are allowed\n                </mat-error>\n              </mat-form-field>\n            </div>\n            <button class=\"full-width\" id=\"register-btn\" mat-raised-button color=\"primary\">Add The Book</button>\n          </form>\n        </div>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"All Books\">\n      <div class=\"content\">\n        <mat-form-field>\n          <input matInput autocomplete=\"off\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n        <div class=\"loading-shade\"\n             *ngIf=\"isLoadingResults\">\n          <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n        </div>\n        <div class=\"mat-elevation-z8\">\n          <table mat-table [dataSource]=\"dataSource\" matSort>\n\n            <ng-container matColumnDef=\"Book Name\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Book Name </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.bookName}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Author\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Author </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.author}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Publisher\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Publisher </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.publisher}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Copies\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Copies </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.copies}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Update Book\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Update </th>\n              <td mat-cell *matCellDef=\"let row\">  <button mat-raised-button color=\"accent\" (click)=\"updateBook(row.id, row.bookName)\">Update</button> </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Delete Book\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Delete </th>\n              <td mat-cell *matCellDef=\"let row\">  <button mat-raised-button color=\"warn\" (click)=\"deleteBook(row.id,row.bookName, row.arrayIndex)\">Delete</button> </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </tr>\n          </table>\n\n          <mat-paginator #paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\n        </div>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-book/add-book.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-book/add-book.component.ts ***!
  \***********************************************************/
/*! exports provided: MyErrorStateMatcher, AddBookComponent, DialogOverviewDialogUpdateBook, DialogOverviewDialogDeleteBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBookComponent", function() { return AddBookComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewDialogUpdateBook", function() { return DialogOverviewDialogUpdateBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewDialogDeleteBook", function() { return DialogOverviewDialogDeleteBook; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_book_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/book-data.service */ "./src/app/services/book-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var AddBookComponent = /** @class */ (function () {
    function AddBookComponent(snackBar, bookDataService, router, dialog) {
        var _this = this;
        this.snackBar = snackBar;
        this.bookDataService = bookDataService;
        this.router = router;
        this.dialog = dialog;
        this.displayedColumns = ['Book Name', 'Author', 'Publisher', 'Copies', 'Update Book', 'Delete Book'];
        this.bookSet = [];
        this.isLoadingResults = true;
        this.bookNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.authorFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.pagesFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/),
        ]);
        this.editionFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/),
        ]);
        this.publisherFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.yearFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
        ]);
        this.imageUrlFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.copiesFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/),
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                // trick the Router into believing it's last link wasn't previously loaded
                _this.router.navigated = false;
            }
        });
    }
    AddBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookDataService.getAllBooks().subscribe(function (books) {
            if (books['success']) {
                var x_1 = 0;
                books['books'].forEach(function (item) {
                    var newBook = {
                        id: item['_id'],
                        bookName: item['name'],
                        author: item['author'],
                        publisher: item['publisher'],
                        copies: item['copies'],
                        arrayIndex: x_1
                    };
                    x_1++;
                    _this.bookSet.push(newBook);
                });
                _this.isLoadingResults = false;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.bookSet);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
        });
    };
    AddBookComponent.prototype.onAddBookSubmit = function () {
        var _this = this;
        if (!this.bookNameFormControl.invalid &&
            !this.authorFormControl.invalid &&
            !this.pagesFormControl.invalid &&
            !this.editionFormControl.invalid &&
            !this.publisherFormControl.invalid &&
            !this.yearFormControl.invalid &&
            !this.imageUrlFormControl.invalid &&
            !this.copiesFormControl.invalid) {
            var newBook_1 = {
                bookName: this.bookNameFormControl.value,
                author: this.authorFormControl.value,
                pages: this.pagesFormControl.value,
                edition: this.editionFormControl.value,
                publisher: this.publisherFormControl.value,
                year: this.yearFormControl.value,
                imageUrl: this.imageUrlFormControl.value,
                copies: this.copiesFormControl.value,
                from: Date.now()
            };
            this.bookDataService.checkBookAvailability(newBook_1).subscribe(function (data) {
                if (data['success'] == false) {
                    _this.bookDataService.addBook(newBook_1).subscribe(function (status) {
                        if (status['success'] == true) {
                            _this.snackBar.open('Book Added Successfully', 'Close', {
                                duration: 3000
                            });
                            _this.router.navigate(['/addBook']);
                        }
                    });
                }
                else if (data['success'] == true) {
                    _this.snackBar.open('Book Already Exists', 'Close', {
                        duration: 3000
                    });
                }
            });
        }
    };
    AddBookComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AddBookComponent.prototype.updateBook = function (id, bookName) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewDialogUpdateBook, {
            width: '400px',
            data: { bookName: bookName }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 1) {
                _this.router.navigate(['/updateBook/' + id]);
            }
        });
    };
    AddBookComponent.prototype.deleteBook = function (id, bookName, arrayIndex) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewDialogDeleteBook, {
            width: '400px',
            data: { bookName: bookName }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 1) {
                var book = {
                    id: id
                };
                _this.bookDataService.deleteBook(book).subscribe(function (status) {
                    if (status['success']) {
                        _this.snackBar.open("Deleted Successfully", "Close", {
                            duration: 3000
                        });
                        _this.dataSource.data.splice(0, _this.dataSource.data.length);
                        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                        _this.dataSource.paginator = _this.paginator;
                        _this.ngOnInit();
                        //this.router.navigate(['/addBook']);
                    }
                    else {
                        _this.snackBar.open("Deletion Failed", "Close", {
                            duration: 3000
                        });
                    }
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginator'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AddBookComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], AddBookComponent.prototype, "sort", void 0);
    AddBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-book',
            template: __webpack_require__(/*! ./add-book.component.html */ "./src/app/components/add-book/add-book.component.html"),
            styles: [__webpack_require__(/*! ./add-book.component.css */ "./src/app/components/add-book/add-book.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _services_book_data_service__WEBPACK_IMPORTED_MODULE_3__["BookDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], AddBookComponent);
    return AddBookComponent;
}());

var DialogOverviewDialogUpdateBook = /** @class */ (function () {
    function DialogOverviewDialogUpdateBook(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewDialogUpdateBook.prototype.onNoClickRemove = function () {
        this.dialogRef.close();
    };
    DialogOverviewDialogUpdateBook = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-dialog-update-book',
            template: __webpack_require__(/*! ./dialog-overview-dialog-update-book.html */ "./src/app/components/add-book/dialog-overview-dialog-update-book.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogOverviewDialogUpdateBook);
    return DialogOverviewDialogUpdateBook;
}());

var DialogOverviewDialogDeleteBook = /** @class */ (function () {
    function DialogOverviewDialogDeleteBook(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewDialogDeleteBook.prototype.onNoClickRemove = function () {
        this.dialogRef.close();
    };
    DialogOverviewDialogDeleteBook = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-dialog-delete-book',
            template: __webpack_require__(/*! ./dialog-overview-dialog-delete-book.html */ "./src/app/components/add-book/dialog-overview-dialog-delete-book.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogOverviewDialogDeleteBook);
    return DialogOverviewDialogDeleteBook;
}());



/***/ }),

/***/ "./src/app/components/add-book/dialog-overview-dialog-delete-book.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/add-book/dialog-overview-dialog-delete-book.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Deleting a Book?</h1>\r\n<div mat-dialog-content>\r\n  <p style=\"font-family: 'Quicksand', sans-serif; font-size: 1.1em\">You want to delete the <b> {{data.bookName}}</b>  book?</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button (click)=\"onNoClickRemove()\">No Thanks</button>\r\n  <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"1\" cdkFocusInitial>OK</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/add-book/dialog-overview-dialog-update-book.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/add-book/dialog-overview-dialog-update-book.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Updating a Book?</h1>\r\n<div mat-dialog-content>\r\n  <p style=\"font-family: 'Quicksand', sans-serif; font-size: 1.1em\">You want to update the <b> {{data.bookName}}</b>  book?</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-raised-button (click)=\"onNoClickRemove()\">No Thanks</button>\r\n  <button mat-raised-button color=\"accent\" [mat-dialog-close]=\"1\" cdkFocusInitial>OK</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/admin-home/admin-home.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/admin-home/admin-home.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  margin-top: 100px;\r\n  width: 70%;\r\n  margin-left: calc((100vw - 70%)/2);\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.content{\r\n  margin-top: 20px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\ntable {\r\n  overflow: auto;\r\n}\r\n\r\ntd, th {\r\n  overflow: hidden;\r\n  word-wrap: break-word;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/admin-home/admin-home.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-home/admin-home.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n    <mat-toolbar>Return Books</mat-toolbar>\n    <mat-form-field>\n      <input matInput autocomplete=\"off\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n    <div class=\"loading-shade\"\n         *ngIf=\"isLoadingResults\">\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    </div>\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n\n          <ng-container matColumnDef=\"Book Name\" cdkColumnDef=\"bookName\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Book Name </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.bookName}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Author\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Author </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.author}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Student Index\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Student Index </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.indexNumber}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Burrowed Date\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Burrowed Date </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.burrowedDate}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Due Date\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Due Date </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.dueDate}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Fine\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Fine (LKR) </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.fine}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Return\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Return </th>\n          <td mat-cell *matCellDef=\"let row\"> <button mat-raised-button color=\"primary\" (click)=\"returnBook(row.bookId, row.bookName, row.indexNumber, row.reservedDate, row.fine, row.arrayIndex)\">Return</button> </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n      </table>\n\n      <mat-paginator #paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/admin-home/admin-home.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/admin-home/admin-home.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminHomeComponent, DialogOverviewDialogRemoveBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewDialogRemoveBook", function() { return DialogOverviewDialogRemoveBook; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_book_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/book-data.service */ "./src/app/services/book-data.service.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var AdminHomeComponent = /** @class */ (function () {
    function AdminHomeComponent(authService, adminService, bookDataService, dialog, router, snackBar) {
        var _this = this;
        this.authService = authService;
        this.adminService = adminService;
        this.bookDataService = bookDataService;
        this.dialog = dialog;
        this.router = router;
        this.snackBar = snackBar;
        this.displayedColumns = ['Book Name', 'Author', 'Student Index', 'Burrowed Date', 'Due Date', 'Fine', 'Return'];
        this.burrowedBooks = [];
        this.isLoadingResults = true;
        this.isLoadingResultsBookRead = true;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__["NavigationEnd"]) {
                // trick the Router into believing it's last link wasn't previously loaded
                _this.router.navigated = false;
            }
        });
    }
    AdminHomeComponent.prototype.bookInsert = function (bookDetail, indexNumber, arrayIndex) {
        var _this = this;
        return this.bookDataService.getBookById(bookDetail.bookId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (book) {
            var fine = "0.00";
            if (Date.now() > (bookDetail.date + 604800000)) {
                fine = Number(((Date.now() - (bookDetail.date + 604800000)) / 86400000) * 30).toFixed(2);
            }
            var newBook = {
                arrayIndex: arrayIndex,
                bookId: book['book']['_id'],
                bookName: book['book']['name'],
                author: book['book']['author'],
                indexNumber: indexNumber,
                burrowedDate: new Date(bookDetail.date).toLocaleString(),
                reservedDate: bookDetail.date,
                dueDate: new Date(bookDetail.date + 604800000).toLocaleString(),
                fine: fine
            };
            _this.burrowedBooks.push(newBook);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.burrowedBooks);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }));
    };
    AdminHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getAllUsers().subscribe(function (users) {
            var x = 0;
            users['users'].forEach(function (item) {
                var len = item['reservedBooks'].length;
                for (var i = 0; i < len; i++) {
                    _this.bookInsert(item['reservedBooks'][i], item['indexNumber'], x).subscribe(function (_) { });
                    x++;
                }
            });
        });
        this.isLoadingResults = false;
        this.isLoadingResultsBookRead = false;
    };
    AdminHomeComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    AdminHomeComponent.prototype.returnBook = function (id, bookName, indexNumber, reservedDate, fineAmount, arrayIndex) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewDialogRemoveBook, {
            width: '400px',
            data: { name: bookName }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 1) {
                var detail = {
                    bookId: id,
                    indexNumber: indexNumber,
                    reservedDate: reservedDate
                };
                _this.authService.returnBook(detail).subscribe(function (data) {
                    if (data['success'] == true) {
                        _this.bookDataService.getBookById(id).subscribe(function (data) {
                            if (data['success'] == true) {
                                var bookDetails = {
                                    bookId: data['book']['_id'],
                                    copies: data['book']['copies']
                                };
                                var bookName_1 = data['book']['name'];
                                _this.authService.bookCountUp(bookDetails).subscribe(function (data) {
                                    if (data['success'] == true) {
                                        if (fineAmount > 0) {
                                            var fine = {
                                                indexNumber: indexNumber,
                                                bookName: bookName_1,
                                                amount: fineAmount
                                            };
                                            _this.adminService.addFine(fine).subscribe(function (result) {
                                                if (result['success']) {
                                                    _this.snackBar.open("Book Returned Successfully", 'Close', {
                                                        duration: 2000
                                                    });
                                                }
                                                else {
                                                    _this.snackBar.open("Book Return Failed", 'Close', {
                                                        duration: 2000
                                                    });
                                                }
                                            });
                                        }
                                        else {
                                            _this.snackBar.open("Book Returned Successfully", 'Close', {
                                                duration: 2000
                                            });
                                        }
                                        _this.dataSource.data.splice(arrayIndex, 1);
                                        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                                        _this.dataSource.paginator = _this.paginator;
                                        _this.router.navigate(['/adminHome']);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginator'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], AdminHomeComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], AdminHomeComponent.prototype, "sort", void 0);
    AdminHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-home',
            template: __webpack_require__(/*! ./admin-home.component.html */ "./src/app/components/admin-home/admin-home.component.html"),
            styles: [__webpack_require__(/*! ./admin-home.component.css */ "./src/app/components/admin-home/admin-home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"],
            _services_book_data_service__WEBPACK_IMPORTED_MODULE_3__["BookDataService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], AdminHomeComponent);
    return AdminHomeComponent;
}());

var DialogOverviewDialogRemoveBook = /** @class */ (function () {
    function DialogOverviewDialogRemoveBook(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.book$ = data.name;
    }
    DialogOverviewDialogRemoveBook.prototype.onNoClickRemove = function () {
        this.dialogRef.close();
    };
    DialogOverviewDialogRemoveBook = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-dialog-return-book',
            template: __webpack_require__(/*! ./dialog-overview-dialog-return-book.html */ "./src/app/components/admin-home/dialog-overview-dialog-return-book.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogOverviewDialogRemoveBook);
    return DialogOverviewDialogRemoveBook;
}());



/***/ }),

/***/ "./src/app/components/admin-home/dialog-overview-dialog-return-book.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/admin-home/dialog-overview-dialog-return-book.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Returning a Book?</h1>\r\n<div mat-dialog-content>\r\n  <p style=\"font-family: 'Quicksand', sans-serif; font-size: 1.1em\">You want to return <b> {{data.name}}</b>  book?</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClickRemove()\">No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"1\" cdkFocusInitial>OK</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/book-details/book-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/book-details/book-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  margin-top: 100px;\r\n  width: 70%;\r\n  margin-left: calc((100vw - 70%)/2);\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.card {\r\n  max-width: 200px;\r\n  box-shadow: none !important;\r\n}\r\n\r\n.image, .desc{\r\n  float: left;\r\n}\r\n\r\n.image{\r\n  max-width: 300px;\r\n}\r\n\r\n.desc{\r\n  margin-left: 20px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/book-details/book-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/book-details/book-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"book$\" class=\"container\">\n  <div class=\"image\">\n    <mat-card class=\"card\">\n      <img mat-card-image src=\"{{ book$.imageUrl }}\" alt=\"{{ book$.name }}\">\n    </mat-card>\n  </div>\n  <div class=\"desc\">\n    <h1>{{ book$.name }}</h1><br>\n    <h3>Author : {{ book$.author }}</h3><br>\n    <h3>Pages : {{ book$.pages }}</h3><br>\n    <h3>Edition : {{ book$.edition }}</h3><br>\n    <h3>Publisher : {{ book$.publisher }}</h3><br>\n    <h3>Year : {{ book$.year }}</h3><br>\n    <mat-chip-list>\n      <mat-chip color=\"{{chipColor}}\" selected=\"true\">{{availability}}</mat-chip>\n      <button *ngIf=\"availability == 'Available'\" (click)=\"reserveCopy()\" mat-button color=\"primary\">Reserve a Copy</button>\n    </mat-chip-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/book-details/book-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/book-details/book-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: BookDetailsComponent, DialogOverviewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDetailsComponent", function() { return BookDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewDialog", function() { return DialogOverviewDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_book_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/book-data.service */ "./src/app/services/book-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var BookDetailsComponent = /** @class */ (function () {
    function BookDetailsComponent(bookDataService, authService, route, dialog, snackBar, router) {
        var _this = this;
        this.bookDataService = bookDataService;
        this.authService = authService;
        this.route = route;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        this.chipColor = 'warn';
        this.availability = "Unavailable";
        this.route.params.subscribe(function (params) { return _this.id$ = params.id; });
    }
    BookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookDataService.getBookById(this.id$).subscribe(function (book) {
            _this.book$ = book['book'];
            if (_this.book$['copies'] > 0) {
                _this.chipColor = 'primary';
                _this.availability = 'Available';
            }
        });
    };
    BookDetailsComponent.prototype.reserveCopy = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewDialog, {
            width: '400px',
            data: { name: this.book$['name'] }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 1) {
                var detail = {
                    bookId: _this.book$['_id'],
                    email: localStorage.getItem('user').split('"email":"')[1].split('","')[0]
                };
                _this.authService.burrowBook(detail).subscribe(function (data) {
                    if (data['success']) {
                        _this.bookDataService.getBookById(_this.book$['_id']).subscribe(function (data) {
                            if (data['success'] == true) {
                                var bookDetails = {
                                    bookId: data['book']['_id'],
                                    copies: data['book']['copies']
                                };
                                _this.authService.bookCountDown(bookDetails).subscribe(function (data) {
                                    if (data['success'] == true) {
                                        _this.snackBar.open("Book Reserved", 'Close', {
                                            duration: 2000
                                        });
                                        _this.router.navigate(['']);
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    };
    BookDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-details',
            template: __webpack_require__(/*! ./book-details.component.html */ "./src/app/components/book-details/book-details.component.html"),
            styles: [__webpack_require__(/*! ./book-details.component.css */ "./src/app/components/book-details/book-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_book_data_service__WEBPACK_IMPORTED_MODULE_1__["BookDataService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookDetailsComponent);
    return BookDetailsComponent;
}());

var DialogOverviewDialog = /** @class */ (function () {
    function DialogOverviewDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.book$ = data.name;
    }
    DialogOverviewDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogOverviewDialog = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-dialog',
            template: __webpack_require__(/*! ./dialog-overview-dialog.html */ "./src/app/components/book-details/dialog-overview-dialog.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], DialogOverviewDialog);
    return DialogOverviewDialog;
}());



/***/ }),

/***/ "./src/app/components/book-details/dialog-overview-dialog.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/book-details/dialog-overview-dialog.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Are you Sure?</h1>\r\n<div mat-dialog-content>\r\n  <p style=\"font-family: 'Quicksand', sans-serif; font-size: 1.1em\">You want to reserve <b>{{book$}}</b>  book?</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"1\" cdkFocusInitial>OK</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  margin-top: 100px;\r\n  width: 70%;\r\n  margin-left: calc((100vw - 70%)/2);\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.content{\r\n  margin-top: 20px;\r\n}\r\n\r\n.welcome-text{\r\n  font-size: 1.5em;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: 500;\r\n  margin-bottom: 10px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\ntd, th {\r\n  width: 25%;\r\n}\r\n\r\n.loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\ntr.mat-footer-row {\r\n  font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card *ngIf=\"user\" class=\"welcome-text\">Welcome, {{user.firstName}} {{user.lastName}}</mat-card>\n  <mat-tab-group  #tabGroup (selectedIndexChange)=\"_setDataSource($event)\">\n    <mat-tab label=\"Your Books\">\n      <div class=\"content\">\n        <mat-toolbar>Reserved Books</mat-toolbar>\n        <mat-form-field>\n          <input matInput autocomplete=\"off\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n        <div class=\"loading-shade\"\n             *ngIf=\"isLoadingResults\">\n          <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n        </div>\n        <div class=\"mat-elevation-z8\">\n          <table mat-table [dataSource]=\"dataSource\" matSort>\n\n            <ng-container matColumnDef=\"Reserved Date\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Reserved Date </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.reservedDate | date}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Book Name\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Book Name </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.bookName}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Author\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Author </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.author}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Due Date\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Due Date </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.dueDate}} </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </tr>\n          </table>\n\n          <mat-paginator #paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\n        </div>\n      </div>\n      <div class=\"content\">\n        <mat-toolbar>Books You Read</mat-toolbar>\n        <mat-form-field>\n          <input matInput autocomplete=\"off\" (keyup)=\"applyFilterRead($event.target.value)\" placeholder=\"Filter\">\n        </mat-form-field>\n        <div class=\"loading-shade\"\n             *ngIf=\"isLoadingResultsBookRead\">\n          <mat-spinner *ngIf=\"isLoadingResultsBookRead\"></mat-spinner>\n        </div>\n        <div class=\"mat-elevation-z8\">\n          <table mat-table [dataSource]=\"dataSourceBookRead\" matSort>\n\n            <ng-container matColumnDef=\"Reserved Date\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Reserved Date </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.reservedDate | date}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Book Name\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Book Name </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.bookName}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Author\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Author </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.author}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Returned Date\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Returned Date </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.returnedDate | date}} </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumnsBookRead\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumnsBookRead;\">\n            </tr>\n          </table>\n\n          <mat-paginator #paginatorRead [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\n        </div>\n      </div>\n    </mat-tab>\n    <mat-tab label=\"Fines\">\n      <div class=\"content\">\n        <div class=\"mat-elevation-z8\">\n          <table mat-table [dataSource]=\"dataSourceFines\" matSort>\n\n            <ng-container matColumnDef=\"Book Name\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Book Name </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.bookName}} </td>\n              <td mat-footer-cell *matFooterCellDef> Total </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Author\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Author </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.author}} </td>\n              <td mat-footer-cell *matFooterCellDef></td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Due Date\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Due Date </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.dueDate}} </td>\n              <td mat-footer-cell *matFooterCellDef></td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"Fine\">\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Fine (LKR) </th>\n              <td mat-cell *matCellDef=\"let row\"> {{row.fine}} </td>\n              <td mat-footer-cell *matFooterCellDef> {{totalFines.toFixed(2)}} </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumnsFines\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumnsFines;\"></tr>\n            <tr mat-footer-row *matFooterRowDef=\"displayedColumnsFines; sticky: true\"></tr>\n          </table>\n          <mat-paginator #paginatorFine [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\n        </div>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_book_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/book-data.service */ "./src/app/services/book-data.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(authService, bookData) {
        this.authService = authService;
        this.bookData = bookData;
        this.displayedColumns = ['Reserved Date', 'Book Name', 'Author', 'Due Date'];
        this.displayedColumnsBookRead = ['Reserved Date', 'Book Name', 'Author', 'Returned Date'];
        this.displayedColumnsFines = ['Book Name', 'Author', 'Due Date', 'Fine'];
        this.reservedBooks = [];
        this.readBooks = [];
        this.fineBooks = [];
        this.isLoadingResults = true;
        this.isLoadingResultsBookRead = true;
        this.totalFines = 0;
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
        if (this.dataSource != undefined && this.dataSourceFines != undefined && this.dataSourceBookRead != undefined) {
            this.dataSource.paginator = this.paginator;
            this.dataSourceFines.paginator = this.paginatorFine;
            this.dataSourceBookRead.paginator = this.paginatorRead;
        }
    };
    DashboardComponent.prototype.bookInsert = function (i) {
        var _this = this;
        return this.bookData.getBookById(this.booksReserved[i].bookId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (book) {
            var newBook = {
                reservedDate: new Date(_this.booksReserved[i].date).toLocaleString(),
                bookName: book['book']['name'],
                author: book['book']['author'],
                dueDate: new Date(_this.booksReserved[i].date + 604800000).toLocaleString()
            };
            _this.reservedBooks.push(newBook);
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.reservedBooks);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
        }));
    };
    DashboardComponent.prototype.bookReadInsert = function (i) {
        var _this = this;
        return this.bookData.getBookById(this.booksRead[i].bookId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (book) {
            var newBook = {
                reservedDate: new Date(_this.booksRead[i].reservedDate).toLocaleString(),
                bookName: book['book']['name'],
                author: book['book']['author'],
                returnedDate: new Date(_this.booksRead[i].returnedDate).toLocaleString()
            };
            _this.readBooks.push(newBook);
            _this.dataSourceBookRead = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.readBooks);
            _this.dataSourceBookRead.paginator = _this.paginatorRead;
            _this.dataSourceBookRead.sort = _this.sortRead;
        }));
    };
    DashboardComponent.prototype.fineInsert = function (i) {
        var _this = this;
        return this.bookData.getBookById(this.booksReserved[i].bookId).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (book) {
            /* if (Date.now() + 259200000  > (this.booksReserved[i].date + 86400000)){
               this.totalFines = this.totalFines +  ((Date.now() + 259200000  - (this.booksReserved[i].date + 86400000))/86400000) * 3;
               let newBook :FineData = {
                 bookName: book['book']['name'],
                 author: book['book']['author'],
                 dueDate: new Date(this.booksReserved[i].date + 604800000).toLocaleString(),
                 fine: Number(((Date.now() + 259200000  - (this.booksReserved[i].date + 86400000))/86400000) * 3).toFixed(2)
               };
               this.fineBooks.push(newBook);
             }*/
            if (Date.now() > (_this.booksReserved[i].date + 604800000)) {
                var newBook = {
                    bookName: book['book']['name'],
                    author: book['book']['author'],
                    dueDate: new Date(_this.booksReserved[i].date + 604800000).toLocaleString(),
                    fine: Number(((Date.now() - (_this.booksReserved[i].date + 604800000)) / 86400000) * 30).toFixed(2)
                };
                _this.fineBooks.push(newBook);
            }
            _this.dataSourceFines = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.fineBooks);
            _this.dataSourceFines.paginator = _this.paginatorFine;
            _this.dataSourceFines.sort = _this.sortFine;
        }));
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
            _this.authService.getReservedBooks(_this.user['email']).subscribe(function (data) {
                _this.booksReserved = data['books'].reservedBooks;
                var length = Object.keys(_this.booksReserved).length;
                if (length == 0) {
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.reservedBooks);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                    _this.dataSourceFines = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.fineBooks);
                    _this.dataSourceFines.paginator = _this.paginatorFine;
                    _this.dataSourceFines.sort = _this.sortFine;
                }
                for (var i = 0; i < length; i++) {
                    _this.bookInsert(i).subscribe(function (_) { });
                    _this.fineInsert(i).subscribe(function (_) { });
                }
            });
            _this.authService.getReadBooks(_this.user['email']).subscribe(function (data) {
                _this.booksRead = data['books'].pastBooks;
                var length = Object.keys(_this.booksRead).length;
                if (length == 0) {
                    _this.dataSourceBookRead = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.readBooks);
                    _this.dataSourceBookRead.paginator = _this.paginatorRead;
                    _this.dataSourceBookRead.sort = _this.sortRead;
                }
                else {
                    for (var i = 0; i < length; i++) {
                        _this.bookReadInsert(i).subscribe(function (_) { });
                    }
                }
            });
        }, function (error) {
            console.log(error);
            return false;
        });
        this.isLoadingResults = false;
        this.isLoadingResultsBookRead = false;
    };
    DashboardComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    DashboardComponent.prototype.applyFilterRead = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSourceBookRead.filter = filterValue;
        if (this.dataSourceBookRead.paginator) {
            this.dataSourceBookRead.paginator.firstPage();
        }
    };
    DashboardComponent.prototype._setDataSource = function (indexNumber) {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.dataSourceFines.paginator = this.paginatorFine;
        this.dataSourceBookRead.paginator = this.paginatorRead;
        setTimeout(function () {
            switch (indexNumber) {
                case 0:
                    !_this.dataSource.paginator ? _this.dataSource.paginator = _this.paginator : null;
                    !_this.dataSourceBookRead.paginator ? _this.dataSourceBookRead.paginator = _this.paginatorRead : null;
                    break;
                case 1:
                    !_this.dataSourceFines.paginator ? _this.dataSourceFines.paginator = _this.paginatorFine : null;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginator'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DashboardComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DashboardComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginatorRead'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DashboardComponent.prototype, "paginatorRead", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DashboardComponent.prototype, "sortRead", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginatorFine'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], DashboardComponent.prototype, "paginatorFine", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], DashboardComponent.prototype, "sortFine", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_book_data_service__WEBPACK_IMPORTED_MODULE_3__["BookDataService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search-bar></app-search-bar>\n<app-search-result></app-search-result>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/home/search-bar/search-bar.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/home/search-bar/search-bar.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#search-box{\r\n  width: 100vw;\r\n  padding-top: 20px;\r\n  display: flex;\r\n  align-items:center;\r\n  justify-content: center;\r\n}\r\n\r\n#search-icon{\r\n  cursor: pointer;\r\n}\r\n\r\n::ng-deep .mat-form-field {\r\n  width: 70%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/search-bar/search-bar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/home/search-bar/search-bar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-box\">\n  <mat-form-field appearance=\"outline\">\n    <mat-label>Search</mat-label>\n    <input (keyup.enter)=\"searchBook($event)\" autocomplete=\"off\" matInput placeholder=\"Enter Book Name\">\n    <mat-icon id=\"search-icon\" matSuffix>search</mat-icon>\n  </mat-form-field>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/search-bar/search-bar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/home/search-bar/search-bar.component.ts ***!
  \********************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(router) {
        var _this = this;
        this.router = router;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                // trick the Router into believing it's last link wasn't previously loaded
                _this.router.navigated = false;
            }
        });
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent.prototype.searchBook = function (event) {
        var bookName = event.target.value;
        this.router.navigate(['/books/' + bookName]);
    };
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/components/home/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/components/home/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/components/home/search-result/search-result.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/home/search-result/search-result.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 70%;\r\n  margin-left: calc((100vw - 70%)/2);\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nul{\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nli{\r\n  padding: 20px;\r\n  float: left;\r\n}\r\n\r\n.card {\r\n  width: 220px;\r\n}\r\n\r\nbody{\r\n  overflow-x: hidden;\r\n}\r\n\r\n#container1 {\r\n  width: 100%;\r\n  margin: 1em auto;\r\n  padding: 0;\r\n  background:#fff;\r\n}\r\n\r\n.items {\r\n  max-width:300px;\r\n  height:400px;\r\n  margin: 0 10px;\r\n  background:#ECECEC;\r\n  cursor: pointer;\r\n}\r\n\r\n.items:hover > .name{\r\n  margin-top: -70px;\r\n  transition: margin-top cubic-bezier(0, 1.63, 0.52, 0.95) 200ms;\r\n}\r\n\r\n#left, #right {\r\n  margin: 30px;\r\n}\r\n\r\n.name{\r\n  position: absolute;\r\n  width: 300px;\r\n  height: 80px;\r\n  background: #5e00b3d6;\r\n  font-family:'Quicksand', sans-serif;\r\n  color: #ffffff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  cursor: pointer;\r\n  transition: margin-top ease-in-out 200ms;\r\n}\r\n\r\n.bookName, .authorName{\r\n  display: flex;\r\n  justify-content:center;\r\n  align-items:center;\r\n}\r\n\r\n.bookName{\r\n  height: 40px;\r\n  font-size: 1em;\r\n}\r\n\r\n.authorName{\r\n  font-family: 'Raleway', sans-serif;\r\n  font-size: 12px;\r\n  height: 30px;\r\n}\r\n\r\n#newBooksTitle{\r\n  font-size: 2em;\r\n  display: flex;\r\n  align-items:center;\r\n  justify-content: center;\r\n  font-family:'Bitter', sans-serif;\r\n  font-weight: 800;\r\n  color: #572a6a;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/search-result/search-result.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/home/search-result/search-result.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card *ngIf=\"!resultArray\">No Results Were Found</mat-card>\n  <ul>\n    <li *ngFor=\"let book of books$\">\n      <mat-card class=\"card\">\n        <mat-card-header>\n          <mat-card-title style=\"height: 30px;\"><b>{{ book.name }}</b></mat-card-title>\n          <mat-card-subtitle>By {{ book.author }}</mat-card-subtitle>\n        </mat-card-header>\n        <img style=\"max-height: 300px\" mat-card-image src=\"{{ book.imageUrl }}\" alt=\"{{ book.name }}\">\n        <mat-card-actions>\n          <button routerLink=\"/books/book-details/{{book._id}}\" mat-button><b>VIEW BOOK</b></button>\n        </mat-card-actions>\n      </mat-card>\n    </li>\n  </ul>\n  <div id=\"container1\" *ngIf=\"newBooks\">\n    <div id=\"newBooksTitle\">New Arrivals</div>\n    <div\n      ng2-carouselamos\n      class=\"slides-wrapper\"\n      [items]=\"items\"\n      [width]=\"960\"\n      [$prev]=\"prev\"\n      [$next]=\"next\"\n      [$item]=\"item\"\n    >\n    </div>\n\n\n    <ng-template #prev>\n      <img style=\"background: #fff; border-radius: 50%; background-position: center center; cursor: pointer; \" src=\"../../../../assets/left-arrow.svg\" id=\"left\" />\n    </ng-template>\n    <ng-template #next>\n      <img style=\"background: #fff; border-radius: 50%; background-position: center center;cursor: pointer;\"  src=\"../../../../assets/right-arrow.svg\" id=\"right\" />\n    </ng-template>\n    <ng-template #item let-item let-i=\"index\">\n\n      <div class=\"items\" routerLink=\"/books/book-details/{{item.id}}\">\n        <img style=\"width: 300px; height: 400px; background-size: contain\" src=\"{{ item.imageUrl }}\">\n        <div class=\"name\">\n          <div class=\"bookName\">{{item.name}}</div>\n          <div class=\"authorName\">by {{item.author}}</div>\n        </div>\n      </div>\n\n\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/search-result/search-result.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/home/search-result/search-result.component.ts ***!
  \**************************************************************************/
/*! exports provided: SearchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultComponent", function() { return SearchResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_book_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/book-data.service */ "./src/app/services/book-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchResultComponent = /** @class */ (function () {
    function SearchResultComponent(bookDataService, route, snackBar) {
        var _this = this;
        this.bookDataService = bookDataService;
        this.route = route;
        this.snackBar = snackBar;
        this.resultArray = true;
        this.items = [];
        this.newBooks = false;
        this.route.params.subscribe(function (params) { return _this.name$ = params.bookName; });
        var bookLimit = {
            limit: 10
        };
        this.bookDataService.getNewBooks(bookLimit).subscribe(function (books) {
            if (books['success'] == true) {
                _this.newBooks = true;
                var booksArray = books['books'];
                for (var i = 0; i < booksArray.length; i++) {
                    _this.items.push({
                        id: booksArray[i]._id,
                        imageUrl: booksArray[i].imageUrl,
                        name: booksArray[i].name,
                        author: booksArray[i].author,
                    });
                }
            }
            else {
                _this.newBooks = false;
            }
        });
    }
    //to remove the async nature of JS
    SearchResultComponent.prototype.getBooks = function () {
        var _this = this;
        return this.bookDataService.getBooks(this.name$).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (books) {
            _this.books$ = books['book'];
            if (_this.books$ === undefined && _this.name$ != undefined) {
                _this.openSnackBar();
                _this.resultArray = false;
            }
        }));
    };
    SearchResultComponent.prototype.openSnackBar = function () {
        this.snackBar.open('No Results Found', 'Undo', {
            duration: 2000
        });
    };
    SearchResultComponent.prototype.ngOnInit = function () {
        this.getBooks().subscribe(function (_) { });
    };
    SearchResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-result',
            template: __webpack_require__(/*! ./search-result.component.html */ "./src/app/components/home/search-result/search-result.component.html"),
            styles: [__webpack_require__(/*! ./search-result.component.css */ "./src/app/components/home/search-result/search-result.component.css")]
        }),
        __metadata("design:paramtypes", [_services_book_data_service__WEBPACK_IMPORTED_MODULE_1__["BookDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], SearchResultComponent);
    return SearchResultComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 70%;\r\n  margin-left: calc((100vw - 70%)/2);\r\n  margin-top: 100px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#title{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: 'Bitter', sans-serif;\r\n}\r\n\r\n#form {\r\n  width: 50%;\r\n  min-width: 250px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nform{\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n#login-btn{\r\n  height: 50px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 1em;\r\n}\r\n\r\n#registerLink{\r\n  font-family: 'Quicksand', sans-serif !important;\r\n  font-size: 1em !important;\r\n  margin-top: 20px;\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"title\">\n    <h1><span>Login</span></h1>\n  </div>\n  <div id=\"form\">\n  <form (submit)=\"onLoginSubmit()\">\n    <mat-form-field appearance=\"outline\" class=\"full-width\">\n      <mat-label>Email</mat-label>\n      <input matInput autocomplete=\"off\" placeholder=\"Email\" [formControl]=\"emailFormControl\"\n             [errorStateMatcher]=\"matcher\">\n      <mat-hint *ngIf=\"emailFormControl.value != ''\"></mat-hint>\n      <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n        Please enter a valid email address\n      </mat-error>\n      <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n        Email is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n    <br/>\n    <mat-form-field appearance=\"outline\" class=\"full-width\">\n      <mat-label>Password</mat-label>\n      <input matInput placeholder=\"Enter your password\" [formControl]=\"passwordFormControl\" [type]=\"hide ? 'password' : 'text'\">\n      <mat-error *ngIf=\"passwordFormControl.hasError('required')\"> Password is <strong>required</strong></mat-error>\n      <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n    </mat-form-field>\n    <button class=\"full-width\" id=\"login-btn\" mat-raised-button color=\"primary\">Login</button>\n  </form>\n  <mat-chip-list  class=\"full-width\">\n    <mat-chip [routerLink] = \"['/register']\" color=\"primary\" id=\"registerLink\">\n      <p>Need an Account? <strong>Register</strong> Here</p>\n    </mat-chip>\n  </mat-chip-list>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: MyErrorStateMatcher, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        console.log(control);
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, snackBar) {
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.hide = true;
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        if (!this.emailFormControl.invalid) {
            var user = {
                email: this.emailFormControl.value,
                password: this.passwordFormControl.value
            };
            this.authService.authenticateUser(user).subscribe(function (data) {
                if (data['success']) {
                    _this.authService.storeUserData(data['token'], data['user']);
                    if (data['user'].type == 'member') {
                        _this.router.navigate(['/']);
                    }
                    else if (data['user'].type == 'admin') {
                        _this.router.navigate(['/adminHome']);
                    }
                }
                else {
                    if (data['msg'] == 'User not found') {
                        _this.snackBar.open('Invalid Credentials', 'Close', {
                            duration: 2000
                        });
                    }
                    else {
                        _this.snackBar.open('Wrong Password', 'Close', {
                            duration: 2000
                        });
                    }
                }
            });
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n}\r\n\r\nh1.app-name {\r\n  font-family: 'Lobster', sans-serif;\r\n  margin-left: 15px;\r\n  font-size: 1.4em;\r\n}\r\n\r\n.logo{\r\n  font-size: 40px;\r\n  height: 30px;\r\n  width: 30px;\r\n}\r\n\r\n.nav-main-menu, .icon {\r\n  padding: 0 14px;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  cursor: pointer;\r\n  outline: 0;\r\n  border: none;\r\n  border-radius: 2px;\r\n  height: 40px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.nav-main-menu:hover, .icon:hover{\r\n  background-color: #2d3d96;\r\n}\r\n\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n\r\n.nav-main-menu{\r\n  padding: 0 14px;\r\n  font-family: 'Montserrat', sans-serif;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n}\r\n\r\n.active{\r\n  border-bottom: 2px solid #fff;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-toolbar color=\"primary\" class=\"toolbar\">\n    <a><mat-icon class=\"logo\">local_library</mat-icon></a>\n    <h1 class=\"app-name\">UCSC Library</h1>\n    <span class=\"spacer\"></span>\n    <span *ngIf=\"!authService.loggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink] = \"['/login']\" class=\"nav-main-menu\">Login</span>\n    <span *ngIf=\"!authService.loggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink] = \"['/register']\" class=\"nav-main-menu\">Register</span>\n    <mat-icon *ngIf=\"authService.adminLoggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink] = \"['/adminHome']\" matTooltip=\"Home\" class=\"icon\">home</mat-icon>\n    <mat-icon *ngIf=\"authService.adminLoggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink] = \"['/requestedBooks']\" matTooltip=\"Requested Books\" class=\"icon\">notifications_active</mat-icon>\n    <mat-icon *ngIf=\"authService.adminLoggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink] = \"['/reports']\" matTooltip=\"Create Reports\" class=\"icon\">description</mat-icon>\n    <mat-icon *ngIf=\"authService.adminLoggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink] = \"['/addAdmin']\" matTooltip=\"Add Admin\" class=\"icon\">person_add</mat-icon>\n    <mat-icon *ngIf=\"authService.adminLoggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink] = \"['/addBook']\" matTooltip=\"Add a Book\" class=\"icon\">note_add</mat-icon>\n    <mat-icon *ngIf=\"authService.memberLoggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink] = \"['']\" matTooltip=\"Home\" class=\"icon\">home</mat-icon>\n    <mat-icon *ngIf=\"authService.memberLoggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink] = \"['/requestBook']\" matTooltip=\"Request a Book\" class=\"icon\">screen_share</mat-icon>\n    <mat-icon *ngIf=\"authService.loggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink] = \"['/profile']\" matTooltip=\"Profile\" class=\"icon\">account_circle</mat-icon>\n    <mat-icon *ngIf=\"authService.memberLoggedIn()\" routerLinkActive = \"active\" [routerLinkActiveOptions] = \"{exact:true}\" [routerLink] = \"['/dashboard']\" matTooltip=\"Dashboard\" class=\"icon\">dashboard</mat-icon>\n    <mat-icon *ngIf=\"authService.loggedIn()\" [routerLink] = \"['/login']\" (click)=\"onLogoutClick()\"  matTooltip=\"Logout\" class=\"icon\">exit_to_app</mat-icon>\n  </mat-toolbar>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, snackBar) {
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.snackBar.open('You Logged Out', 'Close', {
            duration: 2000
        });
        this.router.navigate(['/login']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/edit/edit.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/profile/edit/edit.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 70%;\r\n  margin-left: calc((100vw - 70%)/2);\r\n  margin-top: 100px;\r\n}\r\n\r\n.left-section, .right-section{\r\n  float: left;\r\n}\r\n\r\n.left-section{\r\n  width: 30%;\r\n}\r\n\r\n.right-section{\r\n  width: 68%;\r\n  margin-left: 2%;\r\n}\r\n\r\n.profile-image{\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\nimg{\r\n  width: 100%;\r\n}\r\n\r\n.invite{\r\n  font-size: 1.5em;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: 500;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.properties{\r\n  margin-top: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.label{\r\n  color: #9e0099 !important;\r\n}\r\n\r\ninput{\r\n  color: #303030 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/profile/edit/edit.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/profile/edit/edit.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"left-section\">\n    <div class=\"profile-image\">\n      <img src=\"http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png\" alt=\"\">\n    </div>\n  </div>\n  <form (submit)=\"updateProfile()\">\n    <div class=\"right-section\" *ngIf=\"user\">\n      <mat-card class=\"invite\">Let's Edit Your Profile</mat-card>\n      <mat-form-field appearance=\"outline\" class=\"properties\">\n        <mat-label>First Name</mat-label>\n        <input matInput autocomplete=\"off\" placeholder=\"First Name\" [formControl]=\"firstNameFormControl\"\n               [errorStateMatcher]=\"matcher\">\n        <mat-hint *ngIf=\"firstNameFormControl.value != ''\"></mat-hint>\n        <mat-error *ngIf=\"firstNameFormControl.hasError('required')\">\n          First name is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"properties\">\n        <input matInput autocomplete=\"off\" placeholder=\"Last Name\" [formControl]=\"lastNameFormControl\"\n               [errorStateMatcher]=\"matcher\">\n        <mat-hint *ngIf=\"lastNameFormControl.value != ''\"></mat-hint>\n        <mat-error *ngIf=\"lastNameFormControl.hasError('required')\">\n          Last name is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field *ngIf=\"authService.memberLoggedIn()\" appearance=\"outline\" class=\"properties\">\n        <mat-label class=\"label\">Index Number</mat-label>\n        <input matInput disabled value=\"{{user.indexNumber}}\">\n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"properties\">\n        <mat-label class=\"label\">Email</mat-label>\n        <input matInput disabled value=\"{{user.email}}\">\n      </mat-form-field>\n      <button mat-raised-button color=\"primary\"> Update </button>\n    </div>\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/profile/edit/edit.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/edit/edit.component.ts ***!
  \***********************************************************/
/*! exports provided: MyErrorStateMatcher, EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var EditComponent = /** @class */ (function () {
    function EditComponent(authService, snackBar, router) {
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
        this.firstNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
        ]);
        this.lastNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
            _this.firstNameFormControl.setValue(_this.user['firstName']);
            _this.lastNameFormControl.setValue(_this.user['lastName']);
        }, function (error) {
            console.log(error);
            return false;
        });
    };
    EditComponent.prototype.updateProfile = function () {
        var _this = this;
        if (!this.firstNameFormControl.invalid && !this.lastNameFormControl.invalid) {
            var user = {
                firstName: this.firstNameFormControl.value,
                lastName: this.lastNameFormControl.value,
                email: this.user['email']
            };
            this.authService.updateUser(user).subscribe(function (result) {
                if (result['success']) {
                    _this.snackBar.open("Updated Successfully", "Close", {
                        duration: 3000
                    });
                    _this.router.navigate(['/profile']);
                }
            });
        }
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/profile/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/components/profile/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 70%;\r\n  margin-left: calc((100vw - 70%)/2);\r\n  margin-top: 100px;\r\n}\r\n\r\n.left-section, .right-section{\r\n  float: left;\r\n}\r\n\r\n.left-section{\r\n  width: 30%;\r\n}\r\n\r\n.right-section{\r\n  width: 68%;\r\n  margin-left: 2%;\r\n}\r\n\r\n.profile-image{\r\n  width: 100%;\r\n  box-sizing: border-box;\r\n}\r\n\r\nimg{\r\n  width: 100%;\r\n}\r\n\r\n.invite{\r\n  font-size: 1.5em;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-weight: 500;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.properties{\r\n  margin-top: 10px;\r\n  width: 100%;\r\n}\r\n\r\n.label{\r\n  color: #9e0099 !important;\r\n}\r\n\r\ninput{\r\n  color: #303030 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"left-section\">\n    <div class=\"profile-image\">\n      <img src=\"http://www.newsshare.in/wp-content/uploads/2017/04/Miniclip-8-Ball-Pool-Avatar-16.png\" alt=\"\">\n    </div>\n  </div>\n  <div class=\"right-section\" *ngIf=\"user\">\n    <mat-card class=\"invite\">Hello, {{user.firstName}} {{user.lastName}}</mat-card>\n    <mat-form-field appearance=\"outline\" class=\"properties\">\n      <mat-label class=\"label\">First Name</mat-label>\n      <input matInput disabled value=\"{{user.firstName}}\">\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" class=\"properties\">\n      <mat-label class=\"label\">Last Name</mat-label>\n      <input matInput disabled value=\"{{user.lastName}}\">\n    </mat-form-field>\n    <mat-form-field *ngIf=\"authService.memberLoggedIn()\" appearance=\"outline\" class=\"properties\">\n      <mat-label class=\"label\">Index Number</mat-label>\n      <input matInput disabled value=\"{{user.indexNumber}}\">\n    </mat-form-field>\n    <mat-form-field appearance=\"outline\" class=\"properties\">\n      <mat-label class=\"label\">Email</mat-label>\n      <input matInput disabled value=\"{{user.email}}\">\n    </mat-form-field>\n    <button mat-raised-button color=\"primary\" (click)=\"editProfile(user.email)\" >Edit Profile</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile['user'];
        }, function (error) {
            console.log(error);
            return false;
        });
    };
    ProfileComponent.prototype.editProfile = function () {
        this.router.navigate(['/profile/edit']);
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 70%;\r\n  margin-left: calc((100vw - 70%)/2);\r\n  margin-top: 100px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#title{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: 'Bitter', sans-serif;\r\n}\r\n\r\n#form {\r\n  width: 70%;\r\n  min-width: 250px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nform{\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.left-section, .right-section{\r\n  width: 46%;\r\n  float: left;\r\n  padding: 2%;\r\n}\r\n\r\n#register-btn{\r\n  margin: 0 2%;\r\n  width: 96%;\r\n  height: 50px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 1em;\r\n}\r\n\r\n#loginLink{\r\n  font-family: 'Quicksand', sans-serif !important;\r\n  font-size: 1em !important;\r\n  margin: 10px 2%;\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"title\">\n    <h1><span>Register</span></h1>\n  </div>\n  <div id=\"form\">\n    <form (submit)=\"onRegisterSubmit()\">\n      <div class=\"left-section\">\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>First Name</mat-label>\n          <input matInput autocomplete=\"off\" placeholder=\"First Name\" [formControl]=\"firstNameFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-hint *ngIf=\"firstNameFormControl.value != ''\"></mat-hint>\n          <mat-error *ngIf=\"firstNameFormControl.hasError('required')\">\n            First name is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Last Name</mat-label>\n          <input matInput autocomplete=\"off\" placeholder=\"Last Name\" [formControl]=\"lastNameFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-hint *ngIf=\"lastNameFormControl.value != ''\"></mat-hint>\n          <mat-error *ngIf=\"lastNameFormControl.hasError('required')\">\n            Last name is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Index Number</mat-label>\n          <input matInput autocomplete=\"off\" maxlength=\"8\" placeholder=\"Index Number\" [formControl]=\"indexFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-hint *ngIf=\"indexFormControl.value != ''\"></mat-hint>\n          <mat-error *ngIf=\"indexFormControl.hasError('required')\">\n            Index number is <strong>required</strong>\n          </mat-error>\n          <mat-error *ngIf=\"indexFormControl.hasError('pattern')\">\n            Letters are <strong>not allowed</strong>\n          </mat-error>\n          <mat-error *ngIf=\"indexFormControl.hasError('minlength') && !indexFormControl.hasError('pattern')\">\n            Index number is <strong>invalid</strong>\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"right-section\">\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Email</mat-label>\n          <input matInput autocomplete=\"off\" placeholder=\"Email\" [formControl]=\"emailFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-hint *ngIf=\"emailFormControl.value != ''\"></mat-hint>\n          <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n            Please enter a valid email address\n          </mat-error>\n          <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Password</mat-label>\n          <input matInput placeholder=\"Enter your password\" [formControl]=\"passwordFormControl\" [type]=\"hide ? 'password' : 'text'\">\n          <mat-error *ngIf=\"passwordFormControl.hasError('required')\"> Password is <strong>required</strong></mat-error>\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Re-enter Password</mat-label>\n          <input matInput placeholder=\"Enter your password\" [formControl]=\"rePasswordFormControl\" [type]=\"rehide ? 'password' : 'text'\">\n          <mat-error *ngIf=\"rePasswordFormControl.hasError('required')\"> Re-enter the password</mat-error>\n          <mat-icon matSuffix (click)=\"rehide = !rehide\">{{rehide ? 'visibility' : 'visibility_off'}}</mat-icon>\n        </mat-form-field>\n      </div>\n      <button class=\"full-width\" id=\"register-btn\" mat-raised-button color=\"primary\">Register</button>\n    </form>\n    <mat-chip-list  class=\"full-width\">\n      <mat-chip [routerLink] = \"['/login']\" color=\"primary\" id=\"loginLink\">\n        <p>Already have an Account? <strong>Login</strong> Here</p>\n      </mat-chip>\n    </mat-chip-list>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: MyErrorStateMatcher, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(snackBar, authService, router) {
        this.snackBar = snackBar;
        this.authService = authService;
        this.router = router;
        this.hide = true;
        this.rehide = true;
        this.firstNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        this.lastNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        this.indexFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/),
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)
        ]);
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        this.rePasswordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        if (!this.firstNameFormControl.invalid && !this.lastNameFormControl.invalid && !this.indexFormControl.invalid ||
            !this.emailFormControl.invalid && !this.passwordFormControl.invalid && !this.rePasswordFormControl) {
            if (this.passwordFormControl.value !== this.rePasswordFormControl.value) {
                this.snackBar.open('Passwords Does Not Match', 'Close', {
                    duration: 2000
                });
            }
            else {
                var user_1 = {
                    firstName: this.firstNameFormControl.value,
                    lastName: this.lastNameFormControl.value,
                    indexNumber: this.indexFormControl.value,
                    email: this.emailFormControl.value,
                    password: this.passwordFormControl.value
                };
                this.authService.checkUserAvailability(user_1).subscribe(function (data) {
                    if (data['success']) {
                        _this.authService.registerUser(user_1).subscribe(function (data) {
                            if (data['success']) {
                                _this.snackBar.open("Registration Successful, You Can Login Now", "Close", {
                                    duration: 3000
                                });
                                _this.router.navigate(['/login']);
                            }
                        });
                    }
                    else {
                        _this.snackBar.open("You Are Already Registered, Please Login", "Close", {
                            duration: 3000
                        });
                    }
                });
            }
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/report/report.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/report/report.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  margin-top: 100px;\r\n  width: 70%;\r\n  margin-left: calc((100vw - 70%)/2);\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.content{\r\n  margin-top: 20px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\ntable {\r\n  overflow: auto;\r\n}\r\n\r\ntd, th {\r\n  overflow: hidden;\r\n  word-wrap: break-word;\r\n}\r\n\r\n.mat-footer-cell{\r\n  z-index: 1 !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/report/report.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/report/report.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n    <mat-toolbar>Fines Report of {{newSelected}}</mat-toolbar>\n    <mat-form-field style=\"width: 200px; margin-left: 15px\">\n      <mat-select [(value)]=\"selected\">\n        <mat-option value=\"Today\">Today</mat-option>\n        <mat-option value=\"Last 7 Days\">Last 7 Days</mat-option>\n        <mat-option value=\"Last 30 Days\">Last 30 Days</mat-option>\n        <mat-option value=\"Last Year\">Last Year</mat-option>\n        <mat-option value=\"All Times\">All</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <button (click)=\"dropDownFilter()\" style=\"margin-left: 20px\" mat-raised-button color=\"primary\">Filter</button>\n    <button (click)=\"downloadFinesPdf()\" style=\"margin-left: 20px; margin-right: 10px; float: right \" mat-raised-button color=\"primary\">Download This As PDF</button>\n    <div class=\"loading-shade\"\n         *ngIf=\"isLoadingResults\">\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    </div>\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSourceFine\" matSort>\n\n        <ng-container matColumnDef=\"Student Index\" cdkColumnDef=\"indexNumber\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Index Number </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.indexNumber}} </td>\n          <td mat-footer-cell *matFooterCellDef>Total</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Book Name\" cdkColumnDef=\"bookName\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Book Name </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.bookName}} </td>\n          <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Date Paid\" cdkColumnDef=\"datePaid\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Date Paid  </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.datePaid}} </td>\n          <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Amount\" cdkColumnDef=\"amount\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount (LKR)</th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.amount}} </td>\n          <td mat-footer-cell *matFooterCellDef> {{totalFine.toFixed(2)}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        <tr mat-footer-row style=\"font-weight: bold;\" *matFooterRowDef=\"displayedColumns; sticky: true\"></tr>\n      </table>\n\n      <mat-paginator #paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\n    </div>\n  </div>\n  <div class=\"content\">\n    <mat-toolbar>Books Report of {{newSelectedBook}}</mat-toolbar>\n    <mat-form-field style=\"width: 200px; margin-left: 15px\">\n      <mat-select [(value)]=\"selectedBook\">\n        <mat-option value=\"Today\">Today</mat-option>\n        <mat-option value=\"Last 7 Days\">Last 7 Days</mat-option>\n        <mat-option value=\"Last 30 Days\">Last 30 Days</mat-option>\n        <mat-option value=\"Last Year\">Last Year</mat-option>\n        <mat-option value=\"All Times\">All</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <button (click)=\"dropDownFilterBook()\" style=\"margin-left: 20px\" mat-raised-button color=\"primary\">Filter</button>\n    <button (click)=\"downloadBooksPdf()\" style=\"margin-left: 20px; margin-right: 10px; float: right \" mat-raised-button color=\"primary\">Download This As PDF</button>\n    <div class=\"loading-shade\"\n         *ngIf=\"isLoadingResultsBook\">\n      <mat-spinner *ngIf=\"isLoadingResultsBook\"></mat-spinner>\n    </div>\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSourceBook\" matSort>\n\n        <ng-container matColumnDef=\"Book Name\" cdkColumnDef=\"bookName\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Book Name </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.bookName}} </td>\n          <td mat-footer-cell *matFooterCellDef>Total Books</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Author\" cdkColumnDef=\"author\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Author </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.author}} </td>\n          <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Publisher\" cdkColumnDef=\"publisher\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Publisher </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.publisher}} </td>\n          <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Added Date\" cdkColumnDef=\"addedDate\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Added On </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.dateAdded}} </td>\n          <td mat-footer-cell *matFooterCellDef></td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Copies\" cdkColumnDef=\"copies\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Copies</th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.copies}} </td>\n          <td mat-footer-cell *matFooterCellDef> {{totalBooks}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumnsBook\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumnsBook;\"></tr>\n        <tr mat-footer-row style=\"font-weight: bold\" *matFooterRowDef=\"displayedColumnsBook; sticky: true\"></tr>\n      </table>\n\n      <mat-paginator #paginatorBook [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/report/report.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/report/report.component.ts ***!
  \*******************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _services_book_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/book-data.service */ "./src/app/services/book-data.service.ts");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "../node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf-autotable */ "../node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReportComponent = /** @class */ (function () {
    function ReportComponent(adminService, bookDataService) {
        this.adminService = adminService;
        this.bookDataService = bookDataService;
        this.displayedColumns = ['Student Index', 'Book Name', 'Date Paid', 'Amount'];
        this.displayedColumnsBook = ['Book Name', 'Author', 'Publisher', 'Added Date', 'Copies'];
        this.isLoadingResults = true;
        this.isLoadingResultsBook = true;
        this.selected = 'Last 30 Days';
        this.newSelected = 'Last 30 Days';
        this.totalFine = 0;
        this.selectedBook = 'Last 30 Days';
        this.newSelectedBook = 'Last 30 Days';
        this.totalBooks = 0;
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.prepareFineTable(Date.now() - 2592000000, Date.now());
        this.prepareBookTable(Date.now() - 2592000000, Date.now());
    };
    ReportComponent.prototype.prepareFineTable = function (filter, today) {
        var _this = this;
        this.finesSet = [];
        this.totalFine = 0;
        this.adminService.getFines(filter, today).subscribe(function (fineData) {
            fineData['fines'].forEach(function (item) {
                var newFine = {
                    indexNumber: item['indexNumber'],
                    bookName: item['bookName'],
                    datePaid: new Date(Number(item['datePaid'])).toLocaleString(),
                    amount: item['amount']
                };
                _this.finesSet.push(newFine);
                _this.totalFine += item['amount'];
            });
            _this.isLoadingResults = false;
            _this.dataSourceFine = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.finesSet);
            _this.dataSourceFine.paginator = _this.paginator;
            _this.dataSourceFine.sort = _this.sort;
        });
    };
    ReportComponent.prototype.prepareBookTable = function (filter, today) {
        var _this = this;
        this.booksSet = [];
        this.totalBooks = 0;
        this.bookDataService.getBooksFilter(filter, today).subscribe(function (bookData) {
            bookData['books'].forEach(function (item) {
                var newBook = {
                    bookName: item['name'],
                    author: item['author'],
                    publisher: item['publisher'],
                    dateAdded: new Date(Number(item['from'])).toLocaleString(),
                    copies: item['copies']
                };
                _this.booksSet.push(newBook);
                _this.totalBooks += item['copies'];
            });
            _this.isLoadingResultsBook = false;
            _this.dataSourceBook = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.booksSet);
            _this.dataSourceBook.paginator = _this.paginatorBook;
            _this.dataSourceBook.sort = _this.sortBook;
        });
    };
    ReportComponent.prototype.dropDownFilter = function () {
        this.newSelected = this.selected;
        if (this.selected == 'Today') {
            var theDay = new Date(Date.now());
            var todayMilliseconds = new Date(theDay.getFullYear(), theDay.getMonth(), theDay.getDate()).getTime();
            this.prepareFineTable(todayMilliseconds, Date.now());
        }
        else if (this.selected == 'Last 7 Days') {
            this.prepareFineTable(Date.now() - 604800000, Date.now());
        }
        else if (this.selected == 'Last 30 Days') {
            this.prepareFineTable(Date.now() - 2592000000, Date.now());
        }
        else if (this.selected == 'Last Year') {
            this.prepareFineTable(Date.now() - 31536000000, Date.now());
        }
        else if (this.selected == 'All Times') {
            this.prepareFineTable(null, Date.now);
        }
    };
    ReportComponent.prototype.dropDownFilterBook = function () {
        this.newSelectedBook = this.selectedBook;
        if (this.selectedBook == 'Today') {
            var theDay = new Date(Date.now());
            var todayMilliseconds = new Date(theDay.getFullYear(), theDay.getMonth(), theDay.getDate()).getTime();
            this.prepareBookTable(todayMilliseconds, Date.now());
        }
        else if (this.selectedBook == 'Last 7 Days') {
            this.prepareBookTable(Date.now() - 604800000, Date.now());
        }
        else if (this.selectedBook == 'Last 30 Days') {
            this.prepareBookTable(Date.now() - 2592000000, Date.now());
        }
        else if (this.selectedBook == 'Last Year') {
            this.prepareBookTable(Date.now() - 31536000000, Date.now());
        }
        else if (this.selectedBook == 'All Times') {
            this.prepareBookTable(null, Date.now);
        }
    };
    ReportComponent.prototype.downloadFinesPdf = function () {
        var columns = [
            { title: "Index Number", dataKey: "indexNumber" },
            { title: "Book Name", dataKey: "bookName" },
            { title: "Paid Date", dataKey: "datePaid" },
            { title: "Amount (LKR)", dataKey: "amount" }
        ];
        var rows = this.finesSet;
        var total = {
            indexNumber: "Total",
            bookName: '',
            datePaid: '',
            amount: Number(this.totalFine.toFixed(2))
        };
        rows.push(total);
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__('p', 'pt');
        doc.text("Report Of Fines Formongo " + this.selectedBook, 40, 30);
        doc.autoTable(columns, rows);
        doc.save('fines.pdf');
    };
    ReportComponent.prototype.downloadBooksPdf = function () {
        var columns = [
            { title: "Book Name", dataKey: "bookName" },
            { title: "Author", dataKey: "author" },
            { title: "Publisher", dataKey: "publisher" },
            { title: "Added On", dataKey: "dateAdded" },
            { title: "Copies", dataKey: "copies" }
        ];
        var rows = this.booksSet;
        var total = {
            bookName: "Total",
            author: '',
            publisher: '',
            dateAdded: '',
            copies: this.totalBooks
        };
        rows.push(total);
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_4__('p', 'pt');
        doc.text("Report Of Books For " + this.selectedBook, 40, 30);
        doc.autoTable(columns, rows);
        doc.save('books.pdf');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginator'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ReportComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ReportComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginatorBook'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ReportComponent.prototype, "paginatorBook", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ReportComponent.prototype, "sortBook", void 0);
    ReportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/components/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/components/report/report.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"], _services_book_data_service__WEBPACK_IMPORTED_MODULE_3__["BookDataService"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/components/request-book/request-book.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/request-book/request-book.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 70%;\r\n  margin-left: calc((100vw - 70%)/2);\r\n  margin-top: 100px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#title{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: 'Bitter', sans-serif;\r\n}\r\n\r\n#form {\r\n  width: 70%;\r\n  min-width: 250px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nform{\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.left-section, .right-section{\r\n  width: 46%;\r\n  float: left;\r\n  padding: 2%;\r\n}\r\n\r\n#submit-btn{\r\n  margin: 0 2%;\r\n  width: 96%;\r\n  height: 50px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 1em;\r\n}\r\n\r\n#loginLink{\r\n  font-family: 'Quicksand', sans-serif !important;\r\n  font-size: 1em !important;\r\n  margin: 10px 2%;\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/request-book/request-book.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/request-book/request-book.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"title\">\n    <h1><span>Request a Book</span></h1>\n  </div>\n  <div id=\"form\">\n    <form (submit)=\"onRequestSubmit()\">\n      <div class=\"left-section\">\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Book Name</mat-label>\n          <input matInput autocomplete=\"off\" placeholder=\"Book Name\" [formControl]=\"bookNameFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-hint *ngIf=\"bookNameFormControl.value != ''\"></mat-hint>\n          <mat-error *ngIf=\"bookNameFormControl.hasError('required')\">\n            Book name is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Author</mat-label>\n          <input matInput autocomplete=\"off\" placeholder=\"Author\" [formControl]=\"authorFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-hint *ngIf=\"authorFormControl.value != ''\"></mat-hint>\n          <mat-error *ngIf=\"authorFormControl.hasError('required')\">\n            Author name is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Publisher (Only if you know)</mat-label>\n          <input matInput autocomplete=\"off\" placeholder=\"Publisher (Only if you know)\" [formControl]=\"publisherFormControl\">\n        </mat-form-field>\n      </div>\n      <div class=\"right-section\">\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Edition (Only if you know)</mat-label>\n          <input matInput autocomplete=\"off\" placeholder=\"Edition (Only if you know)\" [formControl]=\"editionFormControl\">\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Category (As you know)</mat-label>\n          <input matInput placeholder=\"Category (As you know)\" [formControl]=\"categoryFormControl\">\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Any description (Optional)</mat-label>\n          <input matInput placeholder=\"Any Description (Optional)\" [formControl]=\"descriptionFormControl\">\n        </mat-form-field>\n      </div>\n      <button class=\"full-width\" id=\"submit-btn\" mat-raised-button color=\"primary\">Send Request</button>\n    </form>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/request-book/request-book.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/request-book/request-book.component.ts ***!
  \*******************************************************************/
/*! exports provided: MyErrorStateMatcher, RequestBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestBookComponent", function() { return RequestBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_book_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/book-data.service */ "./src/app/services/book-data.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var RequestBookComponent = /** @class */ (function () {
    function RequestBookComponent(snackBar, bookDataService, authService, router) {
        this.snackBar = snackBar;
        this.bookDataService = bookDataService;
        this.authService = authService;
        this.router = router;
        this.bookNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
        ]);
        this.authorFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
        ]);
        this.publisherFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []);
        this.editionFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []);
        this.categoryFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []);
        this.descriptionFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', []);
        this.matcher = new MyErrorStateMatcher();
    }
    RequestBookComponent.prototype.ngOnInit = function () {
    };
    RequestBookComponent.prototype.onRequestSubmit = function () {
        var _this = this;
        if (this.bookNameFormControl.value == '' && this.authorFormControl.value == '') {
            this.snackBar.open('Please fill up the required fields', 'Close', {
                duration: 3000
            });
        }
        else {
            this.authService.getProfile().subscribe(function (data) {
                var book = {
                    name: _this.bookNameFormControl.value,
                    author: _this.authorFormControl.value,
                    publisher: _this.publisherFormControl.value,
                    edition: _this.editionFormControl.value,
                    category: _this.categoryFormControl.value,
                    description: _this.descriptionFormControl.value,
                    requestedDate: Date.now(),
                    requestedUser: data['user'].indexNumber
                };
                _this.bookDataService.requestBook(book).subscribe(function (data) {
                    if (data['success']) {
                        _this.snackBar.open("Request Send Successfully", "Close", {
                            duration: 3000
                        });
                        _this.router.navigate(['/']);
                    }
                });
            });
        }
    };
    RequestBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-book',
            template: __webpack_require__(/*! ./request-book.component.html */ "./src/app/components/request-book/request-book.component.html"),
            styles: [__webpack_require__(/*! ./request-book.component.css */ "./src/app/components/request-book/request-book.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _services_book_data_service__WEBPACK_IMPORTED_MODULE_4__["BookDataService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RequestBookComponent);
    return RequestBookComponent;
}());



/***/ }),

/***/ "./src/app/components/requested-books/dialog-overview-dialog-requested-book.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/requested-books/dialog-overview-dialog-requested-book.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Did You Upload The Book?</h1>\r\n<div mat-dialog-content>\r\n  <p style=\"font-family: 'Quicksand', sans-serif; font-size: 1.1em\">Press OK to mark the book as uploaded</p>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClickRequested()\">No Thanks</button>\r\n  <button mat-button [mat-dialog-close]=\"1\" cdkFocusInitial>OK</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/requested-books/requested-books.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/requested-books/requested-books.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  margin-top: 100px;\r\n  width: 90%;\r\n  margin-left: calc((100vw - 90%)/2);\r\n  font-family: 'Raleway', sans-serif;\r\n}\r\n\r\n.content{\r\n  margin-top: 20px;\r\n}\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n.mat-form-field {\r\n  font-size: 14px;\r\n  width: 100%;\r\n}\r\n\r\n.loading-shade {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 56px;\r\n  right: 0;\r\n  background: rgba(0, 0, 0, 0.15);\r\n  z-index: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\ntable {\r\n  overflow: auto;\r\n}\r\n\r\ntd, th {\r\n  overflow: hidden;\r\n  word-wrap: break-word;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/requested-books/requested-books.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/requested-books/requested-books.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"content\">\n    <mat-toolbar>Reqested Books</mat-toolbar>\n    <mat-form-field>\n      <input matInput autocomplete=\"off\" (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n    </mat-form-field>\n    <div class=\"loading-shade\"\n         *ngIf=\"isLoadingResults\">\n      <mat-spinner *ngIf=\"isLoadingResults\"></mat-spinner>\n    </div>\n    <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort>\n\n        <ng-container matColumnDef=\"Book Name\" cdkColumnDef=\"bookName\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Book Name </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.bookName}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Author\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Author </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.author}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Student Index\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Student Index </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.indexNumber}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Publisher\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Publisher </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.publisher}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Edition\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Edition</th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.edition}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Category\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Category </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.category}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Description\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Description </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.description}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Requested By\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Requested By </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.requestedBy}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Requested Date\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Requested Date </th>\n          <td mat-cell *matCellDef=\"let row\"> {{row.requestedDate}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Update\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Update </th>\n          <td mat-cell *matCellDef=\"let row\"> <button mat-raised-button color=\"primary\" (click)=\"updateRequestedBook(row.id, row.arrayIndex)\">Mark as Uploaded</button> </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n        </tr>\n      </table>\n\n      <mat-paginator #paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" showFirstLastButtons></mat-paginator>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/requested-books/requested-books.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/requested-books/requested-books.component.ts ***!
  \*************************************************************************/
/*! exports provided: RequestedBooksComponent, DialogOverviewDialogRequestedBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestedBooksComponent", function() { return RequestedBooksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogOverviewDialogRequestedBook", function() { return DialogOverviewDialogRequestedBook; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var RequestedBooksComponent = /** @class */ (function () {
    function RequestedBooksComponent(adminService, dialog, snackBar, router) {
        var _this = this;
        this.adminService = adminService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.router = router;
        this.displayedColumns = ['Book Name', 'Author', 'Publisher', 'Edition', 'Category', 'Description', 'Requested By', 'Requested Date', 'Update'];
        this.requestedBooks = [];
        this.isLoadingResults = true;
        this.isLoadingResultsBookRead = true;
        this.router.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this.router.events.subscribe(function (evt) {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                // trick the Router into believing it's last link wasn't previously loaded
                _this.router.navigated = false;
            }
        });
    }
    RequestedBooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getAllRequestedBooks().subscribe(function (books) {
            var arrayIndex = 0;
            books['books'].forEach(function (item) {
                var newBook = {
                    id: item['_id'],
                    bookName: item['name'],
                    author: item['author'],
                    publisher: item['publisher'],
                    edition: item['edition'],
                    category: item['category'],
                    description: item['description'],
                    requestedBy: item['requestedUser'],
                    requestedDate: new Date(item['requestedDate']).toLocaleString(),
                    arrayIndex: arrayIndex
                };
                arrayIndex++;
                _this.requestedBooks.push(newBook);
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.requestedBooks);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            });
        });
        this.isLoadingResults = false;
        this.isLoadingResultsBookRead = false;
    };
    RequestedBooksComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    RequestedBooksComponent.prototype.updateRequestedBook = function (id, arrayIndex) {
        var _this = this;
        var dialogRef = this.dialog.open(DialogOverviewDialogRequestedBook, {
            width: '400px',
            data: { id: id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 1) {
                var bookData = {
                    id: id
                };
                _this.adminService.updateBookStatus(bookData).subscribe(function (result) {
                    if (result['success']) {
                        _this.snackBar.open("Status Updated Successfully", 'Close', {
                            duration: 2000
                        });
                        _this.dataSource.data.splice(arrayIndex, 1);
                        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.dataSource.data);
                        _this.router.navigate(['/requestedBooks']);
                    }
                    else {
                        _this.snackBar.open("Updating Failed", 'Close', {
                            duration: 2000
                        });
                    }
                });
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paginator'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], RequestedBooksComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], RequestedBooksComponent.prototype, "sort", void 0);
    RequestedBooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-requested-books',
            template: __webpack_require__(/*! ./requested-books.component.html */ "./src/app/components/requested-books/requested-books.component.html"),
            styles: [__webpack_require__(/*! ./requested-books.component.css */ "./src/app/components/requested-books/requested-books.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RequestedBooksComponent);
    return RequestedBooksComponent;
}());

var DialogOverviewDialogRequestedBook = /** @class */ (function () {
    function DialogOverviewDialogRequestedBook(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogOverviewDialogRequestedBook.prototype.onNoClickRequested = function () {
        this.dialogRef.close();
    };
    DialogOverviewDialogRequestedBook = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dialog-overview-dialog-requested-book',
            template: __webpack_require__(/*! ./dialog-overview-dialog-requested-book.html */ "./src/app/components/requested-books/dialog-overview-dialog-requested-book.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogOverviewDialogRequestedBook);
    return DialogOverviewDialogRequestedBook;
}());



/***/ }),

/***/ "./src/app/components/update-book/update-book.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/update-book/update-book.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  width: 70%;\r\n  margin-left: calc((100vw - 70%)/2);\r\n  margin-top: 100px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#title{\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-family: 'Bitter', sans-serif;\r\n}\r\n\r\n#form {\r\n  width: 70%;\r\n  min-width: 250px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\nform{\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n  margin-top: 10px;\r\n}\r\n\r\n.left-section, .right-section{\r\n  width: 46%;\r\n  float: left;\r\n  padding: 2%;\r\n}\r\n\r\n#register-btn{\r\n  margin: 0 2%;\r\n  width: 96%;\r\n  height: 50px;\r\n  font-family: 'Quicksand', sans-serif;\r\n  font-size: 1em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/update-book/update-book.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/update-book/update-book.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div id=\"title\">\n    <h1><span>Update Book</span></h1>\n  </div>\n  <div id=\"form\">\n    <form (submit)=\"onUpdateBookSubmit()\">\n      <div class=\"left-section\">\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Book Name</mat-label>\n          <input matInput autocomplete=\"off\" placeholder=\"Book Name\" [formControl]=\"bookNameFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error *ngIf=\"bookNameFormControl.hasError('required')\">\n            First name is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Author</mat-label>\n          <input matInput autocomplete=\"off\" placeholder=\"Author\" [formControl]=\"authorFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error *ngIf=\"authorFormControl.hasError('required')\">\n            Author name is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Pages</mat-label>\n          <input matInput autocomplete=\"off\" placeholder=\"Index Number\" [formControl]=\"pagesFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error *ngIf=\"pagesFormControl.hasError('pattern')\">\n            <strong>Only numbers</strong> are allowed\n          </mat-error>\n          <mat-error *ngIf=\"pagesFormControl.hasError('required')\">\n            Number of pages is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Edition</mat-label>\n          <input matInput autocomplete=\"off\" placeholder=\"Edition\" [formControl]=\"editionFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error *ngIf=\"editionFormControl.hasError('required')\">\n            Edition is <strong>required</strong>\n          </mat-error>\n          <mat-error *ngIf=\"editionFormControl.hasError('pattern')\">\n            <strong>Only numbers</strong> are allowed\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <div class=\"right-section\">\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Publisher</mat-label>\n          <input matInput autocomplete=\"off\" placeholder=\"Publisher\" [formControl]=\"publisherFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error *ngIf=\"publisherFormControl.hasError('required')\">\n            Publisher is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Published Year</mat-label>\n          <input matInput autocomplete=\"off\" maxlength=\"4\" placeholder=\"Published Year\" [formControl]=\"yearFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error *ngIf=\"yearFormControl.hasError('required')\">\n            Published year is <strong>required</strong>\n          </mat-error>\n          <mat-error *ngIf=\"yearFormControl.hasError('minlength') || yearFormControl.hasError('pattern')\">\n            Invalid Year Format\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Image Url</mat-label>\n          <input matInput autocomplete=\"off\" placeholder=\"Image Url\" [formControl]=\"imageUrlFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error *ngIf=\"imageUrlFormControl.hasError('required')\">\n            Image Url is <strong>required</strong>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"full-width\">\n          <mat-label>Number of Copies</mat-label>\n          <input autocomplete=\"off\" matInput placeholder=\"Number of Copies\" [formControl]=\"copiesFormControl\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error *ngIf=\"copiesFormControl.hasError('required')\">\n            Number of copies is <strong>required</strong>\n          </mat-error>\n          <mat-error *ngIf=\"copiesFormControl.hasError('pattern')\">\n            <strong>Only numbers</strong> are allowed\n          </mat-error>\n        </mat-form-field>\n      </div>\n      <button class=\"full-width\" id=\"register-btn\" mat-raised-button color=\"primary\">Update The Book</button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/update-book/update-book.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/update-book/update-book.component.ts ***!
  \*****************************************************************/
/*! exports provided: MyErrorStateMatcher, UpdateBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateBookComponent", function() { return UpdateBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_book_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/book-data.service */ "./src/app/services/book-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var UpdateBookComponent = /** @class */ (function () {
    function UpdateBookComponent(snackBar, router, bookDataService, route) {
        var _this = this;
        this.snackBar = snackBar;
        this.router = router;
        this.bookDataService = bookDataService;
        this.route = route;
        this.bookNameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.authorFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.pagesFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/),
        ]);
        this.editionFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/),
        ]);
        this.publisherFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.yearFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/),
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
        ]);
        this.imageUrlFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
        this.copiesFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/),
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.route.params.subscribe(function (params) { return _this.id$ = params.id; });
    }
    UpdateBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookDataService.getBookById(this.id$).subscribe(function (book) {
            _this.bookNameFormControl.setValue(book['book'].name);
            _this.authorFormControl.setValue(book['book'].author);
            _this.pagesFormControl.setValue(book['book'].pages);
            _this.editionFormControl.setValue(book['book'].edition);
            _this.publisherFormControl.setValue(book['book'].publisher);
            _this.yearFormControl.setValue(book['book'].year);
            _this.imageUrlFormControl.setValue(book['book'].imageUrl);
            _this.copiesFormControl.setValue(book['book'].copies);
        });
    };
    UpdateBookComponent.prototype.onUpdateBookSubmit = function () {
        var _this = this;
        if (!this.bookNameFormControl.invalid &&
            !this.authorFormControl.invalid &&
            !this.pagesFormControl.invalid &&
            !this.editionFormControl.invalid &&
            !this.publisherFormControl.invalid &&
            !this.yearFormControl.invalid &&
            !this.imageUrlFormControl.invalid &&
            !this.copiesFormControl.invalid) {
            var newBook = {
                bookId: this.id$,
                bookName: this.bookNameFormControl.value,
                author: this.authorFormControl.value,
                pages: this.pagesFormControl.value,
                edition: this.editionFormControl.value,
                publisher: this.publisherFormControl.value,
                year: this.yearFormControl.value,
                imageUrl: this.imageUrlFormControl.value,
                copies: this.copiesFormControl.value,
                from: Date.now()
            };
            this.bookDataService.updateBook(newBook).subscribe(function (status) {
                if (status['success'] == true) {
                    _this.snackBar.open('Book Update Successfully', 'Close', {
                        duration: 3000
                    });
                    _this.router.navigate(['/addBook']);
                }
                else {
                    _this.snackBar.open('Failed to Update', 'Close', {
                        duration: 3000
                    });
                }
            });
        }
    };
    UpdateBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update-book',
            template: __webpack_require__(/*! ./update-book.component.html */ "./src/app/components/update-book/update-book.component.html"),
            styles: [__webpack_require__(/*! ./update-book.component.css */ "./src/app/components/update-book/update-book.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_book_data_service__WEBPACK_IMPORTED_MODULE_4__["BookDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UpdateBookComponent);
    return UpdateBookComponent;
}());



/***/ }),

/***/ "./src/app/guards/admin.guard.ts":
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminGuard = /** @class */ (function () {
    function AdminGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminGuard.prototype.canActivate = function () {
        if (this.authService.adminLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AdminGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.memberLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/default.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/default.guard.ts ***!
  \*****************************************/
/*! exports provided: DefaultGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultGuard", function() { return DefaultGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DefaultGuard = /** @class */ (function () {
    function DefaultGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    DefaultGuard.prototype.canActivate = function () {
        if (!this.authService.loggedIn()) {
            return true;
        }
        else if (this.authService.adminLoggedIn()) {
            this.router.navigate(['/adminHome']);
            return false;
        }
        else if (this.authService.memberLoggedIn()) {
            this.router.navigate(['/']);
            return false;
        }
    };
    DefaultGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DefaultGuard);
    return DefaultGuard;
}());



/***/ }),

/***/ "./src/app/guards/profile.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/profile.guard.ts ***!
  \*****************************************/
/*! exports provided: ProfileGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileGuard", function() { return ProfileGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileGuard = /** @class */ (function () {
    function ProfileGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    ProfileGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProfileGuard);
    return ProfileGuard;
}());



/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.getAllUsers = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/getAllUsers', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AdminService.prototype.getAllRequestedBooks = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/books/getAllRequestedBooks', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AdminService.prototype.updateBookStatus = function (book) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/books/updateBookStatus', book, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AdminService.prototype.addFine = function (fine) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/books/addFine', fine, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AdminService.prototype.getFines = function (filter, today) {
        var dates = {
            filter: filter,
            today: today
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/books/getFines', dates, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.checkUserAvailability = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/checkAvailability', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.checkAdminAvailability = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/checkAdminAvailability', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.burrowBook = function (detail) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/burrowBook', detail, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.returnBook = function (detail) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/returnBook', detail, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.bookCountDown = function (bookDetails) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/books/countDown', bookDetails, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.bookCountUp = function (bookDetails) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/books/countUp', bookDetails, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.getReservedBooks = function (email) {
        var user = { email: email };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/getReserved', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.getReadBooks = function (email) {
        var user = { email: email };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/getRead', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': this.authToken,
            'Content-Type': 'application/json'
        });
        return this.http.get('http://localhost:3000/users/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        var isExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        return !isExpired;
    };
    AuthService.prototype.memberLoggedIn = function () {
        var isMember = localStorage.getItem('user') != undefined && localStorage.getItem('user').split('"type":"')[1].split('"}')[0] == 'member';
        return (this.loggedIn() && isMember);
    };
    AuthService.prototype.adminLoggedIn = function () {
        var isMember = localStorage.getItem('user') != undefined && localStorage.getItem('user').split('"type":"')[1].split('"}')[0] == 'admin';
        return (this.loggedIn() && isMember);
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.updateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/users/updateUser', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/book-data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/book-data.service.ts ***!
  \***********************************************/
/*! exports provided: BookDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDataService", function() { return BookDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookDataService = /** @class */ (function () {
    function BookDataService(http) {
        this.http = http;
    }
    BookDataService.prototype.getBooks = function (bookName) {
        return this.http.get('http://localhost:3000/books/' + bookName);
    };
    BookDataService.prototype.getBookById = function (id) {
        return this.http.get('http://localhost:3000/books/book-details/' + id);
    };
    BookDataService.prototype.getNewBooks = function (limit) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/books/getNewBooks', limit, { headers: headers })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    BookDataService.prototype.requestBook = function (book) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/books/requestBook', book, { headers: headers })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    BookDataService.prototype.checkBookAvailability = function (book) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/books/checkAvailability', book, { headers: headers })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    BookDataService.prototype.addBook = function (book) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/books/addBook', book, { headers: headers })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    BookDataService.prototype.getAllBooks = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/books/getAllBooks', { headers: headers })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    BookDataService.prototype.updateBook = function (book) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/books/updateBook', book, { headers: headers })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    BookDataService.prototype.deleteBook = function (book) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/books/deleteBook', book, { headers: headers })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    BookDataService.prototype.getBooksFilter = function (filter, today) {
        var dates = {
            filter: filter,
            today: today
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/books/getBooksFilter', dates, { headers: headers })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    BookDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookDataService);
    return BookDataService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Dell\WebstormProjects\UCSCLibrary\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map