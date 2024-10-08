<script lang="ts">
	import { page } from '$app/stores';
	import { Container } from '$lib/components/Container';
	import type { Kitten } from '$lib/data/types';

	let { kitten } = $derived($page.data as unknown as { kitten: Kitten });
</script>

<Container class="pb-6 pt-4 md:pt-8 md:pb-16 lg:pt-16 lg:pb-24">
	<div class="mb-8">
		<a href="/" class="text-indigo-600 hover:underline focus-visible:underline">Back to kittens</a>
	</div>

	<div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
		<!-- Image gallery -->
		<div class="flex flex-col-reverse">
			<div class="aspect-h-1 aspect-w-1 w-full">
				<!-- Tab panel, show/hide based on tab state. -->
				<div id="tabs-1-panel-1" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
					<img
						src={kitten.image}
						alt={kitten.name}
						class="h-full w-full object-cover object-center sm:rounded-lg"
					/>
				</div>

				<!-- More images... -->
			</div>
		</div>

		<!-- Product info -->
		<div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
			<h1 class="text-3xl font-bold tracking-tight text-gray-900">{kitten.name}</h1>

			<div class="mt-3">
				<h2 class="sr-only">Kitten information</h2>
				<p class="text-3xl tracking-tight text-gray-900">FREE</p>
			</div>

			<form class="mt-6">
				<div class="mt-10 flex">
					<button
						type="submit"
						class="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
					>
						Adopt
					</button>
				</div>
			</form>

			<section aria-labelledby="details-heading" class="mt-12">
				<h2 id="details-heading" class="sr-only">Additional details</h2>

				<div class="divide-y divide-gray-200 border-t">
					<div>
						<h3
							class="group relative flex w-full items-center justify-between py-6 text-lefttext-sm font-medium text-gray-900"
						>
							Features
						</h3>
						<div class="prose prose-sm pb-6" id="disclosure-1">
							<ul role="list">
								<li>Cat</li>
								<li>Small</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</Container>
