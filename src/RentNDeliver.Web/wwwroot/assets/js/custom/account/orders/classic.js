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

/***/ "../src/demo1/js/custom/account/orders/classic.js":
/*!********************************************************!*\
  !*** ../src/demo1/js/custom/account/orders/classic.js ***!
  \********************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTDatatablesClassic = function () {\n    // Private functions\n\n    var initClassic = function () {\n\n        // Set date data order\n        const table = document.getElementById('kt_orders_classic');\n        const tableRows = table.querySelectorAll('tbody tr');\n\n        tableRows.forEach(row => {\n            const dateRow = row.querySelectorAll('td');\n            const realDate = moment(dateRow[1].innerHTML, \"MMM D, YYYY\").format('x');\n            dateRow[1].setAttribute('data-order', realDate);\n        });\n\n        // Init datatable --- more info on datatables: https://datatables.net/manual/\n        const datatable = $(table).DataTable({\n            \"info\": false,\n            'order': []\n        });\n\n        // Filter dropdown elements\n        const filterOrders = document.getElementById('kt_filter_orders');\n        const filterYear = document.getElementById('kt_filter_year');\n\n        // Filter by order status --- official docs reference: https://datatables.net/reference/api/search()\n        filterOrders.addEventListener('change', function (e) {\n            datatable.column(3).search(e.target.value).draw();\n        });\n\n        // Filter by date --- official docs reference: https://momentjs.com/docs/\n        var minDate;\n        var maxDate;\n        filterYear.addEventListener('change', function (e) {\n            const value = e.target.value;\n            switch (value) {\n                case 'thisyear': {\n                    minDate = moment().startOf('year').format('x');\n                    maxDate = moment().endOf('year').format('x');\n                    datatable.draw();\n                    break;\n                }\n                case 'thismonth': {\n                    minDate = moment().startOf('month').format('x');\n                    maxDate = moment().endOf('month').format('x');\n                    datatable.draw();\n                    break;\n                }\n                case 'lastmonth': {\n                    minDate = moment().subtract(1, 'months').startOf('month').format('x');\n                    maxDate = moment().subtract(1, 'months').endOf('month').format('x');\n                    datatable.draw();\n                    break;\n                }\n                case 'last90days': {\n                    minDate = moment().subtract(30, 'days').format('x');\n                    maxDate = moment().format('x');\n                    datatable.draw();\n                    break;\n                }\n                default: {\n                    minDate = moment().subtract(100, 'years').startOf('month').format('x');\n                    maxDate = moment().add(1, 'months').endOf('month').format('x');\n                    datatable.draw();\n                    break;\n                }\n            }\n        });\n        \n        // Date range filter --- offical docs reference: https://datatables.net/examples/plug-ins/range_filtering.html\n        $.fn.dataTable.ext.search.push(\n            function (settings, data, dataIndex) {\n                var min = minDate;\n                var max = maxDate;\n                var date = parseFloat(moment(data[1]).format('x')) || 0; // use data for the age column\n\n                if ((isNaN(min) && isNaN(max)) ||\n                    (isNaN(min) && date <= max) ||\n                    (min <= date && isNaN(max)) ||\n                    (min <= date && date <= max)) {\n                    return true;\n                }\n                return false;\n            }\n        );\n\n        // Search --- official docs reference: https://datatables.net/reference/api/search()\n        var filterSearch = document.getElementById('kt_filter_search');\n        filterSearch.addEventListener('keyup', function (e) {\n            datatable.search(e.target.value).draw();\n        });\n    }\n\n    // Public methods\n    return {\n        init: function () {\n            initClassic();\n        }\n    }\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function() {\n    KTDatatablesClassic.init();\n});\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/account/orders/classic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/account/orders/classic.js"]();
/******/ 	
/******/ })()
;