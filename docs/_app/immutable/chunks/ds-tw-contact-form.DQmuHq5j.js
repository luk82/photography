import{s as i,T as d,d as m,x as n}from"./class-map.CUp2aMEF.js";function p(s,e,a){const r={email:a.email,name:a.full_name,number:a.phonenumber,content:a.message};fetch(s,{method:"POST",headers:e,body:JSON.stringify(r)}).then(t=>t.json()).then(t=>console.log(t)).catch(t=>console.error("Error:",t))}class u extends i{static get styles(){return[d]}static get properties(){return{image:{type:String},variant:{type:String},addHiddenField:{type:String},title:{type:String},messageText:{type:String},message:{type:String},url:{type:String}}}constructor(){super(),this.image="",this.title="",this.variant="primary",this.addHiddenField="",this.message="",this.messageText="Form submitted",this.url=""}handleSubmit(e){if(e.preventDefault(),!this.url)return!1;if(this.url!=="test"){const r=e.target,t=new FormData(r),o=Object.fromEntries(t.entries());this.message=this.messageText;const l=this.url;p(l,{Accept:"application/json; charset=utf-8","Content-Type":"application/json; charset=UTF-8"},o)}m({message:"Form Submitted",eventName:"ds-toast"},this)}createHiddenField(e){return n`<label for="details">
      <input
        type="hidden"
        name="details"
        id="details"
        .value=${JSON.stringify({key:e})}
      />
    </label>`}addClasses(){const e=[];return this.variant=="primary"&&e.push("bg-[var(--form-bg)] text-[var(--form-text)] shadow-lg px-6 pb-[var(--margin-bottom)] pt-[var(--margin-bottom)]"),this.variant=="secondary"&&e.push("pb-[var(--margin-bottom)]"),e.join(" ")}render(){return n` <div
      class="${this.addClasses()} mb-[var(--margin-bottom)] block items-center justify-center rounded-md text-sm transition-all duration-200 ease-in-out"
    >
      <form
        class="group flex flex-col rounded-md"
        @submit=${this.handleSubmit}
        novalidate
      >
        <h2 class="mb-6 text-3xl">${this.title}</h2>

        <div class="mb-8"><slot></slot></div>

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
        ${this.message!=""?n`<div class="text-[var(--form-bg-text)] text-red-500">
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
    </div>`}}customElements.define("ds-tw-contact-form",u);
