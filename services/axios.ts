import axios, { AxiosRequestConfig } from 'axios';
import { parseCookies } from 'nookies';

export const getApiClient = (context?: any) => {
	const { 'inventory.token': token } = parseCookies(context);

	const api: any = axios.create({
		baseURL: 'http://localhost:3000',
	});

	api.interceptors.request.use((config: AxiosRequestConfig<any>) => {
		console.log(config);

		return config;
	});

	if (token) {
		api.defaults.headers['Authorization'] = `Bearer ${token}`;
	}

    return api;
};
