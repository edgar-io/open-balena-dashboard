(function(e){function t(t){for(var r,a,u=t[0],s=t[1],c=t[2],l=0,p=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={2:0},o={2:0},i=[];function u(e){return s.p+"js/"+({}[e]||e)+"."+{1:"ff720ea2",3:"96f59a8d",4:"5d2d95b9",5:"5fe9a150",6:"d739393a",7:"88985d85",8:"102f9b48"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={3:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{1:"31d6cfe0",3:"57008deb",4:"31d6cfe0",5:"31d6cfe0",6:"31d6cfe0",7:"31d6cfe0",8:"31d6cfe0"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){c=p[u],l=c.getAttribute("data-href");if(l===r||l===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],d.parentNode.removeChild(d),n(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var p=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=l;i.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"someGetter",(function(){return S}));var a={};n.r(a),n.d(a,"setToken",(function(){return k})),n.d(a,"setSDK",(function(){return A})),n.d(a,"selectApplication",(function(){return E})),n.d(a,"setTunnelerUrl",(function(){return P})),n.d(a,"setSSLSuffix",(function(){return R}));var o={};n.r(o),n.d(o,"someAction",(function(){return U}));n("ac1f"),n("5319"),n("96cf");var i=n("c973"),u=n.n(i),s=(n("5c7d"),n("7d6e"),n("e54f"),n("985d"),n("31cd"),n("2b0e")),c=n("1f91"),l=n("42d2"),p=n("b05d"),d=n("2a19");s["a"].use(p["a"],{config:{notify:{position:"top-right"}},lang:c["a"],iconSet:l["a"],plugins:{Notify:d["a"]}});var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},m=[],v={name:"App"},h=v,b=n("2877"),g=Object(b["a"])(h,f,m,!1,null,null,null),w=g.exports,x=n("2f62"),y=function(){return{loggedIn:!1,token:"",sdk:void 0,selectedApplication:void 0,tunnelerUrl:void 0,SSLSuffix:void 0}};function S(){}function k(e,t){e.token=t,e.loggedIn=!0}function A(e,t){e.sdk=t}function E(e,t){e.selectedApplication=t}function P(e,t){e.tunnelerUrl=t}function R(e,t){e.SSLSuffix=t}function U(){}var L={namespaced:!0,getters:r,mutations:a,actions:o,state:y};s["a"].use(x["a"]);var I=function(){var e=new x["a"].Store({modules:{main:L},strict:!1});return e},C=n("8c4f"),D=(n("d3b7"),n("e6cf"),[{path:"/",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"713b"))},children:[{path:"login",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"24f8"))},name:"name"},{path:"",component:function(){return Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"24f8"))}},{path:"home",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"8b24"))},meta:{requiresAuth:!0},name:"home"},{path:"application/:id",component:function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"40f0"))},meta:{requiresAuth:!0},name:"application"},{path:"appenvs/:id",component:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"b291"))},meta:{requiresAuth:!0},name:"applicationEnvs"},{path:"deviceenvs/:id/:deviceid",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"1481"))},meta:{requiresAuth:!0},name:"deviceEnvs"}]},{path:"*",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"e51e"))}}]),T=D;s["a"].use(C["a"]);var O=function(){var e=new C["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:T,mode:"hash",base:""});return e},j=function(){return _.apply(this,arguments)};function _(){return _=u()(regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof I){e.next=6;break}return e.next=3,I({Vue:s["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=I;case 7:if(t=e.t0,"function"!==typeof O){e.next=14;break}return e.next=11,O({Vue:s["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=O;case 15:return n=e.t1,t.$router=n,r={router:n,store:t,render:function(e){return e(w)}},r.el="#q-app",e.abrupt("return",{app:r,store:t,router:n});case 20:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}var q=n("a925"),N={failed:"Action failed",success:"Action was successful",home:"Home",links:"Essential Links",logs:"Logs terminal",name:"Name",value:"Value",online:"Online/VPN Connected",ip:"IP Address",note:"Note",overall:"Overall status / progress",notloaded:"Not loaded",link:"Open Balena link",password:"Password",email:"E-mail",reboot:"Reboot",restart:"Restart",nonote:"No notes",refresh:"Refresh",editname:"Edit name",selectedApplication:"Selected application",Devices:"Devices",homecaption:"Application selector",Home:"Home",devicescaption:"Devices status",Env:"Environment",envcaption:"Environment settings",uuid:"UUID",last_connectivity_event:"Last connectivity event",actions:"Actions",EnvVars:"Application Environment Variables",ConfigVars:"Config Vars",tunneler:"Tunneler URL",tunnelerHint:"Tunneler service (empty to not use)",exposed80:"Expose port 80",exposedssh:"Exposed ssh",rememberMe:"Remember me",created_at:"Created at",exposedSSL:"Exposed SSL",letsEncryptSuffix:"SSL suffix for auto domain exposer",letsEncryptSuffixHint:"Example '.s1.blabla.com' - will expose DEVICEUUID.s1.blabla.com as SSL",mac_address:"Mac addresses",editDeviceEnv:"Edit envs",DeviceEnvVars:"Device env vars (higher priority than application envs)",delete:"Delete"},V={"en-us":N};s["a"].use(q["a"]);var B=new q["a"]({locale:"en-us",fallbackLocale:"en-us",messages:V}),H=function(e){var t=e.app;t.i18n=B},F=n("bc3a"),z=n.n(F),M=n("4bde");s["a"].prototype.$axios=z.a;var K=Object(M["boot"])(function(){var e=u()(regeneratorRuntime.mark((function e(t){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.app,t.router,n=t.store,r=t.Vue,a={getConnectionsForDevice:function(e){return u()(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={deviceUUID:e},t.next=3,z.a.post(n.state.main.tunnelerUrl+"/connections",r,{headers:{Authorization:"Bearer "+n.state.main.token}});case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})))()},getConnectionsForApp:function(e){return u()(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={additionalLabels:{deviceAppId:e}},t.next=3,z.a.post(n.state.main.tunnelerUrl+"/connections",r,{headers:{Authorization:"Bearer "+n.state.main.token}});case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})))()},openDomainFor:function(e,t,r,a,o){return u()(regeneratorRuntime.mark((function i(){var u,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return u={deviceUUID:e,remotePort:r,forwarderType:"TRAEFIK",additionalSettings:{domainName:t,useXIP:a},additionalLabels:{deviceAppId:o}},i.next=3,z.a.post(n.state.main.tunnelerUrl+"/requestConnection",u,{headers:{Authorization:"Bearer "+n.state.main.token}});case 3:return s=i.sent,i.abrupt("return",s.data);case 5:case"end":return i.stop()}}),i)})))()},openSSLDomainFor:function(e,t,r,a){return u()(regeneratorRuntime.mark((function o(){var i,u;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return i={deviceUUID:e,remotePort:r,forwarderType:"SSLTRAEFIK",additionalSettings:{domainName:t},additionalLabels:{deviceAppId:a}},o.next=3,z.a.post(n.state.main.tunnelerUrl+"/requestConnection",i,{headers:{Authorization:"Bearer "+n.state.main.token}});case 3:return u=o.sent,o.abrupt("return",u.data);case 5:case"end":return o.stop()}}),o)})))()},openSSHTraefik:function(e,t,r,a,o){return u()(regeneratorRuntime.mark((function i(){var u,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return u={deviceUUID:e,remotePort:r,forwarderType:"SSHTRAEFIK",additionalSettings:{domainName:t,useXIP:a},additionalLabels:{deviceAppId:o}},i.next=3,z.a.post(n.state.main.tunnelerUrl+"/requestConnection",u,{headers:{Authorization:"Bearer "+n.state.main.token}});case 3:return s=i.sent,i.abrupt("return",s.data);case 5:case"end":return i.stop()}}),i)})))()},openSSH:function(e,t,r,a){return u()(regeneratorRuntime.mark((function o(){var i,u;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return i={deviceUUID:e,remotePort:r,localPort:t,forwarderType:"SSH",additionalLabels:{deviceAppId:a}},o.next=3,z.a.post(n.state.main.tunnelerUrl+"/requestConnection",i,{headers:{Authorization:"Bearer "+n.state.main.token}});case 3:return u=o.sent,o.abrupt("return",u.data);case 5:case"end":return o.stop()}}),o)})))()},deleteConnections:function(e){var t=arguments;return u()(regeneratorRuntime.mark((function r(){var a,o,i,u,s,c,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t.length>1&&void 0!==t[1]?t[1]:void 0,o=t.length>2&&void 0!==t[2]?t[2]:void 0,i=t.length>3&&void 0!==t[3]?t[3]:void 0,u=t.length>4&&void 0!==t[4]?t[4]:{},s=t.length>5&&void 0!==t[5]?t[5]:{},c={deviceUUID:e,localPort:a,remotePort:o,forwarderType:i,additionalSettings:u,additionalLabels:s},r.next=8,z.a.post(n.state.main.tunnelerUrl+"/stopConnection",c,{headers:{Authorization:"Bearer "+n.state.main.token}});case 8:return l=r.sent,r.abrupt("return",l.data);case 10:case"end":return r.stop()}}),r)})))()}},r.prototype.$tunnelerClient=a;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),$=(n("45fc"),Object(M["boot"])(function(){var e=u()(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.app,n=t.router,r=t.store,t.Vue,n.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?r.state.main.loggedIn?n():n({path:"/login",query:{redirect:e.fullPath}}):n()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),J="";function X(){return G.apply(this,arguments)}function G(){return G=u()(regeneratorRuntime.mark((function e(){var t,n,r,a,o,i,u,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,n=t.app,r=t.store,a=t.router,o=!1,i=function(e){o=!0;var t=Object(e)===e?a.resolve(e).route.fullPath:e;window.location.href=t},u=window.location.href.replace(window.location.origin,""),c=[H,K,$],l=0;case 11:if(!(!1===o&&l<c.length)){e.next=29;break}if("function"===typeof c[l]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,c[l]({app:n,router:a,store:r,Vue:s["a"],ssrContext:null,redirect:i,urlPath:u,publicPath:J});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:l++,e.next=11;break;case 29:if(!0!==o){e.next=31;break}return e.abrupt("return");case 31:new s["a"](n);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),G.apply(this,arguments)}X()},"31cd":function(e,t,n){}});