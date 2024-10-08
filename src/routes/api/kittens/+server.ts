import { kittens } from '$lib/data/kittens.server';
import { json } from '@sveltejs/kit';
import { delay } from '../delay';

export const GET = async ({ setHeaders }) => {
	await delay();

	setHeaders({ 'Cache-Control': 'no-store' });

	return json(kittens);
};
