import 'animate.css/animate.min.css';
import { FormContact } from '../Form/FormContact';

const Contact = () => {
	return (
		<section className="py-md-5" id="contact">
			<div className="container py-5">
				<div className="row align-items-center">
					{/* Columna izquierda: ícono animado e información */}
					<div className="col-md-6 mb-4 mb-md-0 text-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="150"
							height="150"
							fill="currentColor"
							color="#cc4a00" // Tono naranja para el ícono
							className="bi bi-envelope animate__animated animate__pulse animate__infinite cs_accent_color"
							viewBox="0 0 16 16">
							<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1l-8 5-8-5V4zm0 2.236l7.555 4.722a.5.5 0 0 0 .89 0L16 6.236V12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6.236z" />
						</svg>
						<h3 className="mt-3">¿Tienes dudas?</h3>
						<p>Estamos aquí para ayudarte. ¡Contáctanos ahora!</p>
					</div>

					{/* Columna derecha: formulario de contacto */}
					<FormContact />
				</div>
			</div>
		</section>
	);
};

export default Contact;
