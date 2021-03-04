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
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
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

/***/ "/vp+":
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

// CONCATENATED MODULE: ./src/components/Docs/Bootstrap/Alerts.js
var __jsx = external_react_default.a.createElement;





const Alerts = () => {
  const alerts = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];
  return __jsx("div", {
    id: "alerts",
    className: "docs-item element"
  }, __jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Alert"), __jsx("div", {
    className: "docs-desc"
  }, __jsx("p", {
    className: "lead"
  }, "Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages. See the", " ", __jsx("a", {
    href: "https://reactstrap.github.io/components/alerts/"
  }, "ReactStrap documentation"), " ", "for more details.", " ")), __jsx("div", {
    className: "mt-5"
  }, __jsx("div", {
    className: "docs-example"
  }, alerts.map(alertColor => __jsx(external_reactstrap_["Alert"], {
    key: alertColor,
    color: alertColor
  }, "This is a ", alertColor, " alert\u2014check it out!", " ")))), __jsx("div", {
    className: "mt-4"
  }, __jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, highlightCode)));
};

/* harmony default export */ var Bootstrap_Alerts = (Alerts);
const highlightCode = `import { Alert } from 'reactstrap'

const Component = () => {
    return (
        <Alert color="primary">This is a primary alert—check it out!</Alert>
    )
}

export default Component
`;
// CONCATENATED MODULE: ./src/components/Docs/Bootstrap/Badges.js
var Badges_jsx = external_react_default.a.createElement;





const Badges = () => {
  return Badges_jsx("div", {
    id: "badges",
    className: "docs-item element"
  }, Badges_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Badge"), Badges_jsx("div", {
    className: "docs-desc"
  }, Badges_jsx("p", {
    className: "lead"
  }, "Small count and labeling component. See the", " ", Badges_jsx("a", {
    href: "https://reactstrap.github.io/components/badge/"
  }, "ReactStrap documentation"), " ", "for more details.", " "), Badges_jsx("p", null, "Add ", Badges_jsx("code", null, "-light"), " suffix to the class name to get lighter tones on badges.")), Badges_jsx("div", {
    className: "mt-5"
  }, Badges_jsx(external_reactstrap_["Card"], {
    className: "mb-3"
  }, Badges_jsx(external_reactstrap_["CardBody"], null, Badges_jsx("h2", null, "Example heading ", Badges_jsx(external_reactstrap_["Badge"], {
    color: "dark"
  }, "New")), Badges_jsx("h3", null, "Example heading ", Badges_jsx(external_reactstrap_["Badge"], {
    color: "gray-400"
  }, "New")), Badges_jsx("h4", null, "Example heading ", Badges_jsx(external_reactstrap_["Badge"], {
    color: "primary"
  }, "New")), Badges_jsx("h5", null, "Example heading ", Badges_jsx(external_reactstrap_["Badge"], {
    color: "info"
  }, "New")), Badges_jsx("h6", null, "Example heading ", Badges_jsx(external_reactstrap_["Badge"], {
    color: "gray-300"
  }, "New"))))), Badges_jsx("div", {
    className: "mt-4"
  }, Badges_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Badges_highlightCode)));
};

/* harmony default export */ var Bootstrap_Badges = (Badges);
const Badges_highlightCode = `import { Badge } from 'reactstrap'

const Component = () => {
    return (
        <h2>Example heading <Badge color="dark">New</Badge></h2>
        <h3>Example heading <Badge color="info-light">New</Badge></h3>
    )
}

export default Component
`;
// CONCATENATED MODULE: ./src/components/Docs/Bootstrap/Breadcrumbs.js
var Breadcrumbs_jsx = external_react_default.a.createElement;





const Breadcrumbs = () => {
  return Breadcrumbs_jsx("div", {
    id: "breadcrumb",
    className: "docs-item element"
  }, Breadcrumbs_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Breadcrumb"), Breadcrumbs_jsx("div", {
    className: "docs-desc"
  }, Breadcrumbs_jsx("p", {
    className: "lead"
  }, "Indicate the current page\u2019s location within a navigational hierarchy that automatically adds separators via CSS.. See the", " ", Breadcrumbs_jsx("a", {
    href: "https://reactstrap.github.io/components/breadcrumbs/"
  }, "ReactStrap documentation"), " ", "for more details.", " ")), Breadcrumbs_jsx("div", {
    className: "mt-5"
  }, Breadcrumbs_jsx(external_reactstrap_["Card"], {
    className: "mb-3"
  }, Breadcrumbs_jsx(external_reactstrap_["CardBody"], null, Breadcrumbs_jsx(external_reactstrap_["Breadcrumb"], null, Breadcrumbs_jsx(external_reactstrap_["BreadcrumbItem"], null, Breadcrumbs_jsx("a", {
    href: "#"
  }, "Home")), Breadcrumbs_jsx(external_reactstrap_["BreadcrumbItem"], null, Breadcrumbs_jsx("a", {
    href: "#"
  }, "Library")), Breadcrumbs_jsx(external_reactstrap_["BreadcrumbItem"], {
    active: true
  }, "Data"))))), Breadcrumbs_jsx("div", {
    className: "mt-4"
  }, Breadcrumbs_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Breadcrumbs_highlightCode)));
};

/* harmony default export */ var Bootstrap_Breadcrumbs = (Breadcrumbs);
const Breadcrumbs_highlightCode = `import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

    const Component = () => {
    return (
        <Breadcrumb>
            <BreadcrumbItem>
                <a href="#">Home</a>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <a href="#">Library</a>
            </BreadcrumbItem>
            <BreadcrumbItem active>
                Page
            </BreadcrumbItem>
        </Breadcrumb>
    )
}

export default Component
`;
// CONCATENATED MODULE: ./src/components/Docs/Bootstrap/Buttons.js
var Buttons_jsx = external_react_default.a.createElement;





