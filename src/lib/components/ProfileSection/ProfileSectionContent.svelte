<script lang="ts">
	import type { SessionInfo } from '$lib/data/types';
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	type Props = {
		sessionInfo: SessionInfo;
	};

	let { sessionInfo }: Props = $props();

	let isMenuOpen = $state(false);
</script>

{#if sessionInfo.loggedIn}
	<!-- Profile dropdown -->
	<div class="relative ml-3">
		<div>
			<button
				type="button"
				class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
				id="user-menu-button"
				aria-expanded="false"
				aria-haspopup="true"
				onclick={() => {
					isMenuOpen = !isMenuOpen;
				}}
			>
				<span class="absolute -inset-1.5"></span>
				<span class="sr-only">Open user menu</span>
				<span
					class="size-8 bg-indigo-500 rounded-full grid place-items-center font-bold text-white text-lg"
				>
					{sessionInfo.username.substring(0, 1).toLocaleUpperCase()}
				</span>
			</button>
		</div>

		{#if isMenuOpen}
			<div
				class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
				role="menu"
				aria-orientation="vertical"
				aria-labelledby="user-menu-button"
				tabindex="-1"
				transition:fly={{ duration: 75, y: '-0.5rem' }}
			>
				<form method="post" action="/api/log-out">
					<button
						class="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100 focus-visible:bg-gray-100"
						role="menuitem"
						tabindex="-1"
						id="user-menu-item-0"
					>
						Log out
					</button>
				</form>
			</div>
		{/if}
	</div>
{:else}
	<a
		href="/log-in"
		class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
	>
		Log in
	</a>
{/if}
