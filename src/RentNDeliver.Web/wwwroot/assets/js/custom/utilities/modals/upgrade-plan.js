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

/***/ "../src/demo1/js/custom/utilities/modals/upgrade-plan.js":
/*!***************************************************************!*\
  !*** ../src/demo1/js/custom/utilities/modals/upgrade-plan.js ***!
  \***************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTModalUpgradePlan = function () {\n    // Private variables\n    var modal;\n\tvar planPeriodMonthButton;\n\tvar planPeriodAnnualButton;\n    var planUpgradeButton;\n\n    // Private functions\n\tvar changePlanPrices = function(type) {\n\t\tvar items = [].slice.call(modal.querySelectorAll('[data-kt-plan-price-month]'));\n\n\t\titems.map(function (item) {\n\t\t\tvar monthPrice = item.getAttribute('data-kt-plan-price-month');\n\t\t\tvar annualPrice = item.getAttribute('data-kt-plan-price-annual');\n\n\t\t\tif ( type === 'month' ) {\n\t\t\t\titem.innerHTML = monthPrice;\n\t\t\t} else if ( type === 'annual' ) {\n\t\t\t\titem.innerHTML = annualPrice;\n\t\t\t}\n\t\t});\n\t}\n\n    var handlePlanPeriodSelection = function() {\n        // Handle period change\n        planPeriodMonthButton.addEventListener('click', function (e) {\n            e.preventDefault();\n\n            planPeriodMonthButton.classList.add('active');\n            planPeriodAnnualButton.classList.remove('active');\n\n            changePlanPrices('month');\n        });\n\n\t\tplanPeriodAnnualButton.addEventListener('click', function (e) {\n            e.preventDefault();\n\n            planPeriodMonthButton.classList.remove('active');\n            planPeriodAnnualButton.classList.add('active');\n            \n            changePlanPrices('annual');\n        });\n    }\n    \n    var handlePlanUpgrade = function () {\n        if ( !planUpgradeButton ) {\n            return;\n        }\n\n        planUpgradeButton.addEventListener('click', function (e) {\n            e.preventDefault();\n\n            var el = this;\n\n            swal.fire({\n                text: \"Are you sure you would like to upgrade to selected plan ?\",\n                icon: \"warning\",\n                buttonsStyling: false,\n                showDenyButton: true,\n                confirmButtonText: \"Yes\",\n                denyButtonText: 'No',\n                customClass: {\n                    confirmButton: \"btn btn-primary\",\n                    denyButton: \"btn btn-light-danger\"\n                }\n            }).then((result) => {\n                if (result.isConfirmed) {\n                    el.setAttribute('data-kt-indicator', 'on');            \n                    el.disabled = true;\n\n                    setTimeout(function() {\n                        Swal.fire({\n                            text: 'Your subscription plan has been successfully upgraded', \n                            icon: 'success',\n                            confirmButtonText: \"Ok\",\n                            buttonsStyling: false,\n                            customClass: {\n                                confirmButton: \"btn btn-light-primary\"\n                            }\n                        }).then((result) => {\n                            bootstrap.Modal.getInstance(modal).hide();\n                        })\n\n                    }, 2000);\n                } \n            });            \n        });\n    }\n\n    // Public methods\n    return {\n        init: function () {\n            // Elements\n            modal = document.querySelector('#kt_modal_upgrade_plan');\n\n            if (!modal) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tplanPeriodMonthButton = modal.querySelector('[data-kt-plan=\"month\"]');\n\t\t\tplanPeriodAnnualButton = modal.querySelector('[data-kt-plan=\"annual\"]');\n            planUpgradeButton = document.querySelector('#kt_modal_upgrade_plan_btn');\n\n            // Handlers\n            handlePlanPeriodSelection();\n            handlePlanUpgrade();\n            changePlanPrices();\n        }\n    }\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function() {\n    KTModalUpgradePlan.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/utilities/modals/upgrade-plan.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/utilities/modals/upgrade-plan.js"]();
/******/ 	
/******/ })()
;