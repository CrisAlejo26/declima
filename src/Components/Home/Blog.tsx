import React from 'react';
import Link from 'next/link';
import SectionTitle from '../Common/SectionTitle';
import Image from 'next/image';

const Blog: React.FC = () => {
	return (
		<section className="cs_blog_section_wrap">
			<div className="cs_height_115 cs_height_lg_70"></div>
			<div className="container">
				<div className="cs_section_heading cs_style_1 text-center">
					<SectionTitle
						Title="Últimos Artículos y Noticias del Blog"
						SubTitle="Nuestras novedades"
					/>
				</div>
				<div className="cs_height_45 cs_height_lg_45"></div>
				<div className="row cs_gap_y_30">
					<div className="col-lg-3">
						<div className="cs_post cs_style_1">
							<div className="cs_post_meta cs_mb_13">
								<span className="cs_posted_by cs_center">
									12
									<br />
									May
								</span>
								<span className="cs_post_comment">
									<i className="fa-regular fa-comments"></i>03 Comentarios
								</span>
							</div>
							<h2 className="cs_fs_24 cs_semibold cs_mb_10">
								<Link href="/blog/blog-details" className="text-decoration-none">
									Respira Tranquilo con Aire Fresco
								</Link>
							</h2>
							<Link
								href="/blog/blog-details"
								className="cs_post_thumb text-decoration-none position-relative w-100">
								<Image
									src="/assets/img/post_1.webp"
									alt="Imagen del artículo Respira Tranquilo"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</Link>
							<Link
								href="/blog/blog-details"
								className="cs_text_btn cs_fs_16 text-uppercase cs_heading_color cs_bold text-decoration-none">
								LEER MÁS
								<svg
									width="14"
									height="14"
									viewBox="0 0 14 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M8.28125 1.21875L13.7812 6.46875C13.9271 6.61458 14 6.79167 14 7C14 7.20833 13.9271 7.38542 13.7812 7.53125L8.28125 12.7812C7.90625 13.0729 7.55208 13.0729 7.21875 12.7812C6.92708 12.4062 6.92708 12.0521 7.21875 11.7188L11.375 7.75H0.75C0.291667 7.70833 0.0416667 7.45833 0 7C0.0416667 6.54167 0.291667 6.29167 0.75 6.25H11.375L7.21875 2.28125C6.92708 1.94792 6.92708 1.59375 7.21875 1.21875C7.55208 0.927083 7.90625 0.927083 8.28125 1.21875Z"
										fill="currentColor"></path>
								</svg>
							</Link>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="cs_post cs_style_2">
							<Link
								href="/blog/blog-details"
								className="cs_post_thumb text-decoration-none position-relative w-100">
								<Image
									src="/assets/img/post_2.webp"
									alt="Imagen del artículo de mantenimiento"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</Link>
							<div className="cs_post_info">
								<div className="cs_post_info_in">
									<div className="cs_post_meta cs_mb_13">
										<span className="cs_posted_by cs_center">
											10
											<br />
											May
										</span>
										<span className="cs_post_admin">
											<i className="fa-regular fa-user"></i>Por{' '}
											<a href="#" className="text-white text-decoration-none">
												Admin
											</a>
										</span>
										<span className="cs_post_comment">
											<i className="fa-regular fa-comments"></i>08 Comentarios
										</span>
									</div>
									<h2 className="cs_fs_24 cs_semibold cs_mb_10 cs_white_color">
										<Link
											href="/blog/blog-details"
											className="text-decoration-none text-white">
											¿Qué tareas de mantenimiento puedo hacer para cuidar mi
											aire acondicionado?
										</Link>
									</h2>
									<Link
										href="/blog/blog-details"
										className="cs_text_btn cs_fs_16 text-uppercase cs_heading_color cs_bold text-decoration-none">
										LEER MÁS
										<svg
											width="14"
											height="14"
											viewBox="0 0 14 14"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path
												d="M8.28125 1.21875L13.7812 6.46875C13.9271 6.61458 14 6.79167 14 7C14 7.20833 13.9271 7.38542 13.7812 7.53125L8.28125 12.7812C7.90625 13.0729 7.55208 13.0729 7.21875 12.7812C6.92708 12.4062 6.92708 12.0521 7.21875 11.7188L11.375 7.75H0.75C0.291667 7.70833 0.0416667 7.45833 0 7C0.0416667 6.54167 0.291667 6.29167 0.75 6.25H11.375L7.21875 2.28125C6.92708 1.94792 6.92708 1.59375 7.21875 1.21875C7.55208 0.927083 7.90625 0.927083 8.28125 1.21875Z"
												fill="currentColor"></path>
										</svg>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-3">
						<div className="cs_post cs_style_1">
							<div className="cs_post_meta cs_mb_13">
								<span className="cs_posted_by cs_center">
									09
									<br />
									May
								</span>
								<span className="cs_post_comment">
									<i className="fa-regular fa-comments"></i>08 Comentarios
								</span>
							</div>
							<h2 className="cs_fs_24 cs_semibold cs_mb_10">
								<Link href="/blog/blog-details" className="text-decoration-none">
									Soluciones Frescas para Días Cálidos
								</Link>
							</h2>
							<Link
								href="/blog/blog-details"
								className="cs_post_thumb text-decoration-none position-relative w-100">
								<Image
									src="/assets/img/post_3.webp"
									alt="Imagen del artículo Soluciones Frescas"
									fill
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</Link>
							<Link
								href="/blog/blog-details"
								className="cs_text_btn cs_fs_16 text-uppercase cs_heading_color cs_bold text-decoration-none">
								LEER MÁS
								<svg
									width="14"
									height="14"
									viewBox="0 0 14 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M8.28125 1.21875L13.7812 6.46875C13.9271 6.61458 14 6.79167 14 7C14 7.20833 13.9271 7.38542 13.7812 7.53125L8.28125 12.7812C7.90625 13.0729 7.55208 13.0729 7.21875 12.7812C6.92708 12.4062 6.92708 12.0521 7.21875 11.7188L11.375 7.75H0.75C0.291667 7.70833 0.0416667 7.45833 0 7C0.0416667 6.54167 0.291667 6.29167 0.75 6.25H11.375L7.21875 2.28125C6.92708 1.94792 6.92708 1.59375 7.21875 1.21875C7.55208 0.927083 7.90625 0.927083 8.28125 1.21875Z"
										fill="currentColor"></path>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Image
				src="/assets/img/blog_section_img_1.svg"
				className="cs_blog_section_img wow fadeInLeft"
				alt="Decoración del blog"
				width={278}
				height={203}
			/>
			<div className="cs_height_120 cs_height_lg_80"></div>
		</section>
	);
};

export default Blog;
