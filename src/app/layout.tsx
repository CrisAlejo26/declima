import { Outfit, DM_Sans } from 'next/font/google';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import { WhatsAppButton } from '@/Components/WhatsApp/WhatsAppButton';
import dynamic from 'next/dynamic';
import Loader from '@/Components/Loader/Loader';

const Header = dynamic(() => import('../Components/Header'), {
	loading: () => <Loader />,
});
const Footer = dynamic(() => import('../Components/Footer/Footer'), {
	loading: () => <Loader />,
});

const outfit = Outfit({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--heading-font',
});
const dm_Sans = DM_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--body-color-font',
});

export const metadata = {
	metadataBase: new URL('http://localhost:3000'),
	title: {
		absolute: 'Declima - Servicios de Aire Acondicionado en Alicante',
		default: 'Declima - Servicios de Aire Acondicionado en Alicante',
		template: '%s | Declima - Servicios de Aire Acondicionado en Alicante',
	},
	description:
		'Declima ofrece instalación, mantenimiento y reparación de aires acondicionados en Alicante y alrededores. Soluciones profesionales para tu confort.',
	openGraph: {
		title: 'Declima - Servicios de Aire Acondicionado en Alicante',
		description:
			'Declima ofrece instalación, mantenimiento y reparación de aires acondicionados en Alicante y alrededores. Conócenos y disfruta de un ambiente óptimo todo el año.',
		images: ['/openGraphImage.jpg'],
		locale: 'es_ES',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="author" content="declima" />
				<meta
					name="keywords"
					content="aire acondicionado, instalación, mantenimiento, reparación, Alicante, declima"
				/>
				<link rel="icon" href="/favicon.webp" sizes="any" />
				<link rel="canonical" href="https://www.declima.es/" />
			</head>
			<body className={`${outfit.variable} ${dm_Sans.variable}`}>
				<Header />
				{children}
				<WhatsAppButton />
				<Footer />
			</body>
		</html>
	);
}
