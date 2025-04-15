import { createRedirectUrl, isURLValid, urlExists } from '$lib/utils/url-utils';
import { fail } from '@sveltejs/kit';
import type { Actions, RequestEvent } from './$types';

export const actions = {
	default: async (event: RequestEvent) => {
		const formData = await event.request.formData();
		const url = formData.get('url');
		console.log(url, 'url');

		if (!isURLValid(url as string)) {
			return fail(400, {
				data: { shortUrl: null },
				message: 'Invalid URL'
			});
		}

		console.log('url is valid');

		const { data, error } = await urlExists(url as string);
		console.log(data, error, 'data, error');

		// if (error) {
		// 	return fail(500, {
		// 		data: { shortUrl: null },
		// 		message: 'Error checking if URL exists'
		// 	});
		// }

		if (data) {
			return fail(400, {
				data: { shortUrl: `${event.url.origin}/${data.redirect_id}` },
				message: 'URL already exists'
			});
		} else {
			const { data, error } = await createRedirectUrl(url as string);

			if (error || !data) {
				return fail(500, {
					data: { shortUrl: null },
					message: 'Error creating redirect URL'
				});
			}

			return {
				data: { shortUrl: `${event.url.origin}/${data.redirect_id}` },
				message: 'New URL created'
			};
		}
	}
} satisfies Actions;
