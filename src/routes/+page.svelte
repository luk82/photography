<script>
	// import Counter from './Counter.svelte';
	// import welcome from '$lib/images/svelte-welcome.webp';
	// import welcome_fallback from '$lib/images/svelte-welcome.png';

	// import '@luk82/ds-lit-tailwind/src/components/ds-tw-cta/ds-tw-cta.js';
	// import '@luk82/ds-lit-tailwind/src/components/ds-tw-feature/ds-tw-feature.js';
	// import '@luk82/ds-lit-tailwind/src/components/ds-tw-membership/ds-tw-membership.js';
	// import '@luk82/ds-lit-tailwind/src/components/ds-tw-pricing/ds-tw-pricing.js';
	// import '@luk82/ds-lit-tailwind/src/components/ds-tw-button/ds-tw-button.js';
	// import '@luk82/ds-lit-tailwind/src/components/ds-tw-hero/ds-tw-hero.js';
	// import '@luk82/ds-lit-tailwind/src/components/ds-tw-card/ds-tw-card.js';
	// import '@luk82/ds-lit-tailwind/src/components/ds-tw-calendar/ds-tw-calendar.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-band/ds-tw-band.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-darkmode/ds-tw-darkmode.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-image/ds-tw-image.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-feature/ds-tw-feature.js';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- <ds-tw-darkmode /> -->

<ds-tw-band to-center height="400" bgImage="/images/banner3.jpg" />

<ds-tw-feature variant="secondary" image="/images/banner4.jpg" imageWidth="100">
	<span slot="kicker" />
	<span slot="header" />
	<span slot="body"
		><p>
			I believe that every wedding is a unique celebration of love and commitment. That's why our
			team of skilled photographers is dedicated to capturing the beauty, emotion, and joy of your
			special day in a way that's truly yours. From the tender moments between loved ones to the
			vibrant energy of the party, we'll be there to tell your story through stunning images that
			you'll treasure for years to come.
		</p>
		<p>
			Our approach is simple: we listen carefully to our couples' vision, then use our expertise and
			creativity to bring it to life. We're not just photographers – we're storytellers who
			understand the importance of preserving memories in a way that's both authentic and
			breathtaking. Whether your style is classic and elegant or modern and trendy, we'll work with
			you to create a visual narrative that reflects your personalities and love for each other.
		</p>
		<p>
			Take a look around our website to get a glimpse of what we're all about – from our latest
			wedding stories to behind-the-scenes peeks at how we work our magic. We can't wait to hear
			about your plans and start capturing the memories you'll always treasure. Let's connect and
			make some unforgettable moments together!
		</p></span
	>
	<span slot="col-1">
		<ds-tw-image image="/images/banner2.jpg" />
		<ds-tw-image image="/images/banner5.jpg" /></span
	>
	<span slot="col-2">
		<ds-tw-image image="/images/banner1.jpg" />
		<ds-tw-image image="/images/banner4.jpg" />
	</span>
</ds-tw-feature>
