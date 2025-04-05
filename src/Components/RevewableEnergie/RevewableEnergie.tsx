import { FC } from 'react';
import data from '../../Data/QuestionsRepair.json';
import Image from 'next/image';
import type { AccordionItem } from '@/Interfaces/AccordionItem.interface';
import { Question } from '../Question/Question';

const RenewableEnergyService: FC = () => {
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
											src="/assets/img/service_energi_renewable.webp" // Asegúrate de tener esta imagen o actualiza la ruta
											alt="Instalación y mantenimiento de sistemas de energías renovables - Declima"
											width={720}
											height={305}
											className="w-100 h-100 object-fit-cover"
										/>
									</div>
									<h1 className="cs_fs_48 cs_mb_20">
										Energías Renovables: Soluciones Sostenibles para Hogar y
										Empresa – Declima
									</h1>
									<p className="cs_mb_25">
										En <strong>Declima</strong> nos especializamos en la{' '}
										<strong>
											instalación y mantenimiento de sistemas de energías
											renovables
										</strong>
										, ofreciendo soluciones innovadoras y eficientes para
										optimizar el uso de recursos naturales y reducir la huella
										de carbono.
									</p>
									<p className="cs_mb_25">
										Con amplia experiencia en el sector de la energía limpia,
										diseñamos proyectos a medida que integran tecnología solar,
										eólica y otras alternativas renovables, permitiéndote
										ahorrar en costos energéticos y contribuir a un futuro
										sostenible.
									</p>
									<h2 className="cs_fs_30 cs_mb_15">
										Proceso de Implementación de Soluciones Renovables
									</h2>
									<p className="cs_mb_25">
										Nuestro proceso inicia con un estudio de viabilidad y un
										análisis detallado de tus necesidades energéticas.
										Utilizamos tecnología avanzada para evaluar el potencial de
										energía en tu entorno, lo que nos permite diseñar una
										solución óptima y personalizada.
									</p>
									<p className="cs_mb_25">
										Durante la instalación, empleamos componentes de alta
										calidad y técnicas innovadoras, garantizando que cada
										sistema opere con máxima eficiencia y cumpla con las
										normativas de seguridad vigentes. Además, te brindamos
										asesoramiento continuo para optimizar el rendimiento de tu
										inversión.
									</p>
									<h2 className="cs_fs_30 cs_mb_15">
										¿Por Qué Elegir Declima para tus Soluciones en Energías
										Renovables?
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
											Evaluación energética precisa y personalizada
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
											Implementación de tecnología de punta y componentes de
											alta calidad
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
											Asesoramiento integral y mantenimiento preventivo
											continuo
										</li>
									</ul>
									<h2 className="cs_fs_30 cs_mb_15">
										Beneficios de una Instalación Profesional de Energías
										Renovables
									</h2>
									<p className="cs_mb_25">
										Contar con un servicio profesional en energías renovables no
										solo optimiza tu consumo energético, sino que también:
									</p>
									<p className="cs_mb_25">
										<strong>Reduce tus costos:</strong> Aprovecha fuentes
										limpias para disminuir tu factura de energía.
									</p>
									<p className="cs_mb_25">
										<strong>Incrementa el valor de tu propiedad:</strong> La
										implementación de sistemas sostenibles agrega un plus a tu
										inmueble.
									</p>
									<p className="cs_mb_25">
										<strong>Contribuye al medio ambiente:</strong> Disminuye tu
										huella de carbono y fomenta un futuro más ecológico.
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

export default RenewableEnergyService;
