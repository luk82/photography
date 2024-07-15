<script>
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-footer/ds-tw-footer.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-menu/ds-tw-menu.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-toast/ds-tw-toast.js';
	import './styles.css';

	let menus = [
		{ name: 'Home', href: '/' },
		{ name: 'Packages', href: '/pricing' },
		{ name: 'Contact', href: '/contact' }
	];

	let footerLinks = [
		{
			name: '',
			links: [
				...menus,
				{ name: 'Kettering Wedding Photography', href: '/kettering-wedding-photography' },
				{ name: 'Corby Wedding Photography', href: '/corby-wedding-photography' },
				{ name: 'Northampton Wedding Photography', href: '/northampton-wedding-photography' }
			]
		}
	];
</script>

<ds-tw-toast />

<ds-tw-menu logoLink="/" links={menus}>
	<span slot="logo"
		><img src="images/logo.png" width="125" alt="LC Photography" /><span class="white" /></span
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
	<span slot="footnote">© 2024 LC Photography.</span></ds-tw-footer
>
