/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../src/demo1/js/custom/pages/general/pos.js":
/*!***************************************************!*\
  !*** ../src/demo1/js/custom/pages/general/pos.js ***!
  \***************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTPosSystem = function () {\n\tvar form;\n\n    var moneyFormat = wNumb({\n        mark: '.',\n        thousand: ',',\n        decimals: 2,\n        prefix: '$',\n    });\n\n\tvar calculateTotals = function() {\n        var items = [].slice.call(form.querySelectorAll('[data-kt-pos-element=\"item-total\"]'));\n        var total = 0;\n        var tax = 12;\n        var discount = 8;\n        var grantTotal = 0;\n\n        items.map(function (item) {\n            total += moneyFormat.from(item.innerHTML);\n        });\n\n        grantTotal = total;\n        grantTotal -= discount;\n        grantTotal += tax * 8 / 100;\n\n        form.querySelector('[data-kt-pos-element=\"total\"]').innerHTML = moneyFormat.to(total); \n        form.querySelector('[data-kt-pos-element=\"grant-total\"]').innerHTML = moneyFormat.to(grantTotal); \n    }\n\n\tvar handleQuantity = function() {\n\t\tvar dialers = [].slice.call(form.querySelectorAll('[data-kt-pos-element=\"item\"] [data-kt-dialer=\"true\"]'));\n\n        dialers.map(function (dialer) {\n            var dialerObject = KTDialer.getInstance(dialer);\n\n            dialerObject.on('kt.dialer.changed', function(){\n                var quantity = parseInt(dialerObject.getValue());\n                var item = dialerObject.getElement().closest('[data-kt-pos-element=\"item\"]');\n                var value = parseInt(item.getAttribute(\"data-kt-pos-item-price\"));\n                var total = quantity * value;\n\n                item.querySelector('[data-kt-pos-element=\"item-total\"]').innerHTML = moneyFormat.to(total);\n\n                calculateTotals();\n            });    \n        });\n\t}\n\n\treturn {\n\t\t// Public functions\n\t\tinit: function () {\n\t\t\t// Elements\n\t\t\tform = document.querySelector('#kt_pos_form');\n\n\t\t\thandleQuantity();\n\t\t}\n\t};\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n\tKTPosSystem.init();\n});\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/pages/general/pos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/pages/general/pos.js"]();
/******/ 	
/******/ })()
;