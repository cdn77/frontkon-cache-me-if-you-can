import { kittens } from '$lib/data/kittens.server';
import { error, json } from '@sveltejs/kit';
import { delay } from '../../delay';

export const GET = async ({ params: { name }, setHeaders }) => {
	await delay();

	const kitten = kittens.find((kitten) => kitten.name.toLowerCase() === name.toLowerCase());

	setHeaders({ 'Cache-Control': 'no-store' });

	if (!kitten) {
		error(404);
	}

	return json(kitten);
};
