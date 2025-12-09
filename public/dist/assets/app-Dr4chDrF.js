function Ge(e,t){return function(){return e.apply(t,arguments)}}const{toString:Et}=Object.prototype,{getPrototypeOf:ve}=Object,{iterator:se,toStringTag:Ze}=Symbol,oe=(e=>t=>{const n=Et.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),R=e=>(e=e.toLowerCase(),t=>oe(t)===e),ie=e=>t=>typeof t===e,{isArray:I}=Array,j=ie("undefined");function J(e){return e!==null&&!j(e)&&e.constructor!==null&&!j(e.constructor)&&_(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Qe=R("ArrayBuffer");function St(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Qe(e.buffer),t}const _t=ie("string"),_=ie("function"),Ye=ie("number"),V=e=>e!==null&&typeof e=="object",Tt=e=>e===!0||e===!1,Y=e=>{if(oe(e)!=="object")return!1;const t=ve(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Ze in e)&&!(se in e)},At=e=>{if(!V(e)||J(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Ot=R("Date"),Ct=R("File"),Rt=R("Blob"),kt=R("FileList"),Lt=e=>V(e)&&_(e.pipe),$t=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||_(e.append)&&((t=oe(e))==="formdata"||t==="object"&&_(e.toString)&&e.toString()==="[object FormData]"))},Pt=R("URLSearchParams"),[Dt,Ft,Nt,Ut]=["ReadableStream","Request","Response","Headers"].map(R),Bt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function K(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),I(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{if(J(e))return;const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let l;for(r=0;r<i;r++)l=o[r],t.call(null,e[l],l,e)}}function et(e,t){if(J(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const N=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,tt=e=>!j(e)&&e!==N;function me(){const{caseless:e,skipUndefined:t}=tt(this)&&this||{},n={},r=(s,o)=>{const i=e&&et(n,o)||o;Y(n[i])&&Y(s)?n[i]=me(n[i],s):Y(s)?n[i]=me({},s):I(s)?n[i]=s.slice():(!t||!j(s))&&(n[i]=s)};for(let s=0,o=arguments.length;s<o;s++)arguments[s]&&K(arguments[s],r);return n}const Mt=(e,t,n,{allOwnKeys:r}={})=>(K(t,(s,o)=>{n&&_(s)?e[o]=Ge(s,n):e[o]=s},{allOwnKeys:r}),e),jt=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),It=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},qt=(e,t,n,r)=>{let s,o,i;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&ve(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ht=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},zt=e=>{if(!e)return null;if(I(e))return e;let t=e.length;if(!Ye(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Jt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ve(Uint8Array)),Vt=(e,t)=>{const r=(e&&e[se]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Kt=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Wt=R("HTMLFormElement"),Xt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Le=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Gt=R("RegExp"),nt=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};K(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Zt=e=>{nt(e,(t,n)=>{if(_(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(_(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Qt=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return I(e)?r(e):r(String(e).split(t)),n},Yt=()=>{},en=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function tn(e){return!!(e&&_(e.append)&&e[Ze]==="FormData"&&e[se])}const nn=e=>{const t=new Array(10),n=(r,s)=>{if(V(r)){if(t.indexOf(r)>=0)return;if(J(r))return r;if(!("toJSON"in r)){t[s]=r;const o=I(r)?[]:{};return K(r,(i,l)=>{const p=n(i,s+1);!j(p)&&(o[l]=p)}),t[s]=void 0,o}}return r};return n(e,0)},rn=R("AsyncFunction"),sn=e=>e&&(V(e)||_(e))&&_(e.then)&&_(e.catch),rt=((e,t)=>e?setImmediate:t?((n,r)=>(N.addEventListener("message",({source:s,data:o})=>{s===N&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),N.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",_(N.postMessage)),on=typeof queueMicrotask<"u"?queueMicrotask.bind(N):typeof process<"u"&&process.nextTick||rt,an=e=>e!=null&&_(e[se]),a={isArray:I,isArrayBuffer:Qe,isBuffer:J,isFormData:$t,isArrayBufferView:St,isString:_t,isNumber:Ye,isBoolean:Tt,isObject:V,isPlainObject:Y,isEmptyObject:At,isReadableStream:Dt,isRequest:Ft,isResponse:Nt,isHeaders:Ut,isUndefined:j,isDate:Ot,isFile:Ct,isBlob:Rt,isRegExp:Gt,isFunction:_,isStream:Lt,isURLSearchParams:Pt,isTypedArray:Jt,isFileList:kt,forEach:K,merge:me,extend:Mt,trim:Bt,stripBOM:jt,inherits:It,toFlatObject:qt,kindOf:oe,kindOfTest:R,endsWith:Ht,toArray:zt,forEachEntry:Vt,matchAll:Kt,isHTMLForm:Wt,hasOwnProperty:Le,hasOwnProp:Le,reduceDescriptors:nt,freezeMethods:Zt,toObjectSet:Qt,toCamelCase:Xt,noop:Yt,toFiniteNumber:en,findKey:et,global:N,isContextDefined:tt,isSpecCompliantForm:tn,toJSONObject:nn,isAsyncFn:rn,isThenable:sn,setImmediate:rt,asap:on,isIterable:an};function g(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(g,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const st=g.prototype,ot={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ot[e]={value:e}});Object.defineProperties(g,ot);Object.defineProperty(st,"isAxiosError",{value:!0});g.from=(e,t,n,r,s,o)=>{const i=Object.create(st);a.toFlatObject(e,i,function(d){return d!==Error.prototype},c=>c!=="isAxiosError");const l=e&&e.message?e.message:"Error",p=t==null&&e?e.code:t;return g.call(i,l,p,n,r,s),e&&i.cause==null&&Object.defineProperty(i,"cause",{value:e,configurable:!0}),i.name=e&&e.name||"Error",o&&Object.assign(i,o),i};const ln=null;function ye(e){return a.isPlainObject(e)||a.isArray(e)}function it(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function $e(e,t,n){return e?e.concat(t).map(function(s,o){return s=it(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function cn(e){return a.isArray(e)&&!e.some(ye)}const dn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ae(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,m){return!a.isUndefined(m[y])});const r=n.metaTokens,s=n.visitor||d,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function c(u){if(u===null)return"";if(a.isDate(u))return u.toISOString();if(a.isBoolean(u))return u.toString();if(!p&&a.isBlob(u))throw new g("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(u)||a.isTypedArray(u)?p&&typeof Blob=="function"?new Blob([u]):Buffer.from(u):u}function d(u,y,m){let x=u;if(u&&!m&&typeof u=="object"){if(a.endsWith(y,"{}"))y=r?y:y.slice(0,-2),u=JSON.stringify(u);else if(a.isArray(u)&&cn(u)||(a.isFileList(u)||a.endsWith(y,"[]"))&&(x=a.toArray(u)))return y=it(y),x.forEach(function(w,S){!(a.isUndefined(w)||w===null)&&t.append(i===!0?$e([y],S,o):i===null?y:y+"[]",c(w))}),!1}return ye(u)?!0:(t.append($e(m,y,o),c(u)),!1)}const f=[],b=Object.assign(dn,{defaultVisitor:d,convertValue:c,isVisitable:ye});function v(u,y){if(!a.isUndefined(u)){if(f.indexOf(u)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(u),a.forEach(u,function(x,A){(!(a.isUndefined(x)||x===null)&&s.call(t,x,a.isString(A)?A.trim():A,y,b))===!0&&v(x,y?y.concat(A):[A])}),f.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return v(e),t}function Pe(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function he(e,t){this._pairs=[],e&&ae(e,this,t)}const at=he.prototype;at.append=function(t,n){this._pairs.push([t,n])};at.toString=function(t){const n=t?function(r){return t.call(this,r,Pe)}:Pe;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function un(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function lt(e,t,n){if(!t)return e;const r=n&&n.encode||un;a.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new he(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class De{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ct={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},pn=typeof URLSearchParams<"u"?URLSearchParams:he,fn=typeof FormData<"u"?FormData:null,mn=typeof Blob<"u"?Blob:null,yn={isBrowser:!0,classes:{URLSearchParams:pn,FormData:fn,Blob:mn},protocols:["http","https","file","blob","url","data"]},xe=typeof window<"u"&&typeof document<"u",ge=typeof navigator=="object"&&navigator||void 0,gn=xe&&(!ge||["ReactNative","NativeScript","NS"].indexOf(ge.product)<0),bn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",vn=xe&&window.location.href||"http://localhost",hn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:xe,hasStandardBrowserEnv:gn,hasStandardBrowserWebWorkerEnv:bn,navigator:ge,origin:vn},Symbol.toStringTag,{value:"Module"})),E={...hn,...yn};function xn(e,t){return ae(e,new E.classes.URLSearchParams,{visitor:function(n,r,s,o){return E.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)},...t})}function wn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function En(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function dt(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const l=Number.isFinite(+i),p=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,p?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!l):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=En(s[i])),!l)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(wn(r),s,n,0)}),n}return null}function Sn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const W={transitional:ct,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(dt(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return xn(t,this.formSerializer).toString();if((l=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return ae(l?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),Sn(t)):t}],transformResponse:[function(t){const n=this.transitional||W.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t,this.parseReviver)}catch(l){if(i)throw l.name==="SyntaxError"?g.from(l,g.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:E.classes.FormData,Blob:E.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{W.headers[e]={}});const _n=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Tn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&_n[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Fe=Symbol("internals");function z(e){return e&&String(e).trim().toLowerCase()}function ee(e){return e===!1||e==null?e:a.isArray(e)?e.map(ee):String(e)}function An(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const On=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ue(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function Cn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Rn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}let T=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(l,p,c){const d=z(p);if(!d)throw new Error("header name must be a non-empty string");const f=a.findKey(s,d);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||p]=ee(l))}const i=(l,p)=>a.forEach(l,(c,d)=>o(c,d,p));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!On(t))i(Tn(t),n);else if(a.isObject(t)&&a.isIterable(t)){let l={},p,c;for(const d of t){if(!a.isArray(d))throw TypeError("Object iterator must return a key-value pair");l[c=d[0]]=(p=l[c])?a.isArray(p)?[...p,d[1]]:[p,d[1]]:d[1]}i(l,n)}else t!=null&&o(n,t,r);return this}get(t,n){if(t=z(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return An(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=z(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ue(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=z(i),i){const l=a.findKey(r,i);l&&(!n||ue(r,r[l],l,n))&&(delete r[l],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ue(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=ee(s),delete n[o];return}const l=t?Cn(o):String(o).trim();l!==o&&delete n[o],n[l]=ee(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Fe]=this[Fe]={accessors:{}}).accessors,s=this.prototype;function o(i){const l=z(i);r[l]||(Rn(s,i),r[l]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}};T.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(T.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(T);function pe(e,t){const n=this||W,r=t||n,s=T.from(r.headers);let o=r.data;return a.forEach(e,function(l){o=l.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function ut(e){return!!(e&&e.__CANCEL__)}function q(e,t,n){g.call(this,e??"canceled",g.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(q,g,{__CANCEL__:!0});function pt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new g("Request failed with status code "+n.status,[g.ERR_BAD_REQUEST,g.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function kn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Ln(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const c=Date.now(),d=r[o];i||(i=c),n[s]=p,r[s]=c;let f=o,b=0;for(;f!==s;)b+=n[f++],f=f%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),c-i<t)return;const v=d&&c-d;return v?Math.round(b*1e3/v):void 0}}function $n(e,t){let n=0,r=1e3/t,s,o;const i=(c,d=Date.now())=>{n=d,s=null,o&&(clearTimeout(o),o=null),e(...c)};return[(...c)=>{const d=Date.now(),f=d-n;f>=r?i(c,d):(s=c,o||(o=setTimeout(()=>{o=null,i(s)},r-f)))},()=>s&&i(s)]}const re=(e,t,n=3)=>{let r=0;const s=Ln(50,250);return $n(o=>{const i=o.loaded,l=o.lengthComputable?o.total:void 0,p=i-r,c=s(p),d=i<=l;r=i;const f={loaded:i,total:l,progress:l?i/l:void 0,bytes:p,rate:c||void 0,estimated:c&&l&&d?(l-i)/c:void 0,event:o,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(f)},n)},Ne=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Ue=e=>(...t)=>a.asap(()=>e(...t)),Pn=E.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,E.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(E.origin),E.navigator&&/(msie|trident)/i.test(E.navigator.userAgent)):()=>!0,Dn=E.hasStandardBrowserEnv?{write(e,t,n,r,s,o,i){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];a.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),a.isString(r)&&l.push(`path=${r}`),a.isString(s)&&l.push(`domain=${s}`),o===!0&&l.push("secure"),a.isString(i)&&l.push(`SameSite=${i}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Fn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Nn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function ft(e,t,n){let r=!Fn(t);return e&&(r||n==!1)?Nn(e,t):t}const Be=e=>e instanceof T?{...e}:e;function B(e,t){t=t||{};const n={};function r(c,d,f,b){return a.isPlainObject(c)&&a.isPlainObject(d)?a.merge.call({caseless:b},c,d):a.isPlainObject(d)?a.merge({},d):a.isArray(d)?d.slice():d}function s(c,d,f,b){if(a.isUndefined(d)){if(!a.isUndefined(c))return r(void 0,c,f,b)}else return r(c,d,f,b)}function o(c,d){if(!a.isUndefined(d))return r(void 0,d)}function i(c,d){if(a.isUndefined(d)){if(!a.isUndefined(c))return r(void 0,c)}else return r(void 0,d)}function l(c,d,f){if(f in t)return r(c,d);if(f in e)return r(void 0,c)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(c,d,f)=>s(Be(c),Be(d),f,!0)};return a.forEach(Object.keys({...e,...t}),function(d){const f=p[d]||s,b=f(e[d],t[d],d);a.isUndefined(b)&&f!==l||(n[d]=b)}),n}const mt=e=>{const t=B({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:l}=t;if(t.headers=i=T.from(i),t.url=lt(ft(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&i.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),a.isFormData(n)){if(E.hasStandardBrowserEnv||E.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if(a.isFunction(n.getHeaders)){const p=n.getHeaders(),c=["content-type","content-length"];Object.entries(p).forEach(([d,f])=>{c.includes(d.toLowerCase())&&i.set(d,f)})}}if(E.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&Pn(t.url))){const p=s&&o&&Dn.read(o);p&&i.set(s,p)}return t},Un=typeof XMLHttpRequest<"u",Bn=Un&&function(e){return new Promise(function(n,r){const s=mt(e);let o=s.data;const i=T.from(s.headers).normalize();let{responseType:l,onUploadProgress:p,onDownloadProgress:c}=s,d,f,b,v,u;function y(){v&&v(),u&&u(),s.cancelToken&&s.cancelToken.unsubscribe(d),s.signal&&s.signal.removeEventListener("abort",d)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function x(){if(!m)return;const w=T.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),C={data:!l||l==="text"||l==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:w,config:e,request:m};pt(function(O){n(O),y()},function(O){r(O),y()},C),m=null}"onloadend"in m?m.onloadend=x:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(x)},m.onabort=function(){m&&(r(new g("Request aborted",g.ECONNABORTED,e,m)),m=null)},m.onerror=function(S){const C=S&&S.message?S.message:"Network Error",D=new g(C,g.ERR_NETWORK,e,m);D.event=S||null,r(D),m=null},m.ontimeout=function(){let S=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const C=s.transitional||ct;s.timeoutErrorMessage&&(S=s.timeoutErrorMessage),r(new g(S,C.clarifyTimeoutError?g.ETIMEDOUT:g.ECONNABORTED,e,m)),m=null},o===void 0&&i.setContentType(null),"setRequestHeader"in m&&a.forEach(i.toJSON(),function(S,C){m.setRequestHeader(C,S)}),a.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),l&&l!=="json"&&(m.responseType=s.responseType),c&&([b,u]=re(c,!0),m.addEventListener("progress",b)),p&&m.upload&&([f,v]=re(p),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",v)),(s.cancelToken||s.signal)&&(d=w=>{m&&(r(!w||w.type?new q(null,e,m):w),m.abort(),m=null)},s.cancelToken&&s.cancelToken.subscribe(d),s.signal&&(s.signal.aborted?d():s.signal.addEventListener("abort",d)));const A=kn(s.url);if(A&&E.protocols.indexOf(A)===-1){r(new g("Unsupported protocol "+A+":",g.ERR_BAD_REQUEST,e));return}m.send(o||null)})},Mn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(c){if(!s){s=!0,l();const d=c instanceof Error?c:this.reason;r.abort(d instanceof g?d:new q(d instanceof Error?d.message:d))}};let i=t&&setTimeout(()=>{i=null,o(new g(`timeout ${t} of ms exceeded`,g.ETIMEDOUT))},t);const l=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(c=>{c.unsubscribe?c.unsubscribe(o):c.removeEventListener("abort",o)}),e=null)};e.forEach(c=>c.addEventListener("abort",o));const{signal:p}=r;return p.unsubscribe=()=>a.asap(l),p}},jn=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},In=async function*(e,t){for await(const n of qn(e))yield*jn(n,t)},qn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Me=(e,t,n,r)=>{const s=In(e,t);let o=0,i,l=p=>{i||(i=!0,r&&r(p))};return new ReadableStream({async pull(p){try{const{done:c,value:d}=await s.next();if(c){l(),p.close();return}let f=d.byteLength;if(n){let b=o+=f;n(b)}p.enqueue(new Uint8Array(d))}catch(c){throw l(c),c}},cancel(p){return l(p),s.return()}},{highWaterMark:2})},je=64*1024,{isFunction:Q}=a,Hn=(({Request:e,Response:t})=>({Request:e,Response:t}))(a.global),{ReadableStream:Ie,TextEncoder:qe}=a.global,He=(e,...t)=>{try{return!!e(...t)}catch{return!1}},zn=e=>{e=a.merge.call({skipUndefined:!0},Hn,e);const{fetch:t,Request:n,Response:r}=e,s=t?Q(t):typeof fetch=="function",o=Q(n),i=Q(r);if(!s)return!1;const l=s&&Q(Ie),p=s&&(typeof qe=="function"?(u=>y=>u.encode(y))(new qe):async u=>new Uint8Array(await new n(u).arrayBuffer())),c=o&&l&&He(()=>{let u=!1;const y=new n(E.origin,{body:new Ie,method:"POST",get duplex(){return u=!0,"half"}}).headers.has("Content-Type");return u&&!y}),d=i&&l&&He(()=>a.isReadableStream(new r("").body)),f={stream:d&&(u=>u.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(u=>{!f[u]&&(f[u]=(y,m)=>{let x=y&&y[u];if(x)return x.call(y);throw new g(`Response type '${u}' is not supported`,g.ERR_NOT_SUPPORT,m)})});const b=async u=>{if(u==null)return 0;if(a.isBlob(u))return u.size;if(a.isSpecCompliantForm(u))return(await new n(E.origin,{method:"POST",body:u}).arrayBuffer()).byteLength;if(a.isArrayBufferView(u)||a.isArrayBuffer(u))return u.byteLength;if(a.isURLSearchParams(u)&&(u=u+""),a.isString(u))return(await p(u)).byteLength},v=async(u,y)=>{const m=a.toFiniteNumber(u.getContentLength());return m??b(y)};return async u=>{let{url:y,method:m,data:x,signal:A,cancelToken:w,timeout:S,onDownloadProgress:C,onUploadProgress:D,responseType:O,headers:ce,withCredentials:X="same-origin",fetchOptions:Te}=mt(u),Ae=t||fetch;O=O?(O+"").toLowerCase():"text";let G=Mn([A,w&&w.toAbortSignal()],S),H=null;const F=G&&G.unsubscribe&&(()=>{G.unsubscribe()});let Oe;try{if(D&&c&&m!=="get"&&m!=="head"&&(Oe=await v(ce,x))!==0){let P=new n(y,{method:"POST",body:x,duplex:"half"}),M;if(a.isFormData(x)&&(M=P.headers.get("content-type"))&&ce.setContentType(M),P.body){const[de,Z]=Ne(Oe,re(Ue(D)));x=Me(P.body,je,de,Z)}}a.isString(X)||(X=X?"include":"omit");const k=o&&"credentials"in n.prototype,Ce={...Te,signal:G,method:m.toUpperCase(),headers:ce.normalize().toJSON(),body:x,duplex:"half",credentials:k?X:void 0};H=o&&new n(y,Ce);let $=await(o?Ae(H,Te):Ae(y,Ce));const Re=d&&(O==="stream"||O==="response");if(d&&(C||Re&&F)){const P={};["status","statusText","headers"].forEach(ke=>{P[ke]=$[ke]});const M=a.toFiniteNumber($.headers.get("content-length")),[de,Z]=C&&Ne(M,re(Ue(C),!0))||[];$=new r(Me($.body,je,de,()=>{Z&&Z(),F&&F()}),P)}O=O||"text";let wt=await f[a.findKey(f,O)||"text"]($,u);return!Re&&F&&F(),await new Promise((P,M)=>{pt(P,M,{data:wt,headers:T.from($.headers),status:$.status,statusText:$.statusText,config:u,request:H})})}catch(k){throw F&&F(),k&&k.name==="TypeError"&&/Load failed|fetch/i.test(k.message)?Object.assign(new g("Network Error",g.ERR_NETWORK,u,H),{cause:k.cause||k}):g.from(k,k&&k.code,u,H)}}},Jn=new Map,yt=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:s}=t,o=[r,s,n];let i=o.length,l=i,p,c,d=Jn;for(;l--;)p=o[l],c=d.get(p),c===void 0&&d.set(p,c=l?new Map:zn(t)),d=c;return c};yt();const we={http:ln,xhr:Bn,fetch:{get:yt}};a.forEach(we,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ze=e=>`- ${e}`,Vn=e=>a.isFunction(e)||e===null||e===!1;function Kn(e,t){e=a.isArray(e)?e:[e];const{length:n}=e;let r,s;const o={};for(let i=0;i<n;i++){r=e[i];let l;if(s=r,!Vn(r)&&(s=we[(l=String(r)).toLowerCase()],s===void 0))throw new g(`Unknown adapter '${l}'`);if(s&&(a.isFunction(s)||(s=s.get(t))))break;o[l||"#"+i]=s}if(!s){const i=Object.entries(o).map(([p,c])=>`adapter ${p} `+(c===!1?"is not supported by the environment":"is not available in the build"));let l=n?i.length>1?`since :
`+i.map(ze).join(`
`):" "+ze(i[0]):"as no adapter specified";throw new g("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return s}const gt={getAdapter:Kn,adapters:we};function fe(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new q(null,e)}function Je(e){return fe(e),e.headers=T.from(e.headers),e.data=pe.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),gt.getAdapter(e.adapter||W.adapter,e)(e).then(function(r){return fe(e),r.data=pe.call(e,e.transformResponse,r),r.headers=T.from(r.headers),r},function(r){return ut(r)||(fe(e),r&&r.response&&(r.response.data=pe.call(e,e.transformResponse,r.response),r.response.headers=T.from(r.response.headers))),Promise.reject(r)})}const bt="1.13.2",le={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{le[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ve={};le.transitional=function(t,n,r){function s(o,i){return"[Axios v"+bt+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,l)=>{if(t===!1)throw new g(s(i," has been removed"+(n?" in "+n:"")),g.ERR_DEPRECATED);return n&&!Ve[i]&&(Ve[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,l):!0}};le.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Wn(e,t,n){if(typeof e!="object")throw new g("options must be an object",g.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const l=e[o],p=l===void 0||i(l,o,e);if(p!==!0)throw new g("option "+o+" must be "+p,g.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new g("Unknown option "+o,g.ERR_BAD_OPTION)}}const te={assertOptions:Wn,validators:le},L=te.validators;let U=class{constructor(t){this.defaults=t||{},this.interceptors={request:new De,response:new De}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=B(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&te.assertOptions(r,{silentJSONParsing:L.transitional(L.boolean),forcedJSONParsing:L.transitional(L.boolean),clarifyTimeoutError:L.transitional(L.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:te.assertOptions(s,{encode:L.function,serialize:L.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),te.assertOptions(n,{baseUrl:L.spelling("baseURL"),withXsrfToken:L.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],u=>{delete o[u]}),n.headers=T.concat(i,o);const l=[];let p=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(p=p&&y.synchronous,l.unshift(y.fulfilled,y.rejected))});const c=[];this.interceptors.response.forEach(function(y){c.push(y.fulfilled,y.rejected)});let d,f=0,b;if(!p){const u=[Je.bind(this),void 0];for(u.unshift(...l),u.push(...c),b=u.length,d=Promise.resolve(n);f<b;)d=d.then(u[f++],u[f++]);return d}b=l.length;let v=n;for(;f<b;){const u=l[f++],y=l[f++];try{v=u(v)}catch(m){y.call(this,m);break}}try{d=Je.call(this,v)}catch(u){return Promise.reject(u)}for(f=0,b=c.length;f<b;)d=d.then(c[f++],c[f++]);return d}getUri(t){t=B(this.defaults,t);const n=ft(t.baseURL,t.url,t.allowAbsoluteUrls);return lt(n,t.params,t.paramsSerializer)}};a.forEach(["delete","get","head","options"],function(t){U.prototype[t]=function(n,r){return this.request(B(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,l){return this.request(B(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}U.prototype[t]=n(),U.prototype[t+"Form"]=n(!0)});let Xn=class vt{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(l=>{r.subscribe(l),o=l}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,l){r.reason||(r.reason=new q(o,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new vt(function(s){t=s}),cancel:t}}};function Gn(e){return function(n){return e.apply(null,n)}}function Zn(e){return a.isObject(e)&&e.isAxiosError===!0}const be={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(be).forEach(([e,t])=>{be[t]=e});function ht(e){const t=new U(e),n=Ge(U.prototype.request,t);return a.extend(n,U.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return ht(B(e,s))},n}const h=ht(W);h.Axios=U;h.CanceledError=q;h.CancelToken=Xn;h.isCancel=ut;h.VERSION=bt;h.toFormData=ae;h.AxiosError=g;h.Cancel=h.CanceledError;h.all=function(t){return Promise.all(t)};h.spread=Gn;h.isAxiosError=Zn;h.mergeConfig=B;h.AxiosHeaders=T;h.formToJSON=e=>dt(a.isHTMLForm(e)?new FormData(e):e);h.getAdapter=gt.getAdapter;h.HttpStatusCode=be;h.default=h;const{Axios:_r,AxiosError:Tr,CanceledError:Ar,isCancel:Or,CancelToken:Cr,VERSION:Rr,all:kr,Cancel:Lr,isAxiosError:$r,spread:Pr,toFormData:Dr,AxiosHeaders:Fr,HttpStatusCode:Nr,formToJSON:Ur,getAdapter:Br,mergeConfig:Mr}=h;window.axios=h;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";window.togglePassword=function(e){const t=document.getElementById(e),n=document.getElementById(e==="password"?"password-toggle":"confirm-password-toggle");t.type==="password"?(t.type="text",n.classList.remove("fa-eye"),n.classList.add("fa-eye-slash")):(t.type="password",n.classList.remove("fa-eye-slash"),n.classList.add("fa-eye"))};window.removeFile=function(e,t,n,r){const o=document.getElementById(n).querySelector(`[data-file-id="${t}"]`);o&&o.remove(),ne[e]=null,document.getElementById(r).value=""};const ne={main:null,proofOfIncome:null};document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("password");e&&e.addEventListener("input",function(){const o=this.value,i=document.getElementById("password-strength");let l=0;o.length>=12&&(l+=25),/[A-Z]/.test(o)&&(l+=25),/[a-z]/.test(o)&&(l+=25),/[0-9]/.test(o)&&(l+=25),l<50?(i.className="h-1 rounded-full mt-2 bg-red-500",i.style.width=l+"%"):l<75?(i.className="h-1 rounded-full mt-2 bg-yellow-500",i.style.width=l+"%"):(i.className="h-1 rounded-full mt-2 bg-green-500",i.style.width=l+"%")});const t=document.getElementById("doc_path");t&&t.addEventListener("change",function(o){Ke(o.target.files[0],"main","docFileList","doc_path")});const n=document.getElementById("proof_of_income");n&&n.addEventListener("change",function(o){Ke(o.target.files[0],"proofOfIncome","proofOfIncomeFileList","proof_of_income")});const r=document.querySelector("[data-success]");r&&Swal.fire({icon:"success",title:"Success!",text:r.getAttribute("data-success"),confirmButtonText:"OK",confirmButtonColor:"#3B82F6"});const s=document.querySelector("[data-error]");s&&Swal.fire({icon:"error",title:"Registration Failed",text:s.getAttribute("data-error"),confirmButtonText:"Try Again",confirmButtonColor:"#EF4444"})});function Ke(e,t,n,r){if(!e)return;if(!["image/jpeg","image/jpg","image/png","application/pdf"].includes(e.type)){We("Invalid file type. Please upload PDF, PNG, or JPG files."),document.getElementById(r).value="";return}if(e.size>5*1024*1024){We("File size too large. Maximum size is 5MB."),document.getElementById(r).value="";return}ne[t]&&removeFile(t,ne[t]._fileId,n,r),ne[t]=e,Qn(e,t,n,r)}function Qn(e,t,n,r){const s=document.getElementById(n),o=Date.now()+Math.random();s.innerHTML="";const i=document.createElement("div");i.className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-lg p-3",i.innerHTML=`
        <div class="flex items-center space-x-3">
            <i class="fas fa-file text-blue-500"></i>
            <span class="text-sm text-gray-700 truncate max-w-xs">${e.name}</span>
            <span class="text-xs text-gray-500">(${(e.size/1024/1024).toFixed(2)} MB)</span>
        </div>
        <button type="button" onclick="removeFile('${t}', ${o}, '${n}', '${r}')" class="text-red-500 hover:text-red-700 transition-colors">
            <i class="fas fa-times"></i>
        </button>
    `,i.dataset.fileId=o,e._fileId=o,s.appendChild(i)}function We(e){Swal.fire({icon:"error",title:"Upload Error",text:e,timer:3e3,showConfirmButton:!1})}function Xe(){const e=document.getElementById("searchInput").value.toLowerCase(),t=document.getElementById("statusFilter").value,n=document.querySelectorAll(".property-card"),r=document.getElementById("noResults");let s=0;n.forEach(o=>{const i=(o.getAttribute("data-name")||"").toLowerCase(),l=o.getAttribute("data-status")||"",p=(o.getAttribute("data-location")||"").toLowerCase();(i.includes(e)||p.includes(e)||e==="")&&(t===""||l===t)?(o.style.display="block",s++):o.style.display="none"}),r&&(s===0?r.classList.remove("hidden"):r.classList.add("hidden"))}async function Ee(e){if(!(e.headers.get("content-type")||"").includes("application/json")){const n=await e.text();throw console.error("Non-JSON response from server:",e.status,n),new Error(`Server returned non-JSON response (status ${e.status}). Check console for HTML.`)}return await e.json()}function Yn(){const e=document.getElementById("addPropertyBtn"),t=document.getElementById("addPropertyModal"),n=document.getElementById("closeModal"),r=document.getElementById("cancelBtn"),s=document.getElementById("searchInput"),o=document.getElementById("statusFilter");s&&s.addEventListener("input",Xe),o&&o.addEventListener("change",Xe),e&&t&&e.addEventListener("click",()=>{t.classList.remove("hidden"),t.classList.add("flex"),document.body.style.overflow="hidden"});function i(){t&&(t.classList.add("hidden"),t.classList.remove("flex"),document.body.style.overflow="auto")}n&&n.addEventListener("click",i),r&&r.addEventListener("click",i),t&&t.addEventListener("click",l=>{l.target===t&&i()})}async function er(e){try{const t=await fetch(`/landlord/properties/${e}`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const n=await Ee(t),r=`
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-4xl mx-4 max-h-[90vh] overflow-y-auto">
                <div class="flex items-center justify-between p-6 border-b border-gray-200">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <i class="fas fa-eye text-blue-600 text-lg"></i>
                        </div>
                        <div>
                            <h2 class="text-xl font-bold text-gray-900">${n.property_name}</h2>
                            <p class="text-sm text-gray-500">Complete property information</p>
                        </div>
                    </div>
                    <button onclick="closeViewPropertyModal()" class="text-gray-400 hover:text-gray-600 transition-colors">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                <div class="p-6">
                    <div class="mb-6">
                        <img src="/storage/${n.property_image}" alt="${n.property_name}" class="w-full h-64 object-cover rounded-lg">
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <i class="fas fa-info-circle text-blue-600 mr-2"></i>
                                Basic Information
                            </h3>
                            <div class="space-y-3">
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Property Name:</span>
                                    <span class="font-medium text-gray-900">${n.property_name}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Type:</span>
                                    <span class="font-medium text-gray-900 capitalize">${n.property_type}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Status:</span>
                                    <span class="px-2 py-1 rounded-full text-xs font-medium ${n.status==="active"?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800"} capitalize">
                                        ${n.status}
                                    </span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Address:</span>
                                    <span class="font-medium text-gray-900 text-right">${n.property_address}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                                <i class="fas fa-chart-bar text-blue-600 mr-2"></i>
                                Property Statistics
                            </h3>
                            <div class="space-y-3">
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Total Units:</span>
                                    <span class="font-medium text-gray-900">${n.units_count||0}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Occupied Units:</span>
                                    <span class="font-medium text-gray-900">${n.occupied_units||0}</span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Occupancy Rate:</span>
                                    <span class="font-medium text-gray-900">
                                        ${n.units_count>0?Math.round(n.occupied_units/n.units_count*100):0}%
                                    </span>
                                </div>
                                <div class="flex justify-between">
                                    <span class="text-gray-600">Smart Devices:</span>
                                    <span class="font-medium text-gray-900">${n.devices_count||0}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <i class="fas fa-peso-sign text-blue-600 mr-2"></i>
                            Financial Information
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div class="bg-gray-50 rounded-lg p-4">
                                <div class="text-sm text-gray-600">Property Value</div>
                                <div class="text-lg font-semibold text-gray-900">₱${parseFloat(n.property_price).toLocaleString()}</div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <i class="fas fa-clipboard text-blue-600 mr-2"></i>
                            Description
                        </h3>
                        <p class="text-gray-600 leading-relaxed">${n.property_description}</p>
                    </div>

                    <div class="mt-8">
                        <h3 class="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                            <i class="fas fa-plug text-blue-600 mr-2"></i>
                            Smart Devices
                        </h3>
                        <div id="smartDevicesList" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        </div>
                    </div>
                </div>
            </div>
        `,s=document.getElementById("viewPropertyModal");s&&(s.innerHTML=r,s.classList.remove("hidden"),s.classList.add("flex"),document.body.style.overflow="hidden"),await tr(e)}catch(t){console.error("Error loading property:",t),alert("Error loading property details. Please try again.")}}async function tr(e){try{const t=await fetch(`/landlord/properties/${e}/devices`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const n=await Ee(t),r=document.getElementById("smartDevicesList");if(!r)return;if(n.length===0){r.innerHTML='<p class="text-gray-500 col-span-2">No smart devices connected to this property.</p>';return}r.innerHTML=n.map(s=>`
            <div class="bg-gray-50 rounded-lg p-4">
                <div class="flex items-center justify-between mb-2">
                    <h4 class="font-semibold text-gray-900">${s.device_name}</h4>
                    <span class="px-2 py-1 rounded-full text-xs font-medium ${s.connection_status==="online"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}">
                        ${s.connection_status}
                    </span>
                </div>
                <div class="text-sm text-gray-600">
                    <div class="flex justify-between">
                        <span>Type:</span>
                        <span class="capitalize">${s.device_type}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Power:</span>
                        <span class="capitalize ${s.power_status==="on"?"text-green-600":"text-red-600"}">${s.power_status}</span>
                    </div>
                    ${s.battery_level?`
                    <div class="flex justify-between">
                        <span>Battery:</span>
                        <span>${s.battery_level}%</span>
                    </div>
                    `:""}
                </div>
            </div>
        `).join("")}catch(t){console.error("Error loading smart devices:",t);const n=document.getElementById("smartDevicesList");n&&(n.innerHTML='<p class="text-red-500 col-span-2">Error loading devices.</p>')}}function nr(){const e=document.getElementById("viewPropertyModal");e&&(e.classList.add("hidden"),e.classList.remove("flex"),document.body.style.overflow="auto")}function rr(){const e=document.getElementById("editPropertyModal");e&&(e.classList.add("hidden"),e.classList.remove("flex"),document.body.style.overflow="auto")}async function sr(e){try{const t=await fetch(`/landlord/properties/${e}/edit`);if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const n=await Ee(t),[r,s]=await Promise.all([fetch(`/landlord/properties/${e}/units`),fetch(`/landlord/properties/${e}/devices`)]),o=r.ok?await r.json():[],i=s.ok?await s.json():[],l=`
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-6xl mx-4 max-h-[90vh] overflow-y-auto">
                <div class="flex items-center justify-between p-6 border-b border-gray-200">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <i class="fas fa-edit text-blue-600 text-lg"></i>
                        </div>
                        <div>
                            <h2 class="text-xl font-bold text-gray-900">Edit Property - ${n.property_name}</h2>
                            <p class="text-sm text-gray-500">Update property information, units, and smart devices</p>
                        </div>
                    </div>
                    <button onclick="closeEditPropertyModal()" class="text-gray-400 hover:text-gray-600 transition-colors">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>

                <div class="border-b border-gray-200">
                    <nav class="-mb-px flex space-x-8 px-6">
                        <button id="editPropertyTab" class="tab-button border-b-2 border-blue-500 text-blue-600 px-1 py-4 text-sm font-medium" onclick="switchEditTab('property')">
                            Property Details
                        </button>
                        <button id="editUnitsTab" class="tab-button border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 py-4 text-sm font-medium" onclick="switchEditTab('units')">
                            Units (${o.length})
                        </button>
                        <button id="editDevicesTab" class="tab-button border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 py-4 text-sm font-medium" onclick="switchEditTab('devices')">
                            Smart Devices (${i.length})
                        </button>
                    </nav>
                </div>

                <div id="editPropertyContent" class="tab-content p-6">
                    <form id="editPropertyForm" action="/landlord/properties/${e}" method="POST" class="space-y-6" enctype="multipart/form-data">
                        @method('PUT')
                        @csrf
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Property Name</label>
                                <input type="text" name="property_name" value="${n.property_name}" required 
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                                <select name="property_type" required 
                                        class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    <option value="apartment" ${n.property_type==="apartment"?"selected":""}>Apartment Complex</option>
                                    <option value="condo" ${n.property_type==="condo"?"selected":""}>Condominium</option>
                                    <option value="townhouse" ${n.property_type==="townhouse"?"selected":""}>Townhouse</option>
                                    <option value="single-family" ${n.property_type==="single-family"?"selected":""}>Single Family Home</option>
                                    <option value="duplex" ${n.property_type==="duplex"?"selected":""}>Duplex</option>
                                    <option value="commercial" ${n.property_type==="commercial"?"selected":""}>Commercial</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Property Address</label>
                            <input type="text" name="property_address" value="${n.property_address}" required 
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        </div>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Property Price</label>
                                <div class="relative">
                                    <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₱</span>
                                    <input type="number" name="property_price" value="${n.property_price}" required min="0" step="0.01"
                                        class="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Property Image</label>
                                <input type="file" name="property_image" accept="image/*"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100">
                                <p class="mt-1 text-sm text-gray-500">Current image: ${n.property_image}</p>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Property Description</label>
                            <textarea name="property_description" rows="4" required
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">${n.property_description}</textarea>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Status</label>
                            <select name="status" required 
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="active" ${n.status==="active"?"selected":""}>Active</option>
                                <option value="inactive" ${n.status==="inactive"?"selected":""}>Inactive</option>
                            </select>
                        </div>

                        <div class="flex items-center justify-end space-x-3 pt-6 border-t border-gray-200">
                            <button type="button" onclick="closeEditPropertyModal()" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors">
                                Cancel
                            </button>
                            <button type="submit" class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                                Save Property Changes
                            </button>
                        </div>
                    </form>
                </div>

                <div id="editUnitsContent" class="tab-content hidden p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-lg font-semibold text-gray-900">Manage Property Units</h3>
                        <button type="button" onclick="openAddUnitModal(${e})" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                            <i class="fas fa-plus text-sm"></i>
                            <span>New Unit</span>
                        </button>
                    </div>
                    
                    <div id="editUnitsList" class="space-y-4">
                        ${o.length>0?o.map(c=>`
                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                <div class="flex justify-between items-start mb-3">
                                    <h4 class="font-semibold text-gray-900">${c.unit_name}</h4>
                                    <div class="flex space-x-2">
                                        <button onclick="editUnit(${c.unit_id})" class="text-blue-600 hover:text-blue-800">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button onclick="deleteUnit(${c.unit_id})" class="text-red-600 hover:text-red-800">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                                    <div>
                                        <span class="font-medium">Unit #:</span>
                                        <span>${c.unit_num}</span>
                                    </div>
                                    <div>
                                        <span class="font-medium">Type:</span>
                                        <span class="capitalize">${c.unit_type}</span>
                                    </div>
                                    <div>
                                        <span class="font-medium">Area:</span>
                                        <span>${c.area_sqm} sqm</span>
                                    </div>
                                    <div>
                                        <span class="font-medium">Price:</span>
                                        <span class="font-semibold">₱${parseFloat(c.unit_price).toLocaleString()}</span>
                                    </div>
                                    <div class="col-span-2">
                                        <span class="font-medium">Status:</span>
                                        <span class="px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(c.status)}">
                                            ${c.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        `).join(""):`
                            <div class="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                                <i class="fas fa-building text-gray-400 text-3xl mb-2"></i>
                                <p class="text-gray-500">No units added yet</p>
                                <p class="text-sm text-gray-400 mt-1">Click "Add Unit" to get started</p>
                            </div>
                        `}
                    </div>
                </div>

                <div id="editDevicesContent" class="tab-content hidden p-6">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-lg font-semibold text-gray-900">Manage Smart Devices</h3>
                        <button type="button" onclick="openAddDeviceModal(${e})" class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                            <i class="fas fa-plus text-sm"></i>
                            <span>New Device</span>
                        </button>
                    </div>
                    
                    <div id="editDevicesList" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        ${i.length>0?i.map(c=>`
                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
                                <div class="flex justify-between items-start mb-3">
                                    <h4 class="font-semibold text-gray-900">${c.device_name}</h4>
                                    <div class="flex space-x-2">
                                        <button onclick="editDevice(${c.device_id})" class="text-blue-600 hover:text-blue-800">
                                            <i class="fas fa-edit"></i>
                                        </button>
                                        <button onclick="deleteDevice(${c.device_id})" class="text-red-600 hover:text-red-800">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="space-y-2 text-sm text-gray-600">
                                    <div class="flex justify-between">
                                        <span>Type:</span>
                                        <span class="capitalize">${c.device_type}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span>Status:</span>
                                        <span class="px-2 py-1 rounded-full text-xs font-medium ${c.connection_status==="online"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}">
                                            ${c.connection_status}
                                        </span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span>Power:</span>
                                        <span class="capitalize ${c.power_status==="on"?"text-green-600":"text-red-600"}">${c.power_status}</span>
                                    </div>
                                    ${c.model?`
                                    <div class="flex justify-between">
                                        <span>Model:</span>
                                        <span>${c.model}</span>
                                    </div>
                                    `:""}
                                    ${c.battery_level!==null?`
                                    <div class="flex justify-between">
                                        <span>Battery:</span>
                                        <span>${c.battery_level}%</span>
                                    </div>
                                    `:""}
                                </div>
                            </div>
                        `).join(""):`
                            <div class="col-span-2 text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                                <i class="fas fa-plug text-gray-400 text-3xl mb-2"></i>
                                <p class="text-gray-500">No smart devices connected</p>
                                <p class="text-sm text-gray-400 mt-1">Click "New Device" to get started</p>
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `,p=document.getElementById("editPropertyModal");p&&(p.innerHTML=l,p.classList.remove("hidden"),p.classList.add("flex"),document.body.style.overflow="hidden")}catch(t){console.error("Error loading property for edit:",t),alert("Error loading property for editing. Please try again. Error: "+t.message)}}async function xt(e){if(!(e.headers.get("content-type")||"").includes("application/json")){const n=await e.text();throw console.error("Non-JSON response from server:",e.status,n),new Error(`Server returned non-JSON response (status ${e.status}). Check console for HTML.`)}return await e.json()}function or(e){const t=`
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
                <div class="flex items-center justify-between p-6 border-b border-gray-200">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <i class="fas fa-plus text-green-600 text-lg"></i>
                        </div>
                        <div>
                            <h2 class="text-xl font-bold text-gray-900">New Unit</h2>
                            <p class="text-sm text-gray-500">Fill in the unit details</p>
                        </div>
                    </div>
                    <button onclick="closeAddUnitModal()" class="text-gray-400 hover:text-gray-600 transition-colors">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                
                <form id="addUnitForm" class="p-6 space-y-6">
                    <input type="hidden" name="prop_id" value="${e}">
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Unit Name <span class="text-red-500">*</span>
                            </label>
                            <input type="text" name="unit_name" required 
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="e.g., Unit A, Studio 101">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Unit Number <span class="text-red-500">*</span>
                            </label>
                            <input type="number" name="unit_num" required min="1"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="e.g., 101">
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Unit Type <span class="text-red-500">*</span>
                            </label>
                            <select name="unit_type" required 
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="">Select Type</option>
                                <option value="studio">Studio</option>
                                <option value="1-bedroom">1 Bedroom</option>
                                <option value="2-bedroom">2 Bedroom</option>
                                <option value="3-bedroom">3 Bedroom</option>
                                <option value="penthouse">Penthouse</option>
                                <option value="loft">Loft</option>
                                <option value="duplex">Duplex</option>
                                <option value="commercial">Commercial</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Area (sqm) <span class="text-red-500">*</span>
                            </label>
                            <input type="number" name="area_sqm" required min="1" step="0.01"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="e.g., 45.5">
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Unit Price <span class="text-red-500">*</span>
                            </label>
                            <div class="relative">
                                <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₱</span>
                                <input type="number" name="unit_price" required min="0" step="0.01"
                                    class="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="e.g., 15000.00">
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Status <span class="text-red-500">*</span>
                            </label>
                            <select name="status" required 
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="available">Available</option>
                                <option value="occupied">Occupied</option>
                                <option value="maintenance">Maintenance</option>
                                <option value="reserved">Reserved</option>
                                <option value="rented">Rented</option>
                                <option value="unavailable">Unavailable</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="flex items-center justify-end space-x-3 pt-6 border-t border-gray-200">
                        <button type="button" onclick="closeAddUnitModal()" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors">
                            Cancel
                        </button>
                        <button type="submit" class="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
                            Add Unit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;let n=document.getElementById("addUnitModal");n||(n=document.createElement("div"),n.id="addUnitModal",document.body.appendChild(n)),n.innerHTML=t,document.getElementById("addUnitForm").addEventListener("submit",function(r){r.preventDefault(),ar(e)})}function ir(){const e=document.getElementById("addUnitModal");e&&e.remove()}async function ar(e){try{const t=document.getElementById("addUnitForm"),n=new FormData(t),r={prop_id:e,unit_name:n.get("unit_name"),unit_num:parseInt(n.get("unit_num")),unit_type:n.get("unit_type"),area_sqm:parseFloat(n.get("area_sqm")),unit_price:parseFloat(n.get("unit_price")),status:n.get("status")};console.log("Sending unit data:",r);const s=await fetch("/landlord/properties/"+e+"/units",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content"),Accept:"application/json"},body:JSON.stringify(r)}),o=await(async()=>{if(!(s.headers.get("content-type")||"").includes("application/json")){const l=await s.text();throw console.error("Non-JSON response from server:",s.status,l),new Error(`Server returned non-JSON response (status ${s.status}). Check console for HTML.`)}return await s.json()})();if(!s.ok)throw new Error(o.message||"Failed to add unit");if(!o.success)throw new Error(o.message||"Failed to add unit");ir(),Se(e),alert("Unit added successfully!")}catch(t){console.error("Error adding unit:",t),alert("Error adding unit: "+t.message)}}function lr(e){document.querySelectorAll("#editPropertyModal .tab-content").forEach(t=>{t.classList.add("hidden")}),document.querySelectorAll("#editPropertyModal .tab-button").forEach(t=>{t.classList.remove("border-blue-500","text-blue-600"),t.classList.add("border-transparent","text-gray-500")}),document.getElementById(`edit${e.charAt(0).toUpperCase()+e.slice(1)}Content`).classList.remove("hidden"),document.getElementById(`edit${e.charAt(0).toUpperCase()+e.slice(1)}Tab`).classList.add("border-blue-500","text-blue-600"),document.getElementById(`edit${e.charAt(0).toUpperCase()+e.slice(1)}Tab`).classList.remove("border-transparent","text-gray-500")}function cr(e){return{available:"bg-green-100 text-green-800",occupied:"bg-blue-100 text-blue-800",maintenance:"bg-yellow-100 text-yellow-800",reserved:"bg-purple-100 text-purple-800",rented:"bg-indigo-100 text-indigo-800",unavailable:"bg-red-100 text-red-800",inactive:"bg-gray-100 text-gray-800"}[e]||"bg-gray-100 text-gray-800"}async function dr(e){try{const t=await fetch(`/landlord/units/${e}/edit`);if(!t.ok)throw new Error("Failed to fetch unit data");const n=await xt(t),r=`
            <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
                    <div class="flex items-center justify-between p-6 border-b border-gray-200">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <i class="fas fa-edit text-blue-600 text-lg"></i>
                            </div>
                            <div>
                                <h2 class="text-xl font-bold text-gray-900">Edit Unit</h2>
                                <p class="text-sm text-gray-500">Update unit information</p>
                            </div>
                        </div>
                        <button onclick="closeEditUnitModal()" class="text-gray-400 hover:text-gray-600 transition-colors">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                    
                    <form id="editUnitForm" class="p-6 space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Unit Name</label>
                                <input type="text" name="unit_name" value="${n.unit_name}" required 
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Unit Number</label>
                                <input type="number" name="unit_num" value="${n.unit_num}" required min="1"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Unit Type</label>
                                <select name="unit_type" required 
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    <option value="studio" ${n.unit_type==="studio"?"selected":""}>Studio</option>
                                    <option value="1-bedroom" ${n.unit_type==="1-bedroom"?"selected":""}>1 Bedroom</option>
                                    <option value="2-bedroom" ${n.unit_type==="2-bedroom"?"selected":""}>2 Bedroom</option>
                                    <option value="3-bedroom" ${n.unit_type==="3-bedroom"?"selected":""}>3 Bedroom</option>
                                    <option value="penthouse" ${n.unit_type==="penthouse"?"selected":""}>Penthouse</option>
                                    <option value="loft" ${n.unit_type==="loft"?"selected":""}>Loft</option>
                                    <option value="duplex" ${n.unit_type==="duplex"?"selected":""}>Duplex</option>
                                    <option value="commercial" ${n.unit_type==="commercial"?"selected":""}>Commercial</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Area (sqm)</label>
                                <input type="number" name="area_sqm" value="${n.area_sqm}" required min="1" step="0.01"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Unit Price</label>
                                <div class="relative">
                                    <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₱</span>
                                    <input type="number" name="unit_price" value="${n.unit_price}" required min="0" step="0.01"
                                        class="w-full pl-8 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Status</label>
                                <select name="status" required 
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    <option value="available">Available</option>
                                    <option value="occupied">Occupied</option>
                                    <option value="maintenance">Maintenance</option>
                                    <option value="reserved">Reserved</option>
                                    <option value="rented">Rented</option>
                                    <option value="unavailable">Unavailable</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="flex items-center justify-end space-x-3 pt-6 border-t border-gray-200">
                            <button type="button" onclick="closeEditUnitModal()" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors">
                                Cancel
                            </button>
                            <button type="submit" class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                                Update Unit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;let s=document.getElementById("editUnitModal");s||(s=document.createElement("div"),s.id="editUnitModal",document.body.appendChild(s)),s.innerHTML=r,document.getElementById("editUnitForm").addEventListener("submit",function(o){o.preventDefault(),pr(e)})}catch(t){console.error("Error loading unit for edit:",t),alert("Error loading unit for editing: "+t.message)}}function ur(){const e=document.getElementById("editUnitModal");e&&e.remove()}async function pr(e){try{const t=document.getElementById("editUnitForm"),n=new FormData(t),r={unit_name:n.get("unit_name"),unit_num:parseInt(n.get("unit_num")),unit_type:n.get("unit_type"),area_sqm:parseFloat(n.get("area_sqm")),unit_price:parseFloat(n.get("unit_price")),status:n.get("status")};if(!(await fetch("/landlord/units/"+e,{method:"PUT",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},body:JSON.stringify(r)})).ok)throw new Error("Failed to update unit");ur();const o=document.querySelector('input[name="prop_id"]')?.value;o&&Se(o),alert("Unit updated successfully!")}catch(t){console.error("Error updating unit:",t),alert("Error updating unit: "+t.message)}}async function fr(e){if(confirm("Are you sure you want to archive this unit? The unit will be marked as inactive and hidden from active listings."))try{if(!(await fetch("/landlord/units/"+e+"/archive",{method:"PUT",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},body:JSON.stringify({status:"inactive"})})).ok)throw new Error("Failed to archive unit");const n=document.querySelector('input[name="prop_id"]')?.value;n&&Se(n),alert("Unit archived successfully!")}catch(t){console.error("Error deactivating unit:",t),alert("Error deactivating unit: "+t.message)}}async function Se(e){try{const t=await fetch(`/landlord/properties/${e}/units`);if(!t.ok)throw new Error("Failed to fetch units");const n=await xt(t),r=document.getElementById("editUnitsList");if(!r)return;const s=n.filter(o=>o.status!=="inactive");if(s.length===0){r.innerHTML=`
                <div class="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <i class="fas fa-building text-gray-400 text-3xl mb-2"></i>
                    <p class="text-gray-500">No active units</p>
                    <p class="text-sm text-gray-400 mt-1">Click "Add Unit" to get started</p>
                </div>
            `;return}r.innerHTML=s.map(o=>`
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div class="flex justify-between items-start mb-3">
                    <h4 class="font-semibold text-gray-900">${o.unit_name}</h4>
                    <div class="flex space-x-2">
                        <button onclick="editUnit(${o.unit_id})" class="text-blue-600 hover:text-blue-800">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button onclick="deleteUnit(${o.unit_id})" class="text-red-600 hover:text-red-800">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                    <div>
                        <span class="font-medium">Unit #:</span>
                        <span>${o.unit_num}</span>
                    </div>
                    <div>
                        <span class="font-medium">Type:</span>
                        <span class="capitalize">${o.unit_type}</span>
                    </div>
                    <div>
                        <span class="font-medium">Area:</span>
                        <span>${o.area_sqm} sqm</span>
                    </div>
                    <div>
                        <span class="font-medium">Price:</span>
                        <span class="font-semibold">₱${parseFloat(o.unit_price).toLocaleString()}</span>
                    </div>
                    <div class="col-span-2">
                        <span class="font-medium">Status:</span>
                        <span class="px-2 py-1 rounded-full text-xs font-medium ${cr(o.status)}">
                            ${o.status}
                        </span>
                    </div>
                </div>
            </div>
        `).join("")}catch(t){console.error("Error refreshing units list:",t)}}function mr(e){const t=`
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
                <div class="flex items-center justify-between p-6 border-b border-gray-200">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            <i class="fas fa-plug text-green-600 text-lg"></i>
                        </div>
                        <div>
                            <h2 class="text-xl font-bold text-gray-900">Add Smart Device</h2>
                            <p class="text-sm text-gray-500">Connect a new smart device to your property</p>
                        </div>
                    </div>
                    <button onclick="closeAddDeviceModal()" class="text-gray-400 hover:text-gray-600 transition-colors">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                
                <form id="addDeviceForm" class="p-6 space-y-6">
                    <input type="hidden" name="prop_id" value="${e}">
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Device Name <span class="text-red-500">*</span>
                            </label>
                            <input type="text" name="device_name" required 
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="e.g., Living Room Thermostat">
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Device Type <span class="text-red-500">*</span>
                            </label>
                            <select name="device_type" required 
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent device-type-select">
                                <option value="">Select Type</option>
                                <option value="thermostat">Thermostat</option>
                                <option value="camera">Security Camera</option>
                                <option value="lock">Smart Lock</option>
                                <option value="lights">Smart Lights</option>
                                <option value="sensor">Motion Sensor</option>
                                <option value="doorbell">Smart Doorbell</option>
                                <option value="plug">Smart Plug</option>
                                <option value="alarm">Alarm System</option>
                                <option value="blinds">Smart Blinds</option>
                                <option value="speaker">Smart Speaker</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Model
                            </label>
                            <input type="text" name="model"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="e.g., Nest Thermostat 3rd Gen">
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Serial Number
                            </label>
                            <input type="text" name="serial_number"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="e.g., SN123456789">
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Connection Status <span class="text-red-500">*</span>
                            </label>
                            <select name="connection_status" required 
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="online">Online</option>
                                <option value="offline">Offline</option>
                            </select>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Power Status <span class="text-red-500">*</span>
                            </label>
                            <select name="power_status" required 
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="on">On</option>
                                <option value="off">Off</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Battery Level (%)
                        </label>
                        <input type="number" name="battery_level" min="0" max="100"
                            class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="0-100">
                        <p class="mt-1 text-sm text-gray-500">Leave empty if device doesn't have a battery</p>
                    </div>
                    
                    <div class="flex items-center justify-end space-x-3 pt-6 border-t border-gray-200">
                        <button type="button" onclick="closeAddDeviceModal()" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors">
                            Cancel
                        </button>
                        <button type="submit" class="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors">
                            Add Device
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;let n=document.getElementById("addDeviceModal");n||(n=document.createElement("div"),n.id="addDeviceModal",document.body.appendChild(n)),n.innerHTML=t,n.querySelector(".device-type-select").addEventListener("change",function(){gr(this)}),document.getElementById("addDeviceForm").addEventListener("submit",function(s){s.preventDefault(),br(e)})}function yr(){const e=document.getElementById("addDeviceModal");e&&e.remove()}function gr(e){const t=e.closest("form"),n=e.value,r=t.querySelector('input[name="device_name"]'),s=t.querySelector('input[name="model"]'),o={thermostat:{name:"Smart Thermostat",model:"Nest Learning Thermostat"},camera:{name:"Security Camera",model:"Arlo Pro 4"},lock:{name:"Smart Lock",model:"August Smart Lock"},lights:{name:"Smart Lights",model:"Philips Hue"},sensor:{name:"Motion Sensor",model:"Ring Motion Sensor"},doorbell:{name:"Smart Doorbell",model:"Ring Video Doorbell"},plug:{name:"Smart Plug",model:"TP-Link Kasa"},alarm:{name:"Alarm System",model:"SimpliSafe"},blinds:{name:"Smart Blinds",model:"IKEA Smart Blinds"},speaker:{name:"Smart Speaker",model:"Amazon Echo"}};o[n]&&(r.value||(r.value=o[n].name),s.value||(s.value=o[n].model))}async function br(e){try{const t=document.getElementById("addDeviceForm"),n=new FormData(t),r={device_name:n.get("device_name"),device_type:n.get("device_type"),model:n.get("model"),serial_number:n.get("serial_number"),connection_status:n.get("connection_status"),power_status:n.get("power_status"),battery_level:n.get("battery_level")?parseInt(n.get("battery_level")):null};console.log("Sending device data:",r);const s=await fetch("/landlord/properties/"+e+"/devices",{method:"POST",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content"),Accept:"application/json"},body:JSON.stringify(r)}),o=await(async()=>{if(!(s.headers.get("content-type")||"").includes("application/json")){const l=await s.text();throw console.error("Non-JSON response from server:",s.status,l),new Error(`Server returned non-JSON response (status ${s.status}). Check console for HTML.`)}return await s.json()})();if(!s.ok)throw new Error(o.message||"Failed to add device");if(!o.success)throw new Error(o.message||"Failed to add device");yr(),_e(e),alert("Device added successfully!")}catch(t){console.error("Error adding device:",t),alert("Error adding device: "+t.message)}}async function vr(e){try{const t=await fetch(`/landlord/devices/${e}/edit`);if(!t.ok)throw new Error("Failed to fetch device data");const n=await(async()=>{if(!(t.headers.get("content-type")||"").includes("application/json")){const i=await t.text();throw console.error("Non-JSON response from server:",t.status,i),new Error(`Server returned non-JSON response (status ${t.status}). Check console for HTML.`)}return await t.json()})(),r=`
            <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
                    <div class="flex items-center justify-between p-6 border-b border-gray-200">
                        <div class="flex items-center space-x-3">
                            <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <i class="fas fa-edit text-blue-600 text-lg"></i>
                            </div>
                            <div>
                                <h2 class="text-xl font-bold text-gray-900">Edit Smart Device</h2>
                                <p class="text-sm text-gray-500">Update device information</p>
                            </div>
                        </div>
                        <button onclick="closeEditDeviceModal()" class="text-gray-400 hover:text-gray-600 transition-colors">
                            <i class="fas fa-times text-xl"></i>
                        </button>
                    </div>
                    
                    <form id="editDeviceForm" class="p-6 space-y-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Device Name</label>
                                <input type="text" name="device_name" value="${n.device_name}" required 
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Device Type</label>
                                <select name="device_type" required 
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    <option value="thermostat" ${n.device_type==="thermostat"?"selected":""}>Thermostat</option>
                                    <option value="camera" ${n.device_type==="camera"?"selected":""}>Security Camera</option>
                                    <option value="lock" ${n.device_type==="lock"?"selected":""}>Smart Lock</option>
                                    <option value="lights" ${n.device_type==="lights"?"selected":""}>Smart Lights</option>
                                    <option value="sensor" ${n.device_type==="sensor"?"selected":""}>Motion Sensor</option>
                                    <option value="doorbell" ${n.device_type==="doorbell"?"selected":""}>Smart Doorbell</option>
                                    <option value="plug" ${n.device_type==="plug"?"selected":""}>Smart Plug</option>
                                    <option value="alarm" ${n.device_type==="alarm"?"selected":""}>Alarm System</option>
                                    <option value="blinds" ${n.device_type==="blinds"?"selected":""}>Smart Blinds</option>
                                    <option value="speaker" ${n.device_type==="speaker"?"selected":""}>Smart Speaker</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Model</label>
                                <input type="text" name="model" value="${n.model||""}"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Serial Number</label>
                                <input type="text" name="serial_number" value="${n.serial_number||""}"
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Connection Status</label>
                                <select name="connection_status" required 
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    <option value="online" ${n.connection_status==="online"?"selected":""}>Online</option>
                                    <option value="offline" ${n.connection_status==="offline"?"selected":""}>Offline</option>
                                </select>
                            </div>
                            
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Power Status</label>
                                <select name="power_status" required 
                                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                    <option value="on" ${n.power_status==="on"?"selected":""}>On</option>
                                    <option value="off" ${n.power_status==="off"?"selected":""}>Off</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Battery Level (%)</label>
                            <input type="number" name="battery_level" value="${n.battery_level||""}" min="0" max="100"
                                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            <p class="mt-1 text-sm text-gray-500">Leave empty if device doesn't have a battery</p>
                        </div>
                        
                        <div class="flex items-center justify-end space-x-3 pt-6 border-t border-gray-200">
                            <button type="button" onclick="closeEditDeviceModal()" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors">
                                Cancel
                            </button>
                            <button type="submit" class="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                                Update Device
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;let s=document.getElementById("editDeviceModal");s||(s=document.createElement("div"),s.id="editDeviceModal",document.body.appendChild(s)),s.innerHTML=r,document.getElementById("editDeviceForm").addEventListener("submit",function(o){o.preventDefault(),xr(e)})}catch(t){console.error("Error loading device for edit:",t),alert("Error loading device for editing: "+t.message)}}function hr(){const e=document.getElementById("editDeviceModal");e&&e.remove()}async function xr(e){try{const t=document.getElementById("editDeviceForm"),n=new FormData(t),r={device_name:n.get("device_name"),device_type:n.get("device_type"),model:n.get("model"),serial_number:n.get("serial_number"),connection_status:n.get("connection_status"),power_status:n.get("power_status"),battery_level:n.get("battery_level")?parseInt(n.get("battery_level")):null},s=await fetch("/landlord/devices/"+e,{method:"PUT",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content"),Accept:"application/json"},body:JSON.stringify(r)}),o=await(async()=>{if(!(s.headers.get("content-type")||"").includes("application/json")){const p=await s.text();throw console.error("Non-JSON response from server:",s.status,p),new Error(`Server returned non-JSON response (status ${s.status}). Check console for HTML.`)}return await s.json()})();if(!s.ok)throw new Error(o.message||"Failed to update device");if(!o.success)throw new Error(o.message||"Failed to update device");hr();const i=document.querySelector('input[name="prop_id"]')?.value;i&&_e(i),alert("Device updated successfully!")}catch(t){console.error("Error updating device:",t),alert("Error updating device: "+t.message)}}async function wr(e){if(confirm("Are you sure you want to delete this device? This action cannot be undone."))try{const t=await fetch("/landlord/devices/"+e,{method:"DELETE",headers:{"Content-Type":"application/json","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content"),Accept:"application/json"}}),n=await(async()=>{if(!(t.headers.get("content-type")||"").includes("application/json")){const o=await t.text();throw console.error("Non-JSON response from server:",t.status,o),new Error(`Server returned non-JSON response (status ${t.status}). Check console for HTML.`)}return await t.json()})();if(!t.ok)throw new Error(n.message||"Failed to delete device");if(!n.success)throw new Error(n.message||"Failed to delete device");const r=document.querySelector('input[name="prop_id"]')?.value;r&&_e(r),alert("Device deleted successfully!")}catch(t){console.error("Error deleting device:",t),alert("Error deleting device: "+t.message)}}async function _e(e){try{const t=await fetch(`/landlord/properties/${e}/devices`);if(!t.ok)throw new Error("Failed to fetch devices");const n=await(async()=>{if(!(t.headers.get("content-type")||"").includes("application/json")){const o=await t.text();throw console.error("Non-JSON response from server:",t.status,o),new Error(`Server returned non-JSON response (status ${t.status}). Check console for HTML.`)}return await t.json()})(),r=document.getElementById("editDevicesList");if(!r)return;if(n.length===0){r.innerHTML=`
                <div class="col-span-2 text-center py-8 border-2 border-dashed border-gray-300 rounded-lg">
                    <i class="fas fa-plug text-gray-400 text-3xl mb-2"></i>
                    <p class="text-gray-500">No smart devices connected</p>
                    <p class="text-sm text-gray-400 mt-1">Click "Add Device" to get started</p>
                </div>
            `;return}r.innerHTML=n.map(s=>`
            <div class="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <div class="flex justify-between items-start mb-3">
                    <h4 class="font-semibold text-gray-900">${s.device_name}</h4>
                    <div class="flex space-x-2">
                        <button onclick="editDevice(${s.device_id})" class="text-blue-600 hover:text-blue-800">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button onclick="deleteDevice(${s.device_id})" class="text-red-600 hover:text-red-800">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
                <div class="space-y-2 text-sm text-gray-600">
                    <div class="flex justify-between">
                        <span>Type:</span>
                        <span class="capitalize">${s.device_type}</span>
                    </div>
                    <div class="flex justify-between">
                        <span>Status:</span>
                        <span class="px-2 py-1 rounded-full text-xs font-medium ${s.connection_status==="online"?"bg-green-100 text-green-800":"bg-red-100 text-red-800"}">
                            ${s.connection_status}
                        </span>
                    </div>
                    <div class="flex justify-between">
                        <span>Power:</span>
                        <span class="capitalize ${s.power_status==="on"?"text-green-600":"text-red-600"}">${s.power_status}</span>
                    </div>
                    ${s.model?`
                    <div class="flex justify-between">
                        <span>Model:</span>
                        <span>${s.model}</span>
                    </div>
                    `:""}
                    ${s.battery_level!==null?`
                    <div class="flex justify-between">
                        <span>Battery:</span>
                        <span>${s.battery_level}%</span>
                    </div>
                    `:""}
                </div>
            </div>
        `).join("")}catch(t){console.error("Error refreshing devices list:",t)}}document.addEventListener("DOMContentLoaded",function(){let e=0;const t=document.getElementById("devicesContainer"),n=document.getElementById("noDevicesMessage"),r=document.getElementById("addDeviceBtn"),s=document.getElementById("deviceTemplate");r&&r.addEventListener("click",function(){o()});function o(){const f=s.content.cloneNode(!0).querySelector(".device-item").outerHTML.replace(/INDEX/g,e),b=document.createElement("div");b.innerHTML=f,t.appendChild(b),e++,n.style.display="none",b.querySelector(".remove-device").addEventListener("click",function(){b.remove(),e--,e===0&&(n.style.display="block"),i()}),b.querySelector(".device-type-select").addEventListener("change",function(){l(this)})}function i(){t.querySelectorAll(".device-item").forEach((d,f)=>{d.querySelectorAll("input, select").forEach(v=>{const u=v.getAttribute("name");u&&v.setAttribute("name",u.replace(/devices\[\d+\]/,`devices[${f}]`))})})}function l(c){const d=c.closest(".device-item"),f=c.value,b=d.querySelector('input[name*="device_name"]'),v=d.querySelector('input[name*="model"]'),u={thermostat:{name:"Smart Thermostat",model:"Nest Learning Thermostat"},camera:{name:"Security Camera",model:"Arlo Pro 4"},lock:{name:"Smart Lock",model:"August Smart Lock"},lights:{name:"Smart Lights",model:"Philips Hue"},sensor:{name:"Motion Sensor",model:"Ring Motion Sensor"},doorbell:{name:"Smart Doorbell",model:"Ring Video Doorbell"},plug:{name:"Smart Plug",model:"TP-Link Kasa"},alarm:{name:"Alarm System",model:"SimpliSafe"},blinds:{name:"Smart Blinds",model:"IKEA Smart Blinds"},speaker:{name:"Smart Speaker",model:"Amazon Echo"}};u[f]&&(b.value||(b.value=u[f].name),v.value||(v.value=u[f].model))}const p=document.getElementById("addPropertyForm");p&&p.addEventListener("submit",function(c){console.log("Submitting form with",e,"devices")})});window.openViewModal=er;window.openEditModal=sr;window.openAddUnitModal=or;window.editUnit=dr;window.deleteUnit=fr;window.openAddDeviceModal=mr;window.editDevice=vr;window.deleteDevice=wr;window.closeViewModal=nr;window.closeEditModal=rr;window.switchEditTab=lr;document.addEventListener("DOMContentLoaded",function(){Yn(),console.log("Properties management system loaded")});
