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

/***/ "../src/demo1/js/custom/utilities/modals/users-search.js":
/*!***************************************************************!*\
  !*** ../src/demo1/js/custom/utilities/modals/users-search.js ***!
  \***************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTModalUserSearch = function () {\n    // Private variables\n    var element;\n    var suggestionsElement;\n    var resultsElement;\n    var wrapperElement;\n    var emptyElement;\n    var searchObject;\n\n    // Private functions\n    var processs = function (search) {\n        var timeout = setTimeout(function () {\n            var number = KTUtil.getRandomInt(1, 3);\n\n            // Hide recently viewed\n            suggestionsElement.classList.add('d-none');\n\n            if (number === 3) {\n                // Hide results\n                resultsElement.classList.add('d-none');\n                // Show empty message \n                emptyElement.classList.remove('d-none');\n            } else {\n                // Show results\n                resultsElement.classList.remove('d-none');\n                // Hide empty message \n                emptyElement.classList.add('d-none');\n            }\n\n            // Complete search\n            search.complete();\n        }, 1500);\n    }\n\n    var clear = function (search) {\n        // Show recently viewed\n        suggestionsElement.classList.remove('d-none');\n        // Hide results\n        resultsElement.classList.add('d-none');\n        // Hide empty message \n        emptyElement.classList.add('d-none');\n    }\n\n    // Public methods\n    return {\n        init: function () {\n            // Elements\n            element = document.querySelector('#kt_modal_users_search_handler');\n\n            if (!element) {\n                return;\n            }\n\n            wrapperElement = element.querySelector('[data-kt-search-element=\"wrapper\"]');\n            suggestionsElement = element.querySelector('[data-kt-search-element=\"suggestions\"]');\n            resultsElement = element.querySelector('[data-kt-search-element=\"results\"]');\n            emptyElement = element.querySelector('[data-kt-search-element=\"empty\"]');\n\n            // Initialize search handler\n            searchObject = new KTSearch(element);\n\n            // Search handler\n            searchObject.on('kt.search.process', processs);\n\n            // Clear handler\n            searchObject.on('kt.search.clear', clear);\n        }\n    };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTModalUserSearch.init();\n});\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/utilities/modals/users-search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/utilities/modals/users-search.js"]();
/******/ 	
/******/ })()
;