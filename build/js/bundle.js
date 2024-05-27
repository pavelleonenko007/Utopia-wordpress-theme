/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@barba/core/dist/barba.umd.js":
/*!****************************************************!*\
  !*** ./node_modules/@barba/core/dist/barba.umd.js ***!
  \****************************************************/
/***/ (function(module) {

!function(t,n){ true?module.exports=n():0}(this,(function(){function t(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function n(n,r,e){return r&&t(n.prototype,r),e&&t(n,e),n}function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e])}return t}).apply(this,arguments)}function e(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function u(t,n,r){return(u=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var i=new(Function.bind.apply(t,e));return r&&o(i,r.prototype),i}).apply(null,arguments)}function f(t){var n="function"==typeof Map?new Map:void 0;return(f=function(t){if(null===t||-1===Function.toString.call(t).indexOf("[native code]"))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(t))return n.get(t);n.set(t,r)}function r(){return u(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),o(r,t)})(t)}function s(t,n){try{var r=t()}catch(t){return n(t)}return r&&r.then?r.then(void 0,n):r}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var c,a="2.9.7",h=function(){};!function(t){t[t.off=0]="off",t[t.error=1]="error",t[t.warning=2]="warning",t[t.info=3]="info",t[t.debug=4]="debug"}(c||(c={}));var v=c.off,l=function(){function t(t){this.t=t}t.getLevel=function(){return v},t.setLevel=function(t){return v=c[t]};var n=t.prototype;return n.error=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.error,c.error,n)},n.warn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.warn,c.warning,n)},n.info=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.info,c.info,n)},n.debug=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this.i(console.log,c.debug,n)},n.i=function(n,r,e){r<=t.getLevel()&&n.apply(console,["["+this.t+"] "].concat(e))},t}(),d=O,m=E,p=g,w=x,b=T,y="/",P=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function g(t,n){for(var r,e=[],i=0,o=0,u="",f=n&&n.delimiter||y,s=n&&n.whitelist||void 0,c=!1;null!==(r=P.exec(t));){var a=r[0],h=r[1],v=r.index;if(u+=t.slice(o,v),o=v+a.length,h)u+=h[1],c=!0;else{var l="",d=r[2],m=r[3],p=r[4],w=r[5];if(!c&&u.length){var b=u.length-1,g=u[b];(!s||s.indexOf(g)>-1)&&(l=g,u=u.slice(0,b))}u&&(e.push(u),u="",c=!1);var E=m||p,x=l||f;e.push({name:d||i++,prefix:l,delimiter:x,optional:"?"===w||"*"===w,repeat:"+"===w||"*"===w,pattern:E?A(E):"[^"+k(x===f?x:x+f)+"]+?"})}}return(u||o<t.length)&&e.push(u+t.substr(o)),e}function E(t,n){return function(r,e){var i=t.exec(r);if(!i)return!1;for(var o=i[0],u=i.index,f={},s=e&&e.decode||decodeURIComponent,c=1;c<i.length;c++)if(void 0!==i[c]){var a=n[c-1];f[a.name]=a.repeat?i[c].split(a.delimiter).map((function(t){return s(t,a)})):s(i[c],a)}return{path:o,index:u,params:f}}}function x(t,n){for(var r=new Array(t.length),e=0;e<t.length;e++)"object"==typeof t[e]&&(r[e]=new RegExp("^(?:"+t[e].pattern+")$",R(n)));return function(n,e){for(var i="",o=e&&e.encode||encodeURIComponent,u=!e||!1!==e.validate,f=0;f<t.length;f++){var s=t[f];if("string"!=typeof s){var c,a=n?n[s.name]:void 0;if(Array.isArray(a)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but got array');if(0===a.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<a.length;h++){if(c=o(a[h],s),u&&!r[f].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'"');i+=(0===h?s.prefix:s.delimiter)+c}}else if("string"!=typeof a&&"number"!=typeof a&&"boolean"!=typeof a){if(!s.optional)throw new TypeError('Expected "'+s.name+'" to be '+(s.repeat?"an array":"a string"))}else{if(c=o(String(a),s),u&&!r[f].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but got "'+c+'"');i+=s.prefix+c}}else i+=s}return i}}function k(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function A(t){return t.replace(/([=!:$/()])/g,"\\$1")}function R(t){return t&&t.sensitive?"":"i"}function T(t,n,r){for(var e=(r=r||{}).strict,i=!1!==r.start,o=!1!==r.end,u=r.delimiter||y,f=[].concat(r.endsWith||[]).map(k).concat("$").join("|"),s=i?"^":"",c=0;c<t.length;c++){var a=t[c];if("string"==typeof a)s+=k(a);else{var h=a.repeat?"(?:"+a.pattern+")(?:"+k(a.delimiter)+"(?:"+a.pattern+"))*":a.pattern;n&&n.push(a),s+=a.optional?a.prefix?"(?:"+k(a.prefix)+"("+h+"))?":"("+h+")?":k(a.prefix)+"("+h+")"}}if(o)e||(s+="(?:"+k(u)+")?"),s+="$"===f?"$":"(?="+f+")";else{var v=t[t.length-1],l="string"==typeof v?v[v.length-1]===u:void 0===v;e||(s+="(?:"+k(u)+"(?="+f+"))?"),l||(s+="(?="+k(u)+"|"+f+")")}return new RegExp(s,R(r))}function O(t,n,r){return t instanceof RegExp?function(t,n){if(!n)return t;var r=t.source.match(/\((?!\?)/g);if(r)for(var e=0;e<r.length;e++)n.push({name:e,prefix:null,delimiter:null,optional:!1,repeat:!1,pattern:null});return t}(t,n):Array.isArray(t)?function(t,n,r){for(var e=[],i=0;i<t.length;i++)e.push(O(t[i],n,r).source);return new RegExp("(?:"+e.join("|")+")",R(r))}(t,n,r):function(t,n,r){return T(g(t,r),n,r)}(t,n,r)}d.match=function(t,n){var r=[];return E(O(t,r,n),r)},d.regexpToFunction=m,d.parse=p,d.compile=function(t,n){return x(g(t,n),n)},d.tokensToFunction=w,d.tokensToRegExp=b;var S={container:"container",history:"history",namespace:"namespace",prefix:"data-barba",prevent:"prevent",wrapper:"wrapper"},j=new(function(){function t(){this.o=S,this.u=new DOMParser}var n=t.prototype;return n.toString=function(t){return t.outerHTML},n.toDocument=function(t){return this.u.parseFromString(t,"text/html")},n.toElement=function(t){var n=document.createElement("div");return n.innerHTML=t,n},n.getHtml=function(t){return void 0===t&&(t=document),this.toString(t.documentElement)},n.getWrapper=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.wrapper+'"]')},n.getContainer=function(t){return void 0===t&&(t=document),t.querySelector("["+this.o.prefix+'="'+this.o.container+'"]')},n.removeContainer=function(t){document.body.contains(t)&&t.parentNode.removeChild(t)},n.addContainer=function(t,n){var r=this.getContainer();r?this.s(t,r):n.appendChild(t)},n.getNamespace=function(t){void 0===t&&(t=document);var n=t.querySelector("["+this.o.prefix+"-"+this.o.namespace+"]");return n?n.getAttribute(this.o.prefix+"-"+this.o.namespace):null},n.getHref=function(t){if(t.tagName&&"a"===t.tagName.toLowerCase()){if("string"==typeof t.href)return t.href;var n=t.getAttribute("href")||t.getAttribute("xlink:href");if(n)return this.resolveUrl(n.baseVal||n)}return null},n.resolveUrl=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var e=n.length;if(0===e)throw new Error("resolveUrl requires at least one argument; got none.");var i=document.createElement("base");if(i.href=arguments[0],1===e)return i.href;var o=document.getElementsByTagName("head")[0];o.insertBefore(i,o.firstChild);for(var u,f=document.createElement("a"),s=1;s<e;s++)f.href=arguments[s],i.href=u=f.href;return o.removeChild(i),u},n.s=function(t,n){n.parentNode.insertBefore(t,n.nextSibling)},t}()),M=new(function(){function t(){this.h=[],this.v=-1}var e=t.prototype;return e.init=function(t,n){this.l="barba";var r={ns:n,scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(r),this.v=0;var e={from:this.l,index:0,states:[].concat(this.h)};window.history&&window.history.replaceState(e,"",t)},e.change=function(t,n,r){if(r&&r.state){var e=r.state,i=e.index;n=this.m(this.v-i),this.replace(e.states),this.v=i}else this.add(t,n);return n},e.add=function(t,n){var r=this.size,e=this.p(n),i={ns:"tmp",scroll:{x:window.scrollX,y:window.scrollY},url:t};this.h.push(i),this.v=r;var o={from:this.l,index:r,states:[].concat(this.h)};switch(e){case"push":window.history&&window.history.pushState(o,"",t);break;case"replace":window.history&&window.history.replaceState(o,"",t)}},e.update=function(t,n){var e=n||this.v,i=r({},this.get(e),{},t);this.set(e,i)},e.remove=function(t){t?this.h.splice(t,1):this.h.pop(),this.v--},e.clear=function(){this.h=[],this.v=-1},e.replace=function(t){this.h=t},e.get=function(t){return this.h[t]},e.set=function(t,n){return this.h[t]=n},e.p=function(t){var n="push",r=t,e=S.prefix+"-"+S.history;return r.hasAttribute&&r.hasAttribute(e)&&(n=r.getAttribute(e)),n},e.m=function(t){return Math.abs(t)>1?t>0?"forward":"back":0===t?"popstate":t>0?"back":"forward"},n(t,[{key:"current",get:function(){return this.h[this.v]}},{key:"state",get:function(){return this.h[this.h.length-1]}},{key:"previous",get:function(){return this.v<1?null:this.h[this.v-1]}},{key:"size",get:function(){return this.h.length}}]),t}()),L=function(t,n){try{var r=function(){if(!n.next.html)return Promise.resolve(t).then((function(t){var r=n.next;if(t){var e=j.toElement(t);r.namespace=j.getNamespace(e),r.container=j.getContainer(e),r.html=t,M.update({ns:r.namespace});var i=j.toDocument(t);document.title=i.title}}))}();return Promise.resolve(r&&r.then?r.then((function(){})):void 0)}catch(t){return Promise.reject(t)}},$=d,_={__proto__:null,update:L,nextTick:function(){return new Promise((function(t){window.requestAnimationFrame(t)}))},pathToRegexp:$},q=function(){return window.location.origin},B=function(t){return void 0===t&&(t=window.location.href),U(t).port},U=function(t){var n,r=t.match(/:\d+/);if(null===r)/^http/.test(t)&&(n=80),/^https/.test(t)&&(n=443);else{var e=r[0].substring(1);n=parseInt(e,10)}var i,o=t.replace(q(),""),u={},f=o.indexOf("#");f>=0&&(i=o.slice(f+1),o=o.slice(0,f));var s=o.indexOf("?");return s>=0&&(u=D(o.slice(s+1)),o=o.slice(0,s)),{hash:i,path:o,port:n,query:u}},D=function(t){return t.split("&").reduce((function(t,n){var r=n.split("=");return t[r[0]]=r[1],t}),{})},F=function(t){return void 0===t&&(t=window.location.href),t.replace(/(\/#.*|\/|#.*)$/,"")},H={__proto__:null,getHref:function(){return window.location.href},getOrigin:q,getPort:B,getPath:function(t){return void 0===t&&(t=window.location.href),U(t).path},parse:U,parseQuery:D,clean:F};function I(t,n,r){return void 0===n&&(n=2e3),new Promise((function(e,i){var o=new XMLHttpRequest;o.onreadystatechange=function(){if(o.readyState===XMLHttpRequest.DONE)if(200===o.status)e(o.responseText);else if(o.status){var n={status:o.status,statusText:o.statusText};r(t,n),i(n)}},o.ontimeout=function(){var e=new Error("Timeout error ["+n+"]");r(t,e),i(e)},o.onerror=function(){var n=new Error("Fetch error");r(t,n),i(n)},o.open("GET",t),o.timeout=n,o.setRequestHeader("Accept","text/html,application/xhtml+xml,application/xml"),o.setRequestHeader("x-barba","yes"),o.send()}))}var C=function(t){return!!t&&("object"==typeof t||"function"==typeof t)&&"function"==typeof t.then};function N(t,n){return void 0===n&&(n={}),function(){for(var r=arguments.length,e=new Array(r),i=0;i<r;i++)e[i]=arguments[i];var o=!1,u=new Promise((function(r,i){n.async=function(){return o=!0,function(t,n){t?i(t):r(n)}};var u=t.apply(n,e);o||(C(u)?u.then(r,i):r(u))}));return u}}var X=new(function(t){function n(){var n;return(n=t.call(this)||this).logger=new l("@barba/core"),n.all=["ready","page","reset","currentAdded","currentRemoved","nextAdded","nextRemoved","beforeOnce","once","afterOnce","before","beforeLeave","leave","afterLeave","beforeEnter","enter","afterEnter","after"],n.registered=new Map,n.init(),n}e(n,t);var r=n.prototype;return r.init=function(){var t=this;this.registered.clear(),this.all.forEach((function(n){t[n]||(t[n]=function(r,e){t.registered.has(n)||t.registered.set(n,new Set),t.registered.get(n).add({ctx:e||{},fn:r})})}))},r.do=function(t){for(var n=this,r=arguments.length,e=new Array(r>1?r-1:0),i=1;i<r;i++)e[i-1]=arguments[i];if(this.registered.has(t)){var o=Promise.resolve();return this.registered.get(t).forEach((function(t){o=o.then((function(){return N(t.fn,t.ctx).apply(void 0,e)}))})),o.catch((function(r){n.logger.debug("Hook error ["+t+"]"),n.logger.error(r)}))}return Promise.resolve()},r.clear=function(){var t=this;this.all.forEach((function(n){delete t[n]})),this.init()},r.help=function(){this.logger.info("Available hooks: "+this.all.join(","));var t=[];this.registered.forEach((function(n,r){return t.push(r)})),this.logger.info("Registered hooks: "+t.join(","))},n}(h)),z=function(){function t(t){if(this.P=[],"boolean"==typeof t)this.g=t;else{var n=Array.isArray(t)?t:[t];this.P=n.map((function(t){return $(t)}))}}return t.prototype.checkHref=function(t){if("boolean"==typeof this.g)return this.g;var n=U(t).path;return this.P.some((function(t){return null!==t.exec(n)}))},t}(),G=function(t){function n(n){var r;return(r=t.call(this,n)||this).k=new Map,r}e(n,t);var i=n.prototype;return i.set=function(t,n,r){return this.k.set(t,{action:r,request:n}),{action:r,request:n}},i.get=function(t){return this.k.get(t)},i.getRequest=function(t){return this.k.get(t).request},i.getAction=function(t){return this.k.get(t).action},i.has=function(t){return!this.checkHref(t)&&this.k.has(t)},i.delete=function(t){return this.k.delete(t)},i.update=function(t,n){var e=r({},this.k.get(t),{},n);return this.k.set(t,e),e},n}(z),Q=function(){return!window.history.pushState},W=function(t){return!t.el||!t.href},J=function(t){var n=t.event;return n.which>1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey},K=function(t){var n=t.el;return n.hasAttribute("target")&&"_blank"===n.target},V=function(t){var n=t.el;return void 0!==n.protocol&&window.location.protocol!==n.protocol||void 0!==n.hostname&&window.location.hostname!==n.hostname},Y=function(t){var n=t.el;return void 0!==n.port&&B()!==B(n.href)},Z=function(t){var n=t.el;return n.getAttribute&&"string"==typeof n.getAttribute("download")},tt=function(t){return t.el.hasAttribute(S.prefix+"-"+S.prevent)},nt=function(t){return Boolean(t.el.closest("["+S.prefix+"-"+S.prevent+'="all"]'))},rt=function(t){var n=t.href;return F(n)===F()&&B(n)===B()},et=function(t){function n(n){var r;return(r=t.call(this,n)||this).suite=[],r.tests=new Map,r.init(),r}e(n,t);var r=n.prototype;return r.init=function(){this.add("pushState",Q),this.add("exists",W),this.add("newTab",J),this.add("blank",K),this.add("corsDomain",V),this.add("corsPort",Y),this.add("download",Z),this.add("preventSelf",tt),this.add("preventAll",nt),this.add("sameUrl",rt,!1)},r.add=function(t,n,r){void 0===r&&(r=!0),this.tests.set(t,n),r&&this.suite.push(t)},r.run=function(t,n,r,e){return this.tests.get(t)({el:n,event:r,href:e})},r.checkLink=function(t,n,r){var e=this;return this.suite.some((function(i){return e.run(i,t,n,r)}))},n}(z),it=function(t){function n(r,e){var i;void 0===e&&(e="Barba error");for(var o=arguments.length,u=new Array(o>2?o-2:0),f=2;f<o;f++)u[f-2]=arguments[f];return(i=t.call.apply(t,[this].concat(u))||this).error=r,i.label=e,Error.captureStackTrace&&Error.captureStackTrace(function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(i),n),i.name="BarbaError",i}return e(n,t),n}(f(Error)),ot=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.all=[],this.page=[],this.once=[],this.A=[{name:"namespace",type:"strings"},{name:"custom",type:"function"}],t&&(this.all=this.all.concat(t)),this.update()}var n=t.prototype;return n.add=function(t,n){switch(t){case"rule":this.A.splice(n.position||0,0,n.value);break;case"transition":default:this.all.push(n)}this.update()},n.resolve=function(t,n){var r=this;void 0===n&&(n={});var e=n.once?this.once:this.page;e=e.filter(n.self?function(t){return t.name&&"self"===t.name}:function(t){return!t.name||"self"!==t.name});var i=new Map,o=e.find((function(e){var o=!0,u={};return!(!n.self||"self"!==e.name)||(r.A.reverse().forEach((function(n){o&&(o=r.R(e,n,t,u),e.from&&e.to&&(o=r.R(e,n,t,u,"from")&&r.R(e,n,t,u,"to")),e.from&&!e.to&&(o=r.R(e,n,t,u,"from")),!e.from&&e.to&&(o=r.R(e,n,t,u,"to")))})),i.set(e,u),o)})),u=i.get(o),f=[];if(f.push(n.once?"once":"page"),n.self&&f.push("self"),u){var s,c=[o];Object.keys(u).length>0&&c.push(u),(s=this.logger).info.apply(s,["Transition found ["+f.join(",")+"]"].concat(c))}else this.logger.info("No transition found ["+f.join(",")+"]");return o},n.update=function(){var t=this;this.all=this.all.map((function(n){return t.T(n)})).sort((function(t,n){return t.priority-n.priority})).reverse().map((function(t){return delete t.priority,t})),this.page=this.all.filter((function(t){return void 0!==t.leave||void 0!==t.enter})),this.once=this.all.filter((function(t){return void 0!==t.once}))},n.R=function(t,n,r,e,i){var o=!0,u=!1,f=t,s=n.name,c=s,a=s,h=s,v=i?f[i]:f,l="to"===i?r.next:r.current;if(i?v&&v[s]:v[s]){switch(n.type){case"strings":default:var d=Array.isArray(v[c])?v[c]:[v[c]];l[c]&&-1!==d.indexOf(l[c])&&(u=!0),-1===d.indexOf(l[c])&&(o=!1);break;case"object":var m=Array.isArray(v[a])?v[a]:[v[a]];l[a]?(l[a].name&&-1!==m.indexOf(l[a].name)&&(u=!0),-1===m.indexOf(l[a].name)&&(o=!1)):o=!1;break;case"function":v[h](r)?u=!0:o=!1}u&&(i?(e[i]=e[i]||{},e[i][s]=f[i][s]):e[s]=f[s])}return o},n.O=function(t,n,r){var e=0;return(t[n]||t.from&&t.from[n]||t.to&&t.to[n])&&(e+=Math.pow(10,r),t.from&&t.from[n]&&(e+=1),t.to&&t.to[n]&&(e+=2)),e},n.T=function(t){var n=this;t.priority=0;var r=0;return this.A.forEach((function(e,i){r+=n.O(t,e.name,i+1)})),t.priority=r,t},t}(),ut=function(){function t(t){void 0===t&&(t=[]),this.logger=new l("@barba/core"),this.S=!1,this.store=new ot(t)}var r=t.prototype;return r.get=function(t,n){return this.store.resolve(t,n)},r.doOnce=function(t){var n=t.data,r=t.transition;try{var e=function(){i.S=!1},i=this,o=r||{};i.S=!0;var u=s((function(){return Promise.resolve(i.j("beforeOnce",n,o)).then((function(){return Promise.resolve(i.once(n,o)).then((function(){return Promise.resolve(i.j("afterOnce",n,o)).then((function(){}))}))}))}),(function(t){i.S=!1,i.logger.debug("Transition error [before/after/once]"),i.logger.error(t)}));return Promise.resolve(u&&u.then?u.then(e):e())}catch(t){return Promise.reject(t)}},r.doPage=function(t){var n=t.data,r=t.transition,e=t.page,i=t.wrapper;try{var o=function(t){if(u)return t;f.S=!1},u=!1,f=this,c=r||{},a=!0===c.sync||!1;f.S=!0;var h=s((function(){function t(){return Promise.resolve(f.j("before",n,c)).then((function(){var t=!1;function r(r){return t?r:Promise.resolve(f.remove(n)).then((function(){return Promise.resolve(f.j("after",n,c)).then((function(){}))}))}var o=function(){if(a)return s((function(){return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),f.enter(n,c)])).then((function(){return Promise.resolve(f.j("afterLeave",n,c)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [sync]")}));var r=function(r){return t?r:s((function(){var t=function(){if(!1!==o)return Promise.resolve(f.add(n,i)).then((function(){return Promise.resolve(f.j("beforeEnter",n,c)).then((function(){return Promise.resolve(f.enter(n,c,o)).then((function(){return Promise.resolve(f.j("afterEnter",n,c)).then((function(){}))}))}))}))}();if(t&&t.then)return t.then((function(){}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/enter]")}))},o=!1,u=s((function(){return Promise.resolve(f.j("beforeLeave",n,c)).then((function(){return Promise.resolve(Promise.all([f.leave(n,c),L(e,n)]).then((function(t){return t[0]}))).then((function(t){return o=t,Promise.resolve(f.j("afterLeave",n,c)).then((function(){}))}))}))}),(function(t){if(f.M(t))throw new it(t,"Transition error [before/after/leave]")}));return u&&u.then?u.then(r):r(u)}();return o&&o.then?o.then(r):r(o)}))}var r=function(){if(a)return Promise.resolve(L(e,n)).then((function(){}))}();return r&&r.then?r.then(t):t()}),(function(t){if(f.S=!1,t.name&&"BarbaError"===t.name)throw f.logger.debug(t.label),f.logger.error(t.error),t;throw f.logger.debug("Transition error [page]"),f.logger.error(t),t}));return Promise.resolve(h&&h.then?h.then(o):o(h))}catch(t){return Promise.reject(t)}},r.once=function(t,n){try{return Promise.resolve(X.do("once",t,n)).then((function(){return n.once?N(n.once,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.leave=function(t,n){try{return Promise.resolve(X.do("leave",t,n)).then((function(){return n.leave?N(n.leave,n)(t):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.enter=function(t,n,r){try{return Promise.resolve(X.do("enter",t,n)).then((function(){return n.enter?N(n.enter,n)(t,r):Promise.resolve()}))}catch(t){return Promise.reject(t)}},r.add=function(t,n){try{return j.addContainer(t.next.container,n),X.do("nextAdded",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.remove=function(t){try{return j.removeContainer(t.current.container),X.do("currentRemoved",t),Promise.resolve()}catch(t){return Promise.reject(t)}},r.M=function(t){return t.message?!/Timeout error|Fetch error/.test(t.message):!t.status},r.j=function(t,n,r){try{return Promise.resolve(X.do(t,n,r)).then((function(){return r[t]?N(r[t],r)(n):Promise.resolve()}))}catch(t){return Promise.reject(t)}},n(t,[{key:"isRunning",get:function(){return this.S},set:function(t){this.S=t}},{key:"hasOnce",get:function(){return this.store.once.length>0}},{key:"hasSelf",get:function(){return this.store.all.some((function(t){return"self"===t.name}))}},{key:"shouldWait",get:function(){return this.store.all.some((function(t){return t.to&&!t.to.route||t.sync}))}}]),t}(),ft=function(){function t(t){var n=this;this.names=["beforeLeave","afterLeave","beforeEnter","afterEnter"],this.byNamespace=new Map,0!==t.length&&(t.forEach((function(t){n.byNamespace.set(t.namespace,t)})),this.names.forEach((function(t){X[t](n.L(t))})))}return t.prototype.L=function(t){var n=this;return function(r){var e=t.match(/enter/i)?r.next:r.current,i=n.byNamespace.get(e.namespace);return i&&i[t]?N(i[t],i)(r):Promise.resolve()}},t}();Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var n=this;do{if(n.matches(t))return n;n=n.parentElement||n.parentNode}while(null!==n&&1===n.nodeType);return null});var st={container:null,html:"",namespace:"",url:{hash:"",href:"",path:"",port:null,query:{}}};return new(function(){function t(){this.version=a,this.schemaPage=st,this.Logger=l,this.logger=new l("@barba/core"),this.plugins=[],this.hooks=X,this.dom=j,this.helpers=_,this.history=M,this.request=I,this.url=H}var e=t.prototype;return e.use=function(t,n){var r=this.plugins;r.indexOf(t)>-1?this.logger.warn("Plugin ["+t.name+"] already installed."):"function"==typeof t.install?(t.install(this,n),r.push(t)):this.logger.warn("Plugin ["+t.name+'] has no "install" method.')},e.init=function(t){var n=void 0===t?{}:t,e=n.transitions,i=void 0===e?[]:e,o=n.views,u=void 0===o?[]:o,f=n.schema,s=void 0===f?S:f,c=n.requestError,a=n.timeout,h=void 0===a?2e3:a,v=n.cacheIgnore,d=void 0!==v&&v,m=n.prefetchIgnore,p=void 0!==m&&m,w=n.preventRunning,b=void 0!==w&&w,y=n.prevent,P=void 0===y?null:y,g=n.debug,E=n.logLevel;if(l.setLevel(!0===(void 0!==g&&g)?"debug":void 0===E?"off":E),this.logger.info(this.version),Object.keys(s).forEach((function(t){S[t]&&(S[t]=s[t])})),this.$=c,this.timeout=h,this.cacheIgnore=d,this.prefetchIgnore=p,this.preventRunning=b,this._=this.dom.getWrapper(),!this._)throw new Error("[@barba/core] No Barba wrapper found");this._.setAttribute("aria-live","polite"),this.q();var x=this.data.current;if(!x.container)throw new Error("[@barba/core] No Barba container found");if(this.cache=new G(d),this.prevent=new et(p),this.transitions=new ut(i),this.views=new ft(u),null!==P){if("function"!=typeof P)throw new Error("[@barba/core] Prevent should be a function");this.prevent.add("preventCustom",P)}this.history.init(x.url.href,x.namespace),this.B=this.B.bind(this),this.U=this.U.bind(this),this.D=this.D.bind(this),this.F(),this.plugins.forEach((function(t){return t.init()}));var k=this.data;k.trigger="barba",k.next=k.current,k.current=r({},this.schemaPage),this.hooks.do("ready",k),this.once(k),this.q()},e.destroy=function(){this.q(),this.H(),this.history.clear(),this.hooks.clear(),this.plugins=[]},e.force=function(t){window.location.assign(t)},e.go=function(t,n,r){var e;if(void 0===n&&(n="barba"),this.transitions.isRunning)this.force(t);else if(!(e="popstate"===n?this.history.current&&this.url.getPath(this.history.current.url)===this.url.getPath(t):this.prevent.run("sameUrl",null,null,t))||this.transitions.hasSelf)return n=this.history.change(t,n,r),r&&(r.stopPropagation(),r.preventDefault()),this.page(t,n,e)},e.once=function(t){try{var n=this;return Promise.resolve(n.hooks.do("beforeEnter",t)).then((function(){function r(){return Promise.resolve(n.hooks.do("afterEnter",t)).then((function(){}))}var e=function(){if(n.transitions.hasOnce){var r=n.transitions.get(t,{once:!0});return Promise.resolve(n.transitions.doOnce({transition:r,data:t})).then((function(){}))}}();return e&&e.then?e.then(r):r()}))}catch(t){return Promise.reject(t)}},e.page=function(t,n,e){try{var i=function(){var t=o.data;return Promise.resolve(o.hooks.do("page",t)).then((function(){var n=s((function(){var n=o.transitions.get(t,{once:!1,self:e});return Promise.resolve(o.transitions.doPage({data:t,page:u,transition:n,wrapper:o._})).then((function(){o.q()}))}),(function(){0===l.getLevel()&&o.force(t.current.url.href)}));if(n&&n.then)return n.then((function(){}))}))},o=this;o.data.next.url=r({href:t},o.url.parse(t)),o.data.trigger=n;var u=o.cache.has(t)?o.cache.update(t,{action:"click"}).request:o.cache.set(t,o.request(t,o.timeout,o.onRequestError.bind(o,n)),"click").request,f=function(){if(o.transitions.shouldWait)return Promise.resolve(L(u,o.data)).then((function(){}))}();return Promise.resolve(f&&f.then?f.then(i):i())}catch(t){return Promise.reject(t)}},e.onRequestError=function(t){this.transitions.isRunning=!1;for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];var i=r[0],o=r[1],u=this.cache.getAction(i);return this.cache.delete(i),!(this.$&&!1===this.$(t,u,i,o)||("click"===u&&this.force(i),1))},e.prefetch=function(t){var n=this;this.cache.has(t)||this.cache.set(t,this.request(t,this.timeout,this.onRequestError.bind(this,"barba")).catch((function(t){n.logger.error(t)})),"prefetch")},e.F=function(){!0!==this.prefetchIgnore&&(document.addEventListener("mouseover",this.B),document.addEventListener("touchstart",this.B)),document.addEventListener("click",this.U),window.addEventListener("popstate",this.D)},e.H=function(){!0!==this.prefetchIgnore&&(document.removeEventListener("mouseover",this.B),document.removeEventListener("touchstart",this.B)),document.removeEventListener("click",this.U),window.removeEventListener("popstate",this.D)},e.B=function(t){var n=this,r=this.I(t);if(r){var e=this.dom.getHref(r);this.prevent.checkHref(e)||this.cache.has(e)||this.cache.set(e,this.request(e,this.timeout,this.onRequestError.bind(this,r)).catch((function(t){n.logger.error(t)})),"enter")}},e.U=function(t){var n=this.I(t);if(n)return this.transitions.isRunning&&this.preventRunning?(t.preventDefault(),void t.stopPropagation()):void this.go(this.dom.getHref(n),n,t)},e.D=function(t){this.go(this.url.getHref(),"popstate",t)},e.I=function(t){for(var n=t.target;n&&!this.dom.getHref(n);)n=n.parentNode;if(n&&!this.prevent.checkLink(n,t,this.dom.getHref(n)))return n},e.q=function(){var t=this.url.getHref(),n={container:this.dom.getContainer(),html:this.dom.getHtml(),namespace:this.dom.getNamespace(),url:r({href:t},this.url.parse(t))};this.C={current:n,next:r({},this.schemaPage),trigger:void 0},this.hooks.do("reset",this.data)},n(t,[{key:"data",get:function(){return this.C}},{key:"wrapper",get:function(){return this._}}]),t}())}));
//# sourceMappingURL=barba.umd.js.map


/***/ }),

/***/ "./node_modules/amator/index.js":
/*!**************************************!*\
  !*** ./node_modules/amator/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var BezierEasing = __webpack_require__(/*! bezier-easing */ "./node_modules/bezier-easing/src/index.js")

// Predefined set of animations. Similar to CSS easing functions
var animations = {
  ease:  BezierEasing(0.25, 0.1, 0.25, 1),
  easeIn: BezierEasing(0.42, 0, 1, 1),
  easeOut: BezierEasing(0, 0, 0.58, 1),
  easeInOut: BezierEasing(0.42, 0, 0.58, 1),
  linear: BezierEasing(0, 0, 1, 1)
}


module.exports = animate;
module.exports.makeAggregateRaf = makeAggregateRaf;
module.exports.sharedScheduler = makeAggregateRaf();


function animate(source, target, options) {
  var start = Object.create(null)
  var diff = Object.create(null)
  options = options || {}
  // We let clients specify their own easing function
  var easing = (typeof options.easing === 'function') ? options.easing : animations[options.easing]

  // if nothing is specified, default to ease (similar to CSS animations)
  if (!easing) {
    if (options.easing) {
      console.warn('Unknown easing function in amator: ' + options.easing);
    }
    easing = animations.ease
  }

  var step = typeof options.step === 'function' ? options.step : noop
  var done = typeof options.done === 'function' ? options.done : noop

  var scheduler = getScheduler(options.scheduler)

  var keys = Object.keys(target)
  keys.forEach(function(key) {
    start[key] = source[key]
    diff[key] = target[key] - source[key]
  })

  var durationInMs = typeof options.duration === 'number' ? options.duration : 400
  var durationInFrames = Math.max(1, durationInMs * 0.06) // 0.06 because 60 frames pers 1,000 ms
  var previousAnimationId
  var frame = 0

  previousAnimationId = scheduler.next(loop)

  return {
    cancel: cancel
  }

  function cancel() {
    scheduler.cancel(previousAnimationId)
    previousAnimationId = 0
  }

  function loop() {
    var t = easing(frame/durationInFrames)
    frame += 1
    setValues(t)
    if (frame <= durationInFrames) {
      previousAnimationId = scheduler.next(loop)
      step(source)
    } else {
      previousAnimationId = 0
      setTimeout(function() { done(source) }, 0)
    }
  }

  function setValues(t) {
    keys.forEach(function(key) {
      source[key] = diff[key] * t + start[key]
    })
  }
}

function noop() { }

function getScheduler(scheduler) {
  if (!scheduler) {
    var canRaf = typeof window !== 'undefined' && window.requestAnimationFrame
    return canRaf ? rafScheduler() : timeoutScheduler()
  }
  if (typeof scheduler.next !== 'function') throw new Error('Scheduler is supposed to have next(cb) function')
  if (typeof scheduler.cancel !== 'function') throw new Error('Scheduler is supposed to have cancel(handle) function')

  return scheduler
}

function rafScheduler() {
  return {
    next: window.requestAnimationFrame.bind(window),
    cancel: window.cancelAnimationFrame.bind(window)
  }
}

function timeoutScheduler() {
  return {
    next: function(cb) {
      return setTimeout(cb, 1000/60)
    },
    cancel: function (id) {
      return clearTimeout(id)
    }
  }
}

function makeAggregateRaf() {
  var frontBuffer = new Set();
  var backBuffer = new Set();
  var frameToken = 0;

  return {
    next: next,
    cancel: next,
    clearAll: clearAll
  }

  function clearAll() {
    frontBuffer.clear();
    backBuffer.clear();
    cancelAnimationFrame(frameToken);
    frameToken = 0;
  }

  function next(callback) {
    backBuffer.add(callback);
    renderNextFrame();
  }

  function renderNextFrame() {
    if (!frameToken) frameToken = requestAnimationFrame(renderFrame);
  }

  function renderFrame() {
    frameToken = 0;

    var t = backBuffer;
    backBuffer = frontBuffer;
    frontBuffer = t;

    frontBuffer.forEach(function(callback) {
      callback();
    });
    frontBuffer.clear();
  }

  function cancel(callback) {
    backBuffer.delete(callback);
  }
}


/***/ }),

/***/ "./src/components/ImageGalleryDialog.js":
/*!**********************************************!*\
  !*** ./src/components/ImageGalleryDialog.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initContentGalleries: () => (/* binding */ initContentGalleries),
/* harmony export */   initPostGalleries: () => (/* binding */ initPostGalleries),
/* harmony export */   initThumbnailGallery: () => (/* binding */ initThumbnailGallery)
/* harmony export */ });
class ImageGalleryDialog {
  constructor(options = {}) {
    this.options = options;
    if (this.options.dialog) {
      this.dialog = this.options.dialog;
    } else {
      this._setupHTML();
    }
    this.list = this.dialog.querySelector('.image-gallery__list');
    this.counterNode = this.dialog.querySelector('.gallery-counter__current');
    this.counterTotal = this.dialog.querySelector('.gallery-counter__total');
    this.closeButton = this.dialog.querySelector('.image-gallery__close-button');
    this.nextButton = this.dialog.querySelector('.image-gallery__nav--next');
    this.previousButton = this.dialog.querySelector('.image-gallery__nav--prev');
    if (this.options.media) {
      this.media = this.options.media;
      this.counterTotal.textContent = this.media.length;
      this.media.forEach((media, index) => {
        const li = document.createElement('li');
        li.className = 'image-gallery__item';
        const figure = media.cloneNode(true);
        figure.className = 'image-gallery__element';
        li.append(figure);
        this.list.append(li);
      });
    }
    this.galleryItems = Array.from(this.list.querySelectorAll('.image-gallery__item'));
    this.current = 0;
    this._bindEvents();
    document.body.append(this.dialog);
  }
  _setupHTML() {
    this.dialog = document.createElement('dialog');
    this.dialog.className = 'image-gallery';
    if (this.options.id) {
      this.dialog.setAttribute('id', this.options.id);
    }
    this.dialog.innerHTML = `
			<div class="image-gallery__header">
				<div class="image-gallery__counter gallery-counter">
					<svg class="image-gallery__arrow-icon image-gallery__arrow-icon--left" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.53033 5.46967C6.82322 5.76256 6.82322 6.23743 6.53033 6.53033L1.75737 11.3033C1.46448 11.5962 0.989606 11.5962 0.696712 11.3033C0.403818 11.0104 0.403817 10.5355 0.69671 10.2427L4.93934 6L0.696689 1.75737C0.403795 1.46448 0.403793 0.989604 0.696686 0.69671C0.989579 0.403816 1.46445 0.403814 1.75735 0.696707L6.53033 5.46967ZM5 5.25L6 5.25L6 6.75L5 6.75L5 5.25Z" fill="#818181"/>
					</svg>
					<span>
						<span class="gallery-counter__current">1</span>/<span class="gallery-counter__total"></span>
					</span>
					<svg class="image-gallery__arrow-icon image-gallery__arrow-icon--right" width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.53033 5.46967C6.82322 5.76256 6.82322 6.23743 6.53033 6.53033L1.75737 11.3033C1.46448 11.5962 0.989606 11.5962 0.696712 11.3033C0.403818 11.0104 0.403817 10.5355 0.69671 10.2427L4.93934 6L0.696689 1.75737C0.403795 1.46448 0.403793 0.989604 0.696686 0.69671C0.989579 0.403816 1.46445 0.403814 1.75735 0.696707L6.53033 5.46967ZM5 5.25L6 5.25L6 6.75L5 6.75L5 5.25Z" fill="#818181"/>
					</svg>
				</div>
				<button type="button" class="image-gallery__close-button">
					<span>Close</span>
				</button>
			</div>
			<div class="image-gallery__body">
				<ul class="image-gallery__list"></ul>
			</div>
			<button type="button" class="image-gallery__nav image-gallery__nav--prev"><span class="sr-only">Previous</span></button>
			<button type="button" class="image-gallery__nav image-gallery__nav--next"><span class="sr-only">Next</span></button>
		`;
  }

  /**
   * @private
   * @param {number} number
   * @returns number
   */
  _normalizeNumber(number) {
    return number < 0 ? 0 : number >= this.galleryItems.length ? this.galleryItems.length - 1 : number;
  }
  handleKeydown(event) {
    if (event.key === 'Escape') {
      this.close();
    }
    if (event.key === 'ArrowLeft') {
      this.previous();
    }
    if (event.key === 'ArrowRight') {
      this.next();
    }
  }

  /**
   * @private
   */
  _bindEvents() {
    this.closeButton.onclick = this.close.bind(this);
    if (this.nextButton) {
      this.nextButton.onclick = this.next.bind(this);
    }
    if (this.previousButton) {
      this.previousButton.onclick = this.previous.bind(this);
    }
    window.addEventListener('keydown', this.handleKeydown.bind(this));
  }
  setGallerySlide(number = 0) {
    this.current = this._normalizeNumber(number);
    this.galleryItems.forEach((item, index) => {
      item.classList.toggle('image-gallery__item--active', index === this.current);
    });
    if (this.counterNode) {
      this.counterNode.textContent = `${this.current + 1}`;
    }
  }
  previous() {
    this.setGallerySlide(this.current - 1);
  }
  next() {
    this.setGallerySlide(this.current + 1);
  }
  open(number = 0) {
    this.setGallerySlide(number);
    this.dialog.showModal();
    document.body.style.overflow = 'hidden';
  }
  close() {
    this.dialog.close();
    document.body.style.overflow = null;
  }
}
const initThumbnailGallery = () => {
  const thumbnail = document.querySelector('[data-gallery="thumbnail"]');
  if (!thumbnail) {
    return;
  }
  const ImageGallery = new ImageGalleryDialog({
    dialog: document.getElementById('thumbnailGallery')
  });
  thumbnail.addEventListener('click', () => {
    ImageGallery.open();
  });
};
const initContentGalleries = () => {
  const mediaElements = Array.from(document.querySelectorAll('[data-gallery="content"]'));
  if (mediaElements.length === 0) {
    return;
  }
  const ImageGallery = new ImageGalleryDialog({
    media: mediaElements,
    id: 'contentGallery'
  });
  mediaElements.forEach(element => {
    element.addEventListener('click', () => {
      const index = parseInt(element.dataset.imageIndex);
      ImageGallery.open(index);
    });
  });
};
const initPostGalleries = () => {
  const mediaElements = Array.from(document.querySelectorAll('[data-gallery="gallery"]'));
  const ImageGallery = new ImageGalleryDialog({
    dialog: document.getElementById('postGallery')
  });
  mediaElements.forEach(element => {
    element.addEventListener('click', () => {
      const index = parseInt(element.dataset.imageIndex);
      ImageGallery.open(index);
    });
  });
};

/***/ }),

/***/ "./src/components/LevelSlider.js":
/*!***************************************!*\
  !*** ./src/components/LevelSlider.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moveZoomSlider: () => (/* binding */ moveZoomSlider)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

const ZOOM_SLIDER_SELECTOR = '.zoom-viewer';
function moveZoomSlider(percent, duration = 0) {
  const slider = document.querySelector(ZOOM_SLIDER_SELECTOR);
  if (!slider) {
    return;
  }
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(slider, {
    x: percent + '%',
    duration
  });
}

/***/ }),

/***/ "./src/components/Loader.js":
/*!**********************************!*\
  !*** ./src/components/Loader.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initLoader: () => (/* binding */ initLoader)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");


const LOADER_SELECTOR = '.hello-screen';
const LOADER_TEXT_SELECTOR = '.hello-screen__text';
const LOADER_INDICATOR = '.hello-screen__loader';
const initLoader = async () => {
  const loader = document.querySelector(LOADER_SELECTOR);
  if (!loader) {
    return;
  }
  const texts = loader.querySelectorAll(LOADER_TEXT_SELECTOR);
  const indicator = loader.querySelector(LOADER_INDICATOR);
  const tl = gsap__WEBPACK_IMPORTED_MODULE_1__["default"].timeline({
    defaults: {
      duration: 0.5,
      ease: 'none'
    }
  });
  tl.set('.uto-block._0', {
    opacity: 0,
    transition: 'none'
  }, 0);
  await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.wait)(5_000);
  tl.set(indicator, {
    opacity: 0
  });
  tl.to(texts[0], {
    opacity: 0
  }, 0).set(texts[0], {
    display: 'none'
  }, 0.5).set(texts[1], {
    display: 'block'
  }, 0.5).from(texts[1], {
    opacity: 0
  }, 0.5).to(loader, {
    opacity: 0
  }, 3).set(loader, {
    display: 'none'
  }, 4).to('.uto-block._0', {
    opacity: 1
  }, 3);
};

/***/ }),

/***/ "./src/components/SearchForm.js":
/*!**************************************!*\
  !*** ./src/components/SearchForm.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSearchForm: () => (/* binding */ initSearchForm)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

const SEARCH_FORM_SELECTOR = '#searchform';
const SEARCH_RESULTS_CONTAINER_SELECTOR = '.search-results';
const initSearchForm = () => {
  const searchForm = document.querySelector(SEARCH_FORM_SELECTOR);
  const searchInput = searchForm?.querySelector('input[name="s"]');
  const resultsContainer = document.querySelector(SEARCH_RESULTS_CONTAINER_SELECTOR);
  if (!searchForm || !searchInput || !resultsContainer) {
    return;
  }
  const debouncedSearch = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => {
    const formData = new FormData(searchForm);
    const searchQuery = formData.get('s');
    if (!searchQuery.trim()) {
      resultsContainer.innerHTML = '';
      return;
    }
    fetch(UTOPIA.AJAX_URL, {
      method: 'POST',
      body: formData
    }).then(response => response.json()).then(({
      data,
      success
    }) => {
      if (!success) {
        throw new Error(data.message);
      }
      resultsContainer.innerHTML = data.html;
      setTimeout(() => {
        resultsContainer.querySelectorAll('a').forEach(link => {
          link.setAttribute('onclick', 'window.searchDialog.close()');
        });
      });
    }).catch(error => {
      console.error(error);
      resultsContainer.innerHTML = '';
    });
  }, 500);
  searchForm.addEventListener('submit', event => {
    event.preventDefault();
    debouncedSearch();
  });
  searchInput.addEventListener('input', debouncedSearch);
};

/***/ }),

/***/ "./src/components/SubscribeForm.js":
/*!*****************************************!*\
  !*** ./src/components/SubscribeForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initSubscribeForm: () => (/* binding */ initSubscribeForm)
/* harmony export */ });
const SUBSCRIBE_FORM_SELECTOR = '#subscribe-form';
const initSubscribeForm = () => {
  const subscribeForm = document.querySelector(SUBSCRIBE_FORM_SELECTOR);
  if (!subscribeForm) return;
  const sendIcon = subscribeForm.querySelector('.pre-send');
  const successIcon = subscribeForm.querySelector('.done-send');

  /**
   * 
   * @param {SubmitEvent} event 
   */
  const submitHandler = event => {
    event.preventDefault();
    const isSending = subscribeForm.classList.contains('form--loading');
    if (isSending) return;
    subscribeForm.classList.add('form--loading');
    const formData = new FormData(subscribeForm);
    fetch(UTOPIA.AJAX_URL, {
      method: 'POST',
      body: formData
    }).then(response => response.json()).then(({
      data,
      success
    }) => {
      if (!success) {
        throw new Error(data.message);
      }
      if (sendIcon) {
        sendIcon.style.display = 'none';
      }
      if (successIcon) {
        successIcon.style.display = 'block';
      }
    }).catch(error => {
      console.error(error.message);
    }).finally(() => {
      setTimeout(() => {
        subscribeForm.reset();
        if (successIcon) {
          successIcon.style.display = 'none';
        }
        if (sendIcon) {
          sendIcon.style.display = 'block';
        }
        subscribeForm.classList.remove('form--loading');
      }, 3_000);
    });
  };
  subscribeForm.addEventListener('submit', submitHandler);
};

/***/ }),

/***/ "./src/state/index.js":
/*!****************************!*\
  !*** ./src/state/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPreviousPanCoordinates: () => (/* binding */ getPreviousPanCoordinates),
/* harmony export */   previousPanCoordinates: () => (/* binding */ previousPanCoordinates),
/* harmony export */   rememberPreviousPanCoordinates: () => (/* binding */ rememberPreviousPanCoordinates),
/* harmony export */   resetPreviousPanCoordinates: () => (/* binding */ resetPreviousPanCoordinates)
/* harmony export */ });
let previousPanCoordinates = null;
/**
 * Sets the previous pan coordinates to the provided coordinates.
 *
 * @param {Object} coordinates - The coordinates to set as the previous pan coordinates.
 * @param {number} coordinates.x - The x-coordinate of the pan.
 * @param {number} coordinates.y - The y-coordinate of the pan.
 * @param {number} coordinates.scale - The y-coordinate of the pan.
 * @return {void} This function does not return anything.
 */
const rememberPreviousPanCoordinates = coordinates => {
  console.log('rememberPreviousPanCoordinates', coordinates);
  previousPanCoordinates = coordinates;
};
const getPreviousPanCoordinates = () => previousPanCoordinates;
const resetPreviousPanCoordinates = () => {
  console.log('resetPreviousPanCoordinates');
  previousPanCoordinates = null;
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateScrollPosition: () => (/* binding */ calculateScrollPosition),
/* harmony export */   calculateZoomPercent: () => (/* binding */ calculateZoomPercent),
/* harmony export */   calculateZoomSliderTransform: () => (/* binding */ calculateZoomSliderTransform),
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   refreshWebflowScripts: () => (/* binding */ refreshWebflowScripts),
/* harmony export */   throttle: () => (/* binding */ throttle),
/* harmony export */   wait: () => (/* binding */ wait)
/* harmony export */ });
const refreshWebflowScripts = () => {
  Webflow.destroy();
  Webflow.ready();
  Webflow.require('ix2').init();
  document.dispatchEvent(new Event('readystatechange'));
};
const calculateScrollPosition = element => {
  let scrollPosition = 0;
  while (element) {
    scrollPosition += element.scrollTop;
    element = element.parentElement;
  }
  return scrollPosition;
};
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
function calculateZoomPercent(scale, minZoom, maxZoom) {
  return (scale - minZoom) / (maxZoom - minZoom) * 100;
}
function calculateZoomSliderTransform(percentage) {
  percentage = Math.max(0, Math.min(percentage, 50));
  return -(percentage - 50);
}

/**
 * Debounce function execution to prevent it from being called more than once within a given timeframe.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} delay - The timeframe in milliseconds to debounce the function to.
 * @returns {Function} - The debounced function.
 */
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

/**
 * Throttle function execution to prevent it from being called more than once in a given timeframe.
 *
 * @param {Function} func - The function to throttle.
 * @param {number} delay - The timeframe in milliseconds to throttle the function to.
 * @returns {Function} - The throttled function.
 */
function throttle(func, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    func(...args);
  };
}

/***/ }),

/***/ "./src/webflow/js/main.js":
/*!********************************!*\
  !*** ./src/webflow/js/main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var t_ = Object.create;
  var an = Object.defineProperty;
  var r_ = Object.getOwnPropertyDescriptor;
  var n_ = Object.getOwnPropertyNames;
  var i_ = Object.getPrototypeOf,
    o_ = Object.prototype.hasOwnProperty;
  var me = (e, t) => () => (e && (t = e(e = 0)), t);
  var c = (e, t) => () => (t || e((t = {
      exports: {}
    }).exports, t), t.exports),
    ke = (e, t) => {
      for (var r in t) an(e, r, {
        get: t[r],
        enumerable: !0
      });
    },
    Ms = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function") for (let i of n_(t)) !o_.call(e, i) && i !== r && an(e, i, {
        get: () => t[i],
        enumerable: !(n = r_(t, i)) || n.enumerable
      });
      return e;
    };
  var fe = (e, t, r) => (r = e != null ? t_(i_(e)) : {}, Ms(t || !e || !e.__esModule ? an(r, "default", {
      value: e,
      enumerable: !0
    }) : r, e)),
    rt = e => Ms(an({}, "__esModule", {
      value: !0
    }), e);
  var Pi = c(() => {
    "use strict";

    window.tram = function (e) {
      function t(f, T) {
        var A = new d.Bare();
        return A.init(f, T);
      }
      function r(f) {
        return f.replace(/[A-Z]/g, function (T) {
          return "-" + T.toLowerCase();
        });
      }
      function n(f) {
        var T = parseInt(f.slice(1), 16),
          A = T >> 16 & 255,
          R = T >> 8 & 255,
          O = 255 & T;
        return [A, R, O];
      }
      function i(f, T, A) {
        return "#" + (1 << 24 | f << 16 | T << 8 | A).toString(16).slice(1);
      }
      function o() {}
      function a(f, T) {
        l("Type warning: Expected: [" + f + "] Got: [" + typeof T + "] " + T);
      }
      function s(f, T, A) {
        l("Units do not match [" + f + "]: " + T + ", " + A);
      }
      function u(f, T, A) {
        if (T !== void 0 && (A = T), f === void 0) return A;
        var R = A;
        return Te.test(f) || !Re.test(f) ? R = parseInt(f, 10) : Re.test(f) && (R = 1e3 * parseFloat(f)), 0 > R && (R = 0), R === R ? R : A;
      }
      function l(f) {
        oe.debug && window && window.console.warn(f);
      }
      function _(f) {
        for (var T = -1, A = f ? f.length : 0, R = []; ++T < A;) {
          var O = f[T];
          O && R.push(O);
        }
        return R;
      }
      var p = function (f, T, A) {
          function R(ae) {
            return typeof ae == "object";
          }
          function O(ae) {
            return typeof ae == "function";
          }
          function L() {}
          function J(ae, ge) {
            function z() {
              var Ne = new se();
              return O(Ne.init) && Ne.init.apply(Ne, arguments), Ne;
            }
            function se() {}
            ge === A && (ge = ae, ae = Object), z.Bare = se;
            var ue,
              _e = L[f] = ae[f],
              tt = se[f] = z[f] = new L();
            return tt.constructor = z, z.mixin = function (Ne) {
              return se[f] = z[f] = J(z, Ne)[f], z;
            }, z.open = function (Ne) {
              if (ue = {}, O(Ne) ? ue = Ne.call(z, tt, _e, z, ae) : R(Ne) && (ue = Ne), R(ue)) for (var yr in ue) T.call(ue, yr) && (tt[yr] = ue[yr]);
              return O(tt.init) || (tt.init = ae), z;
            }, z.open(ge);
          }
          return J;
        }("prototype", {}.hasOwnProperty),
        b = {
          ease: ["ease", function (f, T, A, R) {
            var O = (f /= R) * f,
              L = O * f;
            return T + A * (-2.75 * L * O + 11 * O * O + -15.5 * L + 8 * O + .25 * f);
          }],
          "ease-in": ["ease-in", function (f, T, A, R) {
            var O = (f /= R) * f,
              L = O * f;
            return T + A * (-1 * L * O + 3 * O * O + -3 * L + 2 * O);
          }],
          "ease-out": ["ease-out", function (f, T, A, R) {
            var O = (f /= R) * f,
              L = O * f;
            return T + A * (.3 * L * O + -1.6 * O * O + 2.2 * L + -1.8 * O + 1.9 * f);
          }],
          "ease-in-out": ["ease-in-out", function (f, T, A, R) {
            var O = (f /= R) * f,
              L = O * f;
            return T + A * (2 * L * O + -5 * O * O + 2 * L + 2 * O);
          }],
          linear: ["linear", function (f, T, A, R) {
            return A * f / R + T;
          }],
          "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (f, T, A, R) {
            return A * (f /= R) * f + T;
          }],
          "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (f, T, A, R) {
            return -A * (f /= R) * (f - 2) + T;
          }],
          "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (f, T, A, R) {
            return (f /= R / 2) < 1 ? A / 2 * f * f + T : -A / 2 * (--f * (f - 2) - 1) + T;
          }],
          "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (f, T, A, R) {
            return A * (f /= R) * f * f + T;
          }],
          "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (f, T, A, R) {
            return A * ((f = f / R - 1) * f * f + 1) + T;
          }],
          "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (f, T, A, R) {
            return (f /= R / 2) < 1 ? A / 2 * f * f * f + T : A / 2 * ((f -= 2) * f * f + 2) + T;
          }],
          "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (f, T, A, R) {
            return A * (f /= R) * f * f * f + T;
          }],
          "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (f, T, A, R) {
            return -A * ((f = f / R - 1) * f * f * f - 1) + T;
          }],
          "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (f, T, A, R) {
            return (f /= R / 2) < 1 ? A / 2 * f * f * f * f + T : -A / 2 * ((f -= 2) * f * f * f - 2) + T;
          }],
          "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (f, T, A, R) {
            return A * (f /= R) * f * f * f * f + T;
          }],
          "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (f, T, A, R) {
            return A * ((f = f / R - 1) * f * f * f * f + 1) + T;
          }],
          "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (f, T, A, R) {
            return (f /= R / 2) < 1 ? A / 2 * f * f * f * f * f + T : A / 2 * ((f -= 2) * f * f * f * f + 2) + T;
          }],
          "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (f, T, A, R) {
            return -A * Math.cos(f / R * (Math.PI / 2)) + A + T;
          }],
          "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (f, T, A, R) {
            return A * Math.sin(f / R * (Math.PI / 2)) + T;
          }],
          "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (f, T, A, R) {
            return -A / 2 * (Math.cos(Math.PI * f / R) - 1) + T;
          }],
          "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (f, T, A, R) {
            return f === 0 ? T : A * Math.pow(2, 10 * (f / R - 1)) + T;
          }],
          "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (f, T, A, R) {
            return f === R ? T + A : A * (-Math.pow(2, -10 * f / R) + 1) + T;
          }],
          "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (f, T, A, R) {
            return f === 0 ? T : f === R ? T + A : (f /= R / 2) < 1 ? A / 2 * Math.pow(2, 10 * (f - 1)) + T : A / 2 * (-Math.pow(2, -10 * --f) + 2) + T;
          }],
          "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (f, T, A, R) {
            return -A * (Math.sqrt(1 - (f /= R) * f) - 1) + T;
          }],
          "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (f, T, A, R) {
            return A * Math.sqrt(1 - (f = f / R - 1) * f) + T;
          }],
          "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (f, T, A, R) {
            return (f /= R / 2) < 1 ? -A / 2 * (Math.sqrt(1 - f * f) - 1) + T : A / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + T;
          }],
          "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (f, T, A, R, O) {
            return O === void 0 && (O = 1.70158), A * (f /= R) * f * ((O + 1) * f - O) + T;
          }],
          "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (f, T, A, R, O) {
            return O === void 0 && (O = 1.70158), A * ((f = f / R - 1) * f * ((O + 1) * f + O) + 1) + T;
          }],
          "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (f, T, A, R, O) {
            return O === void 0 && (O = 1.70158), (f /= R / 2) < 1 ? A / 2 * f * f * (((O *= 1.525) + 1) * f - O) + T : A / 2 * ((f -= 2) * f * (((O *= 1.525) + 1) * f + O) + 2) + T;
          }]
        },
        v = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
        },
        E = document,
        I = window,
        x = "bkwld-tram",
        w = /[\-\.0-9]/g,
        N = /[A-Z]/,
        C = "number",
        q = /^(rgb|#)/,
        F = /(em|cm|mm|in|pt|pc|px)$/,
        P = /(em|cm|mm|in|pt|pc|px|%)$/,
        j = /(deg|rad|turn)$/,
        X = "unitless",
        Q = /(all|none) 0s ease 0s/,
        ee = /^(width|height)$/,
        re = " ",
        k = E.createElement("a"),
        S = ["Webkit", "Moz", "O", "ms"],
        M = ["-webkit-", "-moz-", "-o-", "-ms-"],
        W = function (f) {
          if (f in k.style) return {
            dom: f,
            css: f
          };
          var T,
            A,
            R = "",
            O = f.split("-");
          for (T = 0; T < O.length; T++) R += O[T].charAt(0).toUpperCase() + O[T].slice(1);
          for (T = 0; T < S.length; T++) if (A = S[T] + R, A in k.style) return {
            dom: A,
            css: M[T] + f
          };
        },
        G = t.support = {
          bind: Function.prototype.bind,
          transform: W("transform"),
          transition: W("transition"),
          backface: W("backface-visibility"),
          timing: W("transition-timing-function")
        };
      if (G.transition) {
        var te = G.timing.dom;
        if (k.style[te] = b["ease-in-back"][0], !k.style[te]) for (var ne in v) b[ne][0] = v[ne];
      }
      var D = t.frame = function () {
          var f = I.requestAnimationFrame || I.webkitRequestAnimationFrame || I.mozRequestAnimationFrame || I.oRequestAnimationFrame || I.msRequestAnimationFrame;
          return f && G.bind ? f.bind(I) : function (T) {
            I.setTimeout(T, 16);
          };
        }(),
        U = t.now = function () {
          var f = I.performance,
            T = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
          return T && G.bind ? T.bind(f) : Date.now || function () {
            return +new Date();
          };
        }(),
        h = p(function (f) {
          function T(ie, le) {
            var Ee = _(("" + ie).split(re)),
              pe = Ee[0];
            le = le || {};
            var Pe = H[pe];
            if (!Pe) return l("Unsupported property: " + pe);
            if (!le.weak || !this.props[pe]) {
              var je = Pe[0],
                De = this.props[pe];
              return De || (De = this.props[pe] = new je.Bare()), De.init(this.$el, Ee, Pe, le), De;
            }
          }
          function A(ie, le, Ee) {
            if (ie) {
              var pe = typeof ie;
              if (le || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), pe == "number" && le) return this.timer = new Z({
                duration: ie,
                context: this,
                complete: L
              }), void (this.active = !0);
              if (pe == "string" && le) {
                switch (ie) {
                  case "hide":
                    z.call(this);
                    break;
                  case "stop":
                    J.call(this);
                    break;
                  case "redraw":
                    se.call(this);
                    break;
                  default:
                    T.call(this, ie, Ee && Ee[1]);
                }
                return L.call(this);
              }
              if (pe == "function") return void ie.call(this, this);
              if (pe == "object") {
                var Pe = 0;
                tt.call(this, ie, function (Ie, e_) {
                  Ie.span > Pe && (Pe = Ie.span), Ie.stop(), Ie.animate(e_);
                }, function (Ie) {
                  "wait" in Ie && (Pe = u(Ie.wait, 0));
                }), _e.call(this), Pe > 0 && (this.timer = new Z({
                  duration: Pe,
                  context: this
                }), this.active = !0, le && (this.timer.complete = L));
                var je = this,
                  De = !1,
                  on = {};
                D(function () {
                  tt.call(je, ie, function (Ie) {
                    Ie.active && (De = !0, on[Ie.name] = Ie.nextStyle);
                  }), De && je.$el.css(on);
                });
              }
            }
          }
          function R(ie) {
            ie = u(ie, 0), this.active ? this.queue.push({
              options: ie
            }) : (this.timer = new Z({
              duration: ie,
              context: this,
              complete: L
            }), this.active = !0);
          }
          function O(ie) {
            return this.active ? (this.queue.push({
              options: ie,
              args: arguments
            }), void (this.timer.complete = L)) : l("No active transition timer. Use start() or wait() before then().");
          }
          function L() {
            if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
              var ie = this.queue.shift();
              A.call(this, ie.options, !0, ie.args);
            }
          }
          function J(ie) {
            this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
            var le;
            typeof ie == "string" ? (le = {}, le[ie] = 1) : le = typeof ie == "object" && ie != null ? ie : this.props, tt.call(this, le, Ne), _e.call(this);
          }
          function ae(ie) {
            J.call(this, ie), tt.call(this, ie, yr, Zb);
          }
          function ge(ie) {
            typeof ie != "string" && (ie = "block"), this.el.style.display = ie;
          }
          function z() {
            J.call(this), this.el.style.display = "none";
          }
          function se() {
            this.el.offsetHeight;
          }
          function ue() {
            J.call(this), e.removeData(this.el, x), this.$el = this.el = null;
          }
          function _e() {
            var ie,
              le,
              Ee = [];
            this.upstream && Ee.push(this.upstream);
            for (ie in this.props) le = this.props[ie], le.active && Ee.push(le.string);
            Ee = Ee.join(","), this.style !== Ee && (this.style = Ee, this.el.style[G.transition.dom] = Ee);
          }
          function tt(ie, le, Ee) {
            var pe,
              Pe,
              je,
              De,
              on = le !== Ne,
              Ie = {};
            for (pe in ie) je = ie[pe], pe in ce ? (Ie.transform || (Ie.transform = {}), Ie.transform[pe] = je) : (N.test(pe) && (pe = r(pe)), pe in H ? Ie[pe] = je : (De || (De = {}), De[pe] = je));
            for (pe in Ie) {
              if (je = Ie[pe], Pe = this.props[pe], !Pe) {
                if (!on) continue;
                Pe = T.call(this, pe);
              }
              le.call(this, Pe, je);
            }
            Ee && De && Ee.call(this, De);
          }
          function Ne(ie) {
            ie.stop();
          }
          function yr(ie, le) {
            ie.set(le);
          }
          function Zb(ie) {
            this.$el.css(ie);
          }
          function Xe(ie, le) {
            f[ie] = function () {
              return this.children ? Jb.call(this, le, arguments) : (this.el && le.apply(this, arguments), this);
            };
          }
          function Jb(ie, le) {
            var Ee,
              pe = this.children.length;
            for (Ee = 0; pe > Ee; Ee++) ie.apply(this.children[Ee], le);
            return this;
          }
          f.init = function (ie) {
            if (this.$el = e(ie), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, oe.keepInherited && !oe.fallback) {
              var le = V(this.el, "transition");
              le && !Q.test(le) && (this.upstream = le);
            }
            G.backface && oe.hideBackface && y(this.el, G.backface.css, "hidden");
          }, Xe("add", T), Xe("start", A), Xe("wait", R), Xe("then", O), Xe("next", L), Xe("stop", J), Xe("set", ae), Xe("show", ge), Xe("hide", z), Xe("redraw", se), Xe("destroy", ue);
        }),
        d = p(h, function (f) {
          function T(A, R) {
            var O = e.data(A, x) || e.data(A, x, new h.Bare());
            return O.el || O.init(A), R ? O.start(R) : O;
          }
          f.init = function (A, R) {
            var O = e(A);
            if (!O.length) return this;
            if (O.length === 1) return T(O[0], R);
            var L = [];
            return O.each(function (J, ae) {
              L.push(T(ae, R));
            }), this.children = L, this;
          };
        }),
        g = p(function (f) {
          function T() {
            var L = this.get();
            this.update("auto");
            var J = this.get();
            return this.update(L), J;
          }
          function A(L, J, ae) {
            return J !== void 0 && (ae = J), L in b ? L : ae;
          }
          function R(L) {
            var J = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(L);
            return (J ? i(J[1], J[2], J[3]) : L).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
          }
          var O = {
            duration: 500,
            ease: "ease",
            delay: 0
          };
          f.init = function (L, J, ae, ge) {
            this.$el = L, this.el = L[0];
            var z = J[0];
            ae[2] && (z = ae[2]), $[z] && (z = $[z]), this.name = z, this.type = ae[1], this.duration = u(J[1], this.duration, O.duration), this.ease = A(J[2], this.ease, O.ease), this.delay = u(J[3], this.delay, O.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = ee.test(this.name), this.unit = ge.unit || this.unit || oe.defaultUnit, this.angle = ge.angle || this.angle || oe.defaultAngle, oe.fallback || ge.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + re + this.duration + "ms" + (this.ease != "ease" ? re + b[this.ease][0] : "") + (this.delay ? re + this.delay + "ms" : ""));
          }, f.set = function (L) {
            L = this.convert(L, this.type), this.update(L), this.redraw();
          }, f.transition = function (L) {
            this.active = !0, L = this.convert(L, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), L == "auto" && (L = T.call(this))), this.nextStyle = L;
          }, f.fallback = function (L) {
            var J = this.el.style[this.name] || this.convert(this.get(), this.type);
            L = this.convert(L, this.type), this.auto && (J == "auto" && (J = this.convert(this.get(), this.type)), L == "auto" && (L = T.call(this))), this.tween = new Y({
              from: J,
              to: L,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, f.get = function () {
            return V(this.el, this.name);
          }, f.update = function (L) {
            y(this.el, this.name, L);
          }, f.stop = function () {
            (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, y(this.el, this.name, this.get()));
            var L = this.tween;
            L && L.context && L.destroy();
          }, f.convert = function (L, J) {
            if (L == "auto" && this.auto) return L;
            var ae,
              ge = typeof L == "number",
              z = typeof L == "string";
            switch (J) {
              case C:
                if (ge) return L;
                if (z && L.replace(w, "") === "") return +L;
                ae = "number(unitless)";
                break;
              case q:
                if (z) {
                  if (L === "" && this.original) return this.original;
                  if (J.test(L)) return L.charAt(0) == "#" && L.length == 7 ? L : R(L);
                }
                ae = "hex or rgb string";
                break;
              case F:
                if (ge) return L + this.unit;
                if (z && J.test(L)) return L;
                ae = "number(px) or string(unit)";
                break;
              case P:
                if (ge) return L + this.unit;
                if (z && J.test(L)) return L;
                ae = "number(px) or string(unit or %)";
                break;
              case j:
                if (ge) return L + this.angle;
                if (z && J.test(L)) return L;
                ae = "number(deg) or string(angle)";
                break;
              case X:
                if (ge || z && P.test(L)) return L;
                ae = "number(unitless) or string(unit or %)";
            }
            return a(ae, L), L;
          }, f.redraw = function () {
            this.el.offsetHeight;
          };
        }),
        m = p(g, function (f, T) {
          f.init = function () {
            T.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), q));
          };
        }),
        B = p(g, function (f, T) {
          f.init = function () {
            T.init.apply(this, arguments), this.animate = this.fallback;
          }, f.get = function () {
            return this.$el[this.name]();
          }, f.update = function (A) {
            this.$el[this.name](A);
          };
        }),
        K = p(g, function (f, T) {
          function A(R, O) {
            var L, J, ae, ge, z;
            for (L in R) ge = ce[L], ae = ge[0], J = ge[1] || L, z = this.convert(R[L], ae), O.call(this, J, z, ae);
          }
          f.init = function () {
            T.init.apply(this, arguments), this.current || (this.current = {}, ce.perspective && oe.perspective && (this.current.perspective = oe.perspective, y(this.el, this.name, this.style(this.current)), this.redraw()));
          }, f.set = function (R) {
            A.call(this, R, function (O, L) {
              this.current[O] = L;
            }), y(this.el, this.name, this.style(this.current)), this.redraw();
          }, f.transition = function (R) {
            var O = this.values(R);
            this.tween = new de({
              current: this.current,
              values: O,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease
            });
            var L,
              J = {};
            for (L in this.current) J[L] = L in O ? O[L] : this.current[L];
            this.active = !0, this.nextStyle = this.style(J);
          }, f.fallback = function (R) {
            var O = this.values(R);
            this.tween = new de({
              current: this.current,
              values: O,
              duration: this.duration,
              delay: this.delay,
              ease: this.ease,
              update: this.update,
              context: this
            });
          }, f.update = function () {
            y(this.el, this.name, this.style(this.current));
          }, f.style = function (R) {
            var O,
              L = "";
            for (O in R) L += O + "(" + R[O] + ") ";
            return L;
          }, f.values = function (R) {
            var O,
              L = {};
            return A.call(this, R, function (J, ae, ge) {
              L[J] = ae, this.current[J] === void 0 && (O = 0, ~J.indexOf("scale") && (O = 1), this.current[J] = this.convert(O, ge));
            }), L;
          };
        }),
        Y = p(function (f) {
          function T(z) {
            ae.push(z) === 1 && D(A);
          }
          function A() {
            var z,
              se,
              ue,
              _e = ae.length;
            if (_e) for (D(A), se = U(), z = _e; z--;) ue = ae[z], ue && ue.render(se);
          }
          function R(z) {
            var se,
              ue = e.inArray(z, ae);
            ue >= 0 && (se = ae.slice(ue + 1), ae.length = ue, se.length && (ae = ae.concat(se)));
          }
          function O(z) {
            return Math.round(z * ge) / ge;
          }
          function L(z, se, ue) {
            return i(z[0] + ue * (se[0] - z[0]), z[1] + ue * (se[1] - z[1]), z[2] + ue * (se[2] - z[2]));
          }
          var J = {
            ease: b.ease[1],
            from: 0,
            to: 1
          };
          f.init = function (z) {
            this.duration = z.duration || 0, this.delay = z.delay || 0;
            var se = z.ease || J.ease;
            b[se] && (se = b[se][1]), typeof se != "function" && (se = J.ease), this.ease = se, this.update = z.update || o, this.complete = z.complete || o, this.context = z.context || this, this.name = z.name;
            var ue = z.from,
              _e = z.to;
            ue === void 0 && (ue = J.from), _e === void 0 && (_e = J.to), this.unit = z.unit || "", typeof ue == "number" && typeof _e == "number" ? (this.begin = ue, this.change = _e - ue) : this.format(_e, ue), this.value = this.begin + this.unit, this.start = U(), z.autoplay !== !1 && this.play();
          }, f.play = function () {
            this.active || (this.start || (this.start = U()), this.active = !0, T(this));
          }, f.stop = function () {
            this.active && (this.active = !1, R(this));
          }, f.render = function (z) {
            var se,
              ue = z - this.start;
            if (this.delay) {
              if (ue <= this.delay) return;
              ue -= this.delay;
            }
            if (ue < this.duration) {
              var _e = this.ease(ue, 0, 1, this.duration);
              return se = this.startRGB ? L(this.startRGB, this.endRGB, _e) : O(this.begin + _e * this.change), this.value = se + this.unit, void this.update.call(this.context, this.value);
            }
            se = this.endHex || this.begin + this.change, this.value = se + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy();
          }, f.format = function (z, se) {
            if (se += "", z += "", z.charAt(0) == "#") return this.startRGB = n(se), this.endRGB = n(z), this.endHex = z, this.begin = 0, void (this.change = 1);
            if (!this.unit) {
              var ue = se.replace(w, ""),
                _e = z.replace(w, "");
              ue !== _e && s("tween", se, z), this.unit = ue;
            }
            se = parseFloat(se), z = parseFloat(z), this.begin = this.value = se, this.change = z - se;
          }, f.destroy = function () {
            this.stop(), this.context = null, this.ease = this.update = this.complete = o;
          };
          var ae = [],
            ge = 1e3;
        }),
        Z = p(Y, function (f) {
          f.init = function (T) {
            this.duration = T.duration || 0, this.complete = T.complete || o, this.context = T.context, this.play();
          }, f.render = function (T) {
            var A = T - this.start;
            A < this.duration || (this.complete.call(this.context), this.destroy());
          };
        }),
        de = p(Y, function (f, T) {
          f.init = function (A) {
            this.context = A.context, this.update = A.update, this.tweens = [], this.current = A.current;
            var R, O;
            for (R in A.values) O = A.values[R], this.current[R] !== O && this.tweens.push(new Y({
              name: R,
              from: this.current[R],
              to: O,
              duration: A.duration,
              delay: A.delay,
              ease: A.ease,
              autoplay: !1
            }));
            this.play();
          }, f.render = function (A) {
            var R,
              O,
              L = this.tweens.length,
              J = !1;
            for (R = L; R--;) O = this.tweens[R], O.context && (O.render(A), this.current[O.name] = O.value, J = !0);
            return J ? void (this.update && this.update.call(this.context)) : this.destroy();
          }, f.destroy = function () {
            if (T.destroy.call(this), this.tweens) {
              var A,
                R = this.tweens.length;
              for (A = R; A--;) this.tweens[A].destroy();
              this.tweens = null, this.current = null;
            }
          };
        }),
        oe = t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !G.transition,
          agentTests: []
        };
      t.fallback = function (f) {
        if (!G.transition) return oe.fallback = !0;
        oe.agentTests.push("(" + f + ")");
        var T = new RegExp(oe.agentTests.join("|"), "i");
        oe.fallback = T.test(navigator.userAgent);
      }, t.fallback("6.0.[2-5] Safari"), t.tween = function (f) {
        return new Y(f);
      }, t.delay = function (f, T, A) {
        return new Z({
          complete: T,
          duration: f,
          context: A
        });
      }, e.fn.tram = function (f) {
        return t.call(null, this, f);
      };
      var y = e.style,
        V = e.css,
        $ = {
          transform: G.transform && G.transform.css
        },
        H = {
          color: [m, q],
          background: [m, q, "background-color"],
          "outline-color": [m, q],
          "border-color": [m, q],
          "border-top-color": [m, q],
          "border-right-color": [m, q],
          "border-bottom-color": [m, q],
          "border-left-color": [m, q],
          "border-width": [g, F],
          "border-top-width": [g, F],
          "border-right-width": [g, F],
          "border-bottom-width": [g, F],
          "border-left-width": [g, F],
          "border-spacing": [g, F],
          "letter-spacing": [g, F],
          margin: [g, F],
          "margin-top": [g, F],
          "margin-right": [g, F],
          "margin-bottom": [g, F],
          "margin-left": [g, F],
          padding: [g, F],
          "padding-top": [g, F],
          "padding-right": [g, F],
          "padding-bottom": [g, F],
          "padding-left": [g, F],
          "outline-width": [g, F],
          opacity: [g, C],
          top: [g, P],
          right: [g, P],
          bottom: [g, P],
          left: [g, P],
          "font-size": [g, P],
          "text-indent": [g, P],
          "word-spacing": [g, P],
          width: [g, P],
          "min-width": [g, P],
          "max-width": [g, P],
          height: [g, P],
          "min-height": [g, P],
          "max-height": [g, P],
          "line-height": [g, X],
          "scroll-top": [B, C, "scrollTop"],
          "scroll-left": [B, C, "scrollLeft"]
        },
        ce = {};
      G.transform && (H.transform = [K], ce = {
        x: [P, "translateX"],
        y: [P, "translateY"],
        rotate: [j],
        rotateX: [j],
        rotateY: [j],
        scale: [C],
        scaleX: [C],
        scaleY: [C],
        skew: [j],
        skewX: [j],
        skewY: [j]
      }), G.transform && G.backface && (ce.z = [P, "translateZ"], ce.rotateZ = [j], ce.scaleZ = [C], ce.perspective = [F]);
      var Te = /ms/,
        Re = /s|\./;
      return e.tram = t;
    }(window.jQuery);
  });
  var ks = c((ZU, Ds) => {
    "use strict";

    var a_ = window.$,
      s_ = Pi() && a_.tram;
    Ds.exports = function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        l = n.hasOwnProperty,
        _ = r.forEach,
        p = r.map,
        b = r.reduce,
        v = r.reduceRight,
        E = r.filter,
        I = r.every,
        x = r.some,
        w = r.indexOf,
        N = r.lastIndexOf,
        C = Array.isArray,
        q = Object.keys,
        F = i.bind,
        P = e.each = e.forEach = function (S, M, W) {
          if (S == null) return S;
          if (_ && S.forEach === _) S.forEach(M, W);else if (S.length === +S.length) {
            for (var G = 0, te = S.length; G < te; G++) if (M.call(W, S[G], G, S) === t) return;
          } else for (var ne = e.keys(S), G = 0, te = ne.length; G < te; G++) if (M.call(W, S[ne[G]], ne[G], S) === t) return;
          return S;
        };
      e.map = e.collect = function (S, M, W) {
        var G = [];
        return S == null ? G : p && S.map === p ? S.map(M, W) : (P(S, function (te, ne, D) {
          G.push(M.call(W, te, ne, D));
        }), G);
      }, e.find = e.detect = function (S, M, W) {
        var G;
        return j(S, function (te, ne, D) {
          if (M.call(W, te, ne, D)) return G = te, !0;
        }), G;
      }, e.filter = e.select = function (S, M, W) {
        var G = [];
        return S == null ? G : E && S.filter === E ? S.filter(M, W) : (P(S, function (te, ne, D) {
          M.call(W, te, ne, D) && G.push(te);
        }), G);
      };
      var j = e.some = e.any = function (S, M, W) {
        M || (M = e.identity);
        var G = !1;
        return S == null ? G : x && S.some === x ? S.some(M, W) : (P(S, function (te, ne, D) {
          if (G || (G = M.call(W, te, ne, D))) return t;
        }), !!G);
      };
      e.contains = e.include = function (S, M) {
        return S == null ? !1 : w && S.indexOf === w ? S.indexOf(M) != -1 : j(S, function (W) {
          return W === M;
        });
      }, e.delay = function (S, M) {
        var W = a.call(arguments, 2);
        return setTimeout(function () {
          return S.apply(null, W);
        }, M);
      }, e.defer = function (S) {
        return e.delay.apply(e, [S, 1].concat(a.call(arguments, 1)));
      }, e.throttle = function (S) {
        var M, W, G;
        return function () {
          M || (M = !0, W = arguments, G = this, s_.frame(function () {
            M = !1, S.apply(G, W);
          }));
        };
      }, e.debounce = function (S, M, W) {
        var G,
          te,
          ne,
          D,
          U,
          h = function () {
            var d = e.now() - D;
            d < M ? G = setTimeout(h, M - d) : (G = null, W || (U = S.apply(ne, te), ne = te = null));
          };
        return function () {
          ne = this, te = arguments, D = e.now();
          var d = W && !G;
          return G || (G = setTimeout(h, M)), d && (U = S.apply(ne, te), ne = te = null), U;
        };
      }, e.defaults = function (S) {
        if (!e.isObject(S)) return S;
        for (var M = 1, W = arguments.length; M < W; M++) {
          var G = arguments[M];
          for (var te in G) S[te] === void 0 && (S[te] = G[te]);
        }
        return S;
      }, e.keys = function (S) {
        if (!e.isObject(S)) return [];
        if (q) return q(S);
        var M = [];
        for (var W in S) e.has(S, W) && M.push(W);
        return M;
      }, e.has = function (S, M) {
        return l.call(S, M);
      }, e.isObject = function (S) {
        return S === Object(S);
      }, e.now = Date.now || function () {
        return new Date().getTime();
      }, e.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
      };
      var X = /(.)^/,
        Q = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029"
        },
        ee = /\\|'|\r|\n|\u2028|\u2029/g,
        re = function (S) {
          return "\\" + Q[S];
        },
        k = /^\s*(\w|\$)+\s*$/;
      return e.template = function (S, M, W) {
        !M && W && (M = W), M = e.defaults({}, M, e.templateSettings);
        var G = RegExp([(M.escape || X).source, (M.interpolate || X).source, (M.evaluate || X).source].join("|") + "|$", "g"),
          te = 0,
          ne = "__p+='";
        S.replace(G, function (d, g, m, B, K) {
          return ne += S.slice(te, K).replace(ee, re), te = K + d.length, g ? ne += `'+
((__t=(` + g + `))==null?'':_.escape(__t))+
'` : m ? ne += `'+
((__t=(` + m + `))==null?'':__t)+
'` : B && (ne += `';
` + B + `
__p+='`), d;
        }), ne += `';
`;
        var D = M.variable;
        if (D) {
          if (!k.test(D)) throw new Error("variable is not a bare identifier: " + D);
        } else ne = `with(obj||{}){
` + ne + `}
`, D = "obj";
        ne = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + ne + `return __p;
`;
        var U;
        try {
          U = new Function(M.variable || "obj", "_", ne);
        } catch (d) {
          throw d.source = ne, d;
        }
        var h = function (d) {
          return U.call(this, d, e);
        };
        return h.source = "function(" + D + `){
` + ne + "}", h;
      }, e;
    }();
  });
  var Ge = c((JU, js) => {
    "use strict";

    var he = {},
      Vt = {},
      Ut = [],
      Fi = window.Webflow || [],
      Et = window.jQuery,
      Ke = Et(window),
      u_ = Et(document),
      nt = Et.isFunction,
      ze = he._ = ks(),
      Vs = he.tram = Pi() && Et.tram,
      un = !1,
      Mi = !1;
    Vs.config.hideBackface = !1;
    Vs.config.keepInherited = !0;
    he.define = function (e, t, r) {
      Vt[e] && Bs(Vt[e]);
      var n = Vt[e] = t(Et, ze, r) || {};
      return Us(n), n;
    };
    he.require = function (e) {
      return Vt[e];
    };
    function Us(e) {
      he.env() && (nt(e.design) && Ke.on("__wf_design", e.design), nt(e.preview) && Ke.on("__wf_preview", e.preview)), nt(e.destroy) && Ke.on("__wf_destroy", e.destroy), e.ready && nt(e.ready) && c_(e);
    }
    function c_(e) {
      if (un) {
        e.ready();
        return;
      }
      ze.contains(Ut, e.ready) || Ut.push(e.ready);
    }
    function Bs(e) {
      nt(e.design) && Ke.off("__wf_design", e.design), nt(e.preview) && Ke.off("__wf_preview", e.preview), nt(e.destroy) && Ke.off("__wf_destroy", e.destroy), e.ready && nt(e.ready) && l_(e);
    }
    function l_(e) {
      Ut = ze.filter(Ut, function (t) {
        return t !== e.ready;
      });
    }
    he.push = function (e) {
      if (un) {
        nt(e) && e();
        return;
      }
      Fi.push(e);
    };
    he.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var sn = navigator.userAgent.toLowerCase(),
      Ws = he.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
      f_ = he.env.chrome = /chrome/.test(sn) && /Google/.test(navigator.vendor) && parseInt(sn.match(/chrome\/(\d+)\./)[1], 10),
      d_ = he.env.ios = /(ipod|iphone|ipad)/.test(sn);
    he.env.safari = /safari/.test(sn) && !f_ && !d_;
    var qi;
    Ws && u_.on("touchstart mousedown", function (e) {
      qi = e.target;
    });
    he.validClick = Ws ? function (e) {
      return e === qi || Et.contains(e, qi);
    } : function () {
      return !0;
    };
    var Hs = "resize.webflow orientationchange.webflow load.webflow",
      p_ = "scroll.webflow " + Hs;
    he.resize = Di(Ke, Hs);
    he.scroll = Di(Ke, p_);
    he.redraw = Di();
    function Di(e, t) {
      var r = [],
        n = {};
      return n.up = ze.throttle(function (i) {
        ze.each(r, function (o) {
          o(i);
        });
      }), e && t && e.on(t, n.up), n.on = function (i) {
        typeof i == "function" && (ze.contains(r, i) || r.push(i));
      }, n.off = function (i) {
        if (!arguments.length) {
          r = [];
          return;
        }
        r = ze.filter(r, function (o) {
          return o !== i;
        });
      }, n;
    }
    he.location = function (e) {
      window.location = e;
    };
    he.env() && (he.location = function () {});
    he.ready = function () {
      un = !0, Mi ? h_() : ze.each(Ut, Gs), ze.each(Fi, Gs), he.resize.up();
    };
    function Gs(e) {
      nt(e) && e();
    }
    function h_() {
      Mi = !1, ze.each(Vt, Us);
    }
    var Ct;
    he.load = function (e) {
      Ct.then(e);
    };
    function Xs() {
      Ct && (Ct.reject(), Ke.off("load", Ct.resolve)), Ct = new Et.Deferred(), Ke.on("load", Ct.resolve);
    }
    he.destroy = function (e) {
      e = e || {}, Mi = !0, Ke.triggerHandler("__wf_destroy"), e.domready != null && (un = e.domready), ze.each(Vt, Bs), he.resize.off(), he.scroll.off(), he.redraw.off(), Ut = [], Fi = [], Ct.state() === "pending" && Xs();
    };
    Et(he.ready);
    Xs();
    js.exports = window.Webflow = he;
  });
  var Ys = c((eB, Ks) => {
    "use strict";

    var zs = Ge();
    zs.define("brand", Ks.exports = function (e) {
      var t = {},
        r = document,
        n = e("html"),
        i = e("body"),
        o = ".w-webflow-badge",
        a = window.location,
        s = /PhantomJS/i.test(navigator.userAgent),
        u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
        l;
      t.ready = function () {
        var v = n.attr("data-wf-status"),
          E = n.attr("data-wf-domain") || "";
        /\.webflow\.io$/i.test(E) && a.hostname !== E && (v = !0), v && !s && (l = l || p(), b(), setTimeout(b, 500), e(r).off(u, _).on(u, _));
      };
      function _() {
        var v = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
        e(l).attr("style", v ? "display: none !important;" : "");
      }
      function p() {
        var v = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
          E = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
            marginRight: "4px",
            width: "26px"
          }),
          I = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
        return v.append(E, I), v[0];
      }
      function b() {
        var v = i.children(o),
          E = v.length && v.get(0) === l,
          I = zs.env("editor");
        if (E) {
          I && v.remove();
          return;
        }
        v.length && v.remove(), I || i.append(l);
      }
      return t;
    });
  });
  var Qs = c((tB, $s) => {
    "use strict";

    var ki = Ge();
    ki.define("edit", $s.exports = function (e, t, r) {
      if (r = r || {}, (ki.env("test") || ki.env("frame")) && !r.fixture && !g_()) return {
        exit: 1
      };
      var n = {},
        i = e(window),
        o = e(document.documentElement),
        a = document.location,
        s = "hashchange",
        u,
        l = r.load || b,
        _ = !1;
      try {
        _ = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor");
      } catch {}
      _ ? l() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && l() : i.on(s, p).triggerHandler(s);
      function p() {
        u || /\?edit/.test(a.hash) && l();
      }
      function b() {
        u = !0, window.WebflowEditor = !0, i.off(s, p), N(function (q) {
          e.ajax({
            url: w("https://editor-api.webflow.com/api/editor/view"),
            data: {
              siteId: o.attr("data-wf-site")
            },
            xhrFields: {
              withCredentials: !0
            },
            dataType: "json",
            crossDomain: !0,
            success: v(q)
          });
        });
      }
      function v(q) {
        return function (F) {
          if (!F) {
            console.error("Could not load editor data");
            return;
          }
          F.thirdPartyCookiesSupported = q, E(x(F.scriptPath), function () {
            window.WebflowEditor(F);
          });
        };
      }
      function E(q, F) {
        e.ajax({
          type: "GET",
          url: q,
          dataType: "script",
          cache: !0
        }).then(F, I);
      }
      function I(q, F, P) {
        throw console.error("Could not load editor script: " + F), P;
      }
      function x(q) {
        return q.indexOf("//") >= 0 ? q : w("https://editor-api.webflow.com" + q);
      }
      function w(q) {
        return q.replace(/([^:])\/\//g, "$1/");
      }
      function N(q) {
        var F = window.document.createElement("iframe");
        F.src = "https://webflow.com/site/third-party-cookie-check.html", F.style.display = "none", F.sandbox = "allow-scripts allow-same-origin";
        var P = function (j) {
          j.data === "WF_third_party_cookies_unsupported" ? (C(F, P), q(!1)) : j.data === "WF_third_party_cookies_supported" && (C(F, P), q(!0));
        };
        F.onerror = function () {
          C(F, P), q(!1);
        }, window.addEventListener("message", P, !1), window.document.body.appendChild(F);
      }
      function C(q, F) {
        window.removeEventListener("message", F, !1), q.remove();
      }
      return n;
    });
    function g_() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Js = c((rB, Zs) => {
    "use strict";

    var v_ = Ge();
    v_.define("focus-visible", Zs.exports = function () {
      function e(r) {
        var n = !0,
          i = !1,
          o = null,
          a = {
            text: !0,
            search: !0,
            url: !0,
            tel: !0,
            email: !0,
            password: !0,
            number: !0,
            date: !0,
            month: !0,
            week: !0,
            time: !0,
            datetime: !0,
            "datetime-local": !0
          };
        function s(C) {
          return !!(C && C !== document && C.nodeName !== "HTML" && C.nodeName !== "BODY" && "classList" in C && "contains" in C.classList);
        }
        function u(C) {
          var q = C.type,
            F = C.tagName;
          return !!(F === "INPUT" && a[q] && !C.readOnly || F === "TEXTAREA" && !C.readOnly || C.isContentEditable);
        }
        function l(C) {
          C.getAttribute("data-wf-focus-visible") || C.setAttribute("data-wf-focus-visible", "true");
        }
        function _(C) {
          C.getAttribute("data-wf-focus-visible") && C.removeAttribute("data-wf-focus-visible");
        }
        function p(C) {
          C.metaKey || C.altKey || C.ctrlKey || (s(r.activeElement) && l(r.activeElement), n = !0);
        }
        function b() {
          n = !1;
        }
        function v(C) {
          s(C.target) && (n || u(C.target)) && l(C.target);
        }
        function E(C) {
          s(C.target) && C.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function () {
            i = !1;
          }, 100), _(C.target));
        }
        function I() {
          document.visibilityState === "hidden" && (i && (n = !0), x());
        }
        function x() {
          document.addEventListener("mousemove", N), document.addEventListener("mousedown", N), document.addEventListener("mouseup", N), document.addEventListener("pointermove", N), document.addEventListener("pointerdown", N), document.addEventListener("pointerup", N), document.addEventListener("touchmove", N), document.addEventListener("touchstart", N), document.addEventListener("touchend", N);
        }
        function w() {
          document.removeEventListener("mousemove", N), document.removeEventListener("mousedown", N), document.removeEventListener("mouseup", N), document.removeEventListener("pointermove", N), document.removeEventListener("pointerdown", N), document.removeEventListener("pointerup", N), document.removeEventListener("touchmove", N), document.removeEventListener("touchstart", N), document.removeEventListener("touchend", N);
        }
        function N(C) {
          C.target.nodeName && C.target.nodeName.toLowerCase() === "html" || (n = !1, w());
        }
        document.addEventListener("keydown", p, !0), document.addEventListener("mousedown", b, !0), document.addEventListener("pointerdown", b, !0), document.addEventListener("touchstart", b, !0), document.addEventListener("visibilitychange", I, !0), x(), r.addEventListener("focus", v, !0), r.addEventListener("blur", E, !0);
      }
      function t() {
        if (typeof document < "u") try {
          document.querySelector(":focus-visible");
        } catch {
          e(document);
        }
      }
      return {
        ready: t
      };
    });
  });
  var ru = c((nB, tu) => {
    "use strict";

    var eu = Ge();
    eu.define("focus", tu.exports = function () {
      var e = [],
        t = !1;
      function r(a) {
        t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a));
      }
      function n(a) {
        var s = a.target,
          u = s.tagName;
        return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0;
      }
      function i(a) {
        n(a) && (t = !0, setTimeout(() => {
          for (t = !1, a.target.focus(); e.length > 0;) {
            var s = e.pop();
            s.target.dispatchEvent(new MouseEvent(s.type, s));
          }
        }, 0));
      }
      function o() {
        typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && eu.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0));
      }
      return {
        ready: o
      };
    });
  });
  var ou = c((iB, iu) => {
    "use strict";

    var Gi = window.jQuery,
      it = {},
      cn = [],
      nu = ".w-ix",
      ln = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro || (t.__wf_intro = !0, Gi(t).triggerHandler(it.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro && (t.__wf_intro = null, Gi(t).triggerHandler(it.types.OUTRO));
        }
      };
    it.triggers = {};
    it.types = {
      INTRO: "w-ix-intro" + nu,
      OUTRO: "w-ix-outro" + nu
    };
    it.init = function () {
      for (var e = cn.length, t = 0; t < e; t++) {
        var r = cn[t];
        r[0](0, r[1]);
      }
      cn = [], Gi.extend(it.triggers, ln);
    };
    it.async = function () {
      for (var e in ln) {
        var t = ln[e];
        ln.hasOwnProperty(e) && (it.triggers[e] = function (r, n) {
          cn.push([t, n]);
        });
      }
    };
    it.async();
    iu.exports = it;
  });
  var dn = c((oB, uu) => {
    "use strict";

    var Vi = ou();
    function au(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var m_ = window.jQuery,
      fn = {},
      su = ".w-ix",
      y_ = {
        reset: function (e, t) {
          Vi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Vi.triggers.intro(e, t), au(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Vi.triggers.outro(e, t), au(t, "COMPONENT_INACTIVE");
        }
      };
    fn.triggers = {};
    fn.types = {
      INTRO: "w-ix-intro" + su,
      OUTRO: "w-ix-outro" + su
    };
    m_.extend(fn.triggers, y_);
    uu.exports = fn;
  });
  var cu = c((aB, dt) => {
    function Ui(e) {
      return dt.exports = Ui = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
        return typeof t;
      } : function (t) {
        return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, dt.exports.__esModule = !0, dt.exports.default = dt.exports, Ui(e);
    }
    dt.exports = Ui, dt.exports.__esModule = !0, dt.exports.default = dt.exports;
  });
  var pn = c((sB, Er) => {
    var E_ = cu().default;
    function lu(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (lu = function (i) {
        return i ? r : t;
      })(e);
    }
    function b_(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || E_(e) !== "object" && typeof e != "function") return {
        default: e
      };
      var r = lu(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e) if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
        var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
        a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o];
      }
      return n.default = e, r && r.set(e, n), n;
    }
    Er.exports = b_, Er.exports.__esModule = !0, Er.exports.default = Er.exports;
  });
  var fu = c((uB, br) => {
    function __(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    br.exports = __, br.exports.__esModule = !0, br.exports.default = br.exports;
  });
  var ye = c((cB, du) => {
    var hn = function (e) {
      return e && e.Math == Math && e;
    };
    du.exports = hn(typeof globalThis == "object" && globalThis) || hn(typeof window == "object" && window) || hn(typeof self == "object" && self) || hn(typeof __webpack_require__.g == "object" && __webpack_require__.g) || function () {
      return this;
    }() || Function("return this")();
  });
  var Bt = c((lB, pu) => {
    pu.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Rt = c((fB, hu) => {
    var I_ = Bt();
    hu.exports = !I_(function () {
      return Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        }
      })[1] != 7;
    });
  });
  var gn = c((dB, gu) => {
    var _r = Function.prototype.call;
    gu.exports = _r.bind ? _r.bind(_r) : function () {
      return _r.apply(_r, arguments);
    };
  });
  var Eu = c(yu => {
    "use strict";

    var vu = {}.propertyIsEnumerable,
      mu = Object.getOwnPropertyDescriptor,
      T_ = mu && !vu.call({
        1: 2
      }, 1);
    yu.f = T_ ? function (t) {
      var r = mu(this, t);
      return !!r && r.enumerable;
    } : vu;
  });
  var Bi = c((hB, bu) => {
    bu.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t
      };
    };
  });
  var Ye = c((gB, Iu) => {
    var _u = Function.prototype,
      Wi = _u.bind,
      Hi = _u.call,
      w_ = Wi && Wi.bind(Hi);
    Iu.exports = Wi ? function (e) {
      return e && w_(Hi, e);
    } : function (e) {
      return e && function () {
        return Hi.apply(e, arguments);
      };
    };
  });
  var xu = c((vB, wu) => {
    var Tu = Ye(),
      x_ = Tu({}.toString),
      O_ = Tu("".slice);
    wu.exports = function (e) {
      return O_(x_(e), 8, -1);
    };
  });
  var Au = c((mB, Ou) => {
    var A_ = ye(),
      S_ = Ye(),
      C_ = Bt(),
      R_ = xu(),
      Xi = A_.Object,
      L_ = S_("".split);
    Ou.exports = C_(function () {
      return !Xi("z").propertyIsEnumerable(0);
    }) ? function (e) {
      return R_(e) == "String" ? L_(e, "") : Xi(e);
    } : Xi;
  });
  var ji = c((yB, Su) => {
    var N_ = ye(),
      P_ = N_.TypeError;
    Su.exports = function (e) {
      if (e == null) throw P_("Can't call method on " + e);
      return e;
    };
  });
  var Ir = c((EB, Cu) => {
    var q_ = Au(),
      F_ = ji();
    Cu.exports = function (e) {
      return q_(F_(e));
    };
  });
  var ot = c((bB, Ru) => {
    Ru.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Wt = c((_B, Lu) => {
    var M_ = ot();
    Lu.exports = function (e) {
      return typeof e == "object" ? e !== null : M_(e);
    };
  });
  var Tr = c((IB, Nu) => {
    var zi = ye(),
      D_ = ot(),
      k_ = function (e) {
        return D_(e) ? e : void 0;
      };
    Nu.exports = function (e, t) {
      return arguments.length < 2 ? k_(zi[e]) : zi[e] && zi[e][t];
    };
  });
  var qu = c((TB, Pu) => {
    var G_ = Ye();
    Pu.exports = G_({}.isPrototypeOf);
  });
  var Mu = c((wB, Fu) => {
    var V_ = Tr();
    Fu.exports = V_("navigator", "userAgent") || "";
  });
  var Wu = c((xB, Bu) => {
    var Uu = ye(),
      Ki = Mu(),
      Du = Uu.process,
      ku = Uu.Deno,
      Gu = Du && Du.versions || ku && ku.version,
      Vu = Gu && Gu.v8,
      $e,
      vn;
    Vu && ($e = Vu.split("."), vn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1]));
    !vn && Ki && ($e = Ki.match(/Edge\/(\d+)/), (!$e || $e[1] >= 74) && ($e = Ki.match(/Chrome\/(\d+)/), $e && (vn = +$e[1])));
    Bu.exports = vn;
  });
  var Yi = c((OB, Xu) => {
    var Hu = Wu(),
      U_ = Bt();
    Xu.exports = !!Object.getOwnPropertySymbols && !U_(function () {
      var e = Symbol();
      return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Hu && Hu < 41;
    });
  });
  var $i = c((AB, ju) => {
    var B_ = Yi();
    ju.exports = B_ && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Qi = c((SB, zu) => {
    var W_ = ye(),
      H_ = Tr(),
      X_ = ot(),
      j_ = qu(),
      z_ = $i(),
      K_ = W_.Object;
    zu.exports = z_ ? function (e) {
      return typeof e == "symbol";
    } : function (e) {
      var t = H_("Symbol");
      return X_(t) && j_(t.prototype, K_(e));
    };
  });
  var Yu = c((CB, Ku) => {
    var Y_ = ye(),
      $_ = Y_.String;
    Ku.exports = function (e) {
      try {
        return $_(e);
      } catch {
        return "Object";
      }
    };
  });
  var Qu = c((RB, $u) => {
    var Q_ = ye(),
      Z_ = ot(),
      J_ = Yu(),
      eI = Q_.TypeError;
    $u.exports = function (e) {
      if (Z_(e)) return e;
      throw eI(J_(e) + " is not a function");
    };
  });
  var Ju = c((LB, Zu) => {
    var tI = Qu();
    Zu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : tI(r);
    };
  });
  var tc = c((NB, ec) => {
    var rI = ye(),
      Zi = gn(),
      Ji = ot(),
      eo = Wt(),
      nI = rI.TypeError;
    ec.exports = function (e, t) {
      var r, n;
      if (t === "string" && Ji(r = e.toString) && !eo(n = Zi(r, e)) || Ji(r = e.valueOf) && !eo(n = Zi(r, e)) || t !== "string" && Ji(r = e.toString) && !eo(n = Zi(r, e))) return n;
      throw nI("Can't convert object to primitive value");
    };
  });
  var nc = c((PB, rc) => {
    rc.exports = !1;
  });
  var mn = c((qB, oc) => {
    var ic = ye(),
      iI = Object.defineProperty;
    oc.exports = function (e, t) {
      try {
        iI(ic, e, {
          value: t,
          configurable: !0,
          writable: !0
        });
      } catch {
        ic[e] = t;
      }
      return t;
    };
  });
  var yn = c((FB, sc) => {
    var oI = ye(),
      aI = mn(),
      ac = "__core-js_shared__",
      sI = oI[ac] || aI(ac, {});
    sc.exports = sI;
  });
  var to = c((MB, cc) => {
    var uI = nc(),
      uc = yn();
    (cc.exports = function (e, t) {
      return uc[e] || (uc[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: uI ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
    });
  });
  var fc = c((DB, lc) => {
    var cI = ye(),
      lI = ji(),
      fI = cI.Object;
    lc.exports = function (e) {
      return fI(lI(e));
    };
  });
  var bt = c((kB, dc) => {
    var dI = Ye(),
      pI = fc(),
      hI = dI({}.hasOwnProperty);
    dc.exports = Object.hasOwn || function (t, r) {
      return hI(pI(t), r);
    };
  });
  var ro = c((GB, pc) => {
    var gI = Ye(),
      vI = 0,
      mI = Math.random(),
      yI = gI(1 .toString);
    pc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + yI(++vI + mI, 36);
    };
  });
  var no = c((VB, yc) => {
    var EI = ye(),
      bI = to(),
      hc = bt(),
      _I = ro(),
      gc = Yi(),
      mc = $i(),
      Ht = bI("wks"),
      Lt = EI.Symbol,
      vc = Lt && Lt.for,
      II = mc ? Lt : Lt && Lt.withoutSetter || _I;
    yc.exports = function (e) {
      if (!hc(Ht, e) || !(gc || typeof Ht[e] == "string")) {
        var t = "Symbol." + e;
        gc && hc(Lt, e) ? Ht[e] = Lt[e] : mc && vc ? Ht[e] = vc(t) : Ht[e] = II(t);
      }
      return Ht[e];
    };
  });
  var Ic = c((UB, _c) => {
    var TI = ye(),
      wI = gn(),
      Ec = Wt(),
      bc = Qi(),
      xI = Ju(),
      OI = tc(),
      AI = no(),
      SI = TI.TypeError,
      CI = AI("toPrimitive");
    _c.exports = function (e, t) {
      if (!Ec(e) || bc(e)) return e;
      var r = xI(e, CI),
        n;
      if (r) {
        if (t === void 0 && (t = "default"), n = wI(r, e, t), !Ec(n) || bc(n)) return n;
        throw SI("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), OI(e, t);
    };
  });
  var io = c((BB, Tc) => {
    var RI = Ic(),
      LI = Qi();
    Tc.exports = function (e) {
      var t = RI(e, "string");
      return LI(t) ? t : t + "";
    };
  });
  var ao = c((WB, xc) => {
    var NI = ye(),
      wc = Wt(),
      oo = NI.document,
      PI = wc(oo) && wc(oo.createElement);
    xc.exports = function (e) {
      return PI ? oo.createElement(e) : {};
    };
  });
  var so = c((HB, Oc) => {
    var qI = Rt(),
      FI = Bt(),
      MI = ao();
    Oc.exports = !qI && !FI(function () {
      return Object.defineProperty(MI("div"), "a", {
        get: function () {
          return 7;
        }
      }).a != 7;
    });
  });
  var uo = c(Sc => {
    var DI = Rt(),
      kI = gn(),
      GI = Eu(),
      VI = Bi(),
      UI = Ir(),
      BI = io(),
      WI = bt(),
      HI = so(),
      Ac = Object.getOwnPropertyDescriptor;
    Sc.f = DI ? Ac : function (t, r) {
      if (t = UI(t), r = BI(r), HI) try {
        return Ac(t, r);
      } catch {}
      if (WI(t, r)) return VI(!kI(GI.f, t, r), t[r]);
    };
  });
  var wr = c((jB, Rc) => {
    var Cc = ye(),
      XI = Wt(),
      jI = Cc.String,
      zI = Cc.TypeError;
    Rc.exports = function (e) {
      if (XI(e)) return e;
      throw zI(jI(e) + " is not an object");
    };
  });
  var xr = c(Pc => {
    var KI = ye(),
      YI = Rt(),
      $I = so(),
      Lc = wr(),
      QI = io(),
      ZI = KI.TypeError,
      Nc = Object.defineProperty;
    Pc.f = YI ? Nc : function (t, r, n) {
      if (Lc(t), r = QI(r), Lc(n), $I) try {
        return Nc(t, r, n);
      } catch {}
      if ("get" in n || "set" in n) throw ZI("Accessors not supported");
      return "value" in n && (t[r] = n.value), t;
    };
  });
  var En = c((KB, qc) => {
    var JI = Rt(),
      eT = xr(),
      tT = Bi();
    qc.exports = JI ? function (e, t, r) {
      return eT.f(e, t, tT(1, r));
    } : function (e, t, r) {
      return e[t] = r, e;
    };
  });
  var lo = c((YB, Fc) => {
    var rT = Ye(),
      nT = ot(),
      co = yn(),
      iT = rT(Function.toString);
    nT(co.inspectSource) || (co.inspectSource = function (e) {
      return iT(e);
    });
    Fc.exports = co.inspectSource;
  });
  var kc = c(($B, Dc) => {
    var oT = ye(),
      aT = ot(),
      sT = lo(),
      Mc = oT.WeakMap;
    Dc.exports = aT(Mc) && /native code/.test(sT(Mc));
  });
  var fo = c((QB, Vc) => {
    var uT = to(),
      cT = ro(),
      Gc = uT("keys");
    Vc.exports = function (e) {
      return Gc[e] || (Gc[e] = cT(e));
    };
  });
  var bn = c((ZB, Uc) => {
    Uc.exports = {};
  });
  var zc = c((JB, jc) => {
    var lT = kc(),
      Xc = ye(),
      po = Ye(),
      fT = Wt(),
      dT = En(),
      ho = bt(),
      go = yn(),
      pT = fo(),
      hT = bn(),
      Bc = "Object already initialized",
      mo = Xc.TypeError,
      gT = Xc.WeakMap,
      _n,
      Or,
      In,
      vT = function (e) {
        return In(e) ? Or(e) : _n(e, {});
      },
      mT = function (e) {
        return function (t) {
          var r;
          if (!fT(t) || (r = Or(t)).type !== e) throw mo("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    lT || go.state ? (_t = go.state || (go.state = new gT()), Wc = po(_t.get), vo = po(_t.has), Hc = po(_t.set), _n = function (e, t) {
      if (vo(_t, e)) throw new mo(Bc);
      return t.facade = e, Hc(_t, e, t), t;
    }, Or = function (e) {
      return Wc(_t, e) || {};
    }, In = function (e) {
      return vo(_t, e);
    }) : (Nt = pT("state"), hT[Nt] = !0, _n = function (e, t) {
      if (ho(e, Nt)) throw new mo(Bc);
      return t.facade = e, dT(e, Nt, t), t;
    }, Or = function (e) {
      return ho(e, Nt) ? e[Nt] : {};
    }, In = function (e) {
      return ho(e, Nt);
    });
    var _t, Wc, vo, Hc, Nt;
    jc.exports = {
      set: _n,
      get: Or,
      has: In,
      enforce: vT,
      getterFor: mT
    };
  });
  var $c = c((eW, Yc) => {
    var yo = Rt(),
      yT = bt(),
      Kc = Function.prototype,
      ET = yo && Object.getOwnPropertyDescriptor,
      Eo = yT(Kc, "name"),
      bT = Eo && function () {}.name === "something",
      _T = Eo && (!yo || yo && ET(Kc, "name").configurable);
    Yc.exports = {
      EXISTS: Eo,
      PROPER: bT,
      CONFIGURABLE: _T
    };
  });
  var tl = c((tW, el) => {
    var IT = ye(),
      Qc = ot(),
      TT = bt(),
      Zc = En(),
      wT = mn(),
      xT = lo(),
      Jc = zc(),
      OT = $c().CONFIGURABLE,
      AT = Jc.get,
      ST = Jc.enforce,
      CT = String(String).split("String");
    (el.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (Qc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!TT(r, "name") || OT && r.name !== s) && Zc(r, "name", s), u = ST(r), u.source || (u.source = CT.join(typeof s == "string" ? s : ""))), e === IT) {
        o ? e[t] = r : wT(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? e[t] = r : Zc(e, t, r);
    })(Function.prototype, "toString", function () {
      return Qc(this) && AT(this).source || xT(this);
    });
  });
  var bo = c((rW, rl) => {
    var RT = Math.ceil,
      LT = Math.floor;
    rl.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? LT : RT)(t);
    };
  });
  var il = c((nW, nl) => {
    var NT = bo(),
      PT = Math.max,
      qT = Math.min;
    nl.exports = function (e, t) {
      var r = NT(e);
      return r < 0 ? PT(r + t, 0) : qT(r, t);
    };
  });
  var al = c((iW, ol) => {
    var FT = bo(),
      MT = Math.min;
    ol.exports = function (e) {
      return e > 0 ? MT(FT(e), 9007199254740991) : 0;
    };
  });
  var ul = c((oW, sl) => {
    var DT = al();
    sl.exports = function (e) {
      return DT(e.length);
    };
  });
  var _o = c((aW, ll) => {
    var kT = Ir(),
      GT = il(),
      VT = ul(),
      cl = function (e) {
        return function (t, r, n) {
          var i = kT(t),
            o = VT(i),
            a = GT(n, o),
            s;
          if (e && r != r) {
            for (; o > a;) if (s = i[a++], s != s) return !0;
          } else for (; o > a; a++) if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    ll.exports = {
      includes: cl(!0),
      indexOf: cl(!1)
    };
  });
  var To = c((sW, dl) => {
    var UT = Ye(),
      Io = bt(),
      BT = Ir(),
      WT = _o().indexOf,
      HT = bn(),
      fl = UT([].push);
    dl.exports = function (e, t) {
      var r = BT(e),
        n = 0,
        i = [],
        o;
      for (o in r) !Io(HT, o) && Io(r, o) && fl(i, o);
      for (; t.length > n;) Io(r, o = t[n++]) && (~WT(i, o) || fl(i, o));
      return i;
    };
  });
  var Tn = c((uW, pl) => {
    pl.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
  });
  var gl = c(hl => {
    var XT = To(),
      jT = Tn(),
      zT = jT.concat("length", "prototype");
    hl.f = Object.getOwnPropertyNames || function (t) {
      return XT(t, zT);
    };
  });
  var ml = c(vl => {
    vl.f = Object.getOwnPropertySymbols;
  });
  var El = c((fW, yl) => {
    var KT = Tr(),
      YT = Ye(),
      $T = gl(),
      QT = ml(),
      ZT = wr(),
      JT = YT([].concat);
    yl.exports = KT("Reflect", "ownKeys") || function (t) {
      var r = $T.f(ZT(t)),
        n = QT.f;
      return n ? JT(r, n(t)) : r;
    };
  });
  var _l = c((dW, bl) => {
    var ew = bt(),
      tw = El(),
      rw = uo(),
      nw = xr();
    bl.exports = function (e, t) {
      for (var r = tw(t), n = nw.f, i = rw.f, o = 0; o < r.length; o++) {
        var a = r[o];
        ew(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var Tl = c((pW, Il) => {
    var iw = Bt(),
      ow = ot(),
      aw = /#|\.prototype\./,
      Ar = function (e, t) {
        var r = uw[sw(e)];
        return r == lw ? !0 : r == cw ? !1 : ow(t) ? iw(t) : !!t;
      },
      sw = Ar.normalize = function (e) {
        return String(e).replace(aw, ".").toLowerCase();
      },
      uw = Ar.data = {},
      cw = Ar.NATIVE = "N",
      lw = Ar.POLYFILL = "P";
    Il.exports = Ar;
  });
  var xl = c((hW, wl) => {
    var wo = ye(),
      fw = uo().f,
      dw = En(),
      pw = tl(),
      hw = mn(),
      gw = _l(),
      vw = Tl();
    wl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        l,
        _;
      if (n ? a = wo : i ? a = wo[r] || hw(r, {}) : a = (wo[r] || {}).prototype, a) for (s in t) {
        if (l = t[s], e.noTargetGet ? (_ = fw(a, s), u = _ && _.value) : u = a[s], o = vw(n ? s : r + (i ? "." : "#") + s, e.forced), !o && u !== void 0) {
          if (typeof l == typeof u) continue;
          gw(l, u);
        }
        (e.sham || u && u.sham) && dw(l, "sham", !0), pw(a, s, l, e);
      }
    };
  });
  var Al = c((gW, Ol) => {
    var mw = To(),
      yw = Tn();
    Ol.exports = Object.keys || function (t) {
      return mw(t, yw);
    };
  });
  var Cl = c((vW, Sl) => {
    var Ew = Rt(),
      bw = xr(),
      _w = wr(),
      Iw = Ir(),
      Tw = Al();
    Sl.exports = Ew ? Object.defineProperties : function (t, r) {
      _w(t);
      for (var n = Iw(r), i = Tw(r), o = i.length, a = 0, s; o > a;) bw.f(t, s = i[a++], n[s]);
      return t;
    };
  });
  var Ll = c((mW, Rl) => {
    var ww = Tr();
    Rl.exports = ww("document", "documentElement");
  });
  var Gl = c((yW, kl) => {
    var xw = wr(),
      Ow = Cl(),
      Nl = Tn(),
      Aw = bn(),
      Sw = Ll(),
      Cw = ao(),
      Rw = fo(),
      Pl = ">",
      ql = "<",
      Oo = "prototype",
      Ao = "script",
      Ml = Rw("IE_PROTO"),
      xo = function () {},
      Dl = function (e) {
        return ql + Ao + Pl + e + ql + "/" + Ao + Pl;
      },
      Fl = function (e) {
        e.write(Dl("")), e.close();
        var t = e.parentWindow.Object;
        return e = null, t;
      },
      Lw = function () {
        var e = Cw("iframe"),
          t = "java" + Ao + ":",
          r;
        return e.style.display = "none", Sw.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(Dl("document.F=Object")), r.close(), r.F;
      },
      wn,
      xn = function () {
        try {
          wn = new ActiveXObject("htmlfile");
        } catch {}
        xn = typeof document < "u" ? document.domain && wn ? Fl(wn) : Lw() : Fl(wn);
        for (var e = Nl.length; e--;) delete xn[Oo][Nl[e]];
        return xn();
      };
    Aw[Ml] = !0;
    kl.exports = Object.create || function (t, r) {
      var n;
      return t !== null ? (xo[Oo] = xw(t), n = new xo(), xo[Oo] = null, n[Ml] = t) : n = xn(), r === void 0 ? n : Ow(n, r);
    };
  });
  var Ul = c((EW, Vl) => {
    var Nw = no(),
      Pw = Gl(),
      qw = xr(),
      So = Nw("unscopables"),
      Co = Array.prototype;
    Co[So] == null && qw.f(Co, So, {
      configurable: !0,
      value: Pw(null)
    });
    Vl.exports = function (e) {
      Co[So][e] = !0;
    };
  });
  var Bl = c(() => {
    "use strict";

    var Fw = xl(),
      Mw = _o().includes,
      Dw = Ul();
    Fw({
      target: "Array",
      proto: !0
    }, {
      includes: function (t) {
        return Mw(this, t, arguments.length > 1 ? arguments[1] : void 0);
      }
    });
    Dw("includes");
  });
  var Hl = c((IW, Wl) => {
    var kw = ye(),
      Gw = Ye();
    Wl.exports = function (e, t) {
      return Gw(kw[e].prototype[t]);
    };
  });
  var jl = c((TW, Xl) => {
    Bl();
    var Vw = Hl();
    Xl.exports = Vw("Array", "includes");
  });
  var Kl = c((wW, zl) => {
    var Uw = jl();
    zl.exports = Uw;
  });
  var $l = c((xW, Yl) => {
    var Bw = Kl();
    Yl.exports = Bw;
  });
  var Ro = c((OW, Ql) => {
    var Ww = typeof __webpack_require__.g == "object" && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;
    Ql.exports = Ww;
  });
  var Qe = c((AW, Zl) => {
    var Hw = Ro(),
      Xw = typeof self == "object" && self && self.Object === Object && self,
      jw = Hw || Xw || Function("return this")();
    Zl.exports = jw;
  });
  var Xt = c((SW, Jl) => {
    var zw = Qe(),
      Kw = zw.Symbol;
    Jl.exports = Kw;
  });
  var nf = c((CW, rf) => {
    var ef = Xt(),
      tf = Object.prototype,
      Yw = tf.hasOwnProperty,
      $w = tf.toString,
      Sr = ef ? ef.toStringTag : void 0;
    function Qw(e) {
      var t = Yw.call(e, Sr),
        r = e[Sr];
      try {
        e[Sr] = void 0;
        var n = !0;
      } catch {}
      var i = $w.call(e);
      return n && (t ? e[Sr] = r : delete e[Sr]), i;
    }
    rf.exports = Qw;
  });
  var af = c((RW, of) => {
    var Zw = Object.prototype,
      Jw = Zw.toString;
    function e0(e) {
      return Jw.call(e);
    }
    of.exports = e0;
  });
  var It = c((LW, cf) => {
    var sf = Xt(),
      t0 = nf(),
      r0 = af(),
      n0 = "[object Null]",
      i0 = "[object Undefined]",
      uf = sf ? sf.toStringTag : void 0;
    function o0(e) {
      return e == null ? e === void 0 ? i0 : n0 : uf && uf in Object(e) ? t0(e) : r0(e);
    }
    cf.exports = o0;
  });
  var Lo = c((NW, lf) => {
    function a0(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    lf.exports = a0;
  });
  var No = c((PW, ff) => {
    var s0 = Lo(),
      u0 = s0(Object.getPrototypeOf, Object);
    ff.exports = u0;
  });
  var pt = c((qW, df) => {
    function c0(e) {
      return e != null && typeof e == "object";
    }
    df.exports = c0;
  });
  var Po = c((FW, hf) => {
    var l0 = It(),
      f0 = No(),
      d0 = pt(),
      p0 = "[object Object]",
      h0 = Function.prototype,
      g0 = Object.prototype,
      pf = h0.toString,
      v0 = g0.hasOwnProperty,
      m0 = pf.call(Object);
    function y0(e) {
      if (!d0(e) || l0(e) != p0) return !1;
      var t = f0(e);
      if (t === null) return !0;
      var r = v0.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && pf.call(r) == m0;
    }
    hf.exports = y0;
  });
  var gf = c(qo => {
    "use strict";

    Object.defineProperty(qo, "__esModule", {
      value: !0
    });
    qo.default = E0;
    function E0(e) {
      var t,
        r = e.Symbol;
      return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t;
    }
  });
  var vf = c((Mo, Fo) => {
    "use strict";

    Object.defineProperty(Mo, "__esModule", {
      value: !0
    });
    var b0 = gf(),
      _0 = I0(b0);
    function I0(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var jt;
    typeof self < "u" ? jt = self : typeof window < "u" ? jt = window : typeof __webpack_require__.g < "u" ? jt = __webpack_require__.g : typeof Fo < "u" ? jt = Fo : jt = Function("return this")();
    var T0 = (0, _0.default)(jt);
    Mo.default = T0;
  });
  var Do = c(Cr => {
    "use strict";

    Cr.__esModule = !0;
    Cr.ActionTypes = void 0;
    Cr.default = bf;
    var w0 = Po(),
      x0 = Ef(w0),
      O0 = vf(),
      mf = Ef(O0);
    function Ef(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    var yf = Cr.ActionTypes = {
      INIT: "@@redux/INIT"
    };
    function bf(e, t, r) {
      var n;
      if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
        if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
        return r(bf)(e, t);
      }
      if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function l() {
        s === a && (s = a.slice());
      }
      function _() {
        return o;
      }
      function p(I) {
        if (typeof I != "function") throw new Error("Expected listener to be a function.");
        var x = !0;
        return l(), s.push(I), function () {
          if (x) {
            x = !1, l();
            var N = s.indexOf(I);
            s.splice(N, 1);
          }
        };
      }
      function b(I) {
        if (!(0, x0.default)(I)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
        if (typeof I.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          u = !0, o = i(o, I);
        } finally {
          u = !1;
        }
        for (var x = a = s, w = 0; w < x.length; w++) x[w]();
        return I;
      }
      function v(I) {
        if (typeof I != "function") throw new Error("Expected the nextReducer to be a function.");
        i = I, b({
          type: yf.INIT
        });
      }
      function E() {
        var I,
          x = p;
        return I = {
          subscribe: function (N) {
            if (typeof N != "object") throw new TypeError("Expected the observer to be an object.");
            function C() {
              N.next && N.next(_());
            }
            C();
            var q = x(C);
            return {
              unsubscribe: q
            };
          }
        }, I[mf.default] = function () {
          return this;
        }, I;
      }
      return b({
        type: yf.INIT
      }), n = {
        dispatch: b,
        subscribe: p,
        getState: _,
        replaceReducer: v
      }, n[mf.default] = E, n;
    }
  });
  var Go = c(ko => {
    "use strict";

    ko.__esModule = !0;
    ko.default = A0;
    function A0(e) {
      typeof console < "u" && typeof console.error == "function" && console.error(e);
      try {
        throw new Error(e);
      } catch {}
    }
  });
  var Tf = c(Vo => {
    "use strict";

    Vo.__esModule = !0;
    Vo.default = N0;
    var _f = Do(),
      S0 = Po(),
      GW = If(S0),
      C0 = Go(),
      VW = If(C0);
    function If(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function R0(e, t) {
      var r = t && t.type,
        n = r && '"' + r.toString() + '"' || "an action";
      return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.';
    }
    function L0(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, {
            type: _f.ActionTypes.INIT
          });
        if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
        var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, {
          type: i
        }) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + _f.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
      });
    }
    function N0(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (false) { var a; }
      var s;
      try {
        L0(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var l = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
          _ = arguments[1];
        if (s) throw s;
        if (false) { var p; }
        for (var b = !1, v = {}, E = 0; E < o.length; E++) {
          var I = o[E],
            x = r[I],
            w = l[I],
            N = x(w, _);
          if (typeof N > "u") {
            var C = R0(I, _);
            throw new Error(C);
          }
          v[I] = N, b = b || N !== w;
        }
        return b ? v : l;
      };
    }
  });
  var xf = c(Uo => {
    "use strict";

    Uo.__esModule = !0;
    Uo.default = P0;
    function wf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function P0(e, t) {
      if (typeof e == "function") return wf(e, t);
      if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = wf(a, t));
      }
      return n;
    }
  });
  var Wo = c(Bo => {
    "use strict";

    Bo.__esModule = !0;
    Bo.default = q0;
    function q0() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      if (t.length === 0) return function (o) {
        return o;
      };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var Of = c(Ho => {
    "use strict";

    Ho.__esModule = !0;
    var F0 = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t];
        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
      }
      return e;
    };
    Ho.default = G0;
    var M0 = Wo(),
      D0 = k0(M0);
    function k0(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    function G0() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            l = [],
            _ = {
              getState: s.getState,
              dispatch: function (b) {
                return u(b);
              }
            };
          return l = t.map(function (p) {
            return p(_);
          }), u = D0.default.apply(void 0, l)(s.dispatch), F0({}, s, {
            dispatch: u
          });
        };
      };
    }
  });
  var Xo = c(He => {
    "use strict";

    He.__esModule = !0;
    He.compose = He.applyMiddleware = He.bindActionCreators = He.combineReducers = He.createStore = void 0;
    var V0 = Do(),
      U0 = zt(V0),
      B0 = Tf(),
      W0 = zt(B0),
      H0 = xf(),
      X0 = zt(H0),
      j0 = Of(),
      z0 = zt(j0),
      K0 = Wo(),
      Y0 = zt(K0),
      $0 = Go(),
      XW = zt($0);
    function zt(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }
    He.createStore = U0.default;
    He.combineReducers = W0.default;
    He.bindActionCreators = X0.default;
    He.applyMiddleware = z0.default;
    He.compose = Y0.default;
  });
  var Ze,
    jo,
    at,
    Q0,
    Z0,
    On,
    J0,
    zo = me(() => {
      "use strict";

      Ze = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL"
      }, jo = {
        ELEMENT: "ELEMENT",
        CLASS: "CLASS",
        PAGE: "PAGE"
      }, at = {
        ELEMENT: "ELEMENT",
        VIEWPORT: "VIEWPORT"
      }, Q0 = {
        X_AXIS: "X_AXIS",
        Y_AXIS: "Y_AXIS"
      }, Z0 = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
      }, On = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
      }, J0 = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
      };
    });
  var Ve,
    ex,
    An = me(() => {
      "use strict";

      Ve = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
      }, ex = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
      };
    });
  var tx,
    Af = me(() => {
      "use strict";

      tx = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION"
      };
    });
  var rx,
    nx,
    ix,
    ox,
    ax,
    sx,
    ux,
    Ko,
    Sf = me(() => {
      "use strict";

      An();
      ({
        TRANSFORM_MOVE: rx,
        TRANSFORM_SCALE: nx,
        TRANSFORM_ROTATE: ix,
        TRANSFORM_SKEW: ox,
        STYLE_SIZE: ax,
        STYLE_FILTER: sx,
        STYLE_FONT_VARIATION: ux
      } = Ve), Ko = {
        [rx]: !0,
        [nx]: !0,
        [ix]: !0,
        [ox]: !0,
        [ax]: !0,
        [sx]: !0,
        [ux]: !0
      };
    });
  var we = {};
  ke(we, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => xx,
    IX2_ANIMATION_FRAME_CHANGED: () => Ex,
    IX2_CLEAR_REQUESTED: () => vx,
    IX2_ELEMENT_STATE_CHANGED: () => wx,
    IX2_EVENT_LISTENER_ADDED: () => mx,
    IX2_EVENT_STATE_CHANGED: () => yx,
    IX2_INSTANCE_ADDED: () => _x,
    IX2_INSTANCE_REMOVED: () => Tx,
    IX2_INSTANCE_STARTED: () => Ix,
    IX2_MEDIA_QUERIES_DEFINED: () => Ax,
    IX2_PARAMETER_CHANGED: () => bx,
    IX2_PLAYBACK_REQUESTED: () => hx,
    IX2_PREVIEW_REQUESTED: () => px,
    IX2_RAW_DATA_IMPORTED: () => cx,
    IX2_SESSION_INITIALIZED: () => lx,
    IX2_SESSION_STARTED: () => fx,
    IX2_SESSION_STOPPED: () => dx,
    IX2_STOP_REQUESTED: () => gx,
    IX2_TEST_FRAME_RENDERED: () => Sx,
    IX2_VIEWPORT_WIDTH_CHANGED: () => Ox
  });
  var cx,
    lx,
    fx,
    dx,
    px,
    hx,
    gx,
    vx,
    mx,
    yx,
    Ex,
    bx,
    _x,
    Ix,
    Tx,
    wx,
    xx,
    Ox,
    Ax,
    Sx,
    Cf = me(() => {
      "use strict";

      cx = "IX2_RAW_DATA_IMPORTED", lx = "IX2_SESSION_INITIALIZED", fx = "IX2_SESSION_STARTED", dx = "IX2_SESSION_STOPPED", px = "IX2_PREVIEW_REQUESTED", hx = "IX2_PLAYBACK_REQUESTED", gx = "IX2_STOP_REQUESTED", vx = "IX2_CLEAR_REQUESTED", mx = "IX2_EVENT_LISTENER_ADDED", yx = "IX2_EVENT_STATE_CHANGED", Ex = "IX2_ANIMATION_FRAME_CHANGED", bx = "IX2_PARAMETER_CHANGED", _x = "IX2_INSTANCE_ADDED", Ix = "IX2_INSTANCE_STARTED", Tx = "IX2_INSTANCE_REMOVED", wx = "IX2_ELEMENT_STATE_CHANGED", xx = "IX2_ACTION_LIST_PLAYBACK_CHANGED", Ox = "IX2_VIEWPORT_WIDTH_CHANGED", Ax = "IX2_MEDIA_QUERIES_DEFINED", Sx = "IX2_TEST_FRAME_RENDERED";
    });
  var Le = {};
  ke(Le, {
    ABSTRACT_NODE: () => OO,
    AUTO: () => gO,
    BACKGROUND: () => cO,
    BACKGROUND_COLOR: () => uO,
    BAR_DELIMITER: () => yO,
    BORDER_COLOR: () => lO,
    BOUNDARY_SELECTOR: () => Px,
    CHILDREN: () => EO,
    COLON_DELIMITER: () => mO,
    COLOR: () => fO,
    COMMA_DELIMITER: () => vO,
    CONFIG_UNIT: () => Ux,
    CONFIG_VALUE: () => Dx,
    CONFIG_X_UNIT: () => kx,
    CONFIG_X_VALUE: () => qx,
    CONFIG_Y_UNIT: () => Gx,
    CONFIG_Y_VALUE: () => Fx,
    CONFIG_Z_UNIT: () => Vx,
    CONFIG_Z_VALUE: () => Mx,
    DISPLAY: () => dO,
    FILTER: () => iO,
    FLEX: () => pO,
    FONT_VARIATION_SETTINGS: () => oO,
    HEIGHT: () => sO,
    HTML_ELEMENT: () => wO,
    IMMEDIATE_CHILDREN: () => bO,
    IX2_ID_DELIMITER: () => Cx,
    OPACITY: () => nO,
    PARENT: () => IO,
    PLAIN_OBJECT: () => xO,
    PRESERVE_3D: () => TO,
    RENDER_GENERAL: () => SO,
    RENDER_PLUGIN: () => RO,
    RENDER_STYLE: () => CO,
    RENDER_TRANSFORM: () => AO,
    ROTATE_X: () => Qx,
    ROTATE_Y: () => Zx,
    ROTATE_Z: () => Jx,
    SCALE_3D: () => $x,
    SCALE_X: () => zx,
    SCALE_Y: () => Kx,
    SCALE_Z: () => Yx,
    SIBLINGS: () => _O,
    SKEW: () => eO,
    SKEW_X: () => tO,
    SKEW_Y: () => rO,
    TRANSFORM: () => Bx,
    TRANSLATE_3D: () => jx,
    TRANSLATE_X: () => Wx,
    TRANSLATE_Y: () => Hx,
    TRANSLATE_Z: () => Xx,
    WF_PAGE: () => Rx,
    WIDTH: () => aO,
    WILL_CHANGE: () => hO,
    W_MOD_IX: () => Nx,
    W_MOD_JS: () => Lx
  });
  var Cx,
    Rx,
    Lx,
    Nx,
    Px,
    qx,
    Fx,
    Mx,
    Dx,
    kx,
    Gx,
    Vx,
    Ux,
    Bx,
    Wx,
    Hx,
    Xx,
    jx,
    zx,
    Kx,
    Yx,
    $x,
    Qx,
    Zx,
    Jx,
    eO,
    tO,
    rO,
    nO,
    iO,
    oO,
    aO,
    sO,
    uO,
    cO,
    lO,
    fO,
    dO,
    pO,
    hO,
    gO,
    vO,
    mO,
    yO,
    EO,
    bO,
    _O,
    IO,
    TO,
    wO,
    xO,
    OO,
    AO,
    SO,
    CO,
    RO,
    Rf = me(() => {
      "use strict";

      Cx = "|", Rx = "data-wf-page", Lx = "w-mod-js", Nx = "w-mod-ix", Px = ".w-dyn-item", qx = "xValue", Fx = "yValue", Mx = "zValue", Dx = "value", kx = "xUnit", Gx = "yUnit", Vx = "zUnit", Ux = "unit", Bx = "transform", Wx = "translateX", Hx = "translateY", Xx = "translateZ", jx = "translate3d", zx = "scaleX", Kx = "scaleY", Yx = "scaleZ", $x = "scale3d", Qx = "rotateX", Zx = "rotateY", Jx = "rotateZ", eO = "skew", tO = "skewX", rO = "skewY", nO = "opacity", iO = "filter", oO = "font-variation-settings", aO = "width", sO = "height", uO = "backgroundColor", cO = "background", lO = "borderColor", fO = "color", dO = "display", pO = "flex", hO = "willChange", gO = "AUTO", vO = ",", mO = ":", yO = "|", EO = "CHILDREN", bO = "IMMEDIATE_CHILDREN", _O = "SIBLINGS", IO = "PARENT", TO = "preserve-3d", wO = "HTML_ELEMENT", xO = "PLAIN_OBJECT", OO = "ABSTRACT_NODE", AO = "RENDER_TRANSFORM", SO = "RENDER_GENERAL", CO = "RENDER_STYLE", RO = "RENDER_PLUGIN";
    });
  var Lf = {};
  ke(Lf, {
    ActionAppliesTo: () => ex,
    ActionTypeConsts: () => Ve,
    EventAppliesTo: () => jo,
    EventBasedOn: () => at,
    EventContinuousMouseAxes: () => Q0,
    EventLimitAffectedElements: () => Z0,
    EventTypeConsts: () => Ze,
    IX2EngineActionTypes: () => we,
    IX2EngineConstants: () => Le,
    InteractionTypeConsts: () => tx,
    QuickEffectDirectionConsts: () => J0,
    QuickEffectIds: () => On,
    ReducedMotionTypes: () => Ko
  });
  var Ue = me(() => {
    "use strict";

    zo();
    An();
    Af();
    Sf();
    Cf();
    Rf();
    An();
    zo();
  });
  var LO,
    Nf,
    Pf = me(() => {
      "use strict";

      Ue();
      ({
        IX2_RAW_DATA_IMPORTED: LO
      } = we), Nf = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case LO:
            return t.payload.ixData || Object.freeze({});
          default:
            return e;
        }
      };
    });
  var Kt = c(be => {
    "use strict";

    Object.defineProperty(be, "__esModule", {
      value: !0
    });
    var NO = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    be.clone = Cn;
    be.addLast = Mf;
    be.addFirst = Df;
    be.removeLast = kf;
    be.removeFirst = Gf;
    be.insert = Vf;
    be.removeAt = Uf;
    be.replaceAt = Bf;
    be.getIn = Rn;
    be.set = Ln;
    be.setIn = Nn;
    be.update = Hf;
    be.updateIn = Xf;
    be.merge = jf;
    be.mergeDeep = zf;
    be.mergeIn = Kf;
    be.omit = Yf;
    be.addDefaults = $f;
    var qf = "INVALID_ARGS";
    function Ff(e) {
      throw new Error(e);
    }
    function Yo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t;
    }
    var PO = {}.hasOwnProperty;
    function Cn(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = Yo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Be(e, t, r) {
      var n = r;
      n == null && Ff(qf);
      for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3; s < o; s++) a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var l = a[u];
        if (l != null) {
          var _ = Yo(l);
          if (_.length) for (var p = 0; p <= _.length; p++) {
            var b = _[p];
            if (!(e && n[b] !== void 0)) {
              var v = l[b];
              t && Sn(n[b]) && Sn(v) && (v = Be(e, t, n[b], v)), !(v === void 0 || v === n[b]) && (i || (i = !0, n = Cn(n)), n[b] = v);
            }
          }
        }
      }
      return n;
    }
    function Sn(e) {
      var t = typeof e > "u" ? "undefined" : NO(e);
      return e != null && (t === "object" || t === "function");
    }
    function Mf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Df(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function kf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Gf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Vf(e, t, r) {
      return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t));
    }
    function Uf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function Bf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return i[t] = r, i;
    }
    function Rn(e, t) {
      if (!Array.isArray(t) && Ff(qf), e != null) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (r = r?.[i], r === void 0) return r;
        }
        return r;
      }
    }
    function Ln(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e !== null && e !== void 0 ? e : n;
      if (i[t] === r) return i;
      var o = Cn(i);
      return o[t] = r, o;
    }
    function Wf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;else {
        var a = Sn(e) && Sn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Wf(a, t, r, n + 1);
      }
      return Ln(e, o, i);
    }
    function Nn(e, t, r) {
      return t.length ? Wf(e, t, r, 0) : r;
    }
    function Hf(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return Ln(e, t, i);
    }
    function Xf(e, t, r) {
      var n = Rn(e, t),
        i = r(n);
      return Nn(e, t, i);
    }
    function jf(e, t, r, n, i, o) {
      for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
      return s.length ? Be.call.apply(Be, [null, !1, !1, e, t, r, n, i, o].concat(s)) : Be(!1, !1, e, t, r, n, i, o);
    }
    function zf(e, t, r, n, i, o) {
      for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
      return s.length ? Be.call.apply(Be, [null, !1, !0, e, t, r, n, i, o].concat(s)) : Be(!1, !0, e, t, r, n, i, o);
    }
    function Kf(e, t, r, n, i, o, a) {
      var s = Rn(e, t);
      s == null && (s = {});
      for (var u = void 0, l = arguments.length, _ = Array(l > 7 ? l - 7 : 0), p = 7; p < l; p++) _[p - 7] = arguments[p];
      return _.length ? u = Be.call.apply(Be, [null, !1, !1, s, r, n, i, o, a].concat(_)) : u = Be(!1, !1, s, r, n, i, o, a), Nn(e, t, u);
    }
    function Yf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++) if (PO.call(e, r[i])) {
        n = !0;
        break;
      }
      if (!n) return e;
      for (var o = {}, a = Yo(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function $f(e, t, r, n, i, o) {
      for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++) s[u - 6] = arguments[u];
      return s.length ? Be.call.apply(Be, [null, !0, !1, e, t, r, n, i, o].concat(s)) : Be(!0, !1, e, t, r, n, i, o);
    }
    var qO = {
      clone: Cn,
      addLast: Mf,
      addFirst: Df,
      removeLast: kf,
      removeFirst: Gf,
      insert: Vf,
      removeAt: Uf,
      replaceAt: Bf,
      getIn: Rn,
      set: Ln,
      setIn: Nn,
      update: Hf,
      updateIn: Xf,
      merge: jf,
      mergeDeep: zf,
      mergeIn: Kf,
      omit: Yf,
      addDefaults: $f
    };
    be.default = qO;
  });
  var Zf,
    FO,
    MO,
    DO,
    kO,
    GO,
    Qf,
    Jf,
    ed = me(() => {
      "use strict";

      Ue();
      Zf = fe(Kt()), ({
        IX2_PREVIEW_REQUESTED: FO,
        IX2_PLAYBACK_REQUESTED: MO,
        IX2_STOP_REQUESTED: DO,
        IX2_CLEAR_REQUESTED: kO
      } = we), GO = {
        preview: {},
        playback: {},
        stop: {},
        clear: {}
      }, Qf = Object.create(null, {
        [FO]: {
          value: "preview"
        },
        [MO]: {
          value: "playback"
        },
        [DO]: {
          value: "stop"
        },
        [kO]: {
          value: "clear"
        }
      }), Jf = (e = GO, t) => {
        if (t.type in Qf) {
          let r = [Qf[t.type]];
          return (0, Zf.setIn)(e, [r], {
            ...t.payload
          });
        }
        return e;
      };
    });
  var qe,
    VO,
    UO,
    BO,
    WO,
    HO,
    XO,
    jO,
    zO,
    KO,
    YO,
    td,
    $O,
    rd,
    nd = me(() => {
      "use strict";

      Ue();
      qe = fe(Kt()), ({
        IX2_SESSION_INITIALIZED: VO,
        IX2_SESSION_STARTED: UO,
        IX2_TEST_FRAME_RENDERED: BO,
        IX2_SESSION_STOPPED: WO,
        IX2_EVENT_LISTENER_ADDED: HO,
        IX2_EVENT_STATE_CHANGED: XO,
        IX2_ANIMATION_FRAME_CHANGED: jO,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: zO,
        IX2_VIEWPORT_WIDTH_CHANGED: KO,
        IX2_MEDIA_QUERIES_DEFINED: YO
      } = we), td = {
        active: !1,
        tick: 0,
        eventListeners: [],
        eventState: {},
        playbackState: {},
        viewportWidth: 0,
        mediaQueryKey: null,
        hasBoundaryNodes: !1,
        hasDefinedMediaQueries: !1,
        reducedMotion: !1
      }, $O = 20, rd = (e = td, t) => {
        switch (t.type) {
          case VO:
            {
              let {
                hasBoundaryNodes: r,
                reducedMotion: n
              } = t.payload;
              return (0, qe.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n
              });
            }
          case UO:
            return (0, qe.set)(e, "active", !0);
          case BO:
            {
              let {
                payload: {
                  step: r = $O
                }
              } = t;
              return (0, qe.set)(e, "tick", e.tick + r);
            }
          case WO:
            return td;
          case jO:
            {
              let {
                payload: {
                  now: r
                }
              } = t;
              return (0, qe.set)(e, "tick", r);
            }
          case HO:
            {
              let r = (0, qe.addLast)(e.eventListeners, t.payload);
              return (0, qe.set)(e, "eventListeners", r);
            }
          case XO:
            {
              let {
                stateKey: r,
                newState: n
              } = t.payload;
              return (0, qe.setIn)(e, ["eventState", r], n);
            }
          case zO:
            {
              let {
                actionListId: r,
                isPlaying: n
              } = t.payload;
              return (0, qe.setIn)(e, ["playbackState", r], n);
            }
          case KO:
            {
              let {
                  width: r,
                  mediaQueries: n
                } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let {
                  key: s,
                  min: u,
                  max: l
                } = n[a];
                if (r >= u && r <= l) {
                  o = s;
                  break;
                }
              }
              return (0, qe.merge)(e, {
                viewportWidth: r,
                mediaQueryKey: o
              });
            }
          case YO:
            return (0, qe.set)(e, "hasDefinedMediaQueries", !0);
          default:
            return e;
        }
      };
    });
  var od = c((fH, id) => {
    function QO() {
      this.__data__ = [], this.size = 0;
    }
    id.exports = QO;
  });
  var Pn = c((dH, ad) => {
    function ZO(e, t) {
      return e === t || e !== e && t !== t;
    }
    ad.exports = ZO;
  });
  var Rr = c((pH, sd) => {
    var JO = Pn();
    function eA(e, t) {
      for (var r = e.length; r--;) if (JO(e[r][0], t)) return r;
      return -1;
    }
    sd.exports = eA;
  });
  var cd = c((hH, ud) => {
    var tA = Rr(),
      rA = Array.prototype,
      nA = rA.splice;
    function iA(e) {
      var t = this.__data__,
        r = tA(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : nA.call(t, r, 1), --this.size, !0;
    }
    ud.exports = iA;
  });
  var fd = c((gH, ld) => {
    var oA = Rr();
    function aA(e) {
      var t = this.__data__,
        r = oA(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    ld.exports = aA;
  });
  var pd = c((vH, dd) => {
    var sA = Rr();
    function uA(e) {
      return sA(this.__data__, e) > -1;
    }
    dd.exports = uA;
  });
  var gd = c((mH, hd) => {
    var cA = Rr();
    function lA(e, t) {
      var r = this.__data__,
        n = cA(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this;
    }
    hd.exports = lA;
  });
  var Lr = c((yH, vd) => {
    var fA = od(),
      dA = cd(),
      pA = fd(),
      hA = pd(),
      gA = gd();
    function Yt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Yt.prototype.clear = fA;
    Yt.prototype.delete = dA;
    Yt.prototype.get = pA;
    Yt.prototype.has = hA;
    Yt.prototype.set = gA;
    vd.exports = Yt;
  });
  var yd = c((EH, md) => {
    var vA = Lr();
    function mA() {
      this.__data__ = new vA(), this.size = 0;
    }
    md.exports = mA;
  });
  var bd = c((bH, Ed) => {
    function yA(e) {
      var t = this.__data__,
        r = t.delete(e);
      return this.size = t.size, r;
    }
    Ed.exports = yA;
  });
  var Id = c((_H, _d) => {
    function EA(e) {
      return this.__data__.get(e);
    }
    _d.exports = EA;
  });
  var wd = c((IH, Td) => {
    function bA(e) {
      return this.__data__.has(e);
    }
    Td.exports = bA;
  });
  var st = c((TH, xd) => {
    function _A(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    xd.exports = _A;
  });
  var $o = c((wH, Od) => {
    var IA = It(),
      TA = st(),
      wA = "[object AsyncFunction]",
      xA = "[object Function]",
      OA = "[object GeneratorFunction]",
      AA = "[object Proxy]";
    function SA(e) {
      if (!TA(e)) return !1;
      var t = IA(e);
      return t == xA || t == OA || t == wA || t == AA;
    }
    Od.exports = SA;
  });
  var Sd = c((xH, Ad) => {
    var CA = Qe(),
      RA = CA["__core-js_shared__"];
    Ad.exports = RA;
  });
  var Ld = c((OH, Rd) => {
    var Qo = Sd(),
      Cd = function () {
        var e = /[^.]+$/.exec(Qo && Qo.keys && Qo.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }();
    function LA(e) {
      return !!Cd && Cd in e;
    }
    Rd.exports = LA;
  });
  var Zo = c((AH, Nd) => {
    var NA = Function.prototype,
      PA = NA.toString;
    function qA(e) {
      if (e != null) {
        try {
          return PA.call(e);
        } catch {}
        try {
          return e + "";
        } catch {}
      }
      return "";
    }
    Nd.exports = qA;
  });
  var qd = c((SH, Pd) => {
    var FA = $o(),
      MA = Ld(),
      DA = st(),
      kA = Zo(),
      GA = /[\\^$.*+?()[\]{}|]/g,
      VA = /^\[object .+?Constructor\]$/,
      UA = Function.prototype,
      BA = Object.prototype,
      WA = UA.toString,
      HA = BA.hasOwnProperty,
      XA = RegExp("^" + WA.call(HA).replace(GA, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function jA(e) {
      if (!DA(e) || MA(e)) return !1;
      var t = FA(e) ? XA : VA;
      return t.test(kA(e));
    }
    Pd.exports = jA;
  });
  var Md = c((CH, Fd) => {
    function zA(e, t) {
      return e?.[t];
    }
    Fd.exports = zA;
  });
  var Tt = c((RH, Dd) => {
    var KA = qd(),
      YA = Md();
    function $A(e, t) {
      var r = YA(e, t);
      return KA(r) ? r : void 0;
    }
    Dd.exports = $A;
  });
  var qn = c((LH, kd) => {
    var QA = Tt(),
      ZA = Qe(),
      JA = QA(ZA, "Map");
    kd.exports = JA;
  });
  var Nr = c((NH, Gd) => {
    var eS = Tt(),
      tS = eS(Object, "create");
    Gd.exports = tS;
  });
  var Bd = c((PH, Ud) => {
    var Vd = Nr();
    function rS() {
      this.__data__ = Vd ? Vd(null) : {}, this.size = 0;
    }
    Ud.exports = rS;
  });
  var Hd = c((qH, Wd) => {
    function nS(e) {
      var t = this.has(e) && delete this.__data__[e];
      return this.size -= t ? 1 : 0, t;
    }
    Wd.exports = nS;
  });
  var jd = c((FH, Xd) => {
    var iS = Nr(),
      oS = "__lodash_hash_undefined__",
      aS = Object.prototype,
      sS = aS.hasOwnProperty;
    function uS(e) {
      var t = this.__data__;
      if (iS) {
        var r = t[e];
        return r === oS ? void 0 : r;
      }
      return sS.call(t, e) ? t[e] : void 0;
    }
    Xd.exports = uS;
  });
  var Kd = c((MH, zd) => {
    var cS = Nr(),
      lS = Object.prototype,
      fS = lS.hasOwnProperty;
    function dS(e) {
      var t = this.__data__;
      return cS ? t[e] !== void 0 : fS.call(t, e);
    }
    zd.exports = dS;
  });
  var $d = c((DH, Yd) => {
    var pS = Nr(),
      hS = "__lodash_hash_undefined__";
    function gS(e, t) {
      var r = this.__data__;
      return this.size += this.has(e) ? 0 : 1, r[e] = pS && t === void 0 ? hS : t, this;
    }
    Yd.exports = gS;
  });
  var Zd = c((kH, Qd) => {
    var vS = Bd(),
      mS = Hd(),
      yS = jd(),
      ES = Kd(),
      bS = $d();
    function $t(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    $t.prototype.clear = vS;
    $t.prototype.delete = mS;
    $t.prototype.get = yS;
    $t.prototype.has = ES;
    $t.prototype.set = bS;
    Qd.exports = $t;
  });
  var tp = c((GH, ep) => {
    var Jd = Zd(),
      _S = Lr(),
      IS = qn();
    function TS() {
      this.size = 0, this.__data__ = {
        hash: new Jd(),
        map: new (IS || _S)(),
        string: new Jd()
      };
    }
    ep.exports = TS;
  });
  var np = c((VH, rp) => {
    function wS(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
    }
    rp.exports = wS;
  });
  var Pr = c((UH, ip) => {
    var xS = np();
    function OS(e, t) {
      var r = e.__data__;
      return xS(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    ip.exports = OS;
  });
  var ap = c((BH, op) => {
    var AS = Pr();
    function SS(e) {
      var t = AS(this, e).delete(e);
      return this.size -= t ? 1 : 0, t;
    }
    op.exports = SS;
  });
  var up = c((WH, sp) => {
    var CS = Pr();
    function RS(e) {
      return CS(this, e).get(e);
    }
    sp.exports = RS;
  });
  var lp = c((HH, cp) => {
    var LS = Pr();
    function NS(e) {
      return LS(this, e).has(e);
    }
    cp.exports = NS;
  });
  var dp = c((XH, fp) => {
    var PS = Pr();
    function qS(e, t) {
      var r = PS(this, e),
        n = r.size;
      return r.set(e, t), this.size += r.size == n ? 0 : 1, this;
    }
    fp.exports = qS;
  });
  var Fn = c((jH, pp) => {
    var FS = tp(),
      MS = ap(),
      DS = up(),
      kS = lp(),
      GS = dp();
    function Qt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Qt.prototype.clear = FS;
    Qt.prototype.delete = MS;
    Qt.prototype.get = DS;
    Qt.prototype.has = kS;
    Qt.prototype.set = GS;
    pp.exports = Qt;
  });
  var gp = c((zH, hp) => {
    var VS = Lr(),
      US = qn(),
      BS = Fn(),
      WS = 200;
    function HS(e, t) {
      var r = this.__data__;
      if (r instanceof VS) {
        var n = r.__data__;
        if (!US || n.length < WS - 1) return n.push([e, t]), this.size = ++r.size, this;
        r = this.__data__ = new BS(n);
      }
      return r.set(e, t), this.size = r.size, this;
    }
    hp.exports = HS;
  });
  var Jo = c((KH, vp) => {
    var XS = Lr(),
      jS = yd(),
      zS = bd(),
      KS = Id(),
      YS = wd(),
      $S = gp();
    function Zt(e) {
      var t = this.__data__ = new XS(e);
      this.size = t.size;
    }
    Zt.prototype.clear = jS;
    Zt.prototype.delete = zS;
    Zt.prototype.get = KS;
    Zt.prototype.has = YS;
    Zt.prototype.set = $S;
    vp.exports = Zt;
  });
  var yp = c((YH, mp) => {
    var QS = "__lodash_hash_undefined__";
    function ZS(e) {
      return this.__data__.set(e, QS), this;
    }
    mp.exports = ZS;
  });
  var bp = c(($H, Ep) => {
    function JS(e) {
      return this.__data__.has(e);
    }
    Ep.exports = JS;
  });
  var Ip = c((QH, _p) => {
    var eC = Fn(),
      tC = yp(),
      rC = bp();
    function Mn(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new eC(); ++t < r;) this.add(e[t]);
    }
    Mn.prototype.add = Mn.prototype.push = tC;
    Mn.prototype.has = rC;
    _p.exports = Mn;
  });
  var wp = c((ZH, Tp) => {
    function nC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n;) if (t(e[r], r, e)) return !0;
      return !1;
    }
    Tp.exports = nC;
  });
  var Op = c((JH, xp) => {
    function iC(e, t) {
      return e.has(t);
    }
    xp.exports = iC;
  });
  var ea = c((e5, Ap) => {
    var oC = Ip(),
      aC = wp(),
      sC = Op(),
      uC = 1,
      cC = 2;
    function lC(e, t, r, n, i, o) {
      var a = r & uC,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var l = o.get(e),
        _ = o.get(t);
      if (l && _) return l == t && _ == e;
      var p = -1,
        b = !0,
        v = r & cC ? new oC() : void 0;
      for (o.set(e, t), o.set(t, e); ++p < s;) {
        var E = e[p],
          I = t[p];
        if (n) var x = a ? n(I, E, p, t, e, o) : n(E, I, p, e, t, o);
        if (x !== void 0) {
          if (x) continue;
          b = !1;
          break;
        }
        if (v) {
          if (!aC(t, function (w, N) {
            if (!sC(v, N) && (E === w || i(E, w, r, n, o))) return v.push(N);
          })) {
            b = !1;
            break;
          }
        } else if (!(E === I || i(E, I, r, n, o))) {
          b = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), b;
    }
    Ap.exports = lC;
  });
  var Cp = c((t5, Sp) => {
    var fC = Qe(),
      dC = fC.Uint8Array;
    Sp.exports = dC;
  });
  var Lp = c((r5, Rp) => {
    function pC(e) {
      var t = -1,
        r = Array(e.size);
      return e.forEach(function (n, i) {
        r[++t] = [i, n];
      }), r;
    }
    Rp.exports = pC;
  });
  var Pp = c((n5, Np) => {
    function hC(e) {
      var t = -1,
        r = Array(e.size);
      return e.forEach(function (n) {
        r[++t] = n;
      }), r;
    }
    Np.exports = hC;
  });
  var kp = c((i5, Dp) => {
    var qp = Xt(),
      Fp = Cp(),
      gC = Pn(),
      vC = ea(),
      mC = Lp(),
      yC = Pp(),
      EC = 1,
      bC = 2,
      _C = "[object Boolean]",
      IC = "[object Date]",
      TC = "[object Error]",
      wC = "[object Map]",
      xC = "[object Number]",
      OC = "[object RegExp]",
      AC = "[object Set]",
      SC = "[object String]",
      CC = "[object Symbol]",
      RC = "[object ArrayBuffer]",
      LC = "[object DataView]",
      Mp = qp ? qp.prototype : void 0,
      ta = Mp ? Mp.valueOf : void 0;
    function NC(e, t, r, n, i, o, a) {
      switch (r) {
        case LC:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
          e = e.buffer, t = t.buffer;
        case RC:
          return !(e.byteLength != t.byteLength || !o(new Fp(e), new Fp(t)));
        case _C:
        case IC:
        case xC:
          return gC(+e, +t);
        case TC:
          return e.name == t.name && e.message == t.message;
        case OC:
        case SC:
          return e == t + "";
        case wC:
          var s = mC;
        case AC:
          var u = n & EC;
          if (s || (s = yC), e.size != t.size && !u) return !1;
          var l = a.get(e);
          if (l) return l == t;
          n |= bC, a.set(e, t);
          var _ = vC(s(e), s(t), n, i, o, a);
          return a.delete(e), _;
        case CC:
          if (ta) return ta.call(e) == ta.call(t);
      }
      return !1;
    }
    Dp.exports = NC;
  });
  var Dn = c((o5, Gp) => {
    function PC(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
      return e;
    }
    Gp.exports = PC;
  });
  var xe = c((a5, Vp) => {
    var qC = Array.isArray;
    Vp.exports = qC;
  });
  var ra = c((s5, Up) => {
    var FC = Dn(),
      MC = xe();
    function DC(e, t, r) {
      var n = t(e);
      return MC(e) ? n : FC(n, r(e));
    }
    Up.exports = DC;
  });
  var Wp = c((u5, Bp) => {
    function kC(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    Bp.exports = kC;
  });
  var na = c((c5, Hp) => {
    function GC() {
      return [];
    }
    Hp.exports = GC;
  });
  var ia = c((l5, jp) => {
    var VC = Wp(),
      UC = na(),
      BC = Object.prototype,
      WC = BC.propertyIsEnumerable,
      Xp = Object.getOwnPropertySymbols,
      HC = Xp ? function (e) {
        return e == null ? [] : (e = Object(e), VC(Xp(e), function (t) {
          return WC.call(e, t);
        }));
      } : UC;
    jp.exports = HC;
  });
  var Kp = c((f5, zp) => {
    function XC(e, t) {
      for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
      return n;
    }
    zp.exports = XC;
  });
  var $p = c((d5, Yp) => {
    var jC = It(),
      zC = pt(),
      KC = "[object Arguments]";
    function YC(e) {
      return zC(e) && jC(e) == KC;
    }
    Yp.exports = YC;
  });
  var qr = c((p5, Jp) => {
    var Qp = $p(),
      $C = pt(),
      Zp = Object.prototype,
      QC = Zp.hasOwnProperty,
      ZC = Zp.propertyIsEnumerable,
      JC = Qp(function () {
        return arguments;
      }()) ? Qp : function (e) {
        return $C(e) && QC.call(e, "callee") && !ZC.call(e, "callee");
      };
    Jp.exports = JC;
  });
  var th = c((h5, eh) => {
    function eR() {
      return !1;
    }
    eh.exports = eR;
  });
  var kn = c((Fr, Jt) => {
    var tR = Qe(),
      rR = th(),
      ih = typeof Fr == "object" && Fr && !Fr.nodeType && Fr,
      rh = ih && typeof Jt == "object" && Jt && !Jt.nodeType && Jt,
      nR = rh && rh.exports === ih,
      nh = nR ? tR.Buffer : void 0,
      iR = nh ? nh.isBuffer : void 0,
      oR = iR || rR;
    Jt.exports = oR;
  });
  var Gn = c((g5, oh) => {
    var aR = 9007199254740991,
      sR = /^(?:0|[1-9]\d*)$/;
    function uR(e, t) {
      var _t2;
      var r = typeof e;
      return t = (_t2 = t) !== null && _t2 !== void 0 ? _t2 : aR, !!t && (r == "number" || r != "symbol" && sR.test(e)) && e > -1 && e % 1 == 0 && e < t;
    }
    oh.exports = uR;
  });
  var Vn = c((v5, ah) => {
    var cR = 9007199254740991;
    function lR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= cR;
    }
    ah.exports = lR;
  });
  var uh = c((m5, sh) => {
    var fR = It(),
      dR = Vn(),
      pR = pt(),
      hR = "[object Arguments]",
      gR = "[object Array]",
      vR = "[object Boolean]",
      mR = "[object Date]",
      yR = "[object Error]",
      ER = "[object Function]",
      bR = "[object Map]",
      _R = "[object Number]",
      IR = "[object Object]",
      TR = "[object RegExp]",
      wR = "[object Set]",
      xR = "[object String]",
      OR = "[object WeakMap]",
      AR = "[object ArrayBuffer]",
      SR = "[object DataView]",
      CR = "[object Float32Array]",
      RR = "[object Float64Array]",
      LR = "[object Int8Array]",
      NR = "[object Int16Array]",
      PR = "[object Int32Array]",
      qR = "[object Uint8Array]",
      FR = "[object Uint8ClampedArray]",
      MR = "[object Uint16Array]",
      DR = "[object Uint32Array]",
      ve = {};
    ve[CR] = ve[RR] = ve[LR] = ve[NR] = ve[PR] = ve[qR] = ve[FR] = ve[MR] = ve[DR] = !0;
    ve[hR] = ve[gR] = ve[AR] = ve[vR] = ve[SR] = ve[mR] = ve[yR] = ve[ER] = ve[bR] = ve[_R] = ve[IR] = ve[TR] = ve[wR] = ve[xR] = ve[OR] = !1;
    function kR(e) {
      return pR(e) && dR(e.length) && !!ve[fR(e)];
    }
    sh.exports = kR;
  });
  var lh = c((y5, ch) => {
    function GR(e) {
      return function (t) {
        return e(t);
      };
    }
    ch.exports = GR;
  });
  var dh = c((Mr, er) => {
    var VR = Ro(),
      fh = typeof Mr == "object" && Mr && !Mr.nodeType && Mr,
      Dr = fh && typeof er == "object" && er && !er.nodeType && er,
      UR = Dr && Dr.exports === fh,
      oa = UR && VR.process,
      BR = function () {
        try {
          var e = Dr && Dr.require && Dr.require("util").types;
          return e || oa && oa.binding && oa.binding("util");
        } catch {}
      }();
    er.exports = BR;
  });
  var Un = c((E5, gh) => {
    var WR = uh(),
      HR = lh(),
      ph = dh(),
      hh = ph && ph.isTypedArray,
      XR = hh ? HR(hh) : WR;
    gh.exports = XR;
  });
  var aa = c((b5, vh) => {
    var jR = Kp(),
      zR = qr(),
      KR = xe(),
      YR = kn(),
      $R = Gn(),
      QR = Un(),
      ZR = Object.prototype,
      JR = ZR.hasOwnProperty;
    function eL(e, t) {
      var r = KR(e),
        n = !r && zR(e),
        i = !r && !n && YR(e),
        o = !r && !n && !i && QR(e),
        a = r || n || i || o,
        s = a ? jR(e.length, String) : [],
        u = s.length;
      for (var l in e) (t || JR.call(e, l)) && !(a && (l == "length" || i && (l == "offset" || l == "parent") || o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || $R(l, u))) && s.push(l);
      return s;
    }
    vh.exports = eL;
  });
  var Bn = c((_5, mh) => {
    var tL = Object.prototype;
    function rL(e) {
      var t = e && e.constructor,
        r = typeof t == "function" && t.prototype || tL;
      return e === r;
    }
    mh.exports = rL;
  });
  var Eh = c((I5, yh) => {
    var nL = Lo(),
      iL = nL(Object.keys, Object);
    yh.exports = iL;
  });
  var Wn = c((T5, bh) => {
    var oL = Bn(),
      aL = Eh(),
      sL = Object.prototype,
      uL = sL.hasOwnProperty;
    function cL(e) {
      if (!oL(e)) return aL(e);
      var t = [];
      for (var r in Object(e)) uL.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    bh.exports = cL;
  });
  var Pt = c((w5, _h) => {
    var lL = $o(),
      fL = Vn();
    function dL(e) {
      return e != null && fL(e.length) && !lL(e);
    }
    _h.exports = dL;
  });
  var kr = c((x5, Ih) => {
    var pL = aa(),
      hL = Wn(),
      gL = Pt();
    function vL(e) {
      return gL(e) ? pL(e) : hL(e);
    }
    Ih.exports = vL;
  });
  var wh = c((O5, Th) => {
    var mL = ra(),
      yL = ia(),
      EL = kr();
    function bL(e) {
      return mL(e, EL, yL);
    }
    Th.exports = bL;
  });
  var Ah = c((A5, Oh) => {
    var xh = wh(),
      _L = 1,
      IL = Object.prototype,
      TL = IL.hasOwnProperty;
    function wL(e, t, r, n, i, o) {
      var a = r & _L,
        s = xh(e),
        u = s.length,
        l = xh(t),
        _ = l.length;
      if (u != _ && !a) return !1;
      for (var p = u; p--;) {
        var b = s[p];
        if (!(a ? b in t : TL.call(t, b))) return !1;
      }
      var v = o.get(e),
        E = o.get(t);
      if (v && E) return v == t && E == e;
      var I = !0;
      o.set(e, t), o.set(t, e);
      for (var x = a; ++p < u;) {
        b = s[p];
        var w = e[b],
          N = t[b];
        if (n) var C = a ? n(N, w, b, t, e, o) : n(w, N, b, e, t, o);
        if (!(C === void 0 ? w === N || i(w, N, r, n, o) : C)) {
          I = !1;
          break;
        }
        x || (x = b == "constructor");
      }
      if (I && !x) {
        var q = e.constructor,
          F = t.constructor;
        q != F && "constructor" in e && "constructor" in t && !(typeof q == "function" && q instanceof q && typeof F == "function" && F instanceof F) && (I = !1);
      }
      return o.delete(e), o.delete(t), I;
    }
    Oh.exports = wL;
  });
  var Ch = c((S5, Sh) => {
    var xL = Tt(),
      OL = Qe(),
      AL = xL(OL, "DataView");
    Sh.exports = AL;
  });
  var Lh = c((C5, Rh) => {
    var SL = Tt(),
      CL = Qe(),
      RL = SL(CL, "Promise");
    Rh.exports = RL;
  });
  var Ph = c((R5, Nh) => {
    var LL = Tt(),
      NL = Qe(),
      PL = LL(NL, "Set");
    Nh.exports = PL;
  });
  var sa = c((L5, qh) => {
    var qL = Tt(),
      FL = Qe(),
      ML = qL(FL, "WeakMap");
    qh.exports = ML;
  });
  var Hn = c((N5, Uh) => {
    var ua = Ch(),
      ca = qn(),
      la = Lh(),
      fa = Ph(),
      da = sa(),
      Vh = It(),
      tr = Zo(),
      Fh = "[object Map]",
      DL = "[object Object]",
      Mh = "[object Promise]",
      Dh = "[object Set]",
      kh = "[object WeakMap]",
      Gh = "[object DataView]",
      kL = tr(ua),
      GL = tr(ca),
      VL = tr(la),
      UL = tr(fa),
      BL = tr(da),
      qt = Vh;
    (ua && qt(new ua(new ArrayBuffer(1))) != Gh || ca && qt(new ca()) != Fh || la && qt(la.resolve()) != Mh || fa && qt(new fa()) != Dh || da && qt(new da()) != kh) && (qt = function (e) {
      var t = Vh(e),
        r = t == DL ? e.constructor : void 0,
        n = r ? tr(r) : "";
      if (n) switch (n) {
        case kL:
          return Gh;
        case GL:
          return Fh;
        case VL:
          return Mh;
        case UL:
          return Dh;
        case BL:
          return kh;
      }
      return t;
    });
    Uh.exports = qt;
  });
  var Yh = c((P5, Kh) => {
    var pa = Jo(),
      WL = ea(),
      HL = kp(),
      XL = Ah(),
      Bh = Hn(),
      Wh = xe(),
      Hh = kn(),
      jL = Un(),
      zL = 1,
      Xh = "[object Arguments]",
      jh = "[object Array]",
      Xn = "[object Object]",
      KL = Object.prototype,
      zh = KL.hasOwnProperty;
    function YL(e, t, r, n, i, o) {
      var a = Wh(e),
        s = Wh(t),
        u = a ? jh : Bh(e),
        l = s ? jh : Bh(t);
      u = u == Xh ? Xn : u, l = l == Xh ? Xn : l;
      var _ = u == Xn,
        p = l == Xn,
        b = u == l;
      if (b && Hh(e)) {
        if (!Hh(t)) return !1;
        a = !0, _ = !1;
      }
      if (b && !_) return o || (o = new pa()), a || jL(e) ? WL(e, t, r, n, i, o) : HL(e, t, u, r, n, i, o);
      if (!(r & zL)) {
        var v = _ && zh.call(e, "__wrapped__"),
          E = p && zh.call(t, "__wrapped__");
        if (v || E) {
          var I = v ? e.value() : e,
            x = E ? t.value() : t;
          return o || (o = new pa()), i(I, x, r, n, o);
        }
      }
      return b ? (o || (o = new pa()), XL(e, t, r, n, i, o)) : !1;
    }
    Kh.exports = YL;
  });
  var ha = c((q5, Zh) => {
    var $L = Yh(),
      $h = pt();
    function Qh(e, t, r, n, i) {
      return e === t ? !0 : e == null || t == null || !$h(e) && !$h(t) ? e !== e && t !== t : $L(e, t, r, n, Qh, i);
    }
    Zh.exports = Qh;
  });
  var eg = c((F5, Jh) => {
    var QL = Jo(),
      ZL = ha(),
      JL = 1,
      eN = 2;
    function tN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--;) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o;) {
        s = r[i];
        var u = s[0],
          l = e[u],
          _ = s[1];
        if (a && s[2]) {
          if (l === void 0 && !(u in e)) return !1;
        } else {
          var p = new QL();
          if (n) var b = n(l, _, u, e, t, p);
          if (!(b === void 0 ? ZL(_, l, JL | eN, n, p) : b)) return !1;
        }
      }
      return !0;
    }
    Jh.exports = tN;
  });
  var ga = c((M5, tg) => {
    var rN = st();
    function nN(e) {
      return e === e && !rN(e);
    }
    tg.exports = nN;
  });
  var ng = c((D5, rg) => {
    var iN = ga(),
      oN = kr();
    function aN(e) {
      for (var t = oN(e), r = t.length; r--;) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, iN(i)];
      }
      return t;
    }
    rg.exports = aN;
  });
  var va = c((k5, ig) => {
    function sN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    ig.exports = sN;
  });
  var ag = c((G5, og) => {
    var uN = eg(),
      cN = ng(),
      lN = va();
    function fN(e) {
      var t = cN(e);
      return t.length == 1 && t[0][2] ? lN(t[0][0], t[0][1]) : function (r) {
        return r === e || uN(r, e, t);
      };
    }
    og.exports = fN;
  });
  var Gr = c((V5, sg) => {
    var dN = It(),
      pN = pt(),
      hN = "[object Symbol]";
    function gN(e) {
      return typeof e == "symbol" || pN(e) && dN(e) == hN;
    }
    sg.exports = gN;
  });
  var jn = c((U5, ug) => {
    var vN = xe(),
      mN = Gr(),
      yN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      EN = /^\w*$/;
    function bN(e, t) {
      if (vN(e)) return !1;
      var r = typeof e;
      return r == "number" || r == "symbol" || r == "boolean" || e == null || mN(e) ? !0 : EN.test(e) || !yN.test(e) || t != null && e in Object(t);
    }
    ug.exports = bN;
  });
  var fg = c((B5, lg) => {
    var cg = Fn(),
      _N = "Expected a function";
    function ma(e, t) {
      if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(_N);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return r.cache = o.set(i, a) || o, a;
      };
      return r.cache = new (ma.Cache || cg)(), r;
    }
    ma.Cache = cg;
    lg.exports = ma;
  });
  var pg = c((W5, dg) => {
    var IN = fg(),
      TN = 500;
    function wN(e) {
      var t = IN(e, function (n) {
          return r.size === TN && r.clear(), n;
        }),
        r = t.cache;
      return t;
    }
    dg.exports = wN;
  });
  var gg = c((H5, hg) => {
    var xN = pg(),
      ON = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      AN = /\\(\\)?/g,
      SN = xN(function (e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(ON, function (r, n, i, o) {
          t.push(i ? o.replace(AN, "$1") : n || r);
        }), t;
      });
    hg.exports = SN;
  });
  var ya = c((X5, vg) => {
    function CN(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
      return i;
    }
    vg.exports = CN;
  });
  var Ig = c((j5, _g) => {
    var mg = Xt(),
      RN = ya(),
      LN = xe(),
      NN = Gr(),
      PN = 1 / 0,
      yg = mg ? mg.prototype : void 0,
      Eg = yg ? yg.toString : void 0;
    function bg(e) {
      if (typeof e == "string") return e;
      if (LN(e)) return RN(e, bg) + "";
      if (NN(e)) return Eg ? Eg.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -PN ? "-0" : t;
    }
    _g.exports = bg;
  });
  var wg = c((z5, Tg) => {
    var qN = Ig();
    function FN(e) {
      return e == null ? "" : qN(e);
    }
    Tg.exports = FN;
  });
  var Vr = c((K5, xg) => {
    var MN = xe(),
      DN = jn(),
      kN = gg(),
      GN = wg();
    function VN(e, t) {
      return MN(e) ? e : DN(e, t) ? [e] : kN(GN(e));
    }
    xg.exports = VN;
  });
  var rr = c((Y5, Og) => {
    var UN = Gr(),
      BN = 1 / 0;
    function WN(e) {
      if (typeof e == "string" || UN(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -BN ? "-0" : t;
    }
    Og.exports = WN;
  });
  var zn = c(($5, Ag) => {
    var HN = Vr(),
      XN = rr();
    function jN(e, t) {
      t = HN(t, e);
      for (var r = 0, n = t.length; e != null && r < n;) e = e[XN(t[r++])];
      return r && r == n ? e : void 0;
    }
    Ag.exports = jN;
  });
  var Kn = c((Q5, Sg) => {
    var zN = zn();
    function KN(e, t, r) {
      var n = e == null ? void 0 : zN(e, t);
      return n === void 0 ? r : n;
    }
    Sg.exports = KN;
  });
  var Rg = c((Z5, Cg) => {
    function YN(e, t) {
      return e != null && t in Object(e);
    }
    Cg.exports = YN;
  });
  var Ng = c((J5, Lg) => {
    var $N = Vr(),
      QN = qr(),
      ZN = xe(),
      JN = Gn(),
      eP = Vn(),
      tP = rr();
    function rP(e, t, r) {
      t = $N(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i;) {
        var a = tP(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && eP(i) && JN(a, i) && (ZN(e) || QN(e)));
    }
    Lg.exports = rP;
  });
  var qg = c((eX, Pg) => {
    var nP = Rg(),
      iP = Ng();
    function oP(e, t) {
      return e != null && iP(e, t, nP);
    }
    Pg.exports = oP;
  });
  var Mg = c((tX, Fg) => {
    var aP = ha(),
      sP = Kn(),
      uP = qg(),
      cP = jn(),
      lP = ga(),
      fP = va(),
      dP = rr(),
      pP = 1,
      hP = 2;
    function gP(e, t) {
      return cP(e) && lP(t) ? fP(dP(e), t) : function (r) {
        var n = sP(r, e);
        return n === void 0 && n === t ? uP(r, e) : aP(t, n, pP | hP);
      };
    }
    Fg.exports = gP;
  });
  var Yn = c((rX, Dg) => {
    function vP(e) {
      return e;
    }
    Dg.exports = vP;
  });
  var Ea = c((nX, kg) => {
    function mP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    kg.exports = mP;
  });
  var Vg = c((iX, Gg) => {
    var yP = zn();
    function EP(e) {
      return function (t) {
        return yP(t, e);
      };
    }
    Gg.exports = EP;
  });
  var Bg = c((oX, Ug) => {
    var bP = Ea(),
      _P = Vg(),
      IP = jn(),
      TP = rr();
    function wP(e) {
      return IP(e) ? bP(TP(e)) : _P(e);
    }
    Ug.exports = wP;
  });
  var wt = c((aX, Wg) => {
    var xP = ag(),
      OP = Mg(),
      AP = Yn(),
      SP = xe(),
      CP = Bg();
    function RP(e) {
      return typeof e == "function" ? e : e == null ? AP : typeof e == "object" ? SP(e) ? OP(e[0], e[1]) : xP(e) : CP(e);
    }
    Wg.exports = RP;
  });
  var ba = c((sX, Hg) => {
    var LP = wt(),
      NP = Pt(),
      PP = kr();
    function qP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!NP(t)) {
          var o = LP(r, 3);
          t = PP(t), r = function (s) {
            return o(i[s], s, i);
          };
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Hg.exports = qP;
  });
  var _a = c((uX, Xg) => {
    function FP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;) if (t(e[o], o, e)) return o;
      return -1;
    }
    Xg.exports = FP;
  });
  var zg = c((cX, jg) => {
    var MP = /\s/;
    function DP(e) {
      for (var t = e.length; t-- && MP.test(e.charAt(t)););
      return t;
    }
    jg.exports = DP;
  });
  var Yg = c((lX, Kg) => {
    var kP = zg(),
      GP = /^\s+/;
    function VP(e) {
      return e && e.slice(0, kP(e) + 1).replace(GP, "");
    }
    Kg.exports = VP;
  });
  var $n = c((fX, Zg) => {
    var UP = Yg(),
      $g = st(),
      BP = Gr(),
      Qg = 0 / 0,
      WP = /^[-+]0x[0-9a-f]+$/i,
      HP = /^0b[01]+$/i,
      XP = /^0o[0-7]+$/i,
      jP = parseInt;
    function zP(e) {
      if (typeof e == "number") return e;
      if (BP(e)) return Qg;
      if ($g(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = $g(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = UP(e);
      var r = HP.test(e);
      return r || XP.test(e) ? jP(e.slice(2), r ? 2 : 8) : WP.test(e) ? Qg : +e;
    }
    Zg.exports = zP;
  });
  var tv = c((dX, ev) => {
    var KP = $n(),
      Jg = 1 / 0,
      YP = 17976931348623157e292;
    function $P(e) {
      if (!e) return e === 0 ? e : 0;
      if (e = KP(e), e === Jg || e === -Jg) {
        var t = e < 0 ? -1 : 1;
        return t * YP;
      }
      return e === e ? e : 0;
    }
    ev.exports = $P;
  });
  var Ia = c((pX, rv) => {
    var QP = tv();
    function ZP(e) {
      var t = QP(e),
        r = t % 1;
      return t === t ? r ? t - r : t : 0;
    }
    rv.exports = ZP;
  });
  var iv = c((hX, nv) => {
    var JP = _a(),
      eq = wt(),
      tq = Ia(),
      rq = Math.max;
    function nq(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : tq(r);
      return i < 0 && (i = rq(n + i, 0)), JP(e, eq(t, 3), i);
    }
    nv.exports = nq;
  });
  var Ta = c((gX, ov) => {
    var iq = ba(),
      oq = iv(),
      aq = iq(oq);
    ov.exports = aq;
  });
  var uv = {};
  ke(uv, {
    ELEMENT_MATCHES: () => sq,
    FLEX_PREFIXED: () => wa,
    IS_BROWSER_ENV: () => Je,
    TRANSFORM_PREFIXED: () => xt,
    TRANSFORM_STYLE_PREFIXED: () => Zn,
    withBrowser: () => Qn
  });
  var sv,
    Je,
    Qn,
    sq,
    wa,
    xt,
    av,
    Zn,
    Jn = me(() => {
      "use strict";

      sv = fe(Ta()), Je = typeof window < "u", Qn = (e, t) => Je ? e() : t, sq = Qn(() => (0, sv.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)), wa = Qn(() => {
        let e = document.createElement("i"),
          t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
          r = "";
        try {
          let {
            length: n
          } = t;
          for (let i = 0; i < n; i++) {
            let o = t[i];
            if (e.style.display = o, e.style.display === o) return o;
          }
          return r;
        } catch {
          return r;
        }
      }, "flex"), xt = Qn(() => {
        let e = document.createElement("i");
        if (e.style.transform == null) {
          let t = ["Webkit", "Moz", "ms"],
            r = "Transform",
            {
              length: n
            } = t;
          for (let i = 0; i < n; i++) {
            let o = t[i] + r;
            if (e.style[o] !== void 0) return o;
          }
        }
        return "transform";
      }, "transform"), av = xt.split("transform")[0], Zn = av ? av + "TransformStyle" : "transformStyle";
    });
  var xa = c((vX, pv) => {
    var uq = 4,
      cq = .001,
      lq = 1e-7,
      fq = 10,
      Ur = 11,
      ei = 1 / (Ur - 1),
      dq = typeof Float32Array == "function";
    function cv(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function lv(e, t) {
      return 3 * t - 6 * e;
    }
    function fv(e) {
      return 3 * e;
    }
    function ti(e, t, r) {
      return ((cv(t, r) * e + lv(t, r)) * e + fv(t)) * e;
    }
    function dv(e, t, r) {
      return 3 * cv(t, r) * e * e + 2 * lv(t, r) * e + fv(t);
    }
    function pq(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do a = t + (r - t) / 2, o = ti(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > lq && ++s < fq);
      return a;
    }
    function hq(e, t, r, n) {
      for (var i = 0; i < uq; ++i) {
        var o = dv(t, r, n);
        if (o === 0) return t;
        var a = ti(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    pv.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
      var o = dq ? new Float32Array(Ur) : new Array(Ur);
      if (t !== r || n !== i) for (var a = 0; a < Ur; ++a) o[a] = ti(a * ei, t, n);
      function s(u) {
        for (var l = 0, _ = 1, p = Ur - 1; _ !== p && o[_] <= u; ++_) l += ei;
        --_;
        var b = (u - o[_]) / (o[_ + 1] - o[_]),
          v = l + b * ei,
          E = dv(v, t, n);
        return E >= cq ? hq(u, v, t, n) : E === 0 ? v : pq(u, l, l + ei, t, n);
      }
      return function (l) {
        return t === r && n === i ? l : l === 0 ? 0 : l === 1 ? 1 : ti(s(l), r, i);
      };
    };
  });
  var Wr = {};
  ke(Wr, {
    bounce: () => $q,
    bouncePast: () => Qq,
    ease: () => gq,
    easeIn: () => vq,
    easeInOut: () => yq,
    easeOut: () => mq,
    inBack: () => Uq,
    inCirc: () => Dq,
    inCubic: () => Iq,
    inElastic: () => Hq,
    inExpo: () => qq,
    inOutBack: () => Wq,
    inOutCirc: () => Gq,
    inOutCubic: () => wq,
    inOutElastic: () => jq,
    inOutExpo: () => Mq,
    inOutQuad: () => _q,
    inOutQuart: () => Aq,
    inOutQuint: () => Rq,
    inOutSine: () => Pq,
    inQuad: () => Eq,
    inQuart: () => xq,
    inQuint: () => Sq,
    inSine: () => Lq,
    outBack: () => Bq,
    outBounce: () => Vq,
    outCirc: () => kq,
    outCubic: () => Tq,
    outElastic: () => Xq,
    outExpo: () => Fq,
    outQuad: () => bq,
    outQuart: () => Oq,
    outQuint: () => Cq,
    outSine: () => Nq,
    swingFrom: () => Kq,
    swingFromTo: () => zq,
    swingTo: () => Yq
  });
  function Eq(e) {
    return Math.pow(e, 2);
  }
  function bq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function _q(e) {
    return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2);
  }
  function Iq(e) {
    return Math.pow(e, 3);
  }
  function Tq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function wq(e) {
    return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2);
  }
  function xq(e) {
    return Math.pow(e, 4);
  }
  function Oq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function Aq(e) {
    return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function Sq(e) {
    return Math.pow(e, 5);
  }
  function Cq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function Rq(e) {
    return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2);
  }
  function Lq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function Nq(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function Pq(e) {
    return -.5 * (Math.cos(Math.PI * e) - 1);
  }
  function qq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Fq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function Mq(e) {
    return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function Dq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function kq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function Gq(e) {
    return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function Vq(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375;
  }
  function Uq(e) {
    let t = ht;
    return e * e * ((t + 1) * e - t);
  }
  function Bq(e) {
    let t = ht;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Wq(e) {
    let t = ht;
    return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Hq(e) {
    let t = ht,
      r = 0,
      n = 1;
    return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)));
  }
  function Xq(e) {
    let t = ht,
      r = 0,
      n = 1;
    return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1);
  }
  function jq(e) {
    let t = ht,
      r = 0,
      n = 1;
    return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1);
  }
  function zq(e) {
    let t = ht;
    return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Kq(e) {
    let t = ht;
    return e * e * ((t + 1) * e - t);
  }
  function Yq(e) {
    let t = ht;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function $q(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375;
  }
  function Qq(e) {
    return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375);
  }
  var Br,
    ht,
    gq,
    vq,
    mq,
    yq,
    Oa = me(() => {
      "use strict";

      Br = fe(xa()), ht = 1.70158, gq = (0, Br.default)(.25, .1, .25, 1), vq = (0, Br.default)(.42, 0, 1, 1), mq = (0, Br.default)(0, 0, .58, 1), yq = (0, Br.default)(.42, 0, .58, 1);
    });
  var gv = {};
  ke(gv, {
    applyEasing: () => Jq,
    createBezierEasing: () => Zq,
    optimizeFloat: () => Hr
  });
  function Hr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function Zq(e) {
    return (0, hv.default)(...e);
  }
  function Jq(e, t, r) {
    return t === 0 ? 0 : t === 1 ? 1 : Hr(r ? t > 0 ? r(t) : t : t > 0 && e && Wr[e] ? Wr[e](t) : t);
  }
  var hv,
    Aa = me(() => {
      "use strict";

      Oa();
      hv = fe(xa());
    });
  var yv = {};
  ke(yv, {
    createElementState: () => mv,
    ixElements: () => pF,
    mergeActionState: () => Sa
  });
  function mv(e, t, r, n, i) {
    let o = r === eF ? (0, nr.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, nr.mergeIn)(e, [n], {
      id: n,
      ref: t,
      refId: o,
      refType: r
    });
  }
  function Sa(e, t, r, n, i) {
    let o = gF(i);
    return (0, nr.mergeIn)(e, [t, dF, r], n, o);
  }
  function gF(e) {
    let {
      config: t
    } = e;
    return hF.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var nr,
    yX,
    eF,
    EX,
    tF,
    rF,
    nF,
    iF,
    oF,
    aF,
    sF,
    uF,
    cF,
    lF,
    fF,
    vv,
    dF,
    pF,
    hF,
    Ev = me(() => {
      "use strict";

      nr = fe(Kt());
      Ue();
      ({
        HTML_ELEMENT: yX,
        PLAIN_OBJECT: eF,
        ABSTRACT_NODE: EX,
        CONFIG_X_VALUE: tF,
        CONFIG_Y_VALUE: rF,
        CONFIG_Z_VALUE: nF,
        CONFIG_VALUE: iF,
        CONFIG_X_UNIT: oF,
        CONFIG_Y_UNIT: aF,
        CONFIG_Z_UNIT: sF,
        CONFIG_UNIT: uF
      } = Le), ({
        IX2_SESSION_STOPPED: cF,
        IX2_INSTANCE_ADDED: lF,
        IX2_ELEMENT_STATE_CHANGED: fF
      } = we), vv = {}, dF = "refState", pF = (e = vv, t = {}) => {
        switch (t.type) {
          case cF:
            return vv;
          case lF:
            {
              let {
                  elementId: r,
                  element: n,
                  origin: i,
                  actionItem: o,
                  refType: a
                } = t.payload,
                {
                  actionTypeId: s
                } = o,
                u = e;
              return (0, nr.getIn)(u, [r, n]) !== n && (u = mv(u, n, a, r, o)), Sa(u, r, s, i, o);
            }
          case fF:
            {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o
              } = t.payload;
              return Sa(e, r, n, i, o);
            }
          default:
            return e;
        }
      };
      hF = [[tF, oF], [rF, aF], [nF, sF], [iF, uF]];
    });
  var bv = c(Oe => {
    "use strict";

    Object.defineProperty(Oe, "__esModule", {
      value: !0
    });
    Oe.renderPlugin = Oe.getPluginOrigin = Oe.getPluginDuration = Oe.getPluginDestination = Oe.getPluginConfig = Oe.createPluginInstance = Oe.clearPlugin = void 0;
    var vF = e => e.value;
    Oe.getPluginConfig = vF;
    var mF = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Oe.getPluginDuration = mF;
    var yF = e => e || {
      value: 0
    };
    Oe.getPluginOrigin = yF;
    var EF = e => ({
      value: e.value
    });
    Oe.getPluginDestination = EF;
    var bF = e => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Oe.createPluginInstance = bF;
    var _F = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Oe.renderPlugin = _F;
    var IF = e => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Oe.clearPlugin = IF;
  });
  var Iv = c(Ae => {
    "use strict";

    Object.defineProperty(Ae, "__esModule", {
      value: !0
    });
    Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
    var TF = e => document.querySelector(`[data-w-id="${e}"]`),
      wF = () => window.Webflow.require("spline"),
      xF = (e, t) => e.filter(r => !t.includes(r)),
      OF = (e, t) => e.value[t];
    Ae.getPluginConfig = OF;
    var AF = () => null;
    Ae.getPluginDuration = AF;
    var _v = Object.freeze({
        positionX: 0,
        positionY: 0,
        positionZ: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1
      }),
      SF = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = xF(n, o);
          return a.length ? a.reduce((u, l) => (u[l] = _v[l], u), e) : e;
        }
        return n.reduce((o, a) => (o[a] = _v[a], o), {});
      };
    Ae.getPluginOrigin = SF;
    var CF = e => e.value;
    Ae.getPluginDestination = CF;
    var RF = (e, t) => {
      var r;
      let n = t == null || (r = t.config) === null || r === void 0 || (r = r.target) === null || r === void 0 ? void 0 : r.pluginElement;
      return n ? TF(n) : null;
    };
    Ae.createPluginInstance = RF;
    var LF = (e, t, r) => {
      let n = wF(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = s => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let {
            PLUGIN_SPLINE: l
          } = t;
          l.positionX != null && (u.position.x = l.positionX), l.positionY != null && (u.position.y = l.positionY), l.positionZ != null && (u.position.z = l.positionZ), l.rotationX != null && (u.rotation.x = l.rotationX), l.rotationY != null && (u.rotation.y = l.rotationY), l.rotationZ != null && (u.rotation.z = l.rotationZ), l.scaleX != null && (u.scale.x = l.scaleX), l.scaleY != null && (u.scale.y = l.scaleY), l.scaleZ != null && (u.scale.z = l.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    Ae.renderPlugin = LF;
    var NF = () => null;
    Ae.clearPlugin = NF;
  });
  var Ra = c(Ca => {
    "use strict";

    Object.defineProperty(Ca, "__esModule", {
      value: !0
    });
    Ca.normalizeColor = PF;
    var Tv = {
      aliceblue: "#F0F8FF",
      antiquewhite: "#FAEBD7",
      aqua: "#00FFFF",
      aquamarine: "#7FFFD4",
      azure: "#F0FFFF",
      beige: "#F5F5DC",
      bisque: "#FFE4C4",
      black: "#000000",
      blanchedalmond: "#FFEBCD",
      blue: "#0000FF",
      blueviolet: "#8A2BE2",
      brown: "#A52A2A",
      burlywood: "#DEB887",
      cadetblue: "#5F9EA0",
      chartreuse: "#7FFF00",
      chocolate: "#D2691E",
      coral: "#FF7F50",
      cornflowerblue: "#6495ED",
      cornsilk: "#FFF8DC",
      crimson: "#DC143C",
      cyan: "#00FFFF",
      darkblue: "#00008B",
      darkcyan: "#008B8B",
      darkgoldenrod: "#B8860B",
      darkgray: "#A9A9A9",
      darkgreen: "#006400",
      darkgrey: "#A9A9A9",
      darkkhaki: "#BDB76B",
      darkmagenta: "#8B008B",
      darkolivegreen: "#556B2F",
      darkorange: "#FF8C00",
      darkorchid: "#9932CC",
      darkred: "#8B0000",
      darksalmon: "#E9967A",
      darkseagreen: "#8FBC8F",
      darkslateblue: "#483D8B",
      darkslategray: "#2F4F4F",
      darkslategrey: "#2F4F4F",
      darkturquoise: "#00CED1",
      darkviolet: "#9400D3",
      deeppink: "#FF1493",
      deepskyblue: "#00BFFF",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1E90FF",
      firebrick: "#B22222",
      floralwhite: "#FFFAF0",
      forestgreen: "#228B22",
      fuchsia: "#FF00FF",
      gainsboro: "#DCDCDC",
      ghostwhite: "#F8F8FF",
      gold: "#FFD700",
      goldenrod: "#DAA520",
      gray: "#808080",
      green: "#008000",
      greenyellow: "#ADFF2F",
      grey: "#808080",
      honeydew: "#F0FFF0",
      hotpink: "#FF69B4",
      indianred: "#CD5C5C",
      indigo: "#4B0082",
      ivory: "#FFFFF0",
      khaki: "#F0E68C",
      lavender: "#E6E6FA",
      lavenderblush: "#FFF0F5",
      lawngreen: "#7CFC00",
      lemonchiffon: "#FFFACD",
      lightblue: "#ADD8E6",
      lightcoral: "#F08080",
      lightcyan: "#E0FFFF",
      lightgoldenrodyellow: "#FAFAD2",
      lightgray: "#D3D3D3",
      lightgreen: "#90EE90",
      lightgrey: "#D3D3D3",
      lightpink: "#FFB6C1",
      lightsalmon: "#FFA07A",
      lightseagreen: "#20B2AA",
      lightskyblue: "#87CEFA",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#B0C4DE",
      lightyellow: "#FFFFE0",
      lime: "#00FF00",
      limegreen: "#32CD32",
      linen: "#FAF0E6",
      magenta: "#FF00FF",
      maroon: "#800000",
      mediumaquamarine: "#66CDAA",
      mediumblue: "#0000CD",
      mediumorchid: "#BA55D3",
      mediumpurple: "#9370DB",
      mediumseagreen: "#3CB371",
      mediumslateblue: "#7B68EE",
      mediumspringgreen: "#00FA9A",
      mediumturquoise: "#48D1CC",
      mediumvioletred: "#C71585",
      midnightblue: "#191970",
      mintcream: "#F5FFFA",
      mistyrose: "#FFE4E1",
      moccasin: "#FFE4B5",
      navajowhite: "#FFDEAD",
      navy: "#000080",
      oldlace: "#FDF5E6",
      olive: "#808000",
      olivedrab: "#6B8E23",
      orange: "#FFA500",
      orangered: "#FF4500",
      orchid: "#DA70D6",
      palegoldenrod: "#EEE8AA",
      palegreen: "#98FB98",
      paleturquoise: "#AFEEEE",
      palevioletred: "#DB7093",
      papayawhip: "#FFEFD5",
      peachpuff: "#FFDAB9",
      peru: "#CD853F",
      pink: "#FFC0CB",
      plum: "#DDA0DD",
      powderblue: "#B0E0E6",
      purple: "#800080",
      rebeccapurple: "#663399",
      red: "#FF0000",
      rosybrown: "#BC8F8F",
      royalblue: "#4169E1",
      saddlebrown: "#8B4513",
      salmon: "#FA8072",
      sandybrown: "#F4A460",
      seagreen: "#2E8B57",
      seashell: "#FFF5EE",
      sienna: "#A0522D",
      silver: "#C0C0C0",
      skyblue: "#87CEEB",
      slateblue: "#6A5ACD",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#FFFAFA",
      springgreen: "#00FF7F",
      steelblue: "#4682B4",
      tan: "#D2B48C",
      teal: "#008080",
      thistle: "#D8BFD8",
      tomato: "#FF6347",
      turquoise: "#40E0D0",
      violet: "#EE82EE",
      wheat: "#F5DEB3",
      white: "#FFFFFF",
      whitesmoke: "#F5F5F5",
      yellow: "#FFFF00",
      yellowgreen: "#9ACD32"
    };
    function PF(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase(),
        s = (typeof Tv[o] == "string" ? Tv[o].toLowerCase() : null) || o;
      if (s.startsWith("#")) {
        let u = s.substring(1);
        u.length === 3 ? (t = parseInt(u[0] + u[0], 16), r = parseInt(u[1] + u[1], 16), n = parseInt(u[2] + u[2], 16)) : u.length === 6 && (t = parseInt(u.substring(0, 2), 16), r = parseInt(u.substring(2, 4), 16), n = parseInt(u.substring(4, 6), 16));
      } else if (s.startsWith("rgba")) {
        let u = s.match(/rgba\(([^)]+)\)/)[1].split(",");
        t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10), i = parseFloat(u[3]);
      } else if (s.startsWith("rgb")) {
        let u = s.match(/rgb\(([^)]+)\)/)[1].split(",");
        t = parseInt(u[0], 10), r = parseInt(u[1], 10), n = parseInt(u[2], 10);
      } else if (s.startsWith("hsla")) {
        let u = s.match(/hsla\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          _ = parseFloat(u[1].replace("%", "")) / 100,
          p = parseFloat(u[2].replace("%", "")) / 100;
        i = parseFloat(u[3]);
        let b = (1 - Math.abs(2 * p - 1)) * _,
          v = b * (1 - Math.abs(l / 60 % 2 - 1)),
          E = p - b / 2,
          I,
          x,
          w;
        l >= 0 && l < 60 ? (I = b, x = v, w = 0) : l >= 60 && l < 120 ? (I = v, x = b, w = 0) : l >= 120 && l < 180 ? (I = 0, x = b, w = v) : l >= 180 && l < 240 ? (I = 0, x = v, w = b) : l >= 240 && l < 300 ? (I = v, x = 0, w = b) : (I = b, x = 0, w = v), t = Math.round((I + E) * 255), r = Math.round((x + E) * 255), n = Math.round((w + E) * 255);
      } else if (s.startsWith("hsl")) {
        let u = s.match(/hsl\(([^)]+)\)/)[1].split(","),
          l = parseFloat(u[0]),
          _ = parseFloat(u[1].replace("%", "")) / 100,
          p = parseFloat(u[2].replace("%", "")) / 100,
          b = (1 - Math.abs(2 * p - 1)) * _,
          v = b * (1 - Math.abs(l / 60 % 2 - 1)),
          E = p - b / 2,
          I,
          x,
          w;
        l >= 0 && l < 60 ? (I = b, x = v, w = 0) : l >= 60 && l < 120 ? (I = v, x = b, w = 0) : l >= 120 && l < 180 ? (I = 0, x = b, w = v) : l >= 180 && l < 240 ? (I = 0, x = v, w = b) : l >= 240 && l < 300 ? (I = v, x = 0, w = b) : (I = b, x = 0, w = v), t = Math.round((I + E) * 255), r = Math.round((x + E) * 255), n = Math.round((w + E) * 255);
      }
      if (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
      return {
        red: t,
        green: r,
        blue: n,
        alpha: i
      };
    }
  });
  var wv = c(Se => {
    "use strict";

    Object.defineProperty(Se, "__esModule", {
      value: !0
    });
    Se.renderPlugin = Se.getPluginOrigin = Se.getPluginDuration = Se.getPluginDestination = Se.getPluginConfig = Se.createPluginInstance = Se.clearPlugin = void 0;
    var qF = Ra(),
      FF = (e, t) => e.value[t];
    Se.getPluginConfig = FF;
    var MF = () => null;
    Se.getPluginDuration = MF;
    var DF = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return {
        size: parseInt(i, 10)
      };
      if (r.red != null && r.green != null && r.blue != null) return (0, qF.normalizeColor)(i);
    };
    Se.getPluginOrigin = DF;
    var kF = e => e.value;
    Se.getPluginDestination = kF;
    var GF = () => null;
    Se.createPluginInstance = GF;
    var VF = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        {
          PLUGIN_VARIABLE: o
        } = t,
        {
          size: a,
          red: s,
          green: u,
          blue: l,
          alpha: _
        } = o,
        p;
      a != null && (p = a + i), s != null && l != null && u != null && _ != null && (p = `rgba(${s}, ${u}, ${l}, ${_})`), p != null && document.documentElement.style.setProperty(n, p);
    };
    Se.renderPlugin = VF;
    var UF = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    Se.clearPlugin = UF;
  });
  var xv = c(ri => {
    "use strict";

    var Na = pn().default;
    Object.defineProperty(ri, "__esModule", {
      value: !0
    });
    ri.pluginMethodMap = void 0;
    var La = (Ue(), rt(Lf)),
      BF = Na(bv()),
      WF = Na(Iv()),
      HF = Na(wv()),
      wX = ri.pluginMethodMap = new Map([[La.ActionTypeConsts.PLUGIN_LOTTIE, {
        ...BF
      }], [La.ActionTypeConsts.PLUGIN_SPLINE, {
        ...WF
      }], [La.ActionTypeConsts.PLUGIN_VARIABLE, {
        ...HF
      }]]);
  });
  var Ov = {};
  ke(Ov, {
    clearPlugin: () => ka,
    createPluginInstance: () => jF,
    getPluginConfig: () => qa,
    getPluginDestination: () => Ma,
    getPluginDuration: () => XF,
    getPluginOrigin: () => Fa,
    isPluginType: () => Ft,
    renderPlugin: () => Da
  });
  function Ft(e) {
    return Pa.pluginMethodMap.has(e);
  }
  var Pa,
    Mt,
    qa,
    Fa,
    XF,
    Ma,
    jF,
    Da,
    ka,
    Ga = me(() => {
      "use strict";

      Jn();
      Pa = fe(xv());
      Mt = e => t => {
        if (!Je) return () => null;
        let r = Pa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }, qa = Mt("getPluginConfig"), Fa = Mt("getPluginOrigin"), XF = Mt("getPluginDuration"), Ma = Mt("getPluginDestination"), jF = Mt("createPluginInstance"), Da = Mt("renderPlugin"), ka = Mt("clearPlugin");
    });
  var Sv = c((AX, Av) => {
    function zF(e, t) {
      return e == null || e !== e ? t : e;
    }
    Av.exports = zF;
  });
  var Rv = c((SX, Cv) => {
    function KF(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
      return r;
    }
    Cv.exports = KF;
  });
  var Nv = c((CX, Lv) => {
    function YF(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    Lv.exports = YF;
  });
  var qv = c((RX, Pv) => {
    var $F = Nv(),
      QF = $F();
    Pv.exports = QF;
  });
  var Va = c((LX, Fv) => {
    var ZF = qv(),
      JF = kr();
    function eM(e, t) {
      return e && ZF(e, t, JF);
    }
    Fv.exports = eM;
  });
  var Dv = c((NX, Mv) => {
    var tM = Pt();
    function rM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!tM(r)) return e(r, n);
        for (var i = r.length, o = t ? i : -1, a = Object(r); (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
        return r;
      };
    }
    Mv.exports = rM;
  });
  var Ua = c((PX, kv) => {
    var nM = Va(),
      iM = Dv(),
      oM = iM(nM);
    kv.exports = oM;
  });
  var Vv = c((qX, Gv) => {
    function aM(e, t, r, n, i) {
      return i(e, function (o, a, s) {
        r = n ? (n = !1, o) : t(r, o, a, s);
      }), r;
    }
    Gv.exports = aM;
  });
  var Bv = c((FX, Uv) => {
    var sM = Rv(),
      uM = Ua(),
      cM = wt(),
      lM = Vv(),
      fM = xe();
    function dM(e, t, r) {
      var n = fM(e) ? sM : lM,
        i = arguments.length < 3;
      return n(e, cM(t, 4), r, i, uM);
    }
    Uv.exports = dM;
  });
  var Hv = c((MX, Wv) => {
    var pM = _a(),
      hM = wt(),
      gM = Ia(),
      vM = Math.max,
      mM = Math.min;
    function yM(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return r !== void 0 && (i = gM(r), i = r < 0 ? vM(n + i, 0) : mM(i, n - 1)), pM(e, hM(t, 3), i, !0);
    }
    Wv.exports = yM;
  });
  var jv = c((DX, Xv) => {
    var EM = ba(),
      bM = Hv(),
      _M = EM(bM);
    Xv.exports = _M;
  });
  function zv(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function TM(e, t) {
    if (zv(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++) if (!IM.call(t, r[i]) || !zv(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var IM,
    Ba,
    Kv = me(() => {
      "use strict";

      IM = Object.prototype.hasOwnProperty;
      Ba = TM;
    });
  var dm = {};
  ke(dm, {
    cleanupHTMLElement: () => b1,
    clearAllStyles: () => E1,
    clearObjectCache: () => VM,
    getActionListProgress: () => I1,
    getAffectedElements: () => za,
    getComputedStyle: () => KM,
    getDestinationValues: () => t1,
    getElementId: () => HM,
    getInstanceId: () => BM,
    getInstanceOrigin: () => QM,
    getItemConfigByKey: () => e1,
    getMaxDurationItemIndex: () => fm,
    getNamespacedParameterId: () => x1,
    getRenderType: () => um,
    getStyleProp: () => r1,
    mediaQueriesEqual: () => A1,
    observeStore: () => zM,
    reduceListToGroup: () => T1,
    reifyState: () => XM,
    renderHTMLElement: () => n1,
    shallowEqual: () => Ba,
    shouldAllowMediaQuery: () => O1,
    shouldNamespaceEventParameter: () => w1,
    stringifyTarget: () => S1
  });
  function VM() {
    ni.clear();
  }
  function BM() {
    return "i" + UM++;
  }
  function HM(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + WM++;
  }
  function XM({
    events: e,
    actionLists: t,
    site: r
  } = {}) {
    let n = (0, si.default)(e, (a, s) => {
        let {
          eventTypeId: u
        } = s;
        return a[u] || (a[u] = {}), a[u][s.id] = s, a;
      }, {}),
      i = r && r.mediaQueries,
      o = [];
    return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
      ixData: {
        events: e,
        actionLists: t,
        eventTypeMap: n,
        mediaQueries: i,
        mediaQueryKeys: o
      }
    };
  }
  function zM({
    store: e,
    select: t,
    onChange: r,
    comparator: n = jM
  }) {
    let {
        getState: i,
        subscribe: o
      } = e,
      a = o(u),
      s = t(i());
    function u() {
      let l = t(i());
      if (l == null) {
        a();
        return;
      }
      n(l, s) || (s = l, r(s, e));
    }
    return a;
  }
  function Qv(e) {
    let t = typeof e;
    if (t === "string") return {
      id: e
    };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s
      };
    }
    return {};
  }
  function za({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i
  }) {
    var _t$action$config$affe;
    if (!i) throw new Error("IX2 missing elementApi");
    let {
      targets: o
    } = e;
    if (Array.isArray(o) && o.length > 0) return o.reduce((k, S) => k.concat(za({
      config: {
        target: S
      },
      event: t,
      eventTarget: r,
      elementRoot: n,
      elementApi: i
    })), []);
    let {
        getValidDocument: a,
        getQuerySelector: s,
        queryDocument: u,
        getChildElements: l,
        getSiblingElements: _,
        matchSelector: p,
        elementContains: b,
        isSiblingNode: v
      } = i,
      {
        target: E
      } = e;
    if (!E) return [];
    let {
      id: I,
      objectId: x,
      selector: w,
      selectorGuids: N,
      appliesTo: C,
      useEventTarget: q
    } = Qv(E);
    if (x) return [ni.has(x) ? ni.get(x) : ni.set(x, {}).get(x)];
    if (C === jo.PAGE) {
      let k = a(I);
      return k ? [k] : [];
    }
    let P = ((_t$action$config$affe = t?.action?.config?.affectedElements) !== null && _t$action$config$affe !== void 0 ? _t$action$config$affe : {})[I || w] || {},
      j = !!(P.id || P.selector),
      X,
      Q,
      ee,
      re = t && s(Qv(t.target));
    if (j ? (X = P.limitAffectedElements, Q = re, ee = s(P)) : Q = ee = s({
      id: I,
      selector: w,
      selectorGuids: N
    }), t && q) {
      let k = r && (ee || q === !0) ? [r] : u(re);
      if (ee) {
        if (q === DM) return u(ee).filter(S => k.some(M => b(S, M)));
        if (q === Yv) return u(ee).filter(S => k.some(M => b(M, S)));
        if (q === $v) return u(ee).filter(S => k.some(M => v(M, S)));
      }
      return k;
    }
    return Q == null || ee == null ? [] : Je && n ? u(ee).filter(k => n.contains(k)) : X === Yv ? u(Q, ee) : X === MM ? l(u(Q)).filter(p(ee)) : X === $v ? _(u(Q)).filter(p(ee)) : u(ee);
  }
  function KM({
    element: e,
    actionItem: t
  }) {
    if (!Je) return {};
    let {
      actionTypeId: r
    } = t;
    switch (r) {
      case ur:
      case cr:
      case lr:
      case fr:
      case ci:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function QM(e, t = {}, r = {}, n, i) {
    let {
        getStyle: o
      } = i,
      {
        actionTypeId: a
      } = n;
    if (Ft(a)) return Fa(a)(t[a], n);
    switch (n.actionTypeId) {
      case or:
      case ar:
      case sr:
      case Kr:
        return t[n.actionTypeId] || Ka[n.actionTypeId];
      case Yr:
        return YM(t[n.actionTypeId], n.config.filters);
      case $r:
        return $M(t[n.actionTypeId], n.config.fontVariations);
      case om:
        return {
          value: (0, gt.default)(parseFloat(o(e, oi)), 1)
        };
      case ur:
        {
          let s = o(e, ut),
            u = o(e, ct),
            l,
            _;
          return n.config.widthUnit === Ot ? l = Zv.test(s) ? parseFloat(s) : parseFloat(r.width) : l = (0, gt.default)(parseFloat(s), parseFloat(r.width)), n.config.heightUnit === Ot ? _ = Zv.test(u) ? parseFloat(u) : parseFloat(r.height) : _ = (0, gt.default)(parseFloat(u), parseFloat(r.height)), {
            widthValue: l,
            heightValue: _
          };
        }
      case cr:
      case lr:
      case fr:
        return v1({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o
        });
      case ci:
        return {
          value: (0, gt.default)(o(e, ai), r.display)
        };
      case GM:
        return t[n.actionTypeId] || {
          value: 0
        };
      default:
        return;
    }
  }
  function t1({
    element: e,
    actionItem: t,
    elementApi: r
  }) {
    if (Ft(t.actionTypeId)) return Ma(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case or:
      case ar:
      case sr:
      case Kr:
        {
          let {
            xValue: n,
            yValue: i,
            zValue: o
          } = t.config;
          return {
            xValue: n,
            yValue: i,
            zValue: o
          };
        }
      case ur:
        {
          let {
              getStyle: n,
              setStyle: i,
              getProperty: o
            } = r,
            {
              widthUnit: a,
              heightUnit: s
            } = t.config,
            {
              widthValue: u,
              heightValue: l
            } = t.config;
          if (!Je) return {
            widthValue: u,
            heightValue: l
          };
          if (a === Ot) {
            let _ = n(e, ut);
            i(e, ut, ""), u = o(e, "offsetWidth"), i(e, ut, _);
          }
          if (s === Ot) {
            let _ = n(e, ct);
            i(e, ct, ""), l = o(e, "offsetHeight"), i(e, ct, _);
          }
          return {
            widthValue: u,
            heightValue: l
          };
        }
      case cr:
      case lr:
      case fr:
        {
          let {
            rValue: n,
            gValue: i,
            bValue: o,
            aValue: a,
            globalSwatchId: s
          } = t.config;
          if (s && s.startsWith("--")) {
            let {
                getStyle: u
              } = r,
              l = u(e, s),
              _ = (0, tm.normalizeColor)(l);
            return {
              rValue: _.red,
              gValue: _.green,
              bValue: _.blue,
              aValue: _.alpha
            };
          }
          return {
            rValue: n,
            gValue: i,
            bValue: o,
            aValue: a
          };
        }
      case Yr:
        return t.config.filters.reduce(ZM, {});
      case $r:
        return t.config.fontVariations.reduce(JM, {});
      default:
        {
          let {
            value: n
          } = t.config;
          return {
            value: n
          };
        }
    }
  }
  function um(e) {
    if (/^TRANSFORM_/.test(e)) return nm;
    if (/^STYLE_/.test(e)) return Xa;
    if (/^GENERAL_/.test(e)) return Ha;
    if (/^PLUGIN_/.test(e)) return im;
  }
  function r1(e, t) {
    return e === Xa ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function n1(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case nm:
        return u1(e, t, r, i, a);
      case Xa:
        return m1(e, t, r, i, o, a);
      case Ha:
        return y1(e, i, a);
      case im:
        {
          let {
            actionTypeId: l
          } = i;
          if (Ft(l)) return Da(l)(u, t, i);
        }
    }
  }
  function u1(e, t, r, n, i) {
    let o = s1.map(s => {
        let u = Ka[s],
          {
            xValue: l = u.xValue,
            yValue: _ = u.yValue,
            zValue: p = u.zValue,
            xUnit: b = "",
            yUnit: v = "",
            zUnit: E = ""
          } = t[s] || {};
        switch (s) {
          case or:
            return `${OM}(${l}${b}, ${_}${v}, ${p}${E})`;
          case ar:
            return `${AM}(${l}${b}, ${_}${v}, ${p}${E})`;
          case sr:
            return `${SM}(${l}${b}) ${CM}(${_}${v}) ${RM}(${p}${E})`;
          case Kr:
            return `${LM}(${l}${b}, ${_}${v})`;
          default:
            return "";
        }
      }).join(" "),
      {
        setStyle: a
      } = i;
    Dt(e, xt, i), a(e, xt, o), f1(n, r) && a(e, Zn, NM);
  }
  function c1(e, t, r, n) {
    let i = (0, si.default)(t, (a, s, u) => `${a} ${u}(${s}${a1(u, r)})`, ""),
      {
        setStyle: o
      } = n;
    Dt(e, Xr, n), o(e, Xr, i);
  }
  function l1(e, t, r, n) {
    let i = (0, si.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`), a), []).join(", "),
      {
        setStyle: o
      } = n;
    Dt(e, jr, n), o(e, jr, i);
  }
  function f1({
    actionTypeId: e
  }, {
    xValue: t,
    yValue: r,
    zValue: n
  }) {
    return e === or && n !== void 0 || e === ar && n !== void 0 || e === sr && (t !== void 0 || r !== void 0);
  }
  function g1(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function v1({
    element: e,
    actionTypeId: t,
    computedStyle: r,
    getStyle: n
  }) {
    let i = ja[t],
      o = n(e, i),
      a = p1.test(o) ? o : r[i],
      s = g1(h1, a).split(zr);
    return {
      rValue: (0, gt.default)(parseInt(s[0], 10), 255),
      gValue: (0, gt.default)(parseInt(s[1], 10), 255),
      bValue: (0, gt.default)(parseInt(s[2], 10), 255),
      aValue: (0, gt.default)(parseFloat(s[3]), 1)
    };
  }
  function m1(e, t, r, n, i, o) {
    let {
      setStyle: a
    } = o;
    switch (n.actionTypeId) {
      case ur:
        {
          let {
              widthUnit: s = "",
              heightUnit: u = ""
            } = n.config,
            {
              widthValue: l,
              heightValue: _
            } = r;
          l !== void 0 && (s === Ot && (s = "px"), Dt(e, ut, o), a(e, ut, l + s)), _ !== void 0 && (u === Ot && (u = "px"), Dt(e, ct, o), a(e, ct, _ + u));
          break;
        }
      case Yr:
        {
          c1(e, r, n.config, o);
          break;
        }
      case $r:
        {
          l1(e, r, n.config, o);
          break;
        }
      case cr:
      case lr:
      case fr:
        {
          let s = ja[n.actionTypeId],
            u = Math.round(r.rValue),
            l = Math.round(r.gValue),
            _ = Math.round(r.bValue),
            p = r.aValue;
          Dt(e, s, o), a(e, s, p >= 1 ? `rgb(${u},${l},${_})` : `rgba(${u},${l},${_},${p})`);
          break;
        }
      default:
        {
          let {
            unit: s = ""
          } = n.config;
          Dt(e, i, o), a(e, i, r.value + s);
          break;
        }
    }
  }
  function y1(e, t, r) {
    let {
      setStyle: n
    } = r;
    switch (t.actionTypeId) {
      case ci:
        {
          let {
            value: i
          } = t.config;
          i === PM && Je ? n(e, ai, wa) : n(e, ai, i);
          return;
        }
    }
  }
  function Dt(e, t, r) {
    if (!Je) return;
    let n = sm[t];
    if (!n) return;
    let {
        getStyle: i,
        setStyle: o
      } = r,
      a = i(e, ir);
    if (!a) {
      o(e, ir, n);
      return;
    }
    let s = a.split(zr).map(am);
    s.indexOf(n) === -1 && o(e, ir, s.concat(n).join(zr));
  }
  function cm(e, t, r) {
    if (!Je) return;
    let n = sm[t];
    if (!n) return;
    let {
        getStyle: i,
        setStyle: o
      } = r,
      a = i(e, ir);
    !a || a.indexOf(n) === -1 || o(e, ir, a.split(zr).map(am).filter(s => s !== n).join(zr));
  }
  function E1({
    store: e,
    elementApi: t
  }) {
    let {
        ixData: r
      } = e.getState(),
      {
        events: n = {},
        actionLists: i = {}
      } = r;
    Object.keys(n).forEach(o => {
      let a = n[o],
        {
          config: s
        } = a.action,
        {
          actionListId: u
        } = s,
        l = i[u];
      l && Jv({
        actionList: l,
        event: a,
        elementApi: t
      });
    }), Object.keys(i).forEach(o => {
      Jv({
        actionList: i[o],
        elementApi: t
      });
    });
  }
  function Jv({
    actionList: e = {},
    event: t,
    elementApi: r
  }) {
    let {
      actionItemGroups: n,
      continuousParameterGroups: i
    } = e;
    n && n.forEach(o => {
      em({
        actionGroup: o,
        event: t,
        elementApi: r
      });
    }), i && i.forEach(o => {
      let {
        continuousActionGroups: a
      } = o;
      a.forEach(s => {
        em({
          actionGroup: s,
          event: t,
          elementApi: r
        });
      });
    });
  }
  function em({
    actionGroup: e,
    event: t,
    elementApi: r
  }) {
    let {
      actionItems: n
    } = e;
    n.forEach(i => {
      let {
          actionTypeId: o,
          config: a
        } = i,
        s;
      Ft(o) ? s = u => ka(o)(u, i) : s = lm({
        effect: _1,
        actionTypeId: o,
        elementApi: r
      }), za({
        config: a,
        event: t,
        elementApi: r
      }).forEach(s);
    });
  }
  function b1(e, t, r) {
    let {
        setStyle: n,
        getStyle: i
      } = r,
      {
        actionTypeId: o
      } = t;
    if (o === ur) {
      let {
        config: a
      } = t;
      a.widthUnit === Ot && n(e, ut, ""), a.heightUnit === Ot && n(e, ct, "");
    }
    i(e, ir) && lm({
      effect: cm,
      actionTypeId: o,
      elementApi: r
    })(e);
  }
  function _1(e, t, r) {
    let {
      setStyle: n
    } = r;
    cm(e, t, r), n(e, t, ""), t === xt && n(e, Zn, "");
  }
  function fm(e) {
    let t = 0,
      r = 0;
    return e.forEach((n, i) => {
      let {
          config: o
        } = n,
        a = o.delay + o.duration;
      a >= t && (t = a, r = i);
    }), r;
  }
  function I1(e, t) {
    let {
        actionItemGroups: r,
        useFirstGroupAsInitialState: n
      } = e,
      {
        actionItem: i,
        verboseTimeElapsed: o = 0
      } = t,
      a = 0,
      s = 0;
    return r.forEach((u, l) => {
      if (n && l === 0) return;
      let {
          actionItems: _
        } = u,
        p = _[fm(_)],
        {
          config: b,
          actionTypeId: v
        } = p;
      i.id === p.id && (s = a + o);
      let E = um(v) === Ha ? 0 : b.duration;
      a += b.delay + E;
    }), a > 0 ? Hr(s / a) : 0;
  }
  function T1({
    actionList: e,
    actionItemId: t,
    rawData: r
  }) {
    let {
        actionItemGroups: n,
        continuousParameterGroups: i
      } = e,
      o = [],
      a = s => (o.push((0, ui.mergeIn)(s, ["config"], {
        delay: 0,
        duration: 0
      })), s.id === t);
    return n && n.some(({
      actionItems: s
    }) => s.some(a)), i && i.some(s => {
      let {
        continuousActionGroups: u
      } = s;
      return u.some(({
        actionItems: l
      }) => l.some(a));
    }), (0, ui.setIn)(r, ["actionLists"], {
      [e.id]: {
        id: e.id,
        actionItemGroups: [{
          actionItems: o
        }]
      }
    });
  }
  function w1(e, {
    basedOn: t
  }) {
    return e === Ze.SCROLLING_IN_VIEW && (t === at.ELEMENT || t == null) || e === Ze.MOUSE_MOVE && t === at.ELEMENT;
  }
  function x1(e, t) {
    return e + kM + t;
  }
  function O1(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function A1(e, t) {
    return Ba(e && e.sort(), t && t.sort());
  }
  function S1(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Wa + e.objectId;
    if (e.objectId) return e.objectId;
    let {
      id: t = "",
      selector: r = "",
      useEventTarget: n = ""
    } = e;
    return t + Wa + r + Wa + n;
  }
  var gt,
    si,
    ii,
    ui,
    tm,
    wM,
    xM,
    OM,
    AM,
    SM,
    CM,
    RM,
    LM,
    NM,
    PM,
    oi,
    Xr,
    jr,
    ut,
    ct,
    rm,
    qM,
    FM,
    Yv,
    MM,
    $v,
    DM,
    ai,
    ir,
    Ot,
    zr,
    kM,
    Wa,
    nm,
    Ha,
    Xa,
    im,
    or,
    ar,
    sr,
    Kr,
    om,
    Yr,
    $r,
    ur,
    cr,
    lr,
    fr,
    ci,
    GM,
    am,
    ja,
    sm,
    ni,
    UM,
    WM,
    jM,
    Zv,
    YM,
    $M,
    ZM,
    JM,
    e1,
    Ka,
    i1,
    o1,
    a1,
    s1,
    d1,
    p1,
    h1,
    lm,
    pm = me(() => {
      "use strict";

      gt = fe(Sv()), si = fe(Bv()), ii = fe(jv()), ui = fe(Kt());
      Ue();
      Kv();
      Aa();
      tm = fe(Ra());
      Ga();
      Jn();
      ({
        BACKGROUND: wM,
        TRANSFORM: xM,
        TRANSLATE_3D: OM,
        SCALE_3D: AM,
        ROTATE_X: SM,
        ROTATE_Y: CM,
        ROTATE_Z: RM,
        SKEW: LM,
        PRESERVE_3D: NM,
        FLEX: PM,
        OPACITY: oi,
        FILTER: Xr,
        FONT_VARIATION_SETTINGS: jr,
        WIDTH: ut,
        HEIGHT: ct,
        BACKGROUND_COLOR: rm,
        BORDER_COLOR: qM,
        COLOR: FM,
        CHILDREN: Yv,
        IMMEDIATE_CHILDREN: MM,
        SIBLINGS: $v,
        PARENT: DM,
        DISPLAY: ai,
        WILL_CHANGE: ir,
        AUTO: Ot,
        COMMA_DELIMITER: zr,
        COLON_DELIMITER: kM,
        BAR_DELIMITER: Wa,
        RENDER_TRANSFORM: nm,
        RENDER_GENERAL: Ha,
        RENDER_STYLE: Xa,
        RENDER_PLUGIN: im
      } = Le), ({
        TRANSFORM_MOVE: or,
        TRANSFORM_SCALE: ar,
        TRANSFORM_ROTATE: sr,
        TRANSFORM_SKEW: Kr,
        STYLE_OPACITY: om,
        STYLE_FILTER: Yr,
        STYLE_FONT_VARIATION: $r,
        STYLE_SIZE: ur,
        STYLE_BACKGROUND_COLOR: cr,
        STYLE_BORDER: lr,
        STYLE_TEXT_COLOR: fr,
        GENERAL_DISPLAY: ci,
        OBJECT_VALUE: GM
      } = Ve), am = e => e.trim(), ja = Object.freeze({
        [cr]: rm,
        [lr]: qM,
        [fr]: FM
      }), sm = Object.freeze({
        [xt]: xM,
        [rm]: wM,
        [oi]: oi,
        [Xr]: Xr,
        [ut]: ut,
        [ct]: ct,
        [jr]: jr
      }), ni = new Map();
      UM = 1;
      WM = 1;
      jM = (e, t) => e === t;
      Zv = /px/, YM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = i1[n.type]), r), e || {}), $M = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = o1[n.type] || n.defaultValue || 0), r), e || {});
      ZM = (e, t) => (t && (e[t.type] = t.value || 0), e), JM = (e, t) => (t && (e[t.type] = t.value || 0), e), e1 = (e, t, r) => {
        if (Ft(e)) return qa(e)(r, t);
        switch (e) {
          case Yr:
            {
              let n = (0, ii.default)(r.filters, ({
                type: i
              }) => i === t);
              return n ? n.value : 0;
            }
          case $r:
            {
              let n = (0, ii.default)(r.fontVariations, ({
                type: i
              }) => i === t);
              return n ? n.value : 0;
            }
          default:
            return r[t];
        }
      };
      Ka = {
        [or]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [ar]: Object.freeze({
          xValue: 1,
          yValue: 1,
          zValue: 1
        }),
        [sr]: Object.freeze({
          xValue: 0,
          yValue: 0,
          zValue: 0
        }),
        [Kr]: Object.freeze({
          xValue: 0,
          yValue: 0
        })
      }, i1 = Object.freeze({
        blur: 0,
        "hue-rotate": 0,
        invert: 0,
        grayscale: 0,
        saturate: 100,
        sepia: 0,
        contrast: 100,
        brightness: 100
      }), o1 = Object.freeze({
        wght: 0,
        opsz: 0,
        wdth: 0,
        slnt: 0
      }), a1 = (e, t) => {
        let r = (0, ii.default)(t.filters, ({
          type: n
        }) => n === e);
        if (r && r.unit) return r.unit;
        switch (e) {
          case "blur":
            return "px";
          case "hue-rotate":
            return "deg";
          default:
            return "%";
        }
      }, s1 = Object.keys(Ka);
      d1 = "\\(([^)]+)\\)", p1 = /^rgb/, h1 = RegExp(`rgba?${d1}`);
      lm = ({
        effect: e,
        actionTypeId: t,
        elementApi: r
      }) => n => {
        switch (t) {
          case or:
          case ar:
          case sr:
          case Kr:
            e(n, xt, r);
            break;
          case Yr:
            e(n, Xr, r);
            break;
          case $r:
            e(n, jr, r);
            break;
          case om:
            e(n, oi, r);
            break;
          case ur:
            e(n, ut, r), e(n, ct, r);
            break;
          case cr:
          case lr:
          case fr:
            e(n, ja[t], r);
            break;
          case ci:
            e(n, ai, r);
            break;
        }
      };
    });
  var kt = c(Fe => {
    "use strict";

    var dr = pn().default;
    Object.defineProperty(Fe, "__esModule", {
      value: !0
    });
    Fe.IX2VanillaUtils = Fe.IX2VanillaPlugins = Fe.IX2ElementsReducer = Fe.IX2Easings = Fe.IX2EasingUtils = Fe.IX2BrowserSupport = void 0;
    var C1 = dr((Jn(), rt(uv)));
    Fe.IX2BrowserSupport = C1;
    var R1 = dr((Oa(), rt(Wr)));
    Fe.IX2Easings = R1;
    var L1 = dr((Aa(), rt(gv)));
    Fe.IX2EasingUtils = L1;
    var N1 = dr((Ev(), rt(yv)));
    Fe.IX2ElementsReducer = N1;
    var P1 = dr((Ga(), rt(Ov)));
    Fe.IX2VanillaPlugins = P1;
    var q1 = dr((pm(), rt(dm)));
    Fe.IX2VanillaUtils = q1;
  });
  var fi,
    vt,
    F1,
    M1,
    D1,
    k1,
    G1,
    V1,
    li,
    hm,
    U1,
    B1,
    Ya,
    W1,
    H1,
    X1,
    j1,
    gm,
    vm = me(() => {
      "use strict";

      Ue();
      fi = fe(kt()), vt = fe(Kt()), ({
        IX2_RAW_DATA_IMPORTED: F1,
        IX2_SESSION_STOPPED: M1,
        IX2_INSTANCE_ADDED: D1,
        IX2_INSTANCE_STARTED: k1,
        IX2_INSTANCE_REMOVED: G1,
        IX2_ANIMATION_FRAME_CHANGED: V1
      } = we), ({
        optimizeFloat: li,
        applyEasing: hm,
        createBezierEasing: U1
      } = fi.IX2EasingUtils), ({
        RENDER_GENERAL: B1
      } = Le), ({
        getItemConfigByKey: Ya,
        getRenderType: W1,
        getStyleProp: H1
      } = fi.IX2VanillaUtils), X1 = (e, t) => {
        let {
            position: r,
            parameterId: n,
            actionGroups: i,
            destinationKeys: o,
            smoothing: a,
            restingValue: s,
            actionTypeId: u,
            customEasingFn: l,
            skipMotion: _,
            skipToValue: p
          } = e,
          {
            parameters: b
          } = t.payload,
          v = Math.max(1 - a, .01),
          E = b[n];
        E == null && (v = 1, E = s);
        let I = Math.max(E, 0) || 0,
          x = li(I - r),
          w = _ ? p : li(r + x * v),
          N = w * 100;
        if (w === r && e.current) return e;
        let C, q, F, P;
        for (let X = 0, {
            length: Q
          } = i; X < Q; X++) {
          let {
            keyframe: ee,
            actionItems: re
          } = i[X];
          if (X === 0 && (C = re[0]), N >= ee) {
            C = re[0];
            let k = i[X + 1],
              S = k && N !== ee;
            q = S ? k.actionItems[0] : null, S && (F = ee / 100, P = (k.keyframe - ee) / 100);
          }
        }
        let j = {};
        if (C && !q) for (let X = 0, {
            length: Q
          } = o; X < Q; X++) {
          let ee = o[X];
          j[ee] = Ya(u, ee, C.config);
        } else if (C && q && F !== void 0 && P !== void 0) {
          let X = (w - F) / P,
            Q = C.config.easing,
            ee = hm(Q, X, l);
          for (let re = 0, {
              length: k
            } = o; re < k; re++) {
            let S = o[re],
              M = Ya(u, S, C.config),
              te = (Ya(u, S, q.config) - M) * ee + M;
            j[S] = te;
          }
        }
        return (0, vt.merge)(e, {
          position: w,
          current: j
        });
      }, j1 = (e, t) => {
        let {
            active: r,
            origin: n,
            start: i,
            immediate: o,
            renderType: a,
            verbose: s,
            actionItem: u,
            destination: l,
            destinationKeys: _,
            pluginDuration: p,
            instanceDelay: b,
            customEasingFn: v,
            skipMotion: E
          } = e,
          I = u.config.easing,
          {
            duration: x,
            delay: w
          } = u.config;
        p != null && (x = p), w = b !== null && b !== void 0 ? b : w, a === B1 ? x = 0 : (o || E) && (x = w = 0);
        let {
          now: N
        } = t.payload;
        if (r && n) {
          let C = N - (i + w);
          if (s) {
            let X = N - i,
              Q = x + w,
              ee = li(Math.min(Math.max(0, X / Q), 1));
            e = (0, vt.set)(e, "verboseTimeElapsed", Q * ee);
          }
          if (C < 0) return e;
          let q = li(Math.min(Math.max(0, C / x), 1)),
            F = hm(I, q, v),
            P = {},
            j = null;
          return _.length && (j = _.reduce((X, Q) => {
            let ee = l[Q],
              re = parseFloat(n[Q]) || 0,
              S = (parseFloat(ee) - re) * F + re;
            return X[Q] = S, X;
          }, {})), P.current = j, P.position = q, q === 1 && (P.active = !1, P.complete = !0), (0, vt.merge)(e, P);
        }
        return e;
      }, gm = (e = Object.freeze({}), t) => {
        switch (t.type) {
          case F1:
            return t.payload.ixInstances || Object.freeze({});
          case M1:
            return Object.freeze({});
          case D1:
            {
              let {
                  instanceId: r,
                  elementId: n,
                  actionItem: i,
                  eventId: o,
                  eventTarget: a,
                  eventStateKey: s,
                  actionListId: u,
                  groupIndex: l,
                  isCarrier: _,
                  origin: p,
                  destination: b,
                  immediate: v,
                  verbose: E,
                  continuous: I,
                  parameterId: x,
                  actionGroups: w,
                  smoothing: N,
                  restingValue: C,
                  pluginInstance: q,
                  pluginDuration: F,
                  instanceDelay: P,
                  skipMotion: j,
                  skipToValue: X
                } = t.payload,
                {
                  actionTypeId: Q
                } = i,
                ee = W1(Q),
                re = H1(ee, Q),
                k = Object.keys(b).filter(M => b[M] != null && typeof b[M] != "string"),
                {
                  easing: S
                } = i.config;
              return (0, vt.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: p,
                destination: b,
                destinationKeys: k,
                immediate: v,
                verbose: E,
                current: null,
                actionItem: i,
                actionTypeId: Q,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: l,
                renderType: ee,
                isCarrier: _,
                styleProp: re,
                continuous: I,
                parameterId: x,
                actionGroups: w,
                smoothing: N,
                restingValue: C,
                pluginInstance: q,
                pluginDuration: F,
                instanceDelay: P,
                skipMotion: j,
                skipToValue: X,
                customEasingFn: Array.isArray(S) && S.length === 4 ? U1(S) : void 0
              });
            }
          case k1:
            {
              let {
                instanceId: r,
                time: n
              } = t.payload;
              return (0, vt.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n
              });
            }
          case G1:
            {
              let {
                instanceId: r
              } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                {
                  length: o
                } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
          case V1:
            {
              let r = e,
                n = Object.keys(e),
                {
                  length: i
                } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? X1 : j1;
                r = (0, vt.set)(r, a, u(s, t));
              }
              return r;
            }
          default:
            return e;
        }
      };
    });
  var z1,
    K1,
    Y1,
    mm,
    ym = me(() => {
      "use strict";

      Ue();
      ({
        IX2_RAW_DATA_IMPORTED: z1,
        IX2_SESSION_STOPPED: K1,
        IX2_PARAMETER_CHANGED: Y1
      } = we), mm = (e = {}, t) => {
        switch (t.type) {
          case z1:
            return t.payload.ixParameters || {};
          case K1:
            return {};
          case Y1:
            {
              let {
                key: r,
                value: n
              } = t.payload;
              return e[r] = n, e;
            }
          default:
            return e;
        }
      };
    });
  var _m = {};
  ke(_m, {
    default: () => Q1
  });
  var Em,
    bm,
    $1,
    Q1,
    Im = me(() => {
      "use strict";

      Em = fe(Xo());
      Pf();
      ed();
      nd();
      bm = fe(kt());
      vm();
      ym();
      ({
        ixElements: $1
      } = bm.IX2ElementsReducer), Q1 = (0, Em.combineReducers)({
        ixData: Nf,
        ixRequest: Jf,
        ixSession: rd,
        ixElements: $1,
        ixInstances: gm,
        ixParameters: mm
      });
    });
  var wm = c((ej, Tm) => {
    var Z1 = It(),
      J1 = xe(),
      eD = pt(),
      tD = "[object String]";
    function rD(e) {
      return typeof e == "string" || !J1(e) && eD(e) && Z1(e) == tD;
    }
    Tm.exports = rD;
  });
  var Om = c((tj, xm) => {
    var nD = Ea(),
      iD = nD("length");
    xm.exports = iD;
  });
  var Sm = c((rj, Am) => {
    var oD = "\\ud800-\\udfff",
      aD = "\\u0300-\\u036f",
      sD = "\\ufe20-\\ufe2f",
      uD = "\\u20d0-\\u20ff",
      cD = aD + sD + uD,
      lD = "\\ufe0e\\ufe0f",
      fD = "\\u200d",
      dD = RegExp("[" + fD + oD + cD + lD + "]");
    function pD(e) {
      return dD.test(e);
    }
    Am.exports = pD;
  });
  var Dm = c((nj, Mm) => {
    var Rm = "\\ud800-\\udfff",
      hD = "\\u0300-\\u036f",
      gD = "\\ufe20-\\ufe2f",
      vD = "\\u20d0-\\u20ff",
      mD = hD + gD + vD,
      yD = "\\ufe0e\\ufe0f",
      ED = "[" + Rm + "]",
      $a = "[" + mD + "]",
      Qa = "\\ud83c[\\udffb-\\udfff]",
      bD = "(?:" + $a + "|" + Qa + ")",
      Lm = "[^" + Rm + "]",
      Nm = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      Pm = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      _D = "\\u200d",
      qm = bD + "?",
      Fm = "[" + yD + "]?",
      ID = "(?:" + _D + "(?:" + [Lm, Nm, Pm].join("|") + ")" + Fm + qm + ")*",
      TD = Fm + qm + ID,
      wD = "(?:" + [Lm + $a + "?", $a, Nm, Pm, ED].join("|") + ")",
      Cm = RegExp(Qa + "(?=" + Qa + ")|" + wD + TD, "g");
    function xD(e) {
      for (var t = Cm.lastIndex = 0; Cm.test(e);) ++t;
      return t;
    }
    Mm.exports = xD;
  });
  var Gm = c((ij, km) => {
    var OD = Om(),
      AD = Sm(),
      SD = Dm();
    function CD(e) {
      return AD(e) ? SD(e) : OD(e);
    }
    km.exports = CD;
  });
  var Um = c((oj, Vm) => {
    var RD = Wn(),
      LD = Hn(),
      ND = Pt(),
      PD = wm(),
      qD = Gm(),
      FD = "[object Map]",
      MD = "[object Set]";
    function DD(e) {
      if (e == null) return 0;
      if (ND(e)) return PD(e) ? qD(e) : e.length;
      var t = LD(e);
      return t == FD || t == MD ? e.size : RD(e).length;
    }
    Vm.exports = DD;
  });
  var Wm = c((aj, Bm) => {
    var kD = "Expected a function";
    function GD(e) {
      if (typeof e != "function") throw new TypeError(kD);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    Bm.exports = GD;
  });
  var Za = c((sj, Hm) => {
    var VD = Tt(),
      UD = function () {
        try {
          var e = VD(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch {}
      }();
    Hm.exports = UD;
  });
  var Ja = c((uj, jm) => {
    var Xm = Za();
    function BD(e, t, r) {
      t == "__proto__" && Xm ? Xm(e, t, {
        configurable: !0,
        enumerable: !0,
        value: r,
        writable: !0
      }) : e[t] = r;
    }
    jm.exports = BD;
  });
  var Km = c((cj, zm) => {
    var WD = Ja(),
      HD = Pn(),
      XD = Object.prototype,
      jD = XD.hasOwnProperty;
    function zD(e, t, r) {
      var n = e[t];
      (!(jD.call(e, t) && HD(n, r)) || r === void 0 && !(t in e)) && WD(e, t, r);
    }
    zm.exports = zD;
  });
  var Qm = c((lj, $m) => {
    var KD = Km(),
      YD = Vr(),
      $D = Gn(),
      Ym = st(),
      QD = rr();
    function ZD(e, t, r, n) {
      if (!Ym(e)) return e;
      t = YD(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
        var u = QD(t[i]),
          l = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype") return e;
        if (i != a) {
          var _ = s[u];
          l = n ? n(_, u, s) : void 0, l === void 0 && (l = Ym(_) ? _ : $D(t[i + 1]) ? [] : {});
        }
        KD(s, u, l), s = s[u];
      }
      return e;
    }
    $m.exports = ZD;
  });
  var Jm = c((fj, Zm) => {
    var JD = zn(),
      e2 = Qm(),
      t2 = Vr();
    function r2(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i;) {
        var a = t[n],
          s = JD(e, a);
        r(s, a) && e2(o, t2(a, e), s);
      }
      return o;
    }
    Zm.exports = r2;
  });
  var ty = c((dj, ey) => {
    var n2 = Dn(),
      i2 = No(),
      o2 = ia(),
      a2 = na(),
      s2 = Object.getOwnPropertySymbols,
      u2 = s2 ? function (e) {
        for (var t = []; e;) n2(t, o2(e)), e = i2(e);
        return t;
      } : a2;
    ey.exports = u2;
  });
  var ny = c((pj, ry) => {
    function c2(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    ry.exports = c2;
  });
  var oy = c((hj, iy) => {
    var l2 = st(),
      f2 = Bn(),
      d2 = ny(),
      p2 = Object.prototype,
      h2 = p2.hasOwnProperty;
    function g2(e) {
      if (!l2(e)) return d2(e);
      var t = f2(e),
        r = [];
      for (var n in e) n == "constructor" && (t || !h2.call(e, n)) || r.push(n);
      return r;
    }
    iy.exports = g2;
  });
  var sy = c((gj, ay) => {
    var v2 = aa(),
      m2 = oy(),
      y2 = Pt();
    function E2(e) {
      return y2(e) ? v2(e, !0) : m2(e);
    }
    ay.exports = E2;
  });
  var cy = c((vj, uy) => {
    var b2 = ra(),
      _2 = ty(),
      I2 = sy();
    function T2(e) {
      return b2(e, I2, _2);
    }
    uy.exports = T2;
  });
  var fy = c((mj, ly) => {
    var w2 = ya(),
      x2 = wt(),
      O2 = Jm(),
      A2 = cy();
    function S2(e, t) {
      if (e == null) return {};
      var r = w2(A2(e), function (n) {
        return [n];
      });
      return t = x2(t), O2(e, r, function (n, i) {
        return t(n, i[0]);
      });
    }
    ly.exports = S2;
  });
  var py = c((yj, dy) => {
    var C2 = wt(),
      R2 = Wm(),
      L2 = fy();
    function N2(e, t) {
      return L2(e, R2(C2(t)));
    }
    dy.exports = N2;
  });
  var gy = c((Ej, hy) => {
    var P2 = Wn(),
      q2 = Hn(),
      F2 = qr(),
      M2 = xe(),
      D2 = Pt(),
      k2 = kn(),
      G2 = Bn(),
      V2 = Un(),
      U2 = "[object Map]",
      B2 = "[object Set]",
      W2 = Object.prototype,
      H2 = W2.hasOwnProperty;
    function X2(e) {
      if (e == null) return !0;
      if (D2(e) && (M2(e) || typeof e == "string" || typeof e.splice == "function" || k2(e) || V2(e) || F2(e))) return !e.length;
      var t = q2(e);
      if (t == U2 || t == B2) return !e.size;
      if (G2(e)) return !P2(e).length;
      for (var r in e) if (H2.call(e, r)) return !1;
      return !0;
    }
    hy.exports = X2;
  });
  var my = c((bj, vy) => {
    var j2 = Ja(),
      z2 = Va(),
      K2 = wt();
    function Y2(e, t) {
      var r = {};
      return t = K2(t, 3), z2(e, function (n, i, o) {
        j2(r, i, t(n, i, o));
      }), r;
    }
    vy.exports = Y2;
  });
  var Ey = c((_j, yy) => {
    function $2(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
      return e;
    }
    yy.exports = $2;
  });
  var _y = c((Ij, by) => {
    var Q2 = Yn();
    function Z2(e) {
      return typeof e == "function" ? e : Q2;
    }
    by.exports = Z2;
  });
  var Ty = c((Tj, Iy) => {
    var J2 = Ey(),
      ek = Ua(),
      tk = _y(),
      rk = xe();
    function nk(e, t) {
      var r = rk(e) ? J2 : ek;
      return r(e, tk(t));
    }
    Iy.exports = nk;
  });
  var xy = c((wj, wy) => {
    var ik = Qe(),
      ok = function () {
        return ik.Date.now();
      };
    wy.exports = ok;
  });
  var Sy = c((xj, Ay) => {
    var ak = st(),
      es = xy(),
      Oy = $n(),
      sk = "Expected a function",
      uk = Math.max,
      ck = Math.min;
    function lk(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        l = 0,
        _ = !1,
        p = !1,
        b = !0;
      if (typeof e != "function") throw new TypeError(sk);
      t = Oy(t) || 0, ak(r) && (_ = !!r.leading, p = "maxWait" in r, o = p ? uk(Oy(r.maxWait) || 0, t) : o, b = "trailing" in r ? !!r.trailing : b);
      function v(P) {
        var j = n,
          X = i;
        return n = i = void 0, l = P, a = e.apply(X, j), a;
      }
      function E(P) {
        return l = P, s = setTimeout(w, t), _ ? v(P) : a;
      }
      function I(P) {
        var j = P - u,
          X = P - l,
          Q = t - j;
        return p ? ck(Q, o - X) : Q;
      }
      function x(P) {
        var j = P - u,
          X = P - l;
        return u === void 0 || j >= t || j < 0 || p && X >= o;
      }
      function w() {
        var P = es();
        if (x(P)) return N(P);
        s = setTimeout(w, I(P));
      }
      function N(P) {
        return s = void 0, b && n ? v(P) : (n = i = void 0, a);
      }
      function C() {
        s !== void 0 && clearTimeout(s), l = 0, n = u = i = s = void 0;
      }
      function q() {
        return s === void 0 ? a : N(es());
      }
      function F() {
        var P = es(),
          j = x(P);
        if (n = arguments, i = this, u = P, j) {
          if (s === void 0) return E(u);
          if (p) return clearTimeout(s), s = setTimeout(w, t), v(u);
        }
        return s === void 0 && (s = setTimeout(w, t)), a;
      }
      return F.cancel = C, F.flush = q, F;
    }
    Ay.exports = lk;
  });
  var Ry = c((Oj, Cy) => {
    var fk = Sy(),
      dk = st(),
      pk = "Expected a function";
    function hk(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(pk);
      return dk(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), fk(e, t, {
        leading: n,
        maxWait: t,
        trailing: i
      });
    }
    Cy.exports = hk;
  });
  var Ny = {};
  ke(Ny, {
    actionListPlaybackChanged: () => hr,
    animationFrameChanged: () => pi,
    clearRequested: () => Gk,
    elementStateChanged: () => us,
    eventListenerAdded: () => di,
    eventStateChanged: () => os,
    instanceAdded: () => as,
    instanceRemoved: () => ss,
    instanceStarted: () => hi,
    mediaQueriesDefined: () => ls,
    parameterChanged: () => pr,
    playbackRequested: () => Dk,
    previewRequested: () => Mk,
    rawDataImported: () => ts,
    sessionInitialized: () => rs,
    sessionStarted: () => ns,
    sessionStopped: () => is,
    stopRequested: () => kk,
    testFrameRendered: () => Vk,
    viewportWidthChanged: () => cs
  });
  var Ly,
    gk,
    vk,
    mk,
    yk,
    Ek,
    bk,
    _k,
    Ik,
    Tk,
    wk,
    xk,
    Ok,
    Ak,
    Sk,
    Ck,
    Rk,
    Lk,
    Nk,
    Pk,
    qk,
    Fk,
    ts,
    rs,
    ns,
    is,
    Mk,
    Dk,
    kk,
    Gk,
    di,
    Vk,
    os,
    pi,
    pr,
    as,
    hi,
    ss,
    us,
    hr,
    cs,
    ls,
    gi = me(() => {
      "use strict";

      Ue();
      Ly = fe(kt()), ({
        IX2_RAW_DATA_IMPORTED: gk,
        IX2_SESSION_INITIALIZED: vk,
        IX2_SESSION_STARTED: mk,
        IX2_SESSION_STOPPED: yk,
        IX2_PREVIEW_REQUESTED: Ek,
        IX2_PLAYBACK_REQUESTED: bk,
        IX2_STOP_REQUESTED: _k,
        IX2_CLEAR_REQUESTED: Ik,
        IX2_EVENT_LISTENER_ADDED: Tk,
        IX2_TEST_FRAME_RENDERED: wk,
        IX2_EVENT_STATE_CHANGED: xk,
        IX2_ANIMATION_FRAME_CHANGED: Ok,
        IX2_PARAMETER_CHANGED: Ak,
        IX2_INSTANCE_ADDED: Sk,
        IX2_INSTANCE_STARTED: Ck,
        IX2_INSTANCE_REMOVED: Rk,
        IX2_ELEMENT_STATE_CHANGED: Lk,
        IX2_ACTION_LIST_PLAYBACK_CHANGED: Nk,
        IX2_VIEWPORT_WIDTH_CHANGED: Pk,
        IX2_MEDIA_QUERIES_DEFINED: qk
      } = we), ({
        reifyState: Fk
      } = Ly.IX2VanillaUtils), ts = e => ({
        type: gk,
        payload: {
          ...Fk(e)
        }
      }), rs = ({
        hasBoundaryNodes: e,
        reducedMotion: t
      }) => ({
        type: vk,
        payload: {
          hasBoundaryNodes: e,
          reducedMotion: t
        }
      }), ns = () => ({
        type: mk
      }), is = () => ({
        type: yk
      }), Mk = ({
        rawData: e,
        defer: t
      }) => ({
        type: Ek,
        payload: {
          defer: t,
          rawData: e
        }
      }), Dk = ({
        actionTypeId: e = Ve.GENERAL_START_ACTION,
        actionListId: t,
        actionItemId: r,
        eventId: n,
        allowEvents: i,
        immediate: o,
        testManual: a,
        verbose: s,
        rawData: u
      }) => ({
        type: bk,
        payload: {
          actionTypeId: e,
          actionListId: t,
          actionItemId: r,
          testManual: a,
          eventId: n,
          allowEvents: i,
          immediate: o,
          verbose: s,
          rawData: u
        }
      }), kk = e => ({
        type: _k,
        payload: {
          actionListId: e
        }
      }), Gk = () => ({
        type: Ik
      }), di = (e, t) => ({
        type: Tk,
        payload: {
          target: e,
          listenerParams: t
        }
      }), Vk = (e = 1) => ({
        type: wk,
        payload: {
          step: e
        }
      }), os = (e, t) => ({
        type: xk,
        payload: {
          stateKey: e,
          newState: t
        }
      }), pi = (e, t) => ({
        type: Ok,
        payload: {
          now: e,
          parameters: t
        }
      }), pr = (e, t) => ({
        type: Ak,
        payload: {
          key: e,
          value: t
        }
      }), as = e => ({
        type: Sk,
        payload: {
          ...e
        }
      }), hi = (e, t) => ({
        type: Ck,
        payload: {
          instanceId: e,
          time: t
        }
      }), ss = e => ({
        type: Rk,
        payload: {
          instanceId: e
        }
      }), us = (e, t, r, n) => ({
        type: Lk,
        payload: {
          elementId: e,
          actionTypeId: t,
          current: r,
          actionItem: n
        }
      }), hr = ({
        actionListId: e,
        isPlaying: t
      }) => ({
        type: Nk,
        payload: {
          actionListId: e,
          isPlaying: t
        }
      }), cs = ({
        width: e,
        mediaQueries: t
      }) => ({
        type: Pk,
        payload: {
          width: e,
          mediaQueries: t
        }
      }), ls = () => ({
        type: qk
      });
    });
  var Me = {};
  ke(Me, {
    elementContains: () => ps,
    getChildElements: () => $k,
    getClosestElement: () => Qr,
    getProperty: () => Xk,
    getQuerySelector: () => ds,
    getRefType: () => hs,
    getSiblingElements: () => Qk,
    getStyle: () => Hk,
    getValidDocument: () => zk,
    isSiblingNode: () => Yk,
    matchSelector: () => jk,
    queryDocument: () => Kk,
    setStyle: () => Wk
  });
  function Wk(e, t, r) {
    e.style[t] = r;
  }
  function Hk(e, t) {
    return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style[t];
  }
  function Xk(e, t) {
    return e[t];
  }
  function jk(e) {
    return t => t[fs](e);
  }
  function ds({
    id: e,
    selector: t
  }) {
    if (e) {
      let r = e;
      if (e.indexOf(Py) !== -1) {
        let n = e.split(Py),
          i = n[0];
        if (r = n[1], i !== document.documentElement.getAttribute(Fy)) return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function zk(e) {
    return e == null || e === document.documentElement.getAttribute(Fy) ? document : null;
  }
  function Kk(e, t) {
    return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e));
  }
  function ps(e, t) {
    return e.contains(t);
  }
  function Yk(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function $k(e) {
    let t = [];
    for (let r = 0, {
        length: n
      } = e || []; r < n; r++) {
      let {
          children: i
        } = e[r],
        {
          length: o
        } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function Qk(e = []) {
    let t = [],
      r = [];
    for (let n = 0, {
        length: i
      } = e; n < i; n++) {
      let {
        parentNode: o
      } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling;
    }
    return t;
  }
  function hs(e) {
    return e != null && typeof e == "object" ? e instanceof Element ? Uk : Bk : null;
  }
  var qy,
    fs,
    Py,
    Uk,
    Bk,
    Fy,
    Qr,
    My = me(() => {
      "use strict";

      qy = fe(kt());
      Ue();
      ({
        ELEMENT_MATCHES: fs
      } = qy.IX2BrowserSupport), ({
        IX2_ID_DELIMITER: Py,
        HTML_ELEMENT: Uk,
        PLAIN_OBJECT: Bk,
        WF_PAGE: Fy
      } = Le);
      Qr = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
        if (!document.documentElement.contains(e)) return null;
        let r = e;
        do {
          if (r[fs] && r[fs](t)) return r;
          r = r.parentNode;
        } while (r != null);
        return null;
      };
    });
  var gs = c((Cj, ky) => {
    var Zk = st(),
      Dy = Object.create,
      Jk = function () {
        function e() {}
        return function (t) {
          if (!Zk(t)) return {};
          if (Dy) return Dy(t);
          e.prototype = t;
          var r = new e();
          return e.prototype = void 0, r;
        };
      }();
    ky.exports = Jk;
  });
  var vi = c((Rj, Gy) => {
    function eG() {}
    Gy.exports = eG;
  });
  var yi = c((Lj, Vy) => {
    var tG = gs(),
      rG = vi();
    function mi(e, t) {
      this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0;
    }
    mi.prototype = tG(rG.prototype);
    mi.prototype.constructor = mi;
    Vy.exports = mi;
  });
  var Hy = c((Nj, Wy) => {
    var Uy = Xt(),
      nG = qr(),
      iG = xe(),
      By = Uy ? Uy.isConcatSpreadable : void 0;
    function oG(e) {
      return iG(e) || nG(e) || !!(By && e && e[By]);
    }
    Wy.exports = oG;
  });
  var zy = c((Pj, jy) => {
    var aG = Dn(),
      sG = Hy();
    function Xy(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = sG), i || (i = []); ++o < a;) {
        var s = e[o];
        t > 0 && r(s) ? t > 1 ? Xy(s, t - 1, r, n, i) : aG(i, s) : n || (i[i.length] = s);
      }
      return i;
    }
    jy.exports = Xy;
  });
  var Yy = c((qj, Ky) => {
    var uG = zy();
    function cG(e) {
      var t = e == null ? 0 : e.length;
      return t ? uG(e, 1) : [];
    }
    Ky.exports = cG;
  });
  var Qy = c((Fj, $y) => {
    function lG(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    $y.exports = lG;
  });
  var eE = c((Mj, Jy) => {
    var fG = Qy(),
      Zy = Math.max;
    function dG(e, t, r) {
      return t = Zy(t === void 0 ? e.length - 1 : t, 0), function () {
        for (var n = arguments, i = -1, o = Zy(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
        i = -1;
        for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
        return s[t] = r(a), fG(e, this, s);
      };
    }
    Jy.exports = dG;
  });
  var rE = c((Dj, tE) => {
    function pG(e) {
      return function () {
        return e;
      };
    }
    tE.exports = pG;
  });
  var oE = c((kj, iE) => {
    var hG = rE(),
      nE = Za(),
      gG = Yn(),
      vG = nE ? function (e, t) {
        return nE(e, "toString", {
          configurable: !0,
          enumerable: !1,
          value: hG(t),
          writable: !0
        });
      } : gG;
    iE.exports = vG;
  });
  var sE = c((Gj, aE) => {
    var mG = 800,
      yG = 16,
      EG = Date.now;
    function bG(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = EG(),
          i = yG - (n - r);
        if (r = n, i > 0) {
          if (++t >= mG) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    aE.exports = bG;
  });
  var cE = c((Vj, uE) => {
    var _G = oE(),
      IG = sE(),
      TG = IG(_G);
    uE.exports = TG;
  });
  var fE = c((Uj, lE) => {
    var wG = Yy(),
      xG = eE(),
      OG = cE();
    function AG(e) {
      return OG(xG(e, void 0, wG), e + "");
    }
    lE.exports = AG;
  });
  var hE = c((Bj, pE) => {
    var dE = sa(),
      SG = dE && new dE();
    pE.exports = SG;
  });
  var vE = c((Wj, gE) => {
    function CG() {}
    gE.exports = CG;
  });
  var vs = c((Hj, yE) => {
    var mE = hE(),
      RG = vE(),
      LG = mE ? function (e) {
        return mE.get(e);
      } : RG;
    yE.exports = LG;
  });
  var bE = c((Xj, EE) => {
    var NG = {};
    EE.exports = NG;
  });
  var ms = c((jj, IE) => {
    var _E = bE(),
      PG = Object.prototype,
      qG = PG.hasOwnProperty;
    function FG(e) {
      for (var t = e.name + "", r = _E[t], n = qG.call(_E, t) ? r.length : 0; n--;) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    IE.exports = FG;
  });
  var bi = c((zj, TE) => {
    var MG = gs(),
      DG = vi(),
      kG = 4294967295;
    function Ei(e) {
      this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = kG, this.__views__ = [];
    }
    Ei.prototype = MG(DG.prototype);
    Ei.prototype.constructor = Ei;
    TE.exports = Ei;
  });
  var xE = c((Kj, wE) => {
    function GG(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
      return t;
    }
    wE.exports = GG;
  });
  var AE = c((Yj, OE) => {
    var VG = bi(),
      UG = yi(),
      BG = xE();
    function WG(e) {
      if (e instanceof VG) return e.clone();
      var t = new UG(e.__wrapped__, e.__chain__);
      return t.__actions__ = BG(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
    }
    OE.exports = WG;
  });
  var RE = c(($j, CE) => {
    var HG = bi(),
      SE = yi(),
      XG = vi(),
      jG = xe(),
      zG = pt(),
      KG = AE(),
      YG = Object.prototype,
      $G = YG.hasOwnProperty;
    function _i(e) {
      if (zG(e) && !jG(e) && !(e instanceof HG)) {
        if (e instanceof SE) return e;
        if ($G.call(e, "__wrapped__")) return KG(e);
      }
      return new SE(e);
    }
    _i.prototype = XG.prototype;
    _i.prototype.constructor = _i;
    CE.exports = _i;
  });
  var NE = c((Qj, LE) => {
    var QG = bi(),
      ZG = vs(),
      JG = ms(),
      eV = RE();
    function tV(e) {
      var t = JG(e),
        r = eV[t];
      if (typeof r != "function" || !(t in QG.prototype)) return !1;
      if (e === r) return !0;
      var n = ZG(r);
      return !!n && e === n[0];
    }
    LE.exports = tV;
  });
  var ME = c((Zj, FE) => {
    var PE = yi(),
      rV = fE(),
      nV = vs(),
      ys = ms(),
      iV = xe(),
      qE = NE(),
      oV = "Expected a function",
      aV = 8,
      sV = 32,
      uV = 128,
      cV = 256;
    function lV(e) {
      return rV(function (t) {
        var r = t.length,
          n = r,
          i = PE.prototype.thru;
        for (e && t.reverse(); n--;) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(oV);
          if (i && !a && ys(o) == "wrapper") var a = new PE([], !0);
        }
        for (n = a ? n : r; ++n < r;) {
          o = t[n];
          var s = ys(o),
            u = s == "wrapper" ? nV(o) : void 0;
          u && qE(u[0]) && u[1] == (uV | aV | sV | cV) && !u[4].length && u[9] == 1 ? a = a[ys(u[0])].apply(a, u[3]) : a = o.length == 1 && qE(o) ? a[s]() : a.thru(o);
        }
        return function () {
          var l = arguments,
            _ = l[0];
          if (a && l.length == 1 && iV(_)) return a.plant(_).value();
          for (var p = 0, b = r ? t[p].apply(this, l) : _; ++p < r;) b = t[p].call(this, b);
          return b;
        };
      });
    }
    FE.exports = lV;
  });
  var kE = c((Jj, DE) => {
    var fV = ME(),
      dV = fV();
    DE.exports = dV;
  });
  var VE = c((ez, GE) => {
    function pV(e, t, r) {
      return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e;
    }
    GE.exports = pV;
  });
  var BE = c((tz, UE) => {
    var hV = VE(),
      Es = $n();
    function gV(e, t, r) {
      return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = Es(r), r = r === r ? r : 0), t !== void 0 && (t = Es(t), t = t === t ? t : 0), hV(Es(e), t, r);
    }
    UE.exports = gV;
  });
  var QE,
    ZE,
    JE,
    eb,
    vV,
    mV,
    yV,
    EV,
    bV,
    _V,
    IV,
    TV,
    wV,
    xV,
    OV,
    AV,
    SV,
    CV,
    RV,
    tb,
    rb,
    LV,
    NV,
    PV,
    nb,
    qV,
    FV,
    ib,
    MV,
    bs,
    ob,
    WE,
    HE,
    ab,
    Jr,
    DV,
    lt,
    sb,
    kV,
    We,
    et,
    en,
    ub,
    _s,
    XE,
    Is,
    GV,
    Zr,
    VV,
    UV,
    BV,
    cb,
    jE,
    WV,
    zE,
    HV,
    XV,
    jV,
    KE,
    Ii,
    Ti,
    YE,
    $E,
    lb,
    fb = me(() => {
      "use strict";

      QE = fe(kE()), ZE = fe(Kn()), JE = fe(BE());
      Ue();
      Ts();
      gi();
      eb = fe(kt()), ({
        MOUSE_CLICK: vV,
        MOUSE_SECOND_CLICK: mV,
        MOUSE_DOWN: yV,
        MOUSE_UP: EV,
        MOUSE_OVER: bV,
        MOUSE_OUT: _V,
        DROPDOWN_CLOSE: IV,
        DROPDOWN_OPEN: TV,
        SLIDER_ACTIVE: wV,
        SLIDER_INACTIVE: xV,
        TAB_ACTIVE: OV,
        TAB_INACTIVE: AV,
        NAVBAR_CLOSE: SV,
        NAVBAR_OPEN: CV,
        MOUSE_MOVE: RV,
        PAGE_SCROLL_DOWN: tb,
        SCROLL_INTO_VIEW: rb,
        SCROLL_OUT_OF_VIEW: LV,
        PAGE_SCROLL_UP: NV,
        SCROLLING_IN_VIEW: PV,
        PAGE_FINISH: nb,
        ECOMMERCE_CART_CLOSE: qV,
        ECOMMERCE_CART_OPEN: FV,
        PAGE_START: ib,
        PAGE_SCROLL: MV
      } = Ze), bs = "COMPONENT_ACTIVE", ob = "COMPONENT_INACTIVE", ({
        COLON_DELIMITER: WE
      } = Le), ({
        getNamespacedParameterId: HE
      } = eb.IX2VanillaUtils), ab = e => t => typeof t == "object" && e(t) ? !0 : t, Jr = ab(({
        element: e,
        nativeEvent: t
      }) => e === t.target), DV = ab(({
        element: e,
        nativeEvent: t
      }) => e.contains(t.target)), lt = (0, QE.default)([Jr, DV]), sb = (e, t) => {
        if (t) {
          let {
              ixData: r
            } = e.getState(),
            {
              events: n
            } = r,
            i = n[t];
          if (i && !GV[i.eventTypeId]) return i;
        }
        return null;
      }, kV = ({
        store: e,
        event: t
      }) => {
        let {
            action: r
          } = t,
          {
            autoStopEventId: n
          } = r.config;
        return !!sb(e, n);
      }, We = ({
        store: e,
        event: t,
        element: r,
        eventStateKey: n
      }, i) => {
        let {
            action: o,
            id: a
          } = t,
          {
            actionListId: s,
            autoStopEventId: u
          } = o.config,
          l = sb(e, u);
        return l && gr({
          store: e,
          eventId: u,
          eventTarget: r,
          eventStateKey: u + WE + n.split(WE)[1],
          actionListId: (0, ZE.default)(l, "action.config.actionListId")
        }), gr({
          store: e,
          eventId: a,
          eventTarget: r,
          eventStateKey: n,
          actionListId: s
        }), tn({
          store: e,
          eventId: a,
          eventTarget: r,
          eventStateKey: n,
          actionListId: s
        }), i;
      }, et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n, en = {
        handler: et(lt, We)
      }, ub = {
        ...en,
        types: [bs, ob].join(" ")
      }, _s = [{
        target: window,
        types: "resize orientationchange",
        throttle: !0
      }, {
        target: document,
        types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
        throttle: !0
      }], XE = "mouseover mouseout", Is = {
        types: _s
      }, GV = {
        PAGE_START: ib,
        PAGE_FINISH: nb
      }, Zr = (() => {
        let e = window.pageXOffset !== void 0,
          r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
        return () => ({
          scrollLeft: e ? window.pageXOffset : r.scrollLeft,
          scrollTop: e ? window.pageYOffset : r.scrollTop,
          stiffScrollTop: (0, JE.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
          scrollWidth: r.scrollWidth,
          scrollHeight: r.scrollHeight,
          clientWidth: r.clientWidth,
          clientHeight: r.clientHeight,
          innerWidth: window.innerWidth,
          innerHeight: window.innerHeight
        });
      })(), VV = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), UV = ({
        element: e,
        nativeEvent: t
      }) => {
        let {
            type: r,
            target: n,
            relatedTarget: i
          } = t,
          o = e.contains(n);
        if (r === "mouseover" && o) return !0;
        let a = e.contains(i);
        return !!(r === "mouseout" && o && a);
      }, BV = e => {
        let {
            element: t,
            event: {
              config: r
            }
          } = e,
          {
            clientWidth: n,
            clientHeight: i
          } = Zr(),
          o = r.scrollOffsetValue,
          u = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
        return VV(t.getBoundingClientRect(), {
          left: 0,
          top: u,
          right: n,
          bottom: i - u
        });
      }, cb = e => (t, r) => {
        let {
            type: n
          } = t.nativeEvent,
          i = [bs, ob].indexOf(n) !== -1 ? n === bs : r.isActive,
          o = {
            ...r,
            isActive: i
          };
        return (!r || o.isActive !== r.isActive) && e(t, o) || o;
      }, jE = e => (t, r) => {
        let n = {
          elementHovered: UV(t)
        };
        return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n;
      }, WV = e => (t, r) => {
        let n = {
          ...r,
          elementVisible: BV(t)
        };
        return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n;
      }, zE = e => (t, r = {}) => {
        let {
            stiffScrollTop: n,
            scrollHeight: i,
            innerHeight: o
          } = Zr(),
          {
            event: {
              config: a,
              eventTypeId: s
            }
          } = t,
          {
            scrollOffsetValue: u,
            scrollOffsetUnit: l
          } = a,
          _ = l === "PX",
          p = i - o,
          b = Number((n / p).toFixed(2));
        if (r && r.percentTop === b) return r;
        let v = (_ ? u : o * (u || 0) / 100) / p,
          E,
          I,
          x = 0;
        r && (E = b > r.percentTop, I = r.scrollingDown !== E, x = I ? b : r.anchorTop);
        let w = s === tb ? b >= x + v : b <= x - v,
          N = {
            ...r,
            percentTop: b,
            inBounds: w,
            anchorTop: x,
            scrollingDown: E
          };
        return r && w && (I || N.inBounds !== r.inBounds) && e(t, N) || N;
      }, HV = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, XV = e => (t, r) => {
        let n = {
          finished: document.readyState === "complete"
        };
        return n.finished && !(r && r.finshed) && e(t), n;
      }, jV = e => (t, r) => {
        let n = {
          started: !0
        };
        return r || e(t), n;
      }, KE = e => (t, r = {
        clickCount: 0
      }) => {
        let n = {
          clickCount: r.clickCount % 2 + 1
        };
        return n.clickCount !== r.clickCount && e(t, n) || n;
      }, Ii = (e = !0) => ({
        ...ub,
        handler: et(e ? lt : Jr, cb((t, r) => r.isActive ? en.handler(t, r) : r))
      }), Ti = (e = !0) => ({
        ...ub,
        handler: et(e ? lt : Jr, cb((t, r) => r.isActive ? r : en.handler(t, r)))
      }), YE = {
        ...Is,
        handler: WV((e, t) => {
          let {
              elementVisible: r
            } = t,
            {
              event: n,
              store: i
            } = e,
            {
              ixData: o
            } = i.getState(),
            {
              events: a
            } = o;
          return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === rb === r ? (We(e), {
            ...t,
            triggered: !0
          }) : t;
        })
      }, $E = .05, lb = {
        [wV]: Ii(),
        [xV]: Ti(),
        [TV]: Ii(),
        [IV]: Ti(),
        [CV]: Ii(!1),
        [SV]: Ti(!1),
        [OV]: Ii(),
        [AV]: Ti(),
        [FV]: {
          types: "ecommerce-cart-open",
          handler: et(lt, We)
        },
        [qV]: {
          types: "ecommerce-cart-close",
          handler: et(lt, We)
        },
        [vV]: {
          types: "click",
          handler: et(lt, KE((e, {
            clickCount: t
          }) => {
            kV(e) ? t === 1 && We(e) : We(e);
          }))
        },
        [mV]: {
          types: "click",
          handler: et(lt, KE((e, {
            clickCount: t
          }) => {
            t === 2 && We(e);
          }))
        },
        [yV]: {
          ...en,
          types: "mousedown"
        },
        [EV]: {
          ...en,
          types: "mouseup"
        },
        [bV]: {
          types: XE,
          handler: et(lt, jE((e, t) => {
            t.elementHovered && We(e);
          }))
        },
        [_V]: {
          types: XE,
          handler: et(lt, jE((e, t) => {
            t.elementHovered || We(e);
          }))
        },
        [RV]: {
          types: "mousemove mouseout scroll",
          handler: ({
            store: e,
            element: t,
            eventConfig: r,
            nativeEvent: n,
            eventStateKey: i
          }, o = {
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0
          }) => {
            let {
                basedOn: a,
                selectedAxis: s,
                continuousParameterGroupId: u,
                reverse: l,
                restingState: _ = 0
              } = r,
              {
                clientX: p = o.clientX,
                clientY: b = o.clientY,
                pageX: v = o.pageX,
                pageY: E = o.pageY
              } = n,
              I = s === "X_AXIS",
              x = n.type === "mouseout",
              w = _ / 100,
              N = u,
              C = !1;
            switch (a) {
              case at.VIEWPORT:
                {
                  w = I ? Math.min(p, window.innerWidth) / window.innerWidth : Math.min(b, window.innerHeight) / window.innerHeight;
                  break;
                }
              case at.PAGE:
                {
                  let {
                    scrollLeft: q,
                    scrollTop: F,
                    scrollWidth: P,
                    scrollHeight: j
                  } = Zr();
                  w = I ? Math.min(q + v, P) / P : Math.min(F + E, j) / j;
                  break;
                }
              case at.ELEMENT:
              default:
                {
                  N = HE(i, u);
                  let q = n.type.indexOf("mouse") === 0;
                  if (q && lt({
                    element: t,
                    nativeEvent: n
                  }) !== !0) break;
                  let F = t.getBoundingClientRect(),
                    {
                      left: P,
                      top: j,
                      width: X,
                      height: Q
                    } = F;
                  if (!q && !HV({
                    left: p,
                    top: b
                  }, F)) break;
                  C = !0, w = I ? (p - P) / X : (b - j) / Q;
                  break;
                }
            }
            return x && (w > 1 - $E || w < $E) && (w = Math.round(w)), (a !== at.ELEMENT || C || C !== o.elementHovered) && (w = l ? 1 - w : w, e.dispatch(pr(N, w))), {
              elementHovered: C,
              clientX: p,
              clientY: b,
              pageX: v,
              pageY: E
            };
          }
        },
        [MV]: {
          types: _s,
          handler: ({
            store: e,
            eventConfig: t
          }) => {
            let {
                continuousParameterGroupId: r,
                reverse: n
              } = t,
              {
                scrollTop: i,
                scrollHeight: o,
                clientHeight: a
              } = Zr(),
              s = i / (o - a);
            s = n ? 1 - s : s, e.dispatch(pr(r, s));
          }
        },
        [PV]: {
          types: _s,
          handler: ({
            element: e,
            store: t,
            eventConfig: r,
            eventStateKey: n
          }, i = {
            scrollPercent: 0
          }) => {
            let {
                scrollLeft: o,
                scrollTop: a,
                scrollWidth: s,
                scrollHeight: u,
                clientHeight: l
              } = Zr(),
              {
                basedOn: _,
                selectedAxis: p,
                continuousParameterGroupId: b,
                startsEntering: v,
                startsExiting: E,
                addEndOffset: I,
                addStartOffset: x,
                addOffsetValue: w = 0,
                endOffsetValue: N = 0
              } = r,
              C = p === "X_AXIS";
            if (_ === at.VIEWPORT) {
              let q = C ? o / s : a / u;
              return q !== i.scrollPercent && t.dispatch(pr(b, q)), {
                scrollPercent: q
              };
            } else {
              let q = HE(n, b),
                F = e.getBoundingClientRect(),
                P = (x ? w : 0) / 100,
                j = (I ? N : 0) / 100;
              P = v ? P : 1 - P, j = E ? j : 1 - j;
              let X = F.top + Math.min(F.height * P, l),
                ee = F.top + F.height * j - X,
                re = Math.min(l + ee, u),
                S = Math.min(Math.max(0, l - X), re) / re;
              return S !== i.scrollPercent && t.dispatch(pr(q, S)), {
                scrollPercent: S
              };
            }
          }
        },
        [rb]: YE,
        [LV]: YE,
        [tb]: {
          ...Is,
          handler: zE((e, t) => {
            t.scrollingDown && We(e);
          })
        },
        [NV]: {
          ...Is,
          handler: zE((e, t) => {
            t.scrollingDown || We(e);
          })
        },
        [nb]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: et(Jr, XV(We))
        },
        [ib]: {
          types: "readystatechange IX2_PAGE_UPDATE",
          handler: et(Jr, jV(We))
        }
      };
    });
  var Sb = {};
  ke(Sb, {
    observeRequests: () => dU,
    startActionGroup: () => tn,
    startEngine: () => Ci,
    stopActionGroup: () => gr,
    stopAllActionGroups: () => xb,
    stopEngine: () => Ri
  });
  function dU(e) {
    Gt({
      store: e,
      select: ({
        ixRequest: t
      }) => t.preview,
      onChange: gU
    }), Gt({
      store: e,
      select: ({
        ixRequest: t
      }) => t.playback,
      onChange: vU
    }), Gt({
      store: e,
      select: ({
        ixRequest: t
      }) => t.stop,
      onChange: mU
    }), Gt({
      store: e,
      select: ({
        ixRequest: t
      }) => t.clear,
      onChange: yU
    });
  }
  function pU(e) {
    Gt({
      store: e,
      select: ({
        ixSession: t
      }) => t.mediaQueryKey,
      onChange: () => {
        Ri(e), _b({
          store: e,
          elementApi: Me
        }), Ci({
          store: e,
          allowEvents: !0
        }), Ib();
      }
    });
  }
  function hU(e, t) {
    let r = Gt({
      store: e,
      select: ({
        ixSession: n
      }) => n.tick,
      onChange: n => {
        t(n), r();
      }
    });
  }
  function gU({
    rawData: e,
    defer: t
  }, r) {
    let n = () => {
      Ci({
        store: r,
        rawData: e,
        allowEvents: !0
      }), Ib();
    };
    t ? setTimeout(n, 0) : n();
  }
  function Ib() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function vU(e, t) {
    let {
        actionTypeId: r,
        actionListId: n,
        actionItemId: i,
        eventId: o,
        allowEvents: a,
        immediate: s,
        testManual: u,
        verbose: l = !0
      } = e,
      {
        rawData: _
      } = e;
    if (n && i && _ && s) {
      let p = _.actionLists[n];
      p && (_ = tU({
        actionList: p,
        actionItemId: i,
        rawData: _
      }));
    }
    if (Ci({
      store: t,
      rawData: _,
      allowEvents: a,
      testManual: u
    }), n && r === Ve.GENERAL_START_ACTION || ws(r)) {
      gr({
        store: t,
        actionListId: n
      }), wb({
        store: t,
        actionListId: n,
        eventId: o
      });
      let p = tn({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: l
      });
      l && p && t.dispatch(hr({
        actionListId: n,
        isPlaying: !s
      }));
    }
  }
  function mU({
    actionListId: e
  }, t) {
    e ? gr({
      store: t,
      actionListId: e
    }) : xb({
      store: t
    }), Ri(t);
  }
  function yU(e, t) {
    Ri(t), _b({
      store: t,
      elementApi: Me
    });
  }
  function Ci({
    store: e,
    rawData: t,
    allowEvents: r,
    testManual: n
  }) {
    let {
      ixSession: i
    } = e.getState();
    t && e.dispatch(ts(t)), i.active || (e.dispatch(rs({
      hasBoundaryNodes: !!document.querySelector(xi),
      reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
    })), r && (wU(e), EU(), e.getState().ixSession.hasDefinedMediaQueries && pU(e)), e.dispatch(ns()), bU(e, n));
  }
  function EU() {
    let {
      documentElement: e
    } = document;
    e.className.indexOf(db) === -1 && (e.className += ` ${db}`);
  }
  function bU(e, t) {
    let r = n => {
      let {
        ixSession: i,
        ixParameters: o
      } = e.getState();
      i.active && (e.dispatch(pi(n, o)), t ? hU(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function Ri(e) {
    let {
      ixSession: t
    } = e.getState();
    if (t.active) {
      let {
        eventListeners: r
      } = t;
      r.forEach(_U), oU(), e.dispatch(is());
    }
  }
  function _U({
    target: e,
    listenerParams: t
  }) {
    e.removeEventListener.apply(e, t);
  }
  function IU({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u
  }) {
    let {
        ixData: l,
        ixSession: _
      } = e.getState(),
      {
        events: p
      } = l,
      b = p[n],
      {
        eventTypeId: v
      } = b,
      E = {},
      I = {},
      x = [],
      {
        continuousActionGroups: w
      } = a,
      {
        id: N
      } = a;
    rU(v, i) && (N = nU(t, N));
    let C = _.hasBoundaryNodes && r ? Qr(r, xi) : null;
    w.forEach(q => {
      let {
        keyframe: F,
        actionItems: P
      } = q;
      P.forEach(j => {
        let {
            actionTypeId: X
          } = j,
          {
            target: Q
          } = j.config;
        if (!Q) return;
        let ee = Q.boundaryMode ? C : null,
          re = aU(Q) + xs + X;
        if (I[re] = TU(I[re], F, j), !E[re]) {
          E[re] = !0;
          let {
            config: k
          } = j;
          Oi({
            config: k,
            event: b,
            eventTarget: r,
            elementRoot: ee,
            elementApi: Me
          }).forEach(S => {
            x.push({
              element: S,
              key: re
            });
          });
        }
      });
    }), x.forEach(({
      element: q,
      key: F
    }) => {
      let P = I[F],
        j = (0, mt.default)(P, "[0].actionItems[0]", {}),
        {
          actionTypeId: X
        } = j,
        Q = Si(X) ? As(X)(q, j) : null,
        ee = Os({
          element: q,
          actionItem: j,
          elementApi: Me
        }, Q);
      Ss({
        store: e,
        element: q,
        eventId: n,
        actionListId: o,
        actionItem: j,
        destination: ee,
        continuous: !0,
        parameterId: N,
        actionGroups: P,
        smoothing: s,
        restingValue: u,
        pluginInstance: Q
      });
    });
  }
  function TU(e = [], t, r) {
    let n = [...e],
      i;
    return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
      keyframe: t,
      actionItems: []
    })), n[i].actionItems.push(r), n;
  }
  function wU(e) {
    let {
        ixData: t
      } = e.getState(),
      {
        eventTypeMap: r
      } = t;
    Tb(e), (0, vr.default)(r, (i, o) => {
      let a = lb[o];
      if (!a) {
        console.warn(`IX2 event type not configured: ${o}`);
        return;
      }
      RU({
        logic: a,
        store: e,
        events: i
      });
    });
    let {
      ixSession: n
    } = e.getState();
    n.eventListeners.length && OU(e);
  }
  function OU(e) {
    let t = () => {
      Tb(e);
    };
    xU.forEach(r => {
      window.addEventListener(r, t), e.dispatch(di(window, [r, t]));
    }), t();
  }
  function Tb(e) {
    let {
        ixSession: t,
        ixData: r
      } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let {
        mediaQueries: i
      } = r;
      e.dispatch(cs({
        width: n,
        mediaQueries: i
      }));
    }
  }
  function RU({
    logic: e,
    store: t,
    events: r
  }) {
    LU(r);
    let {
        types: n,
        handler: i
      } = e,
      {
        ixData: o
      } = t.getState(),
      {
        actionLists: a
      } = o,
      s = AU(r, CU);
    if (!(0, gb.default)(s)) return;
    (0, vr.default)(s, (p, b) => {
      let v = r[b],
        {
          action: E,
          id: I,
          mediaQueries: x = o.mediaQueryKeys
        } = v,
        {
          actionListId: w
        } = E.config;
      sU(x, o.mediaQueryKeys) || t.dispatch(ls()), E.actionTypeId === Ve.GENERAL_CONTINUOUS_ACTION && (Array.isArray(v.config) ? v.config : [v.config]).forEach(C => {
        let {
            continuousParameterGroupId: q
          } = C,
          F = (0, mt.default)(a, `${w}.continuousParameterGroups`, []),
          P = (0, hb.default)(F, ({
            id: Q
          }) => Q === q),
          j = (C.smoothing || 0) / 100,
          X = (C.restingState || 0) / 100;
        P && p.forEach((Q, ee) => {
          let re = I + xs + ee;
          IU({
            store: t,
            eventStateKey: re,
            eventTarget: Q,
            eventId: I,
            eventConfig: C,
            actionListId: w,
            parameterGroup: P,
            smoothing: j,
            restingValue: X
          });
        });
      }), (E.actionTypeId === Ve.GENERAL_START_ACTION || ws(E.actionTypeId)) && wb({
        store: t,
        actionListId: w,
        eventId: I
      });
    });
    let u = p => {
        let {
          ixSession: b
        } = t.getState();
        SU(s, (v, E, I) => {
          let x = r[E],
            w = b.eventState[I],
            {
              action: N,
              mediaQueries: C = o.mediaQueryKeys
            } = x;
          if (!Ai(C, b.mediaQueryKey)) return;
          let q = (F = {}) => {
            let P = i({
              store: t,
              element: v,
              event: x,
              eventConfig: F,
              nativeEvent: p,
              eventStateKey: I
            }, w);
            uU(P, w) || t.dispatch(os(I, P));
          };
          N.actionTypeId === Ve.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(x.config) ? x.config : [x.config]).forEach(q) : q();
        });
      },
      l = (0, Eb.default)(u, fU),
      _ = ({
        target: p = document,
        types: b,
        throttle: v
      }) => {
        b.split(" ").filter(Boolean).forEach(E => {
          let I = v ? l : u;
          p.addEventListener(E, I), t.dispatch(di(p, [E, I]));
        });
      };
    Array.isArray(n) ? n.forEach(_) : typeof n == "string" && _(e);
  }
  function LU(e) {
    if (!lU) return;
    let t = {},
      r = "";
    for (let n in e) {
      let {
          eventTypeId: i,
          target: o
        } = e[n],
        a = ds(o);
      t[a] || (i === Ze.MOUSE_CLICK || i === Ze.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}");
    }
    if (r) {
      let n = document.createElement("style");
      n.textContent = r, document.body.appendChild(n);
    }
  }
  function wb({
    store: e,
    actionListId: t,
    eventId: r
  }) {
    let {
        ixData: n,
        ixSession: i
      } = e.getState(),
      {
        actionLists: o,
        events: a
      } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let l = (0, mt.default)(u, "actionItemGroups[0].actionItems", []),
        _ = (0, mt.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Ai(_, i.mediaQueryKey)) return;
      l.forEach(p => {
        let {
            config: b,
            actionTypeId: v
          } = p,
          E = b?.target?.useEventTarget === !0 && b?.target?.objectId == null ? {
            target: s.target,
            targets: s.targets
          } : b,
          I = Oi({
            config: E,
            event: s,
            elementApi: Me
          }),
          x = Si(v);
        I.forEach(w => {
          let N = x ? As(v)(w, p) : null;
          Ss({
            destination: Os({
              element: w,
              actionItem: p,
              elementApi: Me
            }, N),
            immediate: !0,
            store: e,
            element: w,
            eventId: r,
            actionItem: p,
            actionListId: t,
            pluginInstance: N
          });
        });
      });
    }
  }
  function xb({
    store: e
  }) {
    let {
      ixInstances: t
    } = e.getState();
    (0, vr.default)(t, r => {
      if (!r.continuous) {
        let {
          actionListId: n,
          verbose: i
        } = r;
        Cs(r, e), i && e.dispatch(hr({
          actionListId: n,
          isPlaying: !1
        }));
      }
    });
  }
  function gr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i
  }) {
    let {
        ixInstances: o,
        ixSession: a
      } = e.getState(),
      s = a.hasBoundaryNodes && r ? Qr(r, xi) : null;
    (0, vr.default)(o, u => {
      let l = (0, mt.default)(u, "actionItem.config.target.boundaryMode"),
        _ = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && _) {
        if (s && l && !ps(s, u.element)) return;
        Cs(u, e), u.verbose && e.dispatch(hr({
          actionListId: i,
          isPlaying: !1
        }));
      }
    });
  }
  function tn({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s
  }) {
    let {
        ixData: u,
        ixSession: l
      } = e.getState(),
      {
        events: _
      } = u,
      p = _[t] || {},
      {
        mediaQueries: b = u.mediaQueryKeys
      } = p,
      v = (0, mt.default)(u, `actionLists.${i}`, {}),
      {
        actionItemGroups: E,
        useFirstGroupAsInitialState: I
      } = v;
    if (!E || !E.length) return !1;
    o >= E.length && (0, mt.default)(p, "config.loop") && (o = 0), o === 0 && I && o++;
    let w = (o === 0 || o === 1 && I) && ws(p.action?.actionTypeId) ? p.config.delay : void 0,
      N = (0, mt.default)(E, [o, "actionItems"], []);
    if (!N.length || !Ai(b, l.mediaQueryKey)) return !1;
    let C = l.hasBoundaryNodes && r ? Qr(r, xi) : null,
      q = ZV(N),
      F = !1;
    return N.forEach((P, j) => {
      let {
          config: X,
          actionTypeId: Q
        } = P,
        ee = Si(Q),
        {
          target: re
        } = X;
      if (!re) return;
      let k = re.boundaryMode ? C : null;
      Oi({
        config: X,
        event: p,
        eventTarget: r,
        elementRoot: k,
        elementApi: Me
      }).forEach((M, W) => {
        let G = ee ? As(Q)(M, P) : null,
          te = ee ? cU(Q)(M, P) : null;
        F = !0;
        let ne = q === j && W === 0,
          D = JV({
            element: M,
            actionItem: P
          }),
          U = Os({
            element: M,
            actionItem: P,
            elementApi: Me
          }, G);
        Ss({
          store: e,
          element: M,
          actionItem: P,
          eventId: t,
          eventTarget: r,
          eventStateKey: n,
          actionListId: i,
          groupIndex: o,
          isCarrier: ne,
          computedStyle: D,
          destination: U,
          immediate: a,
          verbose: s,
          pluginInstance: G,
          pluginDuration: te,
          instanceDelay: w
        });
      });
    }), F;
  }
  function Ss(e) {
    let {
        store: t,
        computedStyle: r,
        ...n
      } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: l,
        eventId: _
      } = n,
      p = !u,
      b = $V(),
      {
        ixElements: v,
        ixSession: E,
        ixData: I
      } = t.getState(),
      x = YV(v, i),
      {
        refState: w
      } = v[x] || {},
      N = hs(i),
      C = E.reducedMotion && Ko[o.actionTypeId],
      q;
    if (C && u) switch (I.events[_]?.eventTypeId) {
      case Ze.MOUSE_MOVE:
      case Ze.MOUSE_MOVE_IN_VIEWPORT:
        q = l;
        break;
      default:
        q = .5;
        break;
    }
    let F = eU(i, w, r, o, Me, s);
    if (t.dispatch(as({
      instanceId: b,
      elementId: x,
      origin: F,
      refType: N,
      skipMotion: C,
      skipToValue: q,
      ...n
    })), Ob(document.body, "ix2-animation-started", b), a) {
      NU(t, b);
      return;
    }
    Gt({
      store: t,
      select: ({
        ixInstances: P
      }) => P[b],
      onChange: Ab
    }), p && t.dispatch(hi(b, E.tick));
  }
  function Cs(e, t) {
    Ob(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState()
    });
    let {
        elementId: r,
        actionItem: n
      } = e,
      {
        ixElements: i
      } = t.getState(),
      {
        ref: o,
        refType: a
      } = i[r] || {};
    a === bb && iU(o, n, Me), t.dispatch(ss(e.id));
  }
  function Ob(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function NU(e, t) {
    let {
      ixParameters: r
    } = e.getState();
    e.dispatch(hi(t, 0)), e.dispatch(pi(performance.now(), r));
    let {
      ixInstances: n
    } = e.getState();
    Ab(n[t], e);
  }
  function Ab(e, t) {
    let {
        active: r,
        continuous: n,
        complete: i,
        elementId: o,
        actionItem: a,
        actionTypeId: s,
        renderType: u,
        current: l,
        groupIndex: _,
        eventId: p,
        eventTarget: b,
        eventStateKey: v,
        actionListId: E,
        isCarrier: I,
        styleProp: x,
        verbose: w,
        pluginInstance: N
      } = e,
      {
        ixData: C,
        ixSession: q
      } = t.getState(),
      {
        events: F
      } = C,
      P = F[p] || {},
      {
        mediaQueries: j = C.mediaQueryKeys
      } = P;
    if (Ai(j, q.mediaQueryKey) && (n || r || i)) {
      if (l || u === KV && i) {
        t.dispatch(us(o, s, l, a));
        let {
            ixElements: X
          } = t.getState(),
          {
            ref: Q,
            refType: ee,
            refState: re
          } = X[o] || {},
          k = re && re[s];
        (ee === bb || Si(s)) && QV(Q, re, k, p, a, x, Me, u, N);
      }
      if (i) {
        if (I) {
          let X = tn({
            store: t,
            eventId: p,
            eventTarget: b,
            eventStateKey: v,
            actionListId: E,
            groupIndex: _ + 1,
            verbose: w
          });
          w && !X && t.dispatch(hr({
            actionListId: E,
            isPlaying: !1
          }));
        }
        Cs(e, t);
      }
    }
  }
  var hb,
    mt,
    gb,
    vb,
    mb,
    yb,
    vr,
    Eb,
    wi,
    zV,
    ws,
    xs,
    xi,
    bb,
    KV,
    db,
    Oi,
    YV,
    Os,
    Gt,
    $V,
    QV,
    _b,
    ZV,
    JV,
    eU,
    tU,
    rU,
    nU,
    Ai,
    iU,
    oU,
    aU,
    sU,
    uU,
    Si,
    As,
    cU,
    pb,
    lU,
    fU,
    xU,
    AU,
    SU,
    CU,
    Ts = me(() => {
      "use strict";

      hb = fe(Ta()), mt = fe(Kn()), gb = fe(Um()), vb = fe(py()), mb = fe(gy()), yb = fe(my()), vr = fe(Ty()), Eb = fe(Ry());
      Ue();
      wi = fe(kt());
      gi();
      My();
      fb();
      zV = Object.keys(On), ws = e => zV.includes(e), ({
        COLON_DELIMITER: xs,
        BOUNDARY_SELECTOR: xi,
        HTML_ELEMENT: bb,
        RENDER_GENERAL: KV,
        W_MOD_IX: db
      } = Le), ({
        getAffectedElements: Oi,
        getElementId: YV,
        getDestinationValues: Os,
        observeStore: Gt,
        getInstanceId: $V,
        renderHTMLElement: QV,
        clearAllStyles: _b,
        getMaxDurationItemIndex: ZV,
        getComputedStyle: JV,
        getInstanceOrigin: eU,
        reduceListToGroup: tU,
        shouldNamespaceEventParameter: rU,
        getNamespacedParameterId: nU,
        shouldAllowMediaQuery: Ai,
        cleanupHTMLElement: iU,
        clearObjectCache: oU,
        stringifyTarget: aU,
        mediaQueriesEqual: sU,
        shallowEqual: uU
      } = wi.IX2VanillaUtils), ({
        isPluginType: Si,
        createPluginInstance: As,
        getPluginDuration: cU
      } = wi.IX2VanillaPlugins), pb = navigator.userAgent, lU = pb.match(/iPad/i) || pb.match(/iPhone/), fU = 12;
      xU = ["resize", "orientationchange"];
      AU = (e, t) => (0, vb.default)((0, yb.default)(e, t), mb.default), SU = (e, t) => {
        (0, vr.default)(e, (r, n) => {
          r.forEach((i, o) => {
            let a = n + xs + o;
            t(i, n, a);
          });
        });
      }, CU = e => {
        let t = {
          target: e.target,
          targets: e.targets
        };
        return Oi({
          config: t,
          elementApi: Me
        });
      };
    });
  var Rb = c(yt => {
    "use strict";

    var PU = pn().default,
      qU = fu().default;
    Object.defineProperty(yt, "__esModule", {
      value: !0
    });
    yt.actions = void 0;
    yt.destroy = Cb;
    yt.init = GU;
    yt.setEnv = kU;
    yt.store = void 0;
    $l();
    var FU = Xo(),
      MU = qU((Im(), rt(_m))),
      Rs = (Ts(), rt(Sb)),
      DU = PU((gi(), rt(Ny)));
    yt.actions = DU;
    var Ls = yt.store = (0, FU.createStore)(MU.default);
    function kU(e) {
      e() && (0, Rs.observeRequests)(Ls);
    }
    function GU(e) {
      Cb(), (0, Rs.startEngine)({
        store: Ls,
        rawData: e,
        allowEvents: !0
      });
    }
    function Cb() {
      (0, Rs.stopEngine)(Ls);
    }
  });
  var qb = c((lz, Pb) => {
    "use strict";

    var Lb = Ge(),
      Nb = Rb();
    Nb.setEnv(Lb.env);
    Lb.define("ix2", Pb.exports = function () {
      return Nb;
    });
  });
  var Mb = c((fz, Fb) => {
    "use strict";

    var mr = Ge();
    mr.define("links", Fb.exports = function (e, t) {
      var r = {},
        n = e(window),
        i,
        o = mr.env(),
        a = window.location,
        s = document.createElement("a"),
        u = "w--current",
        l = /index\.(html|php)$/,
        _ = /\/$/,
        p,
        b;
      r.ready = r.design = r.preview = v;
      function v() {
        i = o && mr.env("design"), b = mr.env("slug") || a.pathname || "", mr.scroll.off(I), p = [];
        for (var w = document.links, N = 0; N < w.length; ++N) E(w[N]);
        p.length && (mr.scroll.on(I), I());
      }
      function E(w) {
        if (!w.getAttribute("hreflang")) {
          var N = i && w.getAttribute("href-disabled") || w.getAttribute("href");
          if (s.href = N, !(N.indexOf(":") >= 0)) {
            var C = e(w);
            if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
              if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
              var q = e(s.hash);
              q.length && p.push({
                link: C,
                sec: q,
                active: !1
              });
              return;
            }
            if (!(N === "#" || N === "")) {
              var F = s.href === a.href || N === b || l.test(N) && _.test(b);
              x(C, u, F);
            }
          }
        }
      }
      function I() {
        var w = n.scrollTop(),
          N = n.height();
        t.each(p, function (C) {
          if (!C.link.attr("hreflang")) {
            var q = C.link,
              F = C.sec,
              P = F.offset().top,
              j = F.outerHeight(),
              X = N * .5,
              Q = F.is(":visible") && P + j - X >= w && P + X <= w + N;
            C.active !== Q && (C.active = Q, x(q, u, Q));
          }
        });
      }
      function x(w, N, C) {
        var q = w.hasClass(N);
        C && q || !C && !q || (C ? w.addClass(N) : w.removeClass(N));
      }
      return r;
    });
  });
  var kb = c((dz, Db) => {
    "use strict";

    var Li = Ge();
    Li.define("scroll", Db.exports = function (e) {
      var t = {
          WF_CLICK_EMPTY: "click.wf-empty-link",
          WF_CLICK_SCROLL: "click.wf-scroll"
        },
        r = window.location,
        n = E() ? null : window.history,
        i = e(window),
        o = e(document),
        a = e(document.body),
        s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (k) {
          window.setTimeout(k, 15);
        },
        u = Li.env("editor") ? ".w-editor-body" : "body",
        l = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])",
        _ = 'a[href="#"]',
        p = 'a[href*="#"]:not(.w-tab-link):not(' + _ + ")",
        b = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
        v = document.createElement("style");
      v.appendChild(document.createTextNode(b));
      function E() {
        try {
          return !!window.frameElement;
        } catch {
          return !0;
        }
      }
      var I = /^#[a-zA-Z0-9][\w:.-]*$/;
      function x(k) {
        return I.test(k.hash) && k.host + k.pathname === r.host + r.pathname;
      }
      let w = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
      function N() {
        return document.body.getAttribute("data-wf-scroll-motion") === "none" || w.matches;
      }
      function C(k, S) {
        var M;
        switch (S) {
          case "add":
            M = k.attr("tabindex"), M ? k.attr("data-wf-tabindex-swap", M) : k.attr("tabindex", "-1");
            break;
          case "remove":
            M = k.attr("data-wf-tabindex-swap"), M ? (k.attr("tabindex", M), k.removeAttr("data-wf-tabindex-swap")) : k.removeAttr("tabindex");
            break;
        }
        k.toggleClass("wf-force-outline-none", S === "add");
      }
      function q(k) {
        var S = k.currentTarget;
        if (!(Li.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(S.className))) {
          var M = x(S) ? S.hash : "";
          if (M !== "") {
            var W = e(M);
            W.length && (k && (k.preventDefault(), k.stopPropagation()), F(M, k), window.setTimeout(function () {
              P(W, function () {
                C(W, "add"), W.get(0).focus({
                  preventScroll: !0
                }), C(W, "remove");
              });
            }, k ? 0 : 300));
          }
        }
      }
      function F(k) {
        if (r.hash !== k && n && n.pushState && !(Li.env.chrome && r.protocol === "file:")) {
          var S = n.state && n.state.hash;
          S !== k && n.pushState({
            hash: k
          }, "", k);
        }
      }
      function P(k, S) {
        var M = i.scrollTop(),
          W = j(k);
        if (M !== W) {
          var G = X(k, M, W),
            te = Date.now(),
            ne = function () {
              var D = Date.now() - te;
              window.scroll(0, Q(M, W, D, G)), D <= G ? s(ne) : typeof S == "function" && S();
            };
          s(ne);
        }
      }
      function j(k) {
        var S = e(l),
          M = S.css("position") === "fixed" ? S.outerHeight() : 0,
          W = k.offset().top - M;
        if (k.data("scroll") === "mid") {
          var G = i.height() - M,
            te = k.outerHeight();
          te < G && (W -= Math.round((G - te) / 2));
        }
        return W;
      }
      function X(k, S, M) {
        if (N()) return 0;
        var W = 1;
        return a.add(k).each(function (G, te) {
          var ne = parseFloat(te.getAttribute("data-scroll-time"));
          !isNaN(ne) && ne >= 0 && (W = ne);
        }), (472.143 * Math.log(Math.abs(S - M) + 125) - 2e3) * W;
      }
      function Q(k, S, M, W) {
        return M > W ? S : k + (S - k) * ee(M / W);
      }
      function ee(k) {
        return k < .5 ? 4 * k * k * k : (k - 1) * (2 * k - 2) * (2 * k - 2) + 1;
      }
      function re() {
        var {
          WF_CLICK_EMPTY: k,
          WF_CLICK_SCROLL: S
        } = t;
        o.on(S, p, q), o.on(k, _, function (M) {
          M.preventDefault();
        }), document.head.insertBefore(v, document.head.firstChild);
      }
      return {
        ready: re
      };
    });
  });
  var Vb = c((pz, Gb) => {
    "use strict";

    var VU = Ge();
    VU.define("touch", Gb.exports = function (e) {
      var t = {},
        r = window.getSelection;
      e.event.special.tap = {
        bindType: "click",
        delegateType: "click"
      }, t.init = function (o) {
        return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null;
      };
      function n(o) {
        var a = !1,
          s = !1,
          u = Math.min(Math.round(window.innerWidth * .04), 40),
          l,
          _;
        o.addEventListener("touchstart", p, !1), o.addEventListener("touchmove", b, !1), o.addEventListener("touchend", v, !1), o.addEventListener("touchcancel", E, !1), o.addEventListener("mousedown", p, !1), o.addEventListener("mousemove", b, !1), o.addEventListener("mouseup", v, !1), o.addEventListener("mouseout", E, !1);
        function p(x) {
          var w = x.touches;
          w && w.length > 1 || (a = !0, w ? (s = !0, l = w[0].clientX) : l = x.clientX, _ = l);
        }
        function b(x) {
          if (a) {
            if (s && x.type === "mousemove") {
              x.preventDefault(), x.stopPropagation();
              return;
            }
            var w = x.touches,
              N = w ? w[0].clientX : x.clientX,
              C = N - _;
            _ = N, Math.abs(C) > u && r && String(r()) === "" && (i("swipe", x, {
              direction: C > 0 ? "right" : "left"
            }), E());
          }
        }
        function v(x) {
          if (a && (a = !1, s && x.type === "mouseup")) {
            x.preventDefault(), x.stopPropagation(), s = !1;
            return;
          }
        }
        function E() {
          a = !1;
        }
        function I() {
          o.removeEventListener("touchstart", p, !1), o.removeEventListener("touchmove", b, !1), o.removeEventListener("touchend", v, !1), o.removeEventListener("touchcancel", E, !1), o.removeEventListener("mousedown", p, !1), o.removeEventListener("mousemove", b, !1), o.removeEventListener("mouseup", v, !1), o.removeEventListener("mouseout", E, !1), o = null;
        }
        this.destroy = I;
      }
      function i(o, a, s) {
        var u = e.Event(o, {
          originalEvent: a
        });
        e(a.target).trigger(u, s);
      }
      return t.instance = t.init(document), t;
    });
  });
  var Ub = c(Ns => {
    "use strict";

    Object.defineProperty(Ns, "__esModule", {
      value: !0
    });
    Ns.default = UU;
    function UU(e, t, r, n, i, o, a, s, u, l, _, p, b) {
      return function (v) {
        e(v);
        var E = v.form,
          I = {
            name: E.attr("data-name") || E.attr("name") || "Untitled Form",
            pageId: E.attr("data-wf-page-id") || "",
            elementId: E.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(E.html()),
            trackingCookies: n()
          };
        let x = E.attr("data-wf-flow");
        x && (I.wfFlow = x), i(v);
        var w = o(E, I.fields);
        if (w) return a(w);
        if (I.fileUploads = s(E), u(v), !l) {
          _(v);
          return;
        }
        p.ajax({
          url: b,
          type: "POST",
          data: I,
          dataType: "json",
          crossDomain: !0
        }).done(function (N) {
          N && N.code === 200 && (v.success = !0), _(v);
        }).fail(function () {
          _(v);
        });
      };
    }
  });
  var Wb = c((gz, Bb) => {
    "use strict";

    var Ni = Ge();
    Ni.define("forms", Bb.exports = function (e, t) {
      var r = {},
        n = e(document),
        i,
        o = window.location,
        a = window.XDomainRequest && !window.atob,
        s = ".w-form",
        u,
        l = /e(-)?mail/i,
        _ = /^\S+@\S+$/,
        p = window.alert,
        b = Ni.env(),
        v,
        E,
        I,
        x = /list-manage[1-9]?.com/i,
        w = t.debounce(function () {
          p("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.");
        }, 100);
      r.ready = r.design = r.preview = function () {
        N(), !b && !v && q();
      };
      function N() {
        u = e("html").attr("data-wf-site"), E = "https://webflow.com/api/v1/form/" + u, a && E.indexOf("https://webflow.com") >= 0 && (E = E.replace("https://webflow.com", "https://formdata.webflow.com")), I = `${E}/signFile`, i = e(s + " form"), i.length && i.each(C);
      }
      function C(D, U) {
        var h = e(U),
          d = e.data(U, s);
        d || (d = e.data(U, s, {
          form: h
        })), F(d);
        var g = h.closest("div.w-form");
        d.done = g.find("> .w-form-done"), d.fail = g.find("> .w-form-fail"), d.fileUploads = g.find(".w-file-upload"), d.fileUploads.each(function (K) {
          G(K, d);
        });
        var m = d.form.attr("aria-label") || d.form.attr("data-name") || "Form";
        d.done.attr("aria-label") || d.form.attr("aria-label", m), d.done.attr("tabindex", "-1"), d.done.attr("role", "region"), d.done.attr("aria-label") || d.done.attr("aria-label", m + " success"), d.fail.attr("tabindex", "-1"), d.fail.attr("role", "region"), d.fail.attr("aria-label") || d.fail.attr("aria-label", m + " failure");
        var B = d.action = h.attr("action");
        if (d.handler = null, d.redirect = h.attr("data-redirect"), x.test(B)) {
          d.handler = S;
          return;
        }
        if (!B) {
          if (u) {
            d.handler = (() => {
              let K = Ub().default;
              return K(F, o, Ni, ee, W, j, p, X, P, u, M, e, E);
            })();
            return;
          }
          w();
        }
      }
      function q() {
        v = !0, n.on("submit", s + " form", function (K) {
          var Y = e.data(this, s);
          Y.handler && (Y.evt = K, Y.handler(Y));
        });
        let D = ".w-checkbox-input",
          U = ".w-radio-input",
          h = "w--redirected-checked",
          d = "w--redirected-focus",
          g = "w--redirected-focus-visible",
          m = ":focus-visible, [data-wf-focus-visible]",
          B = [["checkbox", D], ["radio", U]];
        n.on("change", s + ' form input[type="checkbox"]:not(' + D + ")", K => {
          e(K.target).siblings(D).toggleClass(h);
        }), n.on("change", s + ' form input[type="radio"]', K => {
          e(`input[name="${K.target.name}"]:not(${D})`).map((Z, de) => e(de).siblings(U).removeClass(h));
          let Y = e(K.target);
          Y.hasClass("w-radio-input") || Y.siblings(U).addClass(h);
        }), B.forEach(([K, Y]) => {
          n.on("focus", s + ` form input[type="${K}"]:not(` + Y + ")", Z => {
            e(Z.target).siblings(Y).addClass(d), e(Z.target).filter(m).siblings(Y).addClass(g);
          }), n.on("blur", s + ` form input[type="${K}"]:not(` + Y + ")", Z => {
            e(Z.target).siblings(Y).removeClass(`${d} ${g}`);
          });
        });
      }
      function F(D) {
        var U = D.btn = D.form.find(':input[type="submit"]');
        D.wait = D.btn.attr("data-wait") || null, D.success = !1, U.prop("disabled", !1), D.label && U.val(D.label);
      }
      function P(D) {
        var U = D.btn,
          h = D.wait;
        U.prop("disabled", !0), h && (D.label = U.val(), U.val(h));
      }
      function j(D, U) {
        var h = null;
        return U = U || {}, D.find(':input:not([type="submit"]):not([type="file"])').each(function (d, g) {
          var m = e(g),
            B = m.attr("type"),
            K = m.attr("data-name") || m.attr("name") || "Field " + (d + 1);
          K = encodeURIComponent(K);
          var Y = m.val();
          if (B === "checkbox") Y = m.is(":checked");else if (B === "radio") {
            if (U[K] === null || typeof U[K] == "string") return;
            Y = D.find('input[name="' + m.attr("name") + '"]:checked').val() || null;
          }
          typeof Y == "string" && (Y = e.trim(Y)), U[K] = Y, h = h || re(m, B, K, Y);
        }), h;
      }
      function X(D) {
        var U = {};
        return D.find(':input[type="file"]').each(function (h, d) {
          var g = e(d),
            m = g.attr("data-name") || g.attr("name") || "File " + (h + 1),
            B = g.attr("data-value");
          typeof B == "string" && (B = e.trim(B)), U[m] = B;
        }), U;
      }
      let Q = {
        _mkto_trk: "marketo"
      };
      function ee() {
        return document.cookie.split("; ").reduce(function (U, h) {
          let d = h.split("="),
            g = d[0];
          if (g in Q) {
            let m = Q[g],
              B = d.slice(1).join("=");
            U[m] = B;
          }
          return U;
        }, {});
      }
      function re(D, U, h, d) {
        var g = null;
        return U === "password" ? g = "Passwords cannot be submitted." : D.attr("required") ? d ? l.test(D.attr("type")) && (_.test(d) || (g = "Please enter a valid email address for: " + h)) : g = "Please fill out the required field: " + h : h === "g-recaptcha-response" && !d && (g = "Please confirm you\u2019re not a robot."), g;
      }
      function k(D) {
        W(D), M(D);
      }
      function S(D) {
        F(D);
        var U = D.form,
          h = {};
        if (/^https/.test(o.href) && !/^https/.test(D.action)) {
          U.attr("method", "post");
          return;
        }
        W(D);
        var d = j(U, h);
        if (d) return p(d);
        P(D);
        var g;
        t.each(h, function (Y, Z) {
          l.test(Z) && (h.EMAIL = Y), /^((full[ _-]?)?name)$/i.test(Z) && (g = Y), /^(first[ _-]?name)$/i.test(Z) && (h.FNAME = Y), /^(last[ _-]?name)$/i.test(Z) && (h.LNAME = Y);
        }), g && !h.FNAME && (g = g.split(" "), h.FNAME = g[0], h.LNAME = h.LNAME || g[1]);
        var m = D.action.replace("/post?", "/post-json?") + "&c=?",
          B = m.indexOf("u=") + 2;
        B = m.substring(B, m.indexOf("&", B));
        var K = m.indexOf("id=") + 3;
        K = m.substring(K, m.indexOf("&", K)), h["b_" + B + "_" + K] = "", e.ajax({
          url: m,
          data: h,
          dataType: "jsonp"
        }).done(function (Y) {
          D.success = Y.result === "success" || /already/.test(Y.msg), D.success || console.info("MailChimp error: " + Y.msg), M(D);
        }).fail(function () {
          M(D);
        });
      }
      function M(D) {
        var U = D.form,
          h = D.redirect,
          d = D.success;
        if (d && h) {
          Ni.location(h);
          return;
        }
        D.done.toggle(d), D.fail.toggle(!d), d ? D.done.focus() : D.fail.focus(), U.toggle(!d), F(D);
      }
      function W(D) {
        D.evt && D.evt.preventDefault(), D.evt = null;
      }
      function G(D, U) {
        if (!U.fileUploads || !U.fileUploads[D]) return;
        var h,
          d = e(U.fileUploads[D]),
          g = d.find("> .w-file-upload-default"),
          m = d.find("> .w-file-upload-uploading"),
          B = d.find("> .w-file-upload-success"),
          K = d.find("> .w-file-upload-error"),
          Y = g.find(".w-file-upload-input"),
          Z = g.find(".w-file-upload-label"),
          de = Z.children(),
          oe = K.find(".w-file-upload-error-msg"),
          y = B.find(".w-file-upload-file"),
          V = B.find(".w-file-remove-link"),
          $ = y.find(".w-file-upload-file-name"),
          H = oe.attr("data-w-size-error"),
          ce = oe.attr("data-w-type-error"),
          Te = oe.attr("data-w-generic-error");
        if (b || Z.on("click keydown", function (O) {
          O.type === "keydown" && O.which !== 13 && O.which !== 32 || (O.preventDefault(), Y.click());
        }), Z.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"), V.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"), b) Y.on("click", function (O) {
          O.preventDefault();
        }), Z.on("click", function (O) {
          O.preventDefault();
        }), de.on("click", function (O) {
          O.preventDefault();
        });else {
          V.on("click keydown", function (O) {
            if (O.type === "keydown") {
              if (O.which !== 13 && O.which !== 32) return;
              O.preventDefault();
            }
            Y.removeAttr("data-value"), Y.val(""), $.html(""), g.toggle(!0), B.toggle(!1), Z.focus();
          }), Y.on("change", function (O) {
            h = O.target && O.target.files && O.target.files[0], h && (g.toggle(!1), K.toggle(!1), m.toggle(!0), m.focus(), $.text(h.name), R() || P(U), U.fileUploads[D].uploading = !0, te(h, T));
          });
          var Re = Z.outerHeight();
          Y.height(Re), Y.width(1);
        }
        function f(O) {
          var L = O.responseJSON && O.responseJSON.msg,
            J = Te;
          typeof L == "string" && L.indexOf("InvalidFileTypeError") === 0 ? J = ce : typeof L == "string" && L.indexOf("MaxFileSizeError") === 0 && (J = H), oe.text(J), Y.removeAttr("data-value"), Y.val(""), m.toggle(!1), g.toggle(!0), K.toggle(!0), K.focus(), U.fileUploads[D].uploading = !1, R() || F(U);
        }
        function T(O, L) {
          if (O) return f(O);
          var J = L.fileName,
            ae = L.postData,
            ge = L.fileId,
            z = L.s3Url;
          Y.attr("data-value", ge), ne(z, ae, h, J, A);
        }
        function A(O) {
          if (O) return f(O);
          m.toggle(!1), B.css("display", "inline-block"), B.focus(), U.fileUploads[D].uploading = !1, R() || F(U);
        }
        function R() {
          var O = U.fileUploads && U.fileUploads.toArray() || [];
          return O.some(function (L) {
            return L.uploading;
          });
        }
      }
      function te(D, U) {
        var h = new URLSearchParams({
          name: D.name,
          size: D.size
        });
        e.ajax({
          type: "GET",
          url: `${I}?${h}`,
          crossDomain: !0
        }).done(function (d) {
          U(null, d);
        }).fail(function (d) {
          U(d);
        });
      }
      function ne(D, U, h, d, g) {
        var m = new FormData();
        for (var B in U) m.append(B, U[B]);
        m.append("file", h, d), e.ajax({
          type: "POST",
          url: D,
          data: m,
          processData: !1,
          contentType: !1
        }).done(function () {
          g(null);
        }).fail(function (K) {
          g(K);
        });
      }
      return r;
    });
  });
  var jb = c((vz, Xb) => {
    "use strict";

    var Ps = Ge(),
      Hb = "w-condition-invisible",
      BU = "." + Hb;
    function WU(e) {
      return e.filter(function (t) {
        return !nn(t);
      });
    }
    function nn(e) {
      return !!(e.$el && e.$el.closest(BU).length);
    }
    function qs(e, t) {
      for (var r = e; r >= 0; r--) if (!nn(t[r])) return r;
      return -1;
    }
    function Fs(e, t) {
      for (var r = e; r <= t.length - 1; r++) if (!nn(t[r])) return r;
      return -1;
    }
    function HU(e, t) {
      return qs(e - 1, t) === -1;
    }
    function XU(e, t) {
      return Fs(e + 1, t) === -1;
    }
    function rn(e, t) {
      e.attr("aria-label") || e.attr("aria-label", t);
    }
    function jU(e, t, r, n) {
      var i = r.tram,
        o = Array.isArray,
        a = "w-lightbox",
        s = a + "-",
        u = /(^|\s+)/g,
        l = [],
        _,
        p,
        b,
        v = [];
      function E(d, g) {
        return l = o(d) ? d : [d], p || E.build(), WU(l).length > 1 && (p.items = p.empty, l.forEach(function (m, B) {
          var K = U("thumbnail"),
            Y = U("item").prop("tabIndex", 0).attr("aria-controls", "w-lightbox-view").attr("role", "tab").append(K);
          rn(Y, `show item ${B + 1} of ${l.length}`), nn(m) && Y.addClass(Hb), p.items = p.items.add(Y), ee(m.thumbnailUrl || m.url, function (Z) {
            Z.prop("width") > Z.prop("height") ? G(Z, "wide") : G(Z, "tall"), K.append(G(Z, "thumbnail-image"));
          });
        }), p.strip.empty().append(p.items), G(p.content, "group")), i(te(p.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
          opacity: 1
        }), G(p.html, "noscroll"), E.show(g || 0);
      }
      E.build = function () {
        return E.destroy(), p = {
          html: r(t.documentElement),
          empty: r()
        }, p.arrowLeft = U("control left inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), p.arrowRight = U("control right inactive").attr("role", "button").attr("aria-hidden", !0).attr("aria-controls", "w-lightbox-view"), p.close = U("control close").attr("role", "button"), rn(p.arrowLeft, "previous image"), rn(p.arrowRight, "next image"), rn(p.close, "close lightbox"), p.spinner = U("spinner").attr("role", "progressbar").attr("aria-live", "polite").attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuemin", 0).attr("aria-valuemax", 100).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), p.strip = U("strip").attr("role", "tablist"), b = new S(p.spinner, M("hide")), p.content = U("content").append(p.spinner, p.arrowLeft, p.arrowRight, p.close), p.container = U("container").append(p.content, p.strip), p.lightbox = U("backdrop hide").append(p.container), p.strip.on("click", W("item"), C), p.content.on("swipe", q).on("click", W("left"), x).on("click", W("right"), w).on("click", W("close"), N).on("click", W("image, caption"), w), p.container.on("click", W("view"), N).on("dragstart", W("img"), P), p.lightbox.on("keydown", j).on("focusin", F), r(n).append(p.lightbox), E;
      }, E.destroy = function () {
        p && (te(p.html, "noscroll"), p.lightbox.remove(), p = void 0);
      }, E.show = function (d) {
        if (d !== _) {
          var g = l[d];
          if (!g) return E.hide();
          if (nn(g)) {
            if (d < _) {
              var m = qs(d - 1, l);
              d = m > -1 ? m : d;
            } else {
              var B = Fs(d + 1, l);
              d = B > -1 ? B : d;
            }
            g = l[d];
          }
          var K = _;
          _ = d, p.spinner.attr("aria-hidden", !1).attr("aria-busy", !0).attr("aria-valuenow", 0).attr("aria-valuetext", "Loading image"), b.show();
          var Y = g.html && h(g.width, g.height) || g.url;
          return ee(Y, function (Z) {
            if (d !== _) return;
            var de = U("figure", "figure").append(G(Z, "image")),
              oe = U("frame").append(de),
              y = U("view").prop("tabIndex", 0).attr("id", "w-lightbox-view").append(oe),
              V,
              $;
            g.html && (V = r(g.html), $ = V.is("iframe"), $ && V.on("load", H), de.append(G(V, "embed"))), g.caption && de.append(U("caption", "figcaption").text(g.caption)), p.spinner.before(y), $ || H();
            function H() {
              if (p.spinner.attr("aria-hidden", !0).attr("aria-busy", !1).attr("aria-valuenow", 100).attr("aria-valuetext", "Loaded image"), b.hide(), d !== _) {
                y.remove();
                return;
              }
              let ce = HU(d, l);
              ne(p.arrowLeft, "inactive", ce), D(p.arrowLeft, ce), ce && p.arrowLeft.is(":focus") && p.arrowRight.focus();
              let Te = XU(d, l);
              if (ne(p.arrowRight, "inactive", Te), D(p.arrowRight, Te), Te && p.arrowRight.is(":focus") && p.arrowLeft.focus(), p.view ? (i(p.view).add("opacity .3s").start({
                opacity: 0
              }).then(re(p.view)), i(y).add("opacity .3s").add("transform .3s").set({
                x: d > K ? "80px" : "-80px"
              }).start({
                opacity: 1,
                x: 0
              })) : y.css("opacity", 1), p.view = y, p.view.prop("tabIndex", 0), p.items) {
                te(p.items, "active"), p.items.removeAttr("aria-selected");
                var Re = p.items.eq(d);
                G(Re, "active"), Re.attr("aria-selected", !0), k(Re);
              }
            }
          }), p.close.prop("tabIndex", 0), r(":focus").addClass("active-lightbox"), v.length === 0 && (r("body").children().each(function () {
            r(this).hasClass("w-lightbox-backdrop") || r(this).is("script") || (v.push({
              node: r(this),
              hidden: r(this).attr("aria-hidden"),
              tabIndex: r(this).attr("tabIndex")
            }), r(this).attr("aria-hidden", !0).attr("tabIndex", -1));
          }), p.close.focus()), E;
        }
      }, E.hide = function () {
        return i(p.lightbox).add("opacity .3s").start({
          opacity: 0
        }).then(Q), E;
      }, E.prev = function () {
        var d = qs(_ - 1, l);
        d > -1 && E.show(d);
      }, E.next = function () {
        var d = Fs(_ + 1, l);
        d > -1 && E.show(d);
      };
      function I(d) {
        return function (g) {
          this === g.target && (g.stopPropagation(), g.preventDefault(), d());
        };
      }
      var x = I(E.prev),
        w = I(E.next),
        N = I(E.hide),
        C = function (d) {
          var g = r(this).index();
          d.preventDefault(), E.show(g);
        },
        q = function (d, g) {
          d.preventDefault(), g.direction === "left" ? E.next() : g.direction === "right" && E.prev();
        },
        F = function () {
          this.focus();
        };
      function P(d) {
        d.preventDefault();
      }
      function j(d) {
        var g = d.keyCode;
        g === 27 || X(g, "close") ? E.hide() : g === 37 || X(g, "left") ? E.prev() : g === 39 || X(g, "right") ? E.next() : X(g, "item") && r(":focus").click();
      }
      function X(d, g) {
        if (d !== 13 && d !== 32) return !1;
        var m = r(":focus").attr("class"),
          B = M(g).trim();
        return m.includes(B);
      }
      function Q() {
        p && (p.strip.scrollLeft(0).empty(), te(p.html, "noscroll"), G(p.lightbox, "hide"), p.view && p.view.remove(), te(p.content, "group"), G(p.arrowLeft, "inactive"), G(p.arrowRight, "inactive"), _ = p.view = void 0, v.forEach(function (d) {
          var g = d.node;
          g && (d.hidden ? g.attr("aria-hidden", d.hidden) : g.removeAttr("aria-hidden"), d.tabIndex ? g.attr("tabIndex", d.tabIndex) : g.removeAttr("tabIndex"));
        }), v = [], r(".active-lightbox").removeClass("active-lightbox").focus());
      }
      function ee(d, g) {
        var m = U("img", "img");
        return m.one("load", function () {
          g(m);
        }), m.attr("src", d), m;
      }
      function re(d) {
        return function () {
          d.remove();
        };
      }
      function k(d) {
        var g = d.get(0),
          m = p.strip.get(0),
          B = g.offsetLeft,
          K = g.clientWidth,
          Y = m.scrollLeft,
          Z = m.clientWidth,
          de = m.scrollWidth - Z,
          oe;
        B < Y ? oe = Math.max(0, B + K - Z) : B + K > Z + Y && (oe = Math.min(B, de)), oe != null && i(p.strip).add("scroll-left 500ms").start({
          "scroll-left": oe
        });
      }
      function S(d, g, m) {
        this.$element = d, this.className = g, this.delay = m || 200, this.hide();
      }
      S.prototype.show = function () {
        var d = this;
        d.timeoutId || (d.timeoutId = setTimeout(function () {
          d.$element.removeClass(d.className), delete d.timeoutId;
        }, d.delay));
      }, S.prototype.hide = function () {
        var d = this;
        if (d.timeoutId) {
          clearTimeout(d.timeoutId), delete d.timeoutId;
          return;
        }
        d.$element.addClass(d.className);
      };
      function M(d, g) {
        return d.replace(u, (g ? " ." : " ") + s);
      }
      function W(d) {
        return M(d, !0);
      }
      function G(d, g) {
        return d.addClass(M(g));
      }
      function te(d, g) {
        return d.removeClass(M(g));
      }
      function ne(d, g, m) {
        return d.toggleClass(M(g), m);
      }
      function D(d, g) {
        return d.attr("aria-hidden", g).attr("tabIndex", g ? -1 : 0);
      }
      function U(d, g) {
        return G(r(t.createElement(g || "div")), d);
      }
      function h(d, g) {
        var m = '<svg xmlns="http://www.w3.org/2000/svg" width="' + d + '" height="' + g + '"/>';
        return "data:image/svg+xml;charset=utf-8," + encodeURI(m);
      }
      return function () {
        var d = e.navigator.userAgent,
          g = /(iPhone|iPad|iPod);[^OS]*OS (\d)/,
          m = d.match(g),
          B = d.indexOf("Android ") > -1 && d.indexOf("Chrome") === -1;
        if (!B && (!m || m[2] > 7)) return;
        var K = t.createElement("style");
        t.head.appendChild(K), e.addEventListener("resize", Y, !0);
        function Y() {
          var Z = e.innerHeight,
            de = e.innerWidth,
            oe = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + Z + "px}.w-lightbox-view {width:" + de + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * Z + "px}.w-lightbox-image {max-width:" + de + "px;max-height:" + Z + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * Z + "px}.w-lightbox-strip {padding: 0 " + .01 * Z + "px}.w-lightbox-item {width:" + .1 * Z + "px;padding:" + .02 * Z + "px " + .01 * Z + "px}.w-lightbox-thumbnail {height:" + .1 * Z + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * Z + "px}.w-lightbox-content {margin-top:" + .02 * Z + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * Z + "px}.w-lightbox-image {max-width:" + .96 * de + "px;max-height:" + .96 * Z + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * de + "px;max-height:" + .84 * Z + "px}}";
          K.textContent = oe;
        }
        Y();
      }(), E;
    }
    Ps.define("lightbox", Xb.exports = function (e) {
      var t = {},
        r = Ps.env(),
        n = jU(window, document, e, r ? "#lightbox-mountpoint" : "body"),
        i = e(document),
        o,
        a,
        s = ".w-lightbox",
        u;
      t.ready = t.design = t.preview = l;
      function l() {
        a = r && Ps.env("design"), n.destroy(), u = {}, o = i.find(s), o.webflowLightBox(), o.each(function () {
          rn(e(this), "open lightbox"), e(this).attr("aria-haspopup", "dialog");
        });
      }
      jQuery.fn.extend({
        webflowLightBox: function () {
          var v = this;
          e.each(v, function (E, I) {
            var x = e.data(I, s);
            x || (x = e.data(I, s, {
              el: e(I),
              mode: "images",
              images: [],
              embed: ""
            })), x.el.off(s), _(x), a ? x.el.on("setting" + s, _.bind(null, x)) : x.el.on("click" + s, p(x)).on("click" + s, function (w) {
              w.preventDefault();
            });
          });
        }
      });
      function _(v) {
        var E = v.el.children(".w-json").html(),
          I,
          x;
        if (!E) {
          v.items = [];
          return;
        }
        try {
          E = JSON.parse(E);
        } catch (w) {
          console.error("Malformed lightbox JSON configuration.", w);
        }
        b(E), E.items.forEach(function (w) {
          w.$el = v.el;
        }), I = E.group, I ? (x = u[I], x || (x = u[I] = []), v.items = x, E.items.length && (v.index = x.length, x.push.apply(x, E.items))) : (v.items = E.items, v.index = 0);
      }
      function p(v) {
        return function () {
          v.items.length && n(v.items, v.index || 0);
        };
      }
      function b(v) {
        v.images && (v.images.forEach(function (E) {
          E.type = "image";
        }), v.items = v.images), v.embed && (v.embed.type = "video", v.items = [v.embed]), v.groupId && (v.group = v.groupId);
      }
      return t;
    });
  });
  var Kb = c((mz, zb) => {
    "use strict";

    var At = Ge(),
      zU = dn(),
      Ce = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      };
    At.define("navbar", zb.exports = function (e, t) {
      var r = {},
        n = e.tram,
        i = e(window),
        o = e(document),
        a = t.debounce,
        s,
        u,
        l,
        _,
        p = At.env(),
        b = '<div class="w-nav-overlay" data-wf-ignore />',
        v = ".w-nav",
        E = "w--open",
        I = "w--nav-dropdown-open",
        x = "w--nav-dropdown-toggle-open",
        w = "w--nav-dropdown-list-open",
        N = "w--nav-link-open",
        C = zU.triggers,
        q = e();
      r.ready = r.design = r.preview = F, r.destroy = function () {
        q = e(), P(), u && u.length && u.each(ee);
      };
      function F() {
        l = p && At.env("design"), _ = At.env("editor"), s = e(document.body), u = o.find(v), u.length && (u.each(Q), P(), j());
      }
      function P() {
        At.resize.off(X);
      }
      function j() {
        At.resize.on(X);
      }
      function X() {
        u.each(g);
      }
      function Q(y, V) {
        var $ = e(V),
          H = e.data(V, v);
        H || (H = e.data(V, v, {
          open: !1,
          el: $,
          config: {},
          selectedIdx: -1
        })), H.menu = $.find(".w-nav-menu"), H.links = H.menu.find(".w-nav-link"), H.dropdowns = H.menu.find(".w-dropdown"), H.dropdownToggle = H.menu.find(".w-dropdown-toggle"), H.dropdownList = H.menu.find(".w-dropdown-list"), H.button = $.find(".w-nav-button"), H.container = $.find(".w-container"), H.overlayContainerId = "w-nav-overlay-" + y, H.outside = h(H);
        var ce = $.find(".w-nav-brand");
        ce && ce.attr("href") === "/" && ce.attr("aria-label") == null && ce.attr("aria-label", "home"), H.button.attr("style", "-webkit-user-select: text;"), H.button.attr("aria-label") == null && H.button.attr("aria-label", "menu"), H.button.attr("role", "button"), H.button.attr("tabindex", "0"), H.button.attr("aria-controls", H.overlayContainerId), H.button.attr("aria-haspopup", "menu"), H.button.attr("aria-expanded", "false"), H.el.off(v), H.button.off(v), H.menu.off(v), S(H), l ? (re(H), H.el.on("setting" + v, M(H))) : (k(H), H.button.on("click" + v, D(H)), H.menu.on("click" + v, "a", U(H)), H.button.on("keydown" + v, W(H)), H.el.on("keydown" + v, G(H))), g(y, V);
      }
      function ee(y, V) {
        var $ = e.data(V, v);
        $ && (re($), e.removeData(V, v));
      }
      function re(y) {
        y.overlay && (oe(y, !0), y.overlay.remove(), y.overlay = null);
      }
      function k(y) {
        y.overlay || (y.overlay = e(b).appendTo(y.el), y.overlay.attr("id", y.overlayContainerId), y.parent = y.menu.parent(), oe(y, !0));
      }
      function S(y) {
        var V = {},
          $ = y.config || {},
          H = V.animation = y.el.attr("data-animation") || "default";
        V.animOver = /^over/.test(H), V.animDirect = /left$/.test(H) ? -1 : 1, $.animation !== H && y.open && t.defer(ne, y), V.easing = y.el.attr("data-easing") || "ease", V.easing2 = y.el.attr("data-easing2") || "ease";
        var ce = y.el.attr("data-duration");
        V.duration = ce != null ? Number(ce) : 400, V.docHeight = y.el.attr("data-doc-height"), y.config = V;
      }
      function M(y) {
        return function (V, $) {
          $ = $ || {};
          var H = i.width();
          S(y), $.open === !0 && Z(y, !0), $.open === !1 && oe(y, !0), y.open && t.defer(function () {
            H !== i.width() && ne(y);
          });
        };
      }
      function W(y) {
        return function (V) {
          switch (V.keyCode) {
            case Ce.SPACE:
            case Ce.ENTER:
              return D(y)(), V.preventDefault(), V.stopPropagation();
            case Ce.ESCAPE:
              return oe(y), V.preventDefault(), V.stopPropagation();
            case Ce.ARROW_RIGHT:
            case Ce.ARROW_DOWN:
            case Ce.HOME:
            case Ce.END:
              return y.open ? (V.keyCode === Ce.END ? y.selectedIdx = y.links.length - 1 : y.selectedIdx = 0, te(y), V.preventDefault(), V.stopPropagation()) : (V.preventDefault(), V.stopPropagation());
          }
        };
      }
      function G(y) {
        return function (V) {
          if (y.open) switch (y.selectedIdx = y.links.index(document.activeElement), V.keyCode) {
            case Ce.HOME:
            case Ce.END:
              return V.keyCode === Ce.END ? y.selectedIdx = y.links.length - 1 : y.selectedIdx = 0, te(y), V.preventDefault(), V.stopPropagation();
            case Ce.ESCAPE:
              return oe(y), y.button.focus(), V.preventDefault(), V.stopPropagation();
            case Ce.ARROW_LEFT:
            case Ce.ARROW_UP:
              return y.selectedIdx = Math.max(-1, y.selectedIdx - 1), te(y), V.preventDefault(), V.stopPropagation();
            case Ce.ARROW_RIGHT:
            case Ce.ARROW_DOWN:
              return y.selectedIdx = Math.min(y.links.length - 1, y.selectedIdx + 1), te(y), V.preventDefault(), V.stopPropagation();
          }
        };
      }
      function te(y) {
        if (y.links[y.selectedIdx]) {
          var V = y.links[y.selectedIdx];
          V.focus(), U(V);
        }
      }
      function ne(y) {
        y.open && (oe(y, !0), Z(y, !0));
      }
      function D(y) {
        return a(function () {
          y.open ? oe(y) : Z(y);
        });
      }
      function U(y) {
        return function (V) {
          var $ = e(this),
            H = $.attr("href");
          if (!At.validClick(V.currentTarget)) {
            V.preventDefault();
            return;
          }
          H && H.indexOf("#") === 0 && y.open && oe(y);
        };
      }
      function h(y) {
        return y.outside && o.off("click" + v, y.outside), function (V) {
          var $ = e(V.target);
          _ && $.closest(".w-editor-bem-EditorOverlay").length || d(y, $);
        };
      }
      var d = a(function (y, V) {
        if (y.open) {
          var $ = V.closest(".w-nav-menu");
          y.menu.is($) || oe(y);
        }
      });
      function g(y, V) {
        var $ = e.data(V, v),
          H = $.collapsed = $.button.css("display") !== "none";
        if ($.open && !H && !l && oe($, !0), $.container.length) {
          var ce = B($);
          $.links.each(ce), $.dropdowns.each(ce);
        }
        $.open && de($);
      }
      var m = "max-width";
      function B(y) {
        var V = y.container.css(m);
        return V === "none" && (V = ""), function ($, H) {
          H = e(H), H.css(m, ""), H.css(m) === "none" && H.css(m, V);
        };
      }
      function K(y, V) {
        V.setAttribute("data-nav-menu-open", "");
      }
      function Y(y, V) {
        V.removeAttribute("data-nav-menu-open");
      }
      function Z(y, V) {
        if (y.open) return;
        y.open = !0, y.menu.each(K), y.links.addClass(N), y.dropdowns.addClass(I), y.dropdownToggle.addClass(x), y.dropdownList.addClass(w), y.button.addClass(E);
        var $ = y.config,
          H = $.animation;
        (H === "none" || !n.support.transform || $.duration <= 0) && (V = !0);
        var ce = de(y),
          Te = y.menu.outerHeight(!0),
          Re = y.menu.outerWidth(!0),
          f = y.el.height(),
          T = y.el[0];
        if (g(0, T), C.intro(0, T), At.redraw.up(), l || o.on("click" + v, y.outside), V) {
          O();
          return;
        }
        var A = "transform " + $.duration + "ms " + $.easing;
        if (y.overlay && (q = y.menu.prev(), y.overlay.show().append(y.menu)), $.animOver) {
          n(y.menu).add(A).set({
            x: $.animDirect * Re,
            height: ce
          }).start({
            x: 0
          }).then(O), y.overlay && y.overlay.width(Re);
          return;
        }
        var R = f + Te;
        n(y.menu).add(A).set({
          y: -R
        }).start({
          y: 0
        }).then(O);
        function O() {
          y.button.attr("aria-expanded", "true");
        }
      }
      function de(y) {
        var V = y.config,
          $ = V.docHeight ? o.height() : s.height();
        return V.animOver ? y.menu.height($) : y.el.css("position") !== "fixed" && ($ -= y.el.outerHeight(!0)), y.overlay && y.overlay.height($), $;
      }
      function oe(y, V) {
        if (!y.open) return;
        y.open = !1, y.button.removeClass(E);
        var $ = y.config;
        if (($.animation === "none" || !n.support.transform || $.duration <= 0) && (V = !0), C.outro(0, y.el[0]), o.off("click" + v, y.outside), V) {
          n(y.menu).stop(), T();
          return;
        }
        var H = "transform " + $.duration + "ms " + $.easing2,
          ce = y.menu.outerHeight(!0),
          Te = y.menu.outerWidth(!0),
          Re = y.el.height();
        if ($.animOver) {
          n(y.menu).add(H).start({
            x: Te * $.animDirect
          }).then(T);
          return;
        }
        var f = Re + ce;
        n(y.menu).add(H).start({
          y: -f
        }).then(T);
        function T() {
          y.menu.height(""), n(y.menu).set({
            x: 0,
            y: 0
          }), y.menu.each(Y), y.links.removeClass(N), y.dropdowns.removeClass(I), y.dropdownToggle.removeClass(x), y.dropdownList.removeClass(w), y.overlay && y.overlay.children().length && (q.length ? y.menu.insertAfter(q) : y.menu.prependTo(y.parent), y.overlay.attr("style", "").hide()), y.el.triggerHandler("w-close"), y.button.attr("aria-expanded", "false");
        }
      }
      return r;
    });
  });
  var Qb = c((yz, $b) => {
    "use strict";

    var St = Ge(),
      KU = dn(),
      ft = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35
      },
      Yb = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
    St.define("slider", $b.exports = function (e, t) {
      var r = {},
        n = e.tram,
        i = e(document),
        o,
        a,
        s = St.env(),
        u = ".w-slider",
        l = '<div class="w-slider-dot" data-wf-ignore />',
        _ = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
        p = "w-slider-force-show",
        b = KU.triggers,
        v,
        E = !1;
      r.ready = function () {
        a = St.env("design"), I();
      }, r.design = function () {
        a = !0, setTimeout(I, 1e3);
      }, r.preview = function () {
        a = !1, I();
      }, r.redraw = function () {
        E = !0, I(), E = !1;
      }, r.destroy = x;
      function I() {
        o = i.find(u), o.length && (o.each(C), !v && (x(), w()));
      }
      function x() {
        St.resize.off(N), St.redraw.off(r.redraw);
      }
      function w() {
        St.resize.on(N), St.redraw.on(r.redraw);
      }
      function N() {
        o.filter(":visible").each(G);
      }
      function C(h, d) {
        var g = e(d),
          m = e.data(d, u);
        m || (m = e.data(d, u, {
          index: 0,
          depth: 1,
          hasFocus: {
            keyboard: !1,
            mouse: !1
          },
          el: g,
          config: {}
        })), m.mask = g.children(".w-slider-mask"), m.left = g.children(".w-slider-arrow-left"), m.right = g.children(".w-slider-arrow-right"), m.nav = g.children(".w-slider-nav"), m.slides = m.mask.children(".w-slide"), m.slides.each(b.reset), E && (m.maskWidth = 0), g.attr("role") === void 0 && g.attr("role", "region"), g.attr("aria-label") === void 0 && g.attr("aria-label", "carousel");
        var B = m.mask.attr("id");
        if (B || (B = "w-slider-mask-" + h, m.mask.attr("id", B)), !a && !m.ariaLiveLabel && (m.ariaLiveLabel = e(_).appendTo(m.mask)), m.left.attr("role", "button"), m.left.attr("tabindex", "0"), m.left.attr("aria-controls", B), m.left.attr("aria-label") === void 0 && m.left.attr("aria-label", "previous slide"), m.right.attr("role", "button"), m.right.attr("tabindex", "0"), m.right.attr("aria-controls", B), m.right.attr("aria-label") === void 0 && m.right.attr("aria-label", "next slide"), !n.support.transform) {
          m.left.hide(), m.right.hide(), m.nav.hide(), v = !0;
          return;
        }
        m.el.off(u), m.left.off(u), m.right.off(u), m.nav.off(u), q(m), a ? (m.el.on("setting" + u, S(m)), k(m), m.hasTimer = !1) : (m.el.on("swipe" + u, S(m)), m.left.on("click" + u, X(m)), m.right.on("click" + u, Q(m)), m.left.on("keydown" + u, j(m, X)), m.right.on("keydown" + u, j(m, Q)), m.nav.on("keydown" + u, "> div", S(m)), m.config.autoplay && !m.hasTimer && (m.hasTimer = !0, m.timerCount = 1, re(m)), m.el.on("mouseenter" + u, P(m, !0, "mouse")), m.el.on("focusin" + u, P(m, !0, "keyboard")), m.el.on("mouseleave" + u, P(m, !1, "mouse")), m.el.on("focusout" + u, P(m, !1, "keyboard"))), m.nav.on("click" + u, "> div", S(m)), s || m.mask.contents().filter(function () {
          return this.nodeType === 3;
        }).remove();
        var K = g.filter(":hidden");
        K.addClass(p);
        var Y = g.parents(":hidden");
        Y.addClass(p), E || G(h, d), K.removeClass(p), Y.removeClass(p);
      }
      function q(h) {
        var d = {};
        d.crossOver = 0, d.animation = h.el.attr("data-animation") || "slide", d.animation === "outin" && (d.animation = "cross", d.crossOver = .5), d.easing = h.el.attr("data-easing") || "ease";
        var g = h.el.attr("data-duration");
        if (d.duration = g != null ? parseInt(g, 10) : 500, F(h.el.attr("data-infinite")) && (d.infinite = !0), F(h.el.attr("data-disable-swipe")) && (d.disableSwipe = !0), F(h.el.attr("data-hide-arrows")) ? d.hideArrows = !0 : h.config.hideArrows && (h.left.show(), h.right.show()), F(h.el.attr("data-autoplay"))) {
          d.autoplay = !0, d.delay = parseInt(h.el.attr("data-delay"), 10) || 2e3, d.timerMax = parseInt(h.el.attr("data-autoplay-limit"), 10);
          var m = "mousedown" + u + " touchstart" + u;
          a || h.el.off(m).one(m, function () {
            k(h);
          });
        }
        var B = h.right.width();
        d.edge = B ? B + 40 : 100, h.config = d;
      }
      function F(h) {
        return h === "1" || h === "true";
      }
      function P(h, d, g) {
        return function (m) {
          if (d) h.hasFocus[g] = d;else if (e.contains(h.el.get(0), m.relatedTarget) || (h.hasFocus[g] = d, h.hasFocus.mouse && g === "keyboard" || h.hasFocus.keyboard && g === "mouse")) return;
          d ? (h.ariaLiveLabel.attr("aria-live", "polite"), h.hasTimer && k(h)) : (h.ariaLiveLabel.attr("aria-live", "off"), h.hasTimer && re(h));
        };
      }
      function j(h, d) {
        return function (g) {
          switch (g.keyCode) {
            case ft.SPACE:
            case ft.ENTER:
              return d(h)(), g.preventDefault(), g.stopPropagation();
          }
        };
      }
      function X(h) {
        return function () {
          W(h, {
            index: h.index - 1,
            vector: -1
          });
        };
      }
      function Q(h) {
        return function () {
          W(h, {
            index: h.index + 1,
            vector: 1
          });
        };
      }
      function ee(h, d) {
        var g = null;
        d === h.slides.length && (I(), te(h)), t.each(h.anchors, function (m, B) {
          e(m.els).each(function (K, Y) {
            e(Y).index() === d && (g = B);
          });
        }), g != null && W(h, {
          index: g,
          immediate: !0
        });
      }
      function re(h) {
        k(h);
        var d = h.config,
          g = d.timerMax;
        g && h.timerCount++ > g || (h.timerId = window.setTimeout(function () {
          h.timerId == null || a || (Q(h)(), re(h));
        }, d.delay));
      }
      function k(h) {
        window.clearTimeout(h.timerId), h.timerId = null;
      }
      function S(h) {
        return function (d, g) {
          g = g || {};
          var m = h.config;
          if (a && d.type === "setting") {
            if (g.select === "prev") return X(h)();
            if (g.select === "next") return Q(h)();
            if (q(h), te(h), g.select == null) return;
            ee(h, g.select);
            return;
          }
          if (d.type === "swipe") return m.disableSwipe || St.env("editor") ? void 0 : g.direction === "left" ? Q(h)() : g.direction === "right" ? X(h)() : void 0;
          if (h.nav.has(d.target).length) {
            var B = e(d.target).index();
            if (d.type === "click" && W(h, {
              index: B
            }), d.type === "keydown") switch (d.keyCode) {
              case ft.ENTER:
              case ft.SPACE:
                {
                  W(h, {
                    index: B
                  }), d.preventDefault();
                  break;
                }
              case ft.ARROW_LEFT:
              case ft.ARROW_UP:
                {
                  M(h.nav, Math.max(B - 1, 0)), d.preventDefault();
                  break;
                }
              case ft.ARROW_RIGHT:
              case ft.ARROW_DOWN:
                {
                  M(h.nav, Math.min(B + 1, h.pages)), d.preventDefault();
                  break;
                }
              case ft.HOME:
                {
                  M(h.nav, 0), d.preventDefault();
                  break;
                }
              case ft.END:
                {
                  M(h.nav, h.pages), d.preventDefault();
                  break;
                }
              default:
                return;
            }
          }
        };
      }
      function M(h, d) {
        var g = h.children().eq(d).focus();
        h.children().not(g);
      }
      function W(h, d) {
        d = d || {};
        var g = h.config,
          m = h.anchors;
        h.previous = h.index;
        var B = d.index,
          K = {};
        B < 0 ? (B = m.length - 1, g.infinite && (K.x = -h.endX, K.from = 0, K.to = m[0].width)) : B >= m.length && (B = 0, g.infinite && (K.x = m[m.length - 1].width, K.from = -m[m.length - 1].x, K.to = K.from - K.x)), h.index = B;
        var Y = h.nav.children().eq(B).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
        h.nav.children().not(Y).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"), g.hideArrows && (h.index === m.length - 1 ? h.right.hide() : h.right.show(), h.index === 0 ? h.left.hide() : h.left.show());
        var Z = h.offsetX || 0,
          de = h.offsetX = -m[h.index].x,
          oe = {
            x: de,
            opacity: 1,
            visibility: ""
          },
          y = e(m[h.index].els),
          V = e(m[h.previous] && m[h.previous].els),
          $ = h.slides.not(y),
          H = g.animation,
          ce = g.easing,
          Te = Math.round(g.duration),
          Re = d.vector || (h.index > h.previous ? 1 : -1),
          f = "opacity " + Te + "ms " + ce,
          T = "transform " + Te + "ms " + ce;
        if (y.find(Yb).removeAttr("tabindex"), y.removeAttr("aria-hidden"), y.find("*").removeAttr("aria-hidden"), $.find(Yb).attr("tabindex", "-1"), $.attr("aria-hidden", "true"), $.find("*").attr("aria-hidden", "true"), a || (y.each(b.intro), $.each(b.outro)), d.immediate && !E) {
          n(y).set(oe), O();
          return;
        }
        if (h.index === h.previous) return;
        if (a || h.ariaLiveLabel.text(`Slide ${B + 1} of ${m.length}.`), H === "cross") {
          var A = Math.round(Te - Te * g.crossOver),
            R = Math.round(Te - A);
          f = "opacity " + A + "ms " + ce, n(V).set({
            visibility: ""
          }).add(f).start({
            opacity: 0
          }), n(y).set({
            visibility: "",
            x: de,
            opacity: 0,
            zIndex: h.depth++
          }).add(f).wait(R).then({
            opacity: 1
          }).then(O);
          return;
        }
        if (H === "fade") {
          n(V).set({
            visibility: ""
          }).stop(), n(y).set({
            visibility: "",
            x: de,
            opacity: 0,
            zIndex: h.depth++
          }).add(f).start({
            opacity: 1
          }).then(O);
          return;
        }
        if (H === "over") {
          oe = {
            x: h.endX
          }, n(V).set({
            visibility: ""
          }).stop(), n(y).set({
            visibility: "",
            zIndex: h.depth++,
            x: de + m[h.index].width * Re
          }).add(T).start({
            x: de
          }).then(O);
          return;
        }
        g.infinite && K.x ? (n(h.slides.not(V)).set({
          visibility: "",
          x: K.x
        }).add(T).start({
          x: de
        }), n(V).set({
          visibility: "",
          x: K.from
        }).add(T).start({
          x: K.to
        }), h.shifted = V) : (g.infinite && h.shifted && (n(h.shifted).set({
          visibility: "",
          x: Z
        }), h.shifted = null), n(h.slides).set({
          visibility: ""
        }).add(T).start({
          x: de
        }));
        function O() {
          y = e(m[h.index].els), $ = h.slides.not(y), H !== "slide" && (oe.visibility = "hidden"), n($).set(oe);
        }
      }
      function G(h, d) {
        var g = e.data(d, u);
        if (g) {
          if (D(g)) return te(g);
          a && U(g) && te(g);
        }
      }
      function te(h) {
        var d = 1,
          g = 0,
          m = 0,
          B = 0,
          K = h.maskWidth,
          Y = K - h.config.edge;
        Y < 0 && (Y = 0), h.anchors = [{
          els: [],
          x: 0,
          width: 0
        }], h.slides.each(function (de, oe) {
          m - g > Y && (d++, g += K, h.anchors[d - 1] = {
            els: [],
            x: m,
            width: 0
          }), B = e(oe).outerWidth(!0), m += B, h.anchors[d - 1].width += B, h.anchors[d - 1].els.push(oe);
          var y = de + 1 + " of " + h.slides.length;
          e(oe).attr("aria-label", y), e(oe).attr("role", "group");
        }), h.endX = m, a && (h.pages = null), h.nav.length && h.pages !== d && (h.pages = d, ne(h));
        var Z = h.index;
        Z >= d && (Z = d - 1), W(h, {
          immediate: !0,
          index: Z
        });
      }
      function ne(h) {
        var d = [],
          g,
          m = h.el.attr("data-nav-spacing");
        m && (m = parseFloat(m) + "px");
        for (var B = 0, K = h.pages; B < K; B++) g = e(l), g.attr("aria-label", "Show slide " + (B + 1) + " of " + K).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"), h.nav.hasClass("w-num") && g.text(B + 1), m != null && g.css({
          "margin-left": m,
          "margin-right": m
        }), d.push(g);
        h.nav.empty().append(d);
      }
      function D(h) {
        var d = h.mask.width();
        return h.maskWidth !== d ? (h.maskWidth = d, !0) : !1;
      }
      function U(h) {
        var d = 0;
        return h.slides.each(function (g, m) {
          d += e(m).outerWidth(!0);
        }), h.slidesWidth !== d ? (h.slidesWidth = d, !0) : !1;
      }
      return r;
    });
  });
  Ys();
  Qs();
  Js();
  ru();
  dn();
  qb();
  Mb();
  kb();
  Vb();
  Wb();
  jb();
  Kb();
  Qb();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
  "events": {
    "e-13": {
      "id": "e-13",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-9",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-14"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".u-link",
        "originalId": "65e57c8082e6072b394e6a12|41f0bc3e-5539-b5ee-4b3c-08f41da92988",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".u-link",
        "originalId": "65e57c8082e6072b394e6a12|41f0bc3e-5539-b5ee-4b3c-08f41da92988",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1710344126516
    },
    "e-15": {
      "id": "e-15",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-16",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-16"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".hidden-clicker",
        "originalId": "fd3ba31e-d9ec-8530-bc1c-a4753c4fe776",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".hidden-clicker",
        "originalId": "fd3ba31e-d9ec-8530-bc1c-a4753c4fe776",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1710510934385
    },
    "e-17": {
      "id": "e-17",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-17",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-18"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".hidden-clicker-out",
        "originalId": "fd3ba31e-d9ec-8530-bc1c-a4753c4fe777",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".hidden-clicker-out",
        "originalId": "fd3ba31e-d9ec-8530-bc1c-a4753c4fe777",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1710511620911
    },
    "e-19": {
      "id": "e-19",
      "name": "",
      "animationType": "preset",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-18",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-20"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "65e57c8082e6072b394e6a12|7a9256bf-0e57-2e65-aece-e84ab29ba067",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "65e57c8082e6072b394e6a12|7a9256bf-0e57-2e65-aece-e84ab29ba067",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1710512059598
    },
    "e-21": {
      "id": "e-21",
      "name": "",
      "animationType": "preset",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-10",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-22"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "65e5ca782508f719b6fdfdcd|53652b2f-2989-7556-15dc-ba7a37ea03f1",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "65e5ca782508f719b6fdfdcd|53652b2f-2989-7556-15dc-ba7a37ea03f1",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1711007632550
    },
    "e-23": {
      "id": "e-23",
      "name": "",
      "animationType": "preset",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-13",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-24"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "65e5ca782508f719b6fdfdcd|98347db9-7deb-161e-019f-56b5f46dc922",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "65e5ca782508f719b6fdfdcd|98347db9-7deb-161e-019f-56b5f46dc922",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1711007636418
    },
    "e-25": {
      "id": "e-25",
      "name": "",
      "animationType": "preset",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-9",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-26"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "65e5ca782508f719b6fdfdcd|80008aa7-ecff-174b-98ba-e874be983bec",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "65e5ca782508f719b6fdfdcd|80008aa7-ecff-174b-98ba-e874be983bec",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1711007639371
    },
    "e-27": {
      "id": "e-27",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-21",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-28"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".us-link",
        "originalId": "adcaa3c6-0f15-37e9-2531-a8960a16a1fb",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".us-link",
        "originalId": "adcaa3c6-0f15-37e9-2531-a8960a16a1fb",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1711008830316
    },
    "e-29": {
      "id": "e-29",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-22",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-30"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".dot-zoom._1.opgs",
        "originalId": "53652b2f-2989-7556-15dc-ba7a37ea03f1",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "id": "53652b2f-2989-7556-15dc-ba7a37ea03f1",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1711009503245
    },
    "e-31": {
      "id": "e-31",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-22",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-32"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".dot-zoom._2.opgs",
        "originalId": "98347db9-7deb-161e-019f-56b5f46dc922",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "id": "98347db9-7deb-161e-019f-56b5f46dc922",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1711009558943
    },
    "e-33": {
      "id": "e-33",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-22",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-34"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".dot-zoom._3.opgs",
        "originalId": "80008aa7-ecff-174b-98ba-e874be983bec",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "id": "80008aa7-ecff-174b-98ba-e874be983bec",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1711009565961
    },
    "e-35": {
      "id": "e-35",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-23",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-36"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "1f23b648-c874-cbe9-c4cb-ed753596b7f9",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "1f23b648-c874-cbe9-c4cb-ed753596b7f9",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1711010334997
    },
    "e-37": {
      "id": "e-37",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-23",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-38"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".hidden-clicker-2",
        "originalId": "65ef0726d2531bad1f44ea0e|9e348bd2-c6cd-d457-1a7c-128b265f6480",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".hidden-clicker-2",
        "originalId": "65ef0726d2531bad1f44ea0e|9e348bd2-c6cd-d457-1a7c-128b265f6480",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1711010443869
    },
    "e-41": {
      "id": "e-41",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_OVER",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-24",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-42"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".uto-item",
        "originalId": "65ef0726d2531bad1f44ea0e|10875d89-71dd-018d-ef75-1bfce306893c",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".uto-item",
        "originalId": "65ef0726d2531bad1f44ea0e|10875d89-71dd-018d-ef75-1bfce306893c",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1711011103836
    },
    "e-42": {
      "id": "e-42",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_OUT",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-25",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-41"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".uto-item",
        "originalId": "65ef0726d2531bad1f44ea0e|10875d89-71dd-018d-ef75-1bfce306893c",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".uto-item",
        "originalId": "65ef0726d2531bad1f44ea0e|10875d89-71dd-018d-ef75-1bfce306893c",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1711011103837
    },
    "e-43": {
      "id": "e-43",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-21",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-44"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".uto-a",
        "originalId": "65ef0726d2531bad1f44ea0e|30632fe7-67fa-eb00-dad6-f43e2fc41a15",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".uto-a",
        "originalId": "65ef0726d2531bad1f44ea0e|30632fe7-67fa-eb00-dad6-f43e2fc41a15",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1711011424577
    },
    "e-45": {
      "id": "e-45",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-21",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-46"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".conc-link",
        "originalId": "65e5ca782508f719b6fdfdcd|d2b341cd-85c8-3e3b-dcd7-61337dc5c4f5",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".conc-link",
        "originalId": "65e5ca782508f719b6fdfdcd|d2b341cd-85c8-3e3b-dcd7-61337dc5c4f5",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1711011463159
    },
    "e-47": {
      "id": "e-47",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-21",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-48"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".marq-link",
        "originalId": "952dbdaa-8d29-24c6-1e80-6b1c217c530b",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".marq-link",
        "originalId": "952dbdaa-8d29-24c6-1e80-6b1c217c530b",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1711013440195
    },
    "e-49": {
      "id": "e-49",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-21",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-50"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "id": "abca3ef8-89fd-419b-96ff-5437a51c3d48",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      },
      "targets": [{
        "id": "abca3ef8-89fd-419b-96ff-5437a51c3d48",
        "appliesTo": "ELEMENT",
        "styleBlockIds": []
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1711094169601
    },
    "e-51": {
      "id": "e-51",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-21",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-52"
        }
      },
      "mediaQueries": ["main", "medium", "small", "tiny"],
      "target": {
        "selector": ".gery-link",
        "originalId": "65e5e24540c1f882634e5a7e|9225ab43-bdd7-96f0-260b-c26c924f124a",
        "appliesTo": "CLASS"
      },
      "targets": [{
        "selector": ".gery-link",
        "originalId": "65e5e24540c1f882634e5a7e|9225ab43-bdd7-96f0-260b-c26c924f124a",
        "appliesTo": "CLASS"
      }],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1711094180957
    },
    "e-53": {
      "id": "e-53",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-26",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-54"
        }
      },
      "mediaQueries": ["tiny"],
      "target": {
        "selector": ".omen-menu",
        "originalId": "0cad114a-a2d5-9db8-a8f8-e61b86ffc83c",
        "appliesTo": "CLASS"
      },
      "targets": [],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1714467486997
    },
    "e-54": {
      "id": "e-54",
      "name": "",
      "animationType": "custom",
      "eventTypeId": "MOUSE_SECOND_CLICK",
      "action": {
        "id": "",
        "actionTypeId": "GENERAL_START_ACTION",
        "config": {
          "delay": 0,
          "easing": "",
          "duration": 0,
          "actionListId": "a-27",
          "affectedElements": {},
          "playInReverse": false,
          "autoStopEventId": "e-53"
        }
      },
      "mediaQueries": ["tiny"],
      "target": {
        "selector": ".omen-menu",
        "originalId": "0cad114a-a2d5-9db8-a8f8-e61b86ffc83c",
        "appliesTo": "CLASS"
      },
      "targets": [],
      "config": {
        "loop": false,
        "playInReverse": false,
        "scrollOffsetValue": null,
        "scrollOffsetUnit": null,
        "delay": null,
        "direction": null,
        "effectIn": null
      },
      "createdOn": 1714467486997
    }
  },
  "actionLists": {
    "a-9": {
      "id": "a-9",
      "title": "map3",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-9-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 900,
            "easing": "",
            "duration": 450,
            "target": {
              "selector": ".wrapper",
              "selectorGuids": ["1578a88e-fbf3-63c2-d120-d532a8f682ce"]
            },
            "value": 0,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1709554243236
    },
    "a-16": {
      "id": "a-16",
      "title": "fade-oit",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-16-n-3",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "target": {
              "selector": ".usual-page",
              "selectorGuids": ["f208211a-bd23-e134-ab46-29eb2d5d413b"]
            },
            "xValue": 0.5,
            "yValue": 0.5,
            "locked": true
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-16-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 450,
            "target": {
              "selector": ".wrapper",
              "selectorGuids": ["1578a88e-fbf3-63c2-d120-d532a8f682ce"]
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-16-n-2",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "selector": ".usual-page",
              "selectorGuids": ["f208211a-bd23-e134-ab46-29eb2d5d413b"]
            },
            "xValue": 1,
            "yValue": 1,
            "locked": true
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1709554243236
    },
    "a-17": {
      "id": "a-17",
      "title": "fade-oit 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-17-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 450,
            "target": {
              "selector": ".wrapper",
              "selectorGuids": ["1578a88e-fbf3-63c2-d120-d532a8f682ce"]
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-17-n-3",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "selector": ".usual-page",
              "selectorGuids": ["f208211a-bd23-e134-ab46-29eb2d5d413b"]
            },
            "xValue": 0.5,
            "yValue": 0.5,
            "locked": true
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1709554243236
    },
    "a-18": {
      "id": "a-18",
      "title": "fade-oit 3",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-18-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 450,
            "target": {
              "selector": ".wrapper",
              "selectorGuids": ["1578a88e-fbf3-63c2-d120-d532a8f682ce"]
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1709554243236
    },
    "a-10": {
      "id": "a-10",
      "title": "map1",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-10-n",
          "actionTypeId": "TRANSFORM_SCALE",
          "config": {
            "delay": 0,
            "easing": [0.01, 0.39, 0, 1],
            "duration": 1000,
            "target": {
              "selector": ".map-block",
              "selectorGuids": ["f0203876-0287-d81b-6669-d2a2000c9517"]
            },
            "xValue": 0.5,
            "yValue": 0.5,
            "locked": true
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1709554243236
    },
    "a-13": {
      "id": "a-13",
      "title": "map2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-13-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 1000,
            "target": {
              "selector": ".div-block-3",
              "selectorGuids": ["8f62fef8-e736-0ac0-4db8-7a277d4edd45"]
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1709554243236
    },
    "a-21": {
      "id": "a-21",
      "title": "fade-IN",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-21-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 450,
            "target": {
              "selector": ".wrapper",
              "selectorGuids": ["1578a88e-fbf3-63c2-d120-d532a8f682ce"]
            },
            "value": 0,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1709554243236
    },
    "a-22": {
      "id": "a-22",
      "title": "fade-IN 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-22-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 1000,
            "target": {
              "selector": ".usual-page",
              "selectorGuids": ["f208211a-bd23-e134-ab46-29eb2d5d413b"]
            },
            "value": 0,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1709554243236
    },
    "a-23": {
      "id": "a-23",
      "title": "fade-oit 6",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-23-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "target": {
              "selector": ".wrapper",
              "selectorGuids": ["1578a88e-fbf3-63c2-d120-d532a8f682ce"]
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-23-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 450,
            "target": {
              "selector": ".wrapper",
              "selectorGuids": ["1578a88e-fbf3-63c2-d120-d532a8f682ce"]
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1709554243236
    },
    "a-24": {
      "id": "a-24",
      "title": "HOVER-utopian",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-24-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".uto-img-hide",
              "selectorGuids": ["b7cacaab-01df-115b-55b1-ca1e171fc36f"]
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-24-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".uto-img-hide",
              "selectorGuids": ["b7cacaab-01df-115b-55b1-ca1e171fc36f"]
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": true,
      "createdOn": 1711011066697
    },
    "a-25": {
      "id": "a-25",
      "title": "HOVER-utopian 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-25-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".uto-img-hide",
              "selectorGuids": ["b7cacaab-01df-115b-55b1-ca1e171fc36f"]
            },
            "value": 0,
            "unit": ""
          }
        }]
      }],
      "useFirstGroupAsInitialState": false,
      "createdOn": 1711011066697
    },
    "a-26": {
      "id": "a-26",
      "title": "open-menu-MOB",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-26-n-3",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "value": "none",
            "target": {
              "useEventTarget": "SIBLINGS",
              "selector": ".dopmenu",
              "selectorGuids": ["3b8ecdd3-7020-ecac-200b-df6139c94a90"]
            }
          }
        }, {
          "id": "a-26-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 500,
            "target": {
              "useEventTarget": "SIBLINGS",
              "selector": ".dopmenu",
              "selectorGuids": ["3b8ecdd3-7020-ecac-200b-df6139c94a90"]
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-26-n",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 250,
            "target": {
              "selector": ".top-m",
              "selectorGuids": ["ed7026b7-36f6-a9b4-56e2-03bc67217b2e"]
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-26-n-2",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 250,
            "target": {
              "selector": ".div-block-9",
              "selectorGuids": ["5ea112a7-51a0-db90-bc7b-d1603b17e284"]
            },
            "value": 0,
            "unit": ""
          }
        }, {
          "id": "a-26-n-7",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "value": "none",
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".open-m.ravno",
              "selectorGuids": ["7a713a64-bee1-b4be-edf6-eeec06a9d443", "06a98594-230b-0235-1cf1-b4c74a22ea3d"]
            }
          }
        }, {
          "id": "a-26-n-8",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "value": "flex",
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".open-m.crest",
              "selectorGuids": ["7a713a64-bee1-b4be-edf6-eeec06a9d443", "7da9aa26-53a3-6d56-e4ab-053901be7155"]
            }
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-26-n-5",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "value": "flex",
            "target": {
              "useEventTarget": "SIBLINGS",
              "selector": ".dopmenu",
              "selectorGuids": ["3b8ecdd3-7020-ecac-200b-df6139c94a90"]
            }
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-26-n-6",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 250,
            "target": {
              "useEventTarget": "SIBLINGS",
              "selector": ".dopmenu",
              "selectorGuids": ["3b8ecdd3-7020-ecac-200b-df6139c94a90"]
            },
            "value": 1,
            "unit": ""
          }
        }]
      }],
      "createdOn": 1714467553157,
      "useFirstGroupAsInitialState": true
    },
    "a-27": {
      "id": "a-27",
      "title": "open-menu-MOB 2",
      "actionItemGroups": [{
        "actionItems": [{
          "id": "a-27-n-6",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 250,
            "target": {
              "useEventTarget": "SIBLINGS",
              "selector": ".dopmenu",
              "selectorGuids": ["3b8ecdd3-7020-ecac-200b-df6139c94a90"]
            },
            "value": 0,
            "unit": ""
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-27-n-5",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "value": "none",
            "target": {
              "useEventTarget": "SIBLINGS",
              "selector": ".dopmenu",
              "selectorGuids": ["3b8ecdd3-7020-ecac-200b-df6139c94a90"]
            }
          }
        }]
      }, {
        "actionItems": [{
          "id": "a-27-n-3",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 250,
            "target": {
              "selector": ".top-m",
              "selectorGuids": ["ed7026b7-36f6-a9b4-56e2-03bc67217b2e"]
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-27-n-4",
          "actionTypeId": "STYLE_OPACITY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 250,
            "target": {
              "selector": ".div-block-9",
              "selectorGuids": ["5ea112a7-51a0-db90-bc7b-d1603b17e284"]
            },
            "value": 1,
            "unit": ""
          }
        }, {
          "id": "a-27-n-7",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "value": "none",
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".open-m.crest",
              "selectorGuids": ["7a713a64-bee1-b4be-edf6-eeec06a9d443", "7da9aa26-53a3-6d56-e4ab-053901be7155"]
            }
          }
        }, {
          "id": "a-27-n-8",
          "actionTypeId": "GENERAL_DISPLAY",
          "config": {
            "delay": 0,
            "easing": "",
            "duration": 0,
            "value": "flex",
            "target": {
              "useEventTarget": "CHILDREN",
              "selector": ".open-m.ravno",
              "selectorGuids": ["7a713a64-bee1-b4be-edf6-eeec06a9d443", "06a98594-230b-0235-1cf1-b4c74a22ea3d"]
            }
          }
        }]
      }],
      "createdOn": 1714467553157,
      "useFirstGroupAsInitialState": false
    }
  },
  "site": {
    "mediaQueries": [{
      "key": "main",
      "min": 992,
      "max": 10000
    }, {
      "key": "medium",
      "min": 768,
      "max": 991
    }, {
      "key": "small",
      "min": 480,
      "max": 767
    }, {
      "key": "tiny",
      "min": 0,
      "max": 479
    }]
  }
});

/***/ }),

/***/ "./node_modules/bezier-easing/src/index.js":
/*!*************************************************!*\
  !*** ./node_modules/bezier-easing/src/index.js ***!
  \*************************************************/
/***/ ((module) => {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

function LinearEasing (x) {
  return x;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};


/***/ }),

/***/ "./node_modules/gsap/CSSPlugin.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/CSSPlugin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CSSPlugin: () => (/* binding */ CSSPlugin),
/* harmony export */   _createElement: () => (/* binding */ _createElement),
/* harmony export */   _getBBox: () => (/* binding */ _getBBox),
/* harmony export */   checkPrefix: () => (/* binding */ _checkPropPrefix),
/* harmony export */   "default": () => (/* binding */ CSSPlugin)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */


var _win,
    _doc,
    _docElement,
    _pluginInitted,
    _tempDiv,
    _tempDivStyler,
    _recentSetterPlugin,
    _reverting,
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _transformProps = {},
    _RAD2DEG = 180 / Math.PI,
    _DEG2RAD = Math.PI / 180,
    _atan2 = Math.atan2,
    _bigNum = 1e8,
    _capsExp = /([A-Z])/g,
    _horizontalExp = /(left|right|width|margin|padding|x)/i,
    _complexExp = /[\s,\(]\S/,
    _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
},
    _renderCSSProp = function _renderCSSProp(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
},
    _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
},
    //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
},
    _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
},
    _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
},
    _setterCSSStyle = function _setterCSSStyle(target, property, value) {
  return target.style[property] = value;
},
    _setterCSSProp = function _setterCSSProp(target, property, value) {
  return target.style.setProperty(property, value);
},
    _setterTransform = function _setterTransform(target, property, value) {
  return target._gsap[property] = value;
},
    _setterScale = function _setterScale(target, property, value) {
  return target._gsap.scaleX = target._gsap.scaleY = value;
},
    _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
},
    _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
  var cache = target._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
},
    _transformProp = "transform",
    _transformOriginProp = _transformProp + "Origin",
    _saveStyle = function _saveStyle(property, isNotCSS) {
  var _this = this;

  var target = this.target,
      style = target.style,
      cache = target._gsap;

  if (property in _transformProps && style) {
    this.tfm = this.tfm || {};

    if (property !== "transform") {
      property = _propertyAliases[property] || property;
      ~property.indexOf(",") ? property.split(",").forEach(function (a) {
        return _this.tfm[a] = _get(target, a);
      }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property); // note: scale would map to "scaleX,scaleY", thus we loop and apply them both.

      property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
    } else {
      return _propertyAliases.transform.split(",").forEach(function (p) {
        return _saveStyle.call(_this, p, isNotCSS);
      });
    }

    if (this.props.indexOf(_transformProp) >= 0) {
      return;
    }

    if (cache.svg) {
      this.svgo = target.getAttribute("data-svg-origin");
      this.props.push(_transformOriginProp, isNotCSS, "");
    }

    property = _transformProp;
  }

  (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
},
    _removeIndependentTransforms = function _removeIndependentTransforms(style) {
  if (style.translate) {
    style.removeProperty("translate");
    style.removeProperty("scale");
    style.removeProperty("rotate");
  }
},
    _revertStyle = function _revertStyle() {
  var props = this.props,
      target = this.target,
      style = target.style,
      cache = target._gsap,
      i,
      p;

  for (i = 0; i < props.length; i += 3) {
    // stored like this: property, isNotCSS, value
    props[i + 1] ? target[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].substr(0, 2) === "--" ? props[i] : props[i].replace(_capsExp, "-$1").toLowerCase());
  }

  if (this.tfm) {
    for (p in this.tfm) {
      cache[p] = this.tfm[p];
    }

    if (cache.svg) {
      cache.renderTransform();
      target.setAttribute("data-svg-origin", this.svgo || "");
    }

    i = _reverting();

    if ((!i || !i.isStart) && !style[_transformProp]) {
      _removeIndependentTransforms(style);

      if (cache.zOrigin && style[_transformOriginProp]) {
        style[_transformOriginProp] += " " + cache.zOrigin + "px"; // since we're uncaching, we must put the zOrigin back into the transformOrigin so that we can pull it out accurately when we parse again. Otherwise, we'd lose the z portion of the origin since we extract it to protect from Safari bugs.

        cache.zOrigin = 0;
        cache.renderTransform();
      }

      cache.uncache = 1; // if it's a startAt that's being reverted in the _initTween() of the core, we don't need to uncache transforms. This is purely a performance optimization.
    }
  }
},
    _getStyleSaver = function _getStyleSaver(target, properties) {
  var saver = {
    target: target,
    props: [],
    revert: _revertStyle,
    save: _saveStyle
  };
  target._gsap || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getCache(target); // just make sure there's a _gsap cache defined because we read from it in _saveStyle() and it's more efficient to just check it here once.

  properties && properties.split(",").forEach(function (p) {
    return saver.save(p);
  });
  return saver;
},
    _supports3D,
    _createElement = function _createElement(type, ns) {
  var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.

  return e && e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://gsap.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
},
    _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
  var cs = getComputedStyle(target);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
},
    _prefixes = "O,Moz,ms,Ms,Webkit".split(","),
    _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
  var e = element || _tempDiv,
      s = e.style,
      i = 5;

  if (property in s && !preferPrefix) {
    return property;
  }

  property = property.charAt(0).toUpperCase() + property.substr(1);

  while (i-- && !(_prefixes[i] + property in s)) {}

  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
},
    _initCore = function _initCore() {
  if (_windowExists() && window.document) {
    _win = window;
    _doc = _win.document;
    _docElement = _doc.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.

    _supports3D = !!_checkPropPrefix("perspective");
    _reverting = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.reverting;
    _pluginInitted = 1;
  }
},
    _getBBoxHack = function _getBBoxHack(swapIfPossible) {
  //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
      oldParent = this.parentNode,
      oldSibling = this.nextSibling,
      oldCSS = this.style.cssText,
      bbox;

  _docElement.appendChild(svg);

  svg.appendChild(this);
  this.style.display = "block";

  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox; //store the original

      this.getBBox = _getBBoxHack;
    } catch (e) {}
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }

  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }

  _docElement.removeChild(svg);

  this.style.cssText = oldCSS;
  return bbox;
},
    _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
  var i = attributesArray.length;

  while (i--) {
    if (target.hasAttribute(attributesArray[i])) {
      return target.getAttribute(attributesArray[i]);
    }
  }
},
    _getBBox = function _getBBox(target) {
  var bounds;

  try {
    bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
  } catch (error) {
    bounds = _getBBoxHack.call(target, true);
  }

  bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.

  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
},
    _isSVG = function _isSVG(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
},
    //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
  if (property) {
    var style = target.style,
        first2Chars;

    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }

    if (style.removeProperty) {
      first2Chars = property.substr(0, 2);

      if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
        //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
        property = "-" + property;
      }

      style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
      style.removeAttribute(property);
    }
  }
},
    _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;

  plugin._props.push(property);

  return pt;
},
    _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
},
    _nonStandardLayouts = {
  grid: 1,
  flex: 1
},
    //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
  var curValue = parseFloat(value) || 0,
      curUnit = (value + "").trim().substr((curValue + "").length) || "px",
      // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
  style = _tempDiv.style,
      horizontal = _horizontalExp.test(property),
      isRootSVG = target.tagName.toLowerCase() === "svg",
      measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"),
      amount = 100,
      toPixels = unit === "px",
      toPercent = unit === "%",
      px,
      parent,
      cache,
      isSVG;

  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }

  curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
  isSVG = target.getCTM && _isSVG(target);

  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
  }

  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;

  if (isSVG) {
    parent = (target.ownerSVGElement || {}).parentNode;
  }

  if (!parent || parent === _doc || !parent.appendChild) {
    parent = _doc.body;
  }

  cache = parent._gsap;

  if (cache && toPercent && cache.width && horizontal && cache.time === _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time && !cache.uncache) {
    return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(curValue / cache.width * amount);
  } else {
    if (toPercent && (property === "height" || property === "width")) {
      // if we're dealing with width/height that's inside a container with padding and/or it's a flexbox/grid container, we must apply it to the target itself rather than the _tempDiv in order to ensure complete accuracy, factoring in the parent's padding.
      var v = target.style[property];
      target.style[property] = amount + unit;
      px = target[measureProperty];
      v ? target.style[property] = v : _removeProperty(target, property);
    } else {
      (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
      parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.

      parent.appendChild(_tempDiv);
      px = _tempDiv[measureProperty];
      parent.removeChild(_tempDiv);
      style.position = "absolute";
    }

    if (horizontal && toPercent) {
      cache = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(parent);
      cache.time = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._ticker.time;
      cache.width = parent[measureProperty];
    }
  }

  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
},
    _get = function _get(target, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();

  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];

    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }

  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target.style[property];

    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
  }

  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
},
    _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
  // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  if (!start || start === "none") {
    // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://gsap.com/forums/topic/18310-clippath-doesnt-work-on-ios/
    var p = _checkPropPrefix(prop, target, 1),
        s = p && _getComputedProperty(target, p, 1);

    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://gsap.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
  }

  var pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, target.style, prop, 0, 1, _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._renderComplexString),
      index = 0,
      matchIndex = 0,
      a,
      result,
      startValues,
      startNum,
      color,
      startValue,
      endValue,
      endNum,
      chunk,
      endUnit,
      startUnit,
      endValues;
  pt.b = start;
  pt.e = end;
  start += ""; // ensure values are strings

  end += "";

  if (end === "auto") {
    startValue = target.style[prop];
    target.style[prop] = end;
    end = _getComputedProperty(target, prop) || end;
    startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
  }

  a = [start, end];

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().


  start = a[0];
  end = a[1];
  startValues = start.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];
  endValues = end.match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp) || [];

  if (endValues.length) {
    while (result = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);

      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }

      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numWithUnitExp.lastIndex - endUnit.length;

        if (!endUnit) {
          //if something like "perspective:300" is passed in and we must add a unit to the end
          endUnit = endUnit || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[prop] || startUnit;

          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }

        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
        } // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.


        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }

    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }

  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
},
    _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
  var split = value.split(" "),
      x = split[0],
      y = split[1] || "50%";

  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    //the user provided them in the wrong order, so flip them
    value = x;
    x = y;
    y = value;
  }

  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
},
    _renderClearProps = function _renderClearProps(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target = data.t,
        style = target.style,
        props = data.u,
        cache = target._gsap,
        prop,
        clearTransforms,
        i;

    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;

      while (--i > -1) {
        prop = props[i];

        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }

        _removeProperty(target, prop);
      }
    }

    if (clearTransforms) {
      _removeProperty(target, _transformProp);

      if (cache) {
        cache.svg && target.removeAttribute("transform");

        _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.


        cache.uncache = 1;

        _removeIndependentTransforms(style);
      }
    }
  }
},
    // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
  clearProps: function clearProps(plugin, target, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;

      plugin._props.push(property);

      return 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */

},

/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0],
    _rotationalProperties = {},
    _isNullTransform = function _isNullTransform(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
},
    _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
  var matrixString = _getComputedProperty(target, _transformProp);

  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._numExp).map(_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round);
},
    _getMatrix = function _getMatrix(target, force2D) {
  var cache = target._gsap || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getCache)(target),
      style = target.style,
      matrix = _getComputedTransformMatrixAsArray(target),
      parent,
      nextSibling,
      temp,
      addedToDOM;

  if (cache.svg && target.getAttribute("transform")) {
    temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.

    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
    //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
    temp = style.display;
    style.display = "block";
    parent = target.parentNode;

    if (!parent || !target.offsetParent) {
      // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
      addedToDOM = 1; //flag

      nextSibling = target.nextElementSibling;

      _docElement.appendChild(target); //we must add it to the DOM in order to get values properly

    }

    matrix = _getComputedTransformMatrixAsArray(target);
    temp ? style.display = temp : _removeProperty(target, "display");

    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
  }

  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
},
    _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target._gsap,
      matrix = matrixArray || _getMatrix(target, true),
      xOriginOld = cache.xOrigin || 0,
      yOriginOld = cache.yOrigin || 0,
      xOffsetOld = cache.xOffset || 0,
      yOffsetOld = cache.yOffset || 0,
      a = matrix[0],
      b = matrix[1],
      c = matrix[2],
      d = matrix[3],
      tx = matrix[4],
      ty = matrix[5],
      originSplit = origin.split(" "),
      xOrigin = parseFloat(originSplit[0]) || 0,
      yOrigin = parseFloat(originSplit[1]) || 0,
      bounds,
      determinant,
      x,
      y;

  if (!originIsAbsolute) {
    bounds = _getBBox(target);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin); // if (!("xOrigin" in cache) && (xOrigin || yOrigin)) { // added in 3.12.3, reverted in 3.12.4; requires more exploration
    // 	xOrigin -= bounds.x;
    // 	yOrigin -= bounds.y;
    // }
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y; // theory: we only had to do this for smoothing and it assumes that the previous one was not originIsAbsolute.
  }

  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }

  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).

  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);

    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }

  target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
},
    _parseTransform = function _parseTransform(target, uncache) {
  var cache = target._gsap || new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.GSCache(target);

  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }

  var style = target.style,
      invertedScaleX = cache.scaleX < 0,
      px = "px",
      deg = "deg",
      cs = getComputedStyle(target),
      origin = _getComputedProperty(target, _transformOriginProp) || "0",
      x,
      y,
      z,
      scaleX,
      scaleY,
      rotation,
      rotationX,
      rotationY,
      skewX,
      skewY,
      perspective,
      xOrigin,
      yOrigin,
      matrix,
      angle,
      cos,
      sin,
      a,
      b,
      c,
      d,
      a12,
      a22,
      t1,
      t2,
      t3,
      a13,
      a23,
      a33,
      a42,
      a43,
      a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target.getCTM && _isSVG(target));

  if (cs.translate) {
    // accommodate independent transforms by combining them into normal ones.
    if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
      style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
    }

    style.scale = style.rotate = style.translate = "none";
  }

  matrix = _getMatrix(target, cache.svg);

  if (cache.svg) {
    if (cache.uncache) {
      // if cache.uncache is true (and maybe if origin is 0,0), we need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Previously we let the data-svg-origin stay instead, but when introducing revert(), it complicated things.
      t2 = target.getBBox();
      origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
      t1 = "";
    } else {
      t1 = !uncache && target.getAttribute("data-svg-origin"); //  Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
    }

    _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }

  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;

  if (matrix !== _identity2DMatrix) {
    a = matrix[0]; //a11

    b = matrix[1]; //a21

    c = matrix[2]; //a31

    d = matrix[3]; //a41

    x = a12 = matrix[4];
    y = a22 = matrix[5]; //2D matrix

    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).

      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));

      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      } //3D matrix

    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG; //rotationX

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      } //rotationY


      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      } //rotationZ


      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;

      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }

      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }

      scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a * a + b * b + c * c));
      scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }

    if (cache.svg) {
      //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
      t1 = target.getAttribute("transform");
      cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
      t1 && target.setAttribute("transform", t1);
    }
  }

  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }

  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleX);
  cache.scaleY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(scaleY);
  cache.rotation = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotation) + deg;
  cache.rotationX = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationX) + deg;
  cache.rotationY = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;

  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }

  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
},
    _firstTwoOnly = function _firstTwoOnly(value) {
  return (value = value.split(" "))[0] + " " + value[1];
},
    //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
  var unit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(start);
  return (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
},
    _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;

  _renderCSSTransforms(ratio, cache);
},
    _zeroDeg = "0deg",
    _zeroPx = "0px",
    _endParenthesis = ") ",
    _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
  var _ref = cache || this,
      xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      rotation = _ref.rotation,
      rotationY = _ref.rotationY,
      rotationX = _ref.rotationX,
      skewX = _ref.skewX,
      skewY = _ref.skewY,
      scaleX = _ref.scaleX,
      scaleY = _ref.scaleY,
      transformPerspective = _ref.transformPerspective,
      force3D = _ref.force3D,
      target = _ref.target,
      zOrigin = _ref.zOrigin,
      transforms = "",
      use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)


  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD,
        a13 = Math.sin(angle),
        a33 = Math.cos(angle),
        cos;

    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
  }

  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }

  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }

  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }

  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }

  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }

  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }

  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }

  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }

  target.style[_transformProp] = transforms || "translate(0, 0)";
},
    _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
  var _ref2 = cache || this,
      xPercent = _ref2.xPercent,
      yPercent = _ref2.yPercent,
      x = _ref2.x,
      y = _ref2.y,
      rotation = _ref2.rotation,
      skewX = _ref2.skewX,
      skewY = _ref2.skewY,
      scaleX = _ref2.scaleX,
      scaleY = _ref2.scaleY,
      target = _ref2.target,
      xOrigin = _ref2.xOrigin,
      yOrigin = _ref2.yOrigin,
      xOffset = _ref2.xOffset,
      yOffset = _ref2.yOffset,
      forceCSS = _ref2.forceCSS,
      tx = parseFloat(x),
      ty = parseFloat(y),
      a11,
      a21,
      a12,
      a22,
      temp;

  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);

  if (skewY) {
    //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }

  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;

    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;

      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }

    a11 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a11);
    a21 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a21);
    a12 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a12);
    a22 = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }

  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target, "x", x, "px");
    ty = _convertToUnit(target, "y", y, "px");
  }

  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }

  if (xPercent || yPercent) {
    //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
    temp = target.getBBox();
    tx = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(tx + xPercent / 100 * temp.width);
    ty = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._round)(ty + yPercent / 100 * temp.height);
  }

  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target.setAttribute("transform", temp);
  forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the transform attribute changes!)
},
    _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
  var cap = 360,
      isString = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(endValue),
      endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1),
      change = endNum - startNum,
      finalValue = startNum + change + "deg",
      direction,
      pt;

  if (isString) {
    direction = endValue.split("_")[1];

    if (direction === "short") {
      change %= cap;

      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }

    if (direction === "cw" && change < 0) {
      change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
    } else if (direction === "ccw" && change > 0) {
      change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
  }

  plugin._pt = pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";

  plugin._props.push(property);

  return pt;
},
    _assign = function _assign(target, source) {
  // Internet Explorer doesn't have Object.assign(), so we recreate it here.
  for (var p in source) {
    target[p] = source[p];
  }

  return target;
},
    _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
  //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
  var startCache = _assign({}, target._gsap),
      exclude = "perspective,force3D,transformOrigin,svgOrigin",
      style = target.style,
      endCache,
      p,
      startValue,
      endValue,
      startNum,
      endNum,
      startUnit,
      endUnit;

  if (startCache.svg) {
    startValue = target.getAttribute("transform");
    target.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);

    _removeProperty(target, _transformProp);

    target.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target, 1);
    style[_transformProp] = startValue;
  }

  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];

    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
      startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
      endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;

      plugin._props.push(p);
    }
  }

  _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.


(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("padding,margin,Width,Radius", function (name, index) {
  var t = "Top",
      r = "Right",
      b = "Bottom",
      l = "Left",
      props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
    return index < 2 ? name + side : "border" + side + name;
  });

  _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
    var a, vars;

    if (arguments.length < 4) {
      // getter, passed target, property, and unit (from _get())
      a = props.map(function (prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }

    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function (prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target, vars, tween);
  };
});

var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target) {
    return target.style && target.nodeType;
  },
  init: function init(target, vars, tween, index, targets) {
    var props = this._props,
        style = target.style,
        startAt = tween.vars.startAt,
        startValue,
        endValue,
        endNum,
        startNum,
        type,
        specialProp,
        p,
        startUnit,
        endUnit,
        relative,
        isTransformRelated,
        transformPropTween,
        cache,
        smooth,
        hasPriority,
        inlineProps;
    _pluginInitted || _initCore(); // we may call init() multiple times on the same plugin instance, like when adding special properties, so make sure we don't overwrite the revert data or inlineProps

    this.styles = this.styles || _getStyleSaver(target);
    inlineProps = this.styles.props;
    this.tween = tween;

    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }

      endValue = vars[p];

      if (_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._plugins[p] && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._checkPlugin)(p, vars, tween, index, target, targets)) {
        // plugins
        continue;
      }

      type = typeof endValue;
      specialProp = _specialProps[p];

      if (type === "function") {
        endValue = endValue.call(tween, index, target, targets);
        type = typeof endValue;
      }

      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(endValue);
      }

      if (specialProp) {
        specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        //CSS variable
        startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
        endValue += "";
        _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.lastIndex = 0;

        if (!_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._colorExp.test(startValue)) {
          // colors don't have units
          startUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue);
          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue);
        }

        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, 0, style[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._replaceRandom)(startValue));
          (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(startValue + "") || startValue === "auto" || (startValue += _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] || (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.

          (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
        } else {
          startValue = _get(target, p);
        }

        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);

        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
              //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
              startNum = 0;
            }

            inlineProps.push("visibility", 0, style.visibility);

            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }

          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }

        isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---

        if (isTransformRelated) {
          this.styles.save(p);

          if (!transformPropTween) {
            cache = target._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.

            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)

            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
          }

          if (p === "scale") {
            this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.

            if (cache.svg) {
              _applySVGOrigin(target, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!

              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);

              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }

            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target, endValue, 1, smooth, 0, this);

            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endValue) : endValue);

            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);

            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target);

            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }

        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0); // protect against NaN

          endUnit = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.getUnit)(endValue) || (p in _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units ? _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
          this._pt = new _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;

          if (startUnit !== endUnit && endUnit !== "%") {
            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target) {
            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
            this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
          } else if (p !== "parseTransform") {
            (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._missingPlugin)(p, endValue);

            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
        }

        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target[p]));
        props.push(p);
      }
    }

    hasPriority && (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._sortPropTweensByPriority)(this);
  },
  render: function render(ratio, data) {
    if (data.tween._time || !_reverting()) {
      var pt = data._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target, property, plugin) {
    //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._getSetter)(target, property);
  },
  core: {
    _removeProperty: _removeProperty,
    _getMatrix: _getMatrix
  }
};
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.checkPrefix = _checkPropPrefix;
_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.core.getStyleSaver = _getStyleSaver;

(function (positionAndScale, rotation, others, aliases) {
  var all = (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(positionAndScale + "," + rotation + "," + others, function (name) {
    _transformProps[name] = 1;
  });

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(rotation, function (name) {
    _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });

  _propertyAliases[all[13]] = positionAndScale + "," + rotation;

  (0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)(aliases, function (name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");

(0,_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
  _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__._config.units[name] = "px";
});

_gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(CSSPlugin);


/***/ }),

/***/ "./node_modules/gsap/gsap-core.js":
/*!****************************************!*\
  !*** ./node_modules/gsap/gsap-core.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* binding */ Animation),
/* harmony export */   Back: () => (/* binding */ Back),
/* harmony export */   Bounce: () => (/* binding */ Bounce),
/* harmony export */   Circ: () => (/* binding */ Circ),
/* harmony export */   Cubic: () => (/* binding */ Cubic),
/* harmony export */   Elastic: () => (/* binding */ Elastic),
/* harmony export */   Expo: () => (/* binding */ Expo),
/* harmony export */   GSCache: () => (/* binding */ GSCache),
/* harmony export */   Linear: () => (/* binding */ Linear),
/* harmony export */   Power0: () => (/* binding */ Power0),
/* harmony export */   Power1: () => (/* binding */ Power1),
/* harmony export */   Power2: () => (/* binding */ Power2),
/* harmony export */   Power3: () => (/* binding */ Power3),
/* harmony export */   Power4: () => (/* binding */ Power4),
/* harmony export */   PropTween: () => (/* binding */ PropTween),
/* harmony export */   Quad: () => (/* binding */ Quad),
/* harmony export */   Quart: () => (/* binding */ Quart),
/* harmony export */   Quint: () => (/* binding */ Quint),
/* harmony export */   Sine: () => (/* binding */ Sine),
/* harmony export */   SteppedEase: () => (/* binding */ SteppedEase),
/* harmony export */   Strong: () => (/* binding */ Strong),
/* harmony export */   Timeline: () => (/* binding */ Timeline),
/* harmony export */   TimelineLite: () => (/* binding */ Timeline),
/* harmony export */   TimelineMax: () => (/* binding */ Timeline),
/* harmony export */   Tween: () => (/* binding */ Tween),
/* harmony export */   TweenLite: () => (/* binding */ Tween),
/* harmony export */   TweenMax: () => (/* binding */ Tween),
/* harmony export */   _checkPlugin: () => (/* binding */ _checkPlugin),
/* harmony export */   _colorExp: () => (/* binding */ _colorExp),
/* harmony export */   _colorStringFilter: () => (/* binding */ _colorStringFilter),
/* harmony export */   _config: () => (/* binding */ _config),
/* harmony export */   _forEachName: () => (/* binding */ _forEachName),
/* harmony export */   _getCache: () => (/* binding */ _getCache),
/* harmony export */   _getProperty: () => (/* binding */ _getProperty),
/* harmony export */   _getSetter: () => (/* binding */ _getSetter),
/* harmony export */   _isString: () => (/* binding */ _isString),
/* harmony export */   _isUndefined: () => (/* binding */ _isUndefined),
/* harmony export */   _missingPlugin: () => (/* binding */ _missingPlugin),
/* harmony export */   _numExp: () => (/* binding */ _numExp),
/* harmony export */   _numWithUnitExp: () => (/* binding */ _numWithUnitExp),
/* harmony export */   _parseRelative: () => (/* binding */ _parseRelative),
/* harmony export */   _plugins: () => (/* binding */ _plugins),
/* harmony export */   _relExp: () => (/* binding */ _relExp),
/* harmony export */   _removeLinkedListItem: () => (/* binding */ _removeLinkedListItem),
/* harmony export */   _renderComplexString: () => (/* binding */ _renderComplexString),
/* harmony export */   _replaceRandom: () => (/* binding */ _replaceRandom),
/* harmony export */   _round: () => (/* binding */ _round),
/* harmony export */   _roundModifier: () => (/* binding */ _roundModifier),
/* harmony export */   _setDefaults: () => (/* binding */ _setDefaults),
/* harmony export */   _sortPropTweensByPriority: () => (/* binding */ _sortPropTweensByPriority),
/* harmony export */   _ticker: () => (/* binding */ _ticker),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   "default": () => (/* binding */ gsap),
/* harmony export */   distribute: () => (/* binding */ distribute),
/* harmony export */   getUnit: () => (/* binding */ getUnit),
/* harmony export */   gsap: () => (/* binding */ gsap),
/* harmony export */   interpolate: () => (/* binding */ interpolate),
/* harmony export */   mapRange: () => (/* binding */ mapRange),
/* harmony export */   normalize: () => (/* binding */ normalize),
/* harmony export */   pipe: () => (/* binding */ pipe),
/* harmony export */   random: () => (/* binding */ random),
/* harmony export */   selector: () => (/* binding */ selector),
/* harmony export */   shuffle: () => (/* binding */ shuffle),
/* harmony export */   snap: () => (/* binding */ snap),
/* harmony export */   splitColor: () => (/* binding */ splitColor),
/* harmony export */   toArray: () => (/* binding */ toArray),
/* harmony export */   unitize: () => (/* binding */ unitize),
/* harmony export */   wrap: () => (/* binding */ wrap),
/* harmony export */   wrapYoyo: () => (/* binding */ wrapYoyo)
/* harmony export */ });
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/

/* eslint-disable */
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
},
    _defaults = {
  duration: .5,
  overwrite: false,
  delay: 0
},
    _suppressOverwrites,
    _reverting,
    _context,
    _bigNum = 1e8,
    _tinyNum = 1 / _bigNum,
    _2PI = Math.PI * 2,
    _HALF_PI = _2PI / 4,
    _gsID = 0,
    _sqrt = Math.sqrt,
    _cos = Math.cos,
    _sin = Math.sin,
    _isString = function _isString(value) {
  return typeof value === "string";
},
    _isFunction = function _isFunction(value) {
  return typeof value === "function";
},
    _isNumber = function _isNumber(value) {
  return typeof value === "number";
},
    _isUndefined = function _isUndefined(value) {
  return typeof value === "undefined";
},
    _isObject = function _isObject(value) {
  return typeof value === "object";
},
    _isNotFalse = function _isNotFalse(value) {
  return value !== false;
},
    _windowExists = function _windowExists() {
  return typeof window !== "undefined";
},
    _isFuncOrString = function _isFuncOrString(value) {
  return _isFunction(value) || _isString(value);
},
    _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () {},
    // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray,
    _strictNumExp = /(?:-?\.?\d|\.)+/gi,
    //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/,
    _delimitedValueExp = /[^,'"\[\]\s]+/gi,
    // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    _globalTimeline,
    _win,
    _coreInitted,
    _doc,
    _globals = {},
    _installScope = {},
    _coreReady,
    _install = function _install(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
},
    _missingPlugin = function _missingPlugin(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
},
    _warn = function _warn(message, suppress) {
  return !suppress && console.warn(message);
},
    _addGlobal = function _addGlobal(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
},
    _emptyFunc = function _emptyFunc() {
  return 0;
},
    _startAtRevertConfig = {
  suppressEvents: true,
  isStart: true,
  kill: false
},
    _revertConfigNoKill = {
  suppressEvents: true,
  kill: false
},
    _revertConfig = {
  suppressEvents: true
},
    _reservedProps = {},
    _lazyTweens = [],
    _lazyLookup = {},
    _lastRenderedFrame,
    _plugins = {},
    _effects = {},
    _nextGCFrame = 30,
    _harnessPlugins = [],
    _callbackNames = "",
    _harness = function _harness(targets) {
  var target = targets[0],
      harnessPlugin,
      i;
  _isObject(target) || _isFunction(target) || (targets = [targets]);

  if (!(harnessPlugin = (target._gsap || {}).harness)) {
    // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
    i = _harnessPlugins.length;

    while (i-- && !_harnessPlugins[i].targetTest(target)) {}

    harnessPlugin = _harnessPlugins[i];
  }

  i = targets.length;

  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }

  return targets;
},
    _getCache = function _getCache(target) {
  return target._gsap || _harness(toArray(target))[0]._gsap;
},
    _getProperty = function _getProperty(target, property, v) {
  return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
},
    _forEachName = function _forEachName(names, func) {
  return (names = names.split(",")).forEach(func) || names;
},
    //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
  return Math.round(value * 100000) / 100000 || 0;
},
    _roundPrecise = function _roundPrecise(value) {
  return Math.round(value * 10000000) / 10000000 || 0;
},
    // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
  var operator = value.charAt(0),
      end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
},
    _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
  //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
  var l = toFind.length,
      i = 0;

  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) {}

  return i < l;
},
    _lazyRender = function _lazyRender() {
  var l = _lazyTweens.length,
      a = _lazyTweens.slice(0),
      i,
      tween;

  _lazyLookup = {};
  _lazyTweens.length = 0;

  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
},
    _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
  _lazyTweens.length && !_reverting && _lazyRender();
  animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
  _lazyTweens.length && !_reverting && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
},
    _numericIfPossible = function _numericIfPossible(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
},
    _passThrough = function _passThrough(p) {
  return p;
},
    _setDefaults = function _setDefaults(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }

  return obj;
},
    _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
  return function (obj, defaults) {
    for (var p in defaults) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    }
  };
},
    _merge = function _merge(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }

  return base;
},
    _mergeDeep = function _mergeDeep(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }

  return base;
},
    _copyExcluding = function _copyExcluding(obj, excluding) {
  var copy = {},
      p;

  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }

  return copy;
},
    _inheritDefaults = function _inheritDefaults(vars) {
  var parent = vars.parent || _globalTimeline,
      func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;

  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }

  return vars;
},
    _arraysMatch = function _arraysMatch(a1, a2) {
  var i = a1.length,
      match = i === a2.length;

  while (match && i-- && a1[i] === a2[i]) {}

  return i < 0;
},
    _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = parent[lastProp],
      t;

  if (sortBy) {
    t = child[sortBy];

    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }

  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }

  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }

  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
},
    _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }

  if (lastProp === void 0) {
    lastProp = "_last";
  }

  var prev = child._prev,
      next = child._next;

  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }

  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }

  child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
},
    _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
  child._act = 0;
},
    _uncache = function _uncache(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
    var a = animation;

    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }

  return animation;
},
    _recacheAncestors = function _recacheAncestors(animation) {
  var parent = animation.parent;

  while (parent && parent.parent) {
    //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }

  return animation;
},
    _rewindStartAt = function _rewindStartAt(tween, totalTime, suppressEvents, force) {
  return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
},
    _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
},
    _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
},
    // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
},
    _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
},
    _setEnd = function _setEnd(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
},
    _alignPlayhead = function _alignPlayhead(animation, totalTime) {
  // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
  var parent = animation._dp;

  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));

    _setEnd(animation);

    parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
  }

  return animation;
},

/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
  var t;

  if (child._time || !child._dur && child._initted || child._start < timeline._time && (child._dur || !child.add)) {
    // in case, for example, the _start is moved on a tween that has already rendered, or if it's being inserted into a timeline BEFORE where the playhead is currently. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning. Special case: if it's a timeline (has .add() method) and no duration, we can skip rendering because the user may be populating it AFTER adding it to a parent timeline (unconventional, but possible, and we wouldn't want it to get removed if the parent's autoRemoveChildren is true).
    t = _parentToChildTotalTime(timeline.rawTime(), child);

    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.


  if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
    //in case any of the ancestors had completed but should now be enabled...
    if (timeline._dur < timeline.duration()) {
      t = timeline;

      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.

        t = t._dp;
      }
    }

    timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
  }
},
    _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));

  _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);

  _isFromOrFromStart(child) || (timeline._recent = child);
  skipChecks || _postAddChecks(timeline, child);
  timeline._ts < 0 && _alignPlayhead(timeline, timeline._tTime); // if the timeline is reversed and the new child makes it longer, we may need to adjust the parent's _start (push it back)

  return timeline;
},
    _scrollTrigger = function _scrollTrigger(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
},
    _attemptInitTween = function _attemptInitTween(tween, time, force, suppressEvents, tTime) {
  _initTween(tween, time, tTime);

  if (!tween._initted) {
    return 1;
  }

  if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);

    tween._lazy = [tTime, suppressEvents];
    return 1;
  }
},
    _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
},
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
},
    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio,
      ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1,
      // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
  repeatDelay = tween._rDelay,
      tTime = 0,
      pt,
      iteration,
      prevIteration;

  if (repeatDelay && tween._repeat) {
    // in case there's a zero-duration tween that has a repeat with a repeatDelay
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);

    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      // if iteration changed
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }

  if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
      // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
      return;
    }

    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

    suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.

    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;

    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }

    totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");

    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);

      if (!suppressEvents && !_reverting) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);

        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
},
    _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
  var child;

  if (time > prevTime) {
    child = animation._first;

    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }

      child = child._next;
    }
  } else {
    child = animation._last;

    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }

      child = child._prev;
    }
  }
},
    _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat,
      dur = _roundPrecise(duration) || 0,
      totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
  animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
},
    _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
},
    _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
},
    _parsePosition = function _parsePosition(animation, position, percentAnimation) {
  var labels = animation.labels,
      recent = animation._recent || _zeroPosition,
      clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur,
      //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
  i,
      offset,
      isPercent;

  if (_isString(position) && (isNaN(position) || position in labels)) {
    //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
    offset = position.charAt(0);
    isPercent = position.substr(-1) === "%";
    i = position.indexOf("=");

    if (offset === "<" || offset === ">") {
      i >= 0 && (position = position.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }

    if (i < 0) {
      position in labels || (labels[position] = clippedDuration);
      return labels[position];
    }

    offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));

    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }

    return i > 1 ? _parsePosition(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }

  return position == null ? clippedDuration : +position;
},
    _createTweenType = function _createTweenType(type, params, timeline) {
  var isLegacy = _isNumber(params[1]),
      varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1),
      vars = params[varsIndex],
      irVars,
      parent;

  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline;

  if (type) {
    irVars = vars;
    parent = timeline;

    while (parent && !("immediateRender" in irVars)) {
      // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }

    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
  }

  return new Tween(params[0], vars, params[varsIndex + 1]);
},
    _conditionalReturn = function _conditionalReturn(value, func) {
  return value || value === 0 ? func(value) : func;
},
    _clamp = function _clamp(min, max, value) {
  return value < min ? min : value > max ? max : value;
},
    getUnit = function getUnit(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
},
    // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
  return _conditionalReturn(value, function (v) {
    return _clamp(min, max, v);
  });
},
    _slice = [].slice,
    _isArrayLike = function _isArrayLike(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
},
    _flatten = function _flatten(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }

  return ar.forEach(function (value) {
    var _accumulator;

    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
},
    //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
  return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
},
    selector = function selector(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function (v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
},
    shuffle = function shuffle(a) {
  return a.sort(function () {
    return .5 - Math.random();
  });
},
    // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
  if (_isFunction(v)) {
    return v;
  }

  var vars = _isObject(v) ? v : {
    each: v
  },
      //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
  ease = _parseEase(vars.ease),
      from = vars.from || 0,
      base = parseFloat(vars.base) || 0,
      cache = {},
      isDecimal = from > 0 && from < 1,
      ratios = isNaN(from) || isDecimal,
      axis = vars.axis,
      ratioX = from,
      ratioY = from;

  if (_isString(from)) {
    ratioX = ratioY = {
      center: .5,
      edges: .5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }

  return function (i, target, a) {
    var l = (a || vars).length,
        distances = cache[l],
        originX,
        originY,
        x,
        y,
        d,
        j,
        max,
        min,
        wrapAt;

    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];

      if (!wrapAt) {
        max = -_bigNum;

        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {}

        wrapAt < l && wrapAt--;
      }

      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;

      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }

      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0; //unit

      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }

    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
  };
},
    _roundModifier = function _roundModifier(v) {
  //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())

  return function (raw) {
    var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);

    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
  };
},
    snap = function snap(snapTo, value) {
  var isArray = _isArray(snapTo),
      radius,
      is2D;

  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;

    if (snapTo.values) {
      snapTo = toArray(snapTo.values);

      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }

  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function (raw) {
    var x = parseFloat(is2D ? raw.x : raw),
        y = parseFloat(is2D ? raw.y : 0),
        min = _bigNum,
        closest = 0,
        i = snapTo.length,
        dx,
        dy;

    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }

      if (dx < min) {
        min = dx;
        closest = i;
      }
    }

    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
},
    random = function random(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
},
    pipe = function pipe() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return function (value) {
    return functions.reduce(function (v, f) {
      return f(v);
    }, value);
  };
},
    unitize = function unitize(func, unit) {
  return function (value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
},
    normalize = function normalize(min, max, value) {
  return mapRange(min, max, 0, 1, value);
},
    _wrapArray = function _wrapArray(a, wrapper, value) {
  return _conditionalReturn(value, function (index) {
    return a[~~wrapper(index)];
  });
},
    wrap = function wrap(min, max, value) {
  // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
    return (range + (value - min) % range) % range + min;
  });
},
    wrapYoyo = function wrapYoyo(min, max, value) {
  var range = max - min,
      total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
    value = (total + (value - min) % total) % total || 0;
    return min + (value > range ? total - value : value);
  });
},
    _replaceRandom = function _replaceRandom(value) {
  //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
  var prev = 0,
      s = "",
      i,
      nums,
      end,
      isArray;

  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }

  return s + value.substr(prev, value.length - prev);
},
    mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin,
      outRange = outMax - outMin;
  return _conditionalReturn(value, function (value) {
    return outMin + ((value - inMin) / inRange * outRange || 0);
  });
},
    interpolate = function interpolate(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function (p) {
    return (1 - p) * start + p * end;
  };

  if (!func) {
    var isString = _isString(start),
        master = {},
        p,
        i,
        interpolators,
        l,
        il;

    progress === true && (mutate = 1) && (progress = null);

    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;

      for (i = 1; i < l; i++) {
        interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
      }

      l--;

      func = function func(p) {
        p *= l;
        var i = Math.min(il, ~~p);
        return interpolators[i](p - i);
      };

      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }

    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }

      func = function func(p) {
        return _renderPropTweens(p, master) || (isString ? start.p : start);
      };
    }
  }

  return _conditionalReturn(progress, func);
},
    _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
  //used for nextLabel() and previousLabel()
  var labels = timeline.labels,
      min = _bigNum,
      p,
      distance,
      label;

  for (p in labels) {
    distance = labels[p] - fromTime;

    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }

  return label;
},
    _callback = function _callback(animation, type, executeLazyFirst) {
  var v = animation.vars,
      callback = v[type],
      prevContext = _context,
      context = animation._ctx,
      params,
      scope,
      result;

  if (!callback) {
    return;
  }

  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.

  context && (_context = context);
  result = params ? callback.apply(scope, params) : callback.call(scope);
  _context = prevContext;
  return result;
},
    _interrupt = function _interrupt(animation) {
  _removeFromParent(animation);

  animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
},
    _quickTween,
    _registerPluginQueue = [],
    _createPlugin = function _createPlugin(config) {
  if (!config) return;
  config = !config.name && config["default"] || config; // UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.

  if (_windowExists() || config.headless) {
    // edge case: some build tools may pass in a null/undefined value
    var name = config.name,
        isFunc = _isFunction(config),
        Plugin = name && !isFunc && config.init ? function () {
      this._props = [];
    } : config,
        //in case someone passes in an object that's not a plugin, like CustomEase
    instanceDefaults = {
      init: _emptyFunc,
      render: _renderPropTweens,
      add: _addPropTween,
      kill: _killPropTweensOf,
      modifier: _addPluginModifier,
      rawVars: 0
    },
        statics = {
      targetTest: 0,
      get: 0,
      getSetter: _getSetter,
      aliases: {},
      register: 0
    };

    _wake();

    if (config !== Plugin) {
      if (_plugins[name]) {
        return;
      }

      _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods


      _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods


      _plugins[Plugin.prop = name] = Plugin;

      if (config.targetTest) {
        _harnessPlugins.push(Plugin);

        _reservedProps[name] = 1;
      }

      name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
    }

    _addGlobal(name, Plugin);

    config.register && config.register(gsap, Plugin, PropTween);
  } else {
    _registerPluginQueue.push(config);
  }
},

/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255,
    _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
},
    // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
},
    splitColor = function splitColor(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0,
      r,
      g,
      b,
      h,
      s,
      l,
      max,
      min,
      d,
      wasHSL;

  if (!a) {
    if (v.substr(-1) === ",") {
      //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
      v = v.substr(0, v.length - 1);
    }

    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        //for shorthand like #9F0 or #9F0F (could have alpha)
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }

      if (v.length === 9) {
        // hex with alpha, like #fd5e53ff
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }

      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);

      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= .5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1); //cast as number

        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        //if relative values are found, just return the raw strings with the relative prefixes in place.
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }

    a = a.map(Number);
  }

  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }

    a[0] = ~~(h + .5);
    a[1] = ~~(s * 100 + .5);
    a[2] = ~~(l * 100 + .5);
  }

  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
},
    _colorOrderData = function _colorOrderData(v) {
  // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
  var values = [],
      c = [],
      i = -1;
  v.split(_colorExp).forEach(function (v) {
    var a = v.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
},
    _formatColors = function _formatColors(s, toHSL, orderMatchData) {
  var result = "",
      colors = (s + result).match(_colorExp),
      type = toHSL ? "hsla(" : "rgba(",
      i = 0,
      c,
      shell,
      d,
      l;

  if (!colors) {
    return s;
  }

  colors = colors.map(function (color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });

  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;

    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;

      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
      }
    }
  }

  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;

    for (; i < l; i++) {
      result += shell[i] + colors[i];
    }
  }

  return result + shell[l];
},
    _colorExp = function () {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
  p;

  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }

  return new RegExp(s + ")", "gi");
}(),
    _hslExp = /hsl[a]?\(/,
    _colorStringFilter = function _colorStringFilter(a) {
  var combined = a.join(" "),
      toHSL;
  _colorExp.lastIndex = 0;

  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.

    return true;
  }
},

/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive,
    _ticker = function () {
  var _getTime = Date.now,
      _lagThreshold = 500,
      _adjustedLag = 33,
      _startTime = _getTime(),
      _lastUpdate = _startTime,
      _gap = 1000 / 240,
      _nextTime = _gap,
      _listeners = [],
      _id,
      _req,
      _raf,
      _self,
      _delta,
      _i,
      _tick = function _tick(v) {
    var elapsed = _getTime() - _lastUpdate,
        manual = v === true,
        overlap,
        dispatch,
        time,
        frame;

    (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;

    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1000;
      _self.time = time = time / 1000;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }

    manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.

    if (dispatch) {
      for (_i = 0; _i < _listeners.length; _i++) {
        // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
      }
    }
  };

  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1000 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);

          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});

          _registerPluginQueue.forEach(_createPlugin);
        }

        _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
        _id && _self.sleep();

        _req = _raf || function (f) {
          return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
        };

        _tickerActive = 1;

        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || Infinity; // zero should be interpreted as basically unlimited

      _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
    },
    fps: function fps(_fps) {
      _gap = 1000 / (_fps || 240);
      _nextTime = _self.time * 1000 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function (t, d, f, v) {
        callback(t, d, f, v);

        _self.remove(func);
      } : callback;

      _self.remove(callback);

      _listeners[prioritize ? "unshift" : "push"](func);

      _wake();

      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
    },
    _listeners: _listeners
  };
  return _self;
}(),
    _wake = function _wake() {
  return !_tickerActive && _ticker.wake();
},
    //also ensures the core classes are initialized.

/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {},
    _customEaseExp = /^[\d.\-M][\d.\-,\s]/,
    _quotesExp = /["']/g,
    _parseObjectInString = function _parseObjectInString(value) {
  //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
  var obj = {},
      split = value.substr(1, value.length - 3).split(":"),
      key = split[0],
      i = 1,
      l = split.length,
      index,
      val,
      parsedVal;

  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }

  return obj;
},
    _valueInParentheses = function _valueInParentheses(value) {
  var open = value.indexOf("(") + 1,
      close = value.indexOf(")"),
      nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
},
    _configEaseFromString = function _configEaseFromString(name) {
  //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
  var split = (name + "").split("("),
      ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
},
    _invertEase = function _invertEase(ease) {
  return function (p) {
    return 1 - ease(1 - p);
  };
},
    // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
  var child = timeline._first,
      ease;

  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }

    child = child._next;
  }
},
    _parseEase = function _parseEase(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
},
    _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut(p) {
      return 1 - easeIn(1 - p);
    };
  }

  if (easeInOut === void 0) {
    easeInOut = function easeInOut(p) {
      return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }

  var ease = {
    easeIn: easeIn,
    easeOut: easeOut,
    easeInOut: easeInOut
  },
      lowercaseName;

  _forEachName(names, function (name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;

    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });

  return ease;
},
    _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
  return function (p) {
    return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
  };
},
    _configElastic = function _configElastic(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1,
      //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
  p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1),
      p3 = p2 / _2PI * (Math.asin(1 / p1) || 0),
      easeOut = function easeOut(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  p2 = _2PI / p2; //precalculate to optimize

  ease.config = function (amplitude, period) {
    return _configElastic(type, amplitude, period);
  };

  return ease;
},
    _configBack = function _configBack(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }

  var easeOut = function easeOut(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  },
      ease = type === "out" ? easeOut : type === "in" ? function (p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);

  ease.config = function (overshoot) {
    return _configBack(type, overshoot);
  };

  return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };


_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
  var power = i < 5 ? i + 1 : i;

  _insertEase(name + ",Power" + (power - 1), i ? function (p) {
    return Math.pow(p, power);
  } : function (p) {
    return p;
  }, function (p) {
    return 1 - Math.pow(1 - p, power);
  }, function (p) {
    return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});

_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;

_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());

(function (n, c) {
  var n1 = 1 / c,
      n2 = 2 * n1,
      n3 = 2.5 * n1,
      easeOut = function easeOut(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
  };

  _insertEase("Bounce", function (p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);

_insertEase("Expo", function (p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});

_insertEase("Circ", function (p) {
  return -(_sqrt(1 - p * p) - 1);
});

_insertEase("Sine", function (p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});

_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());

_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }

    var p1 = 1 / steps,
        p2 = steps + (immediateStart ? 0 : 1),
        p3 = immediateStart ? 1 : 0,
        max = 1 - _tinyNum;
    return function (p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];

_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
  return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */


var GSCache = function GSCache(target, harness) {
  this.id = _gsID++;
  target._gsap = this;
  this.target = target;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */

var Animation = /*#__PURE__*/function () {
  function Animation(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;

    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }

    this._ts = 1;

    _setDuration(this, +vars.duration, 1, 1);

    this.data = vars.data;

    if (_context) {
      this._ctx = _context;

      _context.data.push(this);
    }

    _tickerActive || _ticker.wake();
  }

  var _proto = Animation.prototype;

  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }

    return this._delay;
  };

  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };

  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }

    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };

  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();

    if (!arguments.length) {
      return this._tTime;
    }

    var parent = this._dp;

    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);

      !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
      //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.

      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }

        parent = parent.parent;
      }

      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }

    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
      this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
      //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
      //   this._lock = 1;

      _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
      //}

    }

    return this;
  };

  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
  };

  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
  };

  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  };

  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;

    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  } // potential future addition:
  // isPlayingBackwards() {
  // 	let animation = this,
  // 		orientation = 1; // 1 = forward, -1 = backward
  // 	while (animation) {
  // 		orientation *= animation.reversed() || (animation.repeat() && !(animation.iteration() & 1)) ? -1 : 1;
  // 		animation = animation.parent;
  // 	}
  // 	return orientation < 0;
  // }
  ;

  _proto.timeScale = function timeScale(value, suppressEvents) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
    }

    if (this._rts === value) {
      return this;
    }

    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
    // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
    //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
    // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.

    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.

    this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);

    _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.


    return _recacheAncestors(this);
  };

  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }

    if (this._ps !== value) {
      this._ps = value;

      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.

        this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
      } else {
        _wake();

        this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.

        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
      }
    }

    return this;
  };

  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }

    return this._start;
  };

  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };

  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp; // _dp = detached parent

    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };

  _proto.revert = function revert(config) {
    if (config === void 0) {
      config = _revertConfig;
    }

    var prevIsReverting = _reverting;
    _reverting = config;

    if (this._initted || this._startAt) {
      this.timeline && this.timeline.revert(config);
      this.totalTime(-0.01, config.suppressEvents);
    }

    this.data !== "nested" && config.kill !== false && this.kill();
    _reverting = prevIsReverting;
    return this;
  };

  _proto.globalTime = function globalTime(rawTime) {
    var animation = this,
        time = arguments.length ? rawTime : animation.rawTime();

    while (animation) {
      time = animation._start + time / (Math.abs(animation._ts) || 1);
      animation = animation._dp;
    }

    return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time; // the _startAt tweens for .fromTo() and .from() that have immediateRender should always be FIRST in the timeline (important for context.revert()). "_sat" stands for _startAtTween, referring to the parent tween that created the _startAt. We must discern if that tween had immediateRender so that we can know whether or not to prioritize it in revert().
  };

  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }

    return this._repeat === -2 ? Infinity : this._repeat;
  };

  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;

      _onUpdateTotalDuration(this);

      return time ? this.time(time) : this;
    }

    return this._rDelay;
  };

  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }

    return this._yoyo;
  };

  _proto.seek = function seek(position, suppressEvents) {
    return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
  };

  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };

  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };

  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };

  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };

  _proto.resume = function resume() {
    return this.paused(false);
  };

  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.

      return this;
    }

    return this._rts < 0;
  };

  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };

  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp,
        start = this._start,
        rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };

  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;

    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }

      return this;
    }

    return vars[type];
  };

  _proto.then = function then(onFulfilled) {
    var self = this;
    return new Promise(function (resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough,
          _resolve = function _resolve() {
        var _then = self.then;
        self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)

        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };

      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };

  _proto.kill = function kill() {
    _interrupt(this);
  };

  return Animation;
}();

_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */


var Timeline = /*#__PURE__*/function (_Animation) {
  _inheritsLoose(Timeline, _Animation);

  function Timeline(vars, position) {
    var _this;

    if (vars === void 0) {
      vars = {};
    }

    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }

  var _proto2 = Timeline.prototype;

  _proto2.to = function to(targets, vars, position) {
    _createTweenType(0, arguments, this);

    return this;
  };

  _proto2.from = function from(targets, vars, position) {
    _createTweenType(1, arguments, this);

    return this;
  };

  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
    _createTweenType(2, arguments, this);

    return this;
  };

  _proto2.set = function set(targets, vars, position) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position), 1);
    return this;
  };

  _proto2.call = function call(callback, params, position) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
  } //ONLY for backward compatibility! Maybe delete?
  ;

  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position));
    return this;
  };

  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
  };

  _proto2.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._dirty ? this.totalDuration() : this._tDur,
        dur = this._dur,
        tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime),
        // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
    crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur),
        time,
        child,
        next,
        iteration,
        cycleDuration,
        prevPaused,
        pauseTween,
        timeScale,
        prevStart,
        prevIteration,
        yoyo,
        isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);

    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }

      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;

      if (crossingStart) {
        dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.

        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://gsap.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005 also, this._tTime - prevIteration * cycleDuration - this._dur <= 0 just checks to make sure it wasn't previously in the "repeatDelay" portion

        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */


        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1,
              doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : tTime % dur ? dur : tTime; // if the playhead is landing exactly at the end of an iteration, use that totalTime rather than only the duration, otherwise it'll skip the 2nd render since it's effectively at the same time.

          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.

          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);

          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
            return this;
          }

          dur = this._dur; // in case the duration changed in the onRepeat

          tDur = this._tDur;

          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -0.0001;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }

          this._lock = 0;

          if (!this._ts && !prevPaused) {
            return this;
          } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.


          _propagateYoyoEase(this, isYoyo);
        }
      }

      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));

        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }

      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
      }

      if (!prevTime && time && !suppressEvents && !iteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      if (time >= prevTime && totalTime >= 0) {
        child = this._first;

        while (child) {
          next = child._next;

          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.

        while (child) {
          next = child._prev;

          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
              return this.render(totalTime, suppressEvents, force);
            }

            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt)); // if reverting, we should always force renders of initted tweens (but remember that .fromTo() or .from() may have a _startAt but not _initted yet). If, for example, a .fromTo() tween with a stagger (which creates an internal timeline) gets reverted BEFORE some of its child tweens render for the first time, it may not properly trigger them to revert.

            if (time !== this._time || !this._ts && !prevPaused) {
              //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)

              break;
            }
          }

          child = next;
        }
      }

      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;

        if (this._ts) {
          //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
          this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.

          _setEnd(this);

          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) if (!this._lock) {
        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
          _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto2.add = function add(child, position) {
    var _this2 = this;

    _isNumber(position) || (position = _parsePosition(this, position, child));

    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function (obj) {
          return _this2.add(obj, position);
        });
        return this;
      }

      if (_isString(child)) {
        return this.addLabel(child, position);
      }

      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }

    return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
  };

  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }

    if (tweens === void 0) {
      tweens = true;
    }

    if (timelines === void 0) {
      timelines = true;
    }

    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }

    var a = [],
        child = this._first;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }

      child = child._next;
    }

    return a;
  };

  _proto2.getById = function getById(id) {
    var animations = this.getChildren(1, 1, 1),
        i = animations.length;

    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };

  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }

    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }

    _removeLinkedListItem(this, child);

    if (child === this._recent) {
      this._recent = this._last;
    }

    return _uncache(this);
  };

  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }

    this._forcing = 1;

    if (!this._dp && this._ts) {
      //special case for the global timeline (or any other that has no parent or detached parent).
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }

    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);

    this._forcing = 0;
    return this;
  };

  _proto2.addLabel = function addLabel(label, position) {
    this.labels[label] = _parsePosition(this, position);
    return this;
  };

  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };

  _proto2.addPause = function addPause(position, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position));
  };

  _proto2.removePause = function removePause(position) {
    var child = this._first;
    position = _parsePosition(this, position);

    while (child) {
      if (child._start === position && child.data === "isPause") {
        _removeFromParent(child);
      }

      child = child._next;
    }
  };

  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive),
        i = tweens.length;

    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }

    return this;
  };

  _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
    var a = [],
        parsedTargets = toArray(targets),
        child = this._first,
        isGlobalTime = _isNumber(onlyActive),
        // a number is interpreted as a global time. If the animation spans
    children;

    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }

      child = child._next;
    }

    return a;
  } // potential future feature - targets() on timelines
  // targets() {
  // 	let result = [];
  // 	this.getChildren(true, true, false).forEach(t => result.push(...t.targets()));
  // 	return result.filter((v, i) => result.indexOf(v) === i);
  // }
  ;

  _proto2.tweenTo = function tweenTo(position, vars) {
    vars = vars || {};

    var tl = this,
        endTime = _parsePosition(tl, position),
        _vars = vars,
        startAt = _vars.startAt,
        _onStart = _vars.onStart,
        onStartParams = _vars.onStartParams,
        immediateRender = _vars.immediateRender,
        initted,
        tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();

        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }

        _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
      }
    }, vars));

    return immediateRender ? tween.render(0) : tween;
  };

  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };

  _proto2.recent = function recent() {
    return this._recent;
  };

  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };

  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }

    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };

  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };

  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }

    var child = this._first,
        labels = this.labels,
        p;

    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }

      child = child._next;
    }

    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }

    return _uncache(this);
  };

  _proto2.invalidate = function invalidate(soft) {
    var child = this._first;
    this._lock = 0;

    while (child) {
      child.invalidate(soft);
      child = child._next;
    }

    return _Animation.prototype.invalidate.call(this, soft);
  };

  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }

    var child = this._first,
        next;

    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }

    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };

  _proto2.totalDuration = function totalDuration(value) {
    var max = 0,
        self = this,
        child = self._last,
        prevStart = _bigNum,
        prev,
        start,
        parent;

    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }

    if (self._dirty) {
      parent = self.parent;

      while (child) {
        prev = child._prev; //record it here in case the tween changes position in the sequence...

        child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.

        start = child._start;

        if (start > prevStart && self._sort && child._ts && !self._lock) {
          //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
          self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().

          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }

        if (start < 0 && child._ts) {
          //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
          max -= start;

          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }

          self.shiftChildren(-start, false, -1e999);
          prevStart = 0;
        }

        child._end > max && child._ts && (max = child._end);
        child = prev;
      }

      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);

      self._dirty = 0;
    }

    return self._tDur;
  };

  Timeline.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));

      _lastRenderedFrame = _ticker.frame;
    }

    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) if (_config.autoSleep && _ticker._listeners.length < 2) {
        while (child && !child._ts) {
          child = child._next;
        }

        child || _ticker.sleep();
      }
    }
  };

  return Timeline;
}(Animation);

_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});

var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
  //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
  var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter),
      index = 0,
      matchIndex = 0,
      result,
      startNums,
      color,
      endNum,
      chunk,
      startNum,
      hasRandom,
      a;
  pt.b = start;
  pt.e = end;
  start += ""; //ensure values are strings

  end += "";

  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }

  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.

    start = a[0];
    end = a[1];
  }

  startNums = start.match(_complexStringNumExp) || [];

  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);

    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }

    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.

      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }

  pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)

  pt.fp = funcParam;

  if (_relExp.test(end) || hasRandom) {
    pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
  }

  this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.

  return pt;
},
    _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
  _isFunction(end) && (end = end(index || 0, target, targets));
  var currentValue = target[prop],
      parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](),
      setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc,
      pt;

  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }

    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);

      if (pt || pt === 0) {
        // to avoid isNaN, like if someone passes in a value like "!= whatever"
        end = pt;
      }
    }
  }

  if (!optional || parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      // fun fact: any number multiplied by "" is evaluated as the number 0!
      pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target);
      return this._pt = pt;
    }

    !currentValue && !(prop in target) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
},
    //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));

  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
  }

  var copy = {},
      p;

  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
  }

  return copy;
},
    _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
  var plugin, pt, ptLookup, i;

  if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);

    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.

      i = plugin._props.length;

      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }

  return plugin;
},
    _overwritingTween,
    //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens,
    _initTween = function _initTween(tween, time, tTime) {
  var vars = tween.vars,
      ease = vars.ease,
      startAt = vars.startAt,
      immediateRender = vars.immediateRender,
      lazy = vars.lazy,
      onUpdate = vars.onUpdate,
      runBackwards = vars.runBackwards,
      yoyoEase = vars.yoyoEase,
      keyframes = vars.keyframes,
      autoRevert = vars.autoRevert,
      dur = tween._dur,
      prevStartAt = tween._startAt,
      targets = tween._targets,
      parent = tween.parent,
      fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets,
      autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites,
      tl = tween.timeline,
      cleanVars,
      i,
      p,
      pt,
      target,
      hasPriority,
      gsData,
      harness,
      plugin,
      ptLookup,
      index,
      harnessVars,
      overwritten;
  tl && (!keyframes || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;

  if (yoyoEase && tween._yoyo && !tween._repeat) {
    //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }

  tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.

  if (!tl || keyframes && !vars.stagger) {
    //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.

    cleanVars = _copyExcluding(vars, _reservedProps);

    if (prevStartAt) {
      prevStartAt._zTime < 0 && prevStartAt.progress(1); // in case it's a lazy startAt that hasn't rendered yet.

      time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig); // if it's a "startAt" (not "from()" or runBackwards: true), we only need to do a shallow revert (keep transforms cached in CSSPlugin)
      // don't just _removeFromParent(prevStartAt.render(-1, true)) because that'll leave inline styles. We're creating a new _startAt for "startAt" tweens that re-capture things to ensure that if the pre-tween values changed since the tween was created, they're recorded.

      prevStartAt._lazy = 0;
    }

    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent: parent,
        immediateRender: true,
        lazy: !prevStartAt && _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate: onUpdate && function () {
          return _callback(tween, "onUpdate");
        },
        stagger: 0
      }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);


      tween._startAt._dp = 0; // don't allow it to get put back into root timeline! Like when revert() is called and totalTime() gets set.

      tween._startAt._sat = tween; // used in globalTime(). _sat stands for _startAtTween

      time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.

      if (immediateRender) {
        if (dur && time <= 0 && tTime <= 0) {
          // check tTime here because in the case of a yoyo tween whose playhead gets pushed to the end like tween.progress(1), we should allow it through so that the onComplete gets fired properly.
          time && (tween._zTime = time);
          return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
        }
      }
    } else if (runBackwards && dur) {
      //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
      if (!prevStartAt) {
        time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0

        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
          lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
          immediateRender: immediateRender,
          //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
          stagger: 0,
          parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})

        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})

        _removeFromParent(tween._startAt = Tween.set(targets, p));

        tween._startAt._dp = 0; // don't allow it to get put back into root timeline!

        tween._startAt._sat = tween; // used in globalTime()

        time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
        tween._zTime = time;

        if (!immediateRender) {
          _initTween(tween._startAt, _tinyNum, _tinyNum); //ensures that the initial values are recorded

        } else if (!time) {
          return;
        }
      }
    }

    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;

    for (i = 0; i < targets.length; i++) {
      target = targets[i];
      gsData = target._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)

      index = fullTargets === targets ? i : fullTargets.indexOf(target);

      if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);

        plugin._props.forEach(function (name) {
          ptLookup[name] = pt;
        });

        plugin.priority && (hasPriority = 1);
      }

      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }

      tween._op && tween._op[i] && tween.kill(target, tween._op[i]);

      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;

        _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!


        overwritten = !tween.parent;
        _overwritingTween = 0;
      }

      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }

    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
  }

  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.

  keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
},
    _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property],
      pt,
      rootPT,
      lookup,
      i;

  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;

    while (i--) {
      pt = lookup[i][property];

      if (pt && pt.d && pt.d._pt) {
        // it's a plugin, so find the nested PropTween
        pt = pt.d._pt;

        while (pt && pt.p !== property && pt.fp !== property) {
          // "fp" is functionParam for things like setting CSS variables which require .setProperty("--var-name", value)
          pt = pt._next;
        }
      }

      if (!pt) {
        // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
        // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
        _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.

        tween.vars[property] = "+=0";

        _initTween(tween, time);

        _forceAllPropTweens = 0;
        return skipRecursion ? _warn(property + " not eligible for reset") : 1; // if someone tries to do a quickTo() on a special property like borderRadius which must get split into 4 different properties, that's not eligible for .resetTo().
      }

      ptCache.push(pt);
    }
  }

  i = ptCache.length;

  while (i--) {
    rootPT = ptCache[i];
    pt = rootPT._pt || rootPT; // complex values may have nested PropTweens. We only accommodate the FIRST value.

    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e)); // mainly for CSSPlugin (end value)

    rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b)); // (beginning value)
  }
},
    _addAliasesToVars = function _addAliasesToVars(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0,
      propertyAliases = harness && harness.aliases,
      copy,
      p,
      i,
      aliases;

  if (!propertyAliases) {
    return vars;
  }

  copy = _merge({}, vars);

  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;

      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }

  return copy;
},
    // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut",
      p,
      a;

  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease

    obj.forEach(function (value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
},
    _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
  return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
},
    _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    _staggerPropsToSkip = {};

_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function (name) {
  return _staggerPropsToSkip[name] = 1;
});
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */


var Tween = /*#__PURE__*/function (_Animation2) {
  _inheritsLoose(Tween, _Animation2);

  function Tween(targets, vars, position, skipInherit) {
    var _this3;

    if (typeof vars === "number") {
      position.duration = vars;
      vars = position;
      position = null;
    }

    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars,
        duration = _this3$vars.duration,
        delay = _this3$vars.delay,
        immediateRender = _this3$vars.immediateRender,
        stagger = _this3$vars.stagger,
        overwrite = _this3$vars.overwrite,
        keyframes = _this3$vars.keyframes,
        defaults = _this3$vars.defaults,
        scrollTrigger = _this3$vars.scrollTrigger,
        yoyoEase = _this3$vars.yoyoEase,
        parent = vars.parent || _globalTimeline,
        parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets),
        tl,
        i,
        copy,
        l,
        p,
        curTarget,
        staggerFunc,
        staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property

    _this3._overwrite = overwrite;

    if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      }); // we need to store the targets because for staggers and keyframes, we end up creating an individual tween for each but function-based values need to know the index and the whole Array of targets.

      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;

      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);

        if (_isObject(stagger)) {
          //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }

        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.

          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;

          if (!stagger && l === 1 && copy.delay) {
            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }

          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }

        tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
      } else if (keyframes) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));

        tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
        var time = 0,
            a,
            kf,
            v;

        if (_isArray(keyframes)) {
          keyframes.forEach(function (frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration(); // to ensure tl._dur is cached because we tap into it for performance purposes in the render() method.
        } else {
          copy = {};

          for (p in keyframes) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
          }

          for (p in copy) {
            a = copy[p].sort(function (a, b) {
              return a.t - b.t;
            });
            time = 0;

            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }

          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          }); // in case keyframes didn't go to 100%
        }
      }

      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
    }

    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);

      _globalTimeline.killTweensOf(parsedTargets);

      _overwritingTween = 0;
    }

    _addToTimeline(parent, _assertThisInitialized(_this3), position);

    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);

    if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)

      _this3.render(Math.max(0, -delay) || 0); //in case delay is negative

    }

    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }

  var _proto3 = Tween.prototype;

  _proto3.render = function render(totalTime, suppressEvents, force) {
    var prevTime = this._time,
        tDur = this._tDur,
        dur = this._dur,
        isNegative = totalTime < 0,
        tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime,
        time,
        pt,
        iteration,
        cycleDuration,
        prevIteration,
        isYoyo,
        ratio,
        timeline,
        yoyoEase;

    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
      //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
      time = tTime;
      timeline = this.timeline;

      if (this._repeat) {
        //adjust the time for repeats and yoyos
        cycleDuration = dur + this._rDelay;

        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }

        time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)

        if (tTime === tDur) {
          // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);

          if (iteration && iteration === _roundPrecise(tTime / cycleDuration)) {
            time = dur;
            iteration--;
          }

          time > dur && (time = dur);
        }

        isYoyo = this._yoyo && iteration & 1;

        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }

        prevIteration = _animationCycle(this._tTime, cycleDuration);

        if (time === prevTime && !force && this._initted && iteration === prevIteration) {
          //could be during the repeatDelay part. No need to render and fire callbacks.
          this._tTime = tTime;
          return this;
        }

        if (iteration !== prevIteration) {
          timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality

          if (this.vars.repeatRefresh && !isYoyo && !this._lock && this._time !== cycleDuration && this._initted) {
            // this._time will === cycleDuration when we render at EXACTLY the end of an iteration. Without this condition, it'd often do the repeatRefresh render TWICE (again on the very next tick).
            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.

            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }

      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
          this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.

          return this;
        }

        if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
          // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values. But we also don't want to dump if we're doing a repeatRefresh render!
          return this;
        }

        if (dur !== this._dur) {
          // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
          return this.render(totalTime, suppressEvents, force);
        }
      }

      this._tTime = tTime;
      this._time = time;

      if (!this._act && this._ts) {
        this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.

        this._lazy = 0;
      }

      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);

      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }

      if (time && !prevTime && !suppressEvents && !iteration) {
        _callback(this, "onStart");

        if (this._tTime !== tTime) {
          // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
          return this;
        }
      }

      pt = this._pt;

      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }

      timeline && timeline.render(totalTime < 0 ? totalTime : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);

      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.

        _callback(this, "onUpdate");
      }

      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");

      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.

        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
          // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);

          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }

    return this;
  };

  _proto3.targets = function targets() {
    return this._targets;
  };

  _proto3.invalidate = function invalidate(soft) {
    // "soft" gives us a way to clear out everything EXCEPT the recorded pre-"from" portion of from() tweens. Otherwise, for example, if you tween.progress(1).render(0, true true).invalidate(), the "from" values would persist and then on the next render, the from() tweens would initialize and the current value would match the "from" values, thus animate from the same value to the same value (no animation). We tap into this in ScrollTrigger's refresh() where we must push a tween to completion and then back again but honor its init state in case the tween is dependent on another tween further up on the page.
    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate(soft);
    return _Animation2.prototype.invalidate.call(this, soft);
  };

  _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
    // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
    // if (_isObject(property)) { // performance optimization
    // 	for (p in property) {
    // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
    // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    // 		}
    // 	}
    // } else {

    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
      return this.resetTo(property, value, start, startIsRelative, 1); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
    } //}


    _alignPlayhead(this, 0);

    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };

  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }

    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }

    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.

      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.

      return this;
    }

    var parsedTargets = this._targets,
        killingTargets = targets ? toArray(targets) : parsedTargets,
        propTweenLookup = this._ptLookup,
        firstPT = this._pt,
        overwrittenProps,
        curLookup,
        curOverwriteProps,
        props,
        p,
        pt,
        i;

    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }

    overwrittenProps = this._op = this._op || [];

    if (vars !== "all") {
      //so people can pass in a comma-delimited list of property names
      if (_isString(vars)) {
        p = {};

        _forEachName(vars, function (name) {
          return p[name] = 1;
        });

        vars = p;
      }

      vars = _addAliasesToVars(parsedTargets, vars);
    }

    i = parsedTargets.length;

    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];

        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }

        for (p in props) {
          pt = curLookup && curLookup[p];

          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }

            delete curLookup[p];
          }

          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }

    this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.

    return this;
  };

  Tween.to = function to(targets, vars) {
    return new Tween(targets, vars, arguments[2]);
  };

  Tween.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };

  Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay: delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    }); // we must use onReverseComplete too for things like timeline.add(() => {...}) which should be triggered in BOTH directions (forward and reverse)
  };

  Tween.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };

  Tween.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween(targets, vars);
  };

  Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };

  return Tween;
}(Animation);

_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.


_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
  Tween[name] = function () {
    var tl = new Timeline(),
        params = _slice.call(arguments, 0);

    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */


var _setterPlain = function _setterPlain(target, property, value) {
  return target[property] = value;
},
    _setterFunc = function _setterFunc(target, property, value) {
  return target[property](value);
},
    _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
  return target[property](data.fp, value);
},
    _setterAttribute = function _setterAttribute(target, property, value) {
  return target.setAttribute(property, value);
},
    _getSetter = function _getSetter(target, property) {
  return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
},
    _renderPlain = function _renderPlain(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
},
    _renderBoolean = function _renderBoolean(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
},
    _renderComplexString = function _renderComplexString(ratio, data) {
  var pt = data._pt,
      s = "";

  if (!ratio && data.b) {
    //b = beginning string
    s = data.b;
  } else if (ratio === 1 && data.e) {
    //e = ending string
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.

      pt = pt._next;
    }

    s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
  }

  data.set(data.t, data.p, s, data);
},
    _renderPropTweens = function _renderPropTweens(ratio, data) {
  var pt = data._pt;

  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
},
    _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
  var pt = this._pt,
      next;

  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target);
    pt = next;
  }
},
    _killPropTweensOf = function _killPropTweensOf(property) {
  var pt = this._pt,
      hasNonDependentRemaining,
      next;

  while (pt) {
    next = pt._next;

    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }

    pt = next;
  }

  return !hasNonDependentRemaining;
},
    _setterWithModifier = function _setterWithModifier(target, property, value, data) {
  data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
},
    _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
  var pt = parent._pt,
      next,
      pt2,
      first,
      last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)

  while (pt) {
    next = pt._next;
    pt2 = first;

    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }

    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }

    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }

    pt = next;
  }

  parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)


var PropTween = /*#__PURE__*/function () {
  function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
    this.t = target;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;

    if (next) {
      next._prev = this;
    }
  }

  var _proto4 = PropTween.prototype;

  _proto4.modifier = function modifier(func, tween, target) {
    this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)

    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target; //modifier target

    this.tween = tween;
  };

  return PropTween;
}(); //Initialization tasks

_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
  return _reservedProps[name] = 1;
});

_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;

var _media = [],
    _listeners = {},
    _emptyArray = [],
    _lastMediaTime = 0,
    _contextID = 0,
    _dispatch = function _dispatch(type) {
  return (_listeners[type] || _emptyArray).map(function (f) {
    return f();
  });
},
    _onMediaChange = function _onMediaChange() {
  var time = Date.now(),
      matches = [];

  if (time - _lastMediaTime > 2) {
    _dispatch("matchMediaInit");

    _media.forEach(function (c) {
      var queries = c.queries,
          conditions = c.conditions,
          match,
          p,
          anyMatch,
          toggled;

      for (p in queries) {
        match = _win.matchMedia(queries[p]).matches; // Firefox doesn't update the "matches" property of the MediaQueryList object correctly - it only does so as it calls its change handler - so we must re-create a media query here to ensure it's accurate.

        match && (anyMatch = 1);

        if (match !== conditions[p]) {
          conditions[p] = match;
          toggled = 1;
        }
      }

      if (toggled) {
        c.revert();
        anyMatch && matches.push(c);
      }
    });

    _dispatch("matchMediaRevert");

    matches.forEach(function (c) {
      return c.onMatch(c, function (func) {
        return c.add(null, func);
      });
    });
    _lastMediaTime = time;

    _dispatch("matchMedia");
  }
};

var Context = /*#__PURE__*/function () {
  function Context(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = []; // returned/cleanup functions

    this.isReverted = false;
    this.id = _contextID++; // to work around issues that frameworks like Vue cause by making things into Proxies which make it impossible to do something like _media.indexOf(this) because "this" would no longer refer to the Context instance itself - it'd refer to a Proxy! We needed a way to identify the context uniquely

    func && this.add(func);
  }

  var _proto5 = Context.prototype;

  _proto5.add = function add(name, func, scope) {
    // possible future addition if we need the ability to add() an animation to a context and for whatever reason cannot create that animation inside of a context.add(() => {...}) function.
    // if (name && _isFunction(name.revert)) {
    // 	this.data.push(name);
    // 	return (name._ctx = this);
    // }
    if (_isFunction(name)) {
      scope = func;
      func = name;
      name = _isFunction;
    }

    var self = this,
        f = function f() {
      var prev = _context,
          prevSelector = self.selector,
          result;
      prev && prev !== self && prev.data.push(self);
      scope && (self.selector = selector(scope));
      _context = self;
      result = func.apply(self, arguments);
      _isFunction(result) && self._r.push(result);
      _context = prev;
      self.selector = prevSelector;
      self.isReverted = false;
      return result;
    };

    self.last = f;
    return name === _isFunction ? f(self, function (func) {
      return self.add(null, func);
    }) : name ? self[name] = f : f;
  };

  _proto5.ignore = function ignore(func) {
    var prev = _context;
    _context = null;
    func(this);
    _context = prev;
  };

  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function (e) {
      return e instanceof Context ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    });
    return a;
  };

  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };

  _proto5.kill = function kill(revert, matchMedia) {
    var _this4 = this;

    if (revert) {
      (function () {
        var tweens = _this4.getTweens(),
            i = _this4.data.length,
            t;

        while (i--) {
          // Flip plugin tweens are very different in that they should actually be pushed to their end. The plugin replaces the timeline's .revert() method to do exactly that. But we also need to remove any of those nested tweens inside the flip timeline so that they don't get individually reverted.
          t = _this4.data[i];

          if (t.data === "isFlip") {
            t.revert();
            t.getChildren(true, true, false).forEach(function (tween) {
              return tweens.splice(tweens.indexOf(tween), 1);
            });
          }
        } // save as an object so that we can cache the globalTime for each tween to optimize performance during the sort


        tweens.map(function (t) {
          return {
            g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -Infinity,
            t: t
          };
        }).sort(function (a, b) {
          return b.g - a.g || -Infinity;
        }).forEach(function (o) {
          return o.t.revert(revert);
        }); // note: all of the _startAt tweens should be reverted in reverse order that they were created, and they'll all have the same globalTime (-1) so the " || -1" in the sort keeps the order properly.

        i = _this4.data.length;

        while (i--) {
          // make sure we loop backwards so that, for example, SplitTexts that were created later on the same element get reverted first
          t = _this4.data[i];

          if (t instanceof Timeline) {
            if (t.data !== "nested") {
              t.scrollTrigger && t.scrollTrigger.revert();
              t.kill(); // don't revert() the timeline because that's duplicating efforts since we already reverted all the tweens
            }
          } else {
            !(t instanceof Tween) && t.revert && t.revert(revert);
          }
        }

        _this4._r.forEach(function (f) {
          return f(revert, _this4);
        });

        _this4.isReverted = true;
      })();
    } else {
      this.data.forEach(function (e) {
        return e.kill && e.kill();
      });
    }

    this.clear();

    if (matchMedia) {
      var i = _media.length;

      while (i--) {
        // previously, we checked _media.indexOf(this), but some frameworks like Vue enforce Proxy objects that make it impossible to get the proper result that way, so we must use a unique ID number instead.
        _media[i].id === this.id && _media.splice(i, 1);
      }
    }
  };

  _proto5.revert = function revert(config) {
    this.kill(config || {});
  };

  return Context;
}();

var MatchMedia = /*#__PURE__*/function () {
  function MatchMedia(scope) {
    this.contexts = [];
    this.scope = scope;
    _context && _context.data.push(this);
  }

  var _proto6 = MatchMedia.prototype;

  _proto6.add = function add(conditions, func, scope) {
    _isObject(conditions) || (conditions = {
      matches: conditions
    });
    var context = new Context(0, scope || this.scope),
        cond = context.conditions = {},
        mq,
        p,
        active;
    _context && !context.selector && (context.selector = _context.selector); // in case a context is created inside a context. Like a gsap.matchMedia() that's inside a scoped gsap.context()

    this.contexts.push(context);
    func = context.add("onMatch", func);
    context.queries = conditions;

    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win.matchMedia(conditions[p]);

        if (mq) {
          _media.indexOf(context) < 0 && _media.push(context);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }

    active && func(context, function (f) {
      return context.add(null, f);
    });
    return this;
  } // refresh() {
  // 	let time = _lastMediaTime,
  // 		media = _media;
  // 	_lastMediaTime = -1;
  // 	_media = this.contexts;
  // 	_onMediaChange();
  // 	_lastMediaTime = time;
  // 	_media = media;
  // }
  ;

  _proto6.revert = function revert(config) {
    this.kill(config || {});
  };

  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function (c) {
      return c.kill(revert, true);
    });
  };

  return MatchMedia;
}();
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */


var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    args.forEach(function (config) {
      return _createPlugin(config);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target, property, unit, uncache) {
    _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in

    var getter = _getCache(target || {}).get,
        format = unit ? _passThrough : _numericIfPossible;

    unit === "native" && (unit = "");
    return !target ? target : !property ? function (property, unit, uncache) {
      return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
  },
  quickSetter: function quickSetter(target, property, unit) {
    target = toArray(target);

    if (target.length > 1) {
      var setters = target.map(function (t) {
        return gsap.quickSetter(t, property, unit);
      }),
          l = setters.length;
      return function (value) {
        var i = l;

        while (i--) {
          setters[i](value);
        }
      };
    }

    target = target[0] || {};

    var Plugin = _plugins[property],
        cache = _getCache(target),
        p = cache.harness && (cache.harness.aliases || {})[property] || property,
        // in case it's an alias, like "rotate" for "rotation".
    setter = Plugin ? function (value) {
      var p = new Plugin();
      _quickTween._pt = 0;
      p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
      p.render(1, p);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target, p);

    return Plugin ? setter : function (value) {
      return setter(target, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target, property, vars) {
    var _merge2;

    var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})),
        func = function func(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };

    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name,
        effect = _ref3.effect,
        plugins = _ref3.plugins,
        defaults = _ref3.defaults,
        extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function (pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });

    _effects[name] = function (targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
    };

    if (extendTimeline) {
      Timeline.prototype[name] = function (targets, vars, position) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }

    var tl = new Timeline(vars),
        child,
        next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);

    _globalTimeline.remove(tl);

    tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).

    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;

    while (child) {
      next = child._next;

      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }

      child = next;
    }

    _addToTimeline(_globalTimeline, tl, 0);

    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context;
  },
  matchMedia: function matchMedia(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function (c) {
      var cond = c.conditions,
          found,
          p;

      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }

      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners[type],
        i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap: wrap,
    wrapYoyo: wrapYoyo,
    distribute: distribute,
    random: random,
    snap: snap,
    normalize: normalize,
    getUnit: getUnit,
    clamp: clamp,
    splitColor: splitColor,
    toArray: toArray,
    selector: selector,
    mapRange: mapRange,
    pipe: pipe,
    unitize: unitize,
    interpolate: interpolate,
    shuffle: shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween: PropTween,
    globals: _addGlobal,
    Tween: Tween,
    Timeline: Timeline,
    Animation: Animation,
    getCache: _getCache,
    _removeLinkedListItem: _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting;
    },
    context: function context(toAdd) {
      if (toAdd && _context) {
        _context.data.push(toAdd);

        toAdd._ctx = _context;
      }

      return _context;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};

_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
  return _gsap[name] = Tween[name];
});

_ticker.add(Timeline.updateRoot);

_quickTween = _gsap.to({}, {
  duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------

var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
  var pt = plugin._pt;

  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }

  return pt;
},
    _addModifiers = function _addModifiers(tween, modifiers) {
  var targets = tween._targets,
      p,
      i,
      pt;

  for (p in modifiers) {
    i = targets.length;

    while (i--) {
      pt = tween._ptLookup[i][p];

      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          // is a plugin
          pt = _getPluginPropTween(pt, p);
        }

        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
},
    _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
  return {
    name: name,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function init(target, vars, tween) {
      tween._onInit = function (tween) {
        var temp, p;

        if (_isString(vars)) {
          temp = {};

          _forEachName(vars, function (name) {
            return temp[name] = 1;
          }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.


          vars = temp;
        }

        if (modifier) {
          temp = {};

          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }

          vars = temp;
        }

        _addModifiers(tween, vars);
      };
    }
  };
}; //register core plugins


var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;

    for (p in vars) {
      v = target.getAttribute(p) || "";
      pt = this.add(target, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
      pt.op = p;
      pt.b = v; // record the beginning value so we can revert()

      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;

    while (pt) {
      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d); // if reverting, go back to the original (pt.b)

      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  init: function init(target, value) {
    var i = value.length;

    while (i--) {
      this.add(target, i, target[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.

Tween.version = Timeline.version = gsap.version = "3.12.5";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0,
    Power1 = _easeMap.Power1,
    Power2 = _easeMap.Power2,
    Power3 = _easeMap.Power3,
    Power4 = _easeMap.Power4,
    Linear = _easeMap.Linear,
    Quad = _easeMap.Quad,
    Cubic = _easeMap.Cubic,
    Quart = _easeMap.Quart,
    Quint = _easeMap.Quint,
    Strong = _easeMap.Strong,
    Elastic = _easeMap.Elastic,
    Back = _easeMap.Back,
    SteppedEase = _easeMap.SteppedEase,
    Bounce = _easeMap.Bounce,
    Sine = _easeMap.Sine,
    Expo = _easeMap.Expo,
    Circ = _easeMap.Circ;

 //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.



/***/ }),

/***/ "./node_modules/gsap/index.js":
/*!************************************!*\
  !*** ./node_modules/gsap/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Back: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Back),
/* harmony export */   Bounce: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Bounce),
/* harmony export */   CSSPlugin: () => (/* reexport safe */ _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin),
/* harmony export */   Circ: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Circ),
/* harmony export */   Cubic: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Cubic),
/* harmony export */   Elastic: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Elastic),
/* harmony export */   Expo: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Expo),
/* harmony export */   Linear: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Linear),
/* harmony export */   Power0: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power0),
/* harmony export */   Power1: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power1),
/* harmony export */   Power2: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power2),
/* harmony export */   Power3: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power3),
/* harmony export */   Power4: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Power4),
/* harmony export */   Quad: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quad),
/* harmony export */   Quart: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quart),
/* harmony export */   Quint: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Quint),
/* harmony export */   Sine: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Sine),
/* harmony export */   SteppedEase: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.SteppedEase),
/* harmony export */   Strong: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.Strong),
/* harmony export */   TimelineLite: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineLite),
/* harmony export */   TimelineMax: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TimelineMax),
/* harmony export */   TweenLite: () => (/* reexport safe */ _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.TweenLite),
/* harmony export */   TweenMax: () => (/* binding */ TweenMaxWithCSS),
/* harmony export */   "default": () => (/* binding */ gsapWithCSS),
/* harmony export */   gsap: () => (/* binding */ gsapWithCSS)
/* harmony export */ });
/* harmony import */ var _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gsap-core.js */ "./node_modules/gsap/gsap-core.js");
/* harmony import */ var _CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CSSPlugin.js */ "./node_modules/gsap/CSSPlugin.js");


var gsapWithCSS = _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(_CSSPlugin_js__WEBPACK_IMPORTED_MODULE_1__.CSSPlugin) || _gsap_core_js__WEBPACK_IMPORTED_MODULE_0__.gsap,
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/ngraph.events/index.js":
/*!*********************************************!*\
  !*** ./node_modules/ngraph.events/index.js ***!
  \*********************************************/
/***/ ((module) => {

module.exports = function eventify(subject) {
  validateSubject(subject);

  var eventsStorage = createEventsStorage(subject);
  subject.on = eventsStorage.on;
  subject.off = eventsStorage.off;
  subject.fire = eventsStorage.fire;
  return subject;
};

function createEventsStorage(subject) {
  // Store all event listeners to this hash. Key is event name, value is array
  // of callback records.
  //
  // A callback record consists of callback function and its optional context:
  // { 'eventName' => [{callback: function, ctx: object}] }
  var registeredEvents = Object.create(null);

  return {
    on: function (eventName, callback, ctx) {
      if (typeof callback !== 'function') {
        throw new Error('callback is expected to be a function');
      }
      var handlers = registeredEvents[eventName];
      if (!handlers) {
        handlers = registeredEvents[eventName] = [];
      }
      handlers.push({callback: callback, ctx: ctx});

      return subject;
    },

    off: function (eventName, callback) {
      var wantToRemoveAll = (typeof eventName === 'undefined');
      if (wantToRemoveAll) {
        // Killing old events storage should be enough in this case:
        registeredEvents = Object.create(null);
        return subject;
      }

      if (registeredEvents[eventName]) {
        var deleteAllCallbacksForEvent = (typeof callback !== 'function');
        if (deleteAllCallbacksForEvent) {
          delete registeredEvents[eventName];
        } else {
          var callbacks = registeredEvents[eventName];
          for (var i = 0; i < callbacks.length; ++i) {
            if (callbacks[i].callback === callback) {
              callbacks.splice(i, 1);
            }
          }
        }
      }

      return subject;
    },

    fire: function (eventName) {
      var callbacks = registeredEvents[eventName];
      if (!callbacks) {
        return subject;
      }

      var fireArguments;
      if (arguments.length > 1) {
        fireArguments = Array.prototype.splice.call(arguments, 1);
      }
      for(var i = 0; i < callbacks.length; ++i) {
        var callbackInfo = callbacks[i];
        callbackInfo.callback.apply(callbackInfo.ctx, fireArguments);
      }

      return subject;
    }
  };
}

function validateSubject(subject) {
  if (!subject) {
    throw new Error('Eventify cannot use falsy object as events subject');
  }
  var reservedWords = ['on', 'fire', 'off'];
  for (var i = 0; i < reservedWords.length; ++i) {
    if (subject.hasOwnProperty(reservedWords[i])) {
      throw new Error("Subject cannot be eventified, since it already has property '" + reservedWords[i] + "'");
    }
  }
}


/***/ }),

/***/ "./node_modules/panzoom/index.js":
/*!***************************************!*\
  !*** ./node_modules/panzoom/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/**
 * Allows to drag and zoom svg elements
 */
var wheel = __webpack_require__(/*! wheel */ "./node_modules/wheel/index.js");
var animate = __webpack_require__(/*! amator */ "./node_modules/amator/index.js");
var eventify = __webpack_require__(/*! ngraph.events */ "./node_modules/ngraph.events/index.js");
var kinetic = __webpack_require__(/*! ./lib/kinetic.js */ "./node_modules/panzoom/lib/kinetic.js");
var createTextSelectionInterceptor = __webpack_require__(/*! ./lib/createTextSelectionInterceptor.js */ "./node_modules/panzoom/lib/createTextSelectionInterceptor.js");
var domTextSelectionInterceptor = createTextSelectionInterceptor();
var fakeTextSelectorInterceptor = createTextSelectionInterceptor(true);
var Transform = __webpack_require__(/*! ./lib/transform.js */ "./node_modules/panzoom/lib/transform.js");
var makeSvgController = __webpack_require__(/*! ./lib/svgController.js */ "./node_modules/panzoom/lib/svgController.js");
var makeDomController = __webpack_require__(/*! ./lib/domController.js */ "./node_modules/panzoom/lib/domController.js");

var defaultZoomSpeed = 1;
var defaultDoubleTapZoomSpeed = 1.75;
var doubleTapSpeedInMS = 300;
var clickEventTimeInMS = 200;

module.exports = createPanZoom;

/**
 * Creates a new instance of panzoom, so that an object can be panned and zoomed
 *
 * @param {DOMElement} domElement where panzoom should be attached.
 * @param {Object} options that configure behavior.
 */
function createPanZoom(domElement, options) {
  options = options || {};

  var panController = options.controller;

  if (!panController) {
    if (makeSvgController.canAttach(domElement)) {
      panController = makeSvgController(domElement, options);
    } else if (makeDomController.canAttach(domElement)) {
      panController = makeDomController(domElement, options);
    }
  }

  if (!panController) {
    throw new Error(
      'Cannot create panzoom for the current type of dom element'
    );
  }
  var owner = panController.getOwner();
  // just to avoid GC pressure, every time we do intermediate transform
  // we return this object. For internal use only. Never give it back to the consumer of this library
  var storedCTMResult = { x: 0, y: 0 };

  var isDirty = false;
  var transform = new Transform();

  if (panController.initTransform) {
    panController.initTransform(transform);
  }

  var filterKey = typeof options.filterKey === 'function' ? options.filterKey : noop;
  // TODO: likely need to unite pinchSpeed with zoomSpeed
  var pinchSpeed = typeof options.pinchSpeed === 'number' ? options.pinchSpeed : 1;
  var bounds = options.bounds;
  var maxZoom = typeof options.maxZoom === 'number' ? options.maxZoom : Number.POSITIVE_INFINITY;
  var minZoom = typeof options.minZoom === 'number' ? options.minZoom : 0;

  var boundsPadding = typeof options.boundsPadding === 'number' ? options.boundsPadding : 0.05;
  var zoomDoubleClickSpeed = typeof options.zoomDoubleClickSpeed === 'number' ? options.zoomDoubleClickSpeed : defaultDoubleTapZoomSpeed;
  var beforeWheel = options.beforeWheel || noop;
  var beforeMouseDown = options.beforeMouseDown || noop;
  var speed = typeof options.zoomSpeed === 'number' ? options.zoomSpeed : defaultZoomSpeed;
  var transformOrigin = parseTransformOrigin(options.transformOrigin);
  var textSelection = options.enableTextSelection ? fakeTextSelectorInterceptor : domTextSelectionInterceptor;

  validateBounds(bounds);

  if (options.autocenter) {
    autocenter();
  }

  var frameAnimation;
  var lastTouchEndTime = 0;
  var lastTouchStartTime = 0;
  var pendingClickEventTimeout = 0;
  var lastMouseDownedEvent = null;
  var lastMouseDownTime = new Date();
  var lastSingleFingerOffset;
  var touchInProgress = false;

  // We only need to fire panstart when actual move happens
  var panstartFired = false;

  // cache mouse coordinates here
  var mouseX;
  var mouseY;

  // Where the first click has happened, so that we can differentiate
  // between pan and click
  var clickX;
  var clickY;

  var pinchZoomLength;

  var smoothScroll;
  if ('smoothScroll' in options && !options.smoothScroll) {
    // If user explicitly asked us not to use smooth scrolling, we obey
    smoothScroll = rigidScroll();
  } else {
    // otherwise we use forward smoothScroll settings to kinetic API
    // which makes scroll smoothing.
    smoothScroll = kinetic(getPoint, scroll, options.smoothScroll);
  }

  var moveByAnimation;
  var zoomToAnimation;

  var multiTouch;
  var paused = false;

  listenForEvents();

  var api = {
    dispose: dispose,
    moveBy: internalMoveBy,
    moveTo: moveTo,
    smoothMoveTo: smoothMoveTo, 
    centerOn: centerOn,
    zoomTo: publicZoomTo,
    zoomAbs: zoomAbs,
    smoothZoom: smoothZoom,
    smoothZoomAbs: smoothZoomAbs,
    showRectangle: showRectangle,

    pause: pause,
    resume: resume,
    isPaused: isPaused,

    getTransform: getTransformModel,

    getMinZoom: getMinZoom,
    setMinZoom: setMinZoom,

    getMaxZoom: getMaxZoom,
    setMaxZoom: setMaxZoom,

    getTransformOrigin: getTransformOrigin,
    setTransformOrigin: setTransformOrigin,

    getZoomSpeed: getZoomSpeed,
    setZoomSpeed: setZoomSpeed
  };

  eventify(api);
  
  var initialX = typeof options.initialX === 'number' ? options.initialX : transform.x;
  var initialY = typeof options.initialY === 'number' ? options.initialY : transform.y;
  var initialZoom = typeof options.initialZoom === 'number' ? options.initialZoom : transform.scale;

  if(initialX != transform.x || initialY != transform.y || initialZoom != transform.scale){
    zoomAbs(initialX, initialY, initialZoom);
  }

  return api;

  function pause() {
    releaseEvents();
    paused = true;
  }

  function resume() {
    if (paused) {
      listenForEvents();
      paused = false;
    }
  }

  function isPaused() {
    return paused;
  }

  function showRectangle(rect) {
    // TODO: this duplicates autocenter. I think autocenter should go.
    var clientRect = owner.getBoundingClientRect();
    var size = transformToScreen(clientRect.width, clientRect.height);

    var rectWidth = rect.right - rect.left;
    var rectHeight = rect.bottom - rect.top;
    if (!Number.isFinite(rectWidth) || !Number.isFinite(rectHeight)) {
      throw new Error('Invalid rectangle');
    }

    var dw = size.x / rectWidth;
    var dh = size.y / rectHeight;
    var scale = Math.min(dw, dh);
    transform.x = -(rect.left + rectWidth / 2) * scale + size.x / 2;
    transform.y = -(rect.top + rectHeight / 2) * scale + size.y / 2;
    transform.scale = scale;
  }

  function transformToScreen(x, y) {
    if (panController.getScreenCTM) {
      var parentCTM = panController.getScreenCTM();
      var parentScaleX = parentCTM.a;
      var parentScaleY = parentCTM.d;
      var parentOffsetX = parentCTM.e;
      var parentOffsetY = parentCTM.f;
      storedCTMResult.x = x * parentScaleX - parentOffsetX;
      storedCTMResult.y = y * parentScaleY - parentOffsetY;
    } else {
      storedCTMResult.x = x;
      storedCTMResult.y = y;
    }

    return storedCTMResult;
  }

  function autocenter() {
    var w; // width of the parent
    var h; // height of the parent
    var left = 0;
    var top = 0;
    var sceneBoundingBox = getBoundingBox();
    if (sceneBoundingBox) {
      // If we have bounding box - use it.
      left = sceneBoundingBox.left;
      top = sceneBoundingBox.top;
      w = sceneBoundingBox.right - sceneBoundingBox.left;
      h = sceneBoundingBox.bottom - sceneBoundingBox.top;
    } else {
      // otherwise just use whatever space we have
      var ownerRect = owner.getBoundingClientRect();
      w = ownerRect.width;
      h = ownerRect.height;
    }
    var bbox = panController.getBBox();
    if (bbox.width === 0 || bbox.height === 0) {
      // we probably do not have any elements in the SVG
      // just bail out;
      return;
    }
    var dh = h / bbox.height;
    var dw = w / bbox.width;
    var scale = Math.min(dw, dh);
    transform.x = -(bbox.left + bbox.width / 2) * scale + w / 2 + left;
    transform.y = -(bbox.top + bbox.height / 2) * scale + h / 2 + top;
    transform.scale = scale;
  }

  function getTransformModel() {
    // TODO: should this be read only?
    return transform;
  }

  function getMinZoom() {
    return minZoom;
  }

  function setMinZoom(newMinZoom) {
    minZoom = newMinZoom;
  }

  function getMaxZoom() {
    return maxZoom;
  }

  function setMaxZoom(newMaxZoom) {
    maxZoom = newMaxZoom;
  }

  function getTransformOrigin() {
    return transformOrigin;
  }

  function setTransformOrigin(newTransformOrigin) {
    transformOrigin = parseTransformOrigin(newTransformOrigin);
  }

  function getZoomSpeed() {
    return speed;
  }

  function setZoomSpeed(newSpeed) {
    if (!Number.isFinite(newSpeed)) {
      throw new Error('Zoom speed should be a number');
    }
    speed = newSpeed;
  }

  function getPoint() {
    return {
      x: transform.x,
      y: transform.y
    };
  }

  function moveTo(x, y) {
    transform.x = x;
    transform.y = y;

    keepTransformInsideBounds();

    triggerEvent('pan');
    makeDirty();
  }

  function moveBy(dx, dy) {
    moveTo(transform.x + dx, transform.y + dy);
  }

  function keepTransformInsideBounds() {
    var boundingBox = getBoundingBox();
    if (!boundingBox) return;

    var adjusted = false;
    var clientRect = getClientRect();

    var diff = boundingBox.left - clientRect.right;
    if (diff > 0) {
      transform.x += diff;
      adjusted = true;
    }
    // check the other side:
    diff = boundingBox.right - clientRect.left;
    if (diff < 0) {
      transform.x += diff;
      adjusted = true;
    }

    // y axis:
    diff = boundingBox.top - clientRect.bottom;
    if (diff > 0) {
      // we adjust transform, so that it matches exactly our bounding box:
      // transform.y = boundingBox.top - (boundingBox.height + boundingBox.y) * transform.scale =>
      // transform.y = boundingBox.top - (clientRect.bottom - transform.y) =>
      // transform.y = diff + transform.y =>
      transform.y += diff;
      adjusted = true;
    }

    diff = boundingBox.bottom - clientRect.top;
    if (diff < 0) {
      transform.y += diff;
      adjusted = true;
    }
    return adjusted;
  }

  /**
   * Returns bounding box that should be used to restrict scene movement.
   */
  function getBoundingBox() {
    if (!bounds) return; // client does not want to restrict movement

    if (typeof bounds === 'boolean') {
      // for boolean type we use parent container bounds
      var ownerRect = owner.getBoundingClientRect();
      var sceneWidth = ownerRect.width;
      var sceneHeight = ownerRect.height;

      return {
        left: sceneWidth * boundsPadding,
        top: sceneHeight * boundsPadding,
        right: sceneWidth * (1 - boundsPadding),
        bottom: sceneHeight * (1 - boundsPadding)
      };
    }

    return bounds;
  }

  function getClientRect() {
    var bbox = panController.getBBox();
    var leftTop = client(bbox.left, bbox.top);

    return {
      left: leftTop.x,
      top: leftTop.y,
      right: bbox.width * transform.scale + leftTop.x,
      bottom: bbox.height * transform.scale + leftTop.y
    };
  }

  function client(x, y) {
    return {
      x: x * transform.scale + transform.x,
      y: y * transform.scale + transform.y
    };
  }

  function makeDirty() {
    isDirty = true;
    frameAnimation = window.requestAnimationFrame(frame);
  }

  function zoomByRatio(clientX, clientY, ratio) {
    if (isNaN(clientX) || isNaN(clientY) || isNaN(ratio)) {
      throw new Error('zoom requires valid numbers');
    }

    var newScale = transform.scale * ratio;

    if (newScale < minZoom) {
      if (transform.scale === minZoom) return;

      ratio = minZoom / transform.scale;
    }
    if (newScale > maxZoom) {
      if (transform.scale === maxZoom) return;

      ratio = maxZoom / transform.scale;
    }

    var size = transformToScreen(clientX, clientY);

    transform.x = size.x - ratio * (size.x - transform.x);
    transform.y = size.y - ratio * (size.y - transform.y);

    // TODO: https://github.com/anvaka/panzoom/issues/112
    if (bounds && boundsPadding === 1 && minZoom === 1) {
      transform.scale *= ratio;
      keepTransformInsideBounds();
    } else {
      var transformAdjusted = keepTransformInsideBounds();
      if (!transformAdjusted) transform.scale *= ratio;
    }

    triggerEvent('zoom');

    makeDirty();
  }

  function zoomAbs(clientX, clientY, zoomLevel) {
    var ratio = zoomLevel / transform.scale;
    zoomByRatio(clientX, clientY, ratio);
  }

  function centerOn(ui) {
    var parent = ui.ownerSVGElement;
    if (!parent)
      throw new Error('ui element is required to be within the scene');

    // TODO: should i use controller's screen CTM?
    var clientRect = ui.getBoundingClientRect();
    var cx = clientRect.left + clientRect.width / 2;
    var cy = clientRect.top + clientRect.height / 2;

    var container = parent.getBoundingClientRect();
    var dx = container.width / 2 - cx;
    var dy = container.height / 2 - cy;

    internalMoveBy(dx, dy, true);
  }

  function smoothMoveTo(x, y){
    internalMoveBy(x - transform.x, y - transform.y, true);
  }

  function internalMoveBy(dx, dy, smooth) {
    if (!smooth) {
      return moveBy(dx, dy);
    }

    if (moveByAnimation) moveByAnimation.cancel();

    var from = { x: 0, y: 0 };
    var to = { x: dx, y: dy };
    var lastX = 0;
    var lastY = 0;

    moveByAnimation = animate(from, to, {
      step: function (v) {
        moveBy(v.x - lastX, v.y - lastY);

        lastX = v.x;
        lastY = v.y;
      }
    });
  }

  function scroll(x, y) {
    cancelZoomAnimation();
    moveTo(x, y);
  }

  function dispose() {
    releaseEvents();
  }

  function listenForEvents() {
    owner.addEventListener('mousedown', onMouseDown, { passive: false });
    owner.addEventListener('dblclick', onDoubleClick, { passive: false });
    owner.addEventListener('touchstart', onTouch, { passive: false });
    owner.addEventListener('keydown', onKeyDown, { passive: false });

    // Need to listen on the owner container, so that we are not limited
    // by the size of the scrollable domElement
    wheel.addWheelListener(owner, onMouseWheel, { passive: false });

    makeDirty();
  }

  function releaseEvents() {
    wheel.removeWheelListener(owner, onMouseWheel);
    owner.removeEventListener('mousedown', onMouseDown);
    owner.removeEventListener('keydown', onKeyDown);
    owner.removeEventListener('dblclick', onDoubleClick);
    owner.removeEventListener('touchstart', onTouch);

    if (frameAnimation) {
      window.cancelAnimationFrame(frameAnimation);
      frameAnimation = 0;
    }

    smoothScroll.cancel();

    releaseDocumentMouse();
    releaseTouches();
    textSelection.release();

    triggerPanEnd();
  }

  function frame() {
    if (isDirty) applyTransform();
  }

  function applyTransform() {
    isDirty = false;

    // TODO: Should I allow to cancel this?
    panController.applyTransform(transform);

    triggerEvent('transform');
    frameAnimation = 0;
  }

  function onKeyDown(e) {
    var x = 0,
      y = 0,
      z = 0;
    if (e.keyCode === 38) {
      y = 1; // up
    } else if (e.keyCode === 40) {
      y = -1; // down
    } else if (e.keyCode === 37) {
      x = 1; // left
    } else if (e.keyCode === 39) {
      x = -1; // right
    } else if (e.keyCode === 189 || e.keyCode === 109) {
      // DASH or SUBTRACT
      z = 1; // `-` -  zoom out
    } else if (e.keyCode === 187 || e.keyCode === 107) {
      // EQUAL SIGN or ADD
      z = -1; // `=` - zoom in (equal sign on US layout is under `+`)
    }

    if (filterKey(e, x, y, z)) {
      // They don't want us to handle the key: https://github.com/anvaka/panzoom/issues/45
      return;
    }

    if (x || y) {
      e.preventDefault();
      e.stopPropagation();

      var clientRect = owner.getBoundingClientRect();
      // movement speed should be the same in both X and Y direction:
      var offset = Math.min(clientRect.width, clientRect.height);
      var moveSpeedRatio = 0.05;
      var dx = offset * moveSpeedRatio * x;
      var dy = offset * moveSpeedRatio * y;

      // TODO: currently we do not animate this. It could be better to have animation
      internalMoveBy(dx, dy);
    }

    if (z) {
      var scaleMultiplier = getScaleMultiplier(z * 100);
      var offset = transformOrigin ? getTransformOriginOffset() : midPoint();
      publicZoomTo(offset.x, offset.y, scaleMultiplier);
    }
  }

  function midPoint() {
    var ownerRect = owner.getBoundingClientRect();
    return {
      x: ownerRect.width / 2,
      y: ownerRect.height / 2
    };
  }

  function onTouch(e) {
    // let them override the touch behavior
    beforeTouch(e);
    clearPendingClickEventTimeout();

    if (e.touches.length === 1) {
      return handleSingleFingerTouch(e, e.touches[0]);
    } else if (e.touches.length === 2) {
      // handleTouchMove() will care about pinch zoom.
      pinchZoomLength = getPinchZoomLength(e.touches[0], e.touches[1]);
      multiTouch = true;
      startTouchListenerIfNeeded();
    }
  }

  function beforeTouch(e) {
    // TODO: Need to unify this filtering names. E.g. use `beforeTouch`
    if (options.onTouch && !options.onTouch(e)) {
      // if they return `false` from onTouch, we don't want to stop
      // events propagation. Fixes https://github.com/anvaka/panzoom/issues/12
      return;
    }

    e.stopPropagation();
    e.preventDefault();
  }

  function beforeDoubleClick(e) {
    clearPendingClickEventTimeout();

    // TODO: Need to unify this filtering names. E.g. use `beforeDoubleClick``
    if (options.onDoubleClick && !options.onDoubleClick(e)) {
      // if they return `false` from onTouch, we don't want to stop
      // events propagation. Fixes https://github.com/anvaka/panzoom/issues/46
      return;
    }

    e.preventDefault();
    e.stopPropagation();
  }

  function handleSingleFingerTouch(e) {
    lastTouchStartTime = new Date();
    var touch = e.touches[0];
    var offset = getOffsetXY(touch);
    lastSingleFingerOffset = offset;
    var point = transformToScreen(offset.x, offset.y);
    mouseX = point.x;
    mouseY = point.y;
    clickX = mouseX;
    clickY = mouseY;

    smoothScroll.cancel();
    startTouchListenerIfNeeded();
  }

  function startTouchListenerIfNeeded() {
    if (touchInProgress) {
      // no need to do anything, as we already listen to events;
      return;
    }

    touchInProgress = true;
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('touchcancel', handleTouchEnd);
  }

  function handleTouchMove(e) {
    if (e.touches.length === 1) {
      e.stopPropagation();
      var touch = e.touches[0];

      var offset = getOffsetXY(touch);
      var point = transformToScreen(offset.x, offset.y);

      var dx = point.x - mouseX;
      var dy = point.y - mouseY;

      if (dx !== 0 && dy !== 0) {
        triggerPanStart();
      }
      mouseX = point.x;
      mouseY = point.y;
      internalMoveBy(dx, dy);
    } else if (e.touches.length === 2) {
      // it's a zoom, let's find direction
      multiTouch = true;
      var t1 = e.touches[0];
      var t2 = e.touches[1];
      var currentPinchLength = getPinchZoomLength(t1, t2);

      // since the zoom speed is always based on distance from 1, we need to apply
      // pinch speed only on that distance from 1:
      var scaleMultiplier =
        1 + (currentPinchLength / pinchZoomLength - 1) * pinchSpeed;

      var firstTouchPoint = getOffsetXY(t1);
      var secondTouchPoint = getOffsetXY(t2);
      mouseX = (firstTouchPoint.x + secondTouchPoint.x) / 2;
      mouseY = (firstTouchPoint.y + secondTouchPoint.y) / 2;
      if (transformOrigin) {
        var offset = getTransformOriginOffset();
        mouseX = offset.x;
        mouseY = offset.y;
      }

      publicZoomTo(mouseX, mouseY, scaleMultiplier);

      pinchZoomLength = currentPinchLength;
      e.stopPropagation();
      e.preventDefault();
    }
  }

  function clearPendingClickEventTimeout() {
    if (pendingClickEventTimeout) {
      clearTimeout(pendingClickEventTimeout);
      pendingClickEventTimeout = 0;
    }
  }

  function handlePotentialClickEvent(e) {
    // we could still be in the double tap mode, let's wait until double tap expires,
    // and then notify:
    if (!options.onClick) return;
    clearPendingClickEventTimeout();
    var dx = mouseX - clickX;
    var dy = mouseY - clickY;
    var l = Math.sqrt(dx * dx + dy * dy);
    if (l > 5) return; // probably they are panning, ignore it

    pendingClickEventTimeout = setTimeout(function() {
      pendingClickEventTimeout = 0;
      options.onClick(e);
    }, doubleTapSpeedInMS);
  }

  function handleTouchEnd(e) {
    clearPendingClickEventTimeout();
    if (e.touches.length > 0) {
      var offset = getOffsetXY(e.touches[0]);
      var point = transformToScreen(offset.x, offset.y);
      mouseX = point.x;
      mouseY = point.y;
    } else {
      var now = new Date();
      if (now - lastTouchEndTime < doubleTapSpeedInMS) {
        // They did a double tap here
        if (transformOrigin) {
          var offset = getTransformOriginOffset();
          smoothZoom(offset.x, offset.y, zoomDoubleClickSpeed);
        } else {
          // We want untransformed x/y here.
          smoothZoom(lastSingleFingerOffset.x, lastSingleFingerOffset.y, zoomDoubleClickSpeed);
        }
      } else if (now - lastTouchStartTime < clickEventTimeInMS) {
        handlePotentialClickEvent(e);
      }

      lastTouchEndTime = now;

      triggerPanEnd();
      releaseTouches();
    }
  }

  function getPinchZoomLength(finger1, finger2) {
    var dx = finger1.clientX - finger2.clientX;
    var dy = finger1.clientY - finger2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function onDoubleClick(e) {
    beforeDoubleClick(e);
    var offset = getOffsetXY(e);
    if (transformOrigin) {
      // TODO: looks like this is duplicated in the file.
      // Need to refactor
      offset = getTransformOriginOffset();
    }
    smoothZoom(offset.x, offset.y, zoomDoubleClickSpeed);
  }

  function onMouseDown(e) {
    clearPendingClickEventTimeout();

    // if client does not want to handle this event - just ignore the call
    if (beforeMouseDown(e)) return;

    lastMouseDownedEvent = e;
    lastMouseDownTime = new Date();

    if (touchInProgress) {
      // modern browsers will fire mousedown for touch events too
      // we do not want this: touch is handled separately.
      e.stopPropagation();
      return false;
    }
    // for IE, left click == 1
    // for Firefox, left click == 0
    var isLeftButton =
      (e.button === 1 && window.event !== null) || e.button === 0;
    if (!isLeftButton) return;

    smoothScroll.cancel();

    var offset = getOffsetXY(e);
    var point = transformToScreen(offset.x, offset.y);
    clickX = mouseX = point.x;
    clickY = mouseY = point.y;

    // We need to listen on document itself, since mouse can go outside of the
    // window, and we will loose it
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    textSelection.capture(e.target || e.srcElement);

    return false;
  }

  function onMouseMove(e) {
    // no need to worry about mouse events when touch is happening
    if (touchInProgress) return;

    triggerPanStart();

    var offset = getOffsetXY(e);
    var point = transformToScreen(offset.x, offset.y);
    var dx = point.x - mouseX;
    var dy = point.y - mouseY;

    mouseX = point.x;
    mouseY = point.y;

    internalMoveBy(dx, dy);
  }

  function onMouseUp() {
    var now = new Date();
    if (now - lastMouseDownTime < clickEventTimeInMS) handlePotentialClickEvent(lastMouseDownedEvent);
    textSelection.release();
    triggerPanEnd();
    releaseDocumentMouse();
  }

  function releaseDocumentMouse() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    panstartFired = false;
  }

  function releaseTouches() {
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleTouchEnd);
    document.removeEventListener('touchcancel', handleTouchEnd);
    panstartFired = false;
    multiTouch = false;
    touchInProgress = false;
  }

  function onMouseWheel(e) {
    // if client does not want to handle this event - just ignore the call
    if (beforeWheel(e)) return;

    smoothScroll.cancel();

    var delta = e.deltaY;
    if (e.deltaMode > 0) delta *= 100;

    var scaleMultiplier = getScaleMultiplier(delta);

    if (scaleMultiplier !== 1) {
      var offset = transformOrigin
        ? getTransformOriginOffset()
        : getOffsetXY(e);
      publicZoomTo(offset.x, offset.y, scaleMultiplier);
      e.preventDefault();
    }
  }

  function getOffsetXY(e) {
    var offsetX, offsetY;
    // I tried using e.offsetX, but that gives wrong results for svg, when user clicks on a path.
    var ownerRect = owner.getBoundingClientRect();
    offsetX = e.clientX - ownerRect.left;
    offsetY = e.clientY - ownerRect.top;

    return { x: offsetX, y: offsetY };
  }

  function smoothZoom(clientX, clientY, scaleMultiplier) {
    var fromValue = transform.scale;
    var from = { scale: fromValue };
    var to = { scale: scaleMultiplier * fromValue };

    smoothScroll.cancel();
    cancelZoomAnimation();

    zoomToAnimation = animate(from, to, {
      step: function (v) {
        zoomAbs(clientX, clientY, v.scale);
      },
      done: triggerZoomEnd
    });
  }

  function smoothZoomAbs(clientX, clientY, toScaleValue) {
    var fromValue = transform.scale;
    var from = { scale: fromValue };
    var to = { scale: toScaleValue };

    smoothScroll.cancel();
    cancelZoomAnimation();

    zoomToAnimation = animate(from, to, {
      step: function (v) {
        zoomAbs(clientX, clientY, v.scale);
      }
    });
  }

  function getTransformOriginOffset() {
    var ownerRect = owner.getBoundingClientRect();
    return {
      x: ownerRect.width * transformOrigin.x,
      y: ownerRect.height * transformOrigin.y
    };
  }

  function publicZoomTo(clientX, clientY, scaleMultiplier) {
    smoothScroll.cancel();
    cancelZoomAnimation();
    return zoomByRatio(clientX, clientY, scaleMultiplier);
  }

  function cancelZoomAnimation() {
    if (zoomToAnimation) {
      zoomToAnimation.cancel();
      zoomToAnimation = null;
    }
  }

  function getScaleMultiplier(delta) {
    var sign = Math.sign(delta);
    var deltaAdjustedSpeed = Math.min(0.25, Math.abs(speed * delta / 128));
    return 1 - sign * deltaAdjustedSpeed;
  }

  function triggerPanStart() {
    if (!panstartFired) {
      triggerEvent('panstart');
      panstartFired = true;
      smoothScroll.start();
    }
  }

  function triggerPanEnd() {
    if (panstartFired) {
      // we should never run smooth scrolling if it was multiTouch (pinch zoom animation):
      if (!multiTouch) smoothScroll.stop();
      triggerEvent('panend');
    }
  }

  function triggerZoomEnd() {
    triggerEvent('zoomend');
  }

  function triggerEvent(name) {
    api.fire(name, api);
  }
}

function parseTransformOrigin(options) {
  if (!options) return;
  if (typeof options === 'object') {
    if (!isNumber(options.x) || !isNumber(options.y))
      failTransformOrigin(options);
    return options;
  }

  failTransformOrigin();
}

function failTransformOrigin(options) {
  console.error(options);
  throw new Error(
    [
      'Cannot parse transform origin.',
      'Some good examples:',
      '  "center center" can be achieved with {x: 0.5, y: 0.5}',
      '  "top center" can be achieved with {x: 0.5, y: 0}',
      '  "bottom right" can be achieved with {x: 1, y: 1}'
    ].join('\n')
  );
}

function noop() { }

function validateBounds(bounds) {
  var boundsType = typeof bounds;
  if (boundsType === 'undefined' || boundsType === 'boolean') return; // this is okay
  // otherwise need to be more thorough:
  var validBounds =
    isNumber(bounds.left) &&
    isNumber(bounds.top) &&
    isNumber(bounds.bottom) &&
    isNumber(bounds.right);

  if (!validBounds)
    throw new Error(
      'Bounds object is not valid. It can be: ' +
      'undefined, boolean (true|false) or an object {left, top, right, bottom}'
    );
}

function isNumber(x) {
  return Number.isFinite(x);
}

// IE 11 does not support isNaN:
function isNaN(value) {
  if (Number.isNaN) {
    return Number.isNaN(value);
  }

  return value !== value;
}

function rigidScroll() {
  return {
    start: noop,
    stop: noop,
    cancel: noop
  };
}

function autoRun() {
  if (typeof document === 'undefined') return;

  var scripts = document.getElementsByTagName('script');
  if (!scripts) return;
  var panzoomScript;

  for (var i = 0; i < scripts.length; ++i) {
    var x = scripts[i];
    if (x.src && x.src.match(/\bpanzoom(\.min)?\.js/)) {
      panzoomScript = x;
      break;
    }
  }

  if (!panzoomScript) return;

  var query = panzoomScript.getAttribute('query');
  if (!query) return;

  var globalName = panzoomScript.getAttribute('name') || 'pz';
  var started = Date.now();

  tryAttach();

  function tryAttach() {
    var el = document.querySelector(query);
    if (!el) {
      var now = Date.now();
      var elapsed = now - started;
      if (elapsed < 2000) {
        // Let's wait a bit
        setTimeout(tryAttach, 100);
        return;
      }
      // If we don't attach within 2 seconds to the target element, consider it a failure
      console.error('Cannot find the panzoom element', globalName);
      return;
    }
    var options = collectOptions(panzoomScript);
    console.log(options);
    window[globalName] = createPanZoom(el, options);
  }

  function collectOptions(script) {
    var attrs = script.attributes;
    var options = {};
    for (var j = 0; j < attrs.length; ++j) {
      var attr = attrs[j];
      var nameValue = getPanzoomAttributeNameValue(attr);
      if (nameValue) {
        options[nameValue.name] = nameValue.value;
      }
    }

    return options;
  }

  function getPanzoomAttributeNameValue(attr) {
    if (!attr.name) return;
    var isPanZoomAttribute =
      attr.name[0] === 'p' && attr.name[1] === 'z' && attr.name[2] === '-';

    if (!isPanZoomAttribute) return;

    var name = attr.name.substr(3);
    var value = JSON.parse(attr.value);
    return { name: name, value: value };
  }
}

autoRun();
	

/***/ }),

/***/ "./node_modules/panzoom/lib/createTextSelectionInterceptor.js":
/*!********************************************************************!*\
  !*** ./node_modules/panzoom/lib/createTextSelectionInterceptor.js ***!
  \********************************************************************/
/***/ ((module) => {

/**
 * Disallows selecting text.
 */
module.exports = createTextSelectionInterceptor;

function createTextSelectionInterceptor(useFake) {
  if (useFake) {
    return {
      capture: noop,
      release: noop
    };
  }

  var dragObject;
  var prevSelectStart;
  var prevDragStart;
  var wasCaptured = false;

  return {
    capture: capture,
    release: release
  };

  function capture(domObject) {
    wasCaptured = true;
    prevSelectStart = window.document.onselectstart;
    prevDragStart = window.document.ondragstart;

    window.document.onselectstart = disabled;

    dragObject = domObject;
    dragObject.ondragstart = disabled;
  }

  function release() {
    if (!wasCaptured) return;
    
    wasCaptured = false;
    window.document.onselectstart = prevSelectStart;
    if (dragObject) dragObject.ondragstart = prevDragStart;
  }
}

function disabled(e) {
  e.stopPropagation();
  return false;
}

function noop() {}


/***/ }),

/***/ "./node_modules/panzoom/lib/domController.js":
/*!***************************************************!*\
  !*** ./node_modules/panzoom/lib/domController.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports = makeDomController;

module.exports.canAttach = isDomElement;

function makeDomController(domElement, options) {
  var elementValid = isDomElement(domElement); 
  if (!elementValid) {
    throw new Error('panzoom requires DOM element to be attached to the DOM tree');
  }

  var owner = domElement.parentElement;
  domElement.scrollTop = 0;
  
  if (!options.disableKeyboardInteraction) {
    owner.setAttribute('tabindex', 0);
  }

  var api = {
    getBBox: getBBox,
    getOwner: getOwner,
    applyTransform: applyTransform,
  };
  
  return api;

  function getOwner() {
    return owner;
  }

  function getBBox() {
    // TODO: We should probably cache this?
    return  {
      left: 0,
      top: 0,
      width: domElement.clientWidth,
      height: domElement.clientHeight
    };
  }

  function applyTransform(transform) {
    // TODO: Should we cache this?
    domElement.style.transformOrigin = '0 0 0';
    domElement.style.transform = 'matrix(' +
      transform.scale + ', 0, 0, ' +
      transform.scale + ', ' +
      transform.x + ', ' + transform.y + ')';
  }
}

function isDomElement(element) {
  return element && element.parentElement && element.style;
}


/***/ }),

/***/ "./node_modules/panzoom/lib/kinetic.js":
/*!*********************************************!*\
  !*** ./node_modules/panzoom/lib/kinetic.js ***!
  \*********************************************/
/***/ ((module) => {

/**
 * Allows smooth kinetic scrolling of the surface
 */
module.exports = kinetic;

function kinetic(getPoint, scroll, settings) {
  if (typeof settings !== 'object') {
    // setting could come as boolean, we should ignore it, and use an object.
    settings = {};
  }

  var minVelocity = typeof settings.minVelocity === 'number' ? settings.minVelocity : 5;
  var amplitude = typeof settings.amplitude === 'number' ? settings.amplitude : 0.25;
  var cancelAnimationFrame = typeof settings.cancelAnimationFrame === 'function' ? settings.cancelAnimationFrame : getCancelAnimationFrame();
  var requestAnimationFrame = typeof settings.requestAnimationFrame === 'function' ? settings.requestAnimationFrame : getRequestAnimationFrame();

  var lastPoint;
  var timestamp;
  var timeConstant = 342;

  var ticker;
  var vx, targetX, ax;
  var vy, targetY, ay;

  var raf;

  return {
    start: start,
    stop: stop,
    cancel: dispose
  };

  function dispose() {
    cancelAnimationFrame(ticker);
    cancelAnimationFrame(raf);
  }

  function start() {
    lastPoint = getPoint();

    ax = ay = vx = vy = 0;
    timestamp = new Date();

    cancelAnimationFrame(ticker);
    cancelAnimationFrame(raf);

    // we start polling the point position to accumulate velocity
    // Once we stop(), we will use accumulated velocity to keep scrolling
    // an object.
    ticker = requestAnimationFrame(track);
  }

  function track() {
    var now = Date.now();
    var elapsed = now - timestamp;
    timestamp = now;

    var currentPoint = getPoint();

    var dx = currentPoint.x - lastPoint.x;
    var dy = currentPoint.y - lastPoint.y;

    lastPoint = currentPoint;

    var dt = 1000 / (1 + elapsed);

    // moving average
    vx = 0.8 * dx * dt + 0.2 * vx;
    vy = 0.8 * dy * dt + 0.2 * vy;

    ticker = requestAnimationFrame(track);
  }

  function stop() {
    cancelAnimationFrame(ticker);
    cancelAnimationFrame(raf);

    var currentPoint = getPoint();

    targetX = currentPoint.x;
    targetY = currentPoint.y;
    timestamp = Date.now();

    if (vx < -minVelocity || vx > minVelocity) {
      ax = amplitude * vx;
      targetX += ax;
    }

    if (vy < -minVelocity || vy > minVelocity) {
      ay = amplitude * vy;
      targetY += ay;
    }

    raf = requestAnimationFrame(autoScroll);
  }

  function autoScroll() {
    var elapsed = Date.now() - timestamp;

    var moving = false;
    var dx = 0;
    var dy = 0;

    if (ax) {
      dx = -ax * Math.exp(-elapsed / timeConstant);

      if (dx > 0.5 || dx < -0.5) moving = true;
      else dx = ax = 0;
    }

    if (ay) {
      dy = -ay * Math.exp(-elapsed / timeConstant);

      if (dy > 0.5 || dy < -0.5) moving = true;
      else dy = ay = 0;
    }

    if (moving) {
      scroll(targetX + dx, targetY + dy);
      raf = requestAnimationFrame(autoScroll);
    }
  }
}

function getCancelAnimationFrame() {
  if (typeof cancelAnimationFrame === 'function') return cancelAnimationFrame;
  return clearTimeout;
}

function getRequestAnimationFrame() {
  if (typeof requestAnimationFrame === 'function') return requestAnimationFrame;

  return function (handler) {
    return setTimeout(handler, 16);
  };
}

/***/ }),

/***/ "./node_modules/panzoom/lib/svgController.js":
/*!***************************************************!*\
  !*** ./node_modules/panzoom/lib/svgController.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports = makeSvgController;
module.exports.canAttach = isSVGElement;

function makeSvgController(svgElement, options) {
  if (!isSVGElement(svgElement)) {
    throw new Error('svg element is required for svg.panzoom to work');
  }

  var owner = svgElement.ownerSVGElement;
  if (!owner) {
    throw new Error(
      'Do not apply panzoom to the root <svg> element. ' +
      'Use its child instead (e.g. <g></g>). ' +
      'As of March 2016 only FireFox supported transform on the root element');
  }

  if (!options.disableKeyboardInteraction) {
    owner.setAttribute('tabindex', 0);
  }

  var api = {
    getBBox: getBBox,
    getScreenCTM: getScreenCTM,
    getOwner: getOwner,
    applyTransform: applyTransform,
    initTransform: initTransform
  };
  
  return api;

  function getOwner() {
    return owner;
  }

  function getBBox() {
    var bbox =  svgElement.getBBox();
    return {
      left: bbox.x,
      top: bbox.y,
      width: bbox.width,
      height: bbox.height,
    };
  }

  function getScreenCTM() {
    var ctm = owner.getCTM();
    if (!ctm) {
      // This is likely firefox: https://bugzilla.mozilla.org/show_bug.cgi?id=873106
      // The code below is not entirely correct, but still better than nothing
      return owner.getScreenCTM();
    }
    return ctm;
  }

  function initTransform(transform) {
    var screenCTM = svgElement.getCTM();

    // The above line returns null on Firefox
    if (screenCTM === null) {
      screenCTM = document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGMatrix();
    }

    transform.x = screenCTM.e;
    transform.y = screenCTM.f;
    transform.scale = screenCTM.a;
    owner.removeAttributeNS(null, 'viewBox');
  }

  function applyTransform(transform) {
    svgElement.setAttribute('transform', 'matrix(' +
      transform.scale + ' 0 0 ' +
      transform.scale + ' ' +
      transform.x + ' ' + transform.y + ')');
  }
}

function isSVGElement(element) {
  return element && element.ownerSVGElement && element.getCTM;
}

/***/ }),

/***/ "./node_modules/panzoom/lib/transform.js":
/*!***********************************************!*\
  !*** ./node_modules/panzoom/lib/transform.js ***!
  \***********************************************/
/***/ ((module) => {

module.exports = Transform;

function Transform() {
  this.x = 0;
  this.y = 0;
  this.scale = 1;
}


/***/ }),

/***/ "./node_modules/wheel/index.js":
/*!*************************************!*\
  !*** ./node_modules/wheel/index.js ***!
  \*************************************/
/***/ ((module) => {

/**
 * This module used to unify mouse wheel behavior between different browsers in 2014
 * Now it's just a wrapper around addEventListener('wheel');
 *
 * Usage:
 *  var addWheelListener = require('wheel').addWheelListener;
 *  var removeWheelListener = require('wheel').removeWheelListener;
 *  addWheelListener(domElement, function (e) {
 *    // mouse wheel event
 *  });
 *  removeWheelListener(domElement, function);
 */

module.exports = addWheelListener;

// But also expose "advanced" api with unsubscribe:
module.exports.addWheelListener = addWheelListener;
module.exports.removeWheelListener = removeWheelListener;


function addWheelListener(element, listener, useCapture) {
  element.addEventListener('wheel', listener, useCapture);
}

function removeWheelListener( element, listener, useCapture ) {
  element.removeEventListener('wheel', listener, useCapture);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _webflow_js_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webflow/js/main.js */ "./src/webflow/js/main.js");
/* harmony import */ var _webflow_js_main_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_webflow_js_main_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @barba/core */ "./node_modules/@barba/core/dist/barba.umd.js");
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_barba_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var panzoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! panzoom */ "./node_modules/panzoom/index.js");
/* harmony import */ var panzoom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(panzoom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ImageGalleryDialog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ImageGalleryDialog.js */ "./src/components/ImageGalleryDialog.js");
/* harmony import */ var _components_LevelSlider_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/LevelSlider.js */ "./src/components/LevelSlider.js");
/* harmony import */ var _components_Loader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Loader.js */ "./src/components/Loader.js");
/* harmony import */ var _components_SearchForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SearchForm.js */ "./src/components/SearchForm.js");
/* harmony import */ var _components_SubscribeForm_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/SubscribeForm.js */ "./src/components/SubscribeForm.js");
/* harmony import */ var _state_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state/index.js */ "./src/state/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/index.js */ "./src/utils/index.js");













// let panzoomEl;
// let parent;
// let isPanzoomActive = false;
// let barbach = 0;

// // let panzoomx = 0;
// // let panzoomy = 0;

// let panzoomx = 0;
// let panzoomy = 0;

// let zoomcounter;
// let startzoom;

// let screenWidth = window.innerWidth;
// let pageHeight = window.innerHeight;

// if (Webflow.env('editor') === undefined) {
// 	lenis = new Lenis({
// 		lerp: 0.2,
// 		wheelMultiplier: 0.7,
// 		gestureOrientation: 'vertical',
// 		normalizeWheel: false,
// 		smoothTouch: false,
// 	});
// 	function raf(time) {
// 		lenis.raf(time);
// 		requestAnimationFrame(raf);
// 	}
// 	requestAnimationFrame(raf);
// 	//lenis.stop();
// }
// $('[data-lenis-start]').on('click', function () {
// 	lenis.start();
// });
// $('[data-lenis-stop]').on('click', function () {
// 	lenis.stop();
// });
// $('[data-lenis-toggle]').on('click', function () {
// 	$(this).toggleClass('stop-scroll');
// 	if ($(this).hasClass('stop-scroll')) {
// 		lenis.stop();
// 	} else {
// 		lenis.start();
// 	}
// });

// window.addEventListener('load', (event) => {
// 	if ($('.barba-container').hasClass('home-page')) {
// 		$('body').addClass('homepage');
// 		$('.mapa').addClass('readymapa');
// 		homepage();
// 		//		startzoom = 0.005;
// 		panzoomFunc();
// 	} else {
// 		$('body').addClass('otherpages');

// 		zoomcounter = 10;

// 		$('.hidden-clicker')[0].click();
// 		innerpageEscape();

// 		levelchecker();
// 	}

// 	barbachfunc();
// 	inputchecker();
// });

// document.addEventListener('DOMContentLoaded', function () {
// 	Barba.Pjax.start();
// 	Barba.Prefetch.init();
// 	var FadeTransition = Barba.BaseTransition.extend({
// 		start: function () {
// 			this.newContainerLoading
// 				.then(this.perehod.bind(this))
// 				.then(this.fadeOut.bind(this))
// 				.then(this.fadeIn.bind(this));
// 		},

// 		perehod: function () {},
// 		fadeOut: function () {
// 			setTimeout(function () {
// 				$('html').addClass('barba-perehod');
// 			}, 450);

// 			if (barbach > 0) {
// 				return $(this.oldContainer)
// 					.animate({ visibility: 'visible' }, 2000)
// 					.promise();
// 			} else {
// 				return $(this.oldContainer)
// 					.animate({ visibility: 'visible' }, 450)
// 					.promise();
// 			}
// 		},
// 		fadeIn: function () {
// 			$(window).scrollTop(0);

// 			var _this = this;
// 			_this.done();

// 			Webflow.destroy();
// 			Webflow.ready();
// 			Webflow.require('ix2').init();
// 			$('html').removeClass('barba-perehod');
// 			$('body').removeClass('homepage');
// 			$('body').removeClass('otherpages');
// 			if ($('.barba-container').hasClass('home-page')) {
// 				$('body').addClass('homepage');
// 				$('.mapa').addClass('fromten');

// 				startzoom = zoomcounter;

// 				setTimeout(function () {
// 					panzoomFunc();
// 				}, 0);

// 				setTimeout(function () {
// 					$('.mapa').addClass('readymapa');
// 					panzoomEl.zoom(startzoom);
// 				}, 100);

// 				$('.hidden-clicker-home')[0].click();
// 			} else {
// 				$('body').addClass('otherpages');

// 				innerpageEscape();
// 			}

// 			if (barbach > 0) {
// 				$('.hidden-clicker')[0].click();
// 			} else {
// 				$('.hidden-clicker-2')[0].click();
// 			}

// 			levelchecker();

// 			barbach = 0;

// 			inputchecker();
// 		},
// 	});
// 	Barba.Pjax.getTransition = function () {
// 		return FadeTransition;
// 	};
// 	Barba.Dispatcher.on(
// 		'newPageReady',
// 		function (currentStatus, oldStatus, container, newPageRawHTML) {
// 			var response = newPageRawHTML.replace(
// 				/(<\/?)html( .+?)?>/gi,
// 				'$1nothtml$2>',
// 				newPageRawHTML
// 			);
// 			var bodyClasses = $(response).filter('nothtml').attr('data-wf-page');
// 			$('html').attr('data-wf-page', bodyClasses);
// 		}
// 	);
// });

// let imgsrcer;

// function barbachfunc() {
// 	$('.us-link').click(function () {});
// }

// function homepage() {
// 	zoomcounter = 0.125;

// 	$('.u-link.u-q').hover(
// 		function () {
// 			$(this).parent().addClass('active');
// 			imgsrcer = $(this).children('.hidden-img').attr('src');

// 			$('.img-cover-hover').attr('src', imgsrcer);
// 			$('.img-cover-hover').addClass('active');
// 			$('.uto-block').addClass('hideop');
// 		},
// 		function () {
// 			$('.img-cover-hover').removeClass('active');
// 			$('.uto-block').removeClass('hideop');
// 			$(this).parent().removeClass('active');
// 		}
// 	);

// 	$('.u-link.u-i').hover(
// 		function () {
// 			$(this).parent().addClass('active');
// 			imgsrcer = $(this).children('.hidden-img').attr('src');

// 			$('.img-cover-hover').attr('src', imgsrcer);
// 			$('.img-cover-hover').addClass('active');
// 			$('.uto-block').addClass('hideop');
// 		},
// 		function () {
// 			$('.img-cover-hover').removeClass('active');
// 			$('.uto-block').removeClass('hideop');
// 			$(this).parent().removeClass('active');
// 		}
// 	);
// }

// function observerblocks() {
// 	$('.uto-block').addClass('opview');

// 	document.querySelectorAll('.rtz-checl').forEach((trigger) => {
// 		new IntersectionObserver(
// 			(entries, observer) => {
// 				entries.forEach(async (entry) => {
// 					if (entry.isIntersecting) {
// 						$(entry.target).parent().parent().removeClass('offview');
// 						$(entry.target).parent().parent().addClass('onview');
// 					} else {
// 						$(entry.target).parent().parent().removeClass('onview');
// 						$(entry.target).parent().parent().addClass('offview');
// 					}
// 				});
// 			},
// 			{
// 				threshold: 0.5,
// 			}
// 		).observe(trigger);
// 	});

// 	document.querySelectorAll('.uto-block').forEach((trigger) => {
// 		new IntersectionObserver(
// 			(entries, observer) => {
// 				entries.forEach(async (entry) => {
// 					if (entry.isIntersecting) {
// 						$(entry.target).removeClass('opview');
// 					} else {
// 					}
// 				});
// 			},
// 			{
// 				threshold: 0.2,
// 			}
// 		).observe(trigger);
// 	});
// }

// function levelchecker() {
// 	if (zoomcounter == 10) {
// 		$('.zoom-viewer').css('transform', 'translate(-50%, 0%)');

// 		$('.homepagezoom').hide();
// 		$('.otherpagezoom').show();
// 	} else if ($('.barba-container').hasClass('inner-page')) {
// 		zoomcounter = 10;

// 		$('.zoom-viewer').css('transform', 'translate(-50%, 0%)');

// 		$('.homepagezoom').hide();
// 		$('.otherpagezoom').show();
// 	} else if (zoomcounter == 0.125) {
// 		$('.zoom-viewer').css('transform', 'translate(50%, 0%)');

// 		$('.homepagezoom').show();
// 		$('.otherpagezoom').hide();
// 	} else if (zoomcounter == 0.5) {
// 		$('.zoom-viewer').css('transform', 'translate(0%,0%)');

// 		$('.homepagezoom').show();
// 		$('.otherpagezoom').hide();

// 		if ($('.barba-container').hasClass('home-page')) {
// 			observerblocks();

// 			setTimeout(function () {
// 				observerblocks();
// 			}, 1000);
// 		}
// 	}
// }

// function panzoomFirst() {
// 	//	panzoomEl.setOptions({ contain: 'outside', maxScale: 0.5, minScale: 0.125 });
// }

// function panzoomFunc() {
// 	$('.u-link').each(function () {
// 		var parent = $(this).parent();
// 		var offest = $(this).parent().offset();
// 		var left = -(offest.left - screenWidth / 2 + $(parent).width() / 2);
// 		var top = -(offest.top - pageHeight / 2 + $(parent).height() / 2);
// 		var left2 = -(offest.left - screenWidth / 2 + $(parent).width() / 2);
// 		var top2 = -(offest.top - pageHeight / 2 + $(parent).height() / 2);

// 		//     var left = -((offest.left));
// 		// 	var top = -((offest.top));
// 		// 	var left2 = -((offest.left)/0.5);
// 		// 	var top2 = -((offest.top)/0.5);

// 		$(this).attr('data-x', left);
// 		$(this).attr('data-y', top);

// 		$(this).attr('data-x-x', left2);
// 		$(this).attr('data-y-y', top2);
// 	});

// 	levelchecker();

// 	const createPanzoomButton = () => {
// 		initPanzoomElement();
// 	};

// 	const initPanzoomElement = (selector = '.mapa') => {
// 		const elem = document.querySelector(selector);

// 		if (!elem) {
// 			console.error('No element found for Panzoom');
// 			return;
// 		}

// 		const width = $(elem).width();
// 		const height = $(elem).height();

// 		panzoomEl = panzoom(elem, {
// 			boundsDisabledForZoom: true,
// 			smoothScroll: false,
// 			maxZoom: 2,
// 			minZoom: 0.5,
// 			zoomDoubleClickSpeed: 1,
// 			onDoubleClick: function (e) {
// 				return false; // tells the library to not preventDefault, and not stop propagation
// 			},
// 		});

// 		window.panzoomEl = panzoomEl;

// 		var zoomWheeelmax = panzoomEl.getTransform().scale;

// 		//panzoomEl.setOptions({ maxScale: 0.5, minScale: zoomWheeelmax });

// 		elem.parentElement.addEventListener('wheel', function (event) {
// 			// panzoomEl.zoomWithWheel(event);
// 			var zoomMin = 0.125;
// 			var zoomMax = 10;
// 			var zoomchangerMin = -50;
// 			var zoomchangerMax = 0;
// 			var zoomWheeel = panzoomEl.getTransform().scale;
// 			var zoomchanger =
// 				-1 *
// 				(zoomchangerMin +
// 					(zoomchangerMax - zoomchangerMin) *
// 						((zoomWheeel - zoomMin) / (zoomMax - zoomMin)));
// 			$('.zoom-viewer').css(
// 				'transform',
// 				'translate(' + zoomchanger + '%, 0px)'
// 			);
// 		});

// 		// $('.u-link').click(function () {
// 		// 	barbach = 1;

// 		// 	$('html').addClass('barba-perehod');

// 		// 	var getzoom = panzoomEl.getTransform().scale;

// 		// 	// 			var movex = ($(this).attr('data-x'))/(1 - getzoom);
// 		// 	// 			var movey = ($(this).attr('data-y'))/(1 - getzoom);

// 		// 	var movex = $(this).attr('data-x') / 1;
// 		// 	var movey = $(this).attr('data-y') / 1;

// 		// 	// 			var movex = ($(this).attr('data-x'));
// 		// 	// 			var movey = ($(this).attr('data-y'));

// 		// 	//TODO: zoom to point
// 		// 	// panzoomEl.zoomToPoint(2, { clientX: movex, clientY: movey });
// 		// 	//panzoomEl.pan(movex, movey);

// 		// 	zoomcounter = 10;
// 		// });

// 		$('.dot-zoom._2').click(function () {
// 			panzoomEl.zoom(0.5);
// 			zoomcounter = 0.5;
// 			levelchecker();
// 		});

// 		$('.dot-zoom._1').click(function () {
// 			panzoomEl.pan(0, 0);
// 			panzoomEl.zoom(0.125);

// 			zoomcounter = 0.125;
// 			levelchecker();
// 		});

// 		isPanzoomActive = true;

// 		parent = elem.parentElement;
// 	};

// 	createPanzoomButton();
// }

// function innerpageEscape() {
// 	$('.dot-zoom').click(function () {
// 		if ($('.barba-container').hasClass('home-page')) {
// 		} else {
// 			if ($(this).hasClass('_1')) {
// 				zoomcounter = 0.125;

// 				$('.hidden-clicker-out')[0].click();
// 			} else if ($(this).hasClass('_2')) {
// 				zoomcounter = 0.5;
// 				$('.hidden-clicker-out')[0].click();
// 			}
// 		}
// 	});
// }

// function inputchecker() {
// 	$('.sub-input').on('change', function () {
// 		if ($(this).value === '') {
// 			$(this).removeClass('inputfill');
// 		} else {
// 			$(this).addClass('inputfill');
// 		}
// 	});
// }

let panzoomInstance;
/**
 * A function that calculates the position of an element inside its parent.
 *
 * @param {Element} element - The element whose position is to be calculated.
 * @param {Element | null} parent - The parent element used as a reference for positioning.
 * @return {Object} An object with x and y properties representing the position of the element relative to its parent.
 */
function getElementPositionInsideParent(element, parent) {
  const parentRect = parent ? parent.getBoundingClientRect() : element.parentNode.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();
  return {
    x: elementRect.left - parentRect.left,
    y: elementRect.top - parentRect.top
  };
}
function fixPanzoomOnMouseDown() {
  document.querySelectorAll('a').forEach(a => a.setAttribute('draggable', 'false'));
}
function initPanzoom() {
  const panzoomEl = document.querySelector('.mapa');
  if (!panzoomEl) {
    console.error('Panzoom element not found');
    return;
  }
  const {
    width: panzoomElWidth,
    height: panzoomElHeight
  } = panzoomEl.getBoundingClientRect();
  const minZoom = window.innerHeight / panzoomElHeight;
  const maxZoom = 1;
  fixPanzoomOnMouseDown();
  if (panzoomInstance) {
    panzoomInstance.dispose();
    console.log('Panzoom instance disposed');
  }
  const panzoomCoordinates = (0,_state_index_js__WEBPACK_IMPORTED_MODULE_9__.getPreviousPanCoordinates)();
  const initialX = panzoomCoordinates ? panzoomCoordinates.x : -(panzoomElWidth * minZoom - window.innerWidth) / 2;
  const initialY = panzoomCoordinates ? panzoomCoordinates.y : -(panzoomElHeight * minZoom - window.innerHeight) / 2;
  const initialZoom = panzoomCoordinates ? panzoomCoordinates.scale : minZoom;
  console.log({
    initialX,
    initialY,
    initialZoom
  });
  panzoomInstance = panzoom__WEBPACK_IMPORTED_MODULE_3___default()(panzoomEl, {
    boundsDisabledForZoom: true,
    smoothScroll: false,
    maxZoom,
    minZoom,
    initialZoom,
    zoomDoubleClickSpeed: 1,
    onDoubleClick: function (e) {
      return false; // tells the library to not preventDefault, and not stop propagation
    }
  });
  console.log('Panzoom initialized', panzoomInstance);

  // if (panzoomCoordinates) {
  // 	console.log(panzoomCoordinates);
  // 	// panzoomInstance.zoomAbs(panzoomCoordinates.x, panzoomCoordinates.y, 2)
  // 	panzoomInstance.moveTo(
  // 		panzoomCoordinates.x * minZoom,
  // 		panzoomCoordinates.y * minZoom
  // 	);
  // 	setTimeout(() => {
  // 		panzoomInstance.zoom(window.innerWidth / 2, window.innerHeight / 2, 1);
  // 	});
  // } else {
  panzoomInstance.moveTo(initialX, initialY);
  // }

  setTimeout(() => {
    panzoomEl.style.transition = 'transform 1s cubic-bezier(0.01, 0.39, 0, 1)';
  }, 1000);
  function debounce(func, delay = 300) {
    let timerId;
    return function (...args) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
  function panEndHandler(e) {
    const {
      x,
      y
    } = e.getTransform();
    const width = panzoomEl.getBoundingClientRect().width - window.innerWidth;
    const height = panzoomEl.getBoundingClientRect().height - window.innerHeight;
    if (x > 0 && y > 0) {
      panzoomInstance.moveTo(0, 0, false);
      return;
    }
    if (x < -width && y < -height) {
      panzoomInstance.moveTo(-width, -height, false);
      return;
    }
    if (x < -width && y > 0) {
      panzoomInstance.moveTo(-width, 0, false);
      return;
    }
    if (x > 0 && y < -height) {
      panzoomInstance.moveTo(0, -height, false);
      return;
    }
    if (x > 0) {
      panzoomInstance.moveTo(0, y, false);
      return;
    }
    if (y > 0) {
      panzoomInstance.moveTo(x, 0, false);
      return;
    }
    if (x < -width) {
      panzoomInstance.moveTo(-width, y, false);
      return;
    }
    if (y < -height) {
      panzoomInstance.moveTo(x, -height, false);
      return;
    }
  }
  const debouncedPanEndHandler = debounce(panEndHandler, 50);
  function zoomHandler(e) {
    const {
      scale
    } = e.getTransform();
    (0,_components_LevelSlider_js__WEBPACK_IMPORTED_MODULE_5__.moveZoomSlider)((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_10__.calculateZoomSliderTransform)((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_10__.calculateZoomPercent)(scale, minZoom, maxZoom)), 0.3);

    // debouncedPanEndHandler(e);
  }
  panzoomInstance.on('panend', panEndHandler);
  panzoomInstance.on('zoom', zoomHandler);
}
function initBarba() {
  _barba_core__WEBPACK_IMPORTED_MODULE_2___default().init({
    // debug: true,
    prevent: ({
      el
    }) => el.closest('#wpadminbar'),
    transitions: [{
      name: 'initial-transition',
      once({
        next
      }) {
        (0,_components_Loader_js__WEBPACK_IMPORTED_MODULE_6__.initLoader)();
        (0,_components_ImageGalleryDialog_js__WEBPACK_IMPORTED_MODULE_4__.initThumbnailGallery)();
        (0,_components_ImageGalleryDialog_js__WEBPACK_IMPORTED_MODULE_4__.initContentGalleries)();
        (0,_components_ImageGalleryDialog_js__WEBPACK_IMPORTED_MODULE_4__.initPostGalleries)();
        (0,_components_SubscribeForm_js__WEBPACK_IMPORTED_MODULE_8__.initSubscribeForm)();
        (0,_components_SearchForm_js__WEBPACK_IMPORTED_MODULE_7__.initSearchForm)();
        initPanzoom();
        if (next.namespace !== 'homepage') {
          (0,_components_LevelSlider_js__WEBPACK_IMPORTED_MODULE_5__.moveZoomSlider)(-50);
        }
      }
    }, {
      name: 'scale-transition',
      from: {
        custom: ({
          trigger
        }) => trigger?.closest('.uto-block'),
        namespace: ['homepage']
      },
      async leave({
        trigger,
        current
      }) {
        const blockElement = trigger.closest('.uto-block');
        const {
          width,
          height,
          top,
          left
        } = blockElement.getBoundingClientRect();
        panzoomInstance.zoomAbs(left + width / 2, top + height / 2, 1);
        console.log(left + width / 2, top + height / 2);
        await (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_10__.wait)(300);
        (0,_state_index_js__WEBPACK_IMPORTED_MODULE_9__.rememberPreviousPanCoordinates)(panzoomInstance.getTransform());
        return gsap__WEBPACK_IMPORTED_MODULE_11__["default"].to(current.container, {
          opacity: 0,
          duration: 0.5
        });
      },
      async beforeEnter({
        next
      }) {
        const scrollTop = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_10__.calculateScrollPosition)(next.container);
        gsap__WEBPACK_IMPORTED_MODULE_11__["default"].set(next.container, {
          transformOrigin: `50% ${scrollTop + window.innerHeight / 2}px`
        });
      },
      enter({
        next
      }) {
        (0,_components_LevelSlider_js__WEBPACK_IMPORTED_MODULE_5__.moveZoomSlider)(-50, 0.5);
        return gsap__WEBPACK_IMPORTED_MODULE_11__["default"].from(next.container, {
          opacity: 0,
          scale: 0.5,
          duration: 0.5
        });
      }
    }, {
      name: 'fade-transition',
      leave({
        current
      }) {
        const done = this.async();
        gsap__WEBPACK_IMPORTED_MODULE_11__["default"].to(current.container, {
          autoAlpha: 0,
          duration: 0.5,
          onComplete: () => {
            current.container.remove();
            done();
          }
        });
      },
      enter({
        next,
        current
      }) {
        const done = this.async();
        window.scrollTo(0, 0);
        if (next.namespace === 'homepage') {
          initPanzoom();
          (0,_components_LevelSlider_js__WEBPACK_IMPORTED_MODULE_5__.moveZoomSlider)(50, 0.5);
        }
        (0,_state_index_js__WEBPACK_IMPORTED_MODULE_9__.resetPreviousPanCoordinates)();
        gsap__WEBPACK_IMPORTED_MODULE_11__["default"].from(next.container, {
          autoAlpha: 0,
          duration: 0.5,
          onComplete: () => {
            done();
          }
        });
      }
    }]
  });
  _barba_core__WEBPACK_IMPORTED_MODULE_2___default().hooks.enter(data => {
    // initPanzoom();
    (0,_components_ImageGalleryDialog_js__WEBPACK_IMPORTED_MODULE_4__.initThumbnailGallery)();
    (0,_components_ImageGalleryDialog_js__WEBPACK_IMPORTED_MODULE_4__.initContentGalleries)();
    (0,_components_ImageGalleryDialog_js__WEBPACK_IMPORTED_MODULE_4__.initPostGalleries)();
    (0,_components_SubscribeForm_js__WEBPACK_IMPORTED_MODULE_8__.initSubscribeForm)();
  });
  _barba_core__WEBPACK_IMPORTED_MODULE_2___default().hooks.after(() => {
    (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_10__.refreshWebflowScripts)();
  });
}
document.addEventListener('DOMContentLoaded', event => {
  initBarba();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map