<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
		class?: string;
	};

	let { children, class: classes = '' }: Props = $props();
</script>

<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 {classes}">
	{#if children}{@render children()}{/if}
</div>
