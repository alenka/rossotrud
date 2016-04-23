/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	;$(function () {

		// clickable anons-block
		$("section").on("click", "article", function () {
			window.location = $(this).find("a").attr('href');
		});

		// select lang
		$('.navbar-default.visible-xs .lang').on('click', 'a', function () {
			$('.navbar-default.visible-xs .lang a.active').removeClass('active');
			$(this).addClass('active');
		});

		// menu
		$('.navbar-default.visible-xs .navbar-nav li').on('click', '> a', function () {
			$('.navbar-default.visible-xs .navbar-nav li.active').removeClass('active');
			this.closest('li').classList.toggle('active');
		});
		$('.navbar-default.visible-xs .navbar-nav li').on('click', '> a', function () {
			if (this.nextElementSibling.tagName === 'UL') {
				this.closest('li').classList.toggle('open');
				return false;
			}
		});

		// polling
		var poll = document.querySelector('.pollBlock .poll');
		var pollString = document.querySelectorAll('.pollBlock .poll table tr');
		var pollMaxValue = 0;
		[].forEach.call(pollString, function (elem) {
			if (parseInt(elem.getAttribute("data-persent")) > pollMaxValue) {
				pollMaxValue = parseInt(elem.getAttribute("data-persent"));
			}
			elem.children[1].children[0].style.width = elem.getAttribute("data-persent");
			elem.children[0].innerText = elem.getAttribute("data-persent");
		});
		document.querySelector('.pollBlock .poll table tr[data-persent="52%"]').children[1].children[0].style.backgroundColor = "#ffd180";
		//if(parseInt(getComputedStyle(poll).height) >= 260) {
		//	poll.style.height = "260px";
		//	poll.nextElementSibling.style.display = 'block';
		//};

		// search line
		var searchfield = $('.navbar-desktop .searchField input.form-control');
		$('.navbar.navbar-desktop .search').click(function () {
			$('.navbar-desktop .searchField').animate({
				left: '0px'
			}, 500);
			return false;
		});
		$('.container').click(function (evt) {
			if ($('.navbar-desktop .searchField').css('display') === 'block') {
				if (evt.target != searchfield[0]) {
					$('.navbar-desktop .searchField').animate({
						left: '100%'
					}, 500);
				}
			}
		});
	});

/***/ }
/******/ ]);