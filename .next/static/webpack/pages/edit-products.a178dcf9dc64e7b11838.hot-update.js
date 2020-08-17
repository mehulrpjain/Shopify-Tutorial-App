webpackHotUpdate_N_E("pages/edit-products",{

/***/ "./pages/edit-products.js":
/*!********************************!*\
  !*** ./pages/edit-products.js ***!
  \********************************/
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
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/index.es.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");









var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_7__["default"])(["\n    mutation productVariantUpdate($input: ProductVariantInput!) {\n        productVariantUpdate(input: $input) {\n            product {\n                title\n            }\n            productVariant {\n                id\n                price\n            }\n        }\n    }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var UPDATE_PRICE = graphql_tag__WEBPACK_IMPORTED_MODULE_11___default()(_templateObject());

var EditProduct = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(EditProduct, _React$Component);

  var _super = _createSuper(EditProduct);

  function EditProduct() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EditProduct);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      discount: '',
      price: '',
      variantId: '',
      showToast: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (field) {
      return function (value) {
        return _this.setState(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, field, value));
      };
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "itemToBeConsumed", function () {
      var item = store_js__WEBPACK_IMPORTED_MODULE_10___default.a.get('item');
      var price = item.variants.edges[0].node.price;
      var variantId = item.variants.edges[0].node.id;
      var discounter = price * 0.1;

      _this.setState({
        price: price,
        variantId: variantId
      });

      console.log(_this.state);
      return (price - discounter).toFixed(2);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EditProduct, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        discount: this.itemToBeConsumed()
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          name = _this$state.name,
          price = _this$state.price,
          discount = _this$state.discount,
          variantId = _this$state.variantId;
      return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_12__["Mutation"], {
        mutation: UPDATE_PRICE
      }, function (handleSubmit, _ref) {
        var error = _ref.error,
            data = _ref.data;

        var showError = error && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Banner"], {
          status: "critical"
        }, error.message);

        var showToast = data && data.productVariantUpdate && __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Toast"], {
          content: "Sucessfully updated",
          onDismiss: function onDismiss() {
            return _this2.setState({
              showToast: false
            });
          }
        });

        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Frame"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"], null, showToast, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].Section, null, showError), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["DisplayText"], {
          size: "large"
        }, name), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Form"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], {
          sectioned: true
        }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
          prefix: "$",
          value: price,
          disabled: true,
          label: "Original price",
          type: "price"
        }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextField"], {
          prefix: "$",
          value: discount,
          onChange: _this2.handleChange('discount'),
          label: "Discounted price",
          type: "discount"
        })), __jsx("p", null, "This sale price will expire in two weeks"))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["PageActions"], {
          primaryAction: [{
            content: 'Save',
            onAction: function onAction() {
              var productVariableInput = {
                id: variantId,
                price: discount
              };
              handleSubmit({
                variables: {
                  input: productVariableInput
                }
              });
            }
          }],
          secondaryActions: [{
            content: 'Remove discount'
          }]
        }))))));
      });
    }
  }]);

  return EditProduct;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (EditProduct);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdC1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJVUERBVEVfUFJJQ0UiLCJncWwiLCJFZGl0UHJvZHVjdCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJzaG93VG9hc3QiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInRvRml4ZWQiLCJpdGVtVG9CZUNvbnN1bWVkIiwibmFtZSIsImhhbmRsZVN1Ym1pdCIsImVycm9yIiwiZGF0YSIsInNob3dFcnJvciIsIm1lc3NhZ2UiLCJwcm9kdWN0VmFyaWFudFVwZGF0ZSIsImhhbmRsZUNoYW5nZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsInByb2R1Y3RWYXJpYWJsZUlucHV0IiwidmFyaWFibGVzIiwiaW5wdXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBYUE7QUFDQTtBQUNBO0FBRUUsSUFBTUEsWUFBWSxHQUFHQyxtREFBSCxtQkFBbEI7O0lBZU1DLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsY0FBUSxFQUFFLEVBREo7QUFFTkMsV0FBSyxFQUFFLEVBRkQ7QUFHTkMsZUFBUyxFQUFFLEVBSEw7QUFJTkMsZUFBUyxFQUFDO0FBSkosSzs7dU5BOEZXLFVBQUNDLEtBQUQsRUFBVztBQUN4QixhQUFPLFVBQUNDLEtBQUQ7QUFBQSxlQUFXLE1BQUtDLFFBQUwsK0ZBQWlCRixLQUFqQixFQUF5QkMsS0FBekIsRUFBWDtBQUFBLE9BQVA7QUFDRCxLOzsyTkFHa0IsWUFBTTtBQUN2QixVQUFNRSxJQUFJLEdBQUdDLGdEQUFLLENBQUNDLEdBQU4sQ0FBVSxNQUFWLENBQWI7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Q0FBQztBQUNUVSx5QkFBUyxFQUFFO0FBQUVDLHVCQUFLLEVBQUVGO0FBQVQ7QUFERixlQUFELENBQVo7QUFHSDtBQVZELFdBRFcsQ0FEZjtBQWVBLDBCQUFnQixFQUFFLENBQ2Q7QUFDQUYsbUJBQU8sRUFBRTtBQURULFdBRGM7QUFmbEIsVUF4QkosQ0FGQSxDQUxKLENBREEsQ0FEQSxDQURKO0FBNkRILE9BMUVHLENBREo7QUE4RUM7Ozs7RUE3Rm1CSyw0Q0FBSyxDQUFDQyxTOztBQWdIYm5DLDBFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2VkaXQtcHJvZHVjdHMuYTE3OGRjZjlkYzY0ZTdiMTE4MzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBCYW5uZXIsXHJcbiAgICBGcmFtZSxcclxuICAgIFRvYXN0LFxyXG4gICAgQ2FyZCxcclxuICAgIERpc3BsYXlUZXh0LFxyXG4gICAgRm9ybSxcclxuICAgIEZvcm1MYXlvdXQsXHJcbiAgICBMYXlvdXQsXHJcbiAgICBQYWdlLFxyXG4gICAgUGFnZUFjdGlvbnMsXHJcbiAgICBUZXh0RmllbGRcclxuICB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgTXV0YXRpb24gfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xyXG5cclxuICBjb25zdCBVUERBVEVfUFJJQ0UgPSBncWxgXHJcbiAgICBtdXRhdGlvbiBwcm9kdWN0VmFyaWFudFVwZGF0ZSgkaW5wdXQ6IFByb2R1Y3RWYXJpYW50SW5wdXQhKSB7XHJcbiAgICAgICAgcHJvZHVjdFZhcmlhbnRVcGRhdGUoaW5wdXQ6ICRpbnB1dCkge1xyXG4gICAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQge1xyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgIHByaWNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBgO1xyXG5cclxuXHJcbiAgY2xhc3MgRWRpdFByb2R1Y3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgIGRpc2NvdW50OiAnJyxcclxuICAgICAgcHJpY2U6ICcnLFxyXG4gICAgICB2YXJpYW50SWQ6ICcnLFxyXG4gICAgICBzaG93VG9hc3Q6ZmFsc2VcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRpc2NvdW50OiB0aGlzLml0ZW1Ub0JlQ29uc3VtZWQoKSB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBuYW1lLCBwcmljZSwgZGlzY291bnQsIHZhcmlhbnRJZCB9ID0gdGhpcy5zdGF0ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPE11dGF0aW9uXHJcbiAgICAgICAgICAgIG11dGF0aW9uPXtVUERBVEVfUFJJQ0V9IFxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHsoaGFuZGxlU3VibWl0LCB7ZXJyb3IsIGRhdGF9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93RXJyb3IgPSBlcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEJhbm5lciBzdGF0dXM9XCJjcml0aWNhbFwiPntlcnJvci5tZXNzYWdlfTwvQmFubmVyPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvd1RvYXN0ID0gZGF0YSAmJiBkYXRhLnByb2R1Y3RWYXJpYW50VXBkYXRlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8VG9hc3RcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJTdWNlc3NmdWxseSB1cGRhdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uRGlzbWlzcz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dUb2FzdDogZmFsc2UgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPEZyYW1lPlxyXG4gICAgICAgICAgICAgICAgPFBhZ2U+XHJcbiAgICAgICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93VG9hc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0Vycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5VGV4dCBzaXplPVwibGFyZ2VcIj57bmFtZX08L0Rpc3BsYXlUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzZWN0aW9uZWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQuR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiJFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT3JpZ2luYWwgcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIiRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtkaXNjb3VudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UoJ2Rpc2NvdW50Jyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEaXNjb3VudGVkIHByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZGlzY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dC5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBzYWxlIHByaWNlIHdpbGwgZXhwaXJlIGluIHR3byB3ZWVrc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBhZ2VBY3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlBY3Rpb249e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdTYXZlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdFZhcmlhYmxlSW5wdXQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB2YXJpYW50SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlOiBkaXNjb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZVN1Ym1pdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczogeyBpbnB1dDogcHJvZHVjdFZhcmlhYmxlSW5wdXQgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5QWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1JlbW92ZSBkaXNjb3VudCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPC9QYWdlPlxyXG4gICAgICAgICAgICAgICAgPC9GcmFtZT5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIDwvTXV0YXRpb24+XHJcbiAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGhhbmRsZUNoYW5nZSA9IChmaWVsZCkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuICh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IFtmaWVsZF06IHZhbHVlIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgIGl0ZW1Ub0JlQ29uc3VtZWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpdGVtID0gc3RvcmUuZ2V0KCdpdGVtJyk7XHJcbiAgICAgICAgICBjb25zdCBwcmljZSA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5wcmljZTtcclxuICAgICAgICAgIGNvbnN0IHZhcmlhbnRJZCA9IGl0ZW0udmFyaWFudHMuZWRnZXNbMF0ubm9kZS5pZDtcclxuICAgICAgICAgIGNvbnN0IGRpc2NvdW50ZXIgPSBwcmljZSAqIDAuMTtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwcmljZSwgdmFyaWFudElkIH0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChwcmljZSAtIGRpc2NvdW50ZXIpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZXhwb3J0IGRlZmF1bHQgRWRpdFByb2R1Y3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==