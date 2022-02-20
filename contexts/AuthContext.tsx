import { createContext, SetStateAction, useEffect, useState } from 'react';
import { recoverUserInformation, signInRequest } from '../services/auth';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';
import { api } from '../services/api';

type User = {
	name: string;
	email: string;
	avatar_url: string;
};

type SignInData = {
	email: string;
	password: string;
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
		const { 'inventory.token': token } = parseCookies();

		if (token) {
			recoverUserInformation().then(
				(response: { user: SetStateAction<User | null> }) =>
					setUser(response.user)
			);
		}
	}, []);

	const signIn = async ({ email, password }: SignInData) => {
		const { token, user } = await signInRequest({
			email,
			password,
		});

		setCookie(undefined, 'inventory.token', token, {
			maxAge: 60 * 60 * 1, // 1 hour
		});
		
		api.defaults.headers['Authorization'] = `Bearer ${token}`;

		setUser(user);

		Router.push('/itens');
	};

	return (
		<AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
			{children}
		</AuthContext.Provider>
	);
}
