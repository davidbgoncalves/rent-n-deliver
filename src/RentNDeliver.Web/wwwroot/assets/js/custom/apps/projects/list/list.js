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

/***/ "../src/demo1/js/custom/apps/projects/list/list.js":
/*!*********************************************************!*\
  !*** ../src/demo1/js/custom/apps/projects/list/list.js ***!
  \*********************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTProjectList = function () {    \n    var initChart = function () {\n        // init chart\n        var element = document.getElementById(\"kt_project_list_chart\");\n\n        if (!element) {\n            return;\n        }\n\n        var config = {\n            type: 'doughnut',\n            data: {\n                datasets: [{\n                    data: [30, 45, 25],\n                    backgroundColor: ['#00A3FF', '#50CD89', '#E4E6EF']\n                }],\n                labels: ['Active', 'Completed', 'Yet to start']\n            },\n            options: {\n                chart: {\n                    fontFamily: 'inherit'\n                },\n                borderWidth: 0,\n                cutout: '75%',\n                cutoutPercentage: 65,\n                responsive: true,\n                maintainAspectRatio: false,\n                title: {\n                    display: false\n                },\n                animation: {\n                    animateScale: true,\n                    animateRotate: true\n                },\n                stroke: {\n                    width: 0\n                },\n                tooltips: {\n                    enabled: true,\n                    intersect: false,\n                    mode: 'nearest',\n                    bodySpacing: 5,\n                    yPadding: 10,\n                    xPadding: 10,\n                    caretPadding: 0,\n                    displayColors: false,\n                    backgroundColor: '#20D489',\n                    titleFontColor: '#ffffff',\n                    cornerRadius: 4,\n                    footerSpacing: 0,\n                    titleSpacing: 0\n                },\n                plugins: {\n                    legend: {\n                        display: false\n                    }\n                }                \n            }\n        };\n\n        var ctx = element.getContext('2d');\n        var myDoughnut = new Chart(ctx, config);\n    }\n\n    // Public methods\n    return {\n        init: function () {\n            initChart();\n        }\n    }\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function() {\n    KTProjectList.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/projects/list/list.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/projects/list/list.js"]();
/******/ 	
/******/ })()
;