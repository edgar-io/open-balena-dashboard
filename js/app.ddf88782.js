(function(e){function t(t){for(var r,o,i=t[0],c=t[1],s=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={2:0},a={2:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{1:"c29c4eb4",3:"bf78d8e1",4:"b33020eb",5:"76b12da6",6:"f70e06d0"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={3:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{1:"31d6cfe0",3:"62a88d69",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0"}[e]+".css",a=c.p+r,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var s=u[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=u);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;u.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"someGetter",(function(){return k}));var o={};n.r(o),n.d(o,"setToken",(function(){return x})),n.d(o,"setSDK",(function(){return P}));var a={};n.r(a),n.d(a,"someAction",(function(){return O}));n("ac1f"),n("5319"),n("96cf");var u=n("c973"),i=n.n(u),c=(n("5c7d"),n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),s=n("1f91"),l=n("42d2"),f=n("b05d");c["a"].use(f["a"],{config:{},lang:s["a"],iconSet:l["a"]});var p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},d=[],h={name:"App"},m=h,b=n("2877"),v=Object(b["a"])(m,p,d,!1,null,null,null),g=v.exports,w=n("2f62"),y=function(){return{loggedIn:!1,token:"",sdk:void 0}};function k(){}function x(e,t){e.token=t,e.loggedIn=!0}function P(e,t){e.sdk=t}function O(){}var j={namespaced:!0,getters:r,mutations:o,actions:a,state:y};c["a"].use(w["a"]);var A=function(){var e=new w["a"].Store({modules:{main:j},strict:!1});return e},E=n("8c4f"),S=(n("d3b7"),n("e6cf"),[{path:"/",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"713b"))},children:[{path:"login",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"24f8"))},name:"name"},{path:"",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"24f8"))}},{path:"home",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"8b24"))},meta:{requiresAuth:!0},name:"home"},{path:"application/:id",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"40f0"))},meta:{requiresAuth:!0},name:"application"}]},{path:"*",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}}]),_=S;c["a"].use(E["a"]);var C=function(){var e=new E["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:_,mode:"hash",base:""});return e},N=function(){return q.apply(this,arguments)};function q(){return q=i()(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof A){e.next=6;break}return e.next=3,A({Vue:c["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=A;case 7:if(t=e.t0,"function"!==typeof C){e.next=14;break}return e.next=11,C({Vue:c["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=C;case 15:return n=e.t1,t.$router=n,r={router:n,store:t,render:function(e){return e(g)}},r.el="#q-app",e.abrupt("return",{app:r,store:t,router:n});case 20:case"end":return e.stop()}}),e)}))),q.apply(this,arguments)}var T=n("a925"),L={failed:"Action failed",success:"Action was successful",home:"Home",links:"Essential Links",logs:"Show logs",name:"Name",online:"Online/VPN Connected",ip:"IP Address",note:"Note",overall:"Overall status / progress",notloaded:"Not loaded",link:"Open Balena link",password:"Password",email:"E-mail"},R={"en-us":L};c["a"].use(T["a"]);var B=new T["a"]({locale:"en-us",fallbackLocale:"en-us",messages:R}),I=function(e){var t=e.app;t.i18n=B},V=n("bc3a"),M=n.n(V);c["a"].prototype.$axios=M.a;n("45fc");var D=n("4bde"),$=Object(D["boot"])(function(){var e=i()(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.app,n=t.router,r=t.store,t.Vue,n.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?r.state.main.loggedIn?n():n({path:"/login",query:{redirect:e.fullPath}}):n()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),H="";function J(){return K.apply(this,arguments)}function K(){return K=i()(regeneratorRuntime.mark((function e(){var t,n,r,o,a,u,i,s,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,n=t.app,r=t.store,o=t.router,a=!1,u=function(e){a=!0;var t=Object(e)===e?o.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),s=[I,void 0,$],l=0;case 11:if(!(!1===a&&l<s.length)){e.next=29;break}if("function"===typeof s[l]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,s[l]({app:n,router:o,store:r,Vue:c["a"],ssrContext:null,redirect:u,urlPath:i,publicPath:H});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:l++,e.next=11;break;case 29:if(!0!==a){e.next=31;break}return e.abrupt("return");case 31:new c["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),K.apply(this,arguments)}J()},"31cd":function(e,t,n){}});