import { API_BASE_URL } from '../constants';

export async function login(password) {
	const URL = `${API_BASE_URL}/v1/validate/`;
	const body = JSON.stringify({
		password,
	});

	return await fetch(URL, {
		method: 'POST',
		mode: 'cors',
		body,
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((res) => res.json())
		.then((res) => {
			return res.status;
		});
}
