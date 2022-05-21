import axios from 'axios';
import { parseCookies } from 'nookies';

const { 'inventario.token': token } = parseCookies();

export const api = axios.create({
	baseURL: 'http://172.18.0.3:8080',
});

if (token) {
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}