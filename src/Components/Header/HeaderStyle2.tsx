'use client';
import { useEffect, useState } from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderStyle2Props {
	variant?: string;
}

export default function HeaderStyle2({ variant }: HeaderStyle2Props) {
	const [mobileToggle, setMobileToggle] = useState<boolean>(false);
	const [isSticky, setIsSticky] = useState<string | undefined>(undefined);
	const [prevScrollPos, setPrevScrollPos] = useState<number>(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			if (currentScrollPos > prevScrollPos) {
				setIsSticky('cs-gescout_sticky'); // Scrolling down
			} else if (currentScrollPos !== 0) {
				setIsSticky('cs-gescout_show cs-gescout_sticky'); // Scrolling up
			} else {
				setIsSticky(undefined);
			}
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos]);

	return (
		<header
			className={`cs_site_header header_style_2 cs_style_1 ${
				variant ? variant : ''
			} cs_sticky_header cs_site_header_full_width ${
				mobileToggle ? 'cs_mobile_toggle_active' : ''
			} ${isSticky ? isSticky : ''}`}>
			<div className="cs_main_header">
				<div className="container">
					<div className="cs_main_header_in">
						<div className="cs_main_header_left">
							<Link className="cs_site_branding" href="/">
								<Image
									src="/assets/img/logo.svg"
									alt="Logo"
									width={212}
									height={54}
								/>
							</Link>
							<div className="cs_nav cs_primary_font fw-medium">
								<span
									className={
										mobileToggle
											? 'cs-munu_toggle cs_teggle_active'
											: 'cs-munu_toggle'
									}
									onClick={() => setMobileToggle(!mobileToggle)}>
									<span></span>
								</span>
								<Nav setMobileToggle={setMobileToggle} />
							</div>
						</div>
						<div className="cs_main_header_right">
							<div className="cs_header_social_links">
								<a href="#" className="cs_social_btn cs_center">
									<svg
										width="10"
										height="16"
										viewBox="0 0 10 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M8.71875 9H6.375V16H3.25V9H0.6875V6.125H3.25V3.90625C3.25 1.40625 4.75 0 7.03125 0C8.125 0 9.28125 0.21875 9.28125 0.21875V2.6875H8C6.75 2.6875 6.375 3.4375 6.375 4.25V6.125H9.15625L8.71875 9Z"
											fill="white"
										/>
									</svg>
								</a>
								<a href="#" className="cs_social_btn cs_center">
									<svg
										width="14"
										height="12"
										viewBox="0 0 14 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M12.5508 2.90625C12.5508 3.04297 12.5508 3.15234 12.5508 3.28906C12.5508 7.08984 9.67969 11.4375 4.40234 11.4375C2.76172 11.4375 1.25781 10.9727 0 10.1523C0.21875 10.1797 0.4375 10.207 0.683594 10.207C2.02344 10.207 3.25391 9.74219 4.23828 8.97656C2.98047 8.94922 1.91406 8.12891 1.55859 6.98047C1.75 7.00781 1.91406 7.03516 2.10547 7.03516C2.35156 7.03516 2.625 6.98047 2.84375 6.92578C1.53125 6.65234 0.546875 5.50391 0.546875 4.10938V4.08203C0.929688 4.30078 1.39453 4.41016 1.85938 4.4375C1.06641 3.91797 0.574219 3.04297 0.574219 2.05859C0.574219 1.51172 0.710938 1.01953 0.957031 0.609375C2.37891 2.33203 4.51172 3.48047 6.89062 3.61719C6.83594 3.39844 6.80859 3.17969 6.80859 2.96094C6.80859 1.375 8.09375 0.0898438 9.67969 0.0898438C10.5 0.0898438 11.2383 0.417969 11.7852 0.992188C12.4141 0.855469 13.043 0.609375 13.5898 0.28125C13.3711 0.964844 12.9336 1.51172 12.332 1.86719C12.9062 1.8125 13.4805 1.64844 13.9727 1.42969C13.5898 2.00391 13.0977 2.49609 12.5508 2.90625Z"
											fill="white"
										/>
									</svg>
								</a>
								<a href="#" className="cs_social_btn cs_center">
									<svg
										width="13"
										height="13"
										viewBox="0 0 13 13"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M3.10938 13H0.566406V4.82422H3.10938V13ZM1.82422 3.73047C1.03125 3.73047 0.375 3.04688 0.375 2.22656C0.375 1.10547 1.57812 0.394531 2.5625 0.96875C3.02734 1.21484 3.30078 1.70703 3.30078 2.22656C3.30078 3.04688 2.64453 3.73047 1.82422 3.73047Z"
											fill="white"
										/>
									</svg>
								</a>
								<a href="#" className="cs_social_btn cs_center">
									<svg
										width="16"
										height="11"
										viewBox="0 0 16 11"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M6.46875 5.25781C7.64453 5.58594 8.21875 6.48828 8.21875 7.69141C8.21875 9.66016 6.57812 10.5078 4.80078 10.5078H0.125V0.828125H4.69141C6.33203 0.828125 7.78125 1.29297 7.78125 3.23438C7.78125 4.19141 7.31641 4.82031 6.46875 5.25781Z"
											fill="white"
										/>
									</svg>
								</a>
							</div>
							<Link href="/contact" className="cs_btn cs_style_1 cs_color_1">
								<span>Solicite una cotización</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
