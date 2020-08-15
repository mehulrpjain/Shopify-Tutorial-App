module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/annotated-layout.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/annotated-layout.js":
/*!***********************************!*\
  !*** ./pages/annotated-layout.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class AnnotatedLayout extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      discount: '10%',
      enabled: false
    });

    _defineProperty(this, "handleSubmit", () => {
      this.setState({
        discount: this.state.discount
      });
      console.log('submission', this.state);
    });

    _defineProperty(this, "handleChange", field => {
      return value => this.setState({
        [field]: value
      });
    });

    _defineProperty(this, "handleToggle", () => {
      this.setState(({
        enabled
      }) => {
        return {
          enabled: !enabled
        };
      });
    });
  }

  render() {
    const {
      discount,
      enabled
    } = this.state;
    const contentStatus = enabled ? 'Disable' : 'Enable';
    const textStatus = enabled ? 'enabled' : 'disabled';
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
      title: "Default Discount",
      description: "When you add a product to the this App, it will be discounted by this percentage."
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: this.handleSubmit
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: discount,
      onChange: this.handleChange('discount'),
      label: "Discount Percentage",
      type: "discount"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      distribution: "trailing"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true,
      submit: true
    }, "Save")))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].AnnotatedSection, {
      title: "Price Updates",
      description: "Temporarily disable all price updates"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["SettingToggle"], {
      action: {
        content: contentStatus,
        onAction: this.handleToggle
      },
      enabled: enabled
    }, "This setting is", '  ', __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextStyle"], {
      variation: "strong"
    }, textStatus)))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AnnotatedLayout);

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYW5ub3RhdGVkLWxheW91dC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc2hvcGlmeS9wb2xhcmlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJBbm5vdGF0ZWRMYXlvdXQiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRpc2NvdW50IiwiZW5hYmxlZCIsInNldFN0YXRlIiwic3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZmllbGQiLCJ2YWx1ZSIsInJlbmRlciIsImNvbnRlbnRTdGF0dXMiLCJ0ZXh0U3RhdHVzIiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiY29udGVudCIsIm9uQWN0aW9uIiwiaGFuZGxlVG9nZ2xlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7QUFFQSxNQUFNQSxlQUFOLFNBQThCQyw0Q0FBSyxDQUFDQyxTQUFwQyxDQUE2QztBQUFBO0FBQUE7O0FBQUEsbUNBQ2pDO0FBQ0pDLGNBQVEsRUFBQyxLQURMO0FBRUpDLGFBQU8sRUFBQztBQUZKLEtBRGlDOztBQUFBLDBDQXdEMUIsTUFBTTtBQUNqQixXQUFLQyxRQUFMLENBQWM7QUFDVkYsZ0JBQVEsRUFBRSxLQUFLRyxLQUFMLENBQVdIO0FBRFgsT0FBZDtBQUdBSSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLEtBQUtGLEtBQS9CO0FBQ0gsS0E3RHdDOztBQUFBLDBDQStEekJHLEtBQUQsSUFBVztBQUN0QixhQUFRQyxLQUFELElBQVcsS0FBS0wsUUFBTCxDQUFjO0FBQUUsU0FBQ0ksS0FBRCxHQUFTQztBQUFYLE9BQWQsQ0FBbEI7QUFDSCxLQWpFd0M7O0FBQUEsMENBbUUxQixNQUFNO0FBQ2pCLFdBQUtMLFFBQUwsQ0FBYyxDQUFDO0FBQUNEO0FBQUQsT0FBRCxLQUFlO0FBQ3pCLGVBQU87QUFBQ0EsaUJBQU8sRUFBRSxDQUFDQTtBQUFYLFNBQVA7QUFDSCxPQUZEO0FBR0gsS0F2RXdDO0FBQUE7O0FBTXpDTyxRQUFNLEdBQUU7QUFDSixVQUFNO0FBQUNSLGNBQUQ7QUFBV0M7QUFBWCxRQUFzQixLQUFLRSxLQUFqQztBQUNBLFVBQU1NLGFBQWEsR0FBR1IsT0FBTyxHQUFHLFNBQUgsR0FBZSxRQUE1QztBQUNBLFVBQU1TLFVBQVUsR0FBR1QsT0FBTyxHQUFHLFNBQUgsR0FBZSxVQUF6QztBQUVBLFdBQ0ksTUFBQyxxREFBRCxRQUNJLE1BQUMsdURBQUQsUUFDQSxNQUFDLHVEQUFELENBQVEsZ0JBQVI7QUFDSSxXQUFLLEVBQUMsa0JBRFY7QUFFSSxpQkFBVyxFQUFDO0FBRmhCLE9BSUksTUFBQyxxREFBRDtBQUFNLGVBQVM7QUFBZixPQUNJLE1BQUMscURBQUQ7QUFBTSxjQUFRLEVBQUUsS0FBS1U7QUFBckIsT0FDSSxNQUFDLDJEQUFELFFBQ0ksTUFBQywwREFBRDtBQUNJLFdBQUssRUFBRVgsUUFEWDtBQUVJLGNBQVEsRUFBRSxLQUFLWSxZQUFMLENBQWtCLFVBQWxCLENBRmQ7QUFHSSxXQUFLLEVBQUMscUJBSFY7QUFJSSxVQUFJLEVBQUM7QUFKVCxNQURKLEVBT0ksTUFBQyxzREFBRDtBQUFPLGtCQUFZLEVBQUM7QUFBcEIsT0FDSSxNQUFDLHVEQUFEO0FBQVEsYUFBTyxNQUFmO0FBQWdCLFlBQU07QUFBdEIsY0FESixDQVBKLENBREosQ0FESixDQUpKLENBREEsRUF1QkEsTUFBQyx1REFBRCxDQUFRLGdCQUFSO0FBQ0ksV0FBSyxFQUFDLGVBRFY7QUFFSSxpQkFBVyxFQUFDO0FBRmhCLE9BSUksTUFBQyw4REFBRDtBQUNJLFlBQU0sRUFBRTtBQUNKQyxlQUFPLEVBQUVKLGFBREw7QUFFSkssZ0JBQVEsRUFBRSxLQUFLQztBQUZYLE9BRFo7QUFLSSxhQUFPLEVBQUVkO0FBTGIsMEJBT29CLElBUHBCLEVBUUksTUFBQywwREFBRDtBQUFXLGVBQVMsRUFBQztBQUFyQixPQUErQlMsVUFBL0IsQ0FSSixDQUpKLENBdkJBLENBREosQ0FESjtBQTJDSDs7QUF0RHdDOztBQTBFOUJiLDhFQUFmLEU7Ozs7Ozs7Ozs7O0FDNUVBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2Fubm90YXRlZC1sYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2Fubm90YXRlZC1sYXlvdXQuanNcIik7XG4iLCJpbXBvcnQge0J1dHRvbiwgQ2FyZCwgRm9ybSwgRm9ybUxheW91dCwgU3RhY2ssIFRleHRGaWVsZCwgTGF5b3V0LCBQYWdlLCBTZXR0aW5nVG9nZ2xlLCBUZXh0U3R5bGV9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5cclxuY2xhc3MgQW5ub3RhdGVkTGF5b3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgZGlzY291bnQ6JzEwJScsXHJcbiAgICAgICAgZW5hYmxlZDpmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2Rpc2NvdW50LCBlbmFibGVkfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgY29udGVudFN0YXR1cyA9IGVuYWJsZWQgPyAnRGlzYWJsZScgOiAnRW5hYmxlJztcclxuICAgICAgICBjb25zdCB0ZXh0U3RhdHVzID0gZW5hYmxlZCA/ICdlbmFibGVkJyA6ICdkaXNhYmxlZCc7XHJcblxyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPFBhZ2U+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRGVmYXVsdCBEaXNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJXaGVuIHlvdSBhZGQgYSBwcm9kdWN0IHRvIHRoZSB0aGlzIEFwcCwgaXQgd2lsbCBiZSBkaXNjb3VudGVkIGJ5IHRoaXMgcGVyY2VudGFnZS5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rpc2NvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdEaXNjb3VudCBQZXJjZW50YWdlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGlzY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIGRpc3RyaWJ1dGlvbj1cInRyYWlsaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBzdWJtaXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPExheW91dC5Bbm5vdGF0ZWRTZWN0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJpY2UgVXBkYXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUZW1wb3JhcmlseSBkaXNhYmxlIGFsbCBwcmljZSB1cGRhdGVzXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ1RvZ2dsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnRTdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogdGhpcy5oYW5kbGVUb2dnbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ9e2VuYWJsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHNldHRpbmcgaXN7JyAgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249XCJzdHJvbmdcIj57dGV4dFN0YXR1c308L1RleHRTdHlsZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1NldHRpbmdUb2dnbGU+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dC5Bbm5vdGF0ZWRTZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBkaXNjb3VudDogdGhpcy5zdGF0ZS5kaXNjb3VudCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3VibWlzc2lvbicsIHRoaXMuc3RhdGUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVDaGFuZ2UgPSAoZmllbGQpID0+IHtcclxuICAgICAgICByZXR1cm4gKHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWV9KVxyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSgoe2VuYWJsZWR9KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7ZW5hYmxlZDogIWVuYWJsZWR9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQW5ub3RhdGVkTGF5b3V0OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==