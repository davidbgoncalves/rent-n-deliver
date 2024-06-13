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

/***/ "../src/demo1/js/custom/account/settings/deactivate-account.js":
/*!*********************************************************************!*\
  !*** ../src/demo1/js/custom/account/settings/deactivate-account.js ***!
  \*********************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTAccountSettingsDeactivateAccount = function () {\n    // Private variables\n    var form;\n    var validation;\n    var submitButton;\n\n    // Private functions\n    var initValidation = function () {\n        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n        validation = FormValidation.formValidation(\n            form,\n            {\n                fields: {\n                    deactivate: {\n                        validators: {\n                            notEmpty: {\n                                message: 'Please check the box to deactivate your account'\n                            }\n                        }\n                    }\n                },\n                plugins: {\n                    trigger: new FormValidation.plugins.Trigger(),\n                    submitButton: new FormValidation.plugins.SubmitButton(),\n                    //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation\n                    bootstrap: new FormValidation.plugins.Bootstrap5({\n                        rowSelector: '.fv-row',\n                        eleInvalidClass: '',\n                        eleValidClass: ''\n                    })\n                }\n            }\n        );\n    }\n\n    var handleForm = function () {\n        submitButton.addEventListener('click', function (e) {\n            e.preventDefault();\n\n            validation.validate().then(function (status) {\n                if (status == 'Valid') {\n\n                    swal.fire({\n                        text: \"Are you sure you would like to deactivate your account?\",\n                        icon: \"warning\",\n                        buttonsStyling: false,\n                        showDenyButton: true,\n                        confirmButtonText: \"Yes\",\n                        denyButtonText: 'No',\n                        customClass: {\n                            confirmButton: \"btn btn-light-primary\",\n                            denyButton: \"btn btn-danger\"\n                        }\n                    }).then((result) => {\n                        if (result.isConfirmed) {\n                            Swal.fire({\n                                text: 'Your account has been deactivated.', \n                                icon: 'success',\n                                confirmButtonText: \"Ok\",\n                                buttonsStyling: false,\n                                customClass: {\n                                    confirmButton: \"btn btn-light-primary\"\n                                }\n                            })\n                        } else if (result.isDenied) {\n                            Swal.fire({\n                                text: 'Account not deactivated.', \n                                icon: 'info',\n                                confirmButtonText: \"Ok\",\n                                buttonsStyling: false,\n                                customClass: {\n                                    confirmButton: \"btn btn-light-primary\"\n                                }\n                            })\n                        }\n                    });\n\n                } else {\n                    swal.fire({\n                        text: \"Sorry, looks like there are some errors detected, please try again.\",\n                        icon: \"error\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn btn-light-primary\"\n                        }\n                    });\n                }\n            });\n        });\n    }\n\n    // Public methods\n    return {\n        init: function () {\n            form = document.querySelector('#kt_account_deactivate_form');\n\n            if (!form) {\n                return;\n            }\n            \n            submitButton = document.querySelector('#kt_account_deactivate_account_submit');\n\n            initValidation();\n            handleForm();\n        }\n    }\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function() {\n    KTAccountSettingsDeactivateAccount.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/account/settings/deactivate-account.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/account/settings/deactivate-account.js"]();
/******/ 	
/******/ })()
;