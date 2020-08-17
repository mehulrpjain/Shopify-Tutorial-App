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
      }); //console.log(this.state);


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
      console.log(name, price, discount, variantId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdC1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJVUERBVEVfUFJJQ0UiLCJncWwiLCJFZGl0UHJvZHVjdCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJzaG93VG9hc3QiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsInRvRml4ZWQiLCJpdGVtVG9CZUNvbnN1bWVkIiwic3RhdGUiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsImVycm9yIiwiZGF0YSIsInNob3dFcnJvciIsIm1lc3NhZ2UiLCJwcm9kdWN0VmFyaWFudFVwZGF0ZSIsImhhbmRsZUNoYW5nZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsInByb2R1Y3RWYXJpYWJsZUlucHV0IiwidmFyaWFibGVzIiwiaW5wdXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBYUE7QUFDQTtBQUNBO0FBRUUsSUFBTUEsWUFBWSxHQUFHQyxtREFBSCxtQkFBbEI7O0lBZU1DLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsY0FBUSxFQUFFLEVBREo7QUFFTkMsV0FBSyxFQUFFLEVBRkQ7QUFHTkMsZUFBUyxFQUFFLEVBSEw7QUFJTkMsZUFBUyxFQUFDO0FBSkosSzs7dU5BOEZXLFVBQUNDLEtBQUQsRUFBVztBQUN4QixhQUFPLFVBQUNDLEtBQUQ7QUFBQSxlQUFXLE1BQUtDLFFBQUwsK0ZBQWlCRixLQUFqQixFQUF5QkMsS0FBekIsRUFBWDtBQUFBLE9BQVA7QUFDRCxLOzsyTkFHa0IsWUFBTTtBQUN2QixVQUFNRSxJQUFJLEdBQUdDLGdEQUFLLENBQUNDLEdBQU4sQ0FBVSxNQUFWLENBQWI7QUFDQSxVQUFNUixLQUFLLEdBQUdNLElBQUksQ0FBQ0csUUFBTCxDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxJQUF2QixDQUE0QlgsS0FBMUM7QUFDQSxVQUFNQyxTQUFTLEdBQUdLLElBQUksQ0FBQ0csUUFBTCxDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxJQUF2QixDQUE0QkMsRUFBOUM7QUFDQSxVQUFNQyxVQUFVLEdBQUdiLEtBQUssR0FBRyxHQUEzQjs7QUFDQSxZQUFLSyxRQUFMLENBQWM7QUFBRUwsYUFBSyxFQUFMQSxLQUFGO0FBQVNDLGlCQUFTLEVBQVRBO0FBQVQsT0FBZCxFQUx1QixDQU12Qjs7O0FBRUEsYUFBTyxDQUFDRCxLQUFLLEdBQUdhLFVBQVQsRUFBcUJDLE9BQXJCLENBQTZCLENBQTdCLENBQVA7QUFDRCxLOzs7Ozs7O3dDQXJHZTtBQUNsQixXQUFLVCxRQUFMLENBQWM7QUFBRU4sZ0JBQVEsRUFBRSxLQUFLZ0IsZ0JBQUw7QUFBWixPQUFkO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUFBLHdCQUN3QyxLQUFLQyxLQUQ3QztBQUFBLFVBQ0dDLElBREgsZUFDR0EsSUFESDtBQUFBLFVBQ1NqQixLQURULGVBQ1NBLEtBRFQ7QUFBQSxVQUNnQkQsUUFEaEIsZUFDZ0JBLFFBRGhCO0FBQUEsVUFDMEJFLFNBRDFCLGVBQzBCQSxTQUQxQjtBQUVMaUIsYUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosRUFBa0JqQixLQUFsQixFQUF5QkQsUUFBekIsRUFBbUNFLFNBQW5DO0FBQ0EsYUFDSSxNQUFDLHNEQUFEO0FBQ0EsZ0JBQVEsRUFBRUw7QUFEVixTQUdDLFVBQUN3QixZQUFELFFBQWlDO0FBQUEsWUFBakJDLEtBQWlCLFFBQWpCQSxLQUFpQjtBQUFBLFlBQVZDLElBQVUsUUFBVkEsSUFBVTs7QUFDOUIsWUFBTUMsU0FBUyxHQUFHRixLQUFLLElBQ25CLE1BQUMsdURBQUQ7QUFBUSxnQkFBTSxFQUFDO0FBQWYsV0FBMkJBLEtBQUssQ0FBQ0csT0FBakMsQ0FESjs7QUFHQSxZQUFNdEIsU0FBUyxHQUFHb0IsSUFBSSxJQUFJQSxJQUFJLENBQUNHLG9CQUFiLElBQ2QsTUFBQyxzREFBRDtBQUNFLGlCQUFPLEVBQUMscUJBRFY7QUFFRSxtQkFBUyxFQUFFO0FBQUEsbUJBQU0sTUFBSSxDQUFDcEIsUUFBTCxDQUFjO0FBQUVILHVCQUFTLEVBQUU7QUFBYixhQUFkLENBQU47QUFBQTtBQUZiLFVBREo7O0FBTUosZUFDSSxNQUFDLHNEQUFELFFBQ0EsTUFBQyxxREFBRCxRQUNBLE1BQUMsdURBQUQsUUFDS0EsU0FETCxFQUVJLE1BQUMsdURBQUQsQ0FBUSxPQUFSLFFBQ0txQixTQURMLENBRkosRUFLSSxNQUFDLHVEQUFELENBQVEsT0FBUixRQUNBLE1BQUMsNERBQUQ7QUFBYSxjQUFJLEVBQUM7QUFBbEIsV0FBMkJOLElBQTNCLENBREEsRUFFQSxNQUFDLHFEQUFELFFBQ0ksTUFBQyxxREFBRDtBQUFNLG1CQUFTO0FBQWYsV0FDQSxNQUFDLDJEQUFELFFBQ0ksTUFBQywyREFBRCxDQUFZLEtBQVosUUFDQSxNQUFDLDBEQUFEO0FBQ0ksZ0JBQU0sRUFBQyxHQURYO0FBRUksZUFBSyxFQUFFakIsS0FGWDtBQUdJLGtCQUFRLEVBQUUsSUFIZDtBQUlJLGVBQUssRUFBQyxnQkFKVjtBQUtJLGNBQUksRUFBQztBQUxULFVBREEsRUFRQSxNQUFDLDBEQUFEO0FBQ0ksZ0JBQU0sRUFBQyxHQURYO0FBRUksZUFBSyxFQUFFRCxRQUZYO0FBR0ksa0JBQVEsRUFBRSxNQUFJLENBQUMyQixZQUFMLENBQWtCLFVBQWxCLENBSGQ7QUFJSSxlQUFLLEVBQUMsa0JBSlY7QUFLSSxjQUFJLEVBQUM7QUFMVCxVQVJBLENBREosRUFpQkksNERBakJKLENBREEsQ0FESixFQXdCSSxNQUFDLDREQUFEO0FBQ0EsdUJBQWEsRUFBRSxDQUNYO0FBQ0FDLG1CQUFPLEVBQUUsTUFEVDtBQUVBQyxvQkFBUSxFQUFFLG9CQUFNO0FBQ1osa0JBQU1DLG9CQUFvQixHQUFHO0FBQ3pCakIsa0JBQUUsRUFBRVgsU0FEcUI7QUFFekJELHFCQUFLLEVBQUVEO0FBRmtCLGVBQTdCO0FBSUFxQiwwQkFBWSxDQUFDO0FBQ1RVLHlCQUFTLEVBQUU7QUFBRUMsdUJBQUssRUFBRUY7QUFBVDtBQURGLGVBQUQsQ0FBWjtBQUdIO0FBVkQsV0FEVyxDQURmO0FBZUEsMEJBQWdCLEVBQUUsQ0FDZDtBQUNBRixtQkFBTyxFQUFFO0FBRFQsV0FEYztBQWZsQixVQXhCSixDQUZBLENBTEosQ0FEQSxDQURBLENBREo7QUE2REgsT0ExRUcsQ0FESjtBQThFQzs7OztFQTdGbUJLLDRDQUFLLENBQUNDLFM7O0FBZ0hibkMsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZWRpdC1wcm9kdWN0cy5hYWQyYjgwZGE4YzU2NjhkNGUxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEJhbm5lcixcclxuICAgIEZyYW1lLFxyXG4gICAgVG9hc3QsXHJcbiAgICBDYXJkLFxyXG4gICAgRGlzcGxheVRleHQsXHJcbiAgICBGb3JtLFxyXG4gICAgRm9ybUxheW91dCxcclxuICAgIExheW91dCxcclxuICAgIFBhZ2UsXHJcbiAgICBQYWdlQWN0aW9ucyxcclxuICAgIFRleHRGaWVsZFxyXG4gIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyBNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcblxyXG4gIGNvbnN0IFVQREFURV9QUklDRSA9IGdxbGBcclxuICAgIG11dGF0aW9uIHByb2R1Y3RWYXJpYW50VXBkYXRlKCRpbnB1dDogUHJvZHVjdFZhcmlhbnRJbnB1dCEpIHtcclxuICAgICAgICBwcm9kdWN0VmFyaWFudFVwZGF0ZShpbnB1dDogJGlucHV0KSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3Qge1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwcm9kdWN0VmFyaWFudCB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGA7XHJcblxyXG5cclxuICBjbGFzcyBFZGl0UHJvZHVjdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgZGlzY291bnQ6ICcnLFxyXG4gICAgICBwcmljZTogJycsXHJcbiAgICAgIHZhcmlhbnRJZDogJycsXHJcbiAgICAgIHNob3dUb2FzdDpmYWxzZVxyXG4gICAgfTtcclxuICBcclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgZGlzY291bnQ6IHRoaXMuaXRlbVRvQmVDb25zdW1lZCgpIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IG5hbWUsIHByaWNlLCBkaXNjb3VudCwgdmFyaWFudElkIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG5hbWUsIHByaWNlLCBkaXNjb3VudCwgdmFyaWFudElkKTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TXV0YXRpb25cclxuICAgICAgICAgICAgbXV0YXRpb249e1VQREFURV9QUklDRX0gXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgeyhoYW5kbGVTdWJtaXQsIHtlcnJvciwgZGF0YX0pID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dFcnJvciA9IGVycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8QmFubmVyIHN0YXR1cz1cImNyaXRpY2FsXCI+e2Vycm9yLm1lc3NhZ2V9PC9CYW5uZXI+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaG93VG9hc3QgPSBkYXRhICYmIGRhdGEucHJvZHVjdFZhcmlhbnRVcGRhdGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUb2FzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cIlN1Y2Vzc2Z1bGx5IHVwZGF0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25EaXNtaXNzPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1RvYXN0OiBmYWxzZSB9KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICA8RnJhbWU+XHJcbiAgICAgICAgICAgICAgICA8UGFnZT5cclxuICAgICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dUb2FzdH1cclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93RXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPERpc3BsYXlUZXh0IHNpemU9XCJsYXJnZVwiPntuYW1lfTwvRGlzcGxheVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHNlY3Rpb25lZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dC5Hcm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9XCIkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPcmlnaW5hbCBwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlZml4PVwiJFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Rpc2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZSgnZGlzY291bnQnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRpc2NvdW50ZWQgcHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkaXNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0Lkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzIHNhbGUgcHJpY2Ugd2lsbCBleHBpcmUgaW4gdHdvIHdlZWtzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGFnZUFjdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUFjdGlvbj17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ1NhdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0VmFyaWFibGVJbnB1dCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHZhcmlhbnRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2U6IGRpc2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU3VibWl0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7IGlucHV0OiBwcm9kdWN0VmFyaWFibGVJbnB1dCB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlBY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnUmVtb3ZlIGRpc2NvdW50J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8L1BhZ2U+XHJcbiAgICAgICAgICAgICAgICA8L0ZyYW1lPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH19XHJcbiAgICAgICAgPC9NdXRhdGlvbj5cclxuICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgaGFuZGxlQ2hhbmdlID0gKGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgW2ZpZWxkXTogdmFsdWUgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgaXRlbVRvQmVDb25zdW1lZCA9ICgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGl0ZW0gPSBzdG9yZS5nZXQoJ2l0ZW0nKTtcclxuICAgICAgICAgIGNvbnN0IHByaWNlID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlO1xyXG4gICAgICAgICAgY29uc3QgdmFyaWFudElkID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLmlkO1xyXG4gICAgICAgICAgY29uc3QgZGlzY291bnRlciA9IHByaWNlICogMC4xO1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHByaWNlLCB2YXJpYW50SWQgfSk7XHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG5cclxuICAgICAgICAgIHJldHVybiAocHJpY2UgLSBkaXNjb3VudGVyKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIGV4cG9ydCBkZWZhdWx0IEVkaXRQcm9kdWN0OyJdLCJzb3VyY2VSb290IjoiIn0=