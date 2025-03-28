'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';
import { LoadBackgroundImages } from '../Common/LoadBackgroudImages';

interface WorkingHour {
	day: string;
	time: string;
}

interface QuickLink {
	title: string;
	link: string;
}

const Footer: React.FC = () => {
	// Horario de atención adaptado (puedes ajustarlo según tus datos reales)
	const WorkingHours: WorkingHour[] = [
		{ day: 'Jueves - Viernes', time: '09:00 - 17:00' },
		{ day: 'Lunes - Miércoles', time: '09:00 - 17:00' },
		{ day: 'Sábado', time: '07:00 - 15:00' },
		{ day: 'Domingo', time: 'Cerrado' },
	];

	// Enlaces rápidos adaptados en español para mejorar la navegación y usabilidad
	const QuickLinks: QuickLink[] = [
		{ title: 'Inicio', link: '/' },
		{ title: 'Sobre Nosotros', link: '#about' },
		{ title: 'Servicios', link: '#service' },
		{ title: 'Blog', link: '/blog' },
		{ title: 'Contacto', link: '#contact' },
	];

	useEffect(() => {
		LoadBackgroundImages();
	}, []);

	return (
		<footer className="cs_footer cs_style_1">
			<div className="cs_footer_top">
				<div className="container">
					<div className="cs_footer_top_in">
						<div className="cs_social_btns cs_style_1">
							<Link
								aria-label="Red social Facebook"
								href="#"
								className="cs_social_btn cs_center text-decoration-none">
								<svg
									width="10"
									height="16"
									viewBox="0 0 10 16"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M8.71875 9H6.375V16H3.25V9H0.6875V6.125H3.25V3.90625C3.25 1.40625 4.75 0 7.03125 0C8.125 0 9.28125 0.21875 9.28125 0.21875V2.6875H8C6.75 2.6875 6.375 3.4375 6.375 4.25V6.125H9.15625L8.71875 9Z"
										fill="white"
									/>
								</svg>
							</Link>
							<Link
								aria-label="Red social Instagram"
								href="#"
								className="cs_social_btn cs_center text-decoration-none">
								<svg
									width="14"
									height="12"
									viewBox="0 0 14 12"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M12.5508 2.90625C12.5508 3.04297 12.5508 3.15234 12.5508 3.28906C12.5508 7.08984 9.67969 11.4375 4.40234 11.4375C2.76172 11.4375 1.25781 10.9727 0 10.1523C0.21875 10.1797 0.4375 10.207 0.683594 10.207C2.02344 10.207 3.25391 9.74219 4.23828 8.97656C2.98047 8.94922 1.91406 8.12891 1.55859 6.98047C1.75 7.00781 1.91406 7.03516 2.10547 7.03516C2.35156 7.03516 2.625 6.98047 2.84375 6.92578C1.53125 6.65234 0.546875 5.50391 0.546875 4.10938V4.08203C0.929688 4.30078 1.39453 4.41016 1.85938 4.4375C1.06641 3.91797 0.574219 3.04297 0.574219 2.05859C0.574219 1.51172 0.710938 1.01953 0.957031 0.609375C2.37891 2.33203 4.51172 3.48047 6.89062 3.61719C6.83594 3.39844 6.80859 3.17969 6.80859 2.96094C6.80859 1.375 8.09375 0.0898438 9.67969 0.0898438C10.5 0.0898438 11.2383 0.417969 11.7852 0.992188C12.4141 0.855469 13.043 0.609375 13.5898 0.28125C13.3711 0.964844 12.9336 1.51172 12.332 1.86719C12.9062 1.8125 13.4805 1.64844 13.9727 1.42969C13.5898 2.00391 13.0977 2.49609 12.5508 2.90625Z"
										fill="white"
									/>
								</svg>
							</Link>
						</div>
						<div
							className="cs_footer_logo wow zoomIn"
							data-wow-duration="0.9s"
							data-wow-delay="0.25s">
							<Link href="/" className="text-decoration-none">
								<Image
									src="/favicon.webp"
									alt="Logo Declima"
									width={139}
									height={111}
								/>
							</Link>
						</div>
						<div className="cs_footer_contact_card">
							<div className="cs_footer_contact_card_icon cs_white_bg cs_center">
								<Image
									src="/assets/img/icons/call.svg"
									alt="Contacto"
									width={25}
									height={25}
								/>
							</div>
							<div>
								<p className="cs_white_color cs_fs_14 mb-0">
									¿Necesitas ayuda con tu aire acondicionado?
								</p>
								<h3 className="mb-0 cs_fs_24 cs_semibold cs_white_color">
									+34 637 988 046
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				className="cs_main_footer cs_bg_filed cs_primary_bg cs_white_color"
				style={{ backgroundImage: "url('/assets/img/footer_bg_1.webp')" }}>
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-5 col-lg-4 mb-4">
							<div className="cs_footer_widget text-start">
								<h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
									Horario de Atención
								</h2>
								<div className="cs_footer_widget_seperator">
									<span className="cs_accent_bg"></span>
									<span className="cs_white_bg"></span>
									<span className="cs_white_bg"></span>
								</div>
								<ul className="cs_working_hours list-unstyled">
									{WorkingHours.map((item, i) => (
										<li key={i} className="d-flex justify-content-between">
											<span>{item.day}</span>
											<span>{item.time}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="col-md-5 col-lg-4 mb-4">
							<div className="cs_footer_widget text-start">
								<h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_white_color cs_mb_10">
									Enlaces Rápidos
								</h2>
								<div className="cs_footer_widget_seperator">
									<span className="cs_accent_bg"></span>
									<span className="cs_white_bg"></span>
									<span className="cs_white_bg"></span>
								</div>
								<ul className="cs_footer_menu_2 list-unstyled">
									{QuickLinks.map((item, i) => (
										<li key={i}>
											<Link href={item.link} className="text-decoration-none">
												{item.title}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="cs_footer_bottom cs_accent_bg cs_white_color">
				<div className="container">
					<div className="cs_footer_bottom_in">
						<div className="cs_footer_copyright">
							Copyright@ {new Date().getFullYear()}{' '}
							<Link
								href="/"
								className="text-decoration-none text-white"
								aria-label="Ir al inicio">
								declima
							</Link>
							. Todos los derechos reservados.
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
