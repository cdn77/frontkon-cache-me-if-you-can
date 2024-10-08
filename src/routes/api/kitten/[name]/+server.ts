import { kittens } from '$lib/data/kittens.server';
import { error, json } from '@sveltejs/kit';
import { delay } from '../../delay';

export const GET = async ({ params: { name } }) => {
	await delay();

	const kitten = kittens.find((kitten) => kitten.name.toLowerCase() === name.toLowerCase());

	if (!kitten) {
		error(404);
	}

	return json(kitten);
};
