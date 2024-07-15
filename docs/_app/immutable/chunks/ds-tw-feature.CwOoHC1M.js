import{s as g,T as x,x as s,i as u,r as m,e as r,b as f}from"./class-map.c_00f5Aq.js";function v(d,t,l,e="",a={}){const i=function(n){n.forEach(c=>{c.isIntersecting?c.target.classList.add(l):e&&c.target.classList.remove(e)})},o=new IntersectionObserver(i,a);d.shadowRoot.querySelectorAll(t).forEach(n=>{e&&n.classList.add(e),o.observe(n)})}class h extends g{static get styles(){return[x]}static get properties(){return{images:{type:Array}}}constructor(){super(),this.images=[]}listImages(t){return t==null?void 0:t.map(l=>(console.log("image",l),s`
        <div class="flex-shrink-0 snap-center snap-always">
          <img src="${l}" height="100%" width="auto" class="h-96" />
        </div>
      `))}render(){return console.log("this.images",this.images),s`
      <div class="flex snap-x space-x-8 overflow-x-auto">
        ${this.listImages(this.images)}
      </div>
    `}}customElements.define("ds-tw-scroll",h);class p extends g{static get styles(){return[x,u`
        :host {
          --skew-bg: var(--feature-bg);
        }

        .bg-gradient-orange {
          background-image: linear-gradient(
            98.24deg,
            var(--feature-primary, #ff4800) 0,
            var(--feature-secondary, #ab0000) 100%
          );
        }

        .horizontal-slot > ds-tw-card {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(0, 1fr));
          gap: 1rem;
        }
      `]}static get properties(){return{variant:{type:String},image:{type:String},imageWidth:{type:String},imageHeight:{type:String},skew:{type:String},enableFadeIn:{type:Boolean},fullWidth:{type:Boolean},marginBottom:{type:Boolean}}}constructor(){super(),this.imageWidth="auto",this.imageHeight="auto",this.image="/images/office-1.jpg",this.variant="primary",this.skew="none",this.enableFadeIn=!1,this.fullWidth=!1,this.marginBottom=!1}get _slottedContent(){return this.querySelectorAll("[slot=col-1]")}slottedContentIntoGrid(t){return t.length===0?void 0:t.reduce((e,a)=>{const i=Array.from(a.childNodes).filter(o=>o.nodeType===Node.ELEMENT_NODE);return i.forEach(o=>o.classList.add("test")),e.concat(i)},[])}renderImages(){if(this.image!=="")return this.image.length>1?s`<ds-tw-scroll
        images=${JSON.stringify(this.image)}
      ></ds-tw-scroll>`:`<img
                src="${this.image}"
                alt="Product screenshot"
                class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width="${this.imageWidth}"
                height="${this.imageHeight}"
              />`}renderTemplate(){const t={"show-on-scroll opacity-0":this.enableFadeIn},l={"mb-[var(--margin-bottom)]":this.marginBottom};if(this.variant=="primary")return s`
        ${m(this.skew)}
        <div
          class="${r(l)} overflow-hidden rounded-[var(--feature-border-radius)] bg-[var(--feature-bg)] py-8 sm:py-12"
        >
          <div class="container mx-auto px-6 lg:px-8">
            <div
              class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
            >
              <div class="lg:pr-8 lg:pt-4">
                <div class="lg:max-w-xl">
                  <h2
                    class="text-base font-semibold leading-7 text-[var(--feature-primary)]"
                  >
                    <slot name="kicker"></slot>
                  </h2>
                  <p
                    class="mt-2 text-3xl font-bold tracking-tight text-[var(--feature-text)] sm:text-4xl"
                  >
                    <slot name="header"></slot>
                  </p>
                  <p class="mt-6 text-lg leading-8 text-[var(--feature-text)]">
                    <slot name="body"></slot>
                  </p>
                  <dl
                    class="mt-10 max-w-xl space-y-8 text-base leading-7 text-[var(--feature-text)] lg:max-w-none"
                  >
                    <slot name="bullets"></slot>
                  </dl>
                </div>
              </div>
              ${this.renderImages()}
            </div>
          </div>
        </div>
        ${f(this.skew)}
      `;if(this.variant=="primary-2")return s` <div
        class="mb-8 rounded-[var(--feature-border-radius)] bg-[var(--feature-bg)] p-8"
      >
        <div class="-m-8 flex flex-wrap lg:items-center">
          <div class="w-full py-8 pr-8 md:w-1/2">
            <div class="mx-auto md:max-w-lg">
              <span
                class="mb-3 inline-block text-sm font-bold uppercase tracking-widest text-[var(--feature-theme)]"
                data-config-id="auto-txt-13-2"
                ><slot name="kicker"></slot
              ></span>
              <h1
                class="font-heading mb-4 text-2xl font-black tracking-tight text-gray-900"
                data-config-id="auto-txt-14-2"
              >
                <span
                  data-config-id="auto-txt-19-2"
                  class="bg-gradient-orange bg-clip-text text-transparent"
                  ><slot name="header"></slot
                ></span>
              </h1>
              <p class="mb-6 text-xl font-bold" data-config-id="auto-txt-16-2">
                <slot name="body"></slot>
              </p>
              <!-- <div class="-m-2 flex flex-wrap">

                <div class="w-full p-2 md:w-auto">
                  <a
                    class="block w-full rounded-full bg-[var(--feature-theme)] px-4 py-2.5 text-center text-sm font-bold text-white hover:bg-[var(--feature-primary)] focus:ring-4 focus:ring-blue-200"
                    href="#"
                    data-config-id="auto-txt-17-2"
                    >Join Now</a
                  >
                </div>
                <div class="w-full p-2 md:w-auto">
                  <a
                    class="block w-full rounded-full bg-gray-100 px-4 py-2.5 text-center text-sm font-bold text-gray-900 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200"
                    href="#"
                    data-config-id="auto-txt-18-2"
                    >Explore Recipes</a
                  >
                </div>
              </div> -->
            </div>
          </div>
          <div class="w-full py-8 pr-8 md:w-1/2">
            <div
              class="mx-auto max-w-max overflow-hidden rounded-3xl bg-white md:mr-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 400 500"
              >
                <rect fill="#ffaa00" width="100%" height="auto" />
                <g fill-opacity="1">
                  <path
                    fill="#ffb100"
                    d="M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z"
                  />
                  <path
                    fill="#8b7e5e"
                    d="M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z"
                  />
                  <path
                    fill="#ffbe00"
                    d="M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z"
                  />
                  <path
                    fill="#ffc500"
                    d="M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z"
                  />
                  <path
                    fill="#ffcc00"
                    d="M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z"
                  />
                  <path
                    fill="#ffd914"
                    d="M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z"
                  />
                  <path
                    fill="#ffe529"
                    d="M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z"
                  />
                  <path
                    fill="#ffef3d"
                    d="M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z"
                  />
                  <path
                    fill="#fff852"
                    d="M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z"
                  />
                  <path
                    fill="#ffff66"
                    d="M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>`;if(this.variant=="primary-3")return s`<div
        class="${r(l)} rounded-[var(--feature-border-radius)] bg-[var(--feature-bg)] px-8 py-16 md:px-16"
      >
        <div class="container -m-8 mx-auto flex flex-wrap">
          <div class="w-full py-8 pr-8 md:w-1/2">
            <div class="md:max-w-sm">
              <span
                class="mb-5 inline-block text-sm font-bold uppercase tracking-widest text-[var(--feature-theme)]"
                data-config-id="auto-txt-1-4"
                ><slot name="kicker"></slot
              ></span>
              <h2
                class="font-heading mb-8 text-4xl font-black tracking-tight text-gray-900"
                data-config-id="auto-txt-2-4"
              >
                <slot name="header"></slot>
              </h2>
              <div class="-m-2 flex flex-wrap">
                <div class="w-full p-2 md:w-auto">
                  <slot name="body"></slot>
                </div>
              </div>
            </div>
          </div>
          <div class="-mx-4 flex w-full flex-wrap lg:w-1/2">
            <div class="mb-8 w-full px-4 md:w-1/2 lg:mb-0">
              <slot name="col-1"></slot>
            </div>
            <div class="w-full px-4 md:w-1/2">
              <slot name="col-2"></slot>
            </div>
          </div>
        </div>
      </div>`;if(this.variant=="secondary"){const e={"max-w-[var(--container-width)]":!this.fullWidth,"max-w-full":this.fullWidth};return s`<section>
        ${m(this.skew)}
        <div
          class="${r(e)} mx-auto bg-[var(--feature-bg)] py-20"
        >
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap items-center">
              <div class="mb-12 w-full lg:mb-0 lg:w-1/2">
                <div class="pr-6 lg:mx-auto">
                  <span class="font-bold text-[var(--feature-theme)]"
                    ><slot name="kicker"></slot
                  ></span>
                  <h2
                    class="font-heading my-2 text-4xl font-bold text-[var(--feature-text)] lg:text-2xl"
                  >
                    <slot name="header"></slot>
                  </h2>
                  <p class="mb-6 leading-loose text-[var(--feature-text)]">
                    <slot name="body"></slot>
                  </p>
                </div>
              </div>
              <div class="-mx-4 flex w-full flex-wrap lg:w-1/2">
                <div
                  class="${r(t)} mb-8 w-full px-4  md:w-1/2 lg:mb-0"
                >
                  <slot name="col-1"></slot>
                </div>
                <div
                  class="${r(t)} w-full px-4 md:w-1/2 lg:mt-20"
                >
                  <slot name="col-2"></slot>
                </div>
              </div>
            </div>
          </div>
        </div>
        ${f(this.skew)}
      </section>`}if(this.variant=="secondary-2"){const e=Array.from(this._slottedContent),a=this.slottedContentIntoGrid(e),i={"grid-cols-1":a.length===1,"grid-cols-2":a.length===2,"grid-cols-3":a.length===3,"grid-cols-4":a.length===4||a.length>4};return s`<section>
          ${m(this.skew)}
          <div class="bg-[var(--feature-bg)] py-20">
            <div class="container mx-auto px-4">
              <div class="mx-auto mb-16 max-w-md text-center">
                <span class="font-bold text-[var(--feature-primary)]"
                  ><slot name="kicker"></slot
                ></span>
                <h2
                  class="text-4xl font-bold text-[var(--feature-text)] md:text-2xl"
                >
                  <slot name="header"></slot>
                </h2>
                <div class="text-[var(--feature-text)]">
                  <slot name="body"></slot>
                </div>
              </div>
              <div class="${r(i)} grid gap-4">${a}</div>
            </div>
          </div>
          ${f(this.skew)}
        </section>
        <slot name="col-1"></slot>`}if(this.variant=="tertiary")return s`<section
        class="rounded-b-10xl bg-[var(--feature-bg)] py-24 font-medium 2xl:pb-40 2xl:pt-52"
      >
        <div class="container mx-auto px-4">
          <div
            class="grid justify-center gap-16 md:grid-cols-2 lg:grid-cols-4 xl:gap-40"
          >
            <div class="mx-auto max-w-sm text-center">
              <div
                class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--feature-theme)] text-xl font-semibold text-[var(--feature-text)]"
              >
                1
              </div>
              <h3 class="font-heading mb-10 text-2xl leading-loose">
                <slot name="header"></slot>
              </h3>
              <p
                class="font-normal leading-loose text-[var(--feature-primary)]"
              >
                <slot name="body"></slot>
              </p>
            </div>
            <div class="mx-auto max-w-sm text-center">
              <div
                class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--feature-theme)] text-xl font-semibold text-[var(--feature-text)]"
              >
                2
              </div>
              <h3 class="font-heading mb-10 text-2xl leading-loose">
                Header 2
              </h3>
              <p
                class="font-normal leading-loose text-[var(--feature-primary)]"
              >
                The nulla come commodo eros sit tristique lectus
              </p>
            </div>
            <div class="mx-auto max-w-sm text-center">
              <div
                class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--feature-theme)] text-xl font-semibold text-[var(--feature-text)]"
              >
                3
              </div>
              <h3 class="font-heading mb-10 text-2xl leading-loose">
                Header 3
              </h3>
              <p
                class="font-normal leading-loose text-[var(--feature-primary)]"
              >
                Nam ipsum augue, eleifend elementum velit a, mattis sollicitudin
              </p>
            </div>
            <div class="mx-auto max-w-sm text-center">
              <div
                class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--feature-theme)] text-xl font-semibold text-[var(--feature-text)]"
              >
                4
              </div>
              <h3 class="font-heading mb-10 text-2xl leading-loose">
                Header 4
              </h3>
              <p
                class="font-normal leading-loose text-[var(--feature-primary)]"
              >
                Vestibulum non odio non dui fermentum mattis.
              </p>
            </div>
          </div>
        </div>
      </section>`}firstUpdated(){this.enableFadeIn&&v(this,".show-on-scroll","animate-fadeIn","opacity-0")}render(){return this.renderTemplate()}}customElements.define("ds-tw-feature",p);
