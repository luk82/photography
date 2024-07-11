<script>
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-pricing/ds-tw-pricing.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-membership/ds-tw-membership.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-band/ds-tw-band.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-feature/ds-tw-feature.js';
</script>

<svelte:head>
	<title>Pricing</title>
	<meta name="description" content="About this app" />
</svelte:head>

<ds-tw-band variant="primary" height="400" to-center="" bgImage="images/banner3.jpg" skew=""
	><div slot="header" />
	<div slot="body">
		<p />
	</div>
</ds-tw-band>

<ds-tw-pricing variant="primary">
	<span slot="title">Packages</span>
	<span slot="body">
		<p>
			At LC Photography, we offer three luxurious wedding package options - Silver, Gold, and
			Platinum - each tailored to meet your unique needs and desires, with varying levels of
			coverage, editing, and print products to ensure every moment is captured and cherished.
		</p>

		<p>
			Photography Pre wedding Post wedding Albums Mini albums Digital album High resolution photos.
		</p>
	</span>

	<span slot="header">Subscription</span>
	<span slot="header-bold">Plans</span>
	<span slot="sub-header">Choose</span>

	<!-- <span slot="membership-1">
		<ds-tw-membership
			variant="secondary"
			listElements="1 user;Property Management;Newsletter signup;Image upload|Excluded"
		>
			<span slot="kicker">Package 1</span>
			<span slot="price">£20</span>
			<span slot="price-footer">per month</span>
			<span slot="footer">
				<ds-tw-button variant="secondary-2">Buy</ds-tw-button>
			</span>
		</ds-tw-membership></span
	>

	<span slot="membership-2">
		<ds-tw-membership
			variant="secondary"
			highlighted
			listElements="5 users;Property Management;Newsletter signup;Image upload|Excluded"
		>
			<span slot="kicker">Package 2</span>
			<span slot="price">£30</span>
			<span slot="price-footer">per month</span>
			<span slot="footer"><ds-tw-button variant="secondary-2">Buy</ds-tw-button></span>
		</ds-tw-membership>
	</span>
	<span slot="membership-3"
		><ds-tw-membership
			variant="secondary"
			listElements="10 users;Property Management;Newsletter signup;Image upload|Excluded"
		>
			<span slot="kicker">Package 3</span>
			<span slot="price">£50</span>
			<span slot="price-footer">per month</span>
			<span slot="footer"><ds-tw-button variant="secondary-2">Buy</ds-tw-button></span>
		</ds-tw-membership></span
	> -->

	<span slot="memberships">
		<ds-tw-membership
			hideCta
			listElements="Pre-wedding planning meeting in person or on-line; Coverage, from 2 hours pre-service to 2 hours post first dance;
Selection of edited images;
Online password protected image gallery;
High resolution photos;
Wedding albums from £199;
Engagement session from £300;
+£100 per extra hour"
		>
			<span slot="title">Silver</span>
			<span slot="body" />
			<span slot="list-title">What’s included</span>
			<span slot="price">£599</span>
			<span slot="price-footer" />
		</ds-tw-membership>
		<ds-tw-membership
			hideCta
			listElements="Services included in silver package;
Additional hour extra coverage pre or post service;
Wedding album - 30 pages A4;
One 12x10 framed print;
Engagement session from £300;
+£100 per extra hour"
		>
			<span slot="title">Gold</span>
			<span slot="body" />
			<span slot="list-title">What’s included</span>
			<span slot="price">£899</span>
		</ds-tw-membership>
		<ds-tw-membership
			hideCta
			currency=""
			listElements="Services included in gold package;
Engagement session;
Additional hour of coverage pre or post service;
Additional copy of a wedding album;
+£100 per extra hour"
		>
			<span slot="title">Platinum</span>
			<span slot="body" />
			<span slot="list-title">What's included</span>
			<span slot="price">£1,299</span>
			<span slot="price-footer" />
		</ds-tw-membership>
	</span>
</ds-tw-pricing>

<ds-tw-feature image="images/banner2.jpg" variant="primary" skew=""
	><span slot="kicker">Sint amet magna</span>
	<span slot="header"> Ullamco officia commodo cupidatat sint ad.</span>
	<span slot="body">
		Sint laborum id incididunt fugiat ipsum incididunt excepteur nostrud dolore est consectetur enim
		excepteur. Deserunt veniam magna voluptate in voluptate. Ad ut sint tempor ea quis deserunt.
		Labore irure incididunt laboris ex do eu dolor mollit fugiat adipisicing minim.
		<div>
			<br />
			<ds-tw-button variant="primary-2" link="#" hasarrow=""> Sint laborum </ds-tw-button>
		</div>
	</span>
	<span slot="buttons">
		<ds-tw-button link="#"> Enquire </ds-tw-button>
	</span>
</ds-tw-feature>
