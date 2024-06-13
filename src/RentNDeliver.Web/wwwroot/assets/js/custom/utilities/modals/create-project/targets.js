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

/***/ "../src/demo1/js/custom/utilities/modals/create-project/targets.js":
/*!*************************************************************************!*\
  !*** ../src/demo1/js/custom/utilities/modals/create-project/targets.js ***!
  \*************************************************************************/
/***/ ((module) => {

eval("\n\n// Class definition\nvar KTModalCreateProjectTargets = function () {\n\t// Variables\n\tvar nextButton;\n\tvar previousButton;\n\tvar validator;\n\tvar form;\n\tvar stepper;\n\n\t// Private functions\n\tvar initForm = function() {\n\t\t// Tags. For more info, please visit the official plugin site: https://yaireo.github.io/tagify/\n\t\tvar tags = new Tagify(form.querySelector('[name=\"target_tags\"]'), {\n\t\t\twhitelist: [\"Important\", \"Urgent\", \"High\", \"Medium\", \"Low\"],\n\t\t\tmaxTags: 5,\n\t\t\tdropdown: {\n\t\t\t\tmaxItems: 10,           // <- mixumum allowed rendered suggestions\n\t\t\t\tenabled: 0,             // <- show suggestions on focus\n\t\t\t\tcloseOnSelect: false    // <- do not hide the suggestions dropdown once an item has been selected\n\t\t\t}\n\t\t});\n\t\ttags.on(\"change\", function(){\n\t\t\t// Revalidate the field when an option is chosen\n            validator.revalidateField('tags');\n\t\t});\n\n\t\t// Due date. For more info, please visit the official plugin site: https://flatpickr.js.org/\n\t\tvar dueDate = $(form.querySelector('[name=\"target_due_date\"]'));\n\t\tdueDate.flatpickr({\n\t\t\tenableTime: true,\n\t\t\tdateFormat: \"d, M Y, H:i\",\n\t\t});\n\n\t\t// Expiry year. For more info, plase visit the official plugin site: https://select2.org/\n        $(form.querySelector('[name=\"target_assign\"]')).on('change', function() {\n            // Revalidate the field when an option is chosen\n            validator.revalidateField('target_assign');\n        });\n\t}\n\n\tvar initValidation = function() {\n\t\t// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n\t\tvalidator = FormValidation.formValidation(\n\t\t\tform,\n\t\t\t{\n\t\t\t\tfields: {\n\t\t\t\t\t'target_title': {\n\t\t\t\t\t\tvalidators: {\n\t\t\t\t\t\t\tnotEmpty: {\n\t\t\t\t\t\t\t\tmessage: 'Target title is required'\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\t'target_assign': {\n\t\t\t\t\t\tvalidators: {\n\t\t\t\t\t\t\tnotEmpty: {\n\t\t\t\t\t\t\t\tmessage: 'Customer is required'\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\t'target_due_date': {\n\t\t\t\t\t\tvalidators: {\n\t\t\t\t\t\t\tnotEmpty: {\n\t\t\t\t\t\t\t\tmessage: 'Due date is required'\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\t'target_tags': {\n\t\t\t\t\t\tvalidators: {\n\t\t\t\t\t\t\tnotEmpty: {\n\t\t\t\t\t\t\t\tmessage: 'Target tags are required'\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\t'target_allow': {\n\t\t\t\t\t\tvalidators: {\n\t\t\t\t\t\t\tnotEmpty: {\n\t\t\t\t\t\t\t\tmessage: 'Allowing target is required'\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\t'target_notifications[]': {\n\t\t\t\t\t\tvalidators: {\n\t\t\t\t\t\t\tnotEmpty: {\n\t\t\t\t\t\t\t\tmessage: 'Notifications are required'\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\t\n\t\t\t\tplugins: {\n\t\t\t\t\ttrigger: new FormValidation.plugins.Trigger(),\n\t\t\t\t\tbootstrap: new FormValidation.plugins.Bootstrap5({\n\t\t\t\t\t\trowSelector: '.fv-row',\n                        eleInvalidClass: '',\n                        eleValidClass: ''\n\t\t\t\t\t})\n\t\t\t\t}\n\t\t\t}\n\t\t);\n\t}\n\n\tvar handleForm = function() {\n\t\tnextButton.addEventListener('click', function (e) {\n\t\t\t// Prevent default button action\n\t\t\te.preventDefault();\n\n\t\t\t// Disable button to avoid multiple click \n\t\t\tnextButton.disabled = true;\n\n\t\t\t// Validate form before submit\n\t\t\tif (validator) {\n\t\t\t\tvalidator.validate().then(function (status) {\n\t\t\t\t\tconsole.log('validated!');\n\n\t\t\t\t\tif (status == 'Valid') {\n\t\t\t\t\t\t// Show loading indication\n\t\t\t\t\t\tnextButton.setAttribute('data-kt-indicator', 'on');\n\n\t\t\t\t\t\t// Simulate form submission\n\t\t\t\t\t\tsetTimeout(function() {\n\t\t\t\t\t\t\t// Simulate form submission\n\t\t\t\t\t\t\tnextButton.removeAttribute('data-kt-indicator');\n\n\t\t\t\t\t\t\t// Enable button\n\t\t\t\t\t\t\tnextButton.disabled = false;\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t// Go to next step\n\t\t\t\t\t\t\tstepper.goNext();\n\t\t\t\t\t\t}, 1500);   \t\t\t\t\t\t\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// Enable button\n\t\t\t\t\t\tnextButton.disabled = false;\n\t\t\t\t\t\t\n\t\t\t\t\t\t// Show popup warning. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\t\t\t\t\t\tSwal.fire({\n\t\t\t\t\t\t\ttext: \"Sorry, looks like there are some errors detected, please try again.\",\n\t\t\t\t\t\t\ticon: \"error\",\n\t\t\t\t\t\t\tbuttonsStyling: false,\n\t\t\t\t\t\t\tconfirmButtonText: \"Ok, got it!\",\n\t\t\t\t\t\t\tcustomClass: {\n\t\t\t\t\t\t\t\tconfirmButton: \"btn btn-primary\"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t}\t\t\t\n\t\t});\n\n\t\tpreviousButton.addEventListener('click', function () {\n\t\t\t// Go to previous step\n\t\t\tstepper.goPrevious();\n\t\t});\n\t}\n\n\treturn {\n\t\t// Public functions\n\t\tinit: function () {\n\t\t\tform = KTModalCreateProject.getForm();\n\t\t\tstepper = KTModalCreateProject.getStepperObj();\n\t\t\tnextButton = KTModalCreateProject.getStepper().querySelector('[data-kt-element=\"targets-next\"]');\n\t\t\tpreviousButton = KTModalCreateProject.getStepper().querySelector('[data-kt-element=\"targets-previous\"]');\n\n\t\t\tinitForm();\n\t\t\tinitValidation();\n\t\t\thandleForm();\n\t\t}\n\t};\n}();\n\n// Webpack support\nif ( true && typeof module.exports !== 'undefined') {\n\twindow.KTModalCreateProjectTargets = module.exports = KTModalCreateProjectTargets;\n}\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/utilities/modals/create-project/targets.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("../src/demo1/js/custom/utilities/modals/create-project/targets.js");
/******/ 	
/******/ })()
;