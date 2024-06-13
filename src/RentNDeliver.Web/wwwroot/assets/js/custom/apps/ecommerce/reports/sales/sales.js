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

/***/ "../src/demo1/js/custom/apps/ecommerce/reports/sales/sales.js":
/*!********************************************************************!*\
  !*** ../src/demo1/js/custom/apps/ecommerce/reports/sales/sales.js ***!
  \********************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTAppEcommerceReportSales = function () {\n    // Shared variables\n    var table;\n    var datatable;\n\n    // Private functions\n    var initDatatable = function () {\n        // Set date data order\n        const tableRows = table.querySelectorAll('tbody tr');\n\n        tableRows.forEach(row => {\n            const dateRow = row.querySelectorAll('td');\n            const realDate = moment(dateRow[0].innerHTML, \"MMM DD, YYYY\").format(); // select date from 4th column in table\n            dateRow[0].setAttribute('data-order', realDate);\n        });\n\n\n        // Init datatable --- more info on datatables: https://datatables.net/manual/\n        datatable = $(table).DataTable({\n            \"info\": false,\n            'order': [],\n            'pageLength': 10,\n        });\n    }\n\n    // Init daterangepicker\n    var initDaterangepicker = () => {\n        var start = moment().subtract(29, \"days\");\n        var end = moment();\n        var input = $(\"#kt_ecommerce_report_sales_daterangepicker\");\n\n        function cb(start, end) {\n            input.html(start.format(\"MMMM D, YYYY\") + \" - \" + end.format(\"MMMM D, YYYY\"));\n        }\n\n        input.daterangepicker({\n            startDate: start,\n            endDate: end,\n            ranges: {\n                \"Today\": [moment(), moment()],\n                \"Yesterday\": [moment().subtract(1, \"days\"), moment().subtract(1, \"days\")],\n                \"Last 7 Days\": [moment().subtract(6, \"days\"), moment()],\n                \"Last 30 Days\": [moment().subtract(29, \"days\"), moment()],\n                \"This Month\": [moment().startOf(\"month\"), moment().endOf(\"month\")],\n                \"Last Month\": [moment().subtract(1, \"month\").startOf(\"month\"), moment().subtract(1, \"month\").endOf(\"month\")]\n            }\n        }, cb);\n\n        cb(start, end);\n    }\n\n    // Hook export buttons\n    var exportButtons = () => {\n        const documentTitle = 'Sales Report';\n        var buttons = new $.fn.dataTable.Buttons(table, {\n            buttons: [\n                {\n                    extend: 'copyHtml5',\n                    title: documentTitle\n                },\n                {\n                    extend: 'excelHtml5',\n                    title: documentTitle\n                },\n                {\n                    extend: 'csvHtml5',\n                    title: documentTitle\n                },\n                {\n                    extend: 'pdfHtml5',\n                    title: documentTitle\n                }\n            ]\n        }).container().appendTo($('#kt_ecommerce_report_sales_export'));\n\n        // Hook dropdown menu click event to datatable export buttons\n        const exportButtons = document.querySelectorAll('#kt_ecommerce_report_sales_export_menu [data-kt-ecommerce-export]');\n        exportButtons.forEach(exportButton => {\n            exportButton.addEventListener('click', e => {\n                e.preventDefault();\n\n                // Get clicked export value\n                const exportValue = e.target.getAttribute('data-kt-ecommerce-export');\n                const target = document.querySelector('.dt-buttons .buttons-' + exportValue);\n\n                // Trigger click event on hidden datatable export buttons\n                target.click();\n            });\n        });\n    }\n\n\n    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()\n    var handleSearchDatatable = () => {\n        const filterSearch = document.querySelector('[data-kt-ecommerce-order-filter=\"search\"]');\n        filterSearch.addEventListener('keyup', function (e) {\n            datatable.search(e.target.value).draw();\n        });\n    }\n\n    // Public methods\n    return {\n        init: function () {\n            table = document.querySelector('#kt_ecommerce_report_sales_table');\n\n            if (!table) {\n                return;\n            }\n\n            initDatatable();\n            initDaterangepicker();\n            exportButtons();\n            handleSearchDatatable();\n        }\n    };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTAppEcommerceReportSales.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/ecommerce/reports/sales/sales.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/ecommerce/reports/sales/sales.js"]();
/******/ 	
/******/ })()
;