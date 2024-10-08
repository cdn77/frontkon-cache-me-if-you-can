import { redirect } from '@sveltejs/kit';
import { delay } from '../delay';

export const POST = async ({ cookies, request }) => {
	await delay();

	const formData = await request.formData();
	const username = formData.get('username');

	if (!username || typeof username !== 'string') {
		redirect(403, '/log-in');
	}

	cookies.set('demo.username', username, { path: '/' });

	redirect(303, '/');
};
