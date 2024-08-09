import{s as W,d as q,u as F,g as H,e as O,o as R}from"../chunks/scheduler.Bmg8oFKD.js";import{S as G,i as V,e as g,s as L,c as v,a as x,d,f as $,l as A,m as T,n as w,g as y,h as M,r as I,p as U}from"../chunks/index.4GapGig5.js";import{s as z,i as N,T as D,x as h,e as E,r as K,b as X}from"../chunks/class-map.CUp2aMEF.js";class J extends z{static get styles(){return[N`
        :host {
          --skew-bg: var(--footer-bg);
        }
        ::slotted(slot='social-media' > a) {
          color: red;
        }
      `,D]}static get properties(){return{companyName:{type:String},logoSrc:{type:String},menu:{type:Array},horizontal:{type:Boolean},skew:{type:String},variant:{type:String}}}constructor(){super(),this.logoSrc="",this.companyName="Enter Conpany Name",this.horizontal=!1,this.variant="primary",this.skew="none",this.menu=[{name:"Menu 1",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]},{name:"Menu 2",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]},{name:"Menu 3",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]},{name:"Menu 4",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]},{name:"Menu 5",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]}]}renderFooterVariant(){var t,r;if(this.variant==="primary"){console.log(this.menu);const s={"lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1":!this.horizontal,"grid-cols-1 pr-4":this.horizontal},a={"flex space-x-6 space-y-0":this.horizontal,"space-y-6":!this.horizontal};return h` <footer
        class="bg-[var(--footer-bg)]"
        aria-labelledby="footer-heading"
      >
        <div class="container mx-auto px-6 pb-8 pt-8">
          <div class="xs:grid-cols-2 grid gap-8 md:grid-cols-6">
            <div class="col-span-2 space-y-6">
              <slot name="logo"></slot>
              <p class="text-sm leading-6 text-gray-300">
                <slot name="header"></slot>
              </p>
              <div class="flex space-x-6">
                <slot name="social-media"></slot>
              </div>
            </div>
            <div class="grid-cols col-span-4 mt-16 grid gap-8">
              <div class="${E(s)} grid gap-8">
                ${(t=this.menu)==null?void 0:t.map(o=>h` <div>
                      <h3
                        class="text-sm font-semibold leading-6 text-[var(--footer-menu-color)]"
                      >
                        ${o.name}
                      </h3>
                      <ul role="list" class="${E(a)} mt-6">
                        ${o.links.map(p=>h`
                            <li>
                              <a
                                href="${p.href}"
                                class="text-sm leading-6 text-[var(--footer-menu-color)] hover:text-[var(--footer-primary)] hover:underline"
                                >${p.name}</a
                              >
                            </li>
                          `)}
                      </ul>
                    </div>`)}
              </div>
            </div>
          </div>
          <div
            class="bt-1 mt-24 border-t-2 border-[var(--footer-primary)] border-opacity-10 pt-8"
          >
            <p class="text-xs leading-5 text-[var(--footer-primary)]">
              <slot name="footnote"></slot>
            </p>
          </div>
        </div>
      </footer>`}if(this.variant==="secondary")return h`<footer class="bg-[var(--footer-bg)] py-8">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center justify-between">
            <div class="mb-6 w-1/2 md:mb-0 md:w-1/3">
              <slot name="logo"></slot>
            </div>
            <div class="w-full md:w-auto">
              ${(r=this.menu)==null?void 0:r.map(s=>h` <div>
                    <h3
                      class="text-sm font-semibold leading-6 text-[var(--footer-menu-color)] "
                    >
                      ${s.name}
                    </h3>
                    <ul
                      role="list"
                      class="flex flex-wrap items-center justify-center space-x-6 md:justify-end"
                    >
                      ${s.links.map(a=>h`
                          <li class="">
                            <a
                              href="${a.href}"
                              class="text-sm leading-6 text-[var(--footer-menu-color)]  hover:text-[var(--footer-primary)] hover:underline"
                              >${a.name}</a
                            >
                          </li>
                        `)}
                    </ul>
                  </div>`)}
            </div>
          </div>
          <div class="mt-8 border-t pt-4 text-[var(--footer-primary)]">
            <p class="text-[var(--footer-primary)]0 text-center text-xs">
              <slot name="footnote"></slot>
            </p>
          </div>
        </div>
      </footer>`}render(){return h` ${K(this.skew)} ${this.renderFooterVariant()}`}}customElements.define("ds-tw-footer",J);class Q extends z{static get styles(){return[D,N`
        :host {
          --skew-bg: var(--menu-bg);
        }
      `]}static get properties(){return{links:{type:Array},logoLink:{type:String},skew:{type:String}}}constructor(){super(),this.opened=!1,this.links=[{name:"Add",href:"#"},{name:"Links",href:"#"},{name:"Array",href:"#"}],this.logoLink="/",this.skew="none"}onMenuButtonClick(){this.shadowRoot.querySelector("div[role=dialog]").classList.toggle("hidden")}onMobileMenuLinkClick(){this.shadowRoot.querySelector("div[role=dialog]").classList.toggle("hidden")}render(){var r,s,a;const t={hidden:((r=this.links)==null?void 0:r.length)==0};return h`
      <nav
        class="relative z-50 mb-[var(--menu-margin-bottom-mobile)] flex items-center justify-between bg-[var(--menu-bg)] p-6 md:mb-[var(--menu-margin-bottom)]"
        aria-label="Global"
      >
        <div class="mr-6 flex lg:flex-1">
          <a href="${this.logoLink}" class="-m-1.5 p-1.5">
            <slot name="logo"></slot>
          </a>
        </div>
        <!-- Menu toggle -->
        <div class="${E(t)} flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[var(--menu-primary)]"
            @click=${this.onMenuButtonClick}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          ${(s=this.links)==null?void 0:s.map(o=>h`<a
              href=${o.href}
              class="text-sm font-semibold leading-6 text-[var(--menu-primary)] transition-all duration-300 hover:text-gray-500"
            >
              ${o.name}
            </a>`)}
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <slot name="login"></slot>
        </div>
      </nav>
      ${X(this.skew)}
      <!-- Mobile menu, show/hide based on menu open state. -->
      <div
        class="${this.opened?"open":""} hidden"
        role="dialog"
        aria-modal="true"
      >
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="inset-0 z-50"></div>
        <div
          class="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="${this.logoLink}" class="-m-1.5 p-1.5">
              <slot name="logoMobile"></slot>
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click=${this.onMenuButtonClick}
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                ${(a=this.links)==null?void 0:a.map(o=>h`
                    <a
                      href=${o.href}
                      class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-300 hover:bg-gray-50"
                      @click="${()=>this.onMobileMenuLinkClick(o.href)}"
                    >
                      ${o.name}
                    </a>
                  `)}
              </div>
              <div class="py-6">
                <slot name="login-mobile"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("ds-tw-menu",Q);class Y extends z{static get styles(){return N`
      :host {
        display: none;
        justify-content: center;
        width: 100%;
        /*visibility: hidden;*/
        position: fixed;
        z-index: var(--lt-z-index, 2);
        bottom: var(--lt-bottom, 40px);
      }

      :host(.show) {
        display: flex;
        /*visibility: visible;*/
        -webkit-animation:
          fadein 0.5s,
          fadeout 0.5s 2.5s;
        animation:
          fadein 0.5s,
          fadeout 0.5s 2.5s;
      }

      div {
        min-width: 100px;
        background-color: var(--lt-background-color, #292929);
        color: var(--lt-color, #dddddd);
        text-align: center;
        border-radius: var(--lt-border-radius, 2px);
        padding: var(--lt-padding, 16px);
        border: var(--lt-border, none);
        font-size: var(--lt-font-size, 1em);
        font-family: var(--lt-font-family, sans-serif);
      }

      @-webkit-keyframes fadein {
        from {
          bottom: 0;
          opacity: 0;
        }
        to {
          bottom: var(--lt-bottom, 40px);
          opacity: 1;
        }
      }

      @keyframes fadein {
        from {
          bottom: 0;
          opacity: 0;
        }
        to {
          bottom: var(--lt-bottom, 40px);
          opacity: 1;
        }
      }

      @-webkit-keyframes fadeout {
        from {
          bottom: var(--lt-bottom, 40px);
          opacity: 1;
        }
        to {
          bottom: 0;
          opacity: 0;
        }
      }

      @keyframes fadeout {
        from {
          bottom: var(--lt-bottom, 40px);
          opacity: 1;
        }
        to {
          bottom: 0;
          opacity: 0;
        }
      }
    `}static get properties(){return{_toastText:{type:String}}}constructor(){super(),this._toastText=""}connectedCallback(){super.connectedCallback(),window.addEventListener("ds-event",t=>{this.handleEvent(t)})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("ds-event",this.handleEvent)}render(){return h` <div role="alert">${this._toastText}</div> `}firstUpdated(){this.style.setProperty("aria-live","assertive"),this.style.setProperty("aria-atomic","true"),this.style.setProperty("aria-relevant","all")}handleEvent(t){t.detail.eventName==="ds-toast"&&this.show(t.detail.message)}show(t=""){this.className==="show"||(this._toastText=t,this.className="show",setTimeout(()=>{this.className=this.className.replace("show","")},3e3))}}customElements.define("ds-tw-toast",Y);function Z(m){let t,r,s,a,o='<img src="images/logo.png" width="125" alt="LC Photography"/><span class="white"></span>',p,l,f,c,k,S,u,j="© 2024 LC Photography.",b;const C=m[3].default,n=q(C,m,m[2],null);return{c(){t=g("ds-tw-toast"),r=L(),s=g("ds-tw-menu"),a=g("span"),a.innerHTML=o,p=L(),l=g("main"),n&&n.c(),f=L(),c=g("ds-tw-footer"),k=g("span"),S=L(),u=g("span"),u.textContent=j,this.h()},l(e){t=v(e,"DS-TW-TOAST",{}),x(t).forEach(d),r=$(e),s=v(e,"DS-TW-MENU",{logoLink:!0,links:!0});var i=x(s);a=v(i,"SPAN",{slot:!0,"data-svelte-h":!0}),A(a)!=="svelte-rsjq19"&&(a.innerHTML=o),i.forEach(d),p=$(e),l=v(e,"MAIN",{});var P=x(l);n&&n.l(P),P.forEach(d),f=$(e),c=v(e,"DS-TW-FOOTER",{menu:!0,horizontal:!0,variant:!0});var _=x(c);k=v(_,"SPAN",{slot:!0}),x(k).forEach(d),S=$(_),u=v(_,"SPAN",{slot:!0,"data-svelte-h":!0}),A(u)!=="svelte-1u3169m"&&(u.textContent=j),_.forEach(d),this.h()},h(){T(a,"slot","logo"),w(s,"logoLink","/"),w(s,"links",m[0]),T(k,"slot","header"),T(u,"slot","footnote"),w(c,"menu",m[1]),w(c,"horizontal",""),w(c,"variant","secondary")},m(e,i){y(e,t,i),y(e,r,i),y(e,s,i),M(s,a),y(e,p,i),y(e,l,i),n&&n.m(l,null),y(e,f,i),y(e,c,i),M(c,k),M(c,S),M(c,u),b=!0},p(e,[i]){n&&n.p&&(!b||i&4)&&F(n,C,e,e[2],b?O(C,e[2],i,null):H(e[2]),null)},i(e){b||(I(n,e),b=!0)},o(e){U(n,e),b=!1},d(e){e&&(d(t),d(r),d(s),d(p),d(l),d(f),d(c)),n&&n.d(e)}}}let B="G-SD68R082VX";function ee(m,t,r){let{$$slots:s={},$$scope:a}=t;R(async()=>{window.dataLayer=window.dataLayer||[];function l(){dataLayer.push(arguments)}l("js",new Date),l("config",B);var f=document.createElement("script");f.src=`https://www.googletagmanager.com/gtm.js?id=${B}`,document.head.append(f)});let o=[{name:"Home",href:"/"},{name:"Packages",href:"/pricing"},{name:"Contact",href:"/contact"}],p=[{name:"",links:[...o,{name:"Kettering Wedding Photography",href:"/kettering-wedding-photography"},{name:"Corby Wedding Photography",href:"/corby-wedding-photography"},{name:"Northampton Wedding Photography",href:"/northampton-wedding-photography"}]}];return m.$$set=l=>{"$$scope"in l&&r(2,a=l.$$scope)},[o,p,a,s]}class oe extends G{constructor(t){super(),V(this,t,ee,Z,W,{})}}export{oe as component};
