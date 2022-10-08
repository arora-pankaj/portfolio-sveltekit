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

<div class="grid grid-cols-4 grid-flow-row gap-8">
	<img src={java} title="Java" alt="Java icon" />
	<img src={python} title="Python" alt="Python icon" />
	<img src={jenkins} title="Jenkins" alt="Jenkins icon" />
	<img src={docker} title="Docker" alt="Docker icon" />
	<img src={html} title="HTML" alt="HTML icon" />
	<img src={css} title="CSS"  alt="CSS icon" />
	<img src={typescript} title="TypeScript" alt="TypeScript icon" />
	<img src={ansible} title="Ansible" alt="Ansible icon" />
</div>

<style>
	img {
		@apply w-36;
		@apply h-36;
	}
</style>
