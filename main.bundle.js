webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow: hidden; position: relative; height: 100%\">\r\n  <app-navigation *ngIf=\"authenticationService.isAuthenticated\"></app-navigation>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authenticationService) {
        this.authenticationService = authenticationService;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_authentication_authentication_service__["a" /* AuthenticationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ServerStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationEvents; });
/* unused harmony export ObserveType */
/* unused harmony export ResponseType */
/* unused harmony export REQUEST_OPTIONS */
var ServerStatus;
(function (ServerStatus) {
    ServerStatus[ServerStatus["UNAUTHORIZED"] = 500] = "UNAUTHORIZED";
})(ServerStatus || (ServerStatus = {}));
var AuthenticationEvents;
(function (AuthenticationEvents) {
    AuthenticationEvents["LOGIN"] = "login";
    AuthenticationEvents["LOGOUT"] = "logout";
})(AuthenticationEvents || (AuthenticationEvents = {}));
var ObserveType;
(function (ObserveType) {
    ObserveType["RESPONSE"] = "response";
    ObserveType["BODY"] = "body";
    ObserveType["EVENTS"] = "events";
})(ObserveType || (ObserveType = {}));
var ResponseType;
(function (ResponseType) {
    ResponseType["TEXT"] = "text";
    ResponseType["ARRAY_BUFFER"] = "arraybuffer";
    ResponseType["BLOB"] = "blob";
    ResponseType["JSON"] = "json";
})(ResponseType || (ResponseType = {}));
var REQUEST_OPTIONS = {
    OBSERVE: {
        RESPONSE: { observe: ObserveType.RESPONSE },
        BODY: { observe: ObserveType.BODY },
        EVENTS: { observe: ObserveType.EVENTS }
    },
    RESPONSE_TYPE: {
        TEXT: { responseType: ResponseType.TEXT },
        ARRAY_BUFFER: { responseType: ResponseType.ARRAY_BUFFER },
        BLOB: { responseType: ResponseType.BLOB },
        JSON: { responseType: ResponseType.JSON }
    }
};


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_map_module__ = __webpack_require__("../../../../../src/app/map/map.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* ROUTES */], { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__map_map_module__["a" /* MapModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__user_user_module__["a" /* UserModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_authentication_authentication_guard__ = __webpack_require__("../../../../../src/app/shared/authentication/authentication.guard.ts");



var ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/map'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */]
    },
    /* {
       path: 'main',
       component: MainComponent,
       canActivate: [AuthenticationGuard]
     },*/
    {
        path: 'map',
        component: __WEBPACK_IMPORTED_MODULE_1__map_map_component__["a" /* MapComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__shared_authentication_authentication_guard__["a" /* AuthenticationGuard */]]
    }
];


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-page {\r\n  height: 100vh;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.login-back {\r\n  z-index: -1;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/noutbuk-klaviatura-mysh-stol.jpg") + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.login-panel {\r\n  padding: 10px;\r\n  border-radius: 3px;\r\n}\r\n\r\n.login-row {\r\n  margin-bottom: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.login-row input {\r\n  background: none;\r\n  border-left: none;\r\n  border-top: none;\r\n  border-right: none;\r\n  border-bottom: 1px solid #e2e2e2;\r\n  outline: none;\r\n  padding: 5px;\r\n  width: 300px;\r\n  transition: all 0.5s;\r\n  font-size: 14px;\r\n  color: #f6f6f6;\r\n}\r\n\r\n.login-row input:focus {\r\n  border-bottom: 1px solid #e21113;\r\n  width: 320px;\r\n  margin: 5px;\r\n  font-size: 15px;\r\n}\r\n\r\n.login-row input::-webkit-input-placeholder {\r\n  color: #cccccc;\r\n}\r\n\r\n.login-row input:focus::-webkit-input-placeholder {\r\n  color: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.login-row button {\r\n  background: none;\r\n  border: none;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page\">\r\n  <div class=\"login-back\"></div>\r\n  <div class=\"login-panel\">\r\n    <div class=\"login-row\"></div>\r\n    <div class=\"login-row\">\r\n      <input placeholder=\"Login\" [(ngModel)]=\"login\" name=\"login\">\r\n    </div>\r\n    <div class=\"login-row\">\r\n      <input placeholder=\"Password\" [(ngModel)]=\"password\" name=\"password\">\r\n    </div>\r\n    <div class=\"login-row\" style=\"text-align: center\">\r\n      <button type=\"submit\" (click)=\"onLogIn()\">\r\n        Sign in\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_api_api_service__ = __webpack_require__("../../../../../src/app/shared/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authenticationService, apiService) {
        this.authenticationService = authenticationService;
        this.apiService = apiService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.authenticationService.logout();
    };
    LoginComponent.prototype.onLogIn = function () {
        this.authenticationService.login(this.login, this.password);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_authentication_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_api_api_service__["a" /* ApiService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map/google-map/google-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map {\r\n  height: calc(100vh - 50px);\r\n  width: 100%;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/google-map/google-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\r\n"

/***/ }),

/***/ "../../../../../src/app/map/google-map/google-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__zone__ = __webpack_require__("../../../../../src/app/map/google-map/zone.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_service__ = __webpack_require__("../../../../../src/app/map/map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GoogleMapComponent = (function () {
    function GoogleMapComponent(mapService) {
        this.mapService = mapService;
        this.onMapClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.mapZones = [];
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: this.startLat || 0, lng: this.startLng || 0 },
            zoom: this.zoom || 5
        });
        this.map.addListener('click', function (event) {
            _this.editPoint(event.latLng);
            if (_this.currentMapZone && _this.mapService.isEditZone) {
                _this.currentMapZone.addPoint(event.latLng);
            }
        });
        this.mapService.zonesObservable.subscribe(function (zones) {
            _this.initZones(zones);
        });
        this.mapService.zoneSelectObservable.subscribe(function (zone) {
            _this.selectZone(zone);
        });
        this.mapService.newZoneSubject.subscribe(function () {
            _this.createNewZone();
        });
        this.mapService.clearZoneSubject.subscribe(function () {
            _this.createNewZone();
        });
    };
    GoogleMapComponent.prototype.ngOnChanges = function (changes) {
    };
    // --------------------------------------------Zone-------------------------------------------------------------------
    GoogleMapComponent.prototype.initZones = function (zones) {
        var _this = this;
        this.removeAllZones();
        zones.forEach(function (zone) {
            _this.mapZones.push({
                mapZone: new __WEBPACK_IMPORTED_MODULE_1__zone__["a" /* MapZone */](_this.mapService, _this.map, zone),
                zone: zone
            });
        });
    };
    GoogleMapComponent.prototype.selectZone = function (zone) {
        var foundZone = this.mapZones.find(function (mapZones) { return mapZones.zone.id === zone.id; });
        if (this.currentMapZone) {
            this.currentMapZone.setEditable(false);
            this.currentMapZone.clearListeners();
            this.currentMapZone.setPoints(this.prevPoints);
        }
        if (!foundZone) {
            this.createNewZone();
        }
        else {
            this.currentMapZone = foundZone.mapZone;
            this.currentMapZone.setEditable(true);
            this.prevPoints = this.currentMapZone.getPoints().getArray().map(function (element) { return ({
                lat: element.lat(),
                lng: element.lng()
            }); });
        }
        this.currentMapZone.setListener(function (a) {
        });
    };
    GoogleMapComponent.prototype.createNewZone = function () {
        if (this.currentMapZone) {
            this.currentMapZone.setEditable(false);
            this.currentMapZone.clearListeners();
            this.currentMapZone.setPoints(this.prevPoints);
        }
        this.currentMapZone = new __WEBPACK_IMPORTED_MODULE_1__zone__["a" /* MapZone */](this.mapService, this.map);
        this.currentMapZone.setEditable(true);
        this.prevPoints = [];
    };
    GoogleMapComponent.prototype.removeAllZones = function () {
        if (this.currentMapZone) {
            this.currentMapZone.clearPointsList();
        }
        this.mapZones.forEach(function (mapZone) {
            mapZone.mapZone.clearPointsList();
        });
        this.mapZones = [];
    };
    // --------------------------------------------Point------------------------------------------------------------------
    GoogleMapComponent.prototype.addPoint = function (latLng) {
        return new google.maps.Marker({
            position: latLng,
            map: this.map
        });
    };
    GoogleMapComponent.prototype.editPoint = function (latLng) {
        if (this.mapService.isEditPoint) {
            if (this.point) {
                this.point.setPosition(latLng);
            }
            else {
                this.point = this.addPoint(latLng);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], GoogleMapComponent.prototype, "startLat", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], GoogleMapComponent.prototype, "startLng", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], GoogleMapComponent.prototype, "zoom", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], GoogleMapComponent.prototype, "onMapClick", void 0);
    GoogleMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-google-map',
            template: __webpack_require__("../../../../../src/app/map/google-map/google-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/map/google-map/google-map.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__map_service__["a" /* MapService */]])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map/google-map/zone.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapZone; });
var MapZone = (function () {
    function MapZone(mapService, map, zone) {
        this.mapService = mapService;
        this.map = map;
        this.zone = zone;
        this.points = [];
        this.initZone();
        this.polygon.setMap(this.map);
        if (this.zone) {
            this.points = this.zone.points
                .sort(function (a, b) { return a.numberInSequence - b.numberInSequence; })
                .map(function (point) {
                return { lat: point.latitude, lng: point.longitude };
            });
            this.setPoints(this.points);
            this.setOptions({
                strokeColor: this.zone.strokeColor,
                fillColor: this.zone.fillColor
            });
        }
    }
    MapZone.prototype.initZone = function () {
        this.polygon = new google.maps.Polygon({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            editable: false
        });
    };
    MapZone.prototype.addPoint = function (point) {
        this.points.push(point);
        this.setPoints(this.points);
    };
    MapZone.prototype.setPoints = function (points) {
        this.polygon.setPath(points);
        this.updatePoints();
    };
    MapZone.prototype.setOptions = function (options) {
        this.polygon.setOptions(options);
    };
    MapZone.prototype.updatePoints = function () {
        var _this = this;
        this.createZonePoints();
        google.maps.event.addListener(this.polygon.getPath(), 'insert_at', function (index, obj) {
            _this.createZonePoints();
        });
        google.maps.event.addListener(this.polygon.getPath(), 'set_at', function (index, obj) {
            _this.createZonePoints();
        });
    };
    MapZone.prototype.removePoint = function () {
    };
    MapZone.prototype.getPoints = function () {
        return this.polygon.getPath();
    };
    MapZone.prototype.setEditable = function (isEditable) {
        this.polygon.setEditable(isEditable);
    };
    MapZone.prototype.createZonePoints = function () {
        var _this = this;
        this.mapService.zonePointsSubject.next(this.getPoints().getArray().map(function (point, index) {
            var resultPoint = {
                latitude: point.lat(),
                longitude: point.lng(),
                numberInSequence: index
            };
            if (_this.zone && _this.zone.points[index]) {
                resultPoint.id = _this.zone.points[index].id;
            }
            return resultPoint;
        }));
    };
    MapZone.prototype.setListener = function (callback) {
        this.polygon.addListener('click', callback);
    };
    MapZone.prototype.clearListeners = function () {
        google.maps.event.clearInstanceListeners(this.polygon);
    };
    MapZone.prototype.clearPointsList = function () {
        this.polygon.setMap(null);
    };
    return MapZone;
}());



/***/ }),

