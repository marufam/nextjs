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

/***/ "./components/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/home/amien/Documents/nextjs/components/Footer.js";



var linkStyle = {
  marginRight: 15
};

var Footer = function Footer() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    className: "jsx-2399781607"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-2399781607"
  }, "footer"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2399781607",
    css: "#footer.jsx-2399781607{padding:20px;border:1px solid #ddd;text-align:center;width:100%;right:0;bottom:0;left:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNnQixBQUdzQixhQUNTLHNCQUNKLGtCQUNQLFdBQ0gsUUFDQyxTQUNGLE9BQ1QiLCJmaWxlIjoiY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYW1pZW4vRG9jdW1lbnRzL25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgbGlua1N0eWxlID0ge1xuICBtYXJnaW5SaWdodDogMTVcbn07XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPGRpdiBpZD1cImZvb3RlclwiPlxuICAgIDxwPmZvb3RlcjwvcD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAjZm9vdGVyIHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl19 */\n/*@ sourceURL=components/Footer.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = "/home/amien/Documents/nextjs/components/Header.js";




var Header = function Header() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    className: "jsx-2158569090"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-2158569090"
  }, "Simple Page")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "2158569090",
    css: "#header.jsx-2158569090{padding:20px;border:1px solid #ddd;}a.jsx-2158569090{color:black;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVdnQixBQUdzQixBQUlELFlBQ1MsQ0FKQyxzQkFDeEIsMkJBSUEiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYW1pZW4vRG9jdW1lbnRzL25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICA8ZGl2IGlkPVwiaGVhZGVyXCI+XG4gICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgIDxhPlNpbXBsZSBQYWdlPC9hPlxuICAgIDwvTGluaz5cbiAgICB7LyogT3RoZXIgTWVudSAqL31cbiAgICB7LyogPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgIDxhPlNpbXBsZSBQYWdlPC9hPlxuICAgIDwvTGluaz4gKi99XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgI2hlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICB9XG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdfQ== */\n/*@ sourceURL=components/Header.js */"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer__ = __webpack_require__("./components/Footer.js");
var _jsxFileName = "/home/amien/Documents/nextjs/components/Layout.js";




