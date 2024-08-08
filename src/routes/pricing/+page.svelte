<script>
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-pricing/ds-tw-pricing.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-membership/ds-tw-membership.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-band/ds-tw-band.js';
	import '@luk82/ds-lit-tailwind/src/components/ds-tw-feature/ds-tw-feature.js';

	const sliderImagesArray = [
		'images/wedding-photography-corby.jpg',
		'images/image.jpg',
		'images/pre-wedding-session.jpg'
	];
</script>

<svelte:head>
	<title>Pricing</title>
	<meta name="description" content="Wedding Photogrraphy" />
</svelte:head>

<ds-tw-band variant="primary" height="450" to-center="" bgImage="images/slider-1.jpg" skew=""
	><div slot="header" />
	<div slot="body">
		<p />
	</div>
</ds-tw-band>

<ds-tw-pricing variant="primary">
	<span slot="title">Wedding Photograpgy Packages</span>
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

<ds-tw-feature image={sliderImagesArray} variant="primary"
	><span slot="kicker">Capture the Magic Before the Big Day</span>
	<span slot="header"> Discover the Charm and Intimacy of Pre-Wedding Photography Sessions</span>
	<span slot="body">
		<p>
			Pre-wedding sessions, also known as engagement shoots, offer couples a unique opportunity to
			capture their love story before the big day. These sessions are a relaxed and enjoyable way to
			get comfortable in front of the camera, allowing you to showcase your personalities and
			relationship in a more informal setting. Our experienced photographers will guide you through
			various poses and locations, ensuring that each moment is beautifully captured. Whether you
			prefer a romantic sunset at the beach, a stroll through a picturesque park, or an urban
			adventure in the city, we tailor each session to reflect your unique style and love story.
		</p>

		<p>
			During a pre-wedding session, we focus on capturing candid moments and genuine emotions that
			highlight the bond between you and your partner. These photos not only serve as a beautiful
			memento but also provide a great opportunity to experiment with different looks and poses that
			you might want to incorporate on your wedding day. The images from your pre-wedding session
			can be used for save-the-dates, wedding invitations, or as decor at your wedding reception.
			Our goal is to create a fun and memorable experience that results in stunning photos you'll
			cherish forever, setting the perfect tone for your upcoming nuptials.
		</p>
		<div>
			<br />
			<ds-tw-button variant="primary-2" link="#" hasarrow="" />
		</div>
	</span>
	<span slot="buttons">
		<ds-tw-button link="#"> Enquire </ds-tw-button>
	</span>
</ds-tw-feature>
