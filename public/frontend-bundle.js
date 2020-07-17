/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/navigation */ \"./src/js/navigation.js\");\n/* harmony import */ var _js_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/skip-link-focus-fix */ \"./src/js/skip-link-focus-fix.js\");\n/* harmony import */ var _js_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_skip_link_focus_fix__WEBPACK_IMPORTED_MODULE_1__);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/MzcwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vanMvbmF2aWdhdGlvbic7XG5pbXBvcnQgJy4vanMvc2tpcC1saW5rLWZvY3VzLWZpeCc7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/navigation.js":
/*!******************************!*\
  !*** ./src/js/navigation.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * File navigation.js.\r\n *\r\n * Handles toggling the navigation menu for small screens and enables TAB key\r\n * navigation support for dropdown menus.\r\n */\n(function () {\n  var sidebarMenu, container, button, menu, links, i, len;\n  container = document.getElementById('site-navigation');\n\n  if (!container) {\n    return;\n  } // button = container.getElementsByTagName('button')[0];\n\n\n  button = container.getElementsByClassName('menu-toggle')[0];\n\n  if ('undefined' === typeof button) {\n    return;\n  } // menu = container.getElementsByTagName('ul')[0];\n\n\n  sidebarMenu = document.getElementById('sidebar-menu'); // Hide menu toggle button if menu is empty and return early.\n\n  if ('undefined' === typeof sidebarMenu) {\n    button.style.display = 'none';\n    return;\n  }\n\n  sidebarMenu.setAttribute('aria-expanded', 'false');\n\n  if (-1 === sidebarMenu.className.indexOf('nav-menu')) {\n    sidebarMenu.className += ' nav-menu';\n  } // button.onclick = function() {\n\n\n  button.addEventListener(\"click\", function () {\n    if (-1 !== sidebarMenu.className.indexOf('toggled')) {\n      // container.className = container.className.replace(' toggled', '');\n      sidebarMenu.className = sidebarMenu.className.replace(' toggled', '');\n      button.setAttribute('aria-expanded', 'false'); // menu.setAttribute('aria-expanded', 'false');\n\n      sidebarMenu.setAttribute('aria-expanded', 'false');\n    } else {\n      // container.className += ' toggled';\n      sidebarMenu.className += ' toggled';\n      button.setAttribute('aria-expanded', 'true'); // menu.setAttribute('aria-expanded', 'true');\n\n      sidebarMenu.setAttribute('aria-expanded', 'true');\n    }\n  }); //TODO: I don't know what this does.\n  // // Get all the link elements within the menu.\n  // links = menu.getElementsByTagName('a');\n  // // Each time a menu link is focused or blurred, toggle focus.\n  // for (i = 0, len = links.length; i < len; i++) {\n  //   links[i].addEventListener('focus', toggleFocus, true);\n  //   links[i].addEventListener('blur', toggleFocus, true);\n  // }\n  // /**\n  //  * Sets or removes .focus class on an element.\n  //  */\n  // function toggleFocus() {\n  //   var self = this;\n  //   // Move up through the ancestors of the current link until we hit .nav-menu.\n  //   while (-1 === self.className.indexOf('nav-menu')) {\n  //     // On li elements toggle the class .focus.\n  //     if ('li' === self.tagName.toLowerCase()) {\n  //       if (-1 !== self.className.indexOf('focus')) {\n  //         self.className = self.className.replace(' focus', '');\n  //       } else {\n  //         self.className += ' focus';\n  //       }\n  //     }\n  //     self = self.parentElement;\n  //   }\n  // }\n  // /**\n  //  * Toggles `focus` class to allow submenu access on tablets.\n  //  */\n  // (function(container) {\n  //   var touchStartFn,\n  //     i,\n  //     parentLink = container.querySelectorAll('.menu-item-has-children > a, .page_item_has_children > a');\n  //   if ('ontouchstart' in window) {\n  //     touchStartFn = function(e) {\n  //       var menuItem = this.parentNode,\n  //         i;\n  //       if (!menuItem.classList.contains('focus')) {\n  //         e.preventDefault();\n  //         for (i = 0; i < menuItem.parentNode.children.length; ++i) {\n  //           if (menuItem === menuItem.parentNode.children[i]) {\n  //             continue;\n  //           }\n  //           menuItem.parentNode.children[i].classList.remove('focus');\n  //         }\n  //         menuItem.classList.add('focus');\n  //       } else {\n  //         menuItem.classList.remove('focus');\n  //       }\n  //     };\n  //     for (i = 0; i < parentLink.length; ++i) {\n  //       parentLink[i].addEventListener('touchstart', touchStartFn, false);\n  //     }\n  //   }\n  // })(container);\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbmF2aWdhdGlvbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9uYXZpZ2F0aW9uLmpzPzIzNmIiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEZpbGUgbmF2aWdhdGlvbi5qcy5cclxuICpcclxuICogSGFuZGxlcyB0b2dnbGluZyB0aGUgbmF2aWdhdGlvbiBtZW51IGZvciBzbWFsbCBzY3JlZW5zIGFuZCBlbmFibGVzIFRBQiBrZXlcclxuICogbmF2aWdhdGlvbiBzdXBwb3J0IGZvciBkcm9wZG93biBtZW51cy5cclxuICovXG4oZnVuY3Rpb24gKCkge1xuICB2YXIgc2lkZWJhck1lbnUsIGNvbnRhaW5lciwgYnV0dG9uLCBtZW51LCBsaW5rcywgaSwgbGVuO1xuICBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2l0ZS1uYXZpZ2F0aW9uJyk7XG5cbiAgaWYgKCFjb250YWluZXIpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gYnV0dG9uID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdidXR0b24nKVswXTtcblxuXG4gIGJ1dHRvbiA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtZW51LXRvZ2dsZScpWzBdO1xuXG4gIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIGJ1dHRvbikge1xuICAgIHJldHVybjtcbiAgfSAvLyBtZW51ID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCd1bCcpWzBdO1xuXG5cbiAgc2lkZWJhck1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhci1tZW51Jyk7IC8vIEhpZGUgbWVudSB0b2dnbGUgYnV0dG9uIGlmIG1lbnUgaXMgZW1wdHkgYW5kIHJldHVybiBlYXJseS5cblxuICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBzaWRlYmFyTWVudSkge1xuICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHNpZGViYXJNZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXG4gIGlmICgtMSA9PT0gc2lkZWJhck1lbnUuY2xhc3NOYW1lLmluZGV4T2YoJ25hdi1tZW51JykpIHtcbiAgICBzaWRlYmFyTWVudS5jbGFzc05hbWUgKz0gJyBuYXYtbWVudSc7XG4gIH0gLy8gYnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblxuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICgtMSAhPT0gc2lkZWJhck1lbnUuY2xhc3NOYW1lLmluZGV4T2YoJ3RvZ2dsZWQnKSkge1xuICAgICAgLy8gY29udGFpbmVyLmNsYXNzTmFtZSA9IGNvbnRhaW5lci5jbGFzc05hbWUucmVwbGFjZSgnIHRvZ2dsZWQnLCAnJyk7XG4gICAgICBzaWRlYmFyTWVudS5jbGFzc05hbWUgPSBzaWRlYmFyTWVudS5jbGFzc05hbWUucmVwbGFjZSgnIHRvZ2dsZWQnLCAnJyk7XG4gICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7IC8vIG1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAgIHNpZGViYXJNZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb250YWluZXIuY2xhc3NOYW1lICs9ICcgdG9nZ2xlZCc7XG4gICAgICBzaWRlYmFyTWVudS5jbGFzc05hbWUgKz0gJyB0b2dnbGVkJztcbiAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpOyAvLyBtZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG5cbiAgICAgIHNpZGViYXJNZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgfVxuICB9KTsgLy9UT0RPOiBJIGRvbid0IGtub3cgd2hhdCB0aGlzIGRvZXMuXG4gIC8vIC8vIEdldCBhbGwgdGhlIGxpbmsgZWxlbWVudHMgd2l0aGluIHRoZSBtZW51LlxuICAvLyBsaW5rcyA9IG1lbnUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKTtcbiAgLy8gLy8gRWFjaCB0aW1lIGEgbWVudSBsaW5rIGlzIGZvY3VzZWQgb3IgYmx1cnJlZCwgdG9nZ2xlIGZvY3VzLlxuICAvLyBmb3IgKGkgPSAwLCBsZW4gPSBsaW5rcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAvLyAgIGxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdG9nZ2xlRm9jdXMsIHRydWUpO1xuICAvLyAgIGxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0b2dnbGVGb2N1cywgdHJ1ZSk7XG4gIC8vIH1cbiAgLy8gLyoqXG4gIC8vICAqIFNldHMgb3IgcmVtb3ZlcyAuZm9jdXMgY2xhc3Mgb24gYW4gZWxlbWVudC5cbiAgLy8gICovXG4gIC8vIGZ1bmN0aW9uIHRvZ2dsZUZvY3VzKCkge1xuICAvLyAgIHZhciBzZWxmID0gdGhpcztcbiAgLy8gICAvLyBNb3ZlIHVwIHRocm91Z2ggdGhlIGFuY2VzdG9ycyBvZiB0aGUgY3VycmVudCBsaW5rIHVudGlsIHdlIGhpdCAubmF2LW1lbnUuXG4gIC8vICAgd2hpbGUgKC0xID09PSBzZWxmLmNsYXNzTmFtZS5pbmRleE9mKCduYXYtbWVudScpKSB7XG4gIC8vICAgICAvLyBPbiBsaSBlbGVtZW50cyB0b2dnbGUgdGhlIGNsYXNzIC5mb2N1cy5cbiAgLy8gICAgIGlmICgnbGknID09PSBzZWxmLnRhZ05hbWUudG9Mb3dlckNhc2UoKSkge1xuICAvLyAgICAgICBpZiAoLTEgIT09IHNlbGYuY2xhc3NOYW1lLmluZGV4T2YoJ2ZvY3VzJykpIHtcbiAgLy8gICAgICAgICBzZWxmLmNsYXNzTmFtZSA9IHNlbGYuY2xhc3NOYW1lLnJlcGxhY2UoJyBmb2N1cycsICcnKTtcbiAgLy8gICAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgICBzZWxmLmNsYXNzTmFtZSArPSAnIGZvY3VzJztcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgICAgc2VsZiA9IHNlbGYucGFyZW50RWxlbWVudDtcbiAgLy8gICB9XG4gIC8vIH1cbiAgLy8gLyoqXG4gIC8vICAqIFRvZ2dsZXMgYGZvY3VzYCBjbGFzcyB0byBhbGxvdyBzdWJtZW51IGFjY2VzcyBvbiB0YWJsZXRzLlxuICAvLyAgKi9cbiAgLy8gKGZ1bmN0aW9uKGNvbnRhaW5lcikge1xuICAvLyAgIHZhciB0b3VjaFN0YXJ0Rm4sXG4gIC8vICAgICBpLFxuICAvLyAgICAgcGFyZW50TGluayA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEsIC5wYWdlX2l0ZW1faGFzX2NoaWxkcmVuID4gYScpO1xuICAvLyAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcbiAgLy8gICAgIHRvdWNoU3RhcnRGbiA9IGZ1bmN0aW9uKGUpIHtcbiAgLy8gICAgICAgdmFyIG1lbnVJdGVtID0gdGhpcy5wYXJlbnROb2RlLFxuICAvLyAgICAgICAgIGk7XG4gIC8vICAgICAgIGlmICghbWVudUl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdmb2N1cycpKSB7XG4gIC8vICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBtZW51SXRlbS5wYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aDsgKytpKSB7XG4gIC8vICAgICAgICAgICBpZiAobWVudUl0ZW0gPT09IG1lbnVJdGVtLnBhcmVudE5vZGUuY2hpbGRyZW5baV0pIHtcbiAgLy8gICAgICAgICAgICAgY29udGludWU7XG4gIC8vICAgICAgICAgICB9XG4gIC8vICAgICAgICAgICBtZW51SXRlbS5wYXJlbnROb2RlLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvY3VzJyk7XG4gIC8vICAgICAgICAgfVxuICAvLyAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ2ZvY3VzJyk7XG4gIC8vICAgICAgIH0gZWxzZSB7XG4gIC8vICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfTtcbiAgLy8gICAgIGZvciAoaSA9IDA7IGkgPCBwYXJlbnRMaW5rLmxlbmd0aDsgKytpKSB7XG4gIC8vICAgICAgIHBhcmVudExpbmtbaV0uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRvdWNoU3RhcnRGbiwgZmFsc2UpO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfSkoY29udGFpbmVyKTtcbn0pKCk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/navigation.js\n");

/***/ }),

