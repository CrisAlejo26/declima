import { FC } from 'react';
import data from '../../Data/QuestionsRepair.json';
import Image from 'next/image';
import type { AccordionItem } from '@/Interfaces/AccordionItem.interface';
import { Question } from '../Question/Question';

const RepairService: FC = () => {
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
											src="/assets/img/service_repair.webp"
											alt="Reparación de aire acondicionado en Alicante - Declima"
											width={720}
											height={305}
											className="w-100 h-100 object-fit-cover"
										/>
									</div>
									<h1 className="cs_fs_48 cs_mb_20">
										Reparación de Aire Acondicionado en Alicante – Servicio
										Profesional por Declima
									</h1>
									<p className="cs_mb_25">
										En <strong>Declima</strong> nos especializamos en la{' '}
										<strong>
											reparación de aire acondicionado en Alicante
										</strong>
										, ofreciendo soluciones rápidas y efectivas para restaurar
										el funcionamiento óptimo de tu sistema. Nuestro equipo de
										técnicos certificados se encarga de diagnosticar y
										solucionar fallos, garantizando que tu equipo opere de forma
										segura y eficiente.
									</p>
									<p className="cs_mb_25">
										Con una amplia experiencia en el sector, hemos perfeccionado
										nuestro proceso de reparación para atender desde pequeños
										inconvenientes hasta averías complejas. Nuestro compromiso
										es brindar un servicio integral que minimice las
										interrupciones, mejore la calidad del aire y prolongue la
										vida útil de tus equipos de climatización.
									</p>
									<h2 className="cs_fs_30 cs_mb_15">
										Proceso de Reparación de Alta Calidad
									</h2>
									<p className="cs_mb_25">
										Nuestro proceso comienza con un diagnóstico exhaustivo que
										identifica la raíz del problema. Utilizamos tecnología
										avanzada y métodos de análisis precisos para determinar la
										causa del fallo. Esto nos permite intervenir de manera
										rápida y eficaz, restaurando el rendimiento del sistema en
										el menor tiempo posible.
									</p>
									<p className="cs_mb_25">
										Durante la reparación, nuestros técnicos emplean repuestos y
										técnicas de alta calidad, asegurando que cada componente
										cumpla con los estándares de seguridad y eficiencia. Además,
										te brindamos asesoramiento personalizado para prevenir
										futuras averías y mantener tu equipo en óptimas condiciones.
									</p>
									<h2 className="cs_fs_30 cs_mb_15">
										¿Por Qué Elegir Declima para la Reparación de Tu Aire
										Acondicionado?
									</h2>
									<p className="cs_mb_25">
										Elegir Declima significa contar con un servicio profesional,
										confiable y orientado a resultados. Nuestro compromiso
										incluye:
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
													d="M7.5 10.5C7.16667 10.8125 6.82292 10.8125 6.46875 10.5L4.71875 8.75C4.42708 8.41667 4.42708 8.07292 4.71875 7.71875C5.07292 7.42708 5.41667 7.42708 5.75 7.71875L7 8.9375L9.96875 5.96875C10.3229 5.67708 10.6667 5.67708 11 5.96875C11.3125 6.32292 11.3125 6.66667 11 7L7.5 10.5Z"
													fill="currentColor"
												/>
												<path
													d="M10.75 1.34375C11.8333 1.21875 12.8021 1.55208 13.6562 2.34375C14.4479 3.17708 14.7812 4.14583 14.6562 5.25C15.4896 5.91667 15.9375 6.83333 16 8C15.9375 9.16667 15.4896 10.0833 14.6562 10.75C14.7812 11.8333 14.4479 12.8021 13.6562 13.6562C12.8021 14.4479 11.8333 14.7812 10.75 14.6562C10.0833 15.4896 9.16667 15.9375 8 16C6.83333 15.9375 5.91667 15.4896 5.25 14.6562C4.14583 14.7812 3.17708 14.4479 2.34375 13.6562C1.55208 12.8021 1.21875 11.8333 1.34375 10.75C0.489583 10.0833 0.0416667 9.16667 0 8C0.0416667 6.83333 0.489583 5.91667 1.34375 5.25C1.21875 4.14583 1.55208 3.17708 2.34375 2.34375C3.17708 1.55208 4.14583 1.21875 5.25 1.34375C5.91667 0.489583 6.83333 0.0416667 8 0C9.16667 0.0416667 10.0833 0.489583 10.75 1.34375Z"
													fill="currentColor"
												/>
											</svg>
											Diagnóstico rápido y preciso
										</li>
										<li>
											<svg
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M7.5 10.5C7.16667 10.8125 6.82292 10.8125 6.46875 10.5L4.71875 8.75C4.42708 8.41667 4.42708 8.07292 4.71875 7.71875C5.07292 7.42708 5.41667 7.42708 5.75 7.71875L7 8.9375L9.96875 5.96875C10.3229 5.67708 10.6667 5.67708 11 5.96875C11.3125 6.32292 11.3125 6.66667 11 7L7.5 10.5Z"
													fill="currentColor"
												/>
												<path
													d="M10.75 1.34375C11.8333 1.21875 12.8021 1.55208 13.6562 2.34375C14.4479 3.17708 14.7812 4.14583 14.6562 5.25C15.4896 5.91667 15.9375 6.83333 16 8C15.9375 9.16667 15.4896 10.0833 14.6562 10.75C14.7812 11.8333 14.4479 12.8021 13.6562 13.6562C12.8021 14.4479 11.8333 14.7812 10.75 14.6562C10.0833 15.4896 9.16667 15.9375 8 16C6.83333 15.9375 5.91667 15.4896 5.25 14.6562C4.14583 14.7812 3.17708 14.4479 2.34375 13.6562C1.55208 12.8021 1.21875 11.8333 1.34375 10.75C0.489583 10.0833 0.0416667 9.16667 0 8C0.0416667 6.83333 0.489583 5.91667 1.34375 5.25C1.21875 4.14583 1.55208 3.17708 2.34375 2.34375C3.17708 1.55208 4.14583 1.21875 5.25 1.34375C5.91667 0.489583 6.83333 0.0416667 8 0C9.16667 0.0416667 10.0833 0.489583 10.75 1.34375Z"
													fill="currentColor"
												/>
											</svg>
											Uso de repuestos de alta calidad y técnicas avanzadas
										</li>
										<li>
											<svg
												width="16"
												height="16"
												viewBox="0 0 16 16"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M7.5 10.5C7.16667 10.8125 6.82292 10.8125 6.46875 10.5L4.71875 8.75C4.42708 8.41667 4.42708 8.07292 4.71875 7.71875C5.07292 7.42708 5.41667 7.42708 5.75 7.71875L7 8.9375L9.96875 5.96875C10.3229 5.67708 10.6667 5.67708 11 5.96875C11.3125 6.32292 11.3125 6.66667 11 7L7.5 10.5Z"
													fill="currentColor"
												/>
												<path
													d="M10.75 1.34375C11.8333 1.21875 12.8021 1.55208 13.6562 2.34375C14.4479 3.17708 14.7812 4.14583 14.6562 5.25C15.4896 5.91667 15.9375 6.83333 16 8C15.9375 9.16667 15.4896 10.0833 14.6562 10.75C14.7812 11.8333 14.4479 12.8021 13.6562 13.6562C12.8021 14.4479 11.8333 14.7812 10.75 14.6562C10.0833 15.4896 9.16667 15.9375 8 16C6.83333 15.9375 5.91667 15.4896 5.25 14.6562C4.14583 14.7812 3.17708 14.4479 2.34375 13.6562C1.55208 12.8021 1.21875 11.8333 1.34375 10.75C0.489583 10.0833 0.0416667 9.16667 0 8C0.0416667 6.83333 0.489583 5.91667 1.34375 5.25C1.21875 4.14583 1.55208 3.17708 2.34375 2.34375C3.17708 1.55208 4.14583 1.21875 5.25 1.34375C5.91667 0.489583 6.83333 0.0416667 8 0C9.16667 0.0416667 10.0833 0.489583 10.75 1.34375Z"
													fill="currentColor"
												/>
											</svg>
											Atención personalizada y soporte técnico continuo
										</li>
									</ul>
									<h2 className="cs_fs_30 cs_mb_15">
										Beneficios de una Reparación Profesional en Alicante
									</h2>
									<p className="cs_mb_25">
										Contar con un servicio de reparación profesional no solo
										restablece el funcionamiento de tu sistema, sino que
										también:
									</p>
									<p className="cs_mb_25">
										<strong>Extiende la vida útil del equipo:</strong> Una
										reparación oportuna evita daños mayores y reduce el riesgo
										de averías recurrentes.
									</p>
									<p className="cs_mb_25">
										<strong>Reduce costos a largo plazo:</strong> Solucionar el
										problema de raíz minimiza la necesidad de intervenciones
										futuras, optimizando el consumo energético.
									</p>
									<p className="cs_mb_25">
										<strong>Garantiza la seguridad:</strong> Nuestros técnicos
										se aseguran de que cada componente cumpla con las normativas
										de seguridad, brindándote tranquilidad y confianza.
									</p>
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

export default RepairService;
