'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface WorkItem {
	id: number;
	title: string;
	description: string;
	image: string;
}

const works: WorkItem[] = [
	{
		id: 1,
		title: 'Instalación en Kawasaki',
		description: 'Diseño y climatización integral para un hogar moderno.',
		image: '/assets/img/work1.webp',
	},
	{
		id: 2,
		title: 'Instalación en hogar moderno',
		description: 'Soluciones de confort y eficiencia para espacios empresariales.',
		image: '/assets/img/work2.webp',
	},
	{
		id: 3,
		title: 'Mantenimiento en Motos Medina',
		description: 'Instalación de sistemas de climatización en grandes superficies.',
		image: '/assets/img/work3.webp',
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
				<h1 className="text-center">Trabajos de Declima</h1>
				<p className="text-center lead mb-5">
					Descubre algunos de los proyectos en los que hemos trabajado, demostrando
					nuestro compromiso y calidad en cada intervención.
				</p>
				<div className="row">
					{works.map(work => (
						<div key={work.id} className="col-12 col-md-6 col-lg-4 mb-4">
							<div className="card h-100">
								<div className="card-body">
									<h5 className="card-title text-center">{work.title}</h5>
								</div>
								<div
									className="card-img-bottom"
									style={{
										position: 'relative',
										width: '100%',
										height: '200px',
										cursor: 'pointer',
									}}
									onClick={() => openModal(work)}>
									<Image
										src={work.image}
										alt={work.title}
										fill
										style={{ objectFit: 'cover' }}
										sizes="(max-width: 768px) 100vw, 33vw"
										priority
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{selectedWork && (
				<div className="modal-container" onClick={closeModal}>
					<div className="modal-backdrop fade show"></div>
					<div
						className="modal show fade d-block"
						tabIndex={-1}
						role="dialog"
						onClick={e => e.stopPropagation()} // Evita cerrar el modal al hacer clic en su contenido
					>
						<div
							className="modal-dialog modal-dialog-centered modal-lg"
							role="document">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title">{selectedWork.title}</h5>
									<button
										type="button"
										className="btn-close"
										aria-label="Close"
										onClick={closeModal}></button>
								</div>
								<div
									className="modal-body text-center"
									style={{
										position: 'relative',
										width: '100%',
										height: '400px',
									}}>
									<Image
										src={selectedWork.image}
										alt={selectedWork.title}
										fill
										style={{ objectFit: 'contain' }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Work;
