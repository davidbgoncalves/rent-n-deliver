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

/***/ "../src/demo1/js/custom/apps/ecommerce/catalog/categories.js":
/*!*******************************************************************!*\
  !*** ../src/demo1/js/custom/apps/ecommerce/catalog/categories.js ***!
  \*******************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTAppEcommerceCategories = function () {\n    // Shared variables\n    var table;\n    var datatable;\n\n    // Private functions\n    var initDatatable = function () {\n        // Init datatable --- more info on datatables: https://datatables.net/manual/\n        datatable = $(table).DataTable({\n            \"info\": false,\n            'order': [],\n            'pageLength': 10,\n            'columnDefs': [\n                { orderable: false, targets: 0 }, // Disable ordering on column 0 (checkbox)\n                { orderable: false, targets: 3 }, // Disable ordering on column 3 (actions)\n            ]\n        });\n\n        // Re-init functions on datatable re-draws\n        datatable.on('draw', function () {\n            handleDeleteRows();\n        });\n    }\n\n    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()\n    var handleSearchDatatable = () => {\n        const filterSearch = document.querySelector('[data-kt-ecommerce-category-filter=\"search\"]');\n        filterSearch.addEventListener('keyup', function (e) {\n            datatable.search(e.target.value).draw();\n        });\n    }\n\n    // Delete cateogry\n    var handleDeleteRows = () => {\n        // Select all delete buttons\n        const deleteButtons = table.querySelectorAll('[data-kt-ecommerce-category-filter=\"delete_row\"]');\n\n        deleteButtons.forEach(d => {\n            // Delete button on click\n            d.addEventListener('click', function (e) {\n                e.preventDefault();\n\n                // Select parent row\n                const parent = e.target.closest('tr');\n\n                // Get category name\n                const categoryName = parent.querySelector('[data-kt-ecommerce-category-filter=\"category_name\"]').innerText;\n\n                // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n                Swal.fire({\n                    text: \"Are you sure you want to delete \" + categoryName + \"?\",\n                    icon: \"warning\",\n                    showCancelButton: true,\n                    buttonsStyling: false,\n                    confirmButtonText: \"Yes, delete!\",\n                    cancelButtonText: \"No, cancel\",\n                    customClass: {\n                        confirmButton: \"btn fw-bold btn-danger\",\n                        cancelButton: \"btn fw-bold btn-active-light-primary\"\n                    }\n                }).then(function (result) {\n                    if (result.value) {\n                        Swal.fire({\n                            text: \"You have deleted \" + categoryName + \"!.\",\n                            icon: \"success\",\n                            buttonsStyling: false,\n                            confirmButtonText: \"Ok, got it!\",\n                            customClass: {\n                                confirmButton: \"btn fw-bold btn-primary\",\n                            }\n                        }).then(function () {\n                            // Remove current row\n                            datatable.row($(parent)).remove().draw();\n                        });\n                    } else if (result.dismiss === 'cancel') {\n                        Swal.fire({\n                            text: categoryName + \" was not deleted.\",\n                            icon: \"error\",\n                            buttonsStyling: false,\n                            confirmButtonText: \"Ok, got it!\",\n                            customClass: {\n                                confirmButton: \"btn fw-bold btn-primary\",\n                            }\n                        });\n                    }\n                });\n            })\n        });\n    }\n\n\n    // Public methods\n    return {\n        init: function () {\n            table = document.querySelector('#kt_ecommerce_category_table');\n\n            if (!table) {\n                return;\n            }\n\n            initDatatable();\n            handleSearchDatatable();\n            handleDeleteRows();\n        }\n    };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTAppEcommerceCategories.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/ecommerce/catalog/categories.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/ecommerce/catalog/categories.js"]();
/******/ 	
/******/ })()
;