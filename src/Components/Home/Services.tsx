'use client';
import React, { useEffect } from 'react';
import { LoadBackgroundImages } from '../Common/LoadBackgroudImages';
import data from '../../Data/service.json';
import SectionTitle from '../Common/SectionTitle';
import { ServiceItem } from '@/Interfaces/Service.interface';
import { Service } from '../ServiceItem/ServiceItem';

const Services: React.FC = () => {
	useEffect(() => {
		LoadBackgroundImages();
	}, []);

	return (
		<section id="service" className="cs_bg_filed cs_light_blue_bg">
			<div className="cs_height_115 cs_height_lg_70"></div>
			<div className="container">
				<div className="cs_section_heading cs_style_1 text-center">
					<SectionTitle
						Title="Evaluación de la Calidad del Aire <br/> para Respirar Tranquilo"
						SubTitle="Nuestros mejores servicios"
					/>
				</div>
				<div className="cs_height_45 cs_height_lg_45"></div>
				<div className="row cs_gap_y_30">
					{(data as ServiceItem[]).map((item, i) => (
						<Service key={i} {...item} />
					))}
				</div>
			</div>
			<div className="cs_height_120 cs_height_lg_80"></div>
		</section>
	);
};

export default Services;
