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

/***/ "../src/demo1/js/custom/apps/ecommerce/customers/details/update-address.js":
/*!*********************************************************************************!*\
  !*** ../src/demo1/js/custom/apps/ecommerce/customers/details/update-address.js ***!
  \*********************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTModalUpdateAddress = function () {\n    var element;\n    var submitButton;\n    var cancelButton;\n    var closeButton;\n    var form;\n    var modal;\n    var validator;\n\n    // Init form inputs\n    var initForm = function () {\n        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n        validator = FormValidation.formValidation(\n            form,\n            {\n                fields: {\n                    'name': {\n                        validators: {\n                            notEmpty: {\n                                message: 'Address name is required'\n                            }\n                        }\n                    },\n                    'country': {\n                        validators: {\n                            notEmpty: {\n                                message: 'Country is required'\n                            }\n                        }\n                    },\n                    'address1': {\n                        validators: {\n                            notEmpty: {\n                                message: 'Address 1 is required'\n                            }\n                        }\n                    },\n                    'city': {\n                        validators: {\n                            notEmpty: {\n                                message: 'City is required'\n                            }\n                        }\n                    },\n                    'state': {\n                        validators: {\n                            notEmpty: {\n                                message: 'State is required'\n                            }\n                        }\n                    },\n                    'postcode': {\n                        validators: {\n                            notEmpty: {\n                                message: 'Postcode is required'\n                            }\n                        }\n                    }\n                },\n                plugins: {\n                    trigger: new FormValidation.plugins.Trigger(),\n                    bootstrap: new FormValidation.plugins.Bootstrap5({\n                        rowSelector: '.fv-row',\n                        eleInvalidClass: '',\n                        eleValidClass: ''\n                    })\n                }\n            }\n        );\n\n        // Revalidate country field. For more info, plase visit the official plugin site: https://select2.org/\n        $(form.querySelector('[name=\"country\"]')).on('change', function () {\n            // Revalidate the field when an option is chosen\n            validator.revalidateField('country');\n        });\n\n        // Action buttons\n        submitButton.addEventListener('click', function (e) {\n            // Prevent default button action\n            e.preventDefault();\n\n            // Validate form before submit\n\t\t\tif (validator) {\n\t\t\t\tvalidator.validate().then(function (status) {\n\t\t\t\t\tconsole.log('validated!');\n\n\t\t\t\t\tif (status == 'Valid') {\n\t\t\t\t\t\tsubmitButton.setAttribute('data-kt-indicator', 'on');\n\n\t\t\t\t\t\t// Disable submit button whilst loading\n\t\t\t\t\t\tsubmitButton.disabled = true;\n\n\t\t\t\t\t\tsetTimeout(function() {\n\t\t\t\t\t\t\tsubmitButton.removeAttribute('data-kt-indicator');\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tSwal.fire({\n\t\t\t\t\t\t\t\ttext: \"Form has been successfully submitted!\",\n\t\t\t\t\t\t\t\ticon: \"success\",\n\t\t\t\t\t\t\t\tbuttonsStyling: false,\n\t\t\t\t\t\t\t\tconfirmButtonText: \"Ok, got it!\",\n\t\t\t\t\t\t\t\tcustomClass: {\n\t\t\t\t\t\t\t\t\tconfirmButton: \"btn btn-primary\"\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}).then(function (result) {\n\t\t\t\t\t\t\t\tif (result.isConfirmed) {\n\t\t\t\t\t\t\t\t\t// Hide modal\n\t\t\t\t\t\t\t\t\tmodal.hide();\n\n\t\t\t\t\t\t\t\t\t// Enable submit button after loading\n\t\t\t\t\t\t\t\t\tsubmitButton.disabled = false;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\t\t\t\t\t\t\t\n\t\t\t\t\t\t}, 2000);   \t\t\t\t\t\t\n\t\t\t\t\t} else {\n\t\t\t\t\t\tSwal.fire({\n\t\t\t\t\t\t\ttext: \"Sorry, looks like there are some errors detected, please try again.\",\n\t\t\t\t\t\t\ticon: \"error\",\n\t\t\t\t\t\t\tbuttonsStyling: false,\n\t\t\t\t\t\t\tconfirmButtonText: \"Ok, got it!\",\n\t\t\t\t\t\t\tcustomClass: {\n\t\t\t\t\t\t\t\tconfirmButton: \"btn btn-primary\"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n        });\n\n        cancelButton.addEventListener('click', function (e) {\n            e.preventDefault();\n\n            Swal.fire({\n                text: \"Are you sure you would like to cancel?\",\n                icon: \"warning\",\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: \"Yes, cancel it!\",\n                cancelButtonText: \"No, return\",\n                customClass: {\n                    confirmButton: \"btn btn-primary\",\n                    cancelButton: \"btn btn-active-light\"\n                }\n            }).then(function (result) {\n                if (result.value) {\n                    form.reset(); // Reset form\t\n                    modal.hide(); // Hide modal\t\t\t\t\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: \"Your form has not been cancelled!.\",\n                        icon: \"error\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn btn-primary\",\n                        }\n                    });\n                }\n            });\n        });\n\n        closeButton.addEventListener('click', function (e) {\n            e.preventDefault();\n\n            Swal.fire({\n                text: \"Are you sure you would like to cancel?\",\n                icon: \"warning\",\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: \"Yes, cancel it!\",\n                cancelButtonText: \"No, return\",\n                customClass: {\n                    confirmButton: \"btn btn-primary\",\n                    cancelButton: \"btn btn-active-light\"\n                }\n            }).then(function (result) {\n                if (result.value) {\n                    form.reset(); // Reset form\t\n                    modal.hide(); // Hide modal\t\t\t\t\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: \"Your form has not been cancelled!.\",\n                        icon: \"error\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn btn-primary\",\n                        }\n                    });\n                }\n            });\n        });\n    }\n\n    return {\n        // Public functions\n        init: function () {\n            // Elements\n            element = document.querySelector('#kt_modal_update_address');\n            modal = new bootstrap.Modal(element);\n\n            form = element.querySelector('#kt_modal_update_address_form');\n            submitButton = form.querySelector('#kt_modal_update_address_submit');\n            cancelButton = form.querySelector('#kt_modal_update_address_cancel');\n            closeButton = element.querySelector('#kt_modal_update_address_close');\n\n            initForm();\n        }\n    };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTModalUpdateAddress.init();\n});\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/ecommerce/customers/details/update-address.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/ecommerce/customers/details/update-address.js"]();
/******/ 	
/******/ })()
;