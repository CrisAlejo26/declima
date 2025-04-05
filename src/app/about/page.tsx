'use client';
import Link from 'next/link';
import React from 'react';

const Page = () => {
	return (
		<>
			<section
				className="position-relative py-5"
				style={{
					backgroundImage: 'url(/assets/img/about_img_1.webp)', // Asegúrate de tener esta imagen o actualizar la ruta
					backgroundAttachment: 'fixed',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-10">
							<div
								className="p-4 p-md-5"
								style={{
									backgroundColor: 'rgba(76, 150, 243, 0.9)', // Color azul con transparencia
									borderRadius: '8px',
								}}>
								<h2 className="text-white mb-4">La empresa</h2>
								<p className="text-white">
									En <strong>DeCLIMA</strong>, somos herederos de una sólida
									tradición en el sector de la climatización. Nuestro nombre es un
									acrónimo que refleja nuestra misión: Desarrollo de Equipos de
									Clima, Instalación y Mantenimiento. Fundada en 2004, DeCLIMA
									nació de la conversión de la antigua{' '}
									<strong>Serna Hermanos Aire Acondicionado S.L.</strong>, una
									empresa que desde 1987 se ha dedicado a la instalación y
									fabricación de sistemas avanzados de climatización.
								</p>
								<p className="text-white">
									Nuestra misión es hacer accesible tecnologías innovadoras,
									duraderas y eficientes para la mayoría de las personas
									responsables con el medio ambiente, facilitando su uso y
									mejorando la calidad de vida.
								</p>
								<h3 className="text-white mt-4">Historia de la Empresa</h3>
								<p className="text-white">
									DeCLIMA se fundó en 2004 como resultado de la evolución de Serna
									Hermanos Aire Acondicionado S.L., que se creó a finales de 1987.
									Inicialmente, la empresa se dedicaba a la fabricación de
									calentadoras y enfriadoras de agua, además de la creación de
									cámaras de refrigeración de baja temperatura. Fuimos pioneros en
									la fabricación de máquinas de conductos con recuperación de
									calor para ACS, una tecnología que hoy se conoce como
									Aerotermia.
								</p>
								<h3 className="text-white mt-4">Valores</h3>
								<p className="text-white">
									Nuestros valores son la <strong>Responsabilidad</strong>, la{' '}
									<strong>Innovación</strong> y la <strong>Calidad</strong>.
									Fomentamos una cultura de respeto al medio ambiente y compromiso
									con la excelencia en todos nuestros proyectos.
								</p>
								<h3 className="text-white mt-4">Nuestro Equipo</h3>
								<p className="text-white">
									Contamos con un equipo de profesionales altamente capacitados y
									comprometidos con la excelencia. Cada miembro de nuestro equipo
									aporta su experiencia y pasión por ofrecer soluciones
									innovadoras y eficientes.
								</p>
								<div className="mt-4">
									<Link className="btn btn-light" href="/#contact">
										Contactar
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Page;
