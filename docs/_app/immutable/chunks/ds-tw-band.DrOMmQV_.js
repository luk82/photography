import{i as a,e as l,b as c,t as g,w as b,s as u,T as h,x as p,r as m,c as o,a as y}from"./class-map.-4MMyoZd.js";const f=a`
  :host {
    display: block;
  }
  :host .full-width-text {
    max-width: 100%;
    width: 100%;
  }
  :host .has-border {
    border: solid 1px gray;
    padding: 16px;
  }
  .content-centered {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  :host .bg-color {
    background-color: var(--band-theme, #f1f1f1);
  }
  :host .bg-image {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .content {
    padding: 16px;
    max-width: 75%;
    text-align: center;
  }

  .gradient-1 {
    background: rgb(2, 0, 36);
    // background: linear-gradient(
    //   90deg,
    //   rgba(2, 0, 36, 1) 0%,
    //   rgba(16, 51, 113, 1) 35%,
    //   rgba(0, 212, 255, 1) 100%
    // );
  }

  .gradient-2 {
    background: rgb(34, 193, 195);
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(253, 187, 45, 1) 100%
    );
  }

  .gradient-3 {
    background-color: #0093e9;
    background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
  }

  :host ::slotted(.bouncy) {
    animation: bouncy 5s infinite linear;
    position: relative;
  }
  @keyframes bouncy {
    0% {
      top: 0em;
    }
    40% {
      top: 0em;
    }
    43% {
      top: -0.9em;
    }
    46% {
      top: 0em;
    }
    48% {
      top: -0.4em;
    }
    50% {
      top: 0em;
    }
    100% {
      top: 0em;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const d="important",k=" !"+d,x=l(class extends c{constructor(r){var n;if(super(r),r.type!==g.ATTRIBUTE||r.name!=="style"||((n=r.strings)==null?void 0:n.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce((n,e)=>{const t=r[e];return t==null?n:n+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${t};`},"")}update(r,[n]){const{style:e}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(n)),this.render(n);for(const t of this.ft)n[t]==null&&(this.ft.delete(t),t.includes("-")?e.removeProperty(t):e[t]=null);for(const t in n){const s=n[t];if(s!=null){this.ft.add(t);const i=typeof s=="string"&&s.endsWith(k);t.includes("-")||i?e.setProperty(t,i?s.slice(0,-11):s,i?d:""):e[t]=s}}return b}});class v extends u{static get styles(){return[f,h,a`
        :host {
          --skew-bg: var(--band-bg);
        }
      `]}static get properties(){return{title:{type:String},height:{type:String},border:{type:Boolean},textColour:{type:String},bgImage:{type:String},bgColour:{type:String},gradient:{type:Boolean},toCenter:{type:Boolean,attribute:"to-center"},skew:{type:String}}}constructor(){super(),this.title="",this.buttonText="",this.height="100",this.border=!1,this.bgImage=!1,this.gradient=!1,this.toCenter=!1,this.skew="none"}render(){const n={backgroundImage:this.bgImage?`url(${this.bgImage})`:"",backgroundRepeat:"no-repeat",backgroundSize:"cover"},e={"justify-center":this.toCenter},t={"bg-[var(--band-bg)] dark:bg-[var(--band-bg-dark)]":!this.gradient,"bg-gradient-to-bl from-[var(--band-primary)] to-[var(--band-secondary)]":this.gradient};return p` <section>
      ${m(this.skew)}
      <div
        class="${o(t)} py-8 text-[var(--band-text)]"
        style=${x(n)}
      >
        <div
          class="${o(e)} container mx-auto flex flex-col items-center px-4"
        >
          <h2
            class="font-heading ${o(e)} text-5xl font-semibold lg:text-6xl"
          >
            <slot name="header"></slot>
          </h2>
          <div class="${o(e)} flex flex-wrap items-center">
            <div
              class="mb-6 mt-4 inline-block text-center text-lg text-[var(--band-text)] md:mb-0"
            >
              <slot name="body"></slot>
            </div>
            <slot></slot>
          </div>
        </div>
      </div>
      ${y(this.skew)}
    </section>`}_onClick(){this.dispatchEvent(new CustomEvent("button-click"))}}customElements.define("ds-tw-band",v);
