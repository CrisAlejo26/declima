import React from 'react';
import FadeInSection from '@/Animations/FadeInSection';

interface SectionHeadingProps {
	title: string;
	subtitle: string;
	variant?: 'cs_type_1' | 'cs_type_2';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
	title,
	subtitle,
	variant = 'cs_type_1',
}) => {
	return (
		<FadeInSection>
			<div className={`cs_section_heading ${variant} text-center`}>
				<h3 className="cs_section_subtitle text-uppercase mb-2">{subtitle}</h3>
				<h2 className="cs_section_title cs_fs_72">{title}</h2>
			</div>
		</FadeInSection>
	);
};

export default SectionHeading;
