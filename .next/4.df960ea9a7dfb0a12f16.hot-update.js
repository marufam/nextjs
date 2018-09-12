webpackHotUpdate(4,{

/***/ "./components/Event_calender.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return event_calender; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/home/amien/Documents/nextjs/components/Event_calender.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var event_calender =
/*#__PURE__*/
function (_React$Component) {
  _inherits(event_calender, _React$Component);

  function event_calender() {
    _classCallCheck(this, event_calender);

    return _possibleConstructorReturn(this, (event_calender.__proto__ || Object.getPrototypeOf(event_calender)).apply(this, arguments));
  }

  _createClass(event_calender, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "event",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        className: "jsx-2170358054"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "event-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        className: "jsx-2170358054"
      }, "Event calender"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "event-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-2170358054"
      }, this.props.data.map(function (event) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
          href: event.link,
          key: event.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          className: "jsx-2170358054"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          id: "event-contain",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          className: "jsx-2170358054"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: "",
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          className: "jsx-2170358054"
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          id: "event-number",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          className: "jsx-2170358054"
        }, event.id), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          id: "event-content-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          className: "jsx-2170358054"
        }, event.name))));
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-2170358054"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2170358054",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRXZlbnRfY2FsZW5kZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCb0IiLCJmaWxlIjoiY29tcG9uZW50cy9FdmVudF9jYWxlbmRlci5qc3giLCJzb3VyY2VSb290IjoiL2hvbWUvYW1pZW4vRG9jdW1lbnRzL25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXZlbnRfY2FsZW5kZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJldmVudFwiPlxuICAgICAgICA8ZGl2IGlkPVwiZXZlbnQtdGl0bGVcIj5cbiAgICAgICAgICAgIEV2ZW50IGNhbGVuZGVyXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiZXZlbnQtY29udGVudFwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEubWFwKGV2ZW50ID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2V2ZW50Lmxpbmt9IGtleT17ZXZlbnQuaWR9PlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXZlbnQtY29udGFpblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJldmVudC1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgIHtldmVudC5pZH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXZlbnQtY29udGVudC10aXRsZVwiPiAgIFxuICAgICAgICAgICAgICAgICAge2V2ZW50Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICkpfVxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxiciBpZD1cImJyZWFrXCIvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Event_calender.jsx */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        id: "break",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-2170358054"
      }));
    }
  }]);

  return event_calender;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.df960ea9a7dfb0a12f16.hot-update.js.map