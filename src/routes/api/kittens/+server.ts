import { kittens } from '$lib/data/kittens.server';
import { json } from '@sveltejs/kit';
import { delay } from '../delay';

export const GET = async () => {
	await delay();
	return json(kittens);
};
