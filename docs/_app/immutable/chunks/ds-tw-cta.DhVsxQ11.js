import{s as r,T as i,i as o,x as t,e,a,r as d,b as n}from"./class-map.CUp2aMEF.js";class c extends r{static get styles(){return[i,o`
        :host {
          --skew-bg: var(--cta-bg);
        }
      `]}static get properties(){return{image:{type:String},variant:{type:String},fullWidth:{type:Boolean},skew:{type:String},showGradient:{type:Boolean},marginBottom:{type:Boolean}}}constructor(){super(),this.image="",this.variant="primary",this.fullWidth=!1,this.skew="none",this.showGradient=!1,this.marginBottom=!1}renderTemplate(){const s={"mb-[var(--margin-bottom)]":this.marginBottom};if(this.variant=="primary"){const l={"flex items-center justify-center mx-auto":!0,"max-w-[var(--container-width)]":!this.fullWidth};return t`
        <div class="${e(s)} bg-[var(--cta-bg)]">
          <div class="${e(l)} container">
            <div
              class="w-full overflow-hidden rounded-[var(--cta-border-radius)] text-gray-500"
            >
              <div class="w-full lg:flex">
                <div
                  class="block bg-[var(--cta-bg-left)] px-10 py-10 text-[var(--cta-text)] lg:w-1/2"
                >
                  <slot name="left"></slot>
                </div>
                <div
                  class="w-full bg-[var(--cta-bg-right)] px-5 py-10 text-[var(--cta-text-right)] lg:w-1/2 lg:px-10"
                >
                  <slot name="right"></slot>
                </div>
              </div>
            </div>
          </div>
        </div>
      `}if(this.variant=="secondary"){const l={"max-w-[var(--container-width)]":!this.fullWidth};return t`
        <div class="${e(s)} bg-inherit">
          <div class="${e(l)} mx-auto">
            <div
              class="relative isolate overflow-hidden rounded-[var(--cta-border-radius)] bg-[var(--cta-bg)] p-4 pt-16 dark:bg-slate-500 sm:px-16  lg:gap-x-10 lg:px-12 lg:py-12"
            >
              ${this.showGradient?t` <svg
                    viewBox="0 0 1024 1024"
                    class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,var(--cta-primary),transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                    aria-hidden="true"
                  >
                    <circle
                      cx="512"
                      cy="512"
                      r="512"
                      fill="url(#18cc2-kkkd)"
                      fill-opacity="0.5"
                    />
                    <defs>
                      <radialGradient id="18cc2-kkkd">
                        <stop stop-color="var(--cta-primary)" />
                        <stop offset="1" stop-color="var(--cta-secondary)" />
                      </radialGradient>
                    </defs>
                  </svg>`:a}
              <div class="container mx-auto lg:flex">
                <div
                  class="mx-auto text-center lg:mx-0 lg:flex-auto lg:text-left"
                >
                  <h2
                    class="text-3xl font-bold tracking-tight text-[var(--cta-text)] sm:text-4xl"
                  >
                    <slot name="title"></slot>
                  </h2>
                  <p class="mt-6 text-lg leading-8 text-[var(--cta-text)]">
                    <slot name="body"></slot>
                  </p>
                  <div
                    class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
                  >
                    <slot name="buttons"></slot>
                  </div>
                  <div class="mx-8 text-[var(--cta-text)]">
                    <slot name="left"></slot>
                  </div>
                </div>
                <div class="relative w-full">
                  <slot name="right"></slot>
                  ${this.image?t` <img
                        class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                        src="${this.image}"
                        alt="App screenshot"
                        width="1824"
                        height="1080"
                      />`:a}
                </div>
              </div>
            </div>
          </div>
        </div>
      `}if(this.variant=="sign-in-1")return t` <section class="relative overflow-hidden py-20 2xl:py-10">
        <div class="container mx-auto px-4">
          <div class="mx-auto max-w-7xl">
            <div class="-mx-4 flex flex-wrap">
              <div class="order-last w-full px-4 lg:order-first lg:w-1/2">
                <div
                  class="relative mx-auto h-full max-w-lg bg-slate-800 lg:mx-0 lg:max-w-2xl"
                >
                  <div
                    class="absolute bottom-0 left-0 flex h-full w-full items-center justify-center p-10"
                  >
                    <div class="mx-auto max-w-md">
                      <h4
                        class="font-heading mb-8 text-3xl font-bold text-[var(--cta-secondary)] sm:text-5xl lg:text-6xl"
                      >
                        <slot name="title"></slot>
                      </h4>
                      <div class="mb-20 lg:flex">
                        <div>
                          <p
                            class="text-lg font-semibold text-[var(--cta-theme)]"
                          >
                            <slot name="left"></slot>
                          </p>
                        </div>
                      </div>
                      <div class="flex items-center"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-16 w-full px-4 lg:mb-0 lg:w-1/2">
                <div
                  class="mx-auto max-w-lg lg:pb-8 lg:pt-8 2xl:mr-0 2xl:pb-24 2xl:pt-24"
                >
                  <h3
                    class="mb-4 text-5xl font-bold text-[var(--cta-theme)] sm:text-6xl"
                  >
                    <slot name="header"></slot>
                  </h3>
                  <p class="mb-12 text-lg text-gray-500">
                    <slot name="right"></slot>
                  </p>

                  <div class="-mx-2 mb-6 flex flex-wrap items-center">
                    <div class="mb-3 w-full px-2">
                      <slot name="buttons"></slot>
                    </div>
                  </div>

                  <div class="mb-6 flex items-center">
                    <div class="h-px w-full bg-gray-300"></div>
                    <span class="mx-4 text-sm font-semibold text-gray-500"
                      >Or</span
                    >
                    <div class="h-px w-full bg-gray-300"></div>
                  </div>
                  <form action="">
                    <div class="mb-6">
                      <label
                        class="mb-2 block text-sm font-semibold text-gray-900"
                        for=""
                        >E-mail address</label
                      >
                      <input
                        class="focus:outline-purple w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-500"
                        type="email"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div class="mb-7">
                      <div class="mb-2 flex items-center justify-between">
                        <label
                          class="block text-sm font-semibold text-gray-900"
                          for=""
                          >Password</label
                        >
                        <a
                          class="inline-block text-xs font-semibold text-[var(--cta-theme)] hover:text-gray-900"
                          href="#"
                          >Forgot password?</a
                        >
                      </div>
                      <div class="relative">
                        <input
                          class="focus:outline-purple w-full rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-purple-500"
                          type="password"
                          placeholder="Enter your password"
                        />
                        <button
                          class="absolute right-0 top-1/2 mr-3 inline-block -translate-y-1/2 transform transition duration-100 hover:scale-110"
                        >
                          <img src="static/icons/eye.svg" alt="" />
                        </button>
                      </div>
                    </div>
                    <div class="mb-6 flex items-center">
                      <input type="checkbox" value="" id="" />
                      <label class="ml-2 text-xs text-gray-800" for=""
                        >Accept <a href="#">Terms & Conditions</a></label
                      >
                    </div>
                    <button
                      class="group relative mb-32 block w-full overflow-hidden rounded-full bg-[var(--cta-theme)] px-5 py-3 text-center text-sm font-semibold text-orange-50"
                      type="submit"
                    >
                      <div
                        class="group-hover:scale-102 absolute right-full top-0 h-full w-full transform bg-gray-900 transition duration-500 group-hover:translate-x-full"
                      ></div>
                      <span class="relative">Login</span>
                    </button>
                    <div class="text-center">
                      <span class="text-xs font-semibold text-gray-900">
                        <span>Don’t have an account?</span>
                        <a
                          class="ml-1 inline-block text-[var(--cta-theme)] hover:text-orange-700"
                          href="#"
                          >Sign up</a
                        >
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`}render(){return t`${d(this.skew)}${this.renderTemplate()}${n(this.skew)}`}}customElements.define("ds-tw-cta",c);
