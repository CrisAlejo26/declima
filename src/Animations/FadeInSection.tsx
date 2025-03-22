'use client';

import { useRef, useEffect, useState, ReactNode, FC } from 'react';

interface FadeInSectionProps {
	children: ReactNode;
}

const FadeInSection: FC<FadeInSectionProps> = ({ children }) => {
	const domRef = useRef<HTMLDivElement | null>(null);
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		const currentRef = domRef.current;
		const observer = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					setIsVisible(true);
					observer.unobserve(entry.target);
				}
			});
		});

		if (currentRef) {
			observer.observe(currentRef);
		}

		return () => {
			if (currentRef) {
				observer.unobserve(currentRef);
			}
		};
	}, []);

	return (
		<div ref={domRef} className={`fade-in-bottom ${isVisible ? 'visible' : ''}`}>
			{children}
		</div>
	);
};

export default FadeInSection;
