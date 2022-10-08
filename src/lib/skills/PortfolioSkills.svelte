<script>
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

	let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />
<div>
	<div class="font-mono text-center text-2xl sm:text-3xl font-bold tracking-wider text-center mb-4">
		Skills
	</div>

	<div id="skills-matrix" class="mx-auto grid gap-12" style="max-width: {innerWidth * 0.7}px;">
		<img src={java} title="Java" alt="Java icon" />
		<img src={python} title="Python" alt="Python icon" />
		<img src={typescript} title="TypeScript" alt="TypeScript icon" />
		<img src={javascript} title="JavaScript" alt="JavaScript icon" />
		<img src={sql} title="RDBMS" alt="RDBMS icon" />
		<img src={mongodb} title="MongoDB" alt="MongoDB icon" />
		<img src={docker} title="Docker" alt="Docker icon" />
		<img src={jenkins} title="Jenkins" alt="Jenkins icon" />
		<img src={html} title="HTML" alt="HTML icon" />
		<img src={css} title="CSS" alt="CSS icon" />
		<img src={ansible} title="Ansible" alt="Ansible icon" />
		<img src={angular} title="AngularJS" alt="AngularJS icon" />
		<img src={svelte} title="Svelte" alt="Svelte icon" />
		<img src={intellij} title="IntelliJ" alt="IntelliJ icon" />
		<img src={vscode} title="VSCode" alt="VSCode icon" />
	</div>
</div>

<style>
	#skills-matrix {
		grid-template-columns: repeat(auto-fit, minmax(3rem, 1fr));
	}

	#skills-matrix img {
		width: 4rem;
	}

	@media (min-width: 640px) {
		#skills-matrix img {
			width: 5rem;
		}
	}

	@media (min-width: 1024px) {
		#skills-matrix img {
			width: 6rem;
		}
	}
</style>
