import { FC } from 'react';
import data from '../../Data/QuestionsMantenince.json';
import Image from 'next/image';
import type { AccordionItem } from '@/Interfaces/AccordionItem.interface';
import { Question } from '../Question/Question';

const MaintenanceServiceDetail: FC = () => {
	return (
		<div className="service-details">
			<section>
				<div className="cs_height_120 cs_height_lg_80"></div>
				<div className="container">
					<div className="cs_gap_y_20 mb-lg-5">
						<div className="col-lg-12">
							<div className="cs_pr_30">
								<div className="cs_service_details">
									<div className="position-relative">
										<Image
											src="/assets/img/maintenance-service.webp"
											alt="Instalación de aire acondicionado en Alicante"
											width={720}
											height={405}
											className="w-100 h-100 object-fit-cover"
										/>
									</div>
									<h1 className="cs_fs_48 cs_mb_20">
										Mantenimiento de aire acondicionado en Alicante
									</h1>
									<p className="cs_mb_25">
										{' '}
										En Declima, empresa líder en Alicante, nos dedicamos a
										instalar equipos de aire acondicionado de última generación
										con rapidez y eficiencia, garantizando la máxima calidad en
										cada proyecto. Nuestros técnicos certificados realizan
										estudios de sitio detallados para determinar la mejor
										solución de climatización, asegurando una instalación óptima
										que eleva el rendimiento de tu sistema y el confort de tu
										hogar o negocio. <br />
										<br /> Además de la instalación, ofrecemos un completo
										servicio de mantenimiento regular que permite a tu equipo
										funcionar sin interrupciones, previniendo fallos costosos y
										prolongando significativamente la vida útil de tu sistema de
										aire acondicionado. Nuestro servicio incluye el cambio
										periódico de filtros, limpieza a fondo de bobinas,
										verificación minuciosa del nivel de refrigerante,
										calibración precisa del termostato y una inspección integral
										de todas las conexiones eléctricas. Con un mantenimiento
										preventivo continuo, no solo optimizamos la eficiencia
										energética de tu sistema, sino que también aseguramos un
										ambiente interior saludable y confortable, adaptado a las
										exigencias del clima y las necesidades específicas de cada
										cliente.{' '}
									</p>
									<h2 className="cs_fs_30 cs_mb_15">
										{' '}
										Su Confort, Nuestra Prioridad{' '}
									</h2>{' '}
									<p className="cs_mb_25">
										{' '}
										En Declima, transformamos y actualizamos tu sistema de aire
										acondicionado a modelos de alta eficiencia que no solo te
										permiten ahorrar en costos energéticos, sino que también
										contribuyen a la reducción de tu huella de carbono. Nuestro
										compromiso es ofrecerte un ambiente seguro y confortable;
										por ello, realizamos la lubricación periódica de las piezas
										móviles y una inspección exhaustiva de todas las conexiones
										eléctricas, garantizando así un funcionamiento estable y sin
										imprevistos.{' '}
									</p>{' '}
									<p className="cs_mb_25">
										{' '}
										Además, llevamos a cabo evaluaciones energéticas detalladas
										y gestionamos el retiro de equipos obsoletos para instalar
										nuevas soluciones tecnológicas que optimicen el rendimiento
										de tu sistema. Empleamos tecnología de punta en diagnósticos
										para identificar y resolver problemas antes de que se
										conviertan en fallos costosos, asegurando que cada
										componente opere en condiciones óptimas y prolongando la
										vida útil de tus equipos.{' '}
									</p>
									<h2 className="cs_fs_30 cs_mb_15">
										{' '}
										Servicios Integrales de Climatización en Alicante{' '}
									</h2>{' '}
									<p className="cs_mb_25">
										{' '}
										En Declima, realizamos inspecciones minuciosas y
										diagnósticos precisos para identificar cualquier anomalía en
										tu sistema de aire acondicionado. Elaboramos informes
										detallados y te ofrecemos soluciones personalizadas,
										adaptadas a las necesidades específicas de tu hogar o
										negocio. Además, calibramos cada sistema con la máxima
										precisión, garantizando un funcionamiento óptimo que se
										traduce en un ambiente confortable y un notable ahorro
										energético.{' '}
									</p>
									<ul className="cs_list cs_style_1 cs_mp_0 cs_fs_18 cs_medium cs_heading_font">
										<li>
											<svg
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M7.5 10.5C7.16667 10.8125 6.82292 10.8125 6.46875 10.5L4.71875 8.75C4.42708 8.41667 4.42708 8.07292 4.71875 7.71875C5.07292 7.42708 5.41667 7.42708 5.75 7.71875L7 8.9375L9.96875 5.96875C10.3229 5.67708 10.6667 5.67708 11 5.96875C11.3125 6.32292 11.3125 6.66667 11 7L7.5 10.5ZM10.75 1.34375C11.8333 1.21875 12.8021 1.55208 13.6562 2.34375C14.4479 3.17708 14.7812 4.14583 14.6562 5.25C15.4896 5.91667 15.9375 6.83333 16 8C15.9375 9.16667 15.4896 10.0833 14.6562 10.75C14.7812 11.8333 14.4479 12.8021 13.6562 13.6562C12.8021 14.4479 11.8333 14.7812 10.75 14.6562C10.0833 15.4896 9.16667 15.9375 8 16C6.83333 15.9375 5.91667 15.4896 5.25 14.6562C4.14583 14.7812 3.17708 14.4479 2.34375 13.6562C1.55208 12.8021 1.21875 11.8333 1.34375 10.75C0.489583 10.0833 0.0416667 9.16667 0 8C0.0416667 6.83333 0.489583 5.91667 1.34375 5.25C1.21875 4.14583 1.55208 3.17708 2.34375 2.34375C3.17708 1.55208 4.14583 1.21875 5.25 1.34375C5.91667 0.489583 6.83333 0.0416667 8 0C9.16667 0.0416667 10.0833 0.489583 10.75 1.34375ZM5.9375 3.09375L5.375 2.90625C4.625 2.69792 3.96875 2.86458 3.40625 3.40625C2.86458 3.96875 2.69792 4.625 2.90625 5.375L3.09375 5.9375L2.5625 6.25C1.89583 6.625 1.54167 7.20833 1.5 8C1.54167 8.79167 1.89583 9.375 2.5625 9.75L3.09375 10.0312L2.90625 10.5938C2.69792 11.3438 2.86458 12.0104 3.40625 12.5938C3.96875 13.1354 4.625 13.3021 5.375 13.0938L5.9375 12.9062L6.25 13.4688C6.625 14.1146 7.20833 14.4583 8 14.5C8.79167 14.4583 9.375 14.1146 9.75 13.4688L10.0312 12.9062L10.5938 13.0938C11.3438 13.3021 12.0104 13.1354 12.5938 12.5938C13.1354 12.0104 13.3021 11.3438 13.0938 10.5938L12.9062 10.0312L13.4688 9.75C14.1146 9.375 14.4583 8.79167 14.5 8C14.4583 7.20833 14.1146 6.625 13.4688 6.25L12.9062 5.9375L13.0938 5.375C13.3021 4.625 13.1354 3.96875 12.5938 3.40625C12.0104 2.86458 11.3438 2.69792 10.5938 2.90625L10.0312 3.09375L9.75 2.5625C9.375 1.89583 8.79167 1.54167 8 1.5C7.20833 1.54167 6.625 1.89583 6.25 2.5625L5.9375 3.09375Z"
													fill="currentColor"
												/>
											</svg>
											Instalaciones Precisas
										</li>
									</ul>
									<div className="cs_accordians cs_style_1">
										{(data as AccordionItem[]).map((item, index) => (
											<Question
												key={index}
												desc={item.desc}
												title={item.title}
												index={index}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="cs_height_120 cs_height_lg_80"></div>
			</section>
		</div>
	);
};

export default MaintenanceServiceDetail;
