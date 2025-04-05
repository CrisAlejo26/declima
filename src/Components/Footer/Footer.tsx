'use client';
import Link from 'next/link';
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
				<div className="container"></div>
			</div>
			<div className="cs_main_footer cs_light_blue_bg">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-md-5 col-lg-4 mb-4">
							<div className="cs_footer_widget text-start">
								<h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_accent_color cs_mb_10">
									Horario de Atención
								</h2>
								<ul className="cs_working_hours list-unstyled cs_accent_color">
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
								<h2 className="cs_footer_widget_title cs_fs_24 cs_semibold cs_accent_color cs_mb_10">
									Enlaces Rápidos
								</h2>
								<ul className="cs_footer_menu_2 list-unstyled text-black">
									{QuickLinks.map((item, i) => (
										<li key={i}>
											<Link
												href={item.link}
												className="text-decoration-none cs_accent_color hover-primary">
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
			<div className="cs_copyright text-center py-3 cs_accent_bg">
				<div className="container">
					<p className="mb-0 text-white">
						Copyright {new Date().getFullYear()}{' '}
						<Link
							href="/"
							className="text-decoration-none text-white"
							aria-label="Ir al inicio">
							declima
						</Link>
						. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
