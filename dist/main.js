/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/scripts/colorMode.js":
/*!**********************************!*\
  !*** ./src/scripts/colorMode.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addColorMode": () => (/* binding */ addColorMode)
/* harmony export */ });
const addColorMode = () => {
  const bodyElement = document.querySelector("body");

  if (localStorage.lightMode == "dark") {
    bodyElement.setAttribute("light-mode", "dark");
    showIcon();
  }

  function showIcon() {
    const colorIcons = document.querySelectorAll(".darkModeIcon");
    colorIcons.forEach((icon) => icon.classList.toggle("active"));
  }

  function toggle_light_mode() {
    var bodyElement = document.querySelector("body");
    if (localStorage.lightMode == "dark") {
      localStorage.lightMode = "light";
      bodyElement.setAttribute("light-mode", "light");
    } else {
      localStorage.lightMode = "dark";
      bodyElement.setAttribute("light-mode", "dark");
    }

    showIcon();
  }

  document
    .getElementById("toggleColorMode")
    .addEventListener("click", () => toggle_light_mode());
};




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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _scripts_colorMode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/colorMode */ "./src/scripts/colorMode.js");





(0,_scripts_colorMode__WEBPACK_IMPORTED_MODULE_2__.addColorMode)();

// const bodyElement = document.querySelector("body");

// if (localStorage.lightMode == "dark") {
//   bodyElement.setAttribute("light-mode", "dark");
//   showIcon();
// }

// function showIcon() {
//   const colorIcons = document.querySelectorAll(".darkModeIcon");
//   colorIcons.forEach((icon) => icon.classList.toggle("active"));
// }

// function toggle_light_mode() {
//   var bodyElement = document.querySelector("body");
//   if (localStorage.lightMode == "dark") {
//     localStorage.lightMode = "light";
//     bodyElement.setAttribute("light-mode", "light");
//   } else {
//     localStorage.lightMode = "dark";
//     bodyElement.setAttribute("light-mode", "dark");
//   }

//   showIcon();
// }

// document
//   .getElementById("toggleColorMode")
//   .addEventListener("click", () => toggle_light_mode());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUV3Qjs7Ozs7OztVQy9CeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTjRCO0FBQ0E7O0FBRXVCOztBQUVuRCxnRUFBWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz9kZDUxIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz8yMzk0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2NyaXB0cy9jb2xvck1vZGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgYWRkQ29sb3JNb2RlID0gKCkgPT4ge1xuICBjb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gIGlmIChsb2NhbFN0b3JhZ2UubGlnaHRNb2RlID09IFwiZGFya1wiKSB7XG4gICAgYm9keUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibGlnaHQtbW9kZVwiLCBcImRhcmtcIik7XG4gICAgc2hvd0ljb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dJY29uKCkge1xuICAgIGNvbnN0IGNvbG9ySWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhcmtNb2RlSWNvblwiKTtcbiAgICBjb2xvckljb25zLmZvckVhY2goKGljb24pID0+IGljb24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVfbGlnaHRfbW9kZSgpIHtcbiAgICB2YXIgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxpZ2h0TW9kZSA9PSBcImRhcmtcIikge1xuICAgICAgbG9jYWxTdG9yYWdlLmxpZ2h0TW9kZSA9IFwibGlnaHRcIjtcbiAgICAgIGJvZHlFbGVtZW50LnNldEF0dHJpYnV0ZShcImxpZ2h0LW1vZGVcIiwgXCJsaWdodFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLmxpZ2h0TW9kZSA9IFwiZGFya1wiO1xuICAgICAgYm9keUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibGlnaHQtbW9kZVwiLCBcImRhcmtcIik7XG4gICAgfVxuXG4gICAgc2hvd0ljb24oKTtcbiAgfVxuXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlQ29sb3JNb2RlXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0b2dnbGVfbGlnaHRfbW9kZSgpKTtcbn07XG5cbmV4cG9ydCB7IGFkZENvbG9yTW9kZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlcy9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgeyBhZGRDb2xvck1vZGUgfSBmcm9tIFwiLi9zY3JpcHRzL2NvbG9yTW9kZVwiO1xuXG5hZGRDb2xvck1vZGUoKTtcblxuLy8gY29uc3QgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuLy8gaWYgKGxvY2FsU3RvcmFnZS5saWdodE1vZGUgPT0gXCJkYXJrXCIpIHtcbi8vICAgYm9keUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibGlnaHQtbW9kZVwiLCBcImRhcmtcIik7XG4vLyAgIHNob3dJY29uKCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHNob3dJY29uKCkge1xuLy8gICBjb25zdCBjb2xvckljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kYXJrTW9kZUljb25cIik7XG4vLyAgIGNvbG9ySWNvbnMuZm9yRWFjaCgoaWNvbikgPT4gaWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gdG9nZ2xlX2xpZ2h0X21vZGUoKSB7XG4vLyAgIHZhciBib2R5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuLy8gICBpZiAobG9jYWxTdG9yYWdlLmxpZ2h0TW9kZSA9PSBcImRhcmtcIikge1xuLy8gICAgIGxvY2FsU3RvcmFnZS5saWdodE1vZGUgPSBcImxpZ2h0XCI7XG4vLyAgICAgYm9keUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibGlnaHQtbW9kZVwiLCBcImxpZ2h0XCIpO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIGxvY2FsU3RvcmFnZS5saWdodE1vZGUgPSBcImRhcmtcIjtcbi8vICAgICBib2R5RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJsaWdodC1tb2RlXCIsIFwiZGFya1wiKTtcbi8vICAgfVxuXG4vLyAgIHNob3dJY29uKCk7XG4vLyB9XG5cbi8vIGRvY3VtZW50XG4vLyAgIC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZUNvbG9yTW9kZVwiKVxuLy8gICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRvZ2dsZV9saWdodF9tb2RlKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9