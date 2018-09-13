module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Article.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Article_title__ = __webpack_require__("./components/Article_title.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Article_title_desc__ = __webpack_require__("./components/Article_title_desc.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Article_img__ = __webpack_require__("./components/Article_img.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Social_icon__ = __webpack_require__("./components/Social_icon.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Top_article__ = __webpack_require__("./components/Top_article.jsx");
var _jsxFileName = "/home/amien/Documents/nextjs/components/Article.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var Article =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Article, _React$Component);

  function Article() {
    _classCallCheck(this, Article);

    return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));
  }

  _createClass(Article, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-1329699184"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "main-wrap",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-1329699184"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-1329699184"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Article_title__["a" /* default */], {
        name: this.props.data_article.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Article_title_desc__["a" /* default */], {
        author: this.props.data_article.author,
        date: this.props.data_article.date,
        tags: this.props.data_article.tags,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Article_img__["a" /* default */], {
        img: this.props.data_article.img,
        img_desc: this.props.data_article.img_desc,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "article",
        dangerouslySetInnerHTML: {
          __html: this.props.data_article.article
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-1329699184"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-1329699184"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Social_icon__["a" /* default */], {
        data: this.props.social_media,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Top_article__["a" /* default */], {
        data: this.props.top,
        data2: this.props.event,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1329699184",
        css: "#content.jsx-1329699184{padding:20px;border:1px solid #ddd;float:left;width:70%;}#main-wrap.jsx-1329699184{overflow:hidden;margin-top:20px;margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NvQixBQUcwQixBQVFHLGFBUE0sR0FRTixnQkFDRyxHQVJSLFdBQ0QsS0FRWixLQVBBIiwiZmlsZSI6ImNvbXBvbmVudHMvQXJ0aWNsZS5qc3giLCJzb3VyY2VSb290IjoiL2hvbWUvYW1pZW4vRG9jdW1lbnRzL25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcnRpY2xlX3RpdGxlIGZyb20gXCIuLi9jb21wb25lbnRzL0FydGljbGVfdGl0bGVcIjtcbmltcG9ydCBBcnRpY2xlX3RpdGxlX2Rlc2MgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZV90aXRsZV9kZXNjXCI7XG5pbXBvcnQgQXJ0aWNsZV9pbWcgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZV9pbWdcIjtcbmltcG9ydCBTb2NpYWxfaWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Tb2NpYWxfaWNvblwiO1xuaW1wb3J0IFRvcF9hcnRpY2xlIGZyb20gXCIuL1RvcF9hcnRpY2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFydGljbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJtYWluLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPEFydGljbGVfdGl0bGUgbmFtZT17dGhpcy5wcm9wcy5kYXRhX2FydGljbGUudGl0bGV9IC8+XG4gICAgICAgICAgICA8QXJ0aWNsZV90aXRsZV9kZXNjXG4gICAgICAgICAgICAgIGF1dGhvcj17dGhpcy5wcm9wcy5kYXRhX2FydGljbGUuYXV0aG9yfVxuICAgICAgICAgICAgICBkYXRlPXt0aGlzLnByb3BzLmRhdGFfYXJ0aWNsZS5kYXRlfVxuICAgICAgICAgICAgICB0YWdzPXt0aGlzLnByb3BzLmRhdGFfYXJ0aWNsZS50YWdzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxBcnRpY2xlX2ltZ1xuICAgICAgICAgICAgICBpbWc9e3RoaXMucHJvcHMuZGF0YV9hcnRpY2xlLmltZ31cbiAgICAgICAgICAgICAgaW1nX2Rlc2M9e3RoaXMucHJvcHMuZGF0YV9hcnRpY2xlLmltZ19kZXNjfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgaWQ9XCJhcnRpY2xlXCJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IHRoaXMucHJvcHMuZGF0YV9hcnRpY2xlLmFydGljbGVcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxTb2NpYWxfaWNvbiBkYXRhPXt0aGlzLnByb3BzLnNvY2lhbF9tZWRpYX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VG9wX2FydGljbGUgIGRhdGE9e3RoaXMucHJvcHMudG9wfSBkYXRhMj17dGhpcy5wcm9wcy5ldmVudH0vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICNjb250ZW50IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICAjbWFpbi13cmFwIHtcbiAgICAgICAgICAgIC8qIG92ZXJmbG93IHRvIGhhbmRsZSBpbm5lciBmbG9hdGluZyBibG9jayAqL1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Article.jsx */"
      }));
    }
  }]);

  return Article;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/Article_img.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article_title; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/amien/Documents/nextjs/components/Article_img.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Article_title =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Article_title, _React$Component);

  function Article_title() {
    _classCallCheck(this, Article_title);

    return _possibleConstructorReturn(this, (Article_title.__proto__ || Object.getPrototypeOf(Article_title)).apply(this, arguments));
  }

  _createClass(Article_title, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        className: "jsx-219685806"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
        src: this.props.img,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        className: "jsx-219685806"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        id: "imgdesc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        className: "jsx-219685806"
      }, this.props.img_desc), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "219685806",
        css: "#imgdesc.jsx-219685806{margin-top:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZV9pbWcuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFvQixBQUc0QixlQUNqQiIsImZpbGUiOiJjb21wb25lbnRzL0FydGljbGVfaW1nLmpzeCIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbWllbi9Eb2N1bWVudHMvbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnRpY2xlX3RpdGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5pbWd9IC8+XG4gICAgICAgIDxwIGlkPVwiaW1nZGVzY1wiPnt0aGlzLnByb3BzLmltZ19kZXNjfTwvcD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICNpbWdkZXNjIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Article_img.jsx */"
      }));
    }
  }]);

  return Article_title;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/Article_title.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article_title; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/home/amien/Documents/nextjs/components/Article_title.jsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Article_title =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Article_title, _React$Component);

  function Article_title() {
    _classCallCheck(this, Article_title);

    return _possibleConstructorReturn(this, (Article_title.__proto__ || Object.getPrototypeOf(Article_title)).apply(this, arguments));
  }

  _createClass(Article_title, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, this.props.name));
    }
  }]);

  return Article_title;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);



/***/ }),

