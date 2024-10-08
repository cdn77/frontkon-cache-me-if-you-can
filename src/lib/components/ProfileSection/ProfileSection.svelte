<script lang="ts">
	import type { SessionInfo } from '$lib/data/types';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import ProfileSectionContent from './ProfileSectionContent.svelte';

	let sessionInfo = $state<SessionInfo | undefined>();

	onMount(async () => {
		const response = await fetch('/api/me');
		sessionInfo = response.ok ? await response.json() : undefined;
	});
</script>

{#if sessionInfo !== undefined}
	<span in:fade={{ duration: 75 }}>
		<ProfileSectionContent {sessionInfo} />
	</span>
{/if}