/***/ "../../../../../src/app/map/map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-google-map {\r\n  width: 100%;\r\n}\r\n\r\napp-right-panel {\r\n  -ms-flex-preferred-size: 500px;\r\n      flex-basis: 500px;\r\n}\r\n\r\n#page {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page\">\n  <app-google-map></app-google-map>\n  <app-right-panel></app-right-panel>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-map',
            template: __webpack_require__("../../../../../src/app/map/map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/map/map.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map/map.interfaces.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldType; });
var FieldType;
(function (FieldType) {
    FieldType[FieldType["input"] = 0] = "input";
    FieldType[FieldType["select"] = 1] = "select";
})(FieldType || (FieldType = {}));


/***/ }),

/***/ "../../../../../src/app/map/map.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_map_google_map_component__ = __webpack_require__("../../../../../src/app/map/google-map/google-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_component__ = __webpack_require__("../../../../../src/app/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__right_panel_right_panel_component__ = __webpack_require__("../../../../../src/app/map/right-panel/right-panel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__right_panel_right_panel_service__ = __webpack_require__("../../../../../src/app/map/right-panel/right-panel.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__right_panel_create_create_component__ = __webpack_require__("../../../../../src/app/map/right-panel/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_service__ = __webpack_require__("../../../../../src/app/map/map.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MapModule = (function () {
    function MapModule() {
    }
    MapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__google_map_google_map_component__["a" /* GoogleMapComponent */],
                __WEBPACK_IMPORTED_MODULE_4__map_component__["a" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_5__right_panel_right_panel_component__["a" /* RightPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_7__right_panel_create_create_component__["a" /* CreateComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__right_panel_right_panel_service__["a" /* RightPanelService */],
                __WEBPACK_IMPORTED_MODULE_8__map_service__["a" /* MapService */]
            ]
        })
    ], MapModule);
    return MapModule;
}());



