!function(n){var e={};function t(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:r})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(r,o,function(e){return n[e]}.bind(null,o));return r},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=13)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",r=n[3];if(!r)return t;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map((function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"}));return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e,t){"use strict";n.exports=function(n,e){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)||e?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(n,e){return e?e.querySelector(n):document.querySelector(n)},l=function(n){var e={};return function(n,t){if("function"==typeof n)return n();if(void 0===e[n]){var r=s.call(this,n,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}}(),c=null,u=0,f=[],p=t(3);function d(n,e){for(var t=0;t<n.length;t++){var r=n[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(y(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(y(r.parts[a],e));i[r.id]={id:r.id,refs:1,parts:s}}}}function m(n,e){for(var t=[],r={},o=0;o<n.length;o++){var i=n[o],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function g(n,e){var t=l(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===n.insertAt)r?r.nextSibling?t.insertBefore(e,r.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),f.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=l(n.insertAt.before,t);t.insertBefore(e,o)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=f.indexOf(n);e>=0&&f.splice(e,1)}function v(n){var e=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return t.nc}();r&&(n.attrs.nonce=r)}return b(e,n.attrs),g(n,e),e}function b(n,e){Object.keys(e).forEach((function(t){n.setAttribute(t,e[t])}))}function y(n,e){var t,r,o,i;if(e.transform&&n.css){if(!(i="function"==typeof e.transform?e.transform(n.css):e.transform.default(n.css)))return function(){};n.css=i}if(e.singleton){var a=u++;t=c||(c=v(e)),r=j.bind(null,t,a,!1),o=j.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",b(e,n.attrs),g(n,e),e}(e),r=U.bind(null,t,e),o=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=v(e),r=S.bind(null,t),o=function(){h(t)});return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=m(n,e);return d(t,e),function(n){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}n&&d(m(n,e),e);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var x,w=(x=[],function(n,e){return x[n]=e,x.filter(Boolean).join("\n")});function j(n,e,t,r){var o=t?"":r.css;if(n.styleSheet)n.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function S(n,e){var t=e.css,r=e.media;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function U(n,e,t){var r=t.css,o=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(r=p(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,r=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(n,e){var o,i=e.trim().replace(/^"(.*)"$/,(function(n,e){return e})).replace(/^'(.*)'$/,(function(n,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},,function(n,e,t){n.exports=t.p+"7ede93c96cb4c10d1a1ceb1cf80a2a6a.md"},,,,,,,,function(n,e,t){"use strict";t.r(e);t(14);var r=t(5),o=t.n(r);e.default=remark.create({ratio:"16:9",sourceUrl:o.a,highlightLines:!0,highlightSpans:!0,touch:!1,click:!1,scroll:!1,countIncrementalSlides:!1})},function(n,e,t){var r=t(15);"string"==typeof r&&(r=[[n.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(2)(r,o);r.locals&&(n.exports=r.locals)},function(n,e,t){(e=n.exports=t(0)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz);",""]),e.push([n.i,"@import url(https://fonts.googleapis.com/css?family=Fira+Mono);",""]),e.push([n.i,"@import url(https://fonts.googleapis.com/css?family=Fira+Sans+Condensed);",""]);var r=t(1),o=r(t(16)),i=r(t(17)),a=r(t(18));e.push([n.i,"body { font-family: 'Fira Sans Condensed'; }\nh1, h2, h3 {\n  font-family: 'Yanone Kaffeesatz';\n  font-weight: normal;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ntd, th {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n\np {\n  margin: 0.5em 0;\n}\n\n.remark-slide-content {\n  font-size: 27px;\n  padding: 1em 2em;\n}\n\n.remark-code, .remark-inline-code {\n  font-size: 20px;\n  font-family: 'Fira Mono', monospace;\n  font-variant-ligatures: contextual;\n  background: #F0F0F0;\n}\n\n.inverse {\n  background: #272822;\n  color: #777872;\n  text-shadow: 0 0 20px #333;\n}\n\n.inverse h1, .inverse h2 {\n  color: #f3f3f3;\n  line-height: 0.8em;\n}\n\n.floating_node_logo {\n  position: fixed;\n  top: 8em;\n  right: 3em;\n}\n\n.floating_node_logo img {\n  height: 10em;\n}\n\n.charlie {\n  height: 9em;\n  vertical-align: top;\n  content: url("+o+");\n}\n\n.waldo {\n  height: 2em;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  content: url("+i+");\n}\n\n.logo {\n  height: 5em;\n  vertical-align: top;\n  content: url("+a+");\n}\n\n.logo_small {\n  height: 1em;\n  vertical-align: top;\n  content: url("+a+");\n}\n\n.absolute {\n  position: absolute;\n  padding: 1em 4em 1em 4em;\n}\n.col-double {\n  width: 70%;\n}\n\n.topmargined {\n  margin-top: 6em;\n}\n\n.good ul, .bad ul, .arrow ul, .star ul {\n  list-style: none;\n  padding: 0px;\n  margin: 0.5em 0;\n}\n\n.good ul li:before\n{\n  content: '✔';\n  color: green;\n  margin: 0 1em;\n}\n\n.bad ul li:before\n{\n  content: '✖';\n  color: red;\n  margin: 0 1em;\n}\n\n.arrow ul li:before\n{\n  content: '⇛';\n  margin: 0 1em;\n}\n\n.star ul li:before\n{\n  content: '★';\n  color: gold;\n  margin: 0 1em;\n}\n\n.container {\n  display: flex;\n}\n\n.container > pre {\n  width: 50%;\n  margin: 0 1em;\n}\n\n.container > p {\n  width: 30%;\n  margin: auto;\n}\n\n.container > p > img {\n  width: 100%;\n  height: 100%;\n}\n\n.grid {\n  display: grid;\n}\n\n.grid > div {\n  margin: 0 0.5em;\n}\n\n.g_col1 {\n  grid-column: 1;\n}\n\n.g_col2 {\n  grid-column: 2;\n}\n\n.g_row1 {\n  grid-row: 1;\n}\n\n.g_row2 {\n  grid-row: 2;\n}\n\n.center table {\n  margin: auto;\n}\n\n.no_margin_top * {\n  margin-top: 0;\n}",""])},function(n,e,t){n.exports=t.p+"charlie.86e580da33df1c76c36e75a20e2e0efb.jpg"},function(n,e,t){n.exports=t.p+"waldo.af573e8ffd0865ed5338484443cea3a4.png"},function(n,e,t){n.exports=t.p+"logo_vuejs_xxx.5795838243be78906d55936800ce2b09.png"}]);