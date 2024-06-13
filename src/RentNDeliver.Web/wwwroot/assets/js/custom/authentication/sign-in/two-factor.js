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

/***/ "../src/demo1/js/custom/authentication/sign-in/two-factor.js":
/*!*******************************************************************!*\
  !*** ../src/demo1/js/custom/authentication/sign-in/two-factor.js ***!
  \*******************************************************************/
/***/ (() => {

eval("\n\n// Class Definition\nvar KTSigninTwoFactor = function() {\n    // Elements\n    var form;\n    var submitButton;\n\n    // Handle form\n    var handleForm = function(e) {        \n        // Handle form submit\n        submitButton.addEventListener('click', function (e) {\n            e.preventDefault();\n\n            var validated = true;\n\n            var inputs = [].slice.call(form.querySelectorAll('input[maxlength=\"1\"]'));\n            inputs.map(function (input) {\n                if (input.value === '' || input.value.length === 0) {\n                    validated = false;\n                }\n            });\n\n            if (validated === true) {\n                // Show loading indication\n                submitButton.setAttribute('data-kt-indicator', 'on');\n\n                // Disable button to avoid multiple click \n                submitButton.disabled = true;\n\n                // Simulate ajax request\n                setTimeout(function() {\n                    // Hide loading indication\n                    submitButton.removeAttribute('data-kt-indicator');\n\n                    // Enable button\n                    submitButton.disabled = false;\n\n                    // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                    Swal.fire({\n                        text: \"You have been successfully verified!\",\n                        icon: \"success\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn btn-primary\"\n                        }\n                    }).then(function (result) {\n                        if (result.isConfirmed) { \n                            inputs.map(function (input) {\n                                input.value = '';\n                            });\n\n                            var redirectUrl = form.getAttribute('data-kt-redirect-url');\n                            if (redirectUrl) {\n                                location.href = redirectUrl;\n                            }\n                        }\n                    });\n                }, 1000); \n            } else {\n                swal.fire({\n                    text: \"Please enter valid securtiy code and try again.\",\n                    icon: \"error\",\n                    buttonsStyling: false,\n                    confirmButtonText: \"Ok, got it!\",\n                    customClass: {\n                        confirmButton: \"btn fw-bold btn-light-primary\"\n                    }\n                }).then(function() {\n                    KTUtil.scrollTop();\n                });\n            }\n        });\n    }\n\n    var handleType = function() {\n        var input1 = form.querySelector(\"[name=code_1]\");\n        var input2 = form.querySelector(\"[name=code_2]\");\n        var input3 = form.querySelector(\"[name=code_3]\");\n        var input4 = form.querySelector(\"[name=code_4]\");\n        var input5 = form.querySelector(\"[name=code_5]\");\n        var input6 = form.querySelector(\"[name=code_6]\");\n\n        input1.focus();\n\n        input1.addEventListener(\"keyup\", function() {\n            if (this.value.length === 1) {\n                input2.focus();\n            }\n        });\n\n        input2.addEventListener(\"keyup\", function() {\n            if (this.value.length === 1) {\n                input3.focus();\n            }\n        });\n\n        input3.addEventListener(\"keyup\", function() {\n            if (this.value.length === 1) {\n                input4.focus();\n            }\n        });\n\n        input4.addEventListener(\"keyup\", function() {\n            if (this.value.length === 1) {\n                input5.focus();\n            }\n        });\n\n        input5.addEventListener(\"keyup\", function() {\n            if (this.value.length === 1) {\n                input6.focus();\n            }\n        });\n        \n        input6.addEventListener(\"keyup\", function() {\n            if (this.value.length === 1) {\n                input6.blur();\n            }\n        });\n    }    \n\n    // Public functions\n    return {\n        // Initialization\n        init: function() {\n            form = document.querySelector('#kt_sing_in_two_factor_form');\n            submitButton = document.querySelector('#kt_sing_in_two_factor_submit');\n\n            handleForm();\n            handleType();\n        }\n    };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function() {\n    KTSigninTwoFactor.init();\n});\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/authentication/sign-in/two-factor.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/authentication/sign-in/two-factor.js"]();
/******/ 	
/******/ })()
;