/***/ }),

/***/ "../../../../../src/app/map/map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MapService = (function () {
    function MapService() {
        // ------------------------------------------Zone---------------------------------------------------------------------
        this.isEditZone = false;
        this.newZoneSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.clearZoneSubject = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.zonesSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.zonesObservable = this.zonesSubject
            .asObservable()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* filter */])(function (points) { return points !== null; }));
        this.zonePointsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.zonePointsObservable = this.zonePointsSubject
            .asObservable()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* filter */])(function (points) { return points !== null; }));
        this.zoneSelectSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.zoneSelectObservable = this.zoneSelectSubject
            .asObservable()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* filter */])(function (points) { return points !== null; }));
        this.editPointSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.editPointObservable = this.editPointSubject
            .asObservable()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* filter */])(function (points) { return points !== null; }));
        // --------------------------------------------Point------------------------------------------------------------------
        this.isEditPoint = false;
        this.pointsSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.pointsObservable = this.pointsSubject
            .asObservable()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* filter */])(function (points) { return points !== null; }));
    }
    MapService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "../../../../../src/app/map/right-panel/create/create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-panel {\r\n  padding: 10px;\r\n}\r\n\r\n.input-row {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.input-row .input {\r\n  border: 1px solid #cecece;\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n  padding-left: 5px;\r\n  padding-right: 5px;\r\n}\r\n\r\n.input-row button {\r\n  border-right: 1px solid #cecece;\r\n  border-bottom: 1px solid #cecece;\r\n  border-top: 1px solid #cecece;\r\n  border-left: none;\r\n  background-color: #f5f5f5;\r\n  border-bottom-right-radius: 3px;\r\n  border-top-right-radius: 3px;\r\n}\r\n\r\n.input-row label {\r\n  border-left: 1px solid #cecece;\r\n  border-bottom: 1px solid #cecece;\r\n  border-top: 1px solid #cecece;\r\n  border-right: none;\r\n  border-top-left-radius: 3px;\r\n  border-bottom-left-radius: 3px;\r\n  color: #2e2e2e;\r\n  background-color: #f5f5f5;\r\n  padding: 5px;\r\n  white-space: nowrap;\r\n}\r\n\r\n.add-panel {\r\n  border-left: 1px solid #cecece;\r\n  border-bottom: 1px solid #cecece;\r\n  border-top: none;\r\n  border-right: 1px solid #cecece;\r\n  padding: 10px;\r\n}\r\n\r\n.add-panel .input-row {\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.add-footer {\r\n  padding-top: 10px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n\r\n.add-footer button {\r\n  padding: 3px 6px;\r\n  border: 1px solid #cecece;\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n.add-footer button:first-child {\r\n  border-left: 1px solid #cecece;\r\n  border-bottom: 1px solid #cecece;\r\n  border-top: 1px solid #cecece;\r\n  border-right: none;\r\n  border-bottom-left-radius: 2px;\r\n  border-top-left-radius: 2px;\r\n}\r\n\r\n.add-footer button:last-child {\r\n  border-right: 1px solid #cecece;\r\n  border-bottom: 1px solid #cecece;\r\n  border-top: 1px solid #cecece;\r\n  border-left: none;\r\n  border-bottom-right-radius: 2px;\r\n  border-top-right-radius: 2px;\r\n}\r\n\r\n.add-footer .create {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/right-panel/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-panel\">\n  <div class=\"input-row\">\n    <label [for]=\"editEntity?.title\">{{editEntity?.title}}</label>\n    <select [id]=\"editEntity?.title\"\n            class=\"input\"\n            [formControl]=\"chooseFormControl\">\n      <option *ngFor=\"let element of editEntity.data\" [ngValue]=\"element\">\n        {{element.title}}\n      </option>\n    </select>\n    <button (click)=\"createNewInstance()\">New</button>\n  </div>\n  <div [formGroup]=\"formGroup\" class=\"add-panel\" *ngIf=\"isEdit\">\n    <div *ngFor=\"let field of editEntity?.fields\" class=\"input-row\">\n      <label [for]=\"field.id\">{{field.name}}</label>\n      <ng-container [ngSwitch]=\"field.type\">\n        <input *ngSwitchCase=\"fieldType.input\"\n               [formControlName]=\"field.id\"\n               [attr.id]=\"field.id\"\n               class=\"input\"\n               name=\"countryId\">\n        <select *ngSwitchCase=\"fieldType.select\"\n                [formControlName]=\"field.id\"\n                [attr.id]=\"field.id\"\n                class=\"input\"\n                name=\"countryId\">\n          <option *ngFor=\"let fieldElement of field.data\" [ngValue]=\"fieldElement\">\n            {{fieldElement.title}}\n          </option>\n        </select>\n      </ng-container>\n      <button (click)=\"clearField(field.id)\">\n        <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"add-footer\">\n      <button class=\"close\" (click)=\"onClose()\">Close</button>\n      <button class=\"clear\" (click)=\"clear()\">Clear</button>\n      <button class=\"create\" (click)=\"create()\">Create</button>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/map/right-panel/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_api_api_service__ = __webpack_require__("../../../../../src/app/shared/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__map_interfaces__ = __webpack_require__("../../../../../src/app/map/map.interfaces.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_entity__ = __webpack_require__("../../../../../src/app/map/right-panel/create/edit-entity.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_utils__ = __webpack_require__("../../../../../src/app/shared/utils.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateComponent = (function () {
    function CreateComponent(apiService, formBuilder) {
        this.apiService = apiService;
        this.formBuilder = formBuilder;
        this.chooseFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */];
        this.isEdit = false;
        this.fieldType = __WEBPACK_IMPORTED_MODULE_3__map_interfaces__["a" /* FieldType */];
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fetchData();
        var controlsConfig = {};
        this.editEntity.fields.forEach(function (field) {
            controlsConfig[field.id] = [];
        });
        this.formGroup = this.formBuilder.group(controlsConfig);
        this.formGroup.valueChanges
            .subscribe(function (change) {
            _this.editObject = change;
        });
        this.chooseFormControl.valueChanges
            .subscribe(function (value) {
            if (!value) {
                return;
            }
            _this.editEntity.onSelectItem(value);
            _this.toggleEditPanel(true);
            Object.keys(_this.formGroup.controls).forEach(function (key) {
                _this.formGroup.controls[key].setValue(value[key]);
            });
        });
    };
    CreateComponent.prototype.ngOnChanges = function (changes) {
    };
    CreateComponent.prototype.fetchData = function () {
        var _this = this;
        this.apiService.get(this.editEntity.initLink)
            .subscribe(function (response) {
            _this.editEntity.data = response;
            _this.editEntity.onDataLoaded(response);
        });
    };
    // ------------------------------------------Buttons------------------------------------------------------------------
    CreateComponent.prototype.create = function () {
        var _this = this;
        this.editEntity.beforeSave(this.editObject);
        this.apiService.post(this.editEntity.createLink, this.editObject).subscribe(function () {
            _this.fetchData();
        });
    };
    CreateComponent.prototype.clear = function () {
        this.formGroup.reset();
        this.editEntity.onClear();
    };
    CreateComponent.prototype.clearField = function (id) {
        this.formGroup.controls[id].reset();
    };
    CreateComponent.prototype.toggleEditPanel = function (isEdit) {
        this.isEdit = __WEBPACK_IMPORTED_MODULE_5__shared_utils__["a" /* Utils */].isPresent(isEdit) ? isEdit : !this.isEdit;
        this.editEntity.onToggleEdit(this.isEdit);
    };
    CreateComponent.prototype.onClose = function () {
        this.isEdit = false;
        this.clear();
        this.editEntity.onToggleEdit(this.isEdit);
        this.chooseFormControl.reset();
    };
    CreateComponent.prototype.createNewInstance = function () {
        this.isEdit = true;
        this.clear();
        this.editEntity.createNewInstance();
        this.chooseFormControl.reset();
        this.editEntity.onToggleEdit(this.isEdit);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__edit_entity__["a" /* EditEntity */])
    ], CreateComponent.prototype, "editEntity", void 0);
    CreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-create',
            template: __webpack_require__("../../../../../src/app/map/right-panel/create/create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/map/right-panel/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_api_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map/right-panel/create/edit-entity.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditEntity; });
var EditEntity = (function () {
    function EditEntity(title, initLink, createLink) {
        this.title = title;
        this.initLink = initLink;
        this.createLink = createLink;
        this.fields = [];
        this.data = [];
    }
    // ---------------------------------------Field-----------------------------------------------------------------------
    EditEntity.prototype.addField = function (type, name, id, data) {
        this.fields.push({
            id: id,
            name: name,
            type: type,
            data: data
        });
    };
    EditEntity.prototype.setFieldData = function (id, data) {
        this.fields.find(function (field) { return field.id === id; }).data = data;
    };
    // ---------------------------------------Hooks-----------------------------------------------------------------------
    EditEntity.prototype.beforeSave = function (data) {
    };
    EditEntity.prototype.onDataLoaded = function (data) {
    };
    EditEntity.prototype.onSelectItem = function (data) {
    };
    EditEntity.prototype.onToggleEdit = function (isEdit) {
    };
    EditEntity.prototype.createNewInstance = function () {
    };
    EditEntity.prototype.onClear = function () {
    };
    return EditEntity;
}());



/***/ }),

