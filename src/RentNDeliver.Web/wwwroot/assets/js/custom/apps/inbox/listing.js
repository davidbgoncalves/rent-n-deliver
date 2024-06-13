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

/***/ "../src/demo1/js/custom/apps/inbox/listing.js":
/*!****************************************************!*\
  !*** ../src/demo1/js/custom/apps/inbox/listing.js ***!
  \****************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTAppInboxListing = function () {\n    var table;\n    var datatable;\n\n    // Private functions\n    var initDatatable = function () {\n        // Init datatable --- more info on datatables: https://datatables.net/manual/\n        datatable = $(table).DataTable({\n            \"info\": false,\n            'order': [],\n            // 'paging': false,\n            // 'pageLength': false,      \n        });\n\n        datatable.on('draw', function () {\n            handleDatatableFooter();\n        });\n    }\n\n    // Handle datatable footer spacings\n    var handleDatatableFooter = () => {\n        const footerElement = document.querySelector('#kt_inbox_listing_wrapper > .row');\n        const spacingClasses = ['px-9', 'pt-3', 'pb-5'];\n        footerElement.classList.add(...spacingClasses);\n    }\n\n    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()\n    var handleSearchDatatable = () => {\n        const filterSearch = document.querySelector('[data-kt-inbox-listing-filter=\"search\"]');\n        filterSearch.addEventListener('keyup', function (e) {\n            datatable.search(e.target.value).draw();\n        });\n    }\n\n\n    // Public methods\n    return {\n        init: function () {\n            table = document.querySelector('#kt_inbox_listing');\n\n            if (!table) {\n                return;\n            }\n\n            initDatatable();\n            handleSearchDatatable();\n            handleDatatableFooter();\n        }\n    };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTAppInboxListing.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/inbox/listing.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/inbox/listing.js"]();
/******/ 	
/******/ })()
;