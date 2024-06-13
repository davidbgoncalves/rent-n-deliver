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

/***/ "../src/demo1/js/custom/apps/customers/view/payment-table.js":
/*!*******************************************************************!*\
  !*** ../src/demo1/js/custom/apps/customers/view/payment-table.js ***!
  \*******************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTCustomerViewPaymentTable = function () {\n\n    // Define shared variables\n    var datatable;\n    var table = document.querySelector('#kt_table_customers_payment');\n\n    // Private functions\n    var initCustomerView = function () {\n        // Set date data order\n        const tableRows = table.querySelectorAll('tbody tr');\n\n        tableRows.forEach(row => {\n            const dateRow = row.querySelectorAll('td');\n            const realDate = moment(dateRow[3].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 4th column in table\n            dateRow[3].setAttribute('data-order', realDate);\n        });\n\n        // Init datatable --- more info on datatables: https://datatables.net/manual/\n        datatable = $(table).DataTable({\n            \"info\": false,\n            'order': [],\n            \"pageLength\": 5,\n            \"lengthChange\": false,\n            'columnDefs': [\n                { orderable: false, targets: 4 }, // Disable ordering on column 5 (actions)\n            ]\n        });\n    }\n\n    // Delete customer\n    var deleteRows = () => {\n        // Select all delete buttons\n        const deleteButtons = table.querySelectorAll('[data-kt-customer-table-filter=\"delete_row\"]');\n        \n        deleteButtons.forEach(d => {\n            // Delete button on click\n            d.addEventListener('click', function (e) {\n                e.preventDefault();\n\n                // Select parent row\n                const parent = e.target.closest('tr');\n\n                // Get customer name\n                const invoiceNumber = parent.querySelectorAll('td')[0].innerText;\n\n                // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n                Swal.fire({\n                    text: \"Are you sure you want to delete \" + invoiceNumber + \"?\",\n                    icon: \"warning\",\n                    showCancelButton: true,\n                    buttonsStyling: false,\n                    confirmButtonText: \"Yes, delete!\",\n                    cancelButtonText: \"No, cancel\",\n                    customClass: {\n                        confirmButton: \"btn fw-bold btn-danger\",\n                        cancelButton: \"btn fw-bold btn-active-light-primary\"\n                    }\n                }).then(function (result) {\n                    if (result.value) {\n                        Swal.fire({\n                            text: \"You have deleted \" + invoiceNumber + \"!.\",\n                            icon: \"success\",\n                            buttonsStyling: false,\n                            confirmButtonText: \"Ok, got it!\",\n                            customClass: {\n                                confirmButton: \"btn fw-bold btn-primary\",\n                            }\n                        }).then(function () {\n                            // Remove current row\n                            datatable.row($(parent)).remove().draw();\n                        }).then(function () {\n                            // Detect checked checkboxes\n                            toggleToolbars();\n                        });\n                    } else if (result.dismiss === 'cancel') {\n                        Swal.fire({\n                            text: customerName + \" was not deleted.\",\n                            icon: \"error\",\n                            buttonsStyling: false,\n                            confirmButtonText: \"Ok, got it!\",\n                            customClass: {\n                                confirmButton: \"btn fw-bold btn-primary\",\n                            }\n                        });\n                    }\n                });\n            })\n        });\n    }\n\n    // Public methods\n    return {\n        init: function () {\n            if (!table) {\n                return;\n            }\n\n            initCustomerView();\n            deleteRows();\n        }\n    }\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTCustomerViewPaymentTable.init();\n});\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/customers/view/payment-table.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/customers/view/payment-table.js"]();
/******/ 	
/******/ })()
;