/***/ "../../../../../src/app/map/right-panel/right-panel.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/map/right-panel/right-panel.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"edit-panel\">\n  <app-create [editEntity]=\"countryEntity\"></app-create>\n  <app-create [editEntity]=\"cityEntity\"></app-create>\n  <app-create [editEntity]=\"zoneEntity\"></app-create>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/map/right-panel/right-panel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_interfaces__ = __webpack_require__("../../../../../src/app/map/map.interfaces.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_service__ = __webpack_require__("../../../../../src/app/map/map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_edit_entity__ = __webpack_require__("../../../../../src/app/map/right-panel/create/edit-entity.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RightPanelComponent = (function () {
    /*
      {
        title: 'Race',
        initLink: '/secure/race/list',
        createLink: '/secure/race/update',
        dataUpdated: this.racesUpdated.bind(this),
        fields: [
          {
            type: FieldType.input,
            name: 'Id',
            id: 'id'
          },
          {
            type: FieldType.input,
            name: 'Duration',
            id: 'duration'
          },
          {
            type: FieldType.input,
            name: 'Start time',
            id: 'startTime'
          }
        ]
      },
      {
        title: 'Point',
        initLink: '/secure/moneypoint/list',
        createLink: '',
        onEditToggle: this.setPointEditStatus.bind(this),
        fields: [
          {
            type: FieldType.input,
            name: 'Id',
            id: 'id'
          },
          {
            type: FieldType.input,
            name: 'Is activated',
            id: 'isActivated'
          },
          {
            type: FieldType.input,
            name: 'Latitude',
            id: 'latitude'
          },
          {
            type: FieldType.input,
            name: 'Longitude',
            id: 'longitude'
          },
          {
            type: FieldType.input,
            name: 'Value',
            id: 'value'
          },
          {
            type: FieldType.input,
            name: 'Game User',
            id: 'gameUser'
          },
          {
            type: FieldType.select,
            name: 'Race',
            id: 'race',
            data: this.races
          },
          {
            type: FieldType.select,
            name: 'Zone',
            id: 'zone',
            data: this.zones
          }
        ]
      }
    ];*/
    function RightPanelComponent(mapService) {
        this.mapService = mapService;
    }
    RightPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapService.zonePointsObservable.subscribe(function (points) {
            _this.zonePoints = points;
        });
        this.initCountryEntity();
        this.initCityEntity();
        this.initZoneEntity();
    };
    RightPanelComponent.prototype.initCountryEntity = function () {
        var _this = this;
        this.countryEntity = new __WEBPACK_IMPORTED_MODULE_3__create_edit_entity__["a" /* EditEntity */]('Country', '/secure/country/list', '/secure/country/update');
        this.countryEntity.addField(__WEBPACK_IMPORTED_MODULE_1__map_interfaces__["a" /* FieldType */].input, 'Id', 'id');
        this.countryEntity.addField(__WEBPACK_IMPORTED_MODULE_1__map_interfaces__["a" /* FieldType */].input, 'Title', 'title');
        this.countryEntity.onDataLoaded = function (data) {
            _this.cityEntity.setFieldData('country', data);
        };
    };
    RightPanelComponent.prototype.initCityEntity = function () {
        var _this = this;
        this.cityEntity = new __WEBPACK_IMPORTED_MODULE_3__create_edit_entity__["a" /* EditEntity */]('City', '/secure/city/list', '/secure/city/update');
        this.cityEntity.addField(__WEBPACK_IMPORTED_MODULE_1__map_interfaces__["a" /* FieldType */].input, 'Id', 'id');
        this.cityEntity.addField(__WEBPACK_IMPORTED_MODULE_1__map_interfaces__["a" /* FieldType */].input, 'Title', 'title');
        this.cityEntity.addField(__WEBPACK_IMPORTED_MODULE_1__map_interfaces__["a" /* FieldType */].select, 'Country', 'country');
        this.cityEntity.onDataLoaded = function (data) {
            _this.zoneEntity.setFieldData('city', data);
        };
    };
    RightPanelComponent.prototype.initZoneEntity = function () {
        var _this = this;
        this.zoneEntity = new __WEBPACK_IMPORTED_MODULE_3__create_edit_entity__["a" /* EditEntity */]('Zone', '/secure/zone/list', '/secure/zone/update');
        this.zoneEntity.addField(__WEBPACK_IMPORTED_MODULE_1__map_interfaces__["a" /* FieldType */].input, 'Id', 'id');
        this.zoneEntity.addField(__WEBPACK_IMPORTED_MODULE_1__map_interfaces__["a" /* FieldType */].input, 'Title', 'title');
        this.zoneEntity.addField(__WEBPACK_IMPORTED_MODULE_1__map_interfaces__["a" /* FieldType */].input, 'Fill Color', 'fillColor');
        this.zoneEntity.addField(__WEBPACK_IMPORTED_MODULE_1__map_interfaces__["a" /* FieldType */].input, 'Stroke Color', 'strokeColor');
        this.zoneEntity.addField(__WEBPACK_IMPORTED_MODULE_1__map_interfaces__["a" /* FieldType */].select, 'City', 'city');
        this.zoneEntity.onSelectItem = function (zone) {
            _this.mapService.zoneSelectSubject.next(zone);
        };
        this.zoneEntity.beforeSave = function (dataObject) {
            dataObject.points = _this.zonePoints;
        };
        this.zoneEntity.onDataLoaded = function (zones) {
            _this.mapService.zonesSubject.next(zones);
        };
        this.zoneEntity.createNewInstance = function () {
            _this.mapService.newZoneSubject.next();
        };
        this.zoneEntity.onClear = function () {
            _this.mapService.clearZoneSubject.next();
        };
        this.zoneEntity.onToggleEdit = function (isEdit) {
            _this.mapService.isEditZone = isEdit;
        };
    };
    RightPanelComponent.prototype.initRaceEntity = function () {
    };
    RightPanelComponent.prototype.initPointEntity = function () {
    };
    RightPanelComponent.prototype.setPointEditStatus = function (isEdit) {
        this.mapService.isEditPoint = isEdit;
    };
    RightPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-right-panel',
            template: __webpack_require__("../../../../../src/app/map/right-panel/right-panel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/map/right-panel/right-panel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__map_service__["a" /* MapService */]])
    ], RightPanelComponent);
    return RightPanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/map/right-panel/right-panel.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RightPanelService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_api_api_service__ = __webpack_require__("../../../../../src/app/shared/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RightPanelService = (function () {
    function RightPanelService(apiService) {
        this.apiService = apiService;
    }
    RightPanelService.prototype.getCountries = function () {
        return this.apiService.get('/secure/country/list');
    };
    RightPanelService.prototype.createCountry = function (country) {
        return this.apiService.post('/secure/country/update', country);
    };
    RightPanelService.prototype.getCities = function () {
        return this.apiService.get('/secure/city/list');
    };
    RightPanelService.prototype.getZones = function () {
        return this.apiService.get('/secure/zone/list');
    };
    RightPanelService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_api_api_service__["a" /* ApiService */]])
    ], RightPanelService);
    return RightPanelService;
}());



