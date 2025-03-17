<script>
	import { ABOUT_IMAGE, PROFILE_NAME, ABOUT_DESCRIPTION } from '../variables';
	import downloadPic from './download.svg';
	const resume = new URL('/resume.pdf', import.meta.url).href;
</script>

<div class="flex flex-col gap-5 items-center">
	<img
		src={ABOUT_IMAGE}
		alt="profile-pic"
		class="w-44 h-44 rounded-full shadow-inner shadow-violet-900 mix-blend-luminosity hover:bg-violet-300 hover:mix-blend-normal"
	/>
	<p
		class="font-mono text-center text-2xl sm:text-3xl font-bold tracking-wider"
		style="color: var(--text-secondary);"
	>
		{PROFILE_NAME}
	</p>
	<div class="font-mono text-sm sm:text-md text-center">
		<p>
			{#each ABOUT_DESCRIPTION as description}
				{#if description.newline}
					<br />
				{:else if description.link}
					<a href={description.link} class="underline" target="_blank">{description.text}</a>
				{:else}
					{description.text}
				{/if}
			{/each}
		</p>
	</div>
	<a
		href={resume}
		alt="resume"
		target="_blank"
		class="px-6 py-3 rounded-full bg-violet-300 shadow-violet-900 shadow-sm hover:shadow-inner"
	>
		<span class="font-serif text-sm sm:text-md">Download Resume</span>
		<img src={downloadPic} alt="download-pic" class="inline-block w-4 h-4 ml-2" />
	</a>
</div>

<style>
</style>
