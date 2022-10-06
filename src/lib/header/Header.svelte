<script>
	import { tweened } from 'svelte/motion';
	import { currentSection } from '../stores';
	import profile from './profile-pic.png';

	const headerTranslate = tweened(0, { duration: 200 });
	let scrollY = 0;
	let prevScrollY = 0;
	let showBurgerMenu = false;

	$: {
		if (scrollY > 1 && scrollY > prevScrollY) {
			showBurgerMenu = false;
			headerTranslate.set(-4.5);
		} else {
			headerTranslate.set(0);
		}
		prevScrollY = scrollY;
	}

	const toggleBurgerMenu = () => {
		showBurgerMenu = !showBurgerMenu;
	};
</script>

<svelte:window bind:scrollY />
<header
	id="header"
	class="fixed top-0 left-0 z-50 w-screen h-auto m-0 p-0 flex justify-center"
	class:on-scroll={scrollY > 25}
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
			<img src={profile} alt="Profile" class="w-12 h-12 object-contain" />
			<div>Pankaj Arora</div>
		</a>

		<ul id="menu" class="menu" class:show-menu={showBurgerMenu}>
			<li class="menu-item" class:active={$currentSection === 'about'}>
				<a href="/#about">About</a>
			</li>
			<li class="menu-item" class:active={$currentSection === 'skills'}>
				<a href="/#skills">Skills</a>
			</li>
			<li class="menu-item" class:active={$currentSection === 'projects'}>
				<a href="/#projects">Projects</a>
			</li>
			<li class="menu-item" class:active={$currentSection === 'contact'}>
				<a href="/#contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	#header {
		font-family: inherit;
		font-weight: 600;
		font-size: 1.5rem;
		color: var(--text-color);
	}

	#header a {
		font-family: inherit;
		font-weight: 600;
		font-size: 1rem;
		color: var(--text-color);
	}

	.on-scroll {
		background: var(--background-without-opacity);
	}

	.menu {
		position: fixed;
		top: -100%;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background: var(--background-with-opacity);
		transition: all 0.4s ease-in-out;
		padding: 1rem 0;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.menu.show-menu {
		top: 0;
		height: auto;
	}

	.menu-item {
		position: relative;
		height: 100%;
		margin: 0 1rem;
		display: flex;
		align-items: center;
		padding: 1rem 0;
	}

	@media only screen and (min-width: 48rem) {
		.menu {
			position: relative;
			top: 0;
			width: auto;
			height: 100%;
			padding: 0rem;
			margin-left: auto;
			background: none;
			box-shadow: none;

			display: flex;
			flex-direction: row;
			column-gap: 2rem;
			margin: 0 auto;
		}

    .menu-item.active::after {
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
		background-color: var(--text-color);
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
</style>
