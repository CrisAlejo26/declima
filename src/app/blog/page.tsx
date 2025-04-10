'use client';

import { useState } from 'react';
import { Card } from '@/Components/Blog/Card';
import { articles } from '@/Data/articlesBlog';

const BlogPage = () => {
	const [searchTerm, setSearchTerm] = useState('');

	// Filtrar las cards de acuerdo al término de búsqueda
	const filteredData = articles.filter(
		item =>
			item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			item.description.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			console.log('Buscar:', searchTerm);
		}
	};

	return (
		<>
			<header className="container my-5">
				<h1 className="text-center display-6">Lee nuestros principales blogs</h1>
				<h2 className="text-center fs-6 text-muted">
					Aquí encontrarás algunos temas interesantes que pueden interesarte a la hora de
					pensar en tu bienestar dentro del hogar
				</h2>
				<div className="d-flex justify-content-center my-4">
					<div className="input-group input-group-sm" style={{ maxWidth: '400px' }}>
						<input
							type="text"
							className="form-control"
							aria-label="Buscar en los blogs"
							placeholder="Buscar..."
							value={searchTerm}
							onChange={e => setSearchTerm(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
					</div>
				</div>
			</header>
			<main className="container py-5">
				<div className="row">
					{filteredData.length > 0 ? (
						filteredData.map((item, index) => (
							<div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
								<Card
									title={item.title}
									description={item.description}
									image={item.image}
									href={item.href}
								/>
							</div>
						))
					) : (
						<div className="col-12">
							<p className="text-center fs-5 text-muted">
								No se encontraron resultados para la búsqueda:{' '}
								<strong>{searchTerm}</strong>
							</p>
						</div>
					)}
				</div>
			</main>
		</>
	);
};

export default BlogPage;
