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

/***/ "../src/demo1/js/custom/apps/customers/view/payment-method.js":
/*!********************************************************************!*\
  !*** ../src/demo1/js/custom/apps/customers/view/payment-method.js ***!
  \********************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTCustomerViewPaymentMethod = function () {\n\n    // Private functions\n    var initPaymentMethod = function () {\n        // Define variables\n        const table = document.getElementById('kt_customer_view_payment_method');\n        const tableRows = table.querySelectorAll('[ data-kt-customer-payment-method=\"row\"]');\n\n        tableRows.forEach(row => {\n            // Select delete button\n            const deleteButton = row.querySelector('[data-kt-customer-payment-method=\"delete\"]');\n\n            // Delete button action\n            deleteButton.addEventListener('click', e => {\n                e.preventDefault();\n\n                // Popup confirmation\n                Swal.fire({\n                    text: \"Are you sure you would like to delete this card?\",\n                    icon: \"warning\",\n                    showCancelButton: true,\n                    buttonsStyling: false,\n                    confirmButtonText: \"Yes, delete it!\",\n                    cancelButtonText: \"No, return\",\n                    customClass: {\n                        confirmButton: \"btn btn-primary\",\n                        cancelButton: \"btn btn-active-light\"\n                    }\n                }).then(function (result) {\n                    if (result.value) {\n                        row.remove();\n                        modal.hide(); // Hide modal\t\t\t\t\n                    } else if (result.dismiss === 'cancel') {\n                        Swal.fire({\n                            text: \"Your card was not deleted!.\",\n                            icon: \"error\",\n                            buttonsStyling: false,\n                            confirmButtonText: \"Ok, got it!\",\n                            customClass: {\n                                confirmButton: \"btn btn-primary\",\n                            }\n                        });\n                    }\n                });\n            });\n        });\n    }\n\n    // Handle set as primary button\n    const handlePrimaryButton = () => {\n        // Define variable\n        const button = document.querySelector('[data-kt-payment-mehtod-action=\"set_as_primary\"]');\n\n        button.addEventListener('click', e => {\n            e.preventDefault();\n\n            // Popup confirmation\n            Swal.fire({\n                text: \"Are you sure you would like to set this card as primary?\",\n                icon: \"warning\",\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: \"Yes, set it!\",\n                cancelButtonText: \"No, return\",\n                customClass: {\n                    confirmButton: \"btn btn-primary\",\n                    cancelButton: \"btn btn-active-light\"\n                }\n            }).then(function (result) {\n                if (result.value) {\n                    Swal.fire({\n                        text: \"Your card was set to primary!.\",\n                        icon: \"success\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn btn-primary\",\n                        }\n                    });\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: \"Your card was not set to primary!.\",\n                        icon: \"error\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn btn-primary\",\n                        }\n                    });\n                }\n            });\n        });\n    };\n\n    // Public methods\n    return {\n        init: function () {\n            initPaymentMethod();\n            handlePrimaryButton();\n        }\n    }\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTCustomerViewPaymentMethod.init();\n});\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/customers/view/payment-method.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/customers/view/payment-method.js"]();
/******/ 	
/******/ })()
;