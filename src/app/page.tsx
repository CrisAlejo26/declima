import dynamic from 'next/dynamic';
import Loader from '../Components/Loader/Loader';
import { JSX } from 'react/jsx-runtime';

const HomeSlider = dynamic(() => import('../Components/Home/HomeSlider'), {
	loading: () => <Loader />,
});
const About = dynamic(() => import('../Components/Home/About'), {
	loading: () => <Loader />,
});
const Services = dynamic(() => import('../Components/Home/Services'), {
	loading: () => <Loader />,
});
// const Team = dynamic(() => import('../Components/Home/Team'), {
// 	loading: () => <Loader />,
// });
const Choose = dynamic(() => import('../Components/Home/Choose'), {
	loading: () => <Loader />,
});
const Testimonial = dynamic(() => import('../Components/Home/Testimonial'), {
	loading: () => <Loader />,
});
const Faq = dynamic(() => import('../Components/Home/Faq'), {
	loading: () => <Loader />,
});
const Blog = dynamic(() => import('../Components/Home/Blog'), {
	loading: () => <Loader />,
});
const Contact = dynamic(() => import('../Components/Home/Contact'), {
	loading: () => <Loader />,
});

export default function Home(): JSX.Element {
	return (
		<main className="home-page">
			<HomeSlider />
			<About
				Img="/assets/img/about_img_1.webp"
				TitleUp="Sobre Nosotros"
				Title="Donde cada respiración es fresca y agradable"
				Content="Diagnóstico rápido y reparación de cualquier inconveniente en tu sistema de aire acondicionado para garantizar un rendimiento óptimo. Como miembros de APEME (Asociación Provincial de Empresarios de Montajes Eléctricos y Telecomunicaciones de Alicante), garantizamos los más altos estándares de calidad y profesionalidad en nuestros servicios..."
				FeatureList={[
					'Optimización del Flujo de Aire',
					'Pruebas de Calidad del Aire',
					'Instalación de Protección Contra Heladas',
					'Mantenimiento Integral',
					'Revisión del Control Climático',
					'Servicios de Emergencia en Climatización',
					'Servicios Energías Renovables',
					'Somos asociados en APEME',
				]}
				NumberContent="Llama en cualquier momento para servicios urgentes"
				Number="(+34) 637 988 046"
				textLocation="Visitanos en:"
				address="Calle Santa Leonor Nº11 Bajo , 03005, Alicante"
				addressLink="https://maps.app.goo.gl/QsH1XBQgWpuhdfCDA"
			/>
			<Services />
			{/* <Team /> */}
			<Choose />
			<Testimonial />
			<Faq />
			<Blog />
			<Contact />
		</main>
	);
}