/***/ "./components/Article_title_desc.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article_title; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/amien/Documents/nextjs/components/Article_title_desc.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Article_title =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Article_title, _React$Component);

  function Article_title() {
    _classCallCheck(this, Article_title);

    return _possibleConstructorReturn(this, (Article_title.__proto__ || Object.getPrototypeOf(Article_title)).apply(this, arguments));
  }

  _createClass(Article_title, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        className: "jsx-1529150148"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "titledesc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        className: "jsx-1529150148"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        className: "jsx-1529150148"
      }, "By ", this.props.author, " / EdgeProp | ", this.props.date), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-1529150148"
      }, "Tags: ", this.props.tags)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1529150148",
        css: "#titledesc.jsx-1529150148{margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZV90aXRsZV9kZXNjLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZb0IsQUFHNkIsZ0JBQ2xCIiwiZmlsZSI6ImNvbXBvbmVudHMvQXJ0aWNsZV90aXRsZV9kZXNjLmpzeCIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbWllbi9Eb2N1bWVudHMvbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnRpY2xlX3RpdGxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGlkPVwidGl0bGVkZXNjXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBCeSB7dGhpcy5wcm9wcy5hdXRob3J9IC8gRWRnZVByb3AgfCB7dGhpcy5wcm9wcy5kYXRlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5UYWdzOiB7dGhpcy5wcm9wcy50YWdzfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAjdGl0bGVkZXNjIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Article_title_desc.jsx */"
      }));
    }
  }]);

  return Article_title;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/Footer.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Footer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/home/amien/Documents/nextjs/components/Footer.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 5
        },
        className: "jsx-4060432489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-left",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        className: "jsx-4060432489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        className: "jsx-4060432489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        className: "jsx-4060432489"
      }, "Real Estate"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-4060432489"
      }, "Browse ALl Properties"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-4060432489"
      }, "Condos"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-4060432489"
      }, "HDB"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-4060432489"
      }, "Landed"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-4060432489"
      }, "Commercial"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-4060432489"
      }, "Industrial"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-4060432489"
      }, "Property Near MRT "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-4060432489"
      }, "Property Near School"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        className: "jsx-4060432489"
      }, "En Bloc"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-4060432489"
      }, "New Property Launches")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-4060432489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-4060432489"
      }, "Singapore District"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-4060432489"
      }, "Browse All District"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-4060432489"
      }, "Yishun"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-4060432489"
      }, "Punggol"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-4060432489"
      }, "Pasir Ris"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-4060432489"
      }, "Toa Payoh"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-4060432489"
      }, "Commonwealth"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-4060432489"
      }, "Bedok"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-4060432489"
      }, "Orchad")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-4060432489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-4060432489"
      }, " "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-4060432489"
      }, "Pasir Panjang"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-4060432489"
      }, "Woodlands"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-4060432489"
      }, "Marine Parade"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-4060432489"
      }, "Seletar"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-4060432489"
      }, "Bayshore"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        className: "jsx-4060432489"
      }, "Eunos"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: "jsx-4060432489"
      }, "Holland"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-4060432489"
      }, "Jurong")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-4060432489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-4060432489"
      }, "Properties For Sale"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-4060432489"
      }, "Condominiums For Sale"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-4060432489"
      }, "Apartments For Sale"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-4060432489"
      }, "HDB For Sale"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-4060432489"
      }, "Landed Houses For Sale"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        className: "jsx-4060432489"
      }, "Commercial Properties For Sale"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-4060432489"
      }, "Industrial Properties For Sale")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-4060432489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-4060432489"
      }, "Properties For Rent"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-4060432489"
      }, "Rooms For Rent"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-4060432489"
      }, "Condominiums For Rent"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-4060432489"
      }, "Apartments For Rent"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        className: "jsx-4060432489"
      }, "HDB For Rent"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        className: "jsx-4060432489"
      }, "Landed Houses For Rent"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        className: "jsx-4060432489"
      }, "Commercial Properties For Rent"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        className: "jsx-4060432489"
      }, "Industrial Properties For Rent")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-4060432489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        className: "jsx-4060432489"
      }, "Popular Properties For Sale"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        className: "jsx-4060432489"
      }, "Freehold "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        className: "jsx-4060432489"
      }, "Condominiums/ "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        className: "jsx-4060432489"
      }, "Apartments For Sale"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-4060432489"
      }, "Best Value Condos For Sale"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        className: "jsx-4060432489"
      }, "2-Bedroom Condos For Sale"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        className: "jsx-4060432489"
      }, "3-Bedroom Condos For Sale")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        className: "jsx-4060432489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: "jsx-4060432489"
      }, "Edgeprop.sg (previously known as The Edge Property Singapore) \u2013 is the best property portal for home-seekers, buyers, investors and real estate agents alike in Singapore. On EdgeProp, you will be able to find all the latest news and views, informational guides, historical transactions and rental searches, and research data and analysis."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        className: "jsx-4060432489"
      }, "Whether you are looking to buy, sell or rent apartments, condominiums, executive condos, HDB flats, landed houses or commercial properties, we bring you Singapore\u2019s the most comprehensive and up-to-date property news and thousands of listings to facilitate your property decisions."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        className: "jsx-4060432489"
      }, "Make better decisions with our easy-to-use free and paid tools. The Edge Fair Value tool lets users calculate the fair value of a property and find properties below market value in Singapore. Meanwhile, discover all things en bloc, including Singapore en bloc news, trends and our En Bloc Calculator, which helps to determine the probability of a Singapore project being put up for collective sale."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        className: "jsx-4060432489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        className: "jsx-4060432489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        className: "jsx-4060432489"
      }, "HDB Estate"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        className: "jsx-4060432489"
      }, "Browse all estates"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        className: "jsx-4060432489"
      }, "Punggol"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        className: "jsx-4060432489"
      }, "Bukit Merah"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        className: "jsx-4060432489"
      }, "Jurong West"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        className: "jsx-4060432489"
      }, "Tampines"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        className: "jsx-4060432489"
      }, "Bishan"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        className: "jsx-4060432489"
      }, "Serangoon"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        className: "jsx-4060432489"
      }, "Clementi")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        className: "jsx-4060432489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: "jsx-4060432489"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        className: "jsx-4060432489"
      }, "Sengkang"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        className: "jsx-4060432489"
      }, "Queenstown"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        className: "jsx-4060432489"
      }, "Sembawang"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        className: "jsx-4060432489"
      }, "Hougang"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        className: "jsx-4060432489"
      }, "Bukit Batok"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        className: "jsx-4060432489"
      }, "Choa Chu Kang")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        className: "jsx-4060432489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        className: "jsx-4060432489"
      }, "Quick Links"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        className: "jsx-4060432489"
      }, "About Us"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        className: "jsx-4060432489"
      }, "Terms & Condition"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        className: "jsx-4060432489"
      }, "Privacy Policy"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        className: "jsx-4060432489"
      }, "Contact Us"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        className: "jsx-4060432489"
      }, "Advertise with us"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        className: "jsx-4060432489"
      }, "User Guide"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        className: "jsx-4060432489"
      }, "Facebook"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        className: "jsx-4060432489"
      }, "Watchlist"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        className: "jsx-4060432489"
      }, "We're Hiring!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        className: "jsx-4060432489"
      }, "FAQs")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        className: "jsx-4060432489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        className: "jsx-4060432489"
      }, "Popular Properties For Rent"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        className: "jsx-4060432489"
      }, "HDB Master Bedroom  "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        className: "jsx-4060432489"
      }, "For Rent/ "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        className: "jsx-4060432489"
      }, "Condo Master "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        className: "jsx-4060432489"
      }, "Bedroom For Rent"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        className: "jsx-4060432489"
      }, "Studio Apartment For Rent"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        className: "jsx-4060432489"
      }, "2-Bedroom Condos For Sale"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        className: "jsx-4060432489"
      }, "3-Bedroom Condos For Sale")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        className: "jsx-4060432489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        className: "jsx-4060432489"
      }, "Singapore Property News"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        className: "jsx-4060432489"
      }, "Property News  "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        className: "jsx-4060432489"
      }, "Property In Depth "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        className: "jsx-4060432489"
      }, "Property SG Living "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        className: "jsx-4060432489"
      }, "Property Deal Watch"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        className: "jsx-4060432489"
      }, "Property International"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        className: "jsx-4060432489"
      }, "Property Special "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        className: "jsx-4060432489"
      }, "Features")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        },
        className: "jsx-4060432489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        className: "jsx-4060432489"
      }, "Popular Property"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        className: "jsx-4060432489"
      }, "Melville Park  "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        className: "jsx-4060432489"
      }, "Simei "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        className: "jsx-4060432489"
      }, "Changi Court "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        className: "jsx-4060432489"
      }, "Duchess Crest "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        className: "jsx-4060432489"
      }, "Parc Life"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        className: "jsx-4060432489"
      }, "Seletar Springs "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        className: "jsx-4060432489"
      }, "Paya Lebar Square"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        },
        className: "jsx-4060432489"
      }, "Peach Garden"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        className: "jsx-4060432489"
      }, "Sim Lim Square"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        className: "jsx-4060432489"
      }, "GV Yishun")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer-content-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        className: "jsx-4060432489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        className: "jsx-4060432489"
      }, "Aside from that, EdgeProp also offers a market trend tracker that lets you access historical property data, sales volume and compare how similar properties are selling, a heat map that lets you find out where all Singapore\u2019s most popular property sales locations are, a HDB lease tool that lets you calculate your HDB tenure, an affordability calculator, and a property watch list to track your preferred Singapore property by project or location, as well as new launches."), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        className: "jsx-4060432489"
      }, "On the lookout for undervalued property or buying to rent? EdgeProp\u2019s powerful search filters let you personalise your property-seeking experience \u2013 whether you are looking for a property near MRT stations, amenities like schools and childcare centres, or a good-value condo with a sea view \u2013 so that you find exactly what you are looking for."))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "4060432489",
        css: "#footer.jsx-4060432489{padding:20px;border:1px solid #ddd;text-align:center;right:0;bottom:0;left:0;background:#080b12;color:white;}#footer-content-description.jsx-4060432489{padding:10px;text-align:justify;}#footer-left.jsx-4060432489{padding:10px;border:1px solid #ddd;float:left;width:47%;}#footer-right.jsx-4060432489{padding:10px;border:1px solid #ddd;float:right;width:47%;}#break.jsx-4060432489{clear:both;}#footer-content.jsx-4060432489{padding:5px;float:left;width:31%;text-align:left;height:300px;}#footer-content-title.jsx-4060432489{margin:10px 10px 10px 0px;font-weight:bold;text-align:left;}#footer-content-link.jsx-4060432489{margin:10px 10px 10px 0px;text-align:left;font-size:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySm9CLEFBRzBCLEFBWUQsQUFJQyxBQU1BLEFBTUgsQUFHQyxBQU9jLEFBS0EsV0FkM0IsQ0FHWSxDQS9CWSxBQVlKLEFBSUksQUFNQSxVQVViLEdBTU8sQUFLRCxNQTlCakIsQ0FvQmlCLEVBaENHLEFBZ0JQLEFBTUMsT0FxQkUsQ0FMQyxHQXJCTixDQU1BLEVBVUcsSUEvQkosR0FnQlYsQ0FNQSxBQW9CQSxFQUxBLEVBcENXLENBK0JYLFFBOUJTLE9BQ1csbUJBQ1AsWUFDYiIsImZpbGUiOiJjb21wb25lbnRzL0Zvb3Rlci5qc3giLCJzb3VyY2VSb290IjoiL2hvbWUvYW1pZW4vRG9jdW1lbnRzL25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImZvb3RlclwiPlxuICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWxlZnRcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC10aXRsZVwiPlJlYWwgRXN0YXRlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkJyb3dzZSBBTGwgUHJvcGVydGllczwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5Db25kb3M8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+SERCPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkxhbmRlZDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5Db21tZXJjaWFsPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkluZHVzdHJpYWw8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+UHJvcGVydHkgTmVhciBNUlQgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPlByb3BlcnR5IE5lYXIgU2Nob29sPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkVuIEJsb2M8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+TmV3IFByb3BlcnR5IExhdW5jaGVzPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtdGl0bGVcIj5TaW5nYXBvcmUgRGlzdHJpY3Q8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+QnJvd3NlIEFsbCBEaXN0cmljdDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5ZaXNodW48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+UHVuZ2dvbDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5QYXNpciBSaXM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+VG9hIFBheW9oPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkNvbW1vbndlYWx0aDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5CZWRvazwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5PcmNoYWQ8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC10aXRsZVwiPiA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+UGFzaXIgUGFuamFuZzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5Xb29kbGFuZHM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+TWFyaW5lIFBhcmFkZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5TZWxldGFyPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkJheXNob3JlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkV1bm9zPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkhvbGxhbmQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+SnVyb25nPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtdGl0bGVcIj5Qcm9wZXJ0aWVzIEZvciBTYWxlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkNvbmRvbWluaXVtcyBGb3IgU2FsZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5BcGFydG1lbnRzIEZvciBTYWxlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkhEQiBGb3IgU2FsZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5MYW5kZWQgSG91c2VzIEZvciBTYWxlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkNvbW1lcmNpYWwgUHJvcGVydGllcyBGb3IgU2FsZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5JbmR1c3RyaWFsIFByb3BlcnRpZXMgRm9yIFNhbGU8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC10aXRsZVwiPlByb3BlcnRpZXMgRm9yIFJlbnQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+Um9vbXMgRm9yIFJlbnQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+Q29uZG9taW5pdW1zIEZvciBSZW50PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkFwYXJ0bWVudHMgRm9yIFJlbnQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+SERCIEZvciBSZW50PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkxhbmRlZCBIb3VzZXMgRm9yIFJlbnQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+Q29tbWVyY2lhbCBQcm9wZXJ0aWVzIEZvciBSZW50PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkluZHVzdHJpYWwgUHJvcGVydGllcyBGb3IgUmVudDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LXRpdGxlXCI+UG9wdWxhciBQcm9wZXJ0aWVzIEZvciBTYWxlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkZyZWVob2xkIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5Db25kb21pbml1bXMvIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5BcGFydG1lbnRzIEZvciBTYWxlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkJlc3QgVmFsdWUgQ29uZG9zIEZvciBTYWxlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPjItQmVkcm9vbSBDb25kb3MgRm9yIFNhbGU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+My1CZWRyb29tIENvbmRvcyBGb3IgU2FsZTwvZGl2PlxuICAgICAgICAgICAgey8qIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+NC1CZWRyb29tIENvbmRvcyBGb3IgU2FsZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj4yLUJlZHJvb20gSERCIEZsYXRzIEZvciBTYWxlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPjMtQmVkcm9vbSBIREIgRmxhdHMgRm9yIFNhbGU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+NC1CZWRyb29tIEhEQiBGbGF0cyBGb3IgU2FsZTwvZGl2PiAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIDxwPkVkZ2Vwcm9wLnNnIChwcmV2aW91c2x5IGtub3duIGFzIFRoZSBFZGdlIFByb3BlcnR5IFNpbmdhcG9yZSkg4oCTIGlzIHRoZSBiZXN0IHByb3BlcnR5IHBvcnRhbCBmb3IgaG9tZS1zZWVrZXJzLCBidXllcnMsIGludmVzdG9ycyBhbmQgcmVhbCBlc3RhdGUgYWdlbnRzIGFsaWtlIGluIFNpbmdhcG9yZS4gT24gRWRnZVByb3AsIHlvdSB3aWxsIGJlIGFibGUgdG8gZmluZCBhbGwgdGhlIGxhdGVzdCBuZXdzIGFuZCB2aWV3cywgaW5mb3JtYXRpb25hbCBndWlkZXMsIGhpc3RvcmljYWwgdHJhbnNhY3Rpb25zIGFuZCByZW50YWwgc2VhcmNoZXMsIGFuZCByZXNlYXJjaCBkYXRhIGFuZCBhbmFseXNpcy48L3A+XG4gICAgICAgICAgICA8cD5XaGV0aGVyIHlvdSBhcmUgbG9va2luZyB0byBidXksIHNlbGwgb3IgcmVudCBhcGFydG1lbnRzLCBjb25kb21pbml1bXMsIGV4ZWN1dGl2ZSBjb25kb3MsIEhEQiBmbGF0cywgbGFuZGVkIGhvdXNlcyBvciBjb21tZXJjaWFsIHByb3BlcnRpZXMsIHdlIGJyaW5nIHlvdSBTaW5nYXBvcmXigJlzIHRoZSBtb3N0IGNvbXByZWhlbnNpdmUgYW5kIHVwLXRvLWRhdGUgcHJvcGVydHkgbmV3cyBhbmQgdGhvdXNhbmRzIG9mIGxpc3RpbmdzIHRvIGZhY2lsaXRhdGUgeW91ciBwcm9wZXJ0eSBkZWNpc2lvbnMuPC9wPlxuICAgICAgICAgICAgPHA+TWFrZSBiZXR0ZXIgZGVjaXNpb25zIHdpdGggb3VyIGVhc3ktdG8tdXNlIGZyZWUgYW5kIHBhaWQgdG9vbHMuIFRoZSBFZGdlIEZhaXIgVmFsdWUgdG9vbCBsZXRzIHVzZXJzIGNhbGN1bGF0ZSB0aGUgZmFpciB2YWx1ZSBvZiBhIHByb3BlcnR5IGFuZCBmaW5kIHByb3BlcnRpZXMgYmVsb3cgbWFya2V0IHZhbHVlIGluIFNpbmdhcG9yZS4gTWVhbndoaWxlLCBkaXNjb3ZlciBhbGwgdGhpbmdzIGVuIGJsb2MsIGluY2x1ZGluZyBTaW5nYXBvcmUgZW4gYmxvYyBuZXdzLCB0cmVuZHMgYW5kIG91ciBFbiBCbG9jIENhbGN1bGF0b3IsIHdoaWNoIGhlbHBzIHRvIGRldGVybWluZSB0aGUgcHJvYmFiaWxpdHkgb2YgYSBTaW5nYXBvcmUgcHJvamVjdCBiZWluZyBwdXQgdXAgZm9yIGNvbGxlY3RpdmUgc2FsZS48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLXJpZ2h0XCI+XG4gICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LXRpdGxlXCI+SERCIEVzdGF0ZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5Ccm93c2UgYWxsIGVzdGF0ZXM8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+UHVuZ2dvbDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5CdWtpdCBNZXJhaDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5KdXJvbmcgV2VzdDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5UYW1waW5lczwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5CaXNoYW48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+U2VyYW5nb29uPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkNsZW1lbnRpPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtdGl0bGVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+U2VuZ2thbmc8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+UXVlZW5zdG93bjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5TZW1iYXdhbmc8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+SG91Z2FuZzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5CdWtpdCBCYXRvazwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5DaG9hIENodSBLYW5nPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtdGl0bGVcIj5RdWljayBMaW5rczwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5BYm91dCBVczwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5UZXJtcyAmIENvbmRpdGlvbjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5Qcml2YWN5IFBvbGljeTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5Db250YWN0IFVzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkFkdmVydGlzZSB3aXRoIHVzPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPlVzZXIgR3VpZGU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+RmFjZWJvb2s8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+V2F0Y2hsaXN0PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPldlJ3JlIEhpcmluZyE8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+RkFRczwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LXRpdGxlXCI+UG9wdWxhciBQcm9wZXJ0aWVzIEZvciBSZW50PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkhEQiBNYXN0ZXIgQmVkcm9vbSAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkZvciBSZW50LyA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+Q29uZG8gTWFzdGVyIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5CZWRyb29tIEZvciBSZW50PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPlN0dWRpbyBBcGFydG1lbnQgRm9yIFJlbnQ8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+Mi1CZWRyb29tIENvbmRvcyBGb3IgU2FsZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj4zLUJlZHJvb20gQ29uZG9zIEZvciBTYWxlPC9kaXY+XG4gICAgICAgICAgICB7LyogPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj40LUJlZHJvb20gQ29uZG9zIEZvciBTYWxlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPjItQmVkcm9vbSBIREIgRmxhdHMgRm9yIFNhbGU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+My1CZWRyb29tIEhEQiBGbGF0cyBGb3IgU2FsZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj40LUJlZHJvb20gSERCIEZsYXRzIEZvciBTYWxlPC9kaXY+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LXRpdGxlXCI+U2luZ2Fwb3JlIFByb3BlcnR5IE5ld3M8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+UHJvcGVydHkgTmV3cyAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPlByb3BlcnR5IEluIERlcHRoIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5Qcm9wZXJ0eSBTRyBMaXZpbmcgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPlByb3BlcnR5IERlYWwgV2F0Y2g8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+UHJvcGVydHkgSW50ZXJuYXRpb25hbDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5Qcm9wZXJ0eSBTcGVjaWFsIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5GZWF0dXJlczwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LXRpdGxlXCI+UG9wdWxhciBQcm9wZXJ0eTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImZvb3Rlci1jb250ZW50LWxpbmtcIj5NZWx2aWxsZSBQYXJrICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+U2ltZWkgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkNoYW5naSBDb3VydCA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+RHVjaGVzcyBDcmVzdCA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+UGFyYyBMaWZlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPlNlbGV0YXIgU3ByaW5ncyA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+UGF5YSBMZWJhciBTcXVhcmU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1saW5rXCI+UGVhY2ggR2FyZGVuPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPlNpbSBMaW0gU3F1YXJlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyLWNvbnRlbnQtbGlua1wiPkdWIFlpc2h1bjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJmb290ZXItY29udGVudC1kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPHA+QXNpZGUgZnJvbSB0aGF0LCBFZGdlUHJvcCBhbHNvIG9mZmVycyBhIG1hcmtldCB0cmVuZCB0cmFja2VyIHRoYXQgbGV0cyB5b3UgYWNjZXNzIGhpc3RvcmljYWwgcHJvcGVydHkgZGF0YSwgc2FsZXMgdm9sdW1lIGFuZCBjb21wYXJlIGhvdyBzaW1pbGFyIHByb3BlcnRpZXMgYXJlIHNlbGxpbmcsIGEgaGVhdCBtYXAgdGhhdCBsZXRzIHlvdSBmaW5kIG91dCB3aGVyZSBhbGwgU2luZ2Fwb3Jl4oCZcyBtb3N0IHBvcHVsYXIgcHJvcGVydHkgc2FsZXMgbG9jYXRpb25zIGFyZSwgYSBIREIgbGVhc2UgdG9vbCB0aGF0IGxldHMgeW91IGNhbGN1bGF0ZSB5b3VyIEhEQiB0ZW51cmUsIGFuIGFmZm9yZGFiaWxpdHkgY2FsY3VsYXRvciwgYW5kIGEgcHJvcGVydHkgd2F0Y2ggbGlzdCB0byB0cmFjayB5b3VyIHByZWZlcnJlZCBTaW5nYXBvcmUgcHJvcGVydHkgYnkgcHJvamVjdCBvciBsb2NhdGlvbiwgYXMgd2VsbCBhcyBuZXcgbGF1bmNoZXMuPC9wPiBcbiAgICAgICAgICAgIDxwPk9uIHRoZSBsb29rb3V0IGZvciB1bmRlcnZhbHVlZCBwcm9wZXJ0eSBvciBidXlpbmcgdG8gcmVudD8gRWRnZVByb3DigJlzIHBvd2VyZnVsIHNlYXJjaCBmaWx0ZXJzIGxldCB5b3UgcGVyc29uYWxpc2UgeW91ciBwcm9wZXJ0eS1zZWVraW5nIGV4cGVyaWVuY2Ug4oCTIHdoZXRoZXIgeW91IGFyZSBsb29raW5nIGZvciBhIHByb3BlcnR5IG5lYXIgTVJUIHN0YXRpb25zLCBhbWVuaXRpZXMgbGlrZSBzY2hvb2xzIGFuZCBjaGlsZGNhcmUgY2VudHJlcywgb3IgYSBnb29kLXZhbHVlIGNvbmRvIHdpdGggYSBzZWEgdmlldyDigJMgc28gdGhhdCB5b3UgZmluZCBleGFjdGx5IHdoYXQgeW91IGFyZSBsb29raW5nIGZvci48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgI2Zvb3RlciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDojMDgwYjEyO1xuICAgICAgICAgICAgY29sb3I6d2hpdGU7ICBcbiAgICAgICAgICB9XG4gICAgICAgICAgI2Zvb3Rlci1jb250ZW50LWRlc2NyaXB0aW9ue1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmp1c3RpZnk7XG4gICAgICAgICAgfVxuICAgICAgICAgICNmb290ZXItbGVmdCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgd2lkdGg6NDclO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjZm9vdGVyLXJpZ2h0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgd2lkdGg6NDclO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjYnJlYWt7XG4gICAgICAgICAgICBjbGVhcjpib3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjZm9vdGVyLWNvbnRlbnR7XG4gICAgICAgICAgICBwYWRkaW5nOjVweDtcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICB3aWR0aDozMSU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgICAgICBoZWlnaHQ6MzAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNmb290ZXItY29udGVudC10aXRsZXtcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4IDEwcHggMTBweCAwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjZm9vdGVyLWNvbnRlbnQtbGlua3tcbiAgICAgICAgICAgIG1hcmdpbjoxMHB4IDEwcHggMTBweCAwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOmxlZnQ7XG4gICAgICAgICAgICBmb250LXNpemU6MTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8YnIgaWQ9XCJicmVha1wiLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Footer.jsx */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        id: "break",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        className: "jsx-4060432489"
      }));
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/Header.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/home/amien/Documents/nextjs/components/Header.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        className: "jsx-1689682088"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-1689682088"
      }, this.props.title)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1689682088",
        css: "#header.jsx-1689682088{padding:20px;border:1px solid #ddd;}a.jsx-1689682088{color:black;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVb0IsQUFHMEIsQUFJRCxZQUNTLENBSkMsc0JBQ3hCLDJCQUlBIiwiZmlsZSI6ImNvbXBvbmVudHMvSGVhZGVyLmpzeCIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbWllbi9Eb2N1bWVudHMvbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT57dGhpcy5wcm9wcy50aXRsZX08L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICNoZWFkZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Header.jsx */"
      }));
    }
  }]);

  return Header;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/Search_article.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return search_article; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/home/amien/Documents/nextjs/components/Search_article.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var search_article =
