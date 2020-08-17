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
          discount = _this$state.discount,
          price = _this$state.price,
          variantId = _this$state.variantId;
      console.log(name, price, discount, variantId);
      console.log(this.state);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdC1wcm9kdWN0cy5qcyJdLCJuYW1lcyI6WyJVUERBVEVfUFJJQ0UiLCJncWwiLCJFZGl0UHJvZHVjdCIsImRpc2NvdW50IiwicHJpY2UiLCJ2YXJpYW50SWQiLCJzaG93VG9hc3QiLCJmaWVsZCIsInZhbHVlIiwic2V0U3RhdGUiLCJpdGVtIiwic3RvcmUiLCJnZXQiLCJ2YXJpYW50cyIsImVkZ2VzIiwibm9kZSIsImlkIiwiZGlzY291bnRlciIsInRvRml4ZWQiLCJpdGVtVG9CZUNvbnN1bWVkIiwic3RhdGUiLCJuYW1lIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsImVycm9yIiwiZGF0YSIsInNob3dFcnJvciIsIm1lc3NhZ2UiLCJwcm9kdWN0VmFyaWFudFVwZGF0ZSIsImhhbmRsZUNoYW5nZSIsImNvbnRlbnQiLCJvbkFjdGlvbiIsInByb2R1Y3RWYXJpYWJsZUlucHV0IiwidmFyaWFibGVzIiwiaW5wdXQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBYUE7QUFDQTtBQUNBO0FBRUUsSUFBTUEsWUFBWSxHQUFHQyxtREFBSCxtQkFBbEI7O0lBZU1DLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0k7QUFDTkMsY0FBUSxFQUFFLEVBREo7QUFFTkMsV0FBSyxFQUFFLEVBRkQ7QUFHTkMsZUFBUyxFQUFFLEVBSEw7QUFJTkMsZUFBUyxFQUFDO0FBSkosSzs7dU5BZ0dXLFVBQUNDLEtBQUQsRUFBVztBQUN4QixhQUFPLFVBQUNDLEtBQUQ7QUFBQSxlQUFXLE1BQUtDLFFBQUwsK0ZBQWlCRixLQUFqQixFQUF5QkMsS0FBekIsRUFBWDtBQUFBLE9BQVA7QUFDRCxLOzsyTkFHa0IsWUFBTTtBQUN2QixVQUFNRSxJQUFJLEdBQUdDLGdEQUFLLENBQUNDLEdBQU4sQ0FBVSxNQUFWLENBQWI7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QkFBTUMsb0JBQW9CLEdBQUc7QUFDekJqQixrQkFBRSxFQUFFWCxTQURxQjtBQUV6QkQscUJBQUssRUFBRUQ7QUFGa0IsZUFBN0I7QUFJQXFCLDBCQUFZLENBQUM7QUFDVFUseUJBQVMsRUFBRTtBQUFFQyx1QkFBSyxFQUFFRjtBQUFUO0FBREYsZUFBRCxDQUFaO0FBR0g7QUFWRCxXQURXLENBRGY7QUFlQSwwQkFBZ0IsRUFBRSxDQUNkO0FBQ0FGLG1CQUFPLEVBQUU7QUFEVCxXQURjO0FBZmxCLFVBeEJKLENBRkEsQ0FMSixDQURBLENBREEsQ0FESjtBQTZESCxPQTFFRyxDQURKO0FBOEVDOzs7O0VBL0ZtQkssNENBQUssQ0FBQ0MsUzs7QUFrSGJuQywwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9lZGl0LXByb2R1Y3RzLjRmNDAxMjE1NzMyNzMyMGVmMjUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQmFubmVyLFxyXG4gICAgRnJhbWUsXHJcbiAgICBUb2FzdCxcclxuICAgIENhcmQsXHJcbiAgICBEaXNwbGF5VGV4dCxcclxuICAgIEZvcm0sXHJcbiAgICBGb3JtTGF5b3V0LFxyXG4gICAgTGF5b3V0LFxyXG4gICAgUGFnZSxcclxuICAgIFBhZ2VBY3Rpb25zLFxyXG4gICAgVGV4dEZpZWxkXHJcbiAgfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IE11dGF0aW9uIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcclxuXHJcbiAgY29uc3QgVVBEQVRFX1BSSUNFID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gcHJvZHVjdFZhcmlhbnRVcGRhdGUoJGlucHV0OiBQcm9kdWN0VmFyaWFudElucHV0ISkge1xyXG4gICAgICAgIHByb2R1Y3RWYXJpYW50VXBkYXRlKGlucHV0OiAkaW5wdXQpIHtcclxuICAgICAgICAgICAgcHJvZHVjdCB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByb2R1Y3RWYXJpYW50IHtcclxuICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYDtcclxuXHJcblxyXG4gIGNsYXNzIEVkaXRQcm9kdWN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICBkaXNjb3VudDogJycsXHJcbiAgICAgIHByaWNlOiAnJyxcclxuICAgICAgdmFyaWFudElkOiAnJyxcclxuICAgICAgc2hvd1RvYXN0OmZhbHNlXHJcbiAgICB9O1xyXG4gIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaXNjb3VudDogdGhpcy5pdGVtVG9CZUNvbnN1bWVkKCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgZGlzY291bnQsIHByaWNlLCB2YXJpYW50SWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmFtZSwgcHJpY2UsIGRpc2NvdW50LCB2YXJpYW50SWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxNdXRhdGlvblxyXG4gICAgICAgICAgICBtdXRhdGlvbj17VVBEQVRFX1BSSUNFfSBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICB7KGhhbmRsZVN1Ym1pdCwge2Vycm9yLCBkYXRhfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hvd0Vycm9yID0gZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxCYW5uZXIgc3RhdHVzPVwiY3JpdGljYWxcIj57ZXJyb3IubWVzc2FnZX08L0Jhbm5lcj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNob3dUb2FzdCA9IGRhdGEgJiYgZGF0YS5wcm9kdWN0VmFyaWFudFVwZGF0ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRvYXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiU3VjZXNzZnVsbHkgdXBkYXRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkRpc21pc3M9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93VG9hc3Q6IGZhbHNlIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgIDxGcmFtZT5cclxuICAgICAgICAgICAgICAgIDxQYWdlPlxyXG4gICAgICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgICAgICB7c2hvd1RvYXN0fVxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICA8L0xheW91dC5TZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYXlvdXQuU2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RGlzcGxheVRleHQgc2l6ZT1cImxhcmdlXCI+e25hbWV9PC9EaXNwbGF5VGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgc2VjdGlvbmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUxheW91dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGF5b3V0Lkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeD1cIiRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9yaWdpbmFsIHByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXg9XCIkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGlzY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlKCdkaXNjb3VudCcpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGlzY291bnRlZCBwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImRpc2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1MYXlvdXQuR3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgc2FsZSBwcmljZSB3aWxsIGV4cGlyZSBpbiB0d28gd2Vla3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdlQWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnU2F2ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RWYXJpYWJsZUlucHV0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdmFyaWFudElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZTogZGlzY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHsgaW5wdXQ6IHByb2R1Y3RWYXJpYWJsZUlucHV0IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZGFyeUFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdSZW1vdmUgZGlzY291bnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGF5b3V0LlNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICAgICAgICAgIDwvUGFnZT5cclxuICAgICAgICAgICAgICAgIDwvRnJhbWU+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfX1cclxuICAgICAgICA8L011dGF0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBoYW5kbGVDaGFuZ2UgPSAoZmllbGQpID0+IHtcclxuICAgICAgICAgIHJldHVybiAodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBbZmllbGRdOiB2YWx1ZSB9KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICBpdGVtVG9CZUNvbnN1bWVkID0gKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgaXRlbSA9IHN0b3JlLmdldCgnaXRlbScpO1xyXG4gICAgICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUucHJpY2U7XHJcbiAgICAgICAgICBjb25zdCB2YXJpYW50SWQgPSBpdGVtLnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUuaWQ7XHJcbiAgICAgICAgICBjb25zdCBkaXNjb3VudGVyID0gcHJpY2UgKiAwLjE7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcHJpY2UsIHZhcmlhbnRJZCB9KTtcclxuICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIChwcmljZSAtIGRpc2NvdW50ZXIpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgZXhwb3J0IGRlZmF1bHQgRWRpdFByb2R1Y3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==