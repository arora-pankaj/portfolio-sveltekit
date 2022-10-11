<script>
	import profilePic from './profile-pic.png';
	import downloadPic from './download.svg';
	const resume = new URL('/resume.pdf', import.meta.url).href;
</script>

<div class="flex flex-col gap-5 items-center">
	<img
		src={profilePic}
		alt="profile-pic"
		class="w-44 h-44 rounded-full shadow-inner shadow-violet-900 mix-blend-luminosity hover:bg-violet-300 hover:mix-blend-normal"
	/>
	<p
		class="font-mono text-center text-2xl sm:text-3xl font-bold tracking-wider"
		style="color: var(--text-secondary);"
	>
		Pankaj Arora
	</p>
	<div class="font-mono text-sm sm:text-md text-center">
		<p>
			Engineer who cares deeply about automation and user experience.
			<br /> <br />
			I'm a developer specializing in building elegant and performing financial applications.
			<br /> <br />
			I've had the privilege of working across many different financial products as part of
			<a href="https://iongroup.com/markets/" class="underline" target="_blank">ION Group</a>. My
			main focus these days is building a SaaS platform providing leading covenant research for the
			credit markets across the globe.
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
