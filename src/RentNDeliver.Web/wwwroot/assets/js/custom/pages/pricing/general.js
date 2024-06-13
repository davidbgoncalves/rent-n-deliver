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

/***/ "../src/demo1/js/custom/pages/pricing/general.js":
/*!*******************************************************!*\
  !*** ../src/demo1/js/custom/pages/pricing/general.js ***!
  \*******************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTPricingGeneral = function () {\n    // Private variables\n    var element;\n\tvar planPeriodMonthButton;\n\tvar planPeriodAnnualButton;\n\n\tvar changePlanPrices = function(type) {\n\t\tvar items = [].slice.call(element.querySelectorAll('[data-kt-plan-price-month]'));\n\n\t\titems.map(function (item) {\n\t\t\tvar monthPrice = item.getAttribute('data-kt-plan-price-month');\n\t\t\tvar annualPrice = item.getAttribute('data-kt-plan-price-annual');\n\n\t\t\tif ( type === 'month' ) {\n\t\t\t\titem.innerHTML = monthPrice;\n\t\t\t} else if ( type === 'annual' ) {\n\t\t\t\titem.innerHTML = annualPrice;\n\t\t\t}\n\t\t});\n\t}\n\n    var handlePlanPeriodSelection = function(e) {\n\n        // Handle period change\n        planPeriodMonthButton.addEventListener('click', function (e) {\n            e.preventDefault();\n\n            planPeriodMonthButton.classList.add('active');\n            planPeriodAnnualButton.classList.remove('active');\n\n            changePlanPrices('month');\n        });\n\n\t\tplanPeriodAnnualButton.addEventListener('click', function (e) {\n            e.preventDefault();\n\n            planPeriodMonthButton.classList.remove('active');\n            planPeriodAnnualButton.classList.add('active');\n            \n            changePlanPrices('annual');\n        });\n    }\n\n    // Public methods\n    return {\n        init: function () {\n            element = document.querySelector('#kt_pricing');\n\t\t\tplanPeriodMonthButton = element.querySelector('[data-kt-plan=\"month\"]');\n\t\t\tplanPeriodAnnualButton = element.querySelector('[data-kt-plan=\"annual\"]');\n\n            // Handlers\n            handlePlanPeriodSelection();\n        }\n    }\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function() {\n    KTPricingGeneral.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/pages/pricing/general.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/pages/pricing/general.js"]();
/******/ 	
/******/ })()
;