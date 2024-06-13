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

/***/ "../src/demo1/js/custom/pages/social/feeds.js":
/*!****************************************************!*\
  !*** ../src/demo1/js/custom/pages/social/feeds.js ***!
  \****************************************************/
/***/ (() => {

eval("\n\n// Class definition\nvar KTSocialFeeds = function () {    \n    // init variables\n    var morePostsBtn = document.getElementById('kt_social_feeds_more_posts_btn');\n    var morePosts = document.getElementById('kt_social_feeds_more_posts');\n    var posts = document.getElementById('kt_social_feeds_posts');\n\n    var postInput = document.getElementById('kt_social_feeds_post_input');\n    var postBtn =  document.getElementById('kt_social_feeds_post_btn');\n    var newPost = document.getElementById('kt_social_feeds_new_post');\n    \n    // Private functions\n    var handleMorePosts = function () {\n        // Show more click\n        morePostsBtn.addEventListener('click', function (e) {\n            // Cancel default behavior\n            e.preventDefault();\n            \n            // Show indicator\n            morePostsBtn.setAttribute('data-kt-indicator', 'on');\n\n            // Disable button to avoid multiple click \n            morePostsBtn.disabled = true;\n            \n            // Simulate form submission process\n            setTimeout(function() {\n                // Hide loading indication\n                morePostsBtn.removeAttribute('data-kt-indicator');\n\n                // Enable button\n\t\t\t\tmorePostsBtn.disabled = false;\n\n                // Hide button\n                morePostsBtn.classList.add('d-none');\n\n                // Show card\n                morePosts.classList.remove('d-none');\n\n                // Scroll to\n                KTUtil.scrollTo(morePosts, 200);\n            }, 1000);\n        });\n    }\n\n    // Private functions\n    var handleNewPost = function () {\n        // Show more click\n        postBtn.addEventListener('click', function (e) {\n            // Cancel default behavior\n            e.preventDefault();\n\n            // Show indicator\n            postBtn.setAttribute('data-kt-indicator', 'on');\n\n            // Disable button to avoid multiple click \n            postBtn.disabled = true;\n            \n            // Simulate form submission process\n            setTimeout(function() {\n                // Hide loading indication\n                postBtn.removeAttribute('data-kt-indicator');\n\n                // Enable button\n\t\t\t\tpostBtn.disabled = false;\n\n                var message = postInput.value;\n                var post = newPost.querySelector('.card').cloneNode(true);\n                \n                posts.prepend(post);\n\n                if (message.length > 0) {\n                    post.querySelector('[data-kt-post-element=\"content\"]').innerHTML = message;\n                }                \n\n                // Scroll to post\n                KTUtil.scrollTo(post, 200);\n            }, 1000);\n        });\n    }\n\n    // Public methods\n    return {\n        init: function () {\n            handleMorePosts();\n            handleNewPost();\n        }\n    }\n}();\n\n// On document ready\nKTUtil.onDOMContentLoaded(function() {\n    KTSocialFeeds.init();\n});\n\n\n//# sourceURL=webpack://keenthemes/../src/demo1/js/custom/pages/social/feeds.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../src/demo1/js/custom/pages/social/feeds.js"]();
/******/ 	
/******/ })()
;