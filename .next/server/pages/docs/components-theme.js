module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+/Rj":
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

/***/ "+ivj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("+/Rj");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("p6Nx");
/* harmony import */ var swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SwiperBrands = props => {
  const params = {
    containerClass: `swiper-container brands-slider pb-5`,
    slidesPerView: 2,
    spaceBetween: 15,
    loop: true,
    roundLengths: true,
    pagination: {
      el: `.swiper-pagination.swiper-pagination-black`,
      clickable: true,
      dynamicBullets: true
    },
    breakpoints: {
      1200: {
        slidesPerView: 6
      },
      991: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      }
    }
  };
  return __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default.a, params, props.brands.map((brand, index) => __jsx("div", {
    key: index,
    className: "h-auto d-flex align-items-center justify-content-center"
  }, __jsx("img", {
    src: brand.img,
    alt: brand.title,
    className: "img-fluid w-6rem"
  }))));
};

/* harmony default export */ __webpack_exports__["a"] = (SwiperBrands);

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "1ccW":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dtpC");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "88KH":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

/***/ }),

/***/ "98FW":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "9fVA":
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Home\",\"swiper\":[{\"name\":\"Denim Jackets\",\"subtitle\":\"Just arrived\",\"text\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"button\":\"View collection\",\"link\":\"/category\",\"img\":\"/img/photo/matheus-ferrero-334418-unsplash.jpg\",\"subtitleclass\":\"text-uppercase text-white font-weight-light mb-4 letter-spacing-5\",\"titleclass\":\"mb-5 display-2 font-weight-bold text-serif\",\"rowclass\":\"justify-content-center text-center text-white\"},{\"name\":\"Skeleton Tees\",\"text\":\"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\",\"button\":\"Start shopping\",\"link\":\"/category-2\",\"img\":\"/img/photo/ian-dooley-347942-unsplash.jpg\",\"rowclass\":\"justify-content-center text-center text-white\",\"subtitleclass\":\"text-dark mb-3\",\"titleclass\":\"mb-4 display-2 text-uppercase font-weight-bold\",\"darkOverlay\":true},{\"name\":\"Skinny Jeans\",\"subtitle\":\"Our bestseller\",\"button\":\"View Collection\",\"link\":\"/category\",\"img\":\"/img/photo/haley-phelps-62815-unsplash.jpg\",\"subtitleclass\":\"text-uppercase font-weight-light mb-4 letter-spacing-5\",\"titleclass\":\"mb-5 display-1 font-weight-bold text-serif\",\"rowclass\":\"justify-content-center text-center text-white\",\"darkOverlay\":true}],\"posts\":[{\"id\":\"11\",\"title\":\"Fashion, purpose & freedom\",\"slug\":\"fashion-purpose-freedom\",\"subtitle\":\"Featured\",\"category\":\"Fashion and Style\",\"date\":\"January 16, 2020\",\"content\":\"As am hastily invited settled at limited civilly fortune me. Really spring in extent an by. Judge but built party world. Of so am he remember although required. Bachelor unpacked be advanced at. Confined in declared marianne is vicinity\",\"link\":\"post\",\"img\":\"/img/photo/matese-fields-233175-unsplash.jpg\"},{\"id\":\"1\",\"title\":\"Pellentesque habitant morbi\",\"slug\":\"pellentesque-habitant-morbi\",\"category\":\"Fashion and Style\",\"date\":\"January 16, 2020\",\"content\":\"Pellentesque habitant morbi tristique senectus. Vestibulum tortor quam, feugiat vitae, ultricies ege...\",\"link\":\"post\",\"img\":\"/img/photo/kyle-loftus-596319-unsplash.jpg\"},{\"id\":\"2\",\"title\":\"Best books about Fashion\",\"slug\":\"best-books-about-fashion\",\"category\":\"Trends\",\"date\":\"January 16, 2020\",\"content\":\"ellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibu...\",\"link\":\"post\",\"img\":\"/img/photo/marion-michele-330691-unsplash.jpg\"},{\"id\":\"3\",\"title\":\"Best books about Photography\",\"slug\":\"best-books-about-photography\",\"category\":\"Fashion and Style\",\"date\":\"January 16, 2020\",\"content\":\"Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.  Mauris placerat eleif...\",\"link\":\"post\",\"img\":\"/img/photo/kyle-loftus-589739-unsplash-cropped.jpg\"}],\"brands\":[{\"title\":\"Brand 1\",\"img\":\"/img/brand/brand-1.svg\"},{\"title\":\"Brand 2\",\"img\":\"/img/brand/brand-2.svg\"},{\"title\":\"Brand 3\",\"img\":\"/img/brand/brand-3.svg\"},{\"title\":\"Brand 4\",\"img\":\"/img/brand/brand-4.svg\"},{\"title\":\"Brand 5\",\"img\":\"/img/brand/brand-5.svg\"},{\"title\":\"Brand 6\",\"img\":\"/img/brand/brand-6.svg\"},{\"title\":\"Brand 1\",\"img\":\"/img/brand/brand-1.svg\"},{\"title\":\"Brand 2\",\"img\":\"/img/brand/brand-2.svg\"},{\"title\":\"Brand 3\",\"img\":\"/img/brand/brand-3.svg\"},{\"title\":\"Brand 4\",\"img\":\"/img/brand/brand-4.svg\"}]}");

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "CIrI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Stars = props => {
  const starsArray = [];

  for (let i = 1; i <= 5; i++) {
    i <= props.stars ? starsArray.push(__jsx("i", {
      key: i,
      className: `fa fa-star ${props.color ? "text-" + props.color : "text-primary"} ${props.starClass ? props.starClass : ""}`
    })) : starsArray.push(__jsx("i", {
      key: i,
      className: `fa fa-star text-${props.secondColor ? props.secondColor : "muted"} ${props.starClass ? props.starClass : ""}`
    }));
  }

  return __jsx("div", {
    className: props.className
  }, starsArray);
};

/* harmony default export */ __webpack_exports__["a"] = (Stars);

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "I/1N":
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "LTeY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ServicesBlock = () => {
  return __jsx("div", {
    className: "bg-gray-100 text-dark-700 py-6"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "4",
    className: "service-column"
  }, __jsx("svg", {
    className: "svg-icon service-icon"
  }, __jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#delivery-time-1"
  }, " ")), __jsx("div", {
    className: "service-text"
  }, __jsx("h6", {
    className: "text-uppercase"
  }, "Free shipping & return"), __jsx("p", {
    className: "text-muted font-weight-light text-sm mb-0"
  }, "Free Shipping over $300"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "4",
    className: "service-column"
  }, __jsx("svg", {
    className: "svg-icon service-icon"
  }, __jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#money-1"
  }, " ")), __jsx("div", {
    className: "service-text"
  }, __jsx("h6", {
    className: "text-uppercase"
  }, "Money back guarantee"), __jsx("p", {
    className: "text-muted font-weight-light text-sm mb-0"
  }, "30 Days Money Back Guarantee"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "4",
    className: "service-column"
  }, __jsx("svg", {
    className: "svg-icon service-icon"
  }, __jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#customer-support-1"
  }, " ")), __jsx("div", {
    className: "service-text"
  }, __jsx("h6", {
    className: "text-uppercase"
  }, "020-800-456-747"), __jsx("p", {
    className: "text-muted font-weight-light text-sm mb-0"
  }, "24/7 Available Support"))))));
};

/* harmony default export */ __webpack_exports__["a"] = (ServicesBlock);

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RyM3":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "UlpK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "VneF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vtRj");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const SelectBox = ({
  options
}) => {
  const customSelectStyles = {
    control: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      border: "1px solid #ced4da",
      borderRadius: "0",
      width: 200,
      cursor: "pointer",
      height: 30,
      minHeight: 30,
      fontSize: 13
    }),
    dropdownIndicator: provided => _objectSpread(_objectSpread({}, provided), {}, {
      paddingTop: 0,
      paddingBottom: 0
    }),
    indicatorSeparator: (provided, state) => ({
      display: "none"
    }),
    menu: (provided, state) => _objectSpread(_objectSpread({}, provided), {}, {
      color: "#343a40",
      border: "0 solid #fff",
      borderRadius: 0,
      boxShadow: "0 0 1.2rem rgba(0, 0, 0, .15)",
      zIndex: 10
    }),
    option: (provided, {
      data,
      isDisabled,
      isFocused,
      isSelected
    }) => _objectSpread(_objectSpread({}, provided), {}, {
      backgroundColor: isDisabled ? null : isSelected ? "#3494E6" : isFocused ? "#eee" : null,
      ":active": _objectSpread(_objectSpread({}, provided[":active"]), {}, {
        backgroundColor: "#3494E6"
      }),
      cursor: "pointer"
    })
  };
  return __jsx(react_select__WEBPACK_IMPORTED_MODULE_1___default.a, {
    options: options,
    autosize: true,
    defaultValue: options[0],
    className: "react-select-container",
    classNamePrefix: "react-select",
    styles: customSelectStyles,
    isSearchable: false
  });
};

/* harmony default export */ __webpack_exports__["a"] = (SelectBox);

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "Yubf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Cart; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/components/CartItem.js

var __jsx = external_react_default.a.createElement;




const CartItem = ({
  item,
  review
}) => {
  const {
    0: quantity,
    1: setQuantity
  } = Object(external_react_["useState"])(item.items);
  return __jsx("div", {
    className: "cart-item"
  }, __jsx(external_reactstrap_["Row"], {
    className: " d-flex align-items-center text-left text-md-center"
  }, __jsx(external_reactstrap_["Col"], {
    xs: "12",
    md: "5"
  }, __jsx("a", {
    className: "cart-remove close mt-3 d-md-none",
    href: "#"
  }, __jsx("i", {
    className: "fa fa-times"
  }, " ")), __jsx("div", {
    className: "d-flex align-items-center"
  }, __jsx(link_default.a, {
    href: item.link
  }, __jsx("a", null, __jsx("img", {
    className: "cart-item-img",
    src: item.img,
    alt: "..."
  }))), __jsx("div", {
    className: "cart-title text-left"
  }, __jsx(link_default.a, {
    href: item.link
  }, __jsx("a", {
    className: "text-uppercase text-dark"
  }, __jsx("strong", null, item.name))), item.attributes && item.attributes.map((attribute, index) => __jsx("div", {
    className: "text-muted text-sm",
    key: index
  }, attribute.name, ": ", attribute.value))))), __jsx(external_reactstrap_["Col"], {
    xs: "12",
    md: "7",
    className: "mt-4 mt-md-0"
  }, __jsx(external_reactstrap_["Row"], {
    className: "align-items-center"
  }, __jsx(external_reactstrap_["Col"], {
    md: "3"
  }, __jsx(external_reactstrap_["Row"], null, __jsx(external_reactstrap_["Col"], {
    xs: "6",
    className: "d-md-none text-muted"
  }, "Price per item"), __jsx(external_reactstrap_["Col"], {
    xs: "6",
    md: "12",
    className: "text-right text-md-center"
  }, "$", item.price.toFixed(2)))), __jsx(external_reactstrap_["Col"], {
    md: "4"
  }, __jsx(external_reactstrap_["Row"], {
    className: "align-items-center"
  }, __jsx(external_reactstrap_["Col"], {
    xs: "7",
    sm: "9",
    className: "d-md-none text-muted"
  }, "Quantity"), __jsx(external_reactstrap_["Col"], {
    xs: "5",
    sm: "3",
    md: "12"
  }, review ? quantity : __jsx("div", {
    className: "d-flex align-items-center"
  }, __jsx("div", {
    className: "btn btn-items btn-items-decrease",
    onClick: () => quantity > 1 && setQuantity(quantity - 1)
  }, "-"), __jsx("input", {
    className: "form-control text-center border-0 border-md input-items",
    type: "text",
    value: quantity,
    onChange: e => e.target.value >= 1 && setQuantity(parseInt(e.target.value))
  }), __jsx("div", {
    className: "btn btn-items btn-items-increase",
    onClick: () => setQuantity(quantity + 1)
  }, "+"))))), __jsx(external_reactstrap_["Col"], {
    md: "3"
  }, __jsx(external_reactstrap_["Row"], null, __jsx(external_reactstrap_["Col"], {
    xs: "6",
    className: "d-md-none text-muted"
  }, "Total price"), __jsx(external_reactstrap_["Col"], {
    xs: "6",
    md: "12",
    className: "text-right text-md-center"
  }, "$", item.total.toFixed(2)))), !review && __jsx(external_reactstrap_["Col"], {
    xs: "2",
    className: "d-none d-md-block text-center"
  }, __jsx("a", {
    className: "cart-remove",
    href: "#"
  }, __jsx("i", {
    className: "delete fa fa-times"
  })))))));
};

