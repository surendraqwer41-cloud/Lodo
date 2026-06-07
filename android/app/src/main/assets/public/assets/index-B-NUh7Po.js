(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var dd={exports:{}},Vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function JS(){if(Qg)return Vo;Qg=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Vo.Fragment=e,Vo.jsx=i,Vo.jsxs=i,Vo}var Jg;function $S(){return Jg||(Jg=1,dd.exports=JS()),dd.exports}var C=$S(),hd={exports:{}},lt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function ey(){if($g)return lt;$g=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),g=Symbol.iterator;function M(P){return P===null||typeof P!="object"?null:(P=g&&P[g]||P["@@iterator"],typeof P=="function"?P:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,y={};function v(P,Q,xe){this.props=P,this.context=Q,this.refs=y,this.updater=xe||T}v.prototype.isReactComponent={},v.prototype.setState=function(P,Q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Q,"setState")},v.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function U(){}U.prototype=v.prototype;function L(P,Q,xe){this.props=P,this.context=Q,this.refs=y,this.updater=xe||T}var N=L.prototype=new U;N.constructor=L,O(N,v.prototype),N.isPureReactComponent=!0;var H=Array.isArray;function D(){}var F={H:null,A:null,T:null,S:null},E=Object.prototype.hasOwnProperty;function I(P,Q,xe){var ye=xe.ref;return{$$typeof:r,type:P,key:Q,ref:ye!==void 0?ye:null,props:xe}}function q(P,Q){return I(P.type,Q,P.props)}function V(P){return typeof P=="object"&&P!==null&&P.$$typeof===r}function K(P){var Q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(xe){return Q[xe]})}var fe=/\/+/g;function he(P,Q){return typeof P=="object"&&P!==null&&P.key!=null?K(""+P.key):Q.toString(36)}function X(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(D,D):(P.status="pending",P.then(function(Q){P.status==="pending"&&(P.status="fulfilled",P.value=Q)},function(Q){P.status==="pending"&&(P.status="rejected",P.reason=Q)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function z(P,Q,xe,ye,we){var $=typeof P;($==="undefined"||$==="boolean")&&(P=null);var Ee=!1;if(P===null)Ee=!0;else switch($){case"bigint":case"string":case"number":Ee=!0;break;case"object":switch(P.$$typeof){case r:case e:Ee=!0;break;case S:return Ee=P._init,z(Ee(P._payload),Q,xe,ye,we)}}if(Ee)return we=we(P),Ee=ye===""?"."+he(P,0):ye,H(we)?(xe="",Ee!=null&&(xe=Ee.replace(fe,"$&/")+"/"),z(we,Q,xe,"",function(tt){return tt})):we!=null&&(V(we)&&(we=q(we,xe+(we.key==null||P&&P.key===we.key?"":(""+we.key).replace(fe,"$&/")+"/")+Ee)),Q.push(we)),1;Ee=0;var Te=ye===""?".":ye+":";if(H(P))for(var Ie=0;Ie<P.length;Ie++)ye=P[Ie],$=Te+he(ye,Ie),Ee+=z(ye,Q,xe,$,we);else if(Ie=M(P),typeof Ie=="function")for(P=Ie.call(P),Ie=0;!(ye=P.next()).done;)ye=ye.value,$=Te+he(ye,Ie++),Ee+=z(ye,Q,xe,$,we);else if($==="object"){if(typeof P.then=="function")return z(X(P),Q,xe,ye,we);throw Q=String(P),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Ee}function G(P,Q,xe){if(P==null)return P;var ye=[],we=0;return z(P,ye,"","",function($){return Q.call(xe,$,we++)}),ye}function B(P){if(P._status===-1){var Q=P._result;Q=Q(),Q.then(function(xe){(P._status===0||P._status===-1)&&(P._status=1,P._result=xe)},function(xe){(P._status===0||P._status===-1)&&(P._status=2,P._result=xe)}),P._status===-1&&(P._status=0,P._result=Q)}if(P._status===1)return P._result.default;throw P._result}var te=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)},ue={map:G,forEach:function(P,Q,xe){G(P,function(){Q.apply(this,arguments)},xe)},count:function(P){var Q=0;return G(P,function(){Q++}),Q},toArray:function(P){return G(P,function(Q){return Q})||[]},only:function(P){if(!V(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return lt.Activity=_,lt.Children=ue,lt.Component=v,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=L,lt.StrictMode=s,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,lt.__COMPILER_RUNTIME={__proto__:null,c:function(P){return F.H.useMemoCache(P)}},lt.cache=function(P){return function(){return P.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(P,Q,xe){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var ye=O({},P.props),we=P.key;if(Q!=null)for($ in Q.key!==void 0&&(we=""+Q.key),Q)!E.call(Q,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&Q.ref===void 0||(ye[$]=Q[$]);var $=arguments.length-2;if($===1)ye.children=xe;else if(1<$){for(var Ee=Array($),Te=0;Te<$;Te++)Ee[Te]=arguments[Te+2];ye.children=Ee}return I(P.type,we,ye)},lt.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},lt.createElement=function(P,Q,xe){var ye,we={},$=null;if(Q!=null)for(ye in Q.key!==void 0&&($=""+Q.key),Q)E.call(Q,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(we[ye]=Q[ye]);var Ee=arguments.length-2;if(Ee===1)we.children=xe;else if(1<Ee){for(var Te=Array(Ee),Ie=0;Ie<Ee;Ie++)Te[Ie]=arguments[Ie+2];we.children=Te}if(P&&P.defaultProps)for(ye in Ee=P.defaultProps,Ee)we[ye]===void 0&&(we[ye]=Ee[ye]);return I(P,$,we)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(P){return{$$typeof:h,render:P}},lt.isValidElement=V,lt.lazy=function(P){return{$$typeof:S,_payload:{_status:-1,_result:P},_init:B}},lt.memo=function(P,Q){return{$$typeof:p,type:P,compare:Q===void 0?null:Q}},lt.startTransition=function(P){var Q=F.T,xe={};F.T=xe;try{var ye=P(),we=F.S;we!==null&&we(xe,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(D,te)}catch($){te($)}finally{Q!==null&&xe.types!==null&&(Q.types=xe.types),F.T=Q}},lt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},lt.use=function(P){return F.H.use(P)},lt.useActionState=function(P,Q,xe){return F.H.useActionState(P,Q,xe)},lt.useCallback=function(P,Q){return F.H.useCallback(P,Q)},lt.useContext=function(P){return F.H.useContext(P)},lt.useDebugValue=function(){},lt.useDeferredValue=function(P,Q){return F.H.useDeferredValue(P,Q)},lt.useEffect=function(P,Q){return F.H.useEffect(P,Q)},lt.useEffectEvent=function(P){return F.H.useEffectEvent(P)},lt.useId=function(){return F.H.useId()},lt.useImperativeHandle=function(P,Q,xe){return F.H.useImperativeHandle(P,Q,xe)},lt.useInsertionEffect=function(P,Q){return F.H.useInsertionEffect(P,Q)},lt.useLayoutEffect=function(P,Q){return F.H.useLayoutEffect(P,Q)},lt.useMemo=function(P,Q){return F.H.useMemo(P,Q)},lt.useOptimistic=function(P,Q){return F.H.useOptimistic(P,Q)},lt.useReducer=function(P,Q,xe){return F.H.useReducer(P,Q,xe)},lt.useRef=function(P){return F.H.useRef(P)},lt.useState=function(P){return F.H.useState(P)},lt.useSyncExternalStore=function(P,Q,xe){return F.H.useSyncExternalStore(P,Q,xe)},lt.useTransition=function(){return F.H.useTransition()},lt.version="19.2.7",lt}var ex;function Yh(){return ex||(ex=1,hd.exports=ey()),hd.exports}var Qe=Yh(),pd={exports:{}},ko={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tx;function ty(){return tx||(tx=1,(function(r){function e(z,G){var B=z.length;z.push(G);e:for(;0<B;){var te=B-1>>>1,ue=z[te];if(0<l(ue,G))z[te]=G,z[B]=ue,B=te;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var G=z[0],B=z.pop();if(B!==G){z[0]=B;e:for(var te=0,ue=z.length,P=ue>>>1;te<P;){var Q=2*(te+1)-1,xe=z[Q],ye=Q+1,we=z[ye];if(0>l(xe,B))ye<ue&&0>l(we,xe)?(z[te]=we,z[ye]=B,te=ye):(z[te]=xe,z[Q]=B,te=Q);else if(ye<ue&&0>l(we,B))z[te]=we,z[ye]=B,te=ye;else break e}}return G}function l(z,G){var B=z.sortIndex-G.sortIndex;return B!==0?B:z.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],S=1,_=null,g=3,M=!1,T=!1,O=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function N(z){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=z)s(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=i(p)}}function H(z){if(O=!1,N(z),!T)if(i(m)!==null)T=!0,D||(D=!0,K());else{var G=i(p);G!==null&&X(H,G.startTime-z)}}var D=!1,F=-1,E=5,I=-1;function q(){return y?!0:!(r.unstable_now()-I<E)}function V(){if(y=!1,D){var z=r.unstable_now();I=z;var G=!0;try{e:{T=!1,O&&(O=!1,U(F),F=-1),M=!0;var B=g;try{t:{for(N(z),_=i(m);_!==null&&!(_.expirationTime>z&&q());){var te=_.callback;if(typeof te=="function"){_.callback=null,g=_.priorityLevel;var ue=te(_.expirationTime<=z);if(z=r.unstable_now(),typeof ue=="function"){_.callback=ue,N(z),G=!0;break t}_===i(m)&&s(m),N(z)}else s(m);_=i(m)}if(_!==null)G=!0;else{var P=i(p);P!==null&&X(H,P.startTime-z),G=!1}}break e}finally{_=null,g=B,M=!1}G=void 0}}finally{G?K():D=!1}}}var K;if(typeof L=="function")K=function(){L(V)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,he=fe.port2;fe.port1.onmessage=V,K=function(){he.postMessage(null)}}else K=function(){v(V,0)};function X(z,G){F=v(function(){z(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return g},r.unstable_next=function(z){switch(g){case 1:case 2:case 3:var G=3;break;default:G=g}var B=g;g=G;try{return z()}finally{g=B}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var B=g;g=z;try{return G()}finally{g=B}},r.unstable_scheduleCallback=function(z,G,B){var te=r.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?te+B:te):B=te,z){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=B+ue,z={id:S++,callback:G,priorityLevel:z,startTime:B,expirationTime:ue,sortIndex:-1},B>te?(z.sortIndex=B,e(p,z),i(m)===null&&z===i(p)&&(O?(U(F),F=-1):O=!0,X(H,B-te))):(z.sortIndex=ue,e(m,z),T||M||(T=!0,D||(D=!0,K()))),z},r.unstable_shouldYield=q,r.unstable_wrapCallback=function(z){var G=g;return function(){var B=g;g=G;try{return z.apply(this,arguments)}finally{g=B}}}})(gd)),gd}var nx;function ny(){return nx||(nx=1,md.exports=ty()),md.exports}var xd={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ix;function iy(){if(ix)return Fn;ix=1;var r=Yh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var S=2;S<arguments.length;S++)p+="&args[]="+encodeURIComponent(arguments[S])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,S){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:S}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Fn.createPortal=function(m,p){var S=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,S)},Fn.flushSync=function(m){var p=f.T,S=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=S,s.d.f()}},Fn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Fn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Fn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var S=p.as,_=h(S,p.crossOrigin),g=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;S==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:g,fetchPriority:M}):S==="script"&&s.d.X(m,{crossOrigin:_,integrity:g,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Fn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var S=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Fn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var S=p.as,_=h(S,p.crossOrigin);s.d.L(m,S,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Fn.preloadModule=function(m,p){if(typeof m=="string")if(p){var S=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Fn.requestFormReset=function(m){s.d.r(m)},Fn.unstable_batchedUpdates=function(m,p){return m(p)},Fn.useFormState=function(m,p,S){return f.H.useFormState(m,p,S)},Fn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Fn.version="19.2.7",Fn}var ax;function ay(){if(ax)return xd.exports;ax=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),xd.exports=iy(),xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sx;function sy(){if(sx)return ko;sx=1;var r=ny(),e=Yh(),i=ay();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(s(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var x=!1,w=u.child;w;){if(w===a){x=!0,a=u,o=d;break}if(w===o){x=!0,o=u,a=d;break}w=w.sibling}if(!x){for(w=d.child;w;){if(w===a){x=!0,a=d,o=u;break}if(w===o){x=!0,o=d,a=u;break}w=w.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,g=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),L=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),D=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),q=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Symbol.for("react.client.reference");function he(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===fe?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case H:return"Suspense";case D:return"SuspenseList";case I:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case L:return t.displayName||"Context";case U:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:he(t.type)||"Memo";case E:n=t._payload,t=t._init;try{return he(t(n))}catch{}}return null}var X=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},te=[],ue=-1;function P(t){return{current:t}}function Q(t){0>ue||(t.current=te[ue],te[ue]=null,ue--)}function xe(t,n){ue++,te[ue]=t.current,t.current=n}var ye=P(null),we=P(null),$=P(null),Ee=P(null);function Te(t,n){switch(xe($,n),xe(we,t),xe(ye,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Sg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Sg(n),t=yg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Q(ye),xe(ye,t)}function Ie(){Q(ye),Q(we),Q($)}function tt(t){t.memoizedState!==null&&xe(Ee,t);var n=ye.current,a=yg(n,t.type);n!==a&&(xe(we,t),xe(ye,a))}function Fe(t){we.current===t&&(Q(ye),Q(we)),Ee.current===t&&(Q(Ee),Fo._currentValue=B)}var Dt,dt;function Je(t){if(Dt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Dt=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Dt+t+dt}var Rt=!1;function nt(t,n){if(!t||Rt)return"";Rt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(pe){var ce=pe}Reflect.construct(t,[],be)}else{try{be.call()}catch(pe){ce=pe}t.call(be.prototype)}}else{try{throw Error()}catch(pe){ce=pe}(be=t())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(pe){if(pe&&ce&&typeof pe.stack=="string")return[pe.stack,ce.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],w=d[1];if(x&&w){var k=x.split(`
`),se=w.split(`
`);for(u=o=0;o<k.length&&!k[o].includes("DetermineComponentFrameRoot");)o++;for(;u<se.length&&!se[u].includes("DetermineComponentFrameRoot");)u++;if(o===k.length||u===se.length)for(o=k.length-1,u=se.length-1;1<=o&&0<=u&&k[o]!==se[u];)u--;for(;1<=o&&0<=u;o--,u--)if(k[o]!==se[u]){if(o!==1||u!==1)do if(o--,u--,0>u||k[o]!==se[u]){var _e=`
`+k[o].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=o&&0<=u);break}}}finally{Rt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Je(a):""}function Et(t,n){switch(t.tag){case 26:case 27:case 5:return Je(t.type);case 16:return Je("Lazy");case 13:return t.child!==n&&n!==null?Je("Suspense Fallback"):Je("Suspense");case 19:return Je("SuspenseList");case 0:case 15:return nt(t.type,!1);case 11:return nt(t.type.render,!1);case 1:return nt(t.type,!0);case 31:return Je("Activity");default:return""}}function Pt(t){try{var n="",a=null;do n+=Et(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var un=Object.prototype.hasOwnProperty,Z=r.unstable_scheduleCallback,Ht=r.unstable_cancelCallback,ht=r.unstable_shouldYield,It=r.unstable_requestPaint,ge=r.unstable_now,qe=r.unstable_getCurrentPriorityLevel,A=r.unstable_ImmediatePriority,b=r.unstable_UserBlockingPriority,j=r.unstable_NormalPriority,de=r.unstable_LowPriority,Se=r.unstable_IdlePriority,Ae=r.log,Ce=r.unstable_setDisableYieldValue,ne=null,me=null;function Oe(t){if(typeof Ae=="function"&&Ce(t),me&&typeof me.setStrictMode=="function")try{me.setStrictMode(ne,t)}catch{}}var Pe=Math.clz32?Math.clz32:rt,Ue=Math.log,De=Math.LN2;function rt(t){return t>>>=0,t===0?32:31-(Ue(t)/De|0)|0}var ot=256,xt=262144,W=4194304;function Ne(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ve(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?u=Ne(o):(x&=w,x!==0?u=Ne(x):a||(a=w&~t,a!==0&&(u=Ne(a))))):(w=o&~d,w!==0?u=Ne(w):x!==0?u=Ne(x):a||(a=o&~t,a!==0&&(u=Ne(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function He(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Le(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Re(){var t=W;return W<<=1,(W&62914560)===0&&(W=4194304),t}function Ye(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function st(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function an(t,n,a,o,u,d){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var w=t.entanglements,k=t.expirationTimes,se=t.hiddenUpdates;for(a=x&~a;0<a;){var _e=31-Pe(a),be=1<<_e;w[_e]=0,k[_e]=-1;var ce=se[_e];if(ce!==null)for(se[_e]=null,_e=0;_e<ce.length;_e++){var pe=ce[_e];pe!==null&&(pe.lane&=-536870913)}a&=~be}o!==0&&zt(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function zt(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Pe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function pi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Pe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function ei(t,n){var a=n&-n;return a=(a&42)!==0?1:fs(a),(a&(t.suspendedLanes|n))!==0?0:a}function fs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Zr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Kr(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:jg(t.type))}function Qr(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var In=Math.random().toString(36).slice(2),fn="__reactFiber$"+In,Nn="__reactProps$"+In,Ji="__reactContainer$"+In,Aa="__reactEvents$"+In,rl="__reactListeners$"+In,Vs="__reactHandles$"+In,Jr="__reactResources$"+In,Ra="__reactMarker$"+In;function $r(t){delete t[fn],delete t[Nn],delete t[Aa],delete t[rl],delete t[Vs]}function wa(t){var n=t[fn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ji]||a[fn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=wg(t);t!==null;){if(a=t[fn])return a;t=wg(t)}return n}t=a,a=t.parentNode}return null}function Ca(t){if(t=t[fn]||t[Ji]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ds(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Na(t){var n=t[Jr];return n||(n=t[Jr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function mn(t){t[Ra]=!0}var ol=new Set,R={};function J(t,n){le(t,n),le(t+"Capture",n)}function le(t,n){for(R[t]=n,t=0;t<n.length;t++)ol.add(n[t])}var re=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oe={},Be={};function ke(t){return un.call(Be,t)?!0:un.call(oe,t)?!1:re.test(t)?Be[t]=!0:(oe[t]=!0,!1)}function ze(t,n,a){if(ke(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Xe(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function je(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ut(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ut(t){if(!t._valueTracker){var n=ut(t)?"checked":"value";t._valueTracker=Ke(t,n,""+t[n])}}function en(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=ut(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Kt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Gt=/[\n"\\]/g;function Vt(t){return t.replace(Gt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ve(t,n,a,o,u,d,x,w){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$e(n)):t.value!==""+$e(n)&&(t.value=""+$e(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?_t(t,x,$e(n)):a!=null?_t(t,x,$e(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+$e(w):t.removeAttribute("name")}function zn(t,n,a,o,u,d,x,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ut(t);return}a=a!=null?""+$e(a):"",n=n!=null?""+$e(n):a,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Ut(t)}function _t(t,n,a){n==="number"&&Kt(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function yn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+$e(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ti(t,n,a){if(n!=null&&(n=""+$e(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$e(a):""}function Ti(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(X(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=$e(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ut(t)}function ni(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||kt.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ai(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&tn(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&tn(t,d,n[d])}function Bt(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Da=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hs(t){return Da.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function $i(){}var lu=null;function cu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ks=null,js=null;function vp(t){var n=Ca(t);if(n&&(t=n.stateNode)){var a=t[Nn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ve(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Nn]||null;if(!u)throw Error(s(90));Ve(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&en(o)}break e;case"textarea":ti(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&yn(t,!!a.multiple,n,!1)}}}var uu=!1;function Sp(t,n,a){if(uu)return t(n,a);uu=!0;try{var o=t(n);return o}finally{if(uu=!1,(ks!==null||js!==null)&&(Yl(),ks&&(n=ks,t=js,js=ks=null,vp(n),t)))for(n=0;n<t.length;n++)vp(t[n])}}function eo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Nn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=!1;if(ea)try{var to={};Object.defineProperty(to,"passive",{get:function(){fu=!0}}),window.addEventListener("test",to,to),window.removeEventListener("test",to,to)}catch{fu=!1}var Ua=null,du=null,ll=null;function yp(){if(ll)return ll;var t,n=du,a=n.length,o,u="value"in Ua?Ua.value:Ua.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===u[d-o];o++);return ll=u.slice(t,1<o?1-o:void 0)}function cl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ul(){return!0}function Mp(){return!1}function Wn(t){function n(a,o,u,d,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(a=t[w],this[w]=a?a(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ul:Mp,this.isPropagationStopped=Mp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ul)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ul)},persist:function(){},isPersistent:ul}),n}var ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=Wn(ps),no=_({},ps,{view:0,detail:0}),K_=Wn(no),hu,pu,io,dl=_({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==io&&(io&&t.type==="mousemove"?(hu=t.screenX-io.screenX,pu=t.screenY-io.screenY):pu=hu=0,io=t),hu)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),bp=Wn(dl),Q_=_({},dl,{dataTransfer:0}),J_=Wn(Q_),$_=_({},no,{relatedTarget:0}),mu=Wn($_),ev=_({},ps,{animationName:0,elapsedTime:0,pseudoElement:0}),tv=Wn(ev),nv=_({},ps,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),iv=Wn(nv),av=_({},ps,{data:0}),Ep=Wn(av),sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lv(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=ov[t])?!!n[t]:!1}function gu(){return lv}var cv=_({},no,{key:function(t){if(t.key){var n=sv[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gu,charCode:function(t){return t.type==="keypress"?cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uv=Wn(cv),fv=_({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tp=Wn(fv),dv=_({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gu}),hv=Wn(dv),pv=_({},ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),mv=Wn(pv),gv=_({},dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),xv=Wn(gv),_v=_({},ps,{newState:0,oldState:0}),vv=Wn(_v),Sv=[9,13,27,32],xu=ea&&"CompositionEvent"in window,ao=null;ea&&"documentMode"in document&&(ao=document.documentMode);var yv=ea&&"TextEvent"in window&&!ao,Ap=ea&&(!xu||ao&&8<ao&&11>=ao),Rp=" ",wp=!1;function Cp(t,n){switch(t){case"keyup":return Sv.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Np(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xs=!1;function Mv(t,n){switch(t){case"compositionend":return Np(n);case"keypress":return n.which!==32?null:(wp=!0,Rp);case"textInput":return t=n.data,t===Rp&&wp?null:t;default:return null}}function bv(t,n){if(Xs)return t==="compositionend"||!xu&&Cp(t,n)?(t=yp(),ll=du=Ua=null,Xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ap&&n.locale!=="ko"?null:n.data;default:return null}}var Ev={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Ev[t.type]:n==="textarea"}function Up(t,n,a,o){ks?js?js.push(o):js=[o]:ks=o,n=tc(n,"onChange"),0<n.length&&(a=new fl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var so=null,ro=null;function Tv(t){pg(t,0)}function hl(t){var n=ds(t);if(en(n))return t}function Lp(t,n){if(t==="change")return n}var Op=!1;if(ea){var _u;if(ea){var vu="oninput"in document;if(!vu){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),vu=typeof Pp.oninput=="function"}_u=vu}else _u=!1;Op=_u&&(!document.documentMode||9<document.documentMode)}function Ip(){so&&(so.detachEvent("onpropertychange",zp),ro=so=null)}function zp(t){if(t.propertyName==="value"&&hl(ro)){var n=[];Up(n,ro,t,cu(t)),Sp(Tv,n)}}function Av(t,n,a){t==="focusin"?(Ip(),so=n,ro=a,so.attachEvent("onpropertychange",zp)):t==="focusout"&&Ip()}function Rv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hl(ro)}function wv(t,n){if(t==="click")return hl(n)}function Cv(t,n){if(t==="input"||t==="change")return hl(n)}function Nv(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ii=typeof Object.is=="function"?Object.is:Nv;function oo(t,n){if(ii(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!un.call(n,u)||!ii(t[u],n[u]))return!1}return!0}function Fp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Bp(t,n){var a=Fp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Fp(a)}}function Hp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Hp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Gp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Kt(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Kt(t.document)}return n}function Su(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Dv=ea&&"documentMode"in document&&11>=document.documentMode,Ws=null,yu=null,lo=null,Mu=!1;function Vp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Mu||Ws==null||Ws!==Kt(o)||(o=Ws,"selectionStart"in o&&Su(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),lo&&oo(lo,o)||(lo=o,o=tc(yu,"onSelect"),0<o.length&&(n=new fl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Ws)))}function ms(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var qs={animationend:ms("Animation","AnimationEnd"),animationiteration:ms("Animation","AnimationIteration"),animationstart:ms("Animation","AnimationStart"),transitionrun:ms("Transition","TransitionRun"),transitionstart:ms("Transition","TransitionStart"),transitioncancel:ms("Transition","TransitionCancel"),transitionend:ms("Transition","TransitionEnd")},bu={},kp={};ea&&(kp=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function gs(t){if(bu[t])return bu[t];if(!qs[t])return t;var n=qs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in kp)return bu[t]=n[a];return t}var jp=gs("animationend"),Xp=gs("animationiteration"),Wp=gs("animationstart"),Uv=gs("transitionrun"),Lv=gs("transitionstart"),Ov=gs("transitioncancel"),qp=gs("transitionend"),Yp=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function Ri(t,n){Yp.set(t,n),J(n,[t])}var pl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},mi=[],Ys=0,Tu=0;function ml(){for(var t=Ys,n=Tu=Ys=0;n<t;){var a=mi[n];mi[n++]=null;var o=mi[n];mi[n++]=null;var u=mi[n];mi[n++]=null;var d=mi[n];if(mi[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&Zp(a,u,d)}}function gl(t,n,a,o){mi[Ys++]=t,mi[Ys++]=n,mi[Ys++]=a,mi[Ys++]=o,Tu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Au(t,n,a,o){return gl(t,n,a,o),xl(t)}function xs(t,n){return gl(t,null,null,n),xl(t)}function Zp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Pe(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function xl(t){if(50<Do)throw Do=0,If=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Zs={};function Pv(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ai(t,n,a,o){return new Pv(t,n,a,o)}function Ru(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ta(t,n){var a=t.alternate;return a===null?(a=ai(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Kp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function _l(t,n,a,o,u,d){var x=0;if(o=t,typeof t=="function")Ru(t)&&(x=1);else if(typeof t=="string")x=HS(t,a,ye.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case I:return t=ai(31,a,n,u),t.elementType=I,t.lanes=d,t;case O:return _s(a.children,u,d,n);case y:x=8,u|=24;break;case v:return t=ai(12,a,n,u|2),t.elementType=v,t.lanes=d,t;case H:return t=ai(13,a,n,u),t.elementType=H,t.lanes=d,t;case D:return t=ai(19,a,n,u),t.elementType=D,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:x=10;break e;case U:x=9;break e;case N:x=11;break e;case F:x=14;break e;case E:x=16,o=null;break e}x=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=ai(x,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function _s(t,n,a,o){return t=ai(7,t,o,n),t.lanes=a,t}function wu(t,n,a){return t=ai(6,t,null,n),t.lanes=a,t}function Qp(t){var n=ai(18,null,null,0);return n.stateNode=t,n}function Cu(t,n,a){return n=ai(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Jp=new WeakMap;function gi(t,n){if(typeof t=="object"&&t!==null){var a=Jp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Pt(n)},Jp.set(t,n),n)}return{value:t,source:n,stack:Pt(n)}}var Ks=[],Qs=0,vl=null,co=0,xi=[],_i=0,La=null,Fi=1,Bi="";function na(t,n){Ks[Qs++]=co,Ks[Qs++]=vl,vl=t,co=n}function $p(t,n,a){xi[_i++]=Fi,xi[_i++]=Bi,xi[_i++]=La,La=t;var o=Fi;t=Bi;var u=32-Pe(o)-1;o&=~(1<<u),a+=1;var d=32-Pe(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Fi=1<<32-Pe(n)+u|a<<u|o,Bi=d+t}else Fi=1<<d|a<<u|o,Bi=t}function Nu(t){t.return!==null&&(na(t,1),$p(t,1,0))}function Du(t){for(;t===vl;)vl=Ks[--Qs],Ks[Qs]=null,co=Ks[--Qs],Ks[Qs]=null;for(;t===La;)La=xi[--_i],xi[_i]=null,Bi=xi[--_i],xi[_i]=null,Fi=xi[--_i],xi[_i]=null}function em(t,n){xi[_i++]=Fi,xi[_i++]=Bi,xi[_i++]=La,Fi=n.id,Bi=n.overflow,La=t}var Dn=null,Jt=null,Tt=!1,Oa=null,vi=!1,Uu=Error(s(519));function Pa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(gi(n,t)),Uu}function tm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[fn]=t,n[Nn]=o,a){case"dialog":St("cancel",n),St("close",n);break;case"iframe":case"object":case"embed":St("load",n);break;case"video":case"audio":for(a=0;a<Lo.length;a++)St(Lo[a],n);break;case"source":St("error",n);break;case"img":case"image":case"link":St("error",n),St("load",n);break;case"details":St("toggle",n);break;case"input":St("invalid",n),zn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":St("invalid",n);break;case"textarea":St("invalid",n),Ti(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||_g(n.textContent,a)?(o.popover!=null&&(St("beforetoggle",n),St("toggle",n)),o.onScroll!=null&&St("scroll",n),o.onScrollEnd!=null&&St("scrollend",n),o.onClick!=null&&(n.onclick=$i),n=!0):n=!1,n||Pa(t,!0)}function nm(t){for(Dn=t.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Dn=Dn.return}}function Js(t){if(t!==Dn)return!1;if(!Tt)return nm(t),Tt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Qf(t.type,t.memoizedProps)),a=!a),a&&Jt&&Pa(t),nm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Jt=Rg(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Jt=Rg(t)}else n===27?(n=Jt,Za(t.type)?(t=nd,nd=null,Jt=t):Jt=n):Jt=Dn?yi(t.stateNode.nextSibling):null;return!0}function vs(){Jt=Dn=null,Tt=!1}function Lu(){var t=Oa;return t!==null&&(Kn===null?Kn=t:Kn.push.apply(Kn,t),Oa=null),t}function uo(t){Oa===null?Oa=[t]:Oa.push(t)}var Ou=P(null),Ss=null,ia=null;function Ia(t,n,a){xe(Ou,n._currentValue),n._currentValue=a}function aa(t){t._currentValue=Ou.current,Q(Ou)}function Pu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function Iu(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=u;for(var k=0;k<n.length;k++)if(w.context===n[k]){d.lanes|=a,w=d.alternate,w!==null&&(w.lanes|=a),Pu(d.return,a,t),o||(x=null);break e}d=w.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,d=x.alternate,d!==null&&(d.lanes|=a),Pu(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function $s(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var w=u.type;ii(u.pendingProps.value,x.value)||(t!==null?t.push(w):t=[w])}}else if(u===Ee.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Fo):t=[Fo])}u=u.return}t!==null&&Iu(n,t,a,o),n.flags|=262144}function Sl(t){for(t=t.firstContext;t!==null;){if(!ii(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ys(t){Ss=t,ia=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Un(t){return im(Ss,t)}function yl(t,n){return Ss===null&&ys(t),im(t,n)}function im(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ia===null){if(t===null)throw Error(s(308));ia=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ia=ia.next=n;return a}var Iv=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},zv=r.unstable_scheduleCallback,Fv=r.unstable_NormalPriority,gn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zu(){return{controller:new Iv,data:new Map,refCount:0}}function fo(t){t.refCount--,t.refCount===0&&zv(Fv,function(){t.controller.abort()})}var ho=null,Fu=0,er=0,tr=null;function Bv(t,n){if(ho===null){var a=ho=[];Fu=0,er=Vf(),tr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Fu++,n.then(am,am),n}function am(){if(--Fu===0&&ho!==null){tr!==null&&(tr.status="fulfilled");var t=ho;ho=null,er=0,tr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Hv(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var sm=z.S;z.S=function(t,n){V0=ge(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Bv(t,n),sm!==null&&sm(t,n)};var Ms=P(null);function Bu(){var t=Ms.current;return t!==null?t:Qt.pooledCache}function Ml(t,n){n===null?xe(Ms,Ms.current):xe(Ms,n.pool)}function rm(){var t=Bu();return t===null?null:{parent:gn._currentValue,pool:t}}var nr=Error(s(460)),Hu=Error(s(474)),bl=Error(s(542)),El={then:function(){}};function om(t){return t=t.status,t==="fulfilled"||t==="rejected"}function lm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then($i,$i),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,um(t),t;default:if(typeof n.status=="string")n.then($i,$i);else{if(t=Qt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,um(t),t}throw Es=n,nr}}function bs(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Es=a,nr):a}}var Es=null;function cm(){if(Es===null)throw Error(s(459));var t=Es;return Es=null,t}function um(t){if(t===nr||t===bl)throw Error(s(483))}var ir=null,po=0;function Tl(t){var n=po;return po+=1,ir===null&&(ir=[]),lm(ir,t,n)}function mo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Al(t,n){throw n.$$typeof===g?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function fm(t){function n(ee,Y){if(t){var ie=ee.deletions;ie===null?(ee.deletions=[Y],ee.flags|=16):ie.push(Y)}}function a(ee,Y){if(!t)return null;for(;Y!==null;)n(ee,Y),Y=Y.sibling;return null}function o(ee){for(var Y=new Map;ee!==null;)ee.key!==null?Y.set(ee.key,ee):Y.set(ee.index,ee),ee=ee.sibling;return Y}function u(ee,Y){return ee=ta(ee,Y),ee.index=0,ee.sibling=null,ee}function d(ee,Y,ie){return ee.index=ie,t?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<Y?(ee.flags|=67108866,Y):ie):(ee.flags|=67108866,Y)):(ee.flags|=1048576,Y)}function x(ee){return t&&ee.alternate===null&&(ee.flags|=67108866),ee}function w(ee,Y,ie,Me){return Y===null||Y.tag!==6?(Y=wu(ie,ee.mode,Me),Y.return=ee,Y):(Y=u(Y,ie),Y.return=ee,Y)}function k(ee,Y,ie,Me){var et=ie.type;return et===O?_e(ee,Y,ie.props.children,Me,ie.key):Y!==null&&(Y.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===E&&bs(et)===Y.type)?(Y=u(Y,ie.props),mo(Y,ie),Y.return=ee,Y):(Y=_l(ie.type,ie.key,ie.props,null,ee.mode,Me),mo(Y,ie),Y.return=ee,Y)}function se(ee,Y,ie,Me){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ie.containerInfo||Y.stateNode.implementation!==ie.implementation?(Y=Cu(ie,ee.mode,Me),Y.return=ee,Y):(Y=u(Y,ie.children||[]),Y.return=ee,Y)}function _e(ee,Y,ie,Me,et){return Y===null||Y.tag!==7?(Y=_s(ie,ee.mode,Me,et),Y.return=ee,Y):(Y=u(Y,ie),Y.return=ee,Y)}function be(ee,Y,ie){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=wu(""+Y,ee.mode,ie),Y.return=ee,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case M:return ie=_l(Y.type,Y.key,Y.props,null,ee.mode,ie),mo(ie,Y),ie.return=ee,ie;case T:return Y=Cu(Y,ee.mode,ie),Y.return=ee,Y;case E:return Y=bs(Y),be(ee,Y,ie)}if(X(Y)||K(Y))return Y=_s(Y,ee.mode,ie,null),Y.return=ee,Y;if(typeof Y.then=="function")return be(ee,Tl(Y),ie);if(Y.$$typeof===L)return be(ee,yl(ee,Y),ie);Al(ee,Y)}return null}function ce(ee,Y,ie,Me){var et=Y!==null?Y.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return et!==null?null:w(ee,Y,""+ie,Me);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case M:return ie.key===et?k(ee,Y,ie,Me):null;case T:return ie.key===et?se(ee,Y,ie,Me):null;case E:return ie=bs(ie),ce(ee,Y,ie,Me)}if(X(ie)||K(ie))return et!==null?null:_e(ee,Y,ie,Me,null);if(typeof ie.then=="function")return ce(ee,Y,Tl(ie),Me);if(ie.$$typeof===L)return ce(ee,Y,yl(ee,ie),Me);Al(ee,ie)}return null}function pe(ee,Y,ie,Me,et){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return ee=ee.get(ie)||null,w(Y,ee,""+Me,et);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case M:return ee=ee.get(Me.key===null?ie:Me.key)||null,k(Y,ee,Me,et);case T:return ee=ee.get(Me.key===null?ie:Me.key)||null,se(Y,ee,Me,et);case E:return Me=bs(Me),pe(ee,Y,ie,Me,et)}if(X(Me)||K(Me))return ee=ee.get(ie)||null,_e(Y,ee,Me,et,null);if(typeof Me.then=="function")return pe(ee,Y,ie,Tl(Me),et);if(Me.$$typeof===L)return pe(ee,Y,ie,yl(Y,Me),et);Al(Y,Me)}return null}function We(ee,Y,ie,Me){for(var et=null,Lt=null,Ze=Y,pt=Y=0,Mt=null;Ze!==null&&pt<ie.length;pt++){Ze.index>pt?(Mt=Ze,Ze=null):Mt=Ze.sibling;var Ot=ce(ee,Ze,ie[pt],Me);if(Ot===null){Ze===null&&(Ze=Mt);break}t&&Ze&&Ot.alternate===null&&n(ee,Ze),Y=d(Ot,Y,pt),Lt===null?et=Ot:Lt.sibling=Ot,Lt=Ot,Ze=Mt}if(pt===ie.length)return a(ee,Ze),Tt&&na(ee,pt),et;if(Ze===null){for(;pt<ie.length;pt++)Ze=be(ee,ie[pt],Me),Ze!==null&&(Y=d(Ze,Y,pt),Lt===null?et=Ze:Lt.sibling=Ze,Lt=Ze);return Tt&&na(ee,pt),et}for(Ze=o(Ze);pt<ie.length;pt++)Mt=pe(Ze,ee,pt,ie[pt],Me),Mt!==null&&(t&&Mt.alternate!==null&&Ze.delete(Mt.key===null?pt:Mt.key),Y=d(Mt,Y,pt),Lt===null?et=Mt:Lt.sibling=Mt,Lt=Mt);return t&&Ze.forEach(function(es){return n(ee,es)}),Tt&&na(ee,pt),et}function it(ee,Y,ie,Me){if(ie==null)throw Error(s(151));for(var et=null,Lt=null,Ze=Y,pt=Y=0,Mt=null,Ot=ie.next();Ze!==null&&!Ot.done;pt++,Ot=ie.next()){Ze.index>pt?(Mt=Ze,Ze=null):Mt=Ze.sibling;var es=ce(ee,Ze,Ot.value,Me);if(es===null){Ze===null&&(Ze=Mt);break}t&&Ze&&es.alternate===null&&n(ee,Ze),Y=d(es,Y,pt),Lt===null?et=es:Lt.sibling=es,Lt=es,Ze=Mt}if(Ot.done)return a(ee,Ze),Tt&&na(ee,pt),et;if(Ze===null){for(;!Ot.done;pt++,Ot=ie.next())Ot=be(ee,Ot.value,Me),Ot!==null&&(Y=d(Ot,Y,pt),Lt===null?et=Ot:Lt.sibling=Ot,Lt=Ot);return Tt&&na(ee,pt),et}for(Ze=o(Ze);!Ot.done;pt++,Ot=ie.next())Ot=pe(Ze,ee,pt,Ot.value,Me),Ot!==null&&(t&&Ot.alternate!==null&&Ze.delete(Ot.key===null?pt:Ot.key),Y=d(Ot,Y,pt),Lt===null?et=Ot:Lt.sibling=Ot,Lt=Ot);return t&&Ze.forEach(function(QS){return n(ee,QS)}),Tt&&na(ee,pt),et}function Zt(ee,Y,ie,Me){if(typeof ie=="object"&&ie!==null&&ie.type===O&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case M:e:{for(var et=ie.key;Y!==null;){if(Y.key===et){if(et=ie.type,et===O){if(Y.tag===7){a(ee,Y.sibling),Me=u(Y,ie.props.children),Me.return=ee,ee=Me;break e}}else if(Y.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===E&&bs(et)===Y.type){a(ee,Y.sibling),Me=u(Y,ie.props),mo(Me,ie),Me.return=ee,ee=Me;break e}a(ee,Y);break}else n(ee,Y);Y=Y.sibling}ie.type===O?(Me=_s(ie.props.children,ee.mode,Me,ie.key),Me.return=ee,ee=Me):(Me=_l(ie.type,ie.key,ie.props,null,ee.mode,Me),mo(Me,ie),Me.return=ee,ee=Me)}return x(ee);case T:e:{for(et=ie.key;Y!==null;){if(Y.key===et)if(Y.tag===4&&Y.stateNode.containerInfo===ie.containerInfo&&Y.stateNode.implementation===ie.implementation){a(ee,Y.sibling),Me=u(Y,ie.children||[]),Me.return=ee,ee=Me;break e}else{a(ee,Y);break}else n(ee,Y);Y=Y.sibling}Me=Cu(ie,ee.mode,Me),Me.return=ee,ee=Me}return x(ee);case E:return ie=bs(ie),Zt(ee,Y,ie,Me)}if(X(ie))return We(ee,Y,ie,Me);if(K(ie)){if(et=K(ie),typeof et!="function")throw Error(s(150));return ie=et.call(ie),it(ee,Y,ie,Me)}if(typeof ie.then=="function")return Zt(ee,Y,Tl(ie),Me);if(ie.$$typeof===L)return Zt(ee,Y,yl(ee,ie),Me);Al(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint"?(ie=""+ie,Y!==null&&Y.tag===6?(a(ee,Y.sibling),Me=u(Y,ie),Me.return=ee,ee=Me):(a(ee,Y),Me=wu(ie,ee.mode,Me),Me.return=ee,ee=Me),x(ee)):a(ee,Y)}return function(ee,Y,ie,Me){try{po=0;var et=Zt(ee,Y,ie,Me);return ir=null,et}catch(Ze){if(Ze===nr||Ze===bl)throw Ze;var Lt=ai(29,Ze,null,ee.mode);return Lt.lanes=Me,Lt.return=ee,Lt}finally{}}}var Ts=fm(!0),dm=fm(!1),za=!1;function Gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Vu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ba(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ft&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=xl(t),Zp(t,null,a),n}return gl(t,o,n,a),xl(t)}function go(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,pi(t,a)}}function ku(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var ju=!1;function xo(){if(ju){var t=tr;if(t!==null)throw t}}function _o(t,n,a,o){ju=!1;var u=t.updateQueue;za=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var k=w,se=k.next;k.next=null,x===null?d=se:x.next=se,x=k;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,w=_e.lastBaseUpdate,w!==x&&(w===null?_e.firstBaseUpdate=se:w.next=se,_e.lastBaseUpdate=k))}if(d!==null){var be=u.baseState;x=0,_e=se=k=null,w=d;do{var ce=w.lane&-536870913,pe=ce!==w.lane;if(pe?(yt&ce)===ce:(o&ce)===ce){ce!==0&&ce===er&&(ju=!0),_e!==null&&(_e=_e.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var We=t,it=w;ce=n;var Zt=a;switch(it.tag){case 1:if(We=it.payload,typeof We=="function"){be=We.call(Zt,be,ce);break e}be=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=it.payload,ce=typeof We=="function"?We.call(Zt,be,ce):We,ce==null)break e;be=_({},be,ce);break e;case 2:za=!0}}ce=w.callback,ce!==null&&(t.flags|=64,pe&&(t.flags|=8192),pe=u.callbacks,pe===null?u.callbacks=[ce]:pe.push(ce))}else pe={lane:ce,tag:w.tag,payload:w.payload,callback:w.callback,next:null},_e===null?(se=_e=pe,k=be):_e=_e.next=pe,x|=ce;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;pe=w,w=pe.next,pe.next=null,u.lastBaseUpdate=pe,u.shared.pending=null}}while(!0);_e===null&&(k=be),u.baseState=k,u.firstBaseUpdate=se,u.lastBaseUpdate=_e,d===null&&(u.shared.lanes=0),ja|=x,t.lanes=x,t.memoizedState=be}}function hm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function pm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)hm(a[t],n)}var ar=P(null),Rl=P(0);function mm(t,n){t=ha,xe(Rl,t),xe(ar,n),ha=t|n.baseLanes}function Xu(){xe(Rl,ha),xe(ar,ar.current)}function Wu(){ha=Rl.current,Q(ar),Q(Rl)}var si=P(null),Si=null;function Ha(t){var n=t.alternate;xe(dn,dn.current&1),xe(si,t),Si===null&&(n===null||ar.current!==null||n.memoizedState!==null)&&(Si=t)}function qu(t){xe(dn,dn.current),xe(si,t),Si===null&&(Si=t)}function gm(t){t.tag===22?(xe(dn,dn.current),xe(si,t),Si===null&&(Si=t)):Ga()}function Ga(){xe(dn,dn.current),xe(si,si.current)}function ri(t){Q(si),Si===t&&(Si=null),Q(dn)}var dn=P(0);function wl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ed(a)||td(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var sa=0,ft=null,qt=null,xn=null,Cl=!1,sr=!1,As=!1,Nl=0,vo=0,rr=null,Gv=0;function on(){throw Error(s(321))}function Yu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ii(t[a],n[a]))return!1;return!0}function Zu(t,n,a,o,u,d){return sa=d,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?$m:ff,As=!1,d=a(o,u),As=!1,sr&&(d=_m(n,a,o,u)),xm(t),d}function xm(t){z.H=Mo;var n=qt!==null&&qt.next!==null;if(sa=0,xn=qt=ft=null,Cl=!1,vo=0,rr=null,n)throw Error(s(300));t===null||_n||(t=t.dependencies,t!==null&&Sl(t)&&(_n=!0))}function _m(t,n,a,o){ft=t;var u=0;do{if(sr&&(rr=null),vo=0,sr=!1,25<=u)throw Error(s(301));if(u+=1,xn=qt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=e0,d=n(a,o)}while(sr);return d}function Vv(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?So(n):n,t=t.useState()[0],(qt!==null?qt.memoizedState:null)!==t&&(ft.flags|=1024),n}function Ku(){var t=Nl!==0;return Nl=0,t}function Qu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ju(t){if(Cl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Cl=!1}sa=0,xn=qt=ft=null,sr=!1,vo=Nl=0,rr=null}function kn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?ft.memoizedState=xn=t:xn=xn.next=t,xn}function hn(){if(qt===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=qt.next;var n=xn===null?ft.memoizedState:xn.next;if(n!==null)xn=n,qt=t;else{if(t===null)throw ft.alternate===null?Error(s(467)):Error(s(310));qt=t,t={memoizedState:qt.memoizedState,baseState:qt.baseState,baseQueue:qt.baseQueue,queue:qt.queue,next:null},xn===null?ft.memoizedState=xn=t:xn=xn.next=t}return xn}function Dl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function So(t){var n=vo;return vo+=1,rr===null&&(rr=[]),t=lm(rr,t,n),n=ft,(xn===null?n.memoizedState:xn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?$m:ff),t}function Ul(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return So(t);if(t.$$typeof===L)return Un(t)}throw Error(s(438,String(t)))}function $u(t){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ft.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Dl(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=q;return n.index++,a}function ra(t,n){return typeof n=="function"?n(t):n}function Ll(t){var n=hn();return ef(n,qt,t)}function ef(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var w=x=null,k=null,se=n,_e=!1;do{var be=se.lane&-536870913;if(be!==se.lane?(yt&be)===be:(sa&be)===be){var ce=se.revertLane;if(ce===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null}),be===er&&(_e=!0);else if((sa&ce)===ce){se=se.next,ce===er&&(_e=!0);continue}else be={lane:0,revertLane:se.revertLane,gesture:null,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},k===null?(w=k=be,x=d):k=k.next=be,ft.lanes|=ce,ja|=ce;be=se.action,As&&a(d,be),d=se.hasEagerState?se.eagerState:a(d,be)}else ce={lane:be,revertLane:se.revertLane,gesture:se.gesture,action:se.action,hasEagerState:se.hasEagerState,eagerState:se.eagerState,next:null},k===null?(w=k=ce,x=d):k=k.next=ce,ft.lanes|=be,ja|=be;se=se.next}while(se!==null&&se!==n);if(k===null?x=d:k.next=w,!ii(d,t.memoizedState)&&(_n=!0,_e&&(a=tr,a!==null)))throw a;t.memoizedState=d,t.baseState=x,t.baseQueue=k,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function tf(t){var n=hn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);ii(d,n.memoizedState)||(_n=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function vm(t,n,a){var o=ft,u=hn(),d=Tt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!ii((qt||u).memoizedState,a);if(x&&(u.memoizedState=a,_n=!0),u=u.queue,sf(Mm.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||xn!==null&&xn.memoizedState.tag&1){if(o.flags|=2048,or(9,{destroy:void 0},ym.bind(null,o,u,a,n),null),Qt===null)throw Error(s(349));d||(sa&127)!==0||Sm(o,n,a)}return a}function Sm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=Dl(),ft.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function ym(t,n,a,o){n.value=a,n.getSnapshot=o,bm(n)&&Em(t)}function Mm(t,n,a){return a(function(){bm(n)&&Em(t)})}function bm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ii(t,a)}catch{return!0}}function Em(t){var n=xs(t,2);n!==null&&Qn(n,t,2)}function nf(t){var n=kn();if(typeof t=="function"){var a=t;if(t=a(),As){Oe(!0);try{a()}finally{Oe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},n}function Tm(t,n,a,o){return t.baseState=a,ef(t,qt,typeof o=="function"?o:ra)}function kv(t,n,a,o,u){if(Il(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};z.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Am(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Am(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=z.T,x={};z.T=x;try{var w=a(u,o),k=z.S;k!==null&&k(x,w),Rm(t,n,w)}catch(se){af(t,n,se)}finally{d!==null&&x.types!==null&&(d.types=x.types),z.T=d}}else try{d=a(u,o),Rm(t,n,d)}catch(se){af(t,n,se)}}function Rm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){wm(t,n,o)},function(o){return af(t,n,o)}):wm(t,n,a)}function wm(t,n,a){n.status="fulfilled",n.value=a,Cm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Am(t,a)))}function af(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Cm(n),n=n.next;while(n!==o)}t.action=null}function Cm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Nm(t,n){return n}function Dm(t,n){if(Tt){var a=Qt.formState;if(a!==null){e:{var o=ft;if(Tt){if(Jt){t:{for(var u=Jt,d=vi;u.nodeType!==8;){if(!d){u=null;break t}if(u=yi(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Jt=yi(u.nextSibling),o=u.data==="F!";break e}}Pa(o)}o=!1}o&&(n=a[0])}}return a=kn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Nm,lastRenderedState:n},a.queue=o,a=Km.bind(null,ft,o),o.dispatch=a,o=nf(!1),d=uf.bind(null,ft,!1,o.queue),o=kn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=kv.bind(null,ft,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Um(t){var n=hn();return Lm(n,qt,t)}function Lm(t,n,a){if(n=ef(t,n,Nm)[0],t=Ll(ra)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=So(n)}catch(x){throw x===nr?bl:x}else o=n;n=hn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ft.flags|=2048,or(9,{destroy:void 0},jv.bind(null,u,a),null)),[o,d,t]}function jv(t,n){t.action=n}function Om(t){var n=hn(),a=qt;if(a!==null)return Lm(n,a,t);hn(),n=n.memoizedState,a=hn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function or(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ft.updateQueue,n===null&&(n=Dl(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Pm(){return hn().memoizedState}function Ol(t,n,a,o){var u=kn();ft.flags|=t,u.memoizedState=or(1|n,{destroy:void 0},a,o===void 0?null:o)}function Pl(t,n,a,o){var u=hn();o=o===void 0?null:o;var d=u.memoizedState.inst;qt!==null&&o!==null&&Yu(o,qt.memoizedState.deps)?u.memoizedState=or(n,d,a,o):(ft.flags|=t,u.memoizedState=or(1|n,d,a,o))}function Im(t,n){Ol(8390656,8,t,n)}function sf(t,n){Pl(2048,8,t,n)}function Xv(t){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=Dl(),ft.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function zm(t){var n=hn().memoizedState;return Xv({ref:n,nextImpl:t}),function(){if((Ft&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Fm(t,n){return Pl(4,2,t,n)}function Bm(t,n){return Pl(4,4,t,n)}function Hm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Gm(t,n,a){a=a!=null?a.concat([t]):null,Pl(4,4,Hm.bind(null,n,t),a)}function rf(){}function Vm(t,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Yu(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function km(t,n){var a=hn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Yu(n,o[1]))return o[0];if(o=t(),As){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[o,n],o}function of(t,n,a){return a===void 0||(sa&1073741824)!==0&&(yt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=j0(),ft.lanes|=t,ja|=t,a)}function jm(t,n,a,o){return ii(a,n)?a:ar.current!==null?(t=of(t,a,o),ii(t,n)||(_n=!0),t):(sa&42)===0||(sa&1073741824)!==0&&(yt&261930)===0?(_n=!0,t.memoizedState=a):(t=j0(),ft.lanes|=t,ja|=t,n)}function Xm(t,n,a,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var x=z.T,w={};z.T=w,uf(t,!1,n,a);try{var k=u(),se=z.S;if(se!==null&&se(w,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var _e=Hv(k,o);yo(t,n,_e,ci(t))}else yo(t,n,o,ci(t))}catch(be){yo(t,n,{then:function(){},status:"rejected",reason:be},ci())}finally{G.p=d,x!==null&&w.types!==null&&(x.types=w.types),z.T=x}}function Wv(){}function lf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Wm(t).queue;Xm(t,u,n,B,a===null?Wv:function(){return qm(t),a(o)})}function Wm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:B},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function qm(t){var n=Wm(t);n.next===null&&(n=t.alternate.memoizedState),yo(t,n.next.queue,{},ci())}function cf(){return Un(Fo)}function Ym(){return hn().memoizedState}function Zm(){return hn().memoizedState}function qv(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ci();t=Fa(a);var o=Ba(n,t,a);o!==null&&(Qn(o,n,a),go(o,n,a)),n={cache:zu()},t.payload=n;return}n=n.return}}function Yv(t,n,a){var o=ci();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Il(t)?Qm(n,a):(a=Au(t,n,a,o),a!==null&&(Qn(a,t,o),Jm(a,n,o)))}function Km(t,n,a){var o=ci();yo(t,n,a,o)}function yo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Il(t))Qm(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,w=d(x,a);if(u.hasEagerState=!0,u.eagerState=w,ii(w,x))return gl(t,n,u,0),Qt===null&&ml(),!1}catch{}finally{}if(a=Au(t,n,u,o),a!==null)return Qn(a,t,o),Jm(a,n,o),!0}return!1}function uf(t,n,a,o){if(o={lane:2,revertLane:Vf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Il(t)){if(n)throw Error(s(479))}else n=Au(t,a,o,2),n!==null&&Qn(n,t,2)}function Il(t){var n=t.alternate;return t===ft||n!==null&&n===ft}function Qm(t,n){sr=Cl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Jm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,pi(t,a)}}var Mo={readContext:Un,use:Ul,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};Mo.useEffectEvent=on;var $m={readContext:Un,use:Ul,useCallback:function(t,n){return kn().memoizedState=[t,n===void 0?null:n],t},useContext:Un,useEffect:Im,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Ol(4194308,4,Hm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Ol(4194308,4,t,n)},useInsertionEffect:function(t,n){Ol(4,2,t,n)},useMemo:function(t,n){var a=kn();n=n===void 0?null:n;var o=t();if(As){Oe(!0);try{t()}finally{Oe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=kn();if(a!==void 0){var u=a(n);if(As){Oe(!0);try{a(n)}finally{Oe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Yv.bind(null,ft,t),[o.memoizedState,t]},useRef:function(t){var n=kn();return t={current:t},n.memoizedState=t},useState:function(t){t=nf(t);var n=t.queue,a=Km.bind(null,ft,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:rf,useDeferredValue:function(t,n){var a=kn();return of(a,t,n)},useTransition:function(){var t=nf(!1);return t=Xm.bind(null,ft,t.queue,!0,!1),kn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ft,u=kn();if(Tt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qt===null)throw Error(s(349));(yt&127)!==0||Sm(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Im(Mm.bind(null,o,d,t),[t]),o.flags|=2048,or(9,{destroy:void 0},ym.bind(null,o,d,a,n),null),a},useId:function(){var t=kn(),n=Qt.identifierPrefix;if(Tt){var a=Bi,o=Fi;a=(o&~(1<<32-Pe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Nl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Gv++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:cf,useFormState:Dm,useActionState:Dm,useOptimistic:function(t){var n=kn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=uf.bind(null,ft,!0,a),a.dispatch=n,[t,n]},useMemoCache:$u,useCacheRefresh:function(){return kn().memoizedState=qv.bind(null,ft)},useEffectEvent:function(t){var n=kn(),a={impl:t};return n.memoizedState=a,function(){if((Ft&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ff={readContext:Un,use:Ul,useCallback:Vm,useContext:Un,useEffect:sf,useImperativeHandle:Gm,useInsertionEffect:Fm,useLayoutEffect:Bm,useMemo:km,useReducer:Ll,useRef:Pm,useState:function(){return Ll(ra)},useDebugValue:rf,useDeferredValue:function(t,n){var a=hn();return jm(a,qt.memoizedState,t,n)},useTransition:function(){var t=Ll(ra)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:So(t),n]},useSyncExternalStore:vm,useId:Ym,useHostTransitionStatus:cf,useFormState:Um,useActionState:Um,useOptimistic:function(t,n){var a=hn();return Tm(a,qt,t,n)},useMemoCache:$u,useCacheRefresh:Zm};ff.useEffectEvent=zm;var e0={readContext:Un,use:Ul,useCallback:Vm,useContext:Un,useEffect:sf,useImperativeHandle:Gm,useInsertionEffect:Fm,useLayoutEffect:Bm,useMemo:km,useReducer:tf,useRef:Pm,useState:function(){return tf(ra)},useDebugValue:rf,useDeferredValue:function(t,n){var a=hn();return qt===null?of(a,t,n):jm(a,qt.memoizedState,t,n)},useTransition:function(){var t=tf(ra)[0],n=hn().memoizedState;return[typeof t=="boolean"?t:So(t),n]},useSyncExternalStore:vm,useId:Ym,useHostTransitionStatus:cf,useFormState:Om,useActionState:Om,useOptimistic:function(t,n){var a=hn();return qt!==null?Tm(a,qt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:$u,useCacheRefresh:Zm};e0.useEffectEvent=zm;function df(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var hf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ci(),u=Fa(o);u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(Qn(n,t,o),go(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ci(),u=Fa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ba(t,u,o),n!==null&&(Qn(n,t,o),go(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ci(),o=Fa(a);o.tag=2,n!=null&&(o.callback=n),n=Ba(t,o,a),n!==null&&(Qn(n,t,a),go(n,t,a))}};function t0(t,n,a,o,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!oo(a,o)||!oo(u,d):!0}function n0(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&hf.enqueueReplaceState(n,n.state,null)}function Rs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function i0(t){pl(t)}function a0(t){console.error(t)}function s0(t){pl(t)}function zl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function r0(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function pf(t,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){zl(t,n)},a}function o0(t){return t=Fa(t),t.tag=3,t}function l0(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){r0(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){r0(n,a,o),typeof u!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function Zv(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&$s(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 31:case 13:return Si===null?Zl():a.alternate===null&&ln===0&&(ln=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===El?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Bf(t,o,u)),!1;case 22:return a.flags|=65536,o===El?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Bf(t,o,u)),!1}throw Error(s(435,a.tag))}return Bf(t,o,u),Zl(),!1}if(Tt)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Uu&&(t=Error(s(422),{cause:o}),uo(gi(t,a)))):(o!==Uu&&(n=Error(s(423),{cause:o}),uo(gi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=gi(o,a),u=pf(t.stateNode,o,u),ku(t,u),ln!==4&&(ln=2)),!1;var d=Error(s(520),{cause:o});if(d=gi(d,a),No===null?No=[d]:No.push(d),ln!==4&&(ln=2),n===null)return!0;o=gi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=pf(a.stateNode,o,t),ku(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Xa===null||!Xa.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=o0(u),l0(u,t,a,o),ku(a,u),!1}a=a.return}while(a!==null);return!1}var mf=Error(s(461)),_n=!1;function Ln(t,n,a,o){n.child=t===null?dm(n,null,a,o):Ts(n,t.child,a,o)}function c0(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var x={};for(var w in o)w!=="ref"&&(x[w]=o[w])}else x=o;return ys(n),o=Zu(t,n,a,x,d,u),w=Ku(),t!==null&&!_n?(Qu(t,n,u),oa(t,n,u)):(Tt&&w&&Nu(n),n.flags|=1,Ln(t,n,o,u),n.child)}function u0(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Ru(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,f0(t,n,d,o,u)):(t=_l(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!bf(t,u)){var x=d.memoizedProps;if(a=a.compare,a=a!==null?a:oo,a(x,o)&&t.ref===n.ref)return oa(t,n,u)}return n.flags|=1,t=ta(d,o),t.ref=n.ref,t.return=n,n.child=t}function f0(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(oo(d,o)&&t.ref===n.ref)if(_n=!1,n.pendingProps=o=d,bf(t,u))(t.flags&131072)!==0&&(_n=!0);else return n.lanes=t.lanes,oa(t,n,u)}return gf(t,n,a,o,u)}function d0(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return h0(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ml(n,d!==null?d.cachePool:null),d!==null?mm(n,d):Xu(),gm(n);else return o=n.lanes=536870912,h0(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Ml(n,d.cachePool),mm(n,d),Ga(),n.memoizedState=null):(t!==null&&Ml(n,null),Xu(),Ga());return Ln(t,n,u,a),n.child}function bo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function h0(t,n,a,o,u){var d=Bu();return d=d===null?null:{parent:gn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Ml(n,null),Xu(),gm(n),t!==null&&$s(t,n,o,!0),n.childLanes=u,null}function Fl(t,n){return n=Hl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function p0(t,n,a){return Ts(n,t.child,null,a),t=Fl(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function Kv(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Tt){if(o.mode==="hidden")return t=Fl(n,o),n.lanes=536870912,bo(null,t);if(qu(n),(t=Jt)?(t=Ag(t,vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Fi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=Qp(t),a.return=n,n.child=a,Dn=n,Jt=null)):t=null,t===null)throw Pa(n);return n.lanes=536870912,null}return Fl(n,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(qu(n),u)if(n.flags&256)n.flags&=-257,n=p0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(_n||$s(t,n,a,!1),u=(a&t.childLanes)!==0,_n||u){if(o=Qt,o!==null&&(x=ei(o,a),x!==0&&x!==d.retryLane))throw d.retryLane=x,xs(t,x),Qn(o,t,x),mf;Zl(),n=p0(t,n,a)}else t=d.treeContext,Jt=yi(x.nextSibling),Dn=n,Tt=!0,Oa=null,vi=!1,t!==null&&em(n,t),n=Fl(n,o),n.flags|=4096;return n}return t=ta(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function gf(t,n,a,o,u){return ys(n),a=Zu(t,n,a,o,void 0,u),o=Ku(),t!==null&&!_n?(Qu(t,n,u),oa(t,n,u)):(Tt&&o&&Nu(n),n.flags|=1,Ln(t,n,a,u),n.child)}function m0(t,n,a,o,u,d){return ys(n),n.updateQueue=null,a=_m(n,o,a,u),xm(t),o=Ku(),t!==null&&!_n?(Qu(t,n,d),oa(t,n,d)):(Tt&&o&&Nu(n),n.flags|=1,Ln(t,n,a,d),n.child)}function g0(t,n,a,o,u){if(ys(n),n.stateNode===null){var d=Zs,x=a.contextType;typeof x=="object"&&x!==null&&(d=Un(x)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=hf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Gu(n),x=a.contextType,d.context=typeof x=="object"&&x!==null?Un(x):Zs,d.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(df(n,a,x,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&hf.enqueueReplaceState(d,d.state,null),_o(n,o,d,u),xo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var w=n.memoizedProps,k=Rs(a,w);d.props=k;var se=d.context,_e=a.contextType;x=Zs,typeof _e=="object"&&_e!==null&&(x=Un(_e));var be=a.getDerivedStateFromProps;_e=typeof be=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,_e||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||se!==x)&&n0(n,d,o,x),za=!1;var ce=n.memoizedState;d.state=ce,_o(n,o,d,u),xo(),se=n.memoizedState,w||ce!==se||za?(typeof be=="function"&&(df(n,a,be,o),se=n.memoizedState),(k=za||t0(n,a,k,o,ce,se,x))?(_e||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=se),d.props=o,d.state=se,d.context=x,o=k):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Vu(t,n),x=n.memoizedProps,_e=Rs(a,x),d.props=_e,be=n.pendingProps,ce=d.context,se=a.contextType,k=Zs,typeof se=="object"&&se!==null&&(k=Un(se)),w=a.getDerivedStateFromProps,(se=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==be||ce!==k)&&n0(n,d,o,k),za=!1,ce=n.memoizedState,d.state=ce,_o(n,o,d,u),xo();var pe=n.memoizedState;x!==be||ce!==pe||za||t!==null&&t.dependencies!==null&&Sl(t.dependencies)?(typeof w=="function"&&(df(n,a,w,o),pe=n.memoizedState),(_e=za||t0(n,a,_e,o,ce,pe,k)||t!==null&&t.dependencies!==null&&Sl(t.dependencies))?(se||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,pe,k),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,pe,k)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=pe),d.props=o,d.state=pe,d.context=k,o=_e):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ce===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ce===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,Bl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Ts(n,t.child,null,u),n.child=Ts(n,null,a,u)):Ln(t,n,a,u),n.memoizedState=d.state,t=n.child):t=oa(t,n,u),t}function x0(t,n,a,o){return vs(),n.flags|=256,Ln(t,n,a,o),n.child}var xf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function _f(t){return{baseLanes:t,cachePool:rm()}}function vf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function _0(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(dn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(Tt){if(u?Ha(n):Ga(),(t=Jt)?(t=Ag(t,vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Fi,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=Qp(t),a.return=n,n.child=a,Dn=n,Jt=null)):t=null,t===null)throw Pa(n);return td(t)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(Ga(),u=n.mode,w=Hl({mode:"hidden",children:w},u),o=_s(o,u,a,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=_f(a),o.childLanes=vf(t,x,a),n.memoizedState=xf,bo(null,o)):(Ha(n),Sf(n,w))}var k=t.memoizedState;if(k!==null&&(w=k.dehydrated,w!==null)){if(d)n.flags&256?(Ha(n),n.flags&=-257,n=yf(t,n,a)):n.memoizedState!==null?(Ga(),n.child=t.child,n.flags|=128,n=null):(Ga(),w=o.fallback,u=n.mode,o=Hl({mode:"visible",children:o.children},u),w=_s(w,u,a,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,Ts(n,t.child,null,a),o=n.child,o.memoizedState=_f(a),o.childLanes=vf(t,x,a),n.memoizedState=xf,n=bo(null,o));else if(Ha(n),td(w)){if(x=w.nextSibling&&w.nextSibling.dataset,x)var se=x.dgst;x=se,o=Error(s(419)),o.stack="",o.digest=x,uo({value:o,source:null,stack:null}),n=yf(t,n,a)}else if(_n||$s(t,n,a,!1),x=(a&t.childLanes)!==0,_n||x){if(x=Qt,x!==null&&(o=ei(x,a),o!==0&&o!==k.retryLane))throw k.retryLane=o,xs(t,o),Qn(x,t,o),mf;ed(w)||Zl(),n=yf(t,n,a)}else ed(w)?(n.flags|=192,n.child=t.child,n=null):(t=k.treeContext,Jt=yi(w.nextSibling),Dn=n,Tt=!0,Oa=null,vi=!1,t!==null&&em(n,t),n=Sf(n,o.children),n.flags|=4096);return n}return u?(Ga(),w=o.fallback,u=n.mode,k=t.child,se=k.sibling,o=ta(k,{mode:"hidden",children:o.children}),o.subtreeFlags=k.subtreeFlags&65011712,se!==null?w=ta(se,w):(w=_s(w,u,a,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,bo(null,o),o=n.child,w=t.child.memoizedState,w===null?w=_f(a):(u=w.cachePool,u!==null?(k=gn._currentValue,u=u.parent!==k?{parent:k,pool:k}:u):u=rm(),w={baseLanes:w.baseLanes|a,cachePool:u}),o.memoizedState=w,o.childLanes=vf(t,x,a),n.memoizedState=xf,bo(t.child,o)):(Ha(n),a=t.child,t=a.sibling,a=ta(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Sf(t,n){return n=Hl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Hl(t,n){return t=ai(22,t,null,n),t.lanes=0,t}function yf(t,n,a){return Ts(n,t.child,null,a),t=Sf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function v0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),Pu(t.return,n,a)}function Mf(t,n,a,o,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=d)}function S0(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=dn.current,w=(x&2)!==0;if(w?(x=x&1|2,n.flags|=128):x&=1,xe(dn,x),Ln(t,n,o,a),o=Tt?co:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&v0(t,a,n);else if(t.tag===19)v0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&wl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Mf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&wl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Mf(n,!0,a,null,d,o);break;case"together":Mf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function oa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(t!==null){if($s(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=ta(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ta(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function bf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Sl(t)))}function Qv(t,n,a){switch(n.tag){case 3:Te(n,n.stateNode.containerInfo),Ia(n,gn,t.memoizedState.cache),vs();break;case 27:case 5:tt(n);break;case 4:Te(n,n.stateNode.containerInfo);break;case 10:Ia(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,qu(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ha(n),n.flags|=128,null):(a&n.child.childLanes)!==0?_0(t,n,a):(Ha(n),t=oa(t,n,a),t!==null?t.sibling:null);Ha(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||($s(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return S0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(dn,dn.current),o)break;return null;case 22:return n.lanes=0,d0(t,n,a,n.pendingProps);case 24:Ia(n,gn,t.memoizedState.cache)}return oa(t,n,a)}function y0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)_n=!0;else{if(!bf(t,a)&&(n.flags&128)===0)return _n=!1,Qv(t,n,a);_n=(t.flags&131072)!==0}else _n=!1,Tt&&(n.flags&1048576)!==0&&$p(n,co,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=bs(n.elementType),n.type=t,typeof t=="function")Ru(t)?(o=Rs(t,o),n.tag=1,n=g0(null,n,t,o,a)):(n.tag=0,n=gf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=c0(null,n,t,o,a);break e}else if(u===F){n.tag=14,n=u0(null,n,t,o,a);break e}}throw n=he(t)||t,Error(s(306,n,""))}}return n;case 0:return gf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Rs(o,n.pendingProps),g0(t,n,o,u,a);case 3:e:{if(Te(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Vu(t,n),_o(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Ia(n,gn,o),o!==d.cache&&Iu(n,[gn],a,!0),xo(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=x0(t,n,o,a);break e}else if(o!==u){u=gi(Error(s(424)),n),uo(u),n=x0(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=yi(t.firstChild),Dn=n,Tt=!0,Oa=null,vi=!0,a=dm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(vs(),o===u){n=oa(t,n,a);break e}Ln(t,n,o,a)}n=n.child}return n;case 26:return Bl(t,n),t===null?(a=Ug(n.type,null,n.pendingProps,null))?n.memoizedState=a:Tt||(a=n.type,t=n.pendingProps,o=nc($.current).createElement(a),o[fn]=n,o[Nn]=t,On(o,a,t),mn(o),n.stateNode=o):n.memoizedState=Ug(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return tt(n),t===null&&Tt&&(o=n.stateNode=Cg(n.type,n.pendingProps,$.current),Dn=n,vi=!0,u=Jt,Za(n.type)?(nd=u,Jt=yi(o.firstChild)):Jt=u),Ln(t,n,n.pendingProps.children,a),Bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Tt&&((u=o=Jt)&&(o=RS(o,n.type,n.pendingProps,vi),o!==null?(n.stateNode=o,Dn=n,Jt=yi(o.firstChild),vi=!1,u=!0):u=!1),u||Pa(n)),tt(n),u=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,Qf(u,d)?o=null:x!==null&&Qf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Zu(t,n,Vv,null,null,a),Fo._currentValue=u),Bl(t,n),Ln(t,n,o,a),n.child;case 6:return t===null&&Tt&&((t=a=Jt)&&(a=wS(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Dn=n,Jt=null,t=!0):t=!1),t||Pa(n)),null;case 13:return _0(t,n,a);case 4:return Te(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ts(n,null,o,a):Ln(t,n,o,a),n.child;case 11:return c0(t,n,n.type,n.pendingProps,a);case 7:return Ln(t,n,n.pendingProps,a),n.child;case 8:return Ln(t,n,n.pendingProps.children,a),n.child;case 12:return Ln(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ia(n,n.type,o.value),Ln(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ys(n),u=Un(u),o=o(u),n.flags|=1,Ln(t,n,o,a),n.child;case 14:return u0(t,n,n.type,n.pendingProps,a);case 15:return f0(t,n,n.type,n.pendingProps,a);case 19:return S0(t,n,a);case 31:return Kv(t,n,a);case 22:return d0(t,n,a,n.pendingProps);case 24:return ys(n),o=Un(gn),t===null?(u=Bu(),u===null&&(u=Qt,d=zu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Gu(n),Ia(n,gn,u)):((t.lanes&a)!==0&&(Vu(t,n),_o(n,null,null,a),xo()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ia(n,gn,o)):(o=d.cache,Ia(n,gn,o),o!==u.cache&&Iu(n,[gn],a,!0))),Ln(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function la(t){t.flags|=4}function Ef(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Y0())t.flags|=8192;else throw Es=El,Hu}else t.flags&=-16777217}function M0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!zg(n))if(Y0())t.flags|=8192;else throw Es=El,Hu}function Gl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Re():536870912,t.lanes|=n,fr|=n)}function Eo(t,n){if(!Tt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function $t(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Jv(t,n,a){var o=n.pendingProps;switch(Du(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(n),null;case 1:return $t(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),aa(gn),Ie(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Js(n)?la(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Lu())),$t(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(la(n),d!==null?($t(n),M0(n,d)):($t(n),Ef(n,u,null,o,a))):d?d!==t.memoizedState?(la(n),$t(n),M0(n,d)):($t(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&la(n),$t(n),Ef(n,u,t,o,a)),null;case 27:if(Fe(n),a=$.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $t(n),null}t=ye.current,Js(n)?tm(n):(t=Cg(u,o,a),n.stateNode=t,la(n))}return $t(n),null;case 5:if(Fe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return $t(n),null}if(d=ye.current,Js(n))tm(n);else{var x=nc($.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[fn]=n,d[Nn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(On(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&la(n)}}return $t(n),Ef(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&la(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=$.current,Js(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[fn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||_g(t.nodeValue,a)),t||Pa(n,!0)}else t=nc(t).createTextNode(o),t[fn]=n,n.stateNode=t}return $t(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Js(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[fn]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),t=!1}else a=Lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $t(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Js(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[fn]=n}else vs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),u=!1}else u=Lu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),$t(n),null);case 4:return Ie(),t===null&&Wf(n.stateNode.containerInfo),$t(n),null;case 10:return aa(n.type),$t(n),null;case 19:if(Q(dn),o=n.memoizedState,o===null)return $t(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Eo(o,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=wl(t),d!==null){for(n.flags|=128,Eo(o,!1),t=d.updateQueue,n.updateQueue=t,Gl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Kp(a,t),a=a.sibling;return xe(dn,dn.current&1|2),Tt&&na(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&ge()>Wl&&(n.flags|=128,u=!0,Eo(o,!1),n.lanes=4194304)}else{if(!u)if(t=wl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Gl(n,t),Eo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Tt)return $t(n),null}else 2*ge()-o.renderingStartTime>Wl&&a!==536870912&&(n.flags|=128,u=!0,Eo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ge(),t.sibling=null,a=dn.current,xe(dn,u?a&1|2:a&1),Tt&&na(n,o.treeForkCount),t):($t(n),null);case 22:case 23:return ri(n),Wu(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&($t(n),n.subtreeFlags&6&&(n.flags|=8192)):$t(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Q(Ms),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),aa(gn),$t(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function $v(t,n){switch(Du(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return aa(gn),Ie(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Fe(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(s(340));vs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));vs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Q(dn),null;case 4:return Ie(),null;case 10:return aa(n.type),null;case 22:case 23:return ri(n),Wu(),t!==null&&Q(Ms),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return aa(gn),null;case 25:return null;default:return null}}function b0(t,n){switch(Du(n),n.tag){case 3:aa(gn),Ie();break;case 26:case 27:case 5:Fe(n);break;case 4:Ie();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:Q(dn);break;case 10:aa(n.type);break;case 22:case 23:ri(n),Wu(),t!==null&&Q(Ms);break;case 24:aa(gn)}}function To(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,x=a.inst;o=d(),x.destroy=o}a=a.next}while(a!==u)}}catch(w){Xt(n,n.return,w)}}function Va(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var x=o.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,u=n;var k=a,se=w;try{se()}catch(_e){Xt(u,k,_e)}}}o=o.next}while(o!==d)}}catch(_e){Xt(n,n.return,_e)}}function E0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{pm(n,a)}catch(o){Xt(t,t.return,o)}}}function T0(t,n,a){a.props=Rs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Xt(t,n,o)}}function Ao(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Xt(t,n,u)}}function Hi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Xt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Xt(t,n,u)}else a.current=null}function A0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Xt(t,t.return,u)}}function Tf(t,n,a){try{var o=t.stateNode;yS(o,t.type,a,n),o[Nn]=n}catch(u){Xt(t,t.return,u)}}function R0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Za(t.type)||t.tag===4}function Af(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||R0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Za(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=$i));else if(o!==4&&(o===27&&Za(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Rf(t,n,a),t=t.sibling;t!==null;)Rf(t,n,a),t=t.sibling}function Vl(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Za(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Vl(t,n,a),t=t.sibling;t!==null;)Vl(t,n,a),t=t.sibling}function w0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);On(n,o,a),n[fn]=t,n[Nn]=a}catch(d){Xt(t,t.return,d)}}var ca=!1,vn=!1,wf=!1,C0=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function eS(t,n){if(t=t.containerInfo,Zf=cc,t=Gp(t),Su(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var x=0,w=-1,k=-1,se=0,_e=0,be=t,ce=null;t:for(;;){for(var pe;be!==a||u!==0&&be.nodeType!==3||(w=x+u),be!==d||o!==0&&be.nodeType!==3||(k=x+o),be.nodeType===3&&(x+=be.nodeValue.length),(pe=be.firstChild)!==null;)ce=be,be=pe;for(;;){if(be===t)break t;if(ce===a&&++se===u&&(w=x),ce===d&&++_e===o&&(k=x),(pe=be.nextSibling)!==null)break;be=ce,ce=be.parentNode}be=pe}a=w===-1||k===-1?null:{start:w,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Kf={focusedElem:t,selectionRange:a},cc=!1,Rn=n;Rn!==null;)if(n=Rn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Rn=t;else for(;Rn!==null;){switch(n=Rn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var We=Rs(a.type,u);t=o.getSnapshotBeforeUpdate(We,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(it){Xt(a,a.return,it)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)$f(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":$f(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,Rn=t;break}Rn=n.return}}function N0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:fa(t,a),o&4&&To(5,a);break;case 1:if(fa(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Xt(a,a.return,x)}else{var u=Rs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Xt(a,a.return,x)}}o&64&&E0(a),o&512&&Ao(a,a.return);break;case 3:if(fa(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{pm(t,n)}catch(x){Xt(a,a.return,x)}}break;case 27:n===null&&o&4&&w0(a);case 26:case 5:fa(t,a),n===null&&o&4&&A0(a),o&512&&Ao(a,a.return);break;case 12:fa(t,a);break;case 31:fa(t,a),o&4&&L0(t,a);break;case 13:fa(t,a),o&4&&O0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=cS.bind(null,a),CS(t,a))));break;case 22:if(o=a.memoizedState!==null||ca,!o){n=n!==null&&n.memoizedState!==null||vn,u=ca;var d=vn;ca=o,(vn=n)&&!d?da(t,a,(a.subtreeFlags&8772)!==0):fa(t,a),ca=u,vn=d}break;case 30:break;default:fa(t,a)}}function D0(t){var n=t.alternate;n!==null&&(t.alternate=null,D0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&$r(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,qn=!1;function ua(t,n,a){for(a=a.child;a!==null;)U0(t,n,a),a=a.sibling}function U0(t,n,a){if(me&&typeof me.onCommitFiberUnmount=="function")try{me.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 26:vn||Hi(a,n),ua(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:vn||Hi(a,n);var o=nn,u=qn;Za(a.type)&&(nn=a.stateNode,qn=!1),ua(t,n,a),Po(a.stateNode),nn=o,qn=u;break;case 5:vn||Hi(a,n);case 6:if(o=nn,u=qn,nn=null,ua(t,n,a),nn=o,qn=u,nn!==null)if(qn)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode)}catch(d){Xt(a,n,d)}else try{nn.removeChild(a.stateNode)}catch(d){Xt(a,n,d)}break;case 18:nn!==null&&(qn?(t=nn,Eg(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),vr(t)):Eg(nn,a.stateNode));break;case 4:o=nn,u=qn,nn=a.stateNode.containerInfo,qn=!0,ua(t,n,a),nn=o,qn=u;break;case 0:case 11:case 14:case 15:Va(2,a,n),vn||Va(4,a,n),ua(t,n,a);break;case 1:vn||(Hi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&T0(a,n,o)),ua(t,n,a);break;case 21:ua(t,n,a);break;case 22:vn=(o=vn)||a.memoizedState!==null,ua(t,n,a),vn=o;break;default:ua(t,n,a)}}function L0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{vr(t)}catch(a){Xt(n,n.return,a)}}}function O0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{vr(t)}catch(a){Xt(n,n.return,a)}}function tS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new C0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new C0),n;default:throw Error(s(435,t.tag))}}function kl(t,n){var a=tS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=uS.bind(null,t,o);o.then(u,u)}})}function Yn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,x=n,w=x;e:for(;w!==null;){switch(w.tag){case 27:if(Za(w.type)){nn=w.stateNode,qn=!1;break e}break;case 5:nn=w.stateNode,qn=!1;break e;case 3:case 4:nn=w.stateNode.containerInfo,qn=!0;break e}w=w.return}if(nn===null)throw Error(s(160));U0(d,x,u),nn=null,qn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)P0(n,t),n=n.sibling}var wi=null;function P0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Yn(n,t),Zn(t),o&4&&(Va(3,t,t.return),To(3,t),Va(5,t,t.return));break;case 1:Yn(n,t),Zn(t),o&512&&(vn||a===null||Hi(a,a.return)),o&64&&ca&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=wi;if(Yn(n,t),Zn(t),o&512&&(vn||a===null||Hi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Ra]||d[fn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),On(d,o,a),d[fn]=t,mn(d),o=d;break e;case"link":var x=Pg("link","href",u).get(o+(a.href||""));if(x){for(var w=0;w<x.length;w++)if(d=x[w],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(w,1);break t}}d=u.createElement(o),On(d,o,a),u.head.appendChild(d);break;case"meta":if(x=Pg("meta","content",u).get(o+(a.content||""))){for(w=0;w<x.length;w++)if(d=x[w],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(w,1);break t}}d=u.createElement(o),On(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[fn]=t,mn(d),o=d}t.stateNode=o}else Ig(u,t.type,t.stateNode);else t.stateNode=Og(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?Ig(u,t.type,t.stateNode):Og(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Tf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,t),Zn(t),o&512&&(vn||a===null||Hi(a,a.return)),a!==null&&o&4&&Tf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,t),Zn(t),o&512&&(vn||a===null||Hi(a,a.return)),t.flags&32){u=t.stateNode;try{ni(u,"")}catch(We){Xt(t,t.return,We)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Tf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(wf=!0);break;case 6:if(Yn(n,t),Zn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(We){Xt(t,t.return,We)}}break;case 3:if(sc=null,u=wi,wi=ic(n.containerInfo),Yn(n,t),wi=u,Zn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{vr(n.containerInfo)}catch(We){Xt(t,t.return,We)}wf&&(wf=!1,I0(t));break;case 4:o=wi,wi=ic(t.stateNode.containerInfo),Yn(n,t),Zn(t),wi=o;break;case 12:Yn(n,t),Zn(t);break;case 31:Yn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,kl(t,o)));break;case 13:Yn(n,t),Zn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Xl=ge()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,kl(t,o)));break;case 22:u=t.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,se=ca,_e=vn;if(ca=se||u,vn=_e||k,Yn(n,t),vn=_e,ca=se,Zn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||k||ca||vn||ws(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(d=k.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{w=k.stateNode;var be=k.memoizedProps.style,ce=be!=null&&be.hasOwnProperty("display")?be.display:null;w.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(We){Xt(k,k.return,We)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(We){Xt(k,k.return,We)}}}else if(n.tag===18){if(a===null){k=n;try{var pe=k.stateNode;u?Tg(pe,!0):Tg(k.stateNode,!1)}catch(We){Xt(k,k.return,We)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,kl(t,a))));break;case 19:Yn(n,t),Zn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,kl(t,o)));break;case 30:break;case 21:break;default:Yn(n,t),Zn(t)}}function Zn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(R0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Af(t);Vl(t,d,u);break;case 5:var x=a.stateNode;a.flags&32&&(ni(x,""),a.flags&=-33);var w=Af(t);Vl(t,w,x);break;case 3:case 4:var k=a.stateNode.containerInfo,se=Af(t);Rf(t,se,k);break;default:throw Error(s(161))}}catch(_e){Xt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function I0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;I0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function fa(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)N0(t,n.alternate,n),n=n.sibling}function ws(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Va(4,n,n.return),ws(n);break;case 1:Hi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&T0(n,n.return,a),ws(n);break;case 27:Po(n.stateNode);case 26:case 5:Hi(n,n.return),ws(n);break;case 22:n.memoizedState===null&&ws(n);break;case 30:ws(n);break;default:ws(n)}t=t.sibling}}function da(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:da(u,d,a),To(4,d);break;case 1:if(da(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(se){Xt(o,o.return,se)}if(o=d,u=o.updateQueue,u!==null){var w=o.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)hm(k[u],w)}catch(se){Xt(o,o.return,se)}}a&&x&64&&E0(d),Ao(d,d.return);break;case 27:w0(d);case 26:case 5:da(u,d,a),a&&o===null&&x&4&&A0(d),Ao(d,d.return);break;case 12:da(u,d,a);break;case 31:da(u,d,a),a&&x&4&&L0(u,d);break;case 13:da(u,d,a),a&&x&4&&O0(u,d);break;case 22:d.memoizedState===null&&da(u,d,a),Ao(d,d.return);break;case 30:break;default:da(u,d,a)}n=n.sibling}}function Cf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&fo(a))}function Nf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t))}function Ci(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)z0(t,n,a,o),n=n.sibling}function z0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(t,n,a,o),u&2048&&To(9,n);break;case 1:Ci(t,n,a,o);break;case 3:Ci(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&fo(t)));break;case 12:if(u&2048){Ci(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,w=d.onPostCommit;typeof w=="function"&&w(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(k){Xt(n,n.return,k)}}else Ci(t,n,a,o);break;case 31:Ci(t,n,a,o);break;case 13:Ci(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?Ci(t,n,a,o):Ro(t,n):d._visibility&2?Ci(t,n,a,o):(d._visibility|=2,lr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Cf(x,n);break;case 24:Ci(t,n,a,o),u&2048&&Nf(n.alternate,n);break;default:Ci(t,n,a,o)}}function lr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,w=a,k=o,se=x.flags;switch(x.tag){case 0:case 11:case 15:lr(d,x,w,k,u),To(8,x);break;case 23:break;case 22:var _e=x.stateNode;x.memoizedState!==null?_e._visibility&2?lr(d,x,w,k,u):Ro(d,x):(_e._visibility|=2,lr(d,x,w,k,u)),u&&se&2048&&Cf(x.alternate,x);break;case 24:lr(d,x,w,k,u),u&&se&2048&&Nf(x.alternate,x);break;default:lr(d,x,w,k,u)}n=n.sibling}}function Ro(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Ro(a,o),u&2048&&Cf(o.alternate,o);break;case 24:Ro(a,o),u&2048&&Nf(o.alternate,o);break;default:Ro(a,o)}n=n.sibling}}var wo=8192;function cr(t,n,a){if(t.subtreeFlags&wo)for(t=t.child;t!==null;)F0(t,n,a),t=t.sibling}function F0(t,n,a){switch(t.tag){case 26:cr(t,n,a),t.flags&wo&&t.memoizedState!==null&&GS(a,wi,t.memoizedState,t.memoizedProps);break;case 5:cr(t,n,a);break;case 3:case 4:var o=wi;wi=ic(t.stateNode.containerInfo),cr(t,n,a),wi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,cr(t,n,a),wo=o):cr(t,n,a));break;default:cr(t,n,a)}}function B0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Rn=o,G0(o,t)}B0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)H0(t),t=t.sibling}function H0(t){switch(t.tag){case 0:case 11:case 15:Co(t),t.flags&2048&&Va(9,t,t.return);break;case 3:Co(t);break;case 12:Co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,jl(t)):Co(t);break;default:Co(t)}}function jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Rn=o,G0(o,t)}B0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Va(8,n,n.return),jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,jl(n));break;default:jl(n)}t=t.sibling}}function G0(t,n){for(;Rn!==null;){var a=Rn;switch(a.tag){case 0:case 11:case 15:Va(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:fo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Rn=o;else e:for(a=t;Rn!==null;){o=Rn;var u=o.sibling,d=o.return;if(D0(o),o===a){Rn=null;break e}if(u!==null){u.return=d,Rn=u;break e}Rn=d}}}var nS={getCacheForType:function(t){var n=Un(gn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Un(gn).controller.signal}},iS=typeof WeakMap=="function"?WeakMap:Map,Ft=0,Qt=null,vt=null,yt=0,jt=0,oi=null,ka=!1,ur=!1,Df=!1,ha=0,ln=0,ja=0,Cs=0,Uf=0,li=0,fr=0,No=null,Kn=null,Lf=!1,Xl=0,V0=0,Wl=1/0,ql=null,Xa=null,Mn=0,Wa=null,dr=null,pa=0,Of=0,Pf=null,k0=null,Do=0,If=null;function ci(){return(Ft&2)!==0&&yt!==0?yt&-yt:z.T!==null?Vf():Kr()}function j0(){if(li===0)if((yt&536870912)===0||Tt){var t=xt;xt<<=1,(xt&3932160)===0&&(xt=262144),li=t}else li=536870912;return t=si.current,t!==null&&(t.flags|=32),li}function Qn(t,n,a){(t===Qt&&(jt===2||jt===9)||t.cancelPendingCommit!==null)&&(hr(t,0),qa(t,yt,li,!1)),st(t,a),((Ft&2)===0||t!==Qt)&&(t===Qt&&((Ft&2)===0&&(Cs|=a),ln===4&&qa(t,yt,li,!1)),Gi(t))}function X0(t,n,a){if((Ft&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||He(t,n),u=o?rS(t,n):Ff(t,n,!0),d=o;do{if(u===0){ur&&!o&&qa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!aS(a)){u=Ff(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var w=t;u=No;var k=w.current.memoizedState.isDehydrated;if(k&&(hr(w,x).flags|=256),x=Ff(w,x,!1),x!==2){if(Df&&!k){w.errorRecoveryDisabledLanes|=d,Cs|=d,u=4;break e}d=Kn,Kn=u,d!==null&&(Kn===null?Kn=d:Kn.push.apply(Kn,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){hr(t,0),qa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:qa(o,n,li,!ka);break e;case 2:Kn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Xl+300-ge(),10<u)){if(qa(o,n,li,!ka),ve(o,0,!0)!==0)break e;pa=n,o.timeoutHandle=Mg(W0.bind(null,o,a,Kn,ql,Lf,n,li,Cs,fr,ka,d,"Throttled",-0,0),u);break e}W0(o,a,Kn,ql,Lf,n,li,Cs,fr,ka,d,null,-0,0)}}break}while(!0);Gi(t)}function W0(t,n,a,o,u,d,x,w,k,se,_e,be,ce,pe){if(t.timeoutHandle=-1,be=n.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$i},F0(n,d,be);var We=(d&62914560)===d?Xl-ge():(d&4194048)===d?V0-ge():0;if(We=VS(be,We),We!==null){pa=d,t.cancelPendingCommit=We(eg.bind(null,t,n,d,a,o,u,x,w,k,_e,be,null,ce,pe)),qa(t,d,x,!se);return}}eg(t,n,d,a,o,u,x,w,k)}function aS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!ii(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(t,n,a,o){n&=~Uf,n&=~Cs,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Pe(u),x=1<<d;o[d]=-1,u&=~x}a!==0&&zt(t,a,n)}function Yl(){return(Ft&6)===0?(Uo(0),!1):!0}function zf(){if(vt!==null){if(jt===0)var t=vt.return;else t=vt,ia=Ss=null,Ju(t),ir=null,po=0,t=vt;for(;t!==null;)b0(t.alternate,t),t=t.return;vt=null}}function hr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,ES(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),pa=0,zf(),Qt=t,vt=a=ta(t.current,null),yt=n,jt=0,oi=null,ka=!1,ur=He(t,n),Df=!1,fr=li=Uf=Cs=ja=ln=0,Kn=No=null,Lf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Pe(o),d=1<<u;n|=t[u],o&=~d}return ha=n,ml(),a}function q0(t,n){ft=null,z.H=Mo,n===nr||n===bl?(n=cm(),jt=3):n===Hu?(n=cm(),jt=4):jt=n===mf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,vt===null&&(ln=1,zl(t,gi(n,t.current)))}function Y0(){var t=si.current;return t===null?!0:(yt&4194048)===yt?Si===null:(yt&62914560)===yt||(yt&536870912)!==0?t===Si:!1}function Z0(){var t=z.H;return z.H=Mo,t===null?Mo:t}function K0(){var t=z.A;return z.A=nS,t}function Zl(){ln=4,ka||(yt&4194048)!==yt&&si.current!==null||(ur=!0),(ja&134217727)===0&&(Cs&134217727)===0||Qt===null||qa(Qt,yt,li,!1)}function Ff(t,n,a){var o=Ft;Ft|=2;var u=Z0(),d=K0();(Qt!==t||yt!==n)&&(ql=null,hr(t,n)),n=!1;var x=ln;e:do try{if(jt!==0&&vt!==null){var w=vt,k=oi;switch(jt){case 8:zf(),x=6;break e;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var se=jt;if(jt=0,oi=null,pr(t,w,k,se),a&&ur){x=0;break e}break;default:se=jt,jt=0,oi=null,pr(t,w,k,se)}}sS(),x=ln;break}catch(_e){q0(t,_e)}while(!0);return n&&t.shellSuspendCounter++,ia=Ss=null,Ft=o,z.H=u,z.A=d,vt===null&&(Qt=null,yt=0,ml()),x}function sS(){for(;vt!==null;)Q0(vt)}function rS(t,n){var a=Ft;Ft|=2;var o=Z0(),u=K0();Qt!==t||yt!==n?(ql=null,Wl=ge()+500,hr(t,n)):ur=He(t,n);e:do try{if(jt!==0&&vt!==null){n=vt;var d=oi;t:switch(jt){case 1:jt=0,oi=null,pr(t,n,d,1);break;case 2:case 9:if(om(d)){jt=0,oi=null,J0(n);break}n=function(){jt!==2&&jt!==9||Qt!==t||(jt=7),Gi(t)},d.then(n,n);break e;case 3:jt=7;break e;case 4:jt=5;break e;case 7:om(d)?(jt=0,oi=null,J0(n)):(jt=0,oi=null,pr(t,n,d,7));break;case 5:var x=null;switch(vt.tag){case 26:x=vt.memoizedState;case 5:case 27:var w=vt;if(x?zg(x):w.stateNode.complete){jt=0,oi=null;var k=w.sibling;if(k!==null)vt=k;else{var se=w.return;se!==null?(vt=se,Kl(se)):vt=null}break t}}jt=0,oi=null,pr(t,n,d,5);break;case 6:jt=0,oi=null,pr(t,n,d,6);break;case 8:zf(),ln=6;break e;default:throw Error(s(462))}}oS();break}catch(_e){q0(t,_e)}while(!0);return ia=Ss=null,z.H=o,z.A=u,Ft=a,vt!==null?0:(Qt=null,yt=0,ml(),ln)}function oS(){for(;vt!==null&&!ht();)Q0(vt)}function Q0(t){var n=y0(t.alternate,t,ha);t.memoizedProps=t.pendingProps,n===null?Kl(t):vt=n}function J0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=m0(a,n,n.pendingProps,n.type,void 0,yt);break;case 11:n=m0(a,n,n.pendingProps,n.type.render,n.ref,yt);break;case 5:Ju(n);default:b0(a,n),n=vt=Kp(n,ha),n=y0(a,n,ha)}t.memoizedProps=t.pendingProps,n===null?Kl(t):vt=n}function pr(t,n,a,o){ia=Ss=null,Ju(n),ir=null,po=0;var u=n.return;try{if(Zv(t,u,n,a,yt)){ln=1,zl(t,gi(a,t.current)),vt=null;return}}catch(d){if(u!==null)throw vt=u,d;ln=1,zl(t,gi(a,t.current)),vt=null;return}n.flags&32768?(Tt||o===1?t=!0:ur||(yt&536870912)!==0?t=!1:(ka=t=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),$0(n,t)):Kl(n)}function Kl(t){var n=t;do{if((n.flags&32768)!==0){$0(n,ka);return}t=n.return;var a=Jv(n.alternate,n,ha);if(a!==null){vt=a;return}if(n=n.sibling,n!==null){vt=n;return}vt=n=t}while(n!==null);ln===0&&(ln=5)}function $0(t,n){do{var a=$v(t.alternate,t);if(a!==null){a.flags&=32767,vt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){vt=t;return}vt=t=a}while(t!==null);ln=6,vt=null}function eg(t,n,a,o,u,d,x,w,k){t.cancelPendingCommit=null;do Ql();while(Mn!==0);if((Ft&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Tu,an(t,a,d,x,w,k),t===Qt&&(vt=Qt=null,yt=0),dr=n,Wa=t,pa=a,Of=d,Pf=u,k0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,fS(j,function(){return sg(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=G.p,G.p=2,x=Ft,Ft|=4;try{eS(t,n,a)}finally{Ft=x,G.p=u,z.T=o}}Mn=1,tg(),ng(),ig()}}function tg(){if(Mn===1){Mn=0;var t=Wa,n=dr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=G.p;G.p=2;var u=Ft;Ft|=4;try{P0(n,t);var d=Kf,x=Gp(t.containerInfo),w=d.focusedElem,k=d.selectionRange;if(x!==w&&w&&w.ownerDocument&&Hp(w.ownerDocument.documentElement,w)){if(k!==null&&Su(w)){var se=k.start,_e=k.end;if(_e===void 0&&(_e=se),"selectionStart"in w)w.selectionStart=se,w.selectionEnd=Math.min(_e,w.value.length);else{var be=w.ownerDocument||document,ce=be&&be.defaultView||window;if(ce.getSelection){var pe=ce.getSelection(),We=w.textContent.length,it=Math.min(k.start,We),Zt=k.end===void 0?it:Math.min(k.end,We);!pe.extend&&it>Zt&&(x=Zt,Zt=it,it=x);var ee=Bp(w,it),Y=Bp(w,Zt);if(ee&&Y&&(pe.rangeCount!==1||pe.anchorNode!==ee.node||pe.anchorOffset!==ee.offset||pe.focusNode!==Y.node||pe.focusOffset!==Y.offset)){var ie=be.createRange();ie.setStart(ee.node,ee.offset),pe.removeAllRanges(),it>Zt?(pe.addRange(ie),pe.extend(Y.node,Y.offset)):(ie.setEnd(Y.node,Y.offset),pe.addRange(ie))}}}}for(be=[],pe=w;pe=pe.parentNode;)pe.nodeType===1&&be.push({element:pe,left:pe.scrollLeft,top:pe.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<be.length;w++){var Me=be[w];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}cc=!!Zf,Kf=Zf=null}finally{Ft=u,G.p=o,z.T=a}}t.current=n,Mn=2}}function ng(){if(Mn===2){Mn=0;var t=Wa,n=dr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=G.p;G.p=2;var u=Ft;Ft|=4;try{N0(t,n.alternate,n)}finally{Ft=u,G.p=o,z.T=a}}Mn=3}}function ig(){if(Mn===4||Mn===3){Mn=0,It();var t=Wa,n=dr,a=pa,o=k0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,dr=Wa=null,ag(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Xa=null),Zr(a),n=n.stateNode,me&&typeof me.onCommitFiberRoot=="function")try{me.onCommitFiberRoot(ne,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=G.p,G.p=2,z.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var w=o[x];d(w.value,{componentStack:w.stack})}}finally{z.T=n,G.p=u}}(pa&3)!==0&&Ql(),Gi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===If?Do++:(Do=0,If=t):Do=0,Uo(0)}}function ag(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,fo(n)))}function Ql(){return tg(),ng(),ig(),sg()}function sg(){if(Mn!==5)return!1;var t=Wa,n=Of;Of=0;var a=Zr(pa),o=z.T,u=G.p;try{G.p=32>a?32:a,z.T=null,a=Pf,Pf=null;var d=Wa,x=pa;if(Mn=0,dr=Wa=null,pa=0,(Ft&6)!==0)throw Error(s(331));var w=Ft;if(Ft|=4,H0(d.current),z0(d,d.current,x,a),Ft=w,Uo(0,!1),me&&typeof me.onPostCommitFiberRoot=="function")try{me.onPostCommitFiberRoot(ne,d)}catch{}return!0}finally{G.p=u,z.T=o,ag(t,n)}}function rg(t,n,a){n=gi(a,n),n=pf(t.stateNode,n,2),t=Ba(t,n,2),t!==null&&(st(t,2),Gi(t))}function Xt(t,n,a){if(t.tag===3)rg(t,t,a);else for(;n!==null;){if(n.tag===3){rg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Xa===null||!Xa.has(o))){t=gi(a,t),a=o0(2),o=Ba(n,a,2),o!==null&&(l0(a,o,n,t),st(o,2),Gi(o));break}}n=n.return}}function Bf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new iS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Df=!0,u.add(a),t=lS.bind(null,t,n,a),n.then(t,t))}function lS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Qt===t&&(yt&a)===a&&(ln===4||ln===3&&(yt&62914560)===yt&&300>ge()-Xl?(Ft&2)===0&&hr(t,0):Uf|=a,fr===yt&&(fr=0)),Gi(t)}function og(t,n){n===0&&(n=Re()),t=xs(t,n),t!==null&&(st(t,n),Gi(t))}function cS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),og(t,a)}function uS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),og(t,a)}function fS(t,n){return Z(t,n)}var Jl=null,mr=null,Hf=!1,$l=!1,Gf=!1,Ya=0;function Gi(t){t!==mr&&t.next===null&&(mr===null?Jl=mr=t:mr=mr.next=t),$l=!0,Hf||(Hf=!0,hS())}function Uo(t,n){if(!Gf&&$l){Gf=!0;do for(var a=!1,o=Jl;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-Pe(42|t)+1)-1,d&=u&~(x&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,fg(o,d))}else d=yt,d=ve(o,o===Qt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||He(o,d)||(a=!0,fg(o,d));o=o.next}while(a);Gf=!1}}function dS(){lg()}function lg(){$l=Hf=!1;var t=0;Ya!==0&&bS()&&(t=Ya);for(var n=ge(),a=null,o=Jl;o!==null;){var u=o.next,d=cg(o,n);d===0?(o.next=null,a===null?Jl=u:a.next=u,u===null&&(mr=a)):(a=o,(t!==0||(d&3)!==0)&&($l=!0)),o=u}Mn!==0&&Mn!==5||Uo(t),Ya!==0&&(Ya=0)}function cg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Pe(d),w=1<<x,k=u[x];k===-1?((w&a)===0||(w&o)!==0)&&(u[x]=Le(w,n)):k<=n&&(t.expiredLanes|=w),d&=~w}if(n=Qt,a=yt,a=ve(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(jt===2||jt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ht(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||He(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ht(o),Zr(a)){case 2:case 8:a=b;break;case 32:a=j;break;case 268435456:a=Se;break;default:a=j}return o=ug.bind(null,t),a=Z(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ht(o),t.callbackPriority=2,t.callbackNode=null,2}function ug(t,n){if(Mn!==0&&Mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ql()&&t.callbackNode!==a)return null;var o=yt;return o=ve(t,t===Qt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(X0(t,o,n),cg(t,ge()),t.callbackNode!=null&&t.callbackNode===a?ug.bind(null,t):null)}function fg(t,n){if(Ql())return null;X0(t,n,!0)}function hS(){TS(function(){(Ft&6)!==0?Z(A,dS):lg()})}function Vf(){if(Ya===0){var t=er;t===0&&(t=ot,ot<<=1,(ot&261888)===0&&(ot=256)),Ya=t}return Ya}function dg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:hs(""+t)}function hg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function pS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=dg((u[Nn]||null).action),x=o.submitter;x&&(n=(n=x[Nn]||null)?dg(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var w=new fl("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ya!==0){var k=x?hg(u,x):new FormData(u);lf(a,{pending:!0,data:k,method:u.method,action:d},null,k)}}else typeof d=="function"&&(w.preventDefault(),k=x?hg(u,x):new FormData(u),lf(a,{pending:!0,data:k,method:u.method,action:d},d,k))},currentTarget:u}]})}}for(var kf=0;kf<Eu.length;kf++){var jf=Eu[kf],mS=jf.toLowerCase(),gS=jf[0].toUpperCase()+jf.slice(1);Ri(mS,"on"+gS)}Ri(jp,"onAnimationEnd"),Ri(Xp,"onAnimationIteration"),Ri(Wp,"onAnimationStart"),Ri("dblclick","onDoubleClick"),Ri("focusin","onFocus"),Ri("focusout","onBlur"),Ri(Uv,"onTransitionRun"),Ri(Lv,"onTransitionStart"),Ri(Ov,"onTransitionCancel"),Ri(qp,"onTransitionEnd"),le("onMouseEnter",["mouseout","mouseover"]),le("onMouseLeave",["mouseout","mouseover"]),le("onPointerEnter",["pointerout","pointerover"]),le("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function pg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var w=o[x],k=w.instance,se=w.currentTarget;if(w=w.listener,k!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=se;try{d(u)}catch(_e){pl(_e)}u.currentTarget=null,d=k}else for(x=0;x<o.length;x++){if(w=o[x],k=w.instance,se=w.currentTarget,w=w.listener,k!==d&&u.isPropagationStopped())break e;d=w,u.currentTarget=se;try{d(u)}catch(_e){pl(_e)}u.currentTarget=null,d=k}}}}function St(t,n){var a=n[Aa];a===void 0&&(a=n[Aa]=new Set);var o=t+"__bubble";a.has(o)||(mg(n,t,2,!1),a.add(o))}function Xf(t,n,a){var o=0;n&&(o|=4),mg(a,t,o,n)}var ec="_reactListening"+Math.random().toString(36).slice(2);function Wf(t){if(!t[ec]){t[ec]=!0,ol.forEach(function(a){a!=="selectionchange"&&(xS.has(a)||Xf(a,!1,t),Xf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ec]||(n[ec]=!0,Xf("selectionchange",!1,n))}}function mg(t,n,a,o){switch(jg(n)){case 2:var u=XS;break;case 8:u=WS;break;default:u=od}a=u.bind(null,n,a,t),u=void 0,!fu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function qf(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var w=o.stateNode.containerInfo;if(w===u)break;if(x===4)for(x=o.return;x!==null;){var k=x.tag;if((k===3||k===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;w!==null;){if(x=wa(w),x===null)return;if(k=x.tag,k===5||k===6||k===26||k===27){o=d=x;continue e}w=w.parentNode}}o=o.return}Sp(function(){var se=d,_e=cu(a),be=[];e:{var ce=Yp.get(t);if(ce!==void 0){var pe=fl,We=t;switch(t){case"keypress":if(cl(a)===0)break e;case"keydown":case"keyup":pe=uv;break;case"focusin":We="focus",pe=mu;break;case"focusout":We="blur",pe=mu;break;case"beforeblur":case"afterblur":pe=mu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=bp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=J_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=hv;break;case jp:case Xp:case Wp:pe=tv;break;case qp:pe=mv;break;case"scroll":case"scrollend":pe=K_;break;case"wheel":pe=xv;break;case"copy":case"cut":case"paste":pe=iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=Tp;break;case"toggle":case"beforetoggle":pe=vv}var it=(n&4)!==0,Zt=!it&&(t==="scroll"||t==="scrollend"),ee=it?ce!==null?ce+"Capture":null:ce;it=[];for(var Y=se,ie;Y!==null;){var Me=Y;if(ie=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||ie===null||ee===null||(Me=eo(Y,ee),Me!=null&&it.push(Oo(Y,Me,ie))),Zt)break;Y=Y.return}0<it.length&&(ce=new pe(ce,We,null,a,_e),be.push({event:ce,listeners:it}))}}if((n&7)===0){e:{if(ce=t==="mouseover"||t==="pointerover",pe=t==="mouseout"||t==="pointerout",ce&&a!==lu&&(We=a.relatedTarget||a.fromElement)&&(wa(We)||We[Ji]))break e;if((pe||ce)&&(ce=_e.window===_e?_e:(ce=_e.ownerDocument)?ce.defaultView||ce.parentWindow:window,pe?(We=a.relatedTarget||a.toElement,pe=se,We=We?wa(We):null,We!==null&&(Zt=c(We),it=We.tag,We!==Zt||it!==5&&it!==27&&it!==6)&&(We=null)):(pe=null,We=se),pe!==We)){if(it=bp,Me="onMouseLeave",ee="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(it=Tp,Me="onPointerLeave",ee="onPointerEnter",Y="pointer"),Zt=pe==null?ce:ds(pe),ie=We==null?ce:ds(We),ce=new it(Me,Y+"leave",pe,a,_e),ce.target=Zt,ce.relatedTarget=ie,Me=null,wa(_e)===se&&(it=new it(ee,Y+"enter",We,a,_e),it.target=ie,it.relatedTarget=Zt,Me=it),Zt=Me,pe&&We)t:{for(it=_S,ee=pe,Y=We,ie=0,Me=ee;Me;Me=it(Me))ie++;Me=0;for(var et=Y;et;et=it(et))Me++;for(;0<ie-Me;)ee=it(ee),ie--;for(;0<Me-ie;)Y=it(Y),Me--;for(;ie--;){if(ee===Y||Y!==null&&ee===Y.alternate){it=ee;break t}ee=it(ee),Y=it(Y)}it=null}else it=null;pe!==null&&gg(be,ce,pe,it,!1),We!==null&&Zt!==null&&gg(be,Zt,We,it,!0)}}e:{if(ce=se?ds(se):window,pe=ce.nodeName&&ce.nodeName.toLowerCase(),pe==="select"||pe==="input"&&ce.type==="file")var Lt=Lp;else if(Dp(ce))if(Op)Lt=Cv;else{Lt=Rv;var Ze=Av}else pe=ce.nodeName,!pe||pe.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?se&&Bt(se.elementType)&&(Lt=Lp):Lt=wv;if(Lt&&(Lt=Lt(t,se))){Up(be,Lt,a,_e);break e}Ze&&Ze(t,ce,se),t==="focusout"&&se&&ce.type==="number"&&se.memoizedProps.value!=null&&_t(ce,"number",ce.value)}switch(Ze=se?ds(se):window,t){case"focusin":(Dp(Ze)||Ze.contentEditable==="true")&&(Ws=Ze,yu=se,lo=null);break;case"focusout":lo=yu=Ws=null;break;case"mousedown":Mu=!0;break;case"contextmenu":case"mouseup":case"dragend":Mu=!1,Vp(be,a,_e);break;case"selectionchange":if(Dv)break;case"keydown":case"keyup":Vp(be,a,_e)}var pt;if(xu)e:{switch(t){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Xs?Cp(t,a)&&(Mt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Ap&&a.locale!=="ko"&&(Xs||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Xs&&(pt=yp()):(Ua=_e,du="value"in Ua?Ua.value:Ua.textContent,Xs=!0)),Ze=tc(se,Mt),0<Ze.length&&(Mt=new Ep(Mt,t,null,a,_e),be.push({event:Mt,listeners:Ze}),pt?Mt.data=pt:(pt=Np(a),pt!==null&&(Mt.data=pt)))),(pt=yv?Mv(t,a):bv(t,a))&&(Mt=tc(se,"onBeforeInput"),0<Mt.length&&(Ze=new Ep("onBeforeInput","beforeinput",null,a,_e),be.push({event:Ze,listeners:Mt}),Ze.data=pt)),pS(be,t,se,a,_e)}pg(be,n)})}function Oo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function tc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=eo(t,a),u!=null&&o.unshift(Oo(t,u,d)),u=eo(t,n),u!=null&&o.push(Oo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function _S(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function gg(t,n,a,o,u){for(var d=n._reactName,x=[];a!==null&&a!==o;){var w=a,k=w.alternate,se=w.stateNode;if(w=w.tag,k!==null&&k===o)break;w!==5&&w!==26&&w!==27||se===null||(k=se,u?(se=eo(a,d),se!=null&&x.unshift(Oo(a,se,k))):u||(se=eo(a,d),se!=null&&x.push(Oo(a,se,k)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var vS=/\r\n?/g,SS=/\u0000|\uFFFD/g;function xg(t){return(typeof t=="string"?t:""+t).replace(vS,`
`).replace(SS,"")}function _g(t,n){return n=xg(n),xg(t)===n}function Yt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ni(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ni(t,""+o);break;case"className":Xe(t,"class",o);break;case"tabIndex":Xe(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xe(t,a,o);break;case"style":Ai(t,o,d);break;case"data":if(n!=="object"){Xe(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=hs(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Yt(t,n,"name",u.name,u,null),Yt(t,n,"formEncType",u.formEncType,u,null),Yt(t,n,"formMethod",u.formMethod,u,null),Yt(t,n,"formTarget",u.formTarget,u,null)):(Yt(t,n,"encType",u.encType,u,null),Yt(t,n,"method",u.method,u,null),Yt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=hs(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=$i);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=hs(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":St("beforetoggle",t),St("toggle",t),ze(t,"popover",o);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ze(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zi.get(a)||a,ze(t,a,o))}}function Yf(t,n,a,o,u,d){switch(a){case"style":Ai(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?ni(t,o):(typeof o=="number"||typeof o=="bigint")&&ni(t,""+o);break;case"onScroll":o!=null&&St("scroll",t);break;case"onScrollEnd":o!=null&&St("scrollend",t);break;case"onClick":o!=null&&(t.onclick=$i);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!R.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[Nn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):ze(t,a,o)}}}function On(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",t),St("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var x=a[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Yt(t,n,d,x,a,null)}}u&&Yt(t,n,"srcSet",a.srcSet,a,null),o&&Yt(t,n,"src",a.src,a,null);return;case"input":St("invalid",t);var w=d=x=u=null,k=null,se=null;for(o in a)if(a.hasOwnProperty(o)){var _e=a[o];if(_e!=null)switch(o){case"name":u=_e;break;case"type":x=_e;break;case"checked":k=_e;break;case"defaultChecked":se=_e;break;case"value":d=_e;break;case"defaultValue":w=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(s(137,n));break;default:Yt(t,n,o,_e,a,null)}}zn(t,d,w,k,se,x,u,!1);return;case"select":St("invalid",t),o=x=d=null;for(u in a)if(a.hasOwnProperty(u)&&(w=a[u],w!=null))switch(u){case"value":d=w;break;case"defaultValue":x=w;break;case"multiple":o=w;default:Yt(t,n,u,w,a,null)}n=d,a=x,t.multiple=!!o,n!=null?yn(t,!!o,n,!1):a!=null&&yn(t,!!o,a,!0);return;case"textarea":St("invalid",t),d=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(w=a[x],w!=null))switch(x){case"value":o=w;break;case"defaultValue":u=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(s(91));break;default:Yt(t,n,x,w,a,null)}Ti(t,o,u,d);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(o=a[k],o!=null))switch(k){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Yt(t,n,k,o,a,null)}return;case"dialog":St("beforetoggle",t),St("toggle",t),St("cancel",t),St("close",t);break;case"iframe":case"object":St("load",t);break;case"video":case"audio":for(o=0;o<Lo.length;o++)St(Lo[o],t);break;case"image":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"embed":case"source":case"link":St("error",t),St("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(se in a)if(a.hasOwnProperty(se)&&(o=a[se],o!=null))switch(se){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Yt(t,n,se,o,a,null)}return;default:if(Bt(n)){for(_e in a)a.hasOwnProperty(_e)&&(o=a[_e],o!==void 0&&Yf(t,n,_e,o,a,void 0));return}}for(w in a)a.hasOwnProperty(w)&&(o=a[w],o!=null&&Yt(t,n,w,o,a,null))}function yS(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,w=null,k=null,se=null,_e=null;for(pe in a){var be=a[pe];if(a.hasOwnProperty(pe)&&be!=null)switch(pe){case"checked":break;case"value":break;case"defaultValue":k=be;default:o.hasOwnProperty(pe)||Yt(t,n,pe,null,o,be)}}for(var ce in o){var pe=o[ce];if(be=a[ce],o.hasOwnProperty(ce)&&(pe!=null||be!=null))switch(ce){case"type":d=pe;break;case"name":u=pe;break;case"checked":se=pe;break;case"defaultChecked":_e=pe;break;case"value":x=pe;break;case"defaultValue":w=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:pe!==be&&Yt(t,n,ce,pe,o,be)}}Ve(t,x,w,k,se,_e,d,u);return;case"select":pe=x=w=ce=null;for(d in a)if(k=a[d],a.hasOwnProperty(d)&&k!=null)switch(d){case"value":break;case"multiple":pe=k;default:o.hasOwnProperty(d)||Yt(t,n,d,null,o,k)}for(u in o)if(d=o[u],k=a[u],o.hasOwnProperty(u)&&(d!=null||k!=null))switch(u){case"value":ce=d;break;case"defaultValue":w=d;break;case"multiple":x=d;default:d!==k&&Yt(t,n,u,d,o,k)}n=w,a=x,o=pe,ce!=null?yn(t,!!a,ce,!1):!!o!=!!a&&(n!=null?yn(t,!!a,n,!0):yn(t,!!a,a?[]:"",!1));return;case"textarea":pe=ce=null;for(w in a)if(u=a[w],a.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Yt(t,n,w,null,o,u)}for(x in o)if(u=o[x],d=a[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":ce=u;break;case"defaultValue":pe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Yt(t,n,x,u,o,d)}ti(t,ce,pe);return;case"option":for(var We in a)if(ce=a[We],a.hasOwnProperty(We)&&ce!=null&&!o.hasOwnProperty(We))switch(We){case"selected":t.selected=!1;break;default:Yt(t,n,We,null,o,ce)}for(k in o)if(ce=o[k],pe=a[k],o.hasOwnProperty(k)&&ce!==pe&&(ce!=null||pe!=null))switch(k){case"selected":t.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:Yt(t,n,k,ce,o,pe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)ce=a[it],a.hasOwnProperty(it)&&ce!=null&&!o.hasOwnProperty(it)&&Yt(t,n,it,null,o,ce);for(se in o)if(ce=o[se],pe=a[se],o.hasOwnProperty(se)&&ce!==pe&&(ce!=null||pe!=null))switch(se){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:Yt(t,n,se,ce,o,pe)}return;default:if(Bt(n)){for(var Zt in a)ce=a[Zt],a.hasOwnProperty(Zt)&&ce!==void 0&&!o.hasOwnProperty(Zt)&&Yf(t,n,Zt,void 0,o,ce);for(_e in o)ce=o[_e],pe=a[_e],!o.hasOwnProperty(_e)||ce===pe||ce===void 0&&pe===void 0||Yf(t,n,_e,ce,o,pe);return}}for(var ee in a)ce=a[ee],a.hasOwnProperty(ee)&&ce!=null&&!o.hasOwnProperty(ee)&&Yt(t,n,ee,null,o,ce);for(be in o)ce=o[be],pe=a[be],!o.hasOwnProperty(be)||ce===pe||ce==null&&pe==null||Yt(t,n,be,ce,o,pe)}function vg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function MS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,x=u.initiatorType,w=u.duration;if(d&&w&&vg(x)){for(x=0,w=u.responseEnd,o+=1;o<a.length;o++){var k=a[o],se=k.startTime;if(se>w)break;var _e=k.transferSize,be=k.initiatorType;_e&&vg(be)&&(k=k.responseEnd,x+=_e*(k<w?1:(w-se)/(k-se)))}if(--o,n+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Zf=null,Kf=null;function nc(t){return t.nodeType===9?t:t.ownerDocument}function Sg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function yg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Qf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Jf=null;function bS(){var t=window.event;return t&&t.type==="popstate"?t===Jf?!1:(Jf=t,!0):(Jf=null,!1)}var Mg=typeof setTimeout=="function"?setTimeout:void 0,ES=typeof clearTimeout=="function"?clearTimeout:void 0,bg=typeof Promise=="function"?Promise:void 0,TS=typeof queueMicrotask=="function"?queueMicrotask:typeof bg<"u"?function(t){return bg.resolve(null).then(t).catch(AS)}:Mg;function AS(t){setTimeout(function(){throw t})}function Za(t){return t==="head"}function Eg(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),vr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Po(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Po(a);for(var d=a.firstChild;d;){var x=d.nextSibling,w=d.nodeName;d[Ra]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=x}}else a==="body"&&Po(t.ownerDocument.body);a=u}while(a);vr(n)}function Tg(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function $f(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$f(a),$r(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function RS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[Ra])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=yi(t.nextSibling),t===null)break}return null}function wS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=yi(t.nextSibling),t===null))return null;return t}function Ag(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=yi(t.nextSibling),t===null))return null;return t}function ed(t){return t.data==="$?"||t.data==="$~"}function td(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function CS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function yi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var nd=null;function Rg(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return yi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function wg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Cg(t,n,a){switch(n=nc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Po(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);$r(t)}var Mi=new Map,Ng=new Set;function ic(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ma=G.d;G.d={f:NS,r:DS,D:US,C:LS,L:OS,m:PS,X:zS,S:IS,M:FS};function NS(){var t=ma.f(),n=Yl();return t||n}function DS(t){var n=Ca(t);n!==null&&n.tag===5&&n.type==="form"?qm(n):ma.r(t)}var gr=typeof document>"u"?null:document;function Dg(t,n,a){var o=gr;if(o&&typeof n=="string"&&n){var u=Vt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ng.has(u)||(Ng.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),On(n,"link",t),mn(n),o.head.appendChild(n)))}}function US(t){ma.D(t),Dg("dns-prefetch",t,null)}function LS(t,n){ma.C(t,n),Dg("preconnect",t,n)}function OS(t,n,a){ma.L(t,n,a);var o=gr;if(o&&t&&n){var u='link[rel="preload"][as="'+Vt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Vt(a.imageSizes)+'"]')):u+='[href="'+Vt(t)+'"]';var d=u;switch(n){case"style":d=xr(t);break;case"script":d=_r(t)}Mi.has(d)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Mi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Io(d))||n==="script"&&o.querySelector(zo(d))||(n=o.createElement("link"),On(n,"link",t),mn(n),o.head.appendChild(n)))}}function PS(t,n){ma.m(t,n);var a=gr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=_r(t)}if(!Mi.has(d)&&(t=_({rel:"modulepreload",href:t},n),Mi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(zo(d)))return}o=a.createElement("link"),On(o,"link",t),mn(o),a.head.appendChild(o)}}}function IS(t,n,a){ma.S(t,n,a);var o=gr;if(o&&t){var u=Na(o).hoistableStyles,d=xr(t);n=n||"default";var x=u.get(d);if(!x){var w={loading:0,preload:null};if(x=o.querySelector(Io(d)))w.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Mi.get(d))&&id(t,a);var k=x=o.createElement("link");mn(k),On(k,"link",t),k._p=new Promise(function(se,_e){k.onload=se,k.onerror=_e}),k.addEventListener("load",function(){w.loading|=1}),k.addEventListener("error",function(){w.loading|=2}),w.loading|=4,ac(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:w},u.set(d,x)}}}function zS(t,n){ma.X(t,n);var a=gr;if(a&&t){var o=Na(a).hoistableScripts,u=_r(t),d=o.get(u);d||(d=a.querySelector(zo(u)),d||(t=_({src:t,async:!0},n),(n=Mi.get(u))&&ad(t,n),d=a.createElement("script"),mn(d),On(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function FS(t,n){ma.M(t,n);var a=gr;if(a&&t){var o=Na(a).hoistableScripts,u=_r(t),d=o.get(u);d||(d=a.querySelector(zo(u)),d||(t=_({src:t,async:!0,type:"module"},n),(n=Mi.get(u))&&ad(t,n),d=a.createElement("script"),mn(d),On(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Ug(t,n,a,o){var u=(u=$.current)?ic(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xr(a.href),a=Na(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=xr(a.href);var d=Na(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(Io(t)))&&!d._p&&(x.instance=d,x.state.loading=5),Mi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Mi.set(t,a),d||BS(u,t,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=_r(a),a=Na(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function xr(t){return'href="'+Vt(t)+'"'}function Io(t){return'link[rel="stylesheet"]['+t+"]"}function Lg(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function BS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),On(n,"link",a),mn(n),t.head.appendChild(n))}function _r(t){return'[src="'+Vt(t)+'"]'}function zo(t){return"script[async]"+t}function Og(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return n.instance=o,mn(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),mn(o),On(o,"style",u),ac(o,a.precedence,t),n.instance=o;case"stylesheet":u=xr(a.href);var d=t.querySelector(Io(u));if(d)return n.state.loading|=4,n.instance=d,mn(d),d;o=Lg(a),(u=Mi.get(u))&&id(o,u),d=(t.ownerDocument||t).createElement("link"),mn(d);var x=d;return x._p=new Promise(function(w,k){x.onload=w,x.onerror=k}),On(d,"link",o),n.state.loading|=4,ac(d,a.precedence,t),n.instance=d;case"script":return d=_r(a.src),(u=t.querySelector(zo(d)))?(n.instance=u,mn(u),u):(o=a,(u=Mi.get(d))&&(o=_({},a),ad(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),mn(u),On(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ac(o,a.precedence,t));return n.instance}function ac(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var w=o[x];if(w.dataset.precedence===n)d=w;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function id(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function ad(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var sc=null;function Pg(t,n,a){if(sc===null){var o=new Map,u=sc=new Map;u.set(a,o)}else u=sc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[Ra]||d[fn]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var w=o.get(x);w?w.push(d):o.set(x,[d])}}return o}function Ig(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function HS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function zg(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function GS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xr(o.href),d=n.querySelector(Io(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=rc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,mn(d);return}d=n.ownerDocument||n,o=Lg(o),(u=Mi.get(u))&&id(o,u),d=d.createElement("link"),mn(d);var x=d;x._p=new Promise(function(w,k){x.onload=w,x.onerror=k}),On(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=rc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var sd=0;function VS(t,n){return t.stylesheets&&t.count===0&&lc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&lc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&sd===0&&(sd=62500*MS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&lc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>sd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function rc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var oc=null;function lc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,oc=new Map,n.forEach(kS,t),oc=null,rc.call(t))}function kS(t,n){if(!(n.state.loading&4)){var a=oc.get(t);if(a)var o=a.get(null);else{a=new Map,oc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=a.get(x)||o,d===o&&a.set(null,u),a.set(x,u),this.count++,o=rc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Fo={$$typeof:L,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function jS(t,n,a,o,u,d,x,w,k){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Fg(t,n,a,o,u,d,x,w,k,se,_e,be){return t=new jS(t,n,a,x,k,se,_e,be,w),n=1,d===!0&&(n|=24),d=ai(3,null,null,n),t.current=d,d.stateNode=t,n=zu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Gu(d),t}function Bg(t){return t?(t=Zs,t):Zs}function Hg(t,n,a,o,u,d){u=Bg(u),o.context===null?o.context=u:o.pendingContext=u,o=Fa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ba(t,o,n),a!==null&&(Qn(a,t,n),go(a,t,n))}function Gg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function rd(t,n){Gg(t,n),(t=t.alternate)&&Gg(t,n)}function Vg(t){if(t.tag===13||t.tag===31){var n=xs(t,67108864);n!==null&&Qn(n,t,67108864),rd(t,67108864)}}function kg(t){if(t.tag===13||t.tag===31){var n=ci();n=fs(n);var a=xs(t,n);a!==null&&Qn(a,t,n),rd(t,n)}}var cc=!0;function XS(t,n,a,o){var u=z.T;z.T=null;var d=G.p;try{G.p=2,od(t,n,a,o)}finally{G.p=d,z.T=u}}function WS(t,n,a,o){var u=z.T;z.T=null;var d=G.p;try{G.p=8,od(t,n,a,o)}finally{G.p=d,z.T=u}}function od(t,n,a,o){if(cc){var u=ld(o);if(u===null)qf(t,n,o,uc,a),Xg(t,o);else if(YS(u,t,n,a,o))o.stopPropagation();else if(Xg(t,o),n&4&&-1<qS.indexOf(t)){for(;u!==null;){var d=Ca(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=Ne(d.pendingLanes);if(x!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var k=1<<31-Pe(x);w.entanglements[1]|=k,x&=~k}Gi(d),(Ft&6)===0&&(Wl=ge()+500,Uo(0))}}break;case 31:case 13:w=xs(d,2),w!==null&&Qn(w,d,2),Yl(),rd(d,2)}if(d=ld(o),d===null&&qf(t,n,o,uc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else qf(t,n,o,null,a)}}function ld(t){return t=cu(t),cd(t)}var uc=null;function cd(t){if(uc=null,t=wa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return uc=t,null}function jg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qe()){case A:return 2;case b:return 8;case j:case de:return 32;case Se:return 268435456;default:return 32}default:return 32}}var ud=!1,Ka=null,Qa=null,Ja=null,Bo=new Map,Ho=new Map,$a=[],qS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Xg(t,n){switch(t){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Qa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(n.pointerId)}}function Go(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Ca(n),n!==null&&Vg(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function YS(t,n,a,o,u){switch(n){case"focusin":return Ka=Go(Ka,t,n,a,o,u),!0;case"dragenter":return Qa=Go(Qa,t,n,a,o,u),!0;case"mouseover":return Ja=Go(Ja,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Bo.set(d,Go(Bo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Ho.set(d,Go(Ho.get(d)||null,t,n,a,o,u)),!0}return!1}function Wg(t){var n=wa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Qr(t.priority,function(){kg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Qr(t.priority,function(){kg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function fc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ld(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);lu=o,a.target.dispatchEvent(o),lu=null}else return n=Ca(a),n!==null&&Vg(n),t.blockedOn=a,!1;n.shift()}return!0}function qg(t,n,a){fc(t)&&a.delete(n)}function ZS(){ud=!1,Ka!==null&&fc(Ka)&&(Ka=null),Qa!==null&&fc(Qa)&&(Qa=null),Ja!==null&&fc(Ja)&&(Ja=null),Bo.forEach(qg),Ho.forEach(qg)}function dc(t,n){t.blockedOn===n&&(t.blockedOn=null,ud||(ud=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,ZS)))}var hc=null;function Yg(t){hc!==t&&(hc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){hc===t&&(hc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(cd(o||a)===null)continue;break}var d=Ca(a);d!==null&&(t.splice(n,3),n-=3,lf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function vr(t){function n(k){return dc(k,t)}Ka!==null&&dc(Ka,t),Qa!==null&&dc(Qa,t),Ja!==null&&dc(Ja,t),Bo.forEach(n),Ho.forEach(n);for(var a=0;a<$a.length;a++){var o=$a[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<$a.length&&(a=$a[0],a.blockedOn===null);)Wg(a),a.blockedOn===null&&$a.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],x=u[Nn]||null;if(typeof d=="function")x||Yg(a);else if(x){var w=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[Nn]||null)w=x.formAction;else if(cd(u)!==null)continue}else w=x.action;typeof w=="function"?a[o+1]=w:(a.splice(o,3),o-=3),Yg(a)}}}function Zg(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function fd(t){this._internalRoot=t}pc.prototype.render=fd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ci();Hg(a,o,t,n,null,null)},pc.prototype.unmount=fd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Hg(t.current,2,null,t,null,null),Yl(),n[Ji]=null}};function pc(t){this._internalRoot=t}pc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Kr();t={blockedOn:null,target:t,priority:n};for(var a=0;a<$a.length&&n!==0&&n<$a[a].priority;a++);$a.splice(a,0,t),a===0&&Wg(t)}};var Kg=e.version;if(Kg!=="19.2.7")throw Error(s(527,Kg,"19.2.7"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=p(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var KS={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mc.isDisabled&&mc.supportsFiber)try{ne=mc.inject(KS),me=mc}catch{}}return ko.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=i0,d=a0,x=s0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Fg(t,1,!1,null,null,a,o,null,u,d,x,Zg),t[Ji]=n.current,Wf(t),new fd(n)},ko.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=i0,x=a0,w=s0,k=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(w=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=Fg(t,1,!0,n,a??null,o,u,k,d,x,w,Zg),n.context=Bg(null),a=n.current,o=ci(),o=fs(o),u=Fa(o),u.callback=null,Ba(a,u,o),a=o,n.current.lanes=a,st(n,a),Gi(n),t[Ji]=n.current,Wf(t),new pc(n)},ko.version="19.2.7",ko}var rx;function ry(){if(rx)return pd.exports;rx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),pd.exports=sy(),pd.exports}var oy=ry();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zh="184",ly=0,ox=1,cy=2,Vc=1,d_=2,Ko=3,cs=0,Jn=1,Li=2,Ma=0,Fr=1,eh=2,lx=3,cx=4,uy=5,Ps=100,fy=101,dy=102,hy=103,py=104,my=200,gy=201,xy=202,_y=203,th=204,nh=205,vy=206,Sy=207,yy=208,My=209,by=210,Ey=211,Ty=212,Ay=213,Ry=214,ih=0,ah=1,sh=2,Hr=3,rh=4,oh=5,lh=6,ch=7,h_=0,wy=1,Cy=2,Yi=0,p_=1,m_=2,g_=3,x_=4,__=5,v_=6,S_=7,y_=300,Bs=301,Gr=302,_d=303,vd=304,iu=306,tl=1e3,ya=1001,uh=1002,Pn=1003,Ny=1004,gc=1005,Gn=1006,Sd=1007,zs=1008,hi=1009,M_=1010,b_=1011,nl=1012,Kh=1013,Ki=1014,Wi=1015,Ea=1016,Qh=1017,Jh=1018,il=1020,E_=35902,T_=35899,A_=1021,R_=1022,Pi=1023,Ta=1026,Fs=1027,w_=1028,$h=1029,Hs=1030,ep=1031,tp=1033,kc=33776,jc=33777,Xc=33778,Wc=33779,fh=35840,dh=35841,hh=35842,ph=35843,mh=36196,gh=37492,xh=37496,_h=37488,vh=37489,Zc=37490,Sh=37491,yh=37808,Mh=37809,bh=37810,Eh=37811,Th=37812,Ah=37813,Rh=37814,wh=37815,Ch=37816,Nh=37817,Dh=37818,Uh=37819,Lh=37820,Oh=37821,Ph=36492,Ih=36494,zh=36495,Fh=36283,Bh=36284,Kc=36285,Hh=36286,Dy=3200,Gh=0,Uy=1,os="",Ei="srgb",Qc="srgb-linear",Jc="linear",Wt="srgb",Sr=7680,ux=519,Ly=512,Oy=513,Py=514,np=515,Iy=516,zy=517,ip=518,Fy=519,fx=35044,dx="300 es",qi=2e3,al=2001;function By(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function $c(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Hy(){const r=$c("canvas");return r.style.display="block",r}const hx={};function px(...r){const e="THREE."+r.shift();console.log(e,...r)}function C_(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function at(...r){r=C_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function wt(...r){r=C_(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function Vh(...r){const e=r.join(" ");e in hx||(hx[e]=!0,at(...r))}function Gy(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Vy={[ih]:ah,[sh]:lh,[rh]:ch,[Hr]:oh,[ah]:ih,[lh]:sh,[ch]:rh,[oh]:Hr};class Gs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mx=1234567;const $o=Math.PI/180,Vr=180/Math.PI;function Xr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bn[r&255]+Bn[r>>8&255]+Bn[r>>16&255]+Bn[r>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]).toLowerCase()}function bt(r,e,i){return Math.max(e,Math.min(i,r))}function ap(r,e){return(r%e+e)%e}function ky(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function jy(r,e,i){return r!==e?(i-r)/(e-r):0}function el(r,e,i){return(1-i)*r+i*e}function Xy(r,e,i,s){return el(r,e,1-Math.exp(-i*s))}function Wy(r,e=1){return e-Math.abs(ap(r,e*2)-e)}function qy(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function Yy(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function Zy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ky(r,e){return r+Math.random()*(e-r)}function Qy(r){return r*(.5-Math.random())}function Jy(r){r!==void 0&&(mx=r);let e=mx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $y(r){return r*$o}function eM(r){return r*Vr}function tM(r){return(r&r-1)===0&&r!==0}function nM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function iM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function aM(r,e,i,s,l){const c=Math.cos,f=Math.sin,h=c(i/2),m=f(i/2),p=c((e+s)/2),S=f((e+s)/2),_=c((e-s)/2),g=f((e-s)/2),M=c((s-e)/2),T=f((s-e)/2);switch(l){case"XYX":r.set(h*S,m*_,m*g,h*p);break;case"YZY":r.set(m*g,h*S,m*_,h*p);break;case"ZXZ":r.set(m*_,m*g,h*S,h*p);break;case"XZX":r.set(h*S,m*T,m*M,h*p);break;case"YXY":r.set(m*M,h*S,m*T,h*p);break;case"ZYZ":r.set(m*T,m*M,h*S,h*p);break;default:at("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ir(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const xc={DEG2RAD:$o,RAD2DEG:Vr,generateUUID:Xr,clamp:bt,euclideanModulo:ap,mapLinear:ky,inverseLerp:jy,lerp:el,damp:Xy,pingpong:Wy,smoothstep:qy,smootherstep:Yy,randInt:Zy,randFloat:Ky,randFloatSpread:Qy,seededRandom:Jy,degToRad:$y,radToDeg:eM,isPowerOfTwo:tM,ceilPowerOfTwo:nM,floorPowerOfTwo:iM,setQuaternionFromProperEuler:aM,normalize:jn,denormalize:Ir},pp=class pp{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pp.prototype.isVector2=!0;let Nt=pp;class Wr{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,h){let m=s[l+0],p=s[l+1],S=s[l+2],_=s[l+3],g=c[f+0],M=c[f+1],T=c[f+2],O=c[f+3];if(_!==O||m!==g||p!==M||S!==T){let y=m*g+p*M+S*T+_*O;y<0&&(g=-g,M=-M,T=-T,O=-O,y=-y);let v=1-h;if(y<.9995){const U=Math.acos(y),L=Math.sin(U);v=Math.sin(v*U)/L,h=Math.sin(h*U)/L,m=m*v+g*h,p=p*v+M*h,S=S*v+T*h,_=_*v+O*h}else{m=m*v+g*h,p=p*v+M*h,S=S*v+T*h,_=_*v+O*h;const U=1/Math.sqrt(m*m+p*p+S*S+_*_);m*=U,p*=U,S*=U,_*=U}}e[i]=m,e[i+1]=p,e[i+2]=S,e[i+3]=_}static multiplyQuaternionsFlat(e,i,s,l,c,f){const h=s[l],m=s[l+1],p=s[l+2],S=s[l+3],_=c[f],g=c[f+1],M=c[f+2],T=c[f+3];return e[i]=h*T+S*_+m*M-p*g,e[i+1]=m*T+S*g+p*_-h*M,e[i+2]=p*T+S*M+h*g-m*_,e[i+3]=S*T-h*_-m*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(s/2),S=h(l/2),_=h(c/2),g=m(s/2),M=m(l/2),T=m(c/2);switch(f){case"XYZ":this._x=g*S*_+p*M*T,this._y=p*M*_-g*S*T,this._z=p*S*T+g*M*_,this._w=p*S*_-g*M*T;break;case"YXZ":this._x=g*S*_+p*M*T,this._y=p*M*_-g*S*T,this._z=p*S*T-g*M*_,this._w=p*S*_+g*M*T;break;case"ZXY":this._x=g*S*_-p*M*T,this._y=p*M*_+g*S*T,this._z=p*S*T+g*M*_,this._w=p*S*_-g*M*T;break;case"ZYX":this._x=g*S*_-p*M*T,this._y=p*M*_+g*S*T,this._z=p*S*T-g*M*_,this._w=p*S*_+g*M*T;break;case"YZX":this._x=g*S*_+p*M*T,this._y=p*M*_+g*S*T,this._z=p*S*T-g*M*_,this._w=p*S*_-g*M*T;break;case"XZY":this._x=g*S*_-p*M*T,this._y=p*M*_-g*S*T,this._z=p*S*T+g*M*_,this._w=p*S*_+g*M*T;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],S=i[6],_=i[10],g=s+h+_;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(S-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(s>h&&s>_){const M=2*Math.sqrt(1+s-h-_);this._w=(S-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>_){const M=2*Math.sqrt(1+h-s-_);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+S)/M}else{const M=2*Math.sqrt(1+_-s-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,S=i._w;return this._x=s*S+f*h+l*p-c*m,this._y=l*S+f*m+c*h-s*p,this._z=c*S+f*p+s*m-l*h,this._w=f*S-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,h=this.dot(e);h<0&&(s=-s,l=-l,c=-c,f=-f,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),S=Math.sin(p);m=Math.sin(m*p)/S,i=Math.sin(i*p)/S,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const mp=class mp{constructor(e=0,i=0,s=0){this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(gx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(gx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*s),S=2*(h*i-c*l),_=2*(c*s-f*i);return this.x=i+m*p+f*_-h*S,this.y=s+m*S+h*p-c*_,this.z=l+m*_+c*S-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-s*m,this.z=s*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return yd.copy(this).projectOnVector(e),this.sub(yd)}reflect(e){return this.sub(yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(bt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mp.prototype.isVector3=!0;let ae=mp;const yd=new ae,gx=new Wr,gp=class gp{constructor(e,i,s,l,c,f,h,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p)}set(e,i,s,l,c,f,h,m,p){const S=this.elements;return S[0]=e,S[1]=l,S[2]=h,S[3]=i,S[4]=c,S[5]=m,S[6]=s,S[7]=f,S[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],S=s[4],_=s[7],g=s[2],M=s[5],T=s[8],O=l[0],y=l[3],v=l[6],U=l[1],L=l[4],N=l[7],H=l[2],D=l[5],F=l[8];return c[0]=f*O+h*U+m*H,c[3]=f*y+h*L+m*D,c[6]=f*v+h*N+m*F,c[1]=p*O+S*U+_*H,c[4]=p*y+S*L+_*D,c[7]=p*v+S*N+_*F,c[2]=g*O+M*U+T*H,c[5]=g*y+M*L+T*D,c[8]=g*v+M*N+T*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],S=e[8];return i*f*S-i*h*p-s*c*S+s*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],S=e[8],_=S*f-h*p,g=h*m-S*c,M=p*c-f*m,T=i*_+s*g+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const O=1/T;return e[0]=_*O,e[1]=(l*p-S*s)*O,e[2]=(h*s-l*f)*O,e[3]=g*O,e[4]=(S*i-l*m)*O,e[5]=(l*c-h*i)*O,e[6]=M*O,e[7]=(s*m-p*i)*O,e[8]=(f*i-s*c)*O,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Md.makeScale(e,i)),this}rotate(e){return this.premultiply(Md.makeRotation(-e)),this}translate(e,i){return this.premultiply(Md.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}};gp.prototype.isMatrix3=!0;let ct=gp;const Md=new ct,xx=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_x=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sM(){const r={enabled:!0,workingColorSpace:Qc,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Wt&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Wt&&(l.r=Br(l.r),l.g=Br(l.g),l.b=Br(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===os?Jc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Vh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Vh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Qc]:{primaries:e,whitePoint:s,transfer:Jc,toXYZ:xx,fromXYZ:_x,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Ei},outputColorSpaceConfig:{drawingBufferColorSpace:Ei}},[Ei]:{primaries:e,whitePoint:s,transfer:Wt,toXYZ:xx,fromXYZ:_x,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Ei}}}),r}const At=sM();function ba(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Br(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let yr;class rM{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{yr===void 0&&(yr=$c("canvas")),yr.width=e.width,yr.height=e.height;const l=yr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=yr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=$c("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ba(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ba(i[s]/255)*255):i[s]=ba(i[s]);return{data:i,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oM=0;class sp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=Xr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayWidth,i.displayHeight,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(bd(l[f].image)):c.push(bd(l[f]))}else c=bd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function bd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?rM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let lM=0;const Ed=new ae;class Vn extends Gs{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=ya,l=ya,c=Gn,f=zs,h=Pi,m=hi,p=Vn.DEFAULT_ANISOTROPY,S=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Xr(),this.name="",this.source=new sp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){at(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tl:e.x=e.x-Math.floor(e.x);break;case ya:e.x=e.x<0?0:1;break;case uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tl:e.y=e.y-Math.floor(e.y);break;case ya:e.y=e.y<0?0:1;break;case uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=y_;Vn.DEFAULT_ANISOTROPY=1;const xp=class xp{constructor(e=0,i=0,s=0,l=1){this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const m=e.elements,p=m[0],S=m[4],_=m[8],g=m[1],M=m[5],T=m[9],O=m[2],y=m[6],v=m[10];if(Math.abs(S-g)<.01&&Math.abs(_-O)<.01&&Math.abs(T-y)<.01){if(Math.abs(S+g)<.1&&Math.abs(_+O)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,N=(M+1)/2,H=(v+1)/2,D=(S+g)/4,F=(_+O)/4,E=(T+y)/4;return L>N&&L>H?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=D/s,c=F/s):N>H?N<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),s=D/l,c=E/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=F/c,l=E/c),this.set(s,l,c,i),this}let U=Math.sqrt((y-T)*(y-T)+(_-O)*(_-O)+(g-S)*(g-S));return Math.abs(U)<.001&&(U=1),this.x=(y-T)/U,this.y=(_-O)/U,this.z=(g-S)/U,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=bt(this.x,e.x,i.x),this.y=bt(this.y,e.y,i.y),this.z=bt(this.z,e.z,i.z),this.w=bt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=bt(this.x,e,i),this.y=bt(this.y,e,i),this.z=bt(this.z,e,i),this.w=bt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(bt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};xp.prototype.isVector4=!0;let cn=xp;class cM extends Gs{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,e,i),this.scissorTest=!1,this.viewport=new cn(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Vn(l),f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new sp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends cM{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class N_ extends Vn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uM extends Vn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const nu=class nu{constructor(e,i,s,l,c,f,h,m,p,S,_,g,M,T,O,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,h,m,p,S,_,g,M,T,O,y)}set(e,i,s,l,c,f,h,m,p,S,_,g,M,T,O,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=f,v[9]=h,v[13]=m,v[2]=p,v[6]=S,v[10]=_,v[14]=g,v[3]=M,v[7]=T,v[11]=O,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nu().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Mr.setFromMatrixColumn(e,0).length(),c=1/Mr.setFromMatrixColumn(e,1).length(),f=1/Mr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),S=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const g=f*S,M=f*_,T=h*S,O=h*_;i[0]=m*S,i[4]=-m*_,i[8]=p,i[1]=M+T*p,i[5]=g-O*p,i[9]=-h*m,i[2]=O-g*p,i[6]=T+M*p,i[10]=f*m}else if(e.order==="YXZ"){const g=m*S,M=m*_,T=p*S,O=p*_;i[0]=g+O*h,i[4]=T*h-M,i[8]=f*p,i[1]=f*_,i[5]=f*S,i[9]=-h,i[2]=M*h-T,i[6]=O+g*h,i[10]=f*m}else if(e.order==="ZXY"){const g=m*S,M=m*_,T=p*S,O=p*_;i[0]=g-O*h,i[4]=-f*_,i[8]=T+M*h,i[1]=M+T*h,i[5]=f*S,i[9]=O-g*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const g=f*S,M=f*_,T=h*S,O=h*_;i[0]=m*S,i[4]=T*p-M,i[8]=g*p+O,i[1]=m*_,i[5]=O*p+g,i[9]=M*p-T,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const g=f*m,M=f*p,T=h*m,O=h*p;i[0]=m*S,i[4]=O-g*_,i[8]=T*_+M,i[1]=_,i[5]=f*S,i[9]=-h*S,i[2]=-p*S,i[6]=M*_+T,i[10]=g-O*_}else if(e.order==="XZY"){const g=f*m,M=f*p,T=h*m,O=h*p;i[0]=m*S,i[4]=-_,i[8]=p*S,i[1]=g*_+O,i[5]=f*S,i[9]=M*_-T,i[2]=T*_-M,i[6]=h*S,i[10]=O*_+g}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fM,e,dM)}lookAt(e,i,s){const l=this.elements;return ui.subVectors(e,i),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),ts.crossVectors(s,ui),ts.lengthSq()===0&&(Math.abs(s.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),ts.crossVectors(s,ui)),ts.normalize(),_c.crossVectors(ui,ts),l[0]=ts.x,l[4]=_c.x,l[8]=ui.x,l[1]=ts.y,l[5]=_c.y,l[9]=ui.y,l[2]=ts.z,l[6]=_c.z,l[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],S=s[1],_=s[5],g=s[9],M=s[13],T=s[2],O=s[6],y=s[10],v=s[14],U=s[3],L=s[7],N=s[11],H=s[15],D=l[0],F=l[4],E=l[8],I=l[12],q=l[1],V=l[5],K=l[9],fe=l[13],he=l[2],X=l[6],z=l[10],G=l[14],B=l[3],te=l[7],ue=l[11],P=l[15];return c[0]=f*D+h*q+m*he+p*B,c[4]=f*F+h*V+m*X+p*te,c[8]=f*E+h*K+m*z+p*ue,c[12]=f*I+h*fe+m*G+p*P,c[1]=S*D+_*q+g*he+M*B,c[5]=S*F+_*V+g*X+M*te,c[9]=S*E+_*K+g*z+M*ue,c[13]=S*I+_*fe+g*G+M*P,c[2]=T*D+O*q+y*he+v*B,c[6]=T*F+O*V+y*X+v*te,c[10]=T*E+O*K+y*z+v*ue,c[14]=T*I+O*fe+y*G+v*P,c[3]=U*D+L*q+N*he+H*B,c[7]=U*F+L*V+N*X+H*te,c[11]=U*E+L*K+N*z+H*ue,c[15]=U*I+L*fe+N*G+H*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],S=e[2],_=e[6],g=e[10],M=e[14],T=e[3],O=e[7],y=e[11],v=e[15],U=m*M-p*g,L=h*M-p*_,N=h*g-m*_,H=f*M-p*S,D=f*g-m*S,F=f*_-h*S;return i*(O*U-y*L+v*N)-s*(T*U-y*H+v*D)+l*(T*L-O*H+v*F)-c*(T*N-O*D+y*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],S=e[8],_=e[9],g=e[10],M=e[11],T=e[12],O=e[13],y=e[14],v=e[15],U=i*h-s*f,L=i*m-l*f,N=i*p-c*f,H=s*m-l*h,D=s*p-c*h,F=l*p-c*m,E=S*O-_*T,I=S*y-g*T,q=S*v-M*T,V=_*y-g*O,K=_*v-M*O,fe=g*v-M*y,he=U*fe-L*K+N*V+H*q-D*I+F*E;if(he===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/he;return e[0]=(h*fe-m*K+p*V)*X,e[1]=(l*K-s*fe-c*V)*X,e[2]=(O*F-y*D+v*H)*X,e[3]=(g*D-_*F-M*H)*X,e[4]=(m*q-f*fe-p*I)*X,e[5]=(i*fe-l*q+c*I)*X,e[6]=(y*N-T*F-v*L)*X,e[7]=(S*F-g*N+M*L)*X,e[8]=(f*K-h*q+p*E)*X,e[9]=(s*q-i*K-c*E)*X,e[10]=(T*D-O*N+v*U)*X,e[11]=(_*N-S*D-M*U)*X,e[12]=(h*I-f*V-m*E)*X,e[13]=(i*V-s*I+l*E)*X,e[14]=(O*L-T*H-y*U)*X,e[15]=(S*H-_*L+g*U)*X,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,h=e.y,m=e.z,p=c*f,S=c*h;return this.set(p*f+s,p*h-l*m,p*m+l*h,0,p*h+l*m,S*h+s,S*m-l*f,0,p*m-l*h,S*m+l*f,c*m*m+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,S=f+f,_=h+h,g=c*p,M=c*S,T=c*_,O=f*S,y=f*_,v=h*_,U=m*p,L=m*S,N=m*_,H=s.x,D=s.y,F=s.z;return l[0]=(1-(O+v))*H,l[1]=(M+N)*H,l[2]=(T-L)*H,l[3]=0,l[4]=(M-N)*D,l[5]=(1-(g+v))*D,l[6]=(y+U)*D,l[7]=0,l[8]=(T+L)*F,l[9]=(y-U)*F,l[10]=(1-(g+O))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Mr.set(l[0],l[1],l[2]).length();const h=Mr.set(l[4],l[5],l[6]).length(),m=Mr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ni.copy(this);const p=1/f,S=1/h,_=1/m;return Ni.elements[0]*=p,Ni.elements[1]*=p,Ni.elements[2]*=p,Ni.elements[4]*=S,Ni.elements[5]*=S,Ni.elements[6]*=S,Ni.elements[8]*=_,Ni.elements[9]*=_,Ni.elements[10]*=_,i.setFromRotationMatrix(Ni),s.x=f,s.y=h,s.z=m,this}makePerspective(e,i,s,l,c,f,h=qi,m=!1){const p=this.elements,S=2*c/(i-e),_=2*c/(s-l),g=(i+e)/(i-e),M=(s+l)/(s-l);let T,O;if(m)T=c/(f-c),O=f*c/(f-c);else if(h===qi)T=-(f+c)/(f-c),O=-2*f*c/(f-c);else if(h===al)T=-f/(f-c),O=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=S,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=O,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,c,f,h=qi,m=!1){const p=this.elements,S=2/(i-e),_=2/(s-l),g=-(i+e)/(i-e),M=-(s+l)/(s-l);let T,O;if(m)T=1/(f-c),O=f/(f-c);else if(h===qi)T=-2/(f-c),O=-(f+c)/(f-c);else if(h===al)T=-1/(f-c),O=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=S,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=O,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}};nu.prototype.isMatrix4=!0;let sn=nu;const Mr=new ae,Ni=new sn,fM=new ae(0,0,0),dM=new ae(1,1,1),ts=new ae,_c=new ae,ui=new ae,vx=new sn,Sx=new Wr;class us{constructor(e=0,i=0,s=0,l=us.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],S=l[9],_=l[2],g=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(bt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-S,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-S,M),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return vx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vx,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Sx.setFromEuler(this),this.setFromQuaternion(Sx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}us.DEFAULT_ORDER="XYZ";class rp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hM=0;const yx=new ae,br=new Wr,ga=new sn,vc=new ae,jo=new ae,pM=new ae,mM=new Wr,Mx=new ae(1,0,0),bx=new ae(0,1,0),Ex=new ae(0,0,1),Tx={type:"added"},gM={type:"removed"},Er={type:"childadded",child:null},Td={type:"childremoved",child:null};class En extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=Xr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new ae,i=new us,s=new Wr,l=new ae(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new ct}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return br.setFromAxisAngle(e,i),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,i){return br.setFromAxisAngle(e,i),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Mx,e)}rotateY(e){return this.rotateOnAxis(bx,e)}rotateZ(e){return this.rotateOnAxis(Ex,e)}translateOnAxis(e,i){return yx.copy(e).applyQuaternion(this.quaternion),this.position.add(yx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Mx,e)}translateY(e){return this.translateOnAxis(bx,e)}translateZ(e){return this.translateOnAxis(Ex,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?vc.copy(e):vc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(jo,vc,this.up):ga.lookAt(vc,jo,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),br.setFromRotationMatrix(ga),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tx),Er.child=e,this.dispatchEvent(Er),Er.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(gM),Td.child=e,this.dispatchEvent(Td),Td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ga.multiply(e.parent.matrixWorld)),e.applyMatrix4(ga),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tx),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,pM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,mM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,S=m.length;p<S;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),S=f(e.images),_=f(e.shapes),g=f(e.skeletons),M=f(e.animations),T=f(e.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),S.length>0&&(s.images=S),_.length>0&&(s.shapes=_),g.length>0&&(s.skeletons=g),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(h){const m=[];for(const p in h){const S=h[p];delete S.metadata,m.push(S)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}En.DEFAULT_UP=new ae(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zr extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xM={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const O of e.hand.values()){const y=i.getJointPose(O,s),v=this._getHandJoint(p,O);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const S=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=S.position.distanceTo(_.position),M=.02,T=.005;p.inputState.pinching&&g>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(xM)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new zr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const D_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Sc={h:0,s:0,l:0};function Rd(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Ct{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=At.workingColorSpace){return this.r=e,this.g=i,this.b=s,At.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=At.workingColorSpace){if(e=ap(e,1),i=bt(i,0,1),s=bt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Rd(f,c,e+1/3),this.g=Rd(f,c,e),this.b=Rd(f,c,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,i=Ei){function s(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:at("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Ei){const s=D_[e.toLowerCase()];return s!==void 0?this.setHex(s,i):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ei){return At.workingToColorSpace(Hn.copy(this),e),Math.round(bt(Hn.r*255,0,255))*65536+Math.round(bt(Hn.g*255,0,255))*256+Math.round(bt(Hn.b*255,0,255))}getHexString(e=Ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=At.workingColorSpace){At.workingToColorSpace(Hn.copy(this),i);const s=Hn.r,l=Hn.g,c=Hn.b,f=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const S=(h+f)/2;if(h===f)m=0,p=0;else{const _=f-h;switch(p=S<=.5?_/(f+h):_/(2-f-h),f){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=S,e}getRGB(e,i=At.workingColorSpace){return At.workingToColorSpace(Hn.copy(this),i),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Ei){At.workingToColorSpace(Hn.copy(this),e);const i=Hn.r,s=Hn.g,l=Hn.b;return e!==Ei?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+i,ns.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ns),e.getHSL(Sc);const s=el(ns.h,Sc.h,i),l=el(ns.s,Sc.s,i),c=el(ns.l,Sc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Ct;Ct.NAMES=D_;class op{constructor(e,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ct(e),this.density=i}clone(){return new op(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _M extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new us,this.environmentIntensity=1,this.environmentRotation=new us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Di=new ae,xa=new ae,wd=new ae,_a=new ae,Tr=new ae,Ar=new ae,Ax=new ae,Cd=new ae,Nd=new ae,Dd=new ae,Ud=new cn,Ld=new cn,Od=new cn;class Oi{constructor(e=new ae,i=new ae,s=new ae){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Di.subVectors(e,i),l.cross(Di);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Di.subVectors(l,i),xa.subVectors(s,i),wd.subVectors(e,i);const f=Di.dot(Di),h=Di.dot(xa),m=Di.dot(wd),p=xa.dot(xa),S=xa.dot(wd),_=f*p-h*h;if(_===0)return c.set(0,0,0),null;const g=1/_,M=(p*m-h*S)*g,T=(f*S-h*m)*g;return c.set(1-M-T,T,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(e,i,s,l,c,f,h,m){return this.getBarycoord(e,i,s,l,_a)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,_a.x),m.addScaledVector(f,_a.y),m.addScaledVector(h,_a.z),m)}static getInterpolatedAttribute(e,i,s,l,c,f){return Ud.setScalar(0),Ld.setScalar(0),Od.setScalar(0),Ud.fromBufferAttribute(e,i),Ld.fromBufferAttribute(e,s),Od.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Ud,c.x),f.addScaledVector(Ld,c.y),f.addScaledVector(Od,c.z),f}static isFrontFacing(e,i,s,l){return Di.subVectors(s,i),xa.subVectors(e,i),Di.cross(xa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Di.cross(xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Oi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Oi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,h;Tr.subVectors(l,s),Ar.subVectors(c,s),Cd.subVectors(e,s);const m=Tr.dot(Cd),p=Ar.dot(Cd);if(m<=0&&p<=0)return i.copy(s);Nd.subVectors(e,l);const S=Tr.dot(Nd),_=Ar.dot(Nd);if(S>=0&&_<=S)return i.copy(l);const g=m*_-S*p;if(g<=0&&m>=0&&S<=0)return f=m/(m-S),i.copy(s).addScaledVector(Tr,f);Dd.subVectors(e,c);const M=Tr.dot(Dd),T=Ar.dot(Dd);if(T>=0&&M<=T)return i.copy(c);const O=M*p-m*T;if(O<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(s).addScaledVector(Ar,h);const y=S*T-M*_;if(y<=0&&_-S>=0&&M-T>=0)return Ax.subVectors(c,l),h=(_-S)/(_-S+(M-T)),i.copy(l).addScaledVector(Ax,h);const v=1/(y+O+g);return f=O*v,h=g*v,i.copy(s).addScaledVector(Tr,f).addScaledVector(Ar,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class sl{constructor(e=new ae(1/0,1/0,1/0),i=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ui.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ui.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ui.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,Ui):Ui.fromBufferAttribute(c,f),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),yc.copy(s.boundingBox)),yc.applyMatrix4(e.matrixWorld),this.union(yc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),Mc.subVectors(this.max,Xo),Rr.subVectors(e.a,Xo),wr.subVectors(e.b,Xo),Cr.subVectors(e.c,Xo),is.subVectors(wr,Rr),as.subVectors(Cr,wr),Ns.subVectors(Rr,Cr);let i=[0,-is.z,is.y,0,-as.z,as.y,0,-Ns.z,Ns.y,is.z,0,-is.x,as.z,0,-as.x,Ns.z,0,-Ns.x,-is.y,is.x,0,-as.y,as.x,0,-Ns.y,Ns.x,0];return!Pd(i,Rr,wr,Cr,Mc)||(i=[1,0,0,0,1,0,0,0,1],!Pd(i,Rr,wr,Cr,Mc))?!1:(bc.crossVectors(is,as),i=[bc.x,bc.y,bc.z],Pd(i,Rr,wr,Cr,Mc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Ui=new ae,yc=new sl,Rr=new ae,wr=new ae,Cr=new ae,is=new ae,as=new ae,Ns=new ae,Xo=new ae,Mc=new ae,bc=new ae,Ds=new ae;function Pd(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ds.fromArray(r,c);const h=l.x*Math.abs(Ds.x)+l.y*Math.abs(Ds.y)+l.z*Math.abs(Ds.z),m=e.dot(Ds),p=i.dot(Ds),S=s.dot(Ds);if(Math.max(-Math.max(m,p,S),Math.min(m,p,S))>h)return!1}return!0}const Sn=new ae,Ec=new Nt;let vM=0;class Ii extends Gs{constructor(e,i,s=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vM++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=fx,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ec.fromBufferAttribute(this,i),Ec.applyMatrix3(e),this.setXY(i,Ec.x,Ec.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix3(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyMatrix4(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.applyNormalMatrix(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)Sn.fromBufferAttribute(this,i),Sn.transformDirection(e),this.setXYZ(i,Sn.x,Sn.y,Sn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Ir(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ir(i,this.array)),i}setX(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ir(i,this.array)),i}setY(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ir(i,this.array)),i}setZ(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ir(i,this.array)),i}setW(e,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fx&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class U_ extends Ii{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class L_ extends Ii{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Cn extends Ii{constructor(e,i,s){super(new Float32Array(e),i,s)}}const SM=new sl,Wo=new ae,Id=new ae;class au{constructor(e=new ae,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):SM.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const i=Wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Wo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Id)),this.expandByPoint(Wo.copy(e.center).sub(Id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yM=0;const bi=new sn,zd=new En,Nr=new ae,fi=new sl,qo=new sl,wn=new ae;class $n extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=Xr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(By(e)?L_:U_)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ct().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bi.makeRotationFromQuaternion(e),this.applyMatrix4(bi),this}rotateX(e){return bi.makeRotationX(e),this.applyMatrix4(bi),this}rotateY(e){return bi.makeRotationY(e),this.applyMatrix4(bi),this}rotateZ(e){return bi.makeRotationZ(e),this.applyMatrix4(bi),this}translate(e,i,s){return bi.makeTranslation(e,i,s),this.applyMatrix4(bi),this}scale(e,i,s){return bi.makeScale(e,i,s),this.applyMatrix4(bi),this}lookAt(e){return zd.lookAt(e),zd.updateMatrix(),this.applyMatrix4(zd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Cn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];fi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new au);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const s=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];qo.setFromBufferAttribute(h),this.morphTargetsRelative?(wn.addVectors(fi.min,qo.min),fi.expandByPoint(wn),wn.addVectors(fi.max,qo.max),fi.expandByPoint(wn)):(fi.expandByPoint(qo.min),fi.expandByPoint(qo.max))}fi.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)wn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(wn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,S=h.count;p<S;p++)wn.fromBufferAttribute(h,p),m&&(Nr.fromBufferAttribute(e,p),wn.add(Nr)),l=Math.max(l,s.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ii(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let E=0;E<s.count;E++)h[E]=new ae,m[E]=new ae;const p=new ae,S=new ae,_=new ae,g=new Nt,M=new Nt,T=new Nt,O=new ae,y=new ae;function v(E,I,q){p.fromBufferAttribute(s,E),S.fromBufferAttribute(s,I),_.fromBufferAttribute(s,q),g.fromBufferAttribute(c,E),M.fromBufferAttribute(c,I),T.fromBufferAttribute(c,q),S.sub(p),_.sub(p),M.sub(g),T.sub(g);const V=1/(M.x*T.y-T.x*M.y);isFinite(V)&&(O.copy(S).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(V),y.copy(_).multiplyScalar(M.x).addScaledVector(S,-T.x).multiplyScalar(V),h[E].add(O),h[I].add(O),h[q].add(O),m[E].add(y),m[I].add(y),m[q].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let E=0,I=U.length;E<I;++E){const q=U[E],V=q.start,K=q.count;for(let fe=V,he=V+K;fe<he;fe+=3)v(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const L=new ae,N=new ae,H=new ae,D=new ae;function F(E){H.fromBufferAttribute(l,E),D.copy(H);const I=h[E];L.copy(I),L.sub(H.multiplyScalar(H.dot(I))).normalize(),N.crossVectors(D,I);const V=N.dot(m[E])<0?-1:1;f.setXYZW(E,L.x,L.y,L.z,V)}for(let E=0,I=U.length;E<I;++E){const q=U[E],V=q.start,K=q.count;for(let fe=V,he=V+K;fe<he;fe+=3)F(e.getX(fe+0)),F(e.getX(fe+1)),F(e.getX(fe+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ii(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let g=0,M=s.count;g<M;g++)s.setXYZ(g,0,0,0);const l=new ae,c=new ae,f=new ae,h=new ae,m=new ae,p=new ae,S=new ae,_=new ae;if(e)for(let g=0,M=e.count;g<M;g+=3){const T=e.getX(g+0),O=e.getX(g+1),y=e.getX(g+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,O),f.fromBufferAttribute(i,y),S.subVectors(f,c),_.subVectors(l,c),S.cross(_),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,O),p.fromBufferAttribute(s,y),h.add(S),m.add(S),p.add(S),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(O,m.x,m.y,m.z),s.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,M=i.count;g<M;g+=3)l.fromBufferAttribute(i,g+0),c.fromBufferAttribute(i,g+1),f.fromBufferAttribute(i,g+2),S.subVectors(f,c),_.subVectors(l,c),S.cross(_),s.setXYZ(g+0,S.x,S.y,S.z),s.setXYZ(g+1,S.x,S.y,S.z),s.setXYZ(g+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)wn.fromBufferAttribute(e,i),wn.normalize(),e.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function e(h,m){const p=h.array,S=h.itemSize,_=h.normalized,g=new p.constructor(m.length*S);let M=0,T=0;for(let O=0,y=m.length;O<y;O++){h.isInterleavedBufferAttribute?M=m[O]*h.data.stride+h.offset:M=m[O]*S;for(let v=0;v<S;v++)g[T++]=p[M++]}return new Ii(g,S,_)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $n,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let S=0,_=p.length;S<_;S++){const g=p[S],M=e(g,s);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],S=[];for(let _=0,g=p.length;_<g;_++){const M=p[_];S.push(M.toJSON(e.data))}S.length>0&&(l[m]=S,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const p in l){const S=l[p];this.setAttribute(p,S.clone(i))}const c=e.morphAttributes;for(const p in c){const S=[],_=c[p];for(let g=0,M=_.length;g<M;g++)S.push(_[g].clone(i));this.morphAttributes[p]=S}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,S=f.length;p<S;p++){const _=f[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let MM=0;class qr extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=Xr(),this.name="",this.type="Material",this.blending=Fr,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=nh,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ux,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){at(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){at(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(s.blending=this.blending),this.side!==cs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==th&&(s.blendSrc=this.blendSrc),this.blendDst!==nh&&(s.blendDst=this.blendDst),this.blendEquation!==Ps&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Hr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ux&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sa=new ae,Fd=new ae,Tc=new ae,ss=new ae,Bd=new ae,Ac=new ae,Hd=new ae;class lp{constructor(e=new ae,i=new ae(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Fd.copy(e).add(i).multiplyScalar(.5),Tc.copy(i).sub(e).normalize(),ss.copy(this.origin).sub(Fd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Tc),h=ss.dot(this.direction),m=-ss.dot(Tc),p=ss.lengthSq(),S=Math.abs(1-f*f);let _,g,M,T;if(S>0)if(_=f*m-h,g=f*h-m,T=c*S,_>=0)if(g>=-T)if(g<=T){const O=1/S;_*=O,g*=O,M=_*(_+f*g+2*h)+g*(f*_+g+2*m)+p}else g=c,_=Math.max(0,-(f*g+h)),M=-_*_+g*(g+2*m)+p;else g=-c,_=Math.max(0,-(f*g+h)),M=-_*_+g*(g+2*m)+p;else g<=-T?(_=Math.max(0,-(-f*c+h)),g=_>0?-c:Math.min(Math.max(-c,-m),c),M=-_*_+g*(g+2*m)+p):g<=T?(_=0,g=Math.min(Math.max(-c,-m),c),M=g*(g+2*m)+p):(_=Math.max(0,-(f*c+h)),g=_>0?c:Math.min(Math.max(-c,-m),c),M=-_*_+g*(g+2*m)+p);else g=f>0?-c:c,_=Math.max(0,-(f*g+h)),M=-_*_+g*(g+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Fd).addScaledVector(Tc,g),M}intersectSphere(e,i){Sa.subVectors(e.center,this.origin);const s=Sa.dot(this.direction),l=Sa.dot(Sa)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,h,m;const p=1/this.direction.x,S=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(s=(e.min.x-g.x)*p,l=(e.max.x-g.x)*p):(s=(e.max.x-g.x)*p,l=(e.min.x-g.x)*p),S>=0?(c=(e.min.y-g.y)*S,f=(e.max.y-g.y)*S):(c=(e.max.y-g.y)*S,f=(e.min.y-g.y)*S),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),_>=0?(h=(e.min.z-g.z)*_,m=(e.max.z-g.z)*_):(h=(e.max.z-g.z)*_,m=(e.min.z-g.z)*_),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Sa)!==null}intersectTriangle(e,i,s,l,c){Bd.subVectors(i,e),Ac.subVectors(s,e),Hd.crossVectors(Bd,Ac);let f=this.direction.dot(Hd),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;ss.subVectors(this.origin,e);const m=h*this.direction.dot(Ac.crossVectors(ss,Ac));if(m<0)return null;const p=h*this.direction.dot(Bd.cross(ss));if(p<0||m+p>f)return null;const S=-h*ss.dot(Hd);return S<0?null:this.at(S/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class cp extends qr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.combine=h_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rx=new sn,Us=new lp,Rc=new au,wx=new ae,wc=new ae,Cc=new ae,Nc=new ae,Gd=new ae,Dc=new ae,Cx=new ae,Uc=new ae;class bn extends En{constructor(e=new $n,i=new cp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Dc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const S=h[m],_=c[m];S!==0&&(Gd.fromBufferAttribute(_,e),f?Dc.addScaledVector(Gd,S):Dc.addScaledVector(Gd.sub(i),S))}i.add(Dc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(c),Us.copy(e.ray).recast(e.near),!(Rc.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Rc,wx)===null||Us.origin.distanceToSquared(wx)>(e.far-e.near)**2))&&(Rx.copy(c).invert(),Us.copy(e.ray).applyMatrix4(Rx),!(s.boundingBox!==null&&Us.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Us)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,S=c.attributes.uv1,_=c.attributes.normal,g=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let T=0,O=g.length;T<O;T++){const y=g[T],v=f[y.materialIndex],U=Math.max(y.start,M.start),L=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let N=U,H=L;N<H;N+=3){const D=h.getX(N),F=h.getX(N+1),E=h.getX(N+2);l=Lc(this,v,e,s,p,S,_,D,F,E),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),O=Math.min(h.count,M.start+M.count);for(let y=T,v=O;y<v;y+=3){const U=h.getX(y),L=h.getX(y+1),N=h.getX(y+2);l=Lc(this,f,e,s,p,S,_,U,L,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let T=0,O=g.length;T<O;T++){const y=g[T],v=f[y.materialIndex],U=Math.max(y.start,M.start),L=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let N=U,H=L;N<H;N+=3){const D=N,F=N+1,E=N+2;l=Lc(this,v,e,s,p,S,_,D,F,E),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),O=Math.min(m.count,M.start+M.count);for(let y=T,v=O;y<v;y+=3){const U=y,L=y+1,N=y+2;l=Lc(this,f,e,s,p,S,_,U,L,N),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function bM(r,e,i,s,l,c,f,h){let m;if(e.side===Jn?m=s.intersectTriangle(f,c,l,!0,h):m=s.intersectTriangle(l,c,f,e.side===cs,h),m===null)return null;Uc.copy(h),Uc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Uc);return p<i.near||p>i.far?null:{distance:p,point:Uc.clone(),object:r}}function Lc(r,e,i,s,l,c,f,h,m,p){r.getVertexPosition(h,wc),r.getVertexPosition(m,Cc),r.getVertexPosition(p,Nc);const S=bM(r,e,i,s,wc,Cc,Nc,Cx);if(S){const _=new ae;Oi.getBarycoord(Cx,wc,Cc,Nc,_),l&&(S.uv=Oi.getInterpolatedAttribute(l,h,m,p,_,new Nt)),c&&(S.uv1=Oi.getInterpolatedAttribute(c,h,m,p,_,new Nt)),f&&(S.normal=Oi.getInterpolatedAttribute(f,h,m,p,_,new ae),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const g={a:h,b:m,c:p,normal:new ae,materialIndex:0};Oi.getNormal(wc,Cc,Nc,g.normal),S.face=g,S.barycoord=_}return S}class EM extends Vn{constructor(e=null,i=1,s=1,l,c,f,h,m,p=Pn,S=Pn,_,g){super(null,f,h,m,p,S,l,c,_,g),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vd=new ae,TM=new ae,AM=new ct;class Os{constructor(e=new ae(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Vd.subVectors(s,i).cross(TM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i,s=!0){const l=e.delta(Vd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/c;return s===!0&&(f<0||f>1)?null:i.copy(e.start).addScaledVector(l,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||AM.getNormalMatrix(e),l=this.coplanarPoint(Vd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new au,RM=new Nt(.5,.5),Oc=new ae;class up{constructor(e=new Os,i=new Os,s=new Os,l=new Os,c=new Os,f=new Os){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=qi,s=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],S=c[4],_=c[5],g=c[6],M=c[7],T=c[8],O=c[9],y=c[10],v=c[11],U=c[12],L=c[13],N=c[14],H=c[15];if(l[0].setComponents(p-f,M-S,v-T,H-U).normalize(),l[1].setComponents(p+f,M+S,v+T,H+U).normalize(),l[2].setComponents(p+h,M+_,v+O,H+L).normalize(),l[3].setComponents(p-h,M-_,v-O,H-L).normalize(),s)l[4].setComponents(m,g,y,N).normalize(),l[5].setComponents(p-m,M-g,v-y,H-N).normalize();else if(l[4].setComponents(p-m,M-g,v-y,H-N).normalize(),i===qi)l[5].setComponents(p+m,M+g,v+y,H+N).normalize();else if(i===al)l[5].setComponents(m,g,y,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ls.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);const i=RM.distanceTo(e.center);return Ls.radius=.7071067811865476+i,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Oc.x=l.normal.x>0?e.max.x:e.min.x,Oc.y=l.normal.y>0?e.max.y:e.min.y,Oc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class O_ extends qr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nx=new sn,kh=new lp,Pc=new au,Ic=new ae;class wM extends En{constructor(e=new $n,i=new O_){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Pc.copy(s.boundingSphere),Pc.applyMatrix4(l),Pc.radius+=c,e.ray.intersectsSphere(Pc)===!1)return;Nx.copy(l).invert(),kh.copy(e.ray).applyMatrix4(Nx);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,_=s.attributes.position;if(p!==null){const g=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let T=g,O=M;T<O;T++){const y=p.getX(T);Ic.fromBufferAttribute(_,y),Dx(Ic,y,m,l,e,i,this)}}else{const g=Math.max(0,f.start),M=Math.min(_.count,f.start+f.count);for(let T=g,O=M;T<O;T++)Ic.fromBufferAttribute(_,T),Dx(Ic,T,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Dx(r,e,i,s,l,c,f){const h=kh.distanceSqToPoint(r);if(h<i){const m=new ae;kh.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class P_ extends Vn{constructor(e=[],i=Bs,s,l,c,f,h,m,p,S){super(e,i,s,l,c,f,h,m,p,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kd extends Vn{constructor(e,i,s,l,c,f,h,m,p){super(e,i,s,l,c,f,h,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kr extends Vn{constructor(e,i,s=Ki,l,c,f,h=Pn,m=Pn,p,S=Ta,_=1){if(S!==Ta&&S!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:i,depth:_};super(g,l,c,f,h,m,S,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class CM extends kr{constructor(e,i=Ki,s=Bs,l,c,f=Pn,h=Pn,m,p=Ta){const S={width:e,height:e,depth:1},_=[S,S,S,S,S,S];super(e,e,i,s,l,c,f,h,m,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class I_ extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xi extends $n{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],S=[],_=[];let g=0,M=0;T("z","y","x",-1,-1,s,i,e,f,c,0),T("z","y","x",1,-1,s,i,-e,f,c,1),T("x","z","y",1,1,e,s,i,l,f,2),T("x","z","y",1,-1,e,s,-i,l,f,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new Cn(p,3)),this.setAttribute("normal",new Cn(S,3)),this.setAttribute("uv",new Cn(_,2));function T(O,y,v,U,L,N,H,D,F,E,I){const q=N/F,V=H/E,K=N/2,fe=H/2,he=D/2,X=F+1,z=E+1;let G=0,B=0;const te=new ae;for(let ue=0;ue<z;ue++){const P=ue*V-fe;for(let Q=0;Q<X;Q++){const xe=Q*q-K;te[O]=xe*U,te[y]=P*L,te[v]=he,p.push(te.x,te.y,te.z),te[O]=0,te[y]=0,te[v]=D>0?1:-1,S.push(te.x,te.y,te.z),_.push(Q/F),_.push(1-ue/E),G+=1}}for(let ue=0;ue<E;ue++)for(let P=0;P<F;P++){const Q=g+P+X*ue,xe=g+P+X*(ue+1),ye=g+(P+1)+X*(ue+1),we=g+(P+1)+X*ue;m.push(Q,xe,we),m.push(xe,ye,we),B+=6}h.addGroup(M,B,I),M+=B,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class fp extends $n{constructor(e=1,i=1,s=1,l=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const S=[],_=[],g=[],M=[];let T=0;const O=[],y=s/2;let v=0;U(),f===!1&&(e>0&&L(!0),i>0&&L(!1)),this.setIndex(S),this.setAttribute("position",new Cn(_,3)),this.setAttribute("normal",new Cn(g,3)),this.setAttribute("uv",new Cn(M,2));function U(){const N=new ae,H=new ae;let D=0;const F=(i-e)/s;for(let E=0;E<=c;E++){const I=[],q=E/c,V=q*(i-e)+e;for(let K=0;K<=l;K++){const fe=K/l,he=fe*m+h,X=Math.sin(he),z=Math.cos(he);H.x=V*X,H.y=-q*s+y,H.z=V*z,_.push(H.x,H.y,H.z),N.set(X,F,z).normalize(),g.push(N.x,N.y,N.z),M.push(fe,1-q),I.push(T++)}O.push(I)}for(let E=0;E<l;E++)for(let I=0;I<c;I++){const q=O[I][E],V=O[I+1][E],K=O[I+1][E+1],fe=O[I][E+1];(e>0||I!==0)&&(S.push(q,V,fe),D+=3),(i>0||I!==c-1)&&(S.push(V,K,fe),D+=3)}p.addGroup(v,D,0),v+=D}function L(N){const H=T,D=new Nt,F=new ae;let E=0;const I=N===!0?e:i,q=N===!0?1:-1;for(let K=1;K<=l;K++)_.push(0,y*q,0),g.push(0,q,0),M.push(.5,.5),T++;const V=T;for(let K=0;K<=l;K++){const he=K/l*m+h,X=Math.cos(he),z=Math.sin(he);F.x=I*z,F.y=y*q,F.z=I*X,_.push(F.x,F.y,F.z),g.push(0,q,0),D.x=X*.5+.5,D.y=z*.5*q+.5,M.push(D.x,D.y),T++}for(let K=0;K<l;K++){const fe=H+K,he=V+K;N===!0?S.push(he,he+1,fe):S.push(he+1,he,fe),E+=3}p.addGroup(v,E,N===!0?1:2),v+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class su extends $n{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,S=m+1,_=e/h,g=i/m,M=[],T=[],O=[],y=[];for(let v=0;v<S;v++){const U=v*g-f;for(let L=0;L<p;L++){const N=L*_-c;T.push(N,-U,0),O.push(0,0,1),y.push(L/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let U=0;U<h;U++){const L=U+p*v,N=U+p*(v+1),H=U+1+p*(v+1),D=U+1+p*v;M.push(L,N,D),M.push(N,H,D)}this.setIndex(M),this.setAttribute("position",new Cn(T,3)),this.setAttribute("normal",new Cn(O,3)),this.setAttribute("uv",new Cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new su(e.width,e.height,e.widthSegments,e.heightSegments)}}class eu extends $n{constructor(e=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const h=[],m=[],p=[],S=[];let _=e;const g=(i-e)/l,M=new ae,T=new Nt;for(let O=0;O<=l;O++){for(let y=0;y<=s;y++){const v=c+y/s*f;M.x=_*Math.cos(v),M.y=_*Math.sin(v),m.push(M.x,M.y,M.z),p.push(0,0,1),T.x=(M.x/i+1)/2,T.y=(M.y/i+1)/2,S.push(T.x,T.y)}_+=g}for(let O=0;O<l;O++){const y=O*(s+1);for(let v=0;v<s;v++){const U=v+y,L=U,N=U+s+1,H=U+s+2,D=U+1;h.push(L,N,D),h.push(N,H,D)}}this.setIndex(h),this.setAttribute("position",new Cn(m,3)),this.setAttribute("normal",new Cn(p,3)),this.setAttribute("uv",new Cn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class tu extends $n{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const S=[],_=new ae,g=new ae,M=[],T=[],O=[],y=[];for(let v=0;v<=s;v++){const U=[],L=v/s;let N=0;v===0&&f===0?N=.5/i:v===s&&m===Math.PI&&(N=-.5/i);for(let H=0;H<=i;H++){const D=H/i;_.x=-e*Math.cos(l+D*c)*Math.sin(f+L*h),_.y=e*Math.cos(f+L*h),_.z=e*Math.sin(l+D*c)*Math.sin(f+L*h),T.push(_.x,_.y,_.z),g.copy(_).normalize(),O.push(g.x,g.y,g.z),y.push(D+N,1-L),U.push(p++)}S.push(U)}for(let v=0;v<s;v++)for(let U=0;U<i;U++){const L=S[v][U+1],N=S[v][U],H=S[v+1][U],D=S[v+1][U+1];(v!==0||f>0)&&M.push(L,N,D),(v!==s-1||m<Math.PI)&&M.push(N,H,D)}this.setIndex(M),this.setAttribute("position",new Cn(T,3)),this.setAttribute("normal",new Cn(O,3)),this.setAttribute("uv",new Cn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function jr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];if(Ux(l))l.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone();else if(Array.isArray(l))if(Ux(l[0])){const c=[];for(let f=0,h=l.length;f<h;f++)c[f]=l[f].clone();e[i][s]=c}else e[i][s]=l.slice();else e[i][s]=l}}return e}function Xn(r){const e={};for(let i=0;i<r.length;i++){const s=jr(r[i]);for(const l in s)e[l]=s[l]}return e}function Ux(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function NM(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function z_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const DM={clone:jr,merge:Xn};var UM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,LM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Qi extends qr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UM,this.fragmentShader=LM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=NM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class OM extends Qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class pn extends qr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gh,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class PM extends qr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IM extends qr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dp extends En{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const jd=new sn,Lx=new ae,Ox=new ae;class F_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new up,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Lx.setFromMatrixPosition(e.matrixWorld),i.position.copy(Lx),Ox.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Ox),i.updateMatrixWorld(),jd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jd,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===al||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(jd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zc=new ae,Fc=new Wr,Vi=new ae;class B_ extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zc,Fc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Fc,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(zc,Fc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zc,Fc,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new ae,Px=new Nt,Ix=new Nt;class di extends B_{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Vr*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,i){return this.getViewBounds(e,Px,Ix),i.subVectors(Ix,Px)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan($o*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class zM extends F_{constructor(){super(new di(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const i=this.camera,s=Vr*2*e.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||i.far;(s!==i.fov||l!==i.aspect||c!==i.far)&&(i.fov=s,i.aspect=l,i.far=c,i.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class FM extends dp{constructor(e,i,s=0,l=Math.PI/3,c=0,f=2){super(e,i),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.distance=s,this.angle=l,this.penumbra=c,this.decay=f,this.map=null,this.shadow=new zM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.angle=this.angle,i.object.decay=this.decay,i.object.penumbra=this.penumbra,i.object.target=this.target.uuid,this.map&&this.map.isTexture&&(i.object.map=this.map.toJSON(e).uuid),i.object.shadow=this.shadow.toJSON(),i}}class hp extends B_{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=S*this.view.offsetY,m=h-S*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class BM extends F_{constructor(){super(new hp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class HM extends dp{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new BM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class GM extends dp{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Dr=-90,Ur=1;class VM extends En{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new di(Dr,Ur,e,i);l.layers=this.layers,this.add(l);const c=new di(Dr,Ur,e,i);c.layers=this.layers,this.add(c);const f=new di(Dr,Ur,e,i);f.layers=this.layers,this.add(f);const h=new di(Dr,Ur,e,i);h.layers=this.layers,this.add(h);const m=new di(Dr,Ur,e,i);m.layers=this.layers,this.add(m);const p=new di(Dr,Ur,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===qi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===al)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,S]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const O=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),e.setRenderTarget(s,3,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,m),e.setRenderTarget(s,4,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),s.texture.generateMipmaps=O,e.setRenderTarget(s,5,l),y&&e.autoClear===!1&&e.clearDepth(),e.render(i,S),e.setRenderTarget(_,g,M),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class kM extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zx=new sn;class jM{constructor(e,i,s=0,l=1/0){this.ray=new lp(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new rp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):wt("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return zx.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zx),this}intersectObject(e,i=!0,s=[]){return jh(e,this,s,i),s.sort(Fx),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)jh(e[l],this,s,i);return s.sort(Fx),s}}function Fx(r,e){return r.distance-e.distance}function jh(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let f=0,h=c.length;f<h;f++)jh(c[f],e,i,!0)}}class XM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,at("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const _p=class _p{constructor(e,i,s,l){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,s,l)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let s=0;s<4;s++)this.elements[s]=e[s+i];return this}set(e,i,s,l){const c=this.elements;return c[0]=e,c[2]=i,c[1]=s,c[3]=l,this}};_p.prototype.isMatrix2=!0;let Bx=_p;function Hx(r,e,i,s){const l=WM(s);switch(i){case A_:return r*e;case w_:return r*e/l.components*l.byteLength;case $h:return r*e/l.components*l.byteLength;case Hs:return r*e*2/l.components*l.byteLength;case ep:return r*e*2/l.components*l.byteLength;case R_:return r*e*3/l.components*l.byteLength;case Pi:return r*e*4/l.components*l.byteLength;case tp:return r*e*4/l.components*l.byteLength;case kc:case jc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xc:case Wc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case dh:case ph:return Math.max(r,16)*Math.max(e,8)/4;case fh:case hh:return Math.max(r,8)*Math.max(e,8)/2;case mh:case gh:case _h:case vh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case xh:case Zc:case Sh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Mh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case bh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Th:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case wh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Ph:case Ih:case zh:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Fh:case Bh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Kc:case Hh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function WM(r){switch(r){case hi:case M_:return{byteLength:1,components:1};case nl:case b_:case Ea:return{byteLength:2,components:1};case Qh:case Jh:return{byteLength:2,components:4};case Ki:case Kh:case Wi:return{byteLength:4,components:1};case E_:case T_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zh}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function H_(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&r!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function qM(r){const e=new WeakMap;function i(h,m){const p=h.array,S=h.usage,_=p.byteLength,g=r.createBuffer();r.bindBuffer(m,g),r.bufferData(m,p,S),h.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function s(h,m,p){const S=m.array,_=m.updateRanges;if(r.bindBuffer(p,h),_.length===0)r.bufferSubData(p,0,S);else{_.sort((M,T)=>M.start-T.start);let g=0;for(let M=1;M<_.length;M++){const T=_[g],O=_[M];O.start<=T.start+T.count+1?T.count=Math.max(T.count,O.start+O.count-T.start):(++g,_[g]=O)}_.length=g+1;for(let M=0,T=_.length;M<T;M++){const O=_[M];r.bufferSubData(p,O.start*S.BYTES_PER_ELEMENT,S,O.start,O.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(r.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const S=e.get(h);(!S||S.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var YM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,KM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$M=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,i1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,o1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,l1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,c1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,u1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,p1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,m1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,g1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,x1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,v1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,S1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,y1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,M1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,E1="gl_FragColor = linearToOutputTexel( gl_FragColor );",T1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,R1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,w1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,C1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,D1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,I1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,F1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,H1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,G1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,V1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,k1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,j1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,W1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,q1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Y1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,K1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Q1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ib=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ab=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ob=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ub=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,db=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_b=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Eb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ab=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Nb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Db=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ub=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Lb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ob=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ib=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,kb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,iE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,aE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,hE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_E=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ME=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,bE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,EE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:YM,alphahash_pars_fragment:ZM,alphamap_fragment:KM,alphamap_pars_fragment:QM,alphatest_fragment:JM,alphatest_pars_fragment:$M,aomap_fragment:e1,aomap_pars_fragment:t1,batching_pars_vertex:n1,batching_vertex:i1,begin_vertex:a1,beginnormal_vertex:s1,bsdfs:r1,iridescence_fragment:o1,bumpmap_pars_fragment:l1,clipping_planes_fragment:c1,clipping_planes_pars_fragment:u1,clipping_planes_pars_vertex:f1,clipping_planes_vertex:d1,color_fragment:h1,color_pars_fragment:p1,color_pars_vertex:m1,color_vertex:g1,common:x1,cube_uv_reflection_fragment:_1,defaultnormal_vertex:v1,displacementmap_pars_vertex:S1,displacementmap_vertex:y1,emissivemap_fragment:M1,emissivemap_pars_fragment:b1,colorspace_fragment:E1,colorspace_pars_fragment:T1,envmap_fragment:A1,envmap_common_pars_fragment:R1,envmap_pars_fragment:w1,envmap_pars_vertex:C1,envmap_physical_pars_fragment:H1,envmap_vertex:N1,fog_vertex:D1,fog_pars_vertex:U1,fog_fragment:L1,fog_pars_fragment:O1,gradientmap_pars_fragment:P1,lightmap_pars_fragment:I1,lights_lambert_fragment:z1,lights_lambert_pars_fragment:F1,lights_pars_begin:B1,lights_toon_fragment:G1,lights_toon_pars_fragment:V1,lights_phong_fragment:k1,lights_phong_pars_fragment:j1,lights_physical_fragment:X1,lights_physical_pars_fragment:W1,lights_fragment_begin:q1,lights_fragment_maps:Y1,lights_fragment_end:Z1,lightprobes_pars_fragment:K1,logdepthbuf_fragment:Q1,logdepthbuf_pars_fragment:J1,logdepthbuf_pars_vertex:$1,logdepthbuf_vertex:eb,map_fragment:tb,map_pars_fragment:nb,map_particle_fragment:ib,map_particle_pars_fragment:ab,metalnessmap_fragment:sb,metalnessmap_pars_fragment:rb,morphinstance_vertex:ob,morphcolor_vertex:lb,morphnormal_vertex:cb,morphtarget_pars_vertex:ub,morphtarget_vertex:fb,normal_fragment_begin:db,normal_fragment_maps:hb,normal_pars_fragment:pb,normal_pars_vertex:mb,normal_vertex:gb,normalmap_pars_fragment:xb,clearcoat_normal_fragment_begin:_b,clearcoat_normal_fragment_maps:vb,clearcoat_pars_fragment:Sb,iridescence_pars_fragment:yb,opaque_fragment:Mb,packing:bb,premultiplied_alpha_fragment:Eb,project_vertex:Tb,dithering_fragment:Ab,dithering_pars_fragment:Rb,roughnessmap_fragment:wb,roughnessmap_pars_fragment:Cb,shadowmap_pars_fragment:Nb,shadowmap_pars_vertex:Db,shadowmap_vertex:Ub,shadowmask_pars_fragment:Lb,skinbase_vertex:Ob,skinning_pars_vertex:Pb,skinning_vertex:Ib,skinnormal_vertex:zb,specularmap_fragment:Fb,specularmap_pars_fragment:Bb,tonemapping_fragment:Hb,tonemapping_pars_fragment:Gb,transmission_fragment:Vb,transmission_pars_fragment:kb,uv_pars_fragment:jb,uv_pars_vertex:Xb,uv_vertex:Wb,worldpos_vertex:qb,background_vert:Yb,background_frag:Zb,backgroundCube_vert:Kb,backgroundCube_frag:Qb,cube_vert:Jb,cube_frag:$b,depth_vert:eE,depth_frag:tE,distance_vert:nE,distance_frag:iE,equirect_vert:aE,equirect_frag:sE,linedashed_vert:rE,linedashed_frag:oE,meshbasic_vert:lE,meshbasic_frag:cE,meshlambert_vert:uE,meshlambert_frag:fE,meshmatcap_vert:dE,meshmatcap_frag:hE,meshnormal_vert:pE,meshnormal_frag:mE,meshphong_vert:gE,meshphong_frag:xE,meshphysical_vert:_E,meshphysical_frag:vE,meshtoon_vert:SE,meshtoon_frag:yE,points_vert:ME,points_frag:bE,shadow_vert:EE,shadow_frag:TE,sprite_vert:AE,sprite_frag:RE},Ge={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},ji={basic:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Xn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Xn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Ct(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Xn([Ge.points,Ge.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Xn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Xn([Ge.common,Ge.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Xn([Ge.sprite,Ge.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Xn([Ge.common,Ge.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Xn([Ge.lights,Ge.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};ji.physical={uniforms:Xn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const Bc={r:0,b:0,g:0},wE=new sn,G_=new ct;G_.set(-1,0,0,0,1,0,0,0,1);function CE(r,e,i,s,l,c){const f=new Ct(0);let h=l===!0?0:1,m,p,S=null,_=0,g=null;function M(U){let L=U.isScene===!0?U.background:null;if(L&&L.isTexture){const N=U.backgroundBlurriness>0;L=e.get(L,N)}return L}function T(U){let L=!1;const N=M(U);N===null?y(f,h):N&&N.isColor&&(y(N,1),L=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?i.buffers.color.setClear(0,0,0,1,c):H==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function O(U,L){const N=M(L);N&&(N.isCubeTexture||N.mapping===iu)?(p===void 0&&(p=new bn(new Xi(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:jr(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(H,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(p)),p.material.uniforms.envMap.value=N,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(wE.makeRotationFromEuler(L.backgroundRotation)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(G_),p.material.toneMapped=At.getTransfer(N.colorSpace)!==Wt,(S!==N||_!==N.version||g!==r.toneMapping)&&(p.material.needsUpdate=!0,S=N,_=N.version,g=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null)):N&&N.isTexture&&(m===void 0&&(m=new bn(new su(2,2),new Qi({name:"BackgroundMaterial",uniforms:jr(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(m)),m.material.uniforms.t2D.value=N,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=At.getTransfer(N.colorSpace)!==Wt,N.matrixAutoUpdate===!0&&N.updateMatrix(),m.material.uniforms.uvTransform.value.copy(N.matrix),(S!==N||_!==N.version||g!==r.toneMapping)&&(m.material.needsUpdate=!0,S=N,_=N.version,g=r.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function y(U,L){U.getRGB(Bc,z_(r)),i.buffers.color.setClear(Bc.r,Bc.g,Bc.b,L,c)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(U,L=1){f.set(U),h=L,y(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(U){h=U,y(f,h)},render:T,addToRenderList:O,dispose:v}}function NE(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=g(null);let c=l,f=!1;function h(V,K,fe,he,X){let z=!1;const G=_(V,he,fe,K);c!==G&&(c=G,p(c.object)),z=M(V,he,fe,X),z&&T(V,he,fe,X),X!==null&&e.update(X,r.ELEMENT_ARRAY_BUFFER),(z||f)&&(f=!1,N(V,K,fe,he),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function m(){return r.createVertexArray()}function p(V){return r.bindVertexArray(V)}function S(V){return r.deleteVertexArray(V)}function _(V,K,fe,he){const X=he.wireframe===!0;let z=s[K.id];z===void 0&&(z={},s[K.id]=z);const G=V.isInstancedMesh===!0?V.id:0;let B=z[G];B===void 0&&(B={},z[G]=B);let te=B[fe.id];te===void 0&&(te={},B[fe.id]=te);let ue=te[X];return ue===void 0&&(ue=g(m()),te[X]=ue),ue}function g(V){const K=[],fe=[],he=[];for(let X=0;X<i;X++)K[X]=0,fe[X]=0,he[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:fe,attributeDivisors:he,object:V,attributes:{},index:null}}function M(V,K,fe,he){const X=c.attributes,z=K.attributes;let G=0;const B=fe.getAttributes();for(const te in B)if(B[te].location>=0){const P=X[te];let Q=z[te];if(Q===void 0&&(te==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),te==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor)),P===void 0||P.attribute!==Q||Q&&P.data!==Q.data)return!0;G++}return c.attributesNum!==G||c.index!==he}function T(V,K,fe,he){const X={},z=K.attributes;let G=0;const B=fe.getAttributes();for(const te in B)if(B[te].location>=0){let P=z[te];P===void 0&&(te==="instanceMatrix"&&V.instanceMatrix&&(P=V.instanceMatrix),te==="instanceColor"&&V.instanceColor&&(P=V.instanceColor));const Q={};Q.attribute=P,P&&P.data&&(Q.data=P.data),X[te]=Q,G++}c.attributes=X,c.attributesNum=G,c.index=he}function O(){const V=c.newAttributes;for(let K=0,fe=V.length;K<fe;K++)V[K]=0}function y(V){v(V,0)}function v(V,K){const fe=c.newAttributes,he=c.enabledAttributes,X=c.attributeDivisors;fe[V]=1,he[V]===0&&(r.enableVertexAttribArray(V),he[V]=1),X[V]!==K&&(r.vertexAttribDivisor(V,K),X[V]=K)}function U(){const V=c.newAttributes,K=c.enabledAttributes;for(let fe=0,he=K.length;fe<he;fe++)K[fe]!==V[fe]&&(r.disableVertexAttribArray(fe),K[fe]=0)}function L(V,K,fe,he,X,z,G){G===!0?r.vertexAttribIPointer(V,K,fe,X,z):r.vertexAttribPointer(V,K,fe,he,X,z)}function N(V,K,fe,he){O();const X=he.attributes,z=fe.getAttributes(),G=K.defaultAttributeValues;for(const B in z){const te=z[B];if(te.location>=0){let ue=X[B];if(ue===void 0&&(B==="instanceMatrix"&&V.instanceMatrix&&(ue=V.instanceMatrix),B==="instanceColor"&&V.instanceColor&&(ue=V.instanceColor)),ue!==void 0){const P=ue.normalized,Q=ue.itemSize,xe=e.get(ue);if(xe===void 0)continue;const ye=xe.buffer,we=xe.type,$=xe.bytesPerElement,Ee=we===r.INT||we===r.UNSIGNED_INT||ue.gpuType===Kh;if(ue.isInterleavedBufferAttribute){const Te=ue.data,Ie=Te.stride,tt=ue.offset;if(Te.isInstancedInterleavedBuffer){for(let Fe=0;Fe<te.locationSize;Fe++)v(te.location+Fe,Te.meshPerAttribute);V.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Fe=0;Fe<te.locationSize;Fe++)y(te.location+Fe);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let Fe=0;Fe<te.locationSize;Fe++)L(te.location+Fe,Q/te.locationSize,we,P,Ie*$,(tt+Q/te.locationSize*Fe)*$,Ee)}else{if(ue.isInstancedBufferAttribute){for(let Te=0;Te<te.locationSize;Te++)v(te.location+Te,ue.meshPerAttribute);V.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Te=0;Te<te.locationSize;Te++)y(te.location+Te);r.bindBuffer(r.ARRAY_BUFFER,ye);for(let Te=0;Te<te.locationSize;Te++)L(te.location+Te,Q/te.locationSize,we,P,Q*$,Q/te.locationSize*Te*$,Ee)}}else if(G!==void 0){const P=G[B];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(te.location,P);break;case 3:r.vertexAttrib3fv(te.location,P);break;case 4:r.vertexAttrib4fv(te.location,P);break;default:r.vertexAttrib1fv(te.location,P)}}}}U()}function H(){I();for(const V in s){const K=s[V];for(const fe in K){const he=K[fe];for(const X in he){const z=he[X];for(const G in z)S(z[G].object),delete z[G];delete he[X]}}delete s[V]}}function D(V){if(s[V.id]===void 0)return;const K=s[V.id];for(const fe in K){const he=K[fe];for(const X in he){const z=he[X];for(const G in z)S(z[G].object),delete z[G];delete he[X]}}delete s[V.id]}function F(V){for(const K in s){const fe=s[K];for(const he in fe){const X=fe[he];if(X[V.id]===void 0)continue;const z=X[V.id];for(const G in z)S(z[G].object),delete z[G];delete X[V.id]}}}function E(V){for(const K in s){const fe=s[K],he=V.isInstancedMesh===!0?V.id:0,X=fe[he];if(X!==void 0){for(const z in X){const G=X[z];for(const B in G)S(G[B].object),delete G[B];delete X[z]}delete fe[he],Object.keys(fe).length===0&&delete s[K]}}}function I(){q(),f=!0,c!==l&&(c=l,p(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:I,resetDefaultState:q,dispose:H,releaseStatesOfGeometry:D,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:O,enableAttribute:y,disableUnusedAttributes:U}}function DE(r,e,i){let s;function l(m){s=m}function c(m,p){r.drawArrays(s,m,p),i.update(p,s,1)}function f(m,p,S){S!==0&&(r.drawArraysInstanced(s,m,p,S),i.update(p,s,S))}function h(m,p,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,p,0,S);let g=0;for(let M=0;M<S;M++)g+=p[M];i.update(g,s,1)}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function UE(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Pi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const E=F===Ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==hi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Wi&&!E)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const S=m(p);S!==p&&(at("WebGLRenderer:",p,"not supported, using",S,"instead."),p=S);const _=i.logarithmicDepthBuffer===!0,g=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&g===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),O=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),v=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),N=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),H=r.getParameter(r.MAX_SAMPLES),D=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:T,maxTextureSize:O,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:N,maxSamples:H,samples:D}}function LE(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Os,h=new ct,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const M=_.length!==0||g||s!==0||l;return l=g,s=_.length,M},this.beginShadows=function(){c=!0,S(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,g){i=S(_,g,0)},this.setState=function(_,g,M){const T=_.clippingPlanes,O=_.clipIntersection,y=_.clipShadows,v=r.get(_);if(!l||T===null||T.length===0||c&&!y)c?S(null):p();else{const U=c?0:s,L=U*4;let N=v.clippingState||null;m.value=N,N=S(T,g,L,M);for(let H=0;H!==L;++H)N[H]=i[H];v.clippingState=N,this.numIntersection=O?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(_,g,M,T){const O=_!==null?_.length:0;let y=null;if(O!==0){if(y=m.value,T!==!0||y===null){const v=M+O*4,U=g.matrixWorldInverse;h.getNormalMatrix(U),(y===null||y.length<v)&&(y=new Float32Array(v));for(let L=0,N=M;L!==O;++L,N+=4)f.copy(_[L]).applyMatrix4(U,h),f.normal.toArray(y,N),y[N+3]=f.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=O,e.numIntersection=0,y}}const ls=4,Gx=[.125,.215,.35,.446,.526,.582],Is=20,OE=256,Yo=new hp,Vx=new Ct;let Xd=null,Wd=0,qd=0,Yd=!1;const PE=new ae;class kx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:h=PE}=c;Xd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xd,Wd,qd),this._renderer.xr.enabled=Yd,e.scissorTest=!1,Lr(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Bs||e.mapping===Gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Ea,format:Pi,colorSpace:Qc,depthBuffer:!1},l=jx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jx(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=IE(c)),this._blurMaterial=FE(c,e,i),this._ggxMaterial=zE(c,e,i)}return l}_compileMaterial(e){const i=new bn(new $n,e);this._renderer.compile(i,Yo)}_sceneToCubeUV(e,i,s,l,c){const m=new di(90,1,i,s),p=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,M=_.toneMapping;_.getClearColor(Vx),_.toneMapping=Yi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new Xi,new cp({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const O=this._backgroundBox,y=O.material;let v=!1;const U=e.background;U?U.isColor&&(y.color.copy(U),e.background=null,v=!0):(y.color.copy(Vx),v=!0);for(let L=0;L<6;L++){const N=L%3;N===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+S[L],c.y,c.z)):N===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+S[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+S[L]));const H=this._cubeSize;Lr(l,N*H,L>2?H:0,H,H),_.setRenderTarget(l),v&&_.render(O,m),_.render(e,m)}_.toneMapping=M,_.autoClear=g,e.background=U}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Bs||e.mapping===Gr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;Lr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Yo)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),S=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-S*S),g=0+p*1.25,M=_*g,{_lodMax:T}=this,O=this._sizeLods[s],y=3*O*(s>T-ls?s-T+ls:0),v=4*(this._cubeSize-O);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-i,Lr(c,y,v,3*O,2*O),l.setRenderTarget(c),l.render(h,Yo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=T-s,Lr(e,y,v,3*O,2*O),l.setRenderTarget(e),l.render(h,Yo)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const S=3,_=this._lodMeshes[l];_.material=p;const g=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Is-1),O=c/T,y=isFinite(c)?1+Math.floor(S*O):Is;y>Is&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Is}`);const v=[];let U=0;for(let F=0;F<Is;++F){const E=F/O,I=Math.exp(-E*E/2);v.push(I),F===0?U+=I:F<y&&(U+=2*I)}for(let F=0;F<v.length;F++)v[F]=v[F]/U;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=v,g.latitudinal.value=f==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:L}=this;g.dTheta.value=T,g.mipInt.value=L-s;const N=this._sizeLods[l],H=3*N*(l>L-ls?l-L+ls:0),D=4*(this._cubeSize-N);Lr(i,H,D,3*N,2*N),m.setRenderTarget(i),m.render(_,Yo)}}function IE(r){const e=[],i=[],s=[];let l=r;const c=r-ls+1+Gx.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);e.push(h);let m=1/h;f>r-ls?m=Gx[f-r+ls-1]:f===0&&(m=0),i.push(m);const p=1/(h-2),S=-p,_=1+p,g=[S,S,_,S,_,_,S,S,_,_,S,_],M=6,T=6,O=3,y=2,v=1,U=new Float32Array(O*T*M),L=new Float32Array(y*T*M),N=new Float32Array(v*T*M);for(let D=0;D<M;D++){const F=D%3*2/3-1,E=D>2?0:-1,I=[F,E,0,F+2/3,E,0,F+2/3,E+1,0,F,E,0,F+2/3,E+1,0,F,E+1,0];U.set(I,O*T*D),L.set(g,y*T*D);const q=[D,D,D,D,D,D];N.set(q,v*T*D)}const H=new $n;H.setAttribute("position",new Ii(U,O)),H.setAttribute("uv",new Ii(L,y)),H.setAttribute("faceIndex",new Ii(N,v)),s.push(new bn(H,null)),l>ls&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function jx(r,e,i){const s=new Zi(r,e,i);return s.texture.mapping=iu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Lr(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function zE(r,e,i){return new Qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ru(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function FE(r,e,i){const s=new Float32Array(Is),l=new ae(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:Is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function Xx(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function Wx(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class V_ extends Zi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new P_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Xi(5,5,5),c=new Qi({name:"CubemapFromEquirect",uniforms:jr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:Ma});c.uniforms.tEquirect.value=i;const f=new bn(l,c),h=i.minFilter;return i.minFilter===zs&&(i.minFilter=Gn),new VM(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function BE(r){let e=new WeakMap,i=new WeakMap,s=null;function l(g,M=!1){return g==null?null:M?f(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===_d||M===vd)if(e.has(g)){const T=e.get(g).texture;return h(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const O=new V_(T.height);return O.fromEquirectangularTexture(r,g),e.set(g,O),g.addEventListener("dispose",p),h(O.texture,g.mapping)}else return null}}return g}function f(g){if(g&&g.isTexture){const M=g.mapping,T=M===_d||M===vd,O=M===Bs||M===Gr;if(T||O){let y=i.get(g);const v=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return s===null&&(s=new kx(r)),y=T?s.fromEquirectangular(g,y):s.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),y.texture;if(y!==void 0)return y.texture;{const U=g.image;return T&&U&&U.height>0||O&&U&&m(U)?(s===null&&(s=new kx(r)),y=T?s.fromEquirectangular(g):s.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,i.set(g,y),g.addEventListener("dispose",S),y.texture):null}}}return g}function h(g,M){return M===_d?g.mapping=Bs:M===vd&&(g.mapping=Gr),g}function m(g){let M=0;const T=6;for(let O=0;O<T;O++)g[O]!==void 0&&M++;return M===T}function p(g){const M=g.target;M.removeEventListener("dispose",p);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function S(g){const M=g.target;M.removeEventListener("dispose",S);const T=i.get(M);T!==void 0&&(i.delete(M),T.dispose())}function _(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:_}}function HE(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Vh("WebGLRenderer: "+s+" extension not supported."),l}}}function GE(r,e,i,s){const l={},c=new WeakMap;function f(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",f),delete l[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),s.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,i.memory.geometries--}function h(_,g){return l[g.id]===!0||(g.addEventListener("dispose",f),l[g.id]=!0,i.memory.geometries++),g}function m(_){const g=_.attributes;for(const M in g)e.update(g[M],r.ARRAY_BUFFER)}function p(_){const g=[],M=_.index,T=_.attributes.position;let O=0;if(T===void 0)return;if(M!==null){const U=M.array;O=M.version;for(let L=0,N=U.length;L<N;L+=3){const H=U[L+0],D=U[L+1],F=U[L+2];g.push(H,D,D,F,F,H)}}else{const U=T.array;O=T.version;for(let L=0,N=U.length/3-1;L<N;L+=3){const H=L+0,D=L+1,F=L+2;g.push(H,D,D,F,F,H)}}const y=new(T.count>=65535?L_:U_)(g,1);y.version=O;const v=c.get(_);v&&e.remove(v),c.set(_,y)}function S(_){const g=c.get(_);if(g){const M=_.index;M!==null&&g.version<M.version&&p(_)}else p(_);return c.get(_)}return{get:h,update:m,getWireframeAttribute:S}}function VE(r,e,i){let s;function l(_){s=_}let c,f;function h(_){c=_.type,f=_.bytesPerElement}function m(_,g){r.drawElements(s,g,c,_*f),i.update(g,s,1)}function p(_,g,M){M!==0&&(r.drawElementsInstanced(s,g,c,_*f,M),i.update(g,s,M))}function S(_,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,g,0,c,_,0,M);let O=0;for(let y=0;y<M;y++)O+=g[y];i.update(O,s,1)}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=S}function kE(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=h*(c/3);break;case r.LINES:i.lines+=h*(c/2);break;case r.LINE_STRIP:i.lines+=h*(c-1);break;case r.LINE_LOOP:i.lines+=h*c;break;case r.POINTS:i.points+=h*c;break;default:wt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function jE(r,e,i){const s=new WeakMap,l=new cn;function c(f,h,m){const p=f.morphTargetInfluences,S=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=S!==void 0?S.length:0;let g=s.get(h);if(g===void 0||g.count!==_){let q=function(){E.dispose(),s.delete(h),h.removeEventListener("dispose",q)};var M=q;g!==void 0&&g.texture.dispose();const T=h.morphAttributes.position!==void 0,O=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],U=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let N=0;T===!0&&(N=1),O===!0&&(N=2),y===!0&&(N=3);let H=h.attributes.position.count*N,D=1;H>e.maxTextureSize&&(D=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const F=new Float32Array(H*D*4*_),E=new N_(F,H,D,_);E.type=Wi,E.needsUpdate=!0;const I=N*4;for(let V=0;V<_;V++){const K=v[V],fe=U[V],he=L[V],X=H*D*4*V;for(let z=0;z<K.count;z++){const G=z*I;T===!0&&(l.fromBufferAttribute(K,z),F[X+G+0]=l.x,F[X+G+1]=l.y,F[X+G+2]=l.z,F[X+G+3]=0),O===!0&&(l.fromBufferAttribute(fe,z),F[X+G+4]=l.x,F[X+G+5]=l.y,F[X+G+6]=l.z,F[X+G+7]=0),y===!0&&(l.fromBufferAttribute(he,z),F[X+G+8]=l.x,F[X+G+9]=l.y,F[X+G+10]=l.z,F[X+G+11]=he.itemSize===4?l.w:1)}}g={count:_,texture:E,size:new Nt(H,D)},s.set(h,g),h.addEventListener("dispose",q)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const O=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(r,"morphTargetBaseInfluence",O),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",g.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",g.size)}return{update:c}}function XE(r,e,i,s,l){let c=new WeakMap;function f(p){const S=l.render.frame,_=p.geometry,g=e.get(p,_);if(c.get(g)!==S&&(e.update(g),c.set(g,S)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==S&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),c.set(p,S))),p.isSkinnedMesh){const M=p.skeleton;c.get(M)!==S&&(M.update(),c.set(M,S))}return g}function h(){c=new WeakMap}function m(p){const S=p.target;S.removeEventListener("dispose",m),s.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:f,dispose:h}}const WE={[p_]:"LINEAR_TONE_MAPPING",[m_]:"REINHARD_TONE_MAPPING",[g_]:"CINEON_TONE_MAPPING",[x_]:"ACES_FILMIC_TONE_MAPPING",[v_]:"AGX_TONE_MAPPING",[S_]:"NEUTRAL_TONE_MAPPING",[__]:"CUSTOM_TONE_MAPPING"};function qE(r,e,i,s,l){const c=new Zi(e,i,{type:r,depthBuffer:s,stencilBuffer:l,depthTexture:s?new kr(e,i):void 0}),f=new Zi(e,i,{type:Ea,depthBuffer:!1,stencilBuffer:!1}),h=new $n;h.setAttribute("position",new Cn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Cn([0,2,0,0,2,0],2));const m=new OM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new bn(h,m),S=new hp(-1,1,1,-1,0,1);let _=null,g=null,M=!1,T,O=null,y=[],v=!1;this.setSize=function(U,L){c.setSize(U,L),f.setSize(U,L);for(let N=0;N<y.length;N++){const H=y[N];H.setSize&&H.setSize(U,L)}},this.setEffects=function(U){y=U,v=y.length>0&&y[0].isRenderPass===!0;const L=c.width,N=c.height;for(let H=0;H<y.length;H++){const D=y[H];D.setSize&&D.setSize(L,N)}},this.begin=function(U,L){if(M||U.toneMapping===Yi&&y.length===0)return!1;if(O=L,L!==null){const N=L.width,H=L.height;(c.width!==N||c.height!==H)&&this.setSize(N,H)}return v===!1&&U.setRenderTarget(c),T=U.toneMapping,U.toneMapping=Yi,!0},this.hasRenderPass=function(){return v},this.end=function(U,L){U.toneMapping=T,M=!0;let N=c,H=f;for(let D=0;D<y.length;D++){const F=y[D];if(F.enabled!==!1&&(F.render(U,H,N,L),F.needsSwap!==!1)){const E=N;N=H,H=E}}if(_!==U.outputColorSpace||g!==U.toneMapping){_=U.outputColorSpace,g=U.toneMapping,m.defines={},At.getTransfer(_)===Wt&&(m.defines.SRGB_TRANSFER="");const D=WE[g];D&&(m.defines[D]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,U.setRenderTarget(O),U.render(p,S),O=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const k_=new Vn,Xh=new kr(1,1),j_=new N_,X_=new uM,W_=new P_,qx=[],Yx=[],Zx=new Float32Array(16),Kx=new Float32Array(9),Qx=new Float32Array(4);function Yr(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=qx[l];if(c===void 0&&(c=new Float32Array(l),qx[l]=c),e!==0){s.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,r[f].toArray(c,h)}return c}function Tn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function An(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function ou(r,e){let i=Yx[e];i===void 0&&(i=new Int32Array(e),Yx[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function YE(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function ZE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2fv(this.addr,e),An(i,e)}}function KE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Tn(i,e))return;r.uniform3fv(this.addr,e),An(i,e)}}function QE(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4fv(this.addr,e),An(i,e)}}function JE(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,s))return;Qx.set(s),r.uniformMatrix2fv(this.addr,!1,Qx),An(i,s)}}function $E(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,s))return;Kx.set(s),r.uniformMatrix3fv(this.addr,!1,Kx),An(i,s)}}function eT(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),An(i,e)}else{if(Tn(i,s))return;Zx.set(s),r.uniformMatrix4fv(this.addr,!1,Zx),An(i,s)}}function tT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function nT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2iv(this.addr,e),An(i,e)}}function iT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;r.uniform3iv(this.addr,e),An(i,e)}}function aT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4iv(this.addr,e),An(i,e)}}function sT(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function rT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;r.uniform2uiv(this.addr,e),An(i,e)}}function oT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;r.uniform3uiv(this.addr,e),An(i,e)}}function lT(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;r.uniform4uiv(this.addr,e),An(i,e)}}function cT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Xh.compareFunction=i.isReversedDepthBuffer()?ip:np,c=Xh):c=k_,i.setTexture2D(e||c,l)}function uT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||X_,l)}function fT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||W_,l)}function dT(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||j_,l)}function hT(r){switch(r){case 5126:return YE;case 35664:return ZE;case 35665:return KE;case 35666:return QE;case 35674:return JE;case 35675:return $E;case 35676:return eT;case 5124:case 35670:return tT;case 35667:case 35671:return nT;case 35668:case 35672:return iT;case 35669:case 35673:return aT;case 5125:return sT;case 36294:return rT;case 36295:return oT;case 36296:return lT;case 35678:case 36198:case 36298:case 36306:case 35682:return cT;case 35679:case 36299:case 36307:return uT;case 35680:case 36300:case 36308:case 36293:return fT;case 36289:case 36303:case 36311:case 36292:return dT}}function pT(r,e){r.uniform1fv(this.addr,e)}function mT(r,e){const i=Yr(e,this.size,2);r.uniform2fv(this.addr,i)}function gT(r,e){const i=Yr(e,this.size,3);r.uniform3fv(this.addr,i)}function xT(r,e){const i=Yr(e,this.size,4);r.uniform4fv(this.addr,i)}function _T(r,e){const i=Yr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function vT(r,e){const i=Yr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function ST(r,e){const i=Yr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function yT(r,e){r.uniform1iv(this.addr,e)}function MT(r,e){r.uniform2iv(this.addr,e)}function bT(r,e){r.uniform3iv(this.addr,e)}function ET(r,e){r.uniform4iv(this.addr,e)}function TT(r,e){r.uniform1uiv(this.addr,e)}function AT(r,e){r.uniform2uiv(this.addr,e)}function RT(r,e){r.uniform3uiv(this.addr,e)}function wT(r,e){r.uniform4uiv(this.addr,e)}function CT(r,e,i){const s=this.cache,l=e.length,c=ou(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=Xh:f=k_;for(let h=0;h!==l;++h)i.setTexture2D(e[h]||f,c[h])}function NT(r,e,i){const s=this.cache,l=e.length,c=ou(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||X_,c[f])}function DT(r,e,i){const s=this.cache,l=e.length,c=ou(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||W_,c[f])}function UT(r,e,i){const s=this.cache,l=e.length,c=ou(i,l);Tn(s,c)||(r.uniform1iv(this.addr,c),An(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||j_,c[f])}function LT(r){switch(r){case 5126:return pT;case 35664:return mT;case 35665:return gT;case 35666:return xT;case 35674:return _T;case 35675:return vT;case 35676:return ST;case 5124:case 35670:return yT;case 35667:case 35671:return MT;case 35668:case 35672:return bT;case 35669:case 35673:return ET;case 5125:return TT;case 36294:return AT;case 36295:return RT;case 36296:return wT;case 35678:case 36198:case 36298:case 36306:case 35682:return CT;case 35679:case 36299:case 36307:return NT;case 35680:case 36300:case 36308:case 36293:return DT;case 36289:case 36303:case 36311:case 36292:return UT}}class OT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=hT(i.type)}}class PT{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=LT(i.type)}}class IT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],s)}}}const Zd=/(\w+)(\])?(\[|\.)?/g;function Jx(r,e){r.seq.push(e),r.map[e.id]=e}function zT(r,e,i){const s=r.name,l=s.length;for(Zd.lastIndex=0;;){const c=Zd.exec(s),f=Zd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){Jx(i,p===void 0?new OT(h,r,e):new PT(h,r,e));break}else{let _=i.map[h];_===void 0&&(_=new IT(h),Jx(i,_)),i=_}}}class qc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=e.getActiveUniform(i,f),m=e.getUniformLocation(i,h.name);zT(h,m,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function $x(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const FT=37297;let BT=0;function HT(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;s.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return s.join(`
`)}const e_=new ct;function GT(r){At._getMatrix(e_,At.workingColorSpace,r);const e=`mat3( ${e_.elements.map(i=>i.toFixed(4))} )`;switch(At.getTransfer(r)){case Jc:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function t_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+HT(r.getShaderSource(e),h)}else return c}function VT(r,e){const i=GT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const kT={[p_]:"Linear",[m_]:"Reinhard",[g_]:"Cineon",[x_]:"ACESFilmic",[v_]:"AgX",[S_]:"Neutral",[__]:"Custom"};function jT(r,e){const i=kT[e];return i===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Hc=new ae;function XT(){At.getLuminanceCoefficients(Hc);const r=Hc.x.toFixed(4),e=Hc.y.toFixed(4),i=Hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qo).join(`
`)}function qT(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function YT(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:h}}return i}function Qo(r){return r!==""}function n_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function i_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wh(r){return r.replace(ZT,QT)}const KT=new Map;function QT(r,e){let i=gt[e];if(i===void 0){const s=KT.get(e);if(s!==void 0)i=gt[s],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Wh(i)}const JT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a_(r){return r.replace(JT,$T)}function $T(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function s_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const eA={[Vc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function tA(r){return eA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nA={[Bs]:"ENVMAP_TYPE_CUBE",[Gr]:"ENVMAP_TYPE_CUBE",[iu]:"ENVMAP_TYPE_CUBE_UV"};function iA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":nA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const aA={[Gr]:"ENVMAP_MODE_REFRACTION"};function sA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":aA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rA={[h_]:"ENVMAP_BLENDING_MULTIPLY",[wy]:"ENVMAP_BLENDING_MIX",[Cy]:"ENVMAP_BLENDING_ADD"};function oA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":rA[r.combine]||"ENVMAP_BLENDING_NONE"}function lA(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function cA(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=tA(i),p=iA(i),S=sA(i),_=oA(i),g=lA(i),M=WT(i),T=qT(c),O=l.createProgram();let y,v,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Qo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Qo).join(`
`),v.length>0&&(v+=`
`)):(y=[s_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),v=[s_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+S:"",i.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Yi?"#define TONE_MAPPING":"",i.toneMapping!==Yi?gt.tonemapping_pars_fragment:"",i.toneMapping!==Yi?jT("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,VT("linearToOutputTexel",i.outputColorSpace),XT(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Qo).join(`
`)),f=Wh(f),f=n_(f,i),f=i_(f,i),h=Wh(h),h=n_(h,i),h=i_(h,i),f=a_(f),h=a_(h),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===dx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===dx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=U+y+f,N=U+v+h,H=$x(l,l.VERTEX_SHADER,L),D=$x(l,l.FRAGMENT_SHADER,N);l.attachShader(O,H),l.attachShader(O,D),i.index0AttributeName!==void 0?l.bindAttribLocation(O,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(O,0,"position"),l.linkProgram(O);function F(V){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(O)||"",fe=l.getShaderInfoLog(H)||"",he=l.getShaderInfoLog(D)||"",X=K.trim(),z=fe.trim(),G=he.trim();let B=!0,te=!0;if(l.getProgramParameter(O,l.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,O,H,D);else{const ue=t_(l,H,"vertex"),P=t_(l,D,"fragment");wt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(O,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+X+`
`+ue+`
`+P)}else X!==""?at("WebGLProgram: Program Info Log:",X):(z===""||G==="")&&(te=!1);te&&(V.diagnostics={runnable:B,programLog:X,vertexShader:{log:z,prefix:y},fragmentShader:{log:G,prefix:v}})}l.deleteShader(H),l.deleteShader(D),E=new qc(l,O),I=YT(l,O)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let q=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=l.getProgramParameter(O,FT)),q},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(O),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=BT++,this.cacheKey=e,this.usedTimes=1,this.program=O,this.vertexShader=H,this.fragmentShader=D,this}let uA=0;class fA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new dA(e),i.set(e,s)),s}}class dA{constructor(e){this.id=uA++,this.code=e,this.usedTimes=0}}function hA(r){return r===Hs||r===Zc||r===Kc}function pA(r,e,i,s,l,c){const f=new rp,h=new fA,m=new Set,p=[],S=new Map,_=s.logarithmicDepthBuffer;let g=s.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return m.add(E),E===0?"uv":`uv${E}`}function O(E,I,q,V,K,fe){const he=V.fog,X=K.geometry,z=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,G=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,B=e.get(E.envMap||z,G),te=B&&B.mapping===iu?B.image.height:null,ue=M[E.type];E.precision!==null&&(g=s.getMaxPrecision(E.precision),g!==E.precision&&at("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const P=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Q=P!==void 0?P.length:0;let xe=0;X.morphAttributes.position!==void 0&&(xe=1),X.morphAttributes.normal!==void 0&&(xe=2),X.morphAttributes.color!==void 0&&(xe=3);let ye,we,$,Ee;if(ue){const st=ji[ue];ye=st.vertexShader,we=st.fragmentShader}else ye=E.vertexShader,we=E.fragmentShader,h.update(E),$=h.getVertexShaderID(E),Ee=h.getFragmentShaderID(E);const Te=r.getRenderTarget(),Ie=r.state.buffers.depth.getReversed(),tt=K.isInstancedMesh===!0,Fe=K.isBatchedMesh===!0,Dt=!!E.map,dt=!!E.matcap,Je=!!B,Rt=!!E.aoMap,nt=!!E.lightMap,Et=!!E.bumpMap,Pt=!!E.normalMap,un=!!E.displacementMap,Z=!!E.emissiveMap,Ht=!!E.metalnessMap,ht=!!E.roughnessMap,It=E.anisotropy>0,ge=E.clearcoat>0,qe=E.dispersion>0,A=E.iridescence>0,b=E.sheen>0,j=E.transmission>0,de=It&&!!E.anisotropyMap,Se=ge&&!!E.clearcoatMap,Ae=ge&&!!E.clearcoatNormalMap,Ce=ge&&!!E.clearcoatRoughnessMap,ne=A&&!!E.iridescenceMap,me=A&&!!E.iridescenceThicknessMap,Oe=b&&!!E.sheenColorMap,Pe=b&&!!E.sheenRoughnessMap,Ue=!!E.specularMap,De=!!E.specularColorMap,rt=!!E.specularIntensityMap,ot=j&&!!E.transmissionMap,xt=j&&!!E.thicknessMap,W=!!E.gradientMap,Ne=!!E.alphaMap,ve=E.alphaTest>0,He=!!E.alphaHash,Le=!!E.extensions;let Re=Yi;E.toneMapped&&(Te===null||Te.isXRRenderTarget===!0)&&(Re=r.toneMapping);const Ye={shaderID:ue,shaderType:E.type,shaderName:E.name,vertexShader:ye,fragmentShader:we,defines:E.defines,customVertexShaderID:$,customFragmentShaderID:Ee,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Fe,batchingColor:Fe&&K._colorsTexture!==null,instancing:tt,instancingColor:tt&&K.instanceColor!==null,instancingMorph:tt&&K.morphTexture!==null,outputColorSpace:Te===null?r.outputColorSpace:Te.isXRRenderTarget===!0?Te.texture.colorSpace:At.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Dt,matcap:dt,envMap:Je,envMapMode:Je&&B.mapping,envMapCubeUVHeight:te,aoMap:Rt,lightMap:nt,bumpMap:Et,normalMap:Pt,displacementMap:un,emissiveMap:Z,normalMapObjectSpace:Pt&&E.normalMapType===Uy,normalMapTangentSpace:Pt&&E.normalMapType===Gh,packedNormalMap:Pt&&E.normalMapType===Gh&&hA(E.normalMap.format),metalnessMap:Ht,roughnessMap:ht,anisotropy:It,anisotropyMap:de,clearcoat:ge,clearcoatMap:Se,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ce,dispersion:qe,iridescence:A,iridescenceMap:ne,iridescenceThicknessMap:me,sheen:b,sheenColorMap:Oe,sheenRoughnessMap:Pe,specularMap:Ue,specularColorMap:De,specularIntensityMap:rt,transmission:j,transmissionMap:ot,thicknessMap:xt,gradientMap:W,opaque:E.transparent===!1&&E.blending===Fr&&E.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ve,alphaHash:He,combine:E.combine,mapUv:Dt&&T(E.map.channel),aoMapUv:Rt&&T(E.aoMap.channel),lightMapUv:nt&&T(E.lightMap.channel),bumpMapUv:Et&&T(E.bumpMap.channel),normalMapUv:Pt&&T(E.normalMap.channel),displacementMapUv:un&&T(E.displacementMap.channel),emissiveMapUv:Z&&T(E.emissiveMap.channel),metalnessMapUv:Ht&&T(E.metalnessMap.channel),roughnessMapUv:ht&&T(E.roughnessMap.channel),anisotropyMapUv:de&&T(E.anisotropyMap.channel),clearcoatMapUv:Se&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:me&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&T(E.sheenRoughnessMap.channel),specularMapUv:Ue&&T(E.specularMap.channel),specularColorMapUv:De&&T(E.specularColorMap.channel),specularIntensityMapUv:rt&&T(E.specularIntensityMap.channel),transmissionMapUv:ot&&T(E.transmissionMap.channel),thicknessMapUv:xt&&T(E.thicknessMap.channel),alphaMapUv:Ne&&T(E.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Pt||It),vertexNormals:!!X.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!X.attributes.uv&&(Dt||Ne),fog:!!he,useFog:E.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||X.attributes.normal===void 0&&Pt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ie,skinning:K.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:xe,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:fe.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:Re,decodeVideoTexture:Dt&&E.map.isVideoTexture===!0&&At.getTransfer(E.map.colorSpace)===Wt,decodeVideoTextureEmissive:Z&&E.emissiveMap.isVideoTexture===!0&&At.getTransfer(E.emissiveMap.colorSpace)===Wt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Li,flipSided:E.side===Jn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Le&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&E.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function y(E){const I=[];if(E.shaderID?I.push(E.shaderID):(I.push(E.customVertexShaderID),I.push(E.customFragmentShaderID)),E.defines!==void 0)for(const q in E.defines)I.push(q),I.push(E.defines[q]);return E.isRawShaderMaterial===!1&&(v(I,E),U(I,E),I.push(r.outputColorSpace)),I.push(E.customProgramCacheKey),I.join()}function v(E,I){E.push(I.precision),E.push(I.outputColorSpace),E.push(I.envMapMode),E.push(I.envMapCubeUVHeight),E.push(I.mapUv),E.push(I.alphaMapUv),E.push(I.lightMapUv),E.push(I.aoMapUv),E.push(I.bumpMapUv),E.push(I.normalMapUv),E.push(I.displacementMapUv),E.push(I.emissiveMapUv),E.push(I.metalnessMapUv),E.push(I.roughnessMapUv),E.push(I.anisotropyMapUv),E.push(I.clearcoatMapUv),E.push(I.clearcoatNormalMapUv),E.push(I.clearcoatRoughnessMapUv),E.push(I.iridescenceMapUv),E.push(I.iridescenceThicknessMapUv),E.push(I.sheenColorMapUv),E.push(I.sheenRoughnessMapUv),E.push(I.specularMapUv),E.push(I.specularColorMapUv),E.push(I.specularIntensityMapUv),E.push(I.transmissionMapUv),E.push(I.thicknessMapUv),E.push(I.combine),E.push(I.fogExp2),E.push(I.sizeAttenuation),E.push(I.morphTargetsCount),E.push(I.morphAttributeCount),E.push(I.numDirLights),E.push(I.numPointLights),E.push(I.numSpotLights),E.push(I.numSpotLightMaps),E.push(I.numHemiLights),E.push(I.numRectAreaLights),E.push(I.numDirLightShadows),E.push(I.numPointLightShadows),E.push(I.numSpotLightShadows),E.push(I.numSpotLightShadowsWithMaps),E.push(I.numLightProbes),E.push(I.shadowMapType),E.push(I.toneMapping),E.push(I.numClippingPlanes),E.push(I.numClipIntersection),E.push(I.depthPacking)}function U(E,I){f.disableAll(),I.instancing&&f.enable(0),I.instancingColor&&f.enable(1),I.instancingMorph&&f.enable(2),I.matcap&&f.enable(3),I.envMap&&f.enable(4),I.normalMapObjectSpace&&f.enable(5),I.normalMapTangentSpace&&f.enable(6),I.clearcoat&&f.enable(7),I.iridescence&&f.enable(8),I.alphaTest&&f.enable(9),I.vertexColors&&f.enable(10),I.vertexAlphas&&f.enable(11),I.vertexUv1s&&f.enable(12),I.vertexUv2s&&f.enable(13),I.vertexUv3s&&f.enable(14),I.vertexTangents&&f.enable(15),I.anisotropy&&f.enable(16),I.alphaHash&&f.enable(17),I.batching&&f.enable(18),I.dispersion&&f.enable(19),I.batchingColor&&f.enable(20),I.gradientMap&&f.enable(21),I.packedNormalMap&&f.enable(22),I.vertexNormals&&f.enable(23),E.push(f.mask),f.disableAll(),I.fog&&f.enable(0),I.useFog&&f.enable(1),I.flatShading&&f.enable(2),I.logarithmicDepthBuffer&&f.enable(3),I.reversedDepthBuffer&&f.enable(4),I.skinning&&f.enable(5),I.morphTargets&&f.enable(6),I.morphNormals&&f.enable(7),I.morphColors&&f.enable(8),I.premultipliedAlpha&&f.enable(9),I.shadowMapEnabled&&f.enable(10),I.doubleSided&&f.enable(11),I.flipSided&&f.enable(12),I.useDepthPacking&&f.enable(13),I.dithering&&f.enable(14),I.transmission&&f.enable(15),I.sheen&&f.enable(16),I.opaque&&f.enable(17),I.pointsUvs&&f.enable(18),I.decodeVideoTexture&&f.enable(19),I.decodeVideoTextureEmissive&&f.enable(20),I.alphaToCoverage&&f.enable(21),I.numLightProbeGrids>0&&f.enable(22),E.push(f.mask)}function L(E){const I=M[E.type];let q;if(I){const V=ji[I];q=DM.clone(V.uniforms)}else q=E.uniforms;return q}function N(E,I){let q=S.get(I);return q!==void 0?++q.usedTimes:(q=new cA(r,I,E,l),p.push(q),S.set(I,q)),q}function H(E){if(--E.usedTimes===0){const I=p.indexOf(E);p[I]=p[p.length-1],p.pop(),S.delete(E.cacheKey),E.destroy()}}function D(E){h.remove(E)}function F(){h.dispose()}return{getParameters:O,getProgramCacheKey:y,getUniforms:L,acquireProgram:N,releaseProgram:H,releaseShaderCache:D,programs:p,dispose:F}}function mA(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function l(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function gA(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function r_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function o_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,T,O,y,v){let U=r[e];return U===void 0?(U={id:g.id,object:g,geometry:M,material:T,materialVariant:f(g),groupOrder:O,renderOrder:g.renderOrder,z:y,group:v},r[e]=U):(U.id=g.id,U.object=g,U.geometry=M,U.material=T,U.materialVariant=f(g),U.groupOrder=O,U.renderOrder=g.renderOrder,U.z=y,U.group=v),e++,U}function m(g,M,T,O,y,v){const U=h(g,M,T,O,y,v);T.transmission>0?s.push(U):T.transparent===!0?l.push(U):i.push(U)}function p(g,M,T,O,y,v){const U=h(g,M,T,O,y,v);T.transmission>0?s.unshift(U):T.transparent===!0?l.unshift(U):i.unshift(U)}function S(g,M){i.length>1&&i.sort(g||gA),s.length>1&&s.sort(M||r_),l.length>1&&l.sort(M||r_)}function _(){for(let g=e,M=r.length;g<M;g++){const T=r[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:m,unshift:p,finish:_,sort:S}}function xA(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new o_,r.set(s,[f])):l>=c.length?(f=new o_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function _A(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ae,color:new Ct};break;case"SpotLight":i={position:new ae,direction:new ae,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ae,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ae,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return r[e.id]=i,i}}}function vA(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let SA=0;function yA(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function MA(r){const e=new _A,i=vA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ae);const l=new ae,c=new sn,f=new sn;function h(p){let S=0,_=0,g=0;for(let I=0;I<9;I++)s.probe[I].set(0,0,0);let M=0,T=0,O=0,y=0,v=0,U=0,L=0,N=0,H=0,D=0,F=0;p.sort(yA);for(let I=0,q=p.length;I<q;I++){const V=p[I],K=V.color,fe=V.intensity,he=V.distance;let X=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Hs?X=V.shadow.map.texture:X=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)S+=K.r*fe,_+=K.g*fe,g+=K.b*fe;else if(V.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(V.sh.coefficients[z],fe);F++}else if(V.isDirectionalLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const G=V.shadow,B=i.get(V);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,s.directionalShadow[M]=B,s.directionalShadowMap[M]=X,s.directionalShadowMatrix[M]=V.shadow.matrix,U++}s.directional[M]=z,M++}else if(V.isSpotLight){const z=e.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(K).multiplyScalar(fe),z.distance=he,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,s.spot[O]=z;const G=V.shadow;if(V.map&&(s.spotLightMap[H]=V.map,H++,G.updateMatrices(V),V.castShadow&&D++),s.spotLightMatrix[O]=G.matrix,V.castShadow){const B=i.get(V);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,s.spotShadow[O]=B,s.spotShadowMap[O]=X,N++}O++}else if(V.isRectAreaLight){const z=e.get(V);z.color.copy(K).multiplyScalar(fe),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=z,y++}else if(V.isPointLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const G=V.shadow,B=i.get(V);B.shadowIntensity=G.intensity,B.shadowBias=G.bias,B.shadowNormalBias=G.normalBias,B.shadowRadius=G.radius,B.shadowMapSize=G.mapSize,B.shadowCameraNear=G.camera.near,B.shadowCameraFar=G.camera.far,s.pointShadow[T]=B,s.pointShadowMap[T]=X,s.pointShadowMatrix[T]=V.shadow.matrix,L++}s.point[T]=z,T++}else if(V.isHemisphereLight){const z=e.get(V);z.skyColor.copy(V.color).multiplyScalar(fe),z.groundColor.copy(V.groundColor).multiplyScalar(fe),s.hemi[v]=z,v++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ge.LTC_FLOAT_1,s.rectAreaLTC2=Ge.LTC_FLOAT_2):(s.rectAreaLTC1=Ge.LTC_HALF_1,s.rectAreaLTC2=Ge.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=_,s.ambient[2]=g;const E=s.hash;(E.directionalLength!==M||E.pointLength!==T||E.spotLength!==O||E.rectAreaLength!==y||E.hemiLength!==v||E.numDirectionalShadows!==U||E.numPointShadows!==L||E.numSpotShadows!==N||E.numSpotMaps!==H||E.numLightProbes!==F)&&(s.directional.length=M,s.spot.length=O,s.rectArea.length=y,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=N,s.spotShadowMap.length=N,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=N+H-D,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=D,s.numLightProbes=F,E.directionalLength=M,E.pointLength=T,E.spotLength=O,E.rectAreaLength=y,E.hemiLength=v,E.numDirectionalShadows=U,E.numPointShadows=L,E.numSpotShadows=N,E.numSpotMaps=H,E.numLightProbes=F,s.version=SA++)}function m(p,S){let _=0,g=0,M=0,T=0,O=0;const y=S.matrixWorldInverse;for(let v=0,U=p.length;v<U;v++){const L=p[v];if(L.isDirectionalLight){const N=s.directional[_];N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),_++}else if(L.isSpotLight){const N=s.spot[M];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(y),N.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const N=s.rectArea[T];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(y),f.identity(),c.copy(L.matrixWorld),c.premultiply(y),f.extractRotation(c),N.halfWidth.set(L.width*.5,0,0),N.halfHeight.set(0,L.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),T++}else if(L.isPointLight){const N=s.point[g];N.position.setFromMatrixPosition(L.matrixWorld),N.position.applyMatrix4(y),g++}else if(L.isHemisphereLight){const N=s.hemi[O];N.direction.setFromMatrixPosition(L.matrixWorld),N.direction.transformDirection(y),O++}}}return{setup:h,setupView:m,state:s}}function l_(r){const e=new MA(r),i=[],s=[],l=[];function c(g){_.camera=g,i.length=0,s.length=0,l.length=0}function f(g){i.push(g)}function h(g){s.push(g)}function m(g){l.push(g)}function p(){e.setup(i)}function S(g){e.setupView(i,g)}const _={lightsArray:i,shadowsArray:s,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:p,setupLightsView:S,pushLight:f,pushShadow:h,pushLightProbeGrid:m}}function bA(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new l_(r),e.set(l,[h])):c>=f.length?(h=new l_(r),f.push(h)):h=f[c],h}function s(){e=new WeakMap}return{get:i,dispose:s}}const EA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,AA=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],RA=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],c_=new sn,Zo=new ae,Kd=new ae;function wA(r,e,i){let s=new up;const l=new Nt,c=new Nt,f=new cn,h=new PM,m=new IM,p={},S=i.maxTextureSize,_={[cs]:Jn,[Jn]:cs,[Li]:Li},g=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:EA,fragmentShader:TA}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const T=new $n;T.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const O=new bn(T,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vc;let v=this.type;this.render=function(D,F,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;this.type===d_&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Vc);const I=r.getRenderTarget(),q=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),K=r.state;K.setBlending(Ma),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const fe=v!==this.type;fe&&F.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(X=>X.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,X=D.length;he<X;he++){const z=D[he],G=z.shadow;if(G===void 0){at("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const B=G.getFrameExtents();l.multiply(B),c.copy(G.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(c.x=Math.floor(S/B.x),l.x=c.x*B.x,G.mapSize.x=c.x),l.y>S&&(c.y=Math.floor(S/B.y),l.y=c.y*B.y,G.mapSize.y=c.y));const te=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=te,G.map===null||fe===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ko){if(z.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Zi(l.x,l.y,{format:Hs,type:Ea,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new kr(l.x,l.y,Wi),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=Ta,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn}else z.isPointLight?(G.map=new V_(l.x),G.map.depthTexture=new CM(l.x,Ki)):(G.map=new Zi(l.x,l.y),G.map.depthTexture=new kr(l.x,l.y,Ki)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=Ta,this.type===Vc?(G.map.depthTexture.compareFunction=te?ip:np,G.map.depthTexture.minFilter=Gn,G.map.depthTexture.magFilter=Gn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Pn,G.map.depthTexture.magFilter=Pn);G.camera.updateProjectionMatrix()}const ue=G.map.isWebGLCubeRenderTarget?6:1;for(let P=0;P<ue;P++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,P),r.clear();else{P===0&&(r.setRenderTarget(G.map),r.clear());const Q=G.getViewport(P);f.set(c.x*Q.x,c.y*Q.y,c.x*Q.z,c.y*Q.w),K.viewport(f)}if(z.isPointLight){const Q=G.camera,xe=G.matrix,ye=z.distance||Q.far;ye!==Q.far&&(Q.far=ye,Q.updateProjectionMatrix()),Zo.setFromMatrixPosition(z.matrixWorld),Q.position.copy(Zo),Kd.copy(Q.position),Kd.add(AA[P]),Q.up.copy(RA[P]),Q.lookAt(Kd),Q.updateMatrixWorld(),xe.makeTranslation(-Zo.x,-Zo.y,-Zo.z),c_.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),G._frustum.setFromProjectionMatrix(c_,Q.coordinateSystem,Q.reversedDepth)}else G.updateMatrices(z);s=G.getFrustum(),N(F,E,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===Ko&&U(G,E),G.needsUpdate=!1}v=this.type,y.needsUpdate=!1,r.setRenderTarget(I,q,V)};function U(D,F){const E=e.update(O);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Zi(l.x,l.y,{format:Hs,type:Ea})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,r.setRenderTarget(D.mapPass),r.clear(),r.renderBufferDirect(F,null,E,g,O,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value=D.mapSize,M.uniforms.radius.value=D.radius,r.setRenderTarget(D.map),r.clear(),r.renderBufferDirect(F,null,E,M,O,null)}function L(D,F,E,I){let q=null;const V=E.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(V!==void 0)q=V;else if(q=E.isPointLight===!0?m:h,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const K=q.uuid,fe=F.uuid;let he=p[K];he===void 0&&(he={},p[K]=he);let X=he[fe];X===void 0&&(X=q.clone(),he[fe]=X,F.addEventListener("dispose",H)),q=X}if(q.visible=F.visible,q.wireframe=F.wireframe,I===Ko?q.side=F.shadowSide!==null?F.shadowSide:F.side:q.side=F.shadowSide!==null?F.shadowSide:_[F.side],q.alphaMap=F.alphaMap,q.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,q.map=F.map,q.clipShadows=F.clipShadows,q.clippingPlanes=F.clippingPlanes,q.clipIntersection=F.clipIntersection,q.displacementMap=F.displacementMap,q.displacementScale=F.displacementScale,q.displacementBias=F.displacementBias,q.wireframeLinewidth=F.wireframeLinewidth,q.linewidth=F.linewidth,E.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const K=r.properties.get(q);K.light=E}return q}function N(D,F,E,I,q){if(D.visible===!1)return;if(D.layers.test(F.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&q===Ko)&&(!D.frustumCulled||s.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,D.matrixWorld);const fe=e.update(D),he=D.material;if(Array.isArray(he)){const X=fe.groups;for(let z=0,G=X.length;z<G;z++){const B=X[z],te=he[B.materialIndex];if(te&&te.visible){const ue=L(D,te,I,q);D.onBeforeShadow(r,D,F,E,fe,ue,B),r.renderBufferDirect(E,null,fe,ue,D,B),D.onAfterShadow(r,D,F,E,fe,ue,B)}}}else if(he.visible){const X=L(D,he,I,q);D.onBeforeShadow(r,D,F,E,fe,X,null),r.renderBufferDirect(E,null,fe,X,D,null),D.onAfterShadow(r,D,F,E,fe,X,null)}}const K=D.children;for(let fe=0,he=K.length;fe<he;fe++)N(K[fe],F,E,I,q)}function H(D){D.target.removeEventListener("dispose",H);for(const E in p){const I=p[E],q=D.target.uuid;q in I&&(I[q].dispose(),delete I[q])}}}function CA(r,e){function i(){let W=!1;const Ne=new cn;let ve=null;const He=new cn(0,0,0,0);return{setMask:function(Le){ve!==Le&&!W&&(r.colorMask(Le,Le,Le,Le),ve=Le)},setLocked:function(Le){W=Le},setClear:function(Le,Re,Ye,st,an){an===!0&&(Le*=st,Re*=st,Ye*=st),Ne.set(Le,Re,Ye,st),He.equals(Ne)===!1&&(r.clearColor(Le,Re,Ye,st),He.copy(Ne))},reset:function(){W=!1,ve=null,He.set(-1,0,0,0)}}}function s(){let W=!1,Ne=!1,ve=null,He=null,Le=null;return{setReversed:function(Re){if(Ne!==Re){const Ye=e.get("EXT_clip_control");Re?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),Ne=Re;const st=Le;Le=null,this.setClear(st)}},getReversed:function(){return Ne},setTest:function(Re){Re?Te(r.DEPTH_TEST):Ie(r.DEPTH_TEST)},setMask:function(Re){ve!==Re&&!W&&(r.depthMask(Re),ve=Re)},setFunc:function(Re){if(Ne&&(Re=Vy[Re]),He!==Re){switch(Re){case ih:r.depthFunc(r.NEVER);break;case ah:r.depthFunc(r.ALWAYS);break;case sh:r.depthFunc(r.LESS);break;case Hr:r.depthFunc(r.LEQUAL);break;case rh:r.depthFunc(r.EQUAL);break;case oh:r.depthFunc(r.GEQUAL);break;case lh:r.depthFunc(r.GREATER);break;case ch:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}He=Re}},setLocked:function(Re){W=Re},setClear:function(Re){Le!==Re&&(Le=Re,Ne&&(Re=1-Re),r.clearDepth(Re))},reset:function(){W=!1,ve=null,He=null,Le=null,Ne=!1}}}function l(){let W=!1,Ne=null,ve=null,He=null,Le=null,Re=null,Ye=null,st=null,an=null;return{setTest:function(zt){W||(zt?Te(r.STENCIL_TEST):Ie(r.STENCIL_TEST))},setMask:function(zt){Ne!==zt&&!W&&(r.stencilMask(zt),Ne=zt)},setFunc:function(zt,pi,ei){(ve!==zt||He!==pi||Le!==ei)&&(r.stencilFunc(zt,pi,ei),ve=zt,He=pi,Le=ei)},setOp:function(zt,pi,ei){(Re!==zt||Ye!==pi||st!==ei)&&(r.stencilOp(zt,pi,ei),Re=zt,Ye=pi,st=ei)},setLocked:function(zt){W=zt},setClear:function(zt){an!==zt&&(r.clearStencil(zt),an=zt)},reset:function(){W=!1,Ne=null,ve=null,He=null,Le=null,Re=null,Ye=null,st=null,an=null}}}const c=new i,f=new s,h=new l,m=new WeakMap,p=new WeakMap;let S={},_={},g={},M=new WeakMap,T=[],O=null,y=!1,v=null,U=null,L=null,N=null,H=null,D=null,F=null,E=new Ct(0,0,0),I=0,q=!1,V=null,K=null,fe=null,he=null,X=null;const z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,B=0;const te=r.getParameter(r.VERSION);te.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(te)[1]),G=B>=1):te.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),G=B>=2);let ue=null,P={};const Q=r.getParameter(r.SCISSOR_BOX),xe=r.getParameter(r.VIEWPORT),ye=new cn().fromArray(Q),we=new cn().fromArray(xe);function $(W,Ne,ve,He){const Le=new Uint8Array(4),Re=r.createTexture();r.bindTexture(W,Re),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ye=0;Ye<ve;Ye++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ne,0,r.RGBA,1,1,He,0,r.RGBA,r.UNSIGNED_BYTE,Le):r.texImage2D(Ne+Ye,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Le);return Re}const Ee={};Ee[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Te(r.DEPTH_TEST),f.setFunc(Hr),Et(!1),Pt(ox),Te(r.CULL_FACE),Rt(Ma);function Te(W){S[W]!==!0&&(r.enable(W),S[W]=!0)}function Ie(W){S[W]!==!1&&(r.disable(W),S[W]=!1)}function tt(W,Ne){return g[W]!==Ne?(r.bindFramebuffer(W,Ne),g[W]=Ne,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ne),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Fe(W,Ne){let ve=T,He=!1;if(W){ve=M.get(Ne),ve===void 0&&(ve=[],M.set(Ne,ve));const Le=W.textures;if(ve.length!==Le.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let Re=0,Ye=Le.length;Re<Ye;Re++)ve[Re]=r.COLOR_ATTACHMENT0+Re;ve.length=Le.length,He=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,He=!0);He&&r.drawBuffers(ve)}function Dt(W){return O!==W?(r.useProgram(W),O=W,!0):!1}const dt={[Ps]:r.FUNC_ADD,[fy]:r.FUNC_SUBTRACT,[dy]:r.FUNC_REVERSE_SUBTRACT};dt[hy]=r.MIN,dt[py]=r.MAX;const Je={[my]:r.ZERO,[gy]:r.ONE,[xy]:r.SRC_COLOR,[th]:r.SRC_ALPHA,[by]:r.SRC_ALPHA_SATURATE,[yy]:r.DST_COLOR,[vy]:r.DST_ALPHA,[_y]:r.ONE_MINUS_SRC_COLOR,[nh]:r.ONE_MINUS_SRC_ALPHA,[My]:r.ONE_MINUS_DST_COLOR,[Sy]:r.ONE_MINUS_DST_ALPHA,[Ey]:r.CONSTANT_COLOR,[Ty]:r.ONE_MINUS_CONSTANT_COLOR,[Ay]:r.CONSTANT_ALPHA,[Ry]:r.ONE_MINUS_CONSTANT_ALPHA};function Rt(W,Ne,ve,He,Le,Re,Ye,st,an,zt){if(W===Ma){y===!0&&(Ie(r.BLEND),y=!1);return}if(y===!1&&(Te(r.BLEND),y=!0),W!==uy){if(W!==v||zt!==q){if((U!==Ps||H!==Ps)&&(r.blendEquation(r.FUNC_ADD),U=Ps,H=Ps),zt)switch(W){case Fr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case eh:r.blendFunc(r.ONE,r.ONE);break;case lx:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case cx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:wt("WebGLState: Invalid blending: ",W);break}else switch(W){case Fr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case eh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case lx:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cx:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",W);break}L=null,N=null,D=null,F=null,E.set(0,0,0),I=0,v=W,q=zt}return}Le=Le||Ne,Re=Re||ve,Ye=Ye||He,(Ne!==U||Le!==H)&&(r.blendEquationSeparate(dt[Ne],dt[Le]),U=Ne,H=Le),(ve!==L||He!==N||Re!==D||Ye!==F)&&(r.blendFuncSeparate(Je[ve],Je[He],Je[Re],Je[Ye]),L=ve,N=He,D=Re,F=Ye),(st.equals(E)===!1||an!==I)&&(r.blendColor(st.r,st.g,st.b,an),E.copy(st),I=an),v=W,q=!1}function nt(W,Ne){W.side===Li?Ie(r.CULL_FACE):Te(r.CULL_FACE);let ve=W.side===Jn;Ne&&(ve=!ve),Et(ve),W.blending===Fr&&W.transparent===!1?Rt(Ma):Rt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const He=W.stencilWrite;h.setTest(He),He&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Z(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Te(r.SAMPLE_ALPHA_TO_COVERAGE):Ie(r.SAMPLE_ALPHA_TO_COVERAGE)}function Et(W){V!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),V=W)}function Pt(W){W!==ly?(Te(r.CULL_FACE),W!==K&&(W===ox?r.cullFace(r.BACK):W===cy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ie(r.CULL_FACE),K=W}function un(W){W!==fe&&(G&&r.lineWidth(W),fe=W)}function Z(W,Ne,ve){W?(Te(r.POLYGON_OFFSET_FILL),(he!==Ne||X!==ve)&&(he=Ne,X=ve,f.getReversed()&&(Ne=-Ne),r.polygonOffset(Ne,ve))):Ie(r.POLYGON_OFFSET_FILL)}function Ht(W){W?Te(r.SCISSOR_TEST):Ie(r.SCISSOR_TEST)}function ht(W){W===void 0&&(W=r.TEXTURE0+z-1),ue!==W&&(r.activeTexture(W),ue=W)}function It(W,Ne,ve){ve===void 0&&(ue===null?ve=r.TEXTURE0+z-1:ve=ue);let He=P[ve];He===void 0&&(He={type:void 0,texture:void 0},P[ve]=He),(He.type!==W||He.texture!==Ne)&&(ue!==ve&&(r.activeTexture(ve),ue=ve),r.bindTexture(W,Ne||Ee[W]),He.type=W,He.texture=Ne)}function ge(){const W=P[ue];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function qe(){try{r.compressedTexImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function A(){try{r.compressedTexImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function b(){try{r.texSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function j(){try{r.texSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function de(){try{r.compressedTexSubImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Se(){try{r.compressedTexSubImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ae(){try{r.texStorage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function Ce(){try{r.texStorage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function ne(){try{r.texImage2D(...arguments)}catch(W){wt("WebGLState:",W)}}function me(){try{r.texImage3D(...arguments)}catch(W){wt("WebGLState:",W)}}function Oe(W){return _[W]!==void 0?_[W]:r.getParameter(W)}function Pe(W,Ne){_[W]!==Ne&&(r.pixelStorei(W,Ne),_[W]=Ne)}function Ue(W){ye.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),ye.copy(W))}function De(W){we.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),we.copy(W))}function rt(W,Ne){let ve=p.get(Ne);ve===void 0&&(ve=new WeakMap,p.set(Ne,ve));let He=ve.get(W);He===void 0&&(He=r.getUniformBlockIndex(Ne,W.name),ve.set(W,He))}function ot(W,Ne){const He=p.get(Ne).get(W);m.get(Ne)!==He&&(r.uniformBlockBinding(Ne,He,W.__bindingPointIndex),m.set(Ne,He))}function xt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),S={},_={},ue=null,P={},g={},M=new WeakMap,T=[],O=null,y=!1,v=null,U=null,L=null,N=null,H=null,D=null,F=null,E=new Ct(0,0,0),I=0,q=!1,V=null,K=null,fe=null,he=null,X=null,ye.set(0,0,r.canvas.width,r.canvas.height),we.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Te,disable:Ie,bindFramebuffer:tt,drawBuffers:Fe,useProgram:Dt,setBlending:Rt,setMaterial:nt,setFlipSided:Et,setCullFace:Pt,setLineWidth:un,setPolygonOffset:Z,setScissorTest:Ht,activeTexture:ht,bindTexture:It,unbindTexture:ge,compressedTexImage2D:qe,compressedTexImage3D:A,texImage2D:ne,texImage3D:me,pixelStorei:Pe,getParameter:Oe,updateUBOMapping:rt,uniformBlockBinding:ot,texStorage2D:Ae,texStorage3D:Ce,texSubImage2D:b,texSubImage3D:j,compressedTexSubImage2D:de,compressedTexSubImage3D:Se,scissor:Ue,viewport:De,reset:xt}}function NA(r,e,i,s,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Nt,S=new WeakMap,_=new Set;let g;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function O(A,b){return T?new OffscreenCanvas(A,b):$c("canvas")}function y(A,b,j){let de=1;const Se=qe(A);if((Se.width>j||Se.height>j)&&(de=j/Math.max(Se.width,Se.height)),de<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Ae=Math.floor(de*Se.width),Ce=Math.floor(de*Se.height);g===void 0&&(g=O(Ae,Ce));const ne=b?O(Ae,Ce):g;return ne.width=Ae,ne.height=Ce,ne.getContext("2d").drawImage(A,0,0,Ae,Ce),at("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+Ae+"x"+Ce+")."),ne}else return"data"in A&&at("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),A;return A}function v(A){return A.generateMipmaps}function U(A){r.generateMipmap(A)}function L(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(A,b,j,de,Se,Ae=!1){if(A!==null){if(r[A]!==void 0)return r[A];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Ce;de&&(Ce=e.get("EXT_texture_norm16"),Ce||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=b;if(b===r.RED&&(j===r.FLOAT&&(ne=r.R32F),j===r.HALF_FLOAT&&(ne=r.R16F),j===r.UNSIGNED_BYTE&&(ne=r.R8),j===r.UNSIGNED_SHORT&&Ce&&(ne=Ce.R16_EXT),j===r.SHORT&&Ce&&(ne=Ce.R16_SNORM_EXT)),b===r.RED_INTEGER&&(j===r.UNSIGNED_BYTE&&(ne=r.R8UI),j===r.UNSIGNED_SHORT&&(ne=r.R16UI),j===r.UNSIGNED_INT&&(ne=r.R32UI),j===r.BYTE&&(ne=r.R8I),j===r.SHORT&&(ne=r.R16I),j===r.INT&&(ne=r.R32I)),b===r.RG&&(j===r.FLOAT&&(ne=r.RG32F),j===r.HALF_FLOAT&&(ne=r.RG16F),j===r.UNSIGNED_BYTE&&(ne=r.RG8),j===r.UNSIGNED_SHORT&&Ce&&(ne=Ce.RG16_EXT),j===r.SHORT&&Ce&&(ne=Ce.RG16_SNORM_EXT)),b===r.RG_INTEGER&&(j===r.UNSIGNED_BYTE&&(ne=r.RG8UI),j===r.UNSIGNED_SHORT&&(ne=r.RG16UI),j===r.UNSIGNED_INT&&(ne=r.RG32UI),j===r.BYTE&&(ne=r.RG8I),j===r.SHORT&&(ne=r.RG16I),j===r.INT&&(ne=r.RG32I)),b===r.RGB_INTEGER&&(j===r.UNSIGNED_BYTE&&(ne=r.RGB8UI),j===r.UNSIGNED_SHORT&&(ne=r.RGB16UI),j===r.UNSIGNED_INT&&(ne=r.RGB32UI),j===r.BYTE&&(ne=r.RGB8I),j===r.SHORT&&(ne=r.RGB16I),j===r.INT&&(ne=r.RGB32I)),b===r.RGBA_INTEGER&&(j===r.UNSIGNED_BYTE&&(ne=r.RGBA8UI),j===r.UNSIGNED_SHORT&&(ne=r.RGBA16UI),j===r.UNSIGNED_INT&&(ne=r.RGBA32UI),j===r.BYTE&&(ne=r.RGBA8I),j===r.SHORT&&(ne=r.RGBA16I),j===r.INT&&(ne=r.RGBA32I)),b===r.RGB&&(j===r.UNSIGNED_SHORT&&Ce&&(ne=Ce.RGB16_EXT),j===r.SHORT&&Ce&&(ne=Ce.RGB16_SNORM_EXT),j===r.UNSIGNED_INT_5_9_9_9_REV&&(ne=r.RGB9_E5),j===r.UNSIGNED_INT_10F_11F_11F_REV&&(ne=r.R11F_G11F_B10F)),b===r.RGBA){const me=Ae?Jc:At.getTransfer(Se);j===r.FLOAT&&(ne=r.RGBA32F),j===r.HALF_FLOAT&&(ne=r.RGBA16F),j===r.UNSIGNED_BYTE&&(ne=me===Wt?r.SRGB8_ALPHA8:r.RGBA8),j===r.UNSIGNED_SHORT&&Ce&&(ne=Ce.RGBA16_EXT),j===r.SHORT&&Ce&&(ne=Ce.RGBA16_SNORM_EXT),j===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),j===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function H(A,b){let j;return A?b===null||b===Ki||b===il?j=r.DEPTH24_STENCIL8:b===Wi?j=r.DEPTH32F_STENCIL8:b===nl&&(j=r.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Ki||b===il?j=r.DEPTH_COMPONENT24:b===Wi?j=r.DEPTH_COMPONENT32F:b===nl&&(j=r.DEPTH_COMPONENT16),j}function D(A,b){return v(A)===!0||A.isFramebufferTexture&&A.minFilter!==Pn&&A.minFilter!==Gn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function F(A){const b=A.target;b.removeEventListener("dispose",F),I(b),b.isVideoTexture&&S.delete(b),b.isHTMLTexture&&_.delete(b)}function E(A){const b=A.target;b.removeEventListener("dispose",E),V(b)}function I(A){const b=s.get(A);if(b.__webglInit===void 0)return;const j=A.source,de=M.get(j);if(de){const Se=de[b.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&q(A),Object.keys(de).length===0&&M.delete(j)}s.remove(A)}function q(A){const b=s.get(A);r.deleteTexture(b.__webglTexture);const j=A.source,de=M.get(j);delete de[b.__cacheKey],f.memory.textures--}function V(A){const b=s.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),s.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(b.__webglFramebuffer[de]))for(let Se=0;Se<b.__webglFramebuffer[de].length;Se++)r.deleteFramebuffer(b.__webglFramebuffer[de][Se]);else r.deleteFramebuffer(b.__webglFramebuffer[de]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[de])}else{if(Array.isArray(b.__webglFramebuffer))for(let de=0;de<b.__webglFramebuffer.length;de++)r.deleteFramebuffer(b.__webglFramebuffer[de]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let de=0;de<b.__webglColorRenderbuffer.length;de++)b.__webglColorRenderbuffer[de]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[de]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=A.textures;for(let de=0,Se=j.length;de<Se;de++){const Ae=s.get(j[de]);Ae.__webglTexture&&(r.deleteTexture(Ae.__webglTexture),f.memory.textures--),s.remove(j[de])}s.remove(A)}let K=0;function fe(){K=0}function he(){return K}function X(A){K=A}function z(){const A=K;return A>=l.maxTextures&&at("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l.maxTextures),K+=1,A}function G(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function B(A,b){const j=s.get(A);if(A.isVideoTexture&&It(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&j.__version!==A.version){const de=A.image;if(de===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(j,A,b);return}}else A.isExternalTexture&&(j.__webglTexture=A.sourceTexture?A.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,j.__webglTexture,r.TEXTURE0+b)}function te(A,b){const j=s.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&j.__version!==A.version){Ie(j,A,b);return}else A.isExternalTexture&&(j.__webglTexture=A.sourceTexture?A.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,j.__webglTexture,r.TEXTURE0+b)}function ue(A,b){const j=s.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&j.__version!==A.version){Ie(j,A,b);return}i.bindTexture(r.TEXTURE_3D,j.__webglTexture,r.TEXTURE0+b)}function P(A,b){const j=s.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&j.__version!==A.version){tt(j,A,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture,r.TEXTURE0+b)}const Q={[tl]:r.REPEAT,[ya]:r.CLAMP_TO_EDGE,[uh]:r.MIRRORED_REPEAT},xe={[Pn]:r.NEAREST,[Ny]:r.NEAREST_MIPMAP_NEAREST,[gc]:r.NEAREST_MIPMAP_LINEAR,[Gn]:r.LINEAR,[Sd]:r.LINEAR_MIPMAP_NEAREST,[zs]:r.LINEAR_MIPMAP_LINEAR},ye={[Ly]:r.NEVER,[Fy]:r.ALWAYS,[Oy]:r.LESS,[np]:r.LEQUAL,[Py]:r.EQUAL,[ip]:r.GEQUAL,[Iy]:r.GREATER,[zy]:r.NOTEQUAL};function we(A,b){if(b.type===Wi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Gn||b.magFilter===Sd||b.magFilter===gc||b.magFilter===zs||b.minFilter===Gn||b.minFilter===Sd||b.minFilter===gc||b.minFilter===zs)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,Q[b.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,Q[b.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,Q[b.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,xe[b.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,xe[b.minFilter]),b.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,ye[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Pn||b.minFilter!==gc&&b.minFilter!==zs||b.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");r.texParameterf(A,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function $(A,b){let j=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",F));const de=b.source;let Se=M.get(de);Se===void 0&&(Se={},M.set(de,Se));const Ae=G(b);if(Ae!==A.__cacheKey){Se[Ae]===void 0&&(Se[Ae]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,j=!0),Se[Ae].usedTimes++;const Ce=Se[A.__cacheKey];Ce!==void 0&&(Se[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&q(b)),A.__cacheKey=Ae,A.__webglTexture=Se[Ae].texture}return j}function Ee(A,b,j){return Math.floor(Math.floor(A/j)/b)}function Te(A,b,j,de){const Ae=A.updateRanges;if(Ae.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,j,de,b.data);else{Ae.sort((Pe,Ue)=>Pe.start-Ue.start);let Ce=0;for(let Pe=1;Pe<Ae.length;Pe++){const Ue=Ae[Ce],De=Ae[Pe],rt=Ue.start+Ue.count,ot=Ee(De.start,b.width,4),xt=Ee(Ue.start,b.width,4);De.start<=rt+1&&ot===xt&&Ee(De.start+De.count-1,b.width,4)===ot?Ue.count=Math.max(Ue.count,De.start+De.count-Ue.start):(++Ce,Ae[Ce]=De)}Ae.length=Ce+1;const ne=i.getParameter(r.UNPACK_ROW_LENGTH),me=i.getParameter(r.UNPACK_SKIP_PIXELS),Oe=i.getParameter(r.UNPACK_SKIP_ROWS);i.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Pe=0,Ue=Ae.length;Pe<Ue;Pe++){const De=Ae[Pe],rt=Math.floor(De.start/4),ot=Math.ceil(De.count/4),xt=rt%b.width,W=Math.floor(rt/b.width),Ne=ot,ve=1;i.pixelStorei(r.UNPACK_SKIP_PIXELS,xt),i.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,xt,W,Ne,ve,j,de,b.data)}A.clearUpdateRanges(),i.pixelStorei(r.UNPACK_ROW_LENGTH,ne),i.pixelStorei(r.UNPACK_SKIP_PIXELS,me),i.pixelStorei(r.UNPACK_SKIP_ROWS,Oe)}}function Ie(A,b,j){let de=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(de=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(de=r.TEXTURE_3D);const Se=$(A,b),Ae=b.source;i.bindTexture(de,A.__webglTexture,r.TEXTURE0+j);const Ce=s.get(Ae);if(Ae.version!==Ce.__version||Se===!0){if(i.activeTexture(r.TEXTURE0+j),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ve=At.getPrimaries(At.workingColorSpace),He=b.colorSpace===os?null:At.getPrimaries(b.colorSpace),Le=b.colorSpace===os||ve===He?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment);let me=y(b.image,!1,l.maxTextureSize);me=ge(b,me);const Oe=c.convert(b.format,b.colorSpace),Pe=c.convert(b.type);let Ue=N(b.internalFormat,Oe,Pe,b.normalized,b.colorSpace,b.isVideoTexture);we(de,b);let De;const rt=b.mipmaps,ot=b.isVideoTexture!==!0,xt=Ce.__version===void 0||Se===!0,W=Ae.dataReady,Ne=D(b,me);if(b.isDepthTexture)Ue=H(b.format===Fs,b.type),xt&&(ot?i.texStorage2D(r.TEXTURE_2D,1,Ue,me.width,me.height):i.texImage2D(r.TEXTURE_2D,0,Ue,me.width,me.height,0,Oe,Pe,null));else if(b.isDataTexture)if(rt.length>0){ot&&xt&&i.texStorage2D(r.TEXTURE_2D,Ne,Ue,rt[0].width,rt[0].height);for(let ve=0,He=rt.length;ve<He;ve++)De=rt[ve],ot?W&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,De.width,De.height,Oe,Pe,De.data):i.texImage2D(r.TEXTURE_2D,ve,Ue,De.width,De.height,0,Oe,Pe,De.data);b.generateMipmaps=!1}else ot?(xt&&i.texStorage2D(r.TEXTURE_2D,Ne,Ue,me.width,me.height),W&&Te(b,me,Oe,Pe)):i.texImage2D(r.TEXTURE_2D,0,Ue,me.width,me.height,0,Oe,Pe,me.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ot&&xt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Ue,rt[0].width,rt[0].height,me.depth);for(let ve=0,He=rt.length;ve<He;ve++)if(De=rt[ve],b.format!==Pi)if(Oe!==null)if(ot){if(W)if(b.layerUpdates.size>0){const Le=Hx(De.width,De.height,b.format,b.type);for(const Re of b.layerUpdates){const Ye=De.data.subarray(Re*Le/De.data.BYTES_PER_ELEMENT,(Re+1)*Le/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,Re,De.width,De.height,1,Oe,Ye)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,De.width,De.height,me.depth,Oe,De.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ve,Ue,De.width,De.height,me.depth,0,De.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?W&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ve,0,0,0,De.width,De.height,me.depth,Oe,Pe,De.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ve,Ue,De.width,De.height,me.depth,0,Oe,Pe,De.data)}else{ot&&xt&&i.texStorage2D(r.TEXTURE_2D,Ne,Ue,rt[0].width,rt[0].height);for(let ve=0,He=rt.length;ve<He;ve++)De=rt[ve],b.format!==Pi?Oe!==null?ot?W&&i.compressedTexSubImage2D(r.TEXTURE_2D,ve,0,0,De.width,De.height,Oe,De.data):i.compressedTexImage2D(r.TEXTURE_2D,ve,Ue,De.width,De.height,0,De.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?W&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,De.width,De.height,Oe,Pe,De.data):i.texImage2D(r.TEXTURE_2D,ve,Ue,De.width,De.height,0,Oe,Pe,De.data)}else if(b.isDataArrayTexture)if(ot){if(xt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ne,Ue,me.width,me.height,me.depth),W)if(b.layerUpdates.size>0){const ve=Hx(me.width,me.height,b.format,b.type);for(const He of b.layerUpdates){const Le=me.data.subarray(He*ve/me.data.BYTES_PER_ELEMENT,(He+1)*ve/me.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,He,me.width,me.height,1,Oe,Pe,Le)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Oe,Pe,me.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ue,me.width,me.height,me.depth,0,Oe,Pe,me.data);else if(b.isData3DTexture)ot?(xt&&i.texStorage3D(r.TEXTURE_3D,Ne,Ue,me.width,me.height,me.depth),W&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Oe,Pe,me.data)):i.texImage3D(r.TEXTURE_3D,0,Ue,me.width,me.height,me.depth,0,Oe,Pe,me.data);else if(b.isFramebufferTexture){if(xt)if(ot)i.texStorage2D(r.TEXTURE_2D,Ne,Ue,me.width,me.height);else{let ve=me.width,He=me.height;for(let Le=0;Le<Ne;Le++)i.texImage2D(r.TEXTURE_2D,Le,Ue,ve,He,0,Oe,Pe,null),ve>>=1,He>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in r){const ve=r.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),me.parentNode!==ve){ve.appendChild(me),_.add(b),ve.onpaint=st=>{const an=st.changedElements;for(const zt of _)an.includes(zt.image)&&(zt.needsUpdate=!0)},ve.requestPaint();return}const He=0,Le=r.RGBA,Re=r.RGBA,Ye=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,He,Le,Re,Ye,me),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(rt.length>0){if(ot&&xt){const ve=qe(rt[0]);i.texStorage2D(r.TEXTURE_2D,Ne,Ue,ve.width,ve.height)}for(let ve=0,He=rt.length;ve<He;ve++)De=rt[ve],ot?W&&i.texSubImage2D(r.TEXTURE_2D,ve,0,0,Oe,Pe,De):i.texImage2D(r.TEXTURE_2D,ve,Ue,Oe,Pe,De);b.generateMipmaps=!1}else if(ot){if(xt){const ve=qe(me);i.texStorage2D(r.TEXTURE_2D,Ne,Ue,ve.width,ve.height)}W&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Oe,Pe,me)}else i.texImage2D(r.TEXTURE_2D,0,Ue,Oe,Pe,me);v(b)&&U(de),Ce.__version=Ae.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function tt(A,b,j){if(b.image.length!==6)return;const de=$(A,b),Se=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+j);const Ae=s.get(Se);if(Se.version!==Ae.__version||de===!0){i.activeTexture(r.TEXTURE0+j);const Ce=At.getPrimaries(At.workingColorSpace),ne=b.colorSpace===os?null:At.getPrimaries(b.colorSpace),me=b.colorSpace===os||Ce===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;i.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Oe=b.isCompressedTexture||b.image[0].isCompressedTexture,Pe=b.image[0]&&b.image[0].isDataTexture,Ue=[];for(let Re=0;Re<6;Re++)!Oe&&!Pe?Ue[Re]=y(b.image[Re],!0,l.maxCubemapSize):Ue[Re]=Pe?b.image[Re].image:b.image[Re],Ue[Re]=ge(b,Ue[Re]);const De=Ue[0],rt=c.convert(b.format,b.colorSpace),ot=c.convert(b.type),xt=N(b.internalFormat,rt,ot,b.normalized,b.colorSpace),W=b.isVideoTexture!==!0,Ne=Ae.__version===void 0||de===!0,ve=Se.dataReady;let He=D(b,De);we(r.TEXTURE_CUBE_MAP,b);let Le;if(Oe){W&&Ne&&i.texStorage2D(r.TEXTURE_CUBE_MAP,He,xt,De.width,De.height);for(let Re=0;Re<6;Re++){Le=Ue[Re].mipmaps;for(let Ye=0;Ye<Le.length;Ye++){const st=Le[Ye];b.format!==Pi?rt!==null?W?ve&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ye,0,0,st.width,st.height,rt,st.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ye,xt,st.width,st.height,0,st.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ye,0,0,st.width,st.height,rt,ot,st.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ye,xt,st.width,st.height,0,rt,ot,st.data)}}}else{if(Le=b.mipmaps,W&&Ne){Le.length>0&&He++;const Re=qe(Ue[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,He,xt,Re.width,Re.height)}for(let Re=0;Re<6;Re++)if(Pe){W?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,Ue[Re].width,Ue[Re].height,rt,ot,Ue[Re].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,xt,Ue[Re].width,Ue[Re].height,0,rt,ot,Ue[Re].data);for(let Ye=0;Ye<Le.length;Ye++){const an=Le[Ye].image[Re].image;W?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ye+1,0,0,an.width,an.height,rt,ot,an.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ye+1,xt,an.width,an.height,0,rt,ot,an.data)}}else{W?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,0,0,rt,ot,Ue[Re]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,xt,rt,ot,Ue[Re]);for(let Ye=0;Ye<Le.length;Ye++){const st=Le[Ye];W?ve&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ye+1,0,0,rt,ot,st.image[Re]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Ye+1,xt,rt,ot,st.image[Re])}}}v(b)&&U(r.TEXTURE_CUBE_MAP),Ae.__version=Se.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function Fe(A,b,j,de,Se,Ae){const Ce=c.convert(j.format,j.colorSpace),ne=c.convert(j.type),me=N(j.internalFormat,Ce,ne,j.normalized,j.colorSpace),Oe=s.get(b),Pe=s.get(j);if(Pe.__renderTarget=b,!Oe.__hasExternalTextures){const Ue=Math.max(1,b.width>>Ae),De=Math.max(1,b.height>>Ae);Se===r.TEXTURE_3D||Se===r.TEXTURE_2D_ARRAY?i.texImage3D(Se,Ae,me,Ue,De,b.depth,0,Ce,ne,null):i.texImage2D(Se,Ae,me,Ue,De,0,Ce,ne,null)}i.bindFramebuffer(r.FRAMEBUFFER,A),ht(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,de,Se,Pe.__webglTexture,0,Ht(b)):(Se===r.TEXTURE_2D||Se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,de,Se,Pe.__webglTexture,Ae),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Dt(A,b,j){if(r.bindRenderbuffer(r.RENDERBUFFER,A),b.depthBuffer){const de=b.depthTexture,Se=de&&de.isDepthTexture?de.type:null,Ae=H(b.stencilBuffer,Se),Ce=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ht(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ht(b),Ae,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht(b),Ae,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ce,r.RENDERBUFFER,A)}else{const de=b.textures;for(let Se=0;Se<de.length;Se++){const Ae=de[Se],Ce=c.convert(Ae.format,Ae.colorSpace),ne=c.convert(Ae.type),me=N(Ae.internalFormat,Ce,ne,Ae.normalized,Ae.colorSpace);ht(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ht(b),me,b.width,b.height):j?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ht(b),me,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,me,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function dt(A,b,j){const de=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=s.get(b.depthTexture);if(Se.__renderTarget=b,(!Se.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),de){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),Se.__webglTexture===void 0){Se.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Se.__webglTexture),we(r.TEXTURE_CUBE_MAP,b.depthTexture);const Oe=c.convert(b.depthTexture.format),Pe=c.convert(b.depthTexture.type);let Ue;b.depthTexture.format===Ta?Ue=r.DEPTH_COMPONENT24:b.depthTexture.format===Fs&&(Ue=r.DEPTH24_STENCIL8);for(let De=0;De<6;De++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,Ue,b.width,b.height,0,Oe,Pe,null)}}else B(b.depthTexture,0);const Ae=Se.__webglTexture,Ce=Ht(b),ne=de?r.TEXTURE_CUBE_MAP_POSITIVE_X+j:r.TEXTURE_2D,me=b.depthTexture.format===Fs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ta)ht(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ne,Ae,0,Ce):r.framebufferTexture2D(r.FRAMEBUFFER,me,ne,Ae,0);else if(b.depthTexture.format===Fs)ht(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ne,Ae,0,Ce):r.framebufferTexture2D(r.FRAMEBUFFER,me,ne,Ae,0);else throw new Error("Unknown depthTexture format")}function Je(A){const b=s.get(A),j=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const de=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),de){const Se=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,de.removeEventListener("dispose",Se)};de.addEventListener("dispose",Se),b.__depthDisposeCallback=Se}b.__boundDepthTexture=de}if(A.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let de=0;de<6;de++)dt(b.__webglFramebuffer[de],A,de);else{const de=A.texture.mipmaps;de&&de.length>0?dt(b.__webglFramebuffer[0],A,0):dt(b.__webglFramebuffer,A,0)}else if(j){b.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[de]),b.__webglDepthbuffer[de]===void 0)b.__webglDepthbuffer[de]=r.createRenderbuffer(),Dt(b.__webglDepthbuffer[de],A,!1);else{const Se=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=b.__webglDepthbuffer[de];r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,Ae)}}else{const de=A.texture.mipmaps;if(de&&de.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Dt(b.__webglDepthbuffer,A,!1);else{const Se=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Ae),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,Ae)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(A,b,j){const de=s.get(A);b!==void 0&&Fe(de.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),j!==void 0&&Je(A)}function nt(A){const b=A.texture,j=s.get(A),de=s.get(b);A.addEventListener("dispose",E);const Se=A.textures,Ae=A.isWebGLCubeRenderTarget===!0,Ce=Se.length>1;if(Ce||(de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture()),de.__version=b.version,f.memory.textures++),Ae){j.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[ne]=[];for(let me=0;me<b.mipmaps.length;me++)j.__webglFramebuffer[ne][me]=r.createFramebuffer()}else j.__webglFramebuffer[ne]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let ne=0;ne<b.mipmaps.length;ne++)j.__webglFramebuffer[ne]=r.createFramebuffer()}else j.__webglFramebuffer=r.createFramebuffer();if(Ce)for(let ne=0,me=Se.length;ne<me;ne++){const Oe=s.get(Se[ne]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=r.createTexture(),f.memory.textures++)}if(A.samples>0&&ht(A)===!1){j.__webglMultisampledFramebuffer=r.createFramebuffer(),j.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let ne=0;ne<Se.length;ne++){const me=Se[ne];j.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,j.__webglColorRenderbuffer[ne]);const Oe=c.convert(me.format,me.colorSpace),Pe=c.convert(me.type),Ue=N(me.internalFormat,Oe,Pe,me.normalized,me.colorSpace,A.isXRRenderTarget===!0),De=Ht(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,Ue,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,j.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(j.__webglDepthRenderbuffer=r.createRenderbuffer(),Dt(j.__webglDepthRenderbuffer,A,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Ae){i.bindTexture(r.TEXTURE_CUBE_MAP,de.__webglTexture),we(r.TEXTURE_CUBE_MAP,b);for(let ne=0;ne<6;ne++)if(b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)Fe(j.__webglFramebuffer[ne][me],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,me);else Fe(j.__webglFramebuffer[ne],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);v(b)&&U(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ce){for(let ne=0,me=Se.length;ne<me;ne++){const Oe=Se[ne],Pe=s.get(Oe);let Ue=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ue=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ue,Pe.__webglTexture),we(Ue,Oe),Fe(j.__webglFramebuffer,A,Oe,r.COLOR_ATTACHMENT0+ne,Ue,0),v(Oe)&&U(Ue)}i.unbindTexture()}else{let ne=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(ne,de.__webglTexture),we(ne,b),b.mipmaps&&b.mipmaps.length>0)for(let me=0;me<b.mipmaps.length;me++)Fe(j.__webglFramebuffer[me],A,b,r.COLOR_ATTACHMENT0,ne,me);else Fe(j.__webglFramebuffer,A,b,r.COLOR_ATTACHMENT0,ne,0);v(b)&&U(ne),i.unbindTexture()}A.depthBuffer&&Je(A)}function Et(A){const b=A.textures;for(let j=0,de=b.length;j<de;j++){const Se=b[j];if(v(Se)){const Ae=L(A),Ce=s.get(Se).__webglTexture;i.bindTexture(Ae,Ce),U(Ae),i.unbindTexture()}}}const Pt=[],un=[];function Z(A){if(A.samples>0){if(ht(A)===!1){const b=A.textures,j=A.width,de=A.height;let Se=r.COLOR_BUFFER_BIT;const Ae=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=s.get(A),ne=b.length>1;if(ne)for(let Oe=0;Oe<b.length;Oe++)i.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const me=A.texture.mipmaps;me&&me.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Oe=0;Oe<b.length;Oe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Se|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Se|=r.STENCIL_BUFFER_BIT)),ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Oe]);const Pe=s.get(b[Oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pe,0)}r.blitFramebuffer(0,0,j,de,0,0,j,de,Se,r.NEAREST),m===!0&&(Pt.length=0,un.length=0,Pt.push(r.COLOR_ATTACHMENT0+Oe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Pt.push(Ae),un.push(Ae),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,un)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Pt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ne)for(let Oe=0;Oe<b.length;Oe++){i.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.RENDERBUFFER,Ce.__webglColorRenderbuffer[Oe]);const Pe=s.get(b[Oe]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ce.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Oe,r.TEXTURE_2D,Pe,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&m){const b=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Ht(A){return Math.min(l.maxSamples,A.samples)}function ht(A){const b=s.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function It(A){const b=f.render.frame;S.get(A)!==b&&(S.set(A,b),A.update())}function ge(A,b){const j=A.colorSpace,de=A.format,Se=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||j!==Qc&&j!==os&&(At.getTransfer(j)===Wt?(de!==Pi||Se!==hi)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",j)),b}function qe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(p.width=A.naturalWidth||A.width,p.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(p.width=A.displayWidth,p.height=A.displayHeight):(p.width=A.width,p.height=A.height),p}this.allocateTextureUnit=z,this.resetTextureUnits=fe,this.getTextureUnits=he,this.setTextureUnits=X,this.setTexture2D=B,this.setTexture2DArray=te,this.setTexture3D=ue,this.setTextureCube=P,this.rebindTextures=Rt,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Fe,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function DA(r,e){function i(s,l=os){let c;const f=At.getTransfer(l);if(s===hi)return r.UNSIGNED_BYTE;if(s===Qh)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Jh)return r.UNSIGNED_SHORT_5_5_5_1;if(s===E_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===T_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===M_)return r.BYTE;if(s===b_)return r.SHORT;if(s===nl)return r.UNSIGNED_SHORT;if(s===Kh)return r.INT;if(s===Ki)return r.UNSIGNED_INT;if(s===Wi)return r.FLOAT;if(s===Ea)return r.HALF_FLOAT;if(s===A_)return r.ALPHA;if(s===R_)return r.RGB;if(s===Pi)return r.RGBA;if(s===Ta)return r.DEPTH_COMPONENT;if(s===Fs)return r.DEPTH_STENCIL;if(s===w_)return r.RED;if(s===$h)return r.RED_INTEGER;if(s===Hs)return r.RG;if(s===ep)return r.RG_INTEGER;if(s===tp)return r.RGBA_INTEGER;if(s===kc||s===jc||s===Xc||s===Wc)if(f===Wt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===fh||s===dh||s===hh||s===ph)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===fh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===dh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===hh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ph)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===mh||s===gh||s===xh||s===_h||s===vh||s===Zc||s===Sh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===mh||s===gh)return f===Wt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===xh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===_h)return c.COMPRESSED_R11_EAC;if(s===vh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Zc)return c.COMPRESSED_RG11_EAC;if(s===Sh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===yh||s===Mh||s===bh||s===Eh||s===Th||s===Ah||s===Rh||s===wh||s===Ch||s===Nh||s===Dh||s===Uh||s===Lh||s===Oh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===yh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===bh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Eh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Th)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ah)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Rh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===wh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ch)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Nh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Dh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Uh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Oh)return f===Wt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ph||s===Ih||s===zh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Ph)return f===Wt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ih)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===zh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Fh||s===Bh||s===Kc||s===Hh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Fh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Bh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Kc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Hh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===il?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const UA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class OA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new I_(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Qi({vertexShader:UA,fragmentShader:LA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new bn(new su(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PA extends Gs{constructor(e,i){super();const s=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,S=null,_=null,g=null,M=null,T=null;const O=typeof XRWebGLBinding<"u",y=new OA,v={},U=i.getContextAttributes();let L=null,N=null;const H=[],D=[],F=new Nt;let E=null;const I=new di;I.viewport=new cn;const q=new di;q.viewport=new cn;const V=[I,q],K=new kM;let fe=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Ee=H[$];return Ee===void 0&&(Ee=new Ad,H[$]=Ee),Ee.getTargetRaySpace()},this.getControllerGrip=function($){let Ee=H[$];return Ee===void 0&&(Ee=new Ad,H[$]=Ee),Ee.getGripSpace()},this.getHand=function($){let Ee=H[$];return Ee===void 0&&(Ee=new Ad,H[$]=Ee),Ee.getHandSpace()};function X($){const Ee=D.indexOf($.inputSource);if(Ee===-1)return;const Te=H[Ee];Te!==void 0&&(Te.update($.inputSource,$.frame,p||f),Te.dispatchEvent({type:$.type,data:$.inputSource}))}function z(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",G);for(let $=0;$<H.length;$++){const Ee=D[$];Ee!==null&&(D[$]=null,H[$].disconnect(Ee))}fe=null,he=null,y.reset();for(const $ in v)delete v[$];e.setRenderTarget(L),M=null,g=null,_=null,l=null,N=null,we.stop(),s.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,s.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,s.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function($){p=$},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return _===null&&O&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",z),l.addEventListener("inputsourceschange",G),U.xrCompatible!==!0&&await i.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),O&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ie=null,tt=null;U.depth&&(tt=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Te=U.stencil?Fs:Ta,Ie=U.stencil?il:Ki);const Fe={colorFormat:i.RGBA8,depthFormat:tt,scaleFactor:c};_=this.getBinding(),g=_.createProjectionLayer(Fe),l.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),N=new Zi(g.textureWidth,g.textureHeight,{format:Pi,type:hi,depthTexture:new kr(g.textureWidth,g.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const Te={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,Te),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Zi(M.framebufferWidth,M.framebufferHeight,{format:Pi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),we.setContext(l),we.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G($){for(let Ee=0;Ee<$.removed.length;Ee++){const Te=$.removed[Ee],Ie=D.indexOf(Te);Ie>=0&&(D[Ie]=null,H[Ie].disconnect(Te))}for(let Ee=0;Ee<$.added.length;Ee++){const Te=$.added[Ee];let Ie=D.indexOf(Te);if(Ie===-1){for(let Fe=0;Fe<H.length;Fe++)if(Fe>=D.length){D.push(Te),Ie=Fe;break}else if(D[Fe]===null){D[Fe]=Te,Ie=Fe;break}if(Ie===-1)break}const tt=H[Ie];tt&&tt.connect(Te)}}const B=new ae,te=new ae;function ue($,Ee,Te){B.setFromMatrixPosition(Ee.matrixWorld),te.setFromMatrixPosition(Te.matrixWorld);const Ie=B.distanceTo(te),tt=Ee.projectionMatrix.elements,Fe=Te.projectionMatrix.elements,Dt=tt[14]/(tt[10]-1),dt=tt[14]/(tt[10]+1),Je=(tt[9]+1)/tt[5],Rt=(tt[9]-1)/tt[5],nt=(tt[8]-1)/tt[0],Et=(Fe[8]+1)/Fe[0],Pt=Dt*nt,un=Dt*Et,Z=Ie/(-nt+Et),Ht=Z*-nt;if(Ee.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ht),$.translateZ(Z),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),tt[10]===-1)$.projectionMatrix.copy(Ee.projectionMatrix),$.projectionMatrixInverse.copy(Ee.projectionMatrixInverse);else{const ht=Dt+Z,It=dt+Z,ge=Pt-Ht,qe=un+(Ie-Ht),A=Je*dt/It*ht,b=Rt*dt/It*ht;$.projectionMatrix.makePerspective(ge,qe,A,b,ht,It),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function P($,Ee){Ee===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Ee.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let Ee=$.near,Te=$.far;y.texture!==null&&(y.depthNear>0&&(Ee=y.depthNear),y.depthFar>0&&(Te=y.depthFar)),K.near=q.near=I.near=Ee,K.far=q.far=I.far=Te,(fe!==K.near||he!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),fe=K.near,he=K.far),K.layers.mask=$.layers.mask|6,I.layers.mask=K.layers.mask&-5,q.layers.mask=K.layers.mask&-3;const Ie=$.parent,tt=K.cameras;P(K,Ie);for(let Fe=0;Fe<tt.length;Fe++)P(tt[Fe],Ie);tt.length===2?ue(K,I,q):K.projectionMatrix.copy(I.projectionMatrix),Q($,K,Ie)};function Q($,Ee,Te){Te===null?$.matrix.copy(Ee.matrixWorld):($.matrix.copy(Te.matrixWorld),$.matrix.invert(),$.matrix.multiply(Ee.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Ee.projectionMatrix),$.projectionMatrixInverse.copy(Ee.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Vr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(g===null&&M===null))return m},this.setFoveation=function($){m=$,g!==null&&(g.fixedFoveation=$),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=$)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(K)},this.getCameraTexture=function($){return v[$]};let xe=null;function ye($,Ee){if(S=Ee.getViewerPose(p||f),T=Ee,S!==null){const Te=S.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let Ie=!1;Te.length!==K.cameras.length&&(K.cameras.length=0,Ie=!0);for(let dt=0;dt<Te.length;dt++){const Je=Te[dt];let Rt=null;if(M!==null)Rt=M.getViewport(Je);else{const Et=_.getViewSubImage(g,Je);Rt=Et.viewport,dt===0&&(e.setRenderTargetTextures(N,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(N))}let nt=V[dt];nt===void 0&&(nt=new di,nt.layers.enable(dt),nt.viewport=new cn,V[dt]=nt),nt.matrix.fromArray(Je.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Je.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),dt===0&&(K.matrix.copy(nt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),Ie===!0&&K.cameras.push(nt)}const tt=l.enabledFeatures;if(tt&&tt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&O){_=s.getBinding();const dt=_.getDepthInformation(Te[0]);dt&&dt.isValid&&dt.texture&&y.init(dt,l.renderState)}if(tt&&tt.includes("camera-access")&&O){e.state.unbindTexture(),_=s.getBinding();for(let dt=0;dt<Te.length;dt++){const Je=Te[dt].camera;if(Je){let Rt=v[Je];Rt||(Rt=new I_,v[Je]=Rt);const nt=_.getCameraImage(Je);Rt.sourceTexture=nt}}}}for(let Te=0;Te<H.length;Te++){const Ie=D[Te],tt=H[Te];Ie!==null&&tt!==void 0&&tt.update(Ie,Ee,p||f)}xe&&xe($,Ee),Ee.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:Ee}),T=null}const we=new H_;we.setAnimationLoop(ye),this.setAnimationLoop=function($){xe=$},this.dispose=function(){}}}const IA=new sn,q_=new ct;q_.set(-1,0,0,0,1,0,0,0,1);function zA(r,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function s(y,v){v.color.getRGB(y.fogColor.value,z_(r)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,U,L,N){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?c(y,v):v.isMeshLambertMaterial?(c(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),S(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(y,v),g(y,v),v.isMeshPhysicalMaterial&&M(y,v,N)):v.isMeshMatcapMaterial?(c(y,v),T(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),O(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(f(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,U,L):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Jn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Jn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const U=e.get(v),L=U.envMap,N=U.envMapRotation;L&&(y.envMap.value=L,y.envMapRotation.value.setFromMatrix4(IA.makeRotationFromEuler(N)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(q_),y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function f(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,U,L){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*U,y.scale.value=L*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function S(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function g(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,U){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Jn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function O(y,v){const U=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function FA(r,e,i,s){let l={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(U,L){const N=L.program;s.uniformBlockBinding(U,N)}function p(U,L){let N=l[U.id];N===void 0&&(T(U),N=S(U),l[U.id]=N,U.addEventListener("dispose",y));const H=L.program;s.updateUBOMapping(U,H);const D=e.render.frame;c[U.id]!==D&&(g(U),c[U.id]=D)}function S(U){const L=_();U.__bindingPointIndex=L;const N=r.createBuffer(),H=U.__size,D=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,N),r.bufferData(r.UNIFORM_BUFFER,H,D),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,N),N}function _(){for(let U=0;U<h;U++)if(f.indexOf(U)===-1)return f.push(U),U;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(U){const L=l[U.id],N=U.uniforms,H=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let D=0,F=N.length;D<F;D++){const E=Array.isArray(N[D])?N[D]:[N[D]];for(let I=0,q=E.length;I<q;I++){const V=E[I];if(M(V,D,I,H)===!0){const K=V.__offset,fe=Array.isArray(V.value)?V.value:[V.value];let he=0;for(let X=0;X<fe.length;X++){const z=fe[X],G=O(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,K+he,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):ArrayBuffer.isView(z)?V.__data.set(new z.constructor(z.buffer,z.byteOffset,V.__data.length)):(z.toArray(V.__data,he),he+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(U,L,N,H){const D=U.value,F=L+"_"+N;if(H[F]===void 0)return typeof D=="number"||typeof D=="boolean"?H[F]=D:ArrayBuffer.isView(D)?H[F]=D.slice():H[F]=D.clone(),!0;{const E=H[F];if(typeof D=="number"||typeof D=="boolean"){if(E!==D)return H[F]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(E.equals(D)===!1)return E.copy(D),!0}}return!1}function T(U){const L=U.uniforms;let N=0;const H=16;for(let F=0,E=L.length;F<E;F++){const I=Array.isArray(L[F])?L[F]:[L[F]];for(let q=0,V=I.length;q<V;q++){const K=I[q],fe=Array.isArray(K.value)?K.value:[K.value];for(let he=0,X=fe.length;he<X;he++){const z=fe[he],G=O(z),B=N%H,te=B%G.boundary,ue=B+te;N+=te,ue!==0&&H-ue<G.storage&&(N+=H-ue),K.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=N,N+=G.storage}}}const D=N%H;return D>0&&(N+=H-D),U.__size=N,U.__cache={},this}function O(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(U)?(L.boundary=16,L.storage=U.byteLength):at("WebGLRenderer: Unsupported uniform value type.",U),L}function y(U){const L=U.target;L.removeEventListener("dispose",y);const N=f.indexOf(L.__bindingPointIndex);f.splice(N,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function v(){for(const U in l)r.deleteBuffer(l[U]);f=[],l={},c={}}return{bind:m,update:p,dispose:v}}const BA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function HA(){return ki===null&&(ki=new EM(BA,16,16,Hs,Ea),ki.name="DFG_LUT",ki.minFilter=Gn,ki.magFilter=Gn,ki.wrapS=ya,ki.wrapT=ya,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class GA{constructor(e={}){const{canvas:i=Hy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:M=hi}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=f;const O=M,y=new Set([tp,ep,$h]),v=new Set([hi,Ki,nl,il,Qh,Jh]),U=new Uint32Array(4),L=new Int32Array(4),N=new ae;let H=null,D=null;const F=[],E=[];let I=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let V=!1,K=null;this._outputColorSpace=Ei;let fe=0,he=0,X=null,z=-1,G=null;const B=new cn,te=new cn;let ue=null;const P=new Ct(0);let Q=0,xe=i.width,ye=i.height,we=1,$=null,Ee=null;const Te=new cn(0,0,xe,ye),Ie=new cn(0,0,xe,ye);let tt=!1;const Fe=new up;let Dt=!1,dt=!1;const Je=new sn,Rt=new ae,nt=new cn,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function un(){return X===null?we:1}let Z=s;function Ht(R,J){return i.getContext(R,J)}try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:S,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Zh}`),i.addEventListener("webglcontextlost",Re,!1),i.addEventListener("webglcontextrestored",Ye,!1),i.addEventListener("webglcontextcreationerror",st,!1),Z===null){const J="webgl2";if(Z=Ht(J,R),Z===null)throw Ht(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw wt("WebGLRenderer: "+R.message),R}let ht,It,ge,qe,A,b,j,de,Se,Ae,Ce,ne,me,Oe,Pe,Ue,De,rt,ot,xt,W,Ne,ve;function He(){ht=new HE(Z),ht.init(),W=new DA(Z,ht),It=new UE(Z,ht,e,W),ge=new CA(Z,ht),It.reversedDepthBuffer&&g&&ge.buffers.depth.setReversed(!0),qe=new kE(Z),A=new mA,b=new NA(Z,ht,ge,A,It,W,qe),j=new BE(q),de=new qM(Z),Ne=new NE(Z,de),Se=new GE(Z,de,qe,Ne),Ae=new XE(Z,Se,de,Ne,qe),rt=new jE(Z,It,b),Pe=new LE(A),Ce=new pA(q,j,ht,It,Ne,Pe),ne=new zA(q,A),me=new xA,Oe=new bA(ht),De=new CE(q,j,ge,Ae,T,m),Ue=new wA(q,Ae,It),ve=new FA(Z,qe,It,ge),ot=new DE(Z,ht,qe),xt=new VE(Z,ht,qe),qe.programs=Ce.programs,q.capabilities=It,q.extensions=ht,q.properties=A,q.renderLists=me,q.shadowMap=Ue,q.state=ge,q.info=qe}He(),O!==hi&&(I=new qE(O,i.width,i.height,l,c));const Le=new PA(q,Z);this.xr=Le,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const R=ht.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ht.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(R){R!==void 0&&(we=R,this.setSize(xe,ye,!1))},this.getSize=function(R){return R.set(xe,ye)},this.setSize=function(R,J,le=!0){if(Le.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=R,ye=J,i.width=Math.floor(R*we),i.height=Math.floor(J*we),le===!0&&(i.style.width=R+"px",i.style.height=J+"px"),I!==null&&I.setSize(i.width,i.height),this.setViewport(0,0,R,J)},this.getDrawingBufferSize=function(R){return R.set(xe*we,ye*we).floor()},this.setDrawingBufferSize=function(R,J,le){xe=R,ye=J,we=le,i.width=Math.floor(R*le),i.height=Math.floor(J*le),this.setViewport(0,0,R,J)},this.setEffects=function(R){if(O===hi){wt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let J=0;J<R.length;J++)if(R[J].isOutputPass===!0){at("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(B)},this.getViewport=function(R){return R.copy(Te)},this.setViewport=function(R,J,le,re){R.isVector4?Te.set(R.x,R.y,R.z,R.w):Te.set(R,J,le,re),ge.viewport(B.copy(Te).multiplyScalar(we).round())},this.getScissor=function(R){return R.copy(Ie)},this.setScissor=function(R,J,le,re){R.isVector4?Ie.set(R.x,R.y,R.z,R.w):Ie.set(R,J,le,re),ge.scissor(te.copy(Ie).multiplyScalar(we).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(R){ge.setScissorTest(tt=R)},this.setOpaqueSort=function(R){$=R},this.setTransparentSort=function(R){Ee=R},this.getClearColor=function(R){return R.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(R=!0,J=!0,le=!0){let re=0;if(R){let oe=!1;if(X!==null){const Be=X.texture.format;oe=y.has(Be)}if(oe){const Be=X.texture.type,ke=v.has(Be),ze=De.getClearColor(),Xe=De.getClearAlpha(),je=ze.r,$e=ze.g,ut=ze.b;ke?(U[0]=je,U[1]=$e,U[2]=ut,U[3]=Xe,Z.clearBufferuiv(Z.COLOR,0,U)):(L[0]=je,L[1]=$e,L[2]=ut,L[3]=Xe,Z.clearBufferiv(Z.COLOR,0,L))}else re|=Z.COLOR_BUFFER_BIT}J&&(re|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(re|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&Z.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),K=R},this.dispose=function(){i.removeEventListener("webglcontextlost",Re,!1),i.removeEventListener("webglcontextrestored",Ye,!1),i.removeEventListener("webglcontextcreationerror",st,!1),De.dispose(),me.dispose(),Oe.dispose(),A.dispose(),j.dispose(),Ae.dispose(),Ne.dispose(),ve.dispose(),Ce.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",Kr),Le.removeEventListener("sessionend",Qr),In.stop()};function Re(R){R.preventDefault(),px("WebGLRenderer: Context Lost."),V=!0}function Ye(){px("WebGLRenderer: Context Restored."),V=!1;const R=qe.autoReset,J=Ue.enabled,le=Ue.autoUpdate,re=Ue.needsUpdate,oe=Ue.type;He(),qe.autoReset=R,Ue.enabled=J,Ue.autoUpdate=le,Ue.needsUpdate=re,Ue.type=oe}function st(R){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function an(R){const J=R.target;J.removeEventListener("dispose",an),zt(J)}function zt(R){pi(R),A.remove(R)}function pi(R){const J=A.get(R).programs;J!==void 0&&(J.forEach(function(le){Ce.releaseProgram(le)}),R.isShaderMaterial&&Ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,J,le,re,oe,Be){J===null&&(J=Et);const ke=oe.isMesh&&oe.matrixWorld.determinant()<0,ze=wa(R,J,le,re,oe);ge.setMaterial(re,ke);let Xe=le.index,je=1;if(re.wireframe===!0){if(Xe=Se.getWireframeAttribute(le),Xe===void 0)return;je=2}const $e=le.drawRange,ut=le.attributes.position;let Ke=$e.start*je,Ut=($e.start+$e.count)*je;Be!==null&&(Ke=Math.max(Ke,Be.start*je),Ut=Math.min(Ut,(Be.start+Be.count)*je)),Xe!==null?(Ke=Math.max(Ke,0),Ut=Math.min(Ut,Xe.count)):ut!=null&&(Ke=Math.max(Ke,0),Ut=Math.min(Ut,ut.count));const en=Ut-Ke;if(en<0||en===1/0)return;Ne.setup(oe,re,ze,le,Xe);let Kt,Gt=ot;if(Xe!==null&&(Kt=de.get(Xe),Gt=xt,Gt.setIndex(Kt)),oe.isMesh)re.wireframe===!0?(ge.setLineWidth(re.wireframeLinewidth*un()),Gt.setMode(Z.LINES)):Gt.setMode(Z.TRIANGLES);else if(oe.isLine){let Vt=re.linewidth;Vt===void 0&&(Vt=1),ge.setLineWidth(Vt*un()),oe.isLineSegments?Gt.setMode(Z.LINES):oe.isLineLoop?Gt.setMode(Z.LINE_LOOP):Gt.setMode(Z.LINE_STRIP)}else oe.isPoints?Gt.setMode(Z.POINTS):oe.isSprite&&Gt.setMode(Z.TRIANGLES);if(oe.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Gt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const Vt=oe._multiDrawStarts,Ve=oe._multiDrawCounts,zn=oe._multiDrawCount,_t=Xe?de.get(Xe).bytesPerElement:1,yn=A.get(re).currentProgram.getUniforms();for(let ti=0;ti<zn;ti++)yn.setValue(Z,"_gl_DrawID",ti),Gt.render(Vt[ti]/_t,Ve[ti])}else if(oe.isInstancedMesh)Gt.renderInstances(Ke,en,oe.count);else if(le.isInstancedBufferGeometry){const Vt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Ve=Math.min(le.instanceCount,Vt);Gt.renderInstances(Ke,en,Ve)}else Gt.render(Ke,en)};function ei(R,J,le){R.transparent===!0&&R.side===Li&&R.forceSinglePass===!1?(R.side=Jn,R.needsUpdate=!0,Vs(R,J,le),R.side=cs,R.needsUpdate=!0,Vs(R,J,le),R.side=Li):Vs(R,J,le)}this.compile=function(R,J,le=null){le===null&&(le=R),D=Oe.get(le),D.init(J),E.push(D),le.traverseVisible(function(oe){oe.isLight&&oe.layers.test(J.layers)&&(D.pushLight(oe),oe.castShadow&&D.pushShadow(oe))}),R!==le&&R.traverseVisible(function(oe){oe.isLight&&oe.layers.test(J.layers)&&(D.pushLight(oe),oe.castShadow&&D.pushShadow(oe))}),D.setupLights();const re=new Set;return R.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Be=oe.material;if(Be)if(Array.isArray(Be))for(let ke=0;ke<Be.length;ke++){const ze=Be[ke];ei(ze,le,oe),re.add(ze)}else ei(Be,le,oe),re.add(Be)}),D=E.pop(),re},this.compileAsync=function(R,J,le=null){const re=this.compile(R,J,le);return new Promise(oe=>{function Be(){if(re.forEach(function(ke){A.get(ke).currentProgram.isReady()&&re.delete(ke)}),re.size===0){oe(R);return}setTimeout(Be,10)}ht.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let fs=null;function Zr(R){fs&&fs(R)}function Kr(){In.stop()}function Qr(){In.start()}const In=new H_;In.setAnimationLoop(Zr),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(R){fs=R,Le.setAnimationLoop(R),R===null?In.stop():In.start()},Le.addEventListener("sessionstart",Kr),Le.addEventListener("sessionend",Qr),this.render=function(R,J){if(J!==void 0&&J.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;K!==null&&K.renderStart(R,J);const le=Le.enabled===!0&&Le.isPresenting===!0,re=I!==null&&(X===null||le)&&I.begin(q,X);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(J),J=Le.getCamera()),R.isScene===!0&&R.onBeforeRender(q,R,J,X),D=Oe.get(R,E.length),D.init(J),D.state.textureUnits=b.getTextureUnits(),E.push(D),Je.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Fe.setFromProjectionMatrix(Je,qi,J.reversedDepth),dt=this.localClippingEnabled,Dt=Pe.init(this.clippingPlanes,dt),H=me.get(R,F.length),H.init(),F.push(H),Le.enabled===!0&&Le.isPresenting===!0){const ke=q.xr.getDepthSensingMesh();ke!==null&&fn(ke,J,-1/0,q.sortObjects)}fn(R,J,0,q.sortObjects),H.finish(),q.sortObjects===!0&&H.sort($,Ee),Pt=Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1,Pt&&De.addToRenderList(H,R),this.info.render.frame++,Dt===!0&&Pe.beginShadows();const oe=D.state.shadowsArray;if(Ue.render(oe,R,J),Dt===!0&&Pe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&I.hasRenderPass())===!1){const ke=H.opaque,ze=H.transmissive;if(D.setupLights(),J.isArrayCamera){const Xe=J.cameras;if(ze.length>0)for(let je=0,$e=Xe.length;je<$e;je++){const ut=Xe[je];Ji(ke,ze,R,ut)}Pt&&De.render(R);for(let je=0,$e=Xe.length;je<$e;je++){const ut=Xe[je];Nn(H,R,ut,ut.viewport)}}else ze.length>0&&Ji(ke,ze,R,J),Pt&&De.render(R),Nn(H,R,J)}X!==null&&he===0&&(b.updateMultisampleRenderTarget(X),b.updateRenderTargetMipmap(X)),re&&I.end(q),R.isScene===!0&&R.onAfterRender(q,R,J),Ne.resetDefaultState(),z=-1,G=null,E.pop(),E.length>0?(D=E[E.length-1],b.setTextureUnits(D.state.textureUnits),Dt===!0&&Pe.setGlobalState(q.clippingPlanes,D.state.camera)):D=null,F.pop(),F.length>0?H=F[F.length-1]:H=null,K!==null&&K.renderEnd()};function fn(R,J,le,re){if(R.visible===!1)return;if(R.layers.test(J.layers)){if(R.isGroup)le=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(J);else if(R.isLightProbeGrid)D.pushLightProbeGrid(R);else if(R.isLight)D.pushLight(R),R.castShadow&&D.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Fe.intersectsSprite(R)){re&&nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Je);const ke=Ae.update(R),ze=R.material;ze.visible&&H.push(R,ke,ze,le,nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Fe.intersectsObject(R))){const ke=Ae.update(R),ze=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),nt.copy(R.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),nt.copy(ke.boundingSphere.center)),nt.applyMatrix4(R.matrixWorld).applyMatrix4(Je)),Array.isArray(ze)){const Xe=ke.groups;for(let je=0,$e=Xe.length;je<$e;je++){const ut=Xe[je],Ke=ze[ut.materialIndex];Ke&&Ke.visible&&H.push(R,ke,Ke,le,nt.z,ut)}}else ze.visible&&H.push(R,ke,ze,le,nt.z,null)}}const Be=R.children;for(let ke=0,ze=Be.length;ke<ze;ke++)fn(Be[ke],J,le,re)}function Nn(R,J,le,re){const{opaque:oe,transmissive:Be,transparent:ke}=R;D.setupLightsView(le),Dt===!0&&Pe.setGlobalState(q.clippingPlanes,le),re&&ge.viewport(B.copy(re)),oe.length>0&&Aa(oe,J,le),Be.length>0&&Aa(Be,J,le),ke.length>0&&Aa(ke,J,le),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ji(R,J,le,re){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[re.id]===void 0){const Ke=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[re.id]=new Zi(1,1,{generateMipmaps:!0,type:Ke?Ea:hi,minFilter:zs,samples:Math.max(4,It.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const Be=D.state.transmissionRenderTarget[re.id],ke=re.viewport||B;Be.setSize(ke.z*q.transmissionResolutionScale,ke.w*q.transmissionResolutionScale);const ze=q.getRenderTarget(),Xe=q.getActiveCubeFace(),je=q.getActiveMipmapLevel();q.setRenderTarget(Be),q.getClearColor(P),Q=q.getClearAlpha(),Q<1&&q.setClearColor(16777215,.5),q.clear(),Pt&&De.render(le);const $e=q.toneMapping;q.toneMapping=Yi;const ut=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),D.setupLightsView(re),Dt===!0&&Pe.setGlobalState(q.clippingPlanes,re),Aa(R,le,re),b.updateMultisampleRenderTarget(Be),b.updateRenderTargetMipmap(Be),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ut=0,en=J.length;Ut<en;Ut++){const Kt=J[Ut],{object:Gt,geometry:Vt,material:Ve,group:zn}=Kt;if(Ve.side===Li&&Gt.layers.test(re.layers)){const _t=Ve.side;Ve.side=Jn,Ve.needsUpdate=!0,rl(Gt,le,re,Vt,Ve,zn),Ve.side=_t,Ve.needsUpdate=!0,Ke=!0}}Ke===!0&&(b.updateMultisampleRenderTarget(Be),b.updateRenderTargetMipmap(Be))}q.setRenderTarget(ze,Xe,je),q.setClearColor(P,Q),ut!==void 0&&(re.viewport=ut),q.toneMapping=$e}function Aa(R,J,le){const re=J.isScene===!0?J.overrideMaterial:null;for(let oe=0,Be=R.length;oe<Be;oe++){const ke=R[oe],{object:ze,geometry:Xe,group:je}=ke;let $e=ke.material;$e.allowOverride===!0&&re!==null&&($e=re),ze.layers.test(le.layers)&&rl(ze,J,le,Xe,$e,je)}}function rl(R,J,le,re,oe,Be){R.onBeforeRender(q,J,le,re,oe,Be),R.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),oe.onBeforeRender(q,J,le,re,R,Be),oe.transparent===!0&&oe.side===Li&&oe.forceSinglePass===!1?(oe.side=Jn,oe.needsUpdate=!0,q.renderBufferDirect(le,J,re,oe,R,Be),oe.side=cs,oe.needsUpdate=!0,q.renderBufferDirect(le,J,re,oe,R,Be),oe.side=Li):q.renderBufferDirect(le,J,re,oe,R,Be),R.onAfterRender(q,J,le,re,oe,Be)}function Vs(R,J,le){J.isScene!==!0&&(J=Et);const re=A.get(R),oe=D.state.lights,Be=D.state.shadowsArray,ke=oe.state.version,ze=Ce.getParameters(R,oe.state,Be,J,le,D.state.lightProbeGridArray),Xe=Ce.getProgramCacheKey(ze);let je=re.programs;re.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?J.environment:null,re.fog=J.fog;const $e=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;re.envMap=j.get(R.envMap||re.environment,$e),re.envMapRotation=re.environment!==null&&R.envMap===null?J.environmentRotation:R.envMapRotation,je===void 0&&(R.addEventListener("dispose",an),je=new Map,re.programs=je);let ut=je.get(Xe);if(ut!==void 0){if(re.currentProgram===ut&&re.lightsStateVersion===ke)return Ra(R,ze),ut}else ze.uniforms=Ce.getUniforms(R),K!==null&&R.isNodeMaterial&&K.build(R,le,ze),R.onBeforeCompile(ze,q),ut=Ce.acquireProgram(ze,Xe),je.set(Xe,ut),re.uniforms=ze.uniforms;const Ke=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=Pe.uniform),Ra(R,ze),re.needsLights=ds(R),re.lightsStateVersion=ke,re.needsLights&&(Ke.ambientLightColor.value=oe.state.ambient,Ke.lightProbe.value=oe.state.probe,Ke.directionalLights.value=oe.state.directional,Ke.directionalLightShadows.value=oe.state.directionalShadow,Ke.spotLights.value=oe.state.spot,Ke.spotLightShadows.value=oe.state.spotShadow,Ke.rectAreaLights.value=oe.state.rectArea,Ke.ltc_1.value=oe.state.rectAreaLTC1,Ke.ltc_2.value=oe.state.rectAreaLTC2,Ke.pointLights.value=oe.state.point,Ke.pointLightShadows.value=oe.state.pointShadow,Ke.hemisphereLights.value=oe.state.hemi,Ke.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Ke.spotLightMatrix.value=oe.state.spotLightMatrix,Ke.spotLightMap.value=oe.state.spotLightMap,Ke.pointShadowMatrix.value=oe.state.pointShadowMatrix),re.lightProbeGrid=D.state.lightProbeGridArray.length>0,re.currentProgram=ut,re.uniformsList=null,ut}function Jr(R){if(R.uniformsList===null){const J=R.currentProgram.getUniforms();R.uniformsList=qc.seqWithValue(J.seq,R.uniforms)}return R.uniformsList}function Ra(R,J){const le=A.get(R);le.outputColorSpace=J.outputColorSpace,le.batching=J.batching,le.batchingColor=J.batchingColor,le.instancing=J.instancing,le.instancingColor=J.instancingColor,le.instancingMorph=J.instancingMorph,le.skinning=J.skinning,le.morphTargets=J.morphTargets,le.morphNormals=J.morphNormals,le.morphColors=J.morphColors,le.morphTargetsCount=J.morphTargetsCount,le.numClippingPlanes=J.numClippingPlanes,le.numIntersection=J.numClipIntersection,le.vertexAlphas=J.vertexAlphas,le.vertexTangents=J.vertexTangents,le.toneMapping=J.toneMapping}function $r(R,J){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;N.setFromMatrixPosition(J.matrixWorld);for(let le=0,re=R.length;le<re;le++){const oe=R[le];if(oe.texture!==null&&oe.boundingBox.containsPoint(N))return oe}return null}function wa(R,J,le,re,oe){J.isScene!==!0&&(J=Et),b.resetTextureUnits();const Be=J.fog,ke=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?J.environment:null,ze=X===null?q.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:At.workingColorSpace,Xe=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,je=j.get(re.envMap||ke,Xe),$e=re.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ut=!!le.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ke=!!le.morphAttributes.position,Ut=!!le.morphAttributes.normal,en=!!le.morphAttributes.color;let Kt=Yi;re.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Kt=q.toneMapping);const Gt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Vt=Gt!==void 0?Gt.length:0,Ve=A.get(re),zn=D.state.lights;if(Dt===!0&&(dt===!0||R!==G)){const Bt=R===G&&re.id===z;Pe.setState(re,R,Bt)}let _t=!1;re.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==zn.state.version||Ve.outputColorSpace!==ze||oe.isBatchedMesh&&Ve.batching===!1||!oe.isBatchedMesh&&Ve.batching===!0||oe.isBatchedMesh&&Ve.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&Ve.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&Ve.instancing===!1||!oe.isInstancedMesh&&Ve.instancing===!0||oe.isSkinnedMesh&&Ve.skinning===!1||!oe.isSkinnedMesh&&Ve.skinning===!0||oe.isInstancedMesh&&Ve.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ve.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ve.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ve.instancingMorph===!1&&oe.morphTexture!==null||Ve.envMap!==je||re.fog===!0&&Ve.fog!==Be||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Pe.numPlanes||Ve.numIntersection!==Pe.numIntersection)||Ve.vertexAlphas!==$e||Ve.vertexTangents!==ut||Ve.morphTargets!==Ke||Ve.morphNormals!==Ut||Ve.morphColors!==en||Ve.toneMapping!==Kt||Ve.morphTargetsCount!==Vt||!!Ve.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(_t=!0):(_t=!0,Ve.__version=re.version);let yn=Ve.currentProgram;_t===!0&&(yn=Vs(re,J,oe),K&&re.isNodeMaterial&&K.onUpdateProgram(re,yn,Ve));let ti=!1,Ti=!1,ni=!1;const kt=yn.getUniforms(),tn=Ve.uniforms;if(ge.useProgram(yn.program)&&(ti=!0,Ti=!0,ni=!0),re.id!==z&&(z=re.id,Ti=!0),Ve.needsLights){const Bt=$r(D.state.lightProbeGridArray,oe);Ve.lightProbeGrid!==Bt&&(Ve.lightProbeGrid=Bt,Ti=!0)}if(ti||G!==R){ge.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),kt.setValue(Z,"projectionMatrix",R.projectionMatrix),kt.setValue(Z,"viewMatrix",R.matrixWorldInverse);const zi=kt.map.cameraPosition;zi!==void 0&&zi.setValue(Z,Rt.setFromMatrixPosition(R.matrixWorld)),It.logarithmicDepthBuffer&&kt.setValue(Z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&kt.setValue(Z,"isOrthographic",R.isOrthographicCamera===!0),G!==R&&(G=R,Ti=!0,ni=!0)}if(Ve.needsLights&&(zn.state.directionalShadowMap.length>0&&kt.setValue(Z,"directionalShadowMap",zn.state.directionalShadowMap,b),zn.state.spotShadowMap.length>0&&kt.setValue(Z,"spotShadowMap",zn.state.spotShadowMap,b),zn.state.pointShadowMap.length>0&&kt.setValue(Z,"pointShadowMap",zn.state.pointShadowMap,b)),oe.isSkinnedMesh){kt.setOptional(Z,oe,"bindMatrix"),kt.setOptional(Z,oe,"bindMatrixInverse");const Bt=oe.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),kt.setValue(Z,"boneTexture",Bt.boneTexture,b))}oe.isBatchedMesh&&(kt.setOptional(Z,oe,"batchingTexture"),kt.setValue(Z,"batchingTexture",oe._matricesTexture,b),kt.setOptional(Z,oe,"batchingIdTexture"),kt.setValue(Z,"batchingIdTexture",oe._indirectTexture,b),kt.setOptional(Z,oe,"batchingColorTexture"),oe._colorsTexture!==null&&kt.setValue(Z,"batchingColorTexture",oe._colorsTexture,b));const Ai=le.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&rt.update(oe,le,yn),(Ti||Ve.receiveShadow!==oe.receiveShadow)&&(Ve.receiveShadow=oe.receiveShadow,kt.setValue(Z,"receiveShadow",oe.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&J.environment!==null&&(tn.envMapIntensity.value=J.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=HA()),Ti){if(kt.setValue(Z,"toneMappingExposure",q.toneMappingExposure),Ve.needsLights&&Ca(tn,ni),Be&&re.fog===!0&&ne.refreshFogUniforms(tn,Be),ne.refreshMaterialUniforms(tn,re,we,ye,D.state.transmissionRenderTarget[R.id]),Ve.needsLights&&Ve.lightProbeGrid){const Bt=Ve.lightProbeGrid;tn.probesSH.value=Bt.texture,tn.probesMin.value.copy(Bt.boundingBox.min),tn.probesMax.value.copy(Bt.boundingBox.max),tn.probesResolution.value.copy(Bt.resolution)}qc.upload(Z,Jr(Ve),tn,b)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(qc.upload(Z,Jr(Ve),tn,b),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&kt.setValue(Z,"center",oe.center),kt.setValue(Z,"modelViewMatrix",oe.modelViewMatrix),kt.setValue(Z,"normalMatrix",oe.normalMatrix),kt.setValue(Z,"modelMatrix",oe.matrixWorld),re.uniformsGroups!==void 0){const Bt=re.uniformsGroups;for(let zi=0,Da=Bt.length;zi<Da;zi++){const hs=Bt[zi];ve.update(hs,yn),ve.bind(hs,yn)}}return yn}function Ca(R,J){R.ambientLightColor.needsUpdate=J,R.lightProbe.needsUpdate=J,R.directionalLights.needsUpdate=J,R.directionalLightShadows.needsUpdate=J,R.pointLights.needsUpdate=J,R.pointLightShadows.needsUpdate=J,R.spotLights.needsUpdate=J,R.spotLightShadows.needsUpdate=J,R.rectAreaLights.needsUpdate=J,R.hemisphereLights.needsUpdate=J}function ds(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return he},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,J,le){const re=A.get(R);re.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),A.get(R.texture).__webglTexture=J,A.get(R.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:le,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,J){const le=A.get(R);le.__webglFramebuffer=J,le.__useDefaultFramebuffer=J===void 0};const Na=Z.createFramebuffer();this.setRenderTarget=function(R,J=0,le=0){X=R,fe=J,he=le;let re=null,oe=!1,Be=!1;if(R){const ze=A.get(R);if(ze.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(Z.FRAMEBUFFER,ze.__webglFramebuffer),B.copy(R.viewport),te.copy(R.scissor),ue=R.scissorTest,ge.viewport(B),ge.scissor(te),ge.setScissorTest(ue),z=-1;return}else if(ze.__webglFramebuffer===void 0)b.setupRenderTarget(R);else if(ze.__hasExternalTextures)b.rebindTextures(R,A.get(R.texture).__webglTexture,A.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $e=R.depthTexture;if(ze.__boundDepthTexture!==$e){if($e!==null&&A.has($e)&&(R.width!==$e.image.width||R.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(R)}}const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Be=!0);const je=A.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(je[J])?re=je[J][le]:re=je[J],oe=!0):R.samples>0&&b.useMultisampledRTT(R)===!1?re=A.get(R).__webglMultisampledFramebuffer:Array.isArray(je)?re=je[le]:re=je,B.copy(R.viewport),te.copy(R.scissor),ue=R.scissorTest}else B.copy(Te).multiplyScalar(we).floor(),te.copy(Ie).multiplyScalar(we).floor(),ue=tt;if(le!==0&&(re=Na),ge.bindFramebuffer(Z.FRAMEBUFFER,re)&&ge.drawBuffers(R,re),ge.viewport(B),ge.scissor(te),ge.setScissorTest(ue),oe){const ze=A.get(R.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+J,ze.__webglTexture,le)}else if(Be){const ze=J;for(let Xe=0;Xe<R.textures.length;Xe++){const je=A.get(R.textures[Xe]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+Xe,je.__webglTexture,le,ze)}}else if(R!==null&&le!==0){const ze=A.get(R.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,ze.__webglTexture,le)}z=-1},this.readRenderTargetPixels=function(R,J,le,re,oe,Be,ke,ze=0){if(!(R&&R.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=A.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe){ge.bindFramebuffer(Z.FRAMEBUFFER,Xe);try{const je=R.textures[ze],$e=je.format,ut=je.type;if(R.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+ze),!It.textureFormatReadable($e)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(ut)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=R.width-re&&le>=0&&le<=R.height-oe&&Z.readPixels(J,le,re,oe,W.convert($e),W.convert(ut),Be)}finally{const je=X!==null?A.get(X).__webglFramebuffer:null;ge.bindFramebuffer(Z.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(R,J,le,re,oe,Be,ke,ze=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=A.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Xe=Xe[ke]),Xe)if(J>=0&&J<=R.width-re&&le>=0&&le<=R.height-oe){ge.bindFramebuffer(Z.FRAMEBUFFER,Xe);const je=R.textures[ze],$e=je.format,ut=je.type;if(R.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+ze),!It.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ke),Z.bufferData(Z.PIXEL_PACK_BUFFER,Be.byteLength,Z.STREAM_READ),Z.readPixels(J,le,re,oe,W.convert($e),W.convert(ut),0);const Ut=X!==null?A.get(X).__webglFramebuffer:null;ge.bindFramebuffer(Z.FRAMEBUFFER,Ut);const en=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await Gy(Z,en,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,Ke),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Be),Z.deleteBuffer(Ke),Z.deleteSync(en),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,J=null,le=0){const re=Math.pow(2,-le),oe=Math.floor(R.image.width*re),Be=Math.floor(R.image.height*re),ke=J!==null?J.x:0,ze=J!==null?J.y:0;b.setTexture2D(R,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,le,0,0,ke,ze,oe,Be),ge.unbindTexture()};const mn=Z.createFramebuffer(),ol=Z.createFramebuffer();this.copyTextureToTexture=function(R,J,le=null,re=null,oe=0,Be=0){let ke,ze,Xe,je,$e,ut,Ke,Ut,en;const Kt=R.isCompressedTexture?R.mipmaps[Be]:R.image;if(le!==null)ke=le.max.x-le.min.x,ze=le.max.y-le.min.y,Xe=le.isBox3?le.max.z-le.min.z:1,je=le.min.x,$e=le.min.y,ut=le.isBox3?le.min.z:0;else{const tn=Math.pow(2,-oe);ke=Math.floor(Kt.width*tn),ze=Math.floor(Kt.height*tn),R.isDataArrayTexture?Xe=Kt.depth:R.isData3DTexture?Xe=Math.floor(Kt.depth*tn):Xe=1,je=0,$e=0,ut=0}re!==null?(Ke=re.x,Ut=re.y,en=re.z):(Ke=0,Ut=0,en=0);const Gt=W.convert(J.format),Vt=W.convert(J.type);let Ve;J.isData3DTexture?(b.setTexture3D(J,0),Ve=Z.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(b.setTexture2DArray(J,0),Ve=Z.TEXTURE_2D_ARRAY):(b.setTexture2D(J,0),Ve=Z.TEXTURE_2D),ge.activeTexture(Z.TEXTURE0),ge.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,J.flipY),ge.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),ge.pixelStorei(Z.UNPACK_ALIGNMENT,J.unpackAlignment);const zn=ge.getParameter(Z.UNPACK_ROW_LENGTH),_t=ge.getParameter(Z.UNPACK_IMAGE_HEIGHT),yn=ge.getParameter(Z.UNPACK_SKIP_PIXELS),ti=ge.getParameter(Z.UNPACK_SKIP_ROWS),Ti=ge.getParameter(Z.UNPACK_SKIP_IMAGES);ge.pixelStorei(Z.UNPACK_ROW_LENGTH,Kt.width),ge.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Kt.height),ge.pixelStorei(Z.UNPACK_SKIP_PIXELS,je),ge.pixelStorei(Z.UNPACK_SKIP_ROWS,$e),ge.pixelStorei(Z.UNPACK_SKIP_IMAGES,ut);const ni=R.isDataArrayTexture||R.isData3DTexture,kt=J.isDataArrayTexture||J.isData3DTexture;if(R.isDepthTexture){const tn=A.get(R),Ai=A.get(J),Bt=A.get(tn.__renderTarget),zi=A.get(Ai.__renderTarget);ge.bindFramebuffer(Z.READ_FRAMEBUFFER,Bt.__webglFramebuffer),ge.bindFramebuffer(Z.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Da=0;Da<Xe;Da++)ni&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,A.get(R).__webglTexture,oe,ut+Da),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,A.get(J).__webglTexture,Be,en+Da)),Z.blitFramebuffer(je,$e,ke,ze,Ke,Ut,ke,ze,Z.DEPTH_BUFFER_BIT,Z.NEAREST);ge.bindFramebuffer(Z.READ_FRAMEBUFFER,null),ge.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(oe!==0||R.isRenderTargetTexture||A.has(R)){const tn=A.get(R),Ai=A.get(J);ge.bindFramebuffer(Z.READ_FRAMEBUFFER,mn),ge.bindFramebuffer(Z.DRAW_FRAMEBUFFER,ol);for(let Bt=0;Bt<Xe;Bt++)ni?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,tn.__webglTexture,oe,ut+Bt):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,tn.__webglTexture,oe),kt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ai.__webglTexture,Be,en+Bt):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ai.__webglTexture,Be),oe!==0?Z.blitFramebuffer(je,$e,ke,ze,Ke,Ut,ke,ze,Z.COLOR_BUFFER_BIT,Z.NEAREST):kt?Z.copyTexSubImage3D(Ve,Be,Ke,Ut,en+Bt,je,$e,ke,ze):Z.copyTexSubImage2D(Ve,Be,Ke,Ut,je,$e,ke,ze);ge.bindFramebuffer(Z.READ_FRAMEBUFFER,null),ge.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else kt?R.isDataTexture||R.isData3DTexture?Z.texSubImage3D(Ve,Be,Ke,Ut,en,ke,ze,Xe,Gt,Vt,Kt.data):J.isCompressedArrayTexture?Z.compressedTexSubImage3D(Ve,Be,Ke,Ut,en,ke,ze,Xe,Gt,Kt.data):Z.texSubImage3D(Ve,Be,Ke,Ut,en,ke,ze,Xe,Gt,Vt,Kt):R.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Be,Ke,Ut,ke,ze,Gt,Vt,Kt.data):R.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Be,Ke,Ut,Kt.width,Kt.height,Gt,Kt.data):Z.texSubImage2D(Z.TEXTURE_2D,Be,Ke,Ut,ke,ze,Gt,Vt,Kt);ge.pixelStorei(Z.UNPACK_ROW_LENGTH,zn),ge.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,_t),ge.pixelStorei(Z.UNPACK_SKIP_PIXELS,yn),ge.pixelStorei(Z.UNPACK_SKIP_ROWS,ti),ge.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ti),Be===0&&J.generateMipmaps&&Z.generateMipmap(Ve),ge.unbindTexture()},this.initRenderTarget=function(R){A.get(R).__webglFramebuffer===void 0&&b.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?b.setTextureCube(R,0):R.isData3DTexture?b.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?b.setTexture2DArray(R,0):b.setTexture2D(R,0),ge.unbindTexture()},this.resetState=function(){fe=0,he=0,X=null,ge.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),i.unpackColorSpace=At._getUnpackColorSpace()}}const Qd=[[1,6],[2,6],[3,6],[4,6],[5,6],[6,5],[6,4],[6,3],[6,2],[6,1],[6,0],[7,0],[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[9,6],[10,6],[11,6],[12,6],[13,6],[14,6],[14,7],[14,8],[13,8],[12,8],[11,8],[10,8],[9,8],[8,9],[8,10],[8,11],[8,12],[8,13],[8,14],[7,14],[6,14],[6,13],[6,12],[6,11],[6,10],[6,9],[5,8],[4,8],[3,8],[2,8],[1,8],[0,8],[0,7],[0,6]],Jo={red:0,green:13,yellow:26,blue:39},qh=[0,8,13,21,26,34,39,47],VA={red:[[1,7],[2,7],[3,7],[4,7],[5,7]],green:[[7,1],[7,2],[7,3],[7,4],[7,5]],yellow:[[13,7],[12,7],[11,7],[10,7],[9,7]],blue:[[7,13],[7,12],[7,11],[7,10],[7,9]]},kA={red:[6,7],green:[7,6],yellow:[8,7],blue:[7,8]},jA={red:[[2,2],[3,2],[2,3],[3,3]],green:[[11,2],[12,2],[11,3],[12,3]],yellow:[[11,11],[12,11],[11,12],[12,12]],blue:[[2,11],[3,11],[2,12],[3,12]]};function Jd(r,e,i=0){const l=(r-7)*1,c=(e-7)*1;return[l,i,c]}class XA{constructor(){this.ctx=null,this.isMuted=!1}initContext(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted}getMuted(){return this.isMuted}playDiceRoll(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,i=.6,s=8;for(let l=0;l<s;l++){const c=e+l*i/s,f=this.ctx.createOscillator(),h=this.ctx.createGain();f.type="triangle",f.frequency.setValueAtTime(150+Math.random()*80,c),f.frequency.exponentialRampToValueAtTime(40,c+.05),h.gain.setValueAtTime(.3,c),h.gain.exponentialRampToValueAtTime(.001,c+.05),f.connect(h),h.connect(this.ctx.destination),f.start(c),f.stop(c+.06)}}playMoveTick(e=1){if(this.isMuted||(this.initContext(),!this.ctx))return;const i=this.ctx.currentTime,s=this.ctx.createOscillator(),l=this.ctx.createGain();s.type="sine";const c=440+e*30;s.frequency.setValueAtTime(c,i),s.frequency.exponentialRampToValueAtTime(c*1.5,i+.08),l.gain.setValueAtTime(.15,i),l.gain.linearRampToValueAtTime(.001,i+.08),s.connect(l),l.connect(this.ctx.destination),s.start(i),s.stop(i+.09)}playKilled(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,i=this.ctx.createOscillator();this.ctx.createOscillator();const s=this.ctx.createGain();i.type="sawtooth",i.frequency.setValueAtTime(800,e),i.frequency.exponentialRampToValueAtTime(80,e+.4),s.gain.setValueAtTime(.25,e),s.gain.exponentialRampToValueAtTime(.001,e+.45),i.connect(s),s.connect(this.ctx.destination),i.start(e),i.stop(e+.5);const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.type="sine",l.frequency.setValueAtTime(120,e),l.frequency.exponentialRampToValueAtTime(30,e+.3),c.gain.setValueAtTime(.4,e),c.gain.linearRampToValueAtTime(.01,e+.35),l.connect(c),c.connect(this.ctx.destination),l.start(e),l.stop(e+.4)}playReachHome(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime;[261.63,329.63,392,523.25,659.25,783.99].forEach((s,l)=>{if(!this.ctx)return;const c=this.ctx.createOscillator(),f=this.ctx.createGain(),h=e+l*.08;c.type="triangle",c.frequency.setValueAtTime(s,h),f.gain.setValueAtTime(.18,h),f.gain.exponentialRampToValueAtTime(.001,h+.25),c.connect(f),f.connect(this.ctx.destination),c.start(h),c.stop(h+.3)})}playVictory(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,i=(s,l,c=1)=>{if(!this.ctx)return;[261.63,329.63,392,523.25].map(h=>h*c).forEach(h=>{if(!this.ctx)return;const m=this.ctx.createOscillator(),p=this.ctx.createGain();m.type="triangle",m.frequency.setValueAtTime(h,e+s),p.gain.setValueAtTime(.1,e+s),p.gain.exponentialRampToValueAtTime(.001,e+s+l),m.connect(p),p.connect(this.ctx.destination),m.start(e+s),m.stop(e+s+l)})};i(0,.2,1),i(.2,.2,1.25),i(.4,.8,1.5)}playUIPress(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(587.33,e),i.frequency.exponentialRampToValueAtTime(880,e+.1),s.gain.setValueAtTime(.1,e),s.gain.exponentialRampToValueAtTime(.001,e+.12),i.connect(s),s.connect(this.ctx.destination),i.start(e),i.stop(e+.13)}playTrophy(){if(this.isMuted||(this.initContext(),!this.ctx))return;const e=this.ctx.currentTime,i=this.ctx.createOscillator(),s=this.ctx.createOscillator(),l=this.ctx.createGain();i.type="triangle",i.frequency.setValueAtTime(329.63,e),i.frequency.linearRampToValueAtTime(659.25,e+.4),s.type="sine",s.frequency.setValueAtTime(392,e),s.frequency.linearRampToValueAtTime(783.99,e+.4),l.gain.setValueAtTime(.15,e),l.gain.exponentialRampToValueAtTime(.001,e+.45),i.connect(l),s.connect(l),l.connect(this.ctx.destination),i.start(e),s.start(e),i.stop(e+.5),s.stop(e+.5)}}const mt=new XA;function WA({gameState:r,selectableTokenIds:e,onTokenClick:i,onDiceRollComplete:s}){const l=Qe.useRef(null),c=Qe.useRef(null),f=Qe.useRef(null),h=Qe.useRef(null),m=Qe.useRef(new Map),p=Qe.useRef(null),S=Qe.useRef([]),_=Qe.useRef(null),g=Qe.useRef({active:!1,duration:0,elapsed:0,vx:0,vy:0,vz:0,rx:0,ry:0,rz:0,targetValue:1}),M=Qe.useRef(null),T=Qe.useRef(!1),O=()=>{const L=document.createElement("canvas");L.width=512,L.height=512;const N=L.getContext("2d");if(N){const D=N.createRadialGradient(256,256,10,256,256,400);D.addColorStop(0,"#5a3825"),D.addColorStop(.3,"#3d2518"),D.addColorStop(.7,"#482c1d"),D.addColorStop(1,"#25160e"),N.fillStyle=D,N.fillRect(0,0,512,512),N.strokeStyle="rgba(25, 12, 6, 0.45)",N.lineWidth=1.5;for(let F=8;F<600;F+=6+Math.random()*8){N.beginPath();for(let E=0;E<Math.PI*2;E+=.05){const I=Math.sin(E*6)*12+Math.cos(E*3)*6,q=256+(F+I)*Math.cos(E),V=256+(F+I)*Math.sin(E);E===0?N.moveTo(q,V):N.lineTo(q,V)}N.closePath(),N.stroke()}}const H=new kd(L);return H.wrapS=tl,H.wrapT=tl,H},y=(L,N)=>{const H=document.createElement("canvas");H.width=256,H.height=256;const D=H.getContext("2d");if(D){D.fillStyle=L,D.fillRect(0,0,256,256),D.strokeStyle=N,D.lineWidth=1;for(let F=0;F<5;F++){D.beginPath();let E=Math.random()*256,I=0;for(D.moveTo(E,I);I<256;)E+=(Math.random()-.5)*30,I+=Math.random()*40,D.lineTo(E,I);D.stroke()}}return new kd(H)};Qe.useEffect(()=>{if(!l.current)return;const L=l.current.clientWidth,N=l.current.clientHeight,H=new _M;H.background=new Ct("#050505"),H.fog=new op("#050505",.015),f.current=H;const D=new di(40,L/N,.1,100);D.position.set(0,14,11),D.lookAt(0,-.5,0),h.current=D;const F=new GA({antialias:!0,alpha:!1});F.setSize(L,N),F.setPixelRatio(Math.min(window.devicePixelRatio,2)),F.shadowMap.enabled=!0,F.shadowMap.type=d_,l.current.innerHTML="",l.current.appendChild(F.domElement),c.current=F;const E=new GM("#2a3245",1.6);H.add(E);const I=new HM("#ffffff",1.8);I.position.set(8,15,6),I.castShadow=!0,I.shadow.mapSize.width=2048,I.shadow.mapSize.height=2048,I.shadow.camera.near=.5,I.shadow.camera.far=30;const q=10;I.shadow.camera.left=-q,I.shadow.camera.right=q,I.shadow.camera.top=q,I.shadow.camera.bottom=-q,I.shadow.bias=-5e-4,H.add(I);const V=new FM("#ffe7c4",2.5);V.position.set(-6,12,-4),V.angle=Math.PI/4,V.penumbra=.8,V.castShadow=!0,H.add(V);const K=O(),fe=new pn({map:K,roughness:.15,metalness:.1,bumpMap:K,bumpScale:.008}),he=new Xi(16.5,1.2,16.5),X=new bn(he,fe);X.position.y=-.6,X.receiveShadow=!0,H.add(X);const z=new pn({color:"#d4af37",metalness:.9,roughness:.12}),G=new Xi(16.6,.1,16.6),B=new bn(G,z);B.position.y=.05,H.add(B);const te=new Xi(.9,.15,.9),ue=new Xi(2.9,.15,2.9),P=y("#ffffff","#e2e8f0"),Q=y("#fee2e2","#ef4444"),xe=y("#dcfce7","#22c55e"),ye=y("#fef9c3","#eab308"),we=y("#dbeafe","#3b82f6"),$=new zr;for(let ge=0;ge<15;ge++)for(let qe=0;qe<15;qe++){if(ge>=6&&ge<=8&&qe>=6&&qe<=8)continue;let A=new pn({map:P,roughness:.1,metalness:.05});ge<6&&qe<6?A=new pn({map:Q,roughness:.15}):ge>8&&qe<6?A=new pn({map:xe,roughness:.15}):ge>8&&qe>8?A=new pn({map:ye,roughness:.15}):ge<6&&qe>8&&(A=new pn({map:we,roughness:.15})),qe===7&&ge>=1&&ge<=5?A=new pn({map:Q,roughness:.1}):ge===7&&qe>=1&&qe<=5?A=new pn({map:xe,roughness:.1}):qe===7&&ge>=9&&ge<=13?A=new pn({map:ye,roughness:.1}):ge===7&&qe>=9&&qe<=13&&(A=new pn({map:we,roughness:.1})),qh.some(Ce=>Qd[Ce][0]===ge&&Qd[Ce][1]===qe)&&(A=new pn({color:"#ffd700",metalness:.7,roughness:.15}));const[j,de,Se]=Jd(ge,qe,.08),Ae=new bn(te,A);Ae.position.set(j,de,Se),Ae.receiveShadow=!0,$.add(Ae)}const Ee=new pn({color:"#d4af37",metalness:.9,roughness:.08}),Te=new bn(ue,Ee);Te.position.set(0,.08,0),Te.receiveShadow=!0,$.add(Te);const Ie=new eu(1.5,1.8,32);Ie.rotateX(-Math.PI/2),[{name:"red",x:-4.5,z:-4.5,color:"#ef4444"},{name:"green",x:4.5,z:-4.5,color:"#22c55e"},{name:"yellow",x:4.5,z:4.5,color:"#eab308"},{name:"blue",x:-4.5,z:4.5,color:"#3b82f6"}].forEach(ge=>{const qe=new pn({color:ge.color,roughness:.1,metalness:.6,side:Li}),A=new bn(Ie,qe);A.position.set(ge.x,.16,ge.z),$.add(A)}),H.add($);const Fe=new Xi(.85,.85,.85),Dt=[new pn({color:"#fcfcfc",roughness:.1}),new pn({color:"#fcfcfc",roughness:.1}),new pn({color:"#fcfcfc",roughness:.1}),new pn({color:"#fcfcfc",roughness:.1}),new pn({color:"#fcfcfc",roughness:.1}),new pn({color:"#fcfcfc",roughness:.1})];(ge=>{const qe=[[[128,128]],[[64,64],[192,192]],[[64,64],[128,128],[192,192]],[[64,64],[64,192],[192,64],[192,192]],[[64,64],[64,192],[128,128],[192,64],[192,192]],[[64,64],[64,128],[64,192],[192,64],[192,128],[192,192]]];for(let A=0;A<6;A++){const b=document.createElement("canvas");b.width=256,b.height=256;const j=b.getContext("2d");if(j){j.fillStyle="#ffffff",j.fillRect(0,0,256,256),j.strokeStyle="#d4af37",j.lineWidth=14,j.strokeRect(7,7,242,242),j.fillStyle=A===0?"#ef4444":"#1e293b";const Se=A===0?30:20;qe[A].forEach(([Ae,Ce])=>{j.beginPath(),j.arc(Ae,Ce,Se,0,Math.PI*2),j.fill()})}const de=new kd(b);Dt[A].map=de}})();const Je=new bn(Fe,Dt);Je.position.set(0,.45,0),Je.castShadow=!0,Je.receiveShadow=!0,H.add(Je),p.current=Je;const Rt=()=>{if(!l.current||!F||!D)return;const ge=l.current.clientWidth,qe=l.current.clientHeight;D.aspect=ge/qe,D.updateProjectionMatrix(),F.setSize(ge,qe)};window.addEventListener("resize",Rt);const nt=new jM,Et=new Nt,Pt=ge=>{if(!l.current||!D)return;const qe=l.current.getBoundingClientRect();Et.x=(ge.clientX-qe.left)/qe.width*2-1,Et.y=-((ge.clientY-qe.top)/qe.height)*2+1,nt.setFromCamera(Et,D);const A=Array.from(m.current.values()).map(j=>j.children[0]),b=nt.intersectObjects(A);if(b.length>0){const de=b[0].object.parent;if(de){const Se=de.name;_.current=Se,document.body.style.cursor="pointer"}}else _.current=null,document.body.style.cursor="default"},un=ge=>{if(!l.current||!D)return;const qe=l.current.getBoundingClientRect();if(Et.x=(ge.clientX-qe.left)/qe.width*2-1,Et.y=-((ge.clientY-qe.top)/qe.height)*2+1,nt.setFromCamera(Et,D),nt.intersectObject(Je).length>0&&!r.hasRolled&&!r.isRollInProgress){const de=document.getElementById("ludo-dice-roll-trigger-elem");de&&de.click();return}const b=Array.from(m.current.values()).map(de=>de.children[0]),j=nt.intersectObjects(b);if(j.length>0){const Se=j[0].object.parent;if(Se){const[Ae,Ce]=Se.name.split("_"),ne=parseInt(Ce,10),me=r.players[r.currentPlayerIndex];Ae===me.color&&e.includes(ne)&&(mt.playUIPress(),i(ne))}}},Z=l.current;Z.addEventListener("mousemove",Pt),Z.addEventListener("mousedown",un);let Ht;const ht=new XM,It=()=>{Ht=requestAnimationFrame(It);const ge=ht.getDelta(),qe=ht.getElapsedTime();if(r.gameStatus==="lobby"&&D?(D.position.x=Math.sin(qe*.18)*11,D.position.z=Math.cos(qe*.18)*11,D.lookAt(0,-.6,0)):D&&(D.position.set(0,13.5,10.5),D.lookAt(0,-.7,0)),g.current.active&&Je){const A=g.current;A.elapsed+=ge;const b=A.elapsed/A.duration,j=Math.min(b,1),Se=Math.abs(Math.sin(j*Math.PI*2))*(1.8*(1-j));Je.position.y=.45+Se;const Ce={1:[0,0,0],6:[Math.PI,0,0],2:[-Math.PI/2,0,0],5:[Math.PI/2,0,0],3:[0,0,Math.PI/2],4:[0,0,-Math.PI/2]}[A.targetValue]||[0,0,0],ne=16*(1-j);Je.rotation.x+=A.rx*ne*ge,Je.rotation.y+=A.ry*ne*ge,Je.rotation.z+=A.rz*ne*ge,j>=1&&(Je.position.set(0,.45,0),Je.rotation.set(...Ce),A.active=!1,s())}if(m.current.forEach((A,b)=>{const[j,de]=b.split("_"),Se=parseInt(de,10),Ae=r.players[r.currentPlayerIndex],Ce=j===Ae.color&&e.includes(Se);if(Ce){A.position.y=.15+Math.sin(qe*12)*.14;const ne=A.children[1];if(ne){const me=1+Math.sin(qe*8)*.15;ne.scale.set(me,1,me),ne.visible=!0}}else{A.position.y>.05&&(A.position.y=xc.lerp(A.position.y,0,.12));const ne=A.children[1];ne&&(ne.visible=!1)}_.current===b&&Ce?A.scale.set(1.15,1.15,1.15):A.scale.set(1,1,1)}),M.current){const A=M.current,b=`${A.color}_${A.id}`,j=m.current.get(b);if(j){if(A.stepProgress+=ge*6.5,A.stepProgress>=1&&(mt.playMoveTick(A.currentStepIdx+1),A.currentStepIdx++,A.stepProgress=0,A.currentStepIdx>=A.steps.length)){const de=A.steps[A.steps.length-1];j.position.set(de[0],de[1],de[2]),M.current=null}if(M.current){const de=A.steps[A.currentStepIdx-1]||[j.position.x,j.position.y,j.position.z],Se=A.steps[A.currentStepIdx];if(Se){const Ae=xc.lerp(de[0],Se[0],A.stepProgress),Ce=xc.lerp(de[2],Se[2],A.stepProgress),ne=Math.sin(A.stepProgress*Math.PI)*.95,me=xc.lerp(de[1],Se[1],A.stepProgress)+ne;j.position.set(Ae,me,Ce)}}}}S.current.forEach((A,b)=>{const j=A.geometry.attributes.position,de=A.userData.times,Se=A.userData.velocities;let Ae=!1;const Ce=j.count;for(let ne=0;ne<Ce;ne++){de[ne]+=ge;const me=de[ne];if(me<1.5){Ae=!0;let Oe=j.getX(ne)+Se[ne*3]*ge,Pe=j.getY(ne)+Se[ne*3+1]*ge-1.8*ge*me,Ue=j.getZ(ne)+Se[ne*3+2]*ge;j.setXYZ(ne,Oe,Math.max(Pe,.05),Ue)}}j.needsUpdate=!0,Ae||(H.remove(A),S.current.splice(b,1))}),F.render(H,D)};return It(),()=>{cancelAnimationFrame(Ht),window.removeEventListener("resize",Rt),Z.removeEventListener("mousemove",Pt),Z.removeEventListener("mousedown",un)}},[r.currentPlayerIndex,r.gameStatus,e,s]),Qe.useEffect(()=>{const L=f.current;if(!L)return;m.current.forEach(H=>L.remove(H)),m.current.clear();const N={red:"#ef4444",green:"#10b981",yellow:"#f59e0b",blue:"#3b82f6"};r.players.forEach(H=>{H.tokens.forEach(D=>{const F=new fp(.3,.38,.15,16),E=new tu(.24,16,16),I=new tu(.18,16,16),q=new zr;q.name=`${D.color}_${D.id}`;const V=new pn({color:N[D.color],roughness:.12,metalness:.65}),K=new bn(F,V);K.castShadow=!0,K.receiveShadow=!0;const fe=new bn(E,V);fe.position.y=.22,fe.castShadow=!0;const he=new bn(I,V);he.position.y=.44,he.castShadow=!0,q.add(K),q.add(fe),q.add(he);const X=new eu(.42,.52,16);X.rotateX(-Math.PI/2);const z=new cp({color:N[D.color],side:Li,transparent:!0,opacity:.72}),G=new bn(X,z);G.position.y=.01,G.visible=!1,q.add(G);const B=v(D),[te,ue,P]=Jd(B[0],B[1],.15);q.position.set(te,ue,P),L.add(q),m.current.set(`${D.color}_${D.id}`,q)})})},[r.players]);const v=L=>{if(L.status==="base")return jA[L.color][L.id];if(L.status==="home")return kA[L.color];if(L.status==="home_path")return VA[L.color][L.position];const H=(Jo[L.color]+L.position)%52;return Qd[H]};Qe.useEffect(()=>{r.isRollInProgress&&!T.current&&(mt.playDiceRoll(),g.current={active:!0,duration:.85,elapsed:0,vx:(Math.random()-.5)*8,vy:7+Math.random()*4,vz:(Math.random()-.5)*8,rx:15+Math.random()*20,ry:15+Math.random()*20,rz:15+Math.random()*20,targetValue:r.diceValue||1}),T.current=r.isRollInProgress},[r.isRollInProgress,r.diceValue]),Qe.useEffect(()=>{},[r.currentPlayerIndex]);const U=(L,N,H)=>{const D=f.current;if(!D)return;const F=35,E=new $n,I=new Float32Array(F*3),q=new Float32Array(F),V=[],[K,fe,he]=Jd(L,N,.25);for(let G=0;G<F;G++){I[G*3]=K,I[G*3+1]=fe,I[G*3+2]=he,q[G]=0;const B=Math.random()*Math.PI*2,te=Math.random()*Math.PI/2,ue=2+Math.random()*3.5;V.push(Math.cos(B)*Math.sin(te)*ue,Math.cos(te)*ue+1,Math.sin(B)*Math.sin(te)*ue)}E.setAttribute("position",new Ii(I,3));const X=new O_({color:H,size:.26,transparent:!0,opacity:.9,blending:eh}),z=new wM(E,X);z.userData={times:q,velocities:V},D.add(z),S.current.push(z)};return C.jsxs("div",{className:"relative w-full h-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-slate-950",children:[C.jsx("div",{ref:l,className:"w-full h-full",id:"ludo-board-3d-canvas-wrapper"}),C.jsxs("div",{className:"absolute top-4 left-4 z-10 glass-panel border border-white/10 px-4 py-2 rounded-xl flex items-center gap-3 shadow-lg pointer-events-none",children:[C.jsx("div",{className:"w-3 h-3 rounded-full animate-ping",style:{backgroundColor:qA[r.players[r.currentPlayerIndex].color]}}),C.jsxs("span",{className:"text-xs tracking-wider text-slate-300 font-mono",children:["TURN: ",C.jsx("strong",{className:"text-white capitalize",children:r.players[r.currentPlayerIndex].name})]})]}),C.jsx("button",{id:"ludo-3d-particle-capturer",className:"hidden",onClick:()=>{U(7,7,"#ffd700")}})]})}const qA={red:"#ef4444",green:"#10b981",yellow:"#f59e0b",blue:"#3b82f6"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YA=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ZA=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase()),u_=r=>{const e=ZA(r);return e.charAt(0).toUpperCase()+e.slice(1)},Y_=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim(),KA=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var QA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JA=Qe.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...h},m)=>Qe.createElement("svg",{ref:m,...QA,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:Y_("lucide",l),...!c&&!KA(h)&&{"aria-hidden":"true"},...h},[...f.map(([p,S])=>Qe.createElement(p,S)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=(r,e)=>{const i=Qe.forwardRef(({className:s,...l},c)=>Qe.createElement(JA,{ref:c,iconNode:e,className:Y_(`lucide-${YA(u_(r))}`,`lucide-${r}`,s),...l}));return i.displayName=u_(r),i};/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $A=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],e2=rn("arrow-left",$A);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],n2=rn("award",t2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],a2=rn("bot",i2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],r2=rn("circle-check",s2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]],Yc=rn("coins",o2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]],c2=rn("crown",l2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]],Z_=rn("gift",u2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Gc=rn("loader-circle",f2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],h2=rn("message-square",d2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],m2=rn("play",p2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],x2=rn("refresh-cw",g2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],v2=rn("rotate-ccw",_2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],y2=rn("send",S2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],b2=rn("shield",M2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],T2=rn("smile",E2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],R2=rn("sparkles",A2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],C2=rn("star",w2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],D2=rn("target",N2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]],L2=rn("trophy",U2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],P2=rn("users",O2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],z2=rn("volume-2",I2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],B2=rn("volume-x",F2);/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],G2=rn("wifi",H2),V2=["👑","🦁","🦊","🐼","🦄","🐲","🧙‍♂️","🥷","🧑‍🚀","👸","💅","🧛","🛸","🏎️","💎","🔥"];function k2({userProfile:r,onUpdateAvatar:e,onStartGame:i,onOpenChest:s,onOpenAchievements:l}){const[c,f]=Qe.useState("lobby"),[h,m]=Qe.useState(mt.getMuted()),[p,S]=Qe.useState("ai"),[_,g]=Qe.useState(4),[M,T]=Qe.useState("medium"),[O,y]=Qe.useState({red:"Imperial Red",green:"Emerald Green",yellow:"Solar Gold",blue:"Royal Blue"}),v=()=>{mt.playUIPress();const H=["red","green","yellow","blue"].slice(0,_).map((D,F)=>p==="ai"?{name:F===0?r.username:`Opponent Bot ${F}`,isAI:F!==0,color:D}:p==="local"?{name:O[D]||`Player ${F+1}`,isAI:!1,color:D}:{name:F===0?r.username:`ProPlayer_${Math.floor(Math.random()*900+100)}`,isAI:F!==0,color:D});i(p,{playerCount:_,aiDifficulty:M,playersConfig:H})},U=()=>{const N=mt.toggleMute();m(N),mt.playUIPress()},L=N=>{mt.playUIPress(),e(N)};return C.jsxs("div",{className:"w-full max-w-4xl mx-auto min-h-[600px] flex flex-col md:flex-row gap-6 p-1 md:p-6 text-white font-sans",children:[C.jsxs("div",{className:"flex-1 flex flex-col gap-5 p-6 rounded-3xl border border-white/10 glass-panel shadow-2xl relative overflow-hidden bg-slate-900/80",children:[C.jsx("div",{className:"absolute top-[-50px] right-[-50px] opacity-10 pointer-events-none rotate-12",children:C.jsx(c2,{size:220,className:"text-yellow-400"})}),C.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[C.jsx("div",{className:"p-2.5 bg-gradient-to-tr from-amber-500 to-rose-500 rounded-xl shadow-lg shadow-rose-500/20",children:C.jsx(L2,{className:"text-white w-6 h-6 animate-pulse"})}),C.jsxs("div",{children:[C.jsx("h1",{className:"text-lg font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-yellow-200 to-orange-400 uppercase font-mono",children:"Ludo King Royale"}),C.jsx("p",{className:"text-[10px] text-slate-400 tracking-widest uppercase font-mono",children:"3D Luxury Cabin Edition"})]})]}),C.jsxs("div",{className:"relative group bg-slate-950/60 p-4 rounded-2xl border border-white/5 flex items-center gap-4",children:[C.jsxs("div",{className:"relative",children:[C.jsx("div",{className:"w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-600 to-yellow-400 p-0.5 flex items-center justify-center text-4xl shadow-md cursor-pointer hover:scale-105 transition-transform duration-300",children:r.avatar}),C.jsx("span",{className:"absolute bottom-0 right-0 w-6 h-6 rounded-full bg-amber-500 border-2 border-slate-950 flex items-center justify-center text-[10px] font-bold text-white shadow",children:r.level})]}),C.jsxs("div",{className:"flex-1",children:[C.jsx("h2",{className:"font-semibold text-base text-slate-100",children:r.username}),C.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-amber-400 mt-1",children:[C.jsx(Yc,{className:"w-4 h-4"}),C.jsx("span",{className:"font-mono font-bold text-yellow-300 text-sm",children:r.coins.toLocaleString()}),C.jsx("span",{className:"text-[10px] text-slate-400 ml-1",children:"Royale Coins"})]})]})]}),C.jsxs("div",{className:"bg-slate-950/40 p-3 rounded-xl border border-white/5",children:[C.jsxs("div",{className:"flex justify-between text-xs text-slate-400 mb-1.5 font-mono",children:[C.jsx("span",{children:"LEVEL PROGRESS"}),C.jsxs("span",{className:"text-slate-200",children:[r.xp%100," / 100 XP"]})]}),C.jsx("div",{className:"w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-white/5",children:C.jsx("div",{className:"bg-gradient-to-r from-blue-400 to-indigo-500 h-full rounded-full transition-all duration-500",style:{width:`${r.xp%100}%`}})})]}),C.jsxs("div",{className:"grid grid-cols-2 gap-3 mt-1",children:[C.jsxs("button",{onClick:s,className:"flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-[#d4af37]/10 to-[#b8860b]/10 hover:from-[#d4af37]/20 hover:to-[#b8860b]/20 border border-[#d4af37]/30 hover:border-[#d4af37]/60 rounded-xl shadow-lg shadow-[#d4af37]/5 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs font-mono font-bold text-[#d4af37] uppercase",children:[C.jsx(Z_,{className:"w-4 h-4 text-[#d4af37]"}),"Loot Chest"]}),C.jsxs("button",{onClick:l,className:"flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 hover:from-blue-500/20 hover:to-indigo-500/20 border border-blue-500/30 hover:border-blue-500/60 rounded-xl shadow-lg shadow-blue-500/5 hover:scale-[1.02] active:scale-[0.98] transition-all text-xs font-mono font-bold text-blue-300 uppercase",children:[C.jsx(C2,{className:"w-4 h-4 text-blue-400"}),"Achievements"]})]}),C.jsxs("div",{className:"mt-2 bg-slate-950/40 p-4 rounded-2xl border border-white/5 flex-1 flex flex-col justify-between",children:[C.jsx("h3",{className:"text-xs font-semibold tracking-wider text-slate-400 uppercase font-mono border-b border-white/5 pb-2 mb-3",children:"ROYALE CAREER STATS"}),C.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[C.jsxs("div",{className:"p-2 border border-white/5 rounded-xl bg-slate-950/50",children:[C.jsx("span",{className:"block text-slate-400 text-[10px] uppercase font-mono",children:"Played"}),C.jsx("span",{className:"text-lg font-bold font-mono text-slate-200",children:r.stats.gamesPlayed})]}),C.jsxs("div",{className:"p-2 border border-white/5 rounded-xl bg-slate-950/50",children:[C.jsx("span",{className:"block text-slate-400 text-[10px] uppercase font-mono",children:"Won"}),C.jsx("span",{className:"text-lg font-bold font-mono text-emerald-400",children:r.stats.gamesWon})]}),C.jsxs("div",{className:"p-2 border border-white/5 rounded-xl bg-slate-950/50",children:[C.jsx("span",{className:"block text-slate-400 text-[10px] uppercase font-mono",children:"Win Rate"}),C.jsx("span",{className:"text-lg font-bold font-mono text-sky-400",children:r.stats.gamesPlayed>0?`${Math.round(r.stats.gamesWon/r.stats.gamesPlayed*100)}%`:"0%"})]})]}),C.jsxs("div",{className:"flex justify-between items-center mt-4 border-t border-white/5 pt-3",children:[C.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-slate-400",children:[C.jsx(b2,{className:"w-4 h-4 text-emerald-400"}),C.jsx("span",{children:"PBR Anti-Cheat Ready"})]}),C.jsx("button",{onClick:U,className:"p-2 bg-slate-800 hover:bg-slate-700 active:scale-95 text-slate-200 rounded-xl transition-all border border-white/5 flex items-center justify-center",title:"Toggle Audio Synthesizer",children:h?C.jsx(B2,{className:"w-4 h-4"}):C.jsx(z2,{className:"w-4 h-4 text-emerald-400"})})]})]})]}),C.jsxs("div",{className:"flex-[1.4] flex flex-col gap-5 p-6 rounded-3xl border border-white/10 glass-panel shadow-2xl bg-slate-900/80",children:[C.jsxs("div",{className:"grid grid-cols-3 gap-2 bg-slate-950/60 p-1.5 rounded-2xl border border-white/5",children:[C.jsx("button",{onClick:()=>{mt.playUIPress(),f("lobby")},className:`py-2 px-3 text-xs font-bold rounded-xl tracking-wider transition-all uppercase font-mono ${c==="lobby"||c==="modes"?"bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black shadow-md":"text-slate-400 hover:text-slate-200"}`,children:"PLAY ROOM"}),C.jsx("button",{onClick:()=>{mt.playUIPress(),f("profile")},className:`py-2 px-3 text-xs font-bold rounded-xl tracking-wider transition-all uppercase font-mono ${c==="profile"?"bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black shadow-md":"text-slate-400 hover:text-slate-200"}`,children:"AVATARS"}),C.jsx("button",{onClick:()=>{mt.playUIPress(),s()},className:"py-2 px-3 text-xs font-semibold rounded-xl tracking-wider transition-all uppercase font-mono text-slate-400 hover:text-slate-200",children:"LOOT"})]}),c==="profile"&&C.jsxs("div",{className:"flex-1 flex flex-col",children:[C.jsx("h3",{className:"text-sm font-semibold tracking-wider text-slate-300 font-mono mb-3",children:"SELECT YOUR ROYALE PRESENCE"}),C.jsx("p",{className:"text-xs text-slate-400 leading-relaxed mb-4",children:"Select an avatar icon to personalize your profile appearance inside competitive leaderboards and active match lobbies."}),C.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-8 gap-3 overflow-y-auto max-h-[300px] p-2 bg-slate-950/40 rounded-2xl border border-white/5",children:V2.map(N=>C.jsx("button",{onClick:()=>L(N),className:`w-12 h-12 rounded-xl flex items-center justify-center text-2xl border transition-all ${r.avatar===N?"border-yellow-400 bg-yellow-400/10 scale-105 shadow-md shadow-yellow-400/10":"border-white/5 bg-slate-900 hover:border-white/20"}`,children:N},N))}),C.jsxs("div",{className:"mt-auto pt-4 border-t border-white/5 flex gap-4",children:[C.jsxs("div",{className:"flex-1 bg-slate-950/60 p-3 rounded-xl border border-white/5",children:[C.jsx("span",{className:"block text-[10px] text-slate-400 font-mono uppercase",children:"Current Character"}),C.jsxs("span",{className:"text-xs font-bold text-slate-100 flex items-center gap-2 mt-1",children:[C.jsx("span",{className:"text-xl",children:r.avatar}),"Honorary Contender"]})]}),C.jsx("button",{onClick:()=>{mt.playUIPress(),f("lobby")},className:"px-6 py-3 bg-slate-800 hover:bg-slate-700 text-xs font-mono font-bold tracking-wider uppercase rounded-xl border border-white/10 transition-all",children:"Back to Play"})]})]}),(c==="lobby"||c==="modes")&&C.jsxs("div",{className:"flex-1 flex flex-col justify-between",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"text-sm font-semibold tracking-wider text-slate-300 font-mono mb-3",children:"CHOOSE CHAMPIONSHIP THEME"}),C.jsxs("div",{className:"grid grid-cols-3 gap-3 mb-5",children:[C.jsxs("button",{onClick:()=>{mt.playUIPress(),S("ai")},className:`p-4 rounded-2xl border flex flex-col gap-1.5 text-left transition-all ${p==="ai"?"border-amber-500/60 bg-gradient-to-tr from-amber-500/10 to-yellow-500/10 scale-[1.02]":"border-white/5 bg-slate-950/40 hover:border-white/10"}`,children:[C.jsx(a2,{className:`w-5 h-5 ${p==="ai"?"text-amber-400":"text-slate-400"}`}),C.jsx("span",{className:"font-bold text-xs",children:"OFFLINE VS AI"}),C.jsx("span",{className:"text-[10px] text-slate-400",children:"Intelligent engine"})]}),C.jsxs("button",{onClick:()=>{mt.playUIPress(),S("local")},className:`p-4 rounded-2xl border flex flex-col gap-1.5 text-left transition-all ${p==="local"?"border-emerald-500/60 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 scale-[1.02]":"border-white/5 bg-slate-950/40 hover:border-white/10"}`,children:[C.jsx(P2,{className:`w-5 h-5 ${p==="local"?"text-emerald-400":"text-slate-400"}`}),C.jsx("span",{className:"font-bold text-xs",children:"LOCAL ROOM"}),C.jsx("span",{className:"text-[10px] text-slate-400",children:"Pass and Play"})]}),C.jsxs("button",{onClick:()=>{mt.playUIPress(),S("online")},className:`p-4 rounded-2xl border flex flex-col gap-1.5 text-left transition-all relative ${p==="online"?"border-blue-500/60 bg-gradient-to-tr from-blue-500/10 to-indigo-500/10 scale-[1.02]":"border-white/5 bg-slate-950/40 hover:border-white/10"}`,children:[C.jsx("div",{className:"absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),C.jsx(D2,{className:`w-5 h-5 ${p==="online"?"text-blue-400":"text-slate-400"}`}),C.jsx("span",{className:"font-bold text-xs",children:"ONLINE PRO"}),C.jsx("span",{className:"text-[10px] text-slate-400",children:"Competitive match"})]})]}),C.jsxs("div",{className:"bg-slate-950/40 p-4 rounded-2xl border border-white/5 min-h-[170px] flex flex-col justify-between",children:[p==="ai"&&C.jsxs("div",{children:[C.jsx("h4",{className:"text-[11px] font-bold text-slate-400 tracking-wider font-mono uppercase mb-3.5",children:"MATCH SETTINGS: VS AI"}),C.jsxs("div",{className:"mb-4",children:[C.jsxs("label",{className:"text-xs text-slate-400 mb-2 block font-mono",children:["PLAYER COUNTER (",_,")"]}),C.jsx("div",{className:"flex gap-2",children:[2,3,4].map(N=>C.jsxs("button",{onClick:()=>{mt.playUIPress(),g(N)},className:`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${_===N?"border-amber-500 bg-amber-500/10 text-amber-300":"border-white/5 bg-slate-900 text-slate-400 hover:border-white/10"}`,children:[N," Players"]},N))})]}),C.jsxs("div",{children:[C.jsx("label",{className:"text-xs text-slate-400 mb-2 block font-mono",children:"INTELLIGENCE LEVEL"}),C.jsx("div",{className:"flex gap-2",children:["easy","medium","hard"].map(N=>C.jsx("button",{onClick:()=>{mt.playUIPress(),T(N)},className:`flex-1 py-1.5 text-xs rounded-xl font-bold border capitalize transition-all ${M===N?"border-amber-500 bg-amber-500/10 text-amber-300":"border-white/5 bg-slate-900 text-slate-400 hover:border-white/10"}`,children:N},N))})]})]}),p==="local"&&C.jsxs("div",{children:[C.jsx("h4",{className:"text-[11px] font-bold text-slate-400 tracking-wider font-mono uppercase mb-3.5",children:"MATCH SETTINGS: PASS & PLAY"}),C.jsxs("div",{className:"mb-4",children:[C.jsxs("label",{className:"text-xs text-slate-400 mb-2 block font-mono",children:["PLAYER COUNTER (",_,")"]}),C.jsx("div",{className:"flex gap-2",children:[2,3,4].map(N=>C.jsxs("button",{onClick:()=>{mt.playUIPress(),g(N)},className:`flex-1 py-2 text-xs font-bold rounded-xl border transition-all ${_===N?"border-emerald-500 bg-emerald-500/10 text-emerald-300":"border-white/5 bg-slate-900 text-slate-400 hover:border-white/10"}`,children:[N," Players"]},N))})]}),C.jsx("div",{className:"grid grid-cols-2 gap-3",children:["red","green","yellow","blue"].slice(0,_).map((N,H)=>C.jsxs("div",{className:"bg-slate-900/60 p-2 rounded-xl border border-white/5 flex items-center gap-2",children:[C.jsx("span",{className:"w-2.5 h-2.5 rounded-full",style:{backgroundColor:N==="red"?"#ef4444":N==="green"?"#22c55e":N==="yellow"?"#eab308":"#3b82f6"}}),C.jsx("input",{type:"text",value:O[N],onChange:D=>{y(F=>({...F,[N]:D.target.value}))},className:"bg-transparent text-xs outline-none text-white font-semibold w-full",placeholder:`Contender ${H+1}`})]},N))})]}),p==="online"&&C.jsxs("div",{children:[C.jsx("h4",{className:"text-[11px] font-bold text-slate-400 tracking-wider font-mono uppercase mb-2",children:"MATCH SETTINGS: ONLINE CHAMPIONSHIP"}),C.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-4",children:"Deploy instant search for eligible contestants across international rooms. In this sandboxed version, we match you instantly with actual active live simulator players and enable interactive chats."}),C.jsxs("div",{className:"flex gap-4",children:[C.jsxs("div",{className:"flex-1 bg-slate-900/60 p-3 rounded-xl border border-white/5 flex items-center gap-3",children:[C.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"}),C.jsxs("div",{children:[C.jsx("span",{className:"block text-[9px] text-slate-400 font-mono",children:"SERVERS"}),C.jsx("span",{className:"text-xs font-bold text-slate-100",children:"Royale Asia-Pacific"})]})]}),C.jsxs("div",{className:"flex-1 bg-slate-900/60 p-3 rounded-xl border border-white/5 flex items-center gap-3",children:[C.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"}),C.jsxs("div",{children:[C.jsx("span",{className:"block text-[9px] text-slate-400 font-mono",children:"PING RATE"}),C.jsx("span",{className:"text-xs font-bold text-emerald-400 font-mono",children:"18 ms"})]})]})]})]})]})]}),C.jsx("div",{className:"pt-4 border-t border-white/10 mt-4",children:C.jsxs("button",{onClick:v,className:"w-full py-4 rounded-2xl bg-gradient-to-b from-[#d4af37] to-[#b8860b] hover:from-[#e5c158] hover:to-[#cfa32b] shadow-xl shadow-[#d4af37]/10 hover:scale-[1.01] active:scale-[0.99] transition-all font-mono font-bold text-sm tracking-wider uppercase text-slate-950 flex items-center justify-center gap-2.5 cursor-pointer",children:[C.jsx(m2,{className:"w-5 h-5 fill-slate-950 text-slate-950"}),"ENTER ROYALE ARENA"]})})]})]})]})}const $d=["Yo, let's roll!","Ludo King here, prepare to get knocked back to base!","GLHF everyone!","No mercy today 🦾","Is anyone playing hard mode strategy?","Love the real-time wooden board reflections!","Let's see who gets a 6 first!"],Or=["NeoLudo","PawnStar","DiceViper","BoardLord","RoyalDice","GoldDigger"],Pr=["🦁","🐼","🦄","🐼","🐲","🥷","🧑‍🚀","👸"];function j2({userProfile:r,playersConfig:e,onMatchReady:i,onCancelMatch:s}){const[l,c]=Qe.useState("searching"),[f,h]=Qe.useState([]),[m,p]=Qe.useState([]),[S,_]=Qe.useState(""),g=Qe.useRef(null);Qe.useEffect(()=>{if(l!=="searching")return;h([{name:r.username,avatar:r.avatar,rating:1240,color:"red"}]);const y=setTimeout(()=>{mt.playMoveTick(1),h(L=>[...L,{name:Or[Math.floor(Math.random()*Or.length)],avatar:Pr[Math.floor(Math.random()*Pr.length)],rating:1100+Math.floor(Math.random()*300),color:"green"}])},1200),v=setTimeout(()=>{mt.playMoveTick(2),h(L=>[...L,{name:Or[Math.floor(Math.random()*Or.length)],avatar:Pr[Math.floor(Math.random()*Pr.length)],rating:1100+Math.floor(Math.random()*300),color:"yellow"}])},2400),U=setTimeout(()=>{mt.playReachHome(),h(L=>[...L,{name:Or[Math.floor(Math.random()*Or.length)],avatar:Pr[Math.floor(Math.random()*Pr.length)],rating:1100+Math.floor(Math.random()*300),color:"blue"}]),c("connected")},3600);return()=>{clearTimeout(y),clearTimeout(v),clearTimeout(U)}},[l,r]),Qe.useEffect(()=>{if(l!=="connected")return;p([{id:"1",sender:"System Engine",color:"system",message:"🔒 Encryption keys generated. Arena secure.",timestamp:"Now"}]);const v=[setTimeout(()=>{M("green",$d[0])},1e3),setTimeout(()=>{M("yellow",$d[1])},2500),setTimeout(()=>{M("blue",$d[2])},4e3)];return()=>v.forEach(U=>clearTimeout(U))},[l]);const M=(y,v)=>{const U=f.find(N=>N.color===y);if(!U)return;const L={id:Math.random().toString(),sender:U.name,color:U.color,message:v,timestamp:"Now"};p(N=>[...N,L]),mt.playMoveTick(3),O()},T=y=>{if(y.preventDefault(),!S.trim())return;mt.playUIPress();const v={id:Math.random().toString(),sender:r.username,color:"red",message:S.trim(),timestamp:"Now"};p(U=>[...U,v]),_(""),O(),setTimeout(()=>{const U=f.filter(L=>L.color!=="red");if(U.length>0){const L=U[Math.floor(Math.random()*U.length)],N=["Nice! Let's settle this on the luxury wooden board.","Good one, bring your best dice rolling index!","Ahaha focus! The match is initializing.","I am going hard strategy on you red player, watch out!"];M(L.color,N[Math.floor(Math.random()*N.length)])}},1500)},O=()=>{setTimeout(()=>{g.current&&(g.current.scrollTop=g.current.scrollHeight)},50)};return C.jsxs("div",{className:"w-full max-w-4xl mx-auto p-4 md:p-6 text-white font-sans flex flex-col gap-6",children:[C.jsxs("div",{className:"glass-panel border border-white/10 p-4 rounded-2xl flex items-center justify-between bg-slate-900/80",children:[C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx(G2,{className:"text-emerald-400 w-5 h-5 animate-pulse"}),C.jsxs("div",{children:[C.jsx("h2",{className:"text-sm font-bold font-mono text-slate-200",children:"MATCH MAKING QUEUE"}),C.jsx("p",{className:"text-[10px] text-slate-400 tracking-wider",children:"CONNECTING TO ROYALE ARENA 3D"})]})]}),C.jsx("span",{className:"text-xs font-mono font-bold bg-slate-800 text-slate-300 px-3 py-1 rounded-full border border-white/5 uppercase",children:l==="searching"?"SEARCHING...":"ESTABLISHED"})]}),C.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[C.jsxs("div",{className:"p-4 rounded-2xl border border-red-500/30 bg-slate-900/80 text-center relative overflow-hidden flex flex-col justify-center items-center min-h-[160px]",children:[C.jsx("span",{className:"absolute top-2 left-2 text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full font-mono font-bold uppercase",children:"HOST"}),C.jsx("span",{className:"text-4xl filter drop-shadow mb-3",children:r.avatar}),C.jsx("h3",{className:"font-bold text-sm text-slate-100 line-clamp-1",children:r.username}),C.jsx("span",{className:"text-[10px] text-red-400 font-mono mt-1",children:"RED TEAM"})]}),C.jsx("div",{className:"p-4 rounded-2xl border border-white/10 bg-slate-900/40 text-center relative overflow-hidden flex flex-col justify-center items-center min-h-[160px]",children:f.length>=2?C.jsxs(C.Fragment,{children:[C.jsx("span",{className:"text-4xl filter drop-shadow mb-3",children:f[1].avatar}),C.jsx("h3",{className:"font-bold text-sm text-slate-100 line-clamp-1",children:f[1].name}),C.jsx("span",{className:"text-[10px] text-emerald-400 font-mono mt-1",children:"GREEN TEAM"})]}):C.jsxs("div",{className:"flex flex-col items-center",children:[C.jsx(Gc,{className:"w-8 h-8 text-emerald-400 animate-spin mb-2"}),C.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"SEARCHING..."})]})}),C.jsx("div",{className:"p-4 rounded-2xl border border-white/10 bg-slate-900/40 text-center relative overflow-hidden flex flex-col justify-center items-center min-h-[160px]",children:f.length>=3?C.jsxs(C.Fragment,{children:[C.jsx("span",{className:"text-4xl filter drop-shadow mb-3",children:f[2].avatar}),C.jsx("h3",{className:"font-bold text-sm text-slate-100 line-clamp-1",children:f[2].name}),C.jsx("span",{className:"text-[10px] text-amber-400 font-mono mt-1",children:"YELLOW TEAM"})]}):C.jsxs("div",{className:"flex flex-col items-center",children:[C.jsx(Gc,{className:"w-8 h-8 text-amber-400 animate-spin mb-2"}),C.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"SEARCHING..."})]})}),C.jsx("div",{className:"p-4 rounded-2xl border border-white/10 bg-slate-900/40 text-center relative overflow-hidden flex flex-col justify-center items-center min-h-[160px]",children:f.length>=4?C.jsxs(C.Fragment,{children:[C.jsx("span",{className:"text-4xl filter drop-shadow mb-3",children:f[3].avatar}),C.jsx("h3",{className:"font-bold text-sm text-slate-100 line-clamp-1",children:f[3].name}),C.jsx("span",{className:"text-[10px] text-blue-400 font-mono mt-1",children:"BLUE TEAM"})]}):C.jsxs("div",{className:"flex flex-col items-center",children:[C.jsx(Gc,{className:"w-8 h-8 text-blue-400 animate-spin mb-2"}),C.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"SEARCHING..."})]})})]}),C.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[C.jsxs("div",{className:"md:col-span-2 glass-panel border border-white/10 rounded-2xl p-4 bg-slate-900/80 flex flex-col h-[280px]",children:[C.jsxs("div",{className:"flex items-center gap-2 border-b border-white/5 pb-2 mb-3",children:[C.jsx(h2,{className:"w-4 h-4 text-amber-400"}),C.jsx("span",{className:"text-xs font-mono font-bold text-slate-400 uppercase",children:"Interactive Competitions Chat"})]}),C.jsx("div",{ref:g,className:"flex-1 overflow-y-auto space-y-2.5 pr-2",children:m.length===0?C.jsx("p",{className:"text-xs text-slate-500 font-mono italic text-center mt-8",children:"Secure connection starting. Say hello!"}):m.map(y=>C.jsx("div",{className:"text-xs",children:y.color==="system"?C.jsx("div",{className:"text-slate-500 font-mono italic bg-slate-950/40 px-2 py-1.5 rounded border border-white/5",children:y.message}):C.jsxs("div",{children:[C.jsxs("span",{className:"font-bold mr-1.5",style:{color:y.color==="red"?"#ef4444":y.color==="green"?"#22c55e":y.color==="yellow"?"#eab308":"#3b82f6"},children:[y.sender,":"]}),C.jsx("span",{className:"text-slate-200",children:y.message})]})},y.id))}),C.jsxs("form",{onSubmit:T,className:"flex gap-2 border-t border-white/5 pt-3 mt-3",children:[C.jsx("input",{type:"text",value:S,onChange:y=>_(y.target.value),className:"flex-1 bg-slate-950/60 rounded-xl px-3 text-xs border border-white/5 outline-none text-white focus:border-amber-500",placeholder:"Type message to other contestants...",disabled:l==="searching"}),C.jsx("button",{type:"submit",className:"p-2.5 bg-gradient-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-slate-950 font-bold rounded-xl transition-all flex items-center justify-center disabled:opacity-50",disabled:l==="searching",children:C.jsx(y2,{className:"w-4 h-4 text-slate-950 fill-slate-950"})})]})]}),C.jsxs("div",{className:"glass-panel border border-white/10 rounded-2xl p-5 bg-slate-900/80 flex flex-col justify-between",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"text-xs font-bold font-mono text-slate-400 tracking-wider uppercase mb-1",children:"PRO ROOM SETUP"}),C.jsx("span",{className:"text-[10px] text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded font-mono",children:"CODE: #ROYALE-7729"}),C.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mt-4",children:"All 4 competitive contestants must successfully handshake with the 3D physics server to initialize the luxury mahogany arena board."})]}),C.jsxs("div",{className:"space-y-2.5 mt-6",children:[l==="connected"?C.jsx("button",{onClick:()=>{mt.playVictory(),i()},className:"w-full py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-mono font-bold text-xs tracking-widest uppercase rounded-xl shadow-lg shadow-emerald-500/10 cursor-pointer active:scale-95 transition-all",children:"Launch 3D Arena"}):C.jsxs("div",{className:"w-full py-3 px-2 bg-slate-950/60 border border-white/5 rounded-xl flex items-center justify-center gap-2.5",children:[C.jsx(Gc,{className:"w-4 h-4 text-amber-400 animate-spin"}),C.jsx("span",{className:"text-slate-400 text-xs font-mono",children:"SEARCHING CONTENDERS..."})]}),C.jsx("button",{onClick:()=>{mt.playUIPress(),s()},className:"w-full py-2.5 bg-slate-800/80 hover:bg-slate-700/80 border border-white/5 text-slate-300 font-mono font-bold text-[10px] tracking-wider uppercase rounded-xl active:scale-95 transition-all",children:"Cancel Matchmaking"})]})]})]})]})}function f_({userProfile:r,achievements:e,onClaimCoins:i,onClaimAchievement:s,onClose:l}){const[c,f]=Qe.useState(!1),[h,m]=Qe.useState("closed"),[p,S]=Qe.useState(null),_=()=>{if(r.coins<200&&h==="closed"){mt.playUIPress(),alert("Opening the Deluxe chest requires at least 200 coins!");return}mt.playDiceRoll(),f(!0),setTimeout(()=>{mt.playTrophy();const M=500+Math.floor(Math.random()*1500);S(M),f(!1),m("opened"),i(M-200)},1800)},g=()=>{mt.playUIPress(),m("closed"),S(null)};return C.jsxs("div",{className:"w-full max-w-4xl mx-auto p-4 md:p-6 text-white font-sans flex flex-col gap-6",children:[C.jsxs("div",{className:"glass-panel border border-white/10 p-5 rounded-3xl flex flex-row items-center justify-between bg-slate-900/80",children:[C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx("button",{onClick:l,className:"p-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all border border-white/5",children:C.jsx(e2,{className:"w-4 h-4 text-slate-300"})}),C.jsxs("div",{children:[C.jsx("h2",{className:"text-base font-extrabold tracking-wider font-mono text-slate-100",children:"VAULT & DAILY LOOT CHESTS"}),C.jsx("p",{className:"text-[10px] text-slate-400 font-mono tracking-wider",children:"CLAIM ROYAL COINS & COSMETICS"})]})]}),C.jsxs("div",{className:"flex items-center gap-2 bg-slate-950/60 px-4 py-2 rounded-xl border border-white/5",children:[C.jsx(Yc,{className:"w-4 h-4 text-amber-400 animate-bounce"}),C.jsx("span",{className:"text-sm font-bold font-mono text-yellow-300",children:r.coins.toLocaleString()})]})]}),C.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[C.jsxs("div",{className:"glass-panel border border-white/10 p-6 rounded-3xl bg-slate-900/80 flex flex-col justify-between items-center text-center min-h-[400px]",children:[C.jsxs("div",{children:[C.jsx("h3",{className:"text-sm font-bold font-mono text-amber-400 tracking-wider uppercase",children:"DELUXE MYSTERY CHEST"}),C.jsxs("p",{className:"text-xs text-slate-400 mt-2 max-w-xs mx-auto",children:["Unlock a random treasure chest of Royale Coins. Costs ",C.jsx("strong",{className:"text-yellow-400",children:"200 coins"})," to spin. Guaranteed multipliers up to 10x!"]})]}),C.jsxs("div",{className:"my-8 relative w-48 h-48 flex items-center justify-center",children:[C.jsx("div",{className:`absolute w-40 h-40 rounded-full bg-amber-500/10 blur-3xl ${c?"animate-ping":""}`}),h==="closed"?C.jsx("div",{className:`text-8xl select-none filter drop-shadow hover:scale-105 transition-transform duration-300 ${c?"animate-bounce":""}`,children:"🎁"}):C.jsxs("div",{className:"text-center animate-scale-in",children:[C.jsx("div",{className:"text-8xl select-none filter drop-shadow",children:"🎉"}),C.jsxs("div",{className:"mt-4 flex items-center justify-center gap-2 bg-amber-500/20 border border-amber-500/40 py-1.5 px-4 rounded-full text-amber-300 text-sm font-mono font-bold animate-pulse",children:[C.jsx(Yc,{className:"w-4 h-4"}),"+",p," Coins!"]})]})]}),C.jsx("div",{className:"w-full",children:h==="closed"?C.jsx("button",{onClick:_,disabled:c,className:"w-full py-4 bg-gradient-to-b from-[#d4af37] to-[#b8860b] hover:from-[#e5c158] hover:to-[#cfa32b] text-slate-950 font-mono font-bold text-xs tracking-widest uppercase rounded-2xl shadow-lg shadow-[#d4af37]/10 disabled:opacity-50 cursor-pointer active:scale-95 transition-all flex items-center justify-center gap-2",children:c?C.jsxs(C.Fragment,{children:[C.jsx(x2,{className:"w-4 h-4 animate-spin"}),"UNLOCKING VAULT..."]}):C.jsxs(C.Fragment,{children:[C.jsx(Z_,{className:"w-4 h-4 text-slate-950 fill-slate-950"}),"OPEN CHEST (200 Coins)"]})}):C.jsx("button",{onClick:g,className:"w-full py-4 bg-slate-800 hover:bg-slate-700 border border-white/5 text-slate-200 font-mono font-bold text-xs tracking-widest uppercase rounded-2xl active:scale-95 transition-all",children:"OPEN ANOTHER CHEST"})})]}),C.jsxs("div",{className:"glass-panel border border-white/10 p-6 rounded-3xl bg-slate-900/80 flex flex-col h-[480px]",children:[C.jsxs("div",{className:"flex items-center gap-2 border-b border-white/5 pb-3 mb-4",children:[C.jsx(n2,{className:"w-5 h-5 text-blue-400"}),C.jsx("h3",{className:"text-sm font-bold font-mono text-slate-200 uppercase",children:"CHAMPIONSHIP ACHIEVEMENTS"})]}),C.jsx("div",{className:"flex-1 overflow-y-auto space-y-3.5 pr-1",children:e.map(M=>{const T=M.progress>=M.target&&!M.unlocked;return C.jsxs("div",{className:`p-3.5 rounded-2xl border transition-all ${M.unlocked?"bg-slate-950/20 border-white/5 opacity-70":T?"bg-blue-500/5 border-blue-500/30":"bg-slate-950/40 border-white/5"}`,children:[C.jsxs("div",{className:"flex items-center gap-3.5",children:[C.jsx("span",{className:"text-3xl filter drop-shadow",children:M.icon}),C.jsxs("div",{className:"flex-1",children:[C.jsxs("div",{className:"flex justify-between items-center",children:[C.jsx("h4",{className:"text-xs font-bold text-slate-200",children:M.title}),C.jsxs("span",{className:"text-[10px] font-mono text-amber-400 flex items-center gap-1",children:[C.jsx(Yc,{className:"w-3 h-3"}),"+",M.rewardCoins]})]}),C.jsx("p",{className:"text-[10px] text-slate-400 mt-1",children:M.description}),C.jsxs("div",{className:"mt-2.5 flex items-center gap-3",children:[C.jsx("div",{className:"flex-1 bg-slate-800 rounded-full h-1.5 overflow-hidden",children:C.jsx("div",{className:"bg-blue-500 h-full rounded-full transition-all",style:{width:`${Math.min(M.progress/M.target*100,100)}%`}})}),C.jsxs("span",{className:"text-[9px] font-mono font-semibold text-slate-400",children:[M.progress,"/",M.target]})]})]})]}),T&&C.jsx("button",{onClick:()=>s(M.id,M.rewardCoins),className:"w-full mt-3 py-1.5 bg-blue-500 hover:bg-blue-600 active:scale-95 text-slate-950 font-mono font-bold text-[9px] tracking-widest uppercase rounded-lg transition-all",children:"CLAIM REWARD"}),M.unlocked&&C.jsxs("div",{className:"flex justify-end gap-1 items-center mt-2 text-[9px] text-emerald-400 font-mono uppercase font-bold",children:[C.jsx(r2,{className:"w-3.5 h-3.5"}),"UNLOCKED & CLAIMED"]})]},M.id)})})]})]})]})}const X2={username:"ChampionshipRookie",avatar:"👑",coins:1e3,xp:125,level:1,stats:{gamesPlayed:0,gamesWon:0,kills:0,totalWinsRed:0,totalWinsGreen:0,totalWinsBlue:0,totalWinsYellow:0}},W2=[{id:"first_run",title:"Royale Awakening",description:"Start any local or AI match",unlocked:!1,progress:0,target:1,icon:"🚀",rewardCoins:100},{id:"rolled_six",title:"Lord of Sixes",description:"Roll a maximum value six",unlocked:!1,progress:0,target:5,icon:"🎲",rewardCoins:150},{id:"first_kill",title:"First Blood",description:"Capture an opponent token",unlocked:!1,progress:0,target:1,icon:"⚔",rewardCoins:250},{id:"home_run",title:"Trophy Hunter",description:"Safely advance a token into Golden Home",unlocked:!1,progress:0,target:1,icon:"🏆",rewardCoins:300},{id:"rich_kid",title:"Golden Emperor",description:"Accumulate more than 2,500 coins",unlocked:!1,progress:0,target:2500,icon:"💎",rewardCoins:500}];function q2(){const[r,e]=Qe.useState(()=>{const B=localStorage.getItem("ludo_profile");return B?JSON.parse(B):X2}),[i,s]=Qe.useState(()=>{const B=localStorage.getItem("ludo_achievements");return B?JSON.parse(B):W2}),[l,c]=Qe.useState(mt.getMuted());Qe.useEffect(()=>{localStorage.setItem("ludo_profile",JSON.stringify(r))},[r]),Qe.useEffect(()=>{localStorage.setItem("ludo_achievements",JSON.stringify(i))},[i]);const[f,h]=Qe.useState({players:[],currentPlayerIndex:0,diceValue:1,hasRolled:!1,isRollInProgress:!1,gameStatus:"lobby",winner:null,movesRemaining:0,turnTimer:30,isSimulatedOnline:!1,chatMessages:[]}),[m,p]=Qe.useState("ai"),[S,_]=Qe.useState(null),[g,M]=Qe.useState([]),[T,O]=Qe.useState(""),[y,v]=Qe.useState({show:!1,msg:"",emoji:""}),U=Qe.useRef(!1),L=Qe.useCallback(B=>{M(te=>[B,...te.slice(0,14)])},[]),N=Qe.useCallback((B,te)=>{s(ue=>ue.map(P=>{if(P.id===B&&!P.unlocked){const Q=Math.min(P.progress+te,P.target);return{...P,progress:Q,unlocked:B==="rich_kid"?r.coins>=2500:Q>=P.target}}return P}))},[r]),[H,D]=Qe.useState([]),F=B=>{mt.playMoveTick(4);const te=Math.random().toString(),ue={id:te,emoji:B,x:10+Math.random()*80,y:70+Math.random()*15};D(P=>[...P,ue]),setTimeout(()=>{D(P=>P.filter(Q=>Q.id!==te))},2200),f.players.some(P=>P.isAI)&&setTimeout(()=>{const P=["🔥","😂","🦾","👑","🎲","😱"],Q=P[Math.floor(Math.random()*P.length)],xe=Math.random().toString();D(ye=>[...ye,{id:xe,emoji:Q,x:10+Math.random()*80,y:70+Math.random()*15}]),setTimeout(()=>{D(ye=>ye.filter(we=>we.id!==xe))},1800)},1e3)},E=B=>{e(te=>{const ue=te.coins+B;return ue>=2500&&N("rich_kid",ue),{...te,coins:ue}})},I=(B,te)=>{mt.playVictory(),e(ue=>({...ue,coins:ue.coins+te,xp:ue.xp+45,level:Math.floor((ue.xp+45)/100)+1})),s(ue=>ue.map(P=>P.id===B?{...P,unlocked:!0}:P))},q=(B,te)=>{p(B),_(te);let ue=100;B==="online"&&(ue=250),E(-ue);const P=te.playersConfig.map((Q,xe)=>{const ye=[0,1,2,3].map(we=>({id:we,color:Q.color,status:"base",position:0}));return{color:Q.color,name:Q.name,isAI:Q.isAI,active:xe===0,tokens:ye,aiDifficulty:te.aiDifficulty}});h({players:P,currentPlayerIndex:0,diceValue:1,hasRolled:!1,isRollInProgress:!1,gameStatus:"playing",winner:null,movesRemaining:1,turnTimer:30,isSimulatedOnline:B==="online",chatMessages:[]}),M([`✨ Match initialized. Entering Arena. Entry Fee -${ue} Coins deducted.`]),N("first_run",1)},V=(B,te)=>B.status==="base"?te===6:B.status==="home"?!1:B.status==="track"?B.position+te<=56:B.status==="home_path"?B.position+te<=5:!1,K=Qe.useCallback((B,te)=>B.tokens.filter(ue=>V(ue,te)).map(ue=>ue.id),[]),fe=()=>{f.hasRolled||f.isRollInProgress||f.winner||h(B=>({...B,isRollInProgress:!0}))},he=()=>{mt.playUIPress();const B=Math.floor(Math.random()*6)+1;B===6&&N("rolled_six",1),h(te=>{const ue=te.players[te.currentPlayerIndex];return K(ue,B).length,{...te,diceValue:B,hasRolled:!0,isRollInProgress:!1,lastDiceRollInfo:{rolledBy:ue.color,value:B,wasSix:B===6}}}),L(`🎲 ${f.players[f.currentPlayerIndex].name} rolled a luxury ${f.players[f.currentPlayerIndex].name==="red"?"🏆":""} ${f.diceValue}!`)},X=B=>{const te=(B.currentPlayerIndex+1)%B.players.length;h(ue=>({...ue,currentPlayerIndex:te,hasRolled:!1,diceValue:1,movesRemaining:1,turnTimer:30})),U.current=!1},z=B=>{if(!f.hasRolled||f.winner)return;const ue=f.players[f.currentPlayerIndex].tokens[B],P=f.diceValue;V(ue,P)&&h(Q=>{const xe=[...Q.players],ye={...xe[Q.currentPlayerIndex]},we=[...ye.tokens],$={...we[B]};if($.status,$.status==="base")$.status="track",$.position=0,L(`🚀 ${ye.name} spawned token ${B+1} from their start box.`);else if($.status==="track"){const Fe=$.position+P;Fe<=50?$.position=Fe:($.status="home_path",$.position=Fe-51,L(`🏠 ${ye.name} advanced token ${B+1} into private home security rails.`))}else if($.status==="home_path"){const Fe=$.position+P;Fe===5?($.status="home",$.position=5,mt.playReachHome(),v({show:!0,msg:`${ye.name} token landed home!`,emoji:"🏆"}),setTimeout(()=>v({show:!1,msg:"",emoji:""}),2500),N("home_run",1),L(`👑 ${ye.name} token ${B+1} finalized in Golden Center Home!`)):$.position=Fe}we[B]=$,ye.tokens=we,xe[Q.currentPlayerIndex]=ye;let Ee=!1;if($.status==="track"){const Dt=(Jo[$.color]+$.position)%52;qh.includes(Dt)||xe.forEach((Je,Rt)=>{if(Rt===Q.currentPlayerIndex)return;const nt=[...Je.tokens];nt.forEach((Et,Pt)=>{if(Et.status==="track"){const Z=(Jo[Et.color]+Et.position)%52;if(Dt===Z){mt.playKilled();const Ht=document.getElementById("ludo-3d-particle-capturer");Ht&&Ht.click(),Et.status="base",Et.position=0,nt[Pt]=Et,Je.tokens=nt,Ee=!0,v({show:!0,msg:`${ye.name} captured ${Je.name}!`,emoji:"⚔️"}),setTimeout(()=>v({show:!1,msg:"",emoji:""}),2200),N("first_kill",1),L(`⚔️ CRITICAL CAPTURE! ${ye.name} killed ${Je.name}'s token. Earned extra turn.`)}}})})}if(ye.tokens.every(Fe=>Fe.status==="home"))return mt.playVictory(),e(Fe=>({...Fe,coins:Fe.coins+(f.isSimulatedOnline?1e3:500),xp:Fe.xp+150,stats:{...Fe.stats,gamesPlayed:Fe.stats.gamesPlayed+1,gamesWon:Fe.stats.gamesWon+1}})),v({show:!0,msg:`VICTORY! ${ye.name} wins!`,emoji:"👑"}),{...Q,players:xe,winner:ye.color,gameStatus:"finished"};const Ie=P===6||Ee,tt={...Q,players:xe};return Ie?(L(`🔥 ${ye.name} earned bonus roll sequence!`),setTimeout(()=>{h(Fe=>({...Fe,hasRolled:!1,diceValue:1,isRollInProgress:!1}))},100)):X(tt),tt})};Qe.useEffect(()=>{if(f.gameStatus!=="playing"||f.winner)return;const B=f.players[f.currentPlayerIndex];if(!B||!B.isAI||U.current)return;U.current=!0;const te=setTimeout(()=>{fe()},1200);return()=>{clearTimeout(te)}},[f.currentPlayerIndex,f.gameStatus,f.players]),Qe.useEffect(()=>{if(f.gameStatus!=="playing"||f.winner||!f.hasRolled)return;const B=f.players[f.currentPlayerIndex];if(!B||!B.isAI)return;const te=K(B,f.diceValue);if(te.length===0){const xe=setTimeout(()=>{X(f)},1e3);return()=>clearTimeout(xe)}let ue=te[0];const P=te.filter(xe=>{const ye=B.tokens[xe];if(ye.status!=="track")return!1;const $=(Jo[ye.color]+ye.position+f.diceValue)%52;return!qh.includes($)&&f.players.some((Ee,Te)=>Te===f.currentPlayerIndex?!1:Ee.tokens.some(Ie=>{if(Ie.status!=="track")return!1;const Fe=(Jo[Ie.color]+Ie.position)%52;return $===Fe}))});if(P.length>0)ue=P[0];else{const xe=te.find(ye=>B.tokens[ye].status==="base");if(xe!==void 0&&f.diceValue===6)ue=xe;else{let ye=-1;te.forEach(we=>{const $=B.tokens[we],Ee=$.status==="home_path"?100+$.position:$.position;Ee>ye&&(ye=Ee,ue=we)})}}const Q=setTimeout(()=>{z(ue)},1400);return()=>{clearTimeout(Q)}},[f.hasRolled,f.currentPlayerIndex,f.gameStatus,f.diceValue]),Qe.useEffect(()=>{if(f.gameStatus!=="playing"||f.winner||f.isRollInProgress)return;const B=setInterval(()=>{h(te=>te.turnTimer<=1?(L("⏳ Timeout! Turn skipped."),X(te),{...te,turnTimer:30}):{...te,turnTimer:te.turnTimer-1})},1e3);return()=>clearInterval(B)},[f.gameStatus,f.winner,f.isRollInProgress,f.currentPlayerIndex]);const G=()=>{mt.playUIPress(),h(B=>({...B,gameStatus:"lobby",winner:null}))};return C.jsxs("div",{className:"w-full min-h-screen bg-[#0d0d0d] text-white font-sans overflow-x-hidden flex flex-col justify-between relative selection:bg-amber-500/20",style:{background:"radial-gradient(circle at center, #1a1a1a 0%, #050505 100%)"},children:[C.jsx("div",{className:"absolute top-20 right-40 w-64 h-64 bg-red-500/10 rounded-full blur-[100px] pointer-events-none"}),C.jsx("div",{className:"absolute bottom-20 left-40 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"}),C.jsx("div",{className:"fixed inset-0 pointer-events-none z-50 overflow-hidden",children:H.map(B=>C.jsx("div",{className:"absolute text-5xl animate-bounce",style:{left:`${B.x}%`,top:`${B.y}%`,animation:"floatGlow 2.2s ease-out forwards"},children:B.emoji},B.id))}),y.show&&C.jsx("div",{className:"fixed inset-0 bg-slate-950/70 z-[100] flex flex-col items-center justify-center animate-fade-in pointer-events-none",children:C.jsxs("div",{className:"glass-panel border-2 border-amber-500/50 p-8 rounded-3xl text-center max-w-sm flex flex-col items-center gap-4 bg-slate-900 shadow-2xl scale-110",children:[C.jsx("span",{className:"text-7xl animate-pulse filter drop-shadow",children:y.emoji}),C.jsx("h3",{className:"text-xl font-bold font-mono tracking-wider bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-500 bg-clip-text text-transparent uppercase min-h-[30px]",children:y.msg}),C.jsxs("div",{className:"flex gap-2",children:[C.jsx(R2,{className:"text-yellow-400 animate-spin w-5 h-5"}),C.jsx("span",{className:"text-xs text-slate-400 font-semibold tracking-wider font-mono",children:"ROYALE ARENA ACCLAMATION"})]})]})}),C.jsxs("header",{className:"h-16 px-6 flex items-center justify-between bg-black/40 backdrop-blur-md border-b border-white/10 z-50",children:[C.jsxs("div",{className:"flex items-center gap-4",children:[C.jsx("div",{className:"w-10 h-10 rounded-full border-2 border-[#d4af37] p-0.5 bg-gradient-to-tr from-gray-800 to-gray-600 flex items-center justify-center",children:C.jsx("span",{className:"text-xl select-none",children:r.avatar||"👑"})}),C.jsxs("div",{children:[C.jsxs("p",{className:"text-[10px] text-gray-400 font-bold uppercase tracking-widest font-mono",children:["Grandmaster Level ",r.level]}),C.jsx("p",{className:"text-sm font-semibold text-[#f1f1f1] uppercase tracking-wide font-sans",children:r.username})]})]}),C.jsxs("div",{className:"flex items-center gap-3 sm:gap-6",children:[C.jsxs("div",{className:"flex items-center gap-2.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 shadow-sm",children:[C.jsx("span",{className:"text-[#ffd700] font-bold font-mono",children:"$"}),C.jsx("span",{className:"text-xs sm:text-sm font-mono tracking-tighter text-yellow-300 font-bold",children:r.coins.toLocaleString()}),C.jsx("button",{className:"w-4 h-4 sm:w-5 sm:h-5 bg-[#d4af37] rounded-full text-black flex items-center justify-center font-bold text-xs select-none hover:bg-yellow-400 active:scale-90 transition-all",children:"+"})]}),C.jsxs("div",{className:"flex items-center gap-2.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 shadow-sm",children:[C.jsx("span",{className:"text-[#00f2ff] font-bold text-sm sm:text-base select-none",children:"◆"}),C.jsx("span",{className:"text-xs sm:text-sm font-mono tracking-tighter text-cyan-300 font-bold",children:(150+r.level*30).toLocaleString()}),C.jsx("button",{className:"w-4 h-4 sm:w-5 sm:h-5 bg-[#00f2ff] rounded-full text-black flex items-center justify-center font-bold text-xs select-none hover:bg-cyan-400 active:scale-90 transition-all",children:"+"})]})]})]}),C.jsxs("main",{className:"flex-1 max-w-7xl mx-auto w-full flex items-center justify-center p-3 sm:p-6 z-10",children:[f.gameStatus==="lobby"&&C.jsx(k2,{userProfile:r,onUpdateAvatar:B=>e(te=>({...te,avatar:B})),onStartGame:q,onOpenChest:()=>h(B=>({...B,gameStatus:"rewards"})),onOpenAchievements:()=>h(B=>({...B,gameStatus:"achievement"}))}),f.gameStatus==="online"&&C.jsx(j2,{userProfile:r,playersConfig:(S==null?void 0:S.playersConfig)||[],onMatchReady:()=>h(B=>({...B,gameStatus:"playing"})),onCancelMatch:()=>h(B=>({...B,gameStatus:"lobby"}))}),f.gameStatus==="rewards"&&C.jsx(f_,{userProfile:r,achievements:i,onClaimCoins:E,onClaimAchievement:I,onClose:()=>h(B=>({...B,gameStatus:"lobby"}))}),f.gameStatus==="achievement"&&C.jsx(f_,{userProfile:r,achievements:i,onClaimCoins:E,onClaimAchievement:I,onClose:()=>h(B=>({...B,gameStatus:"lobby"}))}),f.gameStatus==="playing"&&C.jsxs("div",{className:"w-full flex flex-col lg:flex-row gap-6 items-stretch justify-center h-full max-h-[85vh]",children:[C.jsx("div",{className:"flex-1 min-h-[400px] lg:min-h-0 relative",children:C.jsx(WA,{gameState:f,selectableTokenIds:K(f.players[f.currentPlayerIndex],f.diceValue),onTokenClick:z,onDiceRollComplete:he})}),C.jsxs("div",{className:"w-full lg:w-[400px] flex flex-col gap-4",children:[C.jsxs("div",{className:"glass-panel border border-white/10 p-4 rounded-2xl bg-slate-900/80 flex flex-col justify-between",children:[C.jsxs("div",{className:"flex items-center justify-between mb-2",children:[C.jsx("span",{className:"text-xs font-mono text-slate-400 font-bold uppercase",children:"ACTIVE SQUAD"}),C.jsxs("div",{className:"flex items-center gap-1.5",children:[C.jsx("span",{className:"w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"}),C.jsx("span",{className:"text-[10px] font-mono text-emerald-400 font-bold",children:"LIVE METRICS"})]})]}),C.jsx("div",{className:"space-y-2 mt-2",children:f.players.map((B,te)=>C.jsxs("div",{className:`p-2.5 rounded-xl border flex items-center justify-between transition-all ${te===f.currentPlayerIndex?"bg-slate-950/60 border-amber-500/50 shadow shadow-amber-500/5 scale-[1.01]":"bg-slate-950/20 border-white/5 opacity-60"}`,children:[C.jsxs("div",{className:"flex items-center gap-3",children:[C.jsx("span",{className:"w-3.5 h-3.5 rounded-full",style:{backgroundColor:B.color==="red"?"#ef4444":B.color==="green"?"#10b981":B.color==="yellow"?"#f59e0b":"#3b82f6"}}),C.jsxs("div",{children:[C.jsxs("h4",{className:"text-xs font-bold flex items-center gap-1.5",children:[B.name,B.isAI&&C.jsx("span",{className:"bg-slate-800 text-[8px] text-slate-400 font-mono px-1.5 py-0.5 rounded uppercase",children:"AI ENGINE"})]}),C.jsxs("span",{className:"text-[10px] text-slate-400 font-mono",children:["Tokens Home: ",B.tokens.filter(ue=>ue.status==="home").length," / 4"]})]})]}),te===f.currentPlayerIndex&&C.jsx("div",{className:"text-right",children:C.jsxs("span",{className:"text-xs font-mono font-extrabold text-amber-400",children:[f.turnTimer,"s"]})})]},B.color))})]}),C.jsxs("div",{className:"glass-panel border border-white/10 p-5 rounded-2xl bg-slate-900/80 text-center flex flex-col items-center justify-center relative overflow-hidden",children:[C.jsx("div",{className:"mb-3.5",children:f.isRollInProgress?C.jsx("span",{className:"text-xs text-amber-400 font-mono animate-pulse uppercase font-medium",children:"Tumbling physical dice..."}):f.hasRolled?C.jsx("span",{className:"text-xs text-emerald-400 font-mono uppercase font-semibold",children:"Select highlighted token to advance"}):C.jsx("span",{className:"text-xs text-slate-400 font-mono uppercase",children:"Your turn, roll dice!"})}),C.jsx("button",{id:"ludo-dice-roll-trigger-elem",onClick:fe,disabled:f.hasRolled||f.isRollInProgress||f.players[f.currentPlayerIndex].isAI,className:"px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 hover:from-amber-600 hover:to-orange-600 shadow-lg text-slate-900 font-bold uppercase tracking-wider text-xs font-mono transition-all disabled:opacity-50 active:scale-95 cursor-pointer max-w-[240px] w-full",children:"ROLL 3D DICE"})]}),C.jsxs("div",{className:"glass-panel border border-white/10 p-4 rounded-2xl bg-slate-900/80",children:[C.jsx("div",{className:"flex justify-between items-center text-xs text-slate-400 mb-2 border-b border-white/5 pb-2",children:C.jsxs("span",{className:"font-mono uppercase font-bold text-slate-400 flex items-center gap-1.5",children:[C.jsx(T2,{className:"w-3.5 h-3.5"}),"ARENA EMOTES REACTIONS"]})}),C.jsx("div",{className:"grid grid-cols-6 gap-2",children:["🔥","👑","😂","😭","🎉","😮"].map(B=>C.jsx("button",{onClick:()=>F(B),className:"p-2 bg-slate-950/60 hover:bg-slate-800 rounded-xl border border-white/5 hover:border-white/10 transition-transform active:scale-90 text-xl",children:B},B))})]}),C.jsxs("div",{className:"glass-panel border border-white/10 p-4 rounded-2xl bg-slate-900/80 flex-1 flex flex-col justify-between overflow-hidden min-h-[160px]",children:[C.jsx("div",{className:"border-b border-white/5 pb-2 mb-2",children:C.jsx("span",{className:"text-[10px] font-mono font-bold text-slate-400 uppercase",children:"MATCH RUNTIME CHRONOLOGY"})}),C.jsx("div",{className:"flex-1 overflow-y-auto space-y-2 mt-1",children:g.length===0?C.jsx("p",{className:"text-[11px] text-slate-500 font-mono italic",children:"Handshakes completed. Game starting."}):g.map((B,te)=>C.jsx("p",{className:"text-[11px] text-slate-300 leading-relaxed font-mono",children:B},te))}),C.jsxs("div",{className:"flex gap-2 border-t border-white/5 pt-3.5 mt-2",children:[C.jsxs("button",{onClick:G,className:"flex-1 py-2 bg-slate-800 hover:bg-slate-700/80 border border-white/5 rounded-xl font-mono text-[10px] tracking-wide uppercase text-slate-200 active:scale-95 transition-all text-center flex items-center justify-center gap-1.5",children:[C.jsx(v2,{className:"w-3 h-3"}),"Reset Match"]}),C.jsx("button",{onClick:()=>h(B=>({...B,gameStatus:"lobby"})),className:"flex-1 py-2 bg-slate-800 hover:bg-slate-700/80 border border-white/5 rounded-xl font-mono text-[10px] tracking-wide uppercase text-slate-200 active:scale-95 transition-all text-center flex items-center justify-center",children:"Arena Exit"})]})]})]})]})]}),C.jsxs("footer",{className:"h-20 px-6 sm:px-12 flex items-center justify-between bg-black/60 border-t border-white/5 z-40",children:[C.jsxs("div",{className:"flex gap-4 sm:gap-8 items-center h-full",children:[C.jsxs("div",{onClick:()=>{mt.playUIPress(),h(B=>({...B,gameStatus:"lobby"}))},className:`flex flex-col items-center gap-1 cursor-pointer transition-colors px-3 pt-1 h-full justify-center ${f.gameStatus==="lobby"?"text-[#d4af37] border-t-2 border-[#d4af37]":"text-gray-500 hover:text-white"}`,children:[C.jsx("span",{className:"text-lg",children:"🏰"}),C.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest font-mono",children:"Main Menu"})]}),C.jsxs("div",{onClick:()=>{mt.playUIPress(),h(B=>({...B,gameStatus:"rewards"}))},className:`flex flex-col items-center gap-1 cursor-pointer transition-colors px-3 pt-1 h-full justify-center ${f.gameStatus==="rewards"?"text-[#d4af37] border-t-2 border-[#d4af37]":"text-gray-500 hover:text-white"}`,children:[C.jsx("span",{className:"text-lg",children:"🏆"}),C.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest font-mono",children:"Loot Vault"})]}),C.jsxs("div",{onClick:()=>{mt.playUIPress(),h(B=>({...B,gameStatus:"achievement"}))},className:`flex flex-col items-center gap-1 cursor-pointer transition-colors px-3 pt-1 h-full justify-center ${f.gameStatus==="achievement"?"text-[#d4af37] border-t-2 border-[#d4af37]":"text-gray-500 hover:text-white"}`,children:[C.jsx("span",{className:"text-lg",children:"🧥"}),C.jsx("span",{className:"text-[9px] font-bold uppercase tracking-widest font-mono",children:"Leagues"})]})]}),C.jsxs("div",{className:"flex gap-3 items-center",children:[C.jsxs("div",{className:"hidden md:flex px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 items-center gap-2.5",children:[C.jsx("div",{className:"w-2 h-2 rounded-full bg-green-500 animate-pulse"}),C.jsx("span",{className:"text-xs text-gray-300 font-mono",children:"Online: 42,105 players"})]}),C.jsx("button",{onClick:()=>{mt.playReachHome(),alert("Searching for Royale Friends list... Connected!")},className:"px-4 py-1.5 sm:px-6 sm:py-2 rounded-lg bg-[#d4af37] text-black font-bold text-xs uppercase tracking-wider hover:bg-yellow-400 cursor-pointer active:scale-95 transition-all",children:"FRIENDS"})]})]}),C.jsx("style",{children:`
        @keyframes floatGlow {
          0% {
            transform: translateY(0) scale(0.6);
            opacity: 0;
          }
          15% {
            transform: translateY(-40px) scale(1.1);
            opacity: 1;
          }
          85% {
            transform: translateY(-240px) scale(0.9);
            opacity: 0.8;
          }
          100% {
            transform: translateY(-300px) scale(0.4);
            opacity: 0;
          }
        }
        .animate-scale-in {
          animation: scaleIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes scaleIn {
          from { transform: scale(0.85); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .glass-panel {
          backdrop-filter: blur(12px) saturate(140%);
          background-color: rgba(13, 17, 23, 0.72);
        }
      `})]})}oy.createRoot(document.getElementById("root")).render(C.jsx(Qe.StrictMode,{children:C.jsx(q2,{})}));
