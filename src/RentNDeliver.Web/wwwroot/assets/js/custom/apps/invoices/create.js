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

/***/ "../src/demo1/js/custom/apps/invoices/create.js":
/*!******************************************************!*\
  !*** ../src/demo1/js/custom/apps/invoices/create.js ***!
  \******************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTAppInvoicesCreate = function () {\n    var form;\n\n\t// Private functions\n\tvar updateTotal = function() {\n\t\tvar items = [].slice.call(form.querySelectorAll('[data-kt-element=\"items\"] [data-kt-element=\"item\"]'));\n\t\tvar grandTotal = 0;\n\n\t\tvar format = wNumb({\n\t\t\t//prefix: '$ ',\n\t\t\tdecimals: 2,\n\t\t\tthousand: ','\n\t\t});\n\n\t\titems.map(function (item) {\n            var quantity = item.querySelector('[data-kt-element=\"quantity\"]');\n\t\t\tvar price = item.querySelector('[data-kt-element=\"price\"]');\n\n\t\t\tvar priceValue = format.from(price.value);\n\t\t\tpriceValue = (!priceValue || priceValue < 0) ? 0 : priceValue;\n\n\t\t\tvar quantityValue = parseInt(quantity.value);\n\t\t\tquantityValue = (!quantityValue || quantityValue < 0) ?  1 : quantityValue;\n\n\t\t\tprice.value = format.to(priceValue);\n\t\t\tquantity.value = quantityValue;\n\n\t\t\titem.querySelector('[data-kt-element=\"total\"]').innerText = format.to(priceValue * quantityValue);\t\t\t\n\n\t\t\tgrandTotal += priceValue * quantityValue;\n\t\t});\n\n\t\tform.querySelector('[data-kt-element=\"sub-total\"]').innerText = format.to(grandTotal);\n\t\tform.querySelector('[data-kt-element=\"grand-total\"]').innerText = format.to(grandTotal);\n\t}\n\n\tvar handleEmptyState = function() {\n\t\tif (form.querySelectorAll('[data-kt-element=\"items\"] [data-kt-element=\"item\"]').length === 0) {\n\t\t\tvar item = form.querySelector('[data-kt-element=\"empty-template\"] tr').cloneNode(true);\n\t\t\tform.querySelector('[data-kt-element=\"items\"] tbody').appendChild(item);\n\t\t} else {\n\t\t\tKTUtil.remove(form.querySelector('[data-kt-element=\"items\"] [data-kt-element=\"empty\"]'));\n\t\t}\n\t}\n\n\tvar handeForm = function (element) {\n\t\t// Add item\n\t\tform.querySelector('[data-kt-element=\"items\"] [data-kt-element=\"add-item\"]').addEventListener('click', function(e) {\n\t\t\te.preventDefault();\n\n\t\t\tvar item = form.querySelector('[data-kt-element=\"item-template\"] tr').cloneNode(true);\n\n\t\t\tform.querySelector('[data-kt-element=\"items\"] tbody').appendChild(item);\n\n\t\t\thandleEmptyState();\n\t\t\tupdateTotal();\t\t\t\n\t\t});\n\n\t\t// Remove item\n\t\tKTUtil.on(form, '[data-kt-element=\"items\"] [data-kt-element=\"remove-item\"]', 'click', function(e) {\n\t\t\te.preventDefault();\n\n\t\t\tKTUtil.remove(this.closest('[data-kt-element=\"item\"]'));\n\n\t\t\thandleEmptyState();\n\t\t\tupdateTotal();\t\t\t\n\t\t});\t\t\n\n\t\t// Handle price and quantity changes\n\t\tKTUtil.on(form, '[data-kt-element=\"items\"] [data-kt-element=\"quantity\"], [data-kt-element=\"items\"] [data-kt-element=\"price\"]', 'change', function(e) {\n\t\t\te.preventDefault();\n\n\t\t\tupdateTotal();\t\t\t\n\t\t});\n\t}\n\n\tvar initForm = function(element) {\n\t\t// Due date. For more info, please visit the official plugin site: https://flatpickr.js.org/\n\t\tvar invoiceDate = $(form.querySelector('[name=\"invoice_date\"]'));\n\t\tinvoiceDate.flatpickr({\n\t\t\tenableTime: false,\n\t\t\tdateFormat: \"d, M Y\",\n\t\t});\n\n        // Due date. For more info, please visit the official plugin site: https://flatpickr.js.org/\n\t\tvar dueDate = $(form.querySelector('[name=\"invoice_due_date\"]'));\n\t\tdueDate.flatpickr({\n\t\t\tenableTime: false,\n\t\t\tdateFormat: \"d, M Y\",\n\t\t});\n\t}\n\n\t// Public methods\n\treturn {\n\t\tinit: function(element) {\n            form = document.querySelector('#kt_invoice_form');\n\n\t\t\thandeForm();\n            initForm();\n\t\t\tupdateTotal();\n        }\n\t};\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTAppInvoicesCreate.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/invoices/create.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/invoices/create.js"]();
/******/ 	
/******/ })()
;