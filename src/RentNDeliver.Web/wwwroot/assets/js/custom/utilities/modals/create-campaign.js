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

/***/ "../src/demo1/js/custom/utilities/modals/create-campaign.js":
/*!******************************************************************!*\
  !*** ../src/demo1/js/custom/utilities/modals/create-campaign.js ***!
  \******************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTCreateCampaign = function () {\n\t// Elements\n\tvar modal;\n\tvar modalEl;\n\n\tvar stepper;\n\tvar form;\n\tvar formSubmitButton;\n\tvar formContinueButton;\n\n\t// Variables\n\tvar stepperObj;\n\tvar validations = [];\n\n\t// Private Functions\n\tvar initStepper = function () {\n\t\t// Initialize Stepper\n\t\tstepperObj = new KTStepper(stepper);\n\n\t\t// Stepper change event(handle hiding submit button for the last step)\n\t\tstepperObj.on('kt.stepper.changed', function (stepper) {\n\t\t\tif (stepperObj.getCurrentStepIndex() === 4) {\n\t\t\t\tformSubmitButton.classList.remove('d-none');\n\t\t\t\tformSubmitButton.classList.add('d-inline-block');\n\t\t\t\tformContinueButton.classList.add('d-none');\n\t\t\t} else if (stepperObj.getCurrentStepIndex() === 5) {\n\t\t\t\tformSubmitButton.classList.add('d-none');\n\t\t\t\tformContinueButton.classList.add('d-none');\n\t\t\t} else {\n\t\t\t\tformSubmitButton.classList.remove('d-inline-block');\n\t\t\t\tformSubmitButton.classList.remove('d-none');\n\t\t\t\tformContinueButton.classList.remove('d-none');\n\t\t\t}\n\t\t});\n\n\t\t// Validation before going to next page\n\t\tstepperObj.on('kt.stepper.next', function (stepper) {\n\t\t\tconsole.log('stepper.next');\n\n\t\t\t// Validate form before change stepper step\n\t\t\tvar validator = validations[stepper.getCurrentStepIndex() - 1]; // get validator for currnt step\n\n\t\t\tif (validator) {\n\t\t\t\tvalidator.validate().then(function (status) {\n\t\t\t\t\tconsole.log('validated!');\n\n\t\t\t\t\tif (status == 'Valid') {\n\t\t\t\t\t\tstepper.goNext();\n\n\t\t\t\t\t\t//KTUtil.scrollTop();\n\t\t\t\t\t} else {\n\t\t\t\t\t\t// Show error message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\t\t\t\t\t\tSwal.fire({\n\t\t\t\t\t\t\ttext: \"Sorry, looks like there are some errors detected, please try again.\",\n\t\t\t\t\t\t\ticon: \"error\",\n\t\t\t\t\t\t\tbuttonsStyling: false,\n\t\t\t\t\t\t\tconfirmButtonText: \"Ok, got it!\",\n\t\t\t\t\t\t\tcustomClass: {\n\t\t\t\t\t\t\t\tconfirmButton: \"btn btn-light\"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}).then(function () {\n\t\t\t\t\t\t\t//KTUtil.scrollTop();\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tstepper.goNext();\n\n\t\t\t\tKTUtil.scrollTop();\n\t\t\t}\n\t\t});\n\n\t\t// Prev event\n\t\tstepperObj.on('kt.stepper.previous', function (stepper) {\n\t\t\tconsole.log('stepper.previous');\n\n\t\t\tstepper.goPrevious();\n\t\t\tKTUtil.scrollTop();\n\t\t});\n\n\t\tformSubmitButton.addEventListener('click', function (e) {\n\t\t\t// Prevent default button action\n\t\t\te.preventDefault();\n\n\t\t\t// Disable button to avoid multiple click \n\t\t\tformSubmitButton.disabled = true;\n\n\t\t\t// Show loading indication\n\t\t\tformSubmitButton.setAttribute('data-kt-indicator', 'on');\n\n\t\t\t// Simulate form submission\n\t\t\tsetTimeout(function () {\n\t\t\t\t// Hide loading indication\n\t\t\t\tformSubmitButton.removeAttribute('data-kt-indicator');\n\n\t\t\t\t// Enable button\n\t\t\t\tformSubmitButton.disabled = false;\n\n\t\t\t\tstepperObj.goNext();\n\t\t\t\t//KTUtil.scrollTop();\n\t\t\t}, 2000);\n\t\t});\n\t}\n\n\t// Init form inputs\n\tvar initForm = function () {\n\t\t// Init age slider\n\t\tvar slider = document.querySelector(\"#kt_modal_create_campaign_age_slider\");\n\t\tvar valueMin = document.querySelector(\"#kt_modal_create_campaign_age_min\");\n\t\tvar valueMax = document.querySelector(\"#kt_modal_create_campaign_age_max\");\n\n\t\tnoUiSlider.create(slider, {\n\t\t\tstart: [18, 40],\n\t\t\tconnect: true,\n\t\t\trange: {\n\t\t\t\t\"min\": 13,\n\t\t\t\t\"max\": 80\n\t\t\t}\n\t\t});\n\n\t\tslider.noUiSlider.on(\"update\", function (values, handle) {\n\t\t\tif (handle) {\n\t\t\t\tvalueMax.innerHTML = Math.round(values[handle]);\n\t\t\t} else {\n\t\t\t\tvalueMin.innerHTML = Math.round(values[handle]);\n\t\t\t}\n\t\t});\n\n\t\t// Init tagify\n\t\tvar tagifyElement = document.querySelector('#kt_modal_create_campaign_location');\n\t\tvar tagify = new Tagify(tagifyElement, {\n\t\t\tdelimiters: null,\n\t\t\ttemplates: {\n\t\t\t\ttag: function (tagData) {\n\t\t\t\t\tconst countryPath = tagifyElement.getAttribute(\"data-kt-flags-path\") + tagData.value.toLowerCase().replace(/\\s+/g, '-') + '.svg';\n\t\t\t\t\ttry {\n\t\t\t\t\t\t// _ESCAPE_START_\n\t\t\t\t\t\treturn `<tag title='${tagData.value}' contenteditable='false' spellcheck=\"false\" class='tagify__tag ${tagData.class ? tagData.class : \"\"}' ${this.getAttributes(tagData)}>\n                                <x title='remove tag' class='tagify__tag__removeBtn'></x>\n                                <div class=\"d-flex align-items-center\">\n                                    ${tagData.code ?\n\t\t\t\t\t\t\t\t`<img onerror=\"this.style.visibility = 'hidden'\" class=\"w-25px rounded-circle me-2\" src='${countryPath}' />` : ''\n\t\t\t\t\t\t\t}\n                                    <span class='tagify__tag-text'>${tagData.value}</span>\n                                </div>\n                            </tag>`\n\t\t\t\t\t\t// _ESCAPE_END_\n\t\t\t\t\t}\n\t\t\t\t\tcatch (err) { }\n\t\t\t\t},\n\n\t\t\t\tdropdownItem: function (tagData) {\n\t\t\t\t\tconst countryPath = tagifyElement.getAttribute(\"data-kt-flags-path\") + tagData.value.toLowerCase().replace(/\\s+/g, '-') + '.svg';\n\t\t\t\t\ttry {\n\t\t\t\t\t\t// _ESCAPE_START_\n\t\t\t\t\t\treturn `<div class='tagify__dropdown__item ${tagData.class ? tagData.class : \"\"}'>\n                                    <img onerror=\"this.style.visibility = 'hidden'\" class=\"w-25px rounded-circle me-2\"\n                                         src='${countryPath}' />\n                                    <span>${tagData.value}</span>\n                                </div>`\n\t\t\t\t\t\t// _ESCAPE_END_\n\t\t\t\t\t}\n\t\t\t\t\tcatch (err) { }\n\t\t\t\t}\n\t\t\t},\n\t\t\tenforceWhitelist: true,\n\t\t\twhitelist: [\n\t\t\t\t{ value: 'Argentina', code: 'AR' },\n\t\t\t\t{ value: 'Australia', code: 'AU', searchBy: 'beach, sub-tropical' },\n\t\t\t\t{ value: 'Austria', code: 'AT' },\n\t\t\t\t{ value: 'Brazil', code: 'BR' },\n\t\t\t\t{ value: 'China', code: 'CN' },\n\t\t\t\t{ value: 'Egypt', code: 'EG' },\n\t\t\t\t{ value: 'Finland', code: 'FI' },\n\t\t\t\t{ value: 'France', code: 'FR' },\n\t\t\t\t{ value: 'Germany', code: 'DE' },\n\t\t\t\t{ value: 'Hong Kong', code: 'HK' },\n\t\t\t\t{ value: 'Hungary', code: 'HU' },\n\t\t\t\t{ value: 'Iceland', code: 'IS' },\n\t\t\t\t{ value: 'India', code: 'IN' },\n\t\t\t\t{ value: 'Indonesia', code: 'ID' },\n\t\t\t\t{ value: 'Italy', code: 'IT' },\n\t\t\t\t{ value: 'Jamaica', code: 'JM' },\n\t\t\t\t{ value: 'Japan', code: 'JP' },\n\t\t\t\t{ value: 'Jersey', code: 'JE' },\n\t\t\t\t{ value: 'Luxembourg', code: 'LU' },\n\t\t\t\t{ value: 'Mexico', code: 'MX' },\n\t\t\t\t{ value: 'Netherlands', code: 'NL' },\n\t\t\t\t{ value: 'New Zealand', code: 'NZ' },\n\t\t\t\t{ value: 'Norway', code: 'NO' },\n\t\t\t\t{ value: 'Philippines', code: 'PH' },\n\t\t\t\t{ value: 'Singapore', code: 'SG' },\n\t\t\t\t{ value: 'South Korea', code: 'KR' },\n\t\t\t\t{ value: 'Sweden', code: 'SE' },\n\t\t\t\t{ value: 'Switzerland', code: 'CH' },\n\t\t\t\t{ value: 'Thailand', code: 'TH' },\n\t\t\t\t{ value: 'Ukraine', code: 'UA' },\n\t\t\t\t{ value: 'United Kingdom', code: 'GB' },\n\t\t\t\t{ value: 'United States', code: 'US' },\n\t\t\t\t{ value: 'Vietnam', code: 'VN' }\n\t\t\t],\n\t\t\tdropdown: {\n\t\t\t\tenabled: 1, // suggest tags after a single character input\n\t\t\t\tclassname: 'extra-properties' // custom class for the suggestions dropdown\n\t\t\t} // map tags' values to this property name, so this property will be the actual value and not the printed value on the screen\n\t\t})\n\n\t\t// add the first 2 tags and makes them readonly\n\t\tvar tagsToAdd = tagify.settings.whitelist.slice(0, 2);\n\t\ttagify.addTags(tagsToAdd);\n\n\t\t// Init flatpickr\n\t\t$(\"#kt_modal_create_campaign_datepicker\").flatpickr({\n\t\t\taltInput: true,\n\t\t\tenableTime: true,\n\t\t\taltFormat: \"F j, Y H:i\",\n\t\t\tdateFormat: \"Y-m-d H:i\",\n\t\t\tmode: \"range\"\n\t\t});\n\n\t\t// Init dropzone\n\t\tvar myDropzone = new Dropzone(\"#kt_modal_create_campaign_files_upload\", {\n\t\t\turl: \"https://keenthemes.com/scripts/void.php\", // Set the url for your upload script location\n\t\t\tparamName: \"file\", // The name that will be used to transfer the file\n\t\t\tmaxFiles: 10,\n\t\t\tmaxFilesize: 10, // MB\n\t\t\taddRemoveLinks: true,\n\t\t\taccept: function(file, done) {\n\t\t\t\tif (file.name == \"wow.jpg\") {\n\t\t\t\t\tdone(\"Naha, you don't.\");\n\t\t\t\t} else {\n\t\t\t\t\tdone();\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\t// Handle campaign duration options\n\t\tconst allDuration = document.querySelector('#kt_modal_create_campaign_duration_all');\n\t\tconst fixedDuration = document.querySelector('#kt_modal_create_campaign_duration_fixed');\n\t\tconst datepicker = document.querySelector('#kt_modal_create_campaign_datepicker');\n\n\t\t[allDuration, fixedDuration].forEach(option => {\n\t\t\toption.addEventListener('click', e => {\n\t\t\t\tif (option.classList.contains('active')) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tallDuration.classList.toggle('active');\n\t\t\t\tfixedDuration.classList.toggle('active');\n\n\t\t\t\tif (fixedDuration.classList.contains('active')) {\n\t\t\t\t\tdatepicker.nextElementSibling.classList.remove('d-none');\n\t\t\t\t} else {\n\t\t\t\t\tdatepicker.nextElementSibling.classList.add('d-none');\n\t\t\t\t}\n\t\t\t});\n\t\t});\n\n\t\t// Init budget slider\n\t\tvar budgetSlider = document.querySelector(\"#kt_modal_create_campaign_budget_slider\");\n\t\tvar budgetValue = document.querySelector(\"#kt_modal_create_campaign_budget_label\");\n\n\t\tnoUiSlider.create(budgetSlider, {\n\t\t\tstart: [5],\n\t\t\tconnect: true,\n\t\t\trange: {\n\t\t\t\t\"min\": 1,\n\t\t\t\t\"max\": 500\n\t\t\t}\n\t\t});\n\n\t\tbudgetSlider.noUiSlider.on(\"update\", function (values, handle) {\n\t\t\tbudgetValue.innerHTML = Math.round(values[handle]);\n\t\t\tif (handle) {\n\t\t\t\tbudgetValue.innerHTML = Math.round(values[handle]);\n\t\t\t}\n\t\t});\n\n\t\t// Handle create new campaign button\n\t\tconst restartButton = document.querySelector('#kt_modal_create_campaign_create_new');\n\t\trestartButton.addEventListener('click', function () {\n\t\t\tform.reset();\n\t\t\tstepperObj.goTo(1);\n\t\t});\n\t}\n\n\tvar initValidation = function () {\n\t\t// Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n\t\t// Step 1\n\t\tvalidations.push(FormValidation.formValidation(\n\t\t\tform,\n\t\t\t{\n\t\t\t\tfields: {\n\t\t\t\t\tcampaign_name: {\n\t\t\t\t\t\tvalidators: {\n\t\t\t\t\t\t\tnotEmpty: {\n\t\t\t\t\t\t\t\tmessage: 'App name is required'\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t},\n\t\t\t\t\tavatar: {\n\t\t\t\t\t\tvalidators: {\n\t\t\t\t\t\t\tfile: {\n\t\t\t\t\t\t\t\textension: 'png,jpg,jpeg',\n\t\t\t\t\t\t\t\ttype: 'image/jpeg,image/png',\n\t\t\t\t\t\t\t\tmessage: 'Please choose a png, jpg or jpeg files only',\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tplugins: {\n\t\t\t\t\ttrigger: new FormValidation.plugins.Trigger(),\n\t\t\t\t\tbootstrap: new FormValidation.plugins.Bootstrap5({\n\t\t\t\t\t\trowSelector: '.fv-row',\n\t\t\t\t\t\teleInvalidClass: '',\n\t\t\t\t\t\teleValidClass: ''\n\t\t\t\t\t})\n\t\t\t\t}\n\t\t\t}\n\t\t));\n\t}\n\n\treturn {\n\t\t// Public Functions\n\t\tinit: function () {\n\t\t\t// Elements\n\t\t\tmodalEl = document.querySelector('#kt_modal_create_campaign');\n\n\t\t\tif (!modalEl) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tmodal = new bootstrap.Modal(modalEl);\n\n\t\t\tstepper = document.querySelector('#kt_modal_create_campaign_stepper');\n\t\t\tform = document.querySelector('#kt_modal_create_campaign_stepper_form');\n\t\t\tformSubmitButton = stepper.querySelector('[data-kt-stepper-action=\"submit\"]');\n\t\t\tformContinueButton = stepper.querySelector('[data-kt-stepper-action=\"next\"]');\n\n\t\t\tinitStepper();\n\t\t\tinitForm();\n\t\t\tinitValidation();\n\t\t}\n\t};\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n\tKTCreateCampaign.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/utilities/modals/create-campaign.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/utilities/modals/create-campaign.js"]();
/******/ 	
/******/ })()
;