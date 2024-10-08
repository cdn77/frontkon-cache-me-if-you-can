import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import type { Kitten } from '$lib/data/types';

export const load = (async ({ params: { name }, fetch }) => {
	const response = await fetch(`/api/kitten/${name}`);

	if (!response.ok) {
		error(404);
	}

	const kitten = (await response.json()) as Kitten;

	return { kitten };
}) satisfies PageServerLoad;