const Buttons = () => {
  return Buttons_jsx("div", {
    id: "buttons",
    className: "docs-item element"
  }, Buttons_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Buttons"), Buttons_jsx("div", {
    className: "docs-desc"
  }, Buttons_jsx("p", {
    className: "lead"
  }, "Use Bootstrap\u2019s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more. See the", " ", Buttons_jsx("a", {
    href: "https://reactstrap.github.io/components/buttons/"
  }, "ReactStrap documentation"), " ", "for more details.", " ")), Buttons_jsx("div", {
    className: "mt-5"
  }, Buttons_jsx(external_reactstrap_["Card"], {
    className: "mb-3"
  }, Buttons_jsx(external_reactstrap_["CardBody"], null, Buttons_jsx("h6", {
    className: "text-uppercase mb-4"
  }, "Button Colors"), Buttons_jsx(external_reactstrap_["Button"], {
    color: "primary",
    className: "mr-1 mb-2"
  }, "Primary"), Buttons_jsx(external_reactstrap_["Button"], {
    color: "secondary",
    className: "mr-1 mb-2"
  }, "Secondary"), Buttons_jsx(external_reactstrap_["Button"], {
    color: "success",
    className: "mr-1 mb-2"
  }, "Success"), Buttons_jsx(external_reactstrap_["Button"], {
    color: "danger",
    className: "mr-1 mb-2"
  }, "Danger"), Buttons_jsx(external_reactstrap_["Button"], {
    color: "warning",
    className: "mr-1 mb-2"
  }, "Warning"), Buttons_jsx(external_reactstrap_["Button"], {
    color: "info",
    className: "mr-1 mb-2"
  }, "Info"), Buttons_jsx(external_reactstrap_["Button"], {
    color: "light",
    className: "mr-1 mb-2"
  }, "Light"), Buttons_jsx(external_reactstrap_["Button"], {
    color: "dark",
    className: "mr-1 mb-2"
  }, "Dark"), Buttons_jsx(external_reactstrap_["Button"], {
    color: "link",
    className: "mr-1 mb-2"
  }, "Link"))), Buttons_jsx(external_reactstrap_["Card"], null, Buttons_jsx(external_reactstrap_["CardBody"], null, Buttons_jsx("h6", {
    className: "text-uppercase mb-4"
  }, "Button Sizes"), Buttons_jsx(external_reactstrap_["Button"], {
    color: "dark",
    size: "lg",
    className: "mr-1 mb-2"
  }, "Large button"), Buttons_jsx(external_reactstrap_["Button"], {
    color: "dark",
    className: "mr-1 mb-2"
  }, "Standard button"), Buttons_jsx(external_reactstrap_["Button"], {
    color: "outline-dark",
    size: "sm",
    className: "mr-1 mb-2"
  }, "Small button")))), Buttons_jsx("div", {
    className: "mt-4"
  }, Buttons_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Buttons_highlightCode)));
};

/* harmony default export */ var Bootstrap_Buttons = (Buttons);
const Buttons_highlightCode = `import { Button } from 'reactstrap'

const Component = () => {
    return (
        <>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
        </>
    )
}

export default Component
`;
// CONCATENATED MODULE: ./src/components/Docs/Bootstrap/Card.js
var Card_jsx = external_react_default.a.createElement;





const CardComponent = () => {
  return Card_jsx("div", {
    id: "card",
    className: "docs-item element"
  }, Card_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Card"), Card_jsx("div", {
    className: "docs-desc"
  }, Card_jsx("p", {
    className: "lead"
  }, "Bootstrap\u2019s cards provide a flexible and extensible content container with multiple variants and options.. See the", " ", Card_jsx("a", {
    href: "https://reactstrap.github.io/components/card/"
  }, "ReactStrap documentation"), " ", "for more details.", " ")), Card_jsx("div", {
    className: "mt-5"
  }, Card_jsx(external_reactstrap_["Row"], null, Card_jsx(external_reactstrap_["Col"], {
    md: "6"
  }, Card_jsx(external_reactstrap_["Card"], {
    className: "border-0 shadow mb-3"
  }, Card_jsx(external_reactstrap_["CardImg"], {
    top: true,
    src: "/img/photo/ian-dooley-347962-unsplash.jpg",
    alt: "Card image cap"
  }), Card_jsx(external_reactstrap_["CardBody"], null, Card_jsx(external_reactstrap_["CardTitle"], {
    tag: "h4"
  }, "Card title"), Card_jsx(external_reactstrap_["CardText"], null, "Some quick example text to build on the card title and make up the bulk of the card's content."), Card_jsx(external_reactstrap_["Button"], {
    href: "#",
    color: "dark"
  }, "Go somewhere")))), Card_jsx(external_reactstrap_["Col"], {
    md: "6"
  }, Card_jsx(external_reactstrap_["Card"], {
    className: "text-white border-0 shadow dark-overlay overflow-hidden"
  }, Card_jsx(external_reactstrap_["CardImg"], {
    src: "/img/photo/ian-dooley-347942-unsplash.jpg",
    alt: "Card image"
  }), Card_jsx(external_reactstrap_["CardImgOverlay"], {
    className: "d-flex align-items-center"
  }, Card_jsx("div", {
    className: "overlay-content"
  }, Card_jsx(external_reactstrap_["CardTitle"], {
    className: "text-uppercase font-weight-normal",
    tag: "h3"
  }, "Card title"), Card_jsx(external_reactstrap_["CardText"], null, "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."), Card_jsx(external_reactstrap_["CardText"], {
    className: "text-sm"
  }, "Last updated 3 mins ago"))))))), Card_jsx("div", {
    className: "mt-4"
  }, Card_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Card_highlightCode)));
};

/* harmony default export */ var Card = (CardComponent);
const Card_highlightCode = `import { Card, CardBody, CardImg, Button } from 'reactstrap'

const Component = () => {
    return (
        <Card>
            <CardImg top src="/img/photo/ian-dooley-347962-unsplash.jpg" alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h4">Card title</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button href="#" color="dark">Go somewhere</Button>
            </CardBody>
        </Card>
    )
}

export default Component
`;
// CONCATENATED MODULE: ./src/components/Docs/Bootstrap/Dropdowns.js
var Dropdowns_jsx = external_react_default.a.createElement;





const Dropdowns = () => {
  const [dropdown, setDropdown] = external_react_default.a.useState(false);
  return Dropdowns_jsx("div", {
    id: "dropdowns",
    className: "docs-item element"
  }, Dropdowns_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Dropdowns"), Dropdowns_jsx("div", {
    className: "docs-desc"
  }, Dropdowns_jsx("p", {
    className: "lead"
  }, "Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin. See the ", Dropdowns_jsx("a", {
    href: "https://reactstrap.github.io/components/dropdowns/"
  }, "ReactStrap documentation"), " for more details. ")), Dropdowns_jsx("div", {
    className: "mt-5"
  }, Dropdowns_jsx(external_reactstrap_["Dropdown"], {
    isOpen: dropdown,
    toggle: () => setDropdown(!dropdown),
    direction: "down",
    className: "d-inline-block"
  }, Dropdowns_jsx(external_reactstrap_["DropdownToggle"], {
    color: "outline-dark",
    caret: true
  }, "Default"), Dropdowns_jsx(external_reactstrap_["DropdownMenu"], null, Dropdowns_jsx(external_reactstrap_["DropdownItem"], {
    header: true,
    className: "font-weight-normal"
  }, "Dropdown header"), Dropdowns_jsx(external_reactstrap_["DropdownItem"], {
    href: "#"
  }, "Action"), Dropdowns_jsx(external_reactstrap_["DropdownItem"], {
    href: "#"
  }, "Another action"), Dropdowns_jsx(external_reactstrap_["DropdownItem"], {
    href: "#"
  }, "Something else here"), Dropdowns_jsx(external_reactstrap_["DropdownItem"], {
    divider: true
  }), Dropdowns_jsx(external_reactstrap_["DropdownItem"], {
    href: "#"
  }, "Something else here")))), Dropdowns_jsx("div", {
    className: "mt-4"
  }, Dropdowns_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Dropdowns_highlightCode)));
};

