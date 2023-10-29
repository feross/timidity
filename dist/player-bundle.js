var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e},n=Object.prototype.hasOwnProperty;function o(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(e){return null}}function r(e){try{return encodeURIComponent(e)}catch(e){return null}}var s={stringify:function(e,t){t=t||"";var o,s,i=[];for(s in"string"!=typeof t&&(t="?"),e)if(n.call(e,s)){if((o=e[s])||null!=o&&!isNaN(o)||(o=""),s=r(s),o=r(o),null===s||null===o)continue;i.push(s+"="+o)}return i.length?t+i.join("&"):""},parse:function(e){for(var t,n=/([^=?#&]+)=?([^&]*)/g,r={};t=n.exec(e);){var s=o(t[1]),i=o(t[2]);null===s||null===i||s in r||(r[s]=i)}return r}},i=/^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,a=/[\n\r\t]/g,u=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,c=/:\d+$/,l=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,p=/^[a-zA-Z]:/;function f(e){return(e||"").toString().replace(i,"")}var h=[["#","hash"],["?","query"],function(e,t){return v(t.protocol)?e.replace(/\\/g,"/"):e},["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d*)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],d={hash:1,query:1};function m(t){var n,o=("undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}).location||{},r={},s=typeof(t=t||o);if("blob:"===t.protocol)r=new w(unescape(t.pathname),{});else if("string"===s)for(n in r=new w(t,{}),d)delete r[n];else if("object"===s){for(n in t)n in d||(r[n]=t[n]);void 0===r.slashes&&(r.slashes=u.test(t.href))}return r}function v(e){return"file:"===e||"ftp:"===e||"http:"===e||"https:"===e||"ws:"===e||"wss:"===e}function y(e,t){e=(e=f(e)).replace(a,""),t=t||{};var n,o=l.exec(e),r=o[1]?o[1].toLowerCase():"",s=!!o[2],i=!!o[3],u=0;return s?i?(n=o[2]+o[3]+o[4],u=o[2].length+o[3].length):(n=o[2]+o[4],u=o[2].length):i?(n=o[3]+o[4],u=o[3].length):n=o[4],"file:"===r?u>=2&&(n=n.slice(2)):v(r)?n=o[4]:r?s&&(n=n.slice(2)):u>=2&&v(t.protocol)&&(n=o[4]),{protocol:r,slashes:s||v(r),slashesCount:u,rest:n}}function w(e,n,o){if(e=(e=f(e)).replace(a,""),!(this instanceof w))return new w(e,n,o);var r,i,u,c,l,d,g=h.slice(),b=typeof n,L=this,_=0;for("object"!==b&&"string"!==b&&(o=n,n=null),o&&"function"!=typeof o&&(o=s.parse),r=!(i=y(e||"",n=m(n))).protocol&&!i.slashes,L.slashes=i.slashes||r&&n.slashes,L.protocol=i.protocol||n.protocol||"",e=i.rest,("file:"===i.protocol&&(2!==i.slashesCount||p.test(e))||!i.slashes&&(i.protocol||i.slashesCount<2||!v(L.protocol)))&&(g[3]=[/(.*)/,"pathname"]);_<g.length;_++)"function"!=typeof(c=g[_])?(u=c[0],d=c[1],u!=u?L[d]=e:"string"==typeof u?~(l="@"===u?e.lastIndexOf(u):e.indexOf(u))&&("number"==typeof c[2]?(L[d]=e.slice(0,l),e=e.slice(l+c[2])):(L[d]=e.slice(l),e=e.slice(0,l))):(l=u.exec(e))&&(L[d]=l[1],e=e.slice(0,l.index)),L[d]=L[d]||r&&c[3]&&n[d]||"",c[4]&&(L[d]=L[d].toLowerCase())):e=c(e,L);o&&(L.query=o(L.query)),r&&n.slashes&&"/"!==L.pathname.charAt(0)&&(""!==L.pathname||""!==n.pathname)&&(L.pathname=function(e,t){if(""===e)return t;for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=n.length,r=n[o-1],s=!1,i=0;o--;)"."===n[o]?n.splice(o,1):".."===n[o]?(n.splice(o,1),i++):i&&(0===o&&(s=!0),n.splice(o,1),i--);return s&&n.unshift(""),"."!==r&&".."!==r||n.push(""),n.join("/")}(L.pathname,n.pathname)),"/"!==L.pathname.charAt(0)&&v(L.protocol)&&(L.pathname="/"+L.pathname),t(L.port,L.protocol)||(L.host=L.hostname,L.port=""),L.username=L.password="",L.auth&&(~(l=L.auth.indexOf(":"))?(L.username=L.auth.slice(0,l),L.username=encodeURIComponent(decodeURIComponent(L.username)),L.password=L.auth.slice(l+1),L.password=encodeURIComponent(decodeURIComponent(L.password))):L.username=encodeURIComponent(decodeURIComponent(L.auth)),L.auth=L.password?L.username+":"+L.password:L.username),L.origin="file:"!==L.protocol&&v(L.protocol)&&L.host?L.protocol+"//"+L.host:"null",L.href=L.toString()}w.prototype={set:function(e,n,o){var r=this;switch(e){case"query":"string"==typeof n&&n.length&&(n=(o||s.parse)(n)),r[e]=n;break;case"port":r[e]=n,t(n,r.protocol)?n&&(r.host=r.hostname+":"+n):(r.host=r.hostname,r[e]="");break;case"hostname":r[e]=n,r.port&&(n+=":"+r.port),r.host=n;break;case"host":r[e]=n,c.test(n)?(n=n.split(":"),r.port=n.pop(),r.hostname=n.join(":")):(r.hostname=n,r.port="");break;case"protocol":r.protocol=n.toLowerCase(),r.slashes=!o;break;case"pathname":case"hash":if(n){var i="pathname"===e?"/":"#";r[e]=n.charAt(0)!==i?i+n:n}else r[e]=n;break;case"username":case"password":r[e]=encodeURIComponent(n);break;case"auth":var a=n.indexOf(":");~a?(r.username=n.slice(0,a),r.username=encodeURIComponent(decodeURIComponent(r.username)),r.password=n.slice(a+1),r.password=encodeURIComponent(decodeURIComponent(r.password))):r.username=encodeURIComponent(decodeURIComponent(n))}for(var u=0;u<h.length;u++){var l=h[u];l[4]&&(r[l[1]]=r[l[1]].toLowerCase())}return r.auth=r.password?r.username+":"+r.password:r.username,r.origin="file:"!==r.protocol&&v(r.protocol)&&r.host?r.protocol+"//"+r.host:"null",r.href=r.toString(),r},toString:function(e){e&&"function"==typeof e||(e=s.stringify);var t,n=this,o=n.host,r=n.protocol;r&&":"!==r.charAt(r.length-1)&&(r+=":");var i=r+(n.protocol&&n.slashes||v(n.protocol)?"//":"");return n.username?(i+=n.username,n.password&&(i+=":"+n.password),i+="@"):n.password?(i+=":"+n.password,i+="@"):"file:"!==n.protocol&&v(n.protocol)&&!o&&"/"!==n.pathname&&(i+="@"),(":"===o[o.length-1]||c.test(n.hostname)&&!n.port)&&(o+=":"),i+=o+n.pathname,(t="object"==typeof n.query?e(n.query):n.query)&&(i+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(i+=n.hash),i}},w.extractProtocol=y,w.location=m,w.trimLeft=f,w.qs=s;var g,b=w,L="object"==typeof Reflect?Reflect:null,_=L&&"function"==typeof L.apply?L.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};g=L&&"function"==typeof L.ownKeys?L.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var C=Number.isNaN||function(e){return e!=e};function x(){x.init.call(this)}var R=x,O=function(e,t){return new Promise((function(n,o){function r(n){e.removeListener(t,s),o(n)}function s(){"function"==typeof e.removeListener&&e.removeListener("error",r),n([].slice.call(arguments))}q(e,t,s,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&q(e,"error",t,n)}(e,r,{once:!0})}))};x.EventEmitter=x,x.prototype._events=void 0,x.prototype._eventsCount=0,x.prototype._maxListeners=void 0;var I=10;function k(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function j(e){return void 0===e._maxListeners?x.defaultMaxListeners:e._maxListeners}function U(e,t,n,o){var r,s,i,a;if(k(n),void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),i=s[t]),void 0===i)i=s[t]=n,++e._eventsCount;else if("function"==typeof i?i=s[t]=o?[n,i]:[i,n]:o?i.unshift(n):i.push(n),(r=j(e))>0&&i.length>r&&!i.warned){i.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+i.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=i.length,a=u,console&&console.warn&&console.warn(a)}return e}function E(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function M(e,t,n){var o={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=E.bind(o);return r.listener=n,o.wrapFn=r,r}function A(e,t,n){var o=e._events;if(void 0===o)return[];var r=o[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):P(r,r.length)}function N(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function P(e,t){for(var n=new Array(t),o=0;o<t;++o)n[o]=e[o];return n}function q(e,t,n,o){if("function"==typeof e.on)o.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function r(s){o.once&&e.removeEventListener(t,r),n(s)}))}}function T(e){return new b(e)}Object.defineProperty(x,"defaultMaxListeners",{enumerable:!0,get:function(){return I},set:function(e){if("number"!=typeof e||e<0||C(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");I=e}}),x.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},x.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||C(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},x.prototype.getMaxListeners=function(){return j(this)},x.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var o="error"===e,r=this._events;if(void 0!==r)o=o&&void 0===r.error;else if(!o)return!1;if(o){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var i=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw i.context=s,i}var a=r[e];if(void 0===a)return!1;if("function"==typeof a)_(a,this,t);else{var u=a.length,c=P(a,u);for(n=0;n<u;++n)_(c[n],this,t)}return!0},x.prototype.addListener=function(e,t){return U(this,e,t,!1)},x.prototype.on=x.prototype.addListener,x.prototype.prependListener=function(e,t){return U(this,e,t,!0)},x.prototype.once=function(e,t){return k(t),this.on(e,M(this,e,t)),this},x.prototype.prependOnceListener=function(e,t){return k(t),this.prependListener(e,M(this,e,t)),this},x.prototype.removeListener=function(e,t){var n,o,r,s,i;if(k(t),void 0===(o=this._events))return this;if(void 0===(n=o[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete o[e],o.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,s=n.length-1;s>=0;s--)if(n[s]===t||n[s].listener===t){i=n[s].listener,r=s;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(o[e]=n[0]),void 0!==o.removeListener&&this.emit("removeListener",e,i||t)}return this},x.prototype.off=x.prototype.removeListener,x.prototype.removeAllListeners=function(e){var t,n,o;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,s=Object.keys(n);for(o=0;o<s.length;++o)"removeListener"!==(r=s[o])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(o=t.length-1;o>=0;o--)this.removeListener(e,t[o]);return this},x.prototype.listeners=function(e){return A(this,e,!0)},x.prototype.rawListeners=function(e){return A(this,e,!1)},x.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):N.call(e,t)},x.prototype.listenerCount=N,x.prototype.eventNames=function(){return this._eventsCount>0?g(this._events):[]},R.once=O;class S extends R.EventEmitter{static async createMIDIPlayer(e="/",t=new AudioContext){try{await t.audioWorklet.addModule(e+"worklet-bundle.js")}catch(e){console.log(e)}const n=await F(e+"gravis.cfg"),o=new AudioWorkletNode(t,"midiplayer",{outputChannelCount:[2],processorOptions:{baseURL:e,timidityCfg:n}});return new S(o,t,e)}constructor(e,t,n){super(),this._worklet=e,this._baseURL=n,this._worklet.port.onmessage=this._handleMessage.bind(this),this.context=t,this._worklet.connect(t.destination)}async _handleMessage(e){if("missingInstruments"===e.data.type){let t=[];try{t=await Promise.all(e.data.instruments.map((e=>this.fetchInstrument(e))))}catch(e){console.log("Error loading instrument patch files"),console.log(e)}this._worklet.port.postMessage({type:"instPayload",buffs:t})}else"loaded"===e.data&&this.emit("song-loaded")}play(){this.context.resume(),this._worklet.port.postMessage("play")}pause(){this._worklet.port.postMessage("pause")}seek(e){this._worklet.port.postMessage({type:"seek",sec:e})}async load(e){const t=await z(e);this._worklet.port.postMessage({type:"loadMIDI",midiBuff:t}),await new Promise(((e,t)=>{this.on("song-loaded",(()=>e())),setTimeout((()=>t("timeout on loading midi song instruments, 5000")),5e3)}))}async fetchInstrument(e){let t=this._baseURL+e;return"pat"!==/(?:\.([^.]+))?$/.exec(e)&&(t=this._baseURL+e+".pat"),{instrumentName:e,instrumentBuff:await z(t)}}}async function z(e){const t=await $(e),n=await t.arrayBuffer();return new Uint8Array(n)}async function F(e){const t=await $(e);return await t.text()}async function $(e){const t=await window.fetch(e,{mode:"cors",credentials:"same-origin"});if(200!==t.status)throw new Error(`Could not load ${e}`);return t}export{T as createURL,S as default,F as fetchText};
