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

/***/ "../src/demo1/js/custom/account/security/license-usage.js":
/*!****************************************************************!*\
  !*** ../src/demo1/js/custom/account/security/license-usage.js ***!
  \****************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTAccountSecurityLicenseUsage = function () {\n    // Private functions\n    var initLicenceCopy = function() {\n        KTUtil.each(document.querySelectorAll('#kt_security_license_usage_table [data-action=\"copy\"]'), function(button) {\n            var tr = button.closest('tr');\n            var license = KTUtil.find(tr, '[data-bs-target=\"license\"]');\n\n            var clipboard = new ClipboardJS(button, {\n                target: license,\n                text: function() {\n                    return license.innerHTML;\n                }\n            });\n        \n            clipboard.on('success', function(e) {\n                // Icons\n                var copyIcon = button.querySelector('.ki-copy');                \n                var checkIcon = button.querySelector('.ki-check');\n                \n                // exit if check icon is already shown\n                if (checkIcon) {\n                   return;  \n                }\n\n                // Create check icon\n                checkIcon = document.createElement('i');\n                checkIcon.classList.add('ki-solid');\n                checkIcon.classList.add('ki-check');\n                checkIcon.classList.add('fs-2');\n\n                // Append check icon\n                button.appendChild(checkIcon);\n\n                // Highlight target\n                license.classList.add('text-success');\n\n                // Hide copy icon\n                copyIcon.classList.add('d-none');\n\n                // Set 3 seconds timeout to hide the check icon and show copy icon back\n                setTimeout(function() {\n                    // Remove check icon\n                    copyIcon.classList.remove('d-none');\n                    // Show check icon back\n                    button.removeChild(checkIcon);\n\n                    // Remove highlight\n                    license.classList.remove('text-success');\n                }, 3000);\n            });\n        });\n    }\n\n    // Public methods\n    return {\n        init: function () {\n            initLicenceCopy();\n        }\n    }\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function() {\n    KTAccountSecurityLicenseUsage.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/account/security/license-usage.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/account/security/license-usage.js"]();
/******/ 	
/******/ })()
;