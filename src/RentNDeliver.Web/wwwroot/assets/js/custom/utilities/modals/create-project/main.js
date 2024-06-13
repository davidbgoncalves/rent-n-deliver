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

/***/ "../src/demo1/js/custom/utilities/modals/create-project/main.js":
/*!**********************************************************************!*\
  !*** ../src/demo1/js/custom/utilities/modals/create-project/main.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n// Class definition\nvar KTModalCreateProject = function () {\n\t// Private variables\n\tvar stepper;\n\tvar stepperObj;\n\tvar form;\t\n\n\t// Private functions\n\tvar initStepper = function () {\n\t\t// Initialize Stepper\n\t\tstepperObj = new KTStepper(stepper);\n\t}\n\n\treturn {\n\t\t// Public functions\n\t\tinit: function () {\n\t\t\tstepper = document.querySelector('#kt_modal_create_project_stepper');\n\t\t\tform = document.querySelector('#kt_modal_create_project_form');\n\n\t\t\tinitStepper();\n\t\t},\n\n\t\tgetStepperObj: function () {\n\t\t\treturn stepperObj;\n\t\t},\n\n\t\tgetStepper: function () {\n\t\t\treturn stepper;\n\t\t},\n\t\t\n\t\tgetForm: function () {\n\t\t\treturn form;\n\t\t}\n\t};\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n\tif (!document.querySelector('#kt_modal_create_project')) {\n\t\treturn;\n\t}\n\n\tKTModalCreateProject.init();\n\tKTModalCreateProjectType.init();\n\tKTModalCreateProjectBudget.init();\n\tKTModalCreateProjectSettings.init();\n\tKTModalCreateProjectTeam.init();\n\tKTModalCreateProjectTargets.init();\n\tKTModalCreateProjectFiles.init();\n\tKTModalCreateProjectComplete.init();\n});\n\n// Webpack support\nif ( true && typeof module.exports !== 'undefined') {\n\twindow.KTModalCreateProject = module.exports = KTModalCreateProject;\n}\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/utilities/modals/create-project/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("../src/demo1/js/custom/utilities/modals/create-project/main.js");
/******/ 	
/******/ })()
;