/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav ul {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 45px;\r\n}\r\n\r\nnav ul li {\r\n\r\n}\r\n\r\nnav ul li a {\r\n  padding: 12px;\r\n  display: block;\r\n  color: #f5f5f5;\r\n  text-decoration: none;\r\n}\r\n\r\nnav ul li a:hover {\r\n  border-bottom: 3px solid #dcdcdc;\r\n}\r\n\r\nnav {\r\n  background-color: #373737;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <ul>\r\n    <li>\r\n      <a [routerLink]=\"'/map'\">Map</a>\r\n    </li>\r\n  </ul>\r\n  <ul style=\"position: absolute; right: 10px\">\r\n    <li>\r\n      <a [routerLink]=\"'/login'\">Log out</a>\r\n    </li>\r\n  </ul>\r\n</nav>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/api/api.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../src/app/shared/api/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ApiModule = (function () {
    function ApiModule() {
    }
    ApiModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]],
            declarations: [],
            exports: []
        })
    ], ApiModule);
    return ApiModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/api/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ApiService = (function () {
    function ApiService(httpClient, router) {
        this.httpClient = httpClient;
        this.router = router;
        // private apiHost = 'http://18.220.89.28:8080';
        this.apiHost = 'http://127.0.0.1:8080';
    }
    ApiService.prototype.get = function (path, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return this.httpClient.get(this.getPath(path), this.getOptions(options))
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* tap */])(null, function (response) { return _this.responseError(response); }));
    };
    ApiService.prototype.put = function (path, body, options) {
        if (options === void 0) { options = {}; }
        return this.httpClient.put(this.getPath(path), body, this.getOptions(options));
    };
    ApiService.prototype.delete = function (path, options) {
        if (options === void 0) { options = {}; }
        return this.httpClient.delete(this.getPath(path), this.getOptions(options));
    };
    ApiService.prototype.post = function (path, body, options) {
        if (options === void 0) { options = {}; }
        return this.httpClient.post(this.getPath(path), body, this.getOptions(options));
    };
    ApiService.prototype.getPath = function (path) {
        return "" + this.apiHost + path;
    };
    ApiService.prototype.getOptions = function (options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Authorization', "Bearer " + localStorage.getItem('token'));
        options.headers = headers;
        return options;
    };
    ApiService.prototype.responseError = function (response) {
        if (response.status === __WEBPACK_IMPORTED_MODULE_4__app_constants__["b" /* ServerStatus */].UNAUTHORIZED) {
            this.router.navigate(['/login']);
        }
    };
    ApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/authentication/authentication.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/authentication/authentication.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  authentication works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/authentication/authentication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthenticationComponent = (function () {
    function AuthenticationComponent() {
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
    };
    AuthenticationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-authentication',
            template: __webpack_require__("../../../../../src/app/shared/authentication/authentication.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/authentication/authentication.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/authentication/authentication.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationGuard = (function () {
    function AuthenticationGuard(authenticationService) {
        this.authenticationService = authenticationService;
    }
    AuthenticationGuard.prototype.canActivate = function (next, state) {
        console.log(this.authenticationService.isAuthenticated);
        return this.authenticationService.isAuthenticated;
    };
    AuthenticationGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/shared/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_guard__ = __webpack_require__("../../../../../src/app/shared/authentication/authentication.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_3__authentication_guard__["a" /* AuthenticationGuard */]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/authentication/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api_service__ = __webpack_require__("../../../../../src/app/shared/api/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_constants__ = __webpack_require__("../../../../../src/app/app.constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthenticationService = (function () {
    function AuthenticationService(apiService, userService, router) {
        var _this = this;
        this.apiService = apiService;
        this.userService = userService;
        this.router = router;
        this._isAuthenticated = false;
        this.authenticationObject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.$authenticationEvent = this.authenticationObject.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* filter */])(function (value) { return value !== null; }));
        this.$authenticationEvent.subscribe(function (event) {
            if (event === __WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* AuthenticationEvents */].LOGOUT) {
                _this.isAuthenticated = false;
            }
        });
    }
    AuthenticationService.prototype.login = function (login, password) {
        var _this = this;
        this.apiService.post('/user/login', { login: login, password: password })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* switchMap */])(function (response) {
            localStorage.setItem('token', response.token);
            return _this.apiService.get('/secure/user/info');
        }))
            .subscribe(function (user) {
            _this.userService.setUser(user);
            _this.authenticationObject.next(__WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* AuthenticationEvents */].LOGIN);
            _this.isAuthenticated = true;
            _this.router.navigate(['/map']);
        }, function (error) {
            _this.isAuthenticated = false;
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.userService.setUser(null);
        this.authenticationObject.next(__WEBPACK_IMPORTED_MODULE_5__app_constants__["a" /* AuthenticationEvents */].LOGOUT);
    };
    Object.defineProperty(AuthenticationService.prototype, "isAuthenticated", {
        get: function () {
            return this._isAuthenticated || !!localStorage.getItem('token');
        },
        set: function (value) {
            this._isAuthenticated = value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__api_api_service__["a" /* ApiService */],
            __WEBPACK_IMPORTED_MODULE_3__user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api_module__ = __webpack_require__("../../../../../src/app/shared/api/api.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_authentication_component__ = __webpack_require__("../../../../../src/app/shared/authentication/authentication.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_module__ = __webpack_require__("../../../../../src/app/shared/authentication/authentication.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__api_api_module__["a" /* ApiModule */],
                __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_module__["a" /* AuthenticationModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__authentication_authentication_component__["a" /* AuthenticationComponent */]],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__api_api_module__["a" /* ApiModule */],
                __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_module__["a" /* AuthenticationModule */]
            ],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/utils.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utils; });
var Utils = (function () {
    function Utils() {
    }
    Utils.isPresent = function (obj) {
        return obj !== undefined && obj !== null;
    };
    return Utils;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__user_component__["a" /* UserComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService() {
        this.userSubject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.$user = this.userSubject.asObservable().pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* filter */])(function (value) { return value !== null; }));
    }
    UserService.prototype.setUser = function (user) {
        this.userSubject.next(user);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/assets/images/noutbuk-klaviatura-mysh-stol.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "noutbuk-klaviatura-mysh-stol.879e02d12639ba874b36.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map