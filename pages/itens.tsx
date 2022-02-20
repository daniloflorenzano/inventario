import Head from 'next/head';
import { useContext, useEffect } from 'react';
import DataTable from '../components/DataTable';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import styles from '../styles/Home.module.css';
import { AuthContext } from '../contexts/AuthContext';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { api } from '../services/api';
import { getApiClient } from '../services/axios';

const Itens = () => {
	const { user } = useContext(AuthContext);

	useEffect(() => {
		api.get('/users');
	}, []);

	return (
		<>
			<Head>
				<title>Keep Inventory</title>
				<meta
					name='description'
					content='Software de controle de patrimônio'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<header>
				<ResponsiveAppBar />
			</header>

			<div className={styles.dataTable}>
				<DataTable />
			</div>

			<Footer />
		</>
	);
};

export default Itens;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { ['inventory.token']: token } = parseCookies(context);

	const apiClient = getApiClient(context);

	if (!token) {
		return {
			redirect: {
				destination: '/',
				permanent: false,
			},
		};
	}

	await apiClient.get('/users');

	return {
		props: {},
	};
};