/* harmony default export */ var Bootstrap_Dropdowns = (Dropdowns);
const Dropdowns_highlightCode = `import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'

const Component = () => {
    const [dropdown, setDropdown] = React.useState(false)

    return (
        <Dropdown isOpen={dropdown} toggle={() => setDropdown(!dropdown)} direction="down" className="d-inline-block">
            <DropdownToggle color="outline-dark" caret>Default</DropdownToggle>
            <DropdownMenu>
                <DropdownItem header className="font-weight-normal">Dropdown header</DropdownItem>
                <DropdownItem href="#">Action</DropdownItem>
                <DropdownItem href="#">Another action</DropdownItem>
                <DropdownItem href="#">Something else here</DropdownItem>
                <DropdownItem divider></DropdownItem>
                <DropdownItem href="#">Something else here</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

export default Component
`;
// CONCATENATED MODULE: ./src/components/Docs/Bootstrap/Forms.js
var Forms_jsx = external_react_default.a.createElement;





const Forms = () => {
  return Forms_jsx("div", {
    id: "forms",
    className: "docs-item element"
  }, Forms_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Forms"), Forms_jsx("div", {
    className: "docs-desc"
  }, Forms_jsx("p", {
    className: "lead"
  }, "Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms. See the ", Forms_jsx("a", {
    href: "https://reactstrap.github.io/components/form/"
  }, "ReactStrap documentation"), " for more details. ")), Forms_jsx("div", {
    className: "mt-5"
  }, Forms_jsx(external_reactstrap_["Card"], {
    className: "mb-3"
  }, Forms_jsx(external_reactstrap_["CardBody"], null, Forms_jsx("h6", {
    className: "text-uppercase mb-4"
  }, "Form Group"), Forms_jsx(external_reactstrap_["Form"], null, Forms_jsx(external_reactstrap_["FormGroup"], null, Forms_jsx(external_reactstrap_["Label"], {
    for: "exampleInputEmail1",
    className: "form-label"
  }, "Email address"), Forms_jsx(external_reactstrap_["Input"], {
    id: "exampleInputEmail1",
    type: "email",
    "aria-describedby": "emailHelp",
    placeholder: "Enter email"
  }), Forms_jsx(external_reactstrap_["FormText"], {
    id: "emailHelp"
  }, "We'll never share your email with anyone else."))))), Forms_jsx(external_reactstrap_["Card"], {
    className: "mb-3"
  }, Forms_jsx(external_reactstrap_["CardBody"], null, Forms_jsx("h6", {
    className: "text-uppercase mb-4"
  }, "Input Sizes"), Forms_jsx(external_reactstrap_["Form"], null, Forms_jsx(external_reactstrap_["FormGroup"], null, Forms_jsx(external_reactstrap_["Input"], {
    bsSize: "sm",
    id: "exampleInputSm",
    type: "text",
    "aria-describedby": "inputSm",
    placeholder: "Form Control Small"
  })), Forms_jsx(external_reactstrap_["FormGroup"], null, Forms_jsx(external_reactstrap_["Input"], {
    id: "exampleInputSt",
    type: "text",
    "aria-describedby": "inputSt",
    placeholder: "Form Control Standard"
  })), Forms_jsx(external_reactstrap_["FormGroup"], null, Forms_jsx(external_reactstrap_["Input"], {
    bsSize: "lg",
    id: "exampleInputLg",
    type: "text",
    "aria-describedby": "inputLg",
    placeholder: "Form Control Large"
  }))))), Forms_jsx(external_reactstrap_["Card"], {
    className: "mb-3"
  }, Forms_jsx(external_reactstrap_["CardBody"], null, Forms_jsx("h6", {
    className: "text-uppercase mb-4"
  }, "Input Group"), Forms_jsx(external_reactstrap_["Form"], null, Forms_jsx(external_reactstrap_["InputGroup"], null, Forms_jsx(external_reactstrap_["InputGroupAddon"], {
    addonType: "prepend"
  }, Forms_jsx(external_reactstrap_["InputGroupText"], {
    id: "basic-addon1"
  }, "@")), Forms_jsx(external_reactstrap_["Input"], {
    type: "text",
    placeholder: "Username",
    "aria-label": "Username",
    "aria-describedby": "basic-addon1"
  }))))), Forms_jsx(external_reactstrap_["Card"], null, Forms_jsx(external_reactstrap_["CardBody"], null, Forms_jsx("h6", {
    className: "text-uppercase mb-4"
  }, " Custom Inputs"), Forms_jsx(external_reactstrap_["Form"], null, Forms_jsx(external_reactstrap_["FormGroup"], null, Forms_jsx(external_reactstrap_["CustomInput"], {
    type: "checkbox",
    id: "custom-check-1"
  }, Forms_jsx(external_reactstrap_["Label"], {
    for: "custom-check-1",
    className: "custom-control-label"
  }, "Check this custom checkbox"))), Forms_jsx(external_reactstrap_["FormGroup"], null, Forms_jsx("div", {
    className: "custom-control custom-checkbox-switch"
  }, Forms_jsx(external_reactstrap_["Input"], {
    id: "custom-switch-1",
    type: "checkbox",
    className: "custom-control-input"
  }), Forms_jsx(external_reactstrap_["Label"], {
    for: "custom-switch-1",
    className: "custom-control-label"
  }, "Switch this custom checkbox"))), Forms_jsx(external_reactstrap_["FormGroup"], null, Forms_jsx(external_reactstrap_["CustomInput"], {
    type: "radio",
    id: "radio1",
    name: "radio",
    label: "Toggle this custom radio"
  }), Forms_jsx(external_reactstrap_["CustomInput"], {
    type: "radio",
    id: "radio2",
    name: "radio",
    label: "Or toggle this other custom radio"
  })), Forms_jsx(external_reactstrap_["FormGroup"], null, Forms_jsx(external_reactstrap_["CustomInput"], {
    defaultValue: "0",
    id: "select",
    type: "select"
  }, Forms_jsx("option", {
    value: "0"
  }, "Open this select menu"), Forms_jsx("option", {
    value: "1"
  }, "One"), Forms_jsx("option", {
    value: "2"
  }, "Two"), Forms_jsx("option", {
    value: "3"
  }, "Three"))), Forms_jsx(external_reactstrap_["FormGroup"], null, Forms_jsx(external_reactstrap_["CustomInput"], {
    type: "file",
    id: "customFile"
  }, Forms_jsx(external_reactstrap_["Label"], {
    for: "customFile",
    className: "custom-file-label"
  }, "Choose file"))))))), Forms_jsx("div", {
    className: "mt-4"
  }, Forms_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Forms_highlightCode)));
};

/* harmony default export */ var Bootstrap_Forms = (Forms);
const Forms_highlightCode = `import { Form, FormGroup, FormText, Label, Input } from 'reactstrap'

const Component = () => {
    return (
        <Form>
            <FormGroup>
                <Label for="exampleInputEmail1" className="form-label">Email address</Label>
                <Input id="exampleInputEmail1" type="email" aria-describedby="emailHelp" placeholder="Enter email" />
                <FormText id="emailHelp">We'll never share your email with anyone else.</FormText>
            </FormGroup>
        </Form>
    )
}

export default Component
`;
// CONCATENATED MODULE: ./src/components/Docs/Bootstrap/ListGroup.js
var ListGroup_jsx = external_react_default.a.createElement;





