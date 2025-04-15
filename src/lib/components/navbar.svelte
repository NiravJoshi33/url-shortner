<script>
	import Icon from '@iconify/svelte';
	import { siteInfo } from '$lib/data';
	const iconSize = 32;
</script>

<nav>
	<div class="nav-content">
		<div class="nav-links">
			<a
				href={siteInfo.projectGitHub}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub Project"
			>
				<Icon icon="mdi:github" width={iconSize} height={iconSize} />
			</a>
			<a
				href={siteInfo.myWebsite}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Personal Website"
			>
				<Icon icon="mdi:web" width={iconSize} height={iconSize} />
			</a>
		</div>
	</div>
</nav>

<style>
	nav {
		background-color: var(--bg-primary);
		padding: 0.5rem 1rem;
	}

	.nav-content {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		margin: 0 auto;
	}

	.nav-links {
		display: flex;
		gap: 1rem;
	}

	.nav-links a {
		color: var(--text-primary);
		text-decoration: none;
		display: flex;
		align-items: center;
		transition: color 0.2s ease-in-out;
	}

	.nav-links a:hover {
		color: var(--text-secondary);
	}
</style>
