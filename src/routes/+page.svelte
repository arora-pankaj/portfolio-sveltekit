<script>
	import InViewContainer from '../lib/InViewContainer.svelte';
	import SlidingTextBlocks from '../lib/SlidingTextBlocks.svelte';
	import AnimationContainer from '../lib/AnimationContainer.svelte';
	import AppearingTextBlock from '../lib/AppearingTextBlock.svelte';
	import { currentSection } from '../lib/stores.js';

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

<main>
	<section class="container">
		<div id="page-top" class="content">
			<InViewContainer on:viewUpdate={(e) => updateCurrentSection(e, 'page-top')} />
			<div class="intro-title">Hey there!</div>
			<div class="intro-title">This is Pankaj Arora</div>
			<div class="intro-subtitle">
				<SlidingTextBlocks
					slidingInternal={100}
					textBlocks={['A Full Stack Engineer', 'A Java Developer', 'A DevOps Engineer', '....']}
				/>
			</div>
			<a class="down-arrow" href="#about" style="margin-top: 4em;"><i /></a>
		</div>

		<div id="about" class="content">
			<InViewContainer on:viewUpdate={(e) => updateCurrentSection(e, 'about')} />
			<AnimationContainer
				animation_name={'scale-in-center'}
				animation_duration={'0.5s'}
				animation_function={'cubic-bezier(.39,.58,.57,1)'}
				out_animation_name={'scale-out-center'}
				out_animation_duration={'1s'}
				out_animation_function={'ease-out'}
				top={200}
				bottom={200}
			>
				<h1>
					02 Another Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis
					commodi nobis eligendi nemo, pariatur laudantium dolore delectus, ipsum consequuntur eius
					repellendus, cumque laborum. Modi vitae itaque minima corporis doloribus.
				</h1>
			</AnimationContainer>
		</div>

		<div id="skills" class="content">
			<InViewContainer on:viewUpdate={(e) => updateCurrentSection(e, 'skills')} />
			<AnimationContainer
				animation_name={'from-left'}
				animation_duration={'0.01s'}
				animation_function={'linear'}
				animation_delay={'0.5s'}
				animation_fill_mode={'forwards'}
			>
				<h1>
					03 Animate Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis
					commodi nobis eligendi nemo, pariatur laudantium dolore delectus, ipsum consequuntur eius
					repellendus, cumque laborum. Modi vitae itaque minima corporis doloribus.
				</h1>
			</AnimationContainer>
		</div>

		<div id="projects" class="content">
			<InViewContainer on:viewUpdate={(e) => updateCurrentSection(e, 'projects')} />
			<AppearingTextBlock>
				04 Plain Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis commodi
				nobis eligendi nemo, pariatur laudantium dolore delectus, ipsum consequuntur eius
				repellendus, cumque laborum. Modi vitae itaque minima corporis doloribus.
			</AppearingTextBlock>
		</div>

		<div id="contact" class="content">
			<InViewContainer on:viewUpdate={(e) => updateCurrentSection(e, 'contact')} />
			<h1>
				05 Simple Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis commodi
				nobis eligendi nemo, pariatur laudantium dolore delectus, ipsum consequuntur eius
				repellendus, cumque laborum. Modi vitae itaque minima corporis doloribus.
			</h1>
		</div>
	</section>

	<section class="profile-section">
		<a href="#1" class="profile">
			<img src="favicon.png" alt="profile-icon" />
		</a>
		<a href="#2" class="profile">
			<img src="favicon.png" alt="profile-icon" />
		</a>
		<a href="#3" class="profile">
			<img src="favicon.png" alt="profile-icon" />
		</a>
		<a href="#4" class="profile">
			<img src="favicon.png" alt="profile-icon" />
		</a>
	</section>
</main>

<style>
	.container {
		position: relative;
	}

	.content {
		width: 100%;
		height: 100vh;
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
		border: solid var(--text-color);
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

	.profile-section {
		position: relative;
		flex-direction: row;
		height: 4em;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 10;
	}

	.profile-section .profile {
		margin: 0.5em 0.5em;
		border-radius: 1em;
		box-shadow: 0 0 5px var(--heading-color);
	}

	.profile-section img {
		width: 2em;
		height: 2em;
		object-fit: contain;
		display: block;
	}

	@media only screen and (min-width: 48rem) {
		.profile-section {
			position: fixed;
			top: 0;
			right: 2em;
			flex-direction: column;
			height: 100vh;
		}
	}
</style>
