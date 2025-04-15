import { getRedirectUrl } from '$lib/utils/url-utils';
import type { PageServerLoadEvent } from './$types';
import { error as svelteError, redirect } from '@sveltejs/kit';

export const load = async ({ params }: PageServerLoadEvent) => {
	const { id } = params;

	if (!id) {
		svelteError(400, {
			message: 'Invalid URL'
		});
	}

	const { data, error } = await getRedirectUrl(id as string);
	if (error || !data) {
		svelteError(404, {
			message: 'URL not found'
		});
	}

	redirect(302, data.url);
};