/*#__PURE__*/
function (_React$Component) {
  _inherits(search_article, _React$Component);

  function search_article() {
    _classCallCheck(this, search_article);

    return _possibleConstructorReturn(this, (search_article.__proto__ || Object.getPrototypeOf(search_article)).apply(this, arguments));
  }

  _createClass(search_article, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "search_article",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        className: "jsx-3682636489"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "search_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        className: "jsx-3682636489"
      }, "Search Article "), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        name: "search",
        placeholder: "Enter keyword",
        id: "search",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-3682636489"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3682636489",
        css: "#search_article.jsx-3682636489{background-color:#f4f6f9;padding-top:12px;width:100%;text-align:center;padding-bottom:20px;}#search_title.jsx-3682636489{font-size:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU2VhcmNoX2FydGljbGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNvQixBQUdzQyxBQU9YLGVBQ2hCLFVBUG1CLGlCQUNQLFdBQ1Esa0JBQ0Usb0JBQ3RCIiwiZmlsZSI6ImNvbXBvbmVudHMvU2VhcmNoX2FydGljbGUuanN4Iiwic291cmNlUm9vdCI6Ii9ob21lL2FtaWVuL0RvY3VtZW50cy9uZXh0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHNlYXJjaF9hcnRpY2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwic2VhcmNoX2FydGljbGVcIj5cbiAgICAgICAgPGRpdiBpZD1cInNlYXJjaF90aXRsZVwiPlNlYXJjaCBBcnRpY2xlIDwvZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJFbnRlciBrZXl3b3JkXCIgaWQ9XCJzZWFyY2hcIi8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAjc2VhcmNoX2FydGljbGV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmY5O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzZWFyY2hfdGl0bGV7XG4gICAgICAgICAgICBmb250LXNpemU6MjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Search_article.jsx */"
      }));
    }
  }]);

  return search_article;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/Social_icon.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return social_icon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/home/amien/Documents/nextjs/components/Social_icon.jsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var social_icon =
