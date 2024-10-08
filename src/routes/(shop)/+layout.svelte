<script lang="ts">
	import { page } from '$app/stores';
	import { Container } from '$lib/components/Container';
	import { ProfileSection } from '$lib/components/ProfileSection';
	import type { Snippet } from 'svelte';

	type Props = {
		children?: Snippet;
	};

	let { children }: Props = $props();

	let isMobileMenuOpen = $state(false);
	let isHomePage = $derived($page.url.pathname === '/');
</script>

<nav class="bg-gray-800">
	<Container>
		<div class="relative flex h-16 items-center justify-between">
			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
				<button
					type="button"
					class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
					aria-controls="mobile-menu"
					aria-expanded="false"
					onclick={() => {
						isMobileMenuOpen = !isMobileMenuOpen;
					}}
				>
					<span class="absolute -inset-0.5"></span>
					<span class="sr-only">{isMobileMenuOpen ? 'Close' : 'Open'} main menu</span>
					<svg
						class="h-6 w-6 {isMobileMenuOpen ? 'hidden' : 'block'}"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<svg
						class="h-6 w-6 {isMobileMenuOpen ? 'block' : 'hidden'}"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
						data-slot="icon"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						class="stroke-white"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						><circle cx="11" cy="4" r="2" /><circle cx="18" cy="8" r="2" /><circle
							cx="20"
							cy="16"
							r="2"
						/><path
							d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
						/></svg
					>
				</div>
				<div class="hidden sm:ml-6 sm:block">
					<div class="flex space-x-4">
						<a
							href="/"
							class="rounded-md px-3 py-2 text-sm font-medium {isHomePage
								? 'bg-gray-900 text-white'
								: 'text-gray-300 hover:bg-gray-700 hover:text-white'}"
						>
							Kittens
						</a>
					</div>
				</div>
			</div>
			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<ProfileSection />
			</div>
		</div>
	</Container>

	{#if isMobileMenuOpen}
		<div class="sm:hidden" id="mobile-menu">
			<div class="space-y-1 px-2 pb-3 pt-2">
				<a
					href="/"
					class="block rounded-md px-3 py-2 text-base font-medium {isHomePage
						? 'bg-gray-900 text-white'
						: 'text-gray-300 hover:bg-gray-700 hover:text-white'}"
					aria-current="page"
				>
					Kittens
				</a>
			</div>
		</div>
	{/if}
</nav>

{#if children}{@render children()}{/if}
