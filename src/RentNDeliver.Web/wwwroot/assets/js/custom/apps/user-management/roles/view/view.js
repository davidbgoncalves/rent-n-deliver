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

/***/ "../src/demo1/js/custom/apps/user-management/roles/view/view.js":
/*!**********************************************************************!*\
  !*** ../src/demo1/js/custom/apps/user-management/roles/view/view.js ***!
  \**********************************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTUsersViewRole = function () {\n    // Shared variables\n    var datatable;\n    var table;\n\n    // Init add schedule modal\n    var initViewRole = () => {\n        // Set date data order\n        const tableRows = table.querySelectorAll('tbody tr');\n\n        tableRows.forEach(row => {\n            const dateRow = row.querySelectorAll('td');\n            const realDate = moment(dateRow[3].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 5th column in table\n            dateRow[3].setAttribute('data-order', realDate);\n        });\n\n         // Init datatable --- more info on datatables: https://datatables.net/manual/\n         datatable = $(table).DataTable({\n            \"info\": false,\n            'order': [],\n            \"pageLength\": 5,\n            \"lengthChange\": false,\n            'columnDefs': [\n                { orderable: false, targets: 0 }, // Disable ordering on column 0 (checkbox)\n                { orderable: false, targets: 4 }, // Disable ordering on column 4 (actions)\n            ]\n        });        \n    }\n\n    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()\n    var handleSearchDatatable = () => {\n        const filterSearch = document.querySelector('[data-kt-roles-table-filter=\"search\"]');\n        filterSearch.addEventListener('keyup', function (e) {\n            datatable.search(e.target.value).draw();\n        });\n    }\n\n    // Delete user\n    var handleDeleteRows = () => {\n        // Select all delete buttons\n        const deleteButtons = table.querySelectorAll('[data-kt-roles-table-filter=\"delete_row\"]');\n\n        deleteButtons.forEach(d => {\n            // Delete button on click\n            d.addEventListener('click', function (e) {\n                e.preventDefault();\n\n                // Select parent row\n                const parent = e.target.closest('tr');\n\n                // Get customer name\n                const userName = parent.querySelectorAll('td')[1].innerText;\n\n                // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n                Swal.fire({\n                    text: \"Are you sure you want to delete \" + userName + \"?\",\n                    icon: \"warning\",\n                    showCancelButton: true,\n                    buttonsStyling: false,\n                    confirmButtonText: \"Yes, delete!\",\n                    cancelButtonText: \"No, cancel\",\n                    customClass: {\n                        confirmButton: \"btn fw-bold btn-danger\",\n                        cancelButton: \"btn fw-bold btn-active-light-primary\"\n                    }\n                }).then(function (result) {\n                    if (result.value) {\n                        Swal.fire({\n                            text: \"You have deleted \" + userName + \"!.\",\n                            icon: \"success\",\n                            buttonsStyling: false,\n                            confirmButtonText: \"Ok, got it!\",\n                            customClass: {\n                                confirmButton: \"btn fw-bold btn-primary\",\n                            }\n                        }).then(function () {\n                            // Remove current row\n                            datatable.row($(parent)).remove().draw();\n                        });\n                    } else if (result.dismiss === 'cancel') {\n                        Swal.fire({\n                            text: customerName + \" was not deleted.\",\n                            icon: \"error\",\n                            buttonsStyling: false,\n                            confirmButtonText: \"Ok, got it!\",\n                            customClass: {\n                                confirmButton: \"btn fw-bold btn-primary\",\n                            }\n                        });\n                    }\n                });\n            })\n        });\n    }\n\n    // Init toggle toolbar\n    var initToggleToolbar = () => {\n        // Toggle selected action toolbar\n        // Select all checkboxes\n        const checkboxes = table.querySelectorAll('[type=\"checkbox\"]');\n\n        // Select elements\n        const deleteSelected = document.querySelector('[data-kt-view-roles-table-select=\"delete_selected\"]');\n\n        // Toggle delete selected toolbar\n        checkboxes.forEach(c => {\n            // Checkbox on click event\n            c.addEventListener('click', function () {\n                setTimeout(function () {\n                    toggleToolbars();\n                }, 50);\n            });\n        });\n\n        // Deleted selected rows\n        deleteSelected.addEventListener('click', function () {\n            // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n            Swal.fire({\n                text: \"Are you sure you want to delete selected customers?\",\n                icon: \"warning\",\n                showCancelButton: true,\n                buttonsStyling: false,\n                confirmButtonText: \"Yes, delete!\",\n                cancelButtonText: \"No, cancel\",\n                customClass: {\n                    confirmButton: \"btn fw-bold btn-danger\",\n                    cancelButton: \"btn fw-bold btn-active-light-primary\"\n                }\n            }).then(function (result) {\n                if (result.value) {\n                    Swal.fire({\n                        text: \"You have deleted all selected customers!.\",\n                        icon: \"success\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn fw-bold btn-primary\",\n                        }\n                    }).then(function () {\n                        // Remove all selected customers\n                        checkboxes.forEach(c => {\n                            if (c.checked) {\n                                datatable.row($(c.closest('tbody tr'))).remove().draw();\n                            }\n                        });\n\n                        // Remove header checked box\n                        const headerCheckbox = table.querySelectorAll('[type=\"checkbox\"]')[0];\n                        headerCheckbox.checked = false;\n                    }).then(function(){\n                        toggleToolbars(); // Detect checked checkboxes\n                        initToggleToolbar(); // Re-init toolbar to recalculate checkboxes\n                    });\n                } else if (result.dismiss === 'cancel') {\n                    Swal.fire({\n                        text: \"Selected customers was not deleted.\",\n                        icon: \"error\",\n                        buttonsStyling: false,\n                        confirmButtonText: \"Ok, got it!\",\n                        customClass: {\n                            confirmButton: \"btn fw-bold btn-primary\",\n                        }\n                    });\n                }\n            });\n        });\n    }\n\n    // Toggle toolbars\n    const toggleToolbars = () => {\n        // Define variables\n        const toolbarBase = document.querySelector('[data-kt-view-roles-table-toolbar=\"base\"]');\n        const toolbarSelected = document.querySelector('[data-kt-view-roles-table-toolbar=\"selected\"]');\n        const selectedCount = document.querySelector('[data-kt-view-roles-table-select=\"selected_count\"]');\n\n        // Select refreshed checkbox DOM elements \n        const allCheckboxes = table.querySelectorAll('tbody [type=\"checkbox\"]');\n\n        // Detect checkboxes state & count\n        let checkedState = false;\n        let count = 0;\n\n        // Count checked boxes\n        allCheckboxes.forEach(c => {\n            if (c.checked) {\n                checkedState = true;\n                count++;\n            }\n        });\n\n        // Toggle toolbars\n        if (checkedState) {\n            selectedCount.innerHTML = count;\n            toolbarBase.classList.add('d-none');\n            toolbarSelected.classList.remove('d-none');\n        } else {\n            toolbarBase.classList.remove('d-none');\n            toolbarSelected.classList.add('d-none');\n        }\n    }\n\n    return {\n        // Public functions\n        init: function () {\n            table = document.querySelector('#kt_roles_view_table');\n            \n            if (!table) {\n                return;\n            }\n\n            initViewRole();\n            handleSearchDatatable();\n            handleDeleteRows();\n            initToggleToolbar();\n        }\n    };\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function () {\n    KTUsersViewRole.init();\n});\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/apps/user-management/roles/view/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/apps/user-management/roles/view/view.js"]();
/******/ 	
/******/ })()
;