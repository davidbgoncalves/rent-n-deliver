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

/***/ "../src/demo1/js/custom/apps/projects/settings/settings.js":
/*!*****************************************************************!*\
  !*** ../src/demo1/js/custom/apps/projects/settings/settings.js ***!
  \*****************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTProjectSettings = function () {\n\n    // Private functions\n    var handleForm = function () {\n        // Init Datepicker --- For more info, please check Flatpickr's official documentation: https://flatpickr.js.org/\n        $(\"#kt_datepicker_1\").flatpickr();\n\n        // Form validation\n        var validation;\n        var _form = document.getElementById('kt_project_settings_form');\n        var submitButton = _form.querySelector('#kt_project_settings_submit');\n\n        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n        validation = FormValidation.formValidation(\n            _form,\n            {\n                fields: {\n                    name: {\n                        validators: {\n                            notEmpty: {\n                                message: 'Project name is required'\n                            }\n                        }\n                    },\n                    type: {\n                        validators: {\n                            notEmpty: {\n                                message: 'Project type is required'\n                            }\n                        }\n                    },\n                    description: {\n                        validators: {\n                            notEmpty: {\n                                message: 'Project Description is required'\n                            }\n                        }\n                    },\n                    date: {\n                        validators: {\n                            notEmpty: {\n                                message: 'Due Date is required'\n                            }\n                        }\n                    },\n                },\n                plugins: {\n                    trigger: new FormValidation.plugins.Trigger(),\n                    submitButton: new FormValidation.plugins.SubmitButton(),\n                    //defaultSubmit: new FormValidation.plugins.DefaultSubmit(), // Uncomment this line to enable normal button submit after form validation\n                    bootstrap: new FormValidation.plugins.Bootstrap5({\n                        rowSelector: '.fv-row'\n                    })\n                }\n            }\n        );\n\n        submitButton.addEventListener('click', function (e) {\n            e.preventDefault();\n\n            validation.validate().then(function (status) {\n                if (status == 'Valid') {\n\n                    swal.fire({\n                        text: \"Thank you! You've updated your project settings\",\n                        icon: \"success\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn fw-bold btn-light-primary\"\n                        }\n                    });\n\n                } else {\n                    swal.fire({\n                        text: \"Sorry, looks like there are some errors detected, please try again.\",\n                        icon: \"error\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn fw-bold btn-light-primary\"\n                        }\n                    });\n                }\n            });\n        });\n    }\n\n    // Public methods\n    return {\n        init: function () {\n            handleForm();\n        }\n    }\n}();\n\n\n// On document ready\nKTUtil.onDOMContentLoaded(function() {\n    KTProjectSettings.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/projects/settings/settings.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/projects/settings/settings.js"]();
/******/ 	
/******/ })()
;