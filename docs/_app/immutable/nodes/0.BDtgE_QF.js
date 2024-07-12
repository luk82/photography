import{s as N,d as P,u as q,g as D,e as F}from"../chunks/scheduler.Bmg8oFKD.js";import{S as H,i as O,e as p,s as $,c as g,a as b,y as E,d as h,f as M,o as S,z as k,g as y,h as w,n as R,l as W}from"../chunks/index.ClnunyA3.js";import{s as T,i as A,T as B,x as m,e as C,r as G,a as V}from"../chunks/class-map.4yN0Eo_Y.js";class I extends T{static get styles(){return[A`
        :host {
          --skew-bg: var(--footer-bg);
        }
        ::slotted(slot='social-media' > a) {
          color: red;
        }
      `,B]}static get properties(){return{companyName:{type:String},logoSrc:{type:String},menu:{type:Array},horizontal:{type:Boolean},skew:{type:String},variant:{type:String}}}constructor(){super(),this.logoSrc="",this.companyName="Enter Conpany Name",this.horizontal=!1,this.variant="primary",this.skew="none",this.menu=[{name:"Menu 1",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]},{name:"Menu 2",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]},{name:"Menu 3",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]},{name:"Menu 4",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]},{name:"Menu 5",links:[{name:"Link 1",href:"#"},{name:"Link 2",href:"#"},{name:"Link 3",href:"#"},{name:"Link 4",href:"#"}]}]}renderFooterVariant(){var s,n;if(this.variant==="primary"){console.log(this.menu);const r={"lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1":!this.horizontal,"grid-cols-1 pr-4":this.horizontal},a={"flex space-x-6 space-y-0":this.horizontal,"space-y-6":!this.horizontal};return m` <footer
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
              <div class="${C(r)} grid gap-8">
                ${(s=this.menu)==null?void 0:s.map(t=>m` <div>
                      <h3
                        class="text-sm font-semibold leading-6 text-[var(--footer-menu-color)]"
                      >
                        ${t.name}
                      </h3>
                      <ul role="list" class="${C(a)} mt-6">
                        ${t.links.map(c=>m`
                            <li>
                              <a
                                href="${c.href}"
                                class="text-sm leading-6 text-[var(--footer-menu-color)] hover:text-[var(--footer-primary)] hover:underline"
                                >${c.name}</a
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
      </footer>`}if(this.variant==="secondary")return m`<footer class="bg-[var(--footer-bg)] py-8">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap items-center justify-between">
            <div class="mb-6 w-1/2 md:mb-0 md:w-1/3">
              <slot name="logo"></slot>
            </div>
            <div class="w-full md:w-auto">
              ${(n=this.menu)==null?void 0:n.map(r=>m` <div>
                    <h3
                      class="text-sm font-semibold leading-6 text-[var(--footer-menu-color)] "
                    >
                      ${r.name}
                    </h3>
                    <ul
                      role="list"
                      class="flex flex-wrap items-center justify-center space-x-6 md:justify-end"
                    >
                      ${r.links.map(a=>m`
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
      </footer>`}render(){return m` ${G(this.skew)} ${this.renderFooterVariant()}`}}customElements.define("ds-tw-footer",I);class U extends T{static get styles(){return[B,A`
        :host {
          --skew-bg: var(--menu-bg);
        }
      `]}static get properties(){return{links:{type:Array},logoLink:{type:String},skew:{type:String}}}constructor(){super(),this.opened=!1,this.links=[{name:"Add",href:"#"},{name:"Links",href:"#"},{name:"Array",href:"#"}],this.logoLink="/",this.skew="none"}onMenuButtonClick(){this.shadowRoot.querySelector("div[role=dialog]").classList.toggle("hidden")}onMobileMenuLinkClick(){this.shadowRoot.querySelector("div[role=dialog]").classList.toggle("hidden")}render(){var n,r,a;const s={hidden:((n=this.links)==null?void 0:n.length)==0};return m`
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
        <div class="${C(s)} flex lg:hidden">
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
          ${(r=this.links)==null?void 0:r.map(t=>m`<a
              href=${t.href}
              class="text-sm font-semibold leading-6 text-[var(--menu-primary)] transition-all duration-300 hover:text-gray-500"
            >
              ${t.name}
            </a>`)}
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <slot name="login"></slot>
        </div>
      </nav>
      ${V(this.skew)}
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
                ${(a=this.links)==null?void 0:a.map(t=>m`
                    <a
                      href=${t.href}
                      class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-300 hover:bg-gray-50"
                      @click="${()=>this.onMobileMenuLinkClick(t.href)}"
                    >
                      ${t.name}
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
    `}}customElements.define("ds-tw-menu",U);function J(d){let s,n,r='<img src="images/logo.svg" width="75" alt="LC Photography"/><span class="white"></span>',a,t,c,o,v,L,u,z="© 2024 LC Photography.",f;const _=d[3].default,i=P(_,d,d[2],null);return{c(){s=p("ds-tw-menu"),n=p("span"),n.innerHTML=r,a=$(),t=p("main"),i&&i.c(),c=$(),o=p("ds-tw-footer"),v=p("span"),L=$(),u=p("span"),u.textContent=z,this.h()},l(e){s=g(e,"DS-TW-MENU",{logoLink:!0,links:!0});var l=b(s);n=g(l,"SPAN",{slot:!0,"data-svelte-h":!0}),E(n)!=="svelte-1aau7q0"&&(n.innerHTML=r),l.forEach(h),a=M(e),t=g(e,"MAIN",{});var j=b(t);i&&i.l(j),j.forEach(h),c=M(e),o=g(e,"DS-TW-FOOTER",{menu:!0,horizontal:!0,variant:!0});var x=b(o);v=g(x,"SPAN",{slot:!0}),b(v).forEach(h),L=M(x),u=g(x,"SPAN",{slot:!0,"data-svelte-h":!0}),E(u)!=="svelte-1u3169m"&&(u.textContent=z),x.forEach(h),this.h()},h(){S(n,"slot","logo"),k(s,"logoLink","/"),k(s,"links",d[0]),S(v,"slot","header"),S(u,"slot","footnote"),k(o,"menu",d[1]),k(o,"horizontal",""),k(o,"variant","secondary")},m(e,l){y(e,s,l),w(s,n),y(e,a,l),y(e,t,l),i&&i.m(t,null),y(e,c,l),y(e,o,l),w(o,v),w(o,L),w(o,u),f=!0},p(e,[l]){i&&i.p&&(!f||l&4)&&q(i,_,e,e[2],f?F(_,e[2],l,null):D(e[2]),null)},i(e){f||(R(i,e),f=!0)},o(e){W(i,e),f=!1},d(e){e&&(h(s),h(a),h(t),h(c),h(o)),i&&i.d(e)}}}function K(d,s,n){let{$$slots:r={},$$scope:a}=s,t=[{name:"Home",href:"/"},{name:"Pricing",href:"/pricing"},{name:"Contact",href:"/contact"}],c=[{name:"",links:t}];return d.$$set=o=>{"$$scope"in o&&n(2,a=o.$$scope)},[t,c,a,r]}class Z extends H{constructor(s){super(),O(this,s,K,J,N,{})}}export{Z as component};
