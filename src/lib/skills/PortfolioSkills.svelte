<script lang="ts">
	import angular from './angular.svg';
	import ansible from './ansible.svg';
	import css from './css3.svg';
	import docker from './docker.svg';
	import html from './html5.svg';
	import intellij from './intellij.svg';
	import java from './java.svg';
	import javascript from './javascript.png';
	import jenkins from './jenkins.svg';
	import mongodb from './mongodb.svg';
	import python from './python.svg';
	import sql from './SQL.webp';
	import svelte from './svelte.svg';
	import typescript from './typescript.svg';
	import vscode from './vscode.svg';

	const skills = [
		{ name: 'Java', icon: java },
		{ name: 'Python', icon: python },
		{ name: 'TypeScript', icon: typescript },
		{ name: 'JavaScript', icon: javascript },
		{ name: 'HTML', icon: html },
		{ name: 'CSS', icon: css },
		{ name: 'Svelte', icon: svelte },
		{ name: 'Angular', icon: angular },
		{ name: 'Relational Databases', icon: sql },
		{ name: 'MongoDB', icon: mongodb },
		{ name: 'Docker', icon: docker },
		{ name: 'Jenkins', icon: jenkins },
		{ name: 'Ansible', icon: ansible },
		{ name: 'IntelliJ IDEA', icon: intellij },
		{ name: 'Visual Studio Code', icon: vscode }
	];
</script>

<div>
	<div
		class="font-mono text-center text-2xl sm:text-3xl font-bold tracking-wider mb-4 sm:mb-6 md:mb-8"
		style="color: var(--text-secondary);"
	>
		Skills
	</div>

	<div id="skills-matrix" class="mx-auto grid gap-12">
		{#each skills as skill}
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
