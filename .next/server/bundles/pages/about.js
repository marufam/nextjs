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

/***/ "./pages/about.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Social_icon__ = __webpack_require__("./components/Social_icon.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Footer_jsx__ = __webpack_require__("./components/Footer.jsx");
var _jsxFileName = "/home/amien/Documents/nextjs/pages/about.js";







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

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    className: "jsx-2025197324"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    className: "jsx-2025197324"
  }, "Simple Page")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Header_jsx__["a" /* default */], {
    title: "Simple Page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "main-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    className: "jsx-2025197324"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    className: "jsx-2025197324"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    className: "jsx-2025197324"
  }, "About me"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    className: "jsx-2025197324"
  }, "Haii, my name is maruf, this page for example", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    className: "jsx-2025197324"
  }), "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    className: "jsx-2025197324"
  }), "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\"", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    className: "jsx-2025197324"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    className: "jsx-2025197324"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Social_icon__["a" /* default */], {
    data: getSocialMedia(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    }
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    className: "jsx-2025197324"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Footer_jsx__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    }
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2025197324",
    css: "#social_icon.jsx-2025197324{margin-right:5px;}#social_title.jsx-2025197324{margin-bottom:0px;}#content.jsx-2025197324{padding:20px;border:1px solid #ddd;float:left;width:70%;height:500px;}#titledesc.jsx-2025197324{margin-top:10px;}#imgdesc.jsx-2025197324{margin-top:0px;}#main-wrap.jsx-2025197324{overflow:hidden;margin-top:20px;margin-bottom:20px;}#sidebar.jsx-2025197324{float:right;width:25%;height:100px;border:1px solid #ddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2Fib3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1GZ0IsQUFLMEIsQUFHQyxBQUdMLEFBT0csQUFJRCxBQUlDLEFBTUosWUFDRixDQXJCWSxFQVd4QixDQUpBLEFBUWtCLENBckJsQixDQUdBLElBeUJlLFVBTk0sR0FmUixBQXNCVyxXQXJCWixLQWVaLEtBZGUsQ0FxQmYsWUFwQkEiLCJmaWxlIjoicGFnZXMvYWJvdXQuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYW1pZW4vRG9jdW1lbnRzL25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyLmpzeFwiO1xuaW1wb3J0IFNvY2lhbF9pY29uIGZyb20gXCIuLi9jb21wb25lbnRzL1NvY2lhbF9pY29uXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0Zvb3Rlci5qc3hcIjtcblxuZnVuY3Rpb24gZ2V0U29jaWFsTWVkaWEoKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgaWQ6IFwiMVwiLFxuICAgICAgbmFtZTogXCJmYWNlYm9va1wiLFxuICAgICAgaWNvbjogXCJodHRwczovL2RrYzl0cnFnY28xc3cuY2xvdWRmcm9udC5uZXQvaW1hZ2VzL2ZiX2J0bi5wbmdcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2VkZ2Vwcm9wc2dcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiMlwiLFxuICAgICAgbmFtZTogXCJ0d2l0dGVyXCIsXG4gICAgICBpY29uOiBcImh0dHBzOi8vZGtjOXRycWdjbzFzdy5jbG91ZGZyb250Lm5ldC9pbWFnZXMvdHdfYnRuLnBuZ1wiLFxuICAgICAgbGluazogXCJodHRwczovL3R3aXR0ZXIuY29tL2VkZ2Vwcm9wc2dcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiM1wiLFxuICAgICAgbmFtZTogXCJpbnN0YWdyYW1cIixcbiAgICAgIGljb246IFwiaHR0cHM6Ly9ka2M5dHJxZ2NvMXN3LmNsb3VkZnJvbnQubmV0L2ltYWdlcy9pY29ucy9pbnN0YV9idG4ucG5nXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vZWRnZXByb3BzZ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCI0XCIsXG4gICAgICBuYW1lOiBcImxpbmtlZGluXCIsXG4gICAgICBpY29uOiBcImh0dHBzOi8vZGtjOXRycWdjbzFzdy5jbG91ZGZyb250Lm5ldC9pbWFnZXMvaWNvbnMvbGlfYnRuLnBuZ1wiLFxuICAgICAgbGluazogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2hvd2Nhc2UvNjU3NjYzOC9cIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiNVwiLFxuICAgICAgbmFtZTogXCJ5b3V0dWJlXCIsXG4gICAgICBpY29uOiBcImh0dHBzOi8vZGtjOXRycWdjbzFzdy5jbG91ZGZyb250Lm5ldC9pbWFnZXMvaWNvbnMveXRfYnRuLnBuZ1wiLFxuICAgICAgbGluazogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDcDZKQi1tSmRlSTRJMVgyd041WFhaQVwiXG4gICAgfVxuICBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+U2ltcGxlIFBhZ2U8L3RpdGxlPlxuICAgICAgey8qIGxvYWQgY3NzICovfVxuICAgIDwvSGVhZD5cblxuICAgIDxIZWFkZXIgdGl0bGU9XCJTaW1wbGUgUGFnZVwiIC8+XG4gICAgPGRpdiBpZD1cIm1haW4td3JhcFwiPlxuICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgPGgyPkFib3V0IG1lPC9oMj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICBIYWlpLCBteSBuYW1lIGlzIG1hcnVmLCB0aGlzIHBhZ2UgZm9yIGV4YW1wbGVcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkXG4gICAgICAgICAgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0XG4gICAgICAgICAgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gRHVpcyBhdXRlIGlydXJlIGRvbG9yIGluXG4gICAgICAgICAgcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYVxuICAgICAgICAgIHBhcmlhdHVyLiBFeGNlcHRldXIgc2ludCBvY2NhZWNhdCBjdXBpZGF0YXQgbm9uIHByb2lkZW50LCBzdW50IGluXG4gICAgICAgICAgY3VscGEgcXVpIG9mZmljaWEgZGVzZXJ1bnQgbW9sbGl0IGFuaW0gaWQgZXN0IGxhYm9ydW0uXG4gICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgXCJTZWQgdXQgcGVyc3BpY2lhdGlzIHVuZGUgb21uaXMgaXN0ZSBuYXR1cyBlcnJvciBzaXQgdm9sdXB0YXRlbVxuICAgICAgICAgIGFjY3VzYW50aXVtIGRvbG9yZW1xdWUgbGF1ZGFudGl1bSwgdG90YW0gcmVtIGFwZXJpYW0sIGVhcXVlIGlwc2EgcXVhZVxuICAgICAgICAgIGFiIGlsbG8gaW52ZW50b3JlIHZlcml0YXRpcyBldCBxdWFzaSBhcmNoaXRlY3RvIGJlYXRhZSB2aXRhZSBkaWN0YVxuICAgICAgICAgIHN1bnQgZXhwbGljYWJvLiBOZW1vIGVuaW0gaXBzYW0gdm9sdXB0YXRlbSBxdWlhIHZvbHVwdGFzIHNpdFxuICAgICAgICAgIGFzcGVybmF0dXIgYXV0IG9kaXQgYXV0IGZ1Z2l0LCBzZWQgcXVpYSBjb25zZXF1dW50dXIgbWFnbmkgZG9sb3JlcyBlb3NcbiAgICAgICAgICBxdWkgcmF0aW9uZSB2b2x1cHRhdGVtIHNlcXVpIG5lc2NpdW50LiBOZXF1ZSBwb3JybyBxdWlzcXVhbSBlc3QsIHF1aVxuICAgICAgICAgIGRvbG9yZW0gaXBzdW0gcXVpYSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIsIGFkaXBpc2NpIHZlbGl0LCBzZWRcbiAgICAgICAgICBxdWlhIG5vbiBudW1xdWFtIGVpdXMgbW9kaSB0ZW1wb3JhIGluY2lkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmFtXG4gICAgICAgICAgYWxpcXVhbSBxdWFlcmF0IHZvbHVwdGF0ZW0uIFV0IGVuaW0gYWQgbWluaW1hIHZlbmlhbSwgcXVpcyBub3N0cnVtXG4gICAgICAgICAgZXhlcmNpdGF0aW9uZW0gdWxsYW0gY29ycG9yaXMgc3VzY2lwaXQgbGFib3Jpb3NhbSwgbmlzaSB1dCBhbGlxdWlkIGV4XG4gICAgICAgICAgZWEgY29tbW9kaSBjb25zZXF1YXR1cj8gUXVpcyBhdXRlbSB2ZWwgZXVtIGl1cmUgcmVwcmVoZW5kZXJpdCBxdWkgaW5cbiAgICAgICAgICBlYSB2b2x1cHRhdGUgdmVsaXQgZXNzZSBxdWFtIG5paGlsIG1vbGVzdGlhZSBjb25zZXF1YXR1ciwgdmVsIGlsbHVtXG4gICAgICAgICAgcXVpIGRvbG9yZW0gZXVtIGZ1Z2lhdCBxdW8gdm9sdXB0YXMgbnVsbGEgcGFyaWF0dXI/XCJcbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8U29jaWFsX2ljb24gZGF0YT17Z2V0U29jaWFsTWVkaWEoKX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cInNpZGViYXJcIiAvPlxuICAgIDwvZGl2PlxuICAgIDxGb290ZXIgLz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAjc29jaWFsIHtcbiAgICAgIH1cbiAgICAgICNzb2NpYWxfaWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgfVxuICAgICAgI3NvY2lhbF90aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgIH1cbiAgICAgICNjb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICB9XG4gICAgICAjdGl0bGVkZXNjIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cblxuICAgICAgI2ltZ2Rlc2Mge1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICB9XG4gICAgICAjbWFpbi13cmFwIHtcbiAgICAgICAgLyogb3ZlcmZsb3cgdG8gaGFuZGxlIGlubmVyIGZsb2F0aW5nIGJsb2NrICovXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICB9XG5cbiAgICAgICNzaWRlYmFyIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuIl19 */\n/*@ sourceURL=pages/about.js */"
  }));
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/about.js");


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
//# sourceMappingURL=about.js.map