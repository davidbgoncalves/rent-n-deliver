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

/***/ "../src/demo1/js/custom/apps/customers/update.js":
/*!*******************************************************!*\
  !*** ../src/demo1/js/custom/apps/customers/update.js ***!
  \*******************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTModalUpdateCustomer = function () {\n    var element;\n    var submitButton;\n    var cancelButton;\n    var closeButton;\n    var form;\n    var modal;\n\n    // Init form inputs\n    var initForm = function () {\n        // Action buttons\n        submitButton.addEventListener('click', function (e) {\n            // Prevent default button action\n            e.preventDefault();\n\n            // Show loading indication\n            submitButton.setAttribute('data-kt-indicator', 'on');\n\n            // Simulate form submission\n            setTimeout(function () {\n                // Simulate form submission\n                submitButton.removeAttribute('data-kt-indicator');\n\n                // Show popup confirmation \n                Swal.fire({\n                    text: \"Form has been successfully submitted!\",\n                    icon: \"success\",\n                    buttonsStyling: false,\n                    confirmButtonText: \"Ok, got it!\",\n                    customClass: {\n                        confirmButton: \"btn btn-primary\"\n                    }\n                }).then(function (result) {\n                    if (result.isConfirmed) {\n                        modal.hide();\n                    }\n                });\n\n                //form.submit(); // Submit form\n            }, 2000);\n        });\n\n        cancelButton.addEventListener('click', function (e) {\n            e.preventDefault();\n\n            Swal.fire({\n                text: \"Are you sure you would like to cancel?\",\n                icon: \"warning\",\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: \"Yes, cancel it!\",\n                cancelButtonText: \"No, return\",\n                customClass: {\n                    confirmButton: \"btn btn-primary\",\n                    cancelButton: \"btn btn-active-light\"\n                }\n            }).then(function (result) {\n                if (result.value) {\n                    form.reset(); // Reset form\t\n                    modal.hide(); // Hide modal\t\t\t\t\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: \"Your form has not been cancelled!.\",\n                        icon: \"error\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn btn-primary\",\n                        }\n                    });\n                }\n            });\n        });\n\n        closeButton.addEventListener('click', function (e) {\n            e.preventDefault();\n\n            Swal.fire({\n                text: \"Are you sure you would like to cancel?\",\n                icon: \"warning\",\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: \"Yes, cancel it!\",\n                cancelButtonText: \"No, return\",\n                customClass: {\n                    confirmButton: \"btn btn-primary\",\n                    cancelButton: \"btn btn-active-light\"\n                }\n            }).then(function (result) {\n                if (result.value) {\n                    form.reset(); // Reset form\t\n                    modal.hide(); // Hide modal\t\t\t\t\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: \"Your form has not been cancelled!.\",\n                        icon: \"error\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn btn-primary\",\n                        }\n                    });\n                }\n            });\n        });\n    }\n\n    return {\n        // Public functions\n        init: function () {\n            // Elements\n            element = document.querySelector('#kt_modal_update_customer');\n            modal = new bootstrap.Modal(element);\n\n            form = element.querySelector('#kt_modal_update_customer_form');\n            submitButton = form.querySelector('#kt_modal_update_customer_submit');\n            cancelButton = form.querySelector('#kt_modal_update_customer_cancel');\n            closeButton = element.querySelector('#kt_modal_update_customer_close');\n\n            initForm();\n        }\n    };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTModalUpdateCustomer.init();\n});\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/customers/update.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/customers/update.js"]();
/******/ 	
/******/ })()
;