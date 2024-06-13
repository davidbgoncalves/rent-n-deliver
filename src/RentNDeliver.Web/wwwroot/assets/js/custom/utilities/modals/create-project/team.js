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

/***/ "../src/demo1/js/custom/utilities/modals/create-project/team.js":
/*!**********************************************************************!*\
  !*** ../src/demo1/js/custom/utilities/modals/create-project/team.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n// Class definition\nvar KTModalCreateProjectTeam = function () {\n\t// Variables\n\tvar nextButton;\n\tvar previousButton;\n\tvar form;\n\tvar stepper;\n\n\t// Private functions\n\tvar handleForm = function() {\n\t\tnextButton.addEventListener('click', function (e) {\n\t\t\t// Prevent default button action\n\t\t\te.preventDefault();\n\n\t\t\t// Disable button to avoid multiple click \n\t\t\tnextButton.disabled = true;\n\n\t\t\t// Show loading indication\n\t\t\tnextButton.setAttribute('data-kt-indicator', 'on');\n\n\t\t\t// Simulate form submission\n\t\t\tsetTimeout(function() {\n\t\t\t\t// Enable button\n\t\t\t\tnextButton.disabled = false;\n\t\t\t\t\n\t\t\t\t// Simulate form submission\n\t\t\t\tnextButton.removeAttribute('data-kt-indicator');\n\t\t\t\t\n\t\t\t\t// Go to next step\n\t\t\t\tstepper.goNext();\n\t\t\t}, 1500); \t\t\n\t\t});\n\n\t\tpreviousButton.addEventListener('click', function () {\n\t\t\tstepper.goPrevious();\n\t\t});\n\t}\n\n\treturn {\n\t\t// Public functions\n\t\tinit: function () {\n\t\t\tform = KTModalCreateProject.getForm();\n\t\t\tstepper = KTModalCreateProject.getStepperObj();\n\t\t\tnextButton = KTModalCreateProject.getStepper().querySelector('[data-kt-element=\"team-next\"]');\n\t\t\tpreviousButton = KTModalCreateProject.getStepper().querySelector('[data-kt-element=\"team-previous\"]');\n\n\t\t\thandleForm();\n\t\t}\n\t};\n}();\n\n// Webpack support\nif ( true && typeof module.exports !== 'undefined') {\n\twindow.KTModalCreateProjectTeam = module.exports = KTModalCreateProjectTeam;\n}\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/utilities/modals/create-project/team.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("../src/demo1/js/custom/utilities/modals/create-project/team.js");
/******/ 	
/******/ })()
;