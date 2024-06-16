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

/***/ "../src/demo1/js/custom/rental/motorcycles/index.js":
/*!**********************************************************!*\
  !*** ../src/demo1/js/custom/rental/motorcycles/index.js ***!
  \**********************************************************/
/***/ (() => {

eval("\n\nvar KTUsersList = function () {\n    // Define shared variables\n    var table = document.getElementById('kt_table_users');\n    var datatable;\n\n    // Private functions\n    var initUserTable = function () {\n        // Init datatable --- more info on datatables: https://datatables.net/manual/\n        datatable = $(table).DataTable({\n            \"layout\": {\n                topEnd: null  \n            },\n            \"info\": false,\n            'order': [],\n            \"pageLength\": 10,\n            \"lengthChange\": false,\n            'columnDefs': [\n                { orderable: false, targets: 0 }, // Disable ordering on column 0 (checkbox)\n                { orderable: false, targets: 6 }, // Disable ordering on column 6 (actions)                \n            ]\n        });\n\n        // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw\n        datatable.on('draw', function () {\n            handleDeleteRows();\n        });\n    }\n\n    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()\n    var handleSearchDatatable = () => {\n        const filterSearch = document.querySelector('[data-kt-user-table-filter=\"search\"]');\n        filterSearch.addEventListener('keyup', function (e) {\n            datatable.search(e.target.value).draw();\n        });\n    }\n    \n    // Delete subscription\n    var handleDeleteRows = () => {\n        // Select all delete buttons\n        const deleteButtons = table.querySelectorAll('[data-kt-users-table-filter=\"delete_row\"]');\n\n        deleteButtons.forEach(d => {\n            // Delete button on click\n            d.addEventListener('click', function (e) {\n                e.preventDefault();\n\n                // Select parent row\n                const parent = e.target.closest('tr');\n\n                // Get user ID\n                const id = parent.querySelectorAll('td')[0].innerText;\n                const licensePlate = parent.querySelectorAll('td')[1].innerText;\n\n                // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n                Swal.fire({\n                    text: \"Are you sure you want to delete \" + licensePlate + \"?\",\n                    icon: \"warning\",\n                    showCancelButton: true,\n                    buttonsStyling: false,\n                    confirmButtonText: \"Yes, delete!\",\n                    cancelButtonText: \"No, cancel\",\n                    customClass: {\n                        confirmButton: \"btn fw-bold btn-danger\",\n                        cancelButton: \"btn fw-bold btn-active-light-primary\"\n                    }\n                }).then(function (result) {\n                    if (result.value) {\n                        // Perform AJAX request to delete the record\n                        $.ajax({\n                            url: '/Rental/Motorcycles/Delete/',\n                            type: 'POST',\n                            data: {\n                                __RequestVerificationToken: $('input[name=\"__RequestVerificationToken\"]').val(),\n                                id: id\n                            },\n                            success: function () {\n                                Swal.fire({\n                                    text: \"You have deleted \" + licensePlate + \"!.\",\n                                    icon: \"success\",\n                                    buttonsStyling: false,\n                                    confirmButtonText: \"Ok, got it!\",\n                                    customClass: {\n                                        confirmButton: \"btn fw-bold btn-primary\",\n                                    }\n                                }).then(function () {\n                                    // Remove current row\n                                    datatable.row($(parent)).remove().draw();\n                                });\n                            },\n                            error: function () {\n                                Swal.fire({\n                                    text: licensePlate + \" was not deleted.\",\n                                    icon: \"error\",\n                                    buttonsStyling: false,\n                                    confirmButtonText: \"Ok, got it!\",\n                                    customClass: {\n                                        confirmButton: \"btn fw-bold btn-primary\",\n                                    }\n                                });\n                            }\n                        });\n                    } else if (result.dismiss === 'cancel') {\n                        Swal.fire({\n                            text: licensePlate + \" was not deleted.\",\n                            icon: \"error\",\n                            buttonsStyling: false,\n                            confirmButtonText: \"Ok, got it!\",\n                            customClass: {\n                                confirmButton: \"btn fw-bold btn-primary\",\n                            }\n                        });\n                    }\n                });\n            })\n        });\n    }\n    \n    return {\n        // Public functions  \n        init: function () {\n            if (!table) {\n                return;\n            }\n\n            initUserTable();\n            handleSearchDatatable();\n            handleDeleteRows();\n        }\n    }\n}();\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTUsersList.init();\n});\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/rental/motorcycles/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/rental/motorcycles/index.js"]();
/******/ 	
/******/ })()
;