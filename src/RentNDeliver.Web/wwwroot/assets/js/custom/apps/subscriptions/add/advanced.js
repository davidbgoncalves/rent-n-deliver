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

/***/ "../src/demo1/js/custom/apps/subscriptions/add/advanced.js":
/*!*****************************************************************!*\
  !*** ../src/demo1/js/custom/apps/subscriptions/add/advanced.js ***!
  \*****************************************************************/
/***/ (() => {

eval("\n\nvar KTSubscriptionsAdvanced = function () {\n    // Shared variables\n    var table;\n    var datatable;\n\n    var initCustomFieldsDatatable = function () {\n        // Define variables\n        const addButton = document.getElementById('kt_create_new_custom_fields_add');\n\n        // Duplicate input fields\n        const fieldName = table.querySelector('tbody tr td:first-child').innerHTML;\n        const fieldValue = table.querySelector('tbody tr td:nth-child(2)').innerHTML;\n        const deleteButton = table.querySelector('tbody tr td:last-child').innerHTML;\n\n        // Init datatable --- more info on datatables: https://datatables.net/manual/\n        datatable = $(table).DataTable({\n            \"info\": false,\n            'order': [],\n            'ordering': false,\n            'paging': false,\n            \"lengthChange\": false\n        });\n\n        // Define datatable row node\n        var rowNode;\n\n        // Handle add button\n        addButton.addEventListener('click', function (e) {\n            e.preventDefault();\n\n            rowNode = datatable.row.add([\n                fieldName,\n                fieldValue,\n                deleteButton\n            ]).draw().node();\n\n            // Add custom class to last column -- more info: https://datatables.net/forums/discussion/22341/row-add-cell-class\n            $(rowNode).find('td').eq(2).addClass('text-end');\n\n            // Re-calculate index\n            initCustomFieldRowIndex();\n        });\n    }\n\n    // Handle row index count\n    var initCustomFieldRowIndex = function() {\n        const tableRows = table.querySelectorAll('tbody tr');\n\n        tableRows.forEach((tr, index) => {\n            // add index number to input names & id\n            const fieldNameInput = tr.querySelector('td:first-child input');\n            const fieldValueInput = tr.querySelector('td:nth-child(2) input');\n            const fieldNameLabel = fieldNameInput.getAttribute('id');\n            const fieldValueLabel = fieldValueInput.getAttribute('id');\n\n            fieldNameInput.setAttribute('name', fieldNameLabel + '-' + index);\n            fieldValueInput.setAttribute('name', fieldValueLabel + '-' + index);\n        });\n    }\n\n    // Delete product\n    var deleteCustomField = function() {\n        KTUtil.on(table, '[data-kt-action=\"field_remove\"]', 'click', function(e) {\n            e.preventDefault();\n\n            // Select parent row\n            const parent = e.target.closest('tr');\n\n            // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n            Swal.fire({\n                text: \"Are you sure you want to delete this field ?\",\n                icon: \"warning\",\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: \"Yes, delete!\",\n                cancelButtonText: \"No, cancel\",\n                customClass: {\n                    confirmButton: \"btn fw-bold btn-danger\",\n                    cancelButton: \"btn fw-bold btn-active-light-primary\"\n                }\n            }).then(function (result) {\n                if (result.value) {\n                    Swal.fire({\n                        text: \"You have deleted it!.\",\n                        icon: \"success\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn fw-bold btn-primary\",\n                        }\n                    }).then(function () {\n                        // Remove current row\n                        datatable.row($(parent)).remove().draw();\n                    });\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: \"It was not deleted.\",\n                        icon: \"error\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn fw-bold btn-primary\",\n                        }\n                    })\n                }\n            });\n        });\n    }\n\n    return {\n        init: function () {\n            table = document.getElementById('kt_create_new_custom_fields');\n\n            initCustomFieldsDatatable();\n            initCustomFieldRowIndex();            \n            deleteCustomField();\n        }\n    }\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTSubscriptionsAdvanced.init();\n});\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/subscriptions/add/advanced.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/subscriptions/add/advanced.js"]();
/******/ 	
/******/ })()
;