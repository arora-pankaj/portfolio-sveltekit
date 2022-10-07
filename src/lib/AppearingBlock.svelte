<script>
	import InViewContainer from './InViewContainer.svelte';
	export let blockColor = '#222';
	$: cssVars = `--appearing-block-color:${blockColor};`;
</script>

<InViewContainer on:InViewUpdate>
	<div class="appearing-block" slot="InView" style={cssVars}>
		<slot />
		<div class="disappearing-block" style={cssVars} />
	</div>
</InViewContainer>

<style>
	.appearing-block {
		display: block;
		background-color: var(--appearing-block-color);
		animation: block-appear 0.01s linear 0.1s 1 forwards normal;
		position: relative;
	}

	.disappearing-block {
		content: '';
		top: 0;
		left: 0;
		position: absolute;
		width: 0%;
		height: 100%;
		background-color: var(--appearing-block-color);
		animation: block-disappear 1s cubic-bezier(0.19, 1, 0.22, 1) 0s 1 forwards normal;
	}

	@keyframes block-appear {
		0% {
			background-color: var(--appearing-block-color);
		}
		10% {
			background-color: var(--appearing-block-color);
		}
		100% {
			background-color: transparent;
		}
	}

	@keyframes block-disappear {
		0% {
			left: 0;
			width: 0%;
		}
		10% {
			left: 0%;
			width: 100%;
		}
		100% {
			left: 100%;
			width: 0%;
		}
	}
</style>