const ListGroupComponent = () => {
  return ListGroup_jsx("div", {
    id: "listgroup",
    className: "docs-item element"
  }, ListGroup_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "List Group"), ListGroup_jsx("div", {
    className: "docs-desc"
  }, ListGroup_jsx("p", {
    className: "lead"
  }, "List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within. See the ", ListGroup_jsx("a", {
    href: "https://reactstrap.github.io/components/listgroup/"
  }, "ReactStrap documentation"), " for more details. ")), ListGroup_jsx("div", {
    className: "mt-5"
  }, ListGroup_jsx(external_reactstrap_["ListGroup"], null, ListGroup_jsx(external_reactstrap_["ListGroupItem"], null, "Cras justo odio"), ListGroup_jsx(external_reactstrap_["ListGroupItem"], null, "Dapibus ac facilisis in"), ListGroup_jsx(external_reactstrap_["ListGroupItem"], null, "Morbi leo risus"), ListGroup_jsx(external_reactstrap_["ListGroupItem"], null, "Porta ac consectetur ac"), ListGroup_jsx(external_reactstrap_["ListGroupItem"], null, "Vestibulum at eros"))), ListGroup_jsx("div", {
    className: "mt-4"
  }, ListGroup_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, ListGroup_highlightCode)));
};

/* harmony default export */ var ListGroup = (ListGroupComponent);
const ListGroup_highlightCode = `import { ListGroup, ListGroupItem } from 'reactstrap'

const Component = () => {
    return (
        <ListGroup>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Morbi leo risus</ListGroupItem>
            <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
    )
}

export default Component
`;
// CONCATENATED MODULE: ./src/components/Docs/Bootstrap/Modal.js
var Modal_jsx = external_react_default.a.createElement;





const ModalComponent = () => {
  const [modal, setModal] = external_react_default.a.useState(false);

  const onClick = () => {
    setModal(!modal);
  };

  return Modal_jsx("div", {
    id: "modal",
    className: "docs-item element"
  }, Modal_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Modal"), Modal_jsx("div", {
    className: "docs-desc"
  }, Modal_jsx("p", {
    className: "lead"
  }, "Use Bootstrap\u2019s JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content. See the", " ", Modal_jsx("a", {
    href: "https://reactstrap.github.io/components/modals/"
  }, "ReactStrap documentation"), " ", "for more details.", " ")), Modal_jsx("div", {
    className: "mt-5"
  }, Modal_jsx(external_reactstrap_["Button"], {
    color: "dark",
    onClick: onClick
  }, "Launch demo modal"), Modal_jsx(external_reactstrap_["Modal"], {
    isOpen: modal,
    toggle: onClick,
    fade: true
  }, Modal_jsx(external_reactstrap_["ModalBody"], {
    className: "text-center"
  }, Modal_jsx(external_reactstrap_["Button"], {
    color: "ooo",
    onClick: onClick,
    className: "close modal-close"
  }, Modal_jsx("svg", {
    className: "svg-icon w-100 h-100 svg-icon-light align-middle"
  }, Modal_jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#close-1"
  }))), Modal_jsx("h2", {
    className: "modal-title mb-4"
  }, "Modal title"), Modal_jsx("p", {
    className: "text-muted"
  }, Modal_jsx("strong", null, "Pellentesque habitant morbi tristique"), " senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.", " ", Modal_jsx("em", null, "Aenean ultricies mi vitae est."), " Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, ", Modal_jsx("code", null, "commodo vitae"), ", ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ", Modal_jsx("a", {
    href: "#"
  }, "Donec non enim"), " in turpis pulvinar facilisis. Ut felis.")), Modal_jsx(external_reactstrap_["ModalFooter"], {
    className: "justify-content-center"
  }, Modal_jsx(external_reactstrap_["Button"], {
    color: "outline-dark",
    onClick: onClick
  }, "Close"), Modal_jsx(external_reactstrap_["Button"], {
    color: "dark",
    onClick: onClick
  }, "Save changes")))), Modal_jsx("div", {
    className: "mt-4"
  }, Modal_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Modal_highlightCode)));
};

/* harmony default export */ var Modal = (ModalComponent);
const Modal_highlightCode = `import { Modal,  ModalBody, ModalFooter, Button } from 'reactstrap'

const Component = () => {
    const [modal, setModal] = React.useState(false)

    const onClick = () => {
        setModal(!modal)
    }
    return (
        <>
            <Button color="dark" onClick={onClick}>Launch demo modal</Button>
            <Modal isOpen={modal} toggle={onClick} fade>
                <ModalBody>
                    <Button color="ooo" onClick={onClick} className="close modal-close">
                        <svg className="svg-icon w-100 h-100 svg-icon-light align-middle">
                            <use xlinkHref="/icons/orion-svg-sprite.svg#close-1" />
                        </svg>
                    </Button>
                    <h2>Modal title</h2>
                    <p>Modal text</p>
                </ModalBody>
                <ModalFooter className="justify-content-center">
                    <Button color="outline-dark" onClick={onClick}>Close</Button>
                    <Button color="dark" onClick={onClick}>Save changes</Button>
                </ModalFooter>
            </Modal>
        <>
    )
}

export default Component
`;
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./src/components/CartOverviewDropdown.js + 1 modules
var CartOverviewDropdown = __webpack_require__("PfhB");

