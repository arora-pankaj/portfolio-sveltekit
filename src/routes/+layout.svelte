<script>
	import PortfolioHeader from './PortfolioHeader.svelte';
	import '../app.css';
</script>

<PortfolioHeader />

<div class="max-w-xl mx-auto my-6 min-h-screen">
	<slot />
</div>

<footer class="max-w-xl mx-auto text-center leading-tight text-xs my-1 md:my-3">
	<div>Designed & Built by Pankaj Arora</div>
	<div>© Copyright 2022. All Rights Reserved</div>
</footer>
