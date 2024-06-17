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

/***/ "../src/demo1/js/custom/admin/delivery-people/index.js":
/*!*************************************************************!*\
  !*** ../src/demo1/js/custom/admin/delivery-people/index.js ***!
  \*************************************************************/
/***/ (() => {

eval("\n\nvar KTUsersList = function () {\n    // Define shared variables\n    var table = document.getElementById('kt_table_users');\n    var datatable;\n\n    // Private functions\n    var initUserTable = function () {\n        // Init datatable --- more info on datatables: https://datatables.net/manual/\n        datatable = $(table).DataTable({\n            \"layout\": {\n                topEnd: null  \n            },\n            \"info\": false,\n            'order': [],\n            \"pageLength\": 10,\n            \"lengthChange\": false,\n            'columnDefs': [\n                { orderable: false, targets: 0 }, // Disable ordering on column 0 (checkbox)\n                { orderable: false, targets: 6 }, // Disable ordering on column 6 (actions)                \n            ]\n        });\n\n        // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw\n        datatable.on('draw', function () {\n            handleDeleteRows();\n        });\n    }\n\n    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()\n    var handleSearchDatatable = () => {\n        const filterSearch = document.querySelector('[data-kt-user-table-filter=\"search\"]');\n        filterSearch.addEventListener('keyup', function (e) {\n            datatable.search(e.target.value).draw();\n        });\n    }\n    \n    return {\n        // Public functions  \n        init: function () {\n            if (!table) {\n                return;\n            }\n\n            initUserTable();\n            handleSearchDatatable();\n        }\n    }\n}();\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTUsersList.init();\n});\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/admin/delivery-people/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/admin/delivery-people/index.js"]();
/******/ 	
/******/ })()
;