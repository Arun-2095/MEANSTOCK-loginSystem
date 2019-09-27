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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _service_authguard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/authguard.service */ "./src/app/service/authguard.service.ts");










var routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'admin',
        component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"]
    },
    {
        path: 'dashboard',
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
        canActivate: [_service_authguard_service__WEBPACK_IMPORTED_MODULE_9__["AuthguardService"]]
    },
    {
        path: 'login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    },
    {
        path: 'registration',
        component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"]
    },
    {
        path: 'profile/?username',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Mean Stack Admin </title>\n  <base href=\"/\">\n</head>\n<body>\n  <div class=\"container-fluid m-0 p-0\">\n<header>\n    <nav class=\"navbar navbar-dark bg-dark text-white\">\n        <span class=\"navbar-brand mb-0 h1\"> <a routerLink=\"/home\" >MEAN</a></span>\n      \n  <div>\n      <ul class=\"nav justify-content-end\">\n    \n          <li class=\"nav-item\">\n            <a class=\"nav-link\" *ngIf=\"auth.loggedIn()\" routerLink=\"/login\"   routerLinkActive=\"active\">Login</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" *ngIf=\"auth.loggedIn()\"  routerLink=\"/registration\"   routerLinkActive=\"active\">Registration</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" *ngIf=\"!auth.loggedIn()\"    style=\"cursor: pointer; color:lightblue;\" (click)=\"logoutClick()\"> Logout </a>\n          </li>\n         \n        </ul>\n  </div>\n</nav>\n</header>\n  </div>\n  \n  <router-outlet></router-outlet>\n\n  \n</body>\n</html>\n\n\n\n"

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
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AppComponent = /** @class */ (function () {
    function AppComponent(auth, flashMessage, router) {
        this.auth = auth;
        this.flashMessage = flashMessage;
        this.router = router;
        this.title = 'Angular';
    }
    AppComponent.prototype.logoutClick = function () {
        this.flashMessage.showFlashMessage({
            messages: ['you are Logged Out'],
            type: 'danger'
        });
        this.auth.logOut();
        this.router.navigate(['/login']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _service_validation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/validation.service */ "./src/app/service/validation.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _service_authguard_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/authguard.service */ "./src/app/service/authguard.service.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_16__["RegistrationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ng_flash_messages__WEBPACK_IMPORTED_MODULE_9__["NgFlashMessagesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            providers: [_service_validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _service_authguard_service__WEBPACK_IMPORTED_MODULE_12__["AuthguardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import \"https://use.fontawesome.com/releases/v5.5.0/css/all.css\";\r\n.body{\r\n  width:100%;\r\n  background: url(/assets/bg.jpg);\r\n  background-size:100% auto;\r\n  background-repeat:  no-repeat !important;\r\n  height:100vh;\r\n}\r\n.login-box{\r\n  width: 280px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%,-50%);\r\n  color: white;\r\n  \r\n}\r\n.login-box h1{\r\n  float: left;\r\n  font-size: 40px;\r\n  border-bottom: 6px solid #4caf50;\r\n  margin-bottom: 50px;\r\n  padding: 13px 0;\r\n}\r\n.textbox{\r\n  width: 100%;\r\n  overflow: hidden;\r\n  font-size: 20px;\r\n  padding: 8px 0;\r\n  margin: 8px 0;\r\n  border-bottom: 1px solid #4caf50;\r\n}\r\n.textbox i{\r\n  width: 26px;\r\n  float: left;\r\n  text-align: center;\r\n}\r\n.textbox input{\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  color: white;\r\n  font-size: 18px;\r\n  width: 80%;\r\n  float: left;\r\n  margin: 0 10px;\r\n}\r\n.btn{\r\n  width: 100%;\r\n  background: none;\r\n  border: 2px solid #4caf50;\r\n  color: white;\r\n  padding: 5px;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  margin: 12px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlFQUFpRTtBQUNqRTtFQUNFLFVBQVU7RUFDViwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsWUFBWTs7QUFFZDtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS41LjAvY3NzL2FsbC5jc3NcIjtcclxuLmJvZHl7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9iZy5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZToxMDAlIGF1dG87XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6ICBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6MTAwdmg7XHJcbn1cclxuLmxvZ2luLWJveHtcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBcclxufVxyXG4ubG9naW4tYm94IGgxe1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgIzRjYWY1MDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDEzcHggMDtcclxufVxyXG4udGV4dGJveHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiA4cHggMDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGNhZjUwO1xyXG59XHJcbi50ZXh0Ym94IGl7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50ZXh0Ym94IGlucHV0e1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB3aWR0aDogODAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbi5idG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNGNhZjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDEycHggMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\"> \n    <form  class=\"login-box\" (submit)='getData()' >\n        <ng-flash-message></ng-flash-message>\n      <h1>Welcome Admin</h1>\n      <div class=\"textbox\">\n        <i class=\"fas fa-user\"></i>\n        <input type=\"text\" placeholder=\"Username\" [(ngModel)]=\"admin\"  name=\"admin\">\n      </div>\n    <div class=\"textbox\">\n        <i class=\"fas fa-lock\"></i>\n        <input type=\"password\" placeholder=\"Password\"   [(ngModel)]=\"password\"  name=\"password\" >\n      </div>\n    <input type=\"submit\" class=\"btn\" value=\"Sign in\">\n    </form>\n    </div>"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/validation.service */ "./src/app/service/validation.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");





var AdminComponent = /** @class */ (function () {
    function AdminComponent(validater, flashmgs, auth) {
        this.validater = validater;
        this.flashmgs = flashmgs;
        this.auth = auth;
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.getData = function () {
        var detail = {
            admin: this.admin,
            password: this.password
        };
        if (!this.validater.validateFileds(detail)) {
            this.flashmgs.showFlashMessage({
                messages: ['Fill All Credentials'],
                dismissible: true,
                type: 'danger'
            });
            return false;
        }
        // authenticate admin
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_3__["NgFlashMessageService"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <h1> dashboard works!</h1>\n\n    <table class=\"table table-dark\" *ngIf=\"showdata\">\n     \n      <thead>\n          <tr>\n            <th scope=\"col\">1</th>\n            <th scope=\"col\">Name</th>\n            <th scope=\"col\"> {{user.username}}</th>\n           \n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th scope=\"row\">2</th>\n            <td>Phone Number</td>\n            <td>{{user.phone}}</td>\n            \n          </tr>\n          <tr>\n              <th scope=\"row\">2</th>\n              <td>Email</td>\n              <td>{{user.email}}</td>\n              \n            </tr>\n          \n        </tbody>\n      </table>\n    \n    \n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, auth) {
        this.router = router;
        this.auth = auth;
        this.showdata = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.authenticateRoute().subscribe(function (data) {
            _this.showdata = true;
            _this.user = data;
        }, function (err) {
            console.log(err);
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import \"https://use.fontawesome.com/releases/v5.5.0/css/all.css\";\r\n.body{\r\n  width:100%;\r\n  background: url(/assets/bg.jpg);\r\n  background-size:100% auto;\r\n  background-repeat:  no-repeat !important;\r\n  height:100vh;\r\n}\r\n.login-box{\r\n  width: 280px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%,-50%);\r\n  color: white;\r\n  \r\n}\r\n.login-box h1{\r\n  float: left;\r\n  font-size: 40px;\r\n  border-bottom: 6px solid #4caf50;\r\n  margin-bottom: 50px;\r\n  padding: 13px 0;\r\n}\r\n.textbox{\r\n  width: 100%;\r\n  overflow: hidden;\r\n  font-size: 20px;\r\n  padding: 8px 0;\r\n  margin: 8px 0;\r\n  border-bottom: 1px solid #4caf50;\r\n}\r\n.textbox i{\r\n  width: 26px;\r\n  float: left;\r\n  text-align: center;\r\n}\r\n.textbox input{\r\n  border: none;\r\n  outline: none;\r\n  background: none;\r\n  color: white;\r\n  font-size: 18px;\r\n  width: 80%;\r\n  float: left;\r\n  margin: 0 10px;\r\n}\r\n.btn{\r\n  width: 100%;\r\n  background: none;\r\n  border: 2px solid #4caf50;\r\n  color: white;\r\n  padding: 5px;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n  margin: 12px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlFQUFpRTtBQUNqRTtFQUNFLFVBQVU7RUFDViwrQkFBK0I7RUFDL0IseUJBQXlCO0VBQ3pCLHdDQUF3QztFQUN4QyxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsWUFBWTs7QUFFZDtBQUNBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQ0FBZ0M7RUFDaEMsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS41LjAvY3NzL2FsbC5jc3NcIjtcclxuLmJvZHl7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9iZy5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZToxMDAlIGF1dG87XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6ICBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6MTAwdmg7XHJcbn1cclxuLmxvZ2luLWJveHtcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBcclxufVxyXG4ubG9naW4tYm94IGgxe1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBib3JkZXItYm90dG9tOiA2cHggc29saWQgIzRjYWY1MDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDEzcHggMDtcclxufVxyXG4udGV4dGJveHtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiA4cHggMDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNGNhZjUwO1xyXG59XHJcbi50ZXh0Ym94IGl7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50ZXh0Ym94IGlucHV0e1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB3aWR0aDogODAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcbi5idG57XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNGNhZjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IDEycHggMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body\"> \n  <form [formGroup]='login' class=\"login-box\" (submit)='getUser()' >\n      <ng-flash-message></ng-flash-message>\n    <h1>Login  </h1>\n    <div class=\"textbox\">\n      <i class=\"fas fa-user\"></i>\n      <input type=\"email\" placeholder=\"Username\" formControlName=\"email\"  name=\"admin\" required>\n    </div>\n  <div class=\"textbox\">\n      <i class=\"fas fa-lock\"></i>\n      <input type=\"password\" placeholder=\"Password\"   formControlName=\"password\"  name=\"password\" required>\n    </div>\n  <input type=\"submit\" class=\"btn\"  [disabled]=\"!login.valid\" value=\"Sign in\">\n  </form>\n  </div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, flashMessage, router) {
        this.auth = auth;
        this.flashMessage = flashMessage;
        this.router = router;
        this.login = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3))
        });
    }
    LoginComponent.prototype.getUser = function () {
        var _this = this;
        var user = {
            email: this.login.value.email,
            password: this.login.value.password
        };
        this.auth.authenticateUser(user).subscribe(function (data) {
            _this.flashMessage.showFlashMessage({
                messages: [data.mgs],
                dismissible: true,
                timeout: 2000,
                type: 'danger'
            });
            if (data.mgs === 'success') {
                _this.auth.storeUserData(data.token, data.user);
                _this.router.navigate(['/dashboard']);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  profile works!\n</p>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/registration/registration.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n@import url(https://fonts.googleapis.com/css?family=Noto+Sans);\n/* importação da fonte do google fonts */\n.contain{\r\n\theight: 100%; \r\n\tfont-family: 'Noto Sans', sans-serif;\r\n  background-color: #ec576b; \r\n  padding-top:30px;\r\n}\n.contact_form{\t\r\n\twidth: 500px; \r\n    height: auto;\r\n    margin: 0px auto; \r\n\tborder-radius: 10px; \r\n\ttext-align: left; \r\n\tpadding-top: 30px;\r\n\tpadding-bottom: 20px;  \r\n  background-color: #fbfbfb; \r\n  padding-left: 30px; \r\n}\ninput{\r\n\tbackground-color: #fbfbfb; \r\n\twidth: 408px; \r\n\theight: 40px; \r\n\tborder-radius: 5px;  \r\n\tborder-style: solid; \r\n\tborder-width: 1px; \r\n\tborder-color: #ec576b; \r\n\tmargin-top: 10px;  \r\n\tpadding-left: 10px;\r\n  margin-bottom: 20px; \r\n}\ntextarea{\r\n  background-color: #fbfbfb; \r\n\twidth: 405px; \r\n\theight: 150px; \r\n\tborder-radius: 5px;  \r\n\tborder-style: solid; \r\n\tborder-width: 1px; \r\n\tborder-color: #ec576b; \r\n\tmargin-top: 10px;  \r\n\tpadding-left: 10px;\r\n  margin-bottom: 20px; \r\n  padding-top: 15px; \r\n}\nlabel{\r\n  display: block; \r\n\tfloat: center; \t\r\n}\nbutton{\r\n\theight: 45px; \r\n\tpadding-left: 5px;\r\n\tpadding-right: 5px; \t\r\n\tmargin-bottom: 20px; \r\n\tmargin-top: 10px; \t\r\n\ttext-transform: uppercase;\r\n\tbackground-color: #ec576b; \r\n\tborder-color: #ec576b; \r\n\tborder-style: solid; \r\n\tborder-radius: 10px;\t\r\n\twidth: 420px;   \r\n  cursor: pointer;\r\n}\nbutton p{\r\n\tcolor: #fff; \r\n}\nspan{\r\n\tcolor: #ec576b; \r\n}\n.aviso{\r\n\tfont-size: 13px;  \r\n\tcolor: #0e0e0e;  \r\n}\nh1{\r\n\tfont-size: 35px;  \r\n\ttext-align: center; \r\n\tpadding-bottom: 20px; \r\n\tcolor: #ec576b;\r\n}\nh3{\r\n\tfont-size: 14px; \r\n\tpadding-bottom: 30px;\r\n\tcolor: #0e0e0e;   \r\n}\np{\r\n\tfont-size: 14px; \r\n    color: #0e0e0e; \r\n    margin:0px;\r\n}\n::-webkit-input-placeholder {\r\n color: #a8a8a8;\r\n}\n::-webkit-textarea-placeholder {\r\n color: #a8a8a8;\r\n}\n.form input:focus{\r\n\toutline:0;\r\n\tborder: 1px solid #97d848;\r\n}\n/* created by magda pimentel, may 2017 */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDhEQUE4RDtBQUQ5RCx3Q0FBd0M7QUFJeEM7Q0FDQyxZQUFZO0NBQ1osb0NBQW9DO0VBQ25DLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7QUFFQTtDQUNDLFlBQVk7SUFDVCxZQUFZO0lBQ1osZ0JBQWdCO0NBQ25CLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLG9CQUFvQjtFQUNuQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBR0E7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtFQUNqQixtQkFBbUI7QUFDckI7QUFHQTtFQUNFLHlCQUF5QjtDQUMxQixZQUFZO0NBQ1osYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0VBQ2pCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFHQTtFQUNFLGNBQWM7Q0FDZixhQUFhO0FBQ2Q7QUFHQTtDQUNDLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixnQkFBZ0I7Q0FDaEIseUJBQXlCO0NBQ3pCLHlCQUF5QjtDQUN6QixxQkFBcUI7Q0FDckIsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQixZQUFZO0VBQ1gsZUFBZTtBQUNqQjtBQUdBO0NBQ0MsV0FBVztBQUNaO0FBR0E7Q0FDQyxjQUFjO0FBQ2Y7QUFHQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0FBQ2Y7QUFHQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLGNBQWM7QUFDZjtBQUdBO0NBQ0MsZUFBZTtDQUNmLG9CQUFvQjtDQUNwQixjQUFjO0FBQ2Y7QUFHQTtDQUNDLGVBQWU7SUFDWixjQUFjO0lBQ2QsVUFBVTtBQUNkO0FBR0E7Q0FDQyxjQUFjO0FBQ2Y7QUFHQTtDQUNDLGNBQWM7QUFDZjtBQUdBO0NBQ0MsU0FBUztDQUNULHlCQUF5QjtBQUMxQjtBQUtBLHdDQUF3QyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW1wb3J0YcOnw6NvIGRhIGZvbnRlIGRvIGdvb2dsZSBmb250cyAqLyBcclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU5vdG8rU2Fucyk7XHJcblxyXG5cclxuLmNvbnRhaW57XHJcblx0aGVpZ2h0OiAxMDAlOyBcclxuXHRmb250LWZhbWlseTogJ05vdG8gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjNTc2YjsgXHJcbiAgcGFkZGluZy10b3A6MzBweDtcclxufVxyXG5cclxuLmNvbnRhY3RfZm9ybXtcdFxyXG5cdHdpZHRoOiA1MDBweDsgXHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDBweCBhdXRvOyBcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4OyBcclxuXHR0ZXh0LWFsaWduOiBsZWZ0OyBcclxuXHRwYWRkaW5nLXRvcDogMzBweDtcclxuXHRwYWRkaW5nLWJvdHRvbTogMjBweDsgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7IFxyXG4gIHBhZGRpbmctbGVmdDogMzBweDsgXHJcbn1cclxuXHJcblxyXG5pbnB1dHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiOyBcclxuXHR3aWR0aDogNDA4cHg7IFxyXG5cdGhlaWdodDogNDBweDsgXHJcblx0Ym9yZGVyLXJhZGl1czogNXB4OyAgXHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDsgXHJcblx0Ym9yZGVyLXdpZHRoOiAxcHg7IFxyXG5cdGJvcmRlci1jb2xvcjogI2VjNTc2YjsgXHJcblx0bWFyZ2luLXRvcDogMTBweDsgIFxyXG5cdHBhZGRpbmctbGVmdDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyBcclxufVxyXG5cclxuXHJcbnRleHRhcmVhe1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7IFxyXG5cdHdpZHRoOiA0MDVweDsgXHJcblx0aGVpZ2h0OiAxNTBweDsgXHJcblx0Ym9yZGVyLXJhZGl1czogNXB4OyAgXHJcblx0Ym9yZGVyLXN0eWxlOiBzb2xpZDsgXHJcblx0Ym9yZGVyLXdpZHRoOiAxcHg7IFxyXG5cdGJvcmRlci1jb2xvcjogI2VjNTc2YjsgXHJcblx0bWFyZ2luLXRvcDogMTBweDsgIFxyXG5cdHBhZGRpbmctbGVmdDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyBcclxuICBwYWRkaW5nLXRvcDogMTVweDsgXHJcbn1cclxuXHJcblxyXG5sYWJlbHtcclxuICBkaXNwbGF5OiBibG9jazsgXHJcblx0ZmxvYXQ6IGNlbnRlcjsgXHRcclxufVxyXG5cclxuXHJcbmJ1dHRvbntcclxuXHRoZWlnaHQ6IDQ1cHg7IFxyXG5cdHBhZGRpbmctbGVmdDogNXB4O1xyXG5cdHBhZGRpbmctcmlnaHQ6IDVweDsgXHRcclxuXHRtYXJnaW4tYm90dG9tOiAyMHB4OyBcclxuXHRtYXJnaW4tdG9wOiAxMHB4OyBcdFxyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2VjNTc2YjsgXHJcblx0Ym9yZGVyLWNvbG9yOiAjZWM1NzZiOyBcclxuXHRib3JkZXItc3R5bGU6IHNvbGlkOyBcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1x0XHJcblx0d2lkdGg6IDQyMHB4OyAgIFxyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbmJ1dHRvbiBwe1xyXG5cdGNvbG9yOiAjZmZmOyBcclxufVxyXG5cclxuXHJcbnNwYW57XHJcblx0Y29sb3I6ICNlYzU3NmI7IFxyXG59XHJcblxyXG5cclxuLmF2aXNve1xyXG5cdGZvbnQtc2l6ZTogMTNweDsgIFxyXG5cdGNvbG9yOiAjMGUwZTBlOyAgXHJcbn1cclxuXHJcblxyXG5oMXtcclxuXHRmb250LXNpemU6IDM1cHg7ICBcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG5cdHBhZGRpbmctYm90dG9tOiAyMHB4OyBcclxuXHRjb2xvcjogI2VjNTc2YjtcclxufVxyXG5cclxuXHJcbmgze1xyXG5cdGZvbnQtc2l6ZTogMTRweDsgXHJcblx0cGFkZGluZy1ib3R0b206IDMwcHg7XHJcblx0Y29sb3I6ICMwZTBlMGU7ICAgXHJcbn1cclxuXHJcblxyXG5we1xyXG5cdGZvbnQtc2l6ZTogMTRweDsgXHJcbiAgICBjb2xvcjogIzBlMGUwZTsgXHJcbiAgICBtYXJnaW46MHB4O1xyXG59XHJcblxyXG5cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuIGNvbG9yOiAjYThhOGE4O1xyXG59XHJcblxyXG5cclxuOjotd2Via2l0LXRleHRhcmVhLXBsYWNlaG9sZGVyIHtcclxuIGNvbG9yOiAjYThhOGE4O1xyXG59XHJcblxyXG5cclxuLmZvcm0gaW5wdXQ6Zm9jdXN7XHJcblx0b3V0bGluZTowO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICM5N2Q4NDg7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qIGNyZWF0ZWQgYnkgbWFnZGEgcGltZW50ZWwsIG1heSAyMDE3ICovIl19 */"

/***/ }),

/***/ "./src/app/components/registration/registration.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n  <!-- formulário de contacto utilizando html e css -->  \n<div class=\"contain\"> \n\t<div class=\"contact_form\">\n\n\t\t<div class=\"form\">\t\n\t\t\t\n\t\t\t\t<ng-flash-message></ng-flash-message>\n      <h1>Registration</h1>\n\t\t\t\t\n\n\n\t\t\t\t\t<form [formGroup]='user' action=\"\" (submit)=\"getUserData()\">\t\t\t\t\n\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<label for=\"name\">Name\n\t\t\t\t\t\t\t\t\t\t<span >*</span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"username\" id=\"name\" required  placeholder=\"User Name\">\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<label for=\"email\">Email\n\t\t\t\t\t\t\t\t\t\t<span>*</span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"email\" formControlName=\"email\" id=\"email\" required placeholder=\"Email\">\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<label for=\"phone\" >Phone\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"tel\" formControlName=\"phone\" id=\"telefone\" placeholder=\"Phone\">\n\t\t\t\t\t\t\t\t</p>\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<label for=\"password\" > Password\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" formControlName=\"password\" id=\"website\" placeholder=\"Password\">\n\t\t\t\t\t\t\t\t</p>\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t<label for=\"confirm Password\" >Confirm Password\n\t\t\t\t\t\t\t\t\t\t<span>*</span>\n\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t<input type=\"password\" formControlName=\"confirmPassword\" id=\"Confirm Password\" required placeholder=\"Confirm Password\">\n\t\t\t\t\t\t\t\t</p>\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t<button type=\"submit\"  name=\"sumbit\" id=\"sumbit\" [disabled]=!user.valid><p>sumbit</p></button>\n\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t</form>\n\t\t</div>\t\n\t</div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/registration/registration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-flash-messages */ "./node_modules/ng-flash-messages/ng-flash-messages.umd.js");
/* harmony import */ var ng_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(auth, FlashMessage, router) {
        this.auth = auth;
        this.FlashMessage = FlashMessage;
        this.router = router;
        this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email),
        });
    }
    RegistrationComponent.prototype.getUserData = function () {
        var _this = this;
        var userDetail = this.user.value;
        this.auth.registeringUser(userDetail).subscribe(function (data) {
            _this.FlashMessage.showFlashMessage({
                messages: [data.mgs],
                dismissible: true,
                timeout: 2000,
                type: 'danger'
            });
            if (data.success === true) {
                _this.router.navigate(['/login']);
            }
        });
    };
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/components/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/components/registration/registration.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            ng_flash_messages__WEBPACK_IMPORTED_MODULE_4__["NgFlashMessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.Header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-Type': 'application/json' });
    }
    // checking the expiring time of jwt token
    AuthService.prototype.loggedIn = function () {
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        this.loadToken();
        return helper.isTokenExpired(this.authToken);
    };
    // Registering the User
    AuthService.prototype.registeringUser = function (user) {
        return this.http.post('http://localhost:5000/user/registration', user, { headers: this.Header });
    };
    // Authenticating User
    AuthService.prototype.authenticateUser = function (user) {
        return this.http.post('http://localhost:5000/user/loginauthentication', user, { headers: this.Header });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.logOut = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    // load token
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // protecting the api using Jwt
    AuthService.prototype.authenticateRoute = function () {
        this.loadToken();
        var autherisedHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', this.authToken).set('content-Type', 'application/json');
        return this.http.get('http://localhost:5000/user/profile', { headers: autherisedHeader });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/authguard.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/authguard.service.ts ***!
  \**********************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/auth.service */ "./src/app/service/auth.service.ts");




var AuthguardService = /** @class */ (function () {
    function AuthguardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthguardService.prototype.canActivate = function () {
        if (this.auth.loggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthguardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthguardService);
    return AuthguardService;
}());



/***/ }),

/***/ "./src/app/service/validation.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/validation.service.ts ***!
  \***********************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.prototype.validateFileds = function (user) {
        if (user.admin === undefined || user.password === undefined || user.password === '') {
            return false;
        }
        else {
            return true;
        }
    };
    ValidationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidationService);
    return ValidationService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\project\MeanStack\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map