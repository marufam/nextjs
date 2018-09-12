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
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1329699184",
        css: "#content.jsx-1329699184{padding:20px;border:1px solid #ddd;float:left;width:70%;}#main-wrap.jsx-1329699184{overflow:hidden;margin-top:20px;margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQXJ0aWNsZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NvQixBQUcwQixBQVFHLGFBUE0sR0FRTixnQkFDRyxHQVJSLFdBQ0QsS0FRWixLQVBBIiwiZmlsZSI6ImNvbXBvbmVudHMvQXJ0aWNsZS5qc3giLCJzb3VyY2VSb290IjoiL2hvbWUvYW1pZW4vRG9jdW1lbnRzL25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcnRpY2xlX3RpdGxlIGZyb20gXCIuLi9jb21wb25lbnRzL0FydGljbGVfdGl0bGVcIjtcbmltcG9ydCBBcnRpY2xlX3RpdGxlX2Rlc2MgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZV90aXRsZV9kZXNjXCI7XG5pbXBvcnQgQXJ0aWNsZV9pbWcgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXJ0aWNsZV9pbWdcIjtcbmltcG9ydCBTb2NpYWxfaWNvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9Tb2NpYWxfaWNvblwiO1xuaW1wb3J0IFRvcF9hcnRpY2xlIGZyb20gXCIuL1RvcF9hcnRpY2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFydGljbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJtYWluLXdyYXBcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiY29udGVudFwiPlxuICAgICAgICAgICAgPEFydGljbGVfdGl0bGUgbmFtZT17dGhpcy5wcm9wcy5kYXRhX2FydGljbGUudGl0bGV9IC8+XG4gICAgICAgICAgICA8QXJ0aWNsZV90aXRsZV9kZXNjXG4gICAgICAgICAgICAgIGF1dGhvcj17dGhpcy5wcm9wcy5kYXRhX2FydGljbGUuYXV0aG9yfVxuICAgICAgICAgICAgICBkYXRlPXt0aGlzLnByb3BzLmRhdGFfYXJ0aWNsZS5kYXRlfVxuICAgICAgICAgICAgICB0YWdzPXt0aGlzLnByb3BzLmRhdGFfYXJ0aWNsZS50YWdzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxBcnRpY2xlX2ltZ1xuICAgICAgICAgICAgICBpbWc9e3RoaXMucHJvcHMuZGF0YV9hcnRpY2xlLmltZ31cbiAgICAgICAgICAgICAgaW1nX2Rlc2M9e3RoaXMucHJvcHMuZGF0YV9hcnRpY2xlLmltZ19kZXNjfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgaWQ9XCJhcnRpY2xlXCJcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IHRoaXMucHJvcHMuZGF0YV9hcnRpY2xlLmFydGljbGVcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxTb2NpYWxfaWNvbiBkYXRhPXt0aGlzLnByb3BzLnNvY2lhbF9tZWRpYX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VG9wX2FydGljbGUgIGRhdGE9e3RoaXMucHJvcHMudG9wfS8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgI2NvbnRlbnQge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICNtYWluLXdyYXAge1xuICAgICAgICAgICAgLyogb3ZlcmZsb3cgdG8gaGFuZGxlIGlubmVyIGZsb2F0aW5nIGJsb2NrICovXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Article.jsx */"
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
        className: "jsx-2507576646"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        className: "jsx-2507576646"
      }, "Footer"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "2507576646",
        css: "#footer.jsx-2507576646{padding:20px;border:1px solid #ddd;text-align:center;width:100%;right:0;bottom:0;left:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNb0IsQUFHMEIsYUFDUyxzQkFDSixrQkFDUCxXQUNILFFBQ0MsU0FDRixPQUNUIiwiZmlsZSI6ImNvbXBvbmVudHMvRm9vdGVyLmpzeCIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbWllbi9Eb2N1bWVudHMvbmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiZm9vdGVyXCI+XG4gICAgICAgIDxwPkZvb3RlcjwvcD5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICNmb290ZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/Footer.jsx */"
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
          src: event.icon,
          alt: event.name,
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
        css: "#break.jsx-495262336{clear:both;}#top-conttent.jsx-495262336{overflow:hidden;margin-top:10px;margin-bottom:10px;}#side-number.jsx-495262336{width:10%;font-size:30px;float:left;padding:10px;font-style:bold;}#side-content-title.jsx-495262336{width:75%;float:right;padding:10px;}#social_icon.jsx-495262336{margin-right:5px;}#social_title.jsx-495262336{margin-bottom:0px;}#sidebar.jsx-495262336{float:right;width:25%;height:100px;}#side-title.jsx-495262336{background-color:rgb(251,239,214);word-break:normal;padding:10px;font-size:20px;font-family:Poppins,san-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVG9wX2FydGljbGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJEb0IsQUFHdUIsQUFJTSxBQUtQLEFBT0EsQUFLUSxBQUdDLEFBR04sQUFNd0IsVUF2QnRCLEFBT0gsQ0FoQmIsQ0EyQlksSUF2Qk0sQ0FpQmxCLENBR0EsSUFQYyxBQVdDLEdBbEJILE9BTFMsRUE0QkQsQ0FmcEIsQUFZQSxDQW5CYyxhQUNHLEVBTmpCLENBNEJlLGFBckJmLEFBc0JnQixlQUNnQiw4QkFDaEMiLCJmaWxlIjoiY29tcG9uZW50cy9Ub3BfYXJ0aWNsZS5qc3giLCJzb3VyY2VSb290IjoiL2hvbWUvYW1pZW4vRG9jdW1lbnRzL25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBTZWFyY2hfYXJ0aWNsZSBmcm9tIFwiLi9TZWFyY2hfYXJ0aWNsZVwiO1xuLy8gaW1wb3J0IEV2ZW50X2NhbGVuZGVyIGZyb20gXCIuL0V2ZW50X2NhbGVuZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRvcF9hcnRpY2xlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwic2lkZWJhclwiPlxuICAgICAgICA8ZGl2IGlkPVwic2lkZS10aXRsZVwiPlxuICAgICAgICAgICAgVG9wIEFydGljbGVzXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwic2lkZS1jb250ZW50XCI+XG4gICAgICAgICAgXG4gICAgICAgICAge3RoaXMucHJvcHMuZGF0YS5tYXAodG9wID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3RvcC5saW5rfSBrZXk9e3RvcC5pZH0+XG4gICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0b3AtY29udHRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2lkZS1udW1iZXJcIj5cbiAgICAgICAgICAgICAgICAgIHt0b3AuaWR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInNpZGUtY29udGVudC10aXRsZVwiPiAgIFxuICAgICAgICAgICAgICAgICAge3RvcC5uYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICBcbiAgICAgICAgICApKX1cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgPFNlYXJjaF9hcnRpY2xlLz5cbiAgICAgICAgPGhyLz5cbiAgICAgICAgey8qIDxFdmVudF9jYWxlbmRlciBkYXRhPXt0aGlzLnByb3BzLmV2ZW50fS8+ICovfVxuICAgICAgICA8ZGl2IGlkPVwiZXZlbnQtdGl0bGVcIj5cbiAgICAgICAgICAgPGgzPiBFdmVudCBjYWxlbmRlcjwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGlkPVwiZXZlbnQtY29udGVudFwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEubWFwKGV2ZW50ID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2V2ZW50Lmxpbmt9IGtleT17ZXZlbnQuaWR9PlxuICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXZlbnQtY29udGFpblwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtldmVudC5pY29ufSBhbHQ9e2V2ZW50Lm5hbWV9Lz5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiZXZlbnQtbnVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICB7ZXZlbnQuaWR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImV2ZW50LWNvbnRlbnQtdGl0bGVcIj4gICBcbiAgICAgICAgICAgICAgICAgIHtldmVudC5uYW1lfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICBcbiAgICAgICAgICApKX1cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxici8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICNicmVha3tcbiAgICAgICAgICAgIGNsZWFyOmJvdGg7XG4gICAgICAgICAgfVxuICAgICAgICAgICN0b3AtY29udHRlbnQge1xuICAgICAgICAgICAgLyogb3ZlcmZsb3cgdG8gaGFuZGxlIGlubmVyIGZsb2F0aW5nIGJsb2NrICovXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzaWRlLW51bWJlcntcbiAgICAgICAgICAgIHdpZHRoOjEwJTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozMHB4O1xuICAgICAgICAgICAgZmxvYXQ6bGVmdDtcbiAgICAgICAgICAgIHBhZGRpbmc6MTBweDtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6Ym9sZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3NpZGUtY29udGVudC10aXRsZXtcbiAgICAgICAgICAgIHdpZHRoOjc1JTtcbiAgICAgICAgICAgIGZsb2F0OnJpZ2h0O1xuICAgICAgICAgICAgcGFkZGluZzoxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc29jaWFsX2ljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzb2NpYWxfdGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc2lkZWJhciB7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICAjc2lkZS10aXRsZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTEsIDIzOSwgMjE0KTtcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6MjBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLHNhbi1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGJyIGlkPVwiYnJlYWtcIi8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Top_article.jsx */"
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

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    className: "jsx-1919411563"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    className: "jsx-1919411563"
  }, "Simple Page")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header_jsx__["a" /* default */], {
    title: "Simple Page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Article__["a" /* default */], {
    data_article: getArticle(),
    social_media: getSocialMedia(),
    top: getTopArticle(),
    event: getSocialMedia(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Footer_jsx__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "1919411563",
    css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlHZ0IiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYW1pZW4vRG9jdW1lbnRzL25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIuanN4JztcbmltcG9ydCBBcnRpY2xlIGZyb20gJy4uL2NvbXBvbmVudHMvQXJ0aWNsZSc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyLmpzeCc7XG5cbmZ1bmN0aW9uIGdldEFydGljbGUoKSB7XG4gIHJldHVybiB7XG4gICAgaWQ6IFwiMVwiLFxuICAgIHRpdGxlOiBcIkZvdXIgc2hvcGhvdXNlcyBvbiBUZXNzZW5zb2huIFJvYWQgZ29pbmcgZm9yICQyNSBtaWxcIixcbiAgICBhdXRob3I6IFwiQm9uZyBYaW4gWWluZ1wiLFxuICAgIGRhdGU6IFwiSnVseSAxOSwgMjAxOCA3OjQ1IFBNIFNHVFwiLFxuICAgIHRhZ3M6IFwiVGVzc2Vuc29obiBSb2FkIFNob3Bob3VzZXNcIixcbiAgICBpbWc6XG4gICAgICBcImh0dHBzOi8vc2cudGVwY2RuLmNvbS9wdWJsaWMvdXNyLzFpaHhzZi83ZDdjNGQtMTUtMTctMTktMjEtVGVzc2Vuc29obi1Sb2FkLVNob3Bob3VzZXMtMS0uanBnXCIsXG4gICAgaW1nX2Rlc2M6XG4gICAgICBcIkN1c2htYW4gJiBXYWtlZmllbGQgaXMgbWFya2V0aW5nIHRoaXMgcm93IG9mIGZvdXIgc2hvcGhvdXNlcyAoQ3JlZGl0OkMmVylcIixcbiAgICBhcnRpY2xlOlxuICAgICAgXCI8cD4gQSByb3cgb2YgZm91ciBjb250aWd1b3VzIGZyZWVob2xkIGNvbnNlcnZhdGlvbiBzaG9waG91c2VzIGF0IE5vcyAxNSwgMTcsIDE5IGFuZCAyMSBUZXNzZW5zb2huIFJvYWQgaXMgdXAgZm9yIHNhbGUgYXQgYSByZXNlcnZlIHByaWNlIG9mICQyNSBtaWxsaW9uLiBUaGlzIHRyYW5zbGF0ZXMgaW50byAkMSwzOTkgcHNmIG9uIHRoZSBhbGxvd2FibGUgbWF4aW11bSBHRkEsIGFjY29yZGluZyB0byB0aGUgbWFya2V0aW5nIGFnZW50IEN1c2htYW4gJiBXYWtlZmllbGQgKEMmVykuIDwvcD4gPHA+IFRoZSBwcm9wZXJ0aWVzIGhhdmUgZm91ciBpbmRpdmlkdWFsIGxhbmQgdGl0bGVzIGFuZCBhIHRvdGFsIGxhbmQgYXJlYSBvZiA1LDk1OCBzcSBmdC4gVW5kZXIgdGhlIDIwMTQgTWFzdGVyIFBsYW4sIGl0IGlzIHpvbmVkIOKAnHJlc2lkZW50aWFsIHdpdGggY29tbWVyY2lhbCBhdCBmaXJzdCBzdG9yZXnigJ0sIHdpdGggYSBncm9zcyBwbG90IHJhdGlvIG9mIDMuMC4gVGhlIEdGQSBjYW4gYmUgbWF4aW1pc2VkIHVwIHRvIDE3LDg3MyBzcSBmdC4gPC9wPiA8cD4gVGhlIHN1Y2Nlc3NmdWwgYmlkZGVyIGNhbiBlZmZpY2llbnRseSBjb25zdHJ1Y3QgYSBzaXgtc3RvcmV5IHJlYXIgZXh0ZW5zaW9uIG92ZXIgdGhlIGZvdXIgbGFuZCBwbG90cy4gVGhpcyBpcyBzdWJqZWN0IHRvIHRoZSBhdXRob3JpdGllc+KAmSBhcHByb3ZhbC4gPC9wPiA8cD4gTm9zIDE1IGFuZCAyMSBhcmUgdGhlIG9yaWdpbmFsIHR3by1zdG9yZXkgc2hvcGhvdXNlczsgTm9zIDE3IGFuZCAxOSBlYWNoIGhhdmUgYSBwYXJ0LXR3by1zdG9yZXkgZnJvbnQgYW5kIHBhcnQtdGhyZWUtc3RvcmV5IHJlYXIuIEVhY2ggc2hvcGhvdXNlIGhhcyBhIHByaXZhdGUgY2FyIHBhcmsgbG90LiA8L3A+IDxwPiBUaGUgZm91ciBzaG9waG91c2VzIGFyZSBiZWluZyBoZWxkIGJ5IHRocmVlIHNlcGFyYXRlIG93bmVyc2hpcHMsIGFuZCB0aGUgb3duZXJzIGhhdmUgam9pbnRseSBwdXQgdGhlbSB1cCBmb3Igc2FsZSBieSB0ZW5kZXIuIDwvcD4gPHA+IENocmlzdGluYSBTaW0sIGRpcmVjdG9yIG9mIGNhcGl0YWwgbWFya2V0cyBhdCBDJlcsIHNheXM6IOKAnERlc3BpdGUgdGhlIHJlY2VudCBjb29saW5nIG1lYXN1cmVzIGluIHRoZSByZXNpZGVudGlhbCBwcm9wZXJ0eSBtYXJrZXQsIGZyZWVob2xkIGNvbnNlcnZhdGlvbiBzaG9waG91c2VzIGluIGNpdHktZnJpbmdlIGxvY2F0aW9ucyBoYXZlIHdpdGhzdG9vZCB0aGUgdGVzdCBvZiB0aW1lIGFzIGZhdm91cmVkIGxvbmctdGVybSBpbnZlc3RtZW50cy7igJ0gPC9wPiA8cD5UaGUgdGVuZGVyIHdpbGwgY2xvc2Ugb24gQXVnIDI4LjwvcD5cIlxuICB9O1xufVxuZnVuY3Rpb24gZ2V0U29jaWFsTWVkaWEoKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgaWQ6IFwiMVwiLFxuICAgICAgbmFtZTogXCJmYWNlYm9va1wiLFxuICAgICAgaWNvbjogXCJodHRwczovL2RrYzl0cnFnY28xc3cuY2xvdWRmcm9udC5uZXQvaW1hZ2VzL2ZiX2J0bi5wbmdcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2VkZ2Vwcm9wc2dcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiMlwiLFxuICAgICAgbmFtZTogXCJ0d2l0dGVyXCIsXG4gICAgICBpY29uOiBcImh0dHBzOi8vZGtjOXRycWdjbzFzdy5jbG91ZGZyb250Lm5ldC9pbWFnZXMvdHdfYnRuLnBuZ1wiLFxuICAgICAgbGluazogXCJodHRwczovL3R3aXR0ZXIuY29tL2VkZ2Vwcm9wc2dcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiM1wiLFxuICAgICAgbmFtZTogXCJpbnN0YWdyYW1cIixcbiAgICAgIGljb246IFwiaHR0cHM6Ly9ka2M5dHJxZ2NvMXN3LmNsb3VkZnJvbnQubmV0L2ltYWdlcy9pY29ucy9pbnN0YV9idG4ucG5nXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZWRnZXByb3BzZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCI0XCIsXG4gICAgICBuYW1lOiBcImxpbmtlZGluXCIsXG4gICAgICBpY29uOiBcImh0dHBzOi8vZGtjOXRycWdjbzFzdy5jbG91ZGZyb250Lm5ldC9pbWFnZXMvaWNvbnMvbGlfYnRuLnBuZ1wiLFxuICAgICAgbGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2hvd2Nhc2UvNjU3NjYzOC9cIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiNVwiLFxuICAgICAgbmFtZTogXCJ5b3V0dWJlXCIsXG4gICAgICBpY29uOiBcImh0dHBzOi8vZGtjOXRycWdjbzFzdy5jbG91ZGZyb250Lm5ldC9pbWFnZXMvaWNvbnMveXRfYnRuLnBuZ1wiLFxuICAgICAgbGluazogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDcDZKQi1tSmRlSTRJMVgyd041WFhaQVwiXG4gICAgfVxuICBdO1xufVxuXG5mdW5jdGlvbiBnZXRUb3BBcnRpY2xlKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGlkOiBcIjFcIixcbiAgICAgIG5hbWU6IFwiTHVyZSBvZiBhIGNvbWZvcnRhYmxlLCBzZW1pLXJldGlyZWQgbGlmZXN0eWxlIGF0IGp1c3QgJDEsNTAwIGEgbW9udGhcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZWRnZXByb3Auc2cvcHJvcGVydHktbmV3cy9sdXJlLWNvbWZvcnRhYmxlLXNlbWktcmV0aXJlZC1saWZlc3R5bGUtanVzdC0xNTAwLW1vbnRoXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIjJcIixcbiAgICAgIG5hbWU6IFwiTXkgSG91c2UgVG91cjogQSBCYWNoZWxvciBQYWQgaW4gVGFuam9uZyBQYWdhclwiLFxuICAgICAgbGluazogXCJodHRwczovL3d3dy5lZGdlcHJvcC5zZy9wcm9wZXJ0eS1uZXdzL215LWhvdXNlLXRvdXItYmFjaGVsb3ItcGFkLXRhbmpvbmctcGFnYXJcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiM1wiLFxuICAgICAgbmFtZTogXCI1IHRoaW5ncyB5b3UgbmVlZCB0byBrbm93IGFib3V0IEpobyBMb3figJlzIHN1cGVyLWx1eCBTaW5nYXBvcmUgY29uZG9cIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZWRnZXByb3Auc2cvcHJvcGVydHktbmV3cy81LXRoaW5ncy15b3UtbmVlZC1rbm93LWFib3V0LWpoby1sb3clRTIlODAlOTlzLXN1cGVyLWx1eC1zaW5nYXBvcmUtY29uZG9cIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiNFwiLFxuICAgICAgbmFtZTogXCJUaGUgbW9zdCBleHBlbnNpdmUgR29vZCBDbGFzcyBCdW5nYWxvd3Mgc29sZCBpbiBTaW5nYXBvcmUgaW4gMjAxOFwiLFxuICAgICAgbGluazogXCJodHRwczovL3d3dy5lZGdlcHJvcC5zZy9wcm9wZXJ0eS1uZXdzL21vc3QtZXhwZW5zaXZlLWdvb2QtY2xhc3MtYnVuZ2Fsb3dzLXNvbGQtc2luZ2Fwb3JlLTIwMThcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiNVwiLFxuICAgICAgbmFtZTogXCJIaWdoZXIgQUJTRCByYXRlcywgdGlnaHRlciBsb2FuIGxpbWl0czogV2hhdCB0aGlzIG1lYW5zIGZvciBTaW5nYXBvcmXigJlzIGhvbWVidXllcnNcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZWRnZXByb3Auc2cvcHJvcGVydHktbmV3cy9oaWdoZXItYWJzZC1yYXRlcy10aWdodGVyLWxvYW4tbGltaXRzLXdoYXQtbWVhbnMtc2luZ2Fwb3JlJUUyJTgwJTk5cy1ob21lYnV5ZXJzLTBcIlxuICAgIH1cbiAgXTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXYgaWQ9XCJib2R5XCI+XG4gICAgXG4gICAgey8qIDxkaXYgaWQ9XCJjb2JhXCI+aGJzamtoc2praHNrPC9kaXY+ICovfVxuICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+U2ltcGxlIFBhZ2U8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICA8SGVhZGVyIHRpdGxlPVwiU2ltcGxlIFBhZ2VcIi8+XG4gICAgPEFydGljbGUgZGF0YV9hcnRpY2xlPXtnZXRBcnRpY2xlKCl9IHNvY2lhbF9tZWRpYT17Z2V0U29jaWFsTWVkaWEoKX0gdG9wPXtnZXRUb3BBcnRpY2xlKCl9IGV2ZW50PXtnZXRTb2NpYWxNZWRpYSgpfS8+XG4gICAgPEZvb3Rlci8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgIFxuICAgICAgICAgIFxuICAgICAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKSJdfQ== */\n/*@ sourceURL=pages/index.js */"
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