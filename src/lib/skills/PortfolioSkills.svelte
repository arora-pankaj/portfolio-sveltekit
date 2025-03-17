<script lang="ts">
	import { SKILLS } from '../variables';
</script>

<div>
	<div
		class="font-mono text-center text-2xl sm:text-3xl font-bold tracking-wider mb-4 sm:mb-6 md:mb-8"
		style="color: var(--text-secondary);"
	>
		Skills
	</div>

	<div id="skills-matrix" class="mx-auto grid gap-12">
		{#each SKILLS as skill}
			<img src={skill.icon} title={skill.name} alt={skill.name} />
		{/each}
	</div>
</div>

<style>
	#skills-matrix {
		--skill-cols: 2;
		--skill-width: 36px;
		min-width: calc((1 + var(--skill-cols)) * var(--skill-width));
		grid-template-columns: repeat(auto-fit, var(--skill-width));
	}

	#skills-matrix img {
		width: var(--skill-width);
	}

	@media only screen and (min-width: 360px) {
		#skills-matrix {
			--skill-cols: 3;
			--skill-width: 48px;
		}
	}

	@media only screen and (min-width: 500px) {
		#skills-matrix {
			--skill-cols: 4;
			--skill-width: 64px;
		}
	}

	@media only screen and (min-width: 640px) {
		#skills-matrix {
			--skill-cols: 4;
			--skill-width: 80px;
		}
	}

	@media only screen and (min-width: 840px) {
		#skills-matrix {
			--skill-cols: 4;
			--skill-width: 96px;
		}
	}

	@media only screen and (min-width: 1200px) {
		#skills-matrix {
			--skill-cols: 6;
			--skill-width: 100px;
		}
	}

	@media only screen and (min-width: 1300px) {
		#skills-matrix {
			--skill-cols: 7;
			--skill-width: 112px;
		}
	}
</style>
