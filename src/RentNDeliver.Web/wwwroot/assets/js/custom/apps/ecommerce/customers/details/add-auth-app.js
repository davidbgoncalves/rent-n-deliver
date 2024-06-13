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

/***/ "../src/demo1/js/custom/apps/ecommerce/customers/details/add-auth-app.js":
/*!*******************************************************************************!*\
  !*** ../src/demo1/js/custom/apps/ecommerce/customers/details/add-auth-app.js ***!
  \*******************************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTUsersAddAuthApp = function () {\n    // Shared variables\n    const element = document.getElementById('kt_modal_add_auth_app');\n    const modal = new bootstrap.Modal(element);\n\n    // Init add schedule modal\n    var initAddAuthApp = () => {\n\n        // Close button handler\n        const closeButton = element.querySelector('[data-kt-users-modal-action=\"close\"]');\n        closeButton.addEventListener('click', e => {\n            e.preventDefault();\n\n            Swal.fire({\n                text: \"Are you sure you would like to close?\",\n                icon: \"warning\",\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: \"Yes, close it!\",\n                cancelButtonText: \"No, return\",\n                customClass: {\n                    confirmButton: \"btn btn-primary\",\n                    cancelButton: \"btn btn-active-light\"\n                }\n            }).then(function (result) {\n                if (result.value) {\n                    modal.hide(); // Hide modal\t\t\t\t\n                } \n            });\n        });\n\n    }\n\n    // QR code to text code swapper\n    var initCodeSwap = () => {\n        const qrCode = element.querySelector('[ data-kt-add-auth-action=\"qr-code\"]');\n        const textCode = element.querySelector('[ data-kt-add-auth-action=\"text-code\"]');\n        const qrCodeButton = element.querySelector('[ data-kt-add-auth-action=\"qr-code-button\"]');\n        const textCodeButton = element.querySelector('[ data-kt-add-auth-action=\"text-code-button\"]');\n        const qrCodeLabel = element.querySelector('[ data-kt-add-auth-action=\"qr-code-label\"]');\n        const textCodeLabel = element.querySelector('[ data-kt-add-auth-action=\"text-code-label\"]');\n\n        const toggleClass = () =>{\n            qrCode.classList.toggle('d-none');\n            qrCodeButton.classList.toggle('d-none');\n            qrCodeLabel.classList.toggle('d-none');\n            textCode.classList.toggle('d-none');\n            textCodeButton.classList.toggle('d-none');\n            textCodeLabel.classList.toggle('d-none');\n        }\n\n        // Swap to text code handler\n        textCodeButton.addEventListener('click', e =>{\n            e.preventDefault();\n\n            toggleClass();\n        });\n\n        qrCodeButton.addEventListener('click', e =>{\n            e.preventDefault();\n\n            toggleClass();\n        });\n    }\n\n    return {\n        // Public functions\n        init: function () {\n            initAddAuthApp();\n            initCodeSwap();\n        }\n    };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTUsersAddAuthApp.init();\n});\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/ecommerce/customers/details/add-auth-app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/ecommerce/customers/details/add-auth-app.js"]();
/******/ 	
/******/ })()
;