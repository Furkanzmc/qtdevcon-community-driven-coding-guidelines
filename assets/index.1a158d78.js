var Td=Object.defineProperty,Ad=Object.defineProperties;var Ld=Object.getOwnPropertyDescriptors;var pa=Object.getOwnPropertySymbols;var Ar=Object.prototype.hasOwnProperty,Lr=Object.prototype.propertyIsEnumerable;var Tr=(e,n,s)=>n in e?Td(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,_e=(e,n)=>{for(var s in n||(n={}))Ar.call(n,s)&&Tr(e,s,n[s]);if(pa)for(var s of pa(n))Lr.call(n,s)&&Tr(e,s,n[s]);return e},Xe=(e,n)=>Ad(e,Ld(n));var go=(e,n)=>{var s={};for(var o in e)Ar.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&pa)for(var o of pa(e))n.indexOf(o)<0&&Lr.call(e,o)&&(s[o]=e[o]);return s};const Id=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}};Id();function Ri(e,n){const s=Object.create(null),o=e.split(",");for(let i=0;i<o.length;i++)s[o[i]]=!0;return n?i=>!!s[i.toLowerCase()]:i=>!!s[i]}const Rd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qd=Ri(Rd);function Nc(e){return!!e||e===""}function Ue(e){if(se(e)){const n={};for(let s=0;s<e.length;s++){const o=e[s],i=Fe(o)?Dd(o):Ue(o);if(i)for(const r in i)n[r]=i[r]}return n}else{if(Fe(e))return e;if(ze(e))return e}}const Fd=/;(?![^(]*\))/g,Nd=/:(.+)/;function Dd(e){const n={};return e.split(Fd).forEach(s=>{if(s){const o=s.split(Nd);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function Ie(e){let n="";if(Fe(e))n=e;else if(se(e))for(let s=0;s<e.length;s++){const o=Ie(e[s]);o&&(n+=o+" ")}else if(ze(e))for(const s in e)e[s]&&(n+=s+" ");return n.trim()}function te(e){if(!e)return null;let{class:n,style:s}=e;return n&&!Fe(n)&&(e.class=Ie(n)),s&&(e.style=Ue(s)),e}const Pt=e=>Fe(e)?e:e==null?"":se(e)||ze(e)&&(e.toString===zc||!le(e.toString))?JSON.stringify(e,Dc,2):String(e),Dc=(e,n)=>n&&n.__v_isRef?Dc(e,n.value):Yt(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((s,[o,i])=>(s[`${o} =>`]=i,s),{})}:Hc(n)?{[`Set(${n.size})`]:[...n.values()]}:ze(n)&&!se(n)&&!Bc(n)?String(n):n,Me={},Gt=[],Mn=()=>{},Hd=()=>!1,Vd=/^on[^a-z]/,Ua=e=>Vd.test(e),qi=e=>e.startsWith("onUpdate:"),sn=Object.assign,Fi=(e,n)=>{const s=e.indexOf(n);s>-1&&e.splice(s,1)},zd=Object.prototype.hasOwnProperty,ge=(e,n)=>zd.call(e,n),se=Array.isArray,Yt=e=>Ga(e)==="[object Map]",Hc=e=>Ga(e)==="[object Set]",le=e=>typeof e=="function",Fe=e=>typeof e=="string",Ni=e=>typeof e=="symbol",ze=e=>e!==null&&typeof e=="object",Vc=e=>ze(e)&&le(e.then)&&le(e.catch),zc=Object.prototype.toString,Ga=e=>zc.call(e),Bd=e=>Ga(e).slice(8,-1),Bc=e=>Ga(e)==="[object Object]",Di=e=>Fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,xa=Ri(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ya=e=>{const n=Object.create(null);return s=>n[s]||(n[s]=e(s))},Qd=/-(\w)/g,Hn=Ya(e=>e.replace(Qd,(n,s)=>s?s.toUpperCase():"")),Wd=/\B([A-Z])/g,At=Ya(e=>e.replace(Wd,"-$1").toLowerCase()),Ka=Ya(e=>e.charAt(0).toUpperCase()+e.slice(1)),vo=Ya(e=>e?`on${Ka(e)}`:""),Vs=(e,n)=>!Object.is(e,n),Kt=(e,n)=>{for(let s=0;s<e.length;s++)e[s](n)},Pa=(e,n,s)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:s})},Bo=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let Ir;const Ud=()=>Ir||(Ir=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let dn;class Qc{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&dn&&(this.parent=dn,this.index=(dn.scopes||(dn.scopes=[])).push(this)-1)}run(n){if(this.active){const s=dn;try{return dn=this,n()}finally{dn=s}}}on(){dn=this}off(){dn=this.parent}stop(n){if(this.active){let s,o;for(s=0,o=this.effects.length;s<o;s++)this.effects[s].stop();for(s=0,o=this.cleanups.length;s<o;s++)this.cleanups[s]();if(this.scopes)for(s=0,o=this.scopes.length;s<o;s++)this.scopes[s].stop(!0);if(this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function Gd(e){return new Qc(e)}function Yd(e,n=dn){n&&n.active&&n.effects.push(e)}function Kd(){return dn}function Zd(e){dn&&dn.cleanups.push(e)}const Hi=e=>{const n=new Set(e);return n.w=0,n.n=0,n},Wc=e=>(e.w&ct)>0,Uc=e=>(e.n&ct)>0,Jd=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=ct},Xd=e=>{const{deps:n}=e;if(n.length){let s=0;for(let o=0;o<n.length;o++){const i=n[o];Wc(i)&&!Uc(i)?i.delete(e):n[s++]=i,i.w&=~ct,i.n&=~ct}n.length=s}},Qo=new WeakMap;let xs=0,ct=1;const Wo=30;let jn;const Et=Symbol(""),Uo=Symbol("");class Vi{constructor(n,s=null,o){this.fn=n,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,Yd(this,o)}run(){if(!this.active)return this.fn();let n=jn,s=st;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=jn,jn=this,st=!0,ct=1<<++xs,xs<=Wo?Jd(this):Rr(this),this.fn()}finally{xs<=Wo&&Xd(this),ct=1<<--xs,jn=this.parent,st=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){jn===this?this.deferStop=!0:this.active&&(Rr(this),this.onStop&&this.onStop(),this.active=!1)}}function Rr(e){const{deps:n}=e;if(n.length){for(let s=0;s<n.length;s++)n[s].delete(e);n.length=0}}let st=!0;const Gc=[];function rs(){Gc.push(st),st=!1}function ls(){const e=Gc.pop();st=e===void 0?!0:e}function yn(e,n,s){if(st&&jn){let o=Qo.get(e);o||Qo.set(e,o=new Map);let i=o.get(s);i||o.set(s,i=Hi()),Yc(i)}}function Yc(e,n){let s=!1;xs<=Wo?Uc(e)||(e.n|=ct,s=!Wc(e)):s=!e.has(jn),s&&(e.add(jn),jn.deps.push(e))}function Un(e,n,s,o,i,r){const l=Qo.get(e);if(!l)return;let c=[];if(n==="clear")c=[...l.values()];else if(s==="length"&&se(e))l.forEach((u,p)=>{(p==="length"||p>=o)&&c.push(u)});else switch(s!==void 0&&c.push(l.get(s)),n){case"add":se(e)?Di(s)&&c.push(l.get("length")):(c.push(l.get(Et)),Yt(e)&&c.push(l.get(Uo)));break;case"delete":se(e)||(c.push(l.get(Et)),Yt(e)&&c.push(l.get(Uo)));break;case"set":Yt(e)&&c.push(l.get(Et));break}if(c.length===1)c[0]&&Go(c[0]);else{const u=[];for(const p of c)p&&u.push(...p);Go(Hi(u))}}function Go(e,n){const s=se(e)?e:[...e];for(const o of s)o.computed&&qr(o);for(const o of s)o.computed||qr(o)}function qr(e,n){(e!==jn||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ef=Ri("__proto__,__v_isRef,__isVue"),Kc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ni)),nf=zi(),tf=zi(!1,!0),sf=zi(!0),Fr=af();function af(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...s){const o=we(this);for(let r=0,l=this.length;r<l;r++)yn(o,"get",r+"");const i=o[n](...s);return i===-1||i===!1?o[n](...s.map(we)):i}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...s){rs();const o=we(this)[n].apply(this,s);return ls(),o}}),e}function zi(e=!1,n=!1){return function(o,i,r){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return n;if(i==="__v_raw"&&r===(e?n?bf:nu:n?eu:Xc).get(o))return o;const l=se(o);if(!e&&l&&ge(Fr,i))return Reflect.get(Fr,i,r);const c=Reflect.get(o,i,r);return(Ni(i)?Kc.has(i):ef(i))||(e||yn(o,"get",i),n)?c:be(c)?l&&Di(i)?c:c.value:ze(c)?e?Wt(c):qe(c):c}}const of=Zc(),rf=Zc(!0);function Zc(e=!1){return function(s,o,i,r){let l=s[o];if(zs(l)&&be(l)&&!be(i))return!1;if(!e&&!zs(i)&&(Yo(i)||(i=we(i),l=we(l)),!se(s)&&be(l)&&!be(i)))return l.value=i,!0;const c=se(s)&&Di(o)?Number(o)<s.length:ge(s,o),u=Reflect.set(s,o,i,r);return s===we(r)&&(c?Vs(i,l)&&Un(s,"set",o,i):Un(s,"add",o,i)),u}}function lf(e,n){const s=ge(e,n);e[n];const o=Reflect.deleteProperty(e,n);return o&&s&&Un(e,"delete",n,void 0),o}function cf(e,n){const s=Reflect.has(e,n);return(!Ni(n)||!Kc.has(n))&&yn(e,"has",n),s}function uf(e){return yn(e,"iterate",se(e)?"length":Et),Reflect.ownKeys(e)}const Jc={get:nf,set:of,deleteProperty:lf,has:cf,ownKeys:uf},pf={get:sf,set(e,n){return!0},deleteProperty(e,n){return!0}},df=sn({},Jc,{get:tf,set:rf}),Bi=e=>e,Za=e=>Reflect.getPrototypeOf(e);function da(e,n,s=!1,o=!1){e=e.__v_raw;const i=we(e),r=we(n);s||(n!==r&&yn(i,"get",n),yn(i,"get",r));const{has:l}=Za(i),c=o?Bi:s?Ui:Bs;if(l.call(i,n))return c(e.get(n));if(l.call(i,r))return c(e.get(r));e!==i&&e.get(n)}function fa(e,n=!1){const s=this.__v_raw,o=we(s),i=we(e);return n||(e!==i&&yn(o,"has",e),yn(o,"has",i)),e===i?s.has(e):s.has(e)||s.has(i)}function ma(e,n=!1){return e=e.__v_raw,!n&&yn(we(e),"iterate",Et),Reflect.get(e,"size",e)}function Nr(e){e=we(e);const n=we(this);return Za(n).has.call(n,e)||(n.add(e),Un(n,"add",e,e)),this}function Dr(e,n){n=we(n);const s=we(this),{has:o,get:i}=Za(s);let r=o.call(s,e);r||(e=we(e),r=o.call(s,e));const l=i.call(s,e);return s.set(e,n),r?Vs(n,l)&&Un(s,"set",e,n):Un(s,"add",e,n),this}function Hr(e){const n=we(this),{has:s,get:o}=Za(n);let i=s.call(n,e);i||(e=we(e),i=s.call(n,e)),o&&o.call(n,e);const r=n.delete(e);return i&&Un(n,"delete",e,void 0),r}function Vr(){const e=we(this),n=e.size!==0,s=e.clear();return n&&Un(e,"clear",void 0,void 0),s}function ha(e,n){return function(o,i){const r=this,l=r.__v_raw,c=we(l),u=n?Bi:e?Ui:Bs;return!e&&yn(c,"iterate",Et),l.forEach((p,d)=>o.call(i,u(p),u(d),r))}}function ga(e,n,s){return function(...o){const i=this.__v_raw,r=we(i),l=Yt(r),c=e==="entries"||e===Symbol.iterator&&l,u=e==="keys"&&l,p=i[e](...o),d=s?Bi:n?Ui:Bs;return!n&&yn(r,"iterate",u?Uo:Et),{next(){const{value:m,done:f}=p.next();return f?{value:m,done:f}:{value:c?[d(m[0]),d(m[1])]:d(m),done:f}},[Symbol.iterator](){return this}}}}function Kn(e){return function(...n){return e==="delete"?!1:this}}function ff(){const e={get(r){return da(this,r)},get size(){return ma(this)},has:fa,add:Nr,set:Dr,delete:Hr,clear:Vr,forEach:ha(!1,!1)},n={get(r){return da(this,r,!1,!0)},get size(){return ma(this)},has:fa,add:Nr,set:Dr,delete:Hr,clear:Vr,forEach:ha(!1,!0)},s={get(r){return da(this,r,!0)},get size(){return ma(this,!0)},has(r){return fa.call(this,r,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:ha(!0,!1)},o={get(r){return da(this,r,!0,!0)},get size(){return ma(this,!0)},has(r){return fa.call(this,r,!0)},add:Kn("add"),set:Kn("set"),delete:Kn("delete"),clear:Kn("clear"),forEach:ha(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=ga(r,!1,!1),s[r]=ga(r,!0,!1),n[r]=ga(r,!1,!0),o[r]=ga(r,!0,!0)}),[e,s,n,o]}const[mf,hf,gf,vf]=ff();function Qi(e,n){const s=n?e?vf:gf:e?hf:mf;return(o,i,r)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?o:Reflect.get(ge(s,i)&&i in o?s:o,i,r)}const yf={get:Qi(!1,!1)},kf={get:Qi(!1,!0)},_f={get:Qi(!0,!1)},Xc=new WeakMap,eu=new WeakMap,nu=new WeakMap,bf=new WeakMap;function wf(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function xf(e){return e.__v_skip||!Object.isExtensible(e)?0:wf(Bd(e))}function qe(e){return zs(e)?e:Wi(e,!1,Jc,yf,Xc)}function Cf(e){return Wi(e,!1,df,kf,eu)}function Wt(e){return Wi(e,!0,pf,_f,nu)}function Wi(e,n,s,o,i){if(!ze(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const r=i.get(e);if(r)return r;const l=xf(e);if(l===0)return e;const c=new Proxy(e,l===2?o:s);return i.set(e,c),c}function Zt(e){return zs(e)?Zt(e.__v_raw):!!(e&&e.__v_isReactive)}function zs(e){return!!(e&&e.__v_isReadonly)}function Yo(e){return!!(e&&e.__v_isShallow)}function tu(e){return Zt(e)||zs(e)}function we(e){const n=e&&e.__v_raw;return n?we(n):e}function Ja(e){return Pa(e,"__v_skip",!0),e}const Bs=e=>ze(e)?qe(e):e,Ui=e=>ze(e)?Wt(e):e;function Gi(e){st&&jn&&(e=we(e),Yc(e.dep||(e.dep=Hi())))}function Yi(e,n){e=we(e),e.dep&&Go(e.dep)}function be(e){return!!(e&&e.__v_isRef===!0)}function z(e){return su(e,!1)}function Vn(e){return su(e,!0)}function su(e,n){return be(e)?e:new Sf(e,n)}class Sf{constructor(n,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?n:we(n),this._value=s?n:Bs(n)}get value(){return Gi(this),this._value}set value(n){n=this.__v_isShallow?n:we(n),Vs(n,this._rawValue)&&(this._rawValue=n,this._value=this.__v_isShallow?n:Bs(n),Yi(this))}}function k(e){return be(e)?e.value:e}const Of={get:(e,n,s)=>k(Reflect.get(e,n,s)),set:(e,n,s,o)=>{const i=e[n];return be(i)&&!be(s)?(i.value=s,!0):Reflect.set(e,n,s,o)}};function au(e){return Zt(e)?e:new Proxy(e,Of)}class Ef{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:o}=n(()=>Gi(this),()=>Yi(this));this._get=s,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function jf(e){return new Ef(e)}function $f(e){const n=se(e)?new Array(e.length):{};for(const s in e)n[s]=Pf(e,s);return n}class Mf{constructor(n,s,o){this._object=n,this._key=s,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function Pf(e,n,s){const o=e[n];return be(o)?o:new Mf(e,n,s)}class Tf{constructor(n,s,o,i){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Vi(n,()=>{this._dirty||(this._dirty=!0,Yi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=o}get value(){const n=we(this);return Gi(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function Af(e,n,s=!1){let o,i;const r=le(e);return r?(o=e,i=Mn):(o=e.get,i=e.set),new Tf(o,i,r||!i,s)}function at(e,n,s,o){let i;try{i=o?e(...o):e()}catch(r){Xa(r,n,s)}return i}function Pn(e,n,s,o){if(le(e)){const r=at(e,n,s,o);return r&&Vc(r)&&r.catch(l=>{Xa(l,n,s)}),r}const i=[];for(let r=0;r<e.length;r++)i.push(Pn(e[r],n,s,o));return i}function Xa(e,n,s,o=!0){const i=n?n.vnode:null;if(n){let r=n.parent;const l=n.proxy,c=s;for(;r;){const p=r.ec;if(p){for(let d=0;d<p.length;d++)if(p[d](e,l,c)===!1)return}r=r.parent}const u=n.appContext.config.errorHandler;if(u){at(u,null,10,[e,l,c]);return}}Lf(e,s,i,o)}function Lf(e,n,s,o=!0){console.error(e)}let Ta=!1,Ko=!1;const hn=[];let Qn=0;const Es=[];let Cs=null,Vt=0;const js=[];let Xn=null,zt=0;const ou=Promise.resolve();let Ki=null,Zo=null;function We(e){const n=Ki||ou;return e?n.then(this?e.bind(this):e):n}function If(e){let n=Qn+1,s=hn.length;for(;n<s;){const o=n+s>>>1;Qs(hn[o])<e?n=o+1:s=o}return n}function iu(e){(!hn.length||!hn.includes(e,Ta&&e.allowRecurse?Qn+1:Qn))&&e!==Zo&&(e.id==null?hn.push(e):hn.splice(If(e.id),0,e),ru())}function ru(){!Ta&&!Ko&&(Ko=!0,Ki=ou.then(uu))}function Rf(e){const n=hn.indexOf(e);n>Qn&&hn.splice(n,1)}function lu(e,n,s,o){se(e)?s.push(...e):(!n||!n.includes(e,e.allowRecurse?o+1:o))&&s.push(e),ru()}function qf(e){lu(e,Cs,Es,Vt)}function Ff(e){lu(e,Xn,js,zt)}function eo(e,n=null){if(Es.length){for(Zo=n,Cs=[...new Set(Es)],Es.length=0,Vt=0;Vt<Cs.length;Vt++)Cs[Vt]();Cs=null,Vt=0,Zo=null,eo(e,n)}}function cu(e){if(eo(),js.length){const n=[...new Set(js)];if(js.length=0,Xn){Xn.push(...n);return}for(Xn=n,Xn.sort((s,o)=>Qs(s)-Qs(o)),zt=0;zt<Xn.length;zt++)Xn[zt]();Xn=null,zt=0}}const Qs=e=>e.id==null?1/0:e.id;function uu(e){Ko=!1,Ta=!0,eo(e),hn.sort((s,o)=>Qs(s)-Qs(o));const n=Mn;try{for(Qn=0;Qn<hn.length;Qn++){const s=hn[Qn];s&&s.active!==!1&&at(s,null,14)}}finally{Qn=0,hn.length=0,cu(),Ta=!1,Ki=null,(hn.length||Es.length||js.length)&&uu(e)}}function Nf(e,n,...s){if(e.isUnmounted)return;const o=e.vnode.props||Me;let i=s;const r=n.startsWith("update:"),l=r&&n.slice(7);if(l&&l in o){const d=`${l==="modelValue"?"model":l}Modifiers`,{number:m,trim:f}=o[d]||Me;f&&(i=s.map(h=>h.trim())),m&&(i=s.map(Bo))}let c,u=o[c=vo(n)]||o[c=vo(Hn(n))];!u&&r&&(u=o[c=vo(At(n))]),u&&Pn(u,e,6,i);const p=o[c+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Pn(p,e,6,i)}}function pu(e,n,s=!1){const o=n.emitsCache,i=o.get(e);if(i!==void 0)return i;const r=e.emits;let l={},c=!1;if(!le(e)){const u=p=>{const d=pu(p,n,!0);d&&(c=!0,sn(l,d))};!s&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!r&&!c?(o.set(e,null),null):(se(r)?r.forEach(u=>l[u]=null):sn(l,r),o.set(e,l),l)}function no(e,n){return!e||!Ua(n)?!1:(n=n.slice(2).replace(/Once$/,""),ge(e,n[0].toLowerCase()+n.slice(1))||ge(e,At(n))||ge(e,n))}let Ye=null,to=null;function Aa(e){const n=Ye;return Ye=e,to=e&&e.type.__scopeId||null,n}function BO(e){to=e}function QO(){to=null}function Q(e,n=Ye,s){if(!n||e._n)return e;const o=(...i)=>{o._d&&Xr(-1);const r=Aa(n),l=e(...i);return Aa(r),o._d&&Xr(1),l};return o._n=!0,o._c=!0,o._d=!0,o}function yo(e){const{type:n,vnode:s,proxy:o,withProxy:i,props:r,propsOptions:[l],slots:c,attrs:u,emit:p,render:d,renderCache:m,data:f,setupState:h,ctx:v,inheritAttrs:w}=e;let _,O;const C=Aa(e);try{if(s.shapeFlag&4){const E=i||o;_=qn(d.call(E,E,m,r,h,f,v)),O=u}else{const E=n;_=qn(E.length>1?E(r,{attrs:u,slots:c,emit:p}):E(r,null)),O=n.props?u:Df(u)}}catch(E){Ms.length=0,Xa(E,e,1),_=X(ut)}let S=_;if(O&&w!==!1){const E=Object.keys(O),{shapeFlag:F}=S;E.length&&F&7&&(l&&E.some(qi)&&(O=Hf(O,l)),S=Tt(S,O))}return s.dirs&&(S=Tt(S),S.dirs=S.dirs?S.dirs.concat(s.dirs):s.dirs),s.transition&&(S.transition=s.transition),_=S,Aa(C),_}const Df=e=>{let n;for(const s in e)(s==="class"||s==="style"||Ua(s))&&((n||(n={}))[s]=e[s]);return n},Hf=(e,n)=>{const s={};for(const o in e)(!qi(o)||!(o.slice(9)in n))&&(s[o]=e[o]);return s};function Vf(e,n,s){const{props:o,children:i,component:r}=e,{props:l,children:c,patchFlag:u}=n,p=r.emitsOptions;if(n.dirs||n.transition)return!0;if(s&&u>=0){if(u&1024)return!0;if(u&16)return o?zr(o,l,p):!!l;if(u&8){const d=n.dynamicProps;for(let m=0;m<d.length;m++){const f=d[m];if(l[f]!==o[f]&&!no(p,f))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:o===l?!1:o?l?zr(o,l,p):!0:!!l;return!1}function zr(e,n,s){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let i=0;i<o.length;i++){const r=o[i];if(n[r]!==e[r]&&!no(s,r))return!0}return!1}function zf({vnode:e,parent:n},s){for(;n&&n.subTree===e;)(e=n.vnode).el=s,n=n.parent}const du=e=>e.__isSuspense;function Bf(e,n){n&&n.pendingBranch?se(e)?n.effects.push(...e):n.effects.push(e):Ff(e)}function mn(e,n){if(Be){let s=Be.provides;const o=Be.parent&&Be.parent.provides;o===s&&(s=Be.provides=Object.create(o)),s[e]=n}}function L(e,n,s=!1){const o=Be||Ye;if(o){const i=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return s&&le(n)?n.call(o.proxy):n}}function aa(e,n){return Zi(e,null,n)}const Br={};function ue(e,n,s){return Zi(e,n,s)}function Zi(e,n,{immediate:s,deep:o,flush:i,onTrack:r,onTrigger:l}=Me){const c=Be;let u,p=!1,d=!1;if(be(e)?(u=()=>e.value,p=Yo(e)):Zt(e)?(u=()=>e,o=!0):se(e)?(d=!0,p=e.some(O=>Zt(O)||Yo(O)),u=()=>e.map(O=>{if(be(O))return O.value;if(Zt(O))return xt(O);if(le(O))return at(O,c,2)})):le(e)?n?u=()=>at(e,c,2):u=()=>{if(!(c&&c.isUnmounted))return m&&m(),Pn(e,c,3,[f])}:u=Mn,n&&o){const O=u;u=()=>xt(O())}let m,f=O=>{m=_.onStop=()=>{at(O,c,4)}};if(Gs)return f=Mn,n?s&&Pn(n,c,3,[u(),d?[]:void 0,f]):u(),Mn;let h=d?[]:Br;const v=()=>{if(!!_.active)if(n){const O=_.run();(o||p||(d?O.some((C,S)=>Vs(C,h[S])):Vs(O,h)))&&(m&&m(),Pn(n,c,3,[O,h===Br?void 0:h,f]),h=O)}else _.run()};v.allowRecurse=!!n;let w;i==="sync"?w=v:i==="post"?w=()=>Qe(v,c&&c.suspense):w=()=>qf(v);const _=new Vi(u,w);return n?s?v():h=_.run():i==="post"?Qe(_.run.bind(_),c&&c.suspense):_.run(),()=>{_.stop(),c&&c.scope&&Fi(c.scope.effects,_)}}function Qf(e,n,s){const o=this.proxy,i=Fe(e)?e.includes(".")?fu(o,e):()=>o[e]:e.bind(o,o);let r;le(n)?r=n:(r=n.handler,s=n);const l=Be;ss(this);const c=Zi(i,r.bind(o),s);return l?ss(l):jt(),c}function fu(e,n){const s=n.split(".");return()=>{let o=e;for(let i=0;i<s.length&&o;i++)o=o[s[i]];return o}}function xt(e,n){if(!ze(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),be(e))xt(e.value,n);else if(se(e))for(let s=0;s<e.length;s++)xt(e[s],n);else if(Hc(e)||Yt(e))e.forEach(s=>{xt(s,n)});else if(Bc(e))for(const s in e)xt(e[s],n);return e}function mu(e,n){e.shapeFlag&6&&e.component?mu(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function xe(e){return le(e)?{setup:e,name:e.name}:e}const Jt=e=>!!e.type.__asyncLoader,hu=e=>e.type.__isKeepAlive,Wf={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const s=Lt(),o=s.ctx;if(!o.renderer)return()=>{const C=n.default&&n.default();return C&&C.length===1?C[0]:C};const i=new Map,r=new Set;let l=null;const c=s.suspense,{renderer:{p:u,m:p,um:d,o:{createElement:m}}}=o,f=m("div");o.activate=(C,S,E,F,A)=>{const W=C.component;p(C,S,E,0,c),u(W.vnode,C,S,E,W,c,F,C.slotScopeIds,A),Qe(()=>{W.isDeactivated=!1,W.a&&Kt(W.a);const ie=C.props&&C.props.onVnodeMounted;ie&&_n(ie,W.parent,C)},c)},o.deactivate=C=>{const S=C.component;p(C,f,null,1,c),Qe(()=>{S.da&&Kt(S.da);const E=C.props&&C.props.onVnodeUnmounted;E&&_n(E,S.parent,C),S.isDeactivated=!0},c)};function h(C){ko(C),d(C,s,c,!0)}function v(C){i.forEach((S,E)=>{const F=oi(S.type);F&&(!C||!C(F))&&w(E)})}function w(C){const S=i.get(C);!l||S.type!==l.type?h(S):l&&ko(l),i.delete(C),r.delete(C)}ue(()=>[e.include,e.exclude],([C,S])=>{C&&v(E=>Ss(C,E)),S&&v(E=>!Ss(S,E))},{flush:"post",deep:!0});let _=null;const O=()=>{_!=null&&i.set(_,_o(s.subTree))};return cs(O),ku(O),ao(()=>{i.forEach(C=>{const{subTree:S,suspense:E}=s,F=_o(S);if(C.type===F.type){ko(F);const A=F.component.da;A&&Qe(A,E);return}h(C)})}),()=>{if(_=null,!n.default)return null;const C=n.default(),S=C[0];if(C.length>1)return l=null,C;if(!ts(S)||!(S.shapeFlag&4)&&!(S.shapeFlag&128))return l=null,S;let E=_o(S);const F=E.type,A=oi(Jt(E)?E.type.__asyncResolved||{}:F),{include:W,exclude:ie,max:pe}=e;if(W&&(!A||!Ss(W,A))||ie&&A&&Ss(ie,A))return l=E,S;const me=E.key==null?F:E.key,ve=i.get(me);return E.el&&(E=Tt(E),S.shapeFlag&128&&(S.ssContent=E)),_=me,ve?(E.el=ve.el,E.component=ve.component,E.transition&&mu(E,E.transition),E.shapeFlag|=512,r.delete(me),r.add(me)):(r.add(me),pe&&r.size>parseInt(pe,10)&&w(r.values().next().value)),E.shapeFlag|=256,l=E,du(S.type)?S:E}}},gu=Wf;function Ss(e,n){return se(e)?e.some(s=>Ss(s,n)):Fe(e)?e.split(",").includes(n):e.test?e.test(n):!1}function Uf(e,n){vu(e,"a",n)}function Gf(e,n){vu(e,"da",n)}function vu(e,n,s=Be){const o=e.__wdc||(e.__wdc=()=>{let i=s;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(so(n,o,s),s){let i=s.parent;for(;i&&i.parent;)hu(i.parent.vnode)&&Yf(o,n,s,i),i=i.parent}}function Yf(e,n,s,o){const i=so(n,e,o,!0);oo(()=>{Fi(o[n],i)},s)}function ko(e){let n=e.shapeFlag;n&256&&(n-=256),n&512&&(n-=512),e.shapeFlag=n}function _o(e){return e.shapeFlag&128?e.ssContent:e}function so(e,n,s=Be,o=!1){if(s){const i=s[e]||(s[e]=[]),r=n.__weh||(n.__weh=(...l)=>{if(s.isUnmounted)return;rs(),ss(s);const c=Pn(n,s,e,l);return jt(),ls(),c});return o?i.unshift(r):i.push(r),r}}const Gn=e=>(n,s=Be)=>(!Gs||e==="sp")&&so(e,n,s),yu=Gn("bm"),cs=Gn("m"),Kf=Gn("bu"),ku=Gn("u"),ao=Gn("bum"),oo=Gn("um"),Zf=Gn("sp"),Jf=Gn("rtg"),Xf=Gn("rtc");function em(e,n=Be){so("ec",e,n)}function Ji(e,n){const s=Ye;if(s===null)return e;const o=ro(s)||s.proxy,i=e.dirs||(e.dirs=[]);for(let r=0;r<n.length;r++){let[l,c,u,p=Me]=n[r];le(l)&&(l={mounted:l,updated:l}),l.deep&&xt(c),i.push({dir:l,instance:o,value:c,oldValue:void 0,arg:u,modifiers:p})}return e}function mt(e,n,s,o){const i=e.dirs,r=n&&n.dirs;for(let l=0;l<i.length;l++){const c=i[l];r&&(c.oldValue=r[l].value);let u=c.dir[o];u&&(rs(),Pn(u,s,8,[e.el,c,e,n]),ls())}}const _u="components";function Jo(e,n){return tm(_u,e,!0,n)||e}const nm=Symbol();function tm(e,n,s=!0,o=!1){const i=Ye||Be;if(i){const r=i.type;if(e===_u){const c=oi(r);if(c&&(c===n||c===Hn(n)||c===Ka(Hn(n))))return r}const l=Qr(i[e]||r[e],n)||Qr(i.appContext[e],n);return!l&&o?r:l}}function Qr(e,n){return e&&(e[n]||e[Hn(n)]||e[Ka(Hn(n))])}function oa(e,n,s,o){let i;const r=s&&s[o];if(se(e)||Fe(e)){i=new Array(e.length);for(let l=0,c=e.length;l<c;l++)i[l]=n(e[l],l,void 0,r&&r[l])}else if(typeof e=="number"){i=new Array(e);for(let l=0;l<e;l++)i[l]=n(l+1,l,void 0,r&&r[l])}else if(ze(e))if(e[Symbol.iterator])i=Array.from(e,(l,c)=>n(l,c,void 0,r&&r[c]));else{const l=Object.keys(e);i=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const p=l[c];i[c]=n(e[p],p,c,r&&r[c])}}else i=[];return s&&(s[o]=i),i}function an(e,n,s={},o,i){if(Ye.isCE||Ye.parent&&Jt(Ye.parent)&&Ye.parent.isCE)return X("slot",n==="default"?null:{name:n},o&&o());let r=e[n];r&&r._c&&(r._d=!1),b();const l=r&&bu(r(s)),c=H(Se,{key:s.key||`_${n}`},l||(o?o():[]),l&&e._===1?64:-2);return!i&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),r&&r._c&&(r._d=!0),c}function bu(e){return e.some(n=>ts(n)?!(n.type===ut||n.type===Se&&!bu(n.children)):!0)?e:null}const Xo=e=>e?Tu(e)?ro(e)||e.proxy:Xo(e.parent):null,La=sn(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Xo(e.parent),$root:e=>Xo(e.root),$emit:e=>e.emit,$options:e=>xu(e),$forceUpdate:e=>e.f||(e.f=()=>iu(e.update)),$nextTick:e=>e.n||(e.n=We.bind(e.proxy)),$watch:e=>Qf.bind(e)}),sm={get({_:e},n){const{ctx:s,setupState:o,data:i,props:r,accessCache:l,type:c,appContext:u}=e;let p;if(n[0]!=="$"){const h=l[n];if(h!==void 0)switch(h){case 1:return o[n];case 2:return i[n];case 4:return s[n];case 3:return r[n]}else{if(o!==Me&&ge(o,n))return l[n]=1,o[n];if(i!==Me&&ge(i,n))return l[n]=2,i[n];if((p=e.propsOptions[0])&&ge(p,n))return l[n]=3,r[n];if(s!==Me&&ge(s,n))return l[n]=4,s[n];ei&&(l[n]=0)}}const d=La[n];let m,f;if(d)return n==="$attrs"&&yn(e,"get",n),d(e);if((m=c.__cssModules)&&(m=m[n]))return m;if(s!==Me&&ge(s,n))return l[n]=4,s[n];if(f=u.config.globalProperties,ge(f,n))return f[n]},set({_:e},n,s){const{data:o,setupState:i,ctx:r}=e;return i!==Me&&ge(i,n)?(i[n]=s,!0):o!==Me&&ge(o,n)?(o[n]=s,!0):ge(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(r[n]=s,!0)},has({_:{data:e,setupState:n,accessCache:s,ctx:o,appContext:i,propsOptions:r}},l){let c;return!!s[l]||e!==Me&&ge(e,l)||n!==Me&&ge(n,l)||(c=r[0])&&ge(c,l)||ge(o,l)||ge(La,l)||ge(i.config.globalProperties,l)},defineProperty(e,n,s){return s.get!=null?e._.accessCache[n]=0:ge(s,"value")&&this.set(e,n,s.value,null),Reflect.defineProperty(e,n,s)}};let ei=!0;function am(e){const n=xu(e),s=e.proxy,o=e.ctx;ei=!1,n.beforeCreate&&Wr(n.beforeCreate,e,"bc");const{data:i,computed:r,methods:l,watch:c,provide:u,inject:p,created:d,beforeMount:m,mounted:f,beforeUpdate:h,updated:v,activated:w,deactivated:_,beforeDestroy:O,beforeUnmount:C,destroyed:S,unmounted:E,render:F,renderTracked:A,renderTriggered:W,errorCaptured:ie,serverPrefetch:pe,expose:me,inheritAttrs:ve,components:Re,directives:Ne,filters:Ge}=n;if(p&&om(p,o,null,e.appContext.config.unwrapInjectedRef),l)for(const ae in l){const J=l[ae];le(J)&&(o[ae]=J.bind(s))}if(i){const ae=i.call(s,s);ze(ae)&&(e.data=qe(ae))}if(ei=!0,r)for(const ae in r){const J=r[ae],he=le(J)?J.bind(s,s):le(J.get)?J.get.bind(s,s):Mn,In=!le(J)&&le(J.set)?J.set.bind(s):Mn,Je=j({get:he,set:In});Object.defineProperty(o,ae,{enumerable:!0,configurable:!0,get:()=>Je.value,set:kn=>Je.value=kn})}if(c)for(const ae in c)wu(c[ae],o,s,ae);if(u){const ae=le(u)?u.call(s):u;Reflect.ownKeys(ae).forEach(J=>{mn(J,ae[J])})}d&&Wr(d,e,"c");function ee(ae,J){se(J)?J.forEach(he=>ae(he.bind(s))):J&&ae(J.bind(s))}if(ee(yu,m),ee(cs,f),ee(Kf,h),ee(ku,v),ee(Uf,w),ee(Gf,_),ee(em,ie),ee(Xf,A),ee(Jf,W),ee(ao,C),ee(oo,E),ee(Zf,pe),se(me))if(me.length){const ae=e.exposed||(e.exposed={});me.forEach(J=>{Object.defineProperty(ae,J,{get:()=>s[J],set:he=>s[J]=he})})}else e.exposed||(e.exposed={});F&&e.render===Mn&&(e.render=F),ve!=null&&(e.inheritAttrs=ve),Re&&(e.components=Re),Ne&&(e.directives=Ne)}function om(e,n,s=Mn,o=!1){se(e)&&(e=ni(e));for(const i in e){const r=e[i];let l;ze(r)?"default"in r?l=L(r.from||i,r.default,!0):l=L(r.from||i):l=L(r),be(l)&&o?Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>l.value,set:c=>l.value=c}):n[i]=l}}function Wr(e,n,s){Pn(se(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,s)}function wu(e,n,s,o){const i=o.includes(".")?fu(s,o):()=>s[o];if(Fe(e)){const r=n[e];le(r)&&ue(i,r)}else if(le(e))ue(i,e.bind(s));else if(ze(e))if(se(e))e.forEach(r=>wu(r,n,s,o));else{const r=le(e.handler)?e.handler.bind(s):n[e.handler];le(r)&&ue(i,r,e)}}function xu(e){const n=e.type,{mixins:s,extends:o}=n,{mixins:i,optionsCache:r,config:{optionMergeStrategies:l}}=e.appContext,c=r.get(n);let u;return c?u=c:!i.length&&!s&&!o?u=n:(u={},i.length&&i.forEach(p=>Ia(u,p,l,!0)),Ia(u,n,l)),r.set(n,u),u}function Ia(e,n,s,o=!1){const{mixins:i,extends:r}=n;r&&Ia(e,r,s,!0),i&&i.forEach(l=>Ia(e,l,s,!0));for(const l in n)if(!(o&&l==="expose")){const c=im[l]||s&&s[l];e[l]=c?c(e[l],n[l]):n[l]}return e}const im={data:Ur,props:yt,emits:yt,methods:yt,computed:yt,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:yt,directives:yt,watch:lm,provide:Ur,inject:rm};function Ur(e,n){return n?e?function(){return sn(le(e)?e.call(this,this):e,le(n)?n.call(this,this):n)}:n:e}function rm(e,n){return yt(ni(e),ni(n))}function ni(e){if(se(e)){const n={};for(let s=0;s<e.length;s++)n[e[s]]=e[s];return n}return e}function en(e,n){return e?[...new Set([].concat(e,n))]:n}function yt(e,n){return e?sn(sn(Object.create(null),e),n):n}function lm(e,n){if(!e)return n;if(!n)return e;const s=sn(Object.create(null),e);for(const o in n)s[o]=en(e[o],n[o]);return s}function cm(e,n,s,o=!1){const i={},r={};Pa(r,io,1),e.propsDefaults=Object.create(null),Cu(e,n,i,r);for(const l in e.propsOptions[0])l in i||(i[l]=void 0);s?e.props=o?i:Cf(i):e.type.props?e.props=i:e.props=r,e.attrs=r}function um(e,n,s,o){const{props:i,attrs:r,vnode:{patchFlag:l}}=e,c=we(i),[u]=e.propsOptions;let p=!1;if((o||l>0)&&!(l&16)){if(l&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let f=d[m];if(no(e.emitsOptions,f))continue;const h=n[f];if(u)if(ge(r,f))h!==r[f]&&(r[f]=h,p=!0);else{const v=Hn(f);i[v]=ti(u,c,v,h,e,!1)}else h!==r[f]&&(r[f]=h,p=!0)}}}else{Cu(e,n,i,r)&&(p=!0);let d;for(const m in c)(!n||!ge(n,m)&&((d=At(m))===m||!ge(n,d)))&&(u?s&&(s[m]!==void 0||s[d]!==void 0)&&(i[m]=ti(u,c,m,void 0,e,!0)):delete i[m]);if(r!==c)for(const m in r)(!n||!ge(n,m)&&!0)&&(delete r[m],p=!0)}p&&Un(e,"set","$attrs")}function Cu(e,n,s,o){const[i,r]=e.propsOptions;let l=!1,c;if(n)for(let u in n){if(xa(u))continue;const p=n[u];let d;i&&ge(i,d=Hn(u))?!r||!r.includes(d)?s[d]=p:(c||(c={}))[d]=p:no(e.emitsOptions,u)||(!(u in o)||p!==o[u])&&(o[u]=p,l=!0)}if(r){const u=we(s),p=c||Me;for(let d=0;d<r.length;d++){const m=r[d];s[m]=ti(i,u,m,p[m],e,!ge(p,m))}}return l}function ti(e,n,s,o,i,r){const l=e[s];if(l!=null){const c=ge(l,"default");if(c&&o===void 0){const u=l.default;if(l.type!==Function&&le(u)){const{propsDefaults:p}=i;s in p?o=p[s]:(ss(i),o=p[s]=u.call(null,n),jt())}else o=u}l[0]&&(r&&!c?o=!1:l[1]&&(o===""||o===At(s))&&(o=!0))}return o}function Su(e,n,s=!1){const o=n.propsCache,i=o.get(e);if(i)return i;const r=e.props,l={},c=[];let u=!1;if(!le(e)){const d=m=>{u=!0;const[f,h]=Su(m,n,!0);sn(l,f),h&&c.push(...h)};!s&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!u)return o.set(e,Gt),Gt;if(se(r))for(let d=0;d<r.length;d++){const m=Hn(r[d]);Gr(m)&&(l[m]=Me)}else if(r)for(const d in r){const m=Hn(d);if(Gr(m)){const f=r[d],h=l[m]=se(f)||le(f)?{type:f}:f;if(h){const v=Zr(Boolean,h.type),w=Zr(String,h.type);h[0]=v>-1,h[1]=w<0||v<w,(v>-1||ge(h,"default"))&&c.push(m)}}}const p=[l,c];return o.set(e,p),p}function Gr(e){return e[0]!=="$"}function Yr(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function Kr(e,n){return Yr(e)===Yr(n)}function Zr(e,n){return se(n)?n.findIndex(s=>Kr(s,e)):le(n)&&Kr(n,e)?0:-1}const Ou=e=>e[0]==="_"||e==="$stable",Xi=e=>se(e)?e.map(qn):[qn(e)],pm=(e,n,s)=>{if(n._n)return n;const o=Q((...i)=>Xi(n(...i)),s);return o._c=!1,o},Eu=(e,n,s)=>{const o=e._ctx;for(const i in e){if(Ou(i))continue;const r=e[i];if(le(r))n[i]=pm(i,r,o);else if(r!=null){const l=Xi(r);n[i]=()=>l}}},ju=(e,n)=>{const s=Xi(n);e.slots.default=()=>s},dm=(e,n)=>{if(e.vnode.shapeFlag&32){const s=n._;s?(e.slots=we(n),Pa(n,"_",s)):Eu(n,e.slots={})}else e.slots={},n&&ju(e,n);Pa(e.slots,io,1)},fm=(e,n,s)=>{const{vnode:o,slots:i}=e;let r=!0,l=Me;if(o.shapeFlag&32){const c=n._;c?s&&c===1?r=!1:(sn(i,n),!s&&c===1&&delete i._):(r=!n.$stable,Eu(n,i)),l=n}else n&&(ju(e,n),l={default:1});if(r)for(const c in i)!Ou(c)&&!(c in l)&&delete i[c]};function $u(){return{app:null,config:{isNativeTag:Hd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mm=0;function hm(e,n){return function(o,i=null){le(o)||(o=Object.assign({},o)),i!=null&&!ze(i)&&(i=null);const r=$u(),l=new Set;let c=!1;const u=r.app={_uid:mm++,_component:o,_props:i,_container:null,_context:r,_instance:null,version:Am,get config(){return r.config},set config(p){},use(p,...d){return l.has(p)||(p&&le(p.install)?(l.add(p),p.install(u,...d)):le(p)&&(l.add(p),p(u,...d))),u},mixin(p){return r.mixins.includes(p)||r.mixins.push(p),u},component(p,d){return d?(r.components[p]=d,u):r.components[p]},directive(p,d){return d?(r.directives[p]=d,u):r.directives[p]},mount(p,d,m){if(!c){const f=X(o,i);return f.appContext=r,d&&n?n(f,p):e(f,p,m),c=!0,u._container=p,p.__vue_app__=u,ro(f.component)||f.component.proxy}},unmount(){c&&(e(null,u._container),delete u._container.__vue_app__)},provide(p,d){return r.provides[p]=d,u}};return u}}function si(e,n,s,o,i=!1){if(se(e)){e.forEach((f,h)=>si(f,n&&(se(n)?n[h]:n),s,o,i));return}if(Jt(o)&&!i)return;const r=o.shapeFlag&4?ro(o.component)||o.component.proxy:o.el,l=i?null:r,{i:c,r:u}=e,p=n&&n.r,d=c.refs===Me?c.refs={}:c.refs,m=c.setupState;if(p!=null&&p!==u&&(Fe(p)?(d[p]=null,ge(m,p)&&(m[p]=null)):be(p)&&(p.value=null)),le(u))at(u,c,12,[l,d]);else{const f=Fe(u),h=be(u);if(f||h){const v=()=>{if(e.f){const w=f?d[u]:u.value;i?se(w)&&Fi(w,r):se(w)?w.includes(r)||w.push(r):f?(d[u]=[r],ge(m,u)&&(m[u]=d[u])):(u.value=[r],e.k&&(d[e.k]=u.value))}else f?(d[u]=l,ge(m,u)&&(m[u]=l)):be(u)&&(u.value=l,e.k&&(d[e.k]=l))};l?(v.id=-1,Qe(v,s)):v()}}}const Qe=Bf;function gm(e){return vm(e)}function vm(e,n){const s=Ud();s.__VUE__=!0;const{insert:o,remove:i,patchProp:r,createElement:l,createText:c,createComment:u,setText:p,setElementText:d,parentNode:m,nextSibling:f,setScopeId:h=Mn,cloneNode:v,insertStaticContent:w}=e,_=(g,y,x,P=null,M=null,q=null,V=!1,R=null,N=!!y.dynamicChildren)=>{if(g===y)return;g&&!hs(g,y)&&(P=Y(g),on(g,M,q,!0),g=null),y.patchFlag===-2&&(N=!1,y.dynamicChildren=null);const{type:T,ref:K,shapeFlag:G}=y;switch(T){case nr:O(g,y,x,P);break;case ut:C(g,y,x,P);break;case bo:g==null&&S(y,x,P,V);break;case Se:Ne(g,y,x,P,M,q,V,R,N);break;default:G&1?A(g,y,x,P,M,q,V,R,N):G&6?Ge(g,y,x,P,M,q,V,R,N):(G&64||G&128)&&T.process(g,y,x,P,M,q,V,R,N,Pe)}K!=null&&M&&si(K,g&&g.ref,q,y||g,!y)},O=(g,y,x,P)=>{if(g==null)o(y.el=c(y.children),x,P);else{const M=y.el=g.el;y.children!==g.children&&p(M,y.children)}},C=(g,y,x,P)=>{g==null?o(y.el=u(y.children||""),x,P):y.el=g.el},S=(g,y,x,P)=>{[g.el,g.anchor]=w(g.children,y,x,P,g.el,g.anchor)},E=({el:g,anchor:y},x,P)=>{let M;for(;g&&g!==y;)M=f(g),o(g,x,P),g=M;o(y,x,P)},F=({el:g,anchor:y})=>{let x;for(;g&&g!==y;)x=f(g),i(g),g=x;i(y)},A=(g,y,x,P,M,q,V,R,N)=>{V=V||y.type==="svg",g==null?W(y,x,P,M,q,V,R,N):me(g,y,M,q,V,R,N)},W=(g,y,x,P,M,q,V,R)=>{let N,T;const{type:K,props:G,shapeFlag:Z,transition:oe,patchFlag:ye,dirs:Ee}=g;if(g.el&&v!==void 0&&ye===-1)N=g.el=v(g.el);else{if(N=g.el=l(g.type,q,G&&G.is,G),Z&8?d(N,g.children):Z&16&&pe(g.children,N,null,P,M,q&&K!=="foreignObject",V,R),Ee&&mt(g,null,P,"created"),G){for(const Ae in G)Ae!=="value"&&!xa(Ae)&&r(N,Ae,null,G[Ae],q,g.children,P,M,I);"value"in G&&r(N,"value",null,G.value),(T=G.onVnodeBeforeMount)&&_n(T,P,g)}ie(N,g,g.scopeId,V,P)}Ee&&mt(g,null,P,"beforeMount");const je=(!M||M&&!M.pendingBranch)&&oe&&!oe.persisted;je&&oe.beforeEnter(N),o(N,y,x),((T=G&&G.onVnodeMounted)||je||Ee)&&Qe(()=>{T&&_n(T,P,g),je&&oe.enter(N),Ee&&mt(g,null,P,"mounted")},M)},ie=(g,y,x,P,M)=>{if(x&&h(g,x),P)for(let q=0;q<P.length;q++)h(g,P[q]);if(M){let q=M.subTree;if(y===q){const V=M.vnode;ie(g,V,V.scopeId,V.slotScopeIds,M.parent)}}},pe=(g,y,x,P,M,q,V,R,N=0)=>{for(let T=N;T<g.length;T++){const K=g[T]=R?et(g[T]):qn(g[T]);_(null,K,y,x,P,M,q,V,R)}},me=(g,y,x,P,M,q,V)=>{const R=y.el=g.el;let{patchFlag:N,dynamicChildren:T,dirs:K}=y;N|=g.patchFlag&16;const G=g.props||Me,Z=y.props||Me;let oe;x&&ht(x,!1),(oe=Z.onVnodeBeforeUpdate)&&_n(oe,x,y,g),K&&mt(y,g,x,"beforeUpdate"),x&&ht(x,!0);const ye=M&&y.type!=="foreignObject";if(T?ve(g.dynamicChildren,T,R,x,P,ye,q):V||he(g,y,R,null,x,P,ye,q,!1),N>0){if(N&16)Re(R,y,G,Z,x,P,M);else if(N&2&&G.class!==Z.class&&r(R,"class",null,Z.class,M),N&4&&r(R,"style",G.style,Z.style,M),N&8){const Ee=y.dynamicProps;for(let je=0;je<Ee.length;je++){const Ae=Ee[je],Sn=G[Ae],Ft=Z[Ae];(Ft!==Sn||Ae==="value")&&r(R,Ae,Sn,Ft,M,g.children,x,P,I)}}N&1&&g.children!==y.children&&d(R,y.children)}else!V&&T==null&&Re(R,y,G,Z,x,P,M);((oe=Z.onVnodeUpdated)||K)&&Qe(()=>{oe&&_n(oe,x,y,g),K&&mt(y,g,x,"updated")},P)},ve=(g,y,x,P,M,q,V)=>{for(let R=0;R<y.length;R++){const N=g[R],T=y[R],K=N.el&&(N.type===Se||!hs(N,T)||N.shapeFlag&70)?m(N.el):x;_(N,T,K,null,P,M,q,V,!0)}},Re=(g,y,x,P,M,q,V)=>{if(x!==P){for(const R in P){if(xa(R))continue;const N=P[R],T=x[R];N!==T&&R!=="value"&&r(g,R,T,N,V,y.children,M,q,I)}if(x!==Me)for(const R in x)!xa(R)&&!(R in P)&&r(g,R,x[R],null,V,y.children,M,q,I);"value"in P&&r(g,"value",x.value,P.value)}},Ne=(g,y,x,P,M,q,V,R,N)=>{const T=y.el=g?g.el:c(""),K=y.anchor=g?g.anchor:c("");let{patchFlag:G,dynamicChildren:Z,slotScopeIds:oe}=y;oe&&(R=R?R.concat(oe):oe),g==null?(o(T,x,P),o(K,x,P),pe(y.children,x,K,M,q,V,R,N)):G>0&&G&64&&Z&&g.dynamicChildren?(ve(g.dynamicChildren,Z,x,M,q,V,R),(y.key!=null||M&&y===M.subTree)&&er(g,y,!0)):he(g,y,x,K,M,q,V,R,N)},Ge=(g,y,x,P,M,q,V,R,N)=>{y.slotScopeIds=R,g==null?y.shapeFlag&512?M.ctx.activate(y,x,P,V,N):Oe(y,x,P,M,q,V,N):ee(g,y,N)},Oe=(g,y,x,P,M,q,V)=>{const R=g.component=Em(g,P,M);if(hu(g)&&(R.ctx.renderer=Pe),jm(R),R.asyncDep){if(M&&M.registerDep(R,ae),!g.el){const N=R.subTree=X(ut);C(null,N,y,x)}return}ae(R,g,y,x,M,q,V)},ee=(g,y,x)=>{const P=y.component=g.component;if(Vf(g,y,x))if(P.asyncDep&&!P.asyncResolved){J(P,y,x);return}else P.next=y,Rf(P.update),P.update();else y.el=g.el,P.vnode=y},ae=(g,y,x,P,M,q,V)=>{const R=()=>{if(g.isMounted){let{next:K,bu:G,u:Z,parent:oe,vnode:ye}=g,Ee=K,je;ht(g,!1),K?(K.el=ye.el,J(g,K,V)):K=ye,G&&Kt(G),(je=K.props&&K.props.onVnodeBeforeUpdate)&&_n(je,oe,K,ye),ht(g,!0);const Ae=yo(g),Sn=g.subTree;g.subTree=Ae,_(Sn,Ae,m(Sn.el),Y(Sn),g,M,q),K.el=Ae.el,Ee===null&&zf(g,Ae.el),Z&&Qe(Z,M),(je=K.props&&K.props.onVnodeUpdated)&&Qe(()=>_n(je,oe,K,ye),M)}else{let K;const{el:G,props:Z}=y,{bm:oe,m:ye,parent:Ee}=g,je=Jt(y);if(ht(g,!1),oe&&Kt(oe),!je&&(K=Z&&Z.onVnodeBeforeMount)&&_n(K,Ee,y),ht(g,!0),G&&ce){const Ae=()=>{g.subTree=yo(g),ce(G,g.subTree,g,M,null)};je?y.type.__asyncLoader().then(()=>!g.isUnmounted&&Ae()):Ae()}else{const Ae=g.subTree=yo(g);_(null,Ae,x,P,g,M,q),y.el=Ae.el}if(ye&&Qe(ye,M),!je&&(K=Z&&Z.onVnodeMounted)){const Ae=y;Qe(()=>_n(K,Ee,Ae),M)}(y.shapeFlag&256||Ee&&Jt(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&g.a&&Qe(g.a,M),g.isMounted=!0,y=x=P=null}},N=g.effect=new Vi(R,()=>iu(T),g.scope),T=g.update=()=>N.run();T.id=g.uid,ht(g,!0),T()},J=(g,y,x)=>{y.component=g;const P=g.vnode.props;g.vnode=y,g.next=null,um(g,y.props,P,x),fm(g,y.children,x),rs(),eo(void 0,g.update),ls()},he=(g,y,x,P,M,q,V,R,N=!1)=>{const T=g&&g.children,K=g?g.shapeFlag:0,G=y.children,{patchFlag:Z,shapeFlag:oe}=y;if(Z>0){if(Z&128){Je(T,G,x,P,M,q,V,R,N);return}else if(Z&256){In(T,G,x,P,M,q,V,R,N);return}}oe&8?(K&16&&I(T,M,q),G!==T&&d(x,G)):K&16?oe&16?Je(T,G,x,P,M,q,V,R,N):I(T,M,q,!0):(K&8&&d(x,""),oe&16&&pe(G,x,P,M,q,V,R,N))},In=(g,y,x,P,M,q,V,R,N)=>{g=g||Gt,y=y||Gt;const T=g.length,K=y.length,G=Math.min(T,K);let Z;for(Z=0;Z<G;Z++){const oe=y[Z]=N?et(y[Z]):qn(y[Z]);_(g[Z],oe,x,null,M,q,V,R,N)}T>K?I(g,M,q,!0,!1,G):pe(y,x,P,M,q,V,R,N,G)},Je=(g,y,x,P,M,q,V,R,N)=>{let T=0;const K=y.length;let G=g.length-1,Z=K-1;for(;T<=G&&T<=Z;){const oe=g[T],ye=y[T]=N?et(y[T]):qn(y[T]);if(hs(oe,ye))_(oe,ye,x,null,M,q,V,R,N);else break;T++}for(;T<=G&&T<=Z;){const oe=g[G],ye=y[Z]=N?et(y[Z]):qn(y[Z]);if(hs(oe,ye))_(oe,ye,x,null,M,q,V,R,N);else break;G--,Z--}if(T>G){if(T<=Z){const oe=Z+1,ye=oe<K?y[oe].el:P;for(;T<=Z;)_(null,y[T]=N?et(y[T]):qn(y[T]),x,ye,M,q,V,R,N),T++}}else if(T>Z)for(;T<=G;)on(g[T],M,q,!0),T++;else{const oe=T,ye=T,Ee=new Map;for(T=ye;T<=Z;T++){const cn=y[T]=N?et(y[T]):qn(y[T]);cn.key!=null&&Ee.set(cn.key,T)}let je,Ae=0;const Sn=Z-ye+1;let Ft=!1,$r=0;const ms=new Array(Sn);for(T=0;T<Sn;T++)ms[T]=0;for(T=oe;T<=G;T++){const cn=g[T];if(Ae>=Sn){on(cn,M,q,!0);continue}let Rn;if(cn.key!=null)Rn=Ee.get(cn.key);else for(je=ye;je<=Z;je++)if(ms[je-ye]===0&&hs(cn,y[je])){Rn=je;break}Rn===void 0?on(cn,M,q,!0):(ms[Rn-ye]=T+1,Rn>=$r?$r=Rn:Ft=!0,_(cn,y[Rn],x,null,M,q,V,R,N),Ae++)}const Mr=Ft?ym(ms):Gt;for(je=Mr.length-1,T=Sn-1;T>=0;T--){const cn=ye+T,Rn=y[cn],Pr=cn+1<K?y[cn+1].el:P;ms[T]===0?_(null,Rn,x,Pr,M,q,V,R,N):Ft&&(je<0||T!==Mr[je]?kn(Rn,x,Pr,2):je--)}}},kn=(g,y,x,P,M=null)=>{const{el:q,type:V,transition:R,children:N,shapeFlag:T}=g;if(T&6){kn(g.component.subTree,y,x,P);return}if(T&128){g.suspense.move(y,x,P);return}if(T&64){V.move(g,y,x,Pe);return}if(V===Se){o(q,y,x);for(let G=0;G<N.length;G++)kn(N[G],y,x,P);o(g.anchor,y,x);return}if(V===bo){E(g,y,x);return}if(P!==2&&T&1&&R)if(P===0)R.beforeEnter(q),o(q,y,x),Qe(()=>R.enter(q),M);else{const{leave:G,delayLeave:Z,afterLeave:oe}=R,ye=()=>o(q,y,x),Ee=()=>{G(q,()=>{ye(),oe&&oe()})};Z?Z(q,ye,Ee):Ee()}else o(q,y,x)},on=(g,y,x,P=!1,M=!1)=>{const{type:q,props:V,ref:R,children:N,dynamicChildren:T,shapeFlag:K,patchFlag:G,dirs:Z}=g;if(R!=null&&si(R,null,x,g,!0),K&256){y.ctx.deactivate(g);return}const oe=K&1&&Z,ye=!Jt(g);let Ee;if(ye&&(Ee=V&&V.onVnodeBeforeUnmount)&&_n(Ee,y,g),K&6)U(g.component,x,P);else{if(K&128){g.suspense.unmount(x,P);return}oe&&mt(g,null,y,"beforeUnmount"),K&64?g.type.remove(g,y,x,M,Pe,P):T&&(q!==Se||G>0&&G&64)?I(T,y,x,!1,!0):(q===Se&&G&384||!M&&K&16)&&I(N,y,x),P&&qt(g)}(ye&&(Ee=V&&V.onVnodeUnmounted)||oe)&&Qe(()=>{Ee&&_n(Ee,y,g),oe&&mt(g,null,y,"unmounted")},x)},qt=g=>{const{type:y,el:x,anchor:P,transition:M}=g;if(y===Se){$(x,P);return}if(y===bo){F(g);return}const q=()=>{i(x),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(g.shapeFlag&1&&M&&!M.persisted){const{leave:V,delayLeave:R}=M,N=()=>V(x,q);R?R(g.el,q,N):N()}else q()},$=(g,y)=>{let x;for(;g!==y;)x=f(g),i(g),g=x;i(y)},U=(g,y,x)=>{const{bum:P,scope:M,update:q,subTree:V,um:R}=g;P&&Kt(P),M.stop(),q&&(q.active=!1,on(V,g,y,x)),R&&Qe(R,y),Qe(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},I=(g,y,x,P=!1,M=!1,q=0)=>{for(let V=q;V<g.length;V++)on(g[V],y,x,P,M)},Y=g=>g.shapeFlag&6?Y(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),ke=(g,y,x)=>{g==null?y._vnode&&on(y._vnode,null,null,!0):_(y._vnode||null,g,y,null,null,null,x),cu(),y._vnode=g},Pe={p:_,um:on,m:kn,r:qt,mt:Oe,mc:pe,pc:he,pbc:ve,n:Y,o:e};let de,ce;return n&&([de,ce]=n(Pe)),{render:ke,hydrate:de,createApp:hm(ke,de)}}function ht({effect:e,update:n},s){e.allowRecurse=n.allowRecurse=s}function er(e,n,s=!1){const o=e.children,i=n.children;if(se(o)&&se(i))for(let r=0;r<o.length;r++){const l=o[r];let c=i[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[r]=et(i[r]),c.el=l.el),s||er(l,c))}}function ym(e){const n=e.slice(),s=[0];let o,i,r,l,c;const u=e.length;for(o=0;o<u;o++){const p=e[o];if(p!==0){if(i=s[s.length-1],e[i]<p){n[o]=i,s.push(o);continue}for(r=0,l=s.length-1;r<l;)c=r+l>>1,e[s[c]]<p?r=c+1:l=c;p<e[s[r]]&&(r>0&&(n[o]=s[r-1]),s[r]=o)}}for(r=s.length,l=s[r-1];r-- >0;)s[r]=l,l=n[l];return s}const km=e=>e.__isTeleport,$s=e=>e&&(e.disabled||e.disabled===""),Jr=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,ai=(e,n)=>{const s=e&&e.to;return Fe(s)?n?n(s):null:s},_m={__isTeleport:!0,process(e,n,s,o,i,r,l,c,u,p){const{mc:d,pc:m,pbc:f,o:{insert:h,querySelector:v,createText:w,createComment:_}}=p,O=$s(n.props);let{shapeFlag:C,children:S,dynamicChildren:E}=n;if(e==null){const F=n.el=w(""),A=n.anchor=w("");h(F,s,o),h(A,s,o);const W=n.target=ai(n.props,v),ie=n.targetAnchor=w("");W&&(h(ie,W),l=l||Jr(W));const pe=(me,ve)=>{C&16&&d(S,me,ve,i,r,l,c,u)};O?pe(s,A):W&&pe(W,ie)}else{n.el=e.el;const F=n.anchor=e.anchor,A=n.target=e.target,W=n.targetAnchor=e.targetAnchor,ie=$s(e.props),pe=ie?s:A,me=ie?F:W;if(l=l||Jr(A),E?(f(e.dynamicChildren,E,pe,i,r,l,c),er(e,n,!0)):u||m(e,n,pe,me,i,r,l,c,!1),O)ie||va(n,s,F,p,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const ve=n.target=ai(n.props,v);ve&&va(n,ve,null,p,0)}else ie&&va(n,A,W,p,1)}},remove(e,n,s,o,{um:i,o:{remove:r}},l){const{shapeFlag:c,children:u,anchor:p,targetAnchor:d,target:m,props:f}=e;if(m&&r(d),(l||!$s(f))&&(r(p),c&16))for(let h=0;h<u.length;h++){const v=u[h];i(v,n,s,!0,!!v.dynamicChildren)}},move:va,hydrate:bm};function va(e,n,s,{o:{insert:o},m:i},r=2){r===0&&o(e.targetAnchor,n,s);const{el:l,anchor:c,shapeFlag:u,children:p,props:d}=e,m=r===2;if(m&&o(l,n,s),(!m||$s(d))&&u&16)for(let f=0;f<p.length;f++)i(p[f],n,s,2);m&&o(c,n,s)}function bm(e,n,s,o,i,r,{o:{nextSibling:l,parentNode:c,querySelector:u}},p){const d=n.target=ai(n.props,u);if(d){const m=d._lpa||d.firstChild;if(n.shapeFlag&16)if($s(n.props))n.anchor=p(l(e),n,c(e),s,o,i,r),n.targetAnchor=m;else{n.anchor=l(e);let f=m;for(;f;)if(f=l(f),f&&f.nodeType===8&&f.data==="teleport anchor"){n.targetAnchor=f,d._lpa=n.targetAnchor&&l(n.targetAnchor);break}p(m,n,d,s,o,i,r)}}return n.anchor&&l(n.anchor)}const wm=_m,Se=Symbol(void 0),nr=Symbol(void 0),ut=Symbol(void 0),bo=Symbol(void 0),Ms=[];let $n=null;function b(e=!1){Ms.push($n=e?null:[])}function xm(){Ms.pop(),$n=Ms[Ms.length-1]||null}let Ws=1;function Xr(e){Ws+=e}function Mu(e){return e.dynamicChildren=Ws>0?$n||Gt:null,xm(),Ws>0&&$n&&$n.push(e),e}function B(e,n,s,o,i,r){return Mu(t(e,n,s,o,i,r,!0))}function H(e,n,s,o,i){return Mu(X(e,n,s,o,i,!0))}function ts(e){return e?e.__v_isVNode===!0:!1}function hs(e,n){return e.type===n.type&&e.key===n.key}const io="__vInternal",Pu=({key:e})=>e!=null?e:null,Ca=({ref:e,ref_key:n,ref_for:s})=>e!=null?Fe(e)||be(e)||le(e)?{i:Ye,r:e,k:n,f:!!s}:e:null;function t(e,n=null,s=null,o=0,i=null,r=e===Se?0:1,l=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&Pu(n),ref:n&&Ca(n),scopeId:to,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(tr(u,s),r&128&&e.normalize(u)):s&&(u.shapeFlag|=Fe(s)?8:16),Ws>0&&!l&&$n&&(u.patchFlag>0||r&6)&&u.patchFlag!==32&&$n.push(u),u}const X=Cm;function Cm(e,n=null,s=null,o=0,i=null,r=!1){if((!e||e===nm)&&(e=ut),ts(e)){const c=Tt(e,n,!0);return s&&tr(c,s),Ws>0&&!r&&$n&&(c.shapeFlag&6?$n[$n.indexOf(e)]=c:$n.push(c)),c.patchFlag|=-2,c}if(Tm(e)&&(e=e.__vccOpts),n){n=ne(n);let{class:c,style:u}=n;c&&!Fe(c)&&(n.class=Ie(c)),ze(u)&&(tu(u)&&!se(u)&&(u=sn({},u)),n.style=Ue(u))}const l=Fe(e)?1:du(e)?128:km(e)?64:ze(e)?4:le(e)?2:0;return t(e,n,s,o,i,l,r,!0)}function ne(e){return e?tu(e)||io in e?sn({},e):e:null}function Tt(e,n,s=!1){const{props:o,ref:i,patchFlag:r,children:l}=e,c=n?Us(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Pu(c),ref:n&&n.ref?s&&i?se(i)?i.concat(Ca(n)):[i,Ca(n)]:Ca(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Se?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Tt(e.ssContent),ssFallback:e.ssFallback&&Tt(e.ssFallback),el:e.el,anchor:e.anchor}}function a(e=" ",n=0){return X(nr,null,e,n)}function fe(e="",n=!1){return n?(b(),H(ut,null,e)):X(ut,null,e)}function qn(e){return e==null||typeof e=="boolean"?X(ut):se(e)?X(Se,null,e.slice()):typeof e=="object"?et(e):X(nr,null,String(e))}function et(e){return e.el===null||e.memo?e:Tt(e)}function tr(e,n){let s=0;const{shapeFlag:o}=e;if(n==null)n=null;else if(se(n))s=16;else if(typeof n=="object")if(o&65){const i=n.default;i&&(i._c&&(i._d=!1),tr(e,i()),i._c&&(i._d=!0));return}else{s=32;const i=n._;!i&&!(io in n)?n._ctx=Ye:i===3&&Ye&&(Ye.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else le(n)?(n={default:n,_ctx:Ye},s=32):(n=String(n),o&64?(s=16,n=[a(n)]):s=8);e.children=n,e.shapeFlag|=s}function Us(...e){const n={};for(let s=0;s<e.length;s++){const o=e[s];for(const i in o)if(i==="class")n.class!==o.class&&(n.class=Ie([n.class,o.class]));else if(i==="style")n.style=Ue([n.style,o.style]);else if(Ua(i)){const r=n[i],l=o[i];l&&r!==l&&!(se(r)&&r.includes(l))&&(n[i]=r?[].concat(r,l):l)}else i!==""&&(n[i]=o[i])}return n}function _n(e,n,s,o=null){Pn(e,n,7,[s,o])}const Sm=$u();let Om=0;function Em(e,n,s){const o=e.type,i=(n?n.appContext:e.appContext)||Sm,r={uid:Om++,vnode:e,type:o,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Qc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Su(o,i),emitsOptions:pu(o,i),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:o.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=n?n.root:r,r.emit=Nf.bind(null,r),e.ce&&e.ce(r),r}let Be=null;const Lt=()=>Be||Ye,ss=e=>{Be=e,e.scope.on()},jt=()=>{Be&&Be.scope.off(),Be=null};function Tu(e){return e.vnode.shapeFlag&4}let Gs=!1;function jm(e,n=!1){Gs=n;const{props:s,children:o}=e.vnode,i=Tu(e);cm(e,s,i,n),dm(e,o);const r=i?$m(e,n):void 0;return Gs=!1,r}function $m(e,n){const s=e.type;e.accessCache=Object.create(null),e.proxy=Ja(new Proxy(e.ctx,sm));const{setup:o}=s;if(o){const i=e.setupContext=o.length>1?Pm(e):null;ss(e),rs();const r=at(o,e,0,[e.props,i]);if(ls(),jt(),Vc(r)){if(r.then(jt,jt),n)return r.then(l=>{el(e,l,n)}).catch(l=>{Xa(l,e,0)});e.asyncDep=r}else el(e,r,n)}else Au(e,n)}function el(e,n,s){le(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:ze(n)&&(e.setupState=au(n)),Au(e,s)}let nl;function Au(e,n,s){const o=e.type;if(!e.render){if(!n&&nl&&!o.render){const i=o.template;if(i){const{isCustomElement:r,compilerOptions:l}=e.appContext.config,{delimiters:c,compilerOptions:u}=o,p=sn(sn({isCustomElement:r,delimiters:c},l),u);o.render=nl(i,p)}}e.render=o.render||Mn}ss(e),rs(),am(e),ls(),jt()}function Mm(e){return new Proxy(e.attrs,{get(n,s){return yn(e,"get","$attrs"),n[s]}})}function Pm(e){const n=o=>{e.exposed=o||{}};let s;return{get attrs(){return s||(s=Mm(e))},slots:e.slots,emit:e.emit,expose:n}}function ro(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(au(Ja(e.exposed)),{get(n,s){if(s in n)return n[s];if(s in La)return La[s](e)}}))}function oi(e){return le(e)&&e.displayName||e.name}function Tm(e){return le(e)&&"__vccOpts"in e}const j=(e,n)=>Af(e,n,Gs);function Tn(e,n,s){const o=arguments.length;return o===2?ze(n)&&!se(n)?ts(n)?X(e,null,[n]):X(e,n):X(e,null,n):(o>3?s=Array.prototype.slice.call(arguments,2):o===3&&ts(s)&&(s=[s]),X(e,n,s))}const Am="3.2.36",Lm="http://www.w3.org/2000/svg",_t=typeof document!="undefined"?document:null,tl=_t&&_t.createElement("template"),Im={insert:(e,n,s)=>{n.insertBefore(e,s||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,s,o)=>{const i=n?_t.createElementNS(Lm,e):_t.createElement(e,s?{is:s}:void 0);return e==="select"&&o&&o.multiple!=null&&i.setAttribute("multiple",o.multiple),i},createText:e=>_t.createTextNode(e),createComment:e=>_t.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_t.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},cloneNode(e){const n=e.cloneNode(!0);return"_value"in e&&(n._value=e._value),n},insertStaticContent(e,n,s,o,i,r){const l=s?s.previousSibling:n.lastChild;if(i&&(i===r||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),s),!(i===r||!(i=i.nextSibling)););else{tl.innerHTML=o?`<svg>${e}</svg>`:e;const c=tl.content;if(o){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}n.insertBefore(c,s)}return[l?l.nextSibling:n.firstChild,s?s.previousSibling:n.lastChild]}};function Rm(e,n,s){const o=e._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):s?e.setAttribute("class",n):e.className=n}function qm(e,n,s){const o=e.style,i=Fe(s);if(s&&!i){for(const r in s)ii(o,r,s[r]);if(n&&!Fe(n))for(const r in n)s[r]==null&&ii(o,r,"")}else{const r=o.display;i?n!==s&&(o.cssText=s):n&&e.removeAttribute("style"),"_vod"in e&&(o.display=r)}}const sl=/\s*!important$/;function ii(e,n,s){if(se(s))s.forEach(o=>ii(e,n,o));else if(s==null&&(s=""),n.startsWith("--"))e.setProperty(n,s);else{const o=Fm(e,n);sl.test(s)?e.setProperty(At(o),s.replace(sl,""),"important"):e[o]=s}}const al=["Webkit","Moz","ms"],wo={};function Fm(e,n){const s=wo[n];if(s)return s;let o=Hn(n);if(o!=="filter"&&o in e)return wo[n]=o;o=Ka(o);for(let i=0;i<al.length;i++){const r=al[i]+o;if(r in e)return wo[n]=r}return n}const ol="http://www.w3.org/1999/xlink";function Nm(e,n,s,o,i){if(o&&n.startsWith("xlink:"))s==null?e.removeAttributeNS(ol,n.slice(6,n.length)):e.setAttributeNS(ol,n,s);else{const r=qd(n);s==null||r&&!Nc(s)?e.removeAttribute(n):e.setAttribute(n,r?"":s)}}function Dm(e,n,s,o,i,r,l){if(n==="innerHTML"||n==="textContent"){o&&l(o,i,r),e[n]=s==null?"":s;return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=s;const u=s==null?"":s;(e.value!==u||e.tagName==="OPTION")&&(e.value=u),s==null&&e.removeAttribute(n);return}let c=!1;if(s===""||s==null){const u=typeof e[n];u==="boolean"?s=Nc(s):s==null&&u==="string"?(s="",c=!0):u==="number"&&(s=0,c=!0)}try{e[n]=s}catch{}c&&e.removeAttribute(n)}const[Lu,Hm]=(()=>{let e=Date.now,n=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const s=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(s&&Number(s[1])<=53)}return[e,n]})();let ri=0;const Vm=Promise.resolve(),zm=()=>{ri=0},Bm=()=>ri||(Vm.then(zm),ri=Lu());function Bt(e,n,s,o){e.addEventListener(n,s,o)}function Qm(e,n,s,o){e.removeEventListener(n,s,o)}function Wm(e,n,s,o,i=null){const r=e._vei||(e._vei={}),l=r[n];if(o&&l)l.value=o;else{const[c,u]=Um(n);if(o){const p=r[n]=Gm(o,i);Bt(e,c,p,u)}else l&&(Qm(e,c,l,u),r[n]=void 0)}}const il=/(?:Once|Passive|Capture)$/;function Um(e){let n;if(il.test(e)){n={};let s;for(;s=e.match(il);)e=e.slice(0,e.length-s[0].length),n[s[0].toLowerCase()]=!0}return[At(e.slice(2)),n]}function Gm(e,n){const s=o=>{const i=o.timeStamp||Lu();(Hm||i>=s.attached-1)&&Pn(Ym(o,s.value),n,5,[o])};return s.value=e,s.attached=Bm(),s}function Ym(e,n){if(se(n)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},n.map(o=>i=>!i._stopped&&o&&o(i))}else return n}const rl=/^on[a-z]/,Km=(e,n,s,o,i=!1,r,l,c,u)=>{n==="class"?Rm(e,o,i):n==="style"?qm(e,s,o):Ua(n)?qi(n)||Wm(e,n,s,o,l):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Zm(e,n,o,i))?Dm(e,n,o,r,l,c,u):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),Nm(e,n,o,i))};function Zm(e,n,s,o){return o?!!(n==="innerHTML"||n==="textContent"||n in e&&rl.test(n)&&le(s)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||rl.test(n)&&Fe(s)?!1:n in e}const ll=e=>{const n=e.props["onUpdate:modelValue"]||!1;return se(n)?s=>Kt(n,s):n};function Jm(e){e.target.composing=!0}function cl(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Xm={created(e,{modifiers:{lazy:n,trim:s,number:o}},i){e._assign=ll(i);const r=o||i.props&&i.props.type==="number";Bt(e,n?"change":"input",l=>{if(l.target.composing)return;let c=e.value;s&&(c=c.trim()),r&&(c=Bo(c)),e._assign(c)}),s&&Bt(e,"change",()=>{e.value=e.value.trim()}),n||(Bt(e,"compositionstart",Jm),Bt(e,"compositionend",cl),Bt(e,"change",cl))},mounted(e,{value:n}){e.value=n==null?"":n},beforeUpdate(e,{value:n,modifiers:{lazy:s,trim:o,number:i}},r){if(e._assign=ll(r),e.composing||document.activeElement===e&&e.type!=="range"&&(s||o&&e.value.trim()===n||(i||e.type==="number")&&Bo(e.value)===n))return;const l=n==null?"":n;e.value!==l&&(e.value=l)}},eh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ul=(e,n)=>s=>{if(!("key"in s))return;const o=At(s.key);if(n.some(i=>i===o||eh[i]===o))return e(s)},Iu={beforeMount(e,{value:n},{transition:s}){e._vod=e.style.display==="none"?"":e.style.display,s&&n?s.beforeEnter(e):gs(e,n)},mounted(e,{value:n},{transition:s}){s&&n&&s.enter(e)},updated(e,{value:n,oldValue:s},{transition:o}){!n!=!s&&(o?n?(o.beforeEnter(e),gs(e,!0),o.enter(e)):o.leave(e,()=>{gs(e,!1)}):gs(e,n))},beforeUnmount(e,{value:n}){gs(e,n)}};function gs(e,n){e.style.display=n?e._vod:"none"}const nh=sn({patchProp:Km},Im);let pl;function th(){return pl||(pl=gm(nh))}const sh=(...e)=>{const n=th().createApp(...e),{mount:s}=n;return n.mount=o=>{const i=ah(o);if(!i)return;const r=n._component;!le(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const l=s(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),l},n};function ah(e){return Fe(e)?document.querySelector(e):e}var oh=Object.defineProperty,dl=Object.getOwnPropertySymbols,ih=Object.prototype.hasOwnProperty,rh=Object.prototype.propertyIsEnumerable,fl=(e,n,s)=>n in e?oh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,lh=(e,n)=>{for(var s in n||(n={}))ih.call(n,s)&&fl(e,s,n[s]);if(dl)for(var s of dl(n))rh.call(n,s)&&fl(e,s,n[s]);return e},Ru="usehead",ml="head:count",xo="data-head-attrs",ch=(e,n,s)=>{const o=s.createElement(e);for(const i of Object.keys(n)){let r=n[i];i==="key"||r===!1||(i==="children"?o.textContent=r:o.setAttribute(i,r))}return o};function uh(e,n){if(e instanceof HTMLElement&&n instanceof HTMLElement){const s=n.getAttribute("nonce");if(s&&!e.getAttribute("nonce")){const o=n.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=s,s===e.nonce&&e.isEqualNode(o)}}return e.isEqualNode(n)}var ph=e=>{const n=["key","id","name","property"];for(const s of n){const o=typeof e.getAttribute=="function"?e.hasAttribute(s)?e.getAttribute(s):void 0:e[s];if(o!==void 0)return{name:s,value:o}}},dh=()=>{const e=L(Ru);if(!e)throw new Error("You may forget to apply app.use(head)");return e},fh=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],mh=e=>{const n=[];for(const s of Object.keys(e))if(e[s]!=null){if(s==="title")n.push({tag:s,props:{children:e[s]}});else if(s==="base")n.push({tag:s,props:lh({key:"default"},e[s])});else if(fh.includes(s)){const o=e[s];Array.isArray(o)?o.forEach(i=>{n.push({tag:s,props:i})}):o&&n.push({tag:s,props:o})}}return n},hl=(e,n)=>{const s=e.getAttribute(xo);if(s)for(const i of s.split(","))i in n||e.removeAttribute(i);const o=[];for(const i in n){const r=n[i];r!=null&&(r===!1?e.removeAttribute(i):e.setAttribute(i,r),o.push(i))}o.length?e.setAttribute(xo,o.join(",")):e.removeAttribute(xo)},hh=(e=window.document,n,s)=>{var o;const i=e.head;let r=i.querySelector(`meta[name="${ml}"]`);const l=r?Number(r.getAttribute("content")):0,c=[];if(r)for(let p=0,d=r.previousElementSibling;p<l;p++,d=(d==null?void 0:d.previousElementSibling)||null)((o=d==null?void 0:d.tagName)==null?void 0:o.toLowerCase())===n&&c.push(d);else r=e.createElement("meta"),r.setAttribute("name",ml),r.setAttribute("content","0"),i.append(r);let u=s.map(p=>ch(p.tag,p.props,e));u=u.filter(p=>{for(let d=0;d<c.length;d++){const m=c[d];if(uh(m,p))return c.splice(d,1),!1}return!0}),c.forEach(p=>{var d;return(d=p.parentNode)==null?void 0:d.removeChild(p)}),u.forEach(p=>{i.insertBefore(p,r)}),r.setAttribute("content",""+(l-c.length+u.length))},gh=()=>{let e=[],n=new Set;const s={install(o){o.config.globalProperties.$head=s,o.provide(Ru,s)},get headTags(){const o=[];return e.forEach(i=>{mh(i.value).forEach(l=>{if(l.tag==="meta"||l.tag==="base"||l.tag==="script"){const c=ph(l.props);if(c){let u=-1;for(let p=0;p<o.length;p++){const d=o[p],m=d.props[c.name],f=l.props[c.name];if(d.tag===l.tag&&m===f){u=p;break}}u!==-1&&o.splice(u,1)}}o.push(l)})}),o},addHeadObjs(o){e.push(o)},removeHeadObjs(o){e=e.filter(i=>i!==o)},updateDOM(o=window.document){let i,r={},l={};const c={};for(const p of s.headTags){if(p.tag==="title"){i=p.props.children;continue}if(p.tag==="htmlAttrs"){Object.assign(r,p.props);continue}if(p.tag==="bodyAttrs"){Object.assign(l,p.props);continue}c[p.tag]=c[p.tag]||[],c[p.tag].push(p)}i!==void 0&&(o.title=i),hl(o.documentElement,r),hl(o.body,l);const u=new Set([...Object.keys(c),...n]);for(const p of u)hh(o,p,c[p]||[]);n.clear(),Object.keys(c).forEach(p=>n.add(p))}};return s},vh=typeof window!="undefined",yh=e=>{const n=z(e),s=dh();s.addHeadObjs(n),vh&&(aa(()=>{s.updateDOM()}),ao(()=>{s.removeHeadObjs(n),s.updateDOM()}))};const Ps=Symbol("v-click-clicks"),bt=Symbol("v-click-clicks-elements"),li=Symbol("v-click-clicks-order-map"),Ts=Symbol("v-click-clicks-disabled"),qu=Symbol("slidev-slide-scale"),D=Symbol("slidev-slidev-context"),kh=Symbol("slidev-route"),_h=Symbol("slidev-slide-context"),kt="slidev-vclick-target",Co="slidev-vclick-hidden",bh="slidev-vclick-fade",So="slidev-vclick-hidden-explicitly",vs="slidev-vclick-current",ya="slidev-vclick-prior";function ci(e,n){if(!e)return!1;const s=e.indexOf(n);return s>=0?(e.splice(s,1),!0):!1}function wh(...e){let n,s,o;e.length===1?(n=0,o=1,[s]=e):[n,s,o=1]=e;const i=[];let r=n;for(;r<s;)i.push(r),r+=o||1;return i}function xh(e){return e!=null}function Ch(e,n){return Object.fromEntries(Object.entries(e).map(([s,o])=>n(s,o)).filter(xh))}var Ct={theme:"seriph",title:"Community Driven Coding Guidelines for QML",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!0,info:!1,highlighter:"prism",lineNumbers:!1,colorSchema:"auto",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{primary:"#485a62"},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!1,weights:["200","400","600"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",record:"dev",number:!0,class:"text-center",background:"https://unsplash.com/photos/cAtzHUz7Z8g/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fGNvbW11bml0eSUyMHdvcmt8ZW58MHx8fHwxNjU0NDY3MTQ3&force=true&w=2400"};const Ce=Ct;var qc;const ot=(qc=Ce.aspectRatio)!=null?qc:16/9;var Fc;const $t=(Fc=Ce.canvasWidth)!=null?Fc:980,Fu=Math.round($t/ot),Nu=j(()=>Ch(Ce.themeConfig||{},(e,n)=>[`--slidev-theme-${e}`,n]));function Cn(e,n,s){Object.defineProperty(e,n,{value:s,writable:!0,enumerable:!1})}const It=qe({page:0,clicks:0});let Sh=[],Oh=[];Cn(It,"$syncUp",!0);Cn(It,"$syncDown",!0);Cn(It,"$paused",!1);Cn(It,"$onSet",e=>Sh.push(e));Cn(It,"$onPatch",e=>Oh.push(e));Cn(It,"$patch",async()=>!1);function Du(e,n,s=!1){const o=[];let i=!1,r=!1,l,c;const u=qe(n);function p(h){o.push(h)}function d(h,v){clearTimeout(l),i=!0,u[h]=v,l=setTimeout(()=>i=!1,0)}function m(h){i||(clearTimeout(c),r=!0,Object.entries(h).forEach(([v,w])=>{u[v]=w}),c=setTimeout(()=>r=!1,0))}function f(h){let v;s?s&&window.addEventListener("storage",_=>{_&&_.key===h&&_.newValue&&m(JSON.parse(_.newValue))}):(v=new BroadcastChannel(h),v.addEventListener("message",_=>m(_.data)));function w(){!s&&v&&!r?v.postMessage(we(u)):s&&!r&&window.localStorage.setItem(h,JSON.stringify(u)),i||o.forEach(_=>_(u))}if(ue(u,w,{deep:!0}),s){const _=window.localStorage.getItem(h);_&&m(JSON.parse(_))}}return{init:f,onPatch:p,patch:d,state:u}}const{init:Eh,onPatch:jh,patch:gl,state:Oo}=Du(It,{page:1,clicks:0}),Rt=qe({});let $h=[],Mh=[];Cn(Rt,"$syncUp",!0);Cn(Rt,"$syncDown",!0);Cn(Rt,"$paused",!1);Cn(Rt,"$onSet",e=>$h.push(e));Cn(Rt,"$onPatch",e=>Mh.push(e));Cn(Rt,"$patch",async()=>!1);const{init:Ph,onPatch:Th,patch:Hu,state:Ra}=Du(Rt,{},!1),Ah="modulepreload",vl={},Lh="/qtdevcon-community-driven-coding-guidelines/",us=function(n,s){return!s||s.length===0?n():Promise.all(s.map(o=>{if(o=`${Lh}${o}`,o in vl)return;vl[o]=!0;const i=o.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":Ah,i||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),i)return new Promise((c,u)=>{l.addEventListener("load",c),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n())};function rn(e,n,s){return Array.isArray(e)?(e.length=Math.max(e.length,n),e.splice(n,1,s),s):(e[n]=s,s)}function Ih(e,n){if(Array.isArray(e)){e.splice(n,1);return}delete e[n]}function pt(e){return Kd()?(Zd(e),!0):!1}function De(...e){return j(()=>e.every(n=>k(n)))}function pn(e){return j(()=>!k(e))}function Rh(e){if(!be(e))return qe(e);const n=new Proxy({},{get(s,o,i){return k(Reflect.get(e.value,o,i))},set(s,o,i){return be(e.value[o])&&!be(i)?e.value[o].value=i:e.value[o]=i,!0},deleteProperty(s,o){return Reflect.deleteProperty(e.value,o)},has(s,o){return Reflect.has(e.value,o)},ownKeys(){return Object.keys(e.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return qe(n)}var yl;const xn=typeof window!="undefined",qh=e=>typeof e!="undefined",Fh=Object.prototype.toString,Nh=e=>typeof e=="number",Vu=e=>typeof e=="string",qa=e=>Fh.call(e)==="[object Object]",ui=()=>+Date.now(),it=()=>{};xn&&((yl=window==null?void 0:window.navigator)==null?void 0:yl.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Dh(e,n){function s(...o){e(()=>n.apply(this,o),{fn:n,thisArg:this,args:o})}return s}const zu=e=>e();function Hh(e=zu){const n=z(!0);function s(){n.value=!1}function o(){n.value=!0}return{isActive:n,pause:s,resume:o,eventFilter:(...r)=>{n.value&&e(...r)}}}function Vh(e,n){var s;if(typeof e=="number")return e+n;const o=((s=e.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:s[0])||"",i=e.slice(o.length),r=parseFloat(o)+n;return Number.isNaN(r)?e:r+i}var zh=Object.defineProperty,Bh=Object.defineProperties,Qh=Object.getOwnPropertyDescriptors,kl=Object.getOwnPropertySymbols,Wh=Object.prototype.hasOwnProperty,Uh=Object.prototype.propertyIsEnumerable,_l=(e,n,s)=>n in e?zh(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Gh=(e,n)=>{for(var s in n||(n={}))Wh.call(n,s)&&_l(e,s,n[s]);if(kl)for(var s of kl(n))Uh.call(n,s)&&_l(e,s,n[s]);return e},Yh=(e,n)=>Bh(e,Qh(n));function Kh(e){if(!be(e))return $f(e);const n=Array.isArray(e.value)?new Array(e.value.length):{};for(const s in e.value)n[s]=jf(()=>({get(){return e.value[s]},set(o){if(Array.isArray(e.value)){const i=[...e.value];i[s]=o,e.value=i}else{const i=Yh(Gh({},e.value),{[s]:o});Object.setPrototypeOf(i,e.value),e.value=i}}}));return n}function Zh(e,n=!0){Lt()?yu(e):n?e():We(e)}function Jh(e,n=!0){Lt()?cs(e):n?e():We(e)}function sr(e){Lt()&&oo(e)}function Xh(e,n=1e3,s={}){const{immediate:o=!0,immediateCallback:i=!1}=s;let r=null;const l=z(!1);function c(){r&&(clearInterval(r),r=null)}function u(){l.value=!1,c()}function p(){k(n)<=0||(l.value=!0,i&&e(),c(),r=setInterval(e,k(n)))}if(o&&xn&&p(),be(n)){const d=ue(n,()=>{o&&xn&&p()});pt(d)}return pt(u),{isActive:l,pause:u,resume:p}}function Bu(e=!1,n={}){const{truthyValue:s=!0,falsyValue:o=!1}=n,i=be(e),r=z(e);function l(c){return arguments.length?(r.value=c,r.value):(r.value=r.value===k(s)?k(o):k(s),r.value)}return i?l:[r,l]}var bl=Object.getOwnPropertySymbols,eg=Object.prototype.hasOwnProperty,ng=Object.prototype.propertyIsEnumerable,tg=(e,n)=>{var s={};for(var o in e)eg.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&bl)for(var o of bl(e))n.indexOf(o)<0&&ng.call(e,o)&&(s[o]=e[o]);return s};function sg(e,n,s={}){const o=s,{eventFilter:i=zu}=o,r=tg(o,["eventFilter"]);return ue(e,Dh(i,n),r)}function ag(e,n,s){const o=ue(e,(...i)=>(We(()=>o()),n(...i)),s)}var og=Object.defineProperty,ig=Object.defineProperties,rg=Object.getOwnPropertyDescriptors,Fa=Object.getOwnPropertySymbols,Qu=Object.prototype.hasOwnProperty,Wu=Object.prototype.propertyIsEnumerable,wl=(e,n,s)=>n in e?og(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,lg=(e,n)=>{for(var s in n||(n={}))Qu.call(n,s)&&wl(e,s,n[s]);if(Fa)for(var s of Fa(n))Wu.call(n,s)&&wl(e,s,n[s]);return e},cg=(e,n)=>ig(e,rg(n)),ug=(e,n)=>{var s={};for(var o in e)Qu.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Fa)for(var o of Fa(e))n.indexOf(o)<0&&Wu.call(e,o)&&(s[o]=e[o]);return s};function pg(e,n,s={}){const o=s,{eventFilter:i}=o,r=ug(o,["eventFilter"]),{eventFilter:l,pause:c,resume:u,isActive:p}=Hh(i);return{stop:sg(e,n,cg(lg({},r),{eventFilter:l})),pause:c,resume:u,isActive:p}}function ln(e){var n;const s=k(e);return(n=s==null?void 0:s.$el)!=null?n:s}const Ze=xn?window:void 0,dg=xn?window.document:void 0;function Le(...e){let n,s,o,i;if(Vu(e[0])?([s,o,i]=e,n=Ze):[n,s,o,i]=e,!n)return it;let r=it;const l=ue(()=>ln(n),u=>{r(),u&&(u.addEventListener(s,o,i),r=()=>{u.removeEventListener(s,o,i),r=it})},{immediate:!0,flush:"post"}),c=()=>{l(),r()};return pt(c),c}function fg(e,n,s={}){const{window:o=Ze,ignore:i,capture:r=!0}=s;if(!o)return;const l=z(!0);let c;const u=m=>{o.clearTimeout(c);const f=ln(e),h=m.composedPath();!f||f===m.target||h.includes(f)||!l.value||i&&i.length>0&&i.some(v=>{const w=ln(v);return w&&(m.target===w||h.includes(w))})||n(m)},p=[Le(o,"click",u,{passive:!0,capture:r}),Le(o,"pointerdown",m=>{const f=ln(e);l.value=!!f&&!m.composedPath().includes(f)},{passive:!0}),Le(o,"pointerup",m=>{c=o.setTimeout(()=>u(m),50)},{passive:!0})];return()=>p.forEach(m=>m())}const mg=e=>typeof e=="function"?e:typeof e=="string"?n=>n.key===e:Array.isArray(e)?n=>e.includes(n.key):e?()=>!0:()=>!1;function hg(e,n,s={}){const{target:o=Ze,eventName:i="keydown",passive:r=!1}=s,l=mg(e);return Le(o,i,u=>{l(u)&&n(u)},r)}function gg(e={}){const{window:n=Ze}=e,s=z(0);return n&&(Le(n,"blur",()=>s.value+=1,!0),Le(n,"focus",()=>s.value+=1,!0)),j(()=>(s.value,n==null?void 0:n.document.activeElement))}function Sa(e,n={}){const{window:s=Ze}=n,o=Boolean(s&&"matchMedia"in s);let i;const r=z(!1),l=()=>{!o||(i||(i=s.matchMedia(e)),r.value=i.matches)};return Zh(()=>{l(),i&&("addEventListener"in i?i.addEventListener("change",l):i.addListener(l),pt(()=>{"removeEventListener"in i?i.removeEventListener("change",l):i.removeListener(l)}))}),r}const vg={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var yg=Object.defineProperty,xl=Object.getOwnPropertySymbols,kg=Object.prototype.hasOwnProperty,_g=Object.prototype.propertyIsEnumerable,Cl=(e,n,s)=>n in e?yg(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,bg=(e,n)=>{for(var s in n||(n={}))kg.call(n,s)&&Cl(e,s,n[s]);if(xl)for(var s of xl(n))_g.call(n,s)&&Cl(e,s,n[s]);return e};function wg(e,n={}){function s(c,u){let p=e[c];return u!=null&&(p=Vh(p,u)),typeof p=="number"&&(p=`${p}px`),p}const{window:o=Ze}=n;function i(c){return o?o.matchMedia(c).matches:!1}const r=c=>Sa(`(min-width: ${s(c)})`,n),l=Object.keys(e).reduce((c,u)=>(Object.defineProperty(c,u,{get:()=>r(u),enumerable:!0,configurable:!0}),c),{});return bg({greater:r,smaller(c){return Sa(`(max-width: ${s(c,-.1)})`,n)},between(c,u){return Sa(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`,n)},isGreater(c){return i(`(min-width: ${s(c)})`)},isSmaller(c){return i(`(max-width: ${s(c,-.1)})`)},isInBetween(c,u){return i(`(min-width: ${s(c)}) and (max-width: ${s(u,-.1)})`)}},l)}const pi=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},di="__vueuse_ssr_handlers__";pi[di]=pi[di]||{};const xg=pi[di];function Cg(e,n){return xg[e]||n}function Sg(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const Og={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Ln(e,n,s,o={}){var i;const{flush:r="pre",deep:l=!0,listenToStorageChanges:c=!0,writeDefaults:u=!0,shallow:p,window:d=Ze,eventFilter:m,onError:f=A=>{console.error(A)}}=o,h=(p?Vn:z)(n);if(!s)try{s=Cg("getDefaultStorage",()=>{var A;return(A=Ze)==null?void 0:A.localStorage})()}catch(A){f(A)}if(!s)return h;const v=k(n),w=Sg(v),_=(i=o.serializer)!=null?i:Og[w],{pause:O,resume:C}=pg(h,()=>S(h.value),{flush:r,deep:l,eventFilter:m});return d&&c&&Le(d,"storage",F),F(),h;function S(A){try{A==null?s.removeItem(e):s.setItem(e,_.write(A))}catch(W){f(W)}}function E(A){if(!(A&&A.key!==e)){O();try{const W=A?A.newValue:s.getItem(e);return W==null?(u&&v!==null&&s.setItem(e,_.write(v)),v):typeof W!="string"?W:_.read(W)}catch(W){f(W)}finally{C()}}}function F(A){A&&A.key!==e||(h.value=E(A))}}function Eg(e){return Sa("(prefers-color-scheme: dark)",e)}var jg=Object.defineProperty,$g=Object.defineProperties,Mg=Object.getOwnPropertyDescriptors,Sl=Object.getOwnPropertySymbols,Pg=Object.prototype.hasOwnProperty,Tg=Object.prototype.propertyIsEnumerable,Ol=(e,n,s)=>n in e?jg(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Ag=(e,n)=>{for(var s in n||(n={}))Pg.call(n,s)&&Ol(e,s,n[s]);if(Sl)for(var s of Sl(n))Tg.call(n,s)&&Ol(e,s,n[s]);return e},Lg=(e,n)=>$g(e,Mg(n));function WO(e,n={}){var s,o;const i=(s=n.draggingElement)!=null?s:Ze,r=z((o=n.initialValue)!=null?o:{x:0,y:0}),l=z(),c=f=>n.pointerTypes?n.pointerTypes.includes(f.pointerType):!0,u=f=>{k(n.preventDefault)&&f.preventDefault(),k(n.stopPropagation)&&f.stopPropagation()},p=f=>{var h;if(!c(f)||k(n.exact)&&f.target!==k(e))return;const v=k(e).getBoundingClientRect(),w={x:f.pageX-v.left,y:f.pageY-v.top};((h=n.onStart)==null?void 0:h.call(n,w,f))!==!1&&(l.value=w,u(f))},d=f=>{var h;!c(f)||!l.value||(r.value={x:f.pageX-l.value.x,y:f.pageY-l.value.y},(h=n.onMove)==null||h.call(n,r.value,f),u(f))},m=f=>{var h;!c(f)||!l.value||(l.value=void 0,(h=n.onEnd)==null||h.call(n,r.value,f),u(f))};return xn&&(Le(e,"pointerdown",p,!0),Le(i,"pointermove",d,!0),Le(i,"pointerup",m,!0)),Lg(Ag({},Kh(r)),{position:r,isDragging:j(()=>!!l.value),style:j(()=>`left:${r.value.x}px;top:${r.value.y}px;`)})}var El=Object.getOwnPropertySymbols,Ig=Object.prototype.hasOwnProperty,Rg=Object.prototype.propertyIsEnumerable,qg=(e,n)=>{var s={};for(var o in e)Ig.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&El)for(var o of El(e))n.indexOf(o)<0&&Rg.call(e,o)&&(s[o]=e[o]);return s};function Fg(e,n,s={}){const o=s,{window:i=Ze}=o,r=qg(o,["window"]);let l;const c=i&&"ResizeObserver"in i,u=()=>{l&&(l.disconnect(),l=void 0)},p=ue(()=>ln(e),m=>{u(),c&&i&&m&&(l=new ResizeObserver(n),l.observe(m,r))},{immediate:!0,flush:"post"}),d=()=>{u(),p()};return pt(d),{isSupported:c,stop:d}}function Uu(e,n={}){const{immediate:s=!0,window:o=Ze}=n,i=z(!1);let r=null;function l(){!i.value||!o||(e(),r=o.requestAnimationFrame(l))}function c(){!i.value&&o&&(i.value=!0,l())}function u(){i.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return s&&c(),pt(u),{isActive:i,pause:u,resume:c}}function Ng(e,n={width:0,height:0},s={}){const o=z(n.width),i=z(n.height);return Fg(e,([r])=>{o.value=r.contentRect.width,i.value=r.contentRect.height},s),ue(()=>ln(e),r=>{o.value=r?n.width:0,i.value=r?n.height:0}),{width:o,height:i}}const jl=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function Dg(e,n={}){const{document:s=dg,autoExit:o=!1}=n,i=e||(s==null?void 0:s.querySelector("html")),r=z(!1);let l=!1,c=jl[0];if(!s)l=!1;else for(const w of jl)if(w[1]in s){c=w,l=!0;break}const[u,p,d,,m]=c;async function f(){!l||(s!=null&&s[d]&&await s[p](),r.value=!1)}async function h(){if(!l)return;await f();const w=ln(i);w&&(await w[u](),r.value=!0)}async function v(){r.value?await f():await h()}return s&&Le(s,m,()=>{r.value=!!(s!=null&&s[d])},!1),o&&pt(f),{isSupported:l,isFullscreen:r,enter:h,exit:f,toggle:v}}function Hg(e,n,s={}){const{root:o,rootMargin:i="0px",threshold:r=.1,window:l=Ze}=s,c=l&&"IntersectionObserver"in l;let u=it;const p=c?ue(()=>({el:ln(e),root:ln(o)}),({el:m,root:f})=>{if(u(),!m)return;const h=new IntersectionObserver(n,{root:f,rootMargin:i,threshold:r});h.observe(m),u=()=>{h.disconnect(),u=it}},{immediate:!0,flush:"post"}):it,d=()=>{u(),p()};return pt(d),{isSupported:c,stop:d}}const Vg={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function zg(e={}){const{reactive:n=!1,target:s=Ze,aliasMap:o=Vg,passive:i=!0,onEventFired:r=it}=e,l=qe(new Set),c={toJSON(){return{}},current:l},u=n?qe(c):c,p=new Set;function d(h,v){h in u&&(n?u[h]=v:u[h].value=v)}function m(h,v){var w,_;const O=(w=h.key)==null?void 0:w.toLowerCase(),C=(_=h.code)==null?void 0:_.toLowerCase(),S=[C,O].filter(Boolean);C&&(v?l.add(h.code):l.delete(h.code));for(const E of S)d(E,v);O==="meta"&&!v?(p.forEach(E=>{l.delete(E),d(E,!1)}),p.clear()):h.getModifierState("Meta")&&v&&[...l,...S].forEach(E=>p.add(E))}s&&(Le(s,"keydown",h=>(m(h,!0),r(h)),{passive:i}),Le(s,"keyup",h=>(m(h,!1),r(h)),{passive:i}));const f=new Proxy(u,{get(h,v,w){if(typeof v!="string")return Reflect.get(h,v,w);if(v=v.toLowerCase(),v in o&&(v=o[v]),!(v in u))if(/[+_-]/.test(v)){const O=v.split(/[+_-]/g).map(C=>C.trim());u[v]=j(()=>O.every(C=>k(f[C])))}else u[v]=z(!1);const _=Reflect.get(h,v,w);return n?k(_):_}});return f}function UO(e={}){const{type:n="page",touch:s=!0,resetOnTouchEnds:o=!1,initialValue:i={x:0,y:0},window:r=Ze,eventFilter:l}=e,c=z(i.x),u=z(i.y),p=z(null),d=w=>{n==="page"?(c.value=w.pageX,u.value=w.pageY):n==="client"&&(c.value=w.clientX,u.value=w.clientY),p.value="mouse"},m=()=>{c.value=i.x,u.value=i.y},f=w=>{if(w.touches.length>0){const _=w.touches[0];n==="page"?(c.value=_.pageX,u.value=_.pageY):n==="client"&&(c.value=_.clientX,u.value=_.clientY),p.value="touch"}},h=w=>l===void 0?d(w):l(()=>d(w),{}),v=w=>l===void 0?f(w):l(()=>f(w),{});return r&&(Le(r,"mousemove",h,{passive:!0}),Le(r,"dragover",h,{passive:!0}),s&&(Le(r,"touchstart",v,{passive:!0}),Le(r,"touchmove",v,{passive:!0}),o&&Le(r,"touchend",m,{passive:!0}))),{x:c,y:u,sourceType:p}}var Wn;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Wn||(Wn={}));function Bg(e,n={}){const s=z(e),{threshold:o=50,onSwipe:i,onSwipeEnd:r,onSwipeStart:l}=n,c=qe({x:0,y:0}),u=(A,W)=>{c.x=A,c.y=W},p=qe({x:0,y:0}),d=(A,W)=>{p.x=A,p.y=W},m=j(()=>c.x-p.x),f=j(()=>c.y-p.y),{max:h,abs:v}=Math,w=j(()=>h(v(m.value),v(f.value))>=o),_=z(!1),O=z(!1),C=j(()=>w.value?v(m.value)>v(f.value)?m.value>0?Wn.LEFT:Wn.RIGHT:f.value>0?Wn.UP:Wn.DOWN:Wn.NONE),S=A=>n.pointerTypes?n.pointerTypes.includes(A.pointerType):!0,E=[Le(e,"pointerdown",A=>{var W,ie;if(!S(A))return;O.value=!0,(ie=(W=s.value)==null?void 0:W.style)==null||ie.setProperty("touch-action","none");const pe=A.target;pe==null||pe.setPointerCapture(A.pointerId);const{clientX:me,clientY:ve}=A;u(me,ve),d(me,ve),l==null||l(A)}),Le(e,"pointermove",A=>{if(!S(A)||!O.value)return;const{clientX:W,clientY:ie}=A;d(W,ie),!_.value&&w.value&&(_.value=!0),_.value&&(i==null||i(A))}),Le(e,"pointerup",A=>{var W,ie;!S(A)||(_.value&&(r==null||r(A,C.value)),O.value=!1,_.value=!1,(ie=(W=s.value)==null?void 0:W.style)==null||ie.setProperty("touch-action","initial"))})],F=()=>E.forEach(A=>A());return{isSwiping:Wt(_),direction:Wt(C),posStart:Wt(c),posEnd:Wt(p),distanceX:m,distanceY:f,stop:F}}var Qg=Object.defineProperty,$l=Object.getOwnPropertySymbols,Wg=Object.prototype.hasOwnProperty,Ug=Object.prototype.propertyIsEnumerable,Ml=(e,n,s)=>n in e?Qg(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,Gg=(e,n)=>{for(var s in n||(n={}))Wg.call(n,s)&&Ml(e,s,n[s]);if($l)for(var s of $l(n))Ug.call(n,s)&&Ml(e,s,n[s]);return e};function GO(e={}){const{controls:n=!1,offset:s=0,immediate:o=!0,interval:i="requestAnimationFrame"}=e,r=z(ui()+s),l=()=>r.value=ui()+s,c=i==="requestAnimationFrame"?Uu(l,{immediate:o}):Xh(l,i,{immediate:o});return n?Gg({timestamp:r},c):r}function Nn(e,n,s,o={}){var i;const{passive:r=!1,eventName:l,deep:c=!1,defaultValue:u}=o,p=Lt(),d=s||(p==null?void 0:p.emit)||((i=p==null?void 0:p.$emit)==null?void 0:i.bind(p));let m=l;n||(n="modelValue"),m=l||m||`update:${n.toString()}`;const f=()=>qh(e[n])?e[n]:u;if(r){const h=z(f());return ue(()=>e[n],v=>h.value=v),ue(h,v=>{(v!==e[n]||c)&&d(m,v)},{deep:c}),h}else return j({get(){return f()},set(h){d(m,h)}})}function YO({window:e=Ze}={}){if(!e)return z(!1);const n=z(e.document.hasFocus());return Le(e,"blur",()=>{n.value=!1}),Le(e,"focus",()=>{n.value=!0}),n}function Yg({window:e=Ze,initialWidth:n=1/0,initialHeight:s=1/0}={}){const o=z(n),i=z(s),r=()=>{e&&(o.value=e.innerWidth,i.value=e.innerHeight)};return r(),Jh(r),Le("resize",r,{passive:!0}),{width:o,height:i}}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Gu=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ps=e=>Gu?Symbol(e):"_vr_"+e,Kg=ps("rvlm"),Pl=ps("rvd"),ar=ps("r"),Yu=ps("rl"),fi=ps("rvl"),Qt=typeof window!="undefined";function Zg(e){return e.__esModule||Gu&&e[Symbol.toStringTag]==="Module"}const $e=Object.assign;function Eo(e,n){const s={};for(const o in n){const i=n[o];s[o]=Array.isArray(i)?i.map(e):e(i)}return s}const As=()=>{},Jg=/\/$/,Xg=e=>e.replace(Jg,"");function jo(e,n,s="/"){let o,i={},r="",l="";const c=n.indexOf("?"),u=n.indexOf("#",c>-1?c:0);return c>-1&&(o=n.slice(0,c),r=n.slice(c+1,u>-1?u:n.length),i=e(r)),u>-1&&(o=o||n.slice(0,u),l=n.slice(u,n.length)),o=sv(o!=null?o:n,s),{fullPath:o+(r&&"?")+r+l,path:o,query:i,hash:l}}function ev(e,n){const s=n.query?e(n.query):"";return n.path+(s&&"?")+s+(n.hash||"")}function Tl(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function nv(e,n,s){const o=n.matched.length-1,i=s.matched.length-1;return o>-1&&o===i&&as(n.matched[o],s.matched[i])&&Ku(n.params,s.params)&&e(n.query)===e(s.query)&&n.hash===s.hash}function as(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Ku(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const s in e)if(!tv(e[s],n[s]))return!1;return!0}function tv(e,n){return Array.isArray(e)?Al(e,n):Array.isArray(n)?Al(n,e):e===n}function Al(e,n){return Array.isArray(n)?e.length===n.length&&e.every((s,o)=>s===n[o]):e.length===1&&e[0]===n}function sv(e,n){if(e.startsWith("/"))return e;if(!e)return n;const s=n.split("/"),o=e.split("/");let i=s.length-1,r,l;for(r=0;r<o.length;r++)if(l=o[r],!(i===1||l==="."))if(l==="..")i--;else break;return s.slice(0,i).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var Ys;(function(e){e.pop="pop",e.push="push"})(Ys||(Ys={}));var Ls;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Ls||(Ls={}));function av(e){if(!e)if(Qt){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Xg(e)}const ov=/^[^#]+#/;function iv(e,n){return e.replace(ov,"#")+n}function rv(e,n){const s=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:n.behavior,left:o.left-s.left-(n.left||0),top:o.top-s.top-(n.top||0)}}const lo=()=>({left:window.pageXOffset,top:window.pageYOffset});function lv(e){let n;if("el"in e){const s=e.el,o=typeof s=="string"&&s.startsWith("#"),i=typeof s=="string"?o?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!i)return;n=rv(i,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function Ll(e,n){return(history.state?history.state.position-n:-1)+e}const mi=new Map;function cv(e,n){mi.set(e,n)}function uv(e){const n=mi.get(e);return mi.delete(e),n}let pv=()=>location.protocol+"//"+location.host;function Zu(e,n){const{pathname:s,search:o,hash:i}=n,r=e.indexOf("#");if(r>-1){let c=i.includes(e.slice(r))?e.slice(r).length:1,u=i.slice(c);return u[0]!=="/"&&(u="/"+u),Tl(u,"")}return Tl(s,e)+o+i}function dv(e,n,s,o){let i=[],r=[],l=null;const c=({state:f})=>{const h=Zu(e,location),v=s.value,w=n.value;let _=0;if(f){if(s.value=h,n.value=f,l&&l===v){l=null;return}_=w?f.position-w.position:0}else o(h);i.forEach(O=>{O(s.value,v,{delta:_,type:Ys.pop,direction:_?_>0?Ls.forward:Ls.back:Ls.unknown})})};function u(){l=s.value}function p(f){i.push(f);const h=()=>{const v=i.indexOf(f);v>-1&&i.splice(v,1)};return r.push(h),h}function d(){const{history:f}=window;!f.state||f.replaceState($e({},f.state,{scroll:lo()}),"")}function m(){for(const f of r)f();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:u,listen:p,destroy:m}}function Il(e,n,s,o=!1,i=!1){return{back:e,current:n,forward:s,replaced:o,position:window.history.length,scroll:i?lo():null}}function fv(e){const{history:n,location:s}=window,o={value:Zu(e,s)},i={value:n.state};i.value||r(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function r(u,p,d){const m=e.indexOf("#"),f=m>-1?(s.host&&document.querySelector("base")?e:e.slice(m))+u:pv()+e+u;try{n[d?"replaceState":"pushState"](p,"",f),i.value=p}catch(h){console.error(h),s[d?"replace":"assign"](f)}}function l(u,p){const d=$e({},n.state,Il(i.value.back,u,i.value.forward,!0),p,{position:i.value.position});r(u,d,!0),o.value=u}function c(u,p){const d=$e({},i.value,n.state,{forward:u,scroll:lo()});r(d.current,d,!0);const m=$e({},Il(o.value,u,null),{position:d.position+1},p);r(u,m,!1),o.value=u}return{location:o,state:i,push:c,replace:l}}function mv(e){e=av(e);const n=fv(e),s=dv(e,n.state,n.location,n.replace);function o(r,l=!0){l||s.pauseListeners(),history.go(r)}const i=$e({location:"",base:e,go:o,createHref:iv.bind(null,e)},n,s);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>n.state.value}),i}function hv(e){return typeof e=="string"||e&&typeof e=="object"}function Ju(e){return typeof e=="string"||typeof e=="symbol"}const Zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Xu=ps("nf");var Rl;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Rl||(Rl={}));function os(e,n){return $e(new Error,{type:e,[Xu]:!0},n)}function Jn(e,n){return e instanceof Error&&Xu in e&&(n==null||!!(e.type&n))}const ql="[^/]+?",gv={sensitive:!1,strict:!1,start:!0,end:!0},vv=/[.+*?^${}()[\]/\\]/g;function yv(e,n){const s=$e({},gv,n),o=[];let i=s.start?"^":"";const r=[];for(const p of e){const d=p.length?[]:[90];s.strict&&!p.length&&(i+="/");for(let m=0;m<p.length;m++){const f=p[m];let h=40+(s.sensitive?.25:0);if(f.type===0)m||(i+="/"),i+=f.value.replace(vv,"\\$&"),h+=40;else if(f.type===1){const{value:v,repeatable:w,optional:_,regexp:O}=f;r.push({name:v,repeatable:w,optional:_});const C=O||ql;if(C!==ql){h+=10;try{new RegExp(`(${C})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${v}" (${C}): `+E.message)}}let S=w?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;m||(S=_&&p.length<2?`(?:/${S})`:"/"+S),_&&(S+="?"),i+=S,h+=20,_&&(h+=-8),w&&(h+=-20),C===".*"&&(h+=-50)}d.push(h)}o.push(d)}if(s.strict&&s.end){const p=o.length-1;o[p][o[p].length-1]+=.7000000000000001}s.strict||(i+="/?"),s.end?i+="$":s.strict&&(i+="(?:/|$)");const l=new RegExp(i,s.sensitive?"":"i");function c(p){const d=p.match(l),m={};if(!d)return null;for(let f=1;f<d.length;f++){const h=d[f]||"",v=r[f-1];m[v.name]=h&&v.repeatable?h.split("/"):h}return m}function u(p){let d="",m=!1;for(const f of e){(!m||!d.endsWith("/"))&&(d+="/"),m=!1;for(const h of f)if(h.type===0)d+=h.value;else if(h.type===1){const{value:v,repeatable:w,optional:_}=h,O=v in p?p[v]:"";if(Array.isArray(O)&&!w)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const C=Array.isArray(O)?O.join("/"):O;if(!C)if(_)f.length<2&&e.length>1&&(d.endsWith("/")?d=d.slice(0,-1):m=!0);else throw new Error(`Missing required param "${v}"`);d+=C}}return d}return{re:l,score:o,keys:r,parse:c,stringify:u}}function kv(e,n){let s=0;for(;s<e.length&&s<n.length;){const o=n[s]-e[s];if(o)return o;s++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function _v(e,n){let s=0;const o=e.score,i=n.score;for(;s<o.length&&s<i.length;){const r=kv(o[s],i[s]);if(r)return r;s++}return i.length-o.length}const bv={type:0,value:""},wv=/[a-zA-Z0-9_]/;function xv(e){if(!e)return[[]];if(e==="/")return[[bv]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(h){throw new Error(`ERR (${s})/"${p}": ${h}`)}let s=0,o=s;const i=[];let r;function l(){r&&i.push(r),r=[]}let c=0,u,p="",d="";function m(){!p||(s===0?r.push({type:0,value:p}):s===1||s===2||s===3?(r.length>1&&(u==="*"||u==="+")&&n(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:p,regexp:d,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):n("Invalid state to consume buffer"),p="")}function f(){p+=u}for(;c<e.length;){if(u=e[c++],u==="\\"&&s!==2){o=s,s=4;continue}switch(s){case 0:u==="/"?(p&&m(),l()):u===":"?(m(),s=1):f();break;case 4:f(),s=o;break;case 1:u==="("?s=2:wv.test(u)?f():(m(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--);break;case 2:u===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+u:s=3:d+=u;break;case 3:m(),s=0,u!=="*"&&u!=="?"&&u!=="+"&&c--,d="";break;default:n("Unknown state");break}}return s===2&&n(`Unfinished custom RegExp for param "${p}"`),m(),l(),i}function Cv(e,n,s){const o=yv(xv(e.path),s),i=$e(o,{record:e,parent:n,children:[],alias:[]});return n&&!i.record.aliasOf==!n.record.aliasOf&&n.children.push(i),i}function Sv(e,n){const s=[],o=new Map;n=Nl({strict:!1,end:!0,sensitive:!1},n);function i(d){return o.get(d)}function r(d,m,f){const h=!f,v=Ev(d);v.aliasOf=f&&f.record;const w=Nl(n,d),_=[v];if("alias"in d){const S=typeof d.alias=="string"?[d.alias]:d.alias;for(const E of S)_.push($e({},v,{components:f?f.record.components:v.components,path:E,aliasOf:f?f.record:v}))}let O,C;for(const S of _){const{path:E}=S;if(m&&E[0]!=="/"){const F=m.record.path,A=F[F.length-1]==="/"?"":"/";S.path=m.record.path+(E&&A+E)}if(O=Cv(S,m,w),f?f.alias.push(O):(C=C||O,C!==O&&C.alias.push(O),h&&d.name&&!Fl(O)&&l(d.name)),"children"in v){const F=v.children;for(let A=0;A<F.length;A++)r(F[A],O,f&&f.children[A])}f=f||O,u(O)}return C?()=>{l(C)}:As}function l(d){if(Ju(d)){const m=o.get(d);m&&(o.delete(d),s.splice(s.indexOf(m),1),m.children.forEach(l),m.alias.forEach(l))}else{const m=s.indexOf(d);m>-1&&(s.splice(m,1),d.record.name&&o.delete(d.record.name),d.children.forEach(l),d.alias.forEach(l))}}function c(){return s}function u(d){let m=0;for(;m<s.length&&_v(d,s[m])>=0&&(d.record.path!==s[m].record.path||!ep(d,s[m]));)m++;s.splice(m,0,d),d.record.name&&!Fl(d)&&o.set(d.record.name,d)}function p(d,m){let f,h={},v,w;if("name"in d&&d.name){if(f=o.get(d.name),!f)throw os(1,{location:d});w=f.record.name,h=$e(Ov(m.params,f.keys.filter(C=>!C.optional).map(C=>C.name)),d.params),v=f.stringify(h)}else if("path"in d)v=d.path,f=s.find(C=>C.re.test(v)),f&&(h=f.parse(v),w=f.record.name);else{if(f=m.name?o.get(m.name):s.find(C=>C.re.test(m.path)),!f)throw os(1,{location:d,currentLocation:m});w=f.record.name,h=$e({},m.params,d.params),v=f.stringify(h)}const _=[];let O=f;for(;O;)_.unshift(O.record),O=O.parent;return{name:w,path:v,params:h,matched:_,meta:$v(_)}}return e.forEach(d=>r(d)),{addRoute:r,resolve:p,removeRoute:l,getRoutes:c,getRecordMatcher:i}}function Ov(e,n){const s={};for(const o of n)o in e&&(s[o]=e[o]);return s}function Ev(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:jv(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function jv(e){const n={},s=e.props||!1;if("component"in e)n.default=s;else for(const o in e.components)n[o]=typeof s=="boolean"?s:s[o];return n}function Fl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function $v(e){return e.reduce((n,s)=>$e(n,s.meta),{})}function Nl(e,n){const s={};for(const o in e)s[o]=o in n?n[o]:e[o];return s}function ep(e,n){return n.children.some(s=>s===e||ep(e,s))}const np=/#/g,Mv=/&/g,Pv=/\//g,Tv=/=/g,Av=/\?/g,tp=/\+/g,Lv=/%5B/g,Iv=/%5D/g,sp=/%5E/g,Rv=/%60/g,ap=/%7B/g,qv=/%7C/g,op=/%7D/g,Fv=/%20/g;function or(e){return encodeURI(""+e).replace(qv,"|").replace(Lv,"[").replace(Iv,"]")}function Nv(e){return or(e).replace(ap,"{").replace(op,"}").replace(sp,"^")}function hi(e){return or(e).replace(tp,"%2B").replace(Fv,"+").replace(np,"%23").replace(Mv,"%26").replace(Rv,"`").replace(ap,"{").replace(op,"}").replace(sp,"^")}function Dv(e){return hi(e).replace(Tv,"%3D")}function Hv(e){return or(e).replace(np,"%23").replace(Av,"%3F")}function Vv(e){return e==null?"":Hv(e).replace(Pv,"%2F")}function Na(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function zv(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<o.length;++i){const r=o[i].replace(tp," "),l=r.indexOf("="),c=Na(l<0?r:r.slice(0,l)),u=l<0?null:Na(r.slice(l+1));if(c in n){let p=n[c];Array.isArray(p)||(p=n[c]=[p]),p.push(u)}else n[c]=u}return n}function Dl(e){let n="";for(let s in e){const o=e[s];if(s=Dv(s),o==null){o!==void 0&&(n+=(n.length?"&":"")+s);continue}(Array.isArray(o)?o.map(r=>r&&hi(r)):[o&&hi(o)]).forEach(r=>{r!==void 0&&(n+=(n.length?"&":"")+s,r!=null&&(n+="="+r))})}return n}function Bv(e){const n={};for(const s in e){const o=e[s];o!==void 0&&(n[s]=Array.isArray(o)?o.map(i=>i==null?null:""+i):o==null?o:""+o)}return n}function ys(){let e=[];function n(o){return e.push(o),()=>{const i=e.indexOf(o);i>-1&&e.splice(i,1)}}function s(){e=[]}return{add:n,list:()=>e,reset:s}}function nt(e,n,s,o,i){const r=o&&(o.enterCallbacks[i]=o.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(os(4,{from:s,to:n})):m instanceof Error?c(m):hv(m)?c(os(2,{from:n,to:m})):(r&&o.enterCallbacks[i]===r&&typeof m=="function"&&r.push(m),l())},p=e.call(o&&o.instances[i],n,s,u);let d=Promise.resolve(p);e.length<3&&(d=d.then(u)),d.catch(m=>c(m))})}function $o(e,n,s,o){const i=[];for(const r of e)for(const l in r.components){let c=r.components[l];if(!(n!=="beforeRouteEnter"&&!r.instances[l]))if(Qv(c)){const p=(c.__vccOpts||c)[n];p&&i.push(nt(p,s,o,r,l))}else{let u=c();i.push(()=>u.then(p=>{if(!p)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${r.path}"`));const d=Zg(p)?p.default:p;r.components[l]=d;const f=(d.__vccOpts||d)[n];return f&&nt(f,s,o,r,l)()}))}}return i}function Qv(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Hl(e){const n=L(ar),s=L(Yu),o=j(()=>n.resolve(k(e.to))),i=j(()=>{const{matched:u}=o.value,{length:p}=u,d=u[p-1],m=s.matched;if(!d||!m.length)return-1;const f=m.findIndex(as.bind(null,d));if(f>-1)return f;const h=Vl(u[p-2]);return p>1&&Vl(d)===h&&m[m.length-1].path!==h?m.findIndex(as.bind(null,u[p-2])):f}),r=j(()=>i.value>-1&&Yv(s.params,o.value.params)),l=j(()=>i.value>-1&&i.value===s.matched.length-1&&Ku(s.params,o.value.params));function c(u={}){return Gv(u)?n[k(e.replace)?"replace":"push"](k(e.to)).catch(As):Promise.resolve()}return{route:o,href:j(()=>o.value.href),isActive:r,isExactActive:l,navigate:c}}const Wv=xe({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hl,setup(e,{slots:n}){const s=qe(Hl(e)),{options:o}=L(ar),i=j(()=>({[zl(e.activeClass,o.linkActiveClass,"router-link-active")]:s.isActive,[zl(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=n.default&&n.default(s);return e.custom?r:Tn("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:i.value},r)}}}),Uv=Wv;function Gv(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function Yv(e,n){for(const s in n){const o=n[s],i=e[s];if(typeof o=="string"){if(o!==i)return!1}else if(!Array.isArray(i)||i.length!==o.length||o.some((r,l)=>r!==i[l]))return!1}return!0}function Vl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const zl=(e,n,s)=>e!=null?e:n!=null?n:s,Kv=xe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:s}){const o=L(fi),i=j(()=>e.route||o.value),r=L(Pl,0),l=j(()=>i.value.matched[r]);mn(Pl,r+1),mn(Kg,l),mn(fi,i);const c=z();return ue(()=>[c.value,l.value,e.name],([u,p,d],[m,f,h])=>{p&&(p.instances[d]=u,f&&f!==p&&u&&u===m&&(p.leaveGuards.size||(p.leaveGuards=f.leaveGuards),p.updateGuards.size||(p.updateGuards=f.updateGuards))),u&&p&&(!f||!as(p,f)||!m)&&(p.enterCallbacks[d]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=i.value,p=l.value,d=p&&p.components[e.name],m=e.name;if(!d)return Bl(s.default,{Component:d,route:u});const f=p.props[e.name],h=f?f===!0?u.params:typeof f=="function"?f(u):f:null,w=Tn(d,$e({},h,n,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(p.instances[m]=null)},ref:c}));return Bl(s.default,{Component:w,route:u})||w}}});function Bl(e,n){if(!e)return null;const s=e(n);return s.length===1?s[0]:s}const Zv=Kv;function Jv(e){const n=Sv(e.routes,e),s=e.parseQuery||zv,o=e.stringifyQuery||Dl,i=e.history,r=ys(),l=ys(),c=ys(),u=Vn(Zn);let p=Zn;Qt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Eo.bind(null,$=>""+$),m=Eo.bind(null,Vv),f=Eo.bind(null,Na);function h($,U){let I,Y;return Ju($)?(I=n.getRecordMatcher($),Y=U):Y=$,n.addRoute(Y,I)}function v($){const U=n.getRecordMatcher($);U&&n.removeRoute(U)}function w(){return n.getRoutes().map($=>$.record)}function _($){return!!n.getRecordMatcher($)}function O($,U){if(U=$e({},U||u.value),typeof $=="string"){const ce=jo(s,$,U.path),g=n.resolve({path:ce.path},U),y=i.createHref(ce.fullPath);return $e(ce,g,{params:f(g.params),hash:Na(ce.hash),redirectedFrom:void 0,href:y})}let I;if("path"in $)I=$e({},$,{path:jo(s,$.path,U.path).path});else{const ce=$e({},$.params);for(const g in ce)ce[g]==null&&delete ce[g];I=$e({},$,{params:m($.params)}),U.params=m(U.params)}const Y=n.resolve(I,U),ke=$.hash||"";Y.params=d(f(Y.params));const Pe=ev(o,$e({},$,{hash:Nv(ke),path:Y.path})),de=i.createHref(Pe);return $e({fullPath:Pe,hash:ke,query:o===Dl?Bv($.query):$.query||{}},Y,{redirectedFrom:void 0,href:de})}function C($){return typeof $=="string"?jo(s,$,u.value.path):$e({},$)}function S($,U){if(p!==$)return os(8,{from:U,to:$})}function E($){return W($)}function F($){return E($e(C($),{replace:!0}))}function A($){const U=$.matched[$.matched.length-1];if(U&&U.redirect){const{redirect:I}=U;let Y=typeof I=="function"?I($):I;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=C(Y):{path:Y},Y.params={}),$e({query:$.query,hash:$.hash,params:$.params},Y)}}function W($,U){const I=p=O($),Y=u.value,ke=$.state,Pe=$.force,de=$.replace===!0,ce=A(I);if(ce)return W($e(C(ce),{state:ke,force:Pe,replace:de}),U||I);const g=I;g.redirectedFrom=U;let y;return!Pe&&nv(o,Y,I)&&(y=os(16,{to:g,from:Y}),In(Y,Y,!0,!1)),(y?Promise.resolve(y):pe(g,Y)).catch(x=>Jn(x)?Jn(x,2)?x:he(x):ae(x,g,Y)).then(x=>{if(x){if(Jn(x,2))return W($e(C(x.to),{state:ke,force:Pe,replace:de}),U||g)}else x=ve(g,Y,!0,de,ke);return me(g,Y,x),x})}function ie($,U){const I=S($,U);return I?Promise.reject(I):Promise.resolve()}function pe($,U){let I;const[Y,ke,Pe]=Xv($,U);I=$o(Y.reverse(),"beforeRouteLeave",$,U);for(const ce of Y)ce.leaveGuards.forEach(g=>{I.push(nt(g,$,U))});const de=ie.bind(null,$,U);return I.push(de),Nt(I).then(()=>{I=[];for(const ce of r.list())I.push(nt(ce,$,U));return I.push(de),Nt(I)}).then(()=>{I=$o(ke,"beforeRouteUpdate",$,U);for(const ce of ke)ce.updateGuards.forEach(g=>{I.push(nt(g,$,U))});return I.push(de),Nt(I)}).then(()=>{I=[];for(const ce of $.matched)if(ce.beforeEnter&&!U.matched.includes(ce))if(Array.isArray(ce.beforeEnter))for(const g of ce.beforeEnter)I.push(nt(g,$,U));else I.push(nt(ce.beforeEnter,$,U));return I.push(de),Nt(I)}).then(()=>($.matched.forEach(ce=>ce.enterCallbacks={}),I=$o(Pe,"beforeRouteEnter",$,U),I.push(de),Nt(I))).then(()=>{I=[];for(const ce of l.list())I.push(nt(ce,$,U));return I.push(de),Nt(I)}).catch(ce=>Jn(ce,8)?ce:Promise.reject(ce))}function me($,U,I){for(const Y of c.list())Y($,U,I)}function ve($,U,I,Y,ke){const Pe=S($,U);if(Pe)return Pe;const de=U===Zn,ce=Qt?history.state:{};I&&(Y||de?i.replace($.fullPath,$e({scroll:de&&ce&&ce.scroll},ke)):i.push($.fullPath,ke)),u.value=$,In($,U,I,de),he()}let Re;function Ne(){Re||(Re=i.listen(($,U,I)=>{const Y=O($),ke=A(Y);if(ke){W($e(ke,{replace:!0}),Y).catch(As);return}p=Y;const Pe=u.value;Qt&&cv(Ll(Pe.fullPath,I.delta),lo()),pe(Y,Pe).catch(de=>Jn(de,12)?de:Jn(de,2)?(W(de.to,Y).then(ce=>{Jn(ce,20)&&!I.delta&&I.type===Ys.pop&&i.go(-1,!1)}).catch(As),Promise.reject()):(I.delta&&i.go(-I.delta,!1),ae(de,Y,Pe))).then(de=>{de=de||ve(Y,Pe,!1),de&&(I.delta?i.go(-I.delta,!1):I.type===Ys.pop&&Jn(de,20)&&i.go(-1,!1)),me(Y,Pe,de)}).catch(As)}))}let Ge=ys(),Oe=ys(),ee;function ae($,U,I){he($);const Y=Oe.list();return Y.length?Y.forEach(ke=>ke($,U,I)):console.error($),Promise.reject($)}function J(){return ee&&u.value!==Zn?Promise.resolve():new Promise(($,U)=>{Ge.add([$,U])})}function he($){return ee||(ee=!$,Ne(),Ge.list().forEach(([U,I])=>$?I($):U()),Ge.reset()),$}function In($,U,I,Y){const{scrollBehavior:ke}=e;if(!Qt||!ke)return Promise.resolve();const Pe=!I&&uv(Ll($.fullPath,0))||(Y||!I)&&history.state&&history.state.scroll||null;return We().then(()=>ke($,U,Pe)).then(de=>de&&lv(de)).catch(de=>ae(de,$,U))}const Je=$=>i.go($);let kn;const on=new Set;return{currentRoute:u,addRoute:h,removeRoute:v,hasRoute:_,getRoutes:w,resolve:O,options:e,push:E,replace:F,go:Je,back:()=>Je(-1),forward:()=>Je(1),beforeEach:r.add,beforeResolve:l.add,afterEach:c.add,onError:Oe.add,isReady:J,install($){const U=this;$.component("RouterLink",Uv),$.component("RouterView",Zv),$.config.globalProperties.$router=U,Object.defineProperty($.config.globalProperties,"$route",{enumerable:!0,get:()=>k(u)}),Qt&&!kn&&u.value===Zn&&(kn=!0,E(i.location).catch(ke=>{}));const I={};for(const ke in Zn)I[ke]=j(()=>u.value[ke]);$.provide(ar,U),$.provide(Yu,qe(I)),$.provide(fi,u);const Y=$.unmount;on.add($),$.unmount=function(){on.delete($),on.size<1&&(p=Zn,Re&&Re(),Re=null,u.value=Zn,kn=!1,ee=!1),Y()}}}}function Nt(e){return e.reduce((n,s)=>n.then(()=>s()),Promise.resolve())}function Xv(e,n){const s=[],o=[],i=[],r=Math.max(n.matched.length,e.matched.length);for(let l=0;l<r;l++){const c=n.matched[l];c&&(e.matched.find(p=>as(p,c))?o.push(c):s.push(c));const u=e.matched[l];u&&(n.matched.find(p=>as(p,u))||i.push(u))}return[s,o,i]}const Mo=z(!1),Is=z(!1),Ut=z(!1),ey=z(!0),gi=wg(_e({xs:460},vg)),Mt=Yg(),ip=zg(),ny=j(()=>Mt.height.value-Mt.width.value/ot>180),rp=Dg(xn?document.body:null),Xt=gg(),ty=j(()=>{var e,n;return["INPUT","TEXTAREA"].includes(((e=Xt.value)==null?void 0:e.tagName)||"")||((n=Xt.value)==null?void 0:n.classList.contains("CodeMirror-code"))}),sy=j(()=>{var e;return["BUTTON","A"].includes(((e=Xt.value)==null?void 0:e.tagName)||"")});Ln("slidev-camera","default");Ln("slidev-mic","default");const Oa=Ln("slidev-scale",0),nn=Ln("slidev-show-overview",!1),Po=Ln("slidev-presenter-cursor",!0),Ql=Ln("slidev-show-editor",!1);Ln("slidev-editor-width",xn?window.innerWidth*.4:100);const lp=Bu(nn);function Wl(e,n,s,o=i=>i){return e*o(.5-n*(.5-s))}function ay(e){return[-e[0],-e[1]]}function En(e,n){return[e[0]+n[0],e[1]+n[1]]}function wn(e,n){return[e[0]-n[0],e[1]-n[1]]}function On(e,n){return[e[0]*n,e[1]*n]}function oy(e,n){return[e[0]/n,e[1]/n]}function ks(e){return[e[1],-e[0]]}function iy(e,n){return e[0]*n[0]+e[1]*n[1]}function ry(e,n){return e[0]===n[0]&&e[1]===n[1]}function ly(e){return Math.hypot(e[0],e[1])}function cy(e){return e[0]*e[0]+e[1]*e[1]}function Ul(e,n){return cy(wn(e,n))}function cp(e){return oy(e,ly(e))}function uy(e,n){return Math.hypot(e[1]-n[1],e[0]-n[0])}function _s(e,n,s){let o=Math.sin(s),i=Math.cos(s),r=e[0]-n[0],l=e[1]-n[1],c=r*i-l*o,u=r*o+l*i;return[c+n[0],u+n[1]]}function vi(e,n,s){return En(e,On(wn(n,e),s))}function Gl(e,n,s){return En(e,On(n,s))}var{min:Dt,PI:py}=Math,Yl=.275,bs=py+1e-4;function dy(e,n={}){let{size:s=16,smoothing:o=.5,thinning:i=.5,simulatePressure:r=!0,easing:l=ee=>ee,start:c={},end:u={},last:p=!1}=n,{cap:d=!0,easing:m=ee=>ee*(2-ee)}=c,{cap:f=!0,easing:h=ee=>--ee*ee*ee+1}=u;if(e.length===0||s<=0)return[];let v=e[e.length-1].runningLength,w=c.taper===!1?0:c.taper===!0?Math.max(s,v):c.taper,_=u.taper===!1?0:u.taper===!0?Math.max(s,v):u.taper,O=Math.pow(s*o,2),C=[],S=[],E=e.slice(0,10).reduce((ee,ae)=>{let J=ae.pressure;if(r){let he=Dt(1,ae.distance/s),In=Dt(1,1-he);J=Dt(1,ee+(In-ee)*(he*Yl))}return(ee+J)/2},e[0].pressure),F=Wl(s,i,e[e.length-1].pressure,l),A,W=e[0].vector,ie=e[0].point,pe=ie,me=ie,ve=pe;for(let ee=0;ee<e.length;ee++){let{pressure:ae}=e[ee],{point:J,vector:he,distance:In,runningLength:Je}=e[ee];if(ee<e.length-1&&v-Je<3)continue;if(i){if(r){let I=Dt(1,In/s),Y=Dt(1,1-I);ae=Dt(1,E+(Y-E)*(I*Yl))}F=Wl(s,i,ae,l)}else F=s/2;A===void 0&&(A=F);let kn=Je<w?m(Je/w):1,on=v-Je<_?h((v-Je)/_):1;if(F=Math.max(.01,F*Math.min(kn,on)),ee===e.length-1){let I=On(ks(he),F);C.push(wn(J,I)),S.push(En(J,I));continue}let qt=e[ee+1].vector,$=iy(he,qt);if($<0){let I=On(ks(W),F);for(let Y=1/13,ke=0;ke<=1;ke+=Y)me=_s(wn(J,I),J,bs*ke),C.push(me),ve=_s(En(J,I),J,bs*-ke),S.push(ve);ie=me,pe=ve;continue}let U=On(ks(vi(qt,he,$)),F);me=wn(J,U),(ee<=1||Ul(ie,me)>O)&&(C.push(me),ie=me),ve=En(J,U),(ee<=1||Ul(pe,ve)>O)&&(S.push(ve),pe=ve),E=ae,W=he}let Re=e[0].point.slice(0,2),Ne=e.length>1?e[e.length-1].point.slice(0,2):En(e[0].point,[1,1]),Ge=[],Oe=[];if(e.length===1){if(!(w||_)||p){let ee=Gl(Re,cp(ks(wn(Re,Ne))),-(A||F)),ae=[];for(let J=1/13,he=J;he<=1;he+=J)ae.push(_s(ee,Re,bs*2*he));return ae}}else{if(!(w||_&&e.length===1))if(d)for(let ae=1/13,J=ae;J<=1;J+=ae){let he=_s(S[0],Re,bs*J);Ge.push(he)}else{let ae=wn(C[0],S[0]),J=On(ae,.5),he=On(ae,.51);Ge.push(wn(Re,J),wn(Re,he),En(Re,he),En(Re,J))}let ee=ks(ay(e[e.length-1].vector));if(_||w&&e.length===1)Oe.push(Ne);else if(f){let ae=Gl(Ne,ee,F);for(let J=1/29,he=J;he<1;he+=J)Oe.push(_s(ae,Ne,bs*3*he))}else Oe.push(En(Ne,On(ee,F)),En(Ne,On(ee,F*.99)),wn(Ne,On(ee,F*.99)),wn(Ne,On(ee,F)))}return C.concat(Oe,S.reverse(),Ge)}function fy(e,n={}){var s;let{streamline:o=.5,size:i=16,last:r=!1}=n;if(e.length===0)return[];let l=.15+(1-o)*.85,c=Array.isArray(e[0])?e:e.map(({x:h,y:v,pressure:w=.5})=>[h,v,w]);if(c.length===2){let h=c[1];c=c.slice(0,-1);for(let v=1;v<5;v++)c.push(vi(c[0],h,v/4))}c.length===1&&(c=[...c,[...En(c[0],[1,1]),...c[0].slice(2)]]);let u=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,d=0,m=u[0],f=c.length-1;for(let h=1;h<c.length;h++){let v=r&&h===f?c[h].slice(0,2):vi(m.point,c[h],l);if(ry(m.point,v))continue;let w=uy(v,m.point);if(d+=w,h<f&&!p){if(d<i)continue;p=!0}m={point:v,pressure:c[h][2]>=0?c[h][2]:.5,vector:cp(wn(m.point,v)),distance:w,runningLength:d},u.push(m)}return u[0].vector=((s=u[1])==null?void 0:s.vector)||[0,0],u}function my(e,n={}){return dy(fy(e,n),n)}var hy=my,gy=Object.defineProperty,Kl=Object.getOwnPropertySymbols,vy=Object.prototype.hasOwnProperty,yy=Object.prototype.propertyIsEnumerable,Zl=(e,n,s)=>n in e?gy(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,yi=(e,n)=>{for(var s in n||(n={}))vy.call(n,s)&&Zl(e,s,n[s]);if(Kl)for(var s of Kl(n))yy.call(n,s)&&Zl(e,s,n[s]);return e},ky=()=>({events:{},emit(e,...n){(this.events[e]||[]).forEach(s=>s(...n))},on(e,n){return(this.events[e]=this.events[e]||[]).push(n),()=>this.events[e]=(this.events[e]||[]).filter(s=>s!==n)}});function Da(e,n){return e-n}function _y(e){return e<0?-1:1}function Ha(e){return[Math.abs(e),_y(e)]}function up(){const e=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`}var by=2,Bn=by,ds=class{constructor(e){this.drauu=e,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(e){}onUnselected(){}onStart(e){}onMove(e){return!1}onEnd(e){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(e){var n,s;const o=this.drauu.el,i=(n=this.drauu.options.coordinateScale)!=null?n:1;if(this.drauu.options.coordinateTransform===!1){const r=this.drauu.el.getBoundingClientRect();return{x:(e.pageX-r.left)*i,y:(e.pageY-r.top)*i,pressure:e.pressure}}else{const r=this.drauu.svgPoint;r.x=e.clientX,r.y=e.clientY;const l=r.matrixTransform((s=o.getScreenCTM())==null?void 0:s.inverse());return{x:l.x*i,y:l.y*i,pressure:e.pressure}}}createElement(e,n){var s;const o=document.createElementNS("http://www.w3.org/2000/svg",e),i=n?yi(yi({},this.brush),n):this.brush;return o.setAttribute("fill",(s=i.fill)!=null?s:"transparent"),o.setAttribute("stroke",i.color),o.setAttribute("stroke-width",i.size.toString()),o.setAttribute("stroke-linecap","round"),i.dasharray&&o.setAttribute("stroke-dasharray",i.dasharray),o}attr(e,n){this.el.setAttribute(e,typeof n=="string"?n:n.toFixed(Bn))}_setEvent(e){this.event=e,this.point=this.getMousePosition(e)}_eventDown(e){return this._setEvent(e),this.start=this.point,this.onStart(this.point)}_eventMove(e){return this._setEvent(e),this.onMove(this.point)}_eventUp(e){return this._setEvent(e),this.onEnd(this.point)}},wy=class extends ds{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){const n=hy(e,yi({size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},this.brush.stylusOptions));if(!n.length)return"";const s=n.reduce((o,[i,r],l,c)=>{const[u,p]=c[(l+1)%c.length];return o.push(i,r,(i+u)/2,(r+p)/2),o},["M",...n[0],"Q"]);return s.push("Z"),s.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},xy=class extends ds{onStart(e){return this.el=this.createElement("ellipse"),this.attr("cx",e.x),this.attr("cy",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Ha(e.x-this.start.x),[o,i]=Ha(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",n),this.attr("ry",o);else{const[r,l]=[this.start.x,this.start.x+n*s].sort(Da),[c,u]=[this.start.y,this.start.y+o*i].sort(Da);this.attr("cx",(r+l)/2),this.attr("cy",(c+u)/2),this.attr("rx",(l-r)/2),this.attr("ry",(u-c)/2)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function pp(e,n){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",n),o.setAttribute("id",e),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(i),s.appendChild(o),s}var Cy=class extends ds{onStart(e){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",e.x),this.attr("y1",e.y),this.attr("x2",e.x),this.attr("y2",e.y),this.brush.arrowEnd){const n=up(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(pp(n,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${n})`),s}return this.el}onMove(e){if(!this.el)return!1;let{x:n,y:s}=e;if(this.shiftPressed){const o=e.x-this.start.x,i=e.y-this.start.y;if(i!==0){let r=o/i;r=Math.round(r),Math.abs(r)<=1?(n=this.start.x+i*r,s=this.start.y+i):(n=this.start.x+o,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-n),this.attr("y1",this.start.y*2-s),this.attr("x2",n),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",n),this.attr("y2",s)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||e.getTotalLength()<5)}},Sy=class extends ds{onStart(e){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",e.x),this.attr("y",e.y),this.el}onMove(e){if(!this.el||!this.start)return!1;let[n,s]=Ha(e.x-this.start.x),[o,i]=Ha(e.y-this.start.y);if(this.shiftPressed){const r=Math.min(n,o);n=r,o=r}if(this.altPressed)this.attr("x",this.start.x-n),this.attr("y",this.start.y-o),this.attr("width",n*2),this.attr("height",o*2);else{const[r,l]=[this.start.x,this.start.x+n*s].sort(Da),[c,u]=[this.start.y,this.start.y+o*i].sort(Da);this.attr("x",r),this.attr("y",c),this.attr("width",l-r),this.attr("height",u-c)}return!0}onEnd(){const e=this.el;return this.el=null,!(!e||!e.getTotalLength())}};function Oy(e,n){const s=e.x-n.x,o=e.y-n.y;return s*s+o*o}function Ey(e,n,s){let o=n.x,i=n.y,r=s.x-o,l=s.y-i;if(r!==0||l!==0){const c=((e.x-o)*r+(e.y-i)*l)/(r*r+l*l);c>1?(o=s.x,i=s.y):c>0&&(o+=r*c,i+=l*c)}return r=e.x-o,l=e.y-i,r*r+l*l}function jy(e,n){let s=e[0];const o=[s];let i;for(let r=1,l=e.length;r<l;r++)i=e[r],Oy(i,s)>n&&(o.push(i),s=i);return s!==i&&i&&o.push(i),o}function ki(e,n,s,o,i){let r=o,l=0;for(let c=n+1;c<s;c++){const u=Ey(e[c],e[n],e[s]);u>r&&(l=c,r=u)}r>o&&(l-n>1&&ki(e,n,l,o,i),i.push(e[l]),s-l>1&&ki(e,l,s,o,i))}function $y(e,n){const s=e.length-1,o=[e[0]];return ki(e,0,s,n,o),o.push(e[s]),o}function Jl(e,n,s=!1){if(e.length<=2)return e;const o=n!==void 0?n*n:1;return e=s?e:jy(e,o),e=$y(e,o),e}var My=class extends ds{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=up();const n=pp(this.arrowId,this.brush.color);this.el.appendChild(n)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Jl(this.points,1,!0),this.count=0),this.attr("d",ec(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",ec(Jl(this.points,1,!0))),!e.getTotalLength()))}};function Py(e,n){const s=n.x-e.x,o=n.y-e.y;return{length:Math.sqrt(Math.pow(s,2)+Math.pow(o,2)),angle:Math.atan2(o,s)}}function Xl(e,n,s,o){const i=n||e,r=s||e,l=.2,c=Py(i,r),u=c.angle+(o?Math.PI:0),p=c.length*l,d=e.x+Math.cos(u)*p,m=e.y+Math.sin(u)*p;return{x:d,y:m}}function Ty(e,n,s){const o=Xl(s[n-1],s[n-2],e),i=Xl(e,s[n-1],s[n+1],!0);return`C ${o.x.toFixed(Bn)},${o.y.toFixed(Bn)} ${i.x.toFixed(Bn)},${i.y.toFixed(Bn)} ${e.x.toFixed(Bn)},${e.y.toFixed(Bn)}`}function ec(e){return e.reduce((n,s,o,i)=>o===0?`M ${s.x.toFixed(Bn)},${s.y.toFixed(Bn)}`:`${n} ${Ty(s,o,i)}`,"")}var Ay=class extends ds{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(e){const n=(s,o)=>{if(s&&s.length)for(let i=0;i<s.length;i++){const r=s[i];if(r.getTotalLength){const l=r.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const u=r.getPointAtLength(l*c/this.pathSubFactor),p=r.getPointAtLength(l*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:u.x,x2:p.x,y1:u.y,y2:p.y,segment:c,element:o||r})}}else r.children&&n(r.children,r)}};e&&n(e.children)}onUnselected(){this.pathFragments=[]}onStart(e){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=e.x,this.svgPointPrevious.y=e.y}onMove(e){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=e.x,this.svgPointCurrent.y=e.y;const n=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,n}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const e=[];if(this.pathFragments.length)for(let n=0;n<this.pathFragments.length;n++){const s=this.pathFragments[n],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(s,o)&&(s.element.remove(),e.push(n))}return e.length&&(this.pathFragments=this.pathFragments.filter((n,s)=>!e.includes(s))),e.length>0}lineLineIntersect(e,n){const s=e.x1,o=e.x2,i=n.x1,r=n.x2,l=e.y1,c=e.y2,u=n.y1,p=n.y2,d=(s-o)*(u-p)-(l-c)*(i-r),m=(s*c-l*o)*(i-r)-(s-o)*(i*p-u*r),f=(s*c-l*o)*(u-p)-(l-c)*(i*p-u*r),h=(v,w,_)=>v>=w&&v<=_?!0:v>=_&&v<=w;if(d===0)return!1;{const v={x:m/d,y:f/d};return h(v.x,s,o)&&h(v.y,l,c)&&h(v.x,i,r)&&h(v.y,u,p)}}};function Ly(e){return{draw:new My(e),stylus:new wy(e),line:new Cy(e),rectangle:new Sy(e),ellipse:new xy(e),eraseLine:new Ay(e)}}var Iy=class{constructor(e={}){this.options=e,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=ky(),this._models=Ly(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),e.el&&this.mount(e.el,e.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(e){this._models[this.mode].onUnselected(),this.options.brush.mode=e,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(e){this.options.brush=e}resolveSelector(e){return typeof e=="string"?document.querySelector(e):e||null}mount(e,n){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(e),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const s=this.resolveSelector(n)||this.el,o=this.eventStart.bind(this),i=this.eventMove.bind(this),r=this.eventEnd.bind(this),l=this.eventKeyboard.bind(this);s.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",i,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",l,!1),window.addEventListener("keyup",l,!1),this._disposables.push(()=>{s.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",i),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",l,!1),window.removeEventListener("keyup",l,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(e=>e()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(e,n){return this._emitter.on(e,n)}undo(){const e=this.el;return e.lastElementChild?(this._undoStack.push(e.lastElementChild.cloneNode(!0)),e.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var e;return!!((e=this.el)!=null&&e.lastElementChild)}eventMove(e){!this.acceptsInput(e)||!this.drawing||this.model._eventMove(e)&&(e.stopPropagation(),e.preventDefault(),this._emitter.emit("changed"))}eventStart(e){!this.acceptsInput(e)||(e.stopPropagation(),e.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(e),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(e){if(!this.acceptsInput(e)||!this.drawing)return;const n=this.model._eventUp(e);n?(n instanceof Element&&n!==this._currentNode&&(this._currentNode=n),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(e){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(e.pointerType)}eventKeyboard(e){this.shiftPressed===e.shiftKey&&this.altPressed===e.altKey||(this.shiftPressed=e.shiftKey,this.altPressed=e.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(e){this.clear(),this.el.innerHTML=e}};function Ry(e){return new Iy(e)}const _i=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Dn=Ln("slidev-drawing-enabled",!1),KO=Ln("slidev-drawing-pinned",!1),qy=z(!1),Fy=z(!1),Ny=z(!1),Ks=z(!1),St=Rh(Ln("slidev-drawing-brush",{color:_i[0],size:4,mode:"stylus"})),nc=z("stylus"),dp=j(()=>Ce.drawings.syncAll||Fn.value);let Zs=!1;const ws=j({get(){return nc.value},set(e){nc.value=e,e==="arrow"?(St.mode="line",St.arrowEnd=!0):(St.mode=e,St.arrowEnd=!1)}}),Dy=qe({brush:St,acceptsInputTypes:j(()=>Dn.value?void 0:["pen"]),coordinateTransform:!1}),tn=Ja(Ry(Dy));function Hy(){tn.clear(),dp.value&&Hu(Ve.value,"")}function fp(){var e;Fy.value=tn.canRedo(),qy.value=tn.canUndo(),Ny.value=!!((e=tn.el)!=null&&e.children.length)}function Vy(e){Zs=!0;const n=Ra[e||Ve.value];n!=null?tn.load(n):tn.clear(),Zs=!1}tn.on("changed",()=>{if(fp(),!Zs){const e=tn.dump(),n=Ve.value;(Ra[n]||"")!==e&&dp.value&&Hu(n,tn.dump())}});Th(e=>{Zs=!0,e[Ve.value]!=null&&tn.load(e[Ve.value]||""),Zs=!1,fp()});We(()=>{ue(Ve,()=>{!tn.mounted||Vy()},{immediate:!0})});tn.on("start",()=>Ks.value=!0);tn.on("end",()=>Ks.value=!1);window.addEventListener("keydown",e=>{if(!Dn.value)return;const n=!e.ctrlKey&&!e.altKey&&!e.shiftKey&&!e.metaKey;let s=!0;e.code==="KeyZ"&&(e.ctrlKey||e.metaKey)?e.shiftKey?tn.redo():tn.undo():e.code==="Escape"?Dn.value=!1:e.code==="KeyL"&&n?ws.value="line":e.code==="KeyA"&&n?ws.value="arrow":e.code==="KeyS"&&n?ws.value="stylus":e.code==="KeyR"&&n?ws.value="rectangle":e.code==="KeyE"&&n?ws.value="ellipse":e.code==="KeyC"&&n?Hy():e.code.startsWith("Digit")&&n&&+e.code[5]<=_i.length?St.color=_i[+e.code[5]-1]:s=!1,s&&(e.preventDefault(),e.stopPropagation())},!1);const tc=Eg(),To=Ln("slidev-color-schema","auto"),bi=j(()=>Ce.colorSchema!=="auto"),ir=j({get(){return bi.value?Ce.colorSchema==="dark":To.value==="auto"?tc.value:To.value==="dark"},set(e){bi.value||(To.value=e===tc.value?"auto":e?"dark":"light")}}),mp=Bu(ir);xn&&ue(ir,e=>{const n=document.querySelector("html");n.classList.toggle("dark",e),n.classList.toggle("light",!e)},{immediate:!0});function zy(){return[]}const Ea=z(1),ja=j(()=>He.length-1),gn=z(0),rr=z(0);function By(){gn.value>Ea.value&&(gn.value-=1)}function Qy(){gn.value<ja.value&&(gn.value+=1)}function Wy(){if(gn.value>Ea.value){let e=gn.value-rr.value;e<Ea.value&&(e=Ea.value),gn.value=e}}function Uy(){if(gn.value<ja.value){let e=gn.value+rr.value;e>ja.value&&(e=ja.value),gn.value=e}}const hp=De(pn(ty),pn(sy),ey);function Gy(e,n,s=!1){typeof e=="string"&&(e=ip[e]);const o=De(e,hp);let i=0,r;const l=()=>{if(clearTimeout(r),!o.value){i=0;return}s&&(r=setTimeout(l,Math.max(1e3-i*250,150)),i++),n()};return ue(o,l,{flush:"sync"})}function Yy(e,n){return hg(e,s=>{!hp.value||s.repeat||n()})}function Ky(){const e=zy(),{escape:n,space:s,shift:o,left:i,right:r,up:l,down:c,enter:u,d:p,g:d,o:m}=ip;new Map([{key:De(s,pn(o)),fn:rt,autoRepeat:!0},{key:De(s,o),fn:lt,autoRepeat:!0},{key:De(r,pn(o),pn(nn)),fn:rt,autoRepeat:!0},{key:De(i,pn(o),pn(nn)),fn:lt,autoRepeat:!0},{key:"pageDown",fn:rt,autoRepeat:!0},{key:"pageUp",fn:lt,autoRepeat:!0},{key:De(l,pn(nn)),fn:()=>ea(!1),autoRepeat:!0},{key:De(c,pn(nn)),fn:Xs,autoRepeat:!0},{key:De(i,o),fn:()=>ea(!1),autoRepeat:!0},{key:De(r,o),fn:Xs,autoRepeat:!0},{key:De(p,pn(Dn)),fn:mp},{key:De(m,pn(Dn)),fn:lp},{key:De(n,pn(Dn)),fn:()=>nn.value=!1},{key:De(d,pn(Dn)),fn:()=>Ut.value=!Ut.value},{key:De(i,nn),fn:By},{key:De(r,nn),fn:Qy},{key:De(l,nn),fn:Wy},{key:De(c,nn),fn:Uy},{key:De(u,nn),fn:()=>{is(gn.value),nn.value=!1}},...e].map(h=>[h.key,h])).forEach(h=>{h.fn&&Gy(h.key,h.fn,h.autoRepeat)}),Yy("f",()=>rp.toggle())}const Zy={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Jy=t("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),Xy=[Jy];function ek(e,n){return b(),B("svg",Zy,Xy)}var nk={name:"carbon-close",render:ek};function lr(e){var s,o;const n=(o=(s=e==null?void 0:e.meta)==null?void 0:s.slide)==null?void 0:o.no;return n!=null?`slidev-page-${n}`:""}const gp=xe({name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(e){const n=e;L(D);const s=z(),o=Ng(s),i=j(()=>n.width?n.width:o.width.value),r=j(()=>n.width?n.width/ot:o.height.value);n.width&&aa(()=>{s.value&&(s.value.style.width=`${i.value}px`,s.value.style.height=`${r.value}px`)});const l=j(()=>i.value/r.value),c=j(()=>n.scale?n.scale:l.value<ot?i.value/$t:r.value*ot/$t),u=j(()=>({height:`${Fu}px`,width:`${$t}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),p=j(()=>({"select-none":!Ce.selectable,"slidev-code-line-numbers":Ce.lineNumbers}));return mn(qu,c),(d,m)=>(b(),B("div",{id:"slide-container",ref_key:"root",ref:s,class:Ie(k(p))},[t("div",{id:"slide-content",style:Ue(k(u))},[an(d.$slots,"default")],4),an(d.$slots,"controls")],2))}});var cr=xe({props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(e,{emit:n}){const s=Nn(e,"clicks",n),o=Nn(e,"clicksElements",n),i=Nn(e,"clicksDisabled",n),r=Nn(e,"clicksOrderMap",n);o.value.length=0,mn(kh,e.route),mn(_h,e.context),mn(Ps,s),mn(Ts,i),mn(bt,o),mn(li,r)},render(){var e,n;return this.$props.is?Tn(this.$props.is):(n=(e=this.$slots)==null?void 0:e.default)==null?void 0:n.call(e)}});const tk=["innerHTML"],vp=xe({name:"DrawingPreview",props:{page:null},setup(e){return L(D),(n,s)=>k(Ra)[e.page]?(b(),B("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:k(Ra)[e.page]},null,8,tk)):fe("v-if",!0)}});var sk=Object.freeze(Object.defineProperty({__proto__:null,default:vp},Symbol.toStringTag,{value:"Module"}));const ak={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},ok=["onClick"],ik=xe({name:"SlidesOverview",props:{modelValue:{type:Boolean}},emits:[],setup(e,{emit:n}){const s=e;L(D);const o=Nn(s,"modelValue",n);function i(){o.value=!1}function r(h){is(h),i()}function l(h){return h===gn.value}const c=gi.smaller("xs"),u=gi.smaller("sm"),p=4*16*2,d=2*16,m=j(()=>c.value?Mt.width.value-p:u.value?(Mt.width.value-p-d)/2:300),f=j(()=>Math.floor((Mt.width.value-p)/(m.value+d)));return aa(()=>{gn.value=Ve.value,rr.value=f.value}),(h,v)=>{const w=nk;return b(),B(Se,null,[Ji(t("div",ak,[t("div",{class:"grid gap-y-4 gap-x-8 w-full",style:Ue(`grid-template-columns: repeat(auto-fit,minmax(${k(m)}px,1fr))`)},[(b(!0),B(Se,null,oa(k(He).slice(0,-1),(_,O)=>(b(),B("div",{key:_.path,class:"relative"},[t("div",{class:Ie(["inline-block border border-gray-400 rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":l(O+1)}]),onClick:C=>r(+_.path)},[(b(),H(gp,{key:_.path,width:k(m),"clicks-disabled":!0,class:"pointer-events-none"},{default:Q(()=>[X(k(cr),{is:_==null?void 0:_.component,"clicks-disabled":!0,class:Ie(k(lr)(_)),route:_,context:"overview"},null,8,["is","class","route"]),X(vp,{page:+_.path},null,8,["page"])]),_:2},1032,["width"]))],10,ok),t("div",{class:"absolute top-0 opacity-50",style:Ue(`left: ${k(m)+5}px`)},Pt(O+1),5)]))),128))],4)],512),[[Iu,k(o)]]),k(o)?(b(),B("button",{key:0,class:"fixed text-2xl top-4 right-4 icon-btn text-gray-400",onClick:i},[X(w)])):fe("v-if",!0)],64)}}});var rk="/qtdevcon-community-driven-coding-guidelines/assets/logo.b72bde5d.png";const lk={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},ck=xe({name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(e,{emit:n}){const s=e;L(D);const o=Nn(s,"modelValue",n);function i(){o.value=!1}return(r,l)=>(b(),H(gu,null,[k(o)?(b(),B("div",lk,[t("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:l[0]||(l[0]=c=>i())}),t("div",{class:Ie(["m-auto rounded-md bg-main shadow",s.class]),"dark:border":"~ gray-400 opacity-10"},[an(r.$slots,"default")],2)])):fe("v-if",!0)],1024))}});const uk={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},pk=["innerHTML"],dk=t("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[t("div",{class:"flex gap-1 children:my-auto"},[t("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),t("img",{class:"w-5 h-5",src:rk,alt:"Slidev"}),t("div",{style:{color:"#2082A6"}},[t("b",null,"Sli"),a("dev ")])])],-1),fk=xe({name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(e,{emit:n}){const s=e;L(D);const o=Nn(s,"modelValue",n),i=j(()=>typeof Ce.info=="string");return(r,l)=>(b(),H(ck,{modelValue:k(o),"onUpdate:modelValue":l[0]||(l[0]=c=>be(o)?o.value=c:null),class:"px-6 py-4"},{default:Q(()=>[t("div",uk,[k(i)?(b(),B("div",{key:0,class:"mb-4",innerHTML:k(Ce).info},null,8,pk)):fe("v-if",!0),dk])]),_:1},8,["modelValue"]))}}),mk=["disabled","onKeydown"],hk=xe({name:"Goto",setup(e){L(D);const n=z(),s=z(""),o=j(()=>{if(s.value.startsWith("/"))return!!He.find(l=>l.path===s.value.substring(1));{const l=+s.value;return!isNaN(l)&&l>0&&l<=Pp.value}});function i(){o.value&&(s.value.startsWith("/")?is(s.value.substring(1)):is(+s.value)),r()}function r(){Ut.value=!1}return ue(Ut,async l=>{var c,u;l?(await We(),s.value="",(c=n.value)==null||c.focus()):(u=n.value)==null||u.blur()}),ue(s,l=>{l.match(/^[^0-9/]/)&&(s.value=s.value.substring(1))}),(l,c)=>(b(),B("div",{id:"slidev-goto-dialog",class:Ie(["fixed right-5 bg-main transform transition-all",k(Ut)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[Ji(t("input",{ref_key:"input",ref:n,"onUpdate:modelValue":c[0]||(c[0]=u=>s.value=u),type:"text",disabled:!k(Ut),class:Ie(["outline-none bg-transparent",{"text-red-400":!k(o)&&s.value}]),placeholder:"Goto...",onKeydown:[ul(i,["enter"]),ul(r,["escape"])],onBlur:r},null,42,mk),[[Xm,s.value]])],2))}}),gk=xe({name:"Controls",setup(e){L(D);const n=Vn(),s=Vn();return(o,i)=>(b(),B(Se,null,[X(ik,{modelValue:k(nn),"onUpdate:modelValue":i[0]||(i[0]=r=>be(nn)?nn.value=r:null)},null,8,["modelValue"]),X(hk),k(n)?(b(),H(k(n),{key:0})):fe("v-if",!0),k(s)?(b(),H(k(s),{key:1,modelValue:k(Mo),"onUpdate:modelValue":i[1]||(i[1]=r=>be(Mo)?Mo.value=r:null)},null,8,["modelValue"])):fe("v-if",!0),k(Ce).info?(b(),H(fk,{key:2,modelValue:k(Is),"onUpdate:modelValue":i[2]||(i[2]=r=>be(Is)?Is.value=r:null)},null,8,["modelValue"])):fe("v-if",!0)],64))}}),vk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},yk=t("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),kk=[yk];function _k(e,n){return b(),B("svg",vk,kk)}var bk={name:"carbon-settings-adjust",render:_k};const wk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xk=t("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),Ck=t("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),Sk=[xk,Ck];function Ok(e,n){return b(),B("svg",wk,Sk)}var Ek={name:"carbon-information",render:Ok};const jk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},$k=t("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),Mk=[$k];function Pk(e,n){return b(),B("svg",jk,Mk)}var Tk={name:"carbon-download",render:Pk};const Ak={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Lk=t("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),Ik=t("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),Rk=[Lk,Ik];function qk(e,n){return b(),B("svg",Ak,Rk)}var Fk={name:"carbon-user-speaker",render:qk};const Nk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Dk=t("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),Hk=t("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),Vk=[Dk,Hk];function zk(e,n){return b(),B("svg",Nk,Vk)}var Bk={name:"carbon-presentation-file",render:zk};const Qk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Wk=t("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),Uk=[Wk];function Gk(e,n){return b(),B("svg",Qk,Uk)}var Yk={name:"carbon-pen",render:Gk};const Kk={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Zk=t("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),Jk=t("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),Xk=[Zk,Jk];function e_(e,n){return b(),B("svg",Kk,Xk)}var n_={name:"ph-cursor-duotone",render:e_};const t_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},s_=t("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),a_=[s_];function o_(e,n){return b(),B("svg",t_,a_)}var yp={name:"ph-cursor-fill",render:o_};const i_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},r_=t("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),l_=[r_];function c_(e,n){return b(),B("svg",i_,l_)}var u_={name:"carbon-sun",render:c_};const p_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},d_=t("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),f_=[d_];function m_(e,n){return b(),B("svg",p_,f_)}var h_={name:"carbon-moon",render:m_};const g_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},v_=t("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),y_=[v_];function k_(e,n){return b(),B("svg",g_,y_)}var __={name:"carbon-apps",render:k_};const b_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},w_=t("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),x_=[w_];function C_(e,n){return b(),B("svg",b_,x_)}var S_={name:"carbon-arrow-right",render:C_};const O_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},E_=t("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),j_=[E_];function $_(e,n){return b(),B("svg",O_,j_)}var M_={name:"carbon-arrow-left",render:$_};const P_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},T_=t("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),A_=[T_];function L_(e,n){return b(),B("svg",P_,A_)}var I_={name:"carbon-maximize",render:L_};const R_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},q_=t("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),F_=[q_];function N_(e,n){return b(),B("svg",R_,F_)}var D_={name:"carbon-minimize",render:N_};const H_={class:"slidev-icon",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},V_=t("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),z_=[V_];function B_(e,n){return b(),B("svg",H_,z_)}var Q_={name:"carbon-checkmark",render:B_};var kp=(e,n)=>{const s=e.__vccOpts||e;for(const[o,i]of n)s[o]=i;return s};const W_={class:"select-list"},U_={class:"title"},G_={class:"items"},Y_=["onClick"],K_=xe({name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(e,{emit:n}){const s=e;L(D);const o=Nn(s,"modelValue",n,{passive:!0});return(i,r)=>{const l=Q_;return b(),B("div",W_,[t("div",U_,Pt(e.title),1),t("div",G_,[(b(!0),B(Se,null,oa(e.items,c=>(b(),B("div",{key:c.value,class:Ie(["item",{active:k(o)===c.value}]),onClick:()=>{var u;o.value=c.value,(u=c.onClick)==null||u.call(c)}},[X(l,{class:Ie(["text-green-500",{"opacity-0":k(o)!==c.value}])},null,8,["class"]),a(" "+Pt(c.display||c.value),1)],10,Y_))),128))])])}}});var Z_=kp(K_,[["__scopeId","data-v-427604ef"]]);const J_={class:"text-sm"},X_=xe({name:"Settings",setup(e){L(D);const n=[{display:"Fit",value:0},{display:"1:1",value:1}];return(s,o)=>(b(),B("div",J_,[X(Z_,{modelValue:k(Oa),"onUpdate:modelValue":o[0]||(o[0]=i=>be(Oa)?Oa.value=i:null),title:"Scale",items:n},null,8,["modelValue"])]))}}),e0={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},n0=xe({name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(e,{emit:n}){const s=e;L(D);const o=Nn(s,"modelValue",n,{passive:!0}),i=z();return fg(i,()=>{o.value=!1}),(r,l)=>(b(),B("div",{ref_key:"el",ref:i,class:"flex relative"},[t("button",{class:Ie({disabled:e.disabled}),onClick:l[0]||(l[0]=c=>o.value=!k(o))},[an(r.$slots,"button",{class:Ie({disabled:e.disabled})})],2),(b(),H(gu,null,[k(o)?(b(),B("div",e0,[an(r.$slots,"menu")])):fe("v-if",!0)],1024))],512))}}),t0={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},ka={name:"VerticalDivider",setup(e){return L(D),(n,s)=>(b(),B("div",t0))}};var s0={render(){return[]}};const a0={class:"icon-btn"},o0={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},i0={class:"my-auto"},r0={class:"opacity-50"},l0=xe({name:"NavControls",props:{persist:{default:!1}},setup(e){const n=e;L(D);const s=gi.smaller("md"),{isFullscreen:o,toggle:i}=rp,r=j(()=>xi.value?`?password=${xi.value}`:""),l=j(()=>`/presenter/${Ve.value}${r.value}`),c=j(()=>`/${Ve.value}${r.value}`),u=z(),p=()=>{u.value&&Xt.value&&u.value.contains(Xt.value)&&Xt.value.blur()},d=j(()=>n.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),m=Vn(),f=Vn();return us(()=>import("./DrawingControls.cd91edc3.js"),[]).then(h=>f.value=h.default),(h,v)=>{const w=D_,_=I_,O=M_,C=S_,S=__,E=h_,F=u_,A=yp,W=n_,ie=Yk,pe=Bk,me=Jo("RouterLink"),ve=Fk,Re=Tk,Ne=Ek,Ge=bk;return b(),B("nav",{ref_key:"root",ref:u,class:"flex flex-col"},[t("div",{class:Ie(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",k(d)]),onMouseleave:p},[k(zn)?fe("v-if",!0):(b(),B("button",{key:0,class:"icon-btn",onClick:v[0]||(v[0]=(...Oe)=>k(i)&&k(i)(...Oe))},[k(o)?(b(),H(w,{key:0})):(b(),H(_,{key:1}))])),t("button",{class:Ie(["icon-btn",{disabled:!k(aC)}]),onClick:v[1]||(v[1]=(...Oe)=>k(lt)&&k(lt)(...Oe))},[X(O)],2),t("button",{class:Ie(["icon-btn",{disabled:!k(sC)}]),title:"Next",onClick:v[2]||(v[2]=(...Oe)=>k(rt)&&k(rt)(...Oe))},[X(C)],2),k(zn)?fe("v-if",!0):(b(),B("button",{key:1,class:"icon-btn",title:"Slides overview",onClick:v[3]||(v[3]=Oe=>k(lp)())},[X(S)])),k(bi)?fe("v-if",!0):(b(),B("button",{key:2,class:"icon-btn",title:"Toggle dark mode",onClick:v[4]||(v[4]=Oe=>k(mp)())},[k(ir)?(b(),H(E,{key:0})):(b(),H(F,{key:1}))])),X(ka),k(zn)?fe("v-if",!0):(b(),B(Se,{key:3},[!k(Fn)&&!k(s)&&k(m)?(b(),B(Se,{key:0},[X(k(m)),X(ka)],64)):fe("v-if",!0),k(Fn)?(b(),B("button",{key:1,class:"icon-btn",title:"Show presenter cursor",onClick:v[5]||(v[5]=Oe=>Po.value=!k(Po))},[k(Po)?(b(),H(A,{key:0})):(b(),H(W,{key:1,class:"opacity-50"}))])):fe("v-if",!0)],64)),!k(Ce).drawings.presenterOnly&&!k(zn)?(b(),B(Se,{key:4},[t("button",{class:"icon-btn relative",title:"Drawing",onClick:v[6]||(v[6]=Oe=>Dn.value=!k(Dn))},[X(ie),k(Dn)?(b(),B("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:Ue({background:k(St).color})},null,4)):fe("v-if",!0)]),X(ka)],64)):fe("v-if",!0),k(zn)?fe("v-if",!0):(b(),B(Se,{key:5},[k(Fn)?(b(),H(me,{key:0,to:k(c),class:"icon-btn",title:"Play Mode"},{default:Q(()=>[X(pe)]),_:1},8,["to"])):fe("v-if",!0),k(eC)?(b(),H(me,{key:1,to:k(l),class:"icon-btn",title:"Presenter Mode"},{default:Q(()=>[X(ve)]),_:1},8,["to"])):fe("v-if",!0),fe("v-if",!0)],64)),(b(),B(Se,{key:6},[k(Ce).download?(b(),B("button",{key:0,class:"icon-btn",onClick:v[8]||(v[8]=(...Oe)=>k(Ci)&&k(Ci)(...Oe))},[X(Re)])):fe("v-if",!0)],64)),!k(Fn)&&k(Ce).info&&!k(zn)?(b(),B("button",{key:7,class:"icon-btn",onClick:v[9]||(v[9]=Oe=>Is.value=!k(Is))},[X(Ne)])):fe("v-if",!0),!k(Fn)&&!k(zn)?(b(),H(n0,{key:8},{button:Q(()=>[t("button",a0,[X(Ge)])]),menu:Q(()=>[X(X_)]),_:1})):fe("v-if",!0),k(zn)?fe("v-if",!0):(b(),H(ka,{key:9})),t("div",o0,[t("div",i0,[a(Pt(k(Ve))+" ",1),t("span",r0,"/ "+Pt(k(Pp)),1)])]),X(k(s0))],34)],512)}}});var _p={render(){return[]}},bp={render(){return[]}};const c0={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},u0=xe({name:"PresenterMouse",setup(e){return L(D),(n,s)=>{const o=yp;return k(Oo).cursor?(b(),B("div",c0,[X(o,{class:"absolute",style:Ue({left:`${k(Oo).cursor.x}%`,top:`${k(Oo).cursor.y}%`})},null,8,["style"])])):fe("v-if",!0)}}}),p0=xe({name:"SlidesShow",props:{context:null},setup(e){L(D),ue(fn,()=>{var s,o;((s=fn.value)==null?void 0:s.meta)&&fn.value.meta.preload!==!1&&(fn.value.meta.__preloaded=!0),((o=Ao.value)==null?void 0:o.meta)&&Ao.value.meta.preload!==!1&&(Ao.value.meta.__preloaded=!0)},{immediate:!0});const n=Vn();return us(()=>import("./DrawingLayer.483f8796.js"),[]).then(s=>n.value=s.default),(s,o)=>(b(),B(Se,null,[fe(" Global Bottom "),X(k(bp)),fe(" Slides "),(b(!0),B(Se,null,oa(k(He),i=>{var r,l;return b(),B(Se,{key:i.path},[((r=i.meta)==null?void 0:r.__preloaded)||i===k(fn)?Ji((b(),H(k(cr),{key:0,is:i==null?void 0:i.component,clicks:i===k(fn)?k(An):0,"clicks-elements":((l=i.meta)==null?void 0:l.__clicksElements)||[],"clicks-disabled":!1,class:Ie(k(lr)(i)),route:i,context:e.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Iu,i===k(fn)]]):fe("v-if",!0)],64)}),128)),fe(" Global Top "),X(k(_p)),k(n)?(b(),H(k(n),{key:0})):fe("v-if",!0),k(Fn)?fe("v-if",!0):(b(),H(u0,{key:1}))],64))}}),d0=xe({name:"Play",setup(e){L(D),Ky();const n=z();function s(r){var l;Ql.value||((l=r.target)==null?void 0:l.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?rt():lt())}rC(n);const o=j(()=>ny.value||Ql.value);Vn();const i=Vn();return us(()=>import("./DrawingControls.cd91edc3.js"),[]).then(r=>i.value=r.default),(r,l)=>(b(),B(Se,null,[t("div",{id:"page-root",ref_key:"root",ref:n,class:"grid grid-cols-[1fr,max-content]",style:Ue(k(Nu))},[X(gp,{class:"w-full h-full",style:Ue({background:"var(--slidev-slide-container-background, black)"}),width:k(dr)?k(Mt).width.value:void 0,scale:k(Oa),onPointerdown:s},{default:Q(()=>[X(p0,{context:"slide"})]),controls:Q(()=>[t("div",{class:Ie(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[k(o)?"opacity-100 right-0":"opacity-0 p-2",k(Ks)?"pointer-events-none":""]])},[X(l0,{class:"m-auto",persist:k(o)},null,8,["persist"])],2),!k(Ce).drawings.presenterOnly&&!k(zn)&&k(i)?(b(),H(k(i),{key:0,class:"ml-0"})):fe("v-if",!0)]),_:1},8,["style","width","scale"]),fe("v-if",!0)],4),X(gk)],64))}});function wp(e){const n=j(()=>e.value.path),s=j(()=>He.length-1),o=j(()=>parseInt(n.value.split(/\//g).slice(-1)[0])||1),i=j(()=>co(o.value)),r=j(()=>He.find(f=>f.path===`${o.value}`)),l=j(()=>{var f,h,v;return(v=(h=(f=r.value)==null?void 0:f.meta)==null?void 0:h.slide)==null?void 0:v.id}),c=j(()=>{var f,h;return(h=(f=r.value)==null?void 0:f.meta)==null?void 0:h.layout}),u=j(()=>He.find(f=>f.path===`${Math.min(He.length,o.value+1)}`)),p=j(()=>He.filter(f=>{var h,v;return(v=(h=f.meta)==null?void 0:h.slide)==null?void 0:v.title}).reduce((f,h)=>(fr(f,h),f),[])),d=j(()=>mr(p.value,r.value)),m=j(()=>hr(d.value));return{route:e,path:n,total:s,currentPage:o,currentPath:i,currentRoute:r,currentSlideId:l,currentLayout:c,nextRoute:u,rawTree:p,treeWithActiveStatuses:d,tree:m}}function xp(e,n,s){const o=z(0);We(()=>{vn.afterEach(async()=>{await We(),o.value+=1})});const i=j(()=>{var u,p;return o.value,((p=(u=n.value)==null?void 0:u.meta)==null?void 0:p.__clicksElements)||[]}),r=j(()=>{var u,p,d;return+((d=(p=(u=n.value)==null?void 0:u.meta)==null?void 0:p.clicks)!=null?d:i.value.length)}),l=j(()=>s.value<He.length-1||e.value<r.value),c=j(()=>s.value>1||e.value>0);return{clicks:e,clicksElements:i,clicksTotal:r,hasNext:l,hasPrev:c}}const f0=["id"],sc=xe({name:"PrintSlideClick",props:{clicks:null,clicksElements:null,nav:null,route:null},emits:["update:clicksElements"],setup(e,{emit:n}){const s=e,o=Nn(s,"clicksElements",n),i=j(()=>({height:`${Fu}px`,width:`${$t}px`})),r=Vn();us(()=>Promise.resolve().then(function(){return sk}),void 0).then(p=>r.value=p.default);const l=j(()=>s.clicks),c=xp(l,s.nav.currentRoute,s.nav.currentPage),u=j(()=>`${s.route.path.toString().padStart(3,"0")}-${(l.value+1).toString().padStart(2,"0")}`);return mn(D,qe({nav:_e(_e({},s.nav),c),configs:Ce,themeConfigs:j(()=>Ce.themeConfig)})),(p,d)=>{var m;return b(),B("div",{id:k(u),class:"slide-container",style:Ue(k(i))},[X(k(bp)),X(k(cr),{is:(m=e.route)==null?void 0:m.component,"clicks-elements":k(o),"onUpdate:clicks-elements":d[0]||(d[0]=f=>be(o)?o.value=f:null),clicks:k(l),"clicks-disabled":!1,class:Ie(k(lr)(e.route)),route:e.route},null,8,["is","clicks-elements","clicks","class","route"]),k(r)?(b(),H(k(r),{key:0,page:+e.route.path},null,8,["page"])):fe("v-if",!0),X(k(_p))],12,f0)}}}),m0=xe({name:"PrintSlide",props:{route:null},setup(e){var r;const n=e;L(D);const s=qe(((r=n.route.meta)==null?void 0:r.__clicksElements)||[]),o=j(()=>n.route),i=wp(o);return(l,c)=>(b(),B(Se,null,[X(sc,{"clicks-elements":s,"onUpdate:clicks-elements":c[0]||(c[0]=u=>be(s)?s.value=u:null),clicks:0,nav:k(i),route:k(o)},null,8,["clicks-elements","nav","route"]),k(Rs)?fe("v-if",!0):(b(!0),B(Se,{key:0},oa(s.length,u=>(b(),H(sc,{key:u,clicks:u,nav:k(i),route:k(o)},null,8,["clicks","nav","route"]))),128))],64))}});const h0={id:"print-content"},g0=xe({name:"PrintContainer",props:{width:null},setup(e){const n=e;L(D);const s=j(()=>n.width),o=j(()=>n.width/ot),i=j(()=>s.value/o.value),r=j(()=>i.value<ot?s.value/$t:o.value*ot/$t),l=He.slice(0,-1),c=j(()=>({"select-none":!Ce.selectable,"slidev-code-line-numbers":Ce.lineNumbers}));return mn(qu,r),(u,p)=>(b(),B("div",{id:"print-container",class:Ie(k(c))},[t("div",h0,[(b(!0),B(Se,null,oa(k(l),d=>(b(),H(m0,{key:d.path,route:d},null,8,["route"]))),128))]),an(u.$slots,"controls")],2))}});const v0=xe({name:"Print",setup(e){L(D);const n=Ct.canvasWidth,s=Math.round(n/Ct.aspectRatio)+1;function o(i,{slots:r}){if(r.default)return Tn("style",r.default())}return aa(()=>{dr?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(i,r)=>(b(),B(Se,null,[X(o,null,{default:Q(()=>[a(" @page { size: "+Pt(k(n))+"px "+Pt(s)+"px; margin: 0px; } ",1)]),_:1}),t("div",{id:"page-root",class:"grid grid-cols-[1fr,max-content]",style:Ue(k(Nu))},[X(g0,{class:"w-full h-full",style:Ue({background:"var(--slidev-slide-container-background, black)"}),width:k(Mt).width.value},null,8,["style","width"])],4)],64))}});const y0={class:"slidev-layout end"},k0={name:"end",setup(e){return L(D),(n,s)=>(b(),B("div",y0," END "))}};var _0=kp(k0,[["__scopeId","data-v-024c70b4"]]);function ac(e){return e.startsWith("/")?"/qtdevcon-community-driven-coding-guidelines/"+e.slice(1):e}function b0(e,n=!1){const s=e&&["#","rgb","hsl"].some(i=>e.indexOf(i)===0),o={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?n?`linear-gradient(#0005, #0008), url(${ac(e)})`:`url("${ac(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const w0={class:"my-auto w-full"},x0=xe({name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(e){const n=e;L(D);const s=j(()=>b0(n.background,!0));return(o,i)=>(b(),B("div",{class:"slidev-layout cover text-center",style:Ue(k(s))},[t("div",w0,[an(o.$slots,"default")])],4))}});const C0=t("h1",null,"Community Driven Coding Guidelines for QML",-1),S0={name:"1",setup(e){const n={theme:"seriph",download:!0,number:!0,class:"text-center",highlighter:"prism",lineNumbers:!1,drawings:{persist:!1},themeConfig:{primary:"#485a62"},background:"https://unsplash.com/photos/cAtzHUz7Z8g/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fGNvbW11bml0eSUyMHdvcmt8ZW58MHx8fHwxNjU0NDY3MTQ3&force=true&w=2400"};return L(D),(s,o)=>(b(),H(x0,te(ne(n)),{default:Q(()=>[C0]),_:1},16))}},O0={class:"slidev-layout default"},Te={name:"default",setup(e){return L(D),(n,s)=>(b(),B("div",O0,[an(n.$slots,"default")]))}},E0=t("h1",null,"Furkan Uzumcu",-1),j0=t("ul",null,[t("li",null,"Started using QML in 2017"),t("li",null,"\u2764\uFE0F Open Source"),t("li",null,"\u2764\uFE0F [Split] Mechanical Keyboards"),t("li",null,"Working at Autodesk"),t("li",null,"Furkanzmc @ GitHub"),t("li",null,"Furkanzmc @ Twitter"),t("li",null,[a("Website: "),t("a",{href:"https://zmc.space",target:"_blank",rel:"noopener"},"https://zmc.space")])],-1),$0={name:"2",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[E0,j0]),_:1},16))}};function oc(e){return e.startsWith("/")?"/qtdevcon-community-driven-coding-guidelines/"+e.slice(1):e}function Cp(e,n=!1){const s=e&&e[0]==="#"&&e.startsWith("rgb"),o={background:s?e:void 0,color:e&&!s?"white":void 0,backgroundImage:s?void 0:e?n?`linear-gradient(#0005, #0008), url(${oc(e)})`:`url("${oc(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const M0={class:"grid grid-cols-2 w-full h-full"},P0=xe({name:"image-left",props:{image:{type:String},class:{type:String}},setup(e){const n=e;L(D);const s=j(()=>Cp(n.image));return(o,i)=>(b(),B("div",M0,[t("div",{class:"w-full w-full",style:Ue(k(s))},null,4),t("div",{class:Ie(["slidev-layout default",n.class])},[an(o.$slots,"default")],2)]))}}),T0=t("h1",null,"Why have guidelines?",-1),A0=t("ul",null,[t("li",null,"Pool experience from vastly different industries"),t("li",null,"Sane defaults for new comers to the language"),t("li",null,"Base for tooling")],-1),L0={name:"3",setup(e){const n={layout:"image-left",image:"https://unsplash.com/photos/ioYwosPYC0U/download?force=true&w=640"};return L(D),(s,o)=>(b(),H(P0,te(ne(n)),{default:Q(()=>[T0,A0]),_:1},16))}},I0=t("h1",null,"Yet another guideline?..",-1),R0=t("p",null,[t("img",{src:"https://imgs.xkcd.com/comics/standards.png",alt:"standards"})],-1),q0=t("blockquote",null,[t("ul",null,[t("li",null,[t("a",{href:"https://doc.qt.io/qt-6/qtquick-bestpractices.html",target:"_blank",rel:"noopener"},"Official Best Practices for QML and Qt Quick from Qt")]),t("li",null,[t("a",{href:"https://www.google.com/search?hl=en&q=qml+best+practices",target:"_blank",rel:"noopener"},"QML Best Practices Search")])])],-1),F0={name:"4",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[I0,R0,q0]),_:1},16))}},N0=t("h1",null,"Guidelines are NOT\u2026",-1),D0=t("ul",null,[t("li",null,"Unchangeable"),t("li",null,"The absolute truth"),t("li",null,"Be all end all")],-1),H0={name:"5",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[N0,D0]),_:1},16))}},V0=t("h1",null,"Guidelines are for\u2026",-1),z0=t("ul",null,[t("li",null,[a("Making code easier to: "),t("ul",null,[t("li",null,"read"),t("li",null,"understand"),t("li",null,"maintain")])]),t("li",null,"Making it easier to detect errors or pitfalls"),t("li",null,"Low barrier knowledge for new comers"),t("li",null,"Aid in tooling")],-1),B0={name:"6",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[V0,z0]),_:1},16))}};/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Sp(e){return typeof e=="undefined"||e===null}function Q0(e){return typeof e=="object"&&e!==null}function W0(e){return Array.isArray(e)?e:Sp(e)?[]:[e]}function U0(e,n){var s,o,i,r;if(n)for(r=Object.keys(n),s=0,o=r.length;s<o;s+=1)i=r[s],e[i]=n[i];return e}function G0(e,n){var s="",o;for(o=0;o<n;o+=1)s+=e;return s}function Y0(e){return e===0&&Number.NEGATIVE_INFINITY===1/e}var K0=Sp,Z0=Q0,J0=W0,X0=G0,e1=Y0,n1=U0,ur={isNothing:K0,isObject:Z0,toArray:J0,repeat:X0,isNegativeZero:e1,extend:n1};function Op(e,n){var s="",o=e.reason||"(unknown reason)";return e.mark?(e.mark.name&&(s+='in "'+e.mark.name+'" '),s+="("+(e.mark.line+1)+":"+(e.mark.column+1)+")",!n&&e.mark.snippet&&(s+=`

`+e.mark.snippet),o+" "+s):o}function Js(e,n){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=n,this.message=Op(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Js.prototype=Object.create(Error.prototype);Js.prototype.constructor=Js;Js.prototype.toString=function(n){return this.name+": "+Op(this,n)};var wt=Js,t1=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],s1=["scalar","sequence","mapping"];function a1(e){var n={};return e!==null&&Object.keys(e).forEach(function(s){e[s].forEach(function(o){n[String(o)]=s})}),n}function o1(e,n){if(n=n||{},Object.keys(n).forEach(function(s){if(t1.indexOf(s)===-1)throw new wt('Unknown option "'+s+'" is met in definition of "'+e+'" YAML type.')}),this.options=n,this.tag=e,this.kind=n.kind||null,this.resolve=n.resolve||function(){return!0},this.construct=n.construct||function(s){return s},this.instanceOf=n.instanceOf||null,this.predicate=n.predicate||null,this.represent=n.represent||null,this.representName=n.representName||null,this.defaultStyle=n.defaultStyle||null,this.multi=n.multi||!1,this.styleAliases=a1(n.styleAliases||null),s1.indexOf(this.kind)===-1)throw new wt('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var Ke=o1;function ic(e,n){var s=[];return e[n].forEach(function(o){var i=s.length;s.forEach(function(r,l){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(i=l)}),s[i]=o}),s}function i1(){var e={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},n,s;function o(i){i.multi?(e.multi[i.kind].push(i),e.multi.fallback.push(i)):e[i.kind][i.tag]=e.fallback[i.tag]=i}for(n=0,s=arguments.length;n<s;n+=1)arguments[n].forEach(o);return e}function wi(e){return this.extend(e)}wi.prototype.extend=function(n){var s=[],o=[];if(n instanceof Ke)o.push(n);else if(Array.isArray(n))o=o.concat(n);else if(n&&(Array.isArray(n.implicit)||Array.isArray(n.explicit)))n.implicit&&(s=s.concat(n.implicit)),n.explicit&&(o=o.concat(n.explicit));else throw new wt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");s.forEach(function(r){if(!(r instanceof Ke))throw new wt("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new wt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new wt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof Ke))throw new wt("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var i=Object.create(wi.prototype);return i.implicit=(this.implicit||[]).concat(s),i.explicit=(this.explicit||[]).concat(o),i.compiledImplicit=ic(i,"implicit"),i.compiledExplicit=ic(i,"explicit"),i.compiledTypeMap=i1(i.compiledImplicit,i.compiledExplicit),i};var r1=wi,l1=new Ke("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),c1=new Ke("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),u1=new Ke("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),p1=new r1({explicit:[l1,c1,u1]});function d1(e){if(e===null)return!0;var n=e.length;return n===1&&e==="~"||n===4&&(e==="null"||e==="Null"||e==="NULL")}function f1(){return null}function m1(e){return e===null}var h1=new Ke("tag:yaml.org,2002:null",{kind:"scalar",resolve:d1,construct:f1,predicate:m1,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function g1(e){if(e===null)return!1;var n=e.length;return n===4&&(e==="true"||e==="True"||e==="TRUE")||n===5&&(e==="false"||e==="False"||e==="FALSE")}function v1(e){return e==="true"||e==="True"||e==="TRUE"}function y1(e){return Object.prototype.toString.call(e)==="[object Boolean]"}var k1=new Ke("tag:yaml.org,2002:bool",{kind:"scalar",resolve:g1,construct:v1,predicate:y1,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"});function _1(e){return 48<=e&&e<=57||65<=e&&e<=70||97<=e&&e<=102}function b1(e){return 48<=e&&e<=55}function w1(e){return 48<=e&&e<=57}function x1(e){if(e===null)return!1;var n=e.length,s=0,o=!1,i;if(!n)return!1;if(i=e[s],(i==="-"||i==="+")&&(i=e[++s]),i==="0"){if(s+1===n)return!0;if(i=e[++s],i==="b"){for(s++;s<n;s++)if(i=e[s],i!=="_"){if(i!=="0"&&i!=="1")return!1;o=!0}return o&&i!=="_"}if(i==="x"){for(s++;s<n;s++)if(i=e[s],i!=="_"){if(!_1(e.charCodeAt(s)))return!1;o=!0}return o&&i!=="_"}if(i==="o"){for(s++;s<n;s++)if(i=e[s],i!=="_"){if(!b1(e.charCodeAt(s)))return!1;o=!0}return o&&i!=="_"}}if(i==="_")return!1;for(;s<n;s++)if(i=e[s],i!=="_"){if(!w1(e.charCodeAt(s)))return!1;o=!0}return!(!o||i==="_")}function C1(e){var n=e,s=1,o;if(n.indexOf("_")!==-1&&(n=n.replace(/_/g,"")),o=n[0],(o==="-"||o==="+")&&(o==="-"&&(s=-1),n=n.slice(1),o=n[0]),n==="0")return 0;if(o==="0"){if(n[1]==="b")return s*parseInt(n.slice(2),2);if(n[1]==="x")return s*parseInt(n.slice(2),16);if(n[1]==="o")return s*parseInt(n.slice(2),8)}return s*parseInt(n,10)}function S1(e){return Object.prototype.toString.call(e)==="[object Number]"&&e%1===0&&!ur.isNegativeZero(e)}var O1=new Ke("tag:yaml.org,2002:int",{kind:"scalar",resolve:x1,construct:C1,predicate:S1,represent:{binary:function(e){return e>=0?"0b"+e.toString(2):"-0b"+e.toString(2).slice(1)},octal:function(e){return e>=0?"0o"+e.toString(8):"-0o"+e.toString(8).slice(1)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return e>=0?"0x"+e.toString(16).toUpperCase():"-0x"+e.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),E1=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function j1(e){return!(e===null||!E1.test(e)||e[e.length-1]==="_")}function $1(e){var n,s;return n=e.replace(/_/g,"").toLowerCase(),s=n[0]==="-"?-1:1,"+-".indexOf(n[0])>=0&&(n=n.slice(1)),n===".inf"?s===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:n===".nan"?NaN:s*parseFloat(n,10)}var M1=/^[-+]?[0-9]+e/;function P1(e,n){var s;if(isNaN(e))switch(n){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(n){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(n){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(ur.isNegativeZero(e))return"-0.0";return s=e.toString(10),M1.test(s)?s.replace("e",".e"):s}function T1(e){return Object.prototype.toString.call(e)==="[object Number]"&&(e%1!==0||ur.isNegativeZero(e))}var A1=new Ke("tag:yaml.org,2002:float",{kind:"scalar",resolve:j1,construct:$1,predicate:T1,represent:P1,defaultStyle:"lowercase"}),L1=p1.extend({implicit:[h1,k1,O1,A1]}),I1=L1,Ep=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),jp=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function R1(e){return e===null?!1:Ep.exec(e)!==null||jp.exec(e)!==null}function q1(e){var n,s,o,i,r,l,c,u=0,p=null,d,m,f;if(n=Ep.exec(e),n===null&&(n=jp.exec(e)),n===null)throw new Error("Date resolve error");if(s=+n[1],o=+n[2]-1,i=+n[3],!n[4])return new Date(Date.UTC(s,o,i));if(r=+n[4],l=+n[5],c=+n[6],n[7]){for(u=n[7].slice(0,3);u.length<3;)u+="0";u=+u}return n[9]&&(d=+n[10],m=+(n[11]||0),p=(d*60+m)*6e4,n[9]==="-"&&(p=-p)),f=new Date(Date.UTC(s,o,i,r,l,c,u)),p&&f.setTime(f.getTime()-p),f}function F1(e){return e.toISOString()}var N1=new Ke("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:R1,construct:q1,instanceOf:Date,represent:F1});function D1(e){return e==="<<"||e===null}var H1=new Ke("tag:yaml.org,2002:merge",{kind:"scalar",resolve:D1}),pr=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function V1(e){if(e===null)return!1;var n,s,o=0,i=e.length,r=pr;for(s=0;s<i;s++)if(n=r.indexOf(e.charAt(s)),!(n>64)){if(n<0)return!1;o+=6}return o%8===0}function z1(e){var n,s,o=e.replace(/[\r\n=]/g,""),i=o.length,r=pr,l=0,c=[];for(n=0;n<i;n++)n%4===0&&n&&(c.push(l>>16&255),c.push(l>>8&255),c.push(l&255)),l=l<<6|r.indexOf(o.charAt(n));return s=i%4*6,s===0?(c.push(l>>16&255),c.push(l>>8&255),c.push(l&255)):s===18?(c.push(l>>10&255),c.push(l>>2&255)):s===12&&c.push(l>>4&255),new Uint8Array(c)}function B1(e){var n="",s=0,o,i,r=e.length,l=pr;for(o=0;o<r;o++)o%3===0&&o&&(n+=l[s>>18&63],n+=l[s>>12&63],n+=l[s>>6&63],n+=l[s&63]),s=(s<<8)+e[o];return i=r%3,i===0?(n+=l[s>>18&63],n+=l[s>>12&63],n+=l[s>>6&63],n+=l[s&63]):i===2?(n+=l[s>>10&63],n+=l[s>>4&63],n+=l[s<<2&63],n+=l[64]):i===1&&(n+=l[s>>2&63],n+=l[s<<4&63],n+=l[64],n+=l[64]),n}function Q1(e){return Object.prototype.toString.call(e)==="[object Uint8Array]"}var W1=new Ke("tag:yaml.org,2002:binary",{kind:"scalar",resolve:V1,construct:z1,predicate:Q1,represent:B1}),U1=Object.prototype.hasOwnProperty,G1=Object.prototype.toString;function Y1(e){if(e===null)return!0;var n=[],s,o,i,r,l,c=e;for(s=0,o=c.length;s<o;s+=1){if(i=c[s],l=!1,G1.call(i)!=="[object Object]")return!1;for(r in i)if(U1.call(i,r))if(!l)l=!0;else return!1;if(!l)return!1;if(n.indexOf(r)===-1)n.push(r);else return!1}return!0}function K1(e){return e!==null?e:[]}var Z1=new Ke("tag:yaml.org,2002:omap",{kind:"sequence",resolve:Y1,construct:K1}),J1=Object.prototype.toString;function X1(e){if(e===null)return!0;var n,s,o,i,r,l=e;for(r=new Array(l.length),n=0,s=l.length;n<s;n+=1){if(o=l[n],J1.call(o)!=="[object Object]"||(i=Object.keys(o),i.length!==1))return!1;r[n]=[i[0],o[i[0]]]}return!0}function eb(e){if(e===null)return[];var n,s,o,i,r,l=e;for(r=new Array(l.length),n=0,s=l.length;n<s;n+=1)o=l[n],i=Object.keys(o),r[n]=[i[0],o[i[0]]];return r}var nb=new Ke("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:X1,construct:eb}),tb=Object.prototype.hasOwnProperty;function sb(e){if(e===null)return!0;var n,s=e;for(n in s)if(tb.call(s,n)&&s[n]!==null)return!1;return!0}function ab(e){return e!==null?e:{}}var ob=new Ke("tag:yaml.org,2002:set",{kind:"mapping",resolve:sb,construct:ab});I1.extend({implicit:[N1,H1],explicit:[W1,Z1,nb,ob]});function rc(e){return e===48?"\0":e===97?"\x07":e===98?"\b":e===116||e===9?"	":e===110?`
`:e===118?"\v":e===102?"\f":e===114?"\r":e===101?"\x1B":e===32?" ":e===34?'"':e===47?"/":e===92?"\\":e===78?"\x85":e===95?"\xA0":e===76?"\u2028":e===80?"\u2029":""}var ib=new Array(256),rb=new Array(256);for(var Ht=0;Ht<256;Ht++)ib[Ht]=rc(Ht)?1:0,rb[Ht]=rc(Ht);function lb(e){return Array.from(new Set(e))}function lc(...e){let n,s,o;e.length===1?(n=0,o=1,[s]=e):[n,s,o=1]=e;const i=[];let r=n;for(;r<s;)i.push(r),r+=o||1;return i}function cb(e,n){if(!n||n==="all"||n==="*")return lc(1,e+1);const s=[];for(const o of n.split(/[,;]/g))if(!o.includes("-"))s.push(+o);else{const[i,r]=o.split("-",2);s.push(...lc(+i,r?+r+1:e+1))}return lb(s).filter(o=>o<=e).sort((o,i)=>o-i)}const ub=xe({name:"CodeHighlightController",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0}},setup(e){const n=e;L(D);const s=L(Ps),o=L(bt),i=L(Ts);function r(u=5){const p=[],d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",m=d.length;for(let f=0;f<u;f++)p.push(d.charAt(Math.floor(Math.random()*m)));return p.join("")}const l=z(),c=Lt();return cs(()=>{const u=n.at==null?o==null?void 0:o.value.length:n.at,p=j(()=>i!=null&&i.value?n.ranges.length-1:Math.min(Math.max(0,((s==null?void 0:s.value)||0)-(u||0)),n.ranges.length-1)),d=j(()=>n.ranges[p.value]||"");if(n.ranges.length>=2&&!(i!=null&&i.value)){const m=r(),f=wh(n.ranges.length-1).map(h=>m+h);o!=null&&o.value&&(o.value.push(...f),oo(()=>f.forEach(h=>ci(o.value,h)),c))}aa(()=>{if(!l.value)return;const f=l.value.querySelector(".shiki-dark")?Array.from(l.value.querySelectorAll(".shiki")):[l.value];for(const h of f){const v=Array.from(h.querySelectorAll(".line")),w=cb(v.length,d.value);v.forEach((_,O)=>{const C=w.includes(O+1);_.classList.toggle(kt,!0),_.classList.toggle("highlighted",C),_.classList.toggle("dishonored",!C)})}})}),(u,p)=>(b(),B("div",{ref_key:"el",ref:l},[an(u.$slots,"default")],512))}}),pb=t("h1",null,"How to Read QML Code",-1),db=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// CircleMouseArea.qml")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},"    property int radius"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},"    signal clicked(MouseEvent mouse)"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"implicitWidth"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"50")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"implicitHeight"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"50")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Rectangle"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("parent"),t("span",{class:"token punctuation"},"."),a("width "),t("span",{class:"token operator"},"/"),a(),t("span",{class:"token number"},"2")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"height")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"radius"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("root"),t("span",{class:"token punctuation"},"."),a("radius")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"MouseArea"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token comment"},"// If mouse click is inside the circle, emits root.clicked(mouse)")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),fb={name:"7",setup(e){const n={};return L(D),(s,o)=>{const i=ub;return b(),H(Te,te(ne(n)),{default:Q(()=>[pb,X(i,Us({},{ranges:["all","1-1","1-3","1-6","1-8","1-11","1-17","all"]}),{default:Q(()=>[db]),_:1},16)]),_:1},16)}}},mb={class:"slidev-layout section w-full h-full grid"},hb={class:"my-auto text-center"},dt={name:"section",setup(e){return L(D),(n,s)=>(b(),B("div",mb,[t("div",hb,[an(n.$slots,"default")])]))}},gb=t("h1",null,[t("a",{href:"https://github.com/Furkanzmc/QML-Coding-Guide#code-style",target:"_blank",rel:"noopener"},"Code Style")],-1),vb={name:"8",setup(e){const n={layout:"section"};return L(D),(s,o)=>(b(),H(dt,te(ne(n)),{default:Q(()=>[gb]),_:1},16))}},yb=t("h1",null,"Code Order",-1),kb=t("ul",null,[t("li",null,"id"),t("li",null,"Property declarations"),t("li",null,"Signal declarations"),t("li",null,"Property initializations"),t("li",null,"Attached properties and signal handlers"),t("li",null,"States"),t("li",null,"Transitions"),t("li",null,"Signal handlers"),t("li",null,[a("Child objects "),t("ul",null,[t("li",null,"Visual Items"),t("li",null,"Qt provided non-visual items"),t("li",null,"Custom non-visual items")])]),t("li",null,[t("code",null,"QtObject"),a(" for encapsulating private members"),t("a",{href:"https://bugreports.qt.io/browse/QTBUG-11984",target:"_blank",rel:"noopener"},"[1]")]),t("li",null,"JavaScript functions")],-1),_b={name:"9",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[yb,kb]),_:1},16))}},bb={class:"slidev-layout two-columns w-full h-full grid grid-cols-2"},ft=xe({name:"two-cols",props:{class:{type:String}},setup(e){const n=e;return L(D),(s,o)=>(b(),B("div",bb,[t("div",{class:Ie(["col-left",n.class])},[an(s.$slots,"default")],2),t("div",{class:Ie(["col-right",n.class])},[an(s.$slots,"right")],2)]))}}),wb=t("h1",null,"Bad - ID, Properties, and Signals",-1),xb=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// CustomMouseArea.qml")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"MouseArea"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"Component.onCompleted"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"onTripleClicked"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"onClicked"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"pressAndHoldInterval"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"20")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},"    signal tripleClicked()"),a(`
`),t("span",{class:"line"},"    property point pressedPosition"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Cb=t("h1",null,"Good - ID, Properties, and Signals",-1),Sb=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// CustomMouseArea.qml")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"MouseArea"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},"    property point pressedPosition"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},"    signal tripleClicked()"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"pressAndHoldInterval"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"20")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"onClicked"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"onTripleClicked"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"Component.onCompleted"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"Component.onDestruction"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Ob={name:"10",setup(e){const n={layout:"two-cols"};return L(D),(s,o)=>(b(),H(ft,te(ne(n)),{right:Q(i=>[Cb,Sb]),default:Q(()=>[wb,xb]),_:1},16))}},Eb=t("h1",null,"Bad - ID, Properties, and Signals",-1),jb=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"anchors.left"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("parent"),t("span",{class:"token punctuation"},"."),a("left")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"z"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"32")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"x"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"23")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"y"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"32")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"implicitWidth"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"300")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"300")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"myItem")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),$b=t("h1",null,"Good - ID, Properties, and Signals",-1),Mb=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"myItem")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"x"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"23")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"y"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"32")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"z"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"32")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"implicitWidth"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"300")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"300")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"anchors.left"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("parent"),t("span",{class:"token punctuation"},"."),a("left")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Pb={name:"11",setup(e){const n={layout:"two-cols"};return L(D),(s,o)=>(b(),H(ft,te(ne(n)),{right:Q(i=>[$b,Mb]),default:Q(()=>[Eb,jb]),_:1},16))}},Tb=t("h1",null,"Bad - Function Ordering",-1),Ab=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token javascript-function language-javascript"},[t("span",{class:"token keyword"},"function"),a(),t("span",{class:"token function"},"someFunction"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"someProperty"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token boolean"},"true")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Lb=t("h1",null,"Good - Function Ordering",-1),Ib=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"someProperty"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token boolean"},"true")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// Function are declared at the bottom of the document.")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token javascript-function language-javascript"},[t("span",{class:"token keyword"},"function"),a(),t("span",{class:"token function"},"someFunction"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Rb={name:"12",setup(e){const n={layout:"two-cols"};return L(D),(s,o)=>(b(),H(ft,te(ne(n)),{right:Q(i=>[Lb,Ib]),default:Q(()=>[Tb,Ab]),_:1},16))}},qb=t("h1",null,"Bad - States and Transitions",-1),Fb=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},"RowLayout"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"states"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token punctuation"},"["),a(" State "),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token punctuation"},"]")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"transitions"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token punctuation"},"["),a(" Transitions "),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token punctuation"},"]")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"300")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"Layout.fillHeight"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token boolean"},"true")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"enabled"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token boolean"},"true")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"layer.enabled"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token boolean"},"false")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Nb=t("h1",null,"Good - States and Transitions",-1),Db=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},"RowLayout"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"300")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"enabled"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token boolean"},"true")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"layer.enabled"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token boolean"},"false")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"Layout.fillHeight"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token boolean"},"true")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"states"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token punctuation"},"["),a(" State "),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token punctuation"},"]")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"transitions"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token punctuation"},"["),a(" Transitions "),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token punctuation"},"]")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Hb={name:"13",setup(e){const n={layout:"two-cols"};return L(D),(s,o)=>(b(),H(ft,te(ne(n)),{right:Q(i=>[Nb,Db]),default:Q(()=>[qb,Fb]),_:1},16))}},Vb=t("h1",null,"Full Example",-1),zb=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// First Qt imports")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"import"),a(" QtQuick 2.15")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"import"),a(" QtQuick.Controls 2.15")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// Then custom imports")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"import"),a(" my.library 1.0")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// ----- Property Declarations")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// Required properties should be at the top.")]),a(`
`),t("span",{class:"line"},[a("    required property int radius"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"0")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},[t("span",{class:"token keyword"},"property"),a(),t("span",{class:"token property"},"int"),a(),t("span",{class:"token property"},"radius")]),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"0")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},[t("span",{class:"token keyword"},"property"),a(),t("span",{class:"token property"},"color"),a(),t("span",{class:"token property"},"borderColor")]),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token string"},'"blue"')])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// ----- Signal declarations")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},"    signal clicked()"),a(`
`),t("span",{class:"line"},"    signal doubleClicked()"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// ----- In this section, we group the size and position information together.")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"x"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"0")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"y"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"0")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"z"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"0")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"100")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"100")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"anchors.top"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("parent"),t("span",{class:"token punctuation"},"."),a("top "),t("span",{class:"token comment"},"// If a single assignment, dot notation can be used.")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// If the item is an image, sourceSize is also set here.")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// sourceSize: Qt.size(12, 12)")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// ----- Then comes the other properties. There's no predefined order to these.")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// Do not use empty lines to separate the assignments. Empty lines are reserved")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// for separating type declarations.")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"enabled"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token boolean"},"true")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"layer.enabled"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token boolean"},"true")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// ----- Then attached properties and attached signal handlers.")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"Layout.fillWidth"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token boolean"},"true")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"Drag.active"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token boolean"},"false")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"Drag.onActiveChanged"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// ----- States and transitions.")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"states"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token punctuation"},"["),a(" State "),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token punctuation"},"]")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"transitions"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token punctuation"},"["),a(" Transitions "),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token punctuation"},"]")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// ----- Signal handlers")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"onWidthChanged"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token comment"},"// Always use curly braces.")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// onCompleted and onDestruction signal handlers are always the last in")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// the order.")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"Component.onCompleted"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"Component.onDestruction"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// ----- Visual children.")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Rectangle"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"50")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"anchors"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token comment"},"// For multiple assignments, use group notation.")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"top"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("parent"),t("span",{class:"token punctuation"},"."),a("top")])]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"left"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("parent"),t("span",{class:"token punctuation"},"."),a("left")])]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"right"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("parent"),t("span",{class:"token punctuation"},"."),a("right")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"color"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token string"},'"red"')])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"layer.enabled"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token boolean"},"true")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// ----- Qt provided non-visual children")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Timer"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// ----- Custom non-visual children")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"MyCustomNonVisualType"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"QtObject"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"privates")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},[t("span",{class:"token keyword"},"property"),a(),t("span",{class:"token property"},"int"),a(),t("span",{class:"token property"},"diameter")]),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"0")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// ----- JavaScript functions")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token javascript-function language-javascript"},[t("span",{class:"token keyword"},"function"),a(),t("span",{class:"token function"},"collapse"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token javascript-function language-javascript"},[t("span",{class:"token keyword"},"function"),a(),t("span",{class:"token function"},"setCollapsed"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[t("span",{class:"token literal-property property"},"value"),t("span",{class:"token operator"},":"),a(" bool")]),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")])]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Bb={name:"14",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[Vb,zb]),_:1},16))}},Qb=t("h1",null,[t("a",{href:"https://github.com/Furkanzmc/QML-Coding-Guide#bindings",target:"_blank",rel:"noopener"},"Bindings")],-1),Wb=t("p",null,"Declarative > Imperative",-1),Ub={name:"15",setup(e){const n={layout:"section"};return L(D),(s,o)=>(b(),H(dt,te(ne(n)),{default:Q(()=>[Qb,Wb]),_:1},16))}},Gb=t("h1",null,"Imperative",-1),Yb=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},"ListView"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"model"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"ContactModel"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"delegate"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"Label"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"dlg")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},"        required property int index"),a(`
`),t("span",{class:"line"},"        required property string name"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token comment"},"// Or onIndexChanged? onNameChanged?")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"Component.onCompleted"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            text = index + "),t("span",{class:"token string"},'". "'),a(" + name")]),a(`
`),t("span",{class:"line"},"            rect.visible = dlg.index % 2"),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token class-name"},"Rectangle"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"rect")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Kb=t("h1",null,"Declarative",-1),Zb=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},"ListView"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"model"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"ContactModel"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"delegate"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"Label"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"dlg")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},"        required property int index"),a(`
`),t("span",{class:"line"},"        required property string name"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"text"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("index "),t("span",{class:"token operator"},"+"),a(),t("span",{class:"token string"},'". "'),a(),t("span",{class:"token operator"},"+"),a(" name")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token class-name"},"Rectangle"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"visible"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("dlg"),t("span",{class:"token punctuation"},"."),a("index "),t("span",{class:"token operator"},"%"),a(),t("span",{class:"token number"},"2")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Jb={name:"16",setup(e){const n={layout:"two-cols"};return L(D),(s,o)=>(b(),H(ft,te(ne(n)),{right:Q(i=>[Kb,Zb]),default:Q(()=>[Gb,Yb]),_:1},16))}},Xb=t("h1",null,"Declarative 2",-1),ew=t("p",null,[t("strong",null,"Is this still declarative?")],-1),nw=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},"ListView"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"model"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"ContactModel"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"delegate"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"Label"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},"        required property int index"),a(`
`),t("span",{class:"line"},"        required property string name"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"text"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token function"},"getText"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("        function getText()"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"string"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            return index + "),t("span",{class:"token string"},'". "'),a(" + name")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),tw={name:"17",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[Xb,ew,nw]),_:1},16))}},sw=t("h1",null,"Unnecessary Evaluations",-1),aw=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"import"),a(" QtQuick 2.3")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},[t("span",{class:"token keyword"},"property"),a(),t("span",{class:"token property"},"int"),a(),t("span",{class:"token property"},"accumulatedValue")]),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"0")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"Component.onCompleted"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        const someData = "),t("span",{class:"token punctuation"},"["),a("1"),t("span",{class:"token punctuation"},","),a(" 2"),t("span",{class:"token punctuation"},","),a(" 3"),t("span",{class:"token punctuation"},","),a(" 4"),t("span",{class:"token punctuation"},","),a(" 5"),t("span",{class:"token punctuation"},","),a(" 20"),t("span",{class:"token punctuation"},"]")]),a(`
`),t("span",{class:"line"},[a("        for (let i = 0"),t("span",{class:"token punctuation"},";"),a(" i < someData.length"),t("span",{class:"token punctuation"},";"),a(" ++i) "),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            accumulatedValue = accumulatedValue + someData"),t("span",{class:"token punctuation"},"["),a("i"),t("span",{class:"token punctuation"},"]")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Text"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"text"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("root"),t("span",{class:"token punctuation"},"."),a("accumulatedValue"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"toString"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"onTextChanged"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"text binding re-evaluated"'),t("span",{class:"token punctuation"},")")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),ow=t("h1",null,"-",-1),iw=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"import"),a(" QtQuick 2.3")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},[t("span",{class:"token keyword"},"property"),a(),t("span",{class:"token property"},"int"),a(),t("span",{class:"token property"},"accumulatedValue")]),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"0")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"Component.onCompleted"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        const someData = "),t("span",{class:"token punctuation"},"["),a("1"),t("span",{class:"token punctuation"},","),a(" 2"),t("span",{class:"token punctuation"},","),a(" 3"),t("span",{class:"token punctuation"},","),a(" 4"),t("span",{class:"token punctuation"},","),a(" 5"),t("span",{class:"token punctuation"},","),a(" 20"),t("span",{class:"token punctuation"},"]")]),a(`
`),t("span",{class:"line"},"        let temp = accumulatedValue"),a(`
`),t("span",{class:"line"},[a("        for (let i = 0"),t("span",{class:"token punctuation"},";"),a(" i < someData.length"),t("span",{class:"token punctuation"},";"),a(" ++i) "),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            temp = temp + someData"),t("span",{class:"token punctuation"},"["),a("i"),t("span",{class:"token punctuation"},"]")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},"        accumulatedValue = temp"),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Text"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"text"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("root"),t("span",{class:"token punctuation"},"."),a("accumulatedValue"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"toString"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"onTextChanged"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"text binding re-evaluated"'),t("span",{class:"token punctuation"},")")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),rw={name:"18",setup(e){const n={layout:"two-cols"};return L(D),(s,o)=>(b(),H(ft,te(ne(n)),{right:Q(i=>[ow,iw]),default:Q(()=>[sw,aw]),_:1},16))}},lw=t("pre",{class:"slidev-code language-cpp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token keyword"},"void"),a(),t("span",{class:"token class-name"},"MyRectangle"),t("span",{class:"token double-colon punctuation"},"::"),t("span",{class:"token function"},"setRadius"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"int"),a(" r"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    m_radius "),t("span",{class:"token operator"},"="),a(" r"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    emit "),t("span",{class:"token function"},"radiusChanged"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),cw={name:"19",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[lw]),_:1},16))}},uw=t("h1",null,[t("a",{href:"https://github.com/Furkanzmc/QML-Coding-Guide#c-integration",target:"_blank",rel:"noopener"},"C++ Integration")],-1),pw={name:"20",setup(e){const n={layout:"section"};return L(D),(s,o)=>(b(),H(dt,te(ne(n)),{default:Q(()=>[uw]),_:1},16))}},dw=t("ol",null,[t("li",null,"Context properties [Deprecated]"),t("li",null,"Global object"),t("li",null,"Singletons"),t("li",null,"Instantiated object")],-1),fw={name:"21",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[dw]),_:1},16))}},mw=t("h1",null,"Context Properties Are Deprecated",-1),hw=t("p",null,"Don\u2019t use them.",-1),gw=t("p",null,[t("a",{href:"https://bugreports.qt.io/browse/QTBUG-73064",target:"_blank",rel:"noopener"},"QTBUG-73064")],-1),vw=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},"    property int borderWidth"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Rectangle"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token comment"},"// No no...")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"border.width"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"borderWidth")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),yw={name:"22",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[mw,hw,gw,vw]),_:1},16))}},kw=t("h1",null,"Singletons for API Access",-1),_w=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},"Window"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"onClosing"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"event"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a()]),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},"        event.accepted = MySingletonClass.confirmExit()"),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Button"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"background"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"Rectangle"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"color"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("Theme"),t("span",{class:"token punctuation"},"."),a("buttonBackground")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),bw={name:"23",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[kw,_w]),_:1},16))}},ww=t("h1",null,"Singletons for API Access (Continued)",-1),xw=t("ul",null,[t("li",null,"If you use singleton for data, don\u2019t use it inside a component.")],-1),Cw=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Contacts.qml")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"ListView"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"model"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("MySingletonClass"),t("span",{class:"token punctuation"},"."),a("contacts")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"delegate"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"Text"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token comment"},"/* ... */"),a(),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Sw=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Contacts.qml")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},[t("span",{class:"token keyword"},"property"),a(),t("span",{class:"token property"},"alias"),a(),t("span",{class:"token property"},"model")]),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("lv"),t("span",{class:"token punctuation"},"."),a("model")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"ListView"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"lv")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"delegate"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"Text"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token comment"},"/* ... */"),a(),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Ow={name:"24",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[ww,xw,Cw,Sw]),_:1},16))}},Ew=t("h1",null,"Prefer Instantiated Types Over Singletons For Data",-1),jw=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// ColorsWindow.qml")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"Window"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Column"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token class-name"},"Repeater"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"model"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("Palette"),t("span",{class:"token punctuation"},"."),a("selectedColors")])]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"delegate"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"ColorViewer"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},"                required property color color"),a(`
`),t("span",{class:"line"},"                required property string colorName"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("                "),t("span",{class:"token property"},"selectedColor"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"color")]),a(`
`),t("span",{class:"line"},[a("                "),t("span",{class:"token property"},"selectedColorName"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"colorName")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),$w={name:"25",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[Ew,jw]),_:1},16))}},Mw=t("h1",null,"Prefer Instantiated Types Over Singletons For Data",-1),Pw=t("p",null,[a("See "),t("a",{href:"https://github.com/Furkanzmc/QML-Coding-Guide/issues/9",target:"_blank",rel:"noopener"},"Issue #2"),a(" for related discussions.")],-1),Tw=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// ColorsWindow.qml")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"Window"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},[t("span",{class:"token keyword"},"property"),a(),t("span",{class:"token property"},"alias"),a(),t("span",{class:"token property"},"model")]),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("rp"),t("span",{class:"token punctuation"},"."),a("model")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Column"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token class-name"},"Repeater"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"rp")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"model"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"PaletteColorsModel"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token punctuation"},"}"),a(),t("span",{class:"token comment"},"// Alternatively")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"delegate"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"ColorViewer"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},"                required property color color"),a(`
`),t("span",{class:"line"},"                required property string colorName"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("                "),t("span",{class:"token property"},"selectedColor"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"color")]),a(`
`),t("span",{class:"line"},[a("                "),t("span",{class:"token property"},"selectedColorName"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"colorName")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Aw={name:"26",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[Mw,Pw,Tw]),_:1},16))}},Lw=t("h1",null,"Watch Out for Object Ownership Rules",-1),Iw=t("p",null,"Two ownership types:",-1),Rw=t("ul",null,[t("li",null,"C++"),t("li",null,"QML"),t("li",null,"Expose data with properties only")],-1),qw=t("blockquote",null,[t("p",null,[a("See "),t("a",{href:"https://zmc.space/freeze-columns-with-qml-table-view.html",target:"_blank",rel:"noopener"},"example"),a(" for using properties for data customization")])],-1),Fw=t("blockquote",null,[t("p",null,[a("See "),t("a",{href:"https://embeddeduse.com/2018/04/02/qml-engine-deletes-c-objects-still-in-use/",target:"_blank",rel:"noopener"},"this article"),a(" for a real life example of a related bug in an application.")])],-1),Nw=t("pre",{class:"slidev-code language-cpp"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token function"},"Q_PROPERTY"),t("span",{class:"token punctuation"},"("),a(" QObject"),t("span",{class:"token operator"},"*"),a(" colors READ colors "),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("QObject"),t("span",{class:"token operator"},"*"),a(),t("span",{class:"token function"},"colors"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token comment"},"// Ownership remains in C++.")]),a(`
`),t("span",{class:"line"},[a("Q_INVOKABLE QObject"),t("span",{class:"token operator"},"*"),a(),t("span",{class:"token function"},"myData"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token comment"},"// Ownership is transferred to QML.")])])],-1),Dw={name:"27",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[Lw,Iw,Rw,qw,Fw,Nw]),_:1},16))}},Hw=t("h1",null,[t("a",{href:"https://github.com/Furkanzmc/QML-Coding-Guide#performance-and-memory",target:"_blank",rel:"noopener"},"Memory")],-1),Vw=t("p",null,"Profile first! Needs contributions.",-1),zw={name:"28",setup(e){const n={layout:"section"};return L(D),(s,o)=>(b(),H(dt,te(ne(n)),{default:Q(()=>[Hw,Vw]),_:1},16))}},Bw=t("h1",null,[t("a",{href:"https://github.com/Furkanzmc/QML-Coding-Guide#signal-handling",target:"_blank",rel:"noopener"},"Signals")],-1),Qw=t("p",null,"Signals != Functions",-1),Ww={name:"29",setup(e){const n={layout:"section"};return L(D),(s,o)=>(b(),H(dt,te(ne(n)),{default:Q(()=>[Bw,Qw]),_:1},16))}},Uw=t("h1",null,"Functions vs Signals",-1),Gw=t("p",null,"Function -> Changes Internal State",-1),Yw=t("blockquote",null,[t("p",null,"Imperative form -> doSomething()")],-1),Kw=t("p",null,"Signal -> Announces Internal State Change",-1),Zw=t("blockquote",null,[t("p",null,"Passive form -> somethingChanged()")],-1),Jw={name:"30",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[Uw,Gw,Yw,Kw,Zw]),_:1},16))}},Xw=t("h1",null,[a("Avoid Using "),t("code",null,".connect()"),a(" in QML")],-1),ex=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},"ApplicationWindow"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    property list<QtObject> myObjects"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token punctuation"},"[")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token class-name"},"QtObject"),a(),t("span",{class:"token punctuation"},"{"),a(" signal somethingHappened() "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),a(" QtObject "),t("span",{class:"token punctuation"},"{"),a(" signal somethingHappened() "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},",")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token class-name"},"QtObject"),a(),t("span",{class:"token punctuation"},"{"),a(" signal somethingHappened() "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),a(" QtObject "),t("span",{class:"token punctuation"},"{"),a(" signal somethingHappened() "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},",")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token class-name"},"QtObject"),a(),t("span",{class:"token punctuation"},"{"),a(" signal somethingHappened() "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),a(" QtObject "),t("span",{class:"token punctuation"},"{"),a(" signal somethingHappened() "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},",")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token class-name"},"QtObject"),a(),t("span",{class:"token punctuation"},"{"),a(" signal somethingHappened() "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),a(" QtObject "),t("span",{class:"token punctuation"},"{"),a(" signal somethingHappened() "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"]")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"ListView"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"cacheBuffer"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"1"),a(),t("span",{class:"token comment"},"// Low enough we can resize the window to destroy buttons.")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"model"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("root"),t("span",{class:"token punctuation"},"."),a("myObjects"),t("span",{class:"token punctuation"},"."),a("length")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"delegate"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"Button"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"text"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token string"},'"Button "'),a(),t("span",{class:"token operator"},"+"),a(" index")])]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"onClicked"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("root"),t("span",{class:"token punctuation"},"."),a("myObjects"),t("span",{class:"token punctuation"},"["),a("index"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"somethingHappened"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")])]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"Component.onCompleted"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("root"),t("span",{class:"token punctuation"},"."),a("myObjects"),t("span",{class:"token punctuation"},"["),a("index"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"."),a("somethingHappened"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"connect"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a(" console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),a("text"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")")])]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"Component.onDestruction"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Destroyed #"'),t("span",{class:"token punctuation"},","),a(" index"),t("span",{class:"token punctuation"},")")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),nx={name:"31",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[Xw,ex]),_:1},16))}},tx=t("h1",null,[a("Avoid Using "),t("code",null,".connect()"),a(" in QML (Continued)")],-1),sx=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},"ApplicationWindow"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    property list<QtObject> myObjects"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token punctuation"},"[")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token comment"},"// ... Same model as previous code snippet")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"]")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"ListView"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"cacheBuffer"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"1"),a(),t("span",{class:"token comment"},"// Low enough we can resize the window to destroy buttons.")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"model"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("root"),t("span",{class:"token punctuation"},"."),a("myObjects"),t("span",{class:"token punctuation"},"."),a("length")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"delegate"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"Button"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"dlg")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"text"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token string"},'"Button "'),a(),t("span",{class:"token operator"},"+"),a(" index")])]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"onClicked"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("root"),t("span",{class:"token punctuation"},"."),a("myObjects"),t("span",{class:"token punctuation"},"["),a("index"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"somethingHappened"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")")])]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"Component.onDestruction"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"Destroyed #"'),t("span",{class:"token punctuation"},","),a(" index"),t("span",{class:"token punctuation"},")")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token class-name"},"Connections"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("                "),t("span",{class:"token property"},"target"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("root"),t("span",{class:"token punctuation"},"."),a("myObjects"),t("span",{class:"token punctuation"},"["),a("index"),t("span",{class:"token punctuation"},"]")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("                function onSomethingHappened() "),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},"                    console.log(dlg.text)"),a(`
`),t("span",{class:"line"},[a("                "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),ax={name:"32",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[tx,sx]),_:1},16))}},ox=t("h1",null,"What is wrong here?",-1),ix=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// ColorPicker.qml")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"Rectangle"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},"    signal colorPicked(color pickedColor)"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"ColorDialog"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"onColorChanged"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},"            root.colorPicked(color)"),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// main.qml")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"Window"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"ColorPicker"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"onColorPicked"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},"            color = pickedColor"),a(`
`),t("span",{class:"line"},[a("            label.text = "),t("span",{class:"token string"},'"Color Changed"')]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Label"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"label "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),rx={name:"33",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[ox,ix]),_:1},16))}},lx=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// ColorPicker.qml")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"Rectangle"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},"    signal colorPicked(color pickedColor)"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"ColorDialog"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"onColorChanged"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},"            root.color = color"),a(`
`),t("span",{class:"line"},"            root.colorPicked(color)"),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// main.qml")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"Window"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"ColorPicker"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"onColorPicked"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            label.text = "),t("span",{class:"token string"},'"Color Changed"')]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Label"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"label "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),cx={name:"34",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[lx]),_:1},16))}},ux={class:"slidev-layout fact"},px={class:"my-auto"},$p={name:"fact",setup(e){return L(D),(n,s)=>(b(),B("div",ux,[t("div",px,[an(n.$slots,"default")])]))}},dx=t("p",null,"Rule of thumb:",-1),fx=t("pre",null,[t("code",null,`When communicating up, use signals.
When communicating down, use functions.
`)],-1),mx={name:"35",setup(e){const n={layout:"fact"};return L(D),(s,o)=>(b(),H($p,te(ne(n)),{default:Q(()=>[dx,fx]),_:1},16))}},hx=t("h1",null,[t("a",{href:"https://github.com/Furkanzmc/QML-Coding-Guide#states-and-transitions",target:"_blank",rel:"noopener"},"States and Transitions")],-1),gx={name:"36",setup(e){const n={layout:"section"};return L(D),(s,o)=>(b(),H(dt,te(ne(n)),{default:Q(()=>[hx]),_:1},16))}},vx=t("h1",null,"Don\u2019t Define Top Level States",-1),yx=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    component Rect"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"Rectangle"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"self")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("        readonly property alias pressed"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("ma"),t("span",{class:"token punctuation"},"."),a("containsPress")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"states"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"State"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"when"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("ma"),t("span",{class:"token punctuation"},"."),a("containsMouse")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token class-name"},"PropertyChanges"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token property"},"target"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"self"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token property"},"color"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token string"},'"red"'),a()]),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token class-name"},"MouseArea"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"ma"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token property"},"hoverEnabled"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token boolean"},"true"),a()]),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Rect"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"rect")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"states"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"State"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"when"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("rect"),t("span",{class:"token punctuation"},"."),a("pressed")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token class-name"},"PropertyChanges"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token property"},"target"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"rect"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token property"},"color"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token string"},'"yellow"'),a()]),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),kx={name:"37",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[vx,yx]),_:1},16))}},_x=t("h1",null,[t("a",{href:"https://github.com/Furkanzmc/QML-Coding-Guide#visual-items",target:"_blank",rel:"noopener"},"Visual Items")],-1),bx={name:"38",setup(e){const n={layout:"section"};return L(D),(s,o)=>(b(),H(dt,te(ne(n)),{default:Q(()=>[_x]),_:1},16))}};var wx="/qtdevcon-community-driven-coding-guidelines/qtquickcontrols2-control.png";const xx=t("h1",null,"One Size Does Not Fit All",-1),Cx=t("ul",null,[t("li",null,[t("strong",null,"Implicit Size"),a(": Space occupied when no explicit size or anchors are set.")]),t("li",null,[t("strong",null,"Explicit Size"),a(": Space occupied when an external size is given, ie "),t("code",null,"width/height"),a(" or "),t("code",null,"anchors"),a(" are set.")]),t("li",null,[t("strong",null,"Content Size"),a(": Space occupied by the contents of a view.")]),t("li",null,[t("strong",null,"Padding"),a(": Space between the content item and the edge of a component.")]),t("li",null,[t("strong",null,"Margin"),a(": Space between two controls.")]),t("li",null,[t("strong",null,"Inset"),a(": Space between background and the edge of a component.")])],-1),Sx=t("img",{src:wx,class:"h-65 rounded shadow",style:{"text-align":"center"}},null,-1),Ox={name:"39",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[xx,Cx,Sx]),_:1},16))}},Ex=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// CheckBox.qml")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},"    property bool checked"),a(`
`),t("span",{class:"line"},"    property string text"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Rectangle"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"indicator")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"50")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"50")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"visible"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("root"),t("span",{class:"token punctuation"},"."),a("checked")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"color"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token string"},'"red"')])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Label"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token class-name"},"anchors"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"left"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("indicator"),t("span",{class:"token punctuation"},"."),a("right")])]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"verticalCenter"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("indicator"),t("span",{class:"token punctuation"},"."),a("verticalCenter")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"text"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("root"),t("span",{class:"token punctuation"},"."),a("text")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),jx=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// main.qml")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"Window"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"CheckBox"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"checked"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token boolean"},"true")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"text"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token string"},'"CheckBox"')])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Column"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"100")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token class-name"},"Repeater"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"model"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"5")])]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"delegate"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"CheckBox"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},"                required property int index"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("                "),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("parent"),t("span",{class:"token punctuation"},"."),a("width")])]),a(`
`),t("span",{class:"line"},[a("                "),t("span",{class:"token property"},"checked"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("index "),t("span",{class:"token operator"},"%"),a(),t("span",{class:"token number"},"2"),a(),t("span",{class:"token operator"},"==="),a(),t("span",{class:"token number"},"0")])]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),$x={name:"40",setup(e){const n={layout:"two-cols"};return L(D),(s,o)=>(b(),H(ft,te(ne(n)),{right:Q(i=>[jx]),default:Q(()=>[Ex]),_:1},16))}},Mx=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// CheckBox.qml")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"Item"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"root")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},"    property bool checked"),a(`
`),t("span",{class:"line"},"    property string text"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"implicitWidth"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("indicator"),t("span",{class:"token punctuation"},"."),a("implicitWidth "),t("span",{class:"token operator"},"+"),a(" label"),t("span",{class:"token punctuation"},"."),a("implicitWidth")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"implicitHeight"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),a("indicator"),t("span",{class:"token punctuation"},"."),a("implicitHeight"),t("span",{class:"token punctuation"},","),a(" label"),t("span",{class:"token punctuation"},"."),a("implicitHeight"),t("span",{class:"token punctuation"},")")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Rectangle"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"indicator")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"height")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"height"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("parent"),t("span",{class:"token punctuation"},"."),a("height "),t("span",{class:"token operator"},"*"),a(),t("span",{class:"token number"},"0.5")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"implicitWidth"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"50")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"implicitHeight"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"50")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"visible"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("root"),t("span",{class:"token punctuation"},"."),a("checked")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"color"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token string"},'"red"')])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Label"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"id"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},"label")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token class-name"},"anchors"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"left"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("indicator"),t("span",{class:"token punctuation"},"."),a("right")])]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"verticalCenter"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("indicator"),t("span",{class:"token punctuation"},"."),a("verticalCenter")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"text"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("root"),t("span",{class:"token punctuation"},"."),a("text")])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Px=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// main.qml")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token class-name"},"Window"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"CheckBox"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"checked"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token boolean"},"true")])]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"text"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token string"},'"CheckBox"')])]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token class-name"},"Column"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token property"},"width"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"100")])]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token class-name"},"Repeater"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"model"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token number"},"5")])]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token property"},"delegate"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token class-name"},"CheckBox"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},"                required property int index"),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("                "),t("span",{class:"token property"},"checked"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[a("index "),t("span",{class:"token operator"},"%"),a(),t("span",{class:"token number"},"2"),a(),t("span",{class:"token operator"},"==="),a(),t("span",{class:"token number"},"0")])]),a(`
`),t("span",{class:"line"},[a("            "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("        "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),Tx={name:"41",setup(e){const n={layout:"two-cols"};return L(D),(s,o)=>(b(),H(ft,te(ne(n)),{right:Q(i=>[Px]),default:Q(()=>[Mx]),_:1},16))}},Ax={class:"grid grid-cols-2 w-full h-full"},Lx=xe({name:"image-right",props:{image:{type:String},class:{type:String}},setup(e){const n=e;L(D);const s=j(()=>Cp(n.image));return(o,i)=>(b(),B("div",Ax,[t("div",{class:Ie(["slidev-layout default",n.class])},[an(o.$slots,"default")],2),t("div",{class:"w-full w-full",style:Ue(k(s))},null,4)]))}}),Ix=t("blockquote",null,[t("p",null,[a("\u2026 our intellectual powers are rather geared to master "),t("strong",null,"static relations"),a(" and that our powers to visualize "),t("strong",null,"processes evolving in time"),a(" are relatively poorly developed. - Edsger W. Dijkstra, Go To Statement Considered Harmful")])],-1),Rx={name:"42",setup(e){const n={layout:"image-right",image:"https://i.pinimg.com/originals/d9/eb/e2/d9ebe29636e1fac1e40b7a10da61bb7e.jpg"};return L(D),(s,o)=>(b(),H(Lx,te(ne(n)),{default:Q(()=>[Ix]),_:1},16))}},qx=t("h1",null,[t("a",{href:"https://github.com/Furkanzmc/QML-Coding-Guide#javascript",target:"_blank",rel:"noopener"},"JavaScript")],-1),Fx={name:"43",setup(e){const n={layout:"section"};return L(D),(s,o)=>(b(),H(dt,te(ne(n)),{default:Q(()=>[qx]),_:1},16))}},Nx=t("pre",{class:"slidev-code language-javascript"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token comment"},"// Arrow function")]),a(`
`),t("span",{class:"line"},[a("root"),t("span",{class:"token punctuation"},"."),a("value "),t("span",{class:"token operator"},"="),a(" Qt"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"binding"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a(" root"),t("span",{class:"token punctuation"},"."),a("someOtherValue"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// The old way.")]),a(`
`),t("span",{class:"line"},[a("root"),t("span",{class:"token punctuation"},"."),a("value "),t("span",{class:"token operator"},"="),a(" Qt"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"binding"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"function"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token punctuation"},"{"),a(),t("span",{class:"token keyword"},"return"),a(" root"),t("span",{class:"token punctuation"},"."),a("someOtherValue "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[t("span",{class:"token comment"},"// Variables")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"const"),a(" value "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"32"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"let"),a(" valueTwo "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"42"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// Valid assignment since we are in a different scope.")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"const"),a(" value "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"32"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token keyword"},"let"),a(" valueTwo "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"42"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token keyword"},"const"),a(" value "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"32"),t("span",{class:"token punctuation"},";")]),a(`
`),t("span",{class:"line"},[a("value "),t("span",{class:"token operator"},"="),a(),t("span",{class:"token number"},"42"),t("span",{class:"token punctuation"},";"),a(),t("span",{class:"token comment"},"// ERROR!")])])],-1),Dx={name:"44",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[Nx]),_:1},16))}},Hx=t("h1",null,"Use arrow function syntax for signal handlers",-1),Vx=t("pre",{class:"slidev-code language-qml"},[t("code",null,[t("span",{class:"line"},[t("span",{class:"token class-name"},"MouseArea"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// Good!")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"onClicked"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token javascript-expression language-javascript"},[t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"mouse"),t("span",{class:"token punctuation"},")"),a(),t("span",{class:"token operator"},"=>"),a()]),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token comment"},"// Bad...")]),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token property"},"onClicked"),t("span",{class:"token punctuation"},":"),a(),t("span",{class:"token punctuation"},"{")]),a(`
`),t("span",{class:"line"}),a(`
`),t("span",{class:"line"},[a("    "),t("span",{class:"token punctuation"},"}")]),a(`
`),t("span",{class:"line"},[t("span",{class:"token punctuation"},"}")])])],-1),zx={name:"45",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[Hx,Vx]),_:1},16))}},Bx=t("h1",null,"What\u2019s next?",-1),Qx=t("ul",null,[t("li",null,"OUt with the old, in with the new"),t("li",null,"More content for Qt 6"),t("li",null,"An architecture section"),t("li",null,"More contributions from others")],-1),Wx=t("blockquote",null,[t("p",null,[a("QML Coding Guidelines on GitHub - "),t("a",{href:"https://github.com/Furkanzmc/QML-Coding-Guide",target:"_blank",rel:"noopener"},"https://github.com/Furkanzmc/QML-Coding-Guide")])],-1),Ux={name:"46",setup(e){const n={};return L(D),(s,o)=>(b(),H(Te,te(ne(n)),{default:Q(()=>[Bx,Qx,Wx]),_:1},16))}},Gx=t("h1",null,"Thank You",-1),Yx={name:"47",setup(e){const n={layout:"fact"};return L(D),(s,o)=>(b(),H($p,te(ne(n)),{default:Q(()=>[Gx]),_:1},16))}};var Kx=[{path:"1",name:"page-1",component:S0,meta:{theme:"seriph",download:!0,number:!0,class:"text-center",highlighter:"prism",lineNumbers:!1,drawings:{persist:!1},themeConfig:{primary:"#485a62"},background:"https://unsplash.com/photos/cAtzHUz7Z8g/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fGNvbW11bml0eSUyMHdvcmt8ZW58MHx8fHwxNjU0NDY3MTQ3&force=true&w=2400",title:"Community Driven Coding Guidelines for QML",slide:{raw:`---
# try also 'default' to start simple
theme: seriph
download: true
number: true
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: prism
# show line numbers in code blocks
lineNumbers: false
# persist drawings in exports and build
drawings:
  persist: false
themeConfig:
  primary: '#485a62'
background: https://unsplash.com/photos/cAtzHUz7Z8g/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fGNvbW11bml0eSUyMHdvcmt8ZW58MHx8fHwxNjU0NDY3MTQ3&force=true&w=2400
---

<style>
.slidev-code {
    height: 90%;
    overflow-y: scroll;
}
</style>

# Community Driven Coding Guidelines for QML

<!--
- Welcome to the talk, thanks for joining.
- It's good to be here.
-->
`,title:"Community Driven Coding Guidelines for QML",level:1,content:`<style>
.slidev-code {
    height: 90%;
    overflow-y: scroll;
}
</style>

# Community Driven Coding Guidelines for QML`,frontmatter:{theme:"seriph",download:!0,number:!0,class:"text-center",highlighter:"prism",lineNumbers:!1,drawings:{persist:!1},themeConfig:{primary:"#485a62"},background:"https://unsplash.com/photos/cAtzHUz7Z8g/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTB8fGNvbW11bml0eSUyMHdvcmt8ZW58MHx8fHwxNjU0NDY3MTQ3&force=true&w=2400",title:"Community Driven Coding Guidelines for QML"},note:`- Welcome to the talk, thanks for joining.
- It's good to be here.`,index:0,start:0,end:33,notesHTML:`<ul>
<li>Welcome to the talk, thanks for joining.</li>
<li>It's good to be here.</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:$0,meta:{slide:{raw:`
# Furkan Uzumcu

- Started using QML in 2017
- \u2764\uFE0F Open Source
- \u2764\uFE0F [Split] Mechanical Keyboards
- Working at Autodesk
- Furkanzmc @ GitHub
- Furkanzmc @ Twitter
- Website: https://zmc.space

<!--
- Started 2017, mobile, desktop
- I build my own keyboards
- Now working at Autodesk with awesome designers and developers
- I love UI work and working with designers
- Please interrupt and ask questions
- Can't share Alias because it's not out yet.
-->
`,title:"Furkan Uzumcu",level:1,content:`# Furkan Uzumcu

- Started using QML in 2017
- \u2764\uFE0F Open Source
- \u2764\uFE0F [Split] Mechanical Keyboards
- Working at Autodesk
- Furkanzmc @ GitHub
- Furkanzmc @ Twitter
- Website: https://zmc.space`,frontmatter:{},note:`- Started 2017, mobile, desktop
- I build my own keyboards
- Now working at Autodesk with awesome designers and developers
- I love UI work and working with designers
- Please interrupt and ask questions
- Can't share Alias because it's not out yet.`,index:1,start:34,end:54,notesHTML:`<ul>
<li>Started 2017, mobile, desktop</li>
<li>I build my own keyboards</li>
<li>Now working at Autodesk with awesome designers and developers</li>
<li>I love UI work and working with designers</li>
<li>Please interrupt and ask questions</li>
<li>Can't share Alias because it's not out yet.</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:L0,meta:{layout:"image-left",image:"https://unsplash.com/photos/ioYwosPYC0U/download?force=true&w=640",slide:{raw:`---
layout: image-left
image: https://unsplash.com/photos/ioYwosPYC0U/download?force=true&w=640
---

# Why have guidelines?

- Pool experience from vastly different industries
- Sane defaults for new comers to the language
- Base for tooling

<!--
- Go over slide first
- Poll: How many QML devs, how many started out as C++, how many as HTML developers?
- Poll: How many embeded, desktop, web?
- Unique situation for QML: New language, different paradigm.
-->
`,title:"Why have guidelines?",level:1,content:`# Why have guidelines?

- Pool experience from vastly different industries
- Sane defaults for new comers to the language
- Base for tooling`,frontmatter:{layout:"image-left",image:"https://unsplash.com/photos/ioYwosPYC0U/download?force=true&w=640"},note:`- Go over slide first
- Poll: How many QML devs, how many started out as C++, how many as HTML developers?
- Poll: How many embeded, desktop, web?
- Unique situation for QML: New language, different paradigm.`,index:2,start:54,end:72,notesHTML:`<ul>
<li>Go over slide first</li>
<li>Poll: How many QML devs, how many started out as C++, how many as HTML developers?</li>
<li>Poll: How many embeded, desktop, web?</li>
<li>Unique situation for QML: New language, different paradigm.</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:F0,meta:{slide:{raw:`
# Yet another guideline?..

![standards](https://imgs.xkcd.com/comics/standards.png)

> - [Official Best Practices for QML and Qt Quick from Qt](https://doc.qt.io/qt-6/qtquick-bestpractices.html)
> - [QML Best Practices Search](https://www.google.com/search?hl=en&q=qml+best+practices)

<!--
- Struggle with the paradigm shift
- Started out with me writing down what I learn and solutions to my mistakes.
- Good Qt et al documentation, lone line videos, but scattered
- Make it a more open conversation.
-->
`,title:"Yet another guideline?..",level:1,content:`# Yet another guideline?..

![standards](https://imgs.xkcd.com/comics/standards.png)

> - [Official Best Practices for QML and Qt Quick from Qt](https://doc.qt.io/qt-6/qtquick-bestpractices.html)
> - [QML Best Practices Search](https://www.google.com/search?hl=en&q=qml+best+practices)`,frontmatter:{},note:`- Struggle with the paradigm shift
- Started out with me writing down what I learn and solutions to my mistakes.
- Good Qt et al documentation, lone line videos, but scattered
- Make it a more open conversation.`,index:3,start:73,end:88,notesHTML:`<ul>
<li>Struggle with the paradigm shift</li>
<li>Started out with me writing down what I learn and solutions to my mistakes.</li>
<li>Good Qt et al documentation, lone line videos, but scattered</li>
<li>Make it a more open conversation.</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:H0,meta:{slide:{raw:`
# Guidelines are NOT...

- Unchangeable
- The absolute truth
- Be all end all

<!--
- Change as you learn.
- Ignore when makes sense.
- No war. Discuss and adjust.
-->
`,title:"Guidelines are NOT...",level:1,content:`# Guidelines are NOT...

- Unchangeable
- The absolute truth
- Be all end all`,frontmatter:{},note:`- Change as you learn.
- Ignore when makes sense.
- No war. Discuss and adjust.`,index:4,start:89,end:102,notesHTML:`<ul>
<li>Change as you learn.</li>
<li>Ignore when makes sense.</li>
<li>No war. Discuss and adjust.</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:B0,meta:{slide:{raw:`
# Guidelines are for...

- Making code easier to:
    + read
    + understand
    + maintain
- Making it easier to detect errors or pitfalls
- Low barrier knowledge for new comers
- Aid in tooling

<!--
- What guidelines are is more important than what they aren't.
-->
`,title:"Guidelines are for...",level:1,content:`# Guidelines are for...

- Making code easier to:
    + read
    + understand
    + maintain
- Making it easier to detect errors or pitfalls
- Low barrier knowledge for new comers
- Aid in tooling`,frontmatter:{},note:"- What guidelines are is more important than what they aren't.",index:5,start:103,end:118,notesHTML:`<ul>
<li>What guidelines are is more important than what they aren't.</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:fb,meta:{slide:{raw:`
# How to Read QML Code

\`\`\`qml {all|1-1|1-3|1-6|1-8|1-11|1-17|all}
// CircleMouseArea.qml
Item {
    id: root

    property int radius

    signal clicked(MouseEvent mouse)

    implicitWidth: 50
    implicitHeight: 50

    Rectangle {
        width: parent.width / 2
        height: height
        radius: root.radius
    }

    MouseArea {
        // If mouse click is inside the circle, emits root.clicked(mouse)
    }
}
\`\`\`

<!--
- Gather information before you move down
- Interface first
- Easy to glace over
- Signals and properties show customization points and interactions
- Often, you are not interested in implementation details
- Makes it easier for designers.
- Reduce the barrier of entry
-->
`,title:"How to Read QML Code",level:1,content:`# How to Read QML Code

\`\`\`qml {all|1-1|1-3|1-6|1-8|1-11|1-17|all}
// CircleMouseArea.qml
Item {
    id: root

    property int radius

    signal clicked(MouseEvent mouse)

    implicitWidth: 50
    implicitHeight: 50

    Rectangle {
        width: parent.width / 2
        height: height
        radius: root.radius
    }

    MouseArea {
        // If mouse click is inside the circle, emits root.clicked(mouse)
    }
}
\`\`\``,frontmatter:{},note:`- Gather information before you move down
- Interface first
- Easy to glace over
- Signals and properties show customization points and interactions
- Often, you are not interested in implementation details
- Makes it easier for designers.
- Reduce the barrier of entry`,index:6,start:119,end:156,notesHTML:`<ul>
<li>Gather information before you move down</li>
<li>Interface first</li>
<li>Easy to glace over</li>
<li>Signals and properties show customization points and interactions</li>
<li>Often, you are not interested in implementation details</li>
<li>Makes it easier for designers.</li>
<li>Reduce the barrier of entry</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:vb,meta:{layout:"section",slide:{raw:`---
layout: section
---

# [Code Style](https://github.com/Furkanzmc/QML-Coding-Guide#code-style)
`,title:"[Code Style](https://github.com/Furkanzmc/QML-Coding-Guide#code-style)",level:1,content:"# [Code Style](https://github.com/Furkanzmc/QML-Coding-Guide#code-style)",frontmatter:{layout:"section"},index:7,start:156,end:162,notesHTML:"",filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:_b,meta:{slide:{raw:`
# Code Order

- id
- Property declarations
- Signal declarations
- Property initializations
- Attached properties and signal handlers
- States
- Transitions
- Signal handlers
- Child objects
  + Visual Items
  + Qt provided non-visual items
  + Custom non-visual items
- \`QtObject\` for encapsulating private members[[1]](https://bugreports.qt.io/browse/QTBUG-11984)
- JavaScript functions

<!--
- Should be easy to imagine the code
- Discuss with your team and adjust
-->
`,title:"Code Order",level:1,content:`# Code Order

- id
- Property declarations
- Signal declarations
- Property initializations
- Attached properties and signal handlers
- States
- Transitions
- Signal handlers
- Child objects
  + Visual Items
  + Qt provided non-visual items
  + Custom non-visual items
- \`QtObject\` for encapsulating private members[[1]](https://bugreports.qt.io/browse/QTBUG-11984)
- JavaScript functions`,frontmatter:{},note:`- Should be easy to imagine the code
- Discuss with your team and adjust`,index:8,start:163,end:186,notesHTML:`<ul>
<li>Should be easy to imagine the code</li>
<li>Discuss with your team and adjust</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:Ob,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

# Bad - ID, Properties, and Signals

\`\`\`qml
// CustomMouseArea.qml
MouseArea {
    Component.onCompleted: { }
    onTripleClicked: { }
    onClicked: { }
    pressAndHoldInterval: 20

    signal tripleClicked()
    property point pressedPosition

    id: root
}
\`\`\`

::right::

# Good - ID, Properties, and Signals

\`\`\`qml
// CustomMouseArea.qml
MouseArea {
    id: root

    property point pressedPosition

    signal tripleClicked()

    pressAndHoldInterval: 20
    onClicked: { }
    onTripleClicked: { }
    Component.onCompleted: { }
    Component.onDestruction: { }
}
\`\`\`

<!--
- Glance and understand the basics, big picture
- As you read down, things make more and more sense
-->
`,title:"Bad - ID, Properties, and Signals",level:1,content:`# Bad - ID, Properties, and Signals

\`\`\`qml
// CustomMouseArea.qml
MouseArea {
    Component.onCompleted: { }
    onTripleClicked: { }
    onClicked: { }
    pressAndHoldInterval: 20

    signal tripleClicked()
    property point pressedPosition

    id: root
}
\`\`\`

::right::

# Good - ID, Properties, and Signals

\`\`\`qml
// CustomMouseArea.qml
MouseArea {
    id: root

    property point pressedPosition

    signal tripleClicked()

    pressAndHoldInterval: 20
    onClicked: { }
    onTripleClicked: { }
    Component.onCompleted: { }
    Component.onDestruction: { }
}
\`\`\``,frontmatter:{layout:"two-cols"},note:`- Glance and understand the basics, big picture
- As you read down, things make more and more sense`,index:9,start:186,end:233,notesHTML:`<ul>
<li>Glance and understand the basics, big picture</li>
<li>As you read down, things make more and more sense</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Pb,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

# Bad - ID, Properties, and Signals

\`\`\`qml
Item {
    Item {
        anchors.left: parent.left
        z: 32
        x: 23
        y: 32
        implicitWidth: 300
        width: 300
        id: myItem
    }
}
\`\`\`

::right::

# Good - ID, Properties, and Signals

\`\`\`qml
Item {
    Item {
        id: myItem
        x: 23
        y: 32
        z: 32
        implicitWidth: 300
        width: 300
        anchors.left: parent.left
    }
}
\`\`\`

<!--
- Position and geometry first
- Prioritize most essential properties of component
- Interface comes first
-->
`,title:"Bad - ID, Properties, and Signals",level:1,content:`# Bad - ID, Properties, and Signals

\`\`\`qml
Item {
    Item {
        anchors.left: parent.left
        z: 32
        x: 23
        y: 32
        implicitWidth: 300
        width: 300
        id: myItem
    }
}
\`\`\`

::right::

# Good - ID, Properties, and Signals

\`\`\`qml
Item {
    Item {
        id: myItem
        x: 23
        y: 32
        z: 32
        implicitWidth: 300
        width: 300
        anchors.left: parent.left
    }
}
\`\`\``,frontmatter:{layout:"two-cols"},note:`- Position and geometry first
- Prioritize most essential properties of component
- Interface comes first`,index:10,start:233,end:277,notesHTML:`<ul>
<li>Position and geometry first</li>
<li>Prioritize most essential properties of component</li>
<li>Interface comes first</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:Rb,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

# Bad - Function Ordering

\`\`\`qml
Item {
    id: root

    function someFunction() { }

    someProperty: true
}
\`\`\`

::right::

# Good - Function Ordering

\`\`\`qml
Item {
    id: root
    someProperty: true

    // Function are declared at the bottom of the document.
    function someFunction() { }
}
\`\`\`

<!--
- Don't put functions in your interface
- Large functions hurt readibility
-->
`,title:"Bad - Function Ordering",level:1,content:`# Bad - Function Ordering

\`\`\`qml
Item {
    id: root

    function someFunction() { }

    someProperty: true
}
\`\`\`

::right::

# Good - Function Ordering

\`\`\`qml
Item {
    id: root
    someProperty: true

    // Function are declared at the bottom of the document.
    function someFunction() { }
}
\`\`\``,frontmatter:{layout:"two-cols"},note:`- Don't put functions in your interface
- Large functions hurt readibility`,index:11,start:277,end:312,notesHTML:`<ul>
<li>Don't put functions in your interface</li>
<li>Large functions hurt readibility</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:Hb,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

# Bad - States and Transitions

\`\`\`qml
RowLayout {

    Item {
        states: [ State { } ]
        transitions: [ Transitions { } ]
        width: 300
        Layout.fillHeight: true
        enabled: true
        layer.enabled: false
    }
}
\`\`\`

::right::

# Good - States and Transitions

\`\`\`qml
RowLayout {

    Item {
        width: 300
        enabled: true
        layer.enabled: false
        Layout.fillHeight: true
        states: [ State { } ]
        transitions: [ Transitions { } ]
    }
}
\`\`\`

<!--
- Eaiser to see what you are changing
- You read top to bottom, more familiarity
-->
`,title:"Bad - States and Transitions",level:1,content:`# Bad - States and Transitions

\`\`\`qml
RowLayout {

    Item {
        states: [ State { } ]
        transitions: [ Transitions { } ]
        width: 300
        Layout.fillHeight: true
        enabled: true
        layer.enabled: false
    }
}
\`\`\`

::right::

# Good - States and Transitions

\`\`\`qml
RowLayout {

    Item {
        width: 300
        enabled: true
        layer.enabled: false
        Layout.fillHeight: true
        states: [ State { } ]
        transitions: [ Transitions { } ]
    }
}
\`\`\``,frontmatter:{layout:"two-cols"},note:`- Eaiser to see what you are changing
- You read top to bottom, more familiarity`,index:12,start:312,end:355,notesHTML:`<ul>
<li>Eaiser to see what you are changing</li>
<li>You read top to bottom, more familiarity</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:Bb,meta:{slide:{raw:`
# Full Example

\`\`\`qml
// First Qt imports
import QtQuick 2.15
import QtQuick.Controls 2.15
// Then custom imports
import my.library 1.0

Item {
    id: root

    // ----- Property Declarations

    // Required properties should be at the top.
    required property int radius: 0

    property int radius: 0
    property color borderColor: "blue"

    // ----- Signal declarations

    signal clicked()
    signal doubleClicked()

    // ----- In this section, we group the size and position information together.

    x: 0
    y: 0
    z: 0
    width: 100
    height: 100
    anchors.top: parent.top // If a single assignment, dot notation can be used.
    // If the item is an image, sourceSize is also set here.
    // sourceSize: Qt.size(12, 12)

    // ----- Then comes the other properties. There's no predefined order to these.

    // Do not use empty lines to separate the assignments. Empty lines are reserved
    // for separating type declarations.
    enabled: true
    layer.enabled: true

    // ----- Then attached properties and attached signal handlers.

    Layout.fillWidth: true
    Drag.active: false
    Drag.onActiveChanged: { }

    // ----- States and transitions.

    states: [ State { } ]
    transitions: [ Transitions { } ]

    // ----- Signal handlers

    onWidthChanged: { } // Always use curly braces.
    // onCompleted and onDestruction signal handlers are always the last in
    // the order.
    Component.onCompleted: { }
    Component.onDestruction: { }

    // ----- Visual children.

    Rectangle {
        height: 50
        anchors: { // For multiple assignments, use group notation.
            top: parent.top
            left: parent.left
            right: parent.right
        }
        color: "red"
        layer.enabled: true
    }

    // ----- Qt provided non-visual children

    Timer { }

    // ----- Custom non-visual children

    MyCustomNonVisualType { }

    QtObject {
        id: privates

        property int diameter: 0
    }

    // ----- JavaScript functions

    function collapse() { }

    function setCollapsed(value: bool) { }
}
\`\`\`

<!--
- Takes a while to get used to, but pays off
- Our designers can't understand code otherwise
- Structured > Unstructured
-->
`,title:"Full Example",level:1,content:`# Full Example

\`\`\`qml
// First Qt imports
import QtQuick 2.15
import QtQuick.Controls 2.15
// Then custom imports
import my.library 1.0

Item {
    id: root

    // ----- Property Declarations

    // Required properties should be at the top.
    required property int radius: 0

    property int radius: 0
    property color borderColor: "blue"

    // ----- Signal declarations

    signal clicked()
    signal doubleClicked()

    // ----- In this section, we group the size and position information together.

    x: 0
    y: 0
    z: 0
    width: 100
    height: 100
    anchors.top: parent.top // If a single assignment, dot notation can be used.
    // If the item is an image, sourceSize is also set here.
    // sourceSize: Qt.size(12, 12)

    // ----- Then comes the other properties. There's no predefined order to these.

    // Do not use empty lines to separate the assignments. Empty lines are reserved
    // for separating type declarations.
    enabled: true
    layer.enabled: true

    // ----- Then attached properties and attached signal handlers.

    Layout.fillWidth: true
    Drag.active: false
    Drag.onActiveChanged: { }

    // ----- States and transitions.

    states: [ State { } ]
    transitions: [ Transitions { } ]

    // ----- Signal handlers

    onWidthChanged: { } // Always use curly braces.
    // onCompleted and onDestruction signal handlers are always the last in
    // the order.
    Component.onCompleted: { }
    Component.onDestruction: { }

    // ----- Visual children.

    Rectangle {
        height: 50
        anchors: { // For multiple assignments, use group notation.
            top: parent.top
            left: parent.left
            right: parent.right
        }
        color: "red"
        layer.enabled: true
    }

    // ----- Qt provided non-visual children

    Timer { }

    // ----- Custom non-visual children

    MyCustomNonVisualType { }

    QtObject {
        id: privates

        property int diameter: 0
    }

    // ----- JavaScript functions

    function collapse() { }

    function setCollapsed(value: bool) { }
}
\`\`\``,frontmatter:{},note:`- Takes a while to get used to, but pays off
- Our designers can't understand code otherwise
- Structured > Unstructured`,index:13,start:356,end:460,notesHTML:`<ul>
<li>Takes a while to get used to, but pays off</li>
<li>Our designers can't understand code otherwise</li>
<li>Structured &gt; Unstructured</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:Ub,meta:{layout:"section",slide:{raw:`---
layout: section
---

# [Bindings](https://github.com/Furkanzmc/QML-Coding-Guide#bindings)

Declarative > Imperative
`,title:"[Bindings](https://github.com/Furkanzmc/QML-Coding-Guide#bindings)",level:1,content:`# [Bindings](https://github.com/Furkanzmc/QML-Coding-Guide#bindings)

Declarative > Imperative`,frontmatter:{layout:"section"},index:14,start:460,end:468,notesHTML:"",filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:Jb,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

# Imperative

\`\`\`qml
ListView {
    model: ContactModel { }
    delegate: Label {
        id: dlg

        required property int index
        required property string name

        // Or onIndexChanged? onNameChanged?
        Component.onCompleted: {
            text = index + ". " + name
            rect.visible = dlg.index % 2
        }

        Rectangle {
            id: rect
        }
    }
}
\`\`\`

::right::

# Declarative

\`\`\`qml
ListView {
    model: ContactModel { }
    delegate: Label {
        id: dlg

        required property int index
        required property string name

        text: index + ". " + name

        Rectangle {
            visible: dlg.index % 2
        }
    }
}
\`\`\`

<!--
- What are the downsides?
- Eyes should go left to right, not top to bottom
-->
`,title:"Imperative",level:1,content:`# Imperative

\`\`\`qml
ListView {
    model: ContactModel { }
    delegate: Label {
        id: dlg

        required property int index
        required property string name

        // Or onIndexChanged? onNameChanged?
        Component.onCompleted: {
            text = index + ". " + name
            rect.visible = dlg.index % 2
        }

        Rectangle {
            id: rect
        }
    }
}
\`\`\`

::right::

# Declarative

\`\`\`qml
ListView {
    model: ContactModel { }
    delegate: Label {
        id: dlg

        required property int index
        required property string name

        text: index + ". " + name

        Rectangle {
            visible: dlg.index % 2
        }
    }
}
\`\`\``,frontmatter:{layout:"two-cols"},note:`- What are the downsides?
- Eyes should go left to right, not top to bottom`,index:15,start:468,end:523,notesHTML:`<ul>
<li>What are the downsides?</li>
<li>Eyes should go left to right, not top to bottom</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:tw,meta:{slide:{raw:`
# Declarative 2

**Is this still declarative?**

\`\`\`qml
ListView {
    model: ContactModel { }
    delegate: Label {
        required property int index
        required property string name

        text: getText()

        function getText(): string {
            return index + ". " + name
        }
    }
}
\`\`\`

<!--
QML is a declarative language, use it as such.
-->
`,title:"Declarative 2",level:1,content:`# Declarative 2

**Is this still declarative?**

\`\`\`qml
ListView {
    model: ContactModel { }
    delegate: Label {
        required property int index
        required property string name

        text: getText()

        function getText(): string {
            return index + ". " + name
        }
    }
}
\`\`\``,frontmatter:{},note:"QML is a declarative language, use it as such.",index:16,start:524,end:549,notesHTML:`<p>QML is a declarative language, use it as such.</p>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:rw,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

# Unnecessary Evaluations

\`\`\`qml
import QtQuick 2.3

Item {
    id: root

    property int accumulatedValue: 0

    Component.onCompleted: {
        const someData = [1, 2, 3, 4, 5, 20]
        for (let i = 0; i < someData.length; ++i) {
            accumulatedValue = accumulatedValue + someData[i]
        }
    }

    Text {
        text: root.accumulatedValue.toString()
        onTextChanged: console.log("text binding re-evaluated")
    }
}
\`\`\`

::right::

# -

\`\`\`qml
import QtQuick 2.3

Item {
    id: root

    property int accumulatedValue: 0

    Component.onCompleted: {
        const someData = [1, 2, 3, 4, 5, 20]
        let temp = accumulatedValue
        for (let i = 0; i < someData.length; ++i) {
            temp = temp + someData[i]
        }

        accumulatedValue = temp
    }

    Text {
        text: root.accumulatedValue.toString()
        onTextChanged: console.log("text binding re-evaluated")
    }
}
\`\`\`

<!--
- Same applies to emitting signals
- Emit signals when something actually changes
-->
`,title:"Unnecessary Evaluations",level:1,content:`# Unnecessary Evaluations

\`\`\`qml
import QtQuick 2.3

Item {
    id: root

    property int accumulatedValue: 0

    Component.onCompleted: {
        const someData = [1, 2, 3, 4, 5, 20]
        for (let i = 0; i < someData.length; ++i) {
            accumulatedValue = accumulatedValue + someData[i]
        }
    }

    Text {
        text: root.accumulatedValue.toString()
        onTextChanged: console.log("text binding re-evaluated")
    }
}
\`\`\`

::right::

# -

\`\`\`qml
import QtQuick 2.3

Item {
    id: root

    property int accumulatedValue: 0

    Component.onCompleted: {
        const someData = [1, 2, 3, 4, 5, 20]
        let temp = accumulatedValue
        for (let i = 0; i < someData.length; ++i) {
            temp = temp + someData[i]
        }

        accumulatedValue = temp
    }

    Text {
        text: root.accumulatedValue.toString()
        onTextChanged: console.log("text binding re-evaluated")
    }
}
\`\`\``,frontmatter:{layout:"two-cols"},note:`- Same applies to emitting signals
- Emit signals when something actually changes`,index:17,start:549,end:611,notesHTML:`<ul>
<li>Same applies to emitting signals</li>
<li>Emit signals when something actually changes</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:cw,meta:{slide:{raw:`
\`\`\`cpp
void MyRectangle::setRadius(int r)
{
    m_radius = r;
    emit radiusChanged();
}
\`\`\`

<!--
- We have had cases where we emit signals willy nilly and it resulted in performance problems and
  binding loops.
-->
`,content:"```cpp\nvoid MyRectangle::setRadius(int r)\n{\n    m_radius = r;\n    emit radiusChanged();\n}\n```",frontmatter:{},note:`- We have had cases where we emit signals willy nilly and it resulted in performance problems and
  binding loops.`,index:18,start:612,end:626,notesHTML:`<ul>
<li>We have had cases where we emit signals willy nilly and it resulted in performance problems and
binding loops.</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:pw,meta:{layout:"section",slide:{raw:`---
layout: section
---

# [C++ Integration](https://github.com/Furkanzmc/QML-Coding-Guide#c-integration)

<!--
Poll: How many different ways do you think we can expose a C++ object to QML?
-->
`,title:"[C++ Integration](https://github.com/Furkanzmc/QML-Coding-Guide#c-integration)",level:1,content:"# [C++ Integration](https://github.com/Furkanzmc/QML-Coding-Guide#c-integration)",frontmatter:{layout:"section"},note:"Poll: How many different ways do you think we can expose a C++ object to QML?",index:19,start:626,end:636,notesHTML:`<p>Poll: How many different ways do you think we can expose a C++ object to QML?</p>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:fw,meta:{slide:{raw:`
1. Context properties [Deprecated]
2. Global object
3. Singletons
4. Instantiated object
`,content:`1. Context properties [Deprecated]
2. Global object
3. Singletons
4. Instantiated object`,frontmatter:{},index:20,start:637,end:643,notesHTML:"",filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:yw,meta:{slide:{raw:`
# Context Properties Are Deprecated

Don't use them.

[QTBUG-73064](https://bugreports.qt.io/browse/QTBUG-73064)

\`\`\`qml
Item {
    id: root

    property int borderWidth

    Rectangle {
        // No no...
        border.width: borderWidth
    }
}
\`\`\`

<!--
- This also applies to non-qualified access
-->
`,title:"Context Properties Are Deprecated",level:1,content:`# Context Properties Are Deprecated

Don't use them.

[QTBUG-73064](https://bugreports.qt.io/browse/QTBUG-73064)

\`\`\`qml
Item {
    id: root

    property int borderWidth

    Rectangle {
        // No no...
        border.width: borderWidth
    }
}
\`\`\``,frontmatter:{},note:"- This also applies to non-qualified access",index:21,start:644,end:668,notesHTML:`<ul>
<li>This also applies to non-qualified access</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:bw,meta:{slide:{raw:`
# Singletons for API Access

\`\`\`qml
Window {
    onClosing: (event) => {
        event.accepted = MySingletonClass.confirmExit()
    }

    Button {
        background: Rectangle {
            color: Theme.buttonBackground
        }
    }
}
\`\`\`

<!---
- Common API access like screen or other input functions
- One exception is for themes
- I find singleton data classes hard to deal with
-->
`,title:"Singletons for API Access",level:1,content:`# Singletons for API Access

\`\`\`qml
Window {
    onClosing: (event) => {
        event.accepted = MySingletonClass.confirmExit()
    }

    Button {
        background: Rectangle {
            color: Theme.buttonBackground
        }
    }
}
\`\`\``,frontmatter:{},note:`-
- Common API access like screen or other input functions
- One exception is for themes
- I find singleton data classes hard to deal with`,index:22,start:669,end:692,notesHTML:`<ul>
<li></li>
<li>Common API access like screen or other input functions</li>
<li>One exception is for themes</li>
<li>I find singleton data classes hard to deal with</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:Ow,meta:{slide:{raw:`
# Singletons for API Access (Continued)

- If you use singleton for data, don't use it inside a component.

\`\`\`qml
// Contacts.qml
Item {
    id: root

    ListView {
        model: MySingletonClass.contacts
        delegate: Text { /* ... */ }
    }
}
\`\`\`

\`\`\`qml
// Contacts.qml
Item {
    id: root

    property alias model: lv.model

    ListView {
        id: lv
        delegate: Text { /* ... */ }
    }
}
\`\`\`

<!--
- Reduce component dependency
- Promotes flexible and easy to use components
- Reasoning with global data is hard
-->
`,title:"Singletons for API Access (Continued)",level:1,content:`# Singletons for API Access (Continued)

- If you use singleton for data, don't use it inside a component.

\`\`\`qml
// Contacts.qml
Item {
    id: root

    ListView {
        model: MySingletonClass.contacts
        delegate: Text { /* ... */ }
    }
}
\`\`\`

\`\`\`qml
// Contacts.qml
Item {
    id: root

    property alias model: lv.model

    ListView {
        id: lv
        delegate: Text { /* ... */ }
    }
}
\`\`\``,frontmatter:{},note:`- Reduce component dependency
- Promotes flexible and easy to use components
- Reasoning with global data is hard`,index:23,start:693,end:730,notesHTML:`<ul>
<li>Reduce component dependency</li>
<li>Promotes flexible and easy to use components</li>
<li>Reasoning with global data is hard</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:$w,meta:{slide:{raw:`
# Prefer Instantiated Types Over Singletons For Data

\`\`\`qml
// ColorsWindow.qml
Window {
    id: root

    Column {
        Repeater {
            model: Palette.selectedColors
            delegate: ColorViewer {
                required property color color
                required property string colorName

                selectedColor: color
                selectedColorName: colorName
            }
        }
    }
}
\`\`\`

<!--
- Increase flexibility and re-usability.
- Locally declared, created, destroyed
- Use singleton in C++, but expose it as an instantiated type
-->
`,title:"Prefer Instantiated Types Over Singletons For Data",level:1,content:`# Prefer Instantiated Types Over Singletons For Data

\`\`\`qml
// ColorsWindow.qml
Window {
    id: root

    Column {
        Repeater {
            model: Palette.selectedColors
            delegate: ColorViewer {
                required property color color
                required property string colorName

                selectedColor: color
                selectedColorName: colorName
            }
        }
    }
}
\`\`\``,frontmatter:{},note:`- Increase flexibility and re-usability.
- Locally declared, created, destroyed
- Use singleton in C++, but expose it as an instantiated type`,index:24,start:731,end:760,notesHTML:`<ul>
<li>Increase flexibility and re-usability.</li>
<li>Locally declared, created, destroyed</li>
<li>Use singleton in C++, but expose it as an instantiated type</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:Aw,meta:{slide:{raw:`
# Prefer Instantiated Types Over Singletons For Data

See [Issue #2](https://github.com/Furkanzmc/QML-Coding-Guide/issues/9) for related discussions.

\`\`\`qml
// ColorsWindow.qml
Window {
    property alias model: rp.model

    Column {
        Repeater {
            id: rp
            model: PaletteColorsModel { } // Alternatively
            delegate: ColorViewer {
                required property color color
                required property string colorName

                selectedColor: color
                selectedColorName: colorName
            }
        }
    }
}
\`\`\`

<!--
- Better re-usability
- Customization point, with singleton everything changes
-->
`,title:"Prefer Instantiated Types Over Singletons For Data",level:1,content:`# Prefer Instantiated Types Over Singletons For Data

See [Issue #2](https://github.com/Furkanzmc/QML-Coding-Guide/issues/9) for related discussions.

\`\`\`qml
// ColorsWindow.qml
Window {
    property alias model: rp.model

    Column {
        Repeater {
            id: rp
            model: PaletteColorsModel { } // Alternatively
            delegate: ColorViewer {
                required property color color
                required property string colorName

                selectedColor: color
                selectedColorName: colorName
            }
        }
    }
}
\`\`\``,frontmatter:{},note:`- Better re-usability
- Customization point, with singleton everything changes`,index:25,start:761,end:792,notesHTML:`<ul>
<li>Better re-usability</li>
<li>Customization point, with singleton everything changes</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:Dw,meta:{slide:{raw:`
# Watch Out for Object Ownership Rules

Two ownership types:

- C++
- QML
- Expose data with properties only
> See [example](https://zmc.space/freeze-columns-with-qml-table-view.html) for using properties for
> data customization

> See [this article](https://embeddeduse.com/2018/04/02/qml-engine-deletes-c-objects-still-in-use/)
> for a real life example of a related bug in an application.

\`\`\`cpp
Q_PROPERTY( QObject* colors READ colors )

QObject* colors(); // Ownership remains in C++.
Q_INVOKABLE QObject* myData(); // Ownership is transferred to QML.
\`\`\`

<!--
- Shouldn't need to worry about this
- Always expose data with properties, not functions
- Data exposure with functions promotes imperative style
- Add more functions to slice data declaratively
-->
`,title:"Watch Out for Object Ownership Rules",level:1,content:`# Watch Out for Object Ownership Rules

Two ownership types:

- C++
- QML
- Expose data with properties only
> See [example](https://zmc.space/freeze-columns-with-qml-table-view.html) for using properties for
> data customization

> See [this article](https://embeddeduse.com/2018/04/02/qml-engine-deletes-c-objects-still-in-use/)
> for a real life example of a related bug in an application.

\`\`\`cpp
Q_PROPERTY( QObject* colors READ colors )

QObject* colors(); // Ownership remains in C++.
Q_INVOKABLE QObject* myData(); // Ownership is transferred to QML.
\`\`\``,frontmatter:{},note:`- Shouldn't need to worry about this
- Always expose data with properties, not functions
- Data exposure with functions promotes imperative style
- Add more functions to slice data declaratively`,index:26,start:793,end:821,notesHTML:`<ul>
<li>Shouldn't need to worry about this</li>
<li>Always expose data with properties, not functions</li>
<li>Data exposure with functions promotes imperative style</li>
<li>Add more functions to slice data declaratively</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:zw,meta:{layout:"section",slide:{raw:`---
layout: section
---

# [Memory](https://github.com/Furkanzmc/QML-Coding-Guide#performance-and-memory)

Profile first!
Needs contributions.

<!--
- Not in a memory constrained environment.
- Existing ones will be removed
- If you are working on a memory constrained environment, do contribute!
-->
`,title:"[Memory](https://github.com/Furkanzmc/QML-Coding-Guide#performance-and-memory)",level:1,content:`# [Memory](https://github.com/Furkanzmc/QML-Coding-Guide#performance-and-memory)

Profile first!
Needs contributions.`,frontmatter:{layout:"section"},note:`- Not in a memory constrained environment.
- Existing ones will be removed
- If you are working on a memory constrained environment, do contribute!`,index:27,start:821,end:836,notesHTML:`<ul>
<li>Not in a memory constrained environment.</li>
<li>Existing ones will be removed</li>
<li>If you are working on a memory constrained environment, do contribute!</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:Ww,meta:{layout:"section",slide:{raw:`---
layout: section
---

# [Signals](https://github.com/Furkanzmc/QML-Coding-Guide#signal-handling)

Signals != Functions

<!--
This was one of the most obvious mistakes we made. Signals are signals, functions are functions.
They each have their own place. Don't confuse them.
- Had to chase signals and signal handlers all over
-->
`,title:"[Signals](https://github.com/Furkanzmc/QML-Coding-Guide#signal-handling)",level:1,content:`# [Signals](https://github.com/Furkanzmc/QML-Coding-Guide#signal-handling)

Signals != Functions`,frontmatter:{layout:"section"},note:`This was one of the most obvious mistakes we made. Signals are signals, functions are functions.
They each have their own place. Don't confuse them.
- Had to chase signals and signal handlers all over`,index:28,start:836,end:850,notesHTML:`<p>This was one of the most obvious mistakes we made. Signals are signals, functions are functions.
They each have their own place. Don't confuse them.</p>
<ul>
<li>Had to chase signals and signal handlers all over</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:Jw,meta:{slide:{raw:`
# Functions vs Signals

Function -> Changes Internal State
> Imperative form -> doSomething()

Signal -> Announces Internal State Change
> Passive form -> somethingChanged()

<!--
Signals should be made private.
-->
`,title:"Functions vs Signals",level:1,content:`# Functions vs Signals

Function -> Changes Internal State
> Imperative form -> doSomething()

Signal -> Announces Internal State Change
> Passive form -> somethingChanged()`,frontmatter:{},note:"Signals should be made private.",index:29,start:851,end:864,notesHTML:`<p>Signals should be made private.</p>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:nx,meta:{slide:{raw:`
# Avoid Using \`.connect()\` in QML

\`\`\`qml
ApplicationWindow {
    id: root

    property list<QtObject> myObjects: [
        QtObject { signal somethingHappened() }, QtObject { signal somethingHappened() },
        QtObject { signal somethingHappened() }, QtObject { signal somethingHappened() },
        QtObject { signal somethingHappened() }, QtObject { signal somethingHappened() },
        QtObject { signal somethingHappened() }, QtObject { signal somethingHappened() }
    ]

    ListView {
        cacheBuffer: 1 // Low enough we can resize the window to destroy buttons.
        model: root.myObjects.length
        delegate: Button {
            text: "Button " + index
            onClicked: root.myObjects[index].somethingHappened()
            Component.onCompleted: root.myObjects[index].somethingHappened.connect(() => console.log(text))
            Component.onDestruction: console.log("Destroyed #", index)
        }
    }
}
\`\`\`
`,title:"Avoid Using `.connect()` in QML",level:1,content:`# Avoid Using \`.connect()\` in QML

\`\`\`qml
ApplicationWindow {
    id: root

    property list<QtObject> myObjects: [
        QtObject { signal somethingHappened() }, QtObject { signal somethingHappened() },
        QtObject { signal somethingHappened() }, QtObject { signal somethingHappened() },
        QtObject { signal somethingHappened() }, QtObject { signal somethingHappened() },
        QtObject { signal somethingHappened() }, QtObject { signal somethingHappened() }
    ]

    ListView {
        cacheBuffer: 1 // Low enough we can resize the window to destroy buttons.
        model: root.myObjects.length
        delegate: Button {
            text: "Button " + index
            onClicked: root.myObjects[index].somethingHappened()
            Component.onCompleted: root.myObjects[index].somethingHappened.connect(() => console.log(text))
            Component.onDestruction: console.log("Destroyed #", index)
        }
    }
}
\`\`\``,frontmatter:{},index:30,start:865,end:892,notesHTML:"",filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:ax,meta:{slide:{raw:`
# Avoid Using \`.connect()\` in QML (Continued)

\`\`\`qml
ApplicationWindow {
    id: root

    property list<QtObject> myObjects: [
        // ... Same model as previous code snippet
    ]

    ListView {
        cacheBuffer: 1 // Low enough we can resize the window to destroy buttons.
        model: root.myObjects.length
        delegate: Button {
            id: dlg
            text: "Button " + index
            onClicked: root.myObjects[index].somethingHappened()
            Component.onDestruction: console.log("Destroyed #", index)

            Connections {
                target: root.myObjects[index]

                function onSomethingHappened() {
                    console.log(dlg.text)
                }
            }
        }
    }
}
\`\`\`

<!--
- Nefarious in delegates
- Model with millions of objects
- Hard to track down
-->
`,title:"Avoid Using `.connect()` in QML (Continued)",level:1,content:`# Avoid Using \`.connect()\` in QML (Continued)

\`\`\`qml
ApplicationWindow {
    id: root

    property list<QtObject> myObjects: [
        // ... Same model as previous code snippet
    ]

    ListView {
        cacheBuffer: 1 // Low enough we can resize the window to destroy buttons.
        model: root.myObjects.length
        delegate: Button {
            id: dlg
            text: "Button " + index
            onClicked: root.myObjects[index].somethingHappened()
            Component.onDestruction: console.log("Destroyed #", index)

            Connections {
                target: root.myObjects[index]

                function onSomethingHappened() {
                    console.log(dlg.text)
                }
            }
        }
    }
}
\`\`\``,frontmatter:{},note:`- Nefarious in delegates
- Model with millions of objects
- Hard to track down`,index:31,start:893,end:931,notesHTML:`<ul>
<li>Nefarious in delegates</li>
<li>Model with millions of objects</li>
<li>Hard to track down</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:rx,meta:{slide:{raw:`
# What is wrong here?

\`\`\`qml
// ColorPicker.qml
Rectangle {
    id: root

    signal colorPicked(color pickedColor)

    ColorDialog {
        onColorChanged: {
            root.colorPicked(color)
        }
    }
}

// main.qml
Window {
    ColorPicker {
        onColorPicked: {
            color = pickedColor
            label.text = "Color Changed"
        }
    }
    Label { id: label }
}
\`\`\`

<!--
- Signal is being used as a function
- We had this problem in the beginning
- Makes code hard to follow and less re-usable
-->
`,title:"What is wrong here?",level:1,content:`# What is wrong here?

\`\`\`qml
// ColorPicker.qml
Rectangle {
    id: root

    signal colorPicked(color pickedColor)

    ColorDialog {
        onColorChanged: {
            root.colorPicked(color)
        }
    }
}

// main.qml
Window {
    ColorPicker {
        onColorPicked: {
            color = pickedColor
            label.text = "Color Changed"
        }
    }
    Label { id: label }
}
\`\`\``,frontmatter:{},note:`- Signal is being used as a function
- We had this problem in the beginning
- Makes code hard to follow and less re-usable`,index:32,start:932,end:967,notesHTML:`<ul>
<li>Signal is being used as a function</li>
<li>We had this problem in the beginning</li>
<li>Makes code hard to follow and less re-usable</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:cx,meta:{slide:{raw:`
\`\`\`qml
// ColorPicker.qml
Rectangle {
    id: root

    signal colorPicked(color pickedColor)

    ColorDialog {
        onColorChanged: {
            root.color = color
            root.colorPicked(color)
        }
    }
}

// main.qml
Window {
    ColorPicker {
        onColorPicked: {
            label.text = "Color Changed"
        }
    }
    Label { id: label }
}
\`\`\`
`,content:`\`\`\`qml
// ColorPicker.qml
Rectangle {
    id: root

    signal colorPicked(color pickedColor)

    ColorDialog {
        onColorChanged: {
            root.color = color
            root.colorPicked(color)
        }
    }
}

// main.qml
Window {
    ColorPicker {
        onColorPicked: {
            label.text = "Color Changed"
        }
    }
    Label { id: label }
}
\`\`\``,frontmatter:{},index:33,start:968,end:995,notesHTML:"",filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:mx,meta:{layout:"fact",slide:{raw:`---
layout: fact
---

Rule of thumb:

    When communicating up, use signals.
    When communicating down, use functions.

<!--
Since we are working with designers, we only use functions and signals in parts of the code that is
meant primarily for developers.
-->
`,content:`Rule of thumb:

    When communicating up, use signals.
    When communicating down, use functions.`,frontmatter:{layout:"fact"},note:`Since we are working with designers, we only use functions and signals in parts of the code that is
meant primarily for developers.`,index:34,start:995,end:1009,notesHTML:`<p>Since we are working with designers, we only use functions and signals in parts of the code that is
meant primarily for developers.</p>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:gx,meta:{layout:"section",slide:{raw:`---
layout: section
---

# [States and Transitions](https://github.com/Furkanzmc/QML-Coding-Guide#states-and-transitions)
`,title:"[States and Transitions](https://github.com/Furkanzmc/QML-Coding-Guide#states-and-transitions)",level:1,content:"# [States and Transitions](https://github.com/Furkanzmc/QML-Coding-Guide#states-and-transitions)",frontmatter:{layout:"section"},index:35,start:1009,end:1015,notesHTML:"",filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:kx,meta:{slide:{raw:`
# Don't Define Top Level States

\`\`\`qml
Item {
    component Rect: Rectangle {
        id: self

        readonly property alias pressed: ma.containsPress

        states: State {
            when: ma.containsMouse

            PropertyChanges { target: self; color: "red" }
        }

        MouseArea { id: ma; hoverEnabled: true }
    }

    Rect {
        id: rect
        states: State {
            when: rect.pressed

            PropertyChanges { target: rect; color: "yellow" }
        }
    }
}
\`\`\`

<!--
QQmlListProperty does not reset but append to itself.
-->
`,title:"Don't Define Top Level States",level:1,content:`# Don't Define Top Level States

\`\`\`qml
Item {
    component Rect: Rectangle {
        id: self

        readonly property alias pressed: ma.containsPress

        states: State {
            when: ma.containsMouse

            PropertyChanges { target: self; color: "red" }
        }

        MouseArea { id: ma; hoverEnabled: true }
    }

    Rect {
        id: rect
        states: State {
            when: rect.pressed

            PropertyChanges { target: rect; color: "yellow" }
        }
    }
}
\`\`\``,frontmatter:{},note:"QQmlListProperty does not reset but append to itself.",index:36,start:1016,end:1050,notesHTML:`<p>QQmlListProperty does not reset but append to itself.</p>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:bx,meta:{layout:"section",slide:{raw:`---
layout: section
---

# [Visual Items](https://github.com/Furkanzmc/QML-Coding-Guide#visual-items)
`,title:"[Visual Items](https://github.com/Furkanzmc/QML-Coding-Guide#visual-items)",level:1,content:"# [Visual Items](https://github.com/Furkanzmc/QML-Coding-Guide#visual-items)",frontmatter:{layout:"section"},index:37,start:1050,end:1056,notesHTML:"",filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:Ox,meta:{slide:{raw:`
# One Size Does Not Fit All

- **Implicit Size**: Space occupied when no explicit size or anchors are set.
- **Explicit Size**: Space occupied when an external size is given, ie \`width/height\` or \`anchors\`
  are set.
- **Content Size**: Space occupied by the contents of a view.
- **Padding**: Space between the content item and the edge of a component.
- **Margin**: Space between two controls.
- **Inset**: Space between background and the edge of a component.

<img src="/qtquickcontrols2-control.png" class="h-65 rounded shadow" style="text-align: center" />

<!--
- Understand this!
- QtQuick Controls use it
- Not using it right will cause headaches
- Gives you the freedom to provide more customization
- Took a while for designers to understand
-->
`,title:"One Size Does Not Fit All",level:1,content:`# One Size Does Not Fit All

- **Implicit Size**: Space occupied when no explicit size or anchors are set.
- **Explicit Size**: Space occupied when an external size is given, ie \`width/height\` or \`anchors\`
  are set.
- **Content Size**: Space occupied by the contents of a view.
- **Padding**: Space between the content item and the edge of a component.
- **Margin**: Space between two controls.
- **Inset**: Space between background and the edge of a component.

<img src="/qtquickcontrols2-control.png" class="h-65 rounded shadow" style="text-align: center" />`,frontmatter:{},note:`- Understand this!
- QtQuick Controls use it
- Not using it right will cause headaches
- Gives you the freedom to provide more customization
- Took a while for designers to understand`,index:38,start:1057,end:1078,notesHTML:`<ul>
<li>Understand this!</li>
<li>QtQuick Controls use it</li>
<li>Not using it right will cause headaches</li>
<li>Gives you the freedom to provide more customization</li>
<li>Took a while for designers to understand</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:$x,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

\`\`\`qml
// CheckBox.qml
Item {
    id: root

    property bool checked
    property string text

    Rectangle {
        id: indicator
        width: 50
        height: 50
        visible: root.checked
        color: "red"
    }

    Label {
        anchors {
            left: indicator.right
            verticalCenter: indicator.verticalCenter
        }
        text: root.text
    }
}
\`\`\`

::right::

\`\`\`qml
// main.qml
Window {
    CheckBox {
        checked: true
        text: "CheckBox"
    }

    Column {
        width: 100

        Repeater {
            model: 5
            delegate: CheckBox {
                required property int index

                width: parent.width
                checked: index % 2 === 0
            }
        }
    }
}
\`\`\`
`,content:`\`\`\`qml
// CheckBox.qml
Item {
    id: root

    property bool checked
    property string text

    Rectangle {
        id: indicator
        width: 50
        height: 50
        visible: root.checked
        color: "red"
    }

    Label {
        anchors {
            left: indicator.right
            verticalCenter: indicator.verticalCenter
        }
        text: root.text
    }
}
\`\`\`

::right::

\`\`\`qml
// main.qml
Window {
    CheckBox {
        checked: true
        text: "CheckBox"
    }

    Column {
        width: 100

        Repeater {
            model: 5
            delegate: CheckBox {
                required property int index

                width: parent.width
                checked: index % 2 === 0
            }
        }
    }
}
\`\`\``,frontmatter:{layout:"two-cols"},index:39,start:1078,end:1134,notesHTML:"",filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:Tx,meta:{layout:"two-cols",slide:{raw:`---
layout: two-cols
---

\`\`\`qml
// CheckBox.qml
Item {
    id: root

    property bool checked
    property string text

    implicitWidth: indicator.implicitWidth + label.implicitWidth
    implicitHeight: Math.max(indicator.implicitHeight, label.implicitHeight)

    Rectangle {
        id: indicator
        width: height
        height: parent.height * 0.5
        implicitWidth: 50
        implicitHeight: 50
        visible: root.checked
        color: "red"
    }

    Label {
        id: label
        anchors {
            left: indicator.right
            verticalCenter: indicator.verticalCenter
        }
        text: root.text
    }
}
\`\`\`

::right::

\`\`\`qml
// main.qml
Window {
    CheckBox {
        checked: true
        text: "CheckBox"
    }

    Column {
        width: 100

        Repeater {
            model: 5
            delegate: CheckBox {
                required property int index

                checked: index % 2 === 0
            }
        }
    }
}
\`\`\`
`,content:`\`\`\`qml
// CheckBox.qml
Item {
    id: root

    property bool checked
    property string text

    implicitWidth: indicator.implicitWidth + label.implicitWidth
    implicitHeight: Math.max(indicator.implicitHeight, label.implicitHeight)

    Rectangle {
        id: indicator
        width: height
        height: parent.height * 0.5
        implicitWidth: 50
        implicitHeight: 50
        visible: root.checked
        color: "red"
    }

    Label {
        id: label
        anchors {
            left: indicator.right
            verticalCenter: indicator.verticalCenter
        }
        text: root.text
    }
}
\`\`\`

::right::

\`\`\`qml
// main.qml
Window {
    CheckBox {
        checked: true
        text: "CheckBox"
    }

    Column {
        width: 100

        Repeater {
            model: 5
            delegate: CheckBox {
                required property int index

                checked: index % 2 === 0
            }
        }
    }
}
\`\`\``,frontmatter:{layout:"two-cols"},index:40,start:1134,end:1195,notesHTML:"",filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:Rx,meta:{layout:"image-right",image:"https://i.pinimg.com/originals/d9/eb/e2/d9ebe29636e1fac1e40b7a10da61bb7e.jpg",slide:{raw:`---
layout: image-right
image: https://i.pinimg.com/originals/d9/eb/e2/d9ebe29636e1fac1e40b7a10da61bb7e.jpg
---

> ... our intellectual powers are rather geared to master **static relations** and that our powers
> to visualize **processes evolving in time** are relatively poorly developed. - Edsger W.
> Dijkstra, Go To Statement Considered Harmful

<!--
- Signals make it more dynmaic
- Properties over signals
- Properties establish relationships easily
-->
`,content:`> ... our intellectual powers are rather geared to master **static relations** and that our powers
> to visualize **processes evolving in time** are relatively poorly developed. - Edsger W.
> Dijkstra, Go To Statement Considered Harmful`,frontmatter:{layout:"image-right",image:"https://i.pinimg.com/originals/d9/eb/e2/d9ebe29636e1fac1e40b7a10da61bb7e.jpg"},note:`- Signals make it more dynmaic
- Properties over signals
- Properties establish relationships easily`,index:41,start:1195,end:1210,notesHTML:`<ul>
<li>Signals make it more dynmaic</li>
<li>Properties over signals</li>
<li>Properties establish relationships easily</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:Fx,meta:{layout:"section",slide:{raw:`---
layout: section
---

# [JavaScript](https://github.com/Furkanzmc/QML-Coding-Guide#javascript)

<!--
- Have as little JS as possible
- We have our own way of exposing C++ functions, would love to do a talk about that
- One less thing to learn
- Prefer C++ for logic
-->
`,title:"[JavaScript](https://github.com/Furkanzmc/QML-Coding-Guide#javascript)",level:1,content:"# [JavaScript](https://github.com/Furkanzmc/QML-Coding-Guide#javascript)",frontmatter:{layout:"section"},note:`- Have as little JS as possible
- We have our own way of exposing C++ functions, would love to do a talk about that
- One less thing to learn
- Prefer C++ for logic`,index:42,start:1210,end:1223,notesHTML:`<ul>
<li>Have as little JS as possible</li>
<li>We have our own way of exposing C++ functions, would love to do a talk about that</li>
<li>One less thing to learn</li>
<li>Prefer C++ for logic</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:Dx,meta:{slide:{raw:`
\`\`\`javascript
// Arrow function
root.value = Qt.binding(() => root.someOtherValue)
// The old way.
root.value = Qt.binding(function() { return root.someOtherValue })

// Variables
const value = 32;
let valueTwo = 42;
{
    // Valid assignment since we are in a different scope.
    const value = 32;
    let valueTwo = 42;
}
const value = 32;
value = 42; // ERROR!
\`\`\`
`,content:`\`\`\`javascript
// Arrow function
root.value = Qt.binding(() => root.someOtherValue)
// The old way.
root.value = Qt.binding(function() { return root.someOtherValue })

// Variables
const value = 32;
let valueTwo = 42;
{
    // Valid assignment since we are in a different scope.
    const value = 32;
    let valueTwo = 42;
}
const value = 32;
value = 42; // ERROR!
\`\`\``,frontmatter:{},index:43,start:1224,end:1243,notesHTML:"",filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:zx,meta:{slide:{raw:`
# Use arrow function syntax for signal handlers

\`\`\`qml
MouseArea {
    // Good!
    onClicked: (mouse) => {

    }
    // Bad...
    onClicked: {

    }
}
\`\`\`
`,title:"Use arrow function syntax for signal handlers",level:1,content:`# Use arrow function syntax for signal handlers

\`\`\`qml
MouseArea {
    // Good!
    onClicked: (mouse) => {

    }
    // Bad...
    onClicked: {

    }
}
\`\`\``,frontmatter:{},index:44,start:1244,end:1260,notesHTML:"",filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:Ux,meta:{slide:{raw:`
# What's next?

- OUt with the old, in with the new
- More content for Qt 6
- An architecture section
- More contributions from others

> QML Coding Guidelines on GitHub - [https://github.com/Furkanzmc/QML-Coding-Guide](https://github.com/Furkanzmc/QML-Coding-Guide)

<!--
- Live document
- More support from community
- Had reviews from Mitch Curtis and a few other Qt developers
-->
`,title:"What's next?",level:1,content:`# What's next?

- OUt with the old, in with the new
- More content for Qt 6
- An architecture section
- More contributions from others

> QML Coding Guidelines on GitHub - [https://github.com/Furkanzmc/QML-Coding-Guide](https://github.com/Furkanzmc/QML-Coding-Guide)`,frontmatter:{},note:`- Live document
- More support from community
- Had reviews from Mitch Curtis and a few other Qt developers`,index:45,start:1261,end:1277,notesHTML:`<ul>
<li>Live document</li>
<li>More support from community</li>
<li>Had reviews from Mitch Curtis and a few other Qt developers</li>
</ul>
`,filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:Yx,meta:{layout:"fact",slide:{raw:`---
layout: fact
---

# Thank You
`,title:"Thank You",level:1,content:"# Thank You",frontmatter:{layout:"fact"},index:46,start:1277,end:1283,notesHTML:"",filepath:"/home/runner/work/qtdevcon-community-driven-coding-guidelines/qtdevcon-community-driven-coding-guidelines/slides.md",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",component:_0,meta:{layout:"end"}}];const He=Kx,Zx=[{name:"play",path:"/",component:d0,children:[...He]},{name:"print",path:"/print",component:v0},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}},{name:"presenter",path:"/presenter/:no",component:()=>us(()=>import("./Presenter.baef0846.js"),["assets/Presenter.baef0846.js","assets/Presenter.c3f07bd1.css","assets/DrawingControls.cd91edc3.js"]),beforeEnter:e=>{if(!Ct.remote||Ct.remote===e.query.password)return!0;if(Ct.remote&&e.query.password===void 0){const n=prompt("Enter password");if(Ct.remote===n)return!0}return e.params.no?{path:`/${e.params.no}`}:{path:""}}},{path:"/presenter",redirect:{path:"/presenter/1"}}],vn=Jv({history:mv("/qtdevcon-community-driven-coding-guidelines/"),routes:Zx});function Jx(e,n,{mode:s="replace"}={}){return j({get(){const o=vn.currentRoute.value.query[e];return o==null?n!=null?n:null:Array.isArray(o)?o.filter(Boolean):o},set(o){We(()=>{vn[k(s)]({query:Xe(_e({},vn.currentRoute.value.query),{[e]:o})})})}})}const Mp=z(0);We(()=>{vn.afterEach(async()=>{await We(),Mp.value+=1})});const Yn=j(()=>vn.currentRoute.value),dr=j(()=>Yn.value.query.print!==void 0),Xx=j(()=>Yn.value.query.print==="clicks"),zn=j(()=>Yn.value.query.embedded!==void 0),Fn=j(()=>Yn.value.path.startsWith("/presenter")),Rs=j(()=>dr.value&&!Xx.value),xi=j(()=>Yn.value.query.password),eC=j(()=>!Fn.value&&(!Ce.remote||xi.value===Ce.remote)),cc=Jx("clicks","0"),Pp=j(()=>He.length-1),nC=j(()=>Yn.value.path),Ve=j(()=>parseInt(nC.value.split(/\//g).slice(-1)[0])||1);j(()=>co(Ve.value));const fn=j(()=>He.find(e=>e.path===`${Ve.value}`));j(()=>{var e,n,s;return(s=(n=(e=fn.value)==null?void 0:e.meta)==null?void 0:n.slide)==null?void 0:s.id});j(()=>{var e,n;return(n=(e=fn.value)==null?void 0:e.meta)==null?void 0:n.layout});const Ao=j(()=>He.find(e=>e.path===`${Math.min(He.length,Ve.value+1)}`)),tC=j(()=>{var e,n;return Mp.value,((n=(e=fn.value)==null?void 0:e.meta)==null?void 0:n.__clicksElements)||[]}),An=j({get(){if(Rs.value)return 99999;let e=+(cc.value||0);return isNaN(e)&&(e=0),e},set(e){cc.value=e.toString()}}),Va=j(()=>{var e,n,s;return+((s=(n=(e=fn.value)==null?void 0:e.meta)==null?void 0:n.clicks)!=null?s:tC.value.length)}),sC=j(()=>Ve.value<He.length-1||An.value<Va.value),aC=j(()=>Ve.value>1||An.value>0),oC=j(()=>He.filter(e=>{var n,s;return(s=(n=e.meta)==null?void 0:n.slide)==null?void 0:s.title}).reduce((e,n)=>(fr(e,n),e),[])),iC=j(()=>mr(oC.value,fn.value));j(()=>hr(iC.value));function rt(){Va.value<=An.value?Xs():An.value+=1}async function lt(){An.value<=0?await ea():An.value-=1}function co(e){return Fn.value?`/presenter/${e}`:`/${e}`}function Xs(){const e=Math.min(He.length,Ve.value+1);return is(e)}async function ea(e=!0){const n=Math.max(1,Ve.value-1);await is(n),e&&Va.value&&vn.replace({query:Xe(_e({},Yn.value.query),{clicks:Va.value})})}function is(e,n){return vn.push({path:co(e),query:Xe(_e({},Yn.value.query),{clicks:n})})}function rC(e){const n=z(0),{direction:s,distanceX:o,distanceY:i}=Bg(e,{onSwipeStart(r){r.pointerType==="touch"&&(Ks.value||(n.value=ui()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!n.value||Ks.value)return;const l=Math.abs(o.value),c=Math.abs(i.value);l/window.innerWidth>.3||l>100?s.value===Wn.LEFT?rt():lt():(c/window.innerHeight>.4||c>200)&&(s.value===Wn.DOWN?ea():Xs())}})}async function Ci(){const{saveAs:e}=await us(()=>import("./FileSaver.min.4f92ed14.js").then(function(n){return n.F}),[]);e(Vu(Ce.download)?Ce.download:Ce.exportFilename?`${Ce.exportFilename}.pdf`:"/qtdevcon-community-driven-coding-guidelines/slidev-exported.pdf",`${Ce.title}.pdf`)}async function lC(e){var n,s;if(e==null){const o=(s=(n=fn.value)==null?void 0:n.meta)==null?void 0:s.slide;if(!(o!=null&&o.filepath))return!1;e=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(e)}`),!0}function fr(e,n,s=1){var i,r,l,c,u;const o=(r=(i=n.meta)==null?void 0:i.slide)==null?void 0:r.level;o&&o>s&&e.length>0?fr(e[e.length-1].children,n,s+1):e.push({children:[],level:s,path:n.path,hideInToc:Boolean((l=n.meta)==null?void 0:l.hideInToc),title:(u=(c=n.meta)==null?void 0:c.slide)==null?void 0:u.title})}function mr(e,n,s=!1,o){return e.map(i=>{const r=Xe(_e({},i),{active:i.path===(n==null?void 0:n.path),hasActiveParent:s});return r.children.length>0&&(r.children=mr(r.children,n,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function hr(e,n=1){return e.filter(s=>!s.hideInToc).map(s=>Xe(_e({},s),{children:hr(s.children,n+1)}))}function cC(){const e=Ce.titleTemplate.replace("%s",Ce.title||"Slidev");yh({title:e}),Eh(`${e} - shared`),Ph(`${e} - drawings`);function n(){Fn.value&&(gl("page",+Ve.value),gl("clicks",An.value))}vn.afterEach(n),ue(An,n),jh(s=>{(+s.page!=+Ve.value||An.value!==s.clicks)&&vn.replace({path:co(s.page),query:Xe(_e({},vn.currentRoute.value.query),{clicks:s.clicks||0})})})}const uC=xe({name:"App",setup(e){return L(D),cC(),(n,s)=>{const o=Jo("RouterView"),i=Jo("StarportCarrier");return b(),B(Se,null,[X(o),X(i)],64)}}});function Lo(e){return e!==null&&typeof e=="object"}function Si(e,n,s=".",o){if(!Lo(n))return Si(e,{},s,o);const i=Object.assign({},n);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const l=e[r];l!=null&&(o&&o(i,r,l,s)||(Array.isArray(l)&&Array.isArray(i[r])?i[r]=l.concat(i[r]):Lo(l)&&Lo(i[r])?i[r]=Si(l,i[r],(s?`${s}.`:"")+r.toString(),o):i[r]=l))}return i}function pC(e){return(...n)=>n.reduce((s,o)=>Si(s,o,"",e),{})}const dC=pC(),Tp=1/60*1e3,fC=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),Ap=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(fC()),Tp);function mC(e){let n=[],s=[],o=0,i=!1,r=!1;const l=new WeakSet,c={schedule:(u,p=!1,d=!1)=>{const m=d&&i,f=m?n:s;return p&&l.add(u),f.indexOf(u)===-1&&(f.push(u),m&&i&&(o=n.length)),u},cancel:u=>{const p=s.indexOf(u);p!==-1&&s.splice(p,1),l.delete(u)},process:u=>{if(i){r=!0;return}if(i=!0,[n,s]=[s,n],s.length=0,o=n.length,o)for(let p=0;p<o;p++){const d=n[p];d(u),l.has(d)&&(c.schedule(d),e())}i=!1,r&&(r=!1,c.process(u))}};return c}const hC=40;let Oi=!0,na=!1,Ei=!1;const es={delta:0,timestamp:0},ia=["read","update","preRender","render","postRender"],uo=ia.reduce((e,n)=>(e[n]=mC(()=>na=!0),e),{}),uc=ia.reduce((e,n)=>{const s=uo[n];return e[n]=(o,i=!1,r=!1)=>(na||vC(),s.schedule(o,i,r)),e},{});ia.reduce((e,n)=>(e[n]=uo[n].cancel,e),{});ia.reduce((e,n)=>(e[n]=()=>uo[n].process(es),e),{});const gC=e=>uo[e].process(es),Lp=e=>{na=!1,es.delta=Oi?Tp:Math.max(Math.min(e-es.timestamp,hC),1),es.timestamp=e,Ei=!0,ia.forEach(gC),Ei=!1,na&&(Oi=!1,Ap(Lp))},vC=()=>{na=!0,Oi=!0,Ei||Ap(Lp)},yC=()=>es;function Ip(e,n){var s={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(s[o[i]]=e[o[i]]);return s}var kC=function(){},pc=function(){};const ji=(e,n,s)=>Math.min(Math.max(s,e),n),Io=.001,_C=.01,dc=10,bC=.05,wC=1;function xC({duration:e=800,bounce:n=.25,velocity:s=0,mass:o=1}){let i,r;kC(e<=dc*1e3);let l=1-n;l=ji(bC,wC,l),e=ji(_C,dc,e/1e3),l<1?(i=p=>{const d=p*l,m=d*e,f=d-s,h=$i(p,l),v=Math.exp(-m);return Io-f/h*v},r=p=>{const m=p*l*e,f=m*s+s,h=Math.pow(l,2)*Math.pow(p,2)*e,v=Math.exp(-m),w=$i(Math.pow(p,2),l);return(-i(p)+Io>0?-1:1)*((f-h)*v)/w}):(i=p=>{const d=Math.exp(-p*e),m=(p-s)*e+1;return-Io+d*m},r=p=>{const d=Math.exp(-p*e),m=(s-p)*(e*e);return d*m});const c=5/e,u=SC(i,r,c);if(e=e*1e3,isNaN(u))return{stiffness:100,damping:10,duration:e};{const p=Math.pow(u,2)*o;return{stiffness:p,damping:l*2*Math.sqrt(o*p),duration:e}}}const CC=12;function SC(e,n,s){let o=s;for(let i=1;i<CC;i++)o=o-e(o)/n(o);return o}function $i(e,n){return e*Math.sqrt(1-n*n)}const OC=["duration","bounce"],EC=["stiffness","damping","mass"];function fc(e,n){return n.some(s=>e[s]!==void 0)}function jC(e){let n=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},e);if(!fc(e,EC)&&fc(e,OC)){const s=xC(e);n=Object.assign(Object.assign(Object.assign({},n),s),{velocity:0,mass:1}),n.isResolvedFromDuration=!0}return n}function gr(e){var{from:n=0,to:s=1,restSpeed:o=2,restDelta:i}=e,r=Ip(e,["from","to","restSpeed","restDelta"]);const l={done:!1,value:n};let{stiffness:c,damping:u,mass:p,velocity:d,duration:m,isResolvedFromDuration:f}=jC(r),h=mc,v=mc;function w(){const _=d?-(d/1e3):0,O=s-n,C=u/(2*Math.sqrt(c*p)),S=Math.sqrt(c/p)/1e3;if(i===void 0&&(i=Math.min(Math.abs(s-n)/100,.4)),C<1){const E=$i(S,C);h=F=>{const A=Math.exp(-C*S*F);return s-A*((_+C*S*O)/E*Math.sin(E*F)+O*Math.cos(E*F))},v=F=>{const A=Math.exp(-C*S*F);return C*S*A*(Math.sin(E*F)*(_+C*S*O)/E+O*Math.cos(E*F))-A*(Math.cos(E*F)*(_+C*S*O)-E*O*Math.sin(E*F))}}else if(C===1)h=E=>s-Math.exp(-S*E)*(O+(_+S*O)*E);else{const E=S*Math.sqrt(C*C-1);h=F=>{const A=Math.exp(-C*S*F),W=Math.min(E*F,300);return s-A*((_+C*S*O)*Math.sinh(W)+E*O*Math.cosh(W))/E}}}return w(),{next:_=>{const O=h(_);if(f)l.done=_>=m;else{const C=v(_)*1e3,S=Math.abs(C)<=o,E=Math.abs(s-O)<=i;l.done=S&&E}return l.value=l.done?s:O,l},flipTarget:()=>{d=-d,[n,s]=[s,n],w()}}}gr.needsInterpolation=(e,n)=>typeof e=="string"||typeof n=="string";const mc=e=>0,Rp=(e,n,s)=>{const o=n-e;return o===0?1:(s-e)/o},vr=(e,n,s)=>-s*e+s*n+e,qp=(e,n)=>s=>Math.max(Math.min(s,n),e),qs=e=>e%1?Number(e.toFixed(5)):e,za=/(-)?([\d]*\.?[\d])+/g,Mi=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,$C=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function ra(e){return typeof e=="string"}const po={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Fp=Object.assign(Object.assign({},po),{transform:qp(0,1)});Object.assign(Object.assign({},po),{default:1});const MC=e=>({test:n=>ra(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),Fs=MC("%");Object.assign(Object.assign({},Fs),{parse:e=>Fs.parse(e)/100,transform:e=>Fs.transform(e*100)});const yr=(e,n)=>s=>Boolean(ra(s)&&$C.test(s)&&s.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(s,n)),Np=(e,n,s)=>o=>{if(!ra(o))return o;const[i,r,l,c]=o.match(za);return{[e]:parseFloat(i),[n]:parseFloat(r),[s]:parseFloat(l),alpha:c!==void 0?parseFloat(c):1}},Ot={test:yr("hsl","hue"),parse:Np("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:s,alpha:o=1})=>"hsla("+Math.round(e)+", "+Fs.transform(qs(n))+", "+Fs.transform(qs(s))+", "+qs(Fp.transform(o))+")"},PC=qp(0,255),Ro=Object.assign(Object.assign({},po),{transform:e=>Math.round(PC(e))}),tt={test:yr("rgb","red"),parse:Np("red","green","blue"),transform:({red:e,green:n,blue:s,alpha:o=1})=>"rgba("+Ro.transform(e)+", "+Ro.transform(n)+", "+Ro.transform(s)+", "+qs(Fp.transform(o))+")"};function TC(e){let n="",s="",o="",i="";return e.length>5?(n=e.substr(1,2),s=e.substr(3,2),o=e.substr(5,2),i=e.substr(7,2)):(n=e.substr(1,1),s=e.substr(2,1),o=e.substr(3,1),i=e.substr(4,1),n+=n,s+=s,o+=o,i+=i),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:i?parseInt(i,16)/255:1}}const Pi={test:yr("#"),parse:TC,transform:tt.transform},fo={test:e=>tt.test(e)||Pi.test(e)||Ot.test(e),parse:e=>tt.test(e)?tt.parse(e):Ot.test(e)?Ot.parse(e):Pi.parse(e),transform:e=>ra(e)?e:e.hasOwnProperty("red")?tt.transform(e):Ot.transform(e)},Dp="${c}",Hp="${n}";function AC(e){var n,s,o,i;return isNaN(e)&&ra(e)&&((s=(n=e.match(za))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((i=(o=e.match(Mi))===null||o===void 0?void 0:o.length)!==null&&i!==void 0?i:0)>0}function Vp(e){typeof e=="number"&&(e=`${e}`);const n=[];let s=0;const o=e.match(Mi);o&&(s=o.length,e=e.replace(Mi,Dp),n.push(...o.map(fo.parse)));const i=e.match(za);return i&&(e=e.replace(za,Hp),n.push(...i.map(po.parse))),{values:n,numColors:s,tokenised:e}}function zp(e){return Vp(e).values}function Bp(e){const{values:n,numColors:s,tokenised:o}=Vp(e),i=n.length;return r=>{let l=o;for(let c=0;c<i;c++)l=l.replace(c<s?Dp:Hp,c<s?fo.transform(r[c]):qs(r[c]));return l}}const LC=e=>typeof e=="number"?0:e;function IC(e){const n=zp(e);return Bp(e)(n.map(LC))}const Qp={test:AC,parse:zp,createTransformer:Bp,getAnimatableNone:IC};function qo(e,n,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?e+(n-e)*6*s:s<1/2?n:s<2/3?e+(n-e)*(2/3-s)*6:e}function hc({hue:e,saturation:n,lightness:s,alpha:o}){e/=360,n/=100,s/=100;let i=0,r=0,l=0;if(!n)i=r=l=s;else{const c=s<.5?s*(1+n):s+n-s*n,u=2*s-c;i=qo(u,c,e+1/3),r=qo(u,c,e),l=qo(u,c,e-1/3)}return{red:Math.round(i*255),green:Math.round(r*255),blue:Math.round(l*255),alpha:o}}const RC=(e,n,s)=>{const o=e*e,i=n*n;return Math.sqrt(Math.max(0,s*(i-o)+o))},qC=[Pi,tt,Ot],gc=e=>qC.find(n=>n.test(e)),Wp=(e,n)=>{let s=gc(e),o=gc(n),i=s.parse(e),r=o.parse(n);s===Ot&&(i=hc(i),s=tt),o===Ot&&(r=hc(r),o=tt);const l=Object.assign({},i);return c=>{for(const u in l)u!=="alpha"&&(l[u]=RC(i[u],r[u],c));return l.alpha=vr(i.alpha,r.alpha,c),s.transform(l)}},FC=e=>typeof e=="number",NC=(e,n)=>s=>n(e(s)),Up=(...e)=>e.reduce(NC);function Gp(e,n){return FC(e)?s=>vr(e,n,s):fo.test(e)?Wp(e,n):Kp(e,n)}const Yp=(e,n)=>{const s=[...e],o=s.length,i=e.map((r,l)=>Gp(r,n[l]));return r=>{for(let l=0;l<o;l++)s[l]=i[l](r);return s}},DC=(e,n)=>{const s=Object.assign(Object.assign({},e),n),o={};for(const i in s)e[i]!==void 0&&n[i]!==void 0&&(o[i]=Gp(e[i],n[i]));return i=>{for(const r in o)s[r]=o[r](i);return s}};function vc(e){const n=Qp.parse(e),s=n.length;let o=0,i=0,r=0;for(let l=0;l<s;l++)o||typeof n[l]=="number"?o++:n[l].hue!==void 0?r++:i++;return{parsed:n,numNumbers:o,numRGB:i,numHSL:r}}const Kp=(e,n)=>{const s=Qp.createTransformer(n),o=vc(e),i=vc(n);return o.numHSL===i.numHSL&&o.numRGB===i.numRGB&&o.numNumbers>=i.numNumbers?Up(Yp(o.parsed,i.parsed),s):l=>`${l>0?n:e}`},HC=(e,n)=>s=>vr(e,n,s);function VC(e){if(typeof e=="number")return HC;if(typeof e=="string")return fo.test(e)?Wp:Kp;if(Array.isArray(e))return Yp;if(typeof e=="object")return DC}function zC(e,n,s){const o=[],i=s||VC(e[0]),r=e.length-1;for(let l=0;l<r;l++){let c=i(e[l],e[l+1]);if(n){const u=Array.isArray(n)?n[l]:n;c=Up(u,c)}o.push(c)}return o}function BC([e,n],[s]){return o=>s(Rp(e,n,o))}function QC(e,n){const s=e.length,o=s-1;return i=>{let r=0,l=!1;if(i<=e[0]?l=!0:i>=e[o]&&(r=o-1,l=!0),!l){let u=1;for(;u<s&&!(e[u]>i||u===o);u++);r=u-1}const c=Rp(e[r],e[r+1],i);return n[r](c)}}function Zp(e,n,{clamp:s=!0,ease:o,mixer:i}={}){const r=e.length;pc(r===n.length),pc(!o||!Array.isArray(o)||o.length===r-1),e[0]>e[r-1]&&(e=[].concat(e),n=[].concat(n),e.reverse(),n.reverse());const l=zC(n,o,i),c=r===2?BC(e,l):QC(e,l);return s?u=>c(ji(e[0],e[r-1],u)):c}const mo=e=>n=>1-e(1-n),kr=e=>n=>n<=.5?e(2*n)/2:(2-e(2*(1-n)))/2,WC=e=>n=>Math.pow(n,e),Jp=e=>n=>n*n*((e+1)*n-e),UC=e=>{const n=Jp(e);return s=>(s*=2)<1?.5*n(s):.5*(2-Math.pow(2,-10*(s-1)))},Xp=1.525,GC=4/11,YC=8/11,KC=9/10,ed=e=>e,_r=WC(2),ZC=mo(_r),nd=kr(_r),td=e=>1-Math.sin(Math.acos(e)),sd=mo(td),JC=kr(sd),br=Jp(Xp),XC=mo(br),e2=kr(br),n2=UC(Xp),t2=4356/361,s2=35442/1805,a2=16061/1805,Ba=e=>{if(e===1||e===0)return e;const n=e*e;return e<GC?7.5625*n:e<YC?9.075*n-9.9*e+3.4:e<KC?t2*n-s2*e+a2:10.8*e*e-20.52*e+10.72},o2=mo(Ba),i2=e=>e<.5?.5*(1-Ba(1-e*2)):.5*Ba(e*2-1)+.5;function r2(e,n){return e.map(()=>n||nd).splice(0,e.length-1)}function l2(e){const n=e.length;return e.map((s,o)=>o!==0?o/(n-1):0)}function c2(e,n){return e.map(s=>s*n)}function $a({from:e=0,to:n=1,ease:s,offset:o,duration:i=300}){const r={done:!1,value:e},l=Array.isArray(n)?n:[e,n],c=c2(o&&o.length===l.length?o:l2(l),i);function u(){return Zp(c,l,{ease:Array.isArray(s)?s:r2(l,s)})}let p=u();return{next:d=>(r.value=p(d),r.done=d>=i,r),flipTarget:()=>{l.reverse(),p=u()}}}function u2({velocity:e=0,from:n=0,power:s=.8,timeConstant:o=350,restDelta:i=.5,modifyTarget:r}){const l={done:!1,value:n};let c=s*e;const u=n+c,p=r===void 0?u:r(u);return p!==u&&(c=p-n),{next:d=>{const m=-c*Math.exp(-d/o);return l.done=!(m>i||m<-i),l.value=l.done?p:p+m,l},flipTarget:()=>{}}}const yc={keyframes:$a,spring:gr,decay:u2};function p2(e){if(Array.isArray(e.to))return $a;if(yc[e.type])return yc[e.type];const n=new Set(Object.keys(e));return n.has("ease")||n.has("duration")&&!n.has("dampingRatio")?$a:n.has("dampingRatio")||n.has("stiffness")||n.has("mass")||n.has("damping")||n.has("restSpeed")||n.has("restDelta")?gr:$a}const ad=1/60*1e3,d2=typeof performance!="undefined"?()=>performance.now():()=>Date.now(),od=typeof window!="undefined"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(d2()),ad);function f2(e){let n=[],s=[],o=0,i=!1,r=!1;const l=new WeakSet,c={schedule:(u,p=!1,d=!1)=>{const m=d&&i,f=m?n:s;return p&&l.add(u),f.indexOf(u)===-1&&(f.push(u),m&&i&&(o=n.length)),u},cancel:u=>{const p=s.indexOf(u);p!==-1&&s.splice(p,1),l.delete(u)},process:u=>{if(i){r=!0;return}if(i=!0,[n,s]=[s,n],s.length=0,o=n.length,o)for(let p=0;p<o;p++){const d=n[p];d(u),l.has(d)&&(c.schedule(d),e())}i=!1,r&&(r=!1,c.process(u))}};return c}const m2=40;let Ti=!0,ta=!1,Ai=!1;const ns={delta:0,timestamp:0},la=["read","update","preRender","render","postRender"],ho=la.reduce((e,n)=>(e[n]=f2(()=>ta=!0),e),{}),h2=la.reduce((e,n)=>{const s=ho[n];return e[n]=(o,i=!1,r=!1)=>(ta||y2(),s.schedule(o,i,r)),e},{}),g2=la.reduce((e,n)=>(e[n]=ho[n].cancel,e),{});la.reduce((e,n)=>(e[n]=()=>ho[n].process(ns),e),{});const v2=e=>ho[e].process(ns),id=e=>{ta=!1,ns.delta=Ti?ad:Math.max(Math.min(e-ns.timestamp,m2),1),ns.timestamp=e,Ai=!0,la.forEach(v2),Ai=!1,ta&&(Ti=!1,od(id))},y2=()=>{ta=!0,Ti=!0,Ai||od(id)},k2=()=>ns;function rd(e,n,s=0){return e-n-s}function _2(e,n,s=0,o=!0){return o?rd(n+-e,n,s):n-(e-n)+s}function b2(e,n,s,o){return o?e>=n+s:e<=-s}const w2=e=>{const n=({delta:s})=>e(s);return{start:()=>h2.update(n,!0),stop:()=>g2.update(n)}};function ld(e){var n,s,{from:o,autoplay:i=!0,driver:r=w2,elapsed:l=0,repeat:c=0,repeatType:u="loop",repeatDelay:p=0,onPlay:d,onStop:m,onComplete:f,onRepeat:h,onUpdate:v}=e,w=Ip(e,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:_}=w,O,C=0,S=w.duration,E,F=!1,A=!0,W;const ie=p2(w);!((s=(n=ie).needsInterpolation)===null||s===void 0)&&s.call(n,o,_)&&(W=Zp([0,100],[o,_],{clamp:!1}),o=0,_=100);const pe=ie(Object.assign(Object.assign({},w),{from:o,to:_}));function me(){C++,u==="reverse"?(A=C%2===0,l=_2(l,S,p,A)):(l=rd(l,S,p),u==="mirror"&&pe.flipTarget()),F=!1,h&&h()}function ve(){O.stop(),f&&f()}function Re(Ge){if(A||(Ge=-Ge),l+=Ge,!F){const Oe=pe.next(Math.max(0,l));E=Oe.value,W&&(E=W(E)),F=A?Oe.done:l<=0}v==null||v(E),F&&(C===0&&(S!=null||(S=l)),C<c?b2(l,S,p,A)&&me():ve())}function Ne(){d==null||d(),O=r(Re),O.start()}return i&&Ne(),{stop:()=>{m==null||m(),O.stop()}}}function cd(e,n){return n?e*(1e3/n):0}function x2({from:e=0,velocity:n=0,min:s,max:o,power:i=.8,timeConstant:r=750,bounceStiffness:l=500,bounceDamping:c=10,restDelta:u=1,modifyTarget:p,driver:d,onUpdate:m,onComplete:f,onStop:h}){let v;function w(S){return s!==void 0&&S<s||o!==void 0&&S>o}function _(S){return s===void 0?o:o===void 0||Math.abs(s-S)<Math.abs(o-S)?s:o}function O(S){v==null||v.stop(),v=ld(Object.assign(Object.assign({},S),{driver:d,onUpdate:E=>{var F;m==null||m(E),(F=S.onUpdate)===null||F===void 0||F.call(S,E)},onComplete:f,onStop:h}))}function C(S){O(Object.assign({type:"spring",stiffness:l,damping:c,restDelta:u},S))}if(w(e))C({from:e,velocity:n,to:_(e)});else{let S=i*n+e;typeof p!="undefined"&&(S=p(S));const E=_(S),F=E===s?-1:1;let A,W;const ie=pe=>{A=W,W=pe,n=cd(pe-A,k2().delta),(F===1&&pe>E||F===-1&&pe<E)&&C({from:pe,to:E,velocity:n})};O({type:"decay",from:e,velocity:n,timeConstant:r,power:i,restDelta:u,modifyTarget:p,onUpdate:w(S)?ie:void 0})}return{stop:()=>v==null?void 0:v.stop()}}const ud=(e,n)=>1-3*n+3*e,pd=(e,n)=>3*n-6*e,dd=e=>3*e,Qa=(e,n,s)=>((ud(n,s)*e+pd(n,s))*e+dd(n))*e,fd=(e,n,s)=>3*ud(n,s)*e*e+2*pd(n,s)*e+dd(n),C2=1e-7,S2=10;function O2(e,n,s,o,i){let r,l,c=0;do l=n+(s-n)/2,r=Qa(l,o,i)-e,r>0?s=l:n=l;while(Math.abs(r)>C2&&++c<S2);return l}const E2=8,j2=.001;function $2(e,n,s,o){for(let i=0;i<E2;++i){const r=fd(n,s,o);if(r===0)return n;n-=(Qa(n,s,o)-e)/r}return n}const Ma=11,_a=1/(Ma-1);function M2(e,n,s,o){if(e===n&&s===o)return ed;const i=new Float32Array(Ma);for(let l=0;l<Ma;++l)i[l]=Qa(l*_a,e,s);function r(l){let c=0,u=1;const p=Ma-1;for(;u!==p&&i[u]<=l;++u)c+=_a;--u;const d=(l-i[u])/(i[u+1]-i[u]),m=c+d*_a,f=fd(m,e,s);return f>=j2?$2(l,m,e,s):f===0?m:O2(l,c,c+_a,e,s)}return l=>l===0||l===1?l:Qa(r(l),n,o)}const md=(e,n)=>s=>Math.max(Math.min(s,n),e),Ns=e=>e%1?Number(e.toFixed(5)):e,sa=/(-)?([\d]*\.?[\d])+/g,Li=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi,P2=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;function ca(e){return typeof e=="string"}const ua={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ds=Object.assign(Object.assign({},ua),{transform:md(0,1)}),ba=Object.assign(Object.assign({},ua),{default:1}),wr=e=>({test:n=>ca(n)&&n.endsWith(e)&&n.split(" ").length===1,parse:parseFloat,transform:n=>`${n}${e}`}),gt=wr("deg"),Hs=wr("%"),re=wr("px"),kc=Object.assign(Object.assign({},Hs),{parse:e=>Hs.parse(e)/100,transform:e=>Hs.transform(e*100)}),xr=(e,n)=>s=>Boolean(ca(s)&&P2.test(s)&&s.startsWith(e)||n&&Object.prototype.hasOwnProperty.call(s,n)),hd=(e,n,s)=>o=>{if(!ca(o))return o;const[i,r,l,c]=o.match(sa);return{[e]:parseFloat(i),[n]:parseFloat(r),[s]:parseFloat(l),alpha:c!==void 0?parseFloat(c):1}},wa={test:xr("hsl","hue"),parse:hd("hue","saturation","lightness"),transform:({hue:e,saturation:n,lightness:s,alpha:o=1})=>"hsla("+Math.round(e)+", "+Hs.transform(Ns(n))+", "+Hs.transform(Ns(s))+", "+Ns(Ds.transform(o))+")"},T2=md(0,255),Fo=Object.assign(Object.assign({},ua),{transform:e=>Math.round(T2(e))}),Os={test:xr("rgb","red"),parse:hd("red","green","blue"),transform:({red:e,green:n,blue:s,alpha:o=1})=>"rgba("+Fo.transform(e)+", "+Fo.transform(n)+", "+Fo.transform(s)+", "+Ns(Ds.transform(o))+")"};function A2(e){let n="",s="",o="",i="";return e.length>5?(n=e.substr(1,2),s=e.substr(3,2),o=e.substr(5,2),i=e.substr(7,2)):(n=e.substr(1,1),s=e.substr(2,1),o=e.substr(3,1),i=e.substr(4,1),n+=n,s+=s,o+=o,i+=i),{red:parseInt(n,16),green:parseInt(s,16),blue:parseInt(o,16),alpha:i?parseInt(i,16)/255:1}}const _c={test:xr("#"),parse:A2,transform:Os.transform},bn={test:e=>Os.test(e)||_c.test(e)||wa.test(e),parse:e=>Os.test(e)?Os.parse(e):wa.test(e)?wa.parse(e):_c.parse(e),transform:e=>ca(e)?e:e.hasOwnProperty("red")?Os.transform(e):wa.transform(e)},gd="${c}",vd="${n}";function L2(e){var n,s,o,i;return isNaN(e)&&ca(e)&&((s=(n=e.match(sa))===null||n===void 0?void 0:n.length)!==null&&s!==void 0?s:0)+((i=(o=e.match(Li))===null||o===void 0?void 0:o.length)!==null&&i!==void 0?i:0)>0}function yd(e){typeof e=="number"&&(e=`${e}`);const n=[];let s=0;const o=e.match(Li);o&&(s=o.length,e=e.replace(Li,gd),n.push(...o.map(bn.parse)));const i=e.match(sa);return i&&(e=e.replace(sa,vd),n.push(...i.map(ua.parse))),{values:n,numColors:s,tokenised:e}}function kd(e){return yd(e).values}function _d(e){const{values:n,numColors:s,tokenised:o}=yd(e),i=n.length;return r=>{let l=o;for(let c=0;c<i;c++)l=l.replace(c<s?gd:vd,c<s?bn.transform(r[c]):Ns(r[c]));return l}}const I2=e=>typeof e=="number"?0:e;function R2(e){const n=kd(e);return _d(e)(n.map(I2))}const Cr={test:L2,parse:kd,createTransformer:_d,getAnimatableNone:R2},q2=new Set(["brightness","contrast","saturate","opacity"]);function F2(e){let[n,s]=e.slice(0,-1).split("(");if(n==="drop-shadow")return e;const[o]=s.match(sa)||[];if(!o)return e;const i=s.replace(o,"");let r=q2.has(n)?1:0;return o!==s&&(r*=100),n+"("+r+i+")"}const N2=/([a-z-]*)\(.*?\)/g,Ii=Object.assign(Object.assign({},Cr),{getAnimatableNone:e=>{const n=e.match(N2);return n?n.map(F2).join(" "):e}}),No={};class D2{constructor(){this.subscriptions=new Set}add(n){return this.subscriptions.add(n),()=>this.subscriptions.delete(n)}notify(n,s,o){if(!!this.subscriptions.size)for(const i of this.subscriptions)i(n,s,o)}clear(){this.subscriptions.clear()}}const bc=e=>!isNaN(parseFloat(e));class H2{constructor(n){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new D2,this.canTrackVelocity=!1,this.updateAndNotify=s=>{this.prev=this.current,this.current=s;const{delta:o,timestamp:i}=yC();this.lastUpdated!==i&&(this.timeDelta=o,this.lastUpdated=i),uc.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>uc.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{this.canTrackVelocity||(this.canTrackVelocity=bc(this.current)),s!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=n,this.canTrackVelocity=bc(this.current)}onChange(n){return this.updateSubscribers.add(n)}clearListeners(){this.updateSubscribers.clear()}set(n){this.updateAndNotify(n)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?cd(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(n){return this.stop(),new Promise(s=>{const{stop:o}=n(s);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function V2(e){return new H2(e)}const{isArray:z2}=Array;function B2(){const e=z({}),n=o=>{const i=r=>{!e.value[r]||(e.value[r].stop(),e.value[r].destroy(),Ih(e.value,r))};o?z2(o)?o.forEach(i):i(o):Object.keys(e.value).forEach(i)},s=(o,i,r)=>{if(e.value[o])return e.value[o];const l=V2(i);return l.onChange(c=>{rn(r,o,c)}),rn(e.value,o,l),l};return sr(n),{motionValues:e,get:s,stop:n}}const Q2=e=>Array.isArray(e),vt=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Do=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),W2=e=>({type:"spring",stiffness:550,damping:e===0?100:30,restDelta:.01,restSpeed:10}),Ho=()=>({type:"keyframes",ease:"linear",duration:300}),U2=e=>({type:"keyframes",duration:800,values:e}),wc={default:W2,x:vt,y:vt,z:vt,rotate:vt,rotateX:vt,rotateY:vt,rotateZ:vt,scaleX:Do,scaleY:Do,scale:Do,backgroundColor:Ho,color:Ho,opacity:Ho},bd=(e,n)=>{let s;return Q2(n)?s=U2:s=wc[e]||wc.default,_e({to:n},s(n))},xc=Xe(_e({},ua),{transform:Math.round}),wd={color:bn,backgroundColor:bn,outlineColor:bn,fill:bn,stroke:bn,borderColor:bn,borderTopColor:bn,borderRightColor:bn,borderBottomColor:bn,borderLeftColor:bn,borderWidth:re,borderTopWidth:re,borderRightWidth:re,borderBottomWidth:re,borderLeftWidth:re,borderRadius:re,radius:re,borderTopLeftRadius:re,borderTopRightRadius:re,borderBottomRightRadius:re,borderBottomLeftRadius:re,width:re,maxWidth:re,height:re,maxHeight:re,size:re,top:re,right:re,bottom:re,left:re,padding:re,paddingTop:re,paddingRight:re,paddingBottom:re,paddingLeft:re,margin:re,marginTop:re,marginRight:re,marginBottom:re,marginLeft:re,rotate:gt,rotateX:gt,rotateY:gt,rotateZ:gt,scale:ba,scaleX:ba,scaleY:ba,scaleZ:ba,skew:gt,skewX:gt,skewY:gt,distance:re,translateX:re,translateY:re,translateZ:re,x:re,y:re,z:re,perspective:re,transformPerspective:re,opacity:Ds,originX:kc,originY:kc,originZ:re,zIndex:xc,filter:Ii,WebkitFilter:Ii,fillOpacity:Ds,strokeOpacity:Ds,numOctaves:xc},Sr=e=>wd[e],xd=(e,n)=>n&&typeof e=="number"&&n.transform?n.transform(e):e;function G2(e,n){let s=Sr(e);return s!==Ii&&(s=Cr),s.getAnimatableNone?s.getAnimatableNone(n):void 0}const Y2={linear:ed,easeIn:_r,easeInOut:nd,easeOut:ZC,circIn:td,circInOut:JC,circOut:sd,backIn:br,backInOut:e2,backOut:XC,anticipate:n2,bounceIn:o2,bounceInOut:i2,bounceOut:Ba},Cc=e=>{if(Array.isArray(e)){const[n,s,o,i]=e;return M2(n,s,o,i)}else if(typeof e=="string")return Y2[e];return e},K2=e=>Array.isArray(e)&&typeof e[0]!="number",Sc=(e,n)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&Cr.test(n)&&!n.startsWith("url("));function Z2(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function J2(i){var r=i,{ease:e,times:n,delay:s}=r,o=go(r,["ease","times","delay"]);const l=_e({},o);return n&&(l.offset=n),e&&(l.ease=K2(e)?e.map(Cc):Cc(e)),s&&(l.elapsed=-s),l}function X2(e,n,s){return Array.isArray(n.to)&&(e.duration||(e.duration=800)),Z2(n),eS(e)||(e=_e(_e({},e),bd(s,n.to))),_e(_e({},n),J2(e))}function eS(l){var c=l,{delay:e,repeat:n,repeatType:s,repeatDelay:o,from:i}=c,r=go(c,["delay","repeat","repeatType","repeatDelay","from"]);return!!Object.keys(r).length}function nS(e,n){return e[n]||e.default||e}function tS(e,n,s,o,i){const r=nS(o,e);let l=r.from===null||r.from===void 0?n.get():r.from;const c=Sc(e,s);l==="none"&&c&&typeof s=="string"&&(l=G2(e,s));const u=Sc(e,l);function p(m){const f={from:l,to:s,velocity:o.velocity?o.velocity:n.getVelocity(),onUpdate:h=>n.set(h)};return r.type==="inertia"||r.type==="decay"?x2(_e(_e({},f),r)):ld(Xe(_e({},X2(r,f,e)),{onUpdate:h=>{f.onUpdate(h),r.onUpdate&&r.onUpdate(h)},onComplete:()=>{o.onComplete&&o.onComplete(),i&&i(),m&&m()}}))}function d(m){return n.set(s),o.onComplete&&o.onComplete(),i&&i(),m&&m(),{stop:()=>{}}}return!u||!c||r.type===!1?d:p}function sS(){const{motionValues:e,stop:n,get:s}=B2();return{motionValues:e,stop:n,push:(i,r,l,c={},u)=>{const p=l[i],d=s(i,p,l);if(c&&c.immediate){d.set(r);return}const m=tS(i,d,r,c,u);d.start(m)}}}function aS(e,n={},{motionValues:s,push:o,stop:i}=sS()){const r=k(n),l=z(!1),c=ue(s,f=>{l.value=Object.values(f).filter(h=>h.isAnimating()).length>0},{immediate:!0,deep:!0}),u=f=>{if(!r||!r[f])throw new Error(`The variant ${f} does not exist.`);return r[f]},p=f=>(typeof f=="string"&&(f=u(f)),Promise.all(Object.entries(f).map(([h,v])=>{if(h!=="transition")return new Promise(w=>{o(h,v,e,f.transition||bd(h,f[h]),w)})}).filter(Boolean)));return{isAnimating:l,apply:p,set:f=>{const h=qa(f)?f:u(f);Object.entries(h).forEach(([v,w])=>{v!=="transition"&&o(v,w,e,{immediate:!0})})},stopTransitions:()=>{c(),i()},leave:async f=>{let h;if(r&&(r.leave&&(h=r.leave),!r.leave&&r.initial&&(h=r.initial)),!h){f();return}await p(h),f()}}}const Or=typeof window!="undefined",oS=()=>Or&&window.onpointerdown===null,iS=()=>Or&&window.ontouchstart===null,rS=()=>Or&&window.onmousedown===null;function lS({target:e,state:n,variants:s,apply:o}){const i=k(s),r=[],l=(...v)=>{const w=Le.apply(null,v);return r.push(w),w},c=z(!1),u=z(!1),p=z(!1),d=j(()=>{let v=[];return i&&(i.hovered&&(v=[...v,...Object.keys(i.hovered)]),i.tapped&&(v=[...v,...Object.keys(i.tapped)]),i.focused&&(v=[...v,...Object.keys(i.focused)])),v}),m=j(()=>{const v={};Object.assign(v,n.value),c.value&&i.hovered&&Object.assign(v,i.hovered),u.value&&i.tapped&&Object.assign(v,i.tapped),p.value&&i.focused&&Object.assign(v,i.focused);for(const w in v)d.value.includes(w)||delete v[w];return v});i.hovered&&(l(e,"mouseenter",()=>{c.value=!0}),l(e,"mouseleave",()=>{c.value=!1,u.value=!1}),l(e,"mouseout",()=>{c.value=!1,u.value=!1})),i.tapped&&(rS()&&(l(e,"mousedown",()=>{u.value=!0}),l(e,"mouseup",()=>{u.value=!1})),oS()&&(l(e,"pointerdown",()=>{u.value=!0}),l(e,"pointerup",()=>{u.value=!1})),iS()&&(l(e,"touchstart",()=>{u.value=!0}),l(e,"touchend",()=>{u.value=!1}))),i.focused&&(l(e,"focus",()=>{p.value=!0}),l(e,"blur",()=>{p.value=!1}));const f=ue(m,o);return{stop:()=>{r.forEach(v=>v()),f()}}}function cS({set:e,target:n,variants:s,variant:o}){const i=k(s);return{stop:ue(()=>n,()=>{!i||(i.initial&&e("initial"),i.enter&&(o.value="enter"))},{immediate:!0,flush:"pre"})}}function uS({state:e,apply:n}){return{stop:ue(e,o=>{o&&n(o)},{immediate:!0})}}function pS({target:e,variants:n,variant:s}){const o=k(n);let i=it;if(o&&(o.visible||o.visibleOnce)){const{stop:r}=Hg(e,([{isIntersecting:l}])=>{o.visible?l?s.value="visible":s.value="initial":o.visibleOnce&&(l?s.value!=="visibleOnce"&&(s.value="visibleOnce"):s.value||(s.value="initial"))});i=r}return{stop:i}}function dS(e,n={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){const s=z([]);if(n.lifeCycleHooks){const{stop:i}=cS(e);s.value.push(i)}if(n.syncVariants){const{stop:i}=uS(e);s.value.push(i)}if(n.visibilityHooks){const{stop:i}=pS(e);s.value.push(i)}if(n.eventListeners){const{stop:i}=lS(e);s.value.push(i)}const o=()=>s.value.forEach(i=>i());return sr(o),{stop:o}}function Cd(e={}){const n=qe(_e({},e)),s=z({});return ue(n,()=>{const o={};for(const[i,r]of Object.entries(n)){const l=Sr(i),c=xd(r,l);o[i]=c}s.value=o},{immediate:!0,deep:!0}),{state:n,style:s}}const fS=["","X","Y","Z"],mS=["perspective","translate","scale","rotate","skew"],Sd=["transformPerspective","x","y","z"];mS.forEach(e=>{fS.forEach(n=>{const s=e+n;Sd.push(s)})});const hS=new Set(Sd);function Er(e){return hS.has(e)}const gS=new Set(["originX","originY","originZ"]);function Od(e){return gS.has(e)}function vS(e){const n={},s={};return Object.entries(e).forEach(([o,i])=>{Er(o)||Od(o)?n[o]=i:s[o]=i}),{transform:n,style:s}}function yS(e,n){let s,o;const{state:i,style:r}=Cd(),l=ue(()=>ln(e),p=>{if(!!p){o=p;for(const d of Object.keys(wd))p.style[d]===null||p.style[d]===""||Er(d)||Od(d)||rn(i,d,p.style[d]);s&&Object.entries(s).forEach(([d,m])=>rn(p.style,d,m)),n&&n(i)}},{immediate:!0}),c=ue(r,p=>{if(!o){s=p;return}for(const d in p)rn(o.style,d,p[d])},{immediate:!0});return{style:i,stop:()=>{o=void 0,s=void 0,l(),c()}}}const kS={x:"translateX",y:"translateY",z:"translateZ"};function Ed(e={},n=!0){const s=qe(_e({},e)),o=z("");return ue(s,i=>{let r="",l=!1;n&&(i.x||i.y||i.z)&&(r+=`translate3d(${[i.x||0,i.y||0,i.z||0].map(re.transform).join(",")}) `,l=!0);for(const[c,u]of Object.entries(i)){if(n&&(c==="x"||c==="y"||c==="z"))continue;const p=Sr(c),d=xd(u,p);r+=`${kS[c]||c}(${d}) `}n&&!l&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:s,transform:o}}function _S(e){const n=e.trim().split(/\) |\)/);if(n.length===1)return{};const s=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return n.reduce((o,i)=>{if(!i)return o;const[r,l]=i.split("("),u=l.split(",").map(d=>s(d.endsWith(")")?d.replace(")",""):d.trim())),p=u.length===1?u[0]:u;return Xe(_e({},o),{[r]:p})},{})}function bS(e,n){Object.entries(_S(n)).forEach(([s,o])=>{o=parseFloat(o);const i=["x","y","z"];if(s==="translate3d"){if(o===0){i.forEach(r=>{rn(e,r,0)});return}o.forEach((r,l)=>{rn(e,i[l],r)});return}if(s==="translateX"){rn(e,"x",o);return}if(s==="translateY"){rn(e,"y",o);return}if(s==="translateZ"){rn(e,"z",o);return}rn(e,s,o)})}function wS(e,n){let s,o;const{state:i,transform:r}=Ed(),l=ue(()=>ln(e),p=>{!p||(o=p,p.style.transform&&bS(i,p.style.transform),s&&(p.style.transform=s),n&&n(i))},{immediate:!0}),c=ue(r,p=>{if(!o){s=p;return}o.style.transform=p},{immediate:!0});return{transform:i,stop:()=>{s=void 0,o=void 0,l(),c()}}}function xS(e,n){const s=qe({}),o=m=>{Object.entries(m).forEach(([f,h])=>{rn(s,f,h)})},{style:i,stop:r}=yS(e,o),{transform:l,stop:c}=wS(e,o),u=ue(s,m=>{Object.entries(m).forEach(([f,h])=>{const v=Er(f)?l:i;v[f]&&v[f]===h||rn(v,f,h)})},{immediate:!0,deep:!0}),p=ue(()=>ln(e),m=>{!m||n&&o(n)},{immediate:!0});return{motionProperties:s,style:i,transform:l,stop:()=>{r(),c(),u(),p()}}}function CS(e={}){const n=k(e),s=z();return{state:j(()=>{if(!!s.value)return n[s.value]}),variant:s}}function SS(e,n={},s){const{motionProperties:o,stop:i}=xS(e),{variant:r,state:l}=CS(n),c=aS(o,n),u=Xe(_e({target:e,variant:r,variants:n,state:l,motionProperties:o},c),{stop:(d=!1)=>{}}),{stop:p}=dS(u,s);return u.stop=(d=!1)=>{const m=()=>{u.stopTransitions(),i(),p()};if(!d&&n.value&&n.value.leave){const f=ue(u.isAnimating,h=>{h||(f(),m())})}else m()},sr(()=>u.stop()),ag(()=>ln(e),d=>{!d||d!=null&&d.motionInstance&&(u.stop(),Object.assign(u,d.motionInstance))}),u}const OS=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],ES=(e,n)=>{const s=e.props?e.props:e.data&&e.data.attrs?e.data.attrs:{};s&&(s.variants&&qa(s.variants)&&(n.value=_e(_e({},n.value),s.variants)),OS.forEach(o=>{if(o==="delay"){if(s&&s[o]&&Nh(s[o])){const i=s[o];n&&n.value&&(n.value.enter&&(n.value.enter.transition||(n.value.enter.transition={}),n.value.enter.transition=Xe(_e({},n.value.enter.transition),{delay:i})),n.value.visible&&(n.value.visible.transition||(n.value.visible.transition={}),n.value.visible.transition=Xe(_e({},n.value.visible.transition),{delay:i})),n.value.visibleOnce&&(n.value.visibleOnce.transition||(n.value.visibleOnce.transition={}),n.value.visibleOnce.transition=Xe(_e({},n.value.visibleOnce.transition),{delay:i})))}return}o==="visible-once"&&(o="visibleOnce"),s&&s[o]&&qa(s[o])&&(n.value[o]=s[o])}))},Vo=e=>{const n=(o,i,r)=>{const l=i.value&&typeof i.value=="string"?i.value:r.key;l&&No[l]&&No[l].stop();const c=z(e||{});typeof i.value=="object"&&(c.value=i.value),ES(r,c);const u=SS(o,c);o.motionInstance=u,l&&rn(No,l,u)},s=o=>{o.motionInstance&&o.motionInstance.stop()};return{created:n,unmounted:s,bind:n,unbind:s,getSSRProps(o,i){const{initial:r}=o.value||i&&i.props||{},l=dC((e==null?void 0:e.initial)||{},r||{});if(!l||Object.keys(l).length===0)return;const{transform:c,style:u}=vS(l),{transform:p}=Ed(c),{style:d}=Cd(u);return p.value&&(d.value.transform=p.value),{style:d.value}}}},jS={initial:{opacity:0},enter:{opacity:1}},$S={initial:{opacity:0},visible:{opacity:1}},MS={initial:{opacity:0},visibleOnce:{opacity:1}},PS={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},TS={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},AS={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},LS={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},IS={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},RS={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},qS={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},FS={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},NS={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},DS={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},HS={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},VS={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},zS={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},BS={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},QS={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},WS={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},US={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},GS={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},YS={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},KS={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},ZS={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},JS={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},XS={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},eO={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},nO={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},tO={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},sO={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Oc={__proto__:null,fade:jS,fadeVisible:$S,fadeVisibleOnce:MS,pop:PS,popVisible:TS,popVisibleOnce:AS,rollBottom:zS,rollLeft:LS,rollRight:qS,rollTop:DS,rollVisibleBottom:BS,rollVisibleLeft:IS,rollVisibleRight:FS,rollVisibleTop:HS,rollVisibleOnceBottom:QS,rollVisibleOnceLeft:RS,rollVisibleOnceRight:NS,rollVisibleOnceTop:VS,slideBottom:nO,slideLeft:WS,slideRight:YS,slideTop:JS,slideVisibleBottom:tO,slideVisibleLeft:US,slideVisibleRight:KS,slideVisibleTop:XS,slideVisibleOnceBottom:sO,slideVisibleOnceLeft:GS,slideVisibleOnceRight:ZS,slideVisibleOnceTop:eO};function aO(e){const n="\xE0\xE1\xE2\xE4\xE6\xE3\xE5\u0101\u0103\u0105\xE7\u0107\u010D\u0111\u010F\xE8\xE9\xEA\xEB\u0113\u0117\u0119\u011B\u011F\u01F5\u1E27\xEE\xEF\xED\u012B\u012F\xEC\u0142\u1E3F\xF1\u0144\u01F9\u0148\xF4\xF6\xF2\xF3\u0153\xF8\u014D\xF5\u0151\u1E55\u0155\u0159\xDF\u015B\u0161\u015F\u0219\u0165\u021B\xFB\xFC\xF9\xFA\u016B\u01D8\u016F\u0171\u0173\u1E83\u1E8D\xFF\xFD\u017E\u017A\u017C\xB7/_,:;",s="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(n.split("").join("|"),"g");return e.toString().replace(/[A-Z]/g,i=>`-${i}`).toLowerCase().replace(/\s+/g,"-").replace(o,i=>s.charAt(n.indexOf(i))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const oO={install(e,n){if(e.directive("motion",Vo()),!n||n&&!n.excludePresets)for(const s in Oc){const o=Oc[s];e.directive(`motion-${aO(s)}`,Vo(o))}if(n&&n.directives)for(const s in n.directives){const o=n.directives[s];o.initial,e.directive(`motion-${s}`,Vo(o))}}},jr="vue-starport-injection",jd="vue-starport-options",iO={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},$d={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var rO=Object.defineProperty,Wa=Object.getOwnPropertySymbols,Md=Object.prototype.hasOwnProperty,Pd=Object.prototype.propertyIsEnumerable,Ec=(e,n,s)=>n in e?rO(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,lO=(e,n)=>{for(var s in n||(n={}))Md.call(n,s)&&Ec(e,s,n[s]);if(Wa)for(var s of Wa(n))Pd.call(n,s)&&Ec(e,s,n[s]);return e},jc=(e,n)=>{var s={};for(var o in e)Md.call(e,o)&&n.indexOf(o)<0&&(s[o]=e[o]);if(e!=null&&Wa)for(var o of Wa(e))n.indexOf(o)<0&&Pd.call(e,o)&&(s[o]=e[o]);return s};const cO=xe({name:"StarportProxy",props:lO({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},$d),setup(e,n){const s=L(jr),o=j(()=>s.getInstance(e.port,e.component)),i=z(),r=o.value.generateId(),l=z(!1);return o.value.isVisible||(o.value.land(),l.value=!0),cs(async()=>{o.value.el||(o.value.el=i.value,await We(),l.value=!0,o.value.rect.update())}),ao(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,l.value=!1,!o.value.options.keepAlive&&(await We(),await We(),!o.value.el&&s.dispose(o.value.port))}),ue(()=>e,async()=>{o.value.props&&await We();const c=e,{props:u}=c,p=jc(c,["props"]);o.value.props=u||{},o.value.setLocalOptions(p)},{deep:!0,immediate:!0}),()=>{const c=e,{initialProps:u,mountedProps:p}=c,d=jc(c,["initialProps","mountedProps"]),m=Us(d,(l.value?p:u)||{});return Tn("div",Us(m,{id:r,ref:i,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),n.slots.default?Tn(n.slots.default):void 0)}}});var uO=Object.defineProperty,pO=Object.defineProperties,dO=Object.getOwnPropertyDescriptors,$c=Object.getOwnPropertySymbols,fO=Object.prototype.hasOwnProperty,mO=Object.prototype.propertyIsEnumerable,Mc=(e,n,s)=>n in e?uO(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,hO=(e,n)=>{for(var s in n||(n={}))fO.call(n,s)&&Mc(e,s,n[s]);if($c)for(var s of $c(n))mO.call(n,s)&&Mc(e,s,n[s]);return e},gO=(e,n)=>pO(e,dO(n));const vO=xe({name:"Starport",inheritAttrs:!0,props:$d,setup(e,n){const s=z(!1);return cs(()=>{s.value=!0}),()=>{var l,c;const o=(c=(l=n.slots).default)==null?void 0:c.call(l);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const i=o[0];let r=i.type;return(!qa(r)||ts(r))&&(r={render(){return o}}),Tn(cO,gO(hO({},e),{key:e.port,component:Ja(r),props:i.props}))}}});function yO(e){const n=qe({height:0,width:0,left:0,top:0,update:o,listen:r,pause:l}),s=xn?document.documentElement||document.body:void 0;function o(){if(!xn)return;const c=ln(e);if(!c)return;const{height:u,width:p,left:d,top:m}=c.getBoundingClientRect();Object.assign(n,{height:u,width:p,left:d,top:s.scrollTop+m})}const i=Uu(o,{immediate:!1});function r(){!xn||(o(),i.resume())}function l(){i.pause()}return n}let kO="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",_O=(e,n=21)=>(s=n)=>{let o="",i=s;for(;i--;)o+=e[Math.random()*e.length|0];return o},bO=(e=21)=>{let n="",s=e;for(;s--;)n+=kO[Math.random()*64|0];return n};var wO={nanoid:bO,customAlphabet:_O};const Pc=wO.customAlphabet("abcdefghijklmnopqrstuvwxyz",5);function Tc(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function xO(e){var n;return e.name||((n=e.__file)==null?void 0:n.split(/[\/\\.]/).slice(-2)[0])||""}var CO=Object.defineProperty,Ac=Object.getOwnPropertySymbols,SO=Object.prototype.hasOwnProperty,OO=Object.prototype.propertyIsEnumerable,Lc=(e,n,s)=>n in e?CO(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,zo=(e,n)=>{for(var s in n||(n={}))SO.call(n,s)&&Lc(e,s,n[s]);if(Ac)for(var s of Ac(n))OO.call(n,s)&&Lc(e,s,n[s]);return e};function EO(e,n,s={}){const o=xO(n),i=Tc(o)||Pc(),r=z(),l=z(null),c=z(!1),u=z(!1),p=Gd(!0),d=z({}),m=j(()=>zo(zo(zo({},iO),s),d.value)),f=z(0);let h;p.run(()=>{h=yO(r),ue(r,async O=>{O&&(u.value=!0),await We(),r.value||(u.value=!1)})});const v=Tc(e);function w(){return`starport-${i}-${v}-${Pc()}`}const _=w();return qe({el:r,id:_,port:e,props:l,rect:h,scope:p,isLanded:c,isVisible:u,options:m,liftOffTime:f,component:n,componentName:o,componentId:i,generateId:w,setLocalOptions(O={}){d.value=JSON.parse(JSON.stringify(O))},elRef(){return r},liftOff(){!c.value||(c.value=!1,f.value=Date.now(),h.listen())},land(){c.value||(c.value=!0,h.pause())}})}function jO(e){const n=qe(new Map);function s(i,r){let l=n.get(i);return l||(l=EO(i,r,e),n.set(i,l)),l.component=r,l}function o(i){var r;(r=n.get(i))==null||r.scope.stop(),n.delete(i)}return{portMap:n,dispose:o,getInstance:s}}var $O=Object.defineProperty,MO=Object.defineProperties,PO=Object.getOwnPropertyDescriptors,Ic=Object.getOwnPropertySymbols,TO=Object.prototype.hasOwnProperty,AO=Object.prototype.propertyIsEnumerable,Rc=(e,n,s)=>n in e?$O(e,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[n]=s,LO=(e,n)=>{for(var s in n||(n={}))TO.call(n,s)&&Rc(e,s,n[s]);if(Ic)for(var s of Ic(n))AO.call(n,s)&&Rc(e,s,n[s]);return e},IO=(e,n)=>MO(e,PO(n));const RO=xe({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(e){const n=L(jr);if(!n)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const s=j(()=>n.getInstance(e.port,e.component)),o=j(()=>{var l;return((l=s.value.el)==null?void 0:l.id)||s.value.id}),i=j(()=>{const l=Date.now()-s.value.liftOffTime,c=Math.max(0,s.value.options.duration-l),u=s.value.rect,p={position:"absolute",left:0,top:0,width:`${u.width}px`,height:`${u.height}px`,transform:`translate3d(${u.left}px,${u.top}px,0px)`};return!s.value.isVisible||!s.value.el?IO(LO({},p),{zIndex:-1,display:"none"}):(s.value.isLanded?p.display="none":Object.assign(p,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:s.value.options.easing}),p)}),r={};return()=>{const l=!!(s.value.isLanded&&s.value.el);return Tn("div",{style:i.value,"data-starport-craft":s.value.componentId,"data-starport-landed":s.value.isLanded?"true":void 0,"data-starport-floating":s.value.isLanded?void 0:"true",onTransitionend:s.value.land},Tn(wm,{to:l?`#${o.value}`:"body",disabled:!l},Tn(s.value.component,Us(r,s.value.props))))}}}),qO=xe({name:"StarportCarrier",setup(e,{slots:n}){const s=jO(L(jd,{}));return Lt().appContext.app.provide(jr,s),()=>{var i;return[(i=n.default)==null?void 0:i.call(n),Array.from(s.portMap.entries()).map(([r,{component:l}])=>Tn(RO,{key:r,port:r,component:l}))]}}});function FO(e={}){return{install(n){n.provide(jd,e),n.component("Starport",vO),n.component("StarportCarrier",qO)}}}function NO(e){function n(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}n(),window.addEventListener("resize",n),e.app.use(oO),e.app.use(FO({keepAlive:!0}))}function un(e,n,s){var o,i;return(i=((o=e.instance)==null?void 0:o.$).provides[n])!=null?i:s}function DO(){return{install(e){e.directive("click",{name:"v-click",mounted(n,s){var d,m,f,h;if(Rs.value||((d=un(s,Ts))==null?void 0:d.value))return;const o=un(s,bt),i=un(s,Ps),r=un(s,li),l=s.modifiers.hide!==!1&&s.modifiers.hide!=null,c=s.modifiers.fade!==!1&&s.modifiers.fade!=null,u=((m=o==null?void 0:o.value)==null?void 0:m.length)||0,p=c?bh:Co;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(n))&&o.value.push(n),s.value===null&&(s.value=o==null?void 0:o.value.length),!(r!=null&&r.value.has(s.value)))r==null||r.value.set(s.value,[n]);else if(!((h=r==null?void 0:r.value.get(s.value))!=null&&h.includes(n))){const v=(r==null?void 0:r.value.get(s.value))||[];r==null||r.value.set(s.value,[n].concat(v))}n==null||n.classList.toggle(kt,!0),i&&ue(i,()=>{var O;const v=(O=i==null?void 0:i.value)!=null?O:0,w=s.value!=null?v>=s.value:v>u;n.classList.contains(So)||n.classList.toggle(p,!w),l!==!1&&l!==void 0&&n.classList.toggle(p,w),n.classList.toggle(vs,!1);const _=r==null?void 0:r.value.get(v);_==null||_.forEach((C,S)=>{C.classList.toggle(ya,!1),S===_.length-1?C.classList.toggle(vs,!0):C.classList.toggle(ya,!0)}),n.classList.contains(vs)||n.classList.toggle(ya,w)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(kt,!1);const o=un(s,bt);o!=null&&o.value&&ci(o.value,n)}}),e.directive("after",{name:"v-after",mounted(n,s){var c,u;if(Rs.value||((c=un(s,Ts))==null?void 0:c.value))return;const o=un(s,bt),i=un(s,Ps),r=un(s,li),l=o==null?void 0:o.value.length;s.value===void 0&&(s.value=o==null?void 0:o.value.length),r!=null&&r.value.has(s.value)?(u=r==null?void 0:r.value.get(s.value))==null||u.push(n):r==null||r.value.set(s.value,[n]),n==null||n.classList.toggle(kt,!0),i&&ue(i,()=>{var d,m,f;const p=((d=i.value)!=null?d:0)>=((f=(m=s.value)!=null?m:l)!=null?f:0);n.classList.contains(So)||n.classList.toggle(Co,!p),n.classList.toggle(vs,!1),n.classList.contains(vs)||n.classList.toggle(ya,p)},{immediate:!0})},unmounted(n){n==null||n.classList.toggle(kt,!0)}}),e.directive("click-hide",{name:"v-click-hide",mounted(n,s){var l,c,u;if(Rs.value||((l=un(s,Ts))==null?void 0:l.value))return;const o=un(s,bt),i=un(s,Ps),r=((c=o==null?void 0:o.value)==null?void 0:c.length)||0;o&&!((u=o==null?void 0:o.value)!=null&&u.includes(n))&&o.value.push(n),n==null||n.classList.toggle(kt,!0),i&&ue(i,()=>{var m;const p=(m=i==null?void 0:i.value)!=null?m:0,d=s.value!=null?p>=s.value:p>r;n.classList.toggle(Co,d),n.classList.toggle(So,d)},{immediate:!0})},unmounted(n,s){n==null||n.classList.toggle(kt,!1);const o=un(s,bt);o!=null&&o.value&&ci(o.value,n)}})}}}function HO(e,n){const s=wp(e),o=xp(n,s.currentRoute,s.currentPage);return{nav:Xe(_e(_e({},s),o),{downloadPDF:Ci,next:rt,nextSlide:Xs,openInEditor:lC,prev:lt,prevSlide:ea}),configs:Ce,themeConfigs:j(()=>Ce.themeConfig)}}function VO(){return{install(e){const n=HO(Yn,An);e.provide(D,qe(n))}}}const fs=sh(uC);fs.use(vn);fs.use(gh());fs.use(DO());fs.use(VO());NO({app:fs,router:vn});fs.mount("#app");export{ws as $,Q as A,gp as B,fe as C,Ve as D,Pp as E,nn as F,be as G,ik as H,Se as I,BO as J,QO as K,An as L,Va as M,sC as N,Ao as O,Oo as P,Ks as Q,Po as R,p0 as S,lr as T,cr as U,l0 as V,hk as W,Ln as X,WO as Y,an as Z,kp as _,t as a,ka as a0,oa as a1,_i as a2,qy as a3,Fy as a4,Ny as a5,Hy as a6,Ji as a7,Iu as a8,KO as a9,Dn as aa,tn as ab,Yk as ac,St as ad,qu as ae,Vy as af,ao as ag,j as b,B as c,xe as d,D as e,fn as f,H as g,k as h,L as i,Ky as j,rC as k,Ce as l,yh as m,Ie as n,b as o,cs as p,qe as q,z as r,UO as s,Pt as t,GO as u,YO as v,ue as w,X as x,Ue as y,Nu as z};
