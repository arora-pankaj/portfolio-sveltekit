<script>
	import AnimationContainer from '../lib/AnimationContainer.svelte';
</script>

<div class="my-1 mx-4 md:mx-0">
	<AnimationContainer
		on:InViewUpdate
		animation_name={'scale-in-center'}
		animation_duration={'0.5s'}
		animation_function={'cubic-bezier(.39,.58,.57,1)'}
		out_animation_name={'scale-out-center'}
		out_animation_duration={'1s'}
		out_animation_function={'ease-out'}
		top={200}
		bottom={200}
	>
		<div class="card rounded-3xl shadow-xl p-8 hover:shadow-lg">
			<slot />
		</div>
	</AnimationContainer>
</div>

<style>
	.card {
		background-color: var(--background-primary);
		color: var(--text-primary);
	}
</style>