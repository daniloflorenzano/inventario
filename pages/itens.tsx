import Head from 'next/head';
import { useContext } from 'react';
import DataTable from '../components/DataTable';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import styles from '../styles/Home.module.css';
import { AuthContext } from '../contexts/AuthContext';

const Itens = () => {
	const { user } = useContext(AuthContext)

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
