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

/***/ "../src/demo1/js/custom/apps/support-center/general.js":
/*!*************************************************************!*\
  !*** ../src/demo1/js/custom/apps/support-center/general.js ***!
  \*************************************************************/
/***/ (() => {

eval("\n\nvar KTSupportCenterGeneral = function() {\n    var menuWrapper;\n\n    var initInstance = function(element) {\n        var elements = element;\n\n        if ( typeof elements === 'undefined' ) {\n            elements = document.querySelectorAll('.highlight');\n        }\n\n        if ( elements && elements.length > 0 ) {\n            for ( var i = 0; i < elements.length; ++i ) {\n                var highlight = elements[i];\n                var copy = highlight.querySelector('.highlight-copy');\n\n                if ( copy ) {\n                    var clipboard = new ClipboardJS(copy, {\n                        target: function(trigger) {\n                            var highlight = trigger.closest('.highlight');\n                            var el = highlight.querySelector('.tab-pane.active');\n\n                            if ( el == null ) {\n                                el = highlight.querySelector('.highlight-code');\n                            }\n\n                            return el;\n                        }\n                    });\n\n                    clipboard.on('success', function(e) {\n                        var caption = e.trigger.innerHTML;\n\n                        e.trigger.innerHTML = 'copied';\n                        e.clearSelection();\n\n                        setTimeout(function() {\n                            e.trigger.innerHTML = caption;\n                        }, 2000);\n                    });\n                }\n            }\n        }\n    }\n\n    var handleMenuScroll = function() {\n        var menuActiveItem = menuWrapper.querySelector(\".menu-link.active\");\n\n        if ( !menuActiveItem ) {\n            return;\n        } \n\n        if ( KTUtil.isVisibleInContainer(menuActiveItem, menuWrapper) === true) {\n            return;\n        }\n\n        menuWrapper.scroll({\n            top: KTUtil.getRelativeTopPosition(menuActiveItem, menuWrapper),\n            behavior: 'smooth'\n        });\n    }\n\n    return {\n        init: function() {\n            initInstance();\n        }\n    };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function() {\n    KTSupportCenterGeneral.init();\n});\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/support-center/general.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/support-center/general.js"]();
/******/ 	
/******/ })()
;