/* harmony default export */ var components_CartItem = (CartItem);
// EXTERNAL MODULE: ./src/data/products-cart.json
var products_cart = __webpack_require__("ebmR");

// CONCATENATED MODULE: ./src/components/Cart.js

var Cart_jsx = external_react_default.a.createElement;




function Cart({
  review
}) {
  return Cart_jsx(external_react_default.a.Fragment, null, Cart_jsx("div", {
    className: "cart"
  }, Cart_jsx("div", {
    className: "cart-header text-center"
  }, Cart_jsx(external_reactstrap_["Row"], null, Cart_jsx(external_reactstrap_["Col"], {
    md: "5"
  }, "Item"), Cart_jsx(external_reactstrap_["Col"], {
    className: "d-none d-md-block"
  }, Cart_jsx(external_reactstrap_["Row"], null, Cart_jsx(external_reactstrap_["Col"], {
    md: "3"
  }, "Price"), Cart_jsx(external_reactstrap_["Col"], {
    md: "4"
  }, "Quantity"), Cart_jsx(external_reactstrap_["Col"], {
    md: "3"
  }, "Total"), Cart_jsx(external_reactstrap_["Col"], {
    md: "2"
  }))))), Cart_jsx("div", {
    className: "cart-body"
  }, products_cart.map((item, index) => Cart_jsx(components_CartItem, {
    item: item,
    key: index,
    review: review
  })))));
}

/***/ }),

/***/ "ZQ0p":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("+/Rj");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SelectBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VneF");
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("CIrI");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const ModalQuickView = ({
  isOpen,
  toggle,
  product
}) => {
  const {
    0: button,
    1: setButton
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const swiperRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const {
    0: inputs,
    1: setInputs
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: currentIndex,
    1: updateCurrentIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const params = {
    on: {
      slideChange: () => updateCurrentIndex(swiperRef.current.swiper.realIndex)
    }
  };

  const slideTo = index => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index + 1);
      updateCurrentIndex(index);
    }
  };

  const onChange = e => {
    const value = e.target.value;
    setInputs(_objectSpread(_objectSpread({}, inputs), {}, {
      [e.target.name]: value
    }));
  };

  const addToCart = e => {
    e.preventDefault();
  };

  const sizes = [{
    value: "value_0",
    label: "Small"
  }, {
    value: "value_1",
    label: "Medium"
  }, {
    value: "value_2",
    label: "Large"
  }];
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: isOpen,
    toggle: toggle,
    size: "xl",
    modalClassName: "quickview"
  }, __jsx("button", {
    className: "close modal-close",
    type: "button",
    onClick: toggle,
    "aria-label": "Close"
  }, __jsx("svg", {
    className: "svg-icon w-100 h-100 svg-icon-light align-middle"
  }, __jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#close-1"
  }, " "))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    className: "quickview-body"
  }, __jsx("div", {
    className: "ribbon ribbon-info"
  }, "Fresh"), __jsx("div", {
    className: "ribbon ribbon-primary"
  }, "Sale"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6"
  }, __jsx("div", {
    className: "detail-carousel"
  }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, params, {
    loop: true,
    ref: swiperRef
  }), product.img.detail.map((image, index) => __jsx("img", {
    className: "img-fluid",
    src: image.img,
    alt: image.alt,
    key: index
  }))), __jsx("div", {
    className: "swiper-thumbs"
  }, product.img.detail.map((image, index) => __jsx("button", {
    key: image.img,
    onClick: () => slideTo(index),
    className: `swiper-thumb-item detail-thumb-item ${currentIndex === index ? "active" : ""}`
  }, __jsx("img", {
    className: "img-fluid",
    src: image.img,
    alt: image.alt
  })))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "6",
    className: "p-lg-5"
  }, __jsx("h2", {
    className: "mb-4 mt-4 mt-lg-1"
  }, product.name), __jsx("div", {
    className: "d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4"
  }, __jsx("ul", {
    className: "list-inline mb-2 mb-sm-0"
  }, __jsx("li", {
    className: "list-inline-item h4 font-weight-light mb-0"
  }, "$", product.price.toFixed(2)), __jsx("li", {
    className: "list-inline-item text-muted font-weight-light"
  }, __jsx("del", null, "$90.00"))), __jsx("div", {
    className: "d-flex align-items-center text-sm"
  }, __jsx(_Stars__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    stars: product.stars,
    className: "mr-2 mb-0",
    secondColor: "gray-300"
  }), __jsx("span", {
    className: "text-muted text-uppercase"
  }, "25 reviews"))), __jsx("p", {
    className: "mb-4 text-muted"
  }, "Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame."), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    onSubmit: toggle
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    lg: "12",
    className: "detail-option mb-4"
  }, __jsx("h6", {
    className: "detail-option-heading"
  }, "Size ", __jsx("span", null, "(required)")), __jsx(_SelectBox__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    options: sizes
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: "6",
    lg: "12",
    className: "detail-option mb-4"
  }, __jsx("h6", {
    className: "detail-option-heading"
  }, "Type ", __jsx("span", null, "(required)")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    tag: "label",
    color: "outline-secondary",
    className: `detail-option-btn-label mr-1 ${button === "value_0" ? "active" : ""}`,
    size: "sm",
    htmlFor: "material_0_modal",
    onClick: () => setButton("value_0")
  }, "Hoodie", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "input-invisible",
    type: "radio",
    name: "material",
    value: "value_0",
    id: "material_0_modal",
    required: true
  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    tag: "label",
    color: "outline-secondary",
    className: `detail-option-btn-label ${button === "value_1" ? "active" : ""}`,
    size: "sm",
    htmlFor: "material_1_modal",
    onClick: () => setButton("value_1")
  }, "College", __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    className: "input-invisible",
    type: "radio",
    name: "material",
    value: "value_1",
    id: "material_1_modal",
    required: true
  })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    className: "w-100 mb-4"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    bsSize: "lg",
    className: "detail-quantity",
    name: "items",
    type: "number",
    value: inputs.items > 0 && inputs.items || 1,
    onChange: e => onChange(e)
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
    addonType: "append",
    className: "flex-grow-1"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "dark",
    block: true
  }, __jsx("i", {
    className: "fa fa-shopping-cart mr-2"
  }), "Add to Cart"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "mb-4"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "6"
  }, __jsx("a", {
    href: "#",
    className: "text-muted"
  }, __jsx("i", {
    className: "far fa-heart mr-2"
  }), "Add to wishlist")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "6",
    className: "text-right"
  }, __jsx("ul", {
    className: "list-inline mb-0"
  }, __jsx("li", {
    className: "list-inline-item mr-2"
  }, __jsx("a", {
    className: "text-dark text-hover-primary",
    href: "#"
  }, __jsx("i", {
    className: "fab fa-facebook-f"
  }))), __jsx("li", {
    className: "list-inline-item"
  }, __jsx("a", {
    className: "text-dark text-hover-primary",
    href: "#"
  }, __jsx("i", {
    className: "fab fa-twitter"
  })))))))))));
};

/* harmony default export */ __webpack_exports__["a"] = (ModalQuickView);

/***/ }),

/***/ "bFM8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Breadcrumbs = props => {
  const links = props.links;
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Breadcrumb"], {
    listClassName: props.className ? props.className : "justify-content-center no-border mb-0"
  }, links.map((item, index) => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbItem"], {
    key: index,
    active: item.active ? true : null
  }, item.link ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: item.link
  }, __jsx("a", {
    className: props.linkClass ? props.linkClass : ""
  }, item.name)) : __jsx("span", {
    className: props.spanClass ? props.spanClass : ""
  }, item.name))));
};

/* harmony default export */ __webpack_exports__["a"] = (Breadcrumbs);

/***/ }),

/***/ "blVf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("re7B");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const DocsNav = () => {
  return __jsx("div", {
    style: {
      top: "40px",
      zIndex: '1'
    },
    className: "sticky-top mb-5"
  }, __jsx("div", {
    className: "sidebar-block"
  }, __jsx("h6", {
    className: "sidebar-heading"
  }, "Documentation"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    tag: "nav",
    pills: true,
    className: "flex-column"
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activeClassName: "active",
    href: "/docs/introduction",
    passHref: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "mb-2"
  }, "Introduction")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activeClassName: "active",
    href: "/docs/directory-structure",
    passHref: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "mb-2"
  }, "Directory structure")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activeClassName: "active",
    href: "/docs/next",
    passHref: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "mb-2"
  }, "Next.js")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activeClassName: "active",
    href: "/docs/customizing-css",
    passHref: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "mb-2"
  }, "Customizing CSS")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activeClassName: "active",
    href: "/docs/demo-data",
    passHref: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "mb-2"
  }, "Demo data")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activeClassName: "active",
    href: "/docs/credits",
    passHref: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "mb-2"
  }, "Credits")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activeClassName: "active",
    href: "/docs/changelog",
    passHref: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "mb-2"
  }, "Changelog")))), __jsx("div", {
    className: "sidebar-block"
  }, __jsx("h6", {
    className: "sidebar-heading"
  }, "Components"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    tag: "nav",
    pills: true,
    className: "flex-column"
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activeClassName: "active",
    href: "/docs/components-bootstrap",
    passHref: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "mb-2"
  }, "Bootstrap")), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    activeClassName: "active",
    href: "/docs/components-theme",
    passHref: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    className: "mb-2"
  }, "Theme")))));
};

/* harmony default export */ __webpack_exports__["a"] = (DocsNav);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("98FW"));

