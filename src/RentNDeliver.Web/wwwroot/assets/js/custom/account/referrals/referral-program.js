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

/***/ "../src/demo1/js/custom/account/referrals/referral-program.js":
/*!********************************************************************!*\
  !*** ../src/demo1/js/custom/account/referrals/referral-program.js ***!
  \********************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTAccountReferralsReferralProgram = function () {\n    // Private functions\n\n    var initReferralProgrammClipboard = function() {\n        var button = document.querySelector('#kt_referral_program_link_copy_btn');\n        var input = document.querySelector('#kt_referral_link_input');\n        var clipboard = new ClipboardJS(button);\n\n        clipboard.on('success', function(e) {\n            var buttonCaption = button.innerHTML;\n            //Add bgcolor\n            input.classList.add('bg-success');\n            input.classList.add('text-inverse-success');\n\n            button.innerHTML = 'Copied!';\n\n            setTimeout(function() {\n                button.innerHTML = buttonCaption;\n\n                // Remove bgcolor\n                input.classList.remove('bg-success'); \n                input.classList.remove('text-inverse-success'); \n            }, 3000);  // 3seconds\n\n            e.clearSelection();\n        });\n    }\n\n    // Public methods\n    return {\n        init: function () {\n            initReferralProgrammClipboard();\n        }\n    }\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function() {\n    KTAccountReferralsReferralProgram.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/account/referrals/referral-program.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/account/referrals/referral-program.js"]();
/******/ 	
/******/ })()
;