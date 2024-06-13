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

/***/ "../src/demo1/js/custom/utilities/modals/select-location.js":
/*!******************************************************************!*\
  !*** ../src/demo1/js/custom/utilities/modals/select-location.js ***!
  \******************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTModalSelectLocation = function () {\n    // Private variables\n    var locationSelectTarget;\n    var locationSelectButton;\n\n    var modal;\n    var selectedlocation = '';\n    var mapInitialized = false;\n\n    // Private functions\n    var initMap = function() {\n        // Check if Leaflet is included\n        if (!L) {\n            return;\n        }\n\n        // Define Map Location\n        var leaflet = L.map('kt_modal_select_location_map', {\n            center: [40.725, -73.985],\n            zoom: 30\n        });\n\n        // Init Leaflet Map. For more info check the plugin's documentation: https://leafletjs.com/\n        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\n            attribution: '&copy; <a href=\"https://osm.org/copyright\">OpenStreetMap</a> contributors'\n        }).addTo(leaflet);\n\n        // Set Geocoding\n        var geocodeService;\n        if (typeof L.esri.Geocoding === 'undefined') {\n            geocodeService = L.esri.geocodeService();\n        } else {\n            geocodeService = L.esri.Geocoding.geocodeService();\n        }\n\n        // Define Marker Layer\n        var markerLayer = L.layerGroup().addTo(leaflet);\n\n        // Set Custom SVG icon marker\n        var leafletIcon = L.divIcon({\n            html: `<i class=\"ki-solid ki-geolocation text-primary fs-3x\"></span>`,\n            bgPos: [10, 10],\n            iconAnchor: [20, 37],\n            popupAnchor: [0, -37],\n            className: 'leaflet-marker'\n        });\n\n        // Map onClick Action\n        leaflet.on('click', function (e) {\n            geocodeService.reverse().latlng(e.latlng).run(function (error, result) {\n                if (error) {\n                    return;\n                }\n                markerLayer.clearLayers();\n                selectedlocation = result.address.Match_addr;\n                L.marker(result.latlng, { icon: leafletIcon }).addTo(markerLayer).bindPopup(result.address.Match_addr, { closeButton: false }).openPopup();\n\n                // Show popup confirmation. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n                Swal.fire({\n                    html: '<div class=\"mb-2\">Your selected - <b>\"' + selectedlocation + '\"</b>.</div>' + 'Click on the \"Apply\" button to select this location.',\n                    icon: \"success\",\n                    buttonsStyling: false,\n                    confirmButtonText: \"Ok, got it!\",\n                    customClass: {\n                        confirmButton: \"btn btn-primary\"\n                    }\n                }).then(function (result) {\n                    // Confirmed\n                });\n            });\n        });\n    }\n\n    var handleSelection = function() {\n        locationSelectButton.addEventListener('click', function() {\n            if (locationSelectTarget) {\n                if (locationSelectTarget.value) {\n                    locationSelectTarget.value = selectedlocation;\n                } else {\n                    locationSelectTarget.innerHTML = selectedlocation;\n                }\n            }\n        });\n    }\n\n    // Public methods\n    return {\n        init: function () {\n            // Elements\n\t\t\tmodal = document.querySelector('#kt_modal_select_location');\n\n\t\t\tif (!modal) {\n\t\t\t\treturn;\n\t\t\t}\n            \n            locationSelectTarget = document.querySelector('#kt_modal_select_location_target');\n            locationSelectButton = document.querySelector('#kt_modal_select_location_button');\n\n            handleSelection();\n            \n            modal.addEventListener('shown.bs.modal', function () {\n                if (!mapInitialized) {\n                    initMap();\n                    mapInitialized = true;\n                }                \n            });\n        }\n    }\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function() {\n    KTModalSelectLocation.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/utilities/modals/select-location.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/utilities/modals/select-location.js"]();
/******/ 	
/******/ })()
;