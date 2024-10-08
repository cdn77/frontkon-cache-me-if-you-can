import type { LayoutServerLoad } from './$types';

export const load = (({ setHeaders }) => {
	setHeaders({
		'Cache-Control': `public, s-maxage=${60 * 60}, max-age=30`
	});
}) satisfies LayoutServerLoad;
