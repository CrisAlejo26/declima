'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface WorkItem {
	id: number;
	title: string;
	image: string;
}

const works: WorkItem[] = [
	{
		id: 1,
		title: 'Instalación en Kawasaki',
		image: '/assets/img/work1.webp',
	},
	{
		id: 2,
		title: 'Instalación en hogar moderno',
		image: '/assets/img/work2.webp',
	},
	{
		id: 3,
		title: 'Mantenimiento en Motos Medina',
		image: '/assets/img/work3.webp',
	},
	{
		id: 4,
		title: 'Trabajo 4',
		image: '/assets/img/work4.webp',
	},
	{
		id: 5,
		title: 'Trabajo 5',
		image: '/assets/img/work5.webp',
	},
	{
		id: 6,
		title: 'Trabajo 6',
		image: '/assets/img/work6.webp',
	},
	{
		id: 7,
		title: 'Trabajo 7',
		image: '/assets/img/work7.webp',
	},
	{
		id: 8,
		title: 'Trabajo 8',
		image: '/assets/img/work8.webp',
	},
	{
		id: 9,
		title: 'Trabajo 9',
		image: '/assets/img/work9.webp',
	},
	{
		id: 10,
		title: 'Trabajo 10',
		image: '/assets/img/work10.webp',
	},
	{
		id: 11,
		title: 'Trabajo 11',
		image: '/assets/img/work11.webp',
	},
	{
		id: 12,
		title: 'Trabajo 12',
		image: '/assets/img/work12.webp',
	},
	{
		id: 13,
		title: 'Trabajo 13',
		image: '/assets/img/work13.webp',
	},
	{
		id: 14,
		title: 'Trabajo 14',
		image: '/assets/img/work14.webp',
	},
	{
		id: 15,
		title: 'Trabajo 15',
		image: '/assets/img/work15.webp',
	},
	{
		id: 16,
		title: 'Trabajo 16',
		image: '/assets/img/work16.webp',
	},
	{
		id: 17,
		title: 'Trabajo 17',
		image: '/assets/img/work17.webp',
	},
	{
		id: 18,
		title: 'Trabajo 18',
		image: '/assets/img/work18.webp',
	},
	{
		id: 19,
		title: 'Trabajo 19',
		image: '/assets/img/work19.webp',
	},
];

const Work = () => {
	const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

	const openModal = (work: WorkItem) => {
		setSelectedWork(work);
	};

	const closeModal = () => {
		setSelectedWork(null);
	};

	return (
		<>
			<div className="container my-5">
				<div className="row g-4">
					{works.map(work => (
						<div key={work.id} className="col-12 col-md-6 col-lg-4">
							<div
								className="work-card position-relative overflow-hidden rounded-3 shadow-sm"
								onClick={() => openModal(work)}
								style={{
									height: '300px',
									cursor: 'pointer',
									transition: 'transform 0.3s ease-in-out',
								}}>
								<Image
									src={work.image}
									alt={work.title}
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
									className="work-image"
									style={{
										objectFit: 'cover',
										transition: 'transform 0.3s ease-in-out',
									}}
									priority
								/>
								<div className="work-overlay position-absolute w-100 h-100 top-0 start-0"></div>
							</div>
						</div>
					))}
				</div>
			</div>

			{selectedWork && (
				<div
					className="modal-overlay position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
					style={{ background: 'rgba(0,0,0,0.8)', zIndex: 1050 }}
					onClick={closeModal}>
					<div
						className="modal-container position-relative bg-transparent"
						style={{
							maxWidth: '90vw',
							maxHeight: '90vh',
							width: 'auto',
							height: 'auto',
						}}
						onClick={e => e.stopPropagation()}>
						<button
							type="button"
							className="btn-close btn-close-white position-absolute top-0 end-0 m-3"
							style={{ zIndex: 1051 }}
							aria-label="Close"
							onClick={closeModal}></button>
						<div
							className="modal-image-container position-relative"
							style={{ width: '80vw', height: '80vh' }}>
							<Image
								src={selectedWork.image}
								alt={selectedWork.title}
								fill
								style={{ objectFit: 'contain' }}
								sizes="80vw"
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Work;
