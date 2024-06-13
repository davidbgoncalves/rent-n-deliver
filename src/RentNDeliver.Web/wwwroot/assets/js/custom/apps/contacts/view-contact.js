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

/***/ "../src/demo1/js/custom/apps/contacts/view-contact.js":
/*!************************************************************!*\
  !*** ../src/demo1/js/custom/apps/contacts/view-contact.js ***!
  \************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTAppContactView = function () {\n    // Private functions\n    const handleDeleteButton = () => {\n        // Select form\n        const deleteButton = document.getElementById('kt_contact_delete');\n\n        if (!deleteButton) {\n            return;\n        }\n\n        deleteButton.addEventListener('click', e => {\n            // Prevent default button action\n            e.preventDefault();\n\n            // Show popup confirmation \n            Swal.fire({\n                text: \"Delete contact confirmation\",\n                icon: \"warning\",\n                buttonsStyling: false,\n                showCancelButton: true,\n                confirmButtonText: \"Yes, delete it!\",\n                cancelButtonText: \"No, return\",\n                customClass: {\n                    confirmButton: \"btn btn-danger\",\n                    cancelButton: \"btn btn-active-light\"\n                }\n            }).then(function (result) {\n                if (result.value) {\n                    Swal.fire({\n                        text: \"Contact has been deleted!\",\n                        icon: \"success\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn btn-primary\"\n                        }\n                    }).then(function (result) {\n                        if (result.value) {\n                            // Redirect to customers list page\n                            window.location = deleteButton.getAttribute(\"data-kt-redirect\");\n                        }\n                    });\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: \"Contact has not been deleted!.\",\n                        icon: \"error\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn btn-primary\",\n                        }\n                    });\n                }\n            });\n        });\n    }\n\n    // Public methods\n    return {\n        init: function () {\n\n            handleDeleteButton();\n\n        }\n    };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTAppContactView.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/contacts/view-contact.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/contacts/view-contact.js"]();
/******/ 	
/******/ })()
;