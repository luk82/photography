<script>
	import './styles.css';
	// import '$lib/styles.css';

	import '@luk82/ds-lit-tailwind/src/components/ds-tw-footer/ds-tw-footer.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-menu/ds-tw-menu.js';

	let menus = [
		{ name: 'Home', href: '/' },
		// { name: 'Blog', href: '/blog' },
		{ name: 'Pricing', href: '/pricing' },
		{ name: 'Contact', href: '/contact' }
	];

	let footerLinks = [
		{
			name: '',
			links: menus
		}
	];
</script>

<ds-tw-menu logoLink="/" links={menus}>
	<span slot="logo"
		><img src="images/logo.svg" width="75" alt="LC Photography" /><span class="white" /></span
	></ds-tw-menu
>

<main>
	<slot />
</main>

<ds-tw-footer menu={footerLinks} horizontal variant="secondary">
	<!-- <span slot="logo"
		><img src="images/logo.svg" width="75" alt="LC Photography" /><span class="white" /></span
	> -->
	<span slot="header" />
	<span slot="footnote">© 2026 LC Photography.</span></ds-tw-footer
>
