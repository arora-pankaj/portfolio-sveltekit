<script>
	import ansible from './ansible.svg';
	import css from './css3.svg';
	import docker from './docker.svg';
	import html from './html5.svg';
	import java from './java.svg';
	import jenkins from './jenkins.svg';
	import python from './python.svg';
	import typescript from './typescript.svg';
</script>

<div class="font-mono text-center text-2xl sm:text-3xl font-bold tracking-wider text-center mb-4">
	Skills
</div>
<div class="skill-matrix">
	<img src={java} title="Java" alt="Java icon" />
	<img src={python} title="Python" alt="Python icon" />
	<img src={jenkins} title="Jenkins" alt="Jenkins icon" />
	<img src={docker} title="Docker" alt="Docker icon" />
	<img src={html} title="HTML" alt="HTML icon" />
	<img src={css} title="CSS" alt="CSS icon" />
	<img src={typescript} title="TypeScript" alt="TypeScript icon" />
	<img src={ansible} title="Ansible" alt="Ansible icon" />
</div>

<style>
	.skill-matrix {
		display: grid;
		gap: 4rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		grid-row: auto;
	}
	.skill-matrix img {
		height: 5rem;
		width: 5rem;
	}

	@media (min-width: 768px) {
		.skill-matrix {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}

		.skill-matrix img {
			height: 10rem;
			width: 10rem;
		}
	}
</style>
