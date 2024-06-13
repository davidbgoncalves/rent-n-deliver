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

/***/ "../src/demo1/js/custom/apps/customers/view/adjust-balance.js":
/*!********************************************************************!*\
  !*** ../src/demo1/js/custom/apps/customers/view/adjust-balance.js ***!
  \********************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTModalAdjustBalance = function () {\n    var element;\n    var submitButton;\n    var cancelButton;\n    var closeButton;\n    var validator;\n    var maskInput;\n    var newBalance;\n    var form;\n    var modal;\n\n    // Init form inputs\n    var initForm = function () {\n        // Init inputmask plugin --- For more info please refer to the official documentation here: https://github.com/RobinHerbots/Inputmask\n        Inputmask(\"US$ 9,999,999.99\", {\n            \"numericInput\": true\n        }).mask(\"#kt_modal_inputmask\");\n    }\n\n    var handleBalanceCalculator = function () {\n        // Select elements\n        const currentBalance = element.querySelector('[kt-modal-adjust-balance=\"current_balance\"]');\n        newBalance = element.querySelector('[kt-modal-adjust-balance=\"new_balance\"]');\n        maskInput = document.getElementById('kt_modal_inputmask');\n\n        // Get current balance value\n        const isNegative = currentBalance.innerHTML.includes('-');\n        let currentValue = parseFloat(currentBalance.innerHTML.replace(/[^0-9.]/g, '').replace(',', ''));\n        currentValue = isNegative ? currentValue * -1 : currentValue; \n\n        // On change event for inputmask\n        let maskValue;\n        maskInput.addEventListener('focusout', function (e) {\n            // Get inputmask value on change\n            maskValue = parseFloat(e.target.value.replace(/[^0-9.]/g, '').replace(',', ''));\n\n            // Set mask value as 0 when NaN detected\n            if(isNaN(maskValue)){\n                maskValue = 0;\n            }\n\n            // Calculate & set new balance value\n            newBalance.innerHTML = 'US$ ' + (maskValue + currentValue).toFixed(2).replace(/\\d(?=(\\d{3})+\\.)/g, '$&,');\n        });\n    }\n\n    // Handle form validation and submittion\n    var handleForm = function () {\n        // Stepper custom navigation\n\n        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n        validator = FormValidation.formValidation(\n            form,\n            {\n                fields: {\n                    'adjustment': {\n                        validators: {\n                            notEmpty: {\n                                message: 'Adjustment type is required'\n                            }\n                        }\n                    },\n                    'amount': {\n                        validators: {\n                            notEmpty: {\n                                message: 'Amount is required'\n                            }\n                        }\n                    }\n                },\n\n                plugins: {\n                    trigger: new FormValidation.plugins.Trigger(),\n                    bootstrap: new FormValidation.plugins.Bootstrap5({\n                        rowSelector: '.fv-row',\n                        eleInvalidClass: '',\n                        eleValidClass: ''\n                    })\n                }\n            }\n        );\n\n        // Revalidate country field. For more info, plase visit the official plugin site: https://select2.org/\n        $(form.querySelector('[name=\"adjustment\"]')).on('change', function () {\n            // Revalidate the field when an option is chosen\n            validator.revalidateField('adjustment');\n        });\n\n        // Action buttons\n        submitButton.addEventListener('click', function (e) {\n            // Prevent default button action\n            e.preventDefault();\n\n            // Validate form before submit\n            if (validator) {\n                validator.validate().then(function (status) {\n                    console.log('validated!');\n\n                    if (status == 'Valid') {\n                        // Show loading indication\n                        submitButton.setAttribute('data-kt-indicator', 'on');\n\n                        // Disable submit button whilst loading\n                        submitButton.disabled = true;\n\n                        // Simulate form submission\n                        setTimeout(function () {\n                            // Simulate form submission\n                            submitButton.removeAttribute('data-kt-indicator');\n\n                            // Show popup confirmation \n                            Swal.fire({\n                                text: \"Form has been successfully submitted!\",\n                                icon: \"success\",\n                                buttonsStyling: false,\n                                confirmButtonText: \"Ok, got it!\",\n                                customClass: {\n                                    confirmButton: \"btn btn-primary\"\n                                }\n                            }).then(function (result) {\n                                if (result.isConfirmed) {\n                                    modal.hide();\n\n                                    // Enable submit button after loading\n                                    submitButton.disabled = false;\n\n                                    // Reset form for demo purposes only\n                                    form.reset();\n                                    newBalance.innerHTML = \"--\";\n                                }\n                            });\n\n                            //form.submit(); // Submit form\n                        }, 2000);\n                    } else {\n                        // Show popup warning \n                        Swal.fire({\n                            text: \"Sorry, looks like there are some errors detected, please try again.\",\n                            icon: \"error\",\n                            buttonsStyling: false,\n                            confirmButtonText: \"Ok, got it!\",\n                            customClass: {\n                                confirmButton: \"btn btn-primary\"\n                            }\n                        });\n                    }\n                });\n            }\n        });\n\n        cancelButton.addEventListener('click', function (e) {\n            e.preventDefault();\n\n            Swal.fire({\n                text: \"Are you sure you would like to cancel?\",\n                icon: \"warning\",\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: \"Yes, cancel it!\",\n                cancelButtonText: \"No, return\",\n                customClass: {\n                    confirmButton: \"btn btn-primary\",\n                    cancelButton: \"btn btn-active-light\"\n                }\n            }).then(function (result) {\n                if (result.value) {\n                    form.reset(); // Reset form\t\n                    modal.hide(); // Hide modal\t\t\t\t\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: \"Your form has not been cancelled!.\",\n                        icon: \"error\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn btn-primary\",\n                        }\n                    });\n                }\n            });\n        });\n\n        closeButton.addEventListener('click', function (e) {\n            e.preventDefault();\n\n            Swal.fire({\n                text: \"Are you sure you would like to cancel?\",\n                icon: \"warning\",\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: \"Yes, cancel it!\",\n                cancelButtonText: \"No, return\",\n                customClass: {\n                    confirmButton: \"btn btn-primary\",\n                    cancelButton: \"btn btn-active-light\"\n                }\n            }).then(function (result) {\n                if (result.value) {\n                    form.reset(); // Reset form\t\n                    modal.hide(); // Hide modal\t\t\t\t\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: \"Your form has not been cancelled!.\",\n                        icon: \"error\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn btn-primary\",\n                        }\n                    });\n                }\n            });\n        });\n    }\n    \n    return {\n        // Public functions\n        init: function () {\n            // Elements\n            element = document.querySelector('#kt_modal_adjust_balance');\n            modal = new bootstrap.Modal(element);\n\n            form = element.querySelector('#kt_modal_adjust_balance_form');\n            submitButton = form.querySelector('#kt_modal_adjust_balance_submit');\n            cancelButton = form.querySelector('#kt_modal_adjust_balance_cancel');\n            closeButton = element.querySelector('#kt_modal_adjust_balance_close');\n\n            initForm();\n            handleBalanceCalculator();\n            handleForm();\n        }\n    };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTModalAdjustBalance.init();\n});\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/customers/view/adjust-balance.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/customers/view/adjust-balance.js"]();
/******/ 	
/******/ })()
;