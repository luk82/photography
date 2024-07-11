<script>
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-contact-form/ds-tw-contact-form.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-band/ds-tw-band.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-card/ds-tw-card.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-grid/ds-tw-grid.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-button/ds-tw-button.js';
</script>

<svelte:head>
	<title>Blog</title>
	<meta name="description" content="About this app" />
</svelte:head>

<ds-tw-band variant="primary" height="400" to-center="" bgImage="images/banner3.jpg" skew=""
	><div slot="header" />
	<div slot="body">
		<p />
	</div>
</ds-tw-band>

<ds-tw-grid variant="3-col">
	<span slot="col-1"
		><ds-tw-card
			><span slot="header">Blog title 1</span><span slot="body"
				>Body 1 <ds-tw-button link="/blog/1">Read</ds-tw-button></span
			></ds-tw-card
		></span
	>
	<span slot="col-2">
		<ds-tw-card
			><span slot="header">Blog title 2</span><span slot="body"
				>Body 2 <ds-tw-button link="/blog/two">Read</ds-tw-button></span
			></ds-tw-card
		></span
	>
	<span slot="col-3">
		<ds-tw-card
			><span slot="header">Blog title 3</span><span slot="body"
				>Body 3 <ds-tw-button link="/blog/3">Read</ds-tw-button></span
			></ds-tw-card
		></span
	>
</ds-tw-grid>
