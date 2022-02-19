import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<a
				href='https://www.linkedin.com/in/daniloflorenzano/'
				target='_blank'
				rel='noopener noreferrer'
			>
				Desenvolvido por Danilo Florenzano
			</a>
		</footer>
	);
};

export default Footer;
