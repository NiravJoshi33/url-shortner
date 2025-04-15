<script lang="ts">
	import Icon from '@iconify/svelte';
	import UrlBox from '$lib/components/url-box.svelte';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<section class="hero">
	<h1>Link Shortner</h1>
	<form method="post">
		<input type="text" name="url" placeholder="https://example.com" required />
		<button type="submit" class="shorten-button">
			<span>Shorten</span>
			<Icon icon="mdi:arrow-right" />
		</button>
	</form>

	{#if form?.data?.shortUrl}
		<UrlBox url={form.data.shortUrl} />
	{/if}
</section>

<style>
	.hero {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		padding: 2rem;
		text-align: center;
	}

	.hero h1 {
		font-size: clamp(2rem, 5vw + 1rem, 4rem);
		font-weight: 800;
		margin-bottom: 1em;
		color: var(--text-secondary);
	}

	form {
		display: flex;
		gap: 0.5rem;
		width: 100%;
		max-width: 500px;
	}

	input[type='text'] {
		flex-grow: 1;
		padding: 0.8rem 1rem;
		border: 1px solid var(--text-secondary);
		border-radius: 4px;
		background-color: var(--bg-primary);
		color: var(--text-primary);
		font-size: 1rem;
	}

	input[type='text']::placeholder {
		color: var(--text-secondary);
		opacity: 0.7;
	}

	.shorten-button {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.8rem 1.5rem;
		border: none;
		border-radius: 4px;
		background-color: var(--accent-primary);
		color: var(--text-tertiary);
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		transition: background-color 0.2s ease-in-out;
	}

	.shorten-button:hover,
	.shorten-button:focus {
		background-color: var(--accent-secondary);
	}

	.shorten-button span {
		line-height: 1;
	}

	.shorten-button :global(svg) {
		width: 1.2em;
		height: 1.2em;
		vertical-align: middle;
	}
</style>
