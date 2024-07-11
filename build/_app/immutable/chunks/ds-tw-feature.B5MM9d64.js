import{s as l,T as s,i,x as t,r as e,a}from"./class-map.-4MMyoZd.js";class o extends l{static get styles(){return[s,i`
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
      `]}static get properties(){return{variant:{type:String},image:{type:String},imageWidth:{type:String},skew:{type:String}}}constructor(){super(),this.imageWidth="2432",this.imageHeight="1442",this.image="/images/office-1.jpg",this.variant="primary",this.skew="none"}renderTemplate(){if(this.variant=="primary")return t`
        ${e(this.skew)}
        <div
          class="overflow-hidden rounded-[var(--feature-border-radius)] bg-[var(--feature-bg)] py-8 sm:py-12"
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
                    class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                  >
                    <slot name="header"></slot>
                  </p>
                  <p class="mt-6 text-lg leading-8 text-gray-600">
                    <slot name="body"></slot>
                  </p>
                  <dl
                    class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
                  >
                    <slot name="bullets"></slot>
                  </dl>
                </div>
              </div>
              <img
                src="${this.image}"
                alt="Product screenshot"
                class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width="${this.imageWidth}"
                height="${this.imageHeight}"
              />
            </div>
          </div>
        </div>
        ${a(this.skew)}
      `;if(this.variant=="secondary")return t`<section>
        ${e(this.skew)}
        <div
          class="radius-for-skewed mx-auto max-w-[var(--container-width)] bg-[var(--feature-bg)] py-20"
        >
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap items-center">
              <div class="mb-12 w-full lg:mb-0 lg:w-1/2">
                <div class="pr-6 lg:mx-auto">
                  <span class="font-bold text-[var(--feature-theme)]"
                    ><slot name="kicker"></slot
                  ></span>
                  <h2 class="font-heading my-2 text-4xl font-bold lg:text-2xl">
                    <slot name="header"></slot>
                  </h2>
                  <p class="mb-6 leading-loose text-[var(--feature-text)]">
                    <slot name="body"></slot>
                  </p>
                </div>
              </div>
              <div class="-mx-4 flex w-full flex-wrap lg:w-1/2">
                <div class="mb-8 w-full px-4 md:w-1/2 lg:mb-0">
                  <slot name="col-1"></slot>
                </div>
                <div class="w-full px-4 md:w-1/2 lg:mt-20">
                  <slot name="col-2"></slot>
                </div>
              </div>
            </div>
          </div>
        </div>
        ${a(this.skew)}
      </section>`;if(this.variant=="tertiary")return t`<section
        class="rounded-b-10xl bg-[var(--feature-bg)] py-24 font-medium 2xl:pb-40 2xl:pt-52"
      >
        <div class="container mx-auto px-4">
          <div
            class="grid justify-center gap-16 md:grid-cols-2 lg:grid-cols-4 xl:gap-40"
          >
            <div class="mx-auto max-w-sm text-center">
              <div
                class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--feature-theme)] text-xl font-semibold text-white"
              >
                1
              </div>
              <h3 class="font-heading mb-10 text-2xl leading-loose">
                Header 1
              </h3>
              <p class="font-normal leading-loose text-gray-400">
                Donec laoreet sem sollicitudin, mattis mi in, tristique ex.
              </p>
            </div>
            <div class="mx-auto max-w-sm text-center">
              <div
                class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--feature-theme)] text-xl font-semibold text-white"
              >
                2
              </div>
              <h3 class="font-heading mb-10 text-2xl leading-loose">
                Header 2
              </h3>
              <p class="font-normal leading-loose text-gray-400">
                The nulla come commodo eros sit tristique lectus
              </p>
            </div>
            <div class="mx-auto max-w-sm text-center">
              <div
                class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--feature-theme)] text-xl font-semibold text-white"
              >
                3
              </div>
              <h3 class="font-heading mb-10 text-2xl leading-loose">
                Header 3
              </h3>
              <p class="font-normal leading-loose text-gray-400">
                Nam ipsum augue, eleifend elementum velit a, mattis sollicitudin
              </p>
            </div>
            <div class="mx-auto max-w-sm text-center">
              <div
                class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--feature-theme)] text-xl font-semibold text-white"
              >
                4
              </div>
              <h3 class="font-heading mb-10 text-2xl leading-loose">
                Header 4
              </h3>
              <p class="font-normal leading-loose text-gray-400">
                Vestibulum non odio non dui fermentum mattis.
              </p>
            </div>
          </div>
        </div>
      </section>`;if(this.variant=="secondary-2")return t`<section>
        <div class="skew skew-top mr-for-radius">
          <svg
            class="h-8 w-full text-gray-50 md:h-12 lg:h-20"
            viewbox="0 0 10 10"
            preserveaspectratio="none"
          >
            <polygon fill="currentColor" points="0 0 10 10 0 10"></polygon>
          </svg>
        </div>
        <div class="skew skew-top ml-for-radius">
          <svg
            class="h-8 w-full text-gray-50 md:h-12 lg:h-20"
            viewbox="0 0 10 10"
            preserveaspectratio="none"
          >
            <polygon fill="currentColor" points="0 10 10 0 10 10"></polygon>
          </svg>
        </div>
        <div class="radius-for-skewed bg-gray-50 py-20">
          <div class="container mx-auto px-4">
            <div class="mx-auto mb-16 max-w-md text-center">
              <span class="font-bold text-[var(--feature-color)]"
                ><slot name="title"></slot
              ></span>
              <h2 class="text-4xl font-bold md:text-2xl">
                Build & Launch without problems
              </h2>
            </div>
            <div class="-mx-4 flex flex-wrap">
              <div class="mb-12 w-full px-4 md:w-1/2 lg:mb-0 lg:w-1/4">
                <span
                  class="mb-4 inline-block rounded bg-[var(--feature-bg)] p-3 text-[var(--feature-color)] md:mb-6"
                >
                  <svg
                    class="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                    ></path>
                  </svg>
                </span>
                <h4 class="font-heading mb-4 text-2xl font-bold">
                  Lorem ipsum dolor sit amet consectutar
                </h4>
                <p class="leading-loose text-gray-500">
                  Fusce quam tellus, placerat eu metus ut, viverra aliquet
                  purus. Suspendisse potenti. Nulla non nibh feugiat.
                </p>
              </div>
              <div class="mb-12 w-full px-4 md:w-1/2 lg:mb-0 lg:w-1/4">
                <span
                  class="mb-4 inline-block rounded bg-[var(--feature-bg)] p-3 text-[var(--feature-color)] md:mb-6"
                >
                  <svg
                    class="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h4 class="font-heading mb-4 text-2xl font-bold">
                  Ut congue nec leo eget aliquam
                </h4>
                <p class="leading-loose text-gray-500">
                  Ut tempus tellus ac nisi vestibulum tempus. Nunc tincidunt
                  lectus libero, ac ultricies augue elementum at.
                </p>
              </div>
              <div class="mb-12 w-full px-4 md:w-1/2 lg:mb-0 lg:w-1/4">
                <span
                  class="mb-4 inline-block rounded bg-[var(--feature-bg)] p-3 text-[var(--feature-color)] md:mb-6"
                >
                  <svg
                    class="h-8 w-8"
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
                  </svg>
                </span>
                <h4 class="font-heading mb-4 text-2xl font-bold">
                  Proin fringilla eleifend justo pellentesque
                </h4>
                <p class="leading-loose text-gray-500">
                  Donec ut ligula nunc. Mauris blandit vel est et facilisis.
                  Integer sapien felis, aliquet at posuere et, porttitor quis
                  ligula.
                </p>
              </div>
              <div class="w-full px-4 md:w-1/2 lg:w-1/4">
                <span
                  class="mb-4 inline-block rounded bg-[var(--feature-bg)] p-3 text-[var(--feature-color)] md:mb-6"
                >
                  <svg
                    class="h-8 w-8"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"
                    ></path>
                  </svg>
                </span>
                <h4 class="font-heading mb-4 text-2xl font-bold">
                  Morbi sagittis ligula sit amet elit maximus
                </h4>
                <p class="leading-loose text-gray-500">
                  Duis ut facilisis orci. Morbi lacinia nunc a augue eleifend,
                  sed placerat ex faucibus. Duis ante arcu, pretium ac luctus
                  vulputate.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="skew skew-bottom mr-for-radius">
          <svg
            class="h-8 w-full text-gray-50 md:h-12 lg:h-20"
            viewbox="0 0 10 10"
            preserveaspectratio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 0 10"></polygon>
          </svg>
        </div>
        <div class="skew skew-bottom ml-for-radius">
          <svg
            class="h-8 w-full text-gray-50 md:h-12 lg:h-20"
            viewbox="0 0 10 10"
            preserveaspectratio="none"
          >
            <polygon fill="currentColor" points="0 0 10 0 10 10"></polygon>
          </svg>
        </div>
      </section>`;if(this.variant=="primary-2")return t` <div
        class="mb-8 rounded-[var(--feature-border-radius)] bg-[var(--feature-bg)] p-8"
      >
        <div class="-m-8 flex flex-wrap lg:items-center">
          <div class="w-full p-8 md:w-1/2">
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
                <span data-config-id="auto-txt-19-2">Lorem ipsum</span>
                <span
                  class="bg-gradient-orange bg-clip-text text-transparent"
                  data-config-id="auto-txt-15-2"
                  >dorem</span
                >
                <span data-config-id="auto-txt-20-2">si porem.</span>
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
          <div class="w-full p-8 md:w-1/2">
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
      </div>`;if(this.variant=="primary-3")return t`<div
        class="rounded-[var(--feature-border-radius)] bg-[var(--feature-bg)] px-8 py-16 md:px-16"
      >
        <div class="-m-8 flex flex-wrap">
          <div class="w-full p-8 md:w-1/2">
            <div class="md:max-w-sm">
              <span
                class="mb-5 inline-block text-sm font-bold uppercase tracking-widest text-[var(--feature-theme)]"
                data-config-id="auto-txt-1-4"
                >Discover what we offer</span
              >
              <h2
                class="font-heading mb-8 text-4xl font-black tracking-tight text-gray-900"
                data-config-id="auto-txt-2-4"
              >
                Customize your design &amp; development
              </h2>
              <div class="-m-2 flex flex-wrap">
                <div class="w-full p-2 md:w-auto">
                  <a
                    class="block w-full rounded-full bg-[var(--feature-theme)] px-4 py-2.5 text-center text-sm font-bold text-white hover:bg-[var(--feature-primary)] focus:ring-4 focus:ring-blue-200"
                    href="#"
                    data-config-id="auto-txt-3-4"
                    >Start your journey</a
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="w-full p-8 md:w-1/2">
            <div class="-m-4 flex flex-wrap">
              <div class="w-full p-4 lg:w-1/2">
                <div
                  class="flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-gray-100 p-8"
                >
                  <svg
                    class="mb-28"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-1-4"
                  >
                    <path
                      d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                      fill="#3B82F6"
                    ></path>
                    <path
                      d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                      fill="#3B82F6"
                    ></path>
                    <path
                      d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                      fill="#3B82F6"
                    ></path>
                  </svg>
                  <h3
                    class="font-heading text-xl font-black text-gray-900 xl:w-40"
                    data-config-id="auto-txt-4-4"
                  >
                    Invite unlimited team members
                  </h3>
                </div>
              </div>
              <div class="w-full p-4 lg:w-1/2">
                <div
                  class="flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-gray-100 p-8"
                >
                  <svg
                    class="mb-28"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-2-4"
                  >
                    <path
                      d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                      fill="#3B82F6"
                    ></path>
                    <path
                      d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                      fill="#3B82F6"
                    ></path>
                    <path
                      d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                      fill="#3B82F6"
                    ></path>
                  </svg>
                  <h3
                    class="font-heading text-xl font-black text-gray-900 xl:w-40"
                    data-config-id="auto-txt-5-4"
                  >
                    Access detailed reports
                  </h3>
                </div>
              </div>
              <div class="w-full p-4 lg:w-1/2">
                <div
                  class="flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-gray-100 p-8"
                >
                  <svg
                    class="mb-28"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-3-4"
                  >
                    <path
                      d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                      fill="#3B82F6"
                    ></path>
                    <path
                      d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                      fill="#3B82F6"
                    ></path>
                    <path
                      d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                      fill="#3B82F6"
                    ></path>
                  </svg>
                  <h3
                    class="font-heading text-xl font-black text-gray-900 xl:w-40"
                    data-config-id="auto-txt-6-4"
                  >
                    Understand user behavior
                  </h3>
                </div>
              </div>
              <div class="w-full p-4 lg:w-1/2">
                <div
                  class="flex h-full flex-col justify-between rounded-3xl border border-gray-100 bg-gray-100 p-8"
                >
                  <svg
                    class="mb-28"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    data-config-id="auto-svg-4-4"
                  >
                    <path
                      d="M14 16C14 17.77 13.23 19.37 12 20.46C10.94 21.42 9.54 22 8 22C4.69 22 2 19.31 2 16C2 13.9753 3.01397 12.1814 4.5554 11.0973C4.80358 10.9228 5.1393 11.0422 5.27324 11.3145C6.21715 13.2332 7.95419 14.6699 10.02 15.23C10.65 15.41 11.31 15.5 12 15.5C12.4872 15.5 12.9539 15.4538 13.4074 15.3687C13.6958 15.3147 13.9828 15.4995 13.9955 15.7926C13.9985 15.8621 14 15.9314 14 16Z"
                      fill="#3B82F6"
                    ></path>
                    <path
                      d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
                      fill="#3B82F6"
                    ></path>
                    <path
                      d="M22 16C22 19.31 19.31 22 16 22C15.2555 22 14.5393 21.8643 13.8811 21.6141C13.5624 21.4929 13.503 21.0851 13.7248 20.8262C14.8668 19.4938 15.5 17.786 15.5 16C15.5 15.66 15.47 15.32 15.42 15C15.3902 14.8155 15.4844 14.6342 15.6478 14.5437C16.9719 13.8107 18.0532 12.6876 18.727 11.3153C18.8609 11.0427 19.1968 10.923 19.4452 11.0978C20.9863 12.1818 22 13.9755 22 16Z"
                      fill="#3B82F6"
                    ></path>
                  </svg>
                  <h3
                    class="font-heading text-xl font-black text-gray-900 xl:w-40"
                    data-config-id="auto-txt-7-4"
                  >
                    No sacrifices made
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`}render(){return this.renderTemplate()}}customElements.define("ds-tw-feature",o);
