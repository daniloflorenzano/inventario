import { createContext, SetStateAction, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { api } from '../services/api';

type User = {
	name: string;
	email: string;
};

type SignInData = {
	email: FormDataEntryValue | null;
	password: FormDataEntryValue | null;
};

type AuthContextType = {
	isAuthenticated: boolean;
	user: User | null;
	signIn: (data: SignInData) => Promise<void>;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: any) {
	const [user, setUser] = useState<User | null>(null);

	const isAuthenticated = !!user;

	useEffect(() => {
		const { 'inventario.token': token } = parseCookies();

		if (token) {
			api.get('/usuario').then((response) => {
				setUser({
					name: response.data.nome,
					email: response.data.email,
				});

				Router.push('/itens');
			});
		}
	}, []);

	const signIn = async ({ email, password }: SignInData) => {
		await api
			.post('/auth', {
				email: email,
				senha: password,
			})
			.then((response) => {
				setCookie(undefined, 'inventario.token', response.data.token, {
					maxAge: 60 * 60 * 8, // 8 horas
				});

				setUser({ name: response.data.nome, email: response.data.email });

				Router.push('/itens');
			})
			.catch((error) => console.log(error));
	};

	return (
		<AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
			{children}
		</AuthContext.Provider>
	);
}