/***/ "./src/js/skip-link-focus-fix.js":
/*!***************************************!*\
  !*** ./src/js/skip-link-focus-fix.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n * File skip-link-focus-fix.js.\r\n *\r\n * Helps with accessibility for keyboard only users.\r\n *\r\n * Learn more: https://git.io/vWdr2\r\n */\n(function () {\n  var isIe = /(trident|msie)/i.test(navigator.userAgent);\n\n  if (isIe && document.getElementById && window.addEventListener) {\n    window.addEventListener('hashchange', function () {\n      var id = location.hash.substring(1),\n          element;\n\n      if (!/^[A-z0-9_-]+$/.test(id)) {\n        return;\n      }\n\n      element = document.getElementById(id);\n\n      if (element) {\n        if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {\n          element.tabIndex = -1;\n        }\n\n        element.focus();\n      }\n    }, false);\n  }\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9za2lwLWxpbmstZm9jdXMtZml4LmpzP2VjYjAiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEZpbGUgc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5cclxuICpcclxuICogSGVscHMgd2l0aCBhY2Nlc3NpYmlsaXR5IGZvciBrZXlib2FyZCBvbmx5IHVzZXJzLlxyXG4gKlxyXG4gKiBMZWFybiBtb3JlOiBodHRwczovL2dpdC5pby92V2RyMlxyXG4gKi9cbihmdW5jdGlvbiAoKSB7XG4gIHZhciBpc0llID0gLyh0cmlkZW50fG1zaWUpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICBpZiAoaXNJZSAmJiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGlkID0gbG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSksXG4gICAgICAgICAgZWxlbWVudDtcblxuICAgICAgaWYgKCEvXltBLXowLTlfLV0rJC8udGVzdChpZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gICAgICBpZiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoIS9eKD86YXxzZWxlY3R8aW5wdXR8YnV0dG9ufHRleHRhcmVhKSQvaS50ZXN0KGVsZW1lbnQudGFnTmFtZSkpIHtcbiAgICAgICAgICBlbGVtZW50LnRhYkluZGV4ID0gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICB9XG59KSgpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/skip-link-focus-fix.js\n");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Fzcy9zdHlsZS5zY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGUuc2Nzcz8zYWM0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/sass/style.scss\n");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/sass/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });