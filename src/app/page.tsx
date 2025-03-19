import { JSX } from 'react';
import HomeSlider from '../Components/Home/HomeSlider';
import About from '../Components/Home/About';
import Blog from '../Components/Home/Blog';
import Choose from '../Components/Home/Choose';
import Faq from '../Components/Home/Faq';
import Services from '../Components/Home/Services';
import Team from '../Components/Home/Team';
import Testimonial from '../Components/Home/Testimonial';

export default function Home(): JSX.Element {
	return (
		<main className="home-page">
			<HomeSlider />
			<About
				Img="/assets/img/about_img_1.jpg"
				TitleUp="Sobre Nosotros"
				Title="Donde cada respiración es fresca y agradable"
				Content="Diagnóstico rápido y reparación de cualquier inconveniente en tu sistema de aire acondicionado para garantizar un rendimiento óptimo. Inspección de conductos para detectar fugas o daños, seguida de un sellado profesional que mejora la eficiencia energética."
				FeatureList={[
					'Optimización del Flujo de Aire',
					'Pruebas de Calidad del Aire',
					'Instalación de Protección Contra Heladas',
					'Mantenimiento Integral',
					'Revisión del Control Climático',
					'Servicios de Emergencia en Climatización',
				]}
				NumberContent="Llama en cualquier momento para servicios urgentes"
				Number="(+34) 637 988 046"
			/>

			<Services />
			<Team />
			<Choose />
			<Testimonial />
			<Faq />
			<Blog />
		</main>
	);
}
