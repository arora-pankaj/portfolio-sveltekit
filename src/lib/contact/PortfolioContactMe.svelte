<script>
	import { scale } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { enhance } from '$app/forms';
	import { socialMediaProfiles } from '../variables';
	import loading from './loading.svg';
	import checked from './checked.png';

	const STATE_EMPTY = 'empty';
	const STATE_IN_PROGRESS = 'in-progress';
	const STATE_ERROR = 'error';
	const STATE_SUCCESS = 'success';

	let messageFormState = STATE_EMPTY;

	$: {
		if (messageFormState === STATE_ERROR || messageFormState === STATE_SUCCESS) {
			setTimeout(() => (messageFormState = STATE_EMPTY), 4000);
		}
	}
</script>

<div class="flex flex-col gap-2 font-serif" style="color: var(--text-primary);">
	<div
		class="font-mono text-center text-2xl sm:text-3xl font-bold tracking-wider"
		style="color: var(--text-secondary);"
	>
		Get In Touch
	</div>
	<div class="my-2 flex flex-row gap-6 justify-center items-center">
		{#each socialMediaProfiles as profile}
			<a href={profile.url} class="rounded-full" target="_blank">
				<img
					src={profile.icon}
					alt={profile.name}
					class="h-8 w-8 rounded-full shadow-xl hover:shadow-md"
					style="background-color: {profile.backgroundColor};"
				/>
			</a>
		{/each}
	</div>
	<br />
	<div class="text-center text-sm sm:text-md leading-4">
		My inbox is always open. Whether you have a question or just want to say hi, send me a message!
	</div>

	<form
		class="flex flex-col gap-3 mt-4 text-sm sm:text-md"
		method="POST"
		action="?/sendMessage"
		use:enhance={({ form, cancel }) => {
			if (messageFormState !== STATE_EMPTY) {
				cancel();
			}
			messageFormState = STATE_IN_PROGRESS;
			return async ({ result }) => {
				if (result.type === 'error') {
					messageFormState = STATE_ERROR;
					await goto('/#contact');
				} else {
					form.reset();
					messageFormState = STATE_SUCCESS;
					await goto('/#contact');
				}
			};
		}}
	>
		<div class="flex flex-row grow gap-4">
			<div>
				<label for="name">Name</label>
				<input required type="text" name="name" id="name" placeholder="What should I call you?" />
			</div>
			<div>
				<label for="phone">Phone</label>
				<input type="text" name="phone" id="phone" placeholder="(Optional)" />
			</div>
		</div>
		<div>
			<label for="email">Email</label>
			<input
				required
				type="email"
				name="email"
				id="email"
				placeholder="So I can get back to you ;)"
			/>
		</div>
		<div>
			<label for="message">Message</label>
			<textarea name="message" id="message" placeholder="Say hi to me." />
		</div>
		<div class="mt-2 flex flex-row justify-center">
			<button
				type="submit"
				class="py-3 px-6 rounded-full shadow-xl brightness-90 hover:shadow-md"
				style={messageFormState === STATE_SUCCESS
					? 'background-color: var(--background-secondary);'
					: 'background-color: var(--background-primary);'}
			>
				{#if messageFormState === STATE_ERROR}
					<span style="color: var(--accent-color);" in:scale out:scale={{ duration: 0 }}
						>Message not send, try again after some time.</span
					>
				{:else if messageFormState === STATE_SUCCESS}
					<img
						src={checked}
						alt="Success icon"
						class="w-6 h-6 object-contain animate-pulse"
						in:scale
						out:scale={{ duration: 0 }}
					/>
				{:else if messageFormState === STATE_IN_PROGRESS}
					<img
						src={loading}
						alt="Loading icon"
						class="w-6 h-6 object-contain animate-spin"
						in:scale
						out:scale={{ duration: 0 }}
					/>
				{:else}
					<span in:scale out:scale={{ duration: 0 }}>
						Send Message
						<svg
							class="inline-block ml-1"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_9_453)">
								<path
									d="M19.8175 0.182443C19.904 0.269108 19.9632 0.379286 19.9876 0.49929C20.0121 0.619294 20.0007 0.743835 19.955 0.857443L12.6813 19.0412C12.6172 19.2013 12.5101 19.3407 12.3719 19.4439C12.2337 19.5471 12.0697 19.6102 11.898 19.6262C11.7262 19.6423 11.5534 19.6106 11.3985 19.5347C11.2436 19.4589 11.1126 19.3417 11.02 19.1962L7.04751 12.9524L0.803756 8.97994C0.657903 8.88742 0.540446 8.75641 0.464343 8.60135C0.388241 8.4463 0.356453 8.27324 0.372487 8.10126C0.388521 7.92928 0.451754 7.76508 0.555207 7.62676C0.658661 7.48845 0.798314 7.38141 0.958756 7.31744L19.1425 0.0461931C19.2561 0.000458393 19.3807 -0.0108913 19.5007 0.013554C19.6207 0.0379992 19.7308 0.097162 19.8175 0.183693V0.182443ZM8.29501 12.5874L11.7463 18.0099L17.6625 3.21994L8.29501 12.5874ZM16.7788 2.33619L1.98876 8.25244L7.41251 11.7024L16.78 2.33619H16.7788Z"
									fill="var(--accent-color)"
								/>
							</g>
							<defs>
								<clipPath id="clip0_9_453">
									<rect width="20" height="20" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</span>
				{/if}
			</button>
		</div>
	</form>
</div>

<style>
	form div {
		width: 100%;
	}

	form label {
		color: var(--text-primary);
		display: block;
		font-size: 0.75rem;
		text-align: center;
	}

	form input {
		@apply block;
		@apply rounded-xl;
		@apply shadow-md;
		@apply p-3;
		@apply w-full;
		@apply brightness-95;
		color: var(--text-primary);
		background-color: var(--background-primary);
	}

	form textarea {
		@apply block;
		@apply rounded-xl;
		@apply shadow-md;
		@apply p-3;
		@apply w-full;
		@apply brightness-95;
		color: var(--text-primary);
		background-color: var(--background-primary);
	}
</style>
