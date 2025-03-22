'use client';

import { CardProps } from '@/Interfaces';
import Image from 'next/image';
import Link from 'next/link';

export const Card = ({ title, description, image, href }: CardProps) => {
	return (
		<>
			<div className="card" style={{ width: '20rem' }}>
				<Image src={image} className="card-img-top" alt={title} width={720} height={405} />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					<Link href={href} className="btn btn-primary">
						Ir al articulo
					</Link>
				</div>
			</div>
		</>
	);
};
