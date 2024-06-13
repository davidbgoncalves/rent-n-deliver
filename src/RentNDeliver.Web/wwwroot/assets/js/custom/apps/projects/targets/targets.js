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

/***/ "../src/demo1/js/custom/apps/projects/targets/targets.js":
/*!***************************************************************!*\
  !*** ../src/demo1/js/custom/apps/projects/targets/targets.js ***!
  \***************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTProjectTargets = function () {\n\n    var initDatatable = function () {\n        const table = document.getElementById('kt_profile_overview_table');\n\n        // set date data order\n        const tableRows = table.querySelectorAll('tbody tr');\n        tableRows.forEach(row => {\n            const dateRow = row.querySelectorAll('td');\n            const realDate = moment(dateRow[1].innerHTML, \"MMM D, YYYY\").format();\n            dateRow[1].setAttribute('data-order', realDate);\n        });\n\n        // init datatable --- more info on datatables: https://datatables.net/manual/\n        const datatable = $(table).DataTable({\n            \"info\": false,\n            'order': [],\n            \"paging\": false,\n        });\n\n    }\n\n    // Public methods\n    return {\n        init: function () {\n            initDatatable();\n        }\n    }\n}();\n\n\n// On document ready\nKTUtil.onDOMContentLoaded(function() {\n    KTProjectTargets.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/projects/targets/targets.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/projects/targets/targets.js"]();
/******/ 	
/******/ })()
;