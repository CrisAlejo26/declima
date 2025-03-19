'use client';
import React, { useEffect, useRef, useState } from 'react';
import data from '../../Data/accordion.json';
import SectionTitle from '../Common/SectionTitle';
import Image from 'next/image';

interface AccordionItem {
	title: string;
	desc: string;
}

interface FaqContentType {
	img1: string;
	img2: string;
	Experience: string;
	BestAward: string;
	Content: string;
}

const Faq: React.FC = () => {
	const accordionContentRef = useRef<HTMLDivElement>(null);
	const [openItemIndex, setOpenItemIndex] = useState<number>(-1);
	const [firstItemOpen, setFirstItemOpen] = useState<boolean>(true);

	const handleItemClick = (index: number): void => {
		if (index === openItemIndex) {
			setOpenItemIndex(-1);
		} else {
			setOpenItemIndex(index);
		}
	};

	useEffect(() => {
		if (firstItemOpen) {
			setOpenItemIndex(0);
			setFirstItemOpen(false);
		}
	}, [firstItemOpen]);

	const FaqContent: FaqContentType = {
		img1: '/assets/img/faq_img_1.webp',
		img2: '/assets/img/faq_img_2.webp',
		Experience: '25+',
		BestAward: 'Premio a la Mejor Empresa de Climatización',
		Content:
			'Nuestro sistema de aire acondicionado es ideal para tu hogar. Con nuestro servicio de consulta FrostFree, recibes orientación experta adaptada a tus necesidades específicas para optimizar el rendimiento y la eficiencia energética.',
	};

	return (
		<>
			<div className="cs_height_120 cs_height_lg_80"></div>
			<div className="container">
				<div className="row cs_gap_y_40">
					<div
						className="col-xl-6 wow fadeInLeft"
						data-wow-duration="0.9s"
						data-wow-delay="0.25s">
						<div className="cs_faq_thumb">
							<div className="cs_faq_thumb_1">
								<Image
									src={FaqContent.img1}
									alt="Imagen FAQ"
									width={450}
									height={530}
									style={{ width: 'auto', height: 'auto' }}
								/>
							</div>
							<div className="cs_faq_thumb_2">
								<div className="cs_faq_thumb_2_in">
									<div className="cs_faq_experience_box cs_accent_bg text-center">
										<h3 className="cs_fs_48 cs_white_color">
											{FaqContent.Experience}
										</h3>
										<p className="cs_white_color mb-0">
											Años <br /> de Experiencia
										</p>
										<svg
											width="72"
											height="42"
											viewBox="0 0 72 42"
											className="cs_accent_color"
											fill="none"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M0 42V0L72 42H0Z" fill="currentColor" />
										</svg>
									</div>
									<Image
										src={FaqContent.img2}
										alt="Imagen adicional FAQ"
										width={330}
										height={330}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="col-xl-6">
						<div className="cs_section_heading cs_style_1">
							<SectionTitle Title="Preguntas Frecuentes" SubTitle="Preguntas" />
							<p className="cs_section_text">{FaqContent.Content}</p>
						</div>
						<div className="cs_height_45 cs_height_lg_45"></div>
						<div className="cs_accordians cs_style_1">
							{(data as AccordionItem[]).map((item, index) => (
								<div
									key={index}
									className={`cs_accordian ${
										index === openItemIndex ? 'active' : ''
									}`}>
									<div
										className="cs_accordian_head"
										onClick={() => handleItemClick(index)}>
										<h2 className="cs_accordian_title cs_fs_18 cs_medium mb-0">
											{item.title}
										</h2>
										<span className="cs_accordian_toggle"></span>
									</div>
									<div className="cs_accordian_body" ref={accordionContentRef}>
										<p>{item.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="cs_height_120 cs_height_lg_80"></div>
		</>
	);
};

export default Faq;
