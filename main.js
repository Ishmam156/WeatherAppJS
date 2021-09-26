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
/* harmony import */ var _images_sun_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/sun.svg */ "./src/images/sun.svg");
/* harmony import */ var _images_moon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/moon.svg */ "./src/images/moon.svg");
/* harmony import */ var _images_wind_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/wind.svg */ "./src/images/wind.svg");
/* harmony import */ var _images_pressure_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/pressure.svg */ "./src/images/pressure.svg");
/* harmony import */ var _images_humidity_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/humidity.svg */ "./src/images/humidity.svg");






const addColorMode = () => {
  const bodyElement = document.querySelector("body");

  const images = [
    {
      image: _images_sun_svg__WEBPACK_IMPORTED_MODULE_0__,
      active: true,
    },
    {
      image: _images_moon_svg__WEBPACK_IMPORTED_MODULE_1__,
      active: false,
    },
  ];

  images.forEach((image) => {
    const imageToAdd = document.createElement("img");
    imageToAdd.alt = "dark mode toggle";
    imageToAdd.src = image.image;
    imageToAdd.classList.add("darkModeIcon");

    if (image.active) {
      imageToAdd.classList.add("active");
    }

    bodyElement.prepend(imageToAdd);
  });

  const weatherImages = [
    {
      id: "windValue",
      image: _images_wind_svg__WEBPACK_IMPORTED_MODULE_2__,
    },
    {
      id: "pressureValue",
      image: _images_pressure_svg__WEBPACK_IMPORTED_MODULE_3__,
    },
    {
      id: "humidityValue",
      image: _images_humidity_svg__WEBPACK_IMPORTED_MODULE_4__,
    },
  ];

  weatherImages.forEach((image) => {
    const imageToAdd = document.createElement("img");
    imageToAdd.alt = image.id;
    imageToAdd.src = image.image;
    document.getElementById(image.id).parentElement.prepend(imageToAdd);
  });

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




/***/ }),

/***/ "./src/images/humidity.svg":
/*!*********************************!*\
  !*** ./src/images/humidity.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c0169a4407a86c4084ee.svg";

/***/ }),

/***/ "./src/images/moon.svg":
/*!*****************************!*\
  !*** ./src/images/moon.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ee1a77e0fe0d676e8ff7.svg";

/***/ }),

/***/ "./src/images/pressure.svg":
/*!*********************************!*\
  !*** ./src/images/pressure.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4955aef4c57dac19404f.svg";

/***/ }),

/***/ "./src/images/sun.svg":
/*!****************************!*\
  !*** ./src/images/sun.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "137e9c17591c362fd3de.svg";

/***/ }),

