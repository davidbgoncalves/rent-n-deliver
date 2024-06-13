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

/***/ "../src/demo1/js/custom/apps/customers/view/invoices.js":
/*!**************************************************************!*\
  !*** ../src/demo1/js/custom/apps/customers/view/invoices.js ***!
  \**************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTCustomerViewInvoices = function () {\n\n    // Private functions\n    // Init current year datatable\n    var initInvoiceYearCurrent = function () {\n        // Define table element\n        const id = '#kt_customer_details_invoices_table_1';\n        var table = document.querySelector(id);\n\n        // Set date data order\n        const tableRows = table.querySelectorAll('tbody tr');\n\n        tableRows.forEach(row => {\n            const dateRow = row.querySelectorAll('td');\n            const realDate = moment(dateRow[0].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 1st column in table\n            dateRow[0].setAttribute('data-order', realDate);\n        });\n\n        // Init datatable --- more info on datatables: https://datatables.net/manual/\n        var datatable = $(id).DataTable({\n            \"info\": false,\n            'order': [],\n            \"pageLength\": 5,\n            \"lengthChange\": false,\n            'columnDefs': [\n                { orderable: false, targets: 4 }, // Disable ordering on column 0 (download)\n            ]\n        });\n    }\n\n    // Init year 2020 datatable\n    var initInvoiceYear2020 = function () {\n        // Define table element\n        const id = '#kt_customer_details_invoices_table_2';\n        var table = document.querySelector(id);\n\n        // Set date data order\n        const tableRows = table.querySelectorAll('tbody tr');\n\n        tableRows.forEach(row => {\n            const dateRow = row.querySelectorAll('td');\n            const realDate = moment(dateRow[0].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 1st column in table\n            dateRow[0].setAttribute('data-order', realDate);\n        });\n\n        // Init datatable --- more info on datatables: https://datatables.net/manual/\n        var datatable = $(id).DataTable({\n            \"info\": false,\n            'order': [],\n            \"pageLength\": 5,\n            \"lengthChange\": false,\n            'columnDefs': [\n                { orderable: false, targets: 4 }, // Disable ordering on column 0 (download)\n            ]\n        });\n    }\n\n    // Init year 2019 datatable\n    var initInvoiceYear2019 = function () {\n        // Define table element\n        const id = '#kt_customer_details_invoices_table_3';\n        var table = document.querySelector(id);\n\n        // Set date data order\n        const tableRows = table.querySelectorAll('tbody tr');\n\n        tableRows.forEach(row => {\n            const dateRow = row.querySelectorAll('td');\n            const realDate = moment(dateRow[0].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 1st column in table\n            dateRow[0].setAttribute('data-order', realDate);\n        });\n\n        // Init datatable --- more info on datatables: https://datatables.net/manual/\n        var datatable = $(id).DataTable({\n            \"info\": false,\n            'order': [],\n            \"pageLength\": 5,\n            \"lengthChange\": false,\n            'columnDefs': [\n                { orderable: false, targets: 4 }, // Disable ordering on column 0 (download)\n            ]\n        });\n    }\n\n    // Init year 2018 datatable\n    var initInvoiceYear2018 = function () {\n        // Define table element\n        const id = '#kt_customer_details_invoices_table_4';\n        var table = document.querySelector(id);\n\n        // Set date data order\n        const tableRows = table.querySelectorAll('tbody tr');\n\n        tableRows.forEach(row => {\n            const dateRow = row.querySelectorAll('td');\n            const realDate = moment(dateRow[0].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 1st column in table\n            dateRow[0].setAttribute('data-order', realDate);\n        });\n\n        // Init datatable --- more info on datatables: https://datatables.net/manual/\n        var datatable = $(id).DataTable({\n            \"info\": false,\n            'order': [],\n            \"pageLength\": 5,\n            \"lengthChange\": false,\n            'columnDefs': [\n                { orderable: false, targets: 4 }, // Disable ordering on column 0 (download)\n            ]\n        });\n    }\n\n    // Public methods\n    return {\n        init: function () {\n            initInvoiceYearCurrent();\n            initInvoiceYear2020();\n            initInvoiceYear2019();\n            initInvoiceYear2018();\n        }\n    }\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTCustomerViewInvoices.init();\n});\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/customers/view/invoices.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/customers/view/invoices.js"]();
/******/ 	
/******/ })()
;