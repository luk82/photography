var S=Object.defineProperty;var $=(s,e,a)=>e in s?S(s,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[e]=a;var f=(s,e,a)=>$(s,typeof e!="symbol"?e+"":e,a);import{s as L,n as u}from"../chunks/scheduler.Bmg8oFKD.js";import{S as T,i as z,e as p,s as x,A as B,c as b,d,f as k,a as j,y as _,o as M,z as c,h as E,g as m}from"../chunks/index.ClnunyA3.js";import"../chunks/ds-tw-band.CmcJkru6.js";import{s as w,T as y,x as t,d as n,i as F}from"../chunks/class-map.4yN0Eo_Y.js";import"../chunks/ds-tw-feature.CeDHFY95.js";const W=!0,U=Object.freeze(Object.defineProperty({__proto__:null,prerender:W},Symbol.toStringTag,{value:"Module"}));class C extends w{static get styles(){return[y]}static get properties(){return{icon:{type:String},theme:{type:String}}}constructor(){super(),this.theme=localStorage.getItem("ds-theme")?localStorage.getItem("ds-theme"):"light"}firstUpdated(){this.initTheme()}toggleDarkMode(){this.theme==="light"?this.theme="dark":this.theme="light",window.localStorage.setItem("hasanirogersblog-theme",this.theme),this.initTheme()}initTheme(){document.documentElement.setAttribute("theme",this.theme)}render(){return t` <button
      @click=${this.toggleDarkMode}
      class="absolute left-16 top-16 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow dark:bg-black dark:text-white"
    >
      ${this.theme==="light"?t`<slot name="icon-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-8"
            >
              <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"
              />
            </svg>
          </slot>`:t` <slot name="icon-dark"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              class="w-8"
            >
              <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                class="h-16 w-16"
                d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
              />
            </svg>
          </slot>`}
    </button>`}}customElements.define("ds-tw-darkmode",C);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const g=s=>s??n;class I extends w{constructor(){super();f(this,"svgIcons",{warning:t` <svg
      class="h-6 w-6 text-red-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>`});this.variant="",this.showFooter=!1,this.text="Open",this.showText=!1,this.submitButtonLabel="Submit",this.cancelButtonLabel="Cancel",this.icon="warning",this.handleEvent=this.handleEvent.bind(this),this.hideButton=!1,window.addEventListener("ds-event",this.handleEvent)}static get styles(){return[y]}static get properties(){return{variant:{type:String},showFooter:{type:Boolean},text:{type:String},showText:{type:Boolean},hideButton:{type:Boolean},submitButtonLabel:{type:String},cancelButtonLabel:{type:String},icon:{type:String}}}toggleModalWindow(){this.shadowRoot.querySelector("div[role=dialog]").classList.toggle("hidden")}handleEvent(a){console.log("event",a),a.detail.eventName==="toggle-modal"&&this.toggleModalWindow()}handleSubmit(){this.toggleModalWindow()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("ds-event",this.handleEvent)}modalTriggerButton(){return this.showText?t` <span class="cursor-pointer" @click=${this.toggleModalWindow}>
          ${this.text}
        </span>`:t` <button
          class="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          @click=${this.toggleModalWindow}
        >
          ${this.text}
        </button>`}renderFooter(){return this.showFooter?t` <div
          class="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600"
        >
          <button
            @click=${this.toggleModalWindow}
            type="button"
            class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            I accept
          </button>
          <button
            @click=${this.toggleModalWindow}
            type="button"
            class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Decline
          </button>
        </div>`:n}render(){return this.variant==="primary"?t` <div class="contents">
          ${this.hideButton?n:this.modalTriggerButton()}

          <!-- Main modal -->
          <div
            role="dialog"
            aria-hidden="true"
            class="fixed left-0 right-0 top-4 z-50 hidden items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
          >
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            ></div>

            <div
              class="relative flex h-full min-h-full w-full items-center justify-center p-4 px-4 sm:items-center sm:p-0 md:h-auto"
            >
              <!-- Modal content -->
              <div
                class="relative max-w-2xl rounded-lg bg-white shadow dark:bg-gray-700"
              >
                <!-- Modal header -->
                <div
                  class="flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600"
                >
                  <h3
                    class="text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl"
                  >
                    <slot name="title"></slot>
                  </h3>
                  <button
                    type="button"
                    class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    @click=${this.toggleModalWindow}
                  >
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <!-- Modal body -->
                <div class="space-y-6 p-6">
                  <p
                    class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                  >
                    <slot></slot>
                  </p>
                </div>
                <!-- Modal footer -->
                ${this.renderFooter()}
              </div>
            </div>
          </div>
        </div>`:t`
          ${this.hideButton?n:this.modalTriggerButton()}
          <div
            class="z-10 hidden"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            ></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div
                class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
              >
                <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
                <div
                  class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                >
                  <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div
                        class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                      >
                        ${this.svgIcons[this.icon]}
                      </div>
                      <div
                        class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"
                      >
                        <h3
                          class="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          <slot name="title"></slot>
                        </h3>
                        <div class="mt-2">
                          <p class="text-sm text-gray-500">
                            <slot></slot>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                  >
                    <button
                      @click=${this.handleSubmit}
                      type="button"
                      class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      ${this.submitButtonLabel}
                    </button>
                    <button
                      @click=${this.toggleModalWindow}
                      type="button"
                      class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      ${this.cancelButtonLabel}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `}}customElements.define("ds-tw-modal",I);class D extends w{static get styles(){return[y,F`
        img {
          cursor: pointer;
        }
        .modal {
          display: none;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgba(0, 0, 0, 0.4);
        }
      `]}static get properties(){return{image:{type:String},alt:{type:String},sizes:{type:String},imageset:{type:String},rounded:{type:Boolean},variant:{type:String},fullSrc:{type:String},showModal:{type:Boolean},enableModal:{type:Boolean}}}constructor(){super(),this.image="",this.alt="",this.imageset="",this.sizes="",this.rounded=!1,this.variant="primary",this.fullSrc="",this.showModal=!1,this.enableModal=!1}addClasses(){const e=[];return this.variant==="primary"&&e.push("mb-[var(--margin-bottom)]"),e.join(" ")}renderSrcSet(){return t`"${this.imageset}" sizes="${this.sizes}`||""}render(){return t`
      ${this.image&&!this.enableModal?t`
            <div class="${this.addClasses()} flex justify-center">
              <img
                class="${this.rounded?"rounded-lg":n} h-auto max-w-full object-cover"
                src="${this.image}"
                alt="${this.alt}"
                @click="${this.showFullSize}"
                srcset=${g(this.imageset)}
                sizes=${g(this.sizes)}
              />
            </div>
          `:n}
      ${this.enableModal?t` <ds-tw-modal variant="primary" showText>
              <span slot="title">Energy certificate</span>
              <img
                class="${this.rounded?"rounded-lg":n} h-auto max-w-full object-cover"
                src="${this.image}"
                alt="${this.alt}"
                @click="${this.hideModal}"
                srcset=${g(this.imageset)}
                sizes=${g(this.sizes)}
              />
            </ds-tw-modal>

            </div>`:n}
    `}showFullSize(){this.showModal=!0}hideModal(){this.showModal=!1}}customElements.define("ds-tw-image",D);function A(s){let e,a,r,h,i,v=`<span slot="kicker"></span> <span slot="header"></span> <span slot="body"><p>I believe that every wedding is a unique celebration of love and commitment. That&#39;s why our
			team of skilled photographers is dedicated to capturing the beauty, emotion, and joy of your
			special day in a way that&#39;s truly yours. From the tender moments between loved ones to the
			vibrant energy of the party, we&#39;ll be there to tell your story through stunning images that
			you&#39;ll treasure for years to come.</p> <p>Our approach is simple: we listen carefully to our couples&#39; vision, then use our expertise and
			creativity to bring it to life. We&#39;re not just photographers – we&#39;re storytellers who
			understand the importance of preserving memories in a way that&#39;s both authentic and
			breathtaking. Whether your style is classic and elegant or modern and trendy, we&#39;ll work with
			you to create a visual narrative that reflects your personalities and love for each other.</p> <p>Take a look around our website to get a glimpse of what we&#39;re all about – from our latest
			wedding stories to behind-the-scenes peeks at how we work our magic. We can&#39;t wait to hear
			about your plans and start capturing the memories you&#39;ll always treasure. Let&#39;s connect and
			make some unforgettable moments together!</p></span> <span slot="col-1"><ds-tw-image image="/images/banner2.jpg"></ds-tw-image> <ds-tw-image image="/images/banner5.jpg"></ds-tw-image></span> <span slot="col-2"><ds-tw-image image="/images/banner1.jpg"></ds-tw-image> <ds-tw-image image="/images/banner4.jpg"></ds-tw-image></span>`;return{c(){e=p("meta"),a=x(),r=p("ds-tw-band"),h=x(),i=p("ds-tw-feature"),i.innerHTML=v,this.h()},l(o){const l=B("svelte-t32ptj",document.head);e=b(l,"META",{name:!0,content:!0}),l.forEach(d),a=k(o),r=b(o,"DS-TW-BAND",{"to-center":!0,height:!0,bgImage:!0}),j(r).forEach(d),h=k(o),i=b(o,"DS-TW-FEATURE",{variant:!0,image:!0,imageWidth:!0,"data-svelte-h":!0}),_(i)!=="svelte-5d921l"&&(i.innerHTML=v),this.h()},h(){document.title="Home",M(e,"name","description"),M(e,"content","Svelte demo app"),c(r,"to-center",""),c(r,"height","400"),c(r,"bgImage","/images/banner3.jpg"),c(i,"variant","secondary"),c(i,"image","/images/banner4.jpg"),c(i,"imageWidth","100")},m(o,l){E(document.head,e),m(o,a,l),m(o,r,l),m(o,h,l),m(o,i,l)},p:u,i:u,o:u,d(o){o&&(d(a),d(r),d(h),d(i)),d(e)}}}class G extends T{constructor(e){super(),z(this,e,null,A,L,{})}}export{G as component,U as universal};
