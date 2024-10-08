import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Kitten } from '$lib/data/types';

export const load = (async ({ fetch }) => {
	const response = await fetch(`/api/kittens`);

	if (!response.ok) {
		error(404);
	}

	const kittens = (await response.json()) as Kitten[];

	return { kittens };
}) satisfies PageServerLoad;
