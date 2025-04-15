<script lang="ts">
	import { page } from '$app/state';

	const error = page.error;
</script>

{#if error}
	<div>
		<h1>Error</h1>
		<p>{error?.message}</p>

		<a href="/">Go to home</a>
	</div>
{/if}

<style>
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	a {
		text-decoration: none;
		border: 1px solid var(--accent-primary);
		border-radius: 0.25rem;
		padding: 0.5rem 1rem;
		background-color: transparent;
		color: var(--accent-text-color);

		&:hover {
			background-color: var(--accent-primary);
			color: var(--text-tertiary);
		}
	}
</style>
