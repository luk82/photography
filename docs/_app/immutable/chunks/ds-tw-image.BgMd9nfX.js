var d=Object.defineProperty;var c=(s,t,a)=>t in s?d(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a;var r=(s,t,a)=>c(s,typeof t!="symbol"?t+"":t,a);import{a as i,s as l,T as n,x as e,i as h}from"./class-map.c_00f5Aq.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=s=>s??i;class g extends l{constructor(){super();r(this,"svgIcons",{warning:e` <svg
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
    </svg>`});this.variant="",this.showFooter=!1,this.text="Open",this.showText=!1,this.submitButtonLabel="Submit",this.cancelButtonLabel="Cancel",this.icon="warning",this.handleEvent=this.handleEvent.bind(this),this.hideButton=!1,window.addEventListener("ds-event",this.handleEvent)}static get styles(){return[n]}static get properties(){return{variant:{type:String},showFooter:{type:Boolean},text:{type:String},showText:{type:Boolean},hideButton:{type:Boolean},submitButtonLabel:{type:String},cancelButtonLabel:{type:String},icon:{type:String}}}toggleModalWindow(){this.shadowRoot.querySelector("div[role=dialog]").classList.toggle("hidden")}handleEvent(a){console.log("event",a),a.detail.eventName==="toggle-modal"&&this.toggleModalWindow()}handleSubmit(){this.toggleModalWindow()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("ds-event",this.handleEvent)}modalTriggerButton(){return this.showText?e` <span class="cursor-pointer" @click=${this.toggleModalWindow}>
          ${this.text}
        </span>`:e` <button
          class="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          @click=${this.toggleModalWindow}
        >
          ${this.text}
        </button>`}renderFooter(){return this.showFooter?e` <div
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
        </div>`:i}render(){return this.variant==="primary"?e` <div class="contents">
          ${this.hideButton?i:this.modalTriggerButton()}

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
        </div>`:e`
          ${this.hideButton?i:this.modalTriggerButton()}
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
        `}}customElements.define("ds-tw-modal",g);class u extends l{static get styles(){return[n,h`
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
      `]}static get properties(){return{image:{type:String},alt:{type:String},sizes:{type:String},imageset:{type:String},rounded:{type:Boolean},variant:{type:String},fullSrc:{type:String},showModal:{type:Boolean},enableModal:{type:Boolean}}}constructor(){super(),this.image="",this.alt="",this.imageset="",this.sizes="",this.rounded=!1,this.variant="primary",this.fullSrc="",this.showModal=!1,this.enableModal=!1}addClasses(){const t=[];return this.variant==="primary"&&t.push("mb-[var(--margin-bottom)]"),t.join(" ")}renderSrcSet(){return e`"${this.imageset}" sizes="${this.sizes}`||""}render(){return e`
      ${this.image&&!this.enableModal?e`
            <div class="${this.addClasses()} flex justify-center">
              <img
                class="${this.rounded?"rounded-lg":i} h-auto max-w-full object-cover"
                src="${this.image}"
                alt="${this.alt}"
                @click="${this.showFullSize}"
                srcset=${o(this.imageset)}
                sizes=${o(this.sizes)}
              />
            </div>
          `:i}
      ${this.enableModal?e` <ds-tw-modal variant="primary" showText>
              <span slot="title">Energy certificate</span>
              <img
                class="${this.rounded?"rounded-lg":i} h-auto max-w-full object-cover"
                src="${this.image}"
                alt="${this.alt}"
                @click="${this.hideModal}"
                srcset=${o(this.imageset)}
                sizes=${o(this.sizes)}
              />
            </ds-tw-modal>

            </div>`:i}
    `}showFullSize(){this.showModal=!0}hideModal(){this.showModal=!1}}customElements.define("ds-tw-image",u);
