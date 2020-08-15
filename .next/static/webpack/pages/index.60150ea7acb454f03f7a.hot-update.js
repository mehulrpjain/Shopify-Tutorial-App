webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/index.es.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ResourceList */ "./components/ResourceList.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      open: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSelection", function (resources) {
      var idsfromResources = resources.selection.map(function (product) {
        return product.id;
      });

      _this.setState({
        open: false
      });

      console.log(idsfromResources);
      store_js__WEBPACK_IMPORTED_MODULE_10___default.a.set('ids', idsfromResources);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var emptyState = !store_js__WEBPACK_IMPORTED_MODULE_10___default.a.get('ids');
      return __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Page"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__["TitleBar"], {
        title: "Benchmarker",
        primaryAction: {
          content: 'Select products',
          onAction: function onAction() {
            return _this2.setState({
              open: true
            });
          }
        }
      }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__["ResourcePicker"], {
        resourceType: "Product",
        showVariants: false,
        open: this.state.open,
        onSelection: function onSelection(resources) {
          return _this2.handleSelection(resources);
        },
        onCancel: function onCancel() {
          return _this2.setState({
            open: false
          });
        }
      }), emptyState ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["EmptyState"], {
        heading: "Discount your products temporarily",
        action: {
          content: 'Select products',
          onAction: function onAction() {
            return _this2.setState({
              open: true
            });
          }
        },
        image: img
      }, __jsx("p", null, "Select products to change their price temporarily."))) : __jsx(_components_ResourceList__WEBPACK_IMPORTED_MODULE_11__["default"], null)));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW1nIiwiSW5kZXgiLCJvcGVuIiwicmVzb3VyY2VzIiwiaWRzZnJvbVJlc291cmNlcyIsInNlbGVjdGlvbiIsIm1hcCIsInByb2R1Y3QiLCJpZCIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInN0b3JlIiwic2V0IiwiZW1wdHlTdGF0ZSIsImdldCIsImNvbnRlbnQiLCJvbkFjdGlvbiIsInN0YXRlIiwiaGFuZGxlU2VsZWN0aW9uIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLEdBQUcsR0FBRyxtRUFBWjs7SUFFTUMsSzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDTTtBQUFDQyxVQUFJLEVBQUU7QUFBUCxLOzswTkF3Q1UsVUFBQ0MsU0FBRCxFQUFlO0FBQzdCLFVBQU1DLGdCQUFnQixHQUFHRCxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQUNDLE9BQUQ7QUFBQSxlQUFhQSxPQUFPLENBQUNDLEVBQXJCO0FBQUEsT0FBeEIsQ0FBekI7O0FBQ0EsWUFBS0MsUUFBTCxDQUFjO0FBQUNQLFlBQUksRUFBRTtBQUFQLE9BQWQ7O0FBQ0FRLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUCxnQkFBWjtBQUNBUSxzREFBSyxDQUFDQyxHQUFOLENBQVUsS0FBVixFQUFpQlQsZ0JBQWpCO0FBQ0gsSzs7Ozs7Ozs2QkE1Q087QUFBQTs7QUFDUixVQUFNVSxVQUFVLEdBQUcsQ0FBQ0YsZ0RBQUssQ0FBQ0csR0FBTixDQUFVLEtBQVYsQ0FBcEI7QUFDQSxhQUNJLG1CQUNBLE1BQUMscURBQUQsUUFDSSxNQUFDLGtFQUFEO0FBQ0EsYUFBSyxFQUFDLGFBRE47QUFFQSxxQkFBYSxFQUFFO0FBQ1hDLGlCQUFPLEVBQUUsaUJBREU7QUFFWEMsa0JBQVEsRUFBRTtBQUFBLG1CQUFNLE1BQUksQ0FBQ1IsUUFBTCxDQUFlO0FBQUNQLGtCQUFJLEVBQUU7QUFBUCxhQUFmLENBQU47QUFBQTtBQUZDO0FBRmYsUUFESixFQVFJLE1BQUMsd0VBQUQ7QUFDSSxvQkFBWSxFQUFDLFNBRGpCO0FBRUksb0JBQVksRUFBRSxLQUZsQjtBQUdJLFlBQUksRUFBRSxLQUFLZ0IsS0FBTCxDQUFXaEIsSUFIckI7QUFJSSxtQkFBVyxFQUFFLHFCQUFDQyxTQUFEO0FBQUEsaUJBQWUsTUFBSSxDQUFDZ0IsZUFBTCxDQUFxQmhCLFNBQXJCLENBQWY7QUFBQSxTQUpqQjtBQUtJLGdCQUFRLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNNLFFBQUwsQ0FBYztBQUFFUCxnQkFBSSxFQUFFO0FBQVIsV0FBZCxDQUFOO0FBQUE7QUFMZCxRQVJKLEVBZUtZLFVBQVUsR0FDWCxNQUFDLHVEQUFELFFBQ0EsTUFBQywyREFBRDtBQUNJLGVBQU8sRUFBQyxvQ0FEWjtBQUVJLGNBQU0sRUFBRTtBQUNKRSxpQkFBTyxFQUFFLGlCQURMO0FBRUpDLGtCQUFRLEVBQUU7QUFBQSxtQkFBTSxNQUFJLENBQUNSLFFBQUwsQ0FBYztBQUFDUCxrQkFBSSxFQUFDO0FBQU4sYUFBZCxDQUFOO0FBQUE7QUFGTixTQUZaO0FBTUksYUFBSyxFQUFFRjtBQU5YLFNBUUEsc0VBUkEsQ0FEQSxDQURXLEdBYVgsTUFBQyxpRUFBRCxPQTVCSixDQURBLENBREo7QUFtQ0M7Ozs7RUF2Q2VvQiw0Q0FBSyxDQUFDQyxTOztBQWlEVHBCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYwMTUwZWE3YWNiNDU0ZjAzZjdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xheW91dCwgUGFnZSwgRW1wdHlTdGF0ZX0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7UmVzb3VyY2VQaWNrZXIsIFRpdGxlQmFyfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcclxuaW1wb3J0IFJlc291cmNlTGlzdHdpdGhQcm9kdWN0cyBmcm9tICcuLlxcXFxjb21wb25lbnRzXFxcXFJlc291cmNlTGlzdCc7XHJcblxyXG5jb25zdCBpbWcgPSAnaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTcvOTk1NS9maWxlcy9lbXB0eS1zdGF0ZS5zdmcnO1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7b3BlbjogZmFsc2V9O1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICBjb25zdCBlbXB0eVN0YXRlID0gIXN0b3JlLmdldCgnaWRzJyk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8UGFnZT5cclxuICAgICAgICAgICAgPFRpdGxlQmFyXHJcbiAgICAgICAgICAgIHRpdGxlPVwiQmVuY2htYXJrZXJcIlxyXG4gICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnU2VsZWN0IHByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB0aGlzLnNldFN0YXRlICh7b3BlbjogdHJ1ZX0pXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxSZXNvdXJjZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXHJcbiAgICAgICAgICAgICAgICBzaG93VmFyaWFudHM9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxyXG4gICAgICAgICAgICAgICAgb25TZWxlY3Rpb249eyhyZXNvdXJjZXMpID0+IHRoaXMuaGFuZGxlU2VsZWN0aW9uKHJlc291cmNlcyl9XHJcbiAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB7ZW1wdHlTdGF0ZT8gKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8RW1wdHlTdGF0ZVxyXG4gICAgICAgICAgICAgICAgaGVhZGluZz1cIkRpc2NvdW50IHlvdXIgcHJvZHVjdHMgdGVtcG9yYXJpbHlcIlxyXG4gICAgICAgICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1NlbGVjdCBwcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoe29wZW46dHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGltYWdlPXtpbWd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPHA+U2VsZWN0IHByb2R1Y3RzIHRvIGNoYW5nZSB0aGVpciBwcmljZSB0ZW1wb3JhcmlseS48L3A+XHJcbiAgICAgICAgICAgIDwvRW1wdHlTdGF0ZT4gXHJcbiAgICAgICAgICAgIDwvTGF5b3V0PikgOiAoXHJcbiAgICAgICAgICAgIDxSZXNvdXJjZUxpc3R3aXRoUHJvZHVjdHMgLz4pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApOyAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVTZWxlY3Rpb24gPSAocmVzb3VyY2VzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWRzZnJvbVJlc291cmNlcyA9IHJlc291cmNlcy5zZWxlY3Rpb24ubWFwKChwcm9kdWN0KSA9PiBwcm9kdWN0LmlkKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkc2Zyb21SZXNvdXJjZXMpO1xyXG4gICAgICAgIHN0b3JlLnNldCgnaWRzJywgaWRzZnJvbVJlc291cmNlcyk7XHJcbiAgICB9O1xyXG59XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==