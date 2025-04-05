'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { contactTemplate } from '@/emails/email';

interface Errors {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export const FormContact = () => {
	const form = useRef<HTMLFormElement>(null);

	// Estados para los campos del formulario
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const [errors, setErrors] = useState<Errors>({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const validateEmail = (email: string): boolean => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	};

	const validateInputs = (): boolean => {
		let isValid = true;
		const newErrors: Errors = { name: '', email: '', subject: '', message: '' };
		const invalidPattern = /[<>]/; // No se permiten < o >

		// Validar nombre
		if (!name.trim()) {
			newErrors.name = 'El nombre es obligatorio.';
			isValid = false;
		} else if (invalidPattern.test(name)) {
			newErrors.name = 'El nombre contiene caracteres no permitidos.';
			isValid = false;
		}

		// Validar email
		if (!email.trim()) {
			newErrors.email = 'El email es obligatorio.';
			isValid = false;
		} else if (!validateEmail(email)) {
			newErrors.email = 'El email no es válido.';
			isValid = false;
		} else if (invalidPattern.test(email)) {
			newErrors.email = 'El email contiene caracteres no permitidos.';
			isValid = false;
		}

		// Validar asunto
		if (!subject.trim()) {
			newErrors.subject = 'El asunto es obligatorio.';
			isValid = false;
		} else if (invalidPattern.test(subject)) {
			newErrors.subject = 'El asunto contiene caracteres no permitidos.';
			isValid = false;
		}

		// Validar mensaje
		if (!message.trim()) {
			newErrors.message = 'El mensaje es obligatorio.';
			isValid = false;
		} else if (invalidPattern.test(message)) {
			newErrors.message = 'El mensaje contiene caracteres no permitidos.';
			isValid = false;
		}

		setErrors(newErrors);
		return isValid;
	};

	const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validateInputs()) {
			return;
		}

		// Genera el contenido HTML usando tu template.
		// Puedes incluir el asunto dentro del mensaje si lo deseas.
		const messageHtml = contactTemplate(name, email, subject, message);

		// En este ejemplo, la plantilla de EmailJS espera: message, name, email
		const templateParams = {
			name,
			subject,
			email,
			message: messageHtml,
		};

		emailjs
			.send(
				process.env.NEXT_PUBLIC_EMAIL_SERVICE as string,
				process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
				templateParams,
				process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string,
			)
			.then(
				result => {
					console.log('Correo enviado correctamente:', result.text);
					// Limpiar formulario y errores en caso de éxito
					setName('');
					setEmail('');
					setSubject('');
					setMessage('');
					setErrors({ name: '', email: '', subject: '', message: '' });
				},
				error => {
					console.error('Error al enviar el correo:', error);
				},
			);
	};

	return (
		<div className="col-md-6">
			<form
				ref={form}
				onSubmit={sendEmail}
				className="p-4 rounded shadow"
				style={{ backgroundColor: '#fff' }}>
				<h2 className="text-center mb-4" style={{ color: '#010f34' }}>
					Reserva una Cita
				</h2>
				<div className="mb-3">
					<input
						type="text"
						name="user_name"
						className="form-control"
						placeholder="Tu Nombre"
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					{errors.name && <div className="text-danger mt-1 small">{errors.name}</div>}
				</div>
				<div className="mb-3">
					<input
						type="email"
						name="user_email"
						className="form-control"
						placeholder="Tu Email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					{errors.email && <div className="text-danger mt-1 small">{errors.email}</div>}
				</div>
				<div className="mb-3">
					<input
						type="text"
						name="subject"
						className="form-control"
						placeholder="Asunto"
						value={subject}
						onChange={e => setSubject(e.target.value)}
					/>
					{errors.subject && (
						<div className="text-danger mt-1 small">{errors.subject}</div>
					)}
				</div>
				<div className="mb-3">
					<textarea
						name="message"
						className="form-control"
						rows={4}
						placeholder="Tu Mensaje..."
						value={message}
						onChange={e => setMessage(e.target.value)}></textarea>
					{errors.message && (
						<div className="text-danger mt-1 small">{errors.message}</div>
					)}
				</div>
				<button
					className="btn w-100"
					type="submit"
					style={{ backgroundColor: '#4c96f3', color: '#fff' }}>
					Reservar Cita
				</button>
			</form>
		</div>
	);
};

export default FormContact;
