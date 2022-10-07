<script>
	import InViewContainer from '../lib/InViewContainer.svelte';
	import SlidingTextBlocks from '../lib/SlidingTextBlocks.svelte';
	import AppearingBlock from '../lib/AppearingBlock.svelte';
	import PortfolioSectionCard from './PortfolioSectionCard.svelte';
	import PortfolioContactMe from './PortfolioContactMe.svelte';
	import { currentSection } from '../lib/stores.js';

	/** @type {import('./$types').PageData} */
	export let status;
	/** @type {import('./$types').ActionData} */
	export let form;

	const updateCurrentSection = (/** @type {any} */ event, /** @type {string} */ section) => {
		if (event.detail.inView && section) {
			currentSection.set(section);
		}
	};
</script>

<svelte:head>
	<title>Pankaj Arora</title>
	<meta name="description" content="Pankaj Arora Dev Portfolio" />
</svelte:head>

<main class="relative">
	<section id="page-top">
		<InViewContainer on:InViewUpdate={(e) => updateCurrentSection(e, 'page-top')} />
		<div class="intro-title">Hey there!</div>
		<div class="intro-title">This is Pankaj Arora</div>
		<div class="intro-subtitle">
			<SlidingTextBlocks
				slidingInternal={100}
				textBlocks={['A Full Stack Engineer', 'A Java Developer', 'A DevOps Engineer', '....']}
			/>
		</div>
		<a class="down-arrow" href="#about" style="margin-top: 4em;"><i /></a>
	</section>

	<section id="about">
		<PortfolioSectionCard on:InViewUpdate={(e) => updateCurrentSection(e, 'about')}>
			<h1>
				02 Another Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis commodi
				nobis eligendi nemo, pariatur laudantium dolore delectus, ipsum consequuntur eius
				repellendus, cumque laborum. Modi vitae itaque minima corporis doloribus.
			</h1>
		</PortfolioSectionCard>
	</section>

	<section id="skills">
		<PortfolioSectionCard on:InViewUpdate={(e) => updateCurrentSection(e, 'skills')}>
			<h1>
				03 Animate Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis commodi
				nobis eligendi nemo, pariatur laudantium dolore delectus, ipsum consequuntur eius
				repellendus, cumque laborum. Modi vitae itaque minima corporis doloribus.
			</h1>
		</PortfolioSectionCard>
	</section>

	<section id="projects">
		<AppearingBlock
			blockColor={'#149'}
			on:InViewUpdate={(e) => updateCurrentSection(e, 'projects')}
		>
			<h1>
				04 Plain Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis commodi
				nobis eligendi nemo, pariatur laudantium dolore delectus, ipsum consequuntur eius
				repellendus, cumque laborum. Modi vitae itaque minima corporis doloribus.
			</h1>
		</AppearingBlock>
	</section>

	<section id="contact">
		<PortfolioSectionCard on:InViewUpdate={(e) => updateCurrentSection(e, 'contact')}>
			<PortfolioContactMe {form} {status} />
		</PortfolioSectionCard>
	</section>

	<div
		class="relative flex flex-row h-16 z-10 justify-center items-center md:fixed md:top-0 md:right-8 md:flex-col h-screen"
	>
		<a href="#1" class="m-2 rounded-2xl shadow">
			<img src="favicon.png" alt="profile-icon" class="h-8 object-contain" />
		</a>
		<a href="#2" class="m-2 rounded-2xl shadow">
			<img src="favicon.png" alt="profile-icon" class="h-8 object-contain" />
		</a>
		<a href="#3" class="m-2 rounded-2xl shadow">
			<img src="favicon.png" alt="profile-icon" class="h-8 object-contain" />
		</a>
		<a href="#4" class="m-2 rounded-2xl shadow">
			<img src="favicon.png" alt="profile-icon" class="h-8 object-contain" />
		</a>
	</div>
</main>

<style>
	main section {
		width: 100%;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.down-arrow {
		margin-top: 1em;
		border: 2px solid var(--accent-color);
		border-radius: 20px;
		padding: 15px 10px 17px 10px;
	}

	.down-arrow i {
		border: solid var(--background-primary);
		border-width: 0 3px 3px 0;
		display: inline-block;
		padding: 3px;
		transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
	}

	.intro-title {
		font-family: 'Brush Script MT', Courier, sans-serif;
		font-size: 3em;
		margin: 0.5em auto;
	}

	.intro-subtitle {
		font-family: 'Courier New', Courier, monospace;
		font-size: 1.2em;
	}
</style>