// CONCATENATED MODULE: ./src/components/Docs/Bootstrap/Navbar.js
var Navbar_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const NavbarComponent = () => {
  const [open, setOpen] = external_react_default.a.useState({});

  const toggle = (name, value) => {
    setOpen(_objectSpread(_objectSpread({}, open), {}, {
      [name]: value ? value : !open[name]
    }));
  };

  return Navbar_jsx("div", {
    id: "navbar",
    className: "docs-item element"
  }, Navbar_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Navbar"), Navbar_jsx("div", {
    className: "docs-desc"
  }, Navbar_jsx("p", {
    className: "lead"
  }, " ", "Bootstrap\u2019s powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin. See the", " ", Navbar_jsx("a", {
    href: "https://reactstrap.github.io/components/navbar/"
  }, "ReactStrap documentation"), " ", "for more details.", " ")), Navbar_jsx("div", {
    className: "mt-5"
  }, Navbar_jsx(external_reactstrap_["Navbar"], {
    expand: "lg",
    light: true,
    className: "shadow mb-3"
  }, Navbar_jsx(external_reactstrap_["Container"], {
    fluid: true
  }, Navbar_jsx(external_reactstrap_["NavbarBrand"], {
    href: "/"
  }, Navbar_jsx("span", {
    className: "font-weight-bold text-uppercase"
  }, "Sell", Navbar_jsx("span", {
    className: "text-primary"
  }, "."), " ")), Navbar_jsx(external_reactstrap_["NavbarToggler"], {
    "aria-label": "Toggle navigation",
    onClick: () => toggle("navbar")
  }, Navbar_jsx("i", {
    className: "fa fa-bars"
  })), Navbar_jsx(external_reactstrap_["Collapse"], {
    navbar: true,
    isOpen: open["navbar"]
  }, Navbar_jsx(external_reactstrap_["Nav"], {
    navbar: true,
    className: "mr-auto"
  }, Navbar_jsx(external_reactstrap_["NavItem"], {
    className: "active"
  }, Navbar_jsx("a", {
    href: "#",
    className: "nav-link"
  }, "Home ", Navbar_jsx("span", {
    className: "sr-only"
  }, "(current)"))), Navbar_jsx(external_reactstrap_["NavItem"], null, Navbar_jsx("a", {
    href: "#",
    className: "nav-link"
  }, "Link")), Navbar_jsx(external_reactstrap_["Dropdown"], {
    isOpen: open["navbar-dropdown"],
    toggle: () => toggle("navbar-dropdown"),
    nav: true,
    inNavbar: true
  }, Navbar_jsx(external_reactstrap_["DropdownToggle"], {
    caret: true,
    nav: true
  }, "Dropdown"), Navbar_jsx(external_reactstrap_["DropdownMenu"], null, Navbar_jsx(external_reactstrap_["DropdownItem"], {
    href: "#"
  }, "Action"), Navbar_jsx(external_reactstrap_["DropdownItem"], {
    href: "#"
  }, "Another action"), Navbar_jsx(external_reactstrap_["DropdownItem"], {
    divider: true
  }), Navbar_jsx(external_reactstrap_["DropdownItem"], {
    href: "#"
  }, "Something else here"))), Navbar_jsx(external_reactstrap_["NavItem"], null, Navbar_jsx(external_reactstrap_["NavLink"], {
    href: "#",
    disabled: true
  }, "Disabled"))), Navbar_jsx(external_reactstrap_["Form"], {
    inline: true,
    className: "my-2 my-lg-0"
  }, Navbar_jsx(external_reactstrap_["Input"], {
    type: "search",
    placeholder: "Search",
    "aria-label": "Search",
    className: "mr-sm-2"
  }), Navbar_jsx(external_reactstrap_["Button"], {
    type: "submit",
    color: "outline-dark",
    className: "my-2 my-sm-0"
  }, "Search"))))), Navbar_jsx(external_reactstrap_["Navbar"], {
    expand: "lg",
    light: true,
    className: "shadow mb-3"
  }, Navbar_jsx(external_reactstrap_["Container"], {
    fluid: true
  }, Navbar_jsx(external_reactstrap_["NavbarBrand"], {
    href: "/"
  }, Navbar_jsx("span", {
    className: "font-weight-bold text-uppercase"
  }, "Sell", Navbar_jsx("span", {
    className: "text-primary"
  }, "."), " ")), Navbar_jsx(external_reactstrap_["NavbarToggler"], {
    "aria-label": "Toggle navigation",
    onClick: () => toggle("navbar-2")
  }, Navbar_jsx("i", {
    className: "fa fa-bars"
  })), Navbar_jsx(external_reactstrap_["Collapse"], {
    navbar: true,
    isOpen: open["navbar-2"]
  }, Navbar_jsx(external_reactstrap_["Nav"], {
    navbar: true,
    className: "mt-3 mt-lg-0 mx-auto"
  }, Navbar_jsx(external_reactstrap_["NavItem"], {
    className: "active"
  }, Navbar_jsx("a", {
    href: "#",
    className: "nav-link"
  }, "Home ", Navbar_jsx("span", {
    className: "sr-only"
  }, "(current)"))), Navbar_jsx(external_reactstrap_["NavItem"], null, Navbar_jsx("a", {
    href: "#",
    className: "nav-link"
  }, "Link")), Navbar_jsx(external_reactstrap_["Dropdown"], {
    isOpen: open["navbar-dropdown-2"],
    toggle: () => toggle("navbar-dropdown-2"),
    nav: true,
    inNavbar: true
  }, Navbar_jsx(external_reactstrap_["DropdownToggle"], {
    caret: true,
    nav: true
  }, "Dropdown"), Navbar_jsx(external_reactstrap_["DropdownMenu"], null, Navbar_jsx(external_reactstrap_["DropdownItem"], {
    href: "#"
  }, "Action"), Navbar_jsx(external_reactstrap_["DropdownItem"], {
    href: "#"
  }, "Another action"), Navbar_jsx(external_reactstrap_["DropdownItem"], {
    divider: true
  }), Navbar_jsx(external_reactstrap_["DropdownItem"], {
    href: "#"
  }, "Something else here")))), Navbar_jsx("div", {
    className: "right-col d-flex align-items-center justify-content-between justify-content-lg-end my-3 my-lg-0"
  }, Navbar_jsx("div", {
    className: "nav-item navbar-icon-link",
    "data-toggle": "search",
    onClick: () => setSearchToggle(!searchToggle)
  }, Navbar_jsx("svg", {
    className: "svg-icon"
  }, Navbar_jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#search-1"
  }))), Navbar_jsx("div", {
    className: "nav-item"
  }, Navbar_jsx(link_default.a, {
    href: "/customer-login"
  }, Navbar_jsx("a", {
    className: "navbar-icon-link"
  }, Navbar_jsx("svg", {
    className: "svg-icon"
  }, Navbar_jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#male-user-1"
  })), Navbar_jsx("span", {
    className: "text-sm ml-2 ml-lg-0 text-uppercase text-sm font-weight-bold d-none d-sm-inline d-lg-none"
  }, "Log in")))), Navbar_jsx(CartOverviewDropdown["a" /* default */], null))))), Navbar_jsx(external_reactstrap_["Navbar"], {
    expand: "lg",
    dark: true,
    className: "shadow bg-dark mb-3"
  }, Navbar_jsx(external_reactstrap_["Container"], {
    fluid: true
  }, Navbar_jsx(external_reactstrap_["NavbarBrand"], {
    href: "/"
  }, Navbar_jsx("span", {
    className: "font-weight-bold text-uppercase"
  }, "Sell", Navbar_jsx("span", {
    className: "text-primary"
  }, "."), " ")), Navbar_jsx(external_reactstrap_["NavbarToggler"], {
    "aria-label": "Toggle navigation",
    onClick: () => toggle("navbar-3")
  }, Navbar_jsx("i", {
    className: "fa fa-bars"
  })), Navbar_jsx(external_reactstrap_["Collapse"], {
    navbar: true,
    isOpen: open["navbar-3"]
  }, Navbar_jsx(external_reactstrap_["Nav"], {
    navbar: true,
    className: "mx-auto"
  }, Navbar_jsx(external_reactstrap_["NavItem"], {
    className: "active"
  }, Navbar_jsx(external_reactstrap_["NavLink"], {
    href: "#"
  }, "Home ", Navbar_jsx("span", {
    className: "sr-only"
  }, "(current)"))), Navbar_jsx(external_reactstrap_["NavItem"], null, Navbar_jsx(external_reactstrap_["NavLink"], {
    href: "#"
  }, "Link")), Navbar_jsx(external_reactstrap_["Dropdown"], {
    isOpen: open["navbar-dropdown-3"],
    toggle: () => toggle("navbar-dropdown-3"),
    nav: true,
    inNavbar: true
  }, Navbar_jsx(external_reactstrap_["DropdownToggle"], {
    caret: true,
    nav: true
  }, "Dropdown"), Navbar_jsx(external_reactstrap_["DropdownMenu"], null, Navbar_jsx(external_reactstrap_["DropdownItem"], {
    href: "#"
  }, "Action"), Navbar_jsx(external_reactstrap_["DropdownItem"], {
    href: "#"
  }, "Another action"), Navbar_jsx(external_reactstrap_["DropdownItem"], {
    divider: true
  }), Navbar_jsx(external_reactstrap_["DropdownItem"], {
    href: "#"
  }, "Something else here")))), Navbar_jsx("div", {
    className: "right-col d-flex align-items-center justify-content-between justify-content-lg-end my-3 my-lg-0"
  }, Navbar_jsx("div", {
    className: "nav-item navbar-icon-link",
    "data-toggle": "search",
    onClick: () => setSearchToggle(!searchToggle)
  }, Navbar_jsx("svg", {
    className: "svg-icon"
  }, Navbar_jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#search-1"
  }))), Navbar_jsx("div", {
    className: "nav-item"
  }, Navbar_jsx(link_default.a, {
    href: "/customer-login"
  }, Navbar_jsx("a", {
    className: "navbar-icon-link"
  }, Navbar_jsx("svg", {
    className: "svg-icon"
  }, Navbar_jsx("use", {
    xlinkHref: "/icons/orion-svg-sprite.svg#male-user-1"
  })), Navbar_jsx("span", {
    className: "text-sm ml-2 ml-lg-0 text-uppercase text-sm font-weight-bold d-none d-sm-inline d-lg-none"
  }, "Log in")))), Navbar_jsx(CartOverviewDropdown["a" /* default */], null)))))), Navbar_jsx("div", {
    className: "mt-4"
  }, Navbar_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Navbar_highlightCode)));
};

