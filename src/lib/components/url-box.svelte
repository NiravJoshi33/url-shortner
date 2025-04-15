<script lang="ts">
	import Icon from '@iconify/svelte';

	export let url: string;
	let copied = false;

	async function copyUrl() {
		try {
			await navigator.clipboard.writeText(url);
			copied = true;
			setTimeout(() => (copied = false), 2000); // Reset copied state after 2 seconds
		} catch (err) {
			console.error('Failed to copy: ', err);
			alert('Failed to copy URL to clipboard.');
		}
	}

	function gotoUrl() {
		window.open(url, '_blank', 'noopener,noreferrer');
	}
</script>

<div class="url-box">
	<span class="url-text" title={url}>{url}</span>
	<div class="buttons">
		<button on:click={copyUrl} title="Copy URL">
			{#if copied}
				<Icon icon="mdi:check" width="18" height="18" />
			{:else}
				<Icon icon="mdi:content-copy" width="18" height="18" />
			{/if}
		</button>
		<button on:click={gotoUrl} title="Go to URL">
			<Icon icon="mdi:open-in-new" width="18" height="18" />
		</button>
	</div>
</div>

<style>
	.url-box {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 8px 12px;
		border: 1px solid var(--dark-celadon);
		border-radius: 4px;
		background-color: var(--bg-primary);
		font-family: sans-serif;
		font-size: 1.2em;
		gap: 10px;
		overflow: hidden; /* Ensure content doesn't overflow */
		margin-top: 2em;
		margin-bottom: 1rem;
	}

	.url-text {
		flex-grow: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 0.9em;
		color: var(--text-secondary);
	}

	.buttons {
		display: flex;
		gap: 5px;
		flex-shrink: 0; /* Prevent buttons from shrinking */
	}

	button {
		background: none;
		border: none;
		padding: 4px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--text-secondary);
		border-radius: 3px;
		transition: background-color 0.2s ease;
	}

	button:hover {
		background-color: var(--dark-celadon);
		color: var(--text-primary);
	}

	button:active {
		background-color: #ddd;
	}
</style>