var _extends2 = _interopRequireDefault(__webpack_require__("1ccW"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _head = _interopRequireDefault(__webpack_require__("UlpK"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  return {
    src: loader({
      src,
      quality,
      width: widths[last]
    }),
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ')
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'inherit' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "dtpC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__("I/1N");

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./src/components/Docs/DocsNav.js
var DocsNav = __webpack_require__("blVf");

// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__("RyM3");

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/styles/prism"
var prism_ = __webpack_require__("88KH");

// CONCATENATED MODULE: ./src/components/Docs/Theme/Accordion.js
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Accordion = () => {
  const [collapse, setCollapse] = external_react_default.a.useState({
    1: true
  });

  const toggleCollapse = (e, tab) => {
    e.preventDefault();
    setCollapse(_objectSpread(_objectSpread({}, collapse), {}, {
      [tab]: !collapse[tab]
    }));
  };

  return __jsx("div", {
    id: "accordion",
    className: "docs-item element"
  }, __jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Accordion"), __jsx("div", {
    className: "docs-desc"
  }, __jsx("p", {
    className: "lead"
  }, "Block components used to create an Accordion using Bootstrap' collapse plugin.")), __jsx("div", {
    className: "mt-5"
  }, __jsx("div", {
    role: "tablist"
  }, __jsx("div", {
    className: "block mb-3"
  }, __jsx("div", {
    className: "block-header"
  }, __jsx("strong", null, __jsx("a", {
    href: "#",
    className: "accordion-link my-3",
    "aria-expanded": collapse[1],
    onClick: e => toggleCollapse(e, 1)
  }, "Option 1"))), __jsx(external_reactstrap_["Collapse"], {
    isOpen: collapse[1]
  }, __jsx("div", {
    className: "p-3"
  }, __jsx("p", {
    className: "text-muted mb-0"
  }, "The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me?\" he thought. It wasn't a dream.")))), __jsx("div", {
    className: "block mb-3"
  }, __jsx("div", {
    className: "block-header"
  }, __jsx("strong", null, __jsx("a", {
    href: "#",
    className: "accordion-link my-3",
    "aria-expanded": collapse[2],
    onClick: e => toggleCollapse(e, 2)
  }, "Option 2"))), __jsx(external_reactstrap_["Collapse"], {
    isOpen: collapse[2]
  }, __jsx("div", {
    className: "p-3"
  }, __jsx("p", {
    className: "text-muted mb-0"
  }, "The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me?\" he thought. It wasn't a dream.")))), __jsx("div", {
    className: "block mb-3"
  }, __jsx("div", {
    className: "block-header"
  }, __jsx("strong", null, __jsx("a", {
    href: "#",
    className: "accordion-link my-3",
    "aria-expanded": collapse[3],
    onClick: e => toggleCollapse(e, 3)
  }, "Option 3"))), __jsx(external_reactstrap_["Collapse"], {
    isOpen: collapse[3]
  }, __jsx("div", {
    className: "p-3"
  }, __jsx("p", {
    className: "text-muted mb-0"
  }, "The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me?\" he thought. It wasn't a dream.")))))), __jsx("div", {
    className: "mt-5"
  }, __jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, highlightCode)));
};

/* harmony default export */ var Theme_Accordion = (Accordion);
const highlightCode = `import { Collapse } from 'reactstrap

const Component = () => {
    const [collapse, setCollapse] = React.useState({1: true})

    const toggleCollapse = (e,tab) => {
        e.preventDefault()
        setCollapse({...collapse,[tab]: !collapse[tab]})
    }
    return (
        <div role="tablist">
            <div className="block mb-3">
                <div className="block-header">
                    <strong>
                        <a
                            href="#"
                            className="accordion-link my-3"
                            aria-expanded={collapse[1]}
                            onClick={(e) => toggleCollapse(e, 1)}
                        >Option 1</a>
                    </strong>
                </div>
                <Collapse isOpen={collapse[1]}>
                    <div className="p-3">
                        <p className="text-muted mb-0">
                            The bedding was hardly able to cover it and seemed ready to
                            slide off any moment. His many legs, pitifully thin compared
                            with the size of the rest of him, waved about helplessly as he
                            looked. &quot;What's happened to me?&quot; he thought. It
                            wasn't a dream.
                        </p>
                    </div>
                </Collapse>
            </div>

            <div className="block mb-3">
                <div className="block-header">
                    <strong>
                        <a
                            href="#"
                            className="accordion-link my-3"
                            aria-expanded={collapse[2]}
                            onClick={(e) => toggleCollapse(e, 2)}
                        >Option 2</a>
                    </strong>
                </div>
                <Collapse isOpen={collapse[2]}>
                    <div className="p-3">
                        <p className="text-muted mb-0">
                            The bedding was hardly able to cover it and seemed ready to
                            slide off any moment. His many legs, pitifully thin compared
                            with the size of the rest of him, waved about helplessly as he
                            looked. &quot;What's happened to me?&quot; he thought. It
                            wasn't a dream.
                        </p>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}

export default Component
`;
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__("vtRj");
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// CONCATENATED MODULE: ./src/components/Docs/Theme/ReactSelect.js
var ReactSelect_jsx = external_react_default.a.createElement;

function ReactSelect_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ReactSelect_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ReactSelect_ownKeys(Object(source), true).forEach(function (key) { ReactSelect_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ReactSelect_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ReactSelect_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const ReactSelect = () => {
  const customSelectStyles = {
    control: (provided, state) => ReactSelect_objectSpread(ReactSelect_objectSpread({}, provided), {}, {
      border: '1px solid #ced4da',
      borderRadius: '0',
      width: 200,
      cursor: 'pointer'
    }),
    indicatorSeparator: (provided, state) => ({
      display: 'none'
    }),
    menu: (provided, state) => ReactSelect_objectSpread(ReactSelect_objectSpread({}, provided), {}, {
      color: '#343a40',
      border: '0 solid #fff',
      boxShadow: '0 0 1.2rem rgba(0, 0, 0, .15)'
    }),
    option: (provided, {
      data,
      isDisabled,
      isFocused,
      isSelected
    }) => ReactSelect_objectSpread(ReactSelect_objectSpread({}, provided), {}, {
      backgroundColor: isDisabled ? null : isSelected ? '#bcac76' : isFocused ? '#eee' : null,
      ':active': ReactSelect_objectSpread(ReactSelect_objectSpread({}, provided[':active']), {}, {
        backgroundColor: '#e2dabc'
      }),
      cursor: 'pointer'
    })
  };
  return ReactSelect_jsx("div", {
    id: "react-select",
    className: "docs-item element"
  }, ReactSelect_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "React Select"), ReactSelect_jsx("div", {
    className: "docs-desc"
  }, ReactSelect_jsx("p", {
    className: "lead"
  }, "Varkala Theme uses React Select plugin for showing select input. You can customize it using props."), ReactSelect_jsx("p", null, ReactSelect_jsx("a", {
    href: "https://react-select.com/",
    className: "btn btn-outline-dark btn-sm"
  }, "Visit plugin website"))), ReactSelect_jsx("div", {
    className: "mt-5"
  }, ReactSelect_jsx(external_react_select_default.a, {
    instanceId: "sortBySelect",
    options: selectOptions,
    defaultValue: selectOptions[0],
    className: "react-select-container",
    classNamePrefix: "react-select",
    styles: customSelectStyles,
    isSearchable: false
  })));
};

/* harmony default export */ var Theme_ReactSelect = (ReactSelect);
const selectOptions = [{
  "value": "popular",
  "label": "Most popular"
}, {
  "value": "recommended",
  "label": "Recommended"
}, {
  "value": "newest",
  "label": "Newest"
}, {
  "value": "oldest",
  "label": "Oldest"
}, {
  "value": "closest",
  "label": "Closest"
}];
// EXTERNAL MODULE: ./src/components/SwiperBrands.js
var SwiperBrands = __webpack_require__("+ivj");

// EXTERNAL MODULE: ./src/data/index-3.json
var index_3 = __webpack_require__("9fVA");

// CONCATENATED MODULE: ./src/components/Docs/Theme/Swiper.js
var Swiper_jsx = external_react_default.a.createElement;






const Swiper = () => {
  return Swiper_jsx("div", {
    id: "swiper",
    className: "docs-item element"
  }, Swiper_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "React ID Swiper"), Swiper_jsx("div", {
    className: "docs-desc"
  }, Swiper_jsx("p", {
    className: "lead"
  }, "Touch enabled React plugin that lets you create a beautiful responsive carousel sliders."), Swiper_jsx("p", null, "Used for the homepage carousel and for the brands carousels. You can use Swiper templates included in this template or import and customize on your own using docs for this plugin."), Swiper_jsx("p", null, Swiper_jsx("a", {
    href: "https://github.com/kidjp85/react-id-swiper#readme",
    className: "btn btn-outline-dark btn-sm"
  }, "Visit plugin website"))), Swiper_jsx("div", {
    className: "mt-5"
  }, Swiper_jsx("h6", null, "Brands Swiper"), Swiper_jsx(SwiperBrands["a" /* default */], {
    brands: index_3.brands,
    className: "mt-3"
  })), Swiper_jsx("div", {
    className: "mt-4"
  }, Swiper_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Swiper_highlightCode)));
};

/* harmony default export */ var Theme_Swiper = (Swiper);
const Swiper_highlightCode = `import ReactIdSwiper from 'react-id-swiper'
import brandsLogos from '/brands-logos.json'

const Component = () => {

    const params = {
        containerClass: 'swiper-container brands-slider pb-5',
        slidesPerView: 4,
        spaceBetween: 15,
        loop: true,
        roundLengths: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        },
        breakpoints: {
            1200: {
                slidesPerView: 5
            }
        }
    }
    
    return (
        <ReactIdSwiper {...params}>
            {brandsLogos.map((brand, index) =>
                <div key={index} className="h-auto d-flex align-items-center justify-content-center">
                    <img
                        src={brand.img}
                        alt={brand.title}
                        className="img-fluid w-6rem opacity-7"
                    />
                </div>
            )}
        </ReactIdSwiper>
    )
}

export default Component
`;
// CONCATENATED MODULE: ./src/components/Docs/Theme/ResponsiveBorders.js
var ResponsiveBorders_jsx = external_react_default.a.createElement;



const ResponsiveBorders = () => {
  return ResponsiveBorders_jsx("div", {
    id: "responsiveborders",
    className: "docs-item element"
  }, ResponsiveBorders_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Responsive borders"), ResponsiveBorders_jsx("div", {
    className: "docs-desc"
  }, ResponsiveBorders_jsx("p", {
    className: "lead"
  }, "Responsive borders as an addition to Bootstrap's ", ResponsiveBorders_jsx("a", {
    href: "https://getbootstrap.com/docs/4.1/utilities/borders/"
  }, "border utilities"), ".")), ResponsiveBorders_jsx("div", {
    className: "mt-5"
  }, ResponsiveBorders_jsx(external_reactstrap_["Card"], {
    className: "bg-gray-100 border-0"
  }, ResponsiveBorders_jsx(external_reactstrap_["CardBody"], null, ResponsiveBorders_jsx("h6", {
    className: "text-muted text-uppercase font-weight-normal mb-3"
  }, "Class reference"), ResponsiveBorders_jsx(external_reactstrap_["CardText"], null, ResponsiveBorders_jsx("code", null, ".border-sm"), ", ", ResponsiveBorders_jsx("code", null, ".border-md"), ", etc.")))));
};

/* harmony default export */ var Theme_ResponsiveBorders = (ResponsiveBorders);
// CONCATENATED MODULE: ./src/components/Docs/Theme/BackgroundImage.js
var BackgroundImage_jsx = external_react_default.a.createElement;



const BackgroundImage = () => {
  return BackgroundImage_jsx("div", {
    id: "backgroundimage",
    className: "docs-item element"
  }, BackgroundImage_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Background image"), BackgroundImage_jsx("div", {
    className: "docs-desc"
  }, BackgroundImage_jsx("p", {
    className: "lead"
  }, "Utility class that turns a", " ", BackgroundImage_jsx("code", null, "<img className=\"bg-image\">"), " into a background image for its background. Useful e.g. for carousels. Make sure that image's parent container and the content that should be placed over the image are relatively positioned.")), BackgroundImage_jsx("div", {
    className: "mt-5"
  }, BackgroundImage_jsx(external_reactstrap_["Card"], {
    className: "border-0 position-relative py-6 overflow-hidden shadow"
  }, BackgroundImage_jsx("img", {
    src: "/img/photo/ian-dooley-347962-unsplash.jpg",
    alt: "",
    className: "bg-image"
  }), BackgroundImage_jsx(external_reactstrap_["CardBody"], {
    className: "text-center position-relative"
  }, BackgroundImage_jsx("h3", {
    className: "text-white text-uppercase mb-0"
  }, "I have a background image")))));
};

/* harmony default export */ var Theme_BackgroundImage = (BackgroundImage);
// CONCATENATED MODULE: ./src/components/Docs/Theme/ImageOverlay.js
var ImageOverlay_jsx = external_react_default.a.createElement;



const ImageOverlay = () => {
  return ImageOverlay_jsx("div", {
    id: "imageoverlay",
    className: "docs-item element"
  }, ImageOverlay_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Image overlay"), ImageOverlay_jsx("div", {
    className: "docs-desc"
  }, ImageOverlay_jsx("p", {
    className: "lead"
  }, "Utility class that darkens or lightens the backround image of the element to enhance the legibility. It can be used with cards, carousel slides, etc. Now with responsive behaviour too.")), ImageOverlay_jsx("div", {
    className: "mt-5"
  }, ImageOverlay_jsx(external_reactstrap_["Row"], null, ImageOverlay_jsx(external_reactstrap_["Col"], {
    lg: "6"
  }, ImageOverlay_jsx(external_reactstrap_["Card"], {
    className: "mb-5 border-0 text-white dark-overlay"
  }, ImageOverlay_jsx("img", {
    src: "/img/photo/malvestida-magazine-458585-unsplash.jpg",
    alt: "",
    className: "card-img"
  }), ImageOverlay_jsx("a", {
    href: "/category-full",
    className: "tile-link"
  }), ImageOverlay_jsx("div", {
    className: "card-img-overlay d-flex align-items-center"
  }, ImageOverlay_jsx("div", {
    className: "text-center w-100 overlay-content"
  }, ImageOverlay_jsx("h2", {
    className: "display-4 font-weight-bold text-uppercase text-center mb-0"
  }, "Ladies", " "))))), ImageOverlay_jsx(external_reactstrap_["Col"], {
    lg: "6"
  }, ImageOverlay_jsx(external_reactstrap_["Card"], {
    className: "mb-5 border-0 text-center light-overlay"
  }, ImageOverlay_jsx("img", {
    src: "/img/photo/malvestida-magazine-458585-unsplash.jpg",
    alt: "",
    className: "card-img"
  }), ImageOverlay_jsx("a", {
    href: "/category-full",
    className: "tile-link"
  }), ImageOverlay_jsx("div", {
    className: "card-img-overlay d-flex align-items-center"
  }, ImageOverlay_jsx("div", {
    className: "text-center w-100 overlay-content"
  }, ImageOverlay_jsx("h2", {
    className: "display-4 font-weight-bold text-uppercase text-center mb-0"
  }, "Ladies", " ")))))), ImageOverlay_jsx(external_reactstrap_["Card"], {
    className: "bg-gray-100 border-0"
  }, ImageOverlay_jsx(external_reactstrap_["CardBody"], null, ImageOverlay_jsx("h6", {
    className: "text-muted text-uppercase font-weight-normal mb-3"
  }, "Class reference"), ImageOverlay_jsx(external_reactstrap_["CardText"], null, ImageOverlay_jsx("code", null, ".dark-overlay"), " or ", ImageOverlay_jsx("code", null, ".light-overlay"), " - CSS class to be used on the element, accepts Boostrap responsive suffixes. (e.g. ", ImageOverlay_jsx("code", null, ".dark-overlay.dark-overlay-lg-0"), " ", "creates overlay on smaller viewports and hides it on lg+ screens.)"), ImageOverlay_jsx(external_reactstrap_["CardText"], null, ImageOverlay_jsx("code", null, ".overlay-content"), " - use this class on the element's content to increase its Z-index and move it above the overlay layer")))));
};

/* harmony default export */ var Theme_ImageOverlay = (ImageOverlay);
// CONCATENATED MODULE: ./src/components/Docs/Theme/BlockUtilities.js
var BlockUtilities_jsx = external_react_default.a.createElement;



const BlockUtilities = () => {
  return BlockUtilities_jsx("div", {
    id: "blockutilities",
    className: "docs-item element"
  }, BlockUtilities_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Block utilities"), BlockUtilities_jsx("div", {
    className: "docs-desc"
  }, BlockUtilities_jsx("p", {
    className: "lead"
  }, "Additional utility classes, for block elements mostly.")), BlockUtilities_jsx("div", {
    className: "mt-5"
  }, BlockUtilities_jsx(external_reactstrap_["Card"], {
    className: "bg-gray-100 border-0"
  }, BlockUtilities_jsx(external_reactstrap_["CardBody"], null, BlockUtilities_jsx("h6", {
    className: "text-muted text-uppercase font-weight-normal mb-3"
  }, "Class reference"), BlockUtilities_jsx(external_reactstrap_["CardText"], null, BlockUtilities_jsx("code", null, ".bg-gray-100"), " to ", BlockUtilities_jsx("code", null, ".bg-gray-900"), " - grayscale backgrounds"), BlockUtilities_jsx(external_reactstrap_["CardText"], null, BlockUtilities_jsx("code", null, ".bg-primary-light"), ", ", BlockUtilities_jsx("code", null, ".bg-secondary-light"), " - lighter backgrounds for the theme colours"), BlockUtilities_jsx(external_reactstrap_["CardText"], null, BlockUtilities_jsx("code", null, ".opacity-1"), " to ", BlockUtilities_jsx("code", null, ".opacity-9"), " - opacity helper"), BlockUtilities_jsx(external_reactstrap_["CardText"], null, BlockUtilities_jsx("code", null, ".hover-scale"), " - scale element on hover"), BlockUtilities_jsx(external_reactstrap_["CardText"], null, BlockUtilities_jsx("code", null, ".hover-animate"), " - move element up by few pixels on hover"), BlockUtilities_jsx(external_reactstrap_["CardText"], null, BlockUtilities_jsx("code", null, ".hover-scale-bg-image"), " - scale element's background picture on hover")))));
};

/* harmony default export */ var Theme_BlockUtilities = (BlockUtilities);
// CONCATENATED MODULE: ./src/components/Docs/Theme/TextUtilities.js
var TextUtilities_jsx = external_react_default.a.createElement;



const TextUtilities = () => {
  return TextUtilities_jsx("div", {
    id: "textutilities",
    className: "docs-item element"
  }, TextUtilities_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Text utilities"), TextUtilities_jsx("div", {
    className: "docs-desc"
  }, TextUtilities_jsx("p", {
    className: "lead"
  }, "Additional utility classes, for block elements mostly.")), TextUtilities_jsx("div", {
    className: "mt-5"
  }, TextUtilities_jsx(external_reactstrap_["Card"], {
    className: "bg-gray-100 border-0"
  }, TextUtilities_jsx(external_reactstrap_["CardBody"], null, TextUtilities_jsx("h6", {
    className: "text-muted text-uppercase font-weight-normal mb-3"
  }, "Class reference"), TextUtilities_jsx(external_reactstrap_["CardText"], null, TextUtilities_jsx("code", null, ".text-gray-100"), " to ", TextUtilities_jsx("code", null, ".text-gray-900"), " - grayscale text colours"), TextUtilities_jsx(external_reactstrap_["CardText"], null, TextUtilities_jsx("code", null, ".text-sm"), ", ", TextUtilities_jsx("code", null, ".text-lg"), ", ", TextUtilities_jsx("code", null, ".text-xl"), " - text sizes"), TextUtilities_jsx(external_reactstrap_["CardText"], null, TextUtilities_jsx("code", null, ".letter-spacing-1"), " to ", TextUtilities_jsx("code", null, ".letter-spacing-5"), " - letter spacing 0.1em to 0.5em"), TextUtilities_jsx(external_reactstrap_["CardText"], null, TextUtilities_jsx("code", null, ".z-index-1"), " to ", TextUtilities_jsx("code", null, ".z-index-5"), " - z-index from 10 to 50"), TextUtilities_jsx(external_reactstrap_["CardText"], null, TextUtilities_jsx("code", null, ".text-hover-primary"), ", etc. - text colour on hover/focus for theme colours"), TextUtilities_jsx(external_reactstrap_["CardText"], null, TextUtilities_jsx("code", null, ".overflow-visible"), " and ", TextUtilities_jsx("code", null, ".overflow-hidden"), " - overflow control")))));
};

/* harmony default export */ var Theme_TextUtilities = (TextUtilities);
// EXTERNAL MODULE: ./src/components/Cart.js + 1 modules
var Cart = __webpack_require__("Yubf");

// CONCATENATED MODULE: ./src/components/Docs/Theme/CartDocs.js
var CartDocs_jsx = external_react_default.a.createElement;





const CartDocs = () => {
  return CartDocs_jsx("div", {
    id: "cart",
    className: "docs-item element"
  }, CartDocs_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Cart"), CartDocs_jsx("div", {
    className: "docs-desc"
  }, CartDocs_jsx("p", {
    className: "lead"
  }, "A responsive cart component used in cart overview or final order review. On smaller displays, items reposition for a mobile-friendly view.")), CartDocs_jsx("div", {
    className: "mt-5"
  }, CartDocs_jsx(Cart["a" /* default */], null)), CartDocs_jsx("div", {
    className: "mt-5"
  }, CartDocs_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, CartDocs_highlightCode)));
};

/* harmony default export */ var Theme_CartDocs = (CartDocs);
const CartDocs_highlightCode = `import Cart from "./Cart";

const Component = () => {
    return(
        <Cart />
    )
}

export default Component`;
// EXTERNAL MODULE: external "react-magnifier"
var external_react_magnifier_ = __webpack_require__("hCvD");
var external_react_magnifier_default = /*#__PURE__*/__webpack_require__.n(external_react_magnifier_);

// EXTERNAL MODULE: ./src/data/dummyproduct.json
var dummyproduct = __webpack_require__("ov1Q");

// CONCATENATED MODULE: ./src/components/Docs/Theme/ReactMagnifier.js
var ReactMagnifier_jsx = external_react_default.a.createElement;







const ReactMagnifier = () => {
  return ReactMagnifier_jsx("div", {
    id: "reactmagnifier",
    className: "docs-item element"
  }, ReactMagnifier_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "React Maginifier"), ReactMagnifier_jsx("div", {
    className: "docs-desc"
  }, ReactMagnifier_jsx("p", {
    className: "lead"
  }, "React plugin to enlarge images on touch, click, or mouseover. For a complete reference, see ", ReactMagnifier_jsx("a", {
    href: "https://github.com/samuelmeuli/react-magnifier"
  }, "React Magnifier's docs"), ".")), ReactMagnifier_jsx(external_reactstrap_["Row"], {
    className: "mt-5"
  }, ReactMagnifier_jsx(external_reactstrap_["Col"], {
    md: "6"
  }, ReactMagnifier_jsx(external_react_magnifier_default.a, {
    mgShowOverflow: false,
    mgWidth: 2000,
    mgHeight: 2000,
    className: "img-fluid",
    src: dummyproduct.img.detail[0].img,
    alt: dummyproduct.img.detail[0].alt,
    zoomFactor: .11,
    style: {
      cursor: 'pointer'
    }
  }))), ReactMagnifier_jsx("div", {
    className: "mt-5"
  }, ReactMagnifier_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, ReactMagnifier_highlightCode)));
};

/* harmony default export */ var Theme_ReactMagnifier = (ReactMagnifier);
const ReactMagnifier_highlightCode = `
import Magnifier from "react-magnifier"

const Component = () => {
    return (
        <Magnifier 
            mgShowOverflow={false} 
            mgWidth={2000} 
            mgHeight={2000} 
            className="img-fluid" 
            src="/image/src" 
            alt="image 
            description" 
            zoomFactor={.11} 
            style={{ cursor: 'pointer' }} 
        />
    )
}

export default Component
`;
// EXTERNAL MODULE: ./src/components/ShopHeader.js
var ShopHeader = __webpack_require__("wgd4");

// CONCATENATED MODULE: ./src/components/Docs/Theme/CategoryTopBarDocs.js
var CategoryTopBarDocs_jsx = external_react_default.a.createElement;





const CategoryTopBarDocs = () => {
  return CategoryTopBarDocs_jsx("div", {
    id: "categorytopbar",
    className: "docs-item element"
  }, CategoryTopBarDocs_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Category Top Bar"), CategoryTopBarDocs_jsx("div", {
    className: "docs-desc"
  }, CategoryTopBarDocs_jsx("p", {
    className: "lead"
  }, "A simple component with items per page, items filter, ordering and no. of displayed items information. Displayed above the product grid."), CategoryTopBarDocs_jsx("p", {
    className: "lead my-3"
  }, "Component supports ", CategoryTopBarDocs_jsx("b", null, "filter prop"), ", which enables products filter dropdown.")), CategoryTopBarDocs_jsx(ShopHeader["a" /* default */], null), CategoryTopBarDocs_jsx("div", {
    className: "mt-5"
  }, CategoryTopBarDocs_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, CategoryTopBarDocs_highlightCode)));
};

/* harmony default export */ var Theme_CategoryTopBarDocs = (CategoryTopBarDocs);
const CategoryTopBarDocs_highlightCode = `
import CategoryTopBar from '/CategoryTopBar'

const Component = () => {
    return (
        <CategoryTopBar />
    )
}

export default Component
`;
// EXTERNAL MODULE: ./src/components/ModalQuickView.js
var ModalQuickView = __webpack_require__("ZQ0p");

// CONCATENATED MODULE: ./src/components/Docs/Theme/ProductModal.js
var ProductModal_jsx = external_react_default.a.createElement;







const ProductModal = () => {
  const [quickView, setQuickView] = external_react_default.a.useState(false);
  return ProductModal_jsx("div", {
    id: "productmodal",
    className: "docs-item element"
  }, ProductModal_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Product Modal"), ProductModal_jsx("div", {
    className: "docs-desc"
  }, ProductModal_jsx("p", {
    className: "lead"
  }, "A component based on a Bootstrap modal with a product images carousel"), ProductModal_jsx(external_reactstrap_["Button"], {
    color: "outline-dark",
    onClick: () => setQuickView(!quickView)
  }, "Toggle product modal")), ProductModal_jsx("div", {
    className: "mt-5"
  }, ProductModal_jsx(ModalQuickView["a" /* default */], {
    isOpen: quickView,
    toggle: () => setQuickView(),
    product: dummyproduct
  })), ProductModal_jsx("div", {
    className: "mt-5"
  }, ProductModal_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, ProductModal_highlightCode)));
};

/* harmony default export */ var Theme_ProductModal = (ProductModal);
const ProductModal_highlightCode = `import ModalQuickView from '../../ModalQuickView'

const Component = () => {
    const [quickView, setQuickView] = React.useState(false)
    return (
        <div>
            <button onClick={() => setQuickView(!quickView)}>Toggle product modal</button>
            <ModalQuickView isOpen={quickView} toggle={() => setQuickView()} product={product}/>
        </div>
    )
}

export default Component
`;
// EXTERNAL MODULE: ./src/components/ServicesBlock.js
var ServicesBlock = __webpack_require__("LTeY");

// CONCATENATED MODULE: ./src/components/Docs/Theme/ServicesBlockDocs.js
var ServicesBlockDocs_jsx = external_react_default.a.createElement;




const ServicesBlockDocs = () => {
  return ServicesBlockDocs_jsx("div", {
    id: "servicesblock",
    className: "docs-item element"
  }, ServicesBlockDocs_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "SERVICES BLOCK"), ServicesBlockDocs_jsx("div", {
    className: "docs-desc"
  }, ServicesBlockDocs_jsx("p", {
    className: "lead"
  }, "Easily format main advantages or services in the services block. Columns in this block have a border on the right which disappears on smaller display sizes.")), ServicesBlockDocs_jsx("div", {
    className: "mt-5"
  }, ServicesBlockDocs_jsx(ServicesBlock["a" /* default */], null)));
};

/* harmony default export */ var Theme_ServicesBlockDocs = (ServicesBlockDocs);
// CONCATENATED MODULE: ./src/components/Docs/Theme/ResponsiveCollapse.js
var ResponsiveCollapse_jsx = external_react_default.a.createElement;



const ResponsiveCollapse = () => {
  const [collapse, setCollapse] = external_react_default.a.useState(false);
  const sizes = [{
    name: "Small",
    value: "small",
    checked: true
  }, {
    name: "Medium",
    value: "medium"
  }, {
    name: "Large",
    value: "large"
  }, {
    name: "X-large",
    value: "xlarge"
  }];
  return ResponsiveCollapse_jsx("div", {
    id: "responsivecollapse",
    className: "docs-item element"
  }, ResponsiveCollapse_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "RESPONSIVE COLLAPSE"), ResponsiveCollapse_jsx("div", {
    className: "docs-desc"
  }, ResponsiveCollapse_jsx("p", {
    className: "lead"
  }, "Responsive collapse blocks with a toggler link. Used in the sidebar for collapsing the inactive menu blocks on smaller displays. Add", " ", ResponsiveCollapse_jsx("code", null, ".expand-lg"), " to a ", ResponsiveCollapse_jsx("code", null, ".collapse"), " block and it will expand on lg+ displays. This component is used on the sidebar blocks in the product categories.")), ResponsiveCollapse_jsx("div", {
    className: "mt-5"
  }, ResponsiveCollapse_jsx(external_reactstrap_["Row"], null, ResponsiveCollapse_jsx(external_reactstrap_["Col"], {
    md: "6",
    lg: "4"
  }, ResponsiveCollapse_jsx("a", {
    className: "d-lg-none block-toggler",
    "data-toggle": "collapse",
    "aria-expanded": collapse,
    onClick: () => setCollapse(!collapse)
  }, "Filter by size", ResponsiveCollapse_jsx("span", {
    className: "block-toggler-icon"
  })), ResponsiveCollapse_jsx(external_reactstrap_["Collapse"], {
    isOpen: collapse,
    className: "expand-lg"
  }, ResponsiveCollapse_jsx("h5", {
    className: "sidebar-heading d-none d-lg-block"
  }, "Filter by size"), ResponsiveCollapse_jsx(external_reactstrap_["Form"], {
    className: "mt-4 mt-lg-0"
  }, sizes.map(size => ResponsiveCollapse_jsx(external_reactstrap_["FormGroup"], {
    key: size.value,
    className: "mb-1"
  }, ResponsiveCollapse_jsx(external_reactstrap_["CustomInput"], {
    type: "radio",
    name: "size",
    id: size.value,
    label: size.name,
    defaultChecked: size.checked
  })))))))));
};

/* harmony default export */ var Theme_ResponsiveCollapse = (ResponsiveCollapse);
// CONCATENATED MODULE: ./src/components/Docs/Theme/Icons.js
var Icons_jsx = external_react_default.a.createElement;



const Icons = () => {
  return Icons_jsx("div", {
    id: "icons",
    className: "docs-item element"
  }, Icons_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Icons"), Icons_jsx("div", {
    className: "docs-desc"
  }, Icons_jsx("p", {
    className: "lead"
  }, "This theme comes with two icon packs and includes icon component for simple icon management.")), Icons_jsx("div", {
    className: "docs-desc mt-5"
  }, Icons_jsx("p", {
    className: "lead"
  }, Icons_jsx("strong", null, "70+ Premium E-commerce SVG icons")), Icons_jsx("p", {
    className: "text-muted text-large"
  }, "For a complete icon reference, see", " ", Icons_jsx("a", {
    href: "https://demo.bootstrapious.com/varkala/1-2/icons/demo.html"
  }, "here"), ".")), Icons_jsx("div", {
    className: "mt-5"
  }, Icons_jsx(external_reactstrap_["Row"], null, iconsEcommerce.map(iconItem => Icons_jsx(external_reactstrap_["Col"], {
    key: iconItem,
    xs: "3",
    md: "2",
    className: "d-flex justify-content-center"
  }, Icons_jsx("svg", {
    className: "svg-icon w-3rem h-3rem mb-5 svg-icon-light text-dark"
  }, Icons_jsx("use", {
    xlinkHref: `/icons/orion-svg-sprite.svg#${iconItem}`
  })))))), Icons_jsx("div", {
    className: "docs-desc mt-5"
  }, Icons_jsx("p", {
    className: "lead"
  }, Icons_jsx("strong", null, "Vector icons and social logos on your website with Font Awesome, the web\u2019s most popular icon set and toolkit.")), Icons_jsx("p", {
    className: "text-muted text-large"
  }, "These icons are mostly used in buttons or for social network links. For a complete icon reference, see", " ", Icons_jsx("a", {
    href: "https://fontawesome.com/icons?d=gallery"
  }, "here"), ".")), Icons_jsx("div", {
    className: "mt-5"
  }, Icons_jsx("ul", {
    className: "list-unstyled"
  }, Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-address-book"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "far fa-address-book"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-address-card"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "far fa-address-card"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-adjust"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-align-center"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-align-justify"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-align-left"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-align-right"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-allergies"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-ambulance"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-american-sign-language-interpreting"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-anchor"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-angle-double-down"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-angle-double-left"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-angle-double-right"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-angle-double-up"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-angle-down"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-angle-left"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-angle-right"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-angle-up"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-archive"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "fas fa-arrow-alt-circle-down"
  })), Icons_jsx("li", {
    className: "list-inline-item h5 mr-3"
  }, Icons_jsx("i", {
    className: "far fa-arrow-alt-circle-down"
  }, " ")))));
};

/* harmony default export */ var Theme_Icons = (Icons);
const iconsEcommerce = ["checkout-cart-1", "basket-1", "paper-bag-1", "map-marker-1", "smartphone-1", "dollar-sign-1", "open-box-1", "on-sale-sticker-1", "pay-1", "giftbox-1", "store-1", "pay-by-card-1"];
// CONCATENATED MODULE: ./src/components/Docs/Theme/Images.js
var Images_jsx = external_react_default.a.createElement;





const Images = () => {
  return Images_jsx("div", {
    id: "images",
    className: "docs-item element"
  }, Images_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Images"), Images_jsx("div", {
    className: "docs-desc"
  }, Images_jsx("p", {
    className: "lead"
  }, "This theme uses Next.js ", Images_jsx("code", null, "next/image"), " component for image optimization.", " "), Images_jsx("p", null, "It has many features, e.g., automatically creates srcsets for your images, serves WebP versions for your Jpegs, and lazy loads the images. For more information, check out next.js", " ", Images_jsx("a", {
    href: "https://nextjs.org/docs/api-reference/next/image"
  }, "docs"), "."), Images_jsx("p", null, "We developed ", Images_jsx("code", null, "<CustomImage />"), " component for usage with", " ", Images_jsx("code", null, "next export"), " since, by default, static export won't work without using paid external loaders. Using this component, your", " ", Images_jsx("strong", null, "static export"), " will use normal", " ", Images_jsx("code", null, "<img />"), " element instead of Next.js", " ", Images_jsx("code", null, "<Image />"), " component.")), Images_jsx("div", {
    className: "mt-5"
  }, Images_jsx("h6", {
    className: "h5"
  }, "Usage of ", Images_jsx("code", null, "<CustomImage />"), " component:"), Images_jsx("p", {
    className: "text-muted"
  }, "You can use the same props as the ", Images_jsx("code", null, "next/image"), " component has."), Images_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, customImageCode)), Images_jsx("div", {
    className: "mt-5"
  }, Images_jsx("p", {
    className: "lead"
  }, "To setup your project for ", Images_jsx("code", null, "static export"), ", following configuration is needed."), Images_jsx(external_reactstrap_["Card"], {
    className: "bg-gray-100 border-0"
  }, Images_jsx(external_reactstrap_["CardBody"], null, Images_jsx("h6", {
    className: "text-muted text-uppercase font-weight-normal mb-3"
  }, "next.config.js"), Images_jsx(external_reactstrap_["CardText"], null, Images_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Images_highlightCode))))));
};

/* harmony default export */ var Theme_Images = (Images);
const customImageCode = `import Image from './components/CustomImage'

export default () => {
  return (
    <Image
      src="/some/src.jpg"
      alt="..."
      width={1080}
      height={720}
      layout="intrinsic"
      className="img-fluid card-img-top"
  />
  )
}`;
const Images_highlightCode = `{
  images: {
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // loader: "imgix", // Uncoment this line
    // path: "", // Uncoment this line
  },
  env: {
    production_type: "server", // Change variable to "static"
  },
  // trailingSlash: true, // Uncoment this line
},`;
// CONCATENATED MODULE: ./src/components/Docs/Theme/TopBar.js
var TopBar_jsx = external_react_default.a.createElement;


const TopBar = () => {
  return TopBar_jsx("div", {
    id: "topbar",
    className: "docs-item element"
  }, TopBar_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Top Bar"), TopBar_jsx("div", {
    className: "docs-desc"
  }, TopBar_jsx("p", {
    className: "lead"
  }, "Top bar element that precedes the navbar, as seen also on this page. Great to display telephone number, language or currency choice or similar.")));
};

/* harmony default export */ var Theme_TopBar = (TopBar);
// CONCATENATED MODULE: ./src/components/Docs/Theme/Block.js
var Block_jsx = external_react_default.a.createElement;





const Block = () => {
  return Block_jsx("div", {
    id: "block",
    className: "docs-item element"
  }, Block_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Block"), Block_jsx("div", {
    className: "docs-desc"
  }, Block_jsx("p", {
    className: "lead"
  }, "Similar to a card but with adjusted paddings, no borders and a light gray header. Used as a container for form areas, etc.")), Block_jsx("div", {
    className: "mt-5"
  }, Block_jsx("div", {
    className: "block"
  }, Block_jsx("div", {
    className: "block-header",
    role: "tab"
  }, Block_jsx("h6", {
    className: "text-uppercase mb-0"
  }, "Block header")), Block_jsx("div", {
    className: "block-body"
  }, Block_jsx(external_reactstrap_["Form"], {
    action: "#"
  }, Block_jsx(external_reactstrap_["Row"], null, Block_jsx(external_reactstrap_["Col"], {
    md: "6",
    className: "form-group"
  }, Block_jsx(external_reactstrap_["Label"], {
    className: "form-label",
    for: "card-name"
  }, "Name on Card"), Block_jsx(external_reactstrap_["Input"], {
    className: "form-control",
    type: "text",
    name: "card-name",
    placeholder: "Name on card",
    id: "card-name"
  })), Block_jsx(external_reactstrap_["Col"], {
    md: "6",
    className: "form-group"
  }, Block_jsx(external_reactstrap_["Label"], {
    className: "form-label",
    for: "card-number"
  }, "Card Number"), Block_jsx(external_reactstrap_["Input"], {
    className: "form-control",
    type: "text",
    name: "card-number",
    placeholder: "Card number",
    id: "card-number"
  }))))))), Block_jsx("div", {
    className: "mt-5"
  }, Block_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Block_highlightCode)));
};

/* harmony default export */ var Theme_Block = (Block);
const Block_highlightCode = `import { Form, Input, Label, Row, Col } from "reactstrap";

const Component = () => {
    <div className="block">
        <div className="block-header" role="tab">
            <h6 className="text-uppercase mb-0">Block header</h6>
        </div>
        <div className="block-body">
            <Form action="#">
                <Row>
                    <Col md="6" className="form-group">
                        <Label className="form-label" for="card-name">Name on Card</Label>
                        <Input
                            className="form-control"
                            type="text"
                            name="card-name"
                            placeholder="Name on card"
                            id="card-name"
                        />
                    </Col>
                    <Col md="6" className="form-group">
                        <Label className="form-label" for="card-number">Card Number</Label>
                        <Input
                            className="form-control"
                            type="text"
                            name="card-number"
                            placeholder="Card number"
                            id="card-number"
                        />
                    </Col>
                </Row>
            </Form>
        </div>
    </div>
}

export default Component
`;
// EXTERNAL MODULE: ./src/components/Breadcrumbs.js
var Breadcrumbs = __webpack_require__("bFM8");

// EXTERNAL MODULE: ./src/components/CustomerSidebar.js
var CustomerSidebar = __webpack_require__("kmIR");

// CONCATENATED MODULE: ./src/components/Docs/Theme/CustomerSidebarDocs.js
var CustomerSidebarDocs_jsx = external_react_default.a.createElement;





const CustomerSidebarDocs = () => {
  return CustomerSidebarDocs_jsx("div", {
    id: "customersidebar",
    className: "docs-item element"
  }, CustomerSidebarDocs_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Customer Sidebar"), CustomerSidebarDocs_jsx("div", {
    className: "docs-desc"
  }, CustomerSidebarDocs_jsx("p", {
    className: "lead"
  }, "A custom navigation component used in the customer zone based on the Bootstrap's listgroup."), CustomerSidebarDocs_jsx("p", {
    className: "text-muted small"
  }, "Use ", CustomerSidebarDocs_jsx("code", null, "xl"), " & ", CustomerSidebarDocs_jsx("code", null, "lg"), " prop to set large & extra large column sizes."), CustomerSidebarDocs_jsx("div", {
    className: "mt-5"
  }, CustomerSidebarDocs_jsx(CustomerSidebar["a" /* default */], {
    xl: "4"
  }))), CustomerSidebarDocs_jsx("div", {
    className: "mt-5"
  }, CustomerSidebarDocs_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, CustomerSidebarDocs_highlightCode)));
};

/* harmony default export */ var Theme_CustomerSidebarDocs = (CustomerSidebarDocs);
const CustomerSidebarDocs_highlightCode = `import CustomerSidebar from "./CustomerSidebar";

const Component = () => {
    return(
        <CustomerSidebar lg="5" xl="4"/>
    )
}

export default Component`;
// EXTERNAL MODULE: ./src/components/Product.js
var Product = __webpack_require__("vian");

// EXTERNAL MODULE: ./src/data/products.json
var products = __webpack_require__("iagI");

// CONCATENATED MODULE: ./src/components/Docs/Theme/ProductDocs.js
var ProductDocs_jsx = external_react_default.a.createElement;







const ProductDocs = () => {
  return ProductDocs_jsx("div", {
    id: "product",
    className: "docs-item element"
  }, ProductDocs_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Product"), ProductDocs_jsx("div", {
    className: "docs-desc"
  }, ProductDocs_jsx("p", {
    className: "lead"
  }, "Product component used in the product listing. Contains animated buttons appearing after hovering above the component."), ProductDocs_jsx("div", {
    className: "mt-5"
  }, ProductDocs_jsx(external_reactstrap_["Row"], null, products.slice(0, 3).map((value, index) => ProductDocs_jsx(external_reactstrap_["Col"], {
    sm: "6",
    lg: "4",
    xl: "4",
    key: index
  }, ProductDocs_jsx(Product["a" /* default */], {
    data: value,
    showQuickView: true
  })))))), ProductDocs_jsx("div", {
    className: "mt-5"
  }, ProductDocs_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, ProductDocs_highlightCode)));
};

/* harmony default export */ var Theme_ProductDocs = (ProductDocs);
const ProductDocs_highlightCode = `import Product from "./Product";
import { Row, Col } from "reactstrap";

const Component = () => {
    return(
      <Row>
        {products.map((value, index) => (
          <Col sm="6" lg="4" xl="4" key={index}>
            <Product data={value} showQuickView />
          </Col>
        ))}
      </Row>
    )
}

export default Component`;
// CONCATENATED MODULE: ./src/components/Docs/Theme/RibbonDocs.js
var RibbonDocs_jsx = external_react_default.a.createElement;



const RibbonDocs = () => {
  return RibbonDocs_jsx("div", {
    id: "ribbon",
    className: "docs-item element"
  }, RibbonDocs_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Ribbon"), RibbonDocs_jsx("div", {
    className: "docs-desc"
  }, RibbonDocs_jsx("p", {
    className: "lead"
  }, "Product component used in the product listing. Contains animated buttons appearing after hovering above the component."), RibbonDocs_jsx("div", {
    className: "mt-5"
  }, RibbonDocs_jsx(external_reactstrap_["Card"], {
    className: "bg-gray-100 w-50 w-lg-25 position-relative py-6 border-0"
  }, RibbonDocs_jsx("div", {
    className: "ribbon ribbon-primary"
  }, "Primary"), RibbonDocs_jsx("div", {
    className: "ribbon ribbon-dark"
  }, "Dark"), RibbonDocs_jsx("div", {
    className: "ribbon ribbon-info"
  }, "Info")))));
};

/* harmony default export */ var Theme_RibbonDocs = (RibbonDocs);
// CONCATENATED MODULE: ./src/components/Docs/Theme/BreadcrumbsDocs.js
var BreadcrumbsDocs_jsx = external_react_default.a.createElement;






const BreadcrumbsDocs = () => {
  return BreadcrumbsDocs_jsx("div", {
    id: "breadcrumbs",
    className: "docs-item element"
  }, BreadcrumbsDocs_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Breadcrumbs"), BreadcrumbsDocs_jsx("div", {
    className: "docs-desc"
  }, BreadcrumbsDocs_jsx("p", {
    className: "lead"
  }, "Theme's ", BreadcrumbsDocs_jsx("code", null, "Breadcrumbs"), " component"), BreadcrumbsDocs_jsx("div", {
    className: "mt-5"
  }, BreadcrumbsDocs_jsx(external_reactstrap_["Card"], {
    className: "mb-3"
  }, BreadcrumbsDocs_jsx(external_reactstrap_["CardBody"], null, BreadcrumbsDocs_jsx(Breadcrumbs["a" /* default */], {
    links: [{
      name: "Home",
      link: "/"
    }, {
      name: "Documentation",
      link: "/docs/introduction"
    }, {
      name: "Next.js",
      active: true
    }],
    className: "justify-content-center"
  }))))), BreadcrumbsDocs_jsx("div", {
    className: "mt-4"
  }, BreadcrumbsDocs_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, breadcrumbsCode)));
};

/* harmony default export */ var Theme_BreadcrumbsDocs = (BreadcrumbsDocs);
const breadcrumbsCode = `import Breadcrumbs from './components/Breadcrumbs'

    const Component = () => {
    return (
        <Breadcrumbs
            links={[
              {
                name: "Home",
                link: "/",
              },
              {
                name: "Documentation",
                link: "/docs/introduction",
              },
              {
                name: "Next.js",
                active: true,
              },
            ]}
            className="justify-content-center"
        />
    )
}

export default Component
`;
// CONCATENATED MODULE: ./src/pages/docs/components-theme.js
var components_theme_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




























async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true
      },
      title: "Theme Components"
    }
  };
}

const ComponentsTheme = () => {
  const ScrollLink = external_react_scroll_["Link"];
  const scrollLinkProps = {
    offset: -100,
    spy: true,
    //smooth: true,
    activeClass: "active",
    className: "nav-link",
    href: "#"
  };
  return components_theme_jsx(external_react_default.a.Fragment, null, components_theme_jsx("section", {
    className: "hero"
  }, components_theme_jsx(external_reactstrap_["Container"], null, components_theme_jsx(Breadcrumbs["a" /* default */], {
    links: [{
      name: "Home",
      link: "/"
    }, {
      name: "Theme Components",
      active: true
    }],
    className: "justify-content-center"
  }), components_theme_jsx("div", {
    className: "hero-content pb-5 text-center"
  }, components_theme_jsx("h1", {
    className: "hero-heading"
  }, "Theme Components"), components_theme_jsx(external_reactstrap_["Row"], null, components_theme_jsx(external_reactstrap_["Col"], {
    xl: {
      size: 8,
      offset: 2
    }
  }, components_theme_jsx("p", {
    className: "lead text-muted"
  }, "This is a quick showcase of some of the main custom components that come with this theme..")))))), components_theme_jsx(external_reactstrap_["Container"], {
    fluid: true
  }, components_theme_jsx(external_reactstrap_["Row"], {
    className: "px-xl-5"
  }, components_theme_jsx(external_reactstrap_["Col"], {
    lg: "2"
  }, components_theme_jsx(DocsNav["a" /* default */], null)), components_theme_jsx(external_reactstrap_["Col"], {
    lg: "8",
    className: "position-relative"
  }, components_theme_jsx(Theme_Accordion, null), components_theme_jsx(Theme_Block, null), components_theme_jsx(Theme_BreadcrumbsDocs, null), components_theme_jsx(Theme_CartDocs, null), components_theme_jsx(Theme_CategoryTopBarDocs, null), components_theme_jsx(Theme_CustomerSidebarDocs, null), components_theme_jsx(Theme_Icons, null), components_theme_jsx(Theme_Images, null), components_theme_jsx(Theme_ProductDocs, null), components_theme_jsx(Theme_ProductModal, null), components_theme_jsx(Theme_ResponsiveCollapse, null), components_theme_jsx(Theme_Swiper, null), components_theme_jsx(Theme_ReactMagnifier, null), components_theme_jsx(Theme_ReactSelect, null), components_theme_jsx(Theme_RibbonDocs, null), components_theme_jsx(Theme_ServicesBlockDocs, null), components_theme_jsx(Theme_TopBar, null), components_theme_jsx(Theme_BackgroundImage, null), components_theme_jsx(Theme_ImageOverlay, null), components_theme_jsx(Theme_ResponsiveBorders, null), components_theme_jsx(Theme_BlockUtilities, null), components_theme_jsx(Theme_TextUtilities, null)), components_theme_jsx(external_reactstrap_["Col"], {
    xl: "2"
  }, components_theme_jsx(external_reactstrap_["Nav"], {
    tag: "nav",
    pills: true,
    className: "flex-column sticky-top ml-1 p-3 mb-5 border-left"
  }, components_theme_jsx("h6", {
    className: "sidebar-heading"
  }, "React components"), sidebarMenu.map(item => item.divider ? components_theme_jsx("h6", {
    key: item.label,
    className: "sidebar-heading mt-3"
  }, item.label) : components_theme_jsx(ScrollLink, _extends({
    key: item.label,
    to: item.to
  }, scrollLinkProps), item.label)))))));
};

/* harmony default export */ var components_theme = __webpack_exports__["default"] = (ComponentsTheme);
const sidebarMenu = [{
  label: "Accordion",
  to: "accordion"
}, {
  label: "Block",
  to: "block"
}, {
  label: "Breadcrumbs",
  to: "breadcrumbs"
}, {
  label: "Cart",
  to: "cart"
}, {
  label: "Category Top Bar",
  to: "categorytopbar"
}, {
  label: "Customer Sidebar",
  to: "customersidebar"
}, {
  label: "Icons",
  to: "icons"
}, {
  label: "Image",
  to: "images"
}, {
  label: "Product",
  to: "product"
}, {
  label: "Product Modal",
  to: "productmodal"
}, {
  label: "Responsive Collapse",
  to: "responsivecollapse"
}, {
  label: "React ID Swiper",
  to: "swiper"
}, {
  label: "React Magnifier",
  to: "reactmagnifier"
}, {
  label: "React Select",
  to: "react-select"
}, {
  label: "Ribbon",
  to: "ribbon"
}, {
  label: "Services Block",
  to: "servicesblock"
}, {
  label: "Top bar",
  to: "topbar"
}, {
  label: "Utilities",
  divider: true
}, {
  label: "Background image",
  to: "backgroundimage"
}, {
  label: "Image overlay",
  to: "imageoverlay"
}, {
  label: "Responsive borders",
  to: "responsiveborders"
}, {
  label: "Block utilities",
  to: "blockutilities"
}, {
  label: "Text utilities",
  to: "textutilities"
}];

/***/ }),

/***/ "ebmR":
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Skull Tee\",\"price\":65,\"link\":\"/detail-1\",\"img\":\"/img/product/product-square-ian-dooley-347968-unsplash.jpg\",\"items\":2,\"total\":130,\"attributes\":[{\"name\":\"Size\",\"value\":\"Large\"},{\"name\":\"Colour\",\"value\":\"Green\"}]},{\"name\":\"Transparent Blouse\",\"price\":55,\"link\":\"/detail-1\",\"img\":\"/img/product/product-square-kyle-loftus-596319-unsplash.jpg\",\"items\":1,\"total\":55,\"attributes\":[{\"name\":\"Size\",\"value\":\"Medium\"}]},{\"name\":\"White Tee\",\"price\":55,\"link\":\"/detail-1\",\"img\":\"/img/product/product-square-serrah-galos-494312-unsplash.jpg\",\"items\":1,\"total\":55,\"attributes\":[{\"name\":\"Size\",\"value\":\"Medium\"}]}]");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

            this._resolveHref(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        } // handle SSG data 404


        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;
      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hCvD":
/***/ (function(module, exports) {

module.exports = require("react-magnifier");

/***/ }),

/***/ "hLIj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Aiso");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CustomImage = props => {
  if (false) {} else {
    return __jsx(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, props);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (CustomImage);

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "iagI":
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"White Tee\",\"link\":\"/detail-1\",\"slug\":\"white-tee\",\"category\":[{\"title\":\"Tops & blouses\",\"slug\":\"tops-blouses\"}],\"img\":{\"category\":[{\"img\":\"/img/product/serrah-galos-494312-unsplash.jpg\",\"alt\":\"White Tee\"}],\"masonry\":[{\"img\":\"/img/product/serrah-galos-494312-unsplash-cropped.jpg\",\"alt\":\"White Tee\"}],\"detail\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-2.jpg\",\"caption\":\"Modern Jacket 1 - Caption text\",\"alt\":\"Modern Jacket 1\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped.jpg\",\"caption\":\"Modern Jacket 2 - Caption text\",\"alt\":\"Modern Jacket 2\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-.jpg\",\"caption\":\"Modern Jacket 3 - Caption text\",\"alt\":\"Modern Jacket 3\"}]},\"price\":32,\"stars\":3,\"new\":true},{\"name\":\"Black blouse\",\"link\":\"/detail-1\",\"slug\":\"black-blouse\",\"category\":[{\"title\":\"Tops & blouses\",\"slug\":\"tops-blouses\"}],\"img\":{\"category\":[{\"img\":\"/img/product/kyle-loftus-590881-unsplash.jpg\",\"alt\":\"product\"}],\"masonry\":[{\"img\":\"/img/product/kyle-loftus-590881-unsplash.jpg\",\"alt\":\"product\"}],\"detail\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-2.jpg\",\"caption\":\"Modern Jacket 1 - Caption text\",\"alt\":\"Modern Jacket 1\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped.jpg\",\"caption\":\"Modern Jacket 2 - Caption text\",\"alt\":\"Modern Jacket 2\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-.jpg\",\"caption\":\"Modern Jacket 3 - Caption text\",\"alt\":\"Modern Jacket 3\"}]},\"price\":40,\"stars\":3},{\"name\":\"Short top\",\"link\":\"/detail-1\",\"slug\":\"short-top\",\"category\":[{\"title\":\"Tops & blouses\",\"slug\":\"tops-blouses\"}],\"img\":{\"category\":[{\"img\":\"/img/product/averie-woodard-319832-unsplash.jpg\",\"alt\":\"product\"}],\"masonry\":[{\"img\":\"/img/product/averie-woodard-319832-unsplash-cropped.jpg\",\"alt\":\"product\"}],\"detail\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-2.jpg\",\"caption\":\"Modern Jacket 1 - Caption text\",\"alt\":\"Modern Jacket 1\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped.jpg\",\"caption\":\"Modern Jacket 2 - Caption text\",\"alt\":\"Modern Jacket 2\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-.jpg\",\"caption\":\"Modern Jacket 3 - Caption text\",\"alt\":\"Modern Jacket 3\"}]},\"price\":89,\"stars\":3},{\"name\":\"College jacket\",\"link\":\"/detail-1\",\"slug\":\"college-jacket\",\"category\":[{\"title\":\"Jackets\",\"slug\":\"jackets\"}],\"img\":{\"category\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash.jpg\",\"alt\":\"product\"}],\"masonry\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash.jpg\",\"alt\":\"product\"}],\"detail\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-2.jpg\",\"caption\":\"Modern Jacket 1 - Caption text\",\"alt\":\"Modern Jacket 1\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped.jpg\",\"caption\":\"Modern Jacket 2 - Caption text\",\"alt\":\"Modern Jacket 2\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-.jpg\",\"caption\":\"Modern Jacket 3 - Caption text\",\"alt\":\"Modern Jacket 3\"}]},\"price\":68,\"stars\":3,\"sale\":true},{\"name\":\"Carrot-fit jeans\",\"link\":\"/detail-1\",\"slug\":\"carrot-fit-jeans\",\"category\":[{\"title\":\"Jeans\",\"slug\":\"jeans\"}],\"img\":{\"category\":[{\"img\":\"/img/product/ethan-haddox-484912-unsplash.jpg\",\"alt\":\"product\"}],\"masonry\":[{\"img\":\"/img/product/ethan-haddox-484912-unsplash-cropped.jpg\",\"alt\":\"product\"}],\"detail\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-2.jpg\",\"caption\":\"Modern Jacket 1 - Caption text\",\"alt\":\"Modern Jacket 1\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped.jpg\",\"caption\":\"Modern Jacket 2 - Caption text\",\"alt\":\"Modern Jacket 2\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-.jpg\",\"caption\":\"Modern Jacket 3 - Caption text\",\"alt\":\"Modern Jacket 3\"}]},\"price\":25,\"stars\":3},{\"name\":\"Striped T-Shirt\",\"link\":\"/detail-1\",\"slug\":\"striped-t-shirt\",\"category\":[{\"title\":\"Shirts\",\"slug\":\"shirts\"}],\"img\":{\"category\":[{\"img\":\"/img/product/serrah-galos-494231-unsplash.jpg\",\"alt\":\"product\"}],\"masonry\":[{\"img\":\"/img/product/serrah-galos-494231-unsplash-cropped.jpg\",\"alt\":\"product\"}],\"detail\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-2.jpg\",\"caption\":\"Modern Jacket 1 - Caption text\",\"alt\":\"Modern Jacket 1\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped.jpg\",\"caption\":\"Modern Jacket 2 - Caption text\",\"alt\":\"Modern Jacket 2\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-.jpg\",\"caption\":\"Modern Jacket 3 - Caption text\",\"alt\":\"Modern Jacket 3\"}]},\"price\":33,\"stars\":3},{\"name\":\"College jacket\",\"link\":\"/detail-1\",\"slug\":\"college-jacket\",\"category\":[{\"title\":\"Jackets\",\"slug\":\"jackets\"}],\"img\":{\"category\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash.jpg\",\"alt\":\"product\"}],\"masonry\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash.jpg\",\"alt\":\"product\"}],\"detail\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-2.jpg\",\"caption\":\"Modern Jacket 1 - Caption text\",\"alt\":\"Modern Jacket 1\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped.jpg\",\"caption\":\"Modern Jacket 2 - Caption text\",\"alt\":\"Modern Jacket 2\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-.jpg\",\"caption\":\"Modern Jacket 3 - Caption text\",\"alt\":\"Modern Jacket 3\"}]},\"price\":68,\"stars\":3,\"sale\":true},{\"name\":\"Ethnic Sweater\",\"link\":\"/detail-1\",\"slug\":\"ethnic-sweater\",\"category\":[{\"title\":\"Sweaters\",\"slug\":\"sweaters\"}],\"img\":{\"category\":[{\"img\":\"/img/product/serrah-galos-494279-unsplash.jpg\",\"alt\":\"product\"}],\"masonry\":[{\"img\":\"/img/product/serrah-galos-494279-unsplash.jpg\",\"alt\":\"product\"}],\"detail\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-2.jpg\",\"caption\":\"Modern Jacket 1 - Caption text\",\"alt\":\"Modern Jacket 1\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped.jpg\",\"caption\":\"Modern Jacket 2 - Caption text\",\"alt\":\"Modern Jacket 2\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-.jpg\",\"caption\":\"Modern Jacket 3 - Caption text\",\"alt\":\"Modern Jacket 3\"}]},\"price\":19,\"stars\":3,\"soldout\":true},{\"name\":\"Beige\",\"link\":\"/detail-1\",\"slug\":\"beige\",\"category\":[{\"title\":\"Tops & blouses\",\"slug\":\"tops-blouses\"}],\"img\":{\"category\":[{\"img\":\"/img/product/dmitriy-ilkevich-437760-unsplash.jpg\",\"alt\":\"product\"}],\"masonry\":[{\"img\":\"/img/product/dmitriy-ilkevich-437760-unsplash.jpg\",\"alt\":\"product\"}],\"detail\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-2.jpg\",\"caption\":\"Modern Jacket 1 - Caption text\",\"alt\":\"Modern Jacket 1\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped.jpg\",\"caption\":\"Modern Jacket 2 - Caption text\",\"alt\":\"Modern Jacket 2\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-.jpg\",\"caption\":\"Modern Jacket 3 - Caption text\",\"alt\":\"Modern Jacket 3\"}]},\"price\":69,\"stars\":3},{\"name\":\"Skull Tee\",\"link\":\"/detail-1\",\"slug\":\"skull-tee\",\"category\":[{\"title\":\"Tops & blouses\",\"slug\":\"tops-blouses\"}],\"img\":{\"category\":[{\"img\":\"/img/product/ian-dooley-347968-unsplash.jpg\",\"alt\":\"product\"}],\"masonry\":[{\"img\":\"/img/product/ian-dooley-347968-unsplash.jpg\",\"alt\":\"product\"}],\"detail\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-2.jpg\",\"caption\":\"Modern Jacket 1 - Caption text\",\"alt\":\"Modern Jacket 1\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped.jpg\",\"caption\":\"Modern Jacket 2 - Caption text\",\"alt\":\"Modern Jacket 2\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-.jpg\",\"caption\":\"Modern Jacket 3 - Caption text\",\"alt\":\"Modern Jacket 3\"}]},\"price\":33,\"stars\":3},{\"name\":\"Trucker jacket\",\"link\":\"/detail-1\",\"slug\":\"trucker-jacket\",\"category\":[{\"title\":\"Jackets\",\"slug\":\"jackets\"}],\"img\":{\"category\":[{\"img\":\"/img/product/alex-holyoake-571682-unsplash.jpg\",\"alt\":\"product\"}],\"masonry\":[{\"img\":\"/img/product/alex-holyoake-571682-unsplash-cropped.jpg\",\"alt\":\"product\"}],\"detail\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-2.jpg\",\"caption\":\"Modern Jacket 1 - Caption text\",\"alt\":\"Modern Jacket 1\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped.jpg\",\"caption\":\"Modern Jacket 2 - Caption text\",\"alt\":\"Modern Jacket 2\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-.jpg\",\"caption\":\"Modern Jacket 3 - Caption text\",\"alt\":\"Modern Jacket 3\"}]},\"price\":25,\"stars\":3},{\"name\":\"Blouse\",\"link\":\"/detail-1\",\"slug\":\"blouse\",\"category\":[{\"title\":\"Tops & blouses\",\"slug\":\"tops-blouses\"}],\"img\":{\"category\":[{\"img\":\"/img/product/ao-456813-unsplash.jpg\",\"alt\":\"product\"}],\"masonry\":[{\"img\":\"/img/product/ao-456813-unsplash.jpg\",\"alt\":\"product\"}],\"detail\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-2.jpg\",\"caption\":\"Modern Jacket 1 - Caption text\",\"alt\":\"Modern Jacket 1\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped.jpg\",\"caption\":\"Modern Jacket 2 - Caption text\",\"alt\":\"Modern Jacket 2\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-.jpg\",\"caption\":\"Modern Jacket 3 - Caption text\",\"alt\":\"Modern Jacket 3\"}]},\"price\":60,\"stars\":3},{\"name\":\"Shirt\",\"link\":\"/detail-1\",\"slug\":\"shirt\",\"category\":[{\"title\":\"Shirts\",\"slug\":\"shirts\"}],\"img\":{\"category\":[{\"img\":\"/img/product/kyle-loftus-592041-unsplash.jpg\",\"alt\":\"product\"}],\"masonry\":[{\"img\":\"/img/product/kyle-loftus-592041-unsplash.jpg\",\"alt\":\"product\"}],\"detail\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-2.jpg\",\"caption\":\"Modern Jacket 1 - Caption text\",\"alt\":\"Modern Jacket 1\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped.jpg\",\"caption\":\"Modern Jacket 2 - Caption text\",\"alt\":\"Modern Jacket 2\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-.jpg\",\"caption\":\"Modern Jacket 3 - Caption text\",\"alt\":\"Modern Jacket 3\"}]},\"price\":39,\"stars\":3}]");

/***/ }),

/***/ "kmIR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActiveLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("re7B");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("oL/c");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CustomerSidebar = props => {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: props.xl ? props.xl : "3",
    lg: props.lg ? props.lg : "4",
    className: "mb-5"
  }, __jsx("div", {
    className: "customer-sidebar card border-0"
  }, __jsx("div", {
    className: "customer-profile"
  }, __jsx("a", {
    className: "d-inline-block",
    href: "#"
  }, __jsx("img", {
    className: "img-fluid rounded-circle customer-image",
    src: "/img/photo/kyle-loftus-589739-unsplash-avatar.jpg",
    alt: "Customer Profile Image"
  })), __jsx("h5", null, "Julie Lescaut"), __jsx("p", {
    className: "text-muted text-sm mb-0"
  }, "Ostrava, Czech Republic")), __jsx("nav", {
    className: "list-group customer-nav"
  }, __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    activeClassName: "active",
    href: "/customer-orders"
  }, __jsx("a", {
    className: "list-group-item d-flex justify-content-between align-items-center"
  }, __jsx("span", null, __jsx("svg", {
    className: "svg-icon svg-icon-heavy mr-2"
  }, __jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#paper-bag-1"
  }, " ")), "Orders"), __jsx("div", {
    className: "badge badge-pill badge-dark font-weight-normal px-3"
  }, "5"))), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    activeClassName: "active",
    href: "/customer-account"
  }, __jsx("a", {
    className: "list-group-item d-flex justify-content-between align-items-center"
  }, __jsx("span", null, __jsx("svg", {
    className: "svg-icon svg-icon-heavy mr-2"
  }, __jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#male-user-1"
  }, " ")), "Profile"))), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    activeClassName: "active",
    href: "/customer-addresses"
  }, __jsx("a", {
    className: "list-group-item d-flex justify-content-between align-items-center"
  }, __jsx("span", null, __jsx("svg", {
    className: "svg-icon svg-icon-heavy mr-2"
  }, __jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#navigation-map-1"
  })), "Addresses"))), __jsx(_ActiveLink__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    activeClassName: "active",
    href: "/customer-login"
  }, __jsx("a", {
    className: "list-group-item d-flex justify-content-between align-items-center"
  }, __jsx("span", null, __jsx("svg", {
    className: "svg-icon svg-icon-heavy mr-2"
  }, __jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#exit-1"
  }, " ")), "Log out"))))));
};

/* harmony default export */ __webpack_exports__["a"] = (CustomerSidebar);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "ov1Q":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"Modern Jacket\",\"category\":\"Jackets and tops\",\"breadcrumbs\":[{\"name\":\"Home\",\"link\":\"/\"},{\"name\":\"Jackets and tops\",\"link\":\"/category\"},{\"name\":\"Modern Jacket\",\"active\":true}],\"price\":65,\"priceBefore\":90,\"stars\":4,\"reviewscount\":25,\"img\":{\"category\":[{\"img\":\"/img/product/0987188250_1_1_1.jpg\",\"alt\":\"product\"},{\"img\":\"/img/product/0987188250_2_1_1.jpg\",\"alt\":\"product\"}],\"masonry\":{\"img\":\"/img/product/serrah-galos-494312-unsplash-cropped.jpg\",\"alt\":\"product\"},\"detail\":[{\"img\":\"/img/photo/kyle-loftus-596319-detail-1.jpg\",\"caption\":\"Modern Jacket 1 - Caption text\",\"alt\":\"Modern Jacket 1\"},{\"img\":\"/img/photo/kyle-loftus-596319-detail-2.jpg\",\"caption\":\"Modern Jacket 2 - Caption text\",\"alt\":\"Modern Jacket 2\"},{\"img\":\"/img/photo/kyle-loftus-596319-detail-3.jpg\",\"caption\":\"Modern Jacket 3 - Caption text\",\"alt\":\"Modern Jacket 3\"},{\"img\":\"/img/photo/kyle-loftus-594535-unsplash-detail-3.jpg\",\"caption\":\"Modern Jacket 4 - Caption text\",\"alt\":\"Modern Jacket 4\"},{\"img\":\"/img/photo/kyle-loftus-594535-unsplash-detail-4.jpg\",\"caption\":\"Modern Jacket 5 - Caption text\",\"alt\":\"Modern Jacket 5\"}],\"detailVariant\":[{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-2.jpg\",\"caption\":\"Modern Jacket 1 - Caption text\",\"alt\":\"Modern Jacket 1\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped.jpg\",\"caption\":\"Modern Jacket 2 - Caption text\",\"alt\":\"Modern Jacket 2\"},{\"img\":\"/img/product/kyle-loftus-596319-unsplash-cropped-.jpg\",\"caption\":\"Modern Jacket 3 - Caption text\",\"alt\":\"Modern Jacket 3\"}]},\"description\":{\"short\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.\",\"long\":\"<h5>About</h5><p class='text-muted'>Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.</p><p class='text-muted'>He must have tried it a hundred times, shut his eyes so that he wouldn't have to look at the floundering legs, and only stopped when he began to feel a mild, dull pain there that he had never felt before.</p><h5>You will love</h5><ul class='text-muted'><li>He must have tried it a hundred times</li><li>shut his eyes so that he wouldn't have to look</li><li>at the floundering legs, and only stopped</li></ul>\",\"image\":\"/img/product/kyle-loftus-596319-unsplash-cropped.jpg\"},\"additionalinfo\":[{\"name\":\"Product #\",\"text\":\"Lorem ipsum dolor sit amet\"},{\"name\":\"Available packaging\",\"text\":\"LOLDuis aute irure dolor in reprehenderit\"},{\"name\":\"Weight\",\"text\":\"dolor sit amet\"},{\"name\":\"Sunt in culpa qui\",\"text\":\"Lorem ipsum dolor sit amet\"},{\"name\":\"Weight\",\"text\":\"dolor sit amet\"},{\"name\":\"Sunt in culpa qui\",\"text\":\"Lorem ipsum dolor sit amet\"},{\"name\":\"Product #\",\"text\":\"Lorem ipsum dolor sit amet\"},{\"name\":\"Available packaging\",\"text\":\"LOLDuis aute irure dolor in reprehenderit\"}],\"reviews\":[{\"author\":\"Han Solo\",\"date\":\"Dec 2018\",\"avatar\":\"/img/person-1.jpg\",\"stars\":5,\"text\":\"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections\"},{\"author\":\"Luke Skywalker\",\"date\":\"Dec 2018\",\"avatar\":\"/img/person-2.jpg\",\"stars\":4,\"text\":\"The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &quot;What's happened to me?&quot; he thought. It wasn't a dream.\"},{\"author\":\"Princess Leia\",\"date\":\"Dec 2018\",\"avatar\":\"/img/person-3.jpg\",\"stars\":3,\"text\":\"His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.\"},{\"author\":\"Jabba Hut\",\"date\":\"Dec 2018\",\"avatar\":\"/img/person-4.jpg\",\"stars\":5,\"text\":\"Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame.\"}],\"attributes\":[{\"name\":\"Size\",\"value\":\"Large\"},{\"name\":\"Colour\",\"value\":\"Green\"}],\"sizes\":[{\"value\":\"value_0\",\"label\":\"Small\"},{\"value\":\"value_1\",\"label\":\"Medium\"},{\"value\":\"value_2\",\"label\":\"Large\"}],\"types\":[{\"value\":\"value_0\",\"id\":\"material_0\",\"label\":\"Hoodie\"},{\"value\":\"value_1\",\"id\":\"material_1\",\"label\":\"College\"}],\"tags\":[{\"name\":\"Leisure\",\"link\":\"#\"},{\"name\":\"Elegant\",\"link\":\"#\"}]}");

/***/ }),

/***/ "p6Nx":
/***/ (function(module, exports) {



/***/ }),

/***/ "re7B":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    children,
    activeClassName
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "activeClassName"]);

  const {
    asPath
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  const child = react__WEBPACK_IMPORTED_MODULE_2__["Children"].only(children);
  const childClassName = child.props.className || "";
  const className = asPath === props.href ? `${childClassName} ${activeClassName}`.trim() : childClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, props, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(child, {
    className: className || null
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (ActiveLink);

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "vian":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CustomImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hLIj");
/* harmony import */ var _ModalQuickView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZQ0p");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const Product = (_ref) => {
  let {
    data,
    masonry
  } = _ref,
      props = _objectWithoutProperties(_ref, ["data", "masonry"]);

  const {
    0: quickView,
    1: setQuickView
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let loading = "lazy";

  if (props.loading) {
    loading = props.loading;
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "product"
  }, __jsx("div", {
    className: "product-image"
  }, data.new && __jsx("div", {
    className: "ribbon ribbon-info"
  }, "Fresh"), data.sale && __jsx("div", {
    className: "ribbon ribbon-primary"
  }, "Sale"), data.soldout && __jsx("div", {
    className: "ribbon ribbon-danger"
  }, "Sold out"), typeof data.img === "object" && (masonry ? __jsx("img", {
    className: "img-fluid",
    src: data.img.masonry[0].img,
    alt: data.img.masonry[0].alt
  }) : __jsx(_CustomImage__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    className: "img-fluid",
    src: data.img.category[0].img,
    alt: data.img.category[0].alt,
    width: 530,
    height: 795,
    sizes: "(max-width: 576px) 100vw, 530px",
    loading: "eager"
  })), __jsx("div", {
    className: "product-hover-overlay"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: data.link
  }, __jsx("a", {
    className: "product-hover-overlay-link"
  })), __jsx("div", {
    className: "product-hover-overlay-buttons"
  }, !props.onlyViewButton && __jsx("a", {
    className: "btn btn-outline-dark btn-product-left",
    href: "#"
  }, __jsx("i", {
    className: "fa fa-shopping-cart"
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: data.link
  }, __jsx("a", {
    className: "btn btn-dark btn-buy"
  }, __jsx("i", {
    className: "fa-search fa"
  }), __jsx("span", {
    className: "btn-buy-label ml-2"
  }, "View"))), !props.onlyViewButton && __jsx("a", {
    className: "btn btn-outline-dark btn-product-right",
    onClick: () => setQuickView(!quickView)
  }, __jsx("i", {
    className: "fa fa-expand-arrows-alt"
  }))))), __jsx("div", {
    className: "py-2"
  }, data.category && __jsx("p", {
    className: "text-muted text-sm mb-1"
  }, data.category[0].title), __jsx("h3", {
    className: "h6 text-uppercase mb-1"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: data.link
  }, __jsx("a", {
    className: "text-dark"
  }, data.name))), __jsx("span", {
    className: "text-muted"
  }, "$", data.price.toFixed(2)))), props.showQuickView !== false && __jsx(_ModalQuickView__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    isOpen: quickView,
    toggle: () => setQuickView(),
    product: data
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Product);

/***/ }),

/***/ "vtRj":
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "wgd4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ShopHeader = props => {
  return __jsx("header", {
    className: "product-grid-header"
  }, __jsx("div", {
    className: "mr-3 mb-3"
  }, "Showing ", __jsx("strong", null, "1-12 "), "of ", __jsx("strong", null, "158 "), "products"), __jsx("div", {
    className: "mr-3 mb-3"
  }, __jsx("span", {
    className: "mr-2"
  }, "Show"), __jsx("a", {
    className: "product-grid-header-show active",
    href: "#"
  }, "12", " "), __jsx("a", {
    className: "product-grid-header-show ",
    href: "#"
  }, "24", " "), __jsx("a", {
    className: "product-grid-header-show ",
    href: "#"
  }, "All", " ")), __jsx("div", {
    className: "mb-3 d-flex align-items-center"
  }, __jsx("span", {
    className: "d-inline-block mr-1"
  }, "Sort by"), __jsx("select", {
    className: "custom-select w-auto border-0"
  }, __jsx("option", {
    value: "orderby_0"
  }, "Default"), __jsx("option", {
    value: "orderby_1"
  }, "Popularity"), __jsx("option", {
    value: "orderby_2"
  }, "Rating"), __jsx("option", {
    value: "orderby_3"
  }, "Newest first"))));
};

/* harmony default export */ __webpack_exports__["a"] = (ShopHeader);

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ })

/******/ });