export const contactTemplate = (
	name: string,
	email: string,
	subject: string,
	message: string,
): string => {
	return `<!DOCTYPE html>
	<html lang="es">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Nuevo Mensaje de Contacto</title>
		<style>
			body {
				font-family: Arial, sans-serif;
				background-color: #f4f4f4;
				margin: 0;
				padding: 0;
			}
			.container {
				width: 100%;
				max-width: 600px;
				margin: 20px auto;
				background-color: #ffffff;
				border-radius: 8px;
				box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
				overflow: hidden;
			}
			.header {
				background-color: #4caf50;
				color: #ffffff;
				padding: 20px;
				text-align: center;
				font-size: 24px;
			}
			.content {
				padding: 20px;
				color: #333333;
				line-height: 1.6;
			}
			.footer {
				text-align: center;
				padding: 15px;
				background-color: #f4f4f4;
				color: #999999;
				font-size: 14px;
			}
			.footer a {
				color: #4caf50;
				text-decoration: none;
			}
		</style>
	</head>
	<body>
		<div class="container">
			<div class="header">
				Nuevo Mensaje de Contacto
			</div>
			<div class="content">
				<p><strong>Nombre:</strong> ${name}</p>
				<p><strong>Email:</strong> ${email}</p>
				<p><strong>Asunto:</strong> ${subject}</p>
				<p><strong>Mensaje:</strong></p>
				<p>${message}</p>
			</div>
			<div class="footer">
				<p>&copy; 2024 Declima. Todos los derechos reservados.</p>
			</div>
		</div>
	</body>
	</html>`;
};
