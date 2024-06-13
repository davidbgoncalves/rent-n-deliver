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

/***/ "../src/demo1/js/custom/apps/file-manager/settings.js":
/*!************************************************************!*\
  !*** ../src/demo1/js/custom/apps/file-manager/settings.js ***!
  \************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTAppFileManagerSettings = function () {\n    var form;\n\n\t// Private functions\n\tvar handleForm = function() {\n\t\tconst saveButton = form.querySelector('#kt_file_manager_settings_submit');\n\n        saveButton.addEventListener('click', e => {\n            e.preventDefault();\n\n            saveButton.setAttribute(\"data-kt-indicator\", \"on\");\n\n            // Simulate process for demo only\n            setTimeout(function(){\n                toastr.options = {\n                    \"closeButton\": true,\n                    \"debug\": false,\n                    \"newestOnTop\": false,\n                    \"progressBar\": false,\n                    \"positionClass\": \"toast-top-right\",\n                    \"preventDuplicates\": false,\n                    \"showDuration\": \"300\",\n                    \"hideDuration\": \"1000\",\n                    \"timeOut\": \"5000\",\n                    \"extendedTimeOut\": \"1000\",\n                    \"showEasing\": \"swing\",\n                    \"hideEasing\": \"linear\",\n                    \"showMethod\": \"fadeIn\",\n                    \"hideMethod\": \"fadeOut\"\n                };\n\n                toastr.success('File manager settings have been saved');\n\n                saveButton.removeAttribute(\"data-kt-indicator\");\n            }, 1000);\n        });\n\t}\n\n\t// Public methods\n\treturn {\n\t\tinit: function(element) {\n            form = document.querySelector('#kt_file_manager_settings');\n\n\t\t\thandleForm();\n        }\n\t};\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTAppFileManagerSettings.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/file-manager/settings.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/file-manager/settings.js"]();
/******/ 	
/******/ })()
;