_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[58],{"20a2":function(e,a,s){e.exports=s("nOHt")},"9a8N":function(e,a,s){"use strict";var t=s("ELrk"),n=s("sDqW"),o=s("q1tI"),r=s.n(o),c=s("17x9"),l=s.n(c),i=s("TSYQ"),u=s.n(i),f=s("33Jr"),d={tabs:l.a.bool,pills:l.a.bool,vertical:l.a.oneOfType([l.a.bool,l.a.string]),horizontal:l.a.string,justified:l.a.bool,fill:l.a.bool,navbar:l.a.bool,card:l.a.bool,tag:f.q,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,s=e.cssModule,o=e.tabs,c=e.pills,l=e.vertical,i=e.horizontal,d=e.justified,m=e.fill,p=e.navbar,v=e.card,b=e.tag,h=Object(n.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),g=Object(f.m)(u()(a,p?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(l),{"nav-tabs":o,"card-header-tabs":v&&o,"nav-pills":c,"card-header-pills":v&&c,"nav-justified":d,"nav-fill":m}),s);return r.a.createElement(b,Object(t.a)({},h,{className:g}))};m.propTypes=d,m.defaultProps={tag:"ul",vertical:!1},a.a=m},BRRx:function(e,a,s){"use strict";function t(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}s.d(a,"a",(function(){return t}))},"EvW+":function(e,a,s){"use strict";var t=s("ELrk"),n=s("sDqW"),o=s("q1tI"),r=s.n(o),c=s("17x9"),l=s.n(c),i=s("TSYQ"),u=s.n(i),f=s("33Jr"),d={tag:f.q,active:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,s=e.cssModule,o=e.active,c=e.tag,l=Object(n.a)(e,["className","cssModule","active","tag"]),i=Object(f.m)(u()(a,!!o&&"active","breadcrumb-item"),s);return r.a.createElement(c,Object(t.a)({},l,{className:i,"aria-current":o?"page":void 0}))};m.propTypes=d,m.defaultProps={tag:"li"},a.a=m},QZif:function(e,a){function s(a,t){return e.exports=s=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e},e.exports.default=e.exports,e.exports.__esModule=!0,s(a,t)}e.exports=s,e.exports.default=e.exports,e.exports.__esModule=!0},XI7o:function(e,a,s){"use strict";var t=s("ELrk"),n=s("sDqW"),o=s("q1tI"),r=s.n(o),c=s("17x9"),l=s.n(c),i=s("TSYQ"),u=s.n(i),f=s("33Jr"),d={tag:f.q,listTag:f.q,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,children:l.a.node,"aria-label":l.a.string},m=function(e){var a=e.className,s=e.listClassName,o=e.cssModule,c=e.children,l=e.tag,i=e.listTag,d=e["aria-label"],m=Object(n.a)(e,["className","listClassName","cssModule","children","tag","listTag","aria-label"]),p=Object(f.m)(u()(a),o),v=Object(f.m)(u()("breadcrumb",s),o);return r.a.createElement(l,Object(t.a)({},m,{className:p,"aria-label":d}),r.a.createElement(i,{className:v},c))};m.propTypes=d,m.defaultProps={tag:"nav",listTag:"ol","aria-label":"breadcrumb"},a.a=m},YFqc:function(e,a,s){e.exports=s("cTJO")},arvA:function(e,a,s){"use strict";var t=s("ELrk"),n=s("sDqW"),o=s("BRRx"),r=s("tEjU"),c=s("q1tI"),l=s.n(c),i=s("17x9"),u=s.n(i),f=s("TSYQ"),d=s.n(f),m=s("33Jr"),p={tag:m.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},v=function(e){function a(a){var s;return(s=e.call(this,a)||this).onClick=s.onClick.bind(Object(o.a)(s)),s}Object(r.a)(a,e);var s=a.prototype;return s.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},s.render=function(){var e=this.props,a=e.className,s=e.cssModule,o=e.active,r=e.tag,c=e.innerRef,i=Object(n.a)(e,["className","cssModule","active","tag","innerRef"]),u=Object(m.m)(d()(a,"nav-link",{disabled:i.disabled,active:o}),s);return l.a.createElement(r,Object(t.a)({},i,{ref:c,onClick:this.onClick,className:u}))},a}(l.a.Component);v.propTypes=p,v.defaultProps={tag:"a"},a.a=v},bFM8:function(e,a,s){"use strict";var t=s("q1tI"),n=s.n(t),o=s("YFqc"),r=s.n(o),c=s("XI7o"),l=s("EvW+"),i=n.a.createElement;a.a=function(e){var a=e.links;return i(c.a,{listClassName:e.className?e.className:"justify-content-center no-border mb-0"},a.map((function(a,s){return i(l.a,{key:s,active:!!a.active||null},a.link?i(r.a,{href:a.link},i("a",{className:e.linkClass?e.linkClass:""},a.name)):i("span",{className:e.spanClass?e.spanClass:""},a.name))})))}},blVf:function(e,a,s){"use strict";var t=s("q1tI"),n=s.n(t),o=s("9a8N"),r=s("arvA"),c=s("re7B"),l=n.a.createElement;a.a=function(){return l("div",{style:{top:"40px",zIndex:"1"},className:"sticky-top mb-5"},l("div",{className:"sidebar-block"},l("h6",{className:"sidebar-heading"},"Documentation"),l(o.a,{tag:"nav",pills:!0,className:"flex-column"},l(c.a,{activeClassName:"active",href:"/docs/introduction",passHref:!0},l(r.a,{className:"mb-2"},"Introduction")),l(c.a,{activeClassName:"active",href:"/docs/directory-structure",passHref:!0},l(r.a,{className:"mb-2"},"Directory structure")),l(c.a,{activeClassName:"active",href:"/docs/next",passHref:!0},l(r.a,{className:"mb-2"},"Next.js")),l(c.a,{activeClassName:"active",href:"/docs/customizing-css",passHref:!0},l(r.a,{className:"mb-2"},"Customizing CSS")),l(c.a,{activeClassName:"active",href:"/docs/demo-data",passHref:!0},l(r.a,{className:"mb-2"},"Demo data")),l(c.a,{activeClassName:"active",href:"/docs/credits",passHref:!0},l(r.a,{className:"mb-2"},"Credits")),l(c.a,{activeClassName:"active",href:"/docs/changelog",passHref:!0},l(r.a,{className:"mb-2"},"Changelog")))),l("div",{className:"sidebar-block"},l("h6",{className:"sidebar-heading"},"Components"),l(o.a,{tag:"nav",pills:!0,className:"flex-column"},l(c.a,{activeClassName:"active",href:"/docs/components-bootstrap",passHref:!0},l(r.a,{className:"mb-2"},"Bootstrap")),l(c.a,{activeClassName:"active",href:"/docs/components-theme",passHref:!0},l(r.a,{className:"mb-2"},"Theme")))))}},cTJO:function(e,a,s){"use strict";var t=s("zoAU"),n=s("7KCV");a.__esModule=!0,a.default=void 0;var o=n(s("q1tI")),r=s("elyg"),c=s("nOHt"),l=s("vNVm"),i={};function u(e,a,s,t){if(e&&(0,r.isLocalURL)(a)){e.prefetch(a,s,t).catch((function(e){0}));var n=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;i[a+"%"+s+(n?"%"+n:"")]=!0}}var f=function(e){var a=!1!==e.prefetch,s=(0,c.useRouter)(),n=s&&s.pathname||"/",f=o.default.useMemo((function(){var a=(0,r.resolveHref)(n,e.href,!0),s=t(a,2),o=s[0],c=s[1];return{href:o,as:e.as?(0,r.resolveHref)(n,e.as):c||o}}),[n,e.href,e.as]),d=f.href,m=f.as,p=e.children,v=e.replace,b=e.shallow,h=e.scroll,g=e.locale;"string"===typeof p&&(p=o.default.createElement("a",null,p));var N=o.Children.only(p),y=N&&"object"===typeof N&&N.ref,j=(0,l.useIntersection)({rootMargin:"200px"}),C=t(j,2),x=C[0],O=C[1],E=o.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);(0,o.useEffect)((function(){var e=O&&a&&(0,r.isLocalURL)(d),t="undefined"!==typeof g?g:s&&s.locale,n=i[d+"%"+m+(t?"%"+t:"")];e&&!n&&u(s,d,m,{locale:t})}),[m,d,O,g,a,s]);var k={ref:E,onClick:function(e){N.props&&"function"===typeof N.props.onClick&&N.props.onClick(e),e.defaultPrevented||function(e,a,s,t,n,o,c,l){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,r.isLocalURL)(s))&&(e.preventDefault(),null==c&&(c=t.indexOf("#")<0),a[n?"replace":"push"](s,t,{shallow:o,locale:l,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,s,d,m,v,b,h,g)},onMouseEnter:function(e){(0,r.isLocalURL)(d)&&(N.props&&"function"===typeof N.props.onMouseEnter&&N.props.onMouseEnter(e),u(s,d,m,{priority:!0}))}};if(e.passHref||"a"===N.type&&!("href"in N.props)){var w="undefined"!==typeof g?g:s&&s.locale,_=s&&s.isLocaleDomain&&(0,r.getDomainLocale)(m,w,s&&s.locales,s&&s.domainLocales);k.href=_||(0,r.addBasePath)((0,r.addLocale)(m,w,s&&s.defaultLocale))}return o.default.cloneElement(N,k)};a.default=f},cj3x:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/customizing-css",function(){return s("iv72")}])},dhJC:function(e,a,s){"use strict";function t(e,a){if(null==e)return{};var s,t,n=function(e,a){if(null==e)return{};var s,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)s=o[t],a.indexOf(s)>=0||(n[s]=e[s]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)s=o[t],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}s.d(a,"a",(function(){return t}))},iv72:function(e,a,s){"use strict";s.r(a),s.d(a,"__N_SSG",(function(){return f}));var t=s("q1tI"),n=s.n(t),o=s("1Yj4"),r=s("ok1R"),c=s("rhny"),l=s("blVf"),i=s("bFM8"),u=n.a.createElement,f=!0;a.default=function(){return u(n.a.Fragment,null,u("section",{className:"hero"},u(o.a,null,u(i.a,{links:[{name:"Home",link:"/"},{name:"Documentation",link:"/docs/introduction"},{name:"Customizing CSS",active:!0}],className:"justify-content-center"}),u("div",{className:"hero-content pb-5 text-center"},u("h1",{className:"hero-heading"},"Customizing CSS")))),u(o.a,{fluid:!0},u(r.a,{className:"px-xl-5"},u(c.a,{lg:"2"},u(l.a,null)),u(c.a,{lg:"10",xl:"8",className:"docs-content text-lg"},u("div",{id:"scssmethod",className:"docs-item"},u("h5",{className:"text-uppercase mb-4"},"SCSS Method"),u("div",{className:"docs-desc"}),u("div",{className:"mt-5"},u("p",null,"The most flexible way to edit the theme CSS or to add your own code and components to use SCSS. As mentioned before, there are two files already prepared for your changes -"," ",u("code",null,"_user-variables.scss")," and ",u("code",null,"_user.scss"),"."),u("p",null,"To configure the theme, e.g. to change colours for some elements, to change font sizes, etc., use"," ",u("code",null,"_user-variables.scss"),". Any variable from"," ",u("code",null,"src/assets/scss/bootstrap/_variables.scss")," or"," ",u("code",null,"src/assets/scss/modules/_variables.scss")," can be overridden here with your own value."),u("p",null,"To add your own CSS code, declare it in the"," ",u("code",null,"_user.scss")," file."),u("p",null,"SCSS is automatically compiled if you're running"," ",u("code",null,"next.js")," development mode."))),u("div",{id:"scssmethod",className:"docs-item"},u("h5",{className:"text-uppercase mb-4"},"Importing CSS"),u("div",{className:"docs-desc"}),u("div",{className:"mt-5"},u("p",null,"If you need to import css files for plugins, you can in do it in",u("code",null,"/src/pages/_app.js")," using following syntax"," ",u("code",null,"import 'plugin/plugin.css'"),".")))))))}},ok1R:function(e,a,s){"use strict";var t=s("ELrk"),n=s("sDqW"),o=s("q1tI"),r=s.n(o),c=s("17x9"),l=s.n(c),i=s("TSYQ"),u=s.n(i),f=s("33Jr"),d=l.a.oneOfType([l.a.number,l.a.string]),m={tag:f.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},p={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e){var a=e.className,s=e.cssModule,o=e.noGutters,c=e.tag,l=e.form,i=e.widths,d=Object(n.a)(e,["className","cssModule","noGutters","tag","form","widths"]),m=[];i.forEach((function(a,s){var t=e[a];if(delete d[a],t){var n=!s;m.push(n?"row-cols-"+t:"row-cols-"+a+"-"+t)}}));var p=Object(f.m)(u()(a,o?"no-gutters":null,l?"form-row":"row",m),s);return r.a.createElement(c,Object(t.a)({},d,{className:p}))};v.propTypes=m,v.defaultProps=p,a.a=v},re7B:function(e,a,s){"use strict";var t=s("dhJC"),n=s("20a2"),o=s("YFqc"),r=s.n(o),c=s("q1tI"),l=s.n(c),i=l.a.createElement;a.a=function(e){var a=e.children,s=e.activeClassName,o=Object(t.a)(e,["children","activeClassName"]),u=Object(n.useRouter)().asPath,f=c.Children.only(a),d=f.props.className||"",m=u===o.href?"".concat(d," ").concat(s).trim():d;return i(r.a,o,l.a.cloneElement(f,{className:m||null}))}},rhny:function(e,a,s){"use strict";var t=s("ELrk"),n=s("sDqW"),o=s("q1tI"),r=s.n(o),c=s("17x9"),l=s.n(c),i=s("TSYQ"),u=s.n(i),f=s("33Jr"),d=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:d,offset:d})]),p={tag:f.q,xs:m,sm:m,md:m,lg:m,xl:m,className:l.a.string,cssModule:l.a.object,widths:l.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,a,s){return!0===s||""===s?e?"col":"col-"+a:"auto"===s?e?"col-auto":"col-"+a+"-auto":e?"col-"+s:"col-"+a+"-"+s},h=function(e){var a=e.className,s=e.cssModule,o=e.widths,c=e.tag,l=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];o.forEach((function(a,t){var n=e[a];if(delete l[a],n||""===n){var o=!t;if(Object(f.k)(n)){var r,c=o?"-":"-"+a+"-",d=b(o,a,n.size);i.push(Object(f.m)(u()(((r={})[d]=n.size||""===n.size,r["order"+c+n.order]=n.order||0===n.order,r["offset"+c+n.offset]=n.offset||0===n.offset,r)),s))}else{var m=b(o,a,n);i.push(m)}}})),i.length||i.push("col");var d=Object(f.m)(u()(a,i),s);return r.a.createElement(c,Object(t.a)({},l,{className:d}))};h.propTypes=p,h.defaultProps=v,a.a=h},tEjU:function(e,a,s){"use strict";s.d(a,"a",(function(){return n}));var t=s("QZif");function n(e,a){e.prototype=Object.create(a.prototype),e.prototype.constructor=e,t(e,a)}}},[["cj3x",0,1,2,3]]]);