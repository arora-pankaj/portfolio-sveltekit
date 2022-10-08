<script>
	import { tweened } from 'svelte/motion';
	import { currentSection } from '../../lib/stores';
	import { socialMediaProfiles } from '../variables';
	import emoji from './hand-wave-emoji.png';
	import downArrow from './down-arrow.svg';

	const headerTranslate = tweened(0, { duration: 200 });
	let scrollY = 0;
	let prevScrollY = 0;
	let showBurgerMenu = false;
	let showSocialProfiles = false;

	$: {
		if (scrollY > 1 && scrollY > prevScrollY) {
			showBurgerMenu = false;
			showSocialProfiles = false;
			headerTranslate.set(-4.5);
		} else {
			headerTranslate.set(0);
		}
		prevScrollY = scrollY;
	}

	const toggleBurgerMenu = () => {
		showBurgerMenu = !showBurgerMenu;
	};

	const toggleSocialProfiles = () => {
		showSocialProfiles = !showSocialProfiles;
	};
</script>

<svelte:window bind:scrollY />
<header
	id="header"
	class="font-mono fixed top-0 left-0 z-50 w-screen h-auto m-0 p-0 flex justify-center"
	style="transform: translateY({$headerTranslate}rem);"
>
	<div
		id="burger"
		class="fixed top-0 left-0 block h-16 w-8 mx-6 cursor-pointer select-none z-50 transition-all md:hidden md:invisible"
		class:active={showBurgerMenu}
		on:click={toggleBurgerMenu}
	>
		<span />
		<span />
		<span />
	</div>

	<nav
		class="flex flex-row items-center justify-between max-w-2xl h-16 m-0 p-0 gap-x-8 md:max-w-4xl md:gap-x-32"
	>
		<a href="#page-top" class="relative flex flex-row items-center justify-center h-full">
			<img src={emoji} alt="Hand wave emoji" class="w-12 h-12 mr-2 object-contain rounded-full" />
			<div>Pankaj Arora</div>
		</a>

		<ul
			id="menu"
			class="fixed -top-full left-0 w-full h-full truncate transition-all flex flex-col justify-center items-center md:relative md:top-0 md:w-auto md:flex-row md:mx-auto"
			class:show-menu={showBurgerMenu}
		>
			<li class:active={$currentSection === 'about'}>
				<a href="/#about">About</a>
			</li>
			<li class:active={$currentSection === 'skills'}>
				<a href="/#skills">Skills</a>
			</li>
			<li class:active={$currentSection === 'work'}>
				<a href="/#work">Work</a>
			</li>
			<li class:active={$currentSection === 'contact'}>
				<a href="/#contact">Contact</a>
			</li>
		</ul>
	</nav>

	<div
		class="fixed h-fit top-0 right-0 z-50 mx-6 mt-3 rounded-full shadow-md md:relative md:mx-3"
		style="background: var(--background-primary);"
	>
		<div
			id="social-profile-arrow"
			class="cursor-pointer select-none transition-all"
			class:active={showSocialProfiles}
			on:click={toggleSocialProfiles}
		>
			<img src={downArrow} alt="Social media profiles" class="w-10 h-10 object-contain" />
		</div>
		<div
			id="social-profiles"
			class="my-3 gap-5 flex flex-col justify-center items-center"
			class:active={showSocialProfiles}
		>
			{#each socialMediaProfiles as profile}
				<a href={profile.url} class="rounded-full" target="_blank">
					<img
						src={profile.icon}
						alt={profile.name}
						class="h-8 w-8 rounded-full"
						style="background-color: {profile.backgroundColor};"
					/>
				</a>
			{/each}
		</div>
	</div>
</header>

<style>
	#header {
		font-weight: 600;
		font-size: 1.5rem;
		color: var(--text-secondary);
	}

	#header a {
		font-weight: 600;
		font-size: 1rem;
		color: var(--text-secondary);
	}

	#menu.show-menu {
		@apply top-0;
		@apply h-auto;
		@apply rounded-b-3xl;
		background: var(--background-primary);
	}

	@media only screen and (min-width: 48rem) {
		#menu li {
			position: relative;
			height: 100%;
			display: flex;
			align-items: flex-end;
			padding: 1rem 0;
			margin: 0 1rem;
		}

		#menu li.active::after {
			--size: 0.25rem;
			content: '';
			width: 100%;
			height: 0;
			position: absolute;
			top: 0;
			border: var(--size) solid transparent;
			border-top: var(--size) solid var(--accent-color);
		}
	}

	#burger span {
		position: absolute;
		display: block;
		right: 0;
		width: 100%;
		height: 0.25rem;
		transform: rotate(0deg);
		background-color: var(--text-secondary);
		transition: 0.25s ease-in-out;
	}

	#burger span:nth-child(1) {
		top: 1.5rem;
	}
	#burger span:nth-child(2) {
		top: 2rem;
	}
	#burger span:nth-child(3) {
		top: 2.5rem;
	}

	#burger.active span:nth-child(1) {
		top: 2rem;
		transform: rotate(135deg);
	}
	#burger.active span:nth-child(2) {
		top: 2rem;
		opacity: 0;
		visibility: hidden;
	}
	#burger.active span:nth-child(3) {
		top: 2rem;
		transform: rotate(-135deg);
	}

	#social-profile-arrow.active {
		transform: rotate(180deg);
	}
	#social-profiles {
		display: none;
	}
	#social-profiles.active {
		display: flex;
	}
</style>
