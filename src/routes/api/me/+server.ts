import type { SessionInfo } from '$lib/data/types.js';
import { json } from '@sveltejs/kit';
import { delay } from '../delay';

export const GET = async ({ cookies }) => {
	await delay();

	const username = cookies.get('demo.username');
	if (!username) {
		return json({ loggedIn: false } satisfies SessionInfo);
	}

	return json({ loggedIn: true, username } satisfies SessionInfo);
};
