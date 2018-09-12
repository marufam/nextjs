webpackHotUpdate(4,{

/***/ "./components/Top_article.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return top_article; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Search_article__ = __webpack_require__("./components/Search_article.jsx");
var _jsxFileName = "/home/amien/Documents/nextjs/components/Top_article.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



 // import Event_calender from "./Event_calender";

var top_article =
/*#__PURE__*/
function (_React$Component) {
  _inherits(top_article, _React$Component);

  function top_article() {
    _classCallCheck(this, top_article);

    return _possibleConstructorReturn(this, (top_article.__proto__ || Object.getPrototypeOf(top_article)).apply(this, arguments));
  }

  _createClass(top_article, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-495262336"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "side-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-495262336"
      }, "Top Articles"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "side-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-495262336"
      }, this.props.data.map(function (top) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
          href: top.link,
          key: top.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          className: "jsx-495262336"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          id: "top-conttent",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          className: "jsx-495262336"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          id: "side-number",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          className: "jsx-495262336"
        }, top.id), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          id: "side-content-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          className: "jsx-495262336"
        }, top.name))));
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-495262336"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-495262336"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Search_article__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-495262336"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "event-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-495262336"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-495262336"
      }, " Event calender")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "event-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: "jsx-495262336"
      }, this.props.data.map(function (event) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
          href: event.link,
          key: event.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          className: "jsx-495262336"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          id: "event-contain",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          className: "jsx-495262336"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: "",
          alt: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          className: "jsx-495262336"
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          id: "event-number",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          className: "jsx-495262336"
        }, event.id), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          id: "event-content-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          className: "jsx-495262336"
        }, event.name))));
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        className: "jsx-495262336"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "495262336",
        css: "#break.jsx-495262336{clear:both;}#top-conttent.jsx-495262336{overflow:hidden;margin-top:10px;margin-bottom:10px;}#side-number.jsx-495262336{width:10%;font-size:30px;float:left;padding:10px;font-style:bold;}#side-content-title.jsx-495262336{width:75%;float:right;padding:10px;}#social_icon.jsx-495262336{margin-right:5px;}#social_title.jsx-495262336{margin-bottom:0px;}#sidebar.jsx-495262336{float:right;width:25%;height:100px;}#side-title.jsx-495262336{background-color:rgb(251,239,214);word-break:normal;padding:10px;font-size:20px;font-family:Poppins,san-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9wX2FydGljbGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEb0IsQUFHdUIsQUFJTSxBQUtQLEFBT0EsQUFLUSxBQUdDLEFBR04sQUFNd0IsVUF2QnRCLEFBT0gsQ0FoQmIsQ0EyQlksSUF2Qk0sQ0FpQmxCLENBR0EsSUFQYyxBQVdDLEdBbEJILE9BTFMsRUE0QkQsQ0FmcEIsQUFZQSxDQW5CYyxhQUNHLEVBTmpCLENBNEJlLGFBckJmLEFBc0JnQixlQUNnQiw4QkFDaEMiLCJmaWxlIjoiY29tcG9uZW50cy9Ub3BfYXJ0aWNsZS5qc3giLCJzb3VyY2VSb290IjoiL2hvbWUvYW1pZW4vRG9jdW1lbnRzL25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBTZWFyY2hfYXJ0aWNsZSBmcm9tIFwiLi9TZWFyY2hfYXJ0aWNsZVwiO1xuLy8gaW1wb3J0IEV2ZW50X2NhbGVuZGVyIGZyb20gXCIuL0V2ZW50X2NhbGVuZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRvcF9hcnRpY2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwic2lkZWJhclwiPlxuICAgICAgICA8ZGl2IGlkPVwic2lkZS10aXRsZVwiPlxuICAgICAgICAgICAgVG9wIEFydGljbGVzXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwic2lkZS1jb250ZW50XCI+XG4gICAgICAgICAgXG4gICAgICAgICAge3RoaXMucHJvcHMuZGF0YS5tYXAodG9wID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3RvcC5saW5rfSBrZXk9e3RvcC5pZH0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0b3AtY29udHRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2lkZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgIHt0b3AuaWR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInNpZGUtY29udGVudC10aXRsZVwiPiAgIFxuICAgICAgICAgICAgICAgICAge3RvcC5uYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICBcbiAgICAgICAgICApKX1cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgPFNlYXJjaF9hcnRpY2xlLz5cbiAgICAgICAgPGhyLz5cbiAgICAgICAgey8qIDxFdmVudF9jYWxlbmRlciBkYXRhPXt0aGlzLnByb3BzLmV2ZW50fS8+ICovfVxuICAgICAgICA8ZGl2IGlkPVwiZXZlbnQtdGl0bGVcIj5cbiAgICAgICAgICAgPGgzPiBFdmVudCBjYWxlbmRlcjwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiZXZlbnQtY29udGVudFwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEubWFwKGV2ZW50ID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2V2ZW50Lmxpbmt9IGtleT17ZXZlbnQuaWR9PlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXZlbnQtY29udGFpblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIvPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJldmVudC1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgIHtldmVudC5pZH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXZlbnQtY29udGVudC10aXRsZVwiPiAgIFxuICAgICAgICAgICAgICAgICAge2V2ZW50Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICkpfVxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyLz5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgI2JyZWFre1xuICAgICAgICAgICAgY2xlYXI6Ym90aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3RvcC1jb250dGVudCB7XG4gICAgICAgICAgICAvKiBvdmVyZmxvdyB0byBoYW5kbGUgaW5uZXIgZmxvYXRpbmcgYmxvY2sgKi9cbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3NpZGUtbnVtYmVye1xuICAgICAgICAgICAgd2lkdGg6MTAlO1xuICAgICAgICAgICAgZm9udC1zaXplOjMwcHg7XG4gICAgICAgICAgICBmbG9hdDpsZWZ0O1xuICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICAgICAgZm9udC1zdHlsZTpib2xkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc2lkZS1jb250ZW50LXRpdGxle1xuICAgICAgICAgICAgd2lkdGg6NzUlO1xuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzb2NpYWxfaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3NvY2lhbF90aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzaWRlYmFyIHtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgICNzaWRlLXRpdGxle1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MSwgMjM5LCAyMTQpO1xuICAgICAgICAgICAgd29yZC1icmVhazogbm9ybWFsO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnMsc2FuLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8YnIgaWQ9XCJicmVha1wiLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Top_article.jsx */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        id: "break",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-495262336"
      }));
    }
  }]);

  return top_article;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ })

})
//# sourceMappingURL=4.06ebebe944ea29bb440a.hot-update.js.map