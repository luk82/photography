import{s as W,d as D,u as q,g as F,e as H}from"../chunks/scheduler.Bmg8oFKD.js";import{S as O,i as R,e as u,s as L,c as v,a as k,d as l,f as $,l as A,m as T,n as x,g,h as M,r as G,p as U}from"../chunks/index.4GapGig5.js";import{s as E,i as N,T as B,x as c,e as z,r as V,b as I}from"../chunks/class-map.c_00f5Aq.js";class K extends E{static get styles(){return[N`
        :host {
          --skew-bg: var(--footer-bg);
        }
        ::slotted(slot='social-media' > a) {
          color: red;
        }
      `,B]}static get properties(){return{companyName:{type:String},logoSrc:{type:String},menu:{type:Array},horizontal:{type:Boolean},skew:{type:String},variant:{type:String}}}constructor(){super(),this.logoSrc="",this.companyName="Enter Conpany Name",this.horizontal=!1,this.variant="primary",this.skew="none",this.menu=[{name:"Menu 1",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]},{name:"Menu 2",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]},{name:"Menu 3",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]},{name:"Menu 4",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]},{name:"Menu 5",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]}]}renderFooterVariant(){var t,r;if(this.variant==="primary"){console.log(this.menu);const s={"lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1":!this.horizontal,"grid-cols-1 pr-4":this.horizontal},o={"flex space-x-6 space-y-0":this.horizontal,"space-y-6":!this.horizontal};return c` <footer
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
              <div class="${z(s)} grid gap-8">
                ${(t=this.menu)==null?void 0:t.map(a=>c` <div>
                      <h3
                        class="text-sm font-semibold leading-6 text-[var(--footer-menu-color)]"
                      >
                        ${a.name}
                      </h3>
                      <ul role="list" class="${z(o)} mt-6">
                        ${a.links.map(h=>c`
                            <li>
                              <a
                                href="${h.href}"
                                class="text-sm leading-6 text-[var(--footer-menu-color)] hover:text-[var(--footer-primary)] hover:underline"
                                >${h.name}</a
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
      </footer>`}if(this.variant==="secondary")return c`<footer class="bg-[var(--footer-bg)] py-8">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center justify-between">
            <div class="mb-6 w-1/2 md:mb-0 md:w-1/3">
              <slot name="logo"></slot>
            </div>
            <div class="w-full md:w-auto">
              ${(r=this.menu)==null?void 0:r.map(s=>c` <div>
                    <h3
                      class="text-sm font-semibold leading-6 text-[var(--footer-menu-color)] "
                    >
                      ${s.name}
                    </h3>
                    <ul
                      role="list"
                      class="flex flex-wrap items-center justify-center space-x-6 md:justify-end"
                    >
                      ${s.links.map(o=>c`
                          <li class="">
                            <a
                              href="${o.href}"
                              class="text-sm leading-6 text-[var(--footer-menu-color)]  hover:text-[var(--footer-primary)] hover:underline"
                              >${o.name}</a
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
      </footer>`}render(){return c` ${V(this.skew)} ${this.renderFooterVariant()}`}}customElements.define("ds-tw-footer",K);class J extends E{static get styles(){return[B,N`
        :host {
          --skew-bg: var(--menu-bg);
        }
      `]}static get properties(){return{links:{type:Array},logoLink:{type:String},skew:{type:String}}}constructor(){super(),this.opened=!1,this.links=[{name:"Add",href:"#"},{name:"Links",href:"#"},{name:"Array",href:"#"}],this.logoLink="/",this.skew="none"}onMenuButtonClick(){this.shadowRoot.querySelector("div[role=dialog]").classList.toggle("hidden")}onMobileMenuLinkClick(){this.shadowRoot.querySelector("div[role=dialog]").classList.toggle("hidden")}render(){var r,s,o;const t={hidden:((r=this.links)==null?void 0:r.length)==0};return c`
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
        <div class="${z(t)} flex lg:hidden">
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
          ${(s=this.links)==null?void 0:s.map(a=>c`<a
              href=${a.href}
              class="text-sm font-semibold leading-6 text-[var(--menu-primary)] transition-all duration-300 hover:text-gray-500"
            >
              ${a.name}
            </a>`)}
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <slot name="login"></slot>
        </div>
      </nav>
      ${I(this.skew)}
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
                ${(o=this.links)==null?void 0:o.map(a=>c`
                    <a
                      href=${a.href}
                      class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-300 hover:bg-gray-50"
                      @click="${()=>this.onMobileMenuLinkClick(a.href)}"
                    >
                      ${a.name}
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
    `}}customElements.define("ds-tw-menu",J);class Q extends E{static get styles(){return N`
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
    `}static get properties(){return{_toastText:{type:String}}}constructor(){super(),this._toastText=""}connectedCallback(){super.connectedCallback(),window.addEventListener("ds-event",t=>{this.handleEvent(t)})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("ds-event",this.handleEvent)}render(){return c` <div role="alert">${this._toastText}</div> `}firstUpdated(){this.style.setProperty("aria-live","assertive"),this.style.setProperty("aria-atomic","true"),this.style.setProperty("aria-relevant","all")}handleEvent(t){t.detail.eventName==="ds-toast"&&this.show(t.detail.message)}show(t=""){this.className==="show"||(this._toastText=t,this.className="show",setTimeout(()=>{this.className=this.className.replace("show","")},3e3))}}customElements.define("ds-tw-toast",Q);function X(d){let t,r,s,o,a='<img src="images/logo.png" width="125" alt="LC Photography"/><span class="white"></span>',h,f,w,m,b,S,p,P="© 2024 LC Photography.",y;const C=d[3].default,n=D(C,d,d[2],null);return{c(){t=u("ds-tw-toast"),r=L(),s=u("ds-tw-menu"),o=u("span"),o.innerHTML=a,h=L(),f=u("main"),n&&n.c(),w=L(),m=u("ds-tw-footer"),b=u("span"),S=L(),p=u("span"),p.textContent=P,this.h()},l(e){t=v(e,"DS-TW-TOAST",{}),k(t).forEach(l),r=$(e),s=v(e,"DS-TW-MENU",{logoLink:!0,links:!0});var i=k(s);o=v(i,"SPAN",{slot:!0,"data-svelte-h":!0}),A(o)!=="svelte-rsjq19"&&(o.innerHTML=a),i.forEach(l),h=$(e),f=v(e,"MAIN",{});var j=k(f);n&&n.l(j),j.forEach(l),w=$(e),m=v(e,"DS-TW-FOOTER",{menu:!0,horizontal:!0,variant:!0});var _=k(m);b=v(_,"SPAN",{slot:!0}),k(b).forEach(l),S=$(_),p=v(_,"SPAN",{slot:!0,"data-svelte-h":!0}),A(p)!=="svelte-1u3169m"&&(p.textContent=P),_.forEach(l),this.h()},h(){T(o,"slot","logo"),x(s,"logoLink","/"),x(s,"links",d[0]),T(b,"slot","header"),T(p,"slot","footnote"),x(m,"menu",d[1]),x(m,"horizontal",""),x(m,"variant","secondary")},m(e,i){g(e,t,i),g(e,r,i),g(e,s,i),M(s,o),g(e,h,i),g(e,f,i),n&&n.m(f,null),g(e,w,i),g(e,m,i),M(m,b),M(m,S),M(m,p),y=!0},p(e,[i]){n&&n.p&&(!y||i&4)&&q(n,C,e,e[2],y?H(C,e[2],i,null):F(e[2]),null)},i(e){y||(G(n,e),y=!0)},o(e){U(n,e),y=!1},d(e){e&&(l(t),l(r),l(s),l(h),l(f),l(w),l(m)),n&&n.d(e)}}}function Y(d,t,r){let{$$slots:s={},$$scope:o}=t,a=[{name:"Home",href:"/"},{name:"Packages",href:"/pricing"},{name:"Contact",href:"/contact"}],h=[{name:"",links:[...a,{name:"Kettering Wedding Photography",href:"/kettering-wedding-photography"},{name:"Corby Wedding Photography",href:"/corby-wedding-photography"},{name:"Northampton Wedding Photography",href:"/northampton-wedding-photography"}]}];return d.$$set=f=>{"$$scope"in f&&r(2,o=f.$$scope)},[a,h,o,s]}class se extends O{constructor(t){super(),R(this,t,Y,X,W,{})}}export{se as component};
