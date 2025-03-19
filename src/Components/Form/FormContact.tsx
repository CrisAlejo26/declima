export const FormContact = () => {
	return (
		<>
			<div className="col-md-6">
				<form action="#" className="p-4 rounded shadow" style={{ backgroundColor: '#fff' }}>
					<h2 className="text-center mb-4" style={{ color: '#010f34' }}>
						Reserva una Cita
					</h2>
					<div className="mb-3">
						<input type="text" className="form-control" placeholder="Tu Nombre" />
					</div>
					<div className="mb-3">
						<input type="email" className="form-control" placeholder="Tu Email" />
					</div>
					<div className="mb-3">
						<input type="text" className="form-control" placeholder="Asunto" />
					</div>
					<div className="mb-3">
						<textarea
							className="form-control"
							rows={4}
							placeholder="Tu Mensaje..."></textarea>
					</div>
					<button
						className="btn w-100"
						type="submit"
						style={{ backgroundColor: '#cc4a00', color: '#fff' }}>
						Reservar Cita
					</button>
				</form>
			</div>
		</>
	);
};
