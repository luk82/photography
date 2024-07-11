import{s as E,d as N,u as j,g as P,e as V}from"../chunks/scheduler.Bmg8oFKD.js";import{S as q,i as D,e as p,s as M,c as g,a as b,y as B,d as c,f as $,o as C,z as y,g as k,h as w,n as F,l as Z}from"../chunks/index.ClnunyA3.js";import{s as H,i as A,T,x as f,r as G,c as O,a as R}from"../chunks/class-map.-4MMyoZd.js";class W extends H{static get styles(){return[A`
        :host {
          --skew-bg: var(--footer-bg);
        }
        .t {
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
      `,T]}static get properties(){return{companyName:{type:String},logoSrc:{type:String},menu:{type:Array},horizontal:{type:Boolean},skew:{type:String}}}constructor(){super(),this.logoSrc="",this.companyName="Enter Conpany Name",this.horizontal=!1,this.skew="none",this.menu=[{name:"Menu 1",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]},{name:"Menu 2",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]},{name:"Menu 3",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]},{name:"Menu 4",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]}]}render(){var d;const t=this.horizontal?"sm:float-left pr-4":"space-y-6 mt-6",a=t?"grid-cols-4":"grid-cols-1";return f` ${G(this.skew)}
      <footer class="bg-[var(--footer-bg)]" aria-labelledby="footer-heading">
        <h2 id="footer-heading" class="t">Footer</h2>
        <div class="aur container mx-auto px-6 pb-8 pt-24 md:px-0">
          <div class="xs:grid-cols-2 grid gap-8 md:grid-cols-6">
            <div class="col-span-2 space-y-6">
              <slot name="logo"></slot>
              <p class="text-sm leading-6 text-gray-300">
                <slot name="header"></slot>
              </p>
              <div class="flex space-x-6">
                <a
                  href="#"
                  class="text-[var(--footer-social-icon-bg)] text-gray-500 hover:text-gray-300"
                  ><span class="t">Facebook</span
                  ><svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    class="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    ></path></svg></a
                ><a
                  href="#"
                  class="text-[var(--footer-social-icon-bg)] text-gray-500 hover:text-gray-300"
                  ><span class="t">Instagram</span
                  ><svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    class="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    ></path></svg></a
                ><a
                  href="#"
                  class="text-[var(--footer-social-icon-bg)] text-gray-500 hover:text-gray-300"
                  ><span class="t">X</span
                  ><svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    class="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"
                    ></path></svg></a
                ><a
                  href="#"
                  class="text-[var(--footer-social-icon-bg)] text-gray-500 hover:text-gray-300"
                  ><span class="t">GitHub</span
                  ><svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    class="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clip-rule="evenodd"
                    ></path></svg></a
                ><a
                  href="#"
                  class="text-[var(--footer-social-icon-bg)] text-gray-500 hover:text-gray-300"
                  ><span class="t">YouTube</span
                  ><svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    class="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="grid-cols col-span-4 mt-16 grid gap-8">
              <div class="${!a} grid">
                ${(d=this.menu)==null?void 0:d.map(s=>f` <div>
                      <h3
                        class="text-sm font-semibold leading-6 text-[var(--footer-menu-color)] text-white"
                      >
                        ${s.name}
                      </h3>
                      <ul role="list" class="${t}">
                        ${s.links.map(i=>f`
                            <li class="${t}">
                              <a
                                href="${i.href}"
                                class="text-sm leading-6 text-[var(--footer-menu-color)] text-gray-300 hover:text-gray-50 hover:underline"
                                >${i.name}</a
                              >
                            </li>
                          `)}
                      </ul>
                    </div>`)}
              </div>
            </div>
          </div>
          <div
            class="la bt-1 mt-24 border-t-2 border-white border-opacity-10 pt-8"
          >
            <p class="text-xs leading-5 text-gray-400">
              <slot name="footnote"></slot>
            </p>
          </div>
        </div>
      </footer>`}}customElements.define("ds-tw-footer",W);class I extends H{static get styles(){return[T,A`
        :host {
          --skew-bg: var(--menu-bg);
        }
      `]}static get properties(){return{links:{type:Array},logoLink:{type:String},skew:{type:String}}}constructor(){super(),this.opened=!1,this.links=[{name:"Add",href:"#"},{name:"Links",href:"#"},{name:"Array",href:"#"}],this.logoLink="/",this.skew="none"}onMenuButtonClick(){this.shadowRoot.querySelector("div[role=dialog]").classList.toggle("hidden")}onMobileMenuLinkClick(){this.shadowRoot.querySelector("div[role=dialog]").classList.toggle("hidden")}render(){var a,d;const t={hidden:this.links.length===0};return f`
      <nav
        class="relative z-50 mb-[var(--menu-margin-bottom-mobile)] flex items-center justify-between bg-[var(--menu-bg)] p-6 md:mb-[var(--menu-margin-bottom)]"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="${this.logoLink}" class="-m-1.5 p-1.5">
            <slot name="logo"></slot>
          </a>
        </div>
        <!-- Menu toggle -->
        <div class="${O(t)} flex lg:hidden">
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
          ${(a=this.links)==null?void 0:a.map(s=>f`<a
              href=${s.href}
              class="text-sm font-semibold leading-6 text-[var(--menu-primary)] transition-all duration-300 hover:text-gray-500"
            >
              ${s.name}
            </a>`)}
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <slot name="login"></slot>
        </div>
      </nav>
      ${R(this.skew)}
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
                ${(d=this.links)==null?void 0:d.map(s=>f`
                    <a
                      href=${s.href}
                      class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-300 hover:bg-gray-50"
                      @click="${()=>this.onMobileMenuLinkClick(s.href)}"
                    >
                      ${s.name}
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
    `}}customElements.define("ds-tw-menu",I);function U(l){let t,a,d='<img src="images/logo.svg" width="75" alt="LC Photography"/><span class="white"></span>',s,i,m,n,v,L,h,S="© 2024 LC Photography.",u;const _=l[3].default,o=N(_,l,l[2],null);return{c(){t=p("ds-tw-menu"),a=p("span"),a.innerHTML=d,s=M(),i=p("main"),o&&o.c(),m=M(),n=p("ds-tw-footer"),v=p("span"),L=M(),h=p("span"),h.textContent=S,this.h()},l(e){t=g(e,"DS-TW-MENU",{logoLink:!0,links:!0});var r=b(t);a=g(r,"SPAN",{slot:!0,"data-svelte-h":!0}),B(a)!=="svelte-1aau7q0"&&(a.innerHTML=d),r.forEach(c),s=$(e),i=g(e,"MAIN",{});var z=b(i);o&&o.l(z),z.forEach(c),m=$(e),n=g(e,"DS-TW-FOOTER",{menu:!0,horizontal:!0,variant:!0});var x=b(n);v=g(x,"SPAN",{slot:!0}),b(v).forEach(c),L=$(x),h=g(x,"SPAN",{slot:!0,"data-svelte-h":!0}),B(h)!=="svelte-1u3169m"&&(h.textContent=S),x.forEach(c),this.h()},h(){C(a,"slot","logo"),y(t,"logoLink","/"),y(t,"links",l[0]),C(v,"slot","header"),C(h,"slot","footnote"),y(n,"menu",l[1]),y(n,"horizontal",""),y(n,"variant","secondary")},m(e,r){k(e,t,r),w(t,a),k(e,s,r),k(e,i,r),o&&o.m(i,null),k(e,m,r),k(e,n,r),w(n,v),w(n,L),w(n,h),u=!0},p(e,[r]){o&&o.p&&(!u||r&4)&&j(o,_,e,e[2],u?V(_,e[2],r,null):P(e[2]),null)},i(e){u||(F(o,e),u=!0)},o(e){Z(o,e),u=!1},d(e){e&&(c(t),c(s),c(i),c(m),c(n)),o&&o.d(e)}}}function X(l,t,a){let{$$slots:d={},$$scope:s}=t,i=[{name:"Home",href:"/"},{name:"Pricing",href:"/pricing"},{name:"Contact",href:"/contact"}],m=[{name:"",links:i}];return l.$$set=n=>{"$$scope"in n&&a(2,s=n.$$scope)},[i,m,s,d]}class Q extends q{constructor(t){super(),D(this,t,X,U,E,{})}}export{Q as component};
