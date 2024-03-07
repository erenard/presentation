(()=>{"use strict";var n={416:(n,e,t)=>{t.d(e,{A:()=>R});var r=t(601),o=t.n(r),a=t(314),i=t.n(a),s=t(417),c=t.n(s),l=new URL(t(54),t.b),d=new URL(t(157),t.b),p=new URL(t(441),t.b),u=new URL(t(423),t.b),f=new URL(t(560),t.b),g=new URL(t(820),t.b),m=new URL(t(502),t.b),h=new URL(t(293),t.b),b=new URL(t(936),t.b),v=i()(o());v.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz);"]),v.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Fira+Mono);"]),v.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Fira+Sans+Condensed);"]);var y=c()(l),w=c()(d),x=c()(p),S=c()(u),k=c()(f),E=c()(g),T=c()(m),_=c()(h),I=c()(b);v.push([n.id,`.requirejs {\n  content: url(${y});\n}\n.node_js {\n  content: url(${w});\n}\n.bower {\n  content: url(${x})\n}\n.npm {\n  content: url(${S})\n}\n.yarn {\n  content: url(${k})\n}\n.grunt {\n  content: url(${E});\n}\n.gulp {\n  content: url(${T});\n}\n.webpack {\n  content: url(${_});\n}\n.rollup {\n  content: url(${I});\n}\n\nbody { font-family: 'Fira Sans Condensed'; }\nh1, h2, h3 {\n  font-family: 'Yanone Kaffeesatz';\n  font-weight: normal;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ntd, th {\n  padding: 6px 13px;\n  border: 1px solid #dfe2e5;\n}\n\np {\n  margin: 0.5em 0;\n}\n\n.remark-slide-content {\n  font-size: 24px;\n  padding: 1em 2em;\n}\n\n.remark-code, .remark-inline-code {\n  font-size: 20px;\n  font-family: 'Fira Mono', monospace;\n  font-variant-ligatures: contextual;\n  background: #F0F0F0;\n}\n\n.inverse {\n  background: #272822;\n  color: #777872;\n  text-shadow: 0 0 20px #333;\n}\n\n.inverse h1, .inverse h2 {\n  color: #f3f3f3;\n  line-height: 0.8em;\n}\n\n.floating_node_logo {\n  position: fixed;\n  top: 8em;\n  right: 3em;\n}\n\n.floating_node_logo {\n  height: 10em;\n}\n\n.logo {\n  width: 25%;\n  vertical-align: middle;\n}\n\n.logo_small {\n  height: 1em;\n  vertical-align: middle;\n}\n\n.absolute {\n  position: absolute;\n  padding: 1em 4em 1em 4em;\n}\n.col-double {\n  width: 70%;\n}\n\n.topmargined {\n  margin-top: 6em;\n}\n\n.good ul, .bad ul, .arrow ul, .star ul {\n  list-style: none;\n  padding: 0px;\n  margin: 0.5em 0;\n}\n\n.good ul li:before\n{\n  content: '✔';\n  color: green;\n  margin: 0 1em;\n}\n\n.bad ul li:before\n{\n  content: '✖';\n  color: red;\n  margin: 0 1em;\n}\n\n.arrow ul li:before\n{\n  content: '⇛';\n  margin: 0 1em;\n}\n\n.star ul li:before\n{\n  content: '★';\n  color: gold;\n  margin: 0 1em;\n}\n\n.container {\n  display: flex;\n}\n\n.container > pre {\n  width: 50%;\n  margin: 0 1em;\n}\n\n.container > p {\n  width: 30%;\n  margin: auto;\n}\n\n.container > p > span {\n  width: 100%;\n  height: 100%;\n}\n\n.grid {\n  display: grid;\n}\n\n.grid > div {\n  margin: 0 0.5em;\n}\n\n.g_col1 {\n  grid-column: 1;\n}\n\n.g_col2 {\n  grid-column: 2;\n}\n\n.g_row1 {\n  grid-row: 1;\n}\n\n.g_row2 {\n  grid-row: 2;\n}\n\n.center table {\n  margin: auto;\n}\n\n.no_margin_top * {\n  margin-top: 0;\n}`,""]);const R=v},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var g=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},441:(n,e,t)=>{n.exports=t.p+"845d6b3334e5179196fe.svg"},820:(n,e,t)=>{n.exports=t.p+"fffd637f1f774060de6a.svg"},502:(n,e,t)=>{n.exports=t.p+"9bc72d4873d3df1e219b.svg"},157:(n,e,t)=>{n.exports=t.p+"612965178979ceaba5fb.svg"},423:(n,e,t)=>{n.exports=t.p+"11af93f44b37b7e52cf0.svg"},54:(n,e,t)=>{n.exports=t.p+"f00e26159c893e85461f.svg"},936:(n,e,t)=>{n.exports=t.p+"e3bab7e371a8a816d1df.svg"},293:(n,e,t)=>{n.exports=t.p+"e1bdaf3e166d01f87ff8.svg"},560:(n,e,t)=>{n.exports=t.p+"4a673ceffbed086a6df9.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(72),e=t.n(n),r=t(825),o=t.n(r),a=t(659),i=t.n(a),s=t(56),c=t.n(s),l=t(540),d=t.n(l),p=t(113),u=t.n(p),f=t(416),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=i().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=d(),e()(f.A,g),f.A&&f.A.locals&&f.A.locals;const m=t.p+"f58f62de950ddb441afd0c9da9b097c5.md";remark.create({ratio:"16:9",sourceUrl:m,highlightLines:!0,highlightSpans:!0,touch:!1,click:!1,scroll:!1,countIncrementalSlides:!1}),setTimeout((function(){var n="2013-01-01 2018-01-01",e=document.getElementsByClassName("chart");trends.embed.renderExploreWidgetTo(e[0],"TIMESERIES",{comparisonItem:[{keyword:"bower",geo:"",time:n},{keyword:"npm",geo:"",time:n},{keyword:"yarn",geo:"",time:n}],category:5,property:""},{exploreQuery:"cat=5&date=today%205-y&q=bower,npm,yarn",guestPath:"https://trends.google.fr:443/trends/embed/"}),trends.embed.renderExploreWidgetTo(e[1],"TIMESERIES",{comparisonItem:[{keyword:"grunt",geo:"",time:n},{keyword:"gulp",geo:"",time:n},{keyword:"webpack",geo:"",time:n},{keyword:"rollup",geo:"",time:n}],category:5,property:""},{exploreQuery:"cat=5&date=today%205-y&q=grunt,gulp,webpack,rollup",guestPath:"https://trends.google.fr:443/trends/embed/"})}),500)})()})();