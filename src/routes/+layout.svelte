<script>
	import Header from '../lib/header/Header.svelte';
	import '../app.css';
</script>

<Header />

<main class="max-w-xl mx-auto my-6 min-h-screen">
	<slot />
</main>

<footer class="max-w-xl mx-auto text-center leading-tight text-xs my-1 md:my-3">
	<div>Designed & Built by Pankaj Arora</div>
	<div>© Copyright 2022. All Rights Reserved</div>
</footer>
