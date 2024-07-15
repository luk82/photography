import{s as b,n as c}from"../chunks/scheduler.Bmg8oFKD.js";import{S as v,i as _,e as h,s as w,k,c as d,d as n,f,a as L,l as T,m as y,n as r,h as x,g as m}from"../chunks/index.4GapGig5.js";import"../chunks/ds-tw-band.2FrV7Bv1.js";import{s as S,T as j,x as g}from"../chunks/class-map.c_00f5Aq.js";import"../chunks/ds-tw-image.BgMd9nfX.js";import"../chunks/ds-tw-feature.CwOoHC1M.js";const M=!0,B=Object.freeze(Object.defineProperty({__proto__:null,prerender:M},Symbol.toStringTag,{value:"Module"}));class F extends S{static get styles(){return[j]}static get properties(){return{icon:{type:String},theme:{type:String}}}constructor(){super(),this.theme=localStorage.getItem("ds-theme")?localStorage.getItem("ds-theme"):"light"}firstUpdated(){this.initTheme()}toggleDarkMode(){this.theme==="light"?this.theme="dark":this.theme="light",window.localStorage.setItem("hasanirogersblog-theme",this.theme),this.initTheme()}initTheme(){document.documentElement.setAttribute("theme",this.theme)}render(){return g` <button
      @click=${this.toggleDarkMode}
      class="absolute left-16 top-16 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow dark:bg-black dark:text-white"
    >
      ${this.theme==="light"?g`<slot name="icon-light">
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
          </slot>`:g` <slot name="icon-dark"
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
    </button>`}}customElements.define("ds-tw-darkmode",F);function I(p){let s,i,a,l,t,u=`<span slot="kicker"></span> <span slot="header"></span> <span slot="body"><p>I believe that every wedding is a unique celebration of love and commitment. That&#39;s why our
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
			make some unforgettable moments together!</p></span> <span slot="col-1"><ds-tw-image image="/images/banner2.jpg"></ds-tw-image> <ds-tw-image image="/images/banner5.jpg"></ds-tw-image></span> <span slot="col-2"><ds-tw-image image="/images/banner1.jpg"></ds-tw-image> <ds-tw-image image="/images/banner4.jpg"></ds-tw-image></span>`;return{c(){s=h("meta"),i=w(),a=h("ds-tw-band"),l=w(),t=h("ds-tw-feature"),t.innerHTML=u,this.h()},l(e){const o=k("svelte-t32ptj",document.head);s=d(o,"META",{name:!0,content:!0}),o.forEach(n),i=f(e),a=d(e,"DS-TW-BAND",{"to-center":!0,height:!0,bgImage:!0}),L(a).forEach(n),l=f(e),t=d(e,"DS-TW-FEATURE",{variant:!0,image:!0,imageWidth:!0,"data-svelte-h":!0}),T(t)!=="svelte-5d921l"&&(t.innerHTML=u),this.h()},h(){document.title="Home",y(s,"name","description"),y(s,"content","Svelte demo app"),r(a,"to-center",""),r(a,"height","450"),r(a,"bgImage","/images/banner3.jpg"),r(t,"variant","secondary"),r(t,"image","/images/banner4.jpg"),r(t,"imageWidth","100")},m(e,o){x(document.head,s),m(e,i,o),m(e,a,o),m(e,l,o),m(e,t,o)},p:c,i:c,o:c,d(e){e&&(n(i),n(a),n(l),n(t)),n(s)}}}class H extends v{constructor(s){super(),_(this,s,null,I,b,{})}}export{H as component,B as universal};
