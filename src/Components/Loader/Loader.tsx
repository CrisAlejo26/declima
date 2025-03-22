import { FC } from 'react';
import styles from '../../styles/Loader.module.css';

const Loader: FC = () => {
	return (
		<div className={styles.loaderContainer}>
			<div className={styles.fan}>
				<div className={styles.blade} />
				<div className={styles.blade} />
				<div className={styles.blade} />
				<div className={styles.blade} />
			</div>
			<p className={styles.loadingText}>Cargando sección de la pagina...</p>
		</div>
	);
};

export default Loader;
