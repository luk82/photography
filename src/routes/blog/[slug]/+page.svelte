<script>
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-contact-form/ds-tw-contact-form.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-band/ds-tw-band.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-card/ds-tw-card.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-grid/ds-tw-grid.js';
</script>

<svelte:head>
	<title>Blog Item</title>
	<meta name="description" content="About this app" />
</svelte:head>

<ds-tw-band variant="primary" height="400" to-center="" bgImage="images/banner3.jpg" skew=""
	><div slot="header" />
	<div slot="body">
		<p />
	</div>
</ds-tw-band>

<ds-tw-grid variant="1-col">
	<ds-tw-card><span slot="header">Blog title 1</span><span slot="body">Body 1</span></ds-tw-card>
</ds-tw-grid>
