import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { whatsAppUrl } from '@/Components/WhatsApp/WhatsAppButton';
import FadeInSection from '@/Animations/FadeInSection';

interface AboutProps {
	Img: string;
	TitleUp: string;
	Title: string;
	Content: string;
	FeatureList: string[];
	NumberContent: string;
	Number: string;
	textLocation: string;
	address: string;
	addressLink: string;
}

const About: React.FC<AboutProps> = ({
	Img,
	TitleUp,
	Title,
	Content,
	FeatureList,
	NumberContent,
	Number,
	address,
	textLocation,
	addressLink,
}) => {
	return (
		<>
			<FadeInSection>
				<div className="cs_height_120 cs_height_lg_80" id="about"></div>
				<div className="cs_about cs_style_1">
					<div className="container">
						<div className="row align-items-center cs_gap_y_40">
							<div
								className="col-xl-6 wow fadeInLeft"
								data-wow-duration="0.9s"
								data-wow-delay="0.25s">
								<div className="cs_about_thumb">
									<Image
										src={Img}
										alt="About"
										width={636}
										height={617}
										sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 636px"
										className="w-auto h-auto"
									/>
								</div>
							</div>
							<div className="col-xl-6">
								<div className="cs_about_content">
									<div className="cs_section_heading cs_style_1 cs_mb_22">
										<h2 className="cs_section_subtitle cs_accent_color text-uppercase cs_medium cs_fs_20 cs_mb_10">
											<Image
												src="/assets/img/icons/fan.svg"
												alt="About"
												className="cs_section_subheading_icon"
												width={15}
												height={15}
											/>
											{TitleUp}
										</h2>
										<h2 className="cs_section_title cs_fs_48 cs_semibold mb-0">
											{Title}
										</h2>
									</div>
									<p className="cs_mb_30">{Content}</p>
									<div className="cs_tabs">
										<div className="cs_tab_body">
											<div className="cs_tab active" id="tab_1">
												<ul className="cs_list cs_style_1 cs_mp_0 cs_fs_18 cs_medium cs_heading_font">
													{FeatureList.map((item, index) => (
														<li key={index}>
															<Image
																src="/assets/img/right-arrow.png"
																alt="About"
																width={18}
																height={18}
															/>
															{item}
														</li>
													))}
												</ul>
											</div>
										</div>
									</div>
									<div className="cs_height_33 cs_height_lg_30"></div>
									<div className="cs_about_btns">
										<Link
											href={whatsAppUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="cs_btn cs_style_1"
											aria-label="Llamar al 637 988 046">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="20"
												height="20"
												fill="currentColor"
												viewBox="0 0 16 16"
												className="me-2">
												<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
											</svg>
											<span>637 988 046</span>
										</Link>
										<div className="cs_about_phone_number">
											<div className="cs_about_phone_number_icon cs_accent_bg cs_center">
												<Image
													src="/assets/img/icons/phone_icon.svg"
													alt="telephone"
													width={25}
													height={25}
												/>
											</div>
											<div className="cs_about_phone_number_right">
												<p className="mb-0">{NumberContent}</p>
												<h3 className="cs_heading_color cs_fs_18 cs_medium mb-0">
													<Link
														href={whatsAppUrl}
														target="_blank"
														rel="noopener noreferrer">
														{Number}
													</Link>
												</h3>
											</div>
										</div>
										<div className="cs_about_phone_number">
											<div className="cs_about_phone_number_icon cs_accent_bg cs_center">
												<Image
													src="/assets/img/location.svg"
													alt="location"
													width={35}
													height={35}
												/>
											</div>
											<div className="cs_about_phone_number_right">
												<p className="mb-0">{textLocation}</p>
												<h3 className="cs_heading_color cs_fs_18 cs_medium mb-0">
													<Link
														href={addressLink}
														target="_blank"
														rel="noopener noreferrer">
														{address}
													</Link>
												</h3>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="cs_height_120 cs_height_lg_80"></div>
			</FadeInSection>
		</>
	);
};

export default About;
