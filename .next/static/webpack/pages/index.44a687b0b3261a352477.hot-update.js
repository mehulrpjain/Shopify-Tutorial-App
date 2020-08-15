webpackHotUpdate_N_E("pages/index",{

/***/ "./components/ResourceList.js":
/*!************************************!*\
  !*** ./components/ResourceList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/index.es.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_10__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n    query getProducts($ids: [ID!]!){\n        nodes(ids: $ids){\n            ... on Product{\n                title\n                handle\n                descriptionHtml\n                id\n                images(first:1){\n                    edges {\n                        node {\n                            originalSrc\n                            altText\n                        }\n                    }\n                }\n                variants(first: 1){\n                    edges{\n                        node{\n                            price\n                            id\n                        }\n                    }\n                }\n            }\n        }\n    }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject());

var ResourceListwithProducts = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(ResourceListwithProducts, _React$Component);

  var _super = _createSuper(ResourceListwithProducts);

  function ResourceListwithProducts() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ResourceListwithProducts);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ResourceListwithProducts, [{
    key: "render",
    value: function render() {
      var twoWeeksFromNow = new Date(Date.now() + 12096e5).toDateString();
      return __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_8__["Query"], {
        query: GET_PRODUCTS_BY_ID,
        variables: {
          ids: store_js__WEBPACK_IMPORTED_MODULE_10___default.a.get('ids')
        }
      }, function (_ref) {
        var data = _ref.data,
            loading = _ref.loading,
            error = _ref.error;
        if (loading) return __jsx("div", null, "Loading...");
        if (error) return __jsx("div", null, error.message);
        console.log(data);
        return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["ResourceList"], {
          showHeader: true,
          resourceName: {
            singular: 'Product',
            plural: 'Products'
          },
          items: data.nodes,
          renderItem: function renderItem(item) {
            var media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Thumbnail"], {
              source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : '',
              alt: item.images.edges[0] ? item.images.edges[0].node.altText : ''
            });

            var price = item.variants.edges[0].node.price;
            return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["ResourceList"].Item, {
              id: item.id,
              media: media,
              accessibilityLabel: "View details for ".concat(item.title)
            }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"].Item, null, __jsx("h3", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["TextStyle"], {
              variation: "strong"
            }, item.title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"].Item, null, __jsx("p", null, "$", price)), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_9__["Stack"].Item, null, __jsx("p", null, "Expires on ", twoWeeksFromNow))));
          }
        }));
      });
    }
  }]);

  return ResourceListwithProducts;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ResourceListwithProducts);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QuanMiXSwibmFtZXMiOlsiR0VUX1BST0RVQ1RTX0JZX0lEIiwiZ3FsIiwiUmVzb3VyY2VMaXN0d2l0aFByb2R1Y3RzIiwidHdvV2Vla3NGcm9tTm93IiwiRGF0ZSIsIm5vdyIsInRvRGF0ZVN0cmluZyIsImlkcyIsInN0b3JlIiwiZ2V0IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwic2luZ3VsYXIiLCJwbHVyYWwiLCJub2RlcyIsIml0ZW0iLCJtZWRpYSIsImltYWdlcyIsImVkZ2VzIiwibm9kZSIsIm9yaWdpbmFsU3JjIiwiYWx0VGV4dCIsInByaWNlIiwidmFyaWFudHMiLCJpZCIsInRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsa0JBQWtCLEdBQUdDLGtEQUFILG1CQUF4Qjs7SUE2Qk1DLHdCOzs7Ozs7Ozs7Ozs7OzZCQUNNO0FBQ0osVUFBTUMsZUFBZSxHQUFHLElBQUlDLElBQUosQ0FBU0EsSUFBSSxDQUFDQyxHQUFMLEtBQWEsT0FBdEIsRUFBK0JDLFlBQS9CLEVBQXhCO0FBQ0EsYUFDSSxNQUFDLGtEQUFEO0FBQU8sYUFBSyxFQUFFTixrQkFBZDtBQUFrQyxpQkFBUyxFQUFFO0FBQUVPLGFBQUcsRUFBRUMsZ0RBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVY7QUFBUDtBQUE3QyxTQUNDLGdCQUEyQjtBQUFBLFlBQXhCQyxJQUF3QixRQUF4QkEsSUFBd0I7QUFBQSxZQUFuQkMsT0FBbUIsUUFBbkJBLE9BQW1CO0FBQUEsWUFBWEMsS0FBVyxRQUFYQSxLQUFXO0FBQ3BCLFlBQUlELE9BQUosRUFBYSxPQUFPLGdDQUFQO0FBQ2IsWUFBSUMsS0FBSixFQUFXLE9BQU8sbUJBQU1BLEtBQUssQ0FBQ0MsT0FBWixDQUFQO0FBQ2ZDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaO0FBQ0EsZUFDSSxNQUFDLHFEQUFELFFBQ0ksTUFBQyw2REFBRDtBQUNJLG9CQUFVLE1BRGQ7QUFFSSxzQkFBWSxFQUFFO0FBQUNNLG9CQUFRLEVBQUUsU0FBWDtBQUFzQkMsa0JBQU0sRUFBRTtBQUE5QixXQUZsQjtBQUdJLGVBQUssRUFBRVAsSUFBSSxDQUFDUSxLQUhoQjtBQUlJLG9CQUFVLEVBQUUsb0JBQUFDLElBQUksRUFBSTtBQUNoQixnQkFBTUMsS0FBSyxHQUNQLE1BQUMsMERBQUQ7QUFDSSxvQkFBTSxFQUNGRCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixJQUNFSCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixFQUFxQkMsSUFBckIsQ0FBMEJDLFdBRDVCLEdBRUUsRUFKVjtBQU1JLGlCQUFHLEVBQ0NMLElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLElBQ0VILElBQUksQ0FBQ0UsTUFBTCxDQUFZQyxLQUFaLENBQWtCLENBQWxCLEVBQXFCQyxJQUFyQixDQUEwQkUsT0FENUIsR0FFRTtBQVRWLGNBREo7O0FBY0EsZ0JBQU1DLEtBQUssR0FBR1AsSUFBSSxDQUFDUSxRQUFMLENBQWNMLEtBQWQsQ0FBb0IsQ0FBcEIsRUFBdUJDLElBQXZCLENBQTRCRyxLQUExQztBQUNBLG1CQUNJLE1BQUMsNkRBQUQsQ0FBYyxJQUFkO0FBQ0EsZ0JBQUUsRUFBSVAsSUFBSSxDQUFDUyxFQURYO0FBRUEsbUJBQUssRUFBSVIsS0FGVDtBQUdBLGdDQUFrQiw2QkFBc0JELElBQUksQ0FBQ1UsS0FBM0I7QUFIbEIsZUFLQSxNQUFDLHNEQUFELFFBQ0ksTUFBQyxzREFBRCxDQUFPLElBQVAsUUFDSSxrQkFDSSxNQUFDLDBEQUFEO0FBQVcsdUJBQVMsRUFBQztBQUFyQixlQUNLVixJQUFJLENBQUNVLEtBRFYsQ0FESixDQURKLENBREosRUFRSSxNQUFDLHNEQUFELENBQU8sSUFBUCxRQUNJLHNCQUFLSCxLQUFMLENBREosQ0FSSixFQVdJLE1BQUMsc0RBQUQsQ0FBTyxJQUFQLFFBQ0ksZ0NBQWV2QixlQUFmLENBREosQ0FYSixDQUxBLENBREo7QUF1Qkg7QUEzQ0wsVUFESixDQURKO0FBaURILE9BdERELENBREo7QUEwREg7Ozs7RUE3RGtDMkIsNENBQUssQ0FBQ0MsUzs7QUFnRTlCN0IsdUZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDRhNjg3YjBiMzI2MWEzNTI0NzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmltcG9ydCB7IENhcmQsIFJlc291cmNlTGlzdCwgU3RhY2ssIFRleHRTdHlsZSwgVGh1bWJuYWlsIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICdzdG9yZS1qcyc7XHJcblxyXG5jb25zdCBHRVRfUFJPRFVDVFNfQllfSUQgPSBncWxgXHJcbiAgICBxdWVyeSBnZXRQcm9kdWN0cygkaWRzOiBbSUQhXSEpe1xyXG4gICAgICAgIG5vZGVzKGlkczogJGlkcyl7XHJcbiAgICAgICAgICAgIC4uLiBvbiBQcm9kdWN0e1xyXG4gICAgICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICAgICAgICAgIGhhbmRsZVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb25IdG1sXHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VzKGZpcnN0OjEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0VGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudHMoZmlyc3Q6IDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVkZ2Vze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2Rle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBgO1xyXG5cclxuY2xhc3MgUmVzb3VyY2VMaXN0d2l0aFByb2R1Y3RzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3QgdHdvV2Vla3NGcm9tTm93ID0gbmV3IERhdGUoRGF0ZS5ub3coKSArIDEyMDk2ZTUpLnRvRGF0ZVN0cmluZygpO1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfUFJPRFVDVFNfQllfSUR9IHZhcmlhYmxlcz17eyBpZHM6IHN0b3JlLmdldCgnaWRzJykgfX0+XHJcbiAgICAgICAgICAgIHsoeyBkYXRhLGxvYWRpbmcsZXJyb3J9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dIZWFkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlTmFtZT17e3Npbmd1bGFyOiAnUHJvZHVjdCcsIHBsdXJhbDogJ1Byb2R1Y3RzJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5ub2Rlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lZGlhID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGh1bWJuYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBpdGVtLmltYWdlcy5lZGdlc1swXS5ub2RlLm9yaWdpbmFsU3JjXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5lZGdlc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5hbHRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2UgPSBpdGVtLnZhcmlhbnRzLmVkZ2VzWzBdLm5vZGUucHJpY2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0Lkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSB7aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWEgPSB7bWVkaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YFZpZXcgZGV0YWlscyBmb3IgJHtpdGVtLnRpdGxlfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4ke3ByaWNlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjay5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkV4cGlyZXMgb24ge3R3b1dlZWtzRnJvbU5vd308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVzb3VyY2VMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA8L1F1ZXJ5PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc291cmNlTGlzdHdpdGhQcm9kdWN0czsiXSwic291cmNlUm9vdCI6IiJ9