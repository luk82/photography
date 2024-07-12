import{d as T}from"../chunks/index.R8ovVqwX.js";import{s as $,n as h}from"../chunks/scheduler.Bmg8oFKD.js";import{S as j,i as C,e as g,s as b,A as F,c as v,d,f as x,y,o as w,z as c,h as B,g as u}from"../chunks/index.ClnunyA3.js";import{s as _,T as S,x as l,i as E,e as p,d as k,r as H,a as W}from"../chunks/class-map.4yN0Eo_Y.js";import"../chunks/ds-tw-band.CmcJkru6.js";const D=T,q=!0,J=Object.freeze(Object.defineProperty({__proto__:null,csr:D,prerender:q},Symbol.toStringTag,{value:"Module"}));function A(m,e,t){const a={email:t.email,name:t.full_name,number:t.phonenumber,content:t.message};fetch(m,{method:"POST",headers:e,body:JSON.stringify(a)}).then(s=>s.json()).then(s=>console.log(s)).catch(s=>console.error("Error:",s))}class M extends _{static get styles(){return[S]}static get properties(){return{image:{type:String},variant:{type:String},addHiddenField:{type:String},title:{type:String},messageText:{type:String},message:{type:String},url:{type:String}}}constructor(){super(),this.image="",this.variant="primary",this.addHiddenField="",this.message="",this.messageText="Form submitted",this.url=""}handleSubmit(e){if(e.preventDefault(),!this.url)return!1;const t=e.target;console.log("form",t);const a=new FormData(t),s=Object.fromEntries(a.entries());console.log("data",s),this.message=this.messageText;const n=this.url;A(n,{Accept:"application/json; charset=utf-8","Content-Type":"application/json; charset=UTF-8"},s)}createHiddenField(e){return l`<label for="details">
      <input
        type="hidden"
        name="details"
        id="details"
        .value=${JSON.stringify({key:e})}
      />
    </label>`}addClasses(){const e=[];return this.variant=="primary"&&e.push("bg-[var(--form-bg)] text-[var(--form-text)] shadow-lg px-6 pb-[var(--margin-bottom)] pt-[var(--margin-bottom)]"),this.variant=="secondary"&&e.push("pb-[var(--margin-bottom)]"),e.join(" ")}render(){return l` <div
      class="${this.addClasses()} mb-[var(--margin-bottom)] block items-center justify-center rounded-md text-sm transition-all duration-200 ease-in-out"
    >
      <form
        class="group flex flex-col rounded-md"
        @submit=${this.handleSubmit}
        novalidate
      >
        <h2 class="mb-6 text-3xl">${this.title}</h2>

        <label for="full_name" class="mb-6">
          <span>Full Name</span>
          <input
            type="text"
            name="full_name"
            id="full_name"
            class="peer/full_name mt-2 w-full appearance-none rounded border border-gray-300 bg-[var(--form-bg-input)] p-3 text-neutral-800 shadow shadow-gray-100 outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
            placeholder=" "
            required
          />
          <span
            class="peer/full_name-[&:not(:placeholder-shown):not(:focus):invalid]:block mt-2 hidden text-sm text-[var(--form-bg-text)] text-red-500"
          >
            Please enter full name
          </span>
        </label>

        <label for="phonenumber" class="mb-6">
          <span>Telephone Number</span>
          <input
            type="number"
            name="phonenumber"
            id="phonenumber"
            class="peer/phonenumber mt-2 w-full appearance-none rounded border border-gray-300 bg-[var(--form-bg-input)] p-3 text-neutral-800 shadow shadow-gray-100 outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
            placeholder=" "
            required
            pattern="[0-9._%+-]+@[0-9.-]+$"
          />
          <span
            class="peer/phonenumber-[&:not(:placeholder-shown):not(:focus):invalid]:block mt-2 hidden text-sm text-[var(--form-bg-text)] text-red-500"
          >
            Please enter a valid telephone number
          </span>
        </label>

        <label for="email" class="mb-6">
          <span>Email</span>
          <input
            type="email"
            name="email"
            id="email"
            class="peer/email mt-2 w-full appearance-none rounded border border-gray-300 bg-[var(--form-bg-input)] p-3 text-neutral-800 shadow shadow-gray-100 outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
            placeholder=" "
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
          />
          <span
            class="peer/email-[&:not(:placeholder-shown):not(:focus):invalid]:block mt-2 hidden text-sm text-[var(--form-bg-text)] text-red-500"
          >
            Please enter a valid email address
          </span>
        </label>

        <label for="message" class="mb-6">
          <span>Message</span>
          <textarea
            type="text"
            name="message"
            id="message"
            class="peer mt-2 w-full appearance-none rounded border border-gray-300 bg-[var(--form-bg-input)] p-3 text-neutral-800 shadow shadow-gray-100 outline-none invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
            placeholder=" "
            required
          ></textarea>
          <span
            class="mt-2 hidden text-sm text-[var(--form-bg-text)] text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block"
          >
            Please enter a message
          </span>
        </label>

        ${this.addHiddenField!=""?this.createHiddenField(this.addHiddenField):""}
        ${this.message!=""?l`<div class="text-[var(--form-bg-text)] text-red-500">
              ${this.message}
            </div>`:""}

        <!-- <ds-tw-button @click=${this.handleSubmit}> Submit </ds-tw-button> -->
        <button
          type="submit"
          class="mt-5 rounded-md bg-[var(--form-button-bg)] py-3 text-[var(--form-button-text)] hover:bg-[var(--form-button-bg-hover)] hover:text-[var(--form-button-text-hover)]  group-invalid:pointer-events-none group-invalid:opacity-30 sm:w-full"
        >
          Submit
        </button>
      </form>
    </div>`}}customElements.define("ds-tw-contact-form",M);class O extends _{static get styles(){return[S,E`
        :host {
          --skew-bg: var(--cta-bg);
        }
      `]}static get properties(){return{image:{type:String},variant:{type:String},fullWidth:{type:Boolean},skew:{type:String},showGradient:{type:Boolean},marginBottom:{type:Boolean}}}constructor(){super(),this.image="",this.variant="primary",this.fullWidth=!1,this.skew="none",this.showGradient=!1,this.marginBottom=!1}renderTemplate(){const e={"mb-[var(--margin-bottom)]":this.marginBottom};if(this.variant=="primary"){const t={"flex items-center justify-center mx-auto":!0,"max-w-[var(--container-width)]":!this.fullWidth};return l`
        <div class="${p(e)} bg-[var(--cta-bg)]">
          <div class="${p(t)} container">
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
      `}if(this.variant=="secondary"){const t={"max-w-[var(--container-width)]":!this.fullWidth};return l`
        <div class="${p(e)} bg-inherit">
          <div class="${p(t)} mx-auto">
            <div
              class="relative isolate overflow-hidden rounded-[var(--cta-border-radius)] bg-[var(--cta-bg)] p-4 pt-16 dark:bg-slate-500 sm:px-16  lg:gap-x-10 lg:px-24 lg:pb-24 lg:pt-24"
            >
              ${this.showGradient?l` <svg
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
                  </svg>`:k}
              <div class="container lg:flex">
                <div
                  class=" mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
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
                  <div class="text-[var(--cta-text)]">
                    <slot name="left"></slot>
                  </div>
                </div>
                <div class="relative w-full">
                  <slot name="right"></slot>
                  ${this.image?l` <img
                        class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                        src="${this.image}"
                        alt="App screenshot"
                        width="1824"
                        height="1080"
                      />`:k}
                </div>
              </div>
            </div>
          </div>
        </div>
      `}if(this.variant=="sign-in-1")return l` <section class="relative overflow-hidden py-20 2xl:py-10">
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
      </section>`}render(){return l`${H(this.skew)}${this.renderTemplate()}${W(this.skew)}`}}customElements.define("ds-tw-cta",O);function P(m){let e,t,a,s='<div slot="header"></div> <div slot="body"><p></p></div>',n,o,f=`<span slot="left"><p>I am passionate about capturing the love and magic of your special day. That&#39;s why we&#39;d love
			to hear from you! Whether you&#39;re looking for information on our services, pricing, or
			availability, please don&#39;t hesitate to reach out. Our team is dedicated to providing
			exceptional customer service and ensuring that every couple feels valued and cared for
			throughout their wedding journey.</p> <p>To get in touch with us, simply fill out the contact form. I&#39;d be delighted to schedule a
			consultation to discuss your vision, answer any questions you may have, and share some of our
			favorite stories from previous weddings. Let&#39;s work together to create unforgettable memories
			that you&#39;ll treasure for a lifetime!</p></span> <span slot="right"><ds-tw-contact-form title="Contact Form" url="https://hook.eu2.make.com/wg1nk9q1bmwgadg0m127ijuo55bdqeim"></ds-tw-contact-form></span>`;return{c(){e=g("meta"),t=b(),a=g("ds-tw-band"),a.innerHTML=s,n=b(),o=g("ds-tw-cta"),o.innerHTML=f,this.h()},l(r){const i=F("svelte-1b8d7sl",document.head);e=v(i,"META",{name:!0,content:!0}),i.forEach(d),t=x(r),a=v(r,"DS-TW-BAND",{variant:!0,height:!0,"to-center":!0,bgImage:!0,skew:!0,"data-svelte-h":!0}),y(a)!=="svelte-1dwj0if"&&(a.innerHTML=s),n=x(r),o=v(r,"DS-TW-CTA",{"data-svelte-h":!0}),y(o)!=="svelte-117xxu9"&&(o.innerHTML=f),this.h()},h(){document.title="Contact",w(e,"name","description"),w(e,"content","About this app"),c(a,"variant","primary"),c(a,"height","400"),c(a,"to-center",""),c(a,"bgImage","images/slider-3.jpg"),c(a,"skew","")},m(r,i){B(document.head,e),u(r,t,i),u(r,a,i),u(r,n,i),u(r,o,i)},p:h,i:h,o:h,d(r){r&&(d(t),d(a),d(n),d(o)),d(e)}}}class U extends j{constructor(e){super(),C(this,e,null,P,$,{})}}export{U as component,J as universal};
