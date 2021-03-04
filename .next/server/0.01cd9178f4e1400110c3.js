exports.ids = [0];
exports.modules = {

/***/ "SVAT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("AuoD");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("bMVF");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const MapComponent = props => {
  let tileLayers = [];
  tileLayers[1] = {
    tiles: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd"
  };
  tileLayers[2] = {
    tiles: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  };
  tileLayers[3] = {
    tiles: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.png",
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  };
  tileLayers[4] = {
    tiles: "https://mapserver.mapy.cz/base-m/{z}-{x}-{y}",
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>, <a href="https://seznam.cz">Seznam.cz, a.s.</a>'
  };
  tileLayers[5] = {
    tiles: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd"
  };
  tileLayers[6] = {
    tiles: "https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia maps</a>'
  };
  tileLayers[7] = {
    tiles: "https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png",
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  };
  const MarkerIcon = "/svg/marker.svg",
        MarkerIconHighlight = "/svg/marker-hover.svg";
  const {
    0: hover,
    1: setHover
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: focus,
    1: setFocus
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const icon = L.icon({
    iconUrl: MarkerIcon,
    shadowUrl: "",
    iconRetinaUrl: MarkerIcon,
    iconSize: [25, 37.5],
    popupAnchor: [0, -18],
    tooltipAnchor: [0, 19]
  });
  const highlightIcon = L.icon({
    iconUrl: MarkerIconHighlight,
    shadowUrl: "",
    iconRetinaUrl: MarkerIconHighlight,
    iconSize: [25, 37.5],
    popupAnchor: [0, -18],
    tooltipAnchor: [0, 19]
  });
  return __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["Map"], {
    center: props.center && props.center,
    zoom: props.zoom,
    scrollWheelZoom: focus,
    className: props.className,
    dragging: props.dragging,
    tap: props.tap,
    bounds: props.geoJSON ? markers : null,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["TileLayer"], {
    url: tileLayers[7].tiles,
    attribution: tileLayers[5].attribution
  }), props.markerPosition && __jsx(react_leaflet__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
    position: props.markerPosition,
    icon: icon
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MapComponent);

/***/ }),

/***/ "bMVF":
/***/ (function(module, exports) {



/***/ })

};;