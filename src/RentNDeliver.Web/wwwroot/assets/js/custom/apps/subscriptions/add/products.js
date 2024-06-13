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

/***/ "../src/demo1/js/custom/apps/subscriptions/add/products.js":
/*!*****************************************************************!*\
  !*** ../src/demo1/js/custom/apps/subscriptions/add/products.js ***!
  \*****************************************************************/
/***/ (() => {

eval("\n\nvar KTSubscriptionsProducts = function () {\n    // Shared variables\n    var table;\n    var datatable;\n    var modalEl;\n    var modal;\n\n    var initDatatable = function() {\n        // Init datatable --- more info on datatables: https://datatables.net/manual/        \n        datatable = $(table).DataTable({\n            \"info\": false,\n            'order': [],\n            'ordering': false,\n            'paging': false,\n            \"lengthChange\": false\n        });\n    }\n\n    // Delete product\n    var deleteProduct = function() {\n        KTUtil.on(table, '[data-kt-action=\"product_remove\"]', 'click', function(e) {\n            e.preventDefault();\n\n            // Select parent row\n            const parent = e.target.closest('tr');\n\n            // Get customer name\n            const productName = parent.querySelectorAll('td')[0].innerText;\n\n            // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n            Swal.fire({\n                text: \"Are you sure you want to delete \" + productName + \"?\",\n                icon: \"warning\",\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: \"Yes, delete!\",\n                cancelButtonText: \"No, cancel\",\n                customClass: {\n                    confirmButton: \"btn fw-bold btn-danger\",\n                    cancelButton: \"btn fw-bold btn-active-light-primary\"\n                }\n            }).then(function (result) {\n                if (result.value) {\n                    Swal.fire({\n                        text: \"You have deleted \" + productName + \"!.\",\n                        icon: \"success\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn fw-bold btn-primary\",\n                        }\n                    }).then(function () {\n                        // Remove current row\n                        datatable.row($(parent)).remove().draw();\n                    });\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: customerName + \" was not deleted.\",\n                        icon: \"error\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn fw-bold btn-primary\",\n                        }\n                    });\n                }\n            });\n        });\n    }\n\n    // Modal handlers\n    var addProduct = function() {\n        // Select modal buttons\n        const closeButton = modalEl.querySelector('#kt_modal_add_product_close');\n        const cancelButton = modalEl.querySelector('#kt_modal_add_product_cancel');\n        const submitButton = modalEl.querySelector('#kt_modal_add_product_submit');\n\n        // Cancel button action\n        cancelButton.addEventListener('click', function(e){\n            e.preventDefault();\n\n\t\t\tSwal.fire({\n\t\t\t\ttext: \"Are you sure you would like to cancel?\",\n\t\t\t\ticon: \"warning\",\n\t\t\t\tshowCancelButton: true,\n\t\t\t\tbuttonsStyling: false,\n\t\t\t\tconfirmButtonText: \"Yes, cancel it!\",\n\t\t\t\tcancelButtonText: \"No, return\",\n\t\t\t\tcustomClass: {\n\t\t\t\t\tconfirmButton: \"btn btn-primary\",\n\t\t\t\t\tcancelButton: \"btn btn-active-light\"\n\t\t\t\t}\n\t\t\t}).then(function (result) {\n\t\t\t\tif (result.value) {\n\t\t\t\t\tmodal.hide(); // Hide modal\t\t\t\t\n\t\t\t\t} else if (result.dismiss === 'cancel') {\n\t\t\t\t\tSwal.fire({\n\t\t\t\t\t\ttext: \"Your form has not been cancelled!.\",\n\t\t\t\t\t\ticon: \"error\",\n\t\t\t\t\t\tbuttonsStyling: false,\n\t\t\t\t\t\tconfirmButtonText: \"Ok, got it!\",\n\t\t\t\t\t\tcustomClass: {\n\t\t\t\t\t\t\tconfirmButton: \"btn btn-primary\",\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t});\n        });\n\n        // Add customer button handler\n        submitButton.addEventListener('click', function (e) {\n            e.preventDefault();\n\n            // Check all radio buttons\n            var radio = modalEl.querySelector('input[type=\"radio\"]:checked');            \n\n            // Define datatable row node\n            var rowNode;\n\n            if (radio && radio.checked === true) {\n                rowNode = datatable.row.add( [\n                    radio.getAttribute('data-kt-product-name'),\n                    '1',\n                    radio.getAttribute('data-kt-product-price') + ' / ' + radio.getAttribute('data-kt-product-frequency'),\n                    table.querySelector('tbody tr td:last-child').innerHTML\n                ]).draw().node();\n\n                // Add custom class to last column -- more info: https://datatables.net/forums/discussion/22341/row-add-cell-class\n                $( rowNode ).find('td').eq(3).addClass('text-end');\n            }           \n\n            modal.hide(); // Remove modal\n        });\n    }\n\n    return {\n        init: function () {\n            modalEl = document.getElementById('kt_modal_add_product');\n\n            // Select modal -- more info on Bootstrap modal: https://getbootstrap.com/docs/5.0/components/modal/\n            modal = new bootstrap.Modal(modalEl);\n\n            table = document.querySelector('#kt_subscription_products_table');\n\n            initDatatable();\n            deleteProduct();\n            addProduct();\n        }\n    }\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTSubscriptionsProducts.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/subscriptions/add/products.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/subscriptions/add/products.js"]();
/******/ 	
/******/ })()
;