'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { whatsAppUrl } from '@/Components/WhatsApp/WhatsAppButton';
import data from '../../Data/heroData.json';
import { LoadBackgroundImages } from '../Common/LoadBackgroudImages';
import VideoModal from '../VideoModal/VideoModal';
import Link from 'next/link';
import Image from 'next/image';

interface HeroDataItem {
	bgImg: string;
	subTitle: string;
	title: string;
	desc: string;
	link: string;
	img: string;
}

const HomeSlider: React.FC = () => {
	useEffect(() => {
		LoadBackgroundImages();
	}, []);

	const [iframeSrc, setIframeSrc] = useState<string>('about:blank');
	const [toggle, setToggle] = useState<boolean>(false);

	// const handleClick = (): void => {
	// 	setIframeSrc('https://www.youtube.com/embed/rRid6GCJtgc');
	// 	setToggle(prev => !prev);
	// };

	const handleClose = (): void => {
		setIframeSrc('about:blank');
		setToggle(prev => !prev);
	};

	const settings = {
		dots: true,
		infinite: true,
		speed: 900,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 4000,
		fade: true,
	};

	return (
		<div className="homeSlider-area">
			<Slider {...settings}>
				{(data as HeroDataItem[]).map((item, i) => (
					<div key={i} className="cs_slide">
						<div
							className="cs_hero cs_style_1 cs_bg_filed cs_primary_bg cs_center position-relative"
							style={{ backgroundImage: `url(${item.bgImg})` }}>
							<div
								className="position-absolute w-100 h-100"
								style={{
									background: 'rgba(0,0,0,0.35)',
									zIndex: 1,
								}}></div>
							<div className="container position-relative" style={{ zIndex: 2 }}>
								<div
									className="cs_hero_text wow fadeInRight"
									data-wow-duration="0.9s"
									data-wow-delay="0.25s">
									<h3 className="cs_hero_mini_title cs_gray_color cs_fs_18 cs_medium cs_mb_8">
										<Image
											src="/assets/img/icons/fan.svg"
											alt="img"
											width={15}
											height={15}
											priority
										/>
										{item.subTitle}
									</h3>
									<h1 className="cs_hero_title cs_white_color cs_fs_74 cs_mb_18">
										{item.title}
									</h1>
									<p className="cs_hero_subtitle cs_white_color cs_mb_34">
										{item.desc}
									</p>
									<div className="cs_hero_btns">
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
												<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
											</svg>
											<span>637 988 046</span>
										</Link>

										{/* <span
											className="cs_hero_player_btn cs_video_open"
											onClick={handleClick}>
											<span className="cs_player_btn cs_center">
												<span></span>
											</span>
											<span className="cs_hero_play_btn_text">
												Mira nuestra historia
											</span>
										</span> */}
									</div>
								</div>
							</div>
							{/* <div className="cs_hero_img">
								<Image src={item.img} alt="img" width={902} height={850} />
							</div> */}
						</div>
					</div>
				))}
			</Slider>

			<VideoModal isTrue={toggle} iframeSrc={iframeSrc} handelClose={handleClose} />
		</div>
	);
};

export default HomeSlider;
