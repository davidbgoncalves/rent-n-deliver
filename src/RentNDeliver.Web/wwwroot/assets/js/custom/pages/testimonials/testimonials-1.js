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

/***/ "../src/demo1/js/custom/pages/testimonials/testimonials-1.js":
/*!*******************************************************************!*\
  !*** ../src/demo1/js/custom/pages/testimonials/testimonials-1.js ***!
  \*******************************************************************/
/***/ ((module) => {

eval("\n\n// Class definition\nvar KTChartMap = function () {\n    // Charts widgets\n    var initChartMap = function() {\n        var element = document.getElementById(\"chartdiv\");\n\n        if ( !element ) {\n            return;\n        } \n        \n        // Create root and chart\nvar root = am5.Root.new(\"chartdiv\"); \n\n// Set themes\nroot.setThemes([\n  am5themes_Animated.new(root)\n]);\n\nvar chart = root.container.children.push(\n  am5map.MapChart.new(root, {\n    panX: \"rotateX\",\n    projection: am5map.geoNaturalEarth1()\n  })\n);\n\n// Create polygon series\nvar polygonSeries = chart.series.push(\n  am5map.MapPolygonSeries.new(root, {\n    geoJSON: am5geodata_continentsLow,\n    exclude: [\"antarctica\"]\n  })\n);\n\npolygonSeries.mapPolygons.template.setAll({\n  tooltipText: \"{name}\",\n  interactive: true,\n  templateField: \"settings\"\n});\n\npolygonSeries.mapPolygons.template.states.create(\"hover\", {\n  fill: am5.color(0x677935)\n});\n\nvar colors = am5.ColorSet.new(root, {});\n\npolygonSeries.data.setAll([{\n  id: \"europe\",\n  settings: {\n    fill: colors.next(),\n    fillPattern: am5.LinePattern.new(root, {\n      color: am5.color(0xffffff),\n      rotation: 45,\n      strokeWidth: 1\n    })\n  }\n}, {\n  id: \"asia\",\n  settings: {\n    fill: colors.next(),\n    fillPattern: am5.RectanglePattern.new(root, {\n      color: am5.color(0xffffff),\n      checkered: true\n    })\n  }\n}, {\n  id: \"africa\",\n  settings: {\n    fill: colors.next(),\n    fillPattern: am5.CirclePattern.new(root, {\n      color: am5.color(0xffffff),\n      checkered: true\n    })\n  }\n}, {\n  id: \"northAmerica\",\n  settings: {\n    fill: colors.next(),\n    fillPattern: am5.CirclePattern.new(root, {\n      color: am5.color(0xffffff)\n    })\n  }\n}, {\n  id: \"southAmerica\",\n  settings: {\n    fill: colors.next(),\n    fillPattern: am5.LinePattern.new(root, {\n      color: am5.color(0xffffff),\n      rotation: 90,\n      strokeWidth: 2\n    })\n  }\n}, {\n  id: \"oceania\",\n  settings: {\n    fill: colors.next(),\n    fillPattern: am5.LinePattern.new(root, {\n      color: am5.color(0xffffff),\n    })\n  }\n}])\n\n\n        // Init chart\n        initChart();\n\n        // Update chart on theme mode change\n        KTThemeMode.on(\"kt.thememode.change\", function() {                \n            if (chart.rendered) {\n                chart.self.destroy();\n            }\n\n            initChart();\n        });              \n    }   \n     \n \n\n    // Public methods\n    return {\n        init: function () {            \n            // Charts widgets\n            initChartMap();              \n        }   \n    }\n}();\n\n// Webpack support\nif ( true && typeof module.exports !== 'undefined') {\n    module.exports = KTChartMap;\n}\n\n// On document ready\nKTUtil.onDOMContentLoaded(function() {\n    KTChartMap.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/pages/testimonials/testimonials-1.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("../src/demo1/js/custom/pages/testimonials/testimonials-1.js");
/******/ 	
/******/ })()
;