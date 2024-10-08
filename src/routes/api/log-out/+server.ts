import { redirect } from '@sveltejs/kit';
import { delay } from '../delay';

export const POST = async ({ cookies, setHeaders }) => {
	await delay();

	setHeaders({ 'Cache-Control': 'no-store' });

	cookies.delete('demo.username', { path: '/' });

	redirect(303, '/');
};
