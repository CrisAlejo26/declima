'use client';

import { CardProps } from '@/Interfaces';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Card.module.css';

export const Card: React.FC<CardProps> = ({ title, description, image, href }) => {
	return (
		<div className={`card h-100 ${styles.card}`}>
			<div className={styles.imageContainer}>
				<Image
					src={image}
					alt={title}
					fill
					style={{ objectFit: 'cover' }}
					sizes="(max-width: 768px) 100vw, 33vw"
					priority
				/>
			</div>
			<div className="card-body d-flex flex-column">
				<h5 className="card-title text-center">{title}</h5>
				<p className={`card-text ${styles.truncate}`}>{description}</p>
				<Link href={href} className="btn btn-primary mt-auto">
					Ver más
				</Link>
			</div>
		</div>
	);
};
