<script lang="ts">
	import '../app.css';
	import PortfolioHeader from '../lib/header/PortfolioHeader.svelte';
	import InViewContainer from '../lib/InViewContainer.svelte';
	import SlidingTextBlocks from '../lib/SlidingTextBlocks.svelte';
	import AppearingBlock from '../lib/AppearingBlock.svelte';
	import PortfolioSectionCard from '../lib/PortfolioSectionCard.svelte';
	import PortfolioContactMe from '../lib/contact/PortfolioContactMe.svelte';
	import { currentSection } from '../lib/stores.js';

	const updateCurrentSection = (event: { detail: { inView: boolean } }, section: string) => {
		if (event.detail.inView && section) {
			currentSection.set(section);
		}
	};
</script>

<svelte:head>
	<title>Pankaj Arora</title>
	<meta name="description" content="Pankaj Arora Dev Portfolio" />
</svelte:head>

<PortfolioHeader />

<main class="relative max-w-xl mx-auto my-6 min-h-screen">
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
	</section>

	<section id="about">
		<PortfolioSectionCard on:InViewUpdate={(e) => updateCurrentSection(e, 'about')}>
			<p>
				Front-end developer who cares deeply about user experience. Serious passion for UI design
				and new technologies.
			</p>
			<br />
			<p>
				I'm a developer based in Brisbane, AU specializing in building elegant and performing web
				applications. Currently, I'm focused on building exceptional JavaScript A/B tests for
				high-profile brands at Conversion Kings.
			</p>
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
			<PortfolioContactMe />
		</PortfolioSectionCard>
	</section>
</main>

<footer class="max-w-xl mx-auto text-center leading-tight text-xs my-1 md:my-3">
	<div>Designed & Built by Pankaj Arora</div>
	<div>© Copyright 2022. All Rights Reserved</div>
</footer>

<style>
	main section {
		width: 100%;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	/* .down-arrow {
		border: solid var(--background-primary);
		border-width: 0 3px 3px 0;
		display: inline-block;
		padding: 3px;
		transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
	} */

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
