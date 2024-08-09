/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,I=P.ShadowRoot&&(P.ShadyCSS===void 0||P.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,L=Symbol(),B=new WeakMap;let tt=class{constructor(t,r,e){if(this._$cssResult$=!0,e!==L)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(I&&t===void 0){const e=r!==void 0&&r.length===1;e&&(t=B.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&B.set(r,t))}return t}toString(){return this.cssText}};const st=a=>new tt(typeof a=="string"?a:a+"",void 0,L),lt=(a,...t)=>{const r=a.length===1?a[0]:t.reduce((e,o,i)=>e+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+a[i+1],a[0]);return new tt(r,a,L)},dt=(a,t)=>{if(I)a.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const e=document.createElement("style"),o=P.litNonce;o!==void 0&&e.setAttribute("nonce",o),e.textContent=r.cssText,a.appendChild(e)}},D=I?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let r="";for(const e of t.cssRules)r+=e.cssText;return st(r)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ct,defineProperty:gt,getOwnPropertyDescriptor:mt,getOwnPropertyNames:pt,getOwnPropertySymbols:ht,getPrototypeOf:wt}=Object,b=globalThis,F=b.trustedTypes,bt=F?F.emptyScript:"",X=b.reactiveElementPolyfillSupport,_=(a,t)=>a,H={toAttribute(a,t){switch(t){case Boolean:a=a?bt:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let r=a;switch(t){case Boolean:r=a!==null;break;case Number:r=a===null?null:Number(a);break;case Object:case Array:try{r=JSON.parse(a)}catch{r=null}}return r}},rt=(a,t)=>!ct(a,t),W={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:rt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),b.litPropertyMetadata??(b.litPropertyMetadata=new WeakMap);class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=W){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const e=Symbol(),o=this.getPropertyDescriptor(t,e,r);o!==void 0&&gt(this.prototype,t,o)}}static getPropertyDescriptor(t,r,e){const{get:o,set:i}=mt(this.prototype,t)??{get(){return this[r]},set(n){this[r]=n}};return{get(){return o==null?void 0:o.call(this)},set(n){const d=o==null?void 0:o.call(this);i.call(this,n),this.requestUpdate(t,d,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??W}static _$Ei(){if(this.hasOwnProperty(_("elementProperties")))return;const t=wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_("properties"))){const r=this.properties,e=[...pt(r),...ht(r)];for(const o of e)this.createProperty(o,r[o])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[e,o]of r)this.elementProperties.set(e,o)}this._$Eh=new Map;for(const[r,e]of this.elementProperties){const o=this._$Eu(r,e);o!==void 0&&this._$Eh.set(o,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const o of e)r.unshift(D(o))}else t!==void 0&&r.push(D(t));return r}static _$Eu(t,r){const e=r.attribute;return e===!1?void 0:typeof e=="string"?e:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(r=>r(this))}addController(t){var r;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((r=t.hostConnected)==null||r.call(t))}removeController(t){var r;(r=this._$E_)==null||r.delete(t)}_$ES(){const t=new Map,r=this.constructor.elementProperties;for(const e of r.keys())this.hasOwnProperty(e)&&(t.set(e,this[e]),delete this[e]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return dt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(r=>{var e;return(e=r.hostConnected)==null?void 0:e.call(r)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(r=>{var e;return(e=r.hostDisconnected)==null?void 0:e.call(r)})}attributeChangedCallback(t,r,e){this._$AK(t,e)}_$EO(t,r){var i;const e=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,e);if(o!==void 0&&e.reflect===!0){const n=(((i=e.converter)==null?void 0:i.toAttribute)!==void 0?e.converter:H).toAttribute(r,e.type);this._$Em=t,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(t,r){var i;const e=this.constructor,o=e._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const n=e.getPropertyOptions(o),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:H;this._$Em=o,this[o]=d.fromAttribute(r,n.type),this._$Em=null}}requestUpdate(t,r,e){if(t!==void 0){if(e??(e=this.constructor.getPropertyOptions(t)),!(e.hasChanged??rt)(this[t],r))return;this.C(t,r,e)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,r,e){this._$AL.has(t)||this._$AL.set(t,r),e.reflect===!0&&this._$Em!==t&&(this._$ET??(this._$ET=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[i,n]of o)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.C(i,this[i],n)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$E_)==null||e.forEach(o=>{var i;return(i=o.hostUpdate)==null?void 0:i.call(o)}),this.update(r)):this._$Ej()}catch(o){throw t=!1,this._$Ej(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){var r;(r=this._$E_)==null||r.forEach(e=>{var o;return(o=e.hostUpdated)==null?void 0:o.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&(this._$ET=this._$ET.forEach(r=>this._$EO(r,this[r]))),this._$Ej()}updated(t){}firstUpdated(t){}}y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[_("elementProperties")]=new Map,y[_("finalized")]=new Map,X==null||X({ReactiveElement:y}),(b.reactiveElementVersions??(b.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=globalThis,R=A.trustedTypes,V=R?R.createPolicy("lit-html",{createHTML:a=>a}):void 0,et="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,ot="?"+w,vt=`<${ot}>`,f=document,z=()=>f.createComment(""),S=a=>a===null||typeof a!="object"&&typeof a!="function",at=Array.isArray,ut=a=>at(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",M=`[ 	
\f\r]`,$=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,J=/>/g,v=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),K=/'/g,G=/"/g,it=/^(?:script|style|textarea|title)$/i,ft=a=>(t,...r)=>({_$litType$:a,strings:t,values:r}),j=ft(1),x=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Z=new WeakMap,u=f.createTreeWalker(f,129);function nt(a,t){if(!Array.isArray(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return V!==void 0?V.createHTML(t):t}const xt=(a,t)=>{const r=a.length-1,e=[];let o,i=t===2?"<svg>":"",n=$;for(let d=0;d<r;d++){const s=a[d];let c,m,l=-1,p=0;for(;p<s.length&&(n.lastIndex=p,m=n.exec(s),m!==null);)p=n.lastIndex,n===$?m[1]==="!--"?n=q:m[1]!==void 0?n=J:m[2]!==void 0?(it.test(m[2])&&(o=RegExp("</"+m[2],"g")),n=v):m[3]!==void 0&&(n=v):n===v?m[0]===">"?(n=o??$,l=-1):m[1]===void 0?l=-2:(l=n.lastIndex-m[2].length,c=m[1],n=m[3]===void 0?v:m[3]==='"'?G:K):n===G||n===K?n=v:n===q||n===J?n=$:(n=v,o=void 0);const h=n===v&&a[d+1].startsWith("/>")?" ":"";i+=n===$?s+vt:l>=0?(e.push(c),s.slice(0,l)+et+s.slice(l)+w+h):s+w+(l===-2?d:h)}return[nt(a,i+(a[r]||"<?>")+(t===2?"</svg>":"")),e]};class E{constructor({strings:t,_$litType$:r},e){let o;this.parts=[];let i=0,n=0;const d=t.length-1,s=this.parts,[c,m]=xt(t,r);if(this.el=E.createElement(c,e),u.currentNode=this.el.content,r===2){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(o=u.nextNode())!==null&&s.length<d;){if(o.nodeType===1){if(o.hasAttributes())for(const l of o.getAttributeNames())if(l.endsWith(et)){const p=m[n++],h=o.getAttribute(l).split(w),U=/([.?@])?(.*)/.exec(p);s.push({type:1,index:i,name:U[2],strings:h,ctor:U[1]==="."?kt:U[1]==="?"?$t:U[1]==="@"?_t:Y}),o.removeAttribute(l)}else l.startsWith(w)&&(s.push({type:6,index:i}),o.removeAttribute(l));if(it.test(o.tagName)){const l=o.textContent.split(w),p=l.length-1;if(p>0){o.textContent=R?R.emptyScript:"";for(let h=0;h<p;h++)o.append(l[h],z()),u.nextNode(),s.push({type:2,index:++i});o.append(l[p],z())}}}else if(o.nodeType===8)if(o.data===ot)s.push({type:2,index:i});else{let l=-1;for(;(l=o.data.indexOf(w,l+1))!==-1;)s.push({type:7,index:i}),l+=w.length-1}i++}}static createElement(t,r){const e=f.createElement("template");return e.innerHTML=t,e}}function k(a,t,r=a,e){var n,d;if(t===x)return t;let o=e!==void 0?(n=r._$Co)==null?void 0:n[e]:r._$Cl;const i=S(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==i&&((d=o==null?void 0:o._$AO)==null||d.call(o,!1),i===void 0?o=void 0:(o=new i(a),o._$AT(a,r,e)),e!==void 0?(r._$Co??(r._$Co=[]))[e]=o:r._$Cl=o),o!==void 0&&(t=k(a,o._$AS(a,t.values),o,e)),t}class yt{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:e}=this._$AD,o=((t==null?void 0:t.creationScope)??f).importNode(r,!0);u.currentNode=o;let i=u.nextNode(),n=0,d=0,s=e[0];for(;s!==void 0;){if(n===s.index){let c;s.type===2?c=new C(i,i.nextSibling,this,t):s.type===1?c=new s.ctor(i,s.name,s.strings,this,t):s.type===6&&(c=new At(i,this,t)),this._$AV.push(c),s=e[++d]}n!==(s==null?void 0:s.index)&&(i=u.nextNode(),n++)}return u.currentNode=f,o}p(t){let r=0;for(const e of this._$AV)e!==void 0&&(e.strings!==void 0?(e._$AI(t,e,r),r+=e.strings.length-2):e._$AI(t[r])),r++}}class C{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,e,o){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=e,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=k(this,t,r),S(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ut(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==g&&S(this._$AH)?this._$AA.nextSibling.data=t:this.$(f.createTextNode(t)),this._$AH=t}g(t){var i;const{values:r,_$litType$:e}=t,o=typeof e=="number"?this._$AC(t):(e.el===void 0&&(e.el=E.createElement(nt(e.h,e.h[0]),this.options)),e);if(((i=this._$AH)==null?void 0:i._$AD)===o)this._$AH.p(r);else{const n=new yt(o,this),d=n.u(this.options);n.p(r),this.$(d),this._$AH=n}}_$AC(t){let r=Z.get(t.strings);return r===void 0&&Z.set(t.strings,r=new E(t)),r}T(t){at(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let e,o=0;for(const i of t)o===r.length?r.push(e=new C(this.k(z()),this.k(z()),this,this.options)):e=r[o],e._$AI(i),o++;o<r.length&&(this._$AR(e&&e._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var e;for((e=this._$AP)==null?void 0:e.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class Y{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,e,o,i){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=i,e.length>2||e[0]!==""||e[1]!==""?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=g}_$AI(t,r=this,e,o){const i=this.strings;let n=!1;if(i===void 0)t=k(this,t,r,0),n=!S(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const d=t;let s,c;for(t=i[0],s=0;s<i.length-1;s++)c=k(this,d[e+s],r,s),c===x&&(c=this._$AH[s]),n||(n=!S(c)||c!==this._$AH[s]),c===g?t=g:t!==g&&(t+=(c??"")+i[s+1]),this._$AH[s]=c}n&&!o&&this.O(t)}O(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class kt extends Y{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===g?void 0:t}}class $t extends Y{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class _t extends Y{constructor(t,r,e,o,i){super(t,r,e,o,i),this.type=5}_$AI(t,r=this){if((t=k(this,t,r,0)??g)===x)return;const e=this._$AH,o=t===g&&e!==g||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,i=t!==g&&(e===g||o);o&&this.element.removeEventListener(this.name,this,e),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class At{constructor(t,r,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){k(this,t)}}const N=A.litHtmlPolyfillSupport;N==null||N(E,C),(A.litHtmlVersions??(A.litHtmlVersions=[])).push("3.1.1");const zt=(a,t,r)=>{const e=(r==null?void 0:r.renderBefore)??t;let o=e._$litPart$;if(o===void 0){const i=(r==null?void 0:r.renderBefore)??null;e._$litPart$=o=new C(t.insertBefore(z(),i),i,void 0,r??{})}return o._$AI(a),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class T extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const t=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=t.firstChild),t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=zt(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return x}}var Q;T._$litElement$=!0,T.finalized=!0,(Q=globalThis.litElementHydrateSupport)==null||Q.call(globalThis,{LitElement:T});const O=globalThis.litElementPolyfillSupport;O==null||O({LitElement:T});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");const Pt=lt` /*
! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com
*/

/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured sans font-family by default.
5. Use the user's configured sans font-feature-settings by default.
6. Use the user's configured sans font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
  -webkit-tap-highlight-color: transparent;
  /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from html so users can set them as a class directly on the html element.
*/

body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured mono font-family by default.
2. Use the user's configured mono font-feature-settings by default.
3. Use the user's configured mono font-variation-settings by default.
4. Correct the odd em font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-feature-settings: normal;
  /* 2 */
  font-variation-settings: normal;
  /* 3 */
  font-size: 1em;
  /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent sub and sup elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-feature-settings: inherit;
  /* 1 */
  font-variation-settings: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional :invalid styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to inherit in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/

dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}

/*
1. Make replaced elements display: block by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add vertical-align: middle to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.container {
  width: 100%;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.pointer-events-none {
  pointer-events: none;
}

.visible {
  visibility: visible;
}

.invisible {
  visibility: hidden;
}

.collapse {
  visibility: collapse;
}

.static {
  position: static;
}

.fixed {
  position: fixed;
}

.\\!absolute {
  position: absolute !important;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.inset-0 {
  inset: 0px;
}

.-inset-x-20 {
  left: -5rem;
  right: -5rem;
}

.inset-x-0 {
  left: 0px;
  right: 0px;
}

.inset-x-\\[15\\%\\] {
  left: 15%;
  right: 15%;
}

.inset-y-0 {
  top: 0px;
  bottom: 0px;
}

.-left-1 {
  left: -0.25rem;
}

.-top-4 {
  top: -1rem;
}

.-top-8 {
  top: -2rem;
}

.bottom-0 {
  bottom: 0px;
}

.bottom-2 {
  bottom: 0.5rem;
}

.bottom-2\\.5 {
  bottom: 0.625rem;
}

.bottom-5 {
  bottom: 1.25rem;
}

.end-2 {
  inset-inline-end: 0.5rem;
}

.end-2\\.5 {
  inset-inline-end: 0.625rem;
}

.left-0 {
  left: 0px;
}

.left-1\\/2 {
  left: 50%;
}

.left-16 {
  left: 4rem;
}

.left-\\[calc\\(50\\%\\+3rem\\)\\] {
  left: calc(50% + 3rem);
}

.left-\\[calc\\(50\\%-11rem\\)\\] {
  left: calc(50% - 11rem);
}

.left-\\[max\\(-7rem\\2c calc\\(50\\%-52rem\\)\\)\\] {
  left: max(-7rem,calc(50% - 52rem));
}

.left-\\[max\\(45rem\\2c calc\\(50\\%\\+8rem\\)\\)\\] {
  left: max(45rem,calc(50% + 8rem));
}

.right-0 {
  right: 0px;
}

.right-2 {
  right: 0.5rem;
}

.right-7 {
  right: 1.75rem;
}

.right-full {
  right: 100%;
}

.start-0 {
  inset-inline-start: 0px;
}

.top-0 {
  top: 0px;
}

.top-1\\/2 {
  top: 50%;
}

.top-16 {
  top: 4rem;
}

.top-4 {
  top: 1rem;
}

.top-\\[calc\\(100\\%-13rem\\)\\] {
  top: calc(100% - 13rem);
}

.isolate {
  isolation: isolate;
}

.-z-10 {
  z-index: -10;
}

.z-0 {
  z-index: 0;
}

.z-10 {
  z-index: 10;
}

.z-50 {
  z-index: 50;
}

.z-\\[100\\] {
  z-index: 100;
}

.z-\\[1\\] {
  z-index: 1;
}

.z-\\[2\\] {
  z-index: 2;
}

.order-last {
  order: 9999;
}

.col-span-2 {
  grid-column: span 2 / span 2;
}

.col-span-4 {
  grid-column: span 4 / span 4;
}

.col-start-2 {
  grid-column-start: 2;
}

.col-start-3 {
  grid-column-start: 3;
}

.col-start-4 {
  grid-column-start: 4;
}

.col-start-5 {
  grid-column-start: 5;
}

.col-start-6 {
  grid-column-start: 6;
}

.col-start-7 {
  grid-column-start: 7;
}

.float-left {
  float: left;
}

.\\!-m-px {
  margin: -1px !important;
}

.-m-1 {
  margin: -0.25rem;
}

.-m-1\\.5 {
  margin: -0.375rem;
}

.-m-2 {
  margin: -0.5rem;
}

.-m-2\\.5 {
  margin: -0.625rem;
}

.-m-3 {
  margin: -0.75rem;
}

.-m-8 {
  margin: -2rem;
}

.m-6 {
  margin: 1.5rem;
}

.m-auto {
  margin: auto;
}

.-mx-2 {
  margin-left: -0.5rem;
  margin-right: -0.5rem;
}

.-mx-3 {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
}

.-mx-4 {
  margin-left: -1rem;
  margin-right: -1rem;
}

.-my-1 {
  margin-top: -0.25rem;
  margin-bottom: -0.25rem;
}

.-my-1\\.5 {
  margin-top: -0.375rem;
  margin-bottom: -0.375rem;
}

.-my-6 {
  margin-top: -1.5rem;
  margin-bottom: -1.5rem;
}

.mx-2 {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}

.mx-4 {
  margin-left: 1rem;
  margin-right: 1rem;
}

.mx-\\[15\\%\\] {
  margin-left: 15%;
  margin-right: 15%;
}

.mx-\\[3px\\] {
  margin-left: 3px;
  margin-right: 3px;
}

.mx-\\[var\\(--margin-bottom\\)\\] {
  margin-left: var(--margin-bottom);
  margin-right: var(--margin-bottom);
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.my-2 {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.mx-8 {
  margin-left: 2rem;
  margin-right: 2rem;
}

.-mb-\\[10\\%\\] {
  margin-bottom: -10%;
}

.-mr-1 {
  margin-right: -0.25rem;
}

.-mr-1\\.5 {
  margin-right: -0.375rem;
}

.-mr-\\[100\\%\\] {
  margin-right: -100%;
}

.-mt-1 {
  margin-top: -0.25rem;
}

.-mt-2 {
  margin-top: -0.5rem;
}

.-mt-4 {
  margin-top: -1rem;
}

.-mt-8 {
  margin-top: -2rem;
}

.mb-10 {
  margin-bottom: 2.5rem;
}

.mb-12 {
  margin-bottom: 3rem;
}

.mb-16 {
  margin-bottom: 4rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-20 {
  margin-bottom: 5rem;
}

.mb-24 {
  margin-bottom: 6rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.mb-32 {
  margin-bottom: 8rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-5 {
  margin-bottom: 1.25rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mb-7 {
  margin-bottom: 1.75rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mb-\\[var\\(--margin-bottom\\)\\] {
  margin-bottom: var(--margin-bottom);
}

.mb-\\[var\\(--menu-margin-bottom-mobile\\)\\] {
  margin-bottom: var(--menu-margin-bottom-mobile);
}

.me-2 {
  margin-inline-end: 0.5rem;
}

.ml-1 {
  margin-left: 0.25rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.ml-3 {
  margin-left: 0.75rem;
}

.ml-4 {
  margin-left: 1rem;
}

.ml-auto {
  margin-left: auto;
}

.mr-1 {
  margin-right: 0.25rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mr-3 {
  margin-right: 0.75rem;
}

.mr-6 {
  margin-right: 1.5rem;
}

.mt-1 {
  margin-top: 0.25rem;
}

.mt-10 {
  margin-top: 2.5rem;
}

.mt-12 {
  margin-top: 3rem;
}

.mt-16 {
  margin-top: 4rem;
}

.mt-2 {
  margin-top: 0.5rem;
}

.mt-24 {
  margin-top: 6rem;
}

.mt-3 {
  margin-top: 0.75rem;
}

.mt-4 {
  margin-top: 1rem;
}

.mt-5 {
  margin-top: 1.25rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.mt-7 {
  margin-top: 1.75rem;
}

.mt-8 {
  margin-top: 2rem;
}

.ml-10 {
  margin-left: 2.5rem;
}

.box-border {
  box-sizing: border-box;
}

.box-content {
  box-sizing: content-box;
}

.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.line-clamp-6 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.inline {
  display: inline;
}

.flex {
  display: flex;
}

.inline-flex {
  display: inline-flex;
}

.table {
  display: table;
}

.flow-root {
  display: flow-root;
}

.grid {
  display: grid;
}

.contents {
  display: contents;
}

.hidden {
  display: none;
}

.aspect-\\[1155\\/678\\] {
  aspect-ratio: 1155/678;
}

.aspect-\\[577\\/310\\] {
  aspect-ratio: 577/310;
}

.\\!h-px {
  height: 1px !important;
}

.h-0 {
  height: 0px;
}

.h-0\\.5 {
  height: 0.125rem;
}

.h-1 {
  height: 0.25rem;
}

.h-10 {
  height: 2.5rem;
}

.h-12 {
  height: 3rem;
}

.h-16 {
  height: 4rem;
}

.h-3 {
  height: 0.75rem;
}

.h-32 {
  height: 8rem;
}

.h-4 {
  height: 1rem;
}

.h-48 {
  height: 12rem;
}

.h-5 {
  height: 1.25rem;
}

.h-56 {
  height: 14rem;
}

.h-6 {
  height: 1.5rem;
}

.h-8 {
  height: 2rem;
}

.h-96 {
  height: 24rem;
}

.h-\\[3px\\] {
  height: 3px;
}

.h-\\[64rem\\] {
  height: 64rem;
}

.h-\\[var\\(--hero-height\\/2\\)\\] {
  height: var(--hero-height/2);
}

.h-auto {
  height: auto;
}

.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}

.h-full {
  height: 100%;
}

.h-px {
  height: 1px;
}

.h-20 {
  height: 5rem;
}

.h-40 {
  height: 10rem;
}

.h-64 {
  height: 16rem;
}

.max-h-0 {
  max-height: 0px;
}

.max-h-56 {
  max-height: 14rem;
}

.min-h-10 {
  min-height: 2.5rem;
}

.min-h-96 {
  min-height: 24rem;
}

.min-h-\\[300px\\] {
  min-height: 300px;
}

.min-h-full {
  min-height: 100%;
}

.\\!w-px {
  width: 1px !important;
}

.w-0 {
  width: 0px;
}

.w-0\\.5 {
  width: 0.125rem;
}

.w-1 {
  width: 0.25rem;
}

.w-1\\/2 {
  width: 50%;
}

.w-1\\/3 {
  width: 33.333333%;
}

.w-10 {
  width: 2.5rem;
}

.w-12 {
  width: 3rem;
}

.w-16 {
  width: 4rem;
}

.w-3 {
  width: 0.75rem;
}

.w-32 {
  width: 8rem;
}

.w-4 {
  width: 1rem;
}

.w-48 {
  width: 12rem;
}

.w-5 {
  width: 1.25rem;
}

.w-6 {
  width: 1.5rem;
}

.w-60 {
  width: 15rem;
}

.w-8 {
  width: 2rem;
}

.w-\\[30px\\] {
  width: 30px;
}

.w-\\[36\\.0625rem\\] {
  width: 36.0625rem;
}

.w-\\[36\\.125rem\\] {
  width: 36.125rem;
}

.w-\\[48rem\\] {
  width: 48rem;
}

.w-\\[57rem\\] {
  width: 57rem;
}

.w-\\[64rem\\] {
  width: 64rem;
}

.w-\\[var\\(--gallery-button-width\\)\\] {
  width: var(--gallery-button-width);
}

.w-full {
  width: 100%;
}

.w-screen {
  width: 100vw;
}

.w-64 {
  width: 16rem;
}

.max-w-2xl {
  max-width: 42rem;
}

.max-w-3xl {
  max-width: 48rem;
}

.max-w-4xl {
  max-width: 56rem;
}

.max-w-5xl {
  max-width: 64rem;
}

.max-w-7xl {
  max-width: 80rem;
}

.max-w-\\[--container-width\\] {
  max-width: var(--container-width);
}

.max-w-\\[70rem\\] {
  max-width: 70rem;
}

.max-w-\\[var\\(--container-width\\)\\] {
  max-width: var(--container-width);
}

.max-w-\\[var\\(--search-input-max-width\\)\\] {
  max-width: var(--search-input-max-width);
}

.max-w-full {
  max-width: 100%;
}

.max-w-lg {
  max-width: 32rem;
}

.max-w-max {
  max-width: -moz-max-content;
  max-width: max-content;
}

.max-w-md {
  max-width: 28rem;
}

.max-w-none {
  max-width: none;
}

.max-w-sm {
  max-width: 24rem;
}

.max-w-xl {
  max-width: 36rem;
}

.max-w-xs {
  max-width: 20rem;
}

.flex-1 {
  flex: 1 1 0%;
}

.flex-auto {
  flex: 1 1 auto;
}

.flex-initial {
  flex: 0 1 auto;
}

.flex-none {
  flex: none;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.shrink {
  flex-shrink: 1;
}

.shrink-0 {
  flex-shrink: 0;
}

.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-56 {
  --tw-translate-x: -14rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-full {
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-2 {
  --tw-translate-y: -0.5rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-y-24 {
  --tw-translate-y: -6rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-12 {
  --tw-translate-x: 3rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-y-4 {
  --tw-translate-y: 1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.rotate-\\[30deg\\] {
  --tw-rotate: 30deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform-gpu {
  transform: translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.animate-fadeIn {
  animation: fadeIn 2s ease-in forwards;
}

.cursor-default {
  cursor: default;
}

.cursor-pointer {
  cursor: pointer;
}

.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.snap-x {
  scroll-snap-type: x var(--tw-scroll-snap-strictness);
}

.snap-center {
  scroll-snap-align: center;
}

.snap-always {
  scroll-snap-stop: always;
}

.scroll-ml-6 {
  scroll-margin-left: 1.5rem;
}

.list-none {
  list-style-type: none;
}

.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.grid-cols-7 {
  grid-template-columns: repeat(7, minmax(0, 1fr));
}

.grid-rows-\\[0fr\\] {
  grid-template-rows: 0fr;
}

.grid-rows-\\[1fr\\] {
  grid-template-rows: 1fr;
}

.flex-row {
  flex-direction: row;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-nowrap {
  flex-wrap: nowrap;
}

.items-start {
  align-items: flex-start;
}

.items-end {
  align-items: flex-end;
}

.items-center {
  align-items: center;
}

.items-baseline {
  align-items: baseline;
}

.justify-start {
  justify-content: flex-start;
}

.justify-end {
  justify-content: flex-end;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.gap-16 {
  gap: 4rem;
}

.gap-2 {
  gap: 0.5rem;
}

.gap-3 {
  gap: 0.75rem;
}

.gap-4 {
  gap: 1rem;
}

.gap-8 {
  gap: 2rem;
}

.gap-x-2 {
  -moz-column-gap: 0.5rem;
       column-gap: 0.5rem;
}

.gap-x-3 {
  -moz-column-gap: 0.75rem;
       column-gap: 0.75rem;
}

.gap-x-4 {
  -moz-column-gap: 1rem;
       column-gap: 1rem;
}

.gap-x-6 {
  -moz-column-gap: 1.5rem;
       column-gap: 1.5rem;
}

.gap-x-8 {
  -moz-column-gap: 2rem;
       column-gap: 2rem;
}

.gap-y-10 {
  row-gap: 2.5rem;
}

.gap-y-16 {
  row-gap: 4rem;
}

.gap-y-2 {
  row-gap: 0.5rem;
}

.-space-x-px > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(-1px * var(--tw-space-x-reverse));
  margin-left: calc(-1px * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1rem * var(--tw-space-x-reverse));
  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(1.5rem * var(--tw-space-x-reverse));
  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));
}

.space-y-0 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0px * var(--tw-space-y-reverse));
}

.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}

.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}

.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}

.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2rem * var(--tw-space-y-reverse));
}

.space-x-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2rem * var(--tw-space-x-reverse));
  margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));
}

.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}

.divide-gray-500\\/10 > :not([hidden]) ~ :not([hidden]) {
  border-color: rgb(107 114 128 / 0.1);
}

.\\!overflow-hidden {
  overflow: hidden !important;
}

.overflow-hidden {
  overflow: hidden;
}

.overflow-x-auto {
  overflow-x: auto;
}

.overflow-y-auto {
  overflow-y: auto;
}

.overflow-x-hidden {
  overflow-x: hidden;
}

.overflow-x-scroll {
  overflow-x: scroll;
}

.\\!whitespace-nowrap {
  white-space: nowrap !important;
}

.rounded {
  border-radius: 0.25rem;
}

.rounded-3xl {
  border-radius: 1.5rem;
}

.rounded-\\[var\\(--button-border-radius\\)\\] {
  border-radius: var(--button-border-radius);
}

.rounded-\\[var\\(--card-border-radius\\)\\] {
  border-radius: var(--card-border-radius);
}

.rounded-\\[var\\(--cta-border-radius\\)\\] {
  border-radius: var(--cta-border-radius);
}

.rounded-\\[var\\(--feature-border-radius\\)\\] {
  border-radius: var(--feature-border-radius);
}

.rounded-\\[var\\(--membership-border-radius\\)\\] {
  border-radius: var(--membership-border-radius);
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-md {
  border-radius: 0.375rem;
}

.rounded-xl {
  border-radius: 0.75rem;
}

.rounded-b {
  border-bottom-right-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
}

.rounded-l-md {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}

.rounded-l-xl {
  border-top-left-radius: 0.75rem;
  border-bottom-left-radius: 0.75rem;
}

.rounded-r-md {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}

.rounded-t {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

.rounded-t-3xl {
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}

.rounded-t-none {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

.rounded-t-xl {
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
}

.\\!border-0 {
  border-width: 0px !important;
}

.border {
  border-width: 1px;
}

.border-0 {
  border-width: 0px;
}

.border-2 {
  border-width: 2px;
}

.border-y-\\[10px\\] {
  border-top-width: 10px;
  border-bottom-width: 10px;
}

.border-b {
  border-bottom-width: 1px;
}

.border-b-0 {
  border-bottom-width: 0px;
}

.border-b-2 {
  border-bottom-width: 2px;
}

.border-t {
  border-top-width: 1px;
}

.border-t-2 {
  border-top-width: 2px;
}

.border-solid {
  border-style: solid;
}

.border-\\[var\\(--button-bg\\)\\] {
  border-color: var(--button-bg);
}

.border-\\[var\\(--button-secondary\\)\\] {
  border-color: var(--button-secondary);
}

.border-\\[var\\(--footer-primary\\)\\] {
  border-color: var(--footer-primary);
}

.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: rgb(243 244 246 / var(--tw-border-opacity));
}

.border-gray-200 {
  --tw-border-opacity: 1;
  border-color: rgb(229 231 235 / var(--tw-border-opacity));
}

.border-gray-300 {
  --tw-border-opacity: 1;
  border-color: rgb(209 213 219 / var(--tw-border-opacity));
}

.border-neutral-100 {
  --tw-border-opacity: 1;
  border-color: rgb(245 245 245 / var(--tw-border-opacity));
}

.border-transparent {
  border-color: transparent;
}

.border-white {
  --tw-border-opacity: 1;
  border-color: rgb(255 255 255 / var(--tw-border-opacity));
}

.border-opacity-10 {
  --tw-border-opacity: 0.1;
}

.border-opacity-100 {
  --tw-border-opacity: 1;
}

.bg-\\[var\\(--band-bg\\)\\] {
  background-color: var(--band-bg);
}

.bg-\\[var\\(--banner-bg\\)\\] {
  background-color: var(--banner-bg);
}

.bg-\\[var\\(--button-bg\\)\\] {
  background-color: var(--button-bg);
}

.bg-\\[var\\(--button-primary-bg\\)\\] {
  background-color: var(--button-primary-bg);
}

.bg-\\[var\\(--button-secondary\\)\\] {
  background-color: var(--button-secondary);
}

.bg-\\[var\\(--button-secondary-bg\\)\\] {
  background-color: var(--button-secondary-bg);
}

.bg-\\[var\\(--button-theme\\)\\] {
  background-color: var(--button-theme);
}

.bg-\\[var\\(--calendar-primary\\)\\] {
  background-color: var(--calendar-primary);
}

.bg-\\[var\\(--calendar-theme\\)\\] {
  background-color: var(--calendar-theme);
}

.bg-\\[var\\(--card-primary\\)\\] {
  background-color: var(--card-primary);
}

.bg-\\[var\\(--card-theme\\)\\] {
  background-color: var(--card-theme);
}

.bg-\\[var\\(--cta-bg\\)\\] {
  background-color: var(--cta-bg);
}

.bg-\\[var\\(--cta-bg-left\\)\\] {
  background-color: var(--cta-bg-left);
}

.bg-\\[var\\(--cta-bg-right\\)\\] {
  background-color: var(--cta-bg-right);
}

.bg-\\[var\\(--cta-theme\\)\\] {
  background-color: var(--cta-theme);
}

.bg-\\[var\\(--feature-bg\\)\\] {
  background-color: var(--feature-bg);
}

.bg-\\[var\\(--feature-theme\\)\\] {
  background-color: var(--feature-theme);
}

.bg-\\[var\\(--footer-bg\\)\\] {
  background-color: var(--footer-bg);
}

.bg-\\[var\\(--form-bg\\)\\] {
  background-color: var(--form-bg);
}

.bg-\\[var\\(--form-bg-input\\)\\] {
  background-color: var(--form-bg-input);
}

.bg-\\[var\\(--form-button-bg\\)\\] {
  background-color: var(--form-button-bg);
}

.bg-\\[var\\(--hero-bg\\)\\] {
  background-color: var(--hero-bg);
}

.bg-\\[var\\(--hero-primary\\)\\] {
  background-color: var(--hero-primary);
}

.bg-\\[var\\(--list-item-bg\\)\\] {
  background-color: var(--list-item-bg);
}

.bg-\\[var\\(--membership-bg\\)\\] {
  background-color: var(--membership-bg);
}

.bg-\\[var\\(--membership-primary\\)\\] {
  background-color: var(--membership-primary);
}

.bg-\\[var\\(--membership-secondary\\)\\] {
  background-color: var(--membership-secondary);
}

.bg-\\[var\\(--membership-theme\\)\\] {
  background-color: var(--membership-theme);
}

.bg-\\[var\\(--menu-bg\\)\\] {
  background-color: var(--menu-bg);
}

.bg-\\[var\\(--pagination-bg\\)\\] {
  background-color: var(--pagination-bg);
}

.bg-\\[var\\(--pricing-bg\\)\\] {
  background-color: var(--pricing-bg);
}

.bg-\\[var\\(--pricing-primary\\)\\] {
  background-color: var(--pricing-primary);
}

.bg-\\[var\\(--pricing-theme\\)\\] {
  background-color: var(--pricing-theme);
}

.bg-\\[var\\(--property-pill-bg\\)\\] {
  background-color: var(--property-pill-bg);
}

.bg-\\[var\\(--search-input-bg\\)\\] {
  background-color: var(--search-input-bg);
}

.bg-blue-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}

.bg-gray-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.bg-gray-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
}

.bg-gray-50 {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}

.bg-gray-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 114 128 / var(--tw-bg-opacity));
}

.bg-gray-900 {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

.bg-inherit {
  background-color: inherit;
}

.bg-red-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(254 226 226 / var(--tw-bg-opacity));
}

.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}

.bg-red-600 {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity));
}

.bg-sky-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(14 165 233 / var(--tw-bg-opacity));
}

.bg-slate-100 {
  --tw-bg-opacity: 1;
  background-color: rgb(241 245 249 / var(--tw-bg-opacity));
}

.bg-slate-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}

.bg-transparent {
  background-color: transparent;
}

.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.bg-white\\/5 {
  background-color: rgb(255 255 255 / 0.05);
}

.bg-\\[var\\(--search-theme\\)\\] {
  background-color: var(--search-theme);
}

.bg-opacity-75 {
  --tw-bg-opacity: 0.75;
}

.bg-gradient-to-bl {
  background-image: linear-gradient(to bottom left, var(--tw-gradient-stops));
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.bg-gradient-to-t {
  background-image: linear-gradient(to top, var(--tw-gradient-stops));
}

.bg-gradient-to-tr {
  background-image: linear-gradient(to top right, var(--tw-gradient-stops));
}

.bg-none {
  background-image: none;
}

.from-\\[\\#ff80b5\\] {
  --tw-gradient-from: #ff80b5 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 128 181 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.from-\\[var\\(--band-primary\\)\\] {
  --tw-gradient-from: var(--band-primary) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.from-\\[var\\(--banner-bg-from\\)\\] {
  --tw-gradient-from: var(--banner-bg-from) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.from-white {
  --tw-gradient-from: #fff var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}

.to-\\[\\#9089fc\\] {
  --tw-gradient-to: #9089fc var(--tw-gradient-to-position);
}

.to-\\[var\\(--band-secondary\\)\\] {
  --tw-gradient-to: var(--band-secondary) var(--tw-gradient-to-position);
}

.to-\\[var\\(--banner-bg-to\\)\\] {
  --tw-gradient-to: var(--banner-bg-to) var(--tw-gradient-to-position);
}

.bg-clip-padding {
  background-clip: padding-box;
}

.bg-clip-text {
  -webkit-background-clip: text;
          background-clip: text;
}

.fill-black {
  fill: #000;
}

.fill-current {
  fill: currentColor;
}

.fill-gray-500 {
  fill: #6b7280;
}

.fill-red-500 {
  fill: #ef4444;
}

.fill-white {
  fill: #fff;
}

.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}

.object-center {
  -o-object-position: center;
     object-position: center;
}

.\\!p-0 {
  padding: 0px !important;
}

.p-0 {
  padding: 0px;
}

.p-1 {
  padding: 0.25rem;
}

.p-1\\.5 {
  padding: 0.375rem;
}

.p-10 {
  padding: 2.5rem;
}

.p-2 {
  padding: 0.5rem;
}

.p-2\\.5 {
  padding: 0.625rem;
}

.p-3 {
  padding: 0.75rem;
}

.p-4 {
  padding: 1rem;
}

.p-5 {
  padding: 1.25rem;
}

.p-6 {
  padding: 1.5rem;
}

.p-8 {
  padding: 2rem;
}

.px-1 {
  padding-left: 0.25rem;
  padding-right: 0.25rem;
}

.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

.px-16 {
  padding-left: 4rem;
  padding-right: 4rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.px-3\\.5 {
  padding-left: 0.875rem;
  padding-right: 0.875rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}

.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}

.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}

.py-20 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

.py-24 {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.py-32 {
  padding-top: 8rem;
  padding-bottom: 8rem;
}

.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}

.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.pb-20 {
  padding-bottom: 5rem;
}

.pb-4 {
  padding-bottom: 1rem;
}

.pb-8 {
  padding-bottom: 2rem;
}

.pb-\\[var\\(--margin-bottom\\)\\] {
  padding-bottom: var(--margin-bottom);
}

.pl-2 {
  padding-left: 0.5rem;
}

.pl-3 {
  padding-left: 0.75rem;
}

.pl-4 {
  padding-left: 1rem;
}

.pl-5 {
  padding-left: 1.25rem;
}

.pl-6 {
  padding-left: 1.5rem;
}

.pl-7 {
  padding-left: 1.75rem;
}

.pl-9 {
  padding-left: 2.25rem;
}

.pr-20 {
  padding-right: 5rem;
}

.pr-3 {
  padding-right: 0.75rem;
}

.pr-4 {
  padding-right: 1rem;
}

.pr-6 {
  padding-right: 1.5rem;
}

.pr-7 {
  padding-right: 1.75rem;
}

.pr-8 {
  padding-right: 2rem;
}

.ps-10 {
  padding-inline-start: 2.5rem;
}

.ps-3 {
  padding-inline-start: 0.75rem;
}

.pt-14 {
  padding-top: 3.5rem;
}

.pt-16 {
  padding-top: 4rem;
}

.pt-4 {
  padding-top: 1rem;
}

.pt-5 {
  padding-top: 1.25rem;
}

.pt-6 {
  padding-top: 1.5rem;
}

.pt-8 {
  padding-top: 2rem;
}

.pt-\\[5\\%\\] {
  padding-top: 5%;
}

.pt-\\[var\\(--margin-bottom\\)\\] {
  padding-top: var(--margin-bottom);
}

.pb-10 {
  padding-bottom: 2.5rem;
}

.text-left {
  text-align: left;
}

.text-center {
  text-align: center;
}

.-indent-\\[999px\\] {
  text-indent: -999px;
}

.align-middle {
  vertical-align: middle;
}

.font-sans {
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

.font-serif {
  font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.text-5xl {
  font-size: 3rem;
  line-height: 1;
}

.text-6xl {
  font-size: 3.75rem;
  line-height: 1;
}

.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}

.font-black {
  font-weight: 900;
}

.font-bold {
  font-weight: 700;
}

.font-extrabold {
  font-weight: 800;
}

.font-medium {
  font-weight: 500;
}

.font-normal {
  font-weight: 400;
}

.font-semibold {
  font-weight: 600;
}

.uppercase {
  text-transform: uppercase;
}

.capitalize {
  text-transform: capitalize;
}

.italic {
  font-style: italic;
}

.leading-5 {
  line-height: 1.25rem;
}

.leading-6 {
  line-height: 1.5rem;
}

.leading-7 {
  line-height: 1.75rem;
}

.leading-8 {
  line-height: 2rem;
}

.leading-loose {
  line-height: 2;
}

.leading-none {
  line-height: 1;
}

.leading-relaxed {
  line-height: 1.625;
}

.leading-tight {
  line-height: 1.25;
}

.tracking-tight {
  letter-spacing: -0.025em;
}

.tracking-wide {
  letter-spacing: 0.025em;
}

.tracking-widest {
  letter-spacing: 0.1em;
}

.text-\\[var\\(--accordion-theme\\)\\] {
  color: var(--accordion-theme);
}

.text-\\[var\\(--band-text\\)\\] {
  color: var(--band-text);
}

.text-\\[var\\(--button-primary\\)\\] {
  color: var(--button-primary);
}

.text-\\[var\\(--button-theme\\)\\] {
  color: var(--button-theme);
}

.text-\\[var\\(--card-primary\\)\\] {
  color: var(--card-primary);
}

.text-\\[var\\(--card-secondary\\)\\] {
  color: var(--card-secondary);
}

.text-\\[var\\(--cta-secondary\\)\\] {
  color: var(--cta-secondary);
}

.text-\\[var\\(--cta-text\\)\\] {
  color: var(--cta-text);
}

.text-\\[var\\(--cta-text-right\\)\\] {
  color: var(--cta-text-right);
}

.text-\\[var\\(--cta-theme\\)\\] {
  color: var(--cta-theme);
}

.text-\\[var\\(--feature-primary\\)\\] {
  color: var(--feature-primary);
}

.text-\\[var\\(--feature-text\\)\\] {
  color: var(--feature-text);
}

.text-\\[var\\(--feature-theme\\)\\] {
  color: var(--feature-theme);
}

.text-\\[var\\(--footer-menu-color\\)\\] {
  color: var(--footer-menu-color);
}

.text-\\[var\\(--footer-primary\\)\\] {
  color: var(--footer-primary);
}

.text-\\[var\\(--footer-social-icon-bg\\)\\] {
  color: var(--footer-social-icon-bg);
}

.text-\\[var\\(--form-bg-text\\)\\] {
  color: var(--form-bg-text);
}

.text-\\[var\\(--form-button-text\\)\\] {
  color: var(--form-button-text);
}

.text-\\[var\\(--form-text\\)\\] {
  color: var(--form-text);
}

.text-\\[var\\(--hero-primary\\)\\] {
  color: var(--hero-primary);
}

.text-\\[var\\(--hero-secondary\\)\\] {
  color: var(--hero-secondary);
}

.text-\\[var\\(--hero-theme\\)\\] {
  color: var(--hero-theme);
}

.text-\\[var\\(--membership-primary\\)\\] {
  color: var(--membership-primary);
}

.text-\\[var\\(--membership-secondary\\)\\] {
  color: var(--membership-secondary);
}

.text-\\[var\\(--membership-text\\)\\] {
  color: var(--membership-text);
}

.text-\\[var\\(--membership-theme\\)\\] {
  color: var(--membership-theme);
}

.text-\\[var\\(--menu-primary\\)\\] {
  color: var(--menu-primary);
}

.text-\\[var\\(--pagination-text\\)\\] {
  color: var(--pagination-text);
}

.text-\\[var\\(--pricing-primary\\)\\] {
  color: var(--pricing-primary);
}

.text-\\[var\\(--pricing-secondary\\)\\] {
  color: var(--pricing-secondary);
}

.text-\\[var\\(--pricing-theme\\)\\] {
  color: var(--pricing-theme);
}

.text-\\[var\\(--pricing-title\\)\\] {
  color: var(--pricing-title);
}

.text-\\[var\\(--property-pill-text\\)\\] {
  color: var(--property-pill-text);
}

.text-\\[var\\(--property-price\\)\\] {
  color: var(--property-price);
}

.text-\\[var\\(--search-price-color\\)\\] {
  color: var(--search-price-color);
}

.text-\\[var\\(--skew-bg\\)\\] {
  color: var(--skew-bg);
}

.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.text-blue-500 {
  --tw-text-opacity: 1;
  color: rgb(59 130 246 / var(--tw-text-opacity));
}

.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.text-gray-50 {
  --tw-text-opacity: 1;
  color: rgb(249 250 251 / var(--tw-text-opacity));
}

.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.text-gray-600 {
  --tw-text-opacity: 1;
  color: rgb(75 85 99 / var(--tw-text-opacity));
}

.text-gray-700 {
  --tw-text-opacity: 1;
  color: rgb(55 65 81 / var(--tw-text-opacity));
}

.text-gray-800 {
  --tw-text-opacity: 1;
  color: rgb(31 41 55 / var(--tw-text-opacity));
}

.text-gray-900 {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.text-indigo-600 {
  --tw-text-opacity: 1;
  color: rgb(79 70 229 / var(--tw-text-opacity));
}

.text-neutral-800 {
  --tw-text-opacity: 1;
  color: rgb(38 38 38 / var(--tw-text-opacity));
}

.text-orange-50 {
  --tw-text-opacity: 1;
  color: rgb(255 247 237 / var(--tw-text-opacity));
}

.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity));
}

.text-red-600 {
  --tw-text-opacity: 1;
  color: rgb(220 38 38 / var(--tw-text-opacity));
}

.text-slate-100 {
  --tw-text-opacity: 1;
  color: rgb(241 245 249 / var(--tw-text-opacity));
}

.text-slate-600 {
  --tw-text-opacity: 1;
  color: rgb(71 85 105 / var(--tw-text-opacity));
}

.text-transparent {
  color: transparent;
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.no-underline {
  text-decoration-line: none;
}

.placeholder-gray-400::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}

.placeholder-gray-400::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}

.opacity-0 {
  opacity: 0;
}

.opacity-100 {
  opacity: 1;
}

.opacity-30 {
  opacity: 0.3;
}

.opacity-50 {
  opacity: 0.5;
}

.opacity-\\[3\\%\\] {
  opacity: 3%;
}

.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-2xl {
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-gray-100 {
  --tw-shadow-color: #f3f4f6;
  --tw-shadow: var(--tw-shadow-colored);
}

.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.ring {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.ring-inset {
  --tw-ring-inset: inset;
}

.ring-gray-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));
}

.ring-gray-300 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}

.ring-gray-400\\/10 {
  --tw-ring-color: rgb(156 163 175 / 0.1);
}

.ring-gray-900\\/5 {
  --tw-ring-color: rgb(17 24 39 / 0.05);
}

.ring-slate-200 {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(226 232 240 / var(--tw-ring-opacity));
}

.ring-white\\/10 {
  --tw-ring-color: rgb(255 255 255 / 0.1);
}

.ring-offset-0 {
  --tw-ring-offset-width: 0px;
}

.blur-2xl {
  --tw-blur: blur(40px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.blur-3xl {
  --tw-blur: blur(64px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.grayscale {
  --tw-grayscale: grayscale(100%);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}

.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.transition-shadow {
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

.duration-100 {
  transition-duration: 100ms;
}

.duration-200 {
  transition-duration: 200ms;
}

.duration-300 {
  transition-duration: 300ms;
}

.duration-500 {
  transition-duration: 500ms;
}

.duration-\\[600ms\\] {
  transition-duration: 600ms;
}

.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.1\\2c 0\\.25\\2c 1\\.0\\)\\] {
  transition-timing-function: cubic-bezier(0.25,0.1,0.25,1.0);
}

.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}

.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.ease-linear {
  transition-timing-function: linear;
}

.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}

.\\!\\[clip\\:rect\\(0\\2c 0\\2c 0\\2c 0\\)\\] {
  clip: rect(0,0,0,0) !important;
}

.\\[mask-image\\:radial-gradient\\(closest-side\\2c var\\(--cta-primary\\)\\2c transparent\\)\\] {
  -webkit-mask-image: radial-gradient(closest-side,var(--cta-primary),transparent);
          mask-image: radial-gradient(closest-side,var(--cta-primary),transparent);
}

.placeholder\\:text-gray-400::-moz-placeholder {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.placeholder\\:text-gray-400::placeholder {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

.after\\:clear-both::after {
  content: var(--tw-content);
  clear: both;
}

.after\\:block::after {
  content: var(--tw-content);
  display: block;
}

.after\\:content-\\[\\'\\'\\]::after {
  --tw-content: '';
  content: var(--tw-content);
}

.hover\\:scale-110:hover {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.hover\\:border-\\[var\\(--button-primary\\)\\]:hover {
  border-color: var(--button-primary);
}

.hover\\:border-gray-400:hover {
  --tw-border-opacity: 1;
  border-color: rgb(156 163 175 / var(--tw-border-opacity));
}

.hover\\:bg-\\[var\\(--button-bg-hover\\)\\]:hover {
  background-color: var(--button-bg-hover);
}

.hover\\:bg-\\[var\\(--button-secondary\\)\\]:hover {
  background-color: var(--button-secondary);
}

.hover\\:bg-\\[var\\(--feature-primary\\)\\]:hover {
  background-color: var(--feature-primary);
}

.hover\\:bg-\\[var\\(--form-button-bg-hover\\)\\]:hover {
  background-color: var(--form-button-bg-hover);
}

.hover\\:bg-\\[var\\(--gallery-button-bg-hover\\)\\]:hover {
  background-color: var(--gallery-button-bg-hover);
}

.hover\\:bg-\\[var\\(--pricing-primary\\)\\]:hover {
  background-color: var(--pricing-primary);
}

.hover\\:bg-blue-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(219 234 254 / var(--tw-bg-opacity));
}

.hover\\:bg-blue-800:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(30 64 175 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(243 244 246 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-200:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-50:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(249 250 251 / var(--tw-bg-opacity));
}

.hover\\:bg-gray-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}

.hover\\:bg-neutral-100:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(245 245 245 / var(--tw-bg-opacity));
}

.hover\\:bg-red-500:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity));
}

.hover\\:bg-white:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}

.hover\\:bg-\\[var\\(--search-primary\\)\\]:hover {
  background-color: var(--search-primary);
}

.hover\\:bg-\\[var\\(--search-secondary\\)\\]:hover {
  background-color: var(--search-secondary);
}

.hover\\:fill-gray-500:hover {
  fill: #6b7280;
}

.hover\\:fill-red-500:hover {
  fill: #ef4444;
}

.hover\\:text-\\[var\\(--button-primary\\)\\]:hover {
  color: var(--button-primary);
}

.hover\\:text-\\[var\\(--button-text-hover\\)\\]:hover {
  color: var(--button-text-hover);
}

.hover\\:text-\\[var\\(--button-theme\\)\\]:hover {
  color: var(--button-theme);
}

.hover\\:text-\\[var\\(--footer-primary\\)\\]:hover {
  color: var(--footer-primary);
}

.hover\\:text-\\[var\\(--form-button-text-hover\\)\\]:hover {
  color: var(--form-button-text-hover);
}

.hover\\:text-black:hover {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}

.hover\\:text-gray-500:hover {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity));
}

.hover\\:text-gray-900:hover {
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}

.hover\\:text-orange-700:hover {
  --tw-text-opacity: 1;
  color: rgb(194 65 12 / var(--tw-text-opacity));
}

.hover\\:underline:hover {
  text-decoration-line: underline;
}

.hover\\:no-underline:hover {
  text-decoration-line: none;
}

.hover\\:opacity-50:hover {
  opacity: 0.5;
}

.hover\\:shadow-xl:hover {
  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.hover\\:outline-none:hover {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:z-10:focus {
  z-index: 10;
}

.focus\\:z-20:focus {
  z-index: 20;
}

.focus\\:border-blue-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(59 130 246 / var(--tw-border-opacity));
}

.focus\\:border-gray-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}

.focus\\:border-purple-500:focus {
  --tw-border-opacity: 1;
  border-color: rgb(168 85 247 / var(--tw-border-opacity));
}

.focus\\:text-white:focus {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.focus\\:no-underline:focus {
  text-decoration-line: none;
}

.focus\\:opacity-90:focus {
  opacity: 0.9;
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:outline-offset-0:focus {
  outline-offset: 0px;
}

.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-4:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-inset:focus {
  --tw-ring-inset: inset;
}

.focus\\:ring-blue-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity));
}

.focus\\:ring-blue-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));
}

.focus\\:ring-blue-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));
}

.focus\\:ring-gray-200:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));
}

.focus\\:ring-gray-300:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));
}

.focus\\:ring-gray-500:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(107 114 128 / var(--tw-ring-opacity));
}

.focus\\:ring-indigo-600:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(79 70 229 / var(--tw-ring-opacity));
}

.focus-visible\\:outline:focus-visible {
  outline-style: solid;
}

.focus-visible\\:outline-2:focus-visible {
  outline-width: 2px;
}

.focus-visible\\:outline-offset-2:focus-visible {
  outline-offset: 2px;
}

.focus-visible\\:outline-offset-\\[-4px\\]:focus-visible {
  outline-offset: -4px;
}

.focus-visible\\:outline-gray-900:focus-visible {
  outline-color: #111827;
}

.focus-visible\\:outline-indigo-600:focus-visible {
  outline-color: #4f46e5;
}

.group:invalid .group-invalid\\:pointer-events-none {
  pointer-events: none;
}

.group:invalid .group-invalid\\:opacity-30 {
  opacity: 0.3;
}

.group:hover .group-hover\\:-translate-x-8 {
  --tw-translate-x: -2rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:translate-x-full {
  --tw-translate-x: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:border-\\[25px\\] {
  border-width: 25px;
}

.group:hover .group-hover\\:text-\\[var\\(--button-bg\\)\\] {
  color: var(--button-bg);
}

.group:hover .group-hover\\:text-\\[var\\(--button-text-hover\\)\\] {
  color: var(--button-text-hover);
}

.group:hover .group-hover\\:opacity-75 {
  opacity: 0.75;
}

.peer:not(:-moz-placeholder-shown):not(:focus):invalid ~ .peer-\\[\\&\\:not\\(\\:-moz-placeholder-shown\\)\\:not\\(\\:focus\\)\\:invalid\\]\\:block {
  display: block;
}

.peer:not(:placeholder-shown):not(:focus):invalid ~ .peer-\\[\\&\\:not\\(\\:placeholder-shown\\)\\:not\\(\\:focus\\)\\:invalid\\]\\:block {
  display: block;
}

@media (prefers-reduced-motion: reduce) {
  .motion-reduce\\:transition-none {
    transition-property: none;
  }
}

:is(.dark .dark\\:border-gray-500) {
  --tw-border-opacity: 1;
  border-color: rgb(107 114 128 / var(--tw-border-opacity));
}

:is(.dark .dark\\:border-gray-600) {
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
}

:is(.dark .dark\\:border-gray-700) {
  --tw-border-opacity: 1;
  border-color: rgb(55 65 81 / var(--tw-border-opacity));
}

:is(.dark .dark\\:border-opacity-50) {
  --tw-border-opacity: 0.5;
}

:is(.dark .dark\\:bg-\\[var\\(--band-bg-dark\\)\\]) {
  background-color: var(--band-bg-dark);
}

:is(.dark .dark\\:bg-black) {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-blue-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(37 99 235 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-gray-700) {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-gray-900) {
  --tw-bg-opacity: 1;
  background-color: rgb(17 24 39 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-slate-500) {
  --tw-bg-opacity: 1;
  background-color: rgb(100 116 139 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-slate-600) {
  --tw-bg-opacity: 1;
  background-color: rgb(71 85 105 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:bg-slate-800) {
  --tw-bg-opacity: 1;
  background-color: rgb(30 41 59 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:text-gray-300) {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity));
}

:is(.dark .dark\\:text-gray-400) {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity));
}

:is(.dark .dark\\:text-white) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

:is(.dark .dark\\:placeholder-gray-400)::-moz-placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}

:is(.dark .dark\\:placeholder-gray-400)::placeholder {
  --tw-placeholder-opacity: 1;
  color: rgb(156 163 175 / var(--tw-placeholder-opacity));
}

:is(.dark .dark\\:hover\\:bg-blue-700:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(29 78 216 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:hover\\:bg-gray-600:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(75 85 99 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:hover\\:bg-gray-800:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:hover\\:bg-slate-700:hover) {
  --tw-bg-opacity: 1;
  background-color: rgb(51 65 85 / var(--tw-bg-opacity));
}

:is(.dark .dark\\:hover\\:text-white:hover) {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

:is(.dark .dark\\:focus\\:border-blue-500:focus) {
  --tw-border-opacity: 1;
  border-color: rgb(59 130 246 / var(--tw-border-opacity));
}

:is(.dark .dark\\:focus\\:ring-blue-500:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));
}

:is(.dark .dark\\:focus\\:ring-blue-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 64 175 / var(--tw-ring-opacity));
}

:is(.dark .dark\\:focus\\:ring-gray-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));
}

:is(.dark .dark\\:focus\\:ring-slate-800:focus) {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(30 41 59 / var(--tw-ring-opacity));
}

@media (min-width: 640px) {
  .sm\\:left-\\[calc\\(50\\%\\+36rem\\)\\] {
    left: calc(50% + 36rem);
  }

  .sm\\:left-\\[calc\\(50\\%-30rem\\)\\] {
    left: calc(50% - 30rem);
  }

  .sm\\:left-full {
    left: 100%;
  }

  .sm\\:top-\\[calc\\(100\\%-30rem\\)\\] {
    top: calc(100% - 30rem);
  }

  .sm\\:mx-0 {
    margin-left: 0px;
    margin-right: 0px;
  }

  .sm\\:my-8 {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  .sm\\:-ml-80 {
    margin-left: -20rem;
  }

  .sm\\:mb-32 {
    margin-bottom: 8rem;
  }

  .sm\\:mb-8 {
    margin-bottom: 2rem;
  }

  .sm\\:ml-3 {
    margin-left: 0.75rem;
  }

  .sm\\:ml-4 {
    margin-left: 1rem;
  }

  .sm\\:mt-0 {
    margin-top: 0px;
  }

  .sm\\:mt-20 {
    margin-top: 5rem;
  }

  .sm\\:block {
    display: block;
  }

  .sm\\:flex {
    display: flex;
  }

  .sm\\:hidden {
    display: none;
  }

  .sm\\:h-10 {
    height: 2.5rem;
  }

  .sm\\:w-10 {
    width: 2.5rem;
  }

  .sm\\:w-\\[57rem\\] {
    width: 57rem;
  }

  .sm\\:w-\\[72\\.1875rem\\] {
    width: 72.1875rem;
  }

  .sm\\:w-auto {
    width: auto;
  }

  .sm\\:w-full {
    width: 100%;
  }

  .sm\\:max-w-lg {
    max-width: 32rem;
  }

  .sm\\:max-w-sm {
    max-width: 24rem;
  }

  .sm\\:flex-1 {
    flex: 1 1 0%;
  }

  .sm\\:translate-y-0 {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .sm\\:scale-100 {
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .sm\\:scale-95 {
    --tw-scale-x: .95;
    --tw-scale-y: .95;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .sm\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\\:flex-row-reverse {
    flex-direction: row-reverse;
  }

  .sm\\:items-start {
    align-items: flex-start;
  }

  .sm\\:items-center {
    align-items: center;
  }

  .sm\\:justify-center {
    justify-content: center;
  }

  .sm\\:justify-between {
    justify-content: space-between;
  }

  .sm\\:gap-6 {
    gap: 1.5rem;
  }

  .sm\\:gap-y-20 {
    row-gap: 5rem;
  }

  .sm\\:p-0 {
    padding: 0px;
  }

  .sm\\:p-10 {
    padding: 2.5rem;
  }

  .sm\\:p-6 {
    padding: 1.5rem;
  }

  .sm\\:px-16 {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .sm\\:px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .sm\\:px-3\\.5 {
    padding-left: 0.875rem;
    padding-right: 0.875rem;
  }

  .sm\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .sm\\:px-7 {
    padding-left: 1.75rem;
    padding-right: 1.75rem;
  }

  .sm\\:py-12 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .sm\\:py-24 {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  .sm\\:py-32 {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }

  .sm\\:py-48 {
    padding-top: 12rem;
    padding-bottom: 12rem;
  }

  .sm\\:pb-4 {
    padding-bottom: 1rem;
  }

  .sm\\:text-left {
    text-align: left;
  }

  .sm\\:text-center {
    text-align: center;
  }

  .sm\\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .sm\\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }

  .sm\\:text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }

  .sm\\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .sm\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .sm\\:leading-5 {
    line-height: 1.25rem;
  }

  .sm\\:ring-1 {
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  }

  .sm\\:ring-gray-900\\/10 {
    --tw-ring-color: rgb(17 24 39 / 0.1);
  }

  .sm\\:before\\:flex-1::before {
    content: var(--tw-content);
    flex: 1 1 0%;
  }
}

@media (min-width: 768px) {
  .md\\:inset-0 {
    inset: 0px;
  }

  .md\\:-ml-4 {
    margin-left: -1rem;
  }

  .md\\:-mt-12 {
    margin-top: -3rem;
  }

  .md\\:mb-0 {
    margin-bottom: 0px;
  }

  .md\\:mb-\\[var\\(--menu-margin-bottom\\)\\] {
    margin-bottom: var(--menu-margin-bottom);
  }

  .md\\:mr-0 {
    margin-right: 0px;
  }

  .md\\:mt-0 {
    margin-top: 0px;
  }

  .md\\:ml-20 {
    margin-left: 5rem;
  }

  .md\\:block {
    display: block;
  }

  .md\\:flex {
    display: flex;
  }

  .md\\:inline-flex {
    display: inline-flex;
  }

  .md\\:grid {
    display: grid;
  }

  .md\\:h-12 {
    height: 3rem;
  }

  .md\\:h-\\[var\\(--hero-height\\)\\] {
    height: var(--hero-height);
  }

  .md\\:h-auto {
    height: auto;
  }

  .md\\:h-full {
    height: 100%;
  }

  .md\\:w-1\\/2 {
    width: 50%;
  }

  .md\\:w-1\\/3 {
    width: 33.333333%;
  }

  .md\\:w-auto {
    width: auto;
  }

  .md\\:max-w-4xl {
    max-width: 56rem;
  }

  .md\\:max-w-lg {
    max-width: 32rem;
  }

  .md\\:max-w-sm {
    max-width: 24rem;
  }

  .md\\:grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .md\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .md\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .md\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .md\\:grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }

  .md\\:justify-end {
    justify-content: flex-end;
  }

  .md\\:divide-x > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-x-reverse: 0;
    border-right-width: calc(1px * var(--tw-divide-x-reverse));
    border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));
  }

  .md\\:divide-gray-200 > :not([hidden]) ~ :not([hidden]) {
    --tw-divide-opacity: 1;
    border-color: rgb(229 231 235 / var(--tw-divide-opacity));
  }

  .md\\:px-16 {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .md\\:px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .md\\:pl-14 {
    padding-left: 3.5rem;
  }

  .md\\:pl-4 {
    padding-left: 1rem;
  }

  .md\\:pr-14 {
    padding-right: 3.5rem;
  }

  .md\\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
}

@media (min-width: 1024px) {
  .lg\\:left-1\\/2 {
    left: 50%;
  }

  .lg\\:order-first {
    order: -9999;
  }

  .lg\\:mx-0 {
    margin-left: 0px;
    margin-right: 0px;
  }

  .lg\\:mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .lg\\:-ml-0 {
    margin-left: -0px;
  }

  .lg\\:-ml-2 {
    margin-left: -0.5rem;
  }

  .lg\\:-mr-2 {
    margin-right: -0.5rem;
  }

  .lg\\:-mt-0 {
    margin-top: -0px;
  }

  .lg\\:-mt-20 {
    margin-top: -5rem;
  }

  .lg\\:mb-0 {
    margin-bottom: 0px;
  }

  .lg\\:mb-6 {
    margin-bottom: 1.5rem;
  }

  .lg\\:ml-0 {
    margin-left: 0px;
  }

  .lg\\:mt-0 {
    margin-top: 0px;
  }

  .lg\\:mt-20 {
    margin-top: 5rem;
  }

  .lg\\:ml-40 {
    margin-left: 10rem;
  }

  .lg\\:flex {
    display: flex;
  }

  .lg\\:hidden {
    display: none;
  }

  .lg\\:h-20 {
    height: 5rem;
  }

  .lg\\:h-80 {
    height: 20rem;
  }

  .lg\\:h-full {
    height: 100%;
  }

  .lg\\:w-1\\/2 {
    width: 50%;
  }

  .lg\\:w-1\\/3 {
    width: 33.333333%;
  }

  .lg\\:w-1\\/4 {
    width: 25%;
  }

  .lg\\:w-2\\/3 {
    width: 66.666667%;
  }

  .lg\\:w-full {
    width: 100%;
  }

  .lg\\:max-w-2xl {
    max-width: 42rem;
  }

  .lg\\:max-w-5xl {
    max-width: 64rem;
  }

  .lg\\:max-w-\\[var\\(--container-width\\)\\] {
    max-width: var(--container-width);
  }

  .lg\\:max-w-md {
    max-width: 28rem;
  }

  .lg\\:max-w-none {
    max-width: none;
  }

  .lg\\:max-w-xl {
    max-width: 36rem;
  }

  .lg\\:flex-1 {
    flex: 1 1 0%;
  }

  .lg\\:flex-auto {
    flex: 1 1 auto;
  }

  .lg\\:flex-shrink-0 {
    flex-shrink: 0;
  }

  .lg\\:-translate-x-1\\/2 {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .lg\\:translate-y-0 {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .lg\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .lg\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .lg\\:grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .lg\\:flex-col {
    flex-direction: column;
  }

  .lg\\:items-center {
    align-items: center;
  }

  .lg\\:justify-start {
    justify-content: flex-start;
  }

  .lg\\:justify-end {
    justify-content: flex-end;
  }

  .lg\\:justify-center {
    justify-content: center;
  }

  .lg\\:gap-x-10 {
    -moz-column-gap: 2.5rem;
         column-gap: 2.5rem;
  }

  .lg\\:gap-x-12 {
    -moz-column-gap: 3rem;
         column-gap: 3rem;
  }

  .lg\\:rounded-l-3xl {
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
  }

  .lg\\:rounded-t-none {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }

  .lg\\:px-10 {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  .lg\\:px-24 {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .lg\\:px-8 {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .lg\\:py-16 {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .lg\\:py-32 {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }

  .lg\\:py-56 {
    padding-top: 14rem;
    padding-bottom: 14rem;
  }

  .lg\\:px-12 {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .lg\\:py-12 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .lg\\:pb-24 {
    padding-bottom: 6rem;
  }

  .lg\\:pb-8 {
    padding-bottom: 2rem;
  }

  .lg\\:pr-3 {
    padding-right: 0.75rem;
  }

  .lg\\:pr-8 {
    padding-right: 2rem;
  }

  .lg\\:pt-24 {
    padding-top: 6rem;
  }

  .lg\\:pt-4 {
    padding-top: 1rem;
  }

  .lg\\:pt-8 {
    padding-top: 2rem;
  }

  .lg\\:text-left {
    text-align: left;
  }

  .lg\\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .lg\\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }

  .lg\\:text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }

  .lg\\:text-7xl {
    font-size: 4.5rem;
    line-height: 1;
  }
}

@media (min-width: 1280px) {
  .xl\\:gap-40 {
    gap: 10rem;
  }

  .xl\\:gap-x-8 {
    -moz-column-gap: 2rem;
         column-gap: 2rem;
  }
}

@media (min-width: 1536px) {
  .\\32xl\\:mr-0 {
    margin-right: 0px;
  }

  .\\32xl\\:py-10 {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  .\\32xl\\:pb-24 {
    padding-bottom: 6rem;
  }

  .\\32xl\\:pb-40 {
    padding-bottom: 10rem;
  }

  .\\32xl\\:pt-24 {
    padding-top: 6rem;
  }

  .\\32xl\\:pt-52 {
    padding-top: 13rem;
  }
}

.rtl\\:text-right:where([dir="rtl"], [dir="rtl"] *) {
  text-align: right;
}

.invalid\\:\\[\\&\\:not\\(\\:-moz-placeholder-shown\\)\\:not\\(\\:focus\\)\\]\\:border-red-500:not(:-moz-placeholder-shown):not(:focus):invalid {
  --tw-border-opacity: 1;
  border-color: rgb(239 68 68 / var(--tw-border-opacity));
}

.invalid\\:\\[\\&\\:not\\(\\:placeholder-shown\\)\\:not\\(\\:focus\\)\\]\\:border-red-500:not(:placeholder-shown):not(:focus):invalid {
  --tw-border-opacity: 1;
  border-color: rgb(239 68 68 / var(--tw-border-opacity));
}
 `;function Tt(a,t){const r=new CustomEvent("ds-event",{bubbles:!0,composed:!0,detail:a});console.log("event",r),t.dispatchEvent(r)}function Rt(a){if(a==="left")return j`
      <div class="skew skew-top">
        <svg
          class="-mt-8 h-8 w-full text-[var(--skew-bg)] md:-mt-12 md:h-12 lg:-mt-20 lg:h-20"
          viewbox="0 0 10 10"
          preserveaspectratio="none"
        >
          <polygon
            fill="currentColor"
            points="0 0 10 10 0 10"
            fill="text-[var(--skew-bg)]"
          ></polygon>
        </svg>
      </div>
    `;if(a==="right")return j`
      <div class="skew skew-top">
        <svg
          class="-mt-8 h-8 w-full text-[var(--skew-bg)] md:-mt-12 md:h-12 lg:-mt-20 lg:h-20"
          viewbox="0 0 10 10"
          preserveaspectratio="none"
        >
          <polygon
            fill="currentColor"
            points="0 10 10 0 10 10"
            fill="text-[var(--skew-bg)]"
          ></polygon>
        </svg>
      </div>
    `}function jt(a){if(a==="left")return j` <div class="skew skew-bottom">
      <svg
        class="h-8 w-full text-[var(--skew-bg)] md:h-12 lg:h-20"
        viewbox="0 0 10 10"
        preserveaspectratio="none"
      >
        <polygon
          fill="currentColor"
          points="0 0 10 0 10 10"
          fill="var(--skew-bg)"
        ></polygon>
      </svg>
    </div>`;if(a==="right")return j`
      <div class="skew skew-bottom">
        <svg
          class=" h-8 w-full text-[var(--skew-bg)] md:h-12 lg:h-20"
          viewbox="0 0 10 10"
          preserveaspectratio="none"
        >
          <polygon
            fill="currentColor"
            points="0 0 10 0 0 10"
            fill="var(--skew-bg)"
          ></polygon>
        </svg>
      </div>
    `}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Et=a=>(...t)=>({_$litDirective$:a,values:t});class Ct{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,e){this._$Ct=t,this._$AM=r,this._$Ci=e}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=Et(class extends Ct{constructor(a){var t;if(super(a),a.type!==St.ATTRIBUTE||a.name!=="class"||((t=a.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(a){return" "+Object.keys(a).filter(t=>a[t]).join(" ")+" "}update(a,[t]){var e,o;if(this.it===void 0){this.it=new Set,a.strings!==void 0&&(this.st=new Set(a.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((e=this.st)!=null&&e.has(i))&&this.it.add(i);return this.render(t)}const r=a.element.classList;for(const i of this.it)i in t||(r.remove(i),this.it.delete(i));for(const i in t){const n=!!t[i];n===this.it.has(i)||(o=this.st)!=null&&o.has(i)||(n?(r.add(i),this.it.add(i)):(r.remove(i),this.it.delete(i)))}return x}});export{Pt as T,g as a,jt as b,Et as c,Tt as d,Yt as e,Ct as f,lt as i,Rt as r,T as s,St as t,x as w,j as x};
