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

/***/ "../src/demo1/js/custom/apps/ecommerce/customers/details/update-profile.js":
/*!*********************************************************************************!*\
  !*** ../src/demo1/js/custom/apps/ecommerce/customers/details/update-profile.js ***!
  \*********************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTEcommerceUpdateProfile = function () {\n    var submitButton;\n    var validator;\n    var form;\n\n    // Init form inputs\n    var handleForm = function () {\n        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n\t\tvalidator = FormValidation.formValidation(\n\t\t\tform,\n\t\t\t{\n\t\t\t\tfields: {\n                    'name': {\n\t\t\t\t\t\tvalidators: {\n\t\t\t\t\t\t\tnotEmpty: {\n\t\t\t\t\t\t\t\tmessage: 'Name is required'\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\t'gen_email': {\n\t\t\t\t\t\tvalidators: {\n\t\t\t\t\t\t\tnotEmpty: {\n\t\t\t\t\t\t\t\tmessage: 'General Email is required'\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tplugins: {\n\t\t\t\t\ttrigger: new FormValidation.plugins.Trigger(),\n\t\t\t\t\tbootstrap: new FormValidation.plugins.Bootstrap5({\n\t\t\t\t\t\trowSelector: '.fv-row',\n                        eleInvalidClass: '',\n                        eleValidClass: ''\n\t\t\t\t\t})\n\t\t\t\t}\n\t\t\t}\n\t\t);\n\n\t\t// Action buttons\n\t\tsubmitButton.addEventListener('click', function (e) {\n\t\t\te.preventDefault();\n\n\t\t\t// Validate form before submit\n\t\t\tif (validator) {\n\t\t\t\tvalidator.validate().then(function (status) {\n\t\t\t\t\tconsole.log('validated!');\n\n\t\t\t\t\tif (status == 'Valid') {\n\t\t\t\t\t\tsubmitButton.setAttribute('data-kt-indicator', 'on');\n\n\t\t\t\t\t\t// Disable submit button whilst loading\n\t\t\t\t\t\tsubmitButton.disabled = true;\n\n\t\t\t\t\t\tsetTimeout(function() {\n\t\t\t\t\t\t\tsubmitButton.removeAttribute('data-kt-indicator');\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\tSwal.fire({\n\t\t\t\t\t\t\t\ttext: \"Your profile has been saved!\",\n\t\t\t\t\t\t\t\ticon: \"success\",\n\t\t\t\t\t\t\t\tbuttonsStyling: false,\n\t\t\t\t\t\t\t\tconfirmButtonText: \"Ok, got it!\",\n\t\t\t\t\t\t\t\tcustomClass: {\n\t\t\t\t\t\t\t\t\tconfirmButton: \"btn btn-primary\"\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t}).then(function (result) {\n\t\t\t\t\t\t\t\tif (result.isConfirmed) {\n\t\t\t\t\t\t\t\t\t// Enable submit button after loading\n\t\t\t\t\t\t\t\t\tsubmitButton.disabled = false;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t});\t\t\t\t\t\t\t\n\t\t\t\t\t\t}, 2000);   \t\t\t\t\t\t\n\t\t\t\t\t} else {\n\t\t\t\t\t\tSwal.fire({\n\t\t\t\t\t\t\ttext: \"Sorry, looks like there are some errors detected, please try again.\",\n\t\t\t\t\t\t\ticon: \"error\",\n\t\t\t\t\t\t\tbuttonsStyling: false,\n\t\t\t\t\t\t\tconfirmButtonText: \"Ok, got it!\",\n\t\t\t\t\t\t\tcustomClass: {\n\t\t\t\t\t\t\t\tconfirmButton: \"btn btn-primary\"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\n\t\t});\n    }\n\n    return {\n        // Public functions\n        init: function () {\n            // Elements\n            form = document.querySelector('#kt_ecommerce_customer_profile');\n            submitButton = form.querySelector('#kt_ecommerce_customer_profile_submit');\n\n            handleForm();\n        }\n    };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n\tKTEcommerceUpdateProfile.init();\n});\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/ecommerce/customers/details/update-profile.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/ecommerce/customers/details/update-profile.js"]();
/******/ 	
/******/ })()
;