/* harmony default export */ var Navbar = (NavbarComponent);
const Navbar_highlightCode = `import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container } from 'reactstrap'

const Component = () => {
    const [navOpen, setNavOpen] = React.useState(false)
    const [dropdownOpen, setDropdownOpen] = React.useState(false)
    
    return (
        <Navbar expand="lg" light>
            <Container fluid>
                <NavbarBrand href="/">Varkala</NavbarBrand>
                <NavbarToggler aria-label="Toggle navigation" onClick={() => setNavOpen(!navOpen)} ><i className="fa fa-bars" /></NavbarToggler>
                <Collapse navbar isOpen={navOpen}>
                    <Nav navbar className="mr-auto">
                        <NavItem className="active">
                            <NavLink href="#">Home <span className="sr-only">(current)</span></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Link</NavLink>
                        </NavItem>
                        <Dropdown isOpen={dropdownOpen} toggle={() => setDropdownOpen(!dropdownOpen)} nav inNavbar>
                            <DropdownToggle caret nav>Dropdown</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="#">Action</DropdownItem>
                                <DropdownItem href="#">Another action</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem href="#">Something else here</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <NavItem>
                            <NavLink href="#" disabled>Disabled</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default Component
`;
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./src/components/Docs/Bootstrap/Navs.js
var Navs_jsx = external_react_default.a.createElement;






const Navs = () => {
  const [tab, setTab] = external_react_default.a.useState('1');

  const toggleTab = (e, tab) => {
    e.preventDefault();
    setTab(tab);
  };

  return Navs_jsx("div", {
    id: "navs",
    className: "docs-item element"
  }, Navs_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Navs"), Navs_jsx("div", {
    className: "docs-desc"
  }, Navs_jsx("p", {
    className: "lead"
  }, "Documentation and examples for how to use Bootstrap\u2019s included navigation components. See the ", Navs_jsx("a", {
    href: "https://reactstrap.github.io/components/navs/"
  }, "ReactStrap documentation"), " for more details. ")), Navs_jsx("div", {
    className: "mt-5"
  }, Navs_jsx(external_reactstrap_["Card"], {
    className: "mb-3"
  }, Navs_jsx(external_reactstrap_["CardBody"], null, Navs_jsx("h6", {
    className: "mb-4"
  }, "Horizontal"), Navs_jsx(external_reactstrap_["Nav"], null, Navs_jsx(external_reactstrap_["NavItem"], null, Navs_jsx(external_reactstrap_["NavLink"], {
    href: "#",
    active: true
  }, "Active")), Navs_jsx(external_reactstrap_["NavItem"], null, Navs_jsx(external_reactstrap_["NavLink"], {
    href: "#"
  }, "Link")), Navs_jsx(external_reactstrap_["NavItem"], null, Navs_jsx(external_reactstrap_["NavLink"], {
    href: "#"
  }, "Link")), Navs_jsx(external_reactstrap_["NavItem"], null, Navs_jsx(external_reactstrap_["NavLink"], {
    href: "#",
    disabled: true
  }, "Disabled"))))), Navs_jsx(external_reactstrap_["Card"], {
    className: "mb-3"
  }, Navs_jsx(external_reactstrap_["CardBody"], null, Navs_jsx("h6", {
    className: "mb-4"
  }, "Vertical"), Navs_jsx(external_reactstrap_["Nav"], {
    className: "flex-md-column"
  }, Navs_jsx(external_reactstrap_["NavItem"], null, Navs_jsx(external_reactstrap_["NavLink"], {
    href: "#",
    className: "active"
  }, "Active")), Navs_jsx(external_reactstrap_["NavItem"], null, Navs_jsx(external_reactstrap_["NavLink"], {
    href: "#"
  }, "Link")), Navs_jsx(external_reactstrap_["NavItem"], null, Navs_jsx(external_reactstrap_["NavLink"], {
    href: "#"
  }, "Link")), Navs_jsx(external_reactstrap_["NavItem"], null, Navs_jsx(external_reactstrap_["NavLink"], {
    href: "#",
    disabled: true
  }, "Disabled"))))), Navs_jsx(external_reactstrap_["Card"], {
    className: "mb-3"
  }, Navs_jsx(external_reactstrap_["CardBody"], null, Navs_jsx("h6", {
    className: "mb-4"
  }, "Tabs"), Navs_jsx(external_reactstrap_["Nav"], {
    tabs: true
  }, Navs_jsx(external_reactstrap_["NavItem"], null, Navs_jsx(external_reactstrap_["NavLink"], {
    href: "#",
    className: external_classnames_default()({
      active: tab === '1'
    }),
    onClick: e => toggleTab(e, '1')
  }, "Tab One")), Navs_jsx(external_reactstrap_["NavItem"], null, Navs_jsx(external_reactstrap_["NavLink"], {
    href: "#",
    className: external_classnames_default()({
      active: tab === '2'
    }),
    onClick: e => toggleTab(e, '2')
  }, "Tab Two")), Navs_jsx(external_reactstrap_["NavItem"], null, Navs_jsx(external_reactstrap_["NavLink"], {
    href: "#",
    className: external_classnames_default()({
      active: tab === '3'
    }),
    onClick: e => toggleTab(e, '3')
  }, "Tab Three"))), Navs_jsx(external_reactstrap_["TabContent"], {
    activeTab: tab,
    className: "py-5 px-3"
  }, Navs_jsx(external_reactstrap_["TabPane"], {
    tabId: "1"
  }, Navs_jsx("p", {
    className: "text-muted"
  }, "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections")), Navs_jsx(external_reactstrap_["TabPane"], {
    tabId: "2"
  }, Navs_jsx("p", {
    className: "text-muted"
  }, "The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. \"What's happened to me?\" he thought. It wasn't a dream.")), Navs_jsx(external_reactstrap_["TabPane"], {
    tabId: "3"
  }, Navs_jsx("p", {
    className: "text-muted"
  }, "His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table.")))))), Navs_jsx("div", {
    className: "mt-4"
  }, Navs_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Navs_highlightCode)));
};

