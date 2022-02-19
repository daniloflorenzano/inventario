import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import DataTable from '../components/DataTable';
import Footer from '../components/Footer';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Keep Inventory</title>
				<meta name='description' content='Software de controle de patrimônio' />
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

export default Home;
