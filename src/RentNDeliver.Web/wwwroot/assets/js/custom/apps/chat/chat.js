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

/***/ "../src/demo1/js/custom/apps/chat/chat.js":
/*!************************************************!*\
  !*** ../src/demo1/js/custom/apps/chat/chat.js ***!
  \************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTAppChat = function () {\n\t// Private functions\n\tvar handeSend = function (element) {\n\t\tif (!element) {\n\t\t\treturn;\n\t\t}\n\n\t\t// Handle send\n\t\tKTUtil.on(element, '[data-kt-element=\"input\"]', 'keydown', function(e) {\n\t\t\tif (e.keyCode == 13) {\n\t\t\t\thandeMessaging(element);\n\t\t\t\te.preventDefault();\n\n\t\t\t\treturn false;\n\t\t\t}\n\t\t});\n\n\t\tKTUtil.on(element, '[data-kt-element=\"send\"]', 'click', function(e) {\n\t\t\thandeMessaging(element);\n\t\t});\n\t}\n\n\tvar handeMessaging = function(element) {\n\t\tvar messages = element.querySelector('[data-kt-element=\"messages\"]');\n\t\tvar input = element.querySelector('[data-kt-element=\"input\"]');\n\n        if (input.value.length === 0 ) {\n            return;\n        }\n\n\t\tvar messageOutTemplate = messages.querySelector('[data-kt-element=\"template-out\"]');\n\t\tvar messageInTemplate = messages.querySelector('[data-kt-element=\"template-in\"]');\n\t\tvar message;\n\t\t\n\t\t// Show example outgoing message\n\t\tmessage = messageOutTemplate.cloneNode(true);\n\t\tmessage.classList.remove('d-none');\n\t\tmessage.querySelector('[data-kt-element=\"message-text\"]').innerText = input.value;\t\t\n\t\tinput.value = '';\n\t\tmessages.appendChild(message);\n\t\tmessages.scrollTop = messages.scrollHeight;\n\t\t\n\t\t\n\t\tsetTimeout(function() {\t\t\t\n\t\t\t// Show example incoming message\n\t\t\tmessage = messageInTemplate.cloneNode(true);\t\t\t\n\t\t\tmessage.classList.remove('d-none');\n\t\t\tmessage.querySelector('[data-kt-element=\"message-text\"]').innerText = 'Thank you for your awesome support!';\n\t\t\tmessages.appendChild(message);\n\t\t\tmessages.scrollTop = messages.scrollHeight;\n\t\t}, 2000);\n\t}\n\n\t// Public methods\n\treturn {\n\t\tinit: function(element) {\n\t\t\thandeSend(element);\n        }\n\t};\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n\t// Init inline chat messenger\n    KTAppChat.init(document.querySelector('#kt_chat_messenger'));\n\n\t// Init drawer chat messenger\n\tKTAppChat.init(document.querySelector('#kt_drawer_chat_messenger'));\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/chat/chat.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/chat/chat.js"]();
/******/ 	
/******/ })()
;