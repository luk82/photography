var l=Object.defineProperty;var d=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;var i=(e,t,a)=>d(e,typeof t!="symbol"?t+"":t,a);import{s as o,T as n,x as r,a as u,e as s}from"./class-map.c_00f5Aq.js";class c extends o{constructor(){super();i(this,"icon",r`<svg
    class="h-10 w-10 text-[var(--card-primary)]"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewbox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    ></path>
  </svg>`);this.variant="primary"}static get styles(){return[n]}static get properties(){return{variant:{type:String}}}get _slottedIcon(){return this.querySelectorAll("[slot=icon]")}renderTemplate(){if(this.variant==="primary")return r` <div
        class="mb-8 rounded bg-[var(--card-theme)] bg-white py-6 pl-6 pr-4 shadow"
      >
        ${this._slottedIcon.length>0?r`
              <span
                class="mb-4 inline-block rounded-lg bg-[var(--card-primary)] p-3"
              >
                <slot name="icon"></slot>
              </span>
            `:u}
        <h4
          class="font-heading mb-2 text-2xl font-bold text-[var(--card-primary)]"
        >
          <slot name="header"></slot>
        </h4>
        <p class="leading-loose text-[var(--card-primary)] ">
          <slot name="body"></slot>
        </p>
        <p>
          <slot name="footer"></slot>
        </p>
      </div>`;if(this.variant==="primary-2")return r`<div class="w-full p-4 lg:w-1/2">
        <div
          class="flex h-full flex-col justify-between rounded-[var(--card-border-radius)] border border-gray-100 bg-[var(--card-theme)] p-8"
        >
          <div class="mb-4 text-[var(--card-primary)]">
            <slot name="icon">${this.icon}</slot>
          </div>
          <div class="mb-4">
            <slot name="image"></slot>
          </div>
          <h3
            class="font-heading text-xl font-black text-[var(--card-primary)]"
            data-config-id="auto-txt-4-4"
          >
            <slot name="header"></slot>
          </h3>
          <p class="text-[var(--card-secondary)]">
            <slot name="body"></slot>
          </p>
          <p>
            <slot name="footer"></slot>
          </p>
        </div>
      </div>`}render(){return this.renderTemplate()}}customElements.define("ds-tw-card",c);class h extends o{static get styles(){return[n]}render(){return r`<div class="container mx-auto">
      <slot></slot>
    </div>`}}customElements.define("ds-tw-container",h);class p extends o{static get styles(){return[n]}static get properties(){return{link:{type:String},variant:{type:String},buttonText:{type:String},hasArrow:{type:Boolean},scrollTo:{type:String},hasBorder:{type:Boolean}}}constructor(){super(),this.link="#",this.variant="primary",this.buttonText="",this.hasArrow=!1,this.hasBorder=!1,this.scrollTo=""}handleClick(t){this.scrollTo&&(t.preventDefault(),this.scrollToId())}scrollToId(){document.getElementById(this.scrollTo).scrollIntoView({behavior:"smooth"})}displayArrow(){return this.hasArrow?r`<span aria-hidden="true" class="ml-2">→</span>`:""}renderButton(){const t={"rounded-[var(--button-border-radius)] border-2 border-solid border-[var(--button-secondary)]":this.hasBorder};if(this.variant=="primary")return r`<a
        href="${this.link}"
        @click="${this.handleClick}"
        class="${s(t)} focus:shadow-xs inline-flex h-16 cursor-pointer select-none items-center justify-center bg-[var(--button-bg)] px-10 py-0 text-center align-middle text-xl font-semibold text-[var(--button-theme)] no-underline transition-all duration-300 ease-in-out hover:border-[var(--button-primary)] hover:bg-[var(--button-bg-hover)] hover:text-[var(--button-text-hover)] focus:no-underline"
      >
        <slot></slot>
      </a>`;if(this.variant=="primary-2")return r`<a
        href="${this.link}"
        @click="${this.handleClick}"
        class="${s(t)} group relative inline-flex items-center justify-start overflow-hidden px-5 py-3 font-bold"
      >
        <span
          class="absolute left-0 top-0 h-32 w-32 -translate-y-2 translate-x-12 rotate-45 bg-[var(--button-bg)] opacity-[3%]"
        ></span>
        <span
          class="absolute left-0 top-0 -mt-1 h-48 w-48 -translate-x-56 -translate-y-24 rotate-45 bg-[var(--button-bg)] opacity-100 transition-all duration-500 ease-in-out group-hover:-translate-x-8"
        ></span>
        <span
          class="relative w-full text-left text-[var(--button-primary)] transition-colors duration-200 ease-in-out group-hover:text-[var(--button-text-hover)]"
          ><slot></slot
        ></span>
        <span class="${s(t)} absolute inset-0"></span>
      </a>`;if(this.variant=="primary-3")return r`<a
        href="${this.link}"
        @click="${this.handleClick}"
        class="group relative inline-flex items-center justify-start overflow-hidden rounded-[var(--button-border-radius)] bg-[var(--button-bg)] px-5 py-3 font-medium transition-all hover:bg-white"
      >
        <span
          class="absolute inset-0 rounded-[var(--button-border-radius)] border-0 border-white transition-all duration-100 ease-linear group-hover:border-[25px]"
        ></span>
        <span
          class="relative w-full text-left text-[var(--button-primary)] transition-colors duration-200 ease-in-out group-hover:text-[var(--button-bg)]"
          ><slot></slot
        ></span>
      </a>`;if(this.variant=="primary-4")return r`<a
        class="inline-flex w-full items-center justify-center rounded-[var(--button-border-radius)] border border-gray-200 px-4 py-3 transition duration-100 hover:border-gray-400"
        href="${this.link}"
        @click="${this.handleClick}"
      >
        <slot name="icon"></slot>
        <span class="ml-4 text-sm font-semibold text-[var(--button-primary)]">
          <slot></slot>
        </span>
      </a>`;if(this.variant=="secondary")return r` <a
        href="${this.link}"
        @click="${this.handleClick}"
        class="group relative inline-flex items-center justify-center overflow-hidden rounded-[var(--button-border-radius)] border-2 border-[var(--button-bg)] p-4 px-6 py-3 font-medium text-[var(--button-primary)] shadow-md transition duration-300 ease-out"
      >
        <span
          class="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-[var(--button-bg)] text-white duration-300 group-hover:translate-x-0"
        >
          <svg
            class="h-6 w-6 text-[var(--button-primary)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span
          class="ease absolute flex h-full w-full transform items-center justify-center bg-[var(--button-bg)] transition-all duration-300 group-hover:translate-x-full"
        >
          <slot></slot>
        </span>
        <span class="invisible relative">Button Text</span>
      </a>`;if(this.variant=="secondary-2")return r` <a
        href="${this.link}"
        @click="${this.handleClick}"
        class="group relative inline-block overflow-hidden rounded-[var(--button-border-radius)] border border-gray-200 bg-[var(--button-bg)] px-5 py-4 text-center text-sm font-semibold text-[var(--button-theme)] transition duration-300 hover:text-[var(--button-primary)]"
        href="#"
      >
        <div
          class="group-hover:scale-102 absolute right-full top-0 h-full w-full transform bg-[var(--button-secondary)] transition duration-500 group-hover:translate-x-full"
        ></div>
        <span class="relative"><slot></slot></span>
      </a>`;if(this.variant=="complex")return r`<a
        href="${this.link}"
        @click="${this.handleClick}"
        class="mr-2 bg-[var(--button-theme)] p-3 text-[var(--button-primary)] transition-all duration-200 hover:bg-[var(--button-secondary)]
      hover:text-[var(--button-theme)] sm:mb-8 sm:justify-center"
        ><slot name="icon"></slot><slot></slot>${this.displayArrow()}</a
      >`}render(){return this.renderButton()}}customElements.define("ds-tw-button",p);
