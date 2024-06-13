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

/***/ "../src/demo1/js/custom/utilities/search/horizontal.js":
/*!*************************************************************!*\
  !*** ../src/demo1/js/custom/utilities/search/horizontal.js ***!
  \*************************************************************/
/***/ (() => {

eval("\n \n// Class definition\nvar KTSearchHorizontal = function () {\n    // Private functions\n    var initAdvancedSearchForm = function () {\n       var form = document.querySelector('#kt_advanced_search_form');\n\n       // Init tags\n       var tags = form.querySelector('[name=\"tags\"]');\n       new Tagify(tags);\n    }\n\n    var handleAdvancedSearchToggle = function () {\n        var link = document.querySelector('#kt_horizontal_search_advanced_link');\n\n        link.addEventListener('click', function (e) {\n            e.preventDefault();\n            \n            if (link.innerHTML === \"Advanced Search\") {\n                link.innerHTML = \"Hide Advanced Search\";\n            } else {\n                link.innerHTML = \"Advanced Search\";\n            }\n        })\n    }\n\n    // Public methods\n    return {\n        init: function () {\n            initAdvancedSearchForm();\n            handleAdvancedSearchToggle();\n        }\n    }     \n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTSearchHorizontal.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/utilities/search/horizontal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/utilities/search/horizontal.js"]();
/******/ 	
/******/ })()
;