/*#__PURE__*/
function (_React$Component) {
  _inherits(social_icon, _React$Component);

  function social_icon() {
    _classCallCheck(this, social_icon);

    return _possibleConstructorReturn(this, (social_icon.__proto__ || Object.getPrototypeOf(social_icon)).apply(this, arguments));
  }

  _createClass(social_icon, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        className: "jsx-3734597992"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "social",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        className: "jsx-3734597992"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        id: "social_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-3734597992"
      }, "Follow Us On"), this.props.data.map(function (social) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
          href: social.link,
          key: social.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          id: "social_icon",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          },
          className: "jsx-3734597992"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: social.icon,
          alt: social.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          className: "jsx-3734597992"
        })));
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3734597992",
        css: "#social_icon.jsx-3734597992{margin-right:5px;}#social_title.jsx-3734597992{margin-bottom:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvU29jaWFsX2ljb24uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCb0IsQUFHOEIsQUFHQyxpQkFGcEIsQ0FHQSIsImZpbGUiOiJjb21wb25lbnRzL1NvY2lhbF9pY29uLmpzeCIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbWllbi9Eb2N1bWVudHMvbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBzb2NpYWxfaWNvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImZvb3RlclwiPlxuICAgICAgICA8ZGl2IGlkPVwic29jaWFsXCI+XG4gICAgICAgICAgPGgzIGlkPVwic29jaWFsX3RpdGxlXCI+Rm9sbG93IFVzIE9uPC9oMz5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLm1hcChzb2NpYWwgPT4gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17c29jaWFsLmxpbmt9IGtleT17c29jaWFsLmlkfT5cbiAgICAgICAgICAgICAgPGEgaWQ9XCJzb2NpYWxfaWNvblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzb2NpYWwuaWNvbn0gYWx0PXtzb2NpYWwubmFtZX0gLz5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAjc29jaWFsX2ljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzb2NpYWxfdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Social_icon.jsx */"
      }));
    }
  }]);

  return social_icon;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./components/Top_article.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return top_article; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
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
        className: "jsx-3993210196"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "side-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-3993210196"
      }, "Top Articles"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "side-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-3993210196"
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
          className: "jsx-3993210196"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          id: "top-conttent",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          className: "jsx-3993210196"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          id: "side-number",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          className: "jsx-3993210196"
        }, top.id), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          id: "side-content-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          className: "jsx-3993210196"
        }, top.name))));
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-3993210196"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        className: "jsx-3993210196"
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
        className: "jsx-3993210196"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "event-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-3993210196"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-3993210196"
      }, " Event calender")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "event-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: "jsx-3993210196"
      }, this.props.data2.map(function (event) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
          href: event.link,
          key: event.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
          id: "link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          className: "jsx-3993210196"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          id: "event-contain",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          className: "jsx-3993210196"
        }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
          src: event.img,
          width: "100%",
          alt: event.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          className: "jsx-3993210196"
        }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          id: "event-content-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          className: "jsx-3993210196"
        }, event.name))));
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-3993210196"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3993210196",
        css: "#break.jsx-3993210196{clear:both;}#event-content-title.jsx-3993210196{font-weight:bold;background-color:#f3f6f9;margin:0px 2px 2px 2px;padding:0.5rem;}#link.jsx-3993210196{-webkit-text-decoration:none;text-decoration:none;}#top-conttent.jsx-3993210196{overflow:hidden;margin-top:10px;margin-bottom:10px;}#side-number.jsx-3993210196{width:10%;font-size:30px;float:left;padding:10px;font-style:bold;}#side-content-title.jsx-3993210196{width:75%;float:right;padding:10px;}#social_icon.jsx-3993210196{margin-right:5px;}#social_title.jsx-3993210196{margin-bottom:0px;}#sidebar.jsx-3993210196{float:right;width:25%;height:100px;}#side-title.jsx-3993210196{background-color:rgb(251,239,214);word-break:normal;padding:10px;font-size:20px;font-family:Poppins,san-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9wX2FydGljbGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdEb0IsQUFHdUIsQUFHTSxBQU1JLEFBSUosQUFLUCxBQU9BLEFBS1EsQUFHQyxBQUdOLEFBTXdCLFVBdkJ0QixBQU9ILENBekJiLENBb0NZLElBdkJNLENBVlMsQUEyQjNCLENBR0EsSUFQYyxBQVdDLEdBbEJILE9BTFMsRUE0QkQsQ0FmcEIsQUFZQSxDQW5CYyxNQWhCVyxPQWlCUixDQVpqQixDQU1BLENBNEJlLGFBdENFLEFBaUJqQixBQXNCZ0IsZUF0Q2hCLEFBdUNnQyw4QkFDaEMiLCJmaWxlIjoiY29tcG9uZW50cy9Ub3BfYXJ0aWNsZS5qc3giLCJzb3VyY2VSb290IjoiL2hvbWUvYW1pZW4vRG9jdW1lbnRzL25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBTZWFyY2hfYXJ0aWNsZSBmcm9tIFwiLi9TZWFyY2hfYXJ0aWNsZVwiO1xuLy8gaW1wb3J0IEV2ZW50X2NhbGVuZGVyIGZyb20gXCIuL0V2ZW50X2NhbGVuZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRvcF9hcnRpY2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwic2lkZWJhclwiPlxuICAgICAgICA8ZGl2IGlkPVwic2lkZS10aXRsZVwiPlxuICAgICAgICAgICAgVG9wIEFydGljbGVzXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwic2lkZS1jb250ZW50XCI+XG4gICAgICAgICAgXG4gICAgICAgICAge3RoaXMucHJvcHMuZGF0YS5tYXAodG9wID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3RvcC5saW5rfSBrZXk9e3RvcC5pZH0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0b3AtY29udHRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2lkZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgIHt0b3AuaWR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInNpZGUtY29udGVudC10aXRsZVwiPiAgIFxuICAgICAgICAgICAgICAgICAge3RvcC5uYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICBcbiAgICAgICAgICApKX1cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgPFNlYXJjaF9hcnRpY2xlLz5cbiAgICAgICAgPGhyLz5cbiAgICAgICAgey8qIDxFdmVudF9jYWxlbmRlciBkYXRhPXt0aGlzLnByb3BzLmV2ZW50fS8+ICovfVxuICAgICAgICA8ZGl2IGlkPVwiZXZlbnQtdGl0bGVcIj5cbiAgICAgICAgICAgPGgzPiBFdmVudCBjYWxlbmRlcjwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiZXZlbnQtY29udGVudFwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEyLm1hcChldmVudCA9PiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXtldmVudC5saW5rfSBrZXk9e2V2ZW50LmlkfT5cbiAgICAgICAgICAgICAgPGEgaWQ9XCJsaW5rXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImV2ZW50LWNvbnRhaW5cIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZXZlbnQuaW1nfSB3aWR0aD1cIjEwMCVcIiBhbHQ9e2V2ZW50Lm5hbWV9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXZlbnQtY29udGVudC10aXRsZVwiPiAgIFxuICAgICAgICAgICAgICAgICAge2V2ZW50Lm5hbWV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIFxuICAgICAgICAgICkpfVxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyLz5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgI2JyZWFre1xuICAgICAgICAgICAgY2xlYXI6Ym90aDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2V2ZW50LWNvbnRlbnQtdGl0bGV7XG4gICAgICAgICAgICBmb250LXdlaWdodDpib2xkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjZmOTtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDJweCAycHggMnB4O1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjbGlua3tcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjdG9wLWNvbnR0ZW50IHtcbiAgICAgICAgICAgIC8qIG92ZXJmbG93IHRvIGhhbmRsZSBpbm5lciBmbG9hdGluZyBibG9jayAqL1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc2lkZS1udW1iZXJ7XG4gICAgICAgICAgICB3aWR0aDoxMCU7XG4gICAgICAgICAgICBmb250LXNpemU6MzBweDtcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XG4gICAgICAgICAgICBwYWRkaW5nOjEwcHg7XG4gICAgICAgICAgICBmb250LXN0eWxlOmJvbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzaWRlLWNvbnRlbnQtdGl0bGV7XG4gICAgICAgICAgICB3aWR0aDo3NSU7XG4gICAgICAgICAgICBmbG9hdDpyaWdodDtcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3NvY2lhbF9pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc29jaWFsX3RpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3NpZGViYXIge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgI3NpZGUtdGl0bGV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUxLCAyMzksIDIxNCk7XG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBub3JtYWw7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOjIwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogUG9wcGlucyxzYW4tc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxiciBpZD1cImJyZWFrXCIvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Top_article.jsx */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        id: "break",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        className: "jsx-3993210196"
      }));
    }
  }]);

  return top_article;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Header_jsx__ = __webpack_require__("./components/Header.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Article__ = __webpack_require__("./components/Article.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Footer_jsx__ = __webpack_require__("./components/Footer.jsx");
var _jsxFileName = "/home/amien/Documents/nextjs/pages/index.js";







function getArticle() {
  return {
    id: "1",
    title: "Four shophouses on Tessensohn Road going for $25 mil",
    author: "Bong Xin Ying",
    date: "July 19, 2018 7:45 PM SGT",
    tags: "Tessensohn Road Shophouses",
    img: "https://sg.tepcdn.com/public/usr/1ihxsf/7d7c4d-15-17-19-21-Tessensohn-Road-Shophouses-1-.jpg",
    img_desc: "Cushman & Wakefield is marketing this row of four shophouses (Credit:C&W)",
    article: "<p> A row of four contiguous freehold conservation shophouses at Nos 15, 17, 19 and 21 Tessensohn Road is up for sale at a reserve price of $25 million. This translates into $1,399 psf on the allowable maximum GFA, according to the marketing agent Cushman & Wakefield (C&W). </p> <p> The properties have four individual land titles and a total land area of 5,958 sq ft. Under the 2014 Master Plan, it is zoned “residential with commercial at first storey”, with a gross plot ratio of 3.0. The GFA can be maximised up to 17,873 sq ft. </p> <p> The successful bidder can efficiently construct a six-storey rear extension over the four land plots. This is subject to the authorities’ approval. </p> <p> Nos 15 and 21 are the original two-storey shophouses; Nos 17 and 19 each have a part-two-storey front and part-three-storey rear. Each shophouse has a private car park lot. </p> <p> The four shophouses are being held by three separate ownerships, and the owners have jointly put them up for sale by tender. </p> <p> Christina Sim, director of capital markets at C&W, says: “Despite the recent cooling measures in the residential property market, freehold conservation shophouses in city-fringe locations have withstood the test of time as favoured long-term investments.” </p> <p>The tender will close on Aug 28.</p>"
  };
}

function getSocialMedia() {
  return [{
    id: "1",
    name: "facebook",
    icon: "https://dkc9trqgco1sw.cloudfront.net/images/fb_btn.png",
    link: "https://www.facebook.com/edgepropsg"
  }, {
    id: "2",
    name: "twitter",
    icon: "https://dkc9trqgco1sw.cloudfront.net/images/tw_btn.png",
    link: "https://twitter.com/edgepropsg"
  }, {
    id: "3",
    name: "instagram",
    icon: "https://dkc9trqgco1sw.cloudfront.net/images/icons/insta_btn.png",
    link: "https://www.instagram.com/edgepropsg"
  }, {
    id: "4",
    name: "linkedin",
    icon: "https://dkc9trqgco1sw.cloudfront.net/images/icons/li_btn.png",
    link: "https://www.linkedin.com/showcase/6576638/"
  }, {
    id: "5",
    name: "youtube",
    icon: "https://dkc9trqgco1sw.cloudfront.net/images/icons/yt_btn.png",
    link: "https://www.youtube.com/channel/UCp6JB-mJdeI4I1X2wN5XXZA"
  }];
}

function getTopArticle() {
  return [{
    id: "1",
    name: "Lure of a comfortable, semi-retired lifestyle at just $1,500 a month",
    link: "https://www.edgeprop.sg/property-news/lure-comfortable-semi-retired-lifestyle-just-1500-month"
  }, {
    id: "2",
    name: "My House Tour: A Bachelor Pad in Tanjong Pagar",
    link: "https://www.edgeprop.sg/property-news/my-house-tour-bachelor-pad-tanjong-pagar"
  }, {
    id: "3",
    name: "5 things you need to know about Jho Low’s super-lux Singapore condo",
    link: "https://www.edgeprop.sg/property-news/5-things-you-need-know-about-jho-low%E2%80%99s-super-lux-singapore-condo"
  }, {
    id: "4",
    name: "The most expensive Good Class Bungalows sold in Singapore in 2018",
    link: "https://www.edgeprop.sg/property-news/most-expensive-good-class-bungalows-sold-singapore-2018"
  }, {
    id: "5",
    name: "Higher ABSD rates, tighter loan limits: What this means for Singapore’s homebuyers",
    link: "https://www.edgeprop.sg/property-news/higher-absd-rates-tighter-loan-limits-what-means-singapore%E2%80%99s-homebuyers-0"
  }];
}

function getEvent_calender() {
  return [{
    id: "1",
    name: "Agent Training - 13 September 2018",
    img: "https://dkc9trqgco1sw.cloudfront.net/styles/homepage_new_slider_main/s3/Agent%20Training%20Cover%20Edgeprop-552_15.jpg?itok=RJbKGSQb",
    link: "https://www.edgeprop.sg/property-events/agent-training-13-september-2018"
  }, {
    id: "2",
    name: "Property Auction by Knight Frank (September 2018)",
    img: "https://dkc9trqgco1sw.cloudfront.net/styles/homepage_new_slider_main/s3/KnightFrank_2.jpg?itok=57vsHeVw",
    link: "https://www.edgeprop.sg/property-events/property-auction-knight-frank-september-2018"
  }];
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    className: "jsx-1919411563"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    className: "jsx-1919411563"
  }, "Simple Page")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header_jsx__["a" /* default */], {
    title: "Simple Page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Article__["a" /* default */], {
    data_article: getArticle(),
    social_media: getSocialMedia(),
    top: getTopArticle(),
    event: getEvent_calender(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Footer_jsx__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1919411563",
    css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtIZ0IiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYW1pZW4vRG9jdW1lbnRzL25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanN4JztcbmltcG9ydCBBcnRpY2xlIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyLmpzeCc7XG5cbmZ1bmN0aW9uIGdldEFydGljbGUoKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IFwiMVwiLFxuICAgIHRpdGxlOiBcIkZvdXIgc2hvcGhvdXNlcyBvbiBUZXNzZW5zb2huIFJvYWQgZ29pbmcgZm9yICQyNSBtaWxcIixcbiAgICBhdXRob3I6IFwiQm9uZyBYaW4gWWluZ1wiLFxuICAgIGRhdGU6IFwiSnVseSAxOSwgMjAxOCA3OjQ1IFBNIFNHVFwiLFxuICAgIHRhZ3M6IFwiVGVzc2Vuc29obiBSb2FkIFNob3Bob3VzZXNcIixcbiAgICBpbWc6XG4gICAgICBcImh0dHBzOi8vc2cudGVwY2RuLmNvbS9wdWJsaWMvdXNyLzFpaHhzZi83ZDdjNGQtMTUtMTctMTktMjEtVGVzc2Vuc29obi1Sb2FkLVNob3Bob3VzZXMtMS0uanBnXCIsXG4gICAgaW1nX2Rlc2M6XG4gICAgICBcIkN1c2htYW4gJiBXYWtlZmllbGQgaXMgbWFya2V0aW5nIHRoaXMgcm93IG9mIGZvdXIgc2hvcGhvdXNlcyAoQ3JlZGl0OkMmVylcIixcbiAgICBhcnRpY2xlOlxuICAgICAgXCI8cD4gQSByb3cgb2YgZm91ciBjb250aWd1b3VzIGZyZWVob2xkIGNvbnNlcnZhdGlvbiBzaG9waG91c2VzIGF0IE5vcyAxNSwgMTcsIDE5IGFuZCAyMSBUZXNzZW5zb2huIFJvYWQgaXMgdXAgZm9yIHNhbGUgYXQgYSByZXNlcnZlIHByaWNlIG9mICQyNSBtaWxsaW9uLiBUaGlzIHRyYW5zbGF0ZXMgaW50byAkMSwzOTkgcHNmIG9uIHRoZSBhbGxvd2FibGUgbWF4aW11bSBHRkEsIGFjY29yZGluZyB0byB0aGUgbWFya2V0aW5nIGFnZW50IEN1c2htYW4gJiBXYWtlZmllbGQgKEMmVykuIDwvcD4gPHA+IFRoZSBwcm9wZXJ0aWVzIGhhdmUgZm91ciBpbmRpdmlkdWFsIGxhbmQgdGl0bGVzIGFuZCBhIHRvdGFsIGxhbmQgYXJlYSBvZiA1LDk1OCBzcSBmdC4gVW5kZXIgdGhlIDIwMTQgTWFzdGVyIFBsYW4sIGl0IGlzIHpvbmVkIOKAnHJlc2lkZW50aWFsIHdpdGggY29tbWVyY2lhbCBhdCBmaXJzdCBzdG9yZXnigJ0sIHdpdGggYSBncm9zcyBwbG90IHJhdGlvIG9mIDMuMC4gVGhlIEdGQSBjYW4gYmUgbWF4aW1pc2VkIHVwIHRvIDE3LDg3MyBzcSBmdC4gPC9wPiA8cD4gVGhlIHN1Y2Nlc3NmdWwgYmlkZGVyIGNhbiBlZmZpY2llbnRseSBjb25zdHJ1Y3QgYSBzaXgtc3RvcmV5IHJlYXIgZXh0ZW5zaW9uIG92ZXIgdGhlIGZvdXIgbGFuZCBwbG90cy4gVGhpcyBpcyBzdWJqZWN0IHRvIHRoZSBhdXRob3JpdGllc+KAmSBhcHByb3ZhbC4gPC9wPiA8cD4gTm9zIDE1IGFuZCAyMSBhcmUgdGhlIG9yaWdpbmFsIHR3by1zdG9yZXkgc2hvcGhvdXNlczsgTm9zIDE3IGFuZCAxOSBlYWNoIGhhdmUgYSBwYXJ0LXR3by1zdG9yZXkgZnJvbnQgYW5kIHBhcnQtdGhyZWUtc3RvcmV5IHJlYXIuIEVhY2ggc2hvcGhvdXNlIGhhcyBhIHByaXZhdGUgY2FyIHBhcmsgbG90LiA8L3A+IDxwPiBUaGUgZm91ciBzaG9waG91c2VzIGFyZSBiZWluZyBoZWxkIGJ5IHRocmVlIHNlcGFyYXRlIG93bmVyc2hpcHMsIGFuZCB0aGUgb3duZXJzIGhhdmUgam9pbnRseSBwdXQgdGhlbSB1cCBmb3Igc2FsZSBieSB0ZW5kZXIuIDwvcD4gPHA+IENocmlzdGluYSBTaW0sIGRpcmVjdG9yIG9mIGNhcGl0YWwgbWFya2V0cyBhdCBDJlcsIHNheXM6IOKAnERlc3BpdGUgdGhlIHJlY2VudCBjb29saW5nIG1lYXN1cmVzIGluIHRoZSByZXNpZGVudGlhbCBwcm9wZXJ0eSBtYXJrZXQsIGZyZWVob2xkIGNvbnNlcnZhdGlvbiBzaG9waG91c2VzIGluIGNpdHktZnJpbmdlIGxvY2F0aW9ucyBoYXZlIHdpdGhzdG9vZCB0aGUgdGVzdCBvZiB0aW1lIGFzIGZhdm91cmVkIGxvbmctdGVybSBpbnZlc3RtZW50cy7igJ0gPC9wPiA8cD5UaGUgdGVuZGVyIHdpbGwgY2xvc2Ugb24gQXVnIDI4LjwvcD5cIlxuICB9O1xufVxuZnVuY3Rpb24gZ2V0U29jaWFsTWVkaWEoKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgaWQ6IFwiMVwiLFxuICAgICAgbmFtZTogXCJmYWNlYm9va1wiLFxuICAgICAgaWNvbjogXCJodHRwczovL2RrYzl0cnFnY28xc3cuY2xvdWRmcm9udC5uZXQvaW1hZ2VzL2ZiX2J0bi5wbmdcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2VkZ2Vwcm9wc2dcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiMlwiLFxuICAgICAgbmFtZTogXCJ0d2l0dGVyXCIsXG4gICAgICBpY29uOiBcImh0dHBzOi8vZGtjOXRycWdjbzFzdy5jbG91ZGZyb250Lm5ldC9pbWFnZXMvdHdfYnRuLnBuZ1wiLFxuICAgICAgbGluazogXCJodHRwczovL3R3aXR0ZXIuY29tL2VkZ2Vwcm9wc2dcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiM1wiLFxuICAgICAgbmFtZTogXCJpbnN0YWdyYW1cIixcbiAgICAgIGljb246IFwiaHR0cHM6Ly9ka2M5dHJxZ2NvMXN3LmNsb3VkZnJvbnQubmV0L2ltYWdlcy9pY29ucy9pbnN0YV9idG4ucG5nXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZWRnZXByb3BzZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCI0XCIsXG4gICAgICBuYW1lOiBcImxpbmtlZGluXCIsXG4gICAgICBpY29uOiBcImh0dHBzOi8vZGtjOXRycWdjbzFzdy5jbG91ZGZyb250Lm5ldC9pbWFnZXMvaWNvbnMvbGlfYnRuLnBuZ1wiLFxuICAgICAgbGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2hvd2Nhc2UvNjU3NjYzOC9cIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiNVwiLFxuICAgICAgbmFtZTogXCJ5b3V0dWJlXCIsXG4gICAgICBpY29uOiBcImh0dHBzOi8vZGtjOXRycWdjbzFzdy5jbG91ZGZyb250Lm5ldC9pbWFnZXMvaWNvbnMveXRfYnRuLnBuZ1wiLFxuICAgICAgbGluazogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDcDZKQi1tSmRlSTRJMVgyd041WFhaQVwiXG4gICAgfVxuICBdO1xufVxuXG5mdW5jdGlvbiBnZXRUb3BBcnRpY2xlKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGlkOiBcIjFcIixcbiAgICAgIG5hbWU6IFwiTHVyZSBvZiBhIGNvbWZvcnRhYmxlLCBzZW1pLXJldGlyZWQgbGlmZXN0eWxlIGF0IGp1c3QgJDEsNTAwIGEgbW9udGhcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZWRnZXByb3Auc2cvcHJvcGVydHktbmV3cy9sdXJlLWNvbWZvcnRhYmxlLXNlbWktcmV0aXJlZC1saWZlc3R5bGUtanVzdC0xNTAwLW1vbnRoXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIjJcIixcbiAgICAgIG5hbWU6IFwiTXkgSG91c2UgVG91cjogQSBCYWNoZWxvciBQYWQgaW4gVGFuam9uZyBQYWdhclwiLFxuICAgICAgbGluazogXCJodHRwczovL3d3dy5lZGdlcHJvcC5zZy9wcm9wZXJ0eS1uZXdzL215LWhvdXNlLXRvdXItYmFjaGVsb3ItcGFkLXRhbmpvbmctcGFnYXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiM1wiLFxuICAgICAgbmFtZTogXCI1IHRoaW5ncyB5b3UgbmVlZCB0byBrbm93IGFib3V0IEpobyBMb3figJlzIHN1cGVyLWx1eCBTaW5nYXBvcmUgY29uZG9cIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZWRnZXByb3Auc2cvcHJvcGVydHktbmV3cy81LXRoaW5ncy15b3UtbmVlZC1rbm93LWFib3V0LWpoby1sb3clRTIlODAlOTlzLXN1cGVyLWx1eC1zaW5nYXBvcmUtY29uZG9cIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiNFwiLFxuICAgICAgbmFtZTogXCJUaGUgbW9zdCBleHBlbnNpdmUgR29vZCBDbGFzcyBCdW5nYWxvd3Mgc29sZCBpbiBTaW5nYXBvcmUgaW4gMjAxOFwiLFxuICAgICAgbGluazogXCJodHRwczovL3d3dy5lZGdlcHJvcC5zZy9wcm9wZXJ0eS1uZXdzL21vc3QtZXhwZW5zaXZlLWdvb2QtY2xhc3MtYnVuZ2Fsb3dzLXNvbGQtc2luZ2Fwb3JlLTIwMThcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiNVwiLFxuICAgICAgbmFtZTogXCJIaWdoZXIgQUJTRCByYXRlcywgdGlnaHRlciBsb2FuIGxpbWl0czogV2hhdCB0aGlzIG1lYW5zIGZvciBTaW5nYXBvcmXigJlzIGhvbWVidXllcnNcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZWRnZXByb3Auc2cvcHJvcGVydHktbmV3cy9oaWdoZXItYWJzZC1yYXRlcy10aWdodGVyLWxvYW4tbGltaXRzLXdoYXQtbWVhbnMtc2luZ2Fwb3JlJUUyJTgwJTk5cy1ob21lYnV5ZXJzLTBcIlxuICAgIH1cbiAgXTtcbn1cblxuZnVuY3Rpb24gZ2V0RXZlbnRfY2FsZW5kZXIoKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgaWQ6IFwiMVwiLFxuICAgICAgbmFtZTogXCJBZ2VudCBUcmFpbmluZyAtIDEzIFNlcHRlbWJlciAyMDE4XCIsXG4gICAgICBpbWc6IFwiaHR0cHM6Ly9ka2M5dHJxZ2NvMXN3LmNsb3VkZnJvbnQubmV0L3N0eWxlcy9ob21lcGFnZV9uZXdfc2xpZGVyX21haW4vczMvQWdlbnQlMjBUcmFpbmluZyUyMENvdmVyJTIwRWRnZXByb3AtNTUyXzE1LmpwZz9pdG9rPVJKYktHU1FiXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmVkZ2Vwcm9wLnNnL3Byb3BlcnR5LWV2ZW50cy9hZ2VudC10cmFpbmluZy0xMy1zZXB0ZW1iZXItMjAxOFwiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCIyXCIsXG4gICAgICBuYW1lOiBcIlByb3BlcnR5IEF1Y3Rpb24gYnkgS25pZ2h0IEZyYW5rIChTZXB0ZW1iZXIgMjAxOClcIixcbiAgICAgIGltZzogXCJodHRwczovL2RrYzl0cnFnY28xc3cuY2xvdWRmcm9udC5uZXQvc3R5bGVzL2hvbWVwYWdlX25ld19zbGlkZXJfbWFpbi9zMy9LbmlnaHRGcmFua18yLmpwZz9pdG9rPTU3dnNIZVZ3XCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmVkZ2Vwcm9wLnNnL3Byb3BlcnR5LWV2ZW50cy9wcm9wZXJ0eS1hdWN0aW9uLWtuaWdodC1mcmFuay1zZXB0ZW1iZXItMjAxOFwiXG4gICAgfVxuICBdO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdiBpZD1cImJvZHlcIj5cbiAgICBcbiAgICB7LyogPGRpdiBpZD1cImNvYmFcIj5oYnNqa2hzamtoc2s8L2Rpdj4gKi99XG4gICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5TaW1wbGUgUGFnZTwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIDxIZWFkZXIgdGl0bGU9XCJTaW1wbGUgUGFnZVwiLz5cbiAgICA8QXJ0aWNsZSBkYXRhX2FydGljbGU9e2dldEFydGljbGUoKX0gc29jaWFsX21lZGlhPXtnZXRTb2NpYWxNZWRpYSgpfSB0b3A9e2dldFRvcEFydGljbGUoKX0gZXZlbnQ9e2dldEV2ZW50X2NhbGVuZGVyKCl9Lz5cbiAgICA8Rm9vdGVyLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgXG4gICAgICAgICAgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pIl19 */\n/*@ sourceURL=pages/index.js */"
  }));
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map