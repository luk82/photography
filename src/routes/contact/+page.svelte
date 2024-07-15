<script>
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-contact-form/ds-tw-contact-form.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-band/ds-tw-band.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-cta/ds-tw-cta.js';
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Wedding Photography" />
</svelte:head>

<ds-tw-band variant="primary" height="450" to-center="" bgImage="images/banner3.jpg" skew=""
	><div slot="header" />
	<div slot="body">
		<p />
	</div>
</ds-tw-band>

<ds-tw-cta>
	<span slot="left"
		><p>
			I am passionate about capturing the love and magic of your special day. That's why we'd love
			to hear from you! Whether you're looking for information on our services, pricing, or
			availability, please don't hesitate to reach out. Our team is dedicated to providing
			exceptional customer service and ensuring that every couple feels valued and cared for
			throughout their wedding journey.
		</p>

		<p>
			To get in touch with us, simply fill out the contact form. I'd be delighted to schedule a
			consultation to discuss your vision, answer any questions you may have, and share some of our
			favorite stories from previous weddings. Let's work together to create unforgettable memories
			that you'll treasure for a lifetime!
		</p></span
	>
	<span slot="right">
		<ds-tw-contact-form
			title="Contact Form"
			url="https://hook.eu2.make.com/wg1nk9q1bmwgadg0m127ijuo55bdqeim"
		/></span
	>
</ds-tw-cta>
