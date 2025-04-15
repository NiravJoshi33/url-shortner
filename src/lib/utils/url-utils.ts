import { createPBInstance } from '$lib/pocketbase';
import { nanoid } from 'nanoid';

export const isURLValid = (url: string) => {
	if (URL.canParse(url)) {
		return true;
	}

	return false;
};

export const urlExists = async (url: string) => {
	const pb = createPBInstance();
	try {
		const existingUrl = await pb.collection('redirects').getFirstListItem(`url="${url}"`);
		console.log(existingUrl, 'existing url');

		if (existingUrl) {
			return { data: existingUrl, error: null };
		}

		return { data: null, error: 'URL does not exist' };
	} catch (error) {
		console.error(error);
		return { data: null, error: 'Error checking if URL exists' };
	}
};

export const createRedirectUrl = async (url: string) => {
	try {
		const redirectId = nanoid(6);
		const pb = createPBInstance();
		const newUrl = await pb.collection('redirects').create({ redirect_id: redirectId, url });

		return { data: newUrl, error: null };
	} catch (error) {
		console.error(error);
		return { data: null, error: 'Error creating redirect URL' };
	}
};

export const getRedirectUrl = async (id: string) => {
	try {
		const pb = createPBInstance();
		const redirectUrl = await pb.collection('redirects').getFirstListItem(`redirect_id='${id}'`);

		return { data: { url: redirectUrl.url }, error: null };
	} catch (error) {
		console.error(error);
		return { data: null, error: 'Error getting redirect URL' };
	}
};
