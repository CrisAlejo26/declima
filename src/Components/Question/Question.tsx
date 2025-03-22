'use client';

import type { AccordionItem } from '@/Interfaces/AccordionItem.interface';
import { useEffect, useRef, useState } from 'react';

interface Accordion extends AccordionItem {
	index: number;
}

export const Question = ({ title, desc, index }: Accordion) => {
	const accordionContentRef = useRef<HTMLDivElement | null>(null);
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
	return (
		<>
			<div className={`cs_accordian ${index === openItemIndex ? 'active' : ''}`}>
				<div className="cs_accordian_head" onClick={() => handleItemClick(index)}>
					<h3 className="cs_accordian_title cs_fs_18 cs_medium mb-0">{title}</h3>
					<span className="cs_accordian_toggle"></span>
				</div>
				<div className="cs_accordian_body" ref={accordionContentRef}>
					<p>{desc}</p>
				</div>
			</div>
		</>
	);
};
