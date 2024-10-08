import { redirect } from '@sveltejs/kit';
import { delay } from '../delay';

export const POST = async ({ cookies }) => {
	await delay();

	cookies.delete('demo.username', { path: '/' });

	redirect(303, '/');
};