/***/ "./src/images/wind.svg":
/*!*****************************!*\
  !*** ./src/images/wind.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e7e26279a4099135c1c.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUM7QUFDRTtBQUNBO0FBQ1E7QUFDQTs7QUFFbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSw0Q0FBUTtBQUNyQjtBQUNBLEtBQUs7QUFDTDtBQUNBLGFBQWEsNkNBQVM7QUFDdEI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsNkNBQVM7QUFDdEIsS0FBSztBQUNMO0FBQ0E7QUFDQSxhQUFhLGlEQUFhO0FBQzFCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsYUFBYSxpREFBYTtBQUMxQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ25GeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZjRCO0FBQ0E7O0FBRXVCOztBQUVuRCxnRUFBWTs7QUFFWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz9kZDUxIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz8yMzk0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvc2NyaXB0cy9jb2xvck1vZGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IHN1bkltYWdlIGZyb20gXCIuLi9pbWFnZXMvc3VuLnN2Z1wiO1xuaW1wb3J0IG1vb25JbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL21vb24uc3ZnXCI7XG5pbXBvcnQgd2luZEltYWdlIGZyb20gXCIuLi9pbWFnZXMvd2luZC5zdmdcIjtcbmltcG9ydCBwcmVzc3VyZUltYWdlIGZyb20gXCIuLi9pbWFnZXMvcHJlc3N1cmUuc3ZnXCI7XG5pbXBvcnQgaHVtaWRpdHlJbWFnZSBmcm9tIFwiLi4vaW1hZ2VzL2h1bWlkaXR5LnN2Z1wiO1xuXG5jb25zdCBhZGRDb2xvck1vZGUgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgY29uc3QgaW1hZ2VzID0gW1xuICAgIHtcbiAgICAgIGltYWdlOiBzdW5JbWFnZSxcbiAgICAgIGFjdGl2ZTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGltYWdlOiBtb29uSW1hZ2UsXG4gICAgICBhY3RpdmU6IGZhbHNlLFxuICAgIH0sXG4gIF07XG5cbiAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgY29uc3QgaW1hZ2VUb0FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2VUb0FkZC5hbHQgPSBcImRhcmsgbW9kZSB0b2dnbGVcIjtcbiAgICBpbWFnZVRvQWRkLnNyYyA9IGltYWdlLmltYWdlO1xuICAgIGltYWdlVG9BZGQuY2xhc3NMaXN0LmFkZChcImRhcmtNb2RlSWNvblwiKTtcblxuICAgIGlmIChpbWFnZS5hY3RpdmUpIHtcbiAgICAgIGltYWdlVG9BZGQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9XG5cbiAgICBib2R5RWxlbWVudC5wcmVwZW5kKGltYWdlVG9BZGQpO1xuICB9KTtcblxuICBjb25zdCB3ZWF0aGVySW1hZ2VzID0gW1xuICAgIHtcbiAgICAgIGlkOiBcIndpbmRWYWx1ZVwiLFxuICAgICAgaW1hZ2U6IHdpbmRJbWFnZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcInByZXNzdXJlVmFsdWVcIixcbiAgICAgIGltYWdlOiBwcmVzc3VyZUltYWdlLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiaHVtaWRpdHlWYWx1ZVwiLFxuICAgICAgaW1hZ2U6IGh1bWlkaXR5SW1hZ2UsXG4gICAgfSxcbiAgXTtcblxuICB3ZWF0aGVySW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgY29uc3QgaW1hZ2VUb0FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2VUb0FkZC5hbHQgPSBpbWFnZS5pZDtcbiAgICBpbWFnZVRvQWRkLnNyYyA9IGltYWdlLmltYWdlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGltYWdlLmlkKS5wYXJlbnRFbGVtZW50LnByZXBlbmQoaW1hZ2VUb0FkZCk7XG4gIH0pO1xuXG4gIGlmIChsb2NhbFN0b3JhZ2UubGlnaHRNb2RlID09IFwiZGFya1wiKSB7XG4gICAgYm9keUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibGlnaHQtbW9kZVwiLCBcImRhcmtcIik7XG4gICAgc2hvd0ljb24oKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dJY29uKCkge1xuICAgIGNvbnN0IGNvbG9ySWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRhcmtNb2RlSWNvblwiKTtcbiAgICBjb2xvckljb25zLmZvckVhY2goKGljb24pID0+IGljb24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVfbGlnaHRfbW9kZSgpIHtcbiAgICB2YXIgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxpZ2h0TW9kZSA9PSBcImRhcmtcIikge1xuICAgICAgbG9jYWxTdG9yYWdlLmxpZ2h0TW9kZSA9IFwibGlnaHRcIjtcbiAgICAgIGJvZHlFbGVtZW50LnNldEF0dHJpYnV0ZShcImxpZ2h0LW1vZGVcIiwgXCJsaWdodFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLmxpZ2h0TW9kZSA9IFwiZGFya1wiO1xuICAgICAgYm9keUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibGlnaHQtbW9kZVwiLCBcImRhcmtcIik7XG4gICAgfVxuXG4gICAgc2hvd0ljb24oKTtcbiAgfVxuXG4gIGRvY3VtZW50XG4gICAgLmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlQ29sb3JNb2RlXCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0b2dnbGVfbGlnaHRfbW9kZSgpKTtcbn07XG5cbmV4cG9ydCB7IGFkZENvbG9yTW9kZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IFwiLi9zdHlsZXMvcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcblxuaW1wb3J0IHsgYWRkQ29sb3JNb2RlIH0gZnJvbSBcIi4vc2NyaXB0cy9jb2xvck1vZGVcIjtcblxuYWRkQ29sb3JNb2RlKCk7XG5cbi8vIGNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbi8vIGlmIChsb2NhbFN0b3JhZ2UubGlnaHRNb2RlID09IFwiZGFya1wiKSB7XG4vLyAgIGJvZHlFbGVtZW50LnNldEF0dHJpYnV0ZShcImxpZ2h0LW1vZGVcIiwgXCJkYXJrXCIpO1xuLy8gICBzaG93SWNvbigpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBzaG93SWNvbigpIHtcbi8vICAgY29uc3QgY29sb3JJY29ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFya01vZGVJY29uXCIpO1xuLy8gICBjb2xvckljb25zLmZvckVhY2goKGljb24pID0+IGljb24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKSk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIHRvZ2dsZV9saWdodF9tb2RlKCkge1xuLy8gICB2YXIgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbi8vICAgaWYgKGxvY2FsU3RvcmFnZS5saWdodE1vZGUgPT0gXCJkYXJrXCIpIHtcbi8vICAgICBsb2NhbFN0b3JhZ2UubGlnaHRNb2RlID0gXCJsaWdodFwiO1xuLy8gICAgIGJvZHlFbGVtZW50LnNldEF0dHJpYnV0ZShcImxpZ2h0LW1vZGVcIiwgXCJsaWdodFwiKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBsb2NhbFN0b3JhZ2UubGlnaHRNb2RlID0gXCJkYXJrXCI7XG4vLyAgICAgYm9keUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibGlnaHQtbW9kZVwiLCBcImRhcmtcIik7XG4vLyAgIH1cblxuLy8gICBzaG93SWNvbigpO1xuLy8gfVxuXG4vLyBkb2N1bWVudFxuLy8gICAuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVDb2xvck1vZGVcIilcbi8vICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0b2dnbGVfbGlnaHRfbW9kZSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==