var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, props.children), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__Footer__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
var _jsxFileName = "/home/amien/Documents/nextjs/pages/index.js";



 //idealnya fungsi ini load data dari api backend, didokumentasi nya pakai isomorphic-unfetch

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

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "main-wrap",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    className: "jsx-372577222"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    className: "jsx-372577222"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    className: "jsx-372577222"
  }, getArticle().title), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "titledesc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    className: "jsx-372577222"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    className: "jsx-372577222"
  }, "By ", getArticle().author, " / EdgeProp | ", getArticle().date), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    className: "jsx-372577222"
  }, "Tags: ", getArticle().tags)), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
    src: getArticle().img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    className: "jsx-372577222"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
    id: "imgdesc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    className: "jsx-372577222"
  }, getArticle().img_desc), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "article",
    dangerouslySetInnerHTML: {
      __html: getArticle().article
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    className: "jsx-372577222"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    className: "jsx-372577222"
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "social",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    className: "jsx-372577222"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
    id: "social_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    className: "jsx-372577222"
  }, "Follow Us On"), getSocialMedia().map(function (social) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
      href: social.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      }
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
      id: "social_icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      className: "jsx-372577222"
    }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", {
      src: social.icon,
      alt: social.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      className: "jsx-372577222"
    })));
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    id: "sidebar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    className: "jsx-372577222"
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "372577222",
    css: "#social_icon.jsx-372577222{margin-right:5px;}#social_title.jsx-372577222{margin-bottom:0px;}#content.jsx-372577222{padding:20px;border:1px solid #ddd;float:left;width:70%;}#titledesc.jsx-372577222{margin-top:10px;}#imgdesc.jsx-372577222{margin-top:0px;}#main-wrap.jsx-372577222{overflow:hidden;margin-top:20px;margin-bottom:20px;}#sidebar.jsx-372577222{float:right;width:25%;height:100px;border:1px solid #ddd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGZ0IsQUFHMEIsQUFHQyxBQUdMLEFBTUcsQUFJRCxBQUlDLEFBTUosWUFDRixDQXBCWSxFQVV4QixDQUpBLEFBUWtCLENBcEJsQixDQUdBLElBd0JlLFVBTk0sR0FkUixBQXFCVyxXQXBCWixLQWNaLEtBYkEsQ0FvQkEiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYW1pZW4vRG9jdW1lbnRzL25leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbi8vaWRlYWxueWEgZnVuZ3NpIGluaSBsb2FkIGRhdGEgZGFyaSBhcGkgYmFja2VuZCwgZGlkb2t1bWVudGFzaSBueWEgcGFrYWkgaXNvbW9ycGhpYy11bmZldGNoXG5mdW5jdGlvbiBnZXRBcnRpY2xlKCkge1xuICByZXR1cm4ge1xuICAgIGlkOiBcIjFcIixcbiAgICB0aXRsZTogXCJGb3VyIHNob3Bob3VzZXMgb24gVGVzc2Vuc29obiBSb2FkIGdvaW5nIGZvciAkMjUgbWlsXCIsXG4gICAgYXV0aG9yOiBcIkJvbmcgWGluIFlpbmdcIixcbiAgICBkYXRlOiBcIkp1bHkgMTksIDIwMTggNzo0NSBQTSBTR1RcIixcbiAgICB0YWdzOiBcIlRlc3NlbnNvaG4gUm9hZCBTaG9waG91c2VzXCIsXG4gICAgaW1nOlxuICAgICAgXCJodHRwczovL3NnLnRlcGNkbi5jb20vcHVibGljL3Vzci8xaWh4c2YvN2Q3YzRkLTE1LTE3LTE5LTIxLVRlc3NlbnNvaG4tUm9hZC1TaG9waG91c2VzLTEtLmpwZ1wiLFxuICAgIGltZ19kZXNjOlxuICAgICAgXCJDdXNobWFuICYgV2FrZWZpZWxkIGlzIG1hcmtldGluZyB0aGlzIHJvdyBvZiBmb3VyIHNob3Bob3VzZXMgKENyZWRpdDpDJlcpXCIsXG4gICAgYXJ0aWNsZTpcbiAgICAgIFwiPHA+IEEgcm93IG9mIGZvdXIgY29udGlndW91cyBmcmVlaG9sZCBjb25zZXJ2YXRpb24gc2hvcGhvdXNlcyBhdCBOb3MgMTUsIDE3LCAxOSBhbmQgMjEgVGVzc2Vuc29obiBSb2FkIGlzIHVwIGZvciBzYWxlIGF0IGEgcmVzZXJ2ZSBwcmljZSBvZiAkMjUgbWlsbGlvbi4gVGhpcyB0cmFuc2xhdGVzIGludG8gJDEsMzk5IHBzZiBvbiB0aGUgYWxsb3dhYmxlIG1heGltdW0gR0ZBLCBhY2NvcmRpbmcgdG8gdGhlIG1hcmtldGluZyBhZ2VudCBDdXNobWFuICYgV2FrZWZpZWxkIChDJlcpLiA8L3A+IDxwPiBUaGUgcHJvcGVydGllcyBoYXZlIGZvdXIgaW5kaXZpZHVhbCBsYW5kIHRpdGxlcyBhbmQgYSB0b3RhbCBsYW5kIGFyZWEgb2YgNSw5NTggc3EgZnQuIFVuZGVyIHRoZSAyMDE0IE1hc3RlciBQbGFuLCBpdCBpcyB6b25lZCDigJxyZXNpZGVudGlhbCB3aXRoIGNvbW1lcmNpYWwgYXQgZmlyc3Qgc3RvcmV54oCdLCB3aXRoIGEgZ3Jvc3MgcGxvdCByYXRpbyBvZiAzLjAuIFRoZSBHRkEgY2FuIGJlIG1heGltaXNlZCB1cCB0byAxNyw4NzMgc3EgZnQuIDwvcD4gPHA+IFRoZSBzdWNjZXNzZnVsIGJpZGRlciBjYW4gZWZmaWNpZW50bHkgY29uc3RydWN0IGEgc2l4LXN0b3JleSByZWFyIGV4dGVuc2lvbiBvdmVyIHRoZSBmb3VyIGxhbmQgcGxvdHMuIFRoaXMgaXMgc3ViamVjdCB0byB0aGUgYXV0aG9yaXRpZXPigJkgYXBwcm92YWwuIDwvcD4gPHA+IE5vcyAxNSBhbmQgMjEgYXJlIHRoZSBvcmlnaW5hbCB0d28tc3RvcmV5IHNob3Bob3VzZXM7IE5vcyAxNyBhbmQgMTkgZWFjaCBoYXZlIGEgcGFydC10d28tc3RvcmV5IGZyb250IGFuZCBwYXJ0LXRocmVlLXN0b3JleSByZWFyLiBFYWNoIHNob3Bob3VzZSBoYXMgYSBwcml2YXRlIGNhciBwYXJrIGxvdC4gPC9wPiA8cD4gVGhlIGZvdXIgc2hvcGhvdXNlcyBhcmUgYmVpbmcgaGVsZCBieSB0aHJlZSBzZXBhcmF0ZSBvd25lcnNoaXBzLCBhbmQgdGhlIG93bmVycyBoYXZlIGpvaW50bHkgcHV0IHRoZW0gdXAgZm9yIHNhbGUgYnkgdGVuZGVyLiA8L3A+IDxwPiBDaHJpc3RpbmEgU2ltLCBkaXJlY3RvciBvZiBjYXBpdGFsIG1hcmtldHMgYXQgQyZXLCBzYXlzOiDigJxEZXNwaXRlIHRoZSByZWNlbnQgY29vbGluZyBtZWFzdXJlcyBpbiB0aGUgcmVzaWRlbnRpYWwgcHJvcGVydHkgbWFya2V0LCBmcmVlaG9sZCBjb25zZXJ2YXRpb24gc2hvcGhvdXNlcyBpbiBjaXR5LWZyaW5nZSBsb2NhdGlvbnMgaGF2ZSB3aXRoc3Rvb2QgdGhlIHRlc3Qgb2YgdGltZSBhcyBmYXZvdXJlZCBsb25nLXRlcm0gaW52ZXN0bWVudHMu4oCdIDwvcD4gPHA+VGhlIHRlbmRlciB3aWxsIGNsb3NlIG9uIEF1ZyAyOC48L3A+XCJcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldFNvY2lhbE1lZGlhKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGlkOiBcIjFcIixcbiAgICAgIG5hbWU6IFwiZmFjZWJvb2tcIixcbiAgICAgIGljb246IFwiaHR0cHM6Ly9ka2M5dHJxZ2NvMXN3LmNsb3VkZnJvbnQubmV0L2ltYWdlcy9mYl9idG4ucG5nXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9lZGdlcHJvcHNnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIjJcIixcbiAgICAgIG5hbWU6IFwidHdpdHRlclwiLFxuICAgICAgaWNvbjogXCJodHRwczovL2RrYzl0cnFnY28xc3cuY2xvdWRmcm9udC5uZXQvaW1hZ2VzL3R3X2J0bi5wbmdcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9lZGdlcHJvcHNnXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIjNcIixcbiAgICAgIG5hbWU6IFwiaW5zdGFncmFtXCIsXG4gICAgICBpY29uOiBcImh0dHBzOi8vZGtjOXRycWdjbzFzdy5jbG91ZGZyb250Lm5ldC9pbWFnZXMvaWNvbnMvaW5zdGFfYnRuLnBuZ1wiLFxuICAgICAgbGluazogXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2VkZ2Vwcm9wc2dcIlxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiNFwiLFxuICAgICAgbmFtZTogXCJsaW5rZWRpblwiLFxuICAgICAgaWNvbjogXCJodHRwczovL2RrYzl0cnFnY28xc3cuY2xvdWRmcm9udC5uZXQvaW1hZ2VzL2ljb25zL2xpX2J0bi5wbmdcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3Nob3djYXNlLzY1NzY2MzgvXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcIjVcIixcbiAgICAgIG5hbWU6IFwieW91dHViZVwiLFxuICAgICAgaWNvbjogXCJodHRwczovL2RrYzl0cnFnY28xc3cuY2xvdWRmcm9udC5uZXQvaW1hZ2VzL2ljb25zL3l0X2J0bi5wbmdcIixcbiAgICAgIGxpbms6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ3A2SkItbUpkZUk0STFYMndONVhYWkFcIlxuICAgIH1cbiAgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxkaXYgaWQ9XCJtYWluLXdyYXBcIj5cbiAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgIDxoMj57Z2V0QXJ0aWNsZSgpLnRpdGxlfTwvaDI+XG4gICAgICAgIDxkaXYgaWQ9XCJ0aXRsZWRlc2NcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEJ5IHtnZXRBcnRpY2xlKCkuYXV0aG9yfSAvIEVkZ2VQcm9wIHwge2dldEFydGljbGUoKS5kYXRlfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5UYWdzOiB7Z2V0QXJ0aWNsZSgpLnRhZ3N9PC9wPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aW1nIHNyYz17Z2V0QXJ0aWNsZSgpLmltZ30gLz5cbiAgICAgICAgPHAgaWQ9XCJpbWdkZXNjXCI+e2dldEFydGljbGUoKS5pbWdfZGVzY308L3A+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBpZD1cImFydGljbGVcIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZ2V0QXJ0aWNsZSgpLmFydGljbGUgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxkaXYgaWQ9XCJzb2NpYWxcIj5cbiAgICAgICAgICA8aDMgaWQ9XCJzb2NpYWxfdGl0bGVcIj5Gb2xsb3cgVXMgT248L2gzPlxuICAgICAgICAgIHtnZXRTb2NpYWxNZWRpYSgpLm1hcChzb2NpYWwgPT4gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17c29jaWFsLmxpbmt9PlxuICAgICAgICAgICAgICA8YSBpZD1cInNvY2lhbF9pY29uXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3NvY2lhbC5pY29ufSBhbHQ9e3NvY2lhbC5uYW1lfSAvPlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwic2lkZWJhclwiIC8+XG4gICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgI3NvY2lhbF9pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG4gICAgICAjc29jaWFsX3RpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgfVxuICAgICAgI2NvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgIH1cbiAgICAgICN0aXRsZWRlc2Mge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAjaW1nZGVzYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIH1cbiAgICAgICNtYWluLXdyYXAge1xuICAgICAgICAvKiBvdmVyZmxvdyB0byBoYW5kbGUgaW5uZXIgZmxvYXRpbmcgYmxvY2sgKi9cbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIH1cblxuICAgICAgI3NpZGViYXIge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG4iXX0= */\n/*@ sourceURL=pages/index.js */"
  }));
});

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


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