/* harmony default export */ var Bootstrap_Navs = (Navs);
const Navs_highlightCode = `import { Nav, NavItem, NavLink } from 'reactstrap'

const Component = () => {
    return (
        <Nav>
            <NavItem><NavLink href="#" active>Active</NavLink></NavItem>
            <NavItem><NavLink href="#">Link</NavLink></NavItem>
            <NavItem><NavLink href="#">Link</NavLink></NavItem>
            <NavItem><NavLink href="#" disabled>Disabled</NavLink></NavItem>
        </Nav>
    )
}

export default Component
`;
// CONCATENATED MODULE: ./src/components/Docs/Bootstrap/Pagination.js
var Pagination_jsx = external_react_default.a.createElement;





const PaginationComponent = () => {
  return Pagination_jsx("div", {
    id: "pagination",
    className: "docs-item element"
  }, Pagination_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Pagination"), Pagination_jsx("div", {
    className: "docs-desc"
  }, Pagination_jsx("p", {
    className: "lead"
  }, "Pagination to indicate a series of related content exists across multiple pages. See the ", Pagination_jsx("a", {
    href: "https://reactstrap.github.io/components/pagination/"
  }, "ReactStrap documentation"), " for more details. ")), Pagination_jsx("div", {
    className: "mt-5"
  }, Pagination_jsx(external_reactstrap_["Pagination"], {
    "aria-label": "Page navigation example"
  }, Pagination_jsx(external_reactstrap_["PaginationItem"], null, Pagination_jsx(external_reactstrap_["PaginationLink"], {
    href: "#",
    "aria-label": "Previous"
  }, "Previous")), Pagination_jsx(external_reactstrap_["PaginationItem"], {
    active: true
  }, Pagination_jsx(external_reactstrap_["PaginationLink"], {
    href: "#"
  }, "1")), Pagination_jsx(external_reactstrap_["PaginationItem"], null, Pagination_jsx(external_reactstrap_["PaginationLink"], {
    href: "#"
  }, "2")), Pagination_jsx(external_reactstrap_["PaginationItem"], null, Pagination_jsx(external_reactstrap_["PaginationLink"], {
    href: "#"
  }, "3")), Pagination_jsx(external_reactstrap_["PaginationItem"], null, Pagination_jsx(external_reactstrap_["PaginationLink"], {
    href: "#"
  }, "4")), Pagination_jsx(external_reactstrap_["PaginationItem"], null, Pagination_jsx(external_reactstrap_["PaginationLink"], {
    href: "#",
    "aria-label": "Next"
  }, "Next")))), Pagination_jsx("div", {
    className: "mt-4"
  }, Pagination_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Pagination_highlightCode)));
};

/* harmony default export */ var Pagination = (PaginationComponent);
const Pagination_highlightCode = `import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'

const Component = () => {
    return (
        <Pagination aria-label="Page navigation example">
            <PaginationItem>
                <PaginationLink href="#" aria-label="Previous">Previous</PaginationLink>
            </PaginationItem>
            <PaginationItem active>
                <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href="#" aria-label="Next">Next</PaginationLink>
            </PaginationItem>
        </Pagination>
    )
}

export default Component
`;
// CONCATENATED MODULE: ./src/components/Docs/Bootstrap/Progress.js
var Progress_jsx = external_react_default.a.createElement;





const ProgressComponent = () => {
  return Progress_jsx("div", {
    id: "progress",
    className: "docs-item element"
  }, Progress_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Progress"), Progress_jsx("div", {
    className: "docs-desc"
  }, Progress_jsx("p", {
    className: "lead"
  }, "Bootstrap custom progress bars featuring support for stacked bars, animated backgrounds, and text labels. See the ", Progress_jsx("a", {
    href: "https://reactstrap.github.io/components/progress/"
  }, "ReactStrap documentation"), " for more details. ")), Progress_jsx("div", {
    className: "mt-5"
  }, Progress_jsx(external_reactstrap_["Card"], null, Progress_jsx(external_reactstrap_["CardBody"], null, Progress_jsx(external_reactstrap_["Progress"], {
    value: "25",
    color: "primary",
    className: "mb-3"
  }), Progress_jsx(external_reactstrap_["Progress"], {
    value: "50",
    color: "info",
    className: "mb-3"
  }), Progress_jsx(external_reactstrap_["Progress"], {
    value: "75",
    color: "gray-600",
    className: "mb-3"
  }), Progress_jsx(external_reactstrap_["Progress"], {
    value: "100",
    color: "dark"
  })))), Progress_jsx("div", {
    className: "mt-4"
  }, Progress_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Progress_highlightCode)));
};

/* harmony default export */ var Progress = (ProgressComponent);
const Progress_highlightCode = `import { Progress } from 'reactstrap'

const Component = () => {
    return (
        <>
            <Progress value="25" color="primary"/>
            <Progress value="50" color="info"/>
            <Progress value="75" color="gray-600"/>
            <Progress value="100" color="dark" />
        </>
    )
}

export default Component
`;
// CONCATENATED MODULE: ./src/components/Docs/Bootstrap/Tooltips.js
var Tooltips_jsx = external_react_default.a.createElement;

function Tooltips_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Tooltips_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Tooltips_ownKeys(Object(source), true).forEach(function (key) { Tooltips_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Tooltips_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Tooltips_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Tooltips = () => {
  const [tooltipActive, setTooltipActive] = external_react_default.a.useState({});

  const toggle = name => {
    setTooltipActive(Tooltips_objectSpread(Tooltips_objectSpread({}, tooltipActive), {}, {
      [name]: !tooltipActive[name]
    }));
  };

  return Tooltips_jsx("div", {
    id: "tooltips",
    className: "docs-item element"
  }, Tooltips_jsx("h5", {
    className: "text-uppercase mb-4"
  }, "Tooltips"), Tooltips_jsx("div", {
    className: "docs-desc"
  }, Tooltips_jsx("p", {
    className: "lead"
  }, "Custom Bootstrap tooltips with CSS and JavaScript using CSS3 for animations and data-attributes for local title storage. See the ", Tooltips_jsx("a", {
    href: "https://reactstrap.github.io/components/tooltips/"
  }, "ReactStrap documentation"), " for more details. ")), Tooltips_jsx("div", {
    className: "mt-5"
  }, Tooltips_jsx(external_reactstrap_["Card"], null, Tooltips_jsx(external_reactstrap_["CardBody"], null, Tooltips_jsx(external_reactstrap_["Button"], {
    color: "outline-dark",
    className: "mr-1 mb-2",
    id: "Tooltip1"
  }, "Tooltip on top"), Tooltips_jsx(external_reactstrap_["Tooltip"], {
    placement: "top",
    isOpen: tooltipActive["tooltip-1"],
    target: "Tooltip1",
    toggle: () => toggle("tooltip-1")
  }, "Tooltip on top"), Tooltips_jsx(external_reactstrap_["Button"], {
    color: "outline-dark",
    className: "mr-1 mb-2",
    id: "Tooltip2"
  }, "Tooltip on right"), Tooltips_jsx(external_reactstrap_["Tooltip"], {
    placement: "right",
    isOpen: tooltipActive["tooltip-2"],
    target: "Tooltip2",
    toggle: () => toggle("tooltip-2")
  }, "Tooltip on right"), Tooltips_jsx(external_reactstrap_["Button"], {
    color: "outline-dark",
    className: "mr-1 mb-2",
    id: "Tooltip3"
  }, "Tooltip on bottom"), Tooltips_jsx(external_reactstrap_["Tooltip"], {
    placement: "bottom",
    isOpen: tooltipActive["tooltip-3"],
    target: "Tooltip3",
    toggle: () => toggle("tooltip-3")
  }, "Tooltip on bottom"), Tooltips_jsx(external_reactstrap_["Button"], {
    color: "outline-dark",
    className: "mr-1 mb-2",
    id: "Tooltip4"
  }, "Tooltip on left"), Tooltips_jsx(external_reactstrap_["Tooltip"], {
    placement: "left",
    isOpen: tooltipActive["tooltip-4"],
    target: "Tooltip4",
    toggle: () => toggle("tooltip-4")
  }, "Tooltip on left")))), Tooltips_jsx("div", {
    className: "mt-4"
  }, Tooltips_jsx(external_react_syntax_highlighter_["Prism"], {
    language: "javascript",
    style: prism_["tomorrow"],
    className: "rounded shadow p-4"
  }, Tooltips_highlightCode)));
};

/* harmony default export */ var Bootstrap_Tooltips = (Tooltips);
const Tooltips_highlightCode = `import { Button, Tooltip } from 'reactstrap'

const Component = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <Button id="Tooltip1">Tooltip on top</Button>
            <Tooltip
                placement="top"
                isOpen={open}
                target="Tooltip1"
                toggle={() => setOpen(!open)}
            >
                Tooltip on top
            </Tooltip>
        </>
    )
}

export default Component
`;
// EXTERNAL MODULE: ./src/components/Breadcrumbs.js
var components_Breadcrumbs = __webpack_require__("bFM8");

// CONCATENATED MODULE: ./src/pages/docs/components-bootstrap.js
var components_bootstrap_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




















async function getStaticProps() {
  return {
    props: {
      nav: {
        light: true
      },
      title: "Bootstrap Components"
    }
  };
}

const ComponentsBootstrap = () => {
  const ScrollLink = external_react_scroll_["Link"];
  const scrollLinkProps = {
    offset: -100,
    spy: true,
    smooth: true,
    activeClass: "active",
    className: "nav-link",
    href: "#"
  };
  return components_bootstrap_jsx(external_react_default.a.Fragment, null, components_bootstrap_jsx("section", {
    className: "hero"
  }, components_bootstrap_jsx(external_reactstrap_["Container"], null, components_bootstrap_jsx(components_Breadcrumbs["a" /* default */], {
    links: [{
      name: "Home",
      link: "/"
    }, {
      name: "Bootstrap Components",
      active: true
    }],
    className: "justify-content-center"
  }), components_bootstrap_jsx("div", {
    className: "hero-content pb-5 text-center"
  }, components_bootstrap_jsx("h1", {
    className: "hero-heading"
  }, "Bootstrap Components"), components_bootstrap_jsx(external_reactstrap_["Row"], null, components_bootstrap_jsx(external_reactstrap_["Col"], {
    xl: {
      size: 8,
      offset: 2
    }
  }, components_bootstrap_jsx("p", {
    className: "lead text-muted"
  }, "This is a quick showcase of some of the main Bootstrap components that come with this theme. Theme uses ReactStrap plugin which extends Bootstrap framework and makes using Bootstrap in React easy.", " "), components_bootstrap_jsx("p", {
    className: "lead text-muted"
  }, "This theme uses ReactStrap plugin which extends Bootstrap framework and makes using Bootstrap in React easy. Read more about ReactStrap", " ", components_bootstrap_jsx("a", {
    href: "https://reactstrap.github.io/"
  }, "here"), ".")))))), components_bootstrap_jsx(external_reactstrap_["Container"], {
    fluid: true
  }, components_bootstrap_jsx(external_reactstrap_["Row"], {
    className: "px-xl-5"
  }, components_bootstrap_jsx(external_reactstrap_["Col"], {
    lg: "2"
  }, components_bootstrap_jsx(DocsNav["a" /* default */], null)), components_bootstrap_jsx(external_reactstrap_["Col"], {
    lg: "10",
    xl: "8",
    className: "docs-content position-relative"
  }, components_bootstrap_jsx(Bootstrap_Alerts, null), components_bootstrap_jsx(Bootstrap_Badges, null), components_bootstrap_jsx(Bootstrap_Breadcrumbs, null), components_bootstrap_jsx(Bootstrap_Buttons, null), components_bootstrap_jsx(Card, null), components_bootstrap_jsx(Bootstrap_Dropdowns, null), components_bootstrap_jsx(Bootstrap_Forms, null), components_bootstrap_jsx(ListGroup, null), components_bootstrap_jsx(Modal, null), components_bootstrap_jsx(Navbar, null), components_bootstrap_jsx(Bootstrap_Navs, null), components_bootstrap_jsx(Pagination, null), components_bootstrap_jsx(Progress, null), components_bootstrap_jsx(Bootstrap_Tooltips, null)), components_bootstrap_jsx(external_reactstrap_["Col"], {
    xl: "2"
  }, components_bootstrap_jsx(external_reactstrap_["Nav"], {
    tag: "nav",
    pills: true,
    className: "flex-column sticky-top ml-1 p-3 mb-5 border-left d-none d-xl-block",
    style: {
      zIndex: "1"
    }
  }, components_bootstrap_jsx("h6", {
    className: "sidebar-heading"
  }, "Main components"), sidebarMenu.map(item => components_bootstrap_jsx(ScrollLink, _extends({
    key: item.label,
    to: item.to
  }, scrollLinkProps), item.label)))))));
};

/* harmony default export */ var components_bootstrap = __webpack_exports__["default"] = (ComponentsBootstrap);
const sidebarMenu = [{
  label: "Alert",
  to: "alerts"
}, {
  label: "Badges",
  to: "badges"
}, {
  label: "Breadcrumb",
  to: "breadcrumb"
}, {
  label: "Buttons",
  to: "buttons"
}, {
  label: "Card",
  to: "card"
}, {
  label: "Dropdowns",
  to: "dropdowns"
}, {
  label: "Forms",
  to: "forms"
}, {
  label: "List Group",
  to: "listgroup"
}, {
  label: "Modal",
  to: "modal"
}, {
  label: "Navbar",
  to: "navbar"
}, {
  label: "Navs",
  to: "navs"
}, {
  label: "Pagination",
  to: "pagination"
}, {
  label: "Progress",
  to: "progress"
}, {
  label: "Tooltips",
  to: "tooltips"
}];

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

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/vp+");


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

/***/ "88KH":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

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

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

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

/***/ "RyM3":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

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

/***/ })

/******/ });