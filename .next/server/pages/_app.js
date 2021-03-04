module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "0ghd":
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__("cDcd");

function Logo (props) {
    return React.createElement("svg",props,[React.createElement("path",{"className":"navbar-brand-svg-text","d":"M5.72266 18.1562C4.88281 18.1562 4.08529 18.0033 3.33008 17.6973C2.58138 17.3913 1.94661 16.9355 1.42578 16.3301C0.911458 15.7181 0.582682 14.9759 0.439453 14.1035L2.90039 13.4785C2.98503 14.2988 3.28776 14.9173 3.80859 15.334C4.33594 15.7507 4.98698 15.959 5.76172 15.959C6.23698 15.959 6.64714 15.8841 6.99219 15.7344C7.33724 15.5781 7.59766 15.3665 7.77344 15.0996C7.94922 14.8327 8.03711 14.5332 8.03711 14.2012C8.03711 13.804 7.91341 13.4655 7.66602 13.1855C7.42513 12.9056 7.1224 12.6745 6.75781 12.4922C6.39323 12.3099 5.89193 12.0918 5.25391 11.8379C4.42057 11.5059 3.74674 11.1999 3.23242 10.9199C2.7181 10.6335 2.27539 10.2363 1.9043 9.72852C1.53971 9.2207 1.35742 8.57943 1.35742 7.80469C1.35742 7.01693 1.54948 6.33659 1.93359 5.76367C2.32422 5.18424 2.84505 4.74479 3.49609 4.44531C4.15365 4.14583 4.8763 3.99609 5.66406 3.99609C6.54948 3.99609 7.35677 4.19792 8.08594 4.60156C8.8151 4.9987 9.40755 5.60417 9.86328 6.41797L7.80273 7.67773C7.56185 7.20898 7.24609 6.84766 6.85547 6.59375C6.46484 6.33333 6.03841 6.20312 5.57617 6.20312C5.25065 6.20312 4.95443 6.26497 4.6875 6.38867C4.42708 6.51237 4.21875 6.68815 4.0625 6.91602C3.91276 7.13737 3.83789 7.39128 3.83789 7.67773C3.83789 8.0293 3.95182 8.32878 4.17969 8.57617C4.40755 8.82357 4.69401 9.0319 5.03906 9.20117C5.39062 9.37044 5.86914 9.57227 6.47461 9.80664C7.33398 10.1387 8.0306 10.4512 8.56445 10.7441C9.09831 11.0371 9.55729 11.4473 9.94141 11.9746C10.3255 12.502 10.5176 13.1693 10.5176 13.9766C10.5176 14.8229 10.3027 15.5618 9.87305 16.1934C9.44987 16.8249 8.8737 17.3099 8.14453 17.6484C7.41536 17.987 6.60807 18.1562 5.72266 18.1562ZM16.8906 4.20117H26.0703V6.47656H19.3711V9.96289H25.6113V12.2383H19.3711V15.6562H26.0703V18H16.8906V4.20117ZM33.0586 4.20117H35.5391V15.6562H41.4375V18H33.0586V4.20117ZM47.4492 4.20117H49.9297V15.6562H55.8281V18H47.4492V4.20117Z","transform":"translate(0 -3)","fill":"#212529","key":0}),React.createElement("path",{"className":"text-primary","d":"M62.0254 15.4219H64.418V18H62.0254V15.4219Z","transform":"translate(0 -3)","fill":"#9A6EE2","key":1})]);
}

Logo.defaultProps = {"className":"navbar-brand-svg","viewBox":"0 0 65 16","width":"85","height":"20","fill":"none"};

module.exports = Logo;

Logo.default = Logo;


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


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

/***/ "8vUY":
/***/ (function(module, exports) {



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

/***/ "Ft8s":
/***/ (function(module) {

module.exports = JSON.parse("[{\"img\":\"/img/photo/kyle-loftus-589739-unsplash-avatar.jpg\",\"type\":\"avatar\",\"title\":\"Julie Lescaut\",\"dropdown\":[{\"title\":\"Orders\",\"link\":\"/customer-orders\"},{\"title\":\"Order detail\",\"link\":\"/customer-order\"},{\"title\":\"Addresses\",\"link\":\"/customer-addresses\"},{\"title\":\"Profile\",\"link\":\"/customer-account\"},{\"divider\":true},{\"title\":\"Sign out\",\"link\":\"/login\"}]}]");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "GvLQ":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "nprogress"
var external_nprogress_ = __webpack_require__("GvLQ");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./src/components/NextNProgress.js

var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 *
 * NProgress
 *
 */




// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class NextNProgress_NextNProgress extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "timer", null);

    _defineProperty(this, "routeChangeStart", () => {
      external_nprogress_default.a.set(this.props.startPosition);
      external_nprogress_default.a.start();
    });

    _defineProperty(this, "routeChangeEnd", () => {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        external_nprogress_default.a.done(true);
      }, this.props.stopDelayMs);
    });
  }

  render() {
    const {
      color,
      height
    } = this.props;
    return __jsx(style_default.a, {
      id: "1702795343",
      dynamic: [color, height, color, color, color, color]
    }, ["#nprogress{pointer-events:none;}", `#nprogress .bar{background:${color};position:fixed;z-index:9999;top:0;left:0;width:100%;height:${height}px;}`, `#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px ${color},0 0 5px ${color};opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}`, "#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}", `#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:${color};border-left-color:${color};border-radius:50%;-webkit-animation:nprogresss-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}`, ".nprogress-custom-parent{overflow:hidden;position:relative;}", ".nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}", "@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}", "@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]);
  }

  componentDidMount() {
    const {
      options
    } = this.props;

    if (options) {
      external_nprogress_default.a.configure(options);
    }

    router_default.a.events.on("routeChangeStart", this.routeChangeStart);
    router_default.a.events.on("routeChangeComplete", this.routeChangeEnd);
    router_default.a.events.on("routeChangeError", this.routeChangeEnd);
  }

}

_defineProperty(NextNProgress_NextNProgress, "defaultProps", {
  color: "#3494E6",
  startPosition: 0.3,
  stopDelayMs: 200,
  height: 3
});

/* harmony default export */ var components_NextNProgress = (NextNProgress_NextNProgress);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./src/hooks/UseWindowSize.js
var UseWindowSize = __webpack_require__("La1E");

// EXTERNAL MODULE: external "@react-hook/window-scroll"
var window_scroll_ = __webpack_require__("iA6b");
var window_scroll_default = /*#__PURE__*/__webpack_require__.n(window_scroll_);

// EXTERNAL MODULE: external "@react-hook/size"
var size_ = __webpack_require__("YV2c");
var size_default = /*#__PURE__*/__webpack_require__.n(size_);

// EXTERNAL MODULE: ./public/svg/logo.svg
var logo = __webpack_require__("0ghd");
var logo_default = /*#__PURE__*/__webpack_require__.n(logo);

// EXTERNAL MODULE: ./src/components/ActiveLink.js
var ActiveLink = __webpack_require__("re7B");

// EXTERNAL MODULE: ./src/components/CartOverviewDropdown.js + 1 modules
var CartOverviewDropdown = __webpack_require__("PfhB");

// EXTERNAL MODULE: ./src/data/menu.json
var menu = __webpack_require__("TZgs");

// EXTERNAL MODULE: ./src/data/user-menu.json
var user_menu = __webpack_require__("Ft8s");

// CONCATENATED MODULE: ./src/components/Header.js
var Header_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Header_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const Header = props => {
  const {
    0: collapsed,
    1: setCollapsed
  } = Object(external_react_["useState"])(false);
  const {
    0: dropdownOpen,
    1: setDropdownOpen
  } = Object(external_react_["useState"])({});
  const {
    0: searchToggle,
    1: setSearchToggle
  } = Object(external_react_["useState"])(false);
  const {
    0: searchFocus,
    1: setSearchFocus
  } = Object(external_react_["useState"])(false);
  const {
    0: parentName,
    1: setParentName
  } = Object(external_react_["useState"])(false);
  const {
    0: additionalNavClasses,
    1: setAdditionalNavClasses
  } = Object(external_react_["useState"])("");
  const size = Object(UseWindowSize["a" /* default */])();
  const scrollY = window_scroll_default()();
  const navbarRef = Object(external_react_["useRef"])(null);
  const topbarRef = Object(external_react_["useRef"])(null);
  const [topbarWidth, topbarHeight] = size_default()(topbarRef);
  const [navbarWidth, navbarHeight] = size_default()(navbarRef);

  const onFocus = () => setSearchFocus(!searchFocus);

  const toggleDropdown = name => {
    setDropdownOpen(_objectSpread(_objectSpread({}, dropdownOpen), {}, {
      [name]: !dropdownOpen[name]
    }));
  };

  const onLinkClick = parent => {
    size.width < 991 && setCollapsed(!collapsed);
    setParentName(parent);
  };

  const makeNavbarSticky = () => {
    if (props.nav.sticky !== false) {
      if (scrollY > topbarHeight) {
        setAdditionalNavClasses("fixed-top");
        navbarHeight > 0 && props.headerAbsolute !== true && props.setPaddingTop(navbarHeight);
      } else {
        setAdditionalNavClasses("");
        props.setPaddingTop(0);
      }
    } else {
      setAdditionalNavClasses("");
      props.setPaddingTop(0);
    }
  };

  Object(external_react_["useEffect"])(() => {
    makeNavbarSticky();
  }, [scrollY, topbarHeight]); // highlight not only active dropdown item, but also its parent, i.e. dropdown toggle

  const highlightDropdownParent = () => {
    menu.map(item => {
      item.dropdown && item.dropdown.map(dropdownLink => {
        dropdownLink.link && dropdownLink.link === router_default.a.route && setParentName(item.title);
        dropdownLink.links && dropdownLink.links.map(link => link.link === router_default.a.route && setParentName(item.title));
      });
      item.megamenu && item.megamenu.map(megamenuColumn => megamenuColumn.map(megamenuBlock => megamenuBlock.links.map(dropdownLink => {
        if (dropdownLink.link === router_default.a.route) {
          dropdownLink.parent ? setParentName(dropdownLink.parent) : setParentName(item.title);
        }
      })));
      item.link === router_default.a.route && setParentName(item.title);
    });
  };

  Object(external_react_["useEffect"])(highlightDropdownParent, []);
  return Header_jsx("header", {
    className: `header ${props.headerClasses ? props.headerClasses : ""} ${props.headerAbsolute ? "header-absolute" : ""}`
  }, !props.hideTopbar && Header_jsx("div", {
    className: "top-bar",
    ref: topbarRef
  }, Header_jsx(external_reactstrap_["Container"], {
    fluid: true
  }, Header_jsx(external_reactstrap_["Row"], {
    className: "d-flex align-items-center"
  }, Header_jsx(external_reactstrap_["Col"], {
    sm: "7",
    className: "d-none d-sm-block"
  }, Header_jsx("ul", {
    className: "list-inline mb-0"
  }, Header_jsx("li", {
    className: "list-inline-item pr-3 mr-0"
  }, Header_jsx("svg", {
    className: "svg-icon mr-2"
  }, Header_jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#calls-1"
  })), "+1 917 201 8353"), Header_jsx("li", {
    className: "list-inline-item px-3 border-left d-none d-lg-inline-block"
  }, "Free shipping on orders over $300"))), Header_jsx(external_reactstrap_["Col"], {
    sm: "5",
    className: "d-flex justify-content-end"
  }, Header_jsx(external_reactstrap_["Dropdown"], {
    className: "border-right px-3",
    key: "language_dropdown",
    isOpen: dropdownOpen["language_dropdown"],
    toggle: () => toggleDropdown("language_dropdown")
  }, Header_jsx(external_reactstrap_["DropdownToggle"], {
    caret: true,
    tag: "a",
    href: "#",
    className: "topbar-link",
    id: "langsDropdown"
  }, Header_jsx("img", {
    className: "topbar-flag",
    src: "/svg/united-kingdom.svg",
    alt: "english"
  }), "English"), Header_jsx(external_reactstrap_["DropdownMenu"], {
    right: true,
    "aria-labelledby": "langsDropdown"
  }, Header_jsx(external_reactstrap_["DropdownItem"], {
    className: "text-sm"
  }, Header_jsx("img", {
    className: "topbar-flag",
    src: "/svg/germany.svg",
    alt: "german"
  }), "German"), Header_jsx(external_reactstrap_["DropdownItem"], {
    className: "text-sm"
  }, Header_jsx("img", {
    className: "topbar-flag",
    src: "/svg/france.svg",
    alt: "french"
  }), "French"))), Header_jsx(external_reactstrap_["Dropdown"], {
    className: "pl-3 ml-0",
    key: "currency_dropdown",
    isOpen: dropdownOpen["currency_dropdown"],
    toggle: () => toggleDropdown("currency_dropdown")
  }, Header_jsx(external_reactstrap_["DropdownToggle"], {
    caret: true,
    tag: "a",
    href: "#",
    className: "topbar-link",
    id: "currencyDropdown"
  }, "USD"), Header_jsx(external_reactstrap_["DropdownMenu"], {
    right: true,
    "aria-labelledby": "currencyDropdown"
  }, Header_jsx(external_reactstrap_["DropdownItem"], {
    className: "text-sm"
  }, "EUR"), Header_jsx(external_reactstrap_["DropdownItem"], {
    className: "text-sm"
  }, "GBP"))))))), Header_jsx("div", {
    ref: navbarRef
  }, Header_jsx(external_reactstrap_["Navbar"], {
    color: props.nav.color ? Object.values(dropdownOpen).some(dropdown => dropdown) || collapsed ? "white" : props.nav.color : "white",
    light: props.nav.light || Object.values(dropdownOpen).some(dropdown => dropdown) || collapsed,
    dark: props.nav.dark && !Object.values(dropdownOpen).some(dropdown => dropdown) && !collapsed,
    fixed: props.nav.fixed ? props.nav.fixed : "",
    expand: "lg",
    className: ` ${props.nav.classes ? props.nav.classes : "navbar-sticky bg-fixed-white"} ${additionalNavClasses ? additionalNavClasses : ""}`
  }, Header_jsx(external_reactstrap_["Container"], {
    fluid: true
  }, Header_jsx(link_default.a, {
    href: "/",
    passHref: true
  }, Header_jsx("a", {
    className: "py-1 navbar-brand"
  }, Header_jsx(logo_default.a, null))), Header_jsx(external_reactstrap_["NavbarToggler"], {
    onClick: () => setCollapsed(!collapsed),
    className: "navbar-toggler-right"
  }, Header_jsx("i", {
    className: "fa fa-bars"
  })), Header_jsx(external_reactstrap_["Collapse"], {
    isOpen: collapsed,
    navbar: true
  }, Header_jsx(external_reactstrap_["Nav"], {
    navbar: true,
    className: "mx-auto"
  }, menu && menu.map(item => item.dropdown || item.megamenu ? // show entire menu to unlogged user or hide items that have hideToLoggedUser set to true
  !props.loggedUser || props.loggedUser && !item.hideToLoggedUser ? Header_jsx(external_reactstrap_["Dropdown"], {
    nav: true,
    inNavbar: true,
    key: item.title,
    className: item.position ? `position-${item.position}` : ``,
    isOpen: dropdownOpen[item.title],
    toggle: () => toggleDropdown(item.title)
  }, Header_jsx(external_reactstrap_["DropdownToggle"], {
    nav: true,
    caret: true,
    className: parentName === item.title ? "active" : ""
  }, item.title), Header_jsx(external_reactstrap_["DropdownMenu"], {
    className: ` ${item.megamenu ? "megamenu py-lg-0" : ""}`
  }, item.dropdown && item.dropdown.map(dropdownItem => dropdownItem.links ? Header_jsx(external_react_default.a.Fragment, {
    key: dropdownItem.title
  }, dropdownItem.divider && Header_jsx(external_reactstrap_["DropdownItem"], {
    divider: true
  }), Header_jsx("h6", {
    className: "dropdown-header font-weight-normal"
  }, dropdownItem.title), dropdownItem.links.map(link => Header_jsx(ActiveLink["a" /* default */], {
    key: link.title,
    activeClassName: "active",
    href: link.link,
    passHref: true
  }, Header_jsx(external_reactstrap_["DropdownItem"], {
    onClick: () => onLinkClick(item.title)
  }, link.title, link.new && Header_jsx(external_reactstrap_["Badge"], {
    color: "warning",
    className: "ml-1 mt-n1"
  }, "New"))))) : Header_jsx(ActiveLink["a" /* default */], {
    key: dropdownItem.title,
    activeClassName: "active",
    href: dropdownItem.link,
    passHref: true
  }, Header_jsx(external_reactstrap_["DropdownItem"], {
    onClick: () => onLinkClick(item.title)
  }, dropdownItem.title, dropdownItem.new && Header_jsx(external_reactstrap_["Badge"], {
    color: "warning",
    className: "ml-1 mt-n1"
  }, "New")))), item.megamenu && Header_jsx(external_reactstrap_["Row"], null, Header_jsx(external_reactstrap_["Col"], {
    lg: "9"
  }, Header_jsx(external_reactstrap_["Row"], {
    className: "p-3 pr-lg-0 pl-lg-5 pt-lg-5"
  }, item.megamenu.map((megamenuItem, index) => Header_jsx(external_reactstrap_["Col"], {
    key: index,
    lg: "3"
  }, megamenuItem.map((block, index) => Header_jsx(external_react_default.a.Fragment, {
    key: index
  }, Header_jsx("h6", {
    className: "text-uppercase"
  }, block.title), Header_jsx("ul", {
    className: "megamenu-list list-unstyled"
  }, block.links.map((link, index) => Header_jsx("li", {
    key: index,
    className: "megamenu-list-item"
  }, Header_jsx(ActiveLink["a" /* default */], {
    activeClassName: "active",
    href: link.link,
    as: link.as,
    passHref: true
  }, Header_jsx(external_reactstrap_["DropdownItem"], {
    className: "megamenu-list-link",
    onClick: () => link.parent ? onLinkClick(link.parent) : onLinkClick(item.title)
  }, link.title, link.new && Header_jsx(external_reactstrap_["Badge"], {
    color: "warning",
    className: "ml-1 mt-n1"
  }, "New"))))))))))), item.services && Header_jsx(external_reactstrap_["Row"], {
    className: "megamenu-services d-none d-lg-flex pl-lg-5"
  }, item.services.map(service => Header_jsx(external_reactstrap_["Col"], {
    key: service.title,
    xl: "3",
    lg: "6",
    className: "d-flex"
  }, Header_jsx("div", {
    className: "megamenu-services-item"
  }, Header_jsx("svg", {
    className: "svg-icon megamenu-services-icon"
  }, Header_jsx("use", {
    xlinkHref: service.icon
  })), Header_jsx("div", null, Header_jsx("h6", {
    className: "text-uppercase"
  }, service.title), Header_jsx("p", {
    className: "mb-0 text-muted text-sm"
  }, service.content))))))), item.image && Header_jsx(external_reactstrap_["Col"], {
    lg: "3",
    className: "d-none d-lg-block"
  }, Header_jsx("img", {
    src: item.image,
    alt: "",
    className: "bg-image"
  }))))) : "" : props.loggedUser && !item.hideToLoggedUser || !props.loggedUser ? Header_jsx(external_reactstrap_["NavItem"], {
    key: item.title,
    className: item.button ? "mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block" : ""
  }, item.button ? item.showToLoggedUser !== false && Header_jsx(ActiveLink["a" /* default */], {
    activeClassName: "active",
    href: item.link
  }, Header_jsx("a", {
    className: "btn btn-primary",
    onClick: () => onLinkClick(item.title)
  }, item.title)) : Header_jsx(ActiveLink["a" /* default */], {
    activeClassName: "active",
    href: item.link,
    passHref: true
  }, Header_jsx(external_reactstrap_["NavLink"], {
    onClick: () => onLinkClick(item.title)
  }, item.title))) : "")), Header_jsx("div", {
    className: "d-flex align-items-center justify-content-between justify-content-lg-end mt-1 mb-2 my-lg-0"
  }, Header_jsx("div", {
    className: "nav-item navbar-icon-link",
    "data-toggle": "search",
    onClick: () => setSearchToggle(!searchToggle)
  }, Header_jsx("svg", {
    className: "svg-icon"
  }, Header_jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#search-1"
  }))), props.loggedUser ? user_menu.map(item => Header_jsx(external_reactstrap_["Dropdown"], {
    nav: true,
    inNavbar: true,
    key: item.title,
    tag: "div",
    className: item.type === "avatar" ? "navbar-icon-link mt-n1 py-0" : "",
    isOpen: dropdownOpen[item.title],
    toggle: () => toggleDropdown(item.title)
  }, Header_jsx(external_reactstrap_["DropdownToggle"], {
    nav: true,
    style: item.type === "avatar" && {
      padding: 0
    }
  }, item.type === "avatar" ? Header_jsx("img", {
    src: item.img,
    alt: item.title,
    className: "avatar avatar-sm avatar-border-white"
  }) : item.title), Header_jsx(external_reactstrap_["DropdownMenu"], {
    right: true
  }, item.dropdown && item.dropdown.map((dropdownItem, dropdownIndex) => dropdownItem.divider ? Header_jsx(external_reactstrap_["DropdownItem"], {
    key: dropdownIndex,
    divider: true
  }) : Header_jsx(ActiveLink["a" /* default */], {
    key: dropdownIndex,
    activeClassName: "active",
    href: dropdownItem.link,
    passHref: true
  }, Header_jsx(external_reactstrap_["DropdownItem"], {
    onClick: () => onLinkClick(item.title)
  }, dropdownItem.title)))))) : Header_jsx("div", {
    className: "nav-item"
  }, Header_jsx(link_default.a, {
    href: "/customer-login"
  }, Header_jsx("a", {
    className: "navbar-icon-link"
  }, Header_jsx("svg", {
    className: "svg-icon"
  }, Header_jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#male-user-1"
  })), Header_jsx("span", {
    className: "text-sm ml-2 ml-lg-0 text-uppercase text-sm font-weight-bold d-none d-sm-inline d-lg-none"
  }, "Log in")))), Header_jsx(CartOverviewDropdown["a" /* default */], null)))))), searchToggle && Header_jsx("div", {
    className: "search-area-wrapper",
    style: {
      display: "block"
    }
  }, Header_jsx("div", {
    className: "search-area d-flex align-items-center justify-content-center"
  }, Header_jsx("div", {
    className: "close-btn",
    onClick: () => setSearchToggle(!searchToggle)
  }, Header_jsx("svg", {
    className: "svg-icon svg-icon-light w-3rem h-3rem"
  }, Header_jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#close-1"
  }, " "))), Header_jsx("form", {
    className: "search-area-form",
    action: "#"
  }, Header_jsx("div", {
    className: "form-group position-relative"
  }, Header_jsx("input", {
    className: "search-area-input",
    type: "search",
    name: "search",
    id: "search",
    autoFocus: true,
    placeholder: "What are you looking for?"
  }), Header_jsx("button", {
    className: "search-area-button",
    type: "submit"
  }, Header_jsx("svg", {
    className: "svg-icon"
  }, Header_jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#search-1"
  }))))))));
};

/* harmony default export */ var components_Header = (Header);
// EXTERNAL MODULE: ./src/components/ServicesBlock.js
var ServicesBlock = __webpack_require__("LTeY");

// CONCATENATED MODULE: ./src/components/Footer.js
var Footer_jsx = external_react_default.a.createElement;



const Footer = () => {
  return Footer_jsx("footer", {
    className: "main-footer"
  }, Footer_jsx(ServicesBlock["a" /* default */], null), Footer_jsx("div", {
    className: "py-6 bg-gray-300 text-muted"
  }, Footer_jsx("div", {
    className: "container"
  }, Footer_jsx("div", {
    className: "row"
  }, Footer_jsx("div", {
    className: "col-lg-4 mb-5 mb-lg-0"
  }, Footer_jsx("div", {
    className: "font-weight-bold text-uppercase text-lg text-dark mb-3"
  }, "Sell", Footer_jsx("span", {
    className: "text-primary"
  }, ".")), Footer_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing."), Footer_jsx("ul", {
    className: "list-inline"
  }, Footer_jsx("li", {
    className: "list-inline-item"
  }, Footer_jsx("a", {
    className: "text-muted text-hover-primary",
    href: "#",
    target: "_blank",
    title: "twitter"
  }, Footer_jsx("i", {
    className: "fab fa-twitter"
  }))), Footer_jsx("li", {
    className: "list-inline-item"
  }, Footer_jsx("a", {
    className: "text-muted text-hover-primary",
    href: "#",
    target: "_blank",
    title: "facebook"
  }, Footer_jsx("i", {
    className: "fab fa-facebook"
  }))), Footer_jsx("li", {
    className: "list-inline-item"
  }, Footer_jsx("a", {
    className: "text-muted text-hover-primary",
    href: "#",
    target: "_blank",
    title: "instagram"
  }, Footer_jsx("i", {
    className: "fab fa-instagram"
  }))), Footer_jsx("li", {
    className: "list-inline-item"
  }, Footer_jsx("a", {
    className: "text-muted text-hover-primary",
    href: "#",
    target: "_blank",
    title: "pinterest"
  }, Footer_jsx("i", {
    className: "fab fa-pinterest"
  }))), Footer_jsx("li", {
    className: "list-inline-item"
  }, Footer_jsx("a", {
    className: "text-muted text-hover-primary",
    href: "#",
    target: "_blank",
    title: "vimeo"
  }, Footer_jsx("i", {
    className: "fab fa-vimeo"
  }))))), Footer_jsx("div", {
    className: "col-lg-2 col-md-6 mb-5 mb-lg-0"
  }, Footer_jsx("h6", {
    className: "text-uppercase text-dark mb-3"
  }, "Shop"), Footer_jsx("ul", {
    className: "list-unstyled"
  }, Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-muted",
    href: "#"
  }, "For Women")), Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-muted",
    href: "#"
  }, "For Men")), Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-muted",
    href: "#"
  }, "Stores")), Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-muted",
    href: "#"
  }, "Our Blog")), Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-muted",
    href: "#"
  }, "Shop")))), Footer_jsx("div", {
    className: "col-lg-2 col-md-6 mb-5 mb-lg-0"
  }, Footer_jsx("h6", {
    className: "text-uppercase text-dark mb-3"
  }, "Company"), Footer_jsx("ul", {
    className: "list-unstyled"
  }, Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-muted",
    href: "#"
  }, "Login")), Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-muted",
    href: "#"
  }, "Register")), Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-muted",
    href: "#"
  }, "Wishlist")), Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-muted",
    href: "#"
  }, "Our Products")), Footer_jsx("li", null, Footer_jsx("a", {
    className: "text-muted",
    href: "#"
  }, "Checkouts")))), Footer_jsx("div", {
    className: "col-lg-4"
  }, Footer_jsx("h6", {
    className: "text-uppercase text-dark mb-3"
  }, "Daily Offers & Discounts"), Footer_jsx("p", {
    className: "mb-3"
  }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At itaque temporibus."), Footer_jsx("form", {
    action: "#",
    id: "newsletter-form"
  }, Footer_jsx("div", {
    className: "input-group mb-3"
  }, Footer_jsx("input", {
    className: "form-control bg-transparent border-secondary border-right-0",
    type: "email",
    placeholder: "Your Email Address",
    "aria-label": "Your Email Address"
  }), Footer_jsx("div", {
    className: "input-group-append"
  }, Footer_jsx("button", {
    className: "btn btn-outline-secondary border-left-0",
    type: "submit"
  }, Footer_jsx("i", {
    className: "fa fa-paper-plane text-lg text-dark"
  }))))))))), Footer_jsx("div", {
    className: "py-4 font-weight-light bg-gray-800 text-gray-300"
  }, Footer_jsx("div", {
    className: "container"
  }, Footer_jsx("div", {
    className: "row align-items-center"
  }, Footer_jsx("div", {
    className: "col-md-6 text-center text-md-left"
  }, Footer_jsx("p", {
    className: "mb-md-0"
  }, "\xA9 2021 Joy Moon Crafts. All rights reserved. ", Footer_jsx("br", null), " Designed & Developed by ", Footer_jsx("a", {
    href: "https://www.orpyxis.com",
    target: "_blank"
  }, "Orpyxis Technologies"))), Footer_jsx("div", {
    className: "col-md-6"
  }, Footer_jsx("ul", {
    className: "list-inline mb-0 mt-2 mt-md-0 text-center text-md-right"
  }, Footer_jsx("li", {
    className: "list-inline-item"
  }, Footer_jsx("img", {
    className: "w-2rem",
    src: "/svg/visa.svg",
    alt: "..."
  })), Footer_jsx("li", {
    className: "list-inline-item"
  }, Footer_jsx("img", {
    className: "w-2rem",
    src: "/svg/mastercard.svg",
    alt: "..."
  })), Footer_jsx("li", {
    className: "list-inline-item"
  }, Footer_jsx("img", {
    className: "w-2rem",
    src: "/svg/paypal.svg",
    alt: "..."
  })), Footer_jsx("li", {
    className: "list-inline-item"
  }, Footer_jsx("img", {
    className: "w-2rem",
    src: "/svg/western-union.svg",
    alt: "..."
  }))))))));
};

/* harmony default export */ var components_Footer = (Footer);
// EXTERNAL MODULE: ./src/components/FormContext.js
var FormContext = __webpack_require__("eXPT");

// CONCATENATED MODULE: ./src/components/Layout.js

var Layout_jsx = external_react_default.a.createElement;







const Layout = pageProps => {
  const {
    0: paddingTop,
    1: setPaddingTop
  } = Object(external_react_["useState"])(0);
  const headerProps = {
    nav: {
      classes: pageProps.nav && pageProps.nav.classes,
      fixed: pageProps.nav && pageProps.nav.fixed,
      color: pageProps.nav && pageProps.nav.color,
      light: pageProps.nav && pageProps.nav.light,
      dark: pageProps.nav && pageProps.nav.dark,
      sticky: pageProps.nav && pageProps.nav.sticky
    },
    loggedUser: pageProps.loggedUser,
    headerClasses: pageProps.headerClasses,
    headerAbsolute: pageProps.headerAbsolute,
    hideTopbar: pageProps.hideTopbar,
    setPaddingTop: event => setPaddingTop(event)
  };
  return Layout_jsx("div", {
    style: {
      paddingTop: pageProps.noPaddingTop ? "0" : paddingTop
    },
    className: pageProps.className
  }, Layout_jsx(head_default.a, null, Layout_jsx("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap"
  }), Layout_jsx("link", {
    rel: "icon",
    href: "/img/favicon.png"
  }), Layout_jsx("link", {
    href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css",
    rel: "stylesheet"
  }), Layout_jsx("title", null, pageProps.title, " - Joy Moon Crafts")), Layout_jsx(components_NextNProgress, {
    color: "#3494E6",
    options: {
      showSpinner: false
    }
  }), !pageProps.hideHeader && Layout_jsx(components_Header, headerProps), Layout_jsx(FormContext["b" /* FormProvider */], null, Layout_jsx("main", null, pageProps.children)), !pageProps.hideFooter && Layout_jsx(components_Footer, null));
};

/* harmony default export */ var components_Layout = (Layout);
// EXTERNAL MODULE: ./public/fonts/hkgrotesk/stylesheet.css
var stylesheet = __webpack_require__("ZOuJ");

// EXTERNAL MODULE: ./src/scss/style.default.scss
var scss_style_default = __webpack_require__("8vUY");

// EXTERNAL MODULE: ./node_modules/react-image-lightbox/style.css
var style = __webpack_require__("Y9L4");

// CONCATENATED MODULE: ./src/pages/_app.js

var _app_jsx = external_react_default.a.createElement;





const App = ({
  Component,
  pageProps
}) => {
  return _app_jsx(components_Layout, pageProps, _app_jsx(Component, pageProps));
}; // This default export is required in a new `pages/_app.js` file.


/* harmony default export */ var _app = __webpack_exports__["default"] = (App);

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

/***/ "La1E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useWindowSize; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useWindowSize() {
  const isClient = false;

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const {
    0: windowSize,
    1: setWindowSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getSize);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

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

/***/ "PfhB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CartDropdown; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/components/CartOverviewItem.js

var __jsx = external_react_default.a.createElement;


const CartOverviewItem = props => {
  const item = props.item;
  return __jsx("div", {
    className: "navbar-cart-product"
  }, __jsx("div", {
    className: "d-flex align-items-center"
  }, __jsx(link_default.a, {
    href: item.link
  }, __jsx("a", null, __jsx("img", {
    className: "img-fluid navbar-cart-product-image",
    src: item.img,
    alt: "..."
  }))), __jsx("div", {
    className: "w-100"
  }, __jsx("a", {
    className: "close text-sm mr-2",
    href: "#"
  }, __jsx("i", {
    className: "fa fa-times"
  }, " ")), __jsx("div", {
    className: "pl-3"
  }, __jsx(link_default.a, {
    href: item.link
  }, __jsx("a", {
    className: "navbar-cart-product-link",
    onClick: () => props.hideCart()
  }, item.name)), __jsx("small", {
    className: "d-block text-muted"
  }, "Quantity: ", item.items), __jsx("strong", {
    className: "d-block text-sm"
  }, "$", item.total.toFixed(2))))));
};

/* harmony default export */ var components_CartOverviewItem = (CartOverviewItem);
// EXTERNAL MODULE: ./src/data/products-cart.json
var products_cart = __webpack_require__("ebmR");

// CONCATENATED MODULE: ./src/components/CartOverviewDropdown.js
var CartOverviewDropdown_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function CartDropdown() {
  const {
    0: dropdownOpen,
    1: setDropdownOpen
  } = Object(external_react_["useState"])({});

  const toggleDropdown = name => {
    setDropdownOpen(_objectSpread(_objectSpread({}, dropdownOpen), {}, {
      [name]: !dropdownOpen[name]
    }));
  };

  return CartOverviewDropdown_jsx(external_react_default.a.Fragment, null, CartOverviewDropdown_jsx("div", {
    className: "nav-item"
  }, CartOverviewDropdown_jsx(link_default.a, {
    href: "/cart"
  }, CartOverviewDropdown_jsx("a", {
    className: "navbar-icon-link d-lg-none"
  }, CartOverviewDropdown_jsx("svg", {
    className: "svg-icon"
  }, CartOverviewDropdown_jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#cart-1"
  }, " ")), CartOverviewDropdown_jsx("span", {
    className: "text-sm ml-2 ml-lg-0 text-uppercase text-sm font-weight-bold d-none d-sm-inline d-lg-none"
  }, "View cart"))), CartOverviewDropdown_jsx("div", {
    className: "d-none d-lg-block"
  }, CartOverviewDropdown_jsx(external_reactstrap_["Dropdown"], {
    inNavbar: true,
    key: "cart_dropdown",
    isOpen: dropdownOpen["cart_dropdown"],
    toggle: () => toggleDropdown("cart_dropdown")
  }, CartOverviewDropdown_jsx(external_reactstrap_["DropdownToggle"], {
    tag: "a",
    href: "#",
    className: "navbar-icon-link"
  }, CartOverviewDropdown_jsx("svg", {
    className: "svg-icon"
  }, CartOverviewDropdown_jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#cart-1"
  }, " ")), CartOverviewDropdown_jsx("div", {
    className: "navbar-icon-link-badge"
  }, "3 ")), CartOverviewDropdown_jsx(external_reactstrap_["DropdownMenu"], {
    right: true,
    className: "p-4"
  }, CartOverviewDropdown_jsx("div", {
    className: "navbar-cart-product-wrapper"
  }, products_cart.map((item, index) => CartOverviewDropdown_jsx(components_CartOverviewItem, {
    item: item,
    key: index,
    hideCart: () => toggleDropdown("cart_dropdown")
  }))), CartOverviewDropdown_jsx("div", {
    className: "navbar-cart-total"
  }, CartOverviewDropdown_jsx("span", {
    className: "text-uppercase text-muted"
  }, "Total"), CartOverviewDropdown_jsx("strong", {
    className: "text-uppercase"
  }, "$240.00")), CartOverviewDropdown_jsx("div", {
    className: "d-flex justify-content-between"
  }, CartOverviewDropdown_jsx(link_default.a, {
    href: "/cart"
  }, CartOverviewDropdown_jsx("a", {
    className: "btn btn-link text-dark mr-3",
    onClick: () => toggleDropdown("cart_dropdown")
  }, "View Cart ", CartOverviewDropdown_jsx("i", {
    className: "fa-arrow-right fa"
  }))), CartOverviewDropdown_jsx(link_default.a, {
    href: "/checkout-1"
  }, CartOverviewDropdown_jsx("a", {
    className: "btn btn-outline-dark",
    onClick: () => toggleDropdown("cart_dropdown")
  }, "Checkout"))))))));
}

/***/ }),

/***/ "TZgs":
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Home\",\"dropdown\":[{\"title\":\"Fullscreen home + Lookbook\",\"link\":\"/\"},{\"title\":\"Split-screen home\",\"link\":\"/index-2\"},{\"title\":\"Classic home\",\"link\":\"/index-3\"},{\"title\":\"Parallax sections\",\"link\":\"/index-4\",\"new\":true},{\"title\":\"Slider + broken grid\",\"link\":\"/index-5\",\"new\":true}]},{\"title\":\"Shop\",\"link\":\"/category\"},{\"title\":\"Template\",\"position\":\"static\",\"megamenu\":[[{\"title\":\"Homepage\",\"links\":[{\"title\":\"Fullscreen home + Lookbook\",\"link\":\"/\",\"parent\":\"Home\"},{\"title\":\"Split-screen home\",\"link\":\"/index-2\",\"parent\":\"Home\"},{\"title\":\"Classic home\",\"link\":\"/index-3\",\"parent\":\"Home\"},{\"title\":\"Parallax sections\",\"link\":\"/index-4\",\"parent\":\"Home\",\"new\":true},{\"title\":\"Slider + Broken grid\",\"link\":\"/index-5\",\"parent\":\"Home\",\"new\":true}]},{\"title\":\"Shop\",\"links\":[{\"title\":\"Category - left sidebar\",\"link\":\"/category\"},{\"title\":\"Category - right sidebar\",\"link\":\"/category-right\"},{\"title\":\"Category - no sidebar\",\"link\":\"/category-no-sidebar\"},{\"title\":\"Category - full width\",\"link\":\"/category-full\"},{\"title\":\"Category - masonry items\",\"link\":\"/category-masonry\"},{\"title\":\"Category - w/ banner\",\"link\":\"/category-banner\"},{\"title\":\"Product detail\",\"link\":\"/detail-1\"},{\"title\":\"Product detail - v.2\",\"link\":\"/detail-2\"},{\"title\":\"Product detail - v.3\",\"link\":\"/detail-3\"}]}],[{\"title\":\"Order process\",\"links\":[{\"title\":\"Shopping cart\",\"link\":\"/cart\"},{\"title\":\"Checkout (5 steps)\",\"link\":\"/checkout-1\"}]},{\"title\":\"Blog\",\"links\":[{\"title\":\"Blog\",\"link\":\"/blog\"},{\"title\":\"Post\",\"link\":\"/blog/[slug]\",\"as\":\"/blog/best-books-about-fashion\"}]}],[{\"title\":\"Pages\",\"links\":[{\"title\":\"About us\",\"link\":\"/about\",\"new\":true},{\"title\":\"About us v.2\",\"link\":\"/about-2\",\"new\":true},{\"title\":\"Contact\",\"link\":\"/contact\",\"parent\":\"Contact\"},{\"title\":\"Contact v.2 \",\"link\":\"/contact-2\"},{\"title\":\"Text page\",\"link\":\"/text\"},{\"title\":\"F.A.Q.s\",\"link\":\"/faq\"},{\"title\":\"Coming soon\",\"link\":\"/coming-soon\"},{\"title\":\"404 page\",\"link\":\"/404\",\"new\":true}]},{\"title\":\"Customer\",\"links\":[{\"title\":\"Login/sign up\",\"link\":\"/customer-login\"},{\"title\":\"Orders\",\"link\":\"/customer-orders\"},{\"title\":\"Order detail\",\"link\":\"/customer-order\"},{\"title\":\"Addresses\",\"link\":\"/customer-addresses\"},{\"title\":\"Profile\",\"link\":\"/customer-account\"}]}],[{\"title\":\"Documentation\",\"links\":[{\"title\":\"Introduction\",\"link\":\"/docs/introduction\"},{\"title\":\"Directory structure\",\"link\":\"/docs/directory-structure\"},{\"title\":\"Next.js\",\"link\":\"/docs/next\"},{\"title\":\"Customizing CSS\",\"link\":\"/docs/customizing-css\"},{\"title\":\"Credits\",\"link\":\"/docs/credits\"},{\"title\":\"Changelog\",\"link\":\"/docs/changelog\"}]},{\"title\":\"Components\",\"links\":[{\"title\":\"Bootstrap\",\"link\":\"/docs/components-bootstrap\"},{\"title\":\"Theme\",\"link\":\"/docs/components-theme\"}]}]],\"services\":[{\"title\":\"Free shipping & return\",\"content\":\"Free Shipping over $300\",\"icon\":\"/icons/orion-svg-sprite.svg#delivery-time-1\"},{\"title\":\"Money back guarantee\",\"content\":\"30 Days Money Back\",\"icon\":\"/icons/orion-svg-sprite.svg#money-1\"},{\"title\":\"020-800-456-747\",\"content\":\"24/7 Available Support\",\"icon\":\"/icons/orion-svg-sprite.svg#customer-support-1\"},{\"title\":\"Secure Payment\",\"content\":\"Secure Payment\",\"icon\":\"/icons/orion-svg-sprite.svg#secure-payment-1\"}],\"image\":\"/img/megamenu.jpg\"},{\"title\":\"Contact\",\"link\":\"/contact\"},{\"title\":\"Docs\",\"hideToLoggedUser\":true,\"dropdown\":[{\"title\":\"Documentation\",\"links\":[{\"title\":\"Introduction\",\"link\":\"/docs/introduction\"},{\"title\":\"Directory structure\",\"link\":\"/docs/directory-structure\"},{\"title\":\"Next.js\",\"link\":\"/docs/next\"},{\"title\":\"Customizing CSS\",\"link\":\"/docs/customizing-css\"},{\"title\":\"Credits\",\"link\":\"/docs/credits\"},{\"title\":\"Changelog\",\"link\":\"/docs/changelog\"}]},{\"title\":\"Components\",\"divider\":true,\"links\":[{\"title\":\"Bootstrap\",\"link\":\"/docs/components-bootstrap\"},{\"title\":\"Theme\",\"link\":\"/docs/components-theme\"}]}]}]");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

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

/***/ "Y9L4":
/***/ (function(module, exports) {



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

/***/ "YV2c":
/***/ (function(module, exports) {

module.exports = require("@react-hook/size");

/***/ }),

/***/ "ZOuJ":
/***/ (function(module, exports) {



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

/***/ "eXPT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FormProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const FormContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext([{}, () => {}]);

const FormProvider = props => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  return __jsx(FormContext.Provider, {
    value: [state, setState]
  }, props.children);
};



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

/***/ "iA6b":
/***/ (function(module, exports) {

module.exports = require("@react-hook/window-scroll");

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

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });