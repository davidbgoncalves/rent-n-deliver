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

/***/ "../src/demo1/js/custom/utilities/modals/share-earn.js":
/*!*************************************************************!*\
  !*** ../src/demo1/js/custom/utilities/modals/share-earn.js ***!
  \*************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTModalShareEarn = function () {\n    // Private functions\n    var handleForm = function() {\n        var button = document.querySelector('#kt_share_earn_link_copy_button');\n        var input = document.querySelector('#kt_share_earn_link_input');\n        var clipboard = new ClipboardJS(button);\n\n        if (!clipboard) {\n            return;\n        }\n\n        //  Copy text to clipboard. For more info check the plugin's documentation: https://clipboardjs.com/\n        clipboard.on('success', function(e) {\n            var buttonCaption = button.innerHTML;\n            //Add bgcolor\n            input.classList.add('bg-success');\n            input.classList.add('text-inverse-success');\n\n            button.innerHTML = 'Copied!';\n\n            setTimeout(function() {\n                button.innerHTML = buttonCaption;\n\n                // Remove bgcolor\n                input.classList.remove('bg-success'); \n                input.classList.remove('text-inverse-success'); \n            }, 3000);  // 3seconds\n\n            e.clearSelection();\n        });\n    }\n\n    // Public methods\n    return {\n        init: function () {\n            handleForm();\n        }\n    }\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function() {\n    KTModalShareEarn.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/utilities/modals/share-earn.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/utilities/modals/share-earn.js"]();
/******/ 	
/******/ })()
;