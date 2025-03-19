import { FC } from 'react';
import styles from '../../styles/Loader.module.css';

const Loader: FC = () => {
	return (
		<div className={styles.loaderContainer}>
			<div className={styles.fan} />
			<p className={styles.loadingText}>Cargando sección...</p>
		</div>
	);
};

export default Loader;
