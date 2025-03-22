import { FC } from 'react';
import data from '../../Data/QuestionsInstallation.json';
import Image from 'next/image';
import type { AccordionItem } from '@/Interfaces/AccordionItem.interface';
import { Question } from '../Question/Question';

const InstallationService: FC = () => {
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
											src="/assets/img/service_installation.webp"
											alt="Instalación de aire acondicionado en Alicante - Declima"
											width={720}
											height={405}
											className="w-100 h-100 object-fit-cover"
										/>
									</div>
									<h1 className="cs_fs_48 cs_mb_20">
										Instalación de Aire Acondicionado en Alicante – Servicio
										Profesional por Declima
									</h1>
									<p className="cs_mb_25">
										En <strong>Declima</strong> nos especializamos en la{' '}
										<strong>
											instalación de aire acondicionado en Alicante
										</strong>
										, ofreciendo soluciones integrales y personalizadas para
										hogares, oficinas y locales comerciales. Nuestra empresa se
										destaca por su compromiso con la calidad, la eficiencia
										energética y la satisfacción del cliente, posicionándose
										como líder en el sector.
									</p>
									<p className="cs_mb_25">
										Nuestra experiencia abarca desde la instalación de sistemas
										tradicionales hasta las últimas innovaciones en tecnología
										de climatización. Cada proyecto es cuidadosamente evaluado
										para asegurar que el diseño y la implementación se adapten
										perfectamente a las necesidades específicas de cada espacio,
										garantizando un ambiente confortable y saludable durante
										todo el año.
									</p>
									<h2 className="cs_fs_30 cs_mb_15">
										Proceso de Instalación de Alta Calidad
									</h2>
									<p className="cs_mb_25">
										El proceso de instalación de aire acondicionado en Declima
										se basa en un riguroso análisis previo que incluye estudios
										de sitio y evaluaciones energéticas. Nuestros técnicos
										certificados realizan un diagnóstico completo para
										determinar la mejor solución de climatización. Esta
										planificación detallada permite optimizar la distribución
										del aire, evitando pérdidas energéticas y asegurando una
										integración perfecta con la infraestructura existente.
									</p>
									<p className="cs_mb_25">
										Durante la instalación, nos aseguramos de utilizar equipos
										de alta eficiencia energética, que no solo proporcionan un
										rendimiento superior, sino que también reducen
										significativamente el consumo energético y la huella de
										carbono. Este enfoque ecológico es fundamental para cumplir
										con las normativas vigentes y contribuir a un entorno más
										sostenible.
									</p>
									<h2 className="cs_fs_30 cs_mb_15">
										¿Por Qué Elegir Declima para Tu Instalación?
									</h2>
									<p className="cs_mb_25">
										Al optar por Declima, cuentas con un servicio integral y
										profesional que va más allá de la simple instalación de
										equipos. Nuestro compromiso incluye:
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
											Instalación precisa y a medida
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
											Eficiencia energética garantizada
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
											Soporte técnico continuo y asesoramiento experto
										</li>
									</ul>
									<h2 className="cs_fs_30 cs_mb_15">
										Ventajas de una Instalación Profesional en Alicante
									</h2>
									<p className="cs_mb_25">
										Realizar una instalación profesional de aire acondicionado
										no solo mejora el confort de tus espacios, sino que también:
									</p>
									<p className="cs_mb_25">
										<strong>Optimiza el rendimiento:</strong> Una instalación
										bien planificada y ejecutada permite que el sistema opere a
										su máxima capacidad, reduciendo el consumo de energía y
										prolongando la vida útil del equipo.
									</p>
									<p className="cs_mb_25">
										<strong>Garantiza la seguridad:</strong> Nuestros técnicos
										utilizan métodos y herramientas especializadas para asegurar
										que cada componente se instale conforme a las normativas de
										seguridad vigentes, evitando riesgos eléctricos y
										garantizando una operación estable.
									</p>
									<p className="cs_mb_25">
										<strong>Incrementa el valor de la propiedad:</strong> Un
										sistema de climatización moderno y eficiente no solo aporta
										confort, sino que también incrementa el valor de tu
										inmueble, siendo un punto de venta importante en el mercado
										inmobiliario de Alicante.
									</p>
									<h2 className="cs_fs_30 cs_mb_15">
										Tecnología e Innovación al Servicio de Tu Confort
									</h2>
									<p className="cs_mb_25">
										En Declima nos mantenemos a la vanguardia de las últimas
										innovaciones tecnológicas en climatización, incorporando
										sistemas inteligentes que permiten un control total del
										ambiente, tanto de forma remota como a través de interfaces
										intuitivas. Esto nos permite ofrecer soluciones
										personalizadas que se adaptan a las necesidades específicas
										de cada cliente, garantizando una experiencia de usuario
										inigualable.
									</p>
									<p className="cs_mb_25">
										Nuestra apuesta por la innovación se refleja en el uso de
										equipos que integran sensores de temperatura, humedad y
										calidad del aire, lo que facilita un monitoreo constante y
										la optimización automática de la climatización. Esto no solo
										mejora la eficiencia del sistema, sino que también
										contribuye a la sostenibilidad ambiental.
									</p>
									<h2 className="cs_fs_30 cs_mb_15">
										Compromiso con la Satisfacción y el Medio Ambiente
									</h2>
									<p className="cs_mb_25">
										Declima se distingue por su compromiso con la satisfacción
										del cliente y el cuidado del medio ambiente. Cada
										instalación se realiza con el máximo rigor técnico y un
										enfoque sostenible, utilizando refrigerantes de bajo impacto
										ambiental y promoviendo prácticas de eficiencia energética.
									</p>
									<p className="cs_mb_25">
										Nuestro equipo está formado por profesionales altamente
										cualificados, que se encargan de cada fase del proceso,
										desde el análisis inicial hasta la puesta en marcha y el
										seguimiento post-instalación. De esta forma, garantizamos un
										servicio integral que cubre todas tus necesidades y que se
										traduce en un ambiente más confortable y eficiente.
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

export default InstallationService;
