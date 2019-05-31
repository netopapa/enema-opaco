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



var routes = [];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <div class=\"pelicula centralizado\">\n    <h1 class=\"text-enema\">ENEMA</h1>\n    <h1 class=\"text-opaco\">OPACO</h1>\n  </div>\n</div>\n\n<div class=\"container\" id=\"doencas\">\n  <h4>Doenças que podem ser evitadas</h4>\n  <div class=\"row\">\n    <div class=\"col s4\">\n      <div class=\"card\">\n        <div class=\"card-image megacolon\">\n          <span class=\"card-title\">Megacólon</span>\n        </div>\n        <div class=\"card-content\">\n          <p>Megacólon. Essa patologia se caracteriza por uma dilatação anormal das paredes da mucosa do intestino, a\n            etiologia se caracteriza pela ausência de células ganglionares nos plexos submucosos do intestino grosso.\n            Pode ser adquirido por ingestão de substância tóxica. Geralmente requer\n            procedimento cirúrgico, mas pode ser clínico dependendo do caso.</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col s4\">\n      <div class=\"card\">\n        <div class=\"card-image diverticulite\">\n          <span class=\"card-title\">Diverticulite</span>\n        </div>\n        <div class=\"card-content\">\n          <p>Diverticulite. São caracterizados por adição de sacoliformes (como se fosse um balão cheio). As\n            complicações mais frequentes são a hemorragia e a inflamação (geralmente a causa de sangramento nas fezes e\n            quadros de diarreia). O tratamento é feito após análise clínica da causa da patologia por medicamentos de\n            acordo com o grau da doença (leve, moderada ou grave).</p>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col s4\">\n      <div class=\"card\">\n        <div class=\"card-image cancer\">\n          <span class=\"card-title\">Câncer coloretal (CCR)</span>\n        </div>\n        <div class=\"card-content\">\n          <p>Câncer coloretal (CCR). No Brasil, segundo o Inca é a terceira maior causa de morte entre homens e a\n            segunda entre as mulheres. Geralmente é um quadro evoluído de outras doenças do intestino, podendo também\n            ser hereditário. Entre os sintomas, a falta de defecação, icterícia (aspecto amarelado da pele), barriga\n            proeminente (inchada). Tratamento cirúrgico.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\" id=\"exame\">\n  <div class=\"row\">\n    <div class=\"col s6\">\n      <div class=\"int1 int\"></div>\n      <div class=\"int2 int\"></div>\n    </div>\n    <div class=\"col s6\">\n      <h4 class=\"center\">Enema Opaco</h4>\n      <p>O exame enema opaco ou clister opaco, é um exame que utiliza raio x e contraste, geralmente sulfato de bário,\n        para estudar a forma e a função do intestino grosso e reto, para detectar possíveis problemas intestinais, como\n        diverticulite ou pólipos, por exemplo.</p>\n      <p>O exame enema opaco pode ser feito tanto em adultos como crianças e pode ser dividido em enema opaco simples,\n        quando se utiliza apenas um contraste, e em enema opaco com duplo contraste, quando é usado mais que um tipo de\n        contraste.</p>\n      <p>O exame enema opaco dura cerca de 40 minutos, é realizado sem anestesia e o indivíduo pode sentir dores e\n        desconforto durante o exame. Por isso, alguns médicos preferem solicitar uma colonoscopia porque ela também\n        serve para avaliar o intestino grosso, sendo mais segura e confortável para o paciente.</p>\n    </div>\n  </div>\n</div>\n\n<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col l6 s12\">\n        <h5 class=\"white-text\">Enema Opaco</h5>\n        <p class=\"grey-text text-lighten-4\">É válido ressaltar que em casos de persistência da dor o médico deve ser\n          informado. **</p>\n      </div>\n      <div class=\"col l4 offset-l2 s12\">\n        <h5 class=\"white-text\">Rede Social</h5>\n        <ul>\n          <li><a class=\"grey-text text-lighten-3 insta\" href=\"https://www.instagram.com/enema_opaco/\" target=\"_blanc\"><img src=\"assets/insta.png\" alt=\"instagram\" height=\"30px\"> @enema_opaco</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-copyright\">\n    <div class=\"container\">\n      © 2019 Desenvolvido por\n      <a class=\"grey-text text-lighten-4\" href=\"https://www.linkedin.com/in/papa-neto\" target=\"_blanc\">Papa Neto</a>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#header {\n  height: 100vh;\n  background-image: url('https://netopapa.github.io/enema-opaco/assets/radiologia.jpg');\n  background-repeat: no-repeat;\n  background-position: center 100%;\n  background-size: cover; }\n  #header .pelicula {\n    background-color: rgba(0, 0, 0, 0.6);\n    height: 100%; }\n  #header .pelicula h1 {\n      opacity: 0;\n      font-weight: 700;\n      color: #fff;\n      margin: 0 10px;\n      -webkit-animation-delay: 1s;\n              animation-delay: 1s;\n      -webkit-animation-duration: 2s;\n              animation-duration: 2s;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; }\n  #header .pelicula h1.text-enema {\n        -webkit-animation-name: enema;\n                animation-name: enema; }\n  #header .pelicula h1.text-opaco {\n        -webkit-animation-name: opaco;\n                animation-name: opaco; }\n  #doencas .card-image {\n  height: 290px;\n  background-position: center;\n  background-size: cover; }\n  #doencas .card-image.megacolon {\n    background-image: url('https://netopapa.github.io/enema-opaco/assets/megacolon.jpg'); }\n  #doencas .card-image.diverticulite {\n    background-image: url('https://netopapa.github.io/enema-opaco/assets/diverticulite.jpg'); }\n  #doencas .card-image.cancer {\n    background-image: url('https://netopapa.github.io/enema-opaco/assets/cancer-colateral.jpg');\n    background-position: 100% !important; }\n  #exame .int {\n  background-position: 25%;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n  width: 100%;\n  background-size: 270px;\n  height: 190px; }\n  #exame .int1 {\n  background-image: url('https://netopapa.github.io/enema-opaco/assets/intestino.png'); }\n  #exame .int2 {\n  background-image: url('https://netopapa.github.io/enema-opaco/assets/intestino2.png'); }\n  @-webkit-keyframes enema {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(50%);\n            transform: translateX(50%); }\n  50% {\n    opacity: 0.35; }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  @keyframes enema {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(50%);\n            transform: translateX(50%); }\n  50% {\n    opacity: 0.35; }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  footer {\n  background-color: #221d65; }\n  footer * {\n    color: #fff; }\n  footer .insta {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\n  @-webkit-keyframes opaco {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  50% {\n    opacity: 0.35; }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n  @keyframes opaco {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  50% {\n    opacity: 0.35; }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n            transform: translateX(0); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxVU0VSXFxEZXNrdG9wXFxuZXRvXFxmYW1ldHJvXFxlbmVtYS1vcGFjby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHFGQUErQztFQUMvQyw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLHNCQUFzQixFQUFBO0VBTHhCO0lBUUksb0NBQW9DO0lBQ3BDLFlBQVksRUFBQTtFQVRoQjtNQVlNLFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIsV0FBVztNQUNYLGNBQWM7TUFDZCwyQkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLDhCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIscUNBQTZCO2NBQTdCLDZCQUE2QixFQUFBO0VBbEJuQztRQXFCUSw2QkFBcUI7Z0JBQXJCLHFCQUFxQixFQUFBO0VBckI3QjtRQXlCUSw2QkFBcUI7Z0JBQXJCLHFCQUFxQixFQUFBO0VBTTdCO0VBRUksYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixzQkFBc0IsRUFBQTtFQUoxQjtJQU9NLG9GQUE4QyxFQUFBO0VBUHBEO0lBV00sd0ZBQWtELEVBQUE7RUFYeEQ7SUFlTSwyRkFBcUQ7SUFDckQsb0NBQW9DLEVBQUE7RUFLMUM7RUFFSSx3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGFBQWEsRUFBQTtFQVBqQjtFQVdJLG9GQUE4QyxFQUFBO0VBWGxEO0VBZUkscUZBQStDLEVBQUE7RUFJbkQ7RUFDRTtJQUNFLFVBQVU7SUFDVixrQ0FBMEI7WUFBMUIsMEJBQTBCLEVBQUE7RUFHNUI7SUFDRSxhQUFhLEVBQUE7RUFHZjtJQUNFLFVBQVU7SUFDVixnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUEsRUFBQTtFQVo1QjtFQUNFO0lBQ0UsVUFBVTtJQUNWLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtFQUc1QjtJQUNFLGFBQWEsRUFBQTtFQUdmO0lBQ0UsVUFBVTtJQUNWLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQSxFQUFBO0VBSTVCO0VBQ0UseUJBQXlCLEVBQUE7RUFEM0I7SUFJSSxXQUFXLEVBQUE7RUFKZjtJQVFJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CLEVBQUE7RUFJdkI7RUFDRTtJQUNFLFVBQVU7SUFDVixtQ0FBMkI7WUFBM0IsMkJBQTJCLEVBQUE7RUFHN0I7SUFDRSxhQUFhLEVBQUE7RUFHZjtJQUNFLFVBQVU7SUFDVixnQ0FBd0I7WUFBeEIsd0JBQXdCLEVBQUEsRUFBQTtFQVo1QjtFQUNFO0lBQ0UsVUFBVTtJQUNWLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQTtFQUc3QjtJQUNFLGFBQWEsRUFBQTtFQUdmO0lBQ0UsVUFBVTtJQUNWLGdDQUF3QjtZQUF4Qix3QkFBd0IsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hlYWRlciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL3JhZGlvbG9naWEuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgLnBlbGljdWxhIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcclxuICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XHJcblxyXG4gICAgICAmLnRleHQtZW5lbWEge1xyXG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBlbmVtYTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi50ZXh0LW9wYWNvIHtcclxuICAgICAgICBhbmltYXRpb24tbmFtZTogb3BhY287XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNkb2VuY2FzIHtcclxuICAuY2FyZC1pbWFnZSB7XHJcbiAgICBoZWlnaHQ6IDI5MHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHJcbiAgICAmLm1lZ2Fjb2xvbiB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbWVnYWNvbG9uLmpwZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAmLmRpdmVydGljdWxpdGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2RpdmVydGljdWxpdGUuanBnXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICYuY2FuY2VyIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9jYW5jZXItY29sYXRlcmFsLmpwZ1wiKTtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuI2V4YW1lIHtcclxuICAuaW50IHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDI1JTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI3MHB4O1xyXG4gICAgaGVpZ2h0OiAxOTBweDtcclxuICB9XHJcblxyXG4gIC5pbnQxIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW50ZXN0aW5vLnBuZ1wiKTtcclxuICB9XHJcblxyXG4gIC5pbnQyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW50ZXN0aW5vMi5wbmdcIik7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGVuZW1hIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMC4zNTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuXHJcbmZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMWQ2NTtcclxuXHJcbiAgKiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIC5pbnN0YSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgb3BhY28ge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMC4zNTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICB9XHJcbn1cclxuIl19 */"

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
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! C:\Users\USER\Desktop\neto\fametro\enema-opaco\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map