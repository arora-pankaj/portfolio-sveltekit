<script lang="ts">
	import '../app.css';
	import PortfolioHeader from '../lib/header/PortfolioHeader.svelte';
	import InViewContainer from '../lib/InViewContainer.svelte';
	import SlidingTextBlocks from '../lib/SlidingTextBlocks.svelte';
	import AppearingBlock from '../lib/AppearingBlock.svelte';
	import PortfolioSectionCard from '../lib/PortfolioSectionCard.svelte';
	import PortfolioAbout from '../lib/about/PortfolioAbout.svelte';
	import PortfolioSkills from '../lib/skills/PortfolioSkills.svelte';
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
		<div class="font-mono text-sm sm:text-xl">Hey there! This is</div>
		<div class="font-arizonia text-4xl sm:text-6xl mt-4 mb-12">Pankaj Arora</div>
		<div class="font-mono text-xs sm:text-lg">
			<SlidingTextBlocks
				slidingInternal={100}
				textBlocks={['A Full Stack Engineer', 'A Java Developer', 'A DevOps Engineer']}
			/>
		</div>
	</section>

	<section id="about">
		<PortfolioSectionCard on:InViewUpdate={(e) => updateCurrentSection(e, 'about')}>
			<PortfolioAbout />
		</PortfolioSectionCard>
	</section>

	<section id="skills">
		<PortfolioSectionCard on:InViewUpdate={(e) => updateCurrentSection(e, 'skills')}>
			<PortfolioSkills />
		</PortfolioSectionCard>
	</section>

	<section id="work">
		<AppearingBlock blockColor={'#149'} on:InViewUpdate={(e) => updateCurrentSection(e, 'work')}>
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
</style>
