import{i as a,b as l,c,t as g,w as b,s as h,T as u,x as p,r as m,e as i,a as y}from"./class-map.4yN0Eo_Y.js";const f=a`
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
 */const d="important",k=" !"+d,x=l(class extends c{constructor(s){var e;if(super(s),s.type!==g.ATTRIBUTE||s.name!=="style"||((e=s.strings)==null?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(s){return Object.keys(s).reduce((e,n)=>{const t=s[n];return t==null?e:e+`${n=n.includes("-")?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${t};`},"")}update(s,[e]){const{style:n}=s.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const t of this.ft)e[t]==null&&(this.ft.delete(t),t.includes("-")?n.removeProperty(t):n[t]=null);for(const t in e){const r=e[t];if(r!=null){this.ft.add(t);const o=typeof r=="string"&&r.endsWith(k);t.includes("-")||o?n.setProperty(t,o?r.slice(0,-11):r,o?d:""):n[t]=r}}return b}});class v extends h{static get styles(){return[f,u,a`
        :host {
          --skew-bg: var(--band-bg);
        }
      `]}static get properties(){return{title:{type:String},height:{type:String},border:{type:Boolean},textColour:{type:String},bgImage:{type:String},bgColour:{type:String},gradient:{type:Boolean},toCenter:{type:Boolean},skew:{type:String}}}constructor(){super(),this.title="",this.buttonText="",this.height="300",this.border=!1,this.bgImage=!1,this.gradient=!1,this.toCenter=!1,this.skew="none"}render(){const e={backgroundImage:this.bgImage?`url(${this.bgImage})`:"",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:`${this.height}px`},n={"justify-center flex flex-col items-center text-center":this.toCenter},t={"bg-[var(--band-bg)] dark:bg-[var(--band-bg-dark)]":!this.gradient,"bg-gradient-to-bl from-[var(--band-primary)] to-[var(--band-secondary)]":this.gradient};return p` <section>
      ${m(this.skew)}
      <div
        class="${i(t)} py-8 text-[var(--band-text)]"
        style=${x(e)}
      >
        <div class="${i(n)} container mx-auto px-4">
          <h2 class="font-heading text-5xl font-semibold lg:text-6xl">
            <slot name="header"></slot>
          </h2>

          <div
            class="mb-6 mt-4 inline-block text-lg text-[var(--band-text)] md:mb-0"
          >
            <slot name="body"></slot>
          </div>
          <div><slot></slot></div>
        </div>
      </div>
      ${y(this.skew)}
    </section>`}_onClick(){this.dispatchEvent(new CustomEvent("button-click"))}}customElements.define("ds-tw-band",v);
