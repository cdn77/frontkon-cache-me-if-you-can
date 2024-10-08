<script lang="ts">
	import { page } from '$app/stores';
	import { Container } from '$lib/components/Container';
	import type { Kitten } from '$lib/data/types';

	let kittens = $derived($page.data.kittens as Kitten[]);
</script>

<div class="bg-white">
	<Container class="py-6 md:py-16 lg:py-24">
		<div class="md:flex md:items-center md:justify-between">
			<h2 class="text-2xl font-bold tracking-tight text-gray-900">Adopt a kitten</h2>
		</div>

		<div class="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 lg:gap-x-8">
			{#each kittens as { name, image }}
				<div class="group relative">
					<div
						class="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80"
					>
						<img src={image} alt={name} class="h-full w-full object-cover object-center" />
					</div>
					<h3 class="mt-4 text-sm text-gray-700">
						<a href="/adopt-{name.toLowerCase()}">
							<span class="absolute inset-0"></span>
							{name}
						</a>
					</h3>
					<p class="mt-1 text-sm text-gray-500">Cat</p>
					<p class="mt-1 text-sm font-medium text-gray-900">FREE</p>
				</div>
			{/each}
		</div>
	</Container>
</div>
