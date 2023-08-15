(function(n,n1){typeof exports=="object"&&typeof module<"u"?n1(exports):typeof define=="function"&&define.amd?define(["exports"],n1):(n=typeof globalThis<"u"?globalThis:n||self,n1(n["svg-icons-vue"]={}))})(this,function(n){"use strict";function n1(l,i){const e=Object.create(null),t=l.split(",");for(let u=0;u<t.length;u++)e[t[u]]=!0;return i?u=>!!e[u.toLowerCase()]:u=>!!e[u]}const P=process.env.NODE_ENV!=="production"?Object.freeze({}):{},l2=process.env.NODE_ENV!=="production"?Object.freeze([]):[],e0=()=>{},i2=/^on[^a-z]/,e2=l=>i2.test(l),C=Object.assign,n2=(l,i)=>{const e=l.indexOf(i);e>-1&&l.splice(e,1)},c2=Object.prototype.hasOwnProperty,M=(l,i)=>c2.call(l,i),L=Array.isArray,J=l=>s1(l)==="[object Map]",r2=l=>s1(l)==="[object Set]",H=l=>typeof l=="function",B=l=>typeof l=="string",N1=l=>typeof l=="symbol",F=l=>l!==null&&typeof l=="object",a2=l=>F(l)&&H(l.then)&&H(l.catch),o2=Object.prototype.toString,s1=l=>o2.call(l),n0=l=>s1(l).slice(8,-1),u2=l=>s1(l)==="[object Object]",$1=l=>B(l)&&l!=="NaN"&&l[0]!=="-"&&""+parseInt(l,10)===l,t2=(l=>{const i=Object.create(null);return e=>i[e]||(i[e]=l(e))})(l=>l.charAt(0).toUpperCase()+l.slice(1)),f1=(l,i)=>!Object.is(l,i),s2=(l,i,e)=>{Object.defineProperty(l,i,{configurable:!0,enumerable:!1,value:e})};let c0;const C1=()=>c0||(c0=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function d1(l){if(L(l)){const i={};for(let e=0;e<l.length;e++){const t=l[e],u=B(t)?S2(t):d1(t);if(u)for(const s in u)i[s]=u[s]}return i}else{if(B(l))return l;if(F(l))return l}}const f2=/;(?![^(]*\))/g,m2=/:([^]+)/,g2=/\/\*[^]*?\*\//g;function S2(l){const i={};return l.replace(g2,"").split(f2).forEach(e=>{if(e){const t=e.split(m2);t.length>1&&(i[t[0].trim()]=t[1].trim())}}),i}function w1(l){let i="";if(B(l))i=l;else if(L(l))for(let e=0;e<l.length;e++){const t=w1(l[e]);t&&(i+=t+" ")}else if(F(l))for(const e in l)l[e]&&(i+=e+" ");return i.trim()}function r0(l,...i){console.warn(`[Vue warn] ${l}`,...i)}let a0;function R2(l,i=a0){i&&i.active&&i.effects.push(l)}function z2(){return a0}const y1=l=>{const i=new Set(l);return i.w=0,i.n=0,i},o0=l=>(l.w&E)>0,u0=l=>(l.n&E)>0,h2=({deps:l})=>{if(l.length)for(let i=0;i<l.length;i++)l[i].w|=E},Z2=l=>{const{deps:i}=l;if(i.length){let e=0;for(let t=0;t<i.length;t++){const u=i[t];o0(u)&&!u0(u)?u.delete(l):i[e++]=u,u.w&=~E,u.n&=~E}i.length=e}},B1=new WeakMap;let c1=0,E=1;const k1=30;let b;const G=Symbol(process.env.NODE_ENV!=="production"?"iterate":""),T1=Symbol(process.env.NODE_ENV!=="production"?"Map key iterate":"");class L2{constructor(i,e=null,t){this.fn=i,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,R2(this,t)}run(){if(!this.active)return this.fn();let i=b,e=j;for(;i;){if(i===this)return;i=i.parent}try{return this.parent=b,b=this,j=!0,E=1<<++c1,c1<=k1?h2(this):t0(this),this.fn()}finally{c1<=k1&&Z2(this),E=1<<--c1,b=this.parent,j=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){b===this?this.deferStop=!0:this.active&&(t0(this),this.onStop&&this.onStop(),this.active=!1)}}function t0(l){const{deps:i}=l;if(i.length){for(let e=0;e<i.length;e++)i[e].delete(l);i.length=0}}let j=!0;const s0=[];function f0(){s0.push(j),j=!1}function m0(){const l=s0.pop();j=l===void 0?!0:l}function N(l,i,e){if(j&&b){let t=B1.get(l);t||B1.set(l,t=new Map);let u=t.get(e);u||t.set(e,u=y1());const s=process.env.NODE_ENV!=="production"?{effect:b,target:l,type:i,key:e}:void 0;v2(u,s)}}function v2(l,i){let e=!1;c1<=k1?u0(l)||(l.n|=E,e=!o0(l)):e=!l.has(b),e&&(l.add(b),b.deps.push(l),process.env.NODE_ENV!=="production"&&b.onTrack&&b.onTrack(C({effect:b},i)))}function x(l,i,e,t,u,s){const f=B1.get(l);if(!f)return;let m=[];if(i==="clear")m=[...f.values()];else if(e==="length"&&L(l)){const R=Number(t);f.forEach((Z,g)=>{(g==="length"||g>=R)&&m.push(Z)})}else switch(e!==void 0&&m.push(f.get(e)),i){case"add":L(l)?$1(e)&&m.push(f.get("length")):(m.push(f.get(G)),J(l)&&m.push(f.get(T1)));break;case"delete":L(l)||(m.push(f.get(G)),J(l)&&m.push(f.get(T1)));break;case"set":J(l)&&m.push(f.get(G));break}const S=process.env.NODE_ENV!=="production"?{target:l,type:i,key:e,newValue:t,oldValue:u,oldTarget:s}:void 0;if(m.length===1)m[0]&&(process.env.NODE_ENV!=="production"?m1(m[0],S):m1(m[0]));else{const R=[];for(const Z of m)Z&&R.push(...Z);process.env.NODE_ENV!=="production"?m1(y1(R),S):m1(y1(R))}}function m1(l,i){const e=L(l)?l:[...l];for(const t of e)t.computed&&g0(t,i);for(const t of e)t.computed||g0(t,i)}function g0(l,i){(l!==b||l.allowRecurse)&&(process.env.NODE_ENV!=="production"&&l.onTrigger&&l.onTrigger(C({effect:l},i)),l.scheduler?l.scheduler():l.run())}const _2=n1("__proto__,__v_isRef,__isVue"),S0=new Set(Object.getOwnPropertyNames(Symbol).filter(l=>l!=="arguments"&&l!=="caller").map(l=>Symbol[l]).filter(N1)),M2=P1(),H2=P1(!0),V2=P1(!0,!0),R0=A2();function A2(){const l={};return["includes","indexOf","lastIndexOf"].forEach(i=>{l[i]=function(...e){const t=h(this);for(let s=0,f=this.length;s<f;s++)N(t,"get",s+"");const u=t[i](...e);return u===-1||u===!1?t[i](...e.map(h)):u}}),["push","pop","shift","unshift","splice"].forEach(i=>{l[i]=function(...e){f0();const t=h(this)[i].apply(this,e);return m0(),t}}),l}function F2(l){const i=h(this);return N(i,"has",l),i.hasOwnProperty(l)}function P1(l=!1,i=!1){return function(t,u,s){if(u==="__v_isReactive")return!l;if(u==="__v_isReadonly")return l;if(u==="__v_isShallow")return i;if(u==="__v_raw"&&s===(l?i?V0:H0:i?O2:M0).get(t))return t;const f=L(t);if(!l){if(f&&M(R0,u))return Reflect.get(R0,u,s);if(u==="hasOwnProperty")return F2}const m=Reflect.get(t,u,s);return(N1(u)?S0.has(u):_2(u))||(l||N(t,"get",u),i)?m:$(m)?f&&$1(u)?m:m.value:F(m)?l?F0(m):A0(m):m}}const b2=N2();function N2(l=!1){return function(e,t,u,s){let f=e[t];if(K(f)&&$(f)&&!$(u))return!1;if(!l&&(!U1(u)&&!K(u)&&(f=h(f),u=h(u)),!L(e)&&$(f)&&!$(u)))return f.value=u,!0;const m=L(e)&&$1(t)?Number(t)<e.length:M(e,t),S=Reflect.set(e,t,u,s);return e===h(s)&&(m?f1(u,f)&&x(e,"set",t,u,f):x(e,"add",t,u)),S}}function $2(l,i){const e=M(l,i),t=l[i],u=Reflect.deleteProperty(l,i);return u&&e&&x(l,"delete",i,void 0,t),u}function C2(l,i){const e=Reflect.has(l,i);return(!N1(i)||!S0.has(i))&&N(l,"has",i),e}function d2(l){return N(l,"iterate",L(l)?"length":G),Reflect.ownKeys(l)}const w2={get:M2,set:b2,deleteProperty:$2,has:C2,ownKeys:d2},z0={get:H2,set(l,i){return process.env.NODE_ENV!=="production"&&r0(`Set operation on key "${String(i)}" failed: target is readonly.`,l),!0},deleteProperty(l,i){return process.env.NODE_ENV!=="production"&&r0(`Delete operation on key "${String(i)}" failed: target is readonly.`,l),!0}},y2=C({},z0,{get:V2}),D1=l=>l,g1=l=>Reflect.getPrototypeOf(l);function S1(l,i,e=!1,t=!1){l=l.__v_raw;const u=h(l),s=h(i);e||(i!==s&&N(u,"get",i),N(u,"get",s));const{has:f}=g1(u),m=t?D1:e?I1:W1;if(f.call(u,i))return m(l.get(i));if(f.call(u,s))return m(l.get(s));l!==u&&l.get(i)}function R1(l,i=!1){const e=this.__v_raw,t=h(e),u=h(l);return i||(l!==u&&N(t,"has",l),N(t,"has",u)),l===u?e.has(l):e.has(l)||e.has(u)}function z1(l,i=!1){return l=l.__v_raw,!i&&N(h(l),"iterate",G),Reflect.get(l,"size",l)}function h0(l){l=h(l);const i=h(this);return g1(i).has.call(i,l)||(i.add(l),x(i,"add",l,l)),this}function Z0(l,i){i=h(i);const e=h(this),{has:t,get:u}=g1(e);let s=t.call(e,l);s?process.env.NODE_ENV!=="production"&&_0(e,t,l):(l=h(l),s=t.call(e,l));const f=u.call(e,l);return e.set(l,i),s?f1(i,f)&&x(e,"set",l,i,f):x(e,"add",l,i),this}function L0(l){const i=h(this),{has:e,get:t}=g1(i);let u=e.call(i,l);u?process.env.NODE_ENV!=="production"&&_0(i,e,l):(l=h(l),u=e.call(i,l));const s=t?t.call(i,l):void 0,f=i.delete(l);return u&&x(i,"delete",l,void 0,s),f}function v0(){const l=h(this),i=l.size!==0,e=process.env.NODE_ENV!=="production"?J(l)?new Map(l):new Set(l):void 0,t=l.clear();return i&&x(l,"clear",void 0,void 0,e),t}function h1(l,i){return function(t,u){const s=this,f=s.__v_raw,m=h(f),S=i?D1:l?I1:W1;return!l&&N(m,"iterate",G),f.forEach((R,Z)=>t.call(u,S(R),S(Z),s))}}function Z1(l,i,e){return function(...t){const u=this.__v_raw,s=h(u),f=J(s),m=l==="entries"||l===Symbol.iterator&&f,S=l==="keys"&&f,R=u[l](...t),Z=e?D1:i?I1:W1;return!i&&N(s,"iterate",S?T1:G),{next(){const{value:g,done:z}=R.next();return z?{value:g,done:z}:{value:m?[Z(g[0]),Z(g[1])]:Z(g),done:z}},[Symbol.iterator](){return this}}}}function U(l){return function(...i){if(process.env.NODE_ENV!=="production"){const e=i[0]?`on key "${i[0]}" `:"";console.warn(`${t2(l)} operation ${e}failed: target is readonly.`,h(this))}return l==="delete"?!1:this}}function B2(){const l={get(s){return S1(this,s)},get size(){return z1(this)},has:R1,add:h0,set:Z0,delete:L0,clear:v0,forEach:h1(!1,!1)},i={get(s){return S1(this,s,!1,!0)},get size(){return z1(this)},has:R1,add:h0,set:Z0,delete:L0,clear:v0,forEach:h1(!1,!0)},e={get(s){return S1(this,s,!0)},get size(){return z1(this,!0)},has(s){return R1.call(this,s,!0)},add:U("add"),set:U("set"),delete:U("delete"),clear:U("clear"),forEach:h1(!0,!1)},t={get(s){return S1(this,s,!0,!0)},get size(){return z1(this,!0)},has(s){return R1.call(this,s,!0)},add:U("add"),set:U("set"),delete:U("delete"),clear:U("clear"),forEach:h1(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{l[s]=Z1(s,!1,!1),e[s]=Z1(s,!0,!1),i[s]=Z1(s,!1,!0),t[s]=Z1(s,!0,!0)}),[l,e,i,t]}const[k2,T2,P2,D2]=B2();function E1(l,i){const e=i?l?D2:P2:l?T2:k2;return(t,u,s)=>u==="__v_isReactive"?!l:u==="__v_isReadonly"?l:u==="__v_raw"?t:Reflect.get(M(e,u)&&u in t?e:t,u,s)}const E2={get:E1(!1,!1)},x2={get:E1(!0,!1)},U2={get:E1(!0,!0)};function _0(l,i,e){const t=h(e);if(t!==e&&i.call(l,t)){const u=n0(l);console.warn(`Reactive ${u} contains both the raw and reactive versions of the same object${u==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const M0=new WeakMap,O2=new WeakMap,H0=new WeakMap,V0=new WeakMap;function W2(l){switch(l){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function I2(l){return l.__v_skip||!Object.isExtensible(l)?0:W2(n0(l))}function A0(l){return K(l)?l:x1(l,!1,w2,E2,M0)}function F0(l){return x1(l,!0,z0,x2,H0)}function L1(l){return x1(l,!0,y2,U2,V0)}function x1(l,i,e,t,u){if(!F(l))return process.env.NODE_ENV!=="production"&&console.warn(`value cannot be made reactive: ${String(l)}`),l;if(l.__v_raw&&!(i&&l.__v_isReactive))return l;const s=u.get(l);if(s)return s;const f=I2(l);if(f===0)return l;const m=new Proxy(l,f===2?t:e);return u.set(l,m),m}function q(l){return K(l)?q(l.__v_raw):!!(l&&l.__v_isReactive)}function K(l){return!!(l&&l.__v_isReadonly)}function U1(l){return!!(l&&l.__v_isShallow)}function O1(l){return q(l)||K(l)}function h(l){const i=l&&l.__v_raw;return i?h(i):l}function G2(l){return s2(l,"__v_skip",!0),l}const W1=l=>F(l)?A0(l):l,I1=l=>F(l)?F0(l):l;function $(l){return!!(l&&l.__v_isRef===!0)}function j2(l){return $(l)?l.value:l}const q2={get:(l,i,e)=>j2(Reflect.get(l,i,e)),set:(l,i,e,t)=>{const u=l[i];return $(u)&&!$(e)?(u.value=e,!0):Reflect.set(l,i,e,t)}};function K2(l){return q(l)?l:new Proxy(l,q2)}const Q=[];function Q2(l){Q.push(l)}function X2(){Q.pop()}function V(l,...i){if(process.env.NODE_ENV==="production")return;f0();const e=Q.length?Q[Q.length-1].component:null,t=e&&e.appContext.config.warnHandler,u=Y2();if(t)X(t,e,11,[l+i.join(""),e&&e.proxy,u.map(({vnode:s})=>`at <${Y0(e,s.type)}>`).join(`
`),u]);else{const s=[`[Vue warn]: ${l}`,...i];u.length&&s.push(`
`,...J2(u)),console.warn(...s)}m0()}function Y2(){let l=Q[Q.length-1];if(!l)return[];const i=[];for(;l;){const e=i[0];e&&e.vnode===l?e.recurseCount++:i.push({vnode:l,recurseCount:0});const t=l.component&&l.component.parent;l=t&&t.vnode}return i}function J2(l){const i=[];return l.forEach((e,t)=>{i.push(...t===0?[]:[`
`],...p2(e))}),i}function p2({vnode:l,recurseCount:i}){const e=i>0?`... (${i} recursive calls)`:"",t=l.component?l.component.parent==null:!1,u=` at <${Y0(l.component,l.type,t)}`,s=">"+e;return l.props?[u,...ll(l.props),s]:[u+s]}function ll(l){const i=[],e=Object.keys(l);return e.slice(0,3).forEach(t=>{i.push(...b0(t,l[t]))}),e.length>3&&i.push(" ..."),i}function b0(l,i,e){return B(i)?(i=JSON.stringify(i),e?i:[`${l}=${i}`]):typeof i=="number"||typeof i=="boolean"||i==null?e?i:[`${l}=${i}`]:$(i)?(i=b0(l,h(i.value),!0),e?i:[`${l}=Ref<`,i,">"]):H(i)?[`${l}=fn${i.name?`<${i.name}>`:""}`]:(i=h(i),e?i:[`${l}=`,i])}const N0={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function X(l,i,e,t){let u;try{u=t?l(...t):l()}catch(s){$0(s,i,e)}return u}function G1(l,i,e,t){if(H(l)){const s=X(l,i,e,t);return s&&a2(s)&&s.catch(f=>{$0(f,i,e)}),s}const u=[];for(let s=0;s<l.length;s++)u.push(G1(l[s],i,e,t));return u}function $0(l,i,e,t=!0){const u=i?i.vnode:null;if(i){let s=i.parent;const f=i.proxy,m=process.env.NODE_ENV!=="production"?N0[e]:e;for(;s;){const R=s.ec;if(R){for(let Z=0;Z<R.length;Z++)if(R[Z](l,f,m)===!1)return}s=s.parent}const S=i.appContext.config.errorHandler;if(S){X(S,null,10,[l,f,m]);return}}il(l,e,u,t)}function il(l,i,e,t=!0){if(process.env.NODE_ENV!=="production"){const u=N0[i];if(e&&Q2(e),V(`Unhandled error${u?` during execution of ${u}`:""}`),e&&X2(),t)throw l;console.error(l)}else console.error(l)}let v1=!1,j1=!1;const k=[];let O=0;const p=[];let D=null,W=0;const C0=Promise.resolve();let q1=null;const el=100;function nl(l){const i=q1||C0;return l?i.then(this?l.bind(this):l):i}function cl(l){let i=O+1,e=k.length;for(;i<e;){const t=i+e>>>1;r1(k[t])<l?i=t+1:e=t}return i}function K1(l){(!k.length||!k.includes(l,v1&&l.allowRecurse?O+1:O))&&(l.id==null?k.push(l):k.splice(cl(l.id),0,l),d0())}function d0(){!v1&&!j1&&(j1=!0,q1=C0.then(y0))}function w0(l){L(l)?p.push(...l):(!D||!D.includes(l,l.allowRecurse?W+1:W))&&p.push(l),d0()}function rl(l){if(p.length){const i=[...new Set(p)];if(p.length=0,D){D.push(...i);return}for(D=i,process.env.NODE_ENV!=="production"&&(l=l||new Map),D.sort((e,t)=>r1(e)-r1(t)),W=0;W<D.length;W++)process.env.NODE_ENV!=="production"&&B0(l,D[W])||D[W]();D=null,W=0}}const r1=l=>l.id==null?1/0:l.id,al=(l,i)=>{const e=r1(l)-r1(i);if(e===0){if(l.pre&&!i.pre)return-1;if(i.pre&&!l.pre)return 1}return e};function y0(l){j1=!1,v1=!0,process.env.NODE_ENV!=="production"&&(l=l||new Map),k.sort(al);const i=process.env.NODE_ENV!=="production"?e=>B0(l,e):e0;try{for(O=0;O<k.length;O++){const e=k[O];if(e&&e.active!==!1){if(process.env.NODE_ENV!=="production"&&i(e))continue;X(e,null,14)}}}finally{O=0,k.length=0,rl(l),v1=!1,q1=null,(k.length||p.length)&&y0(l)}}function B0(l,i){if(!l.has(i))l.set(i,1);else{const e=l.get(i);if(e>el){const t=i.ownerInstance,u=t&&X0(t.type);return V(`Maximum recursive updates exceeded${u?` in component <${u}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else l.set(i,e+1)}}const a1=new Set;process.env.NODE_ENV!=="production"&&(C1().__VUE_HMR_RUNTIME__={createRecord:Q1(ol),rerender:Q1(ul),reload:Q1(tl)});const _1=new Map;function ol(l,i){return _1.has(l)?!1:(_1.set(l,{initialDef:o1(i),instances:new Set}),!0)}function o1(l){return J0(l)?l.__vccOpts:l}function ul(l,i){const e=_1.get(l);e&&(e.initialDef.render=i,[...e.instances].forEach(t=>{i&&(t.render=i,o1(t.type).render=i),t.renderCache=[],t.update()}))}function tl(l,i){const e=_1.get(l);if(!e)return;i=o1(i),k0(e.initialDef,i);const t=[...e.instances];for(const u of t){const s=o1(u.type);a1.has(s)||(s!==e.initialDef&&k0(s,i),a1.add(s)),u.appContext.propsCache.delete(u.type),u.appContext.emitsCache.delete(u.type),u.appContext.optionsCache.delete(u.type),u.ceReload?(a1.add(s),u.ceReload(i.styles),a1.delete(s)):u.parent?K1(u.parent.update):u.appContext.reload?u.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}w0(()=>{for(const u of t)a1.delete(o1(u.type))})}function k0(l,i){C(l,i);for(const e in l)e!=="__file"&&!(e in i)&&delete l[e]}function Q1(l){return(i,e)=>{try{return l(i,e)}catch(t){console.error(t),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let I=null,sl=null;function LE(){}const fl=l=>l.__isSuspense;function ml(l,i){i&&i.pendingBranch?L(l)?i.effects.push(...l):i.effects.push(l):w0(l)}const M1={};function gl(l,i,{immediate:e,deep:t,flush:u,onTrack:s,onTrigger:f}=P){var m;process.env.NODE_ENV!=="production"&&!i&&(e!==void 0&&V('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),t!==void 0&&V('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const S=_=>{V("Invalid watch source: ",_,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},R=z2()===((m=i1)==null?void 0:m.scope)?i1:null;let Z,g=!1,z=!1;if($(l)?(Z=()=>l.value,g=U1(l)):q(l)?(Z=()=>l,t=!0):L(l)?(z=!0,g=l.some(_=>q(_)||U1(_)),Z=()=>l.map(_=>{if($(_))return _.value;if(q(_))return l1(_);if(H(_))return X(_,R,2);process.env.NODE_ENV!=="production"&&S(_)})):H(l)?i?Z=()=>X(l,R,2):Z=()=>{if(!(R&&R.isUnmounted))return v&&v(),G1(l,R,3,[d])}:(Z=e0,process.env.NODE_ENV!=="production"&&S(l)),i&&t){const _=Z;Z=()=>l1(_())}let v,d=_=>{v=y.onStop=()=>{X(_,R,4)}},w=z?new Array(l.length).fill(M1):M1;const Y=()=>{if(y.active)if(i){const _=y.run();(t||g||(z?_.some((zE,hE)=>f1(zE,w[hE])):f1(_,w)))&&(v&&v(),G1(i,R,3,[_,w===M1?void 0:z&&w[0]===M1?[]:w,d]),w=_)}else y.run()};Y.allowRecurse=!!i;let b1;u==="sync"?b1=Y:u==="post"?b1=()=>x0(Y,R&&R.suspense):(Y.pre=!0,R&&(Y.id=R.uid),b1=()=>K1(Y));const y=new L2(Z,b1);return process.env.NODE_ENV!=="production"&&(y.onTrack=s,y.onTrigger=f),i?e?Y():w=y.run():u==="post"?x0(y.run.bind(y),R&&R.suspense):y.run(),()=>{y.stop(),R&&R.scope&&n2(R.scope.effects,y)}}function Sl(l,i,e){const t=this.proxy,u=B(l)?l.includes(".")?Rl(t,l):()=>t[l]:l.bind(t,t);let s;H(i)?s=i:(s=i.handler,e=i);const f=i1;Q0(this);const m=gl(u,s.bind(t),e);return f?Q0(f):yl(),m}function Rl(l,i){const e=i.split(".");return()=>{let t=l;for(let u=0;u<e.length&&t;u++)t=t[e[u]];return t}}function l1(l,i){if(!F(l)||l.__v_skip||(i=i||new Set,i.has(l)))return l;if(i.add(l),$(l))l1(l.value,i);else if(L(l))for(let e=0;e<l.length;e++)l1(l[e],i);else if(r2(l)||J(l))l.forEach(e=>{l1(e,i)});else if(u2(l))for(const e in l)l1(l[e],i);return l}function c(l,i){return H(l)?(()=>C({name:l.name},i,{setup:l}))():l}const zl=Symbol.for("v-ndc"),X1=l=>l?Bl(l)?kl(l)||l.proxy:X1(l.parent):null,u1=C(Object.create(null),{$:l=>l,$el:l=>l.vnode.el,$data:l=>l.data,$props:l=>process.env.NODE_ENV!=="production"?L1(l.props):l.props,$attrs:l=>process.env.NODE_ENV!=="production"?L1(l.attrs):l.attrs,$slots:l=>process.env.NODE_ENV!=="production"?L1(l.slots):l.slots,$refs:l=>process.env.NODE_ENV!=="production"?L1(l.refs):l.refs,$parent:l=>X1(l.parent),$root:l=>X1(l.root),$emit:l=>l.emit,$options:l=>Ll(l),$forceUpdate:l=>l.f||(l.f=()=>K1(l.update)),$nextTick:l=>l.n||(l.n=nl.bind(l.proxy)),$watch:l=>Sl.bind(l)}),hl=l=>l==="_"||l==="$",Y1=(l,i)=>l!==P&&!l.__isScriptSetup&&M(l,i),Zl={get({_:l},i){const{ctx:e,setupState:t,data:u,props:s,accessCache:f,type:m,appContext:S}=l;if(process.env.NODE_ENV!=="production"&&i==="__isVue")return!0;let R;if(i[0]!=="$"){const v=f[i];if(v!==void 0)switch(v){case 1:return t[i];case 2:return u[i];case 4:return e[i];case 3:return s[i]}else{if(Y1(t,i))return f[i]=1,t[i];if(u!==P&&M(u,i))return f[i]=2,u[i];if((R=l.propsOptions[0])&&M(R,i))return f[i]=3,s[i];if(e!==P&&M(e,i))return f[i]=4,e[i];f[i]=0}}const Z=u1[i];let g,z;if(Z)return i==="$attrs"?(N(l,"get",i),process.env.NODE_ENV!=="production"&&void 0):process.env.NODE_ENV!=="production"&&i==="$slots"&&N(l,"get",i),Z(l);if((g=m.__cssModules)&&(g=g[i]))return g;if(e!==P&&M(e,i))return f[i]=4,e[i];if(z=S.config.globalProperties,M(z,i))return z[i];process.env.NODE_ENV!=="production"&&I&&(!B(i)||i.indexOf("__v")!==0)&&(u!==P&&hl(i[0])&&M(u,i)?V(`Property ${JSON.stringify(i)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):l===I&&V(`Property ${JSON.stringify(i)} was accessed during render but is not defined on instance.`))},set({_:l},i,e){const{data:t,setupState:u,ctx:s}=l;return Y1(u,i)?(u[i]=e,!0):process.env.NODE_ENV!=="production"&&u.__isScriptSetup&&M(u,i)?(V(`Cannot mutate <script setup> binding "${i}" from Options API.`),!1):t!==P&&M(t,i)?(t[i]=e,!0):M(l.props,i)?(process.env.NODE_ENV!=="production"&&V(`Attempting to mutate prop "${i}". Props are readonly.`),!1):i[0]==="$"&&i.slice(1)in l?(process.env.NODE_ENV!=="production"&&V(`Attempting to mutate public property "${i}". Properties starting with $ are reserved and readonly.`),!1):(process.env.NODE_ENV!=="production"&&i in l.appContext.config.globalProperties?Object.defineProperty(s,i,{enumerable:!0,configurable:!0,value:e}):s[i]=e,!0)},has({_:{data:l,setupState:i,accessCache:e,ctx:t,appContext:u,propsOptions:s}},f){let m;return!!e[f]||l!==P&&M(l,f)||Y1(i,f)||(m=s[0])&&M(m,f)||M(t,f)||M(u1,f)||M(u.config.globalProperties,f)},defineProperty(l,i,e){return e.get!=null?l._.accessCache[i]=0:M(e,"value")&&this.set(l,i,e.value,null),Reflect.defineProperty(l,i,e)}};process.env.NODE_ENV!=="production"&&(Zl.ownKeys=l=>(V("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(l)));function T0(l){return L(l)?l.reduce((i,e)=>(i[e]=null,i),{}):l}function Ll(l){const i=l.type,{mixins:e,extends:t}=i,{mixins:u,optionsCache:s,config:{optionMergeStrategies:f}}=l.appContext,m=s.get(i);let S;return m?S=m:!u.length&&!e&&!t?S=i:(S={},u.length&&u.forEach(R=>H1(S,R,f,!0)),H1(S,i,f)),F(i)&&s.set(i,S),S}function H1(l,i,e,t=!1){const{mixins:u,extends:s}=i;s&&H1(l,s,e,!0),u&&u.forEach(f=>H1(l,f,e,!0));for(const f in i)if(t&&f==="expose")process.env.NODE_ENV!=="production"&&V('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const m=vl[f]||e&&e[f];l[f]=m?m(l[f],i[f]):i[f]}return l}const vl={data:P0,props:E0,emits:E0,methods:t1,computed:t1,beforeCreate:A,created:A,beforeMount:A,mounted:A,beforeUpdate:A,updated:A,beforeDestroy:A,beforeUnmount:A,destroyed:A,unmounted:A,activated:A,deactivated:A,errorCaptured:A,serverPrefetch:A,components:t1,directives:t1,watch:Ml,provide:P0,inject:_l};function P0(l,i){return i?l?function(){return C(H(l)?l.call(this,this):l,H(i)?i.call(this,this):i)}:i:l}function _l(l,i){return t1(D0(l),D0(i))}function D0(l){if(L(l)){const i={};for(let e=0;e<l.length;e++)i[l[e]]=l[e];return i}return l}function A(l,i){return l?[...new Set([].concat(l,i))]:i}function t1(l,i){return l?C(Object.create(null),l,i):i}function E0(l,i){return l?L(l)&&L(i)?[...new Set([...l,...i])]:C(Object.create(null),T0(l),T0(i??{})):i}function Ml(l,i){if(!l)return i;if(!i)return l;const e=C(Object.create(null),l);for(const t in i)e[t]=A(l[t],i[t]);return e}const x0=ml,Hl=l=>l.__isTeleport,U0=Symbol.for("v-fgt"),Vl=Symbol.for("v-txt"),Al=Symbol.for("v-cmt"),V1=[];let T=null;function r(l=!1){V1.push(T=l?null:[])}function Fl(){V1.pop(),T=V1[V1.length-1]||null}function O0(l){return l.dynamicChildren=T||l2,Fl(),T&&T.push(l),l}function bl(l,i,e,t,u,s){return O0(J1(l,i,e,t,u,s,!0))}function a(l,i,e,t,u){return O0(G0(l,i,e,t,u,!0))}function Nl(l){return l?l.__v_isVNode===!0:!1}const $l=(...l)=>j0(...l),W0="__vInternal",I0=({key:l})=>l??null,A1=({ref:l,ref_key:i,ref_for:e})=>(typeof l=="number"&&(l=""+l),l!=null?B(l)||$(l)||H(l)?{i:I,r:l,k:i,f:!!e}:l:null);function J1(l,i=null,e=null,t=0,u=null,s=l===U0?0:1,f=!1,m=!1){const S={__v_isVNode:!0,__v_skip:!0,type:l,props:i,key:i&&I0(i),ref:i&&A1(i),scopeId:sl,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:t,dynamicProps:u,dynamicChildren:null,appContext:null,ctx:I};return m?(p1(S,e),s&128&&l.normalize(S)):e&&(S.shapeFlag|=B(e)?8:16),process.env.NODE_ENV!=="production"&&S.key!==S.key&&V("VNode created with invalid key (NaN). VNode type:",S.type),!f&&T&&(S.patchFlag>0||s&6)&&S.patchFlag!==32&&T.push(S),S}const G0=process.env.NODE_ENV!=="production"?$l:j0;function j0(l,i=null,e=null,t=0,u=null,s=!1){if((!l||l===zl)&&(process.env.NODE_ENV!=="production"&&!l&&V(`Invalid vnode type when creating vnode: ${l}.`),l=Al),Nl(l)){const m=F1(l,i,!0);return e&&p1(m,e),!s&&T&&(m.shapeFlag&6?T[T.indexOf(l)]=m:T.push(m)),m.patchFlag|=-2,m}if(J0(l)&&(l=l.__vccOpts),i){i=Cl(i);let{class:m,style:S}=i;m&&!B(m)&&(i.class=w1(m)),F(S)&&(O1(S)&&!L(S)&&(S=C({},S)),i.style=d1(S))}const f=B(l)?1:fl(l)?128:Hl(l)?64:F(l)?4:H(l)?2:0;return process.env.NODE_ENV!=="production"&&f&4&&O1(l)&&(l=h(l),V("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`