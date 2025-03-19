import { FC } from 'react';

interface VideoModalProps {
	isTrue: boolean;
	iframeSrc: string;
	handelClose: () => void;
}

const VideoModal: FC<VideoModalProps> = ({ isTrue, iframeSrc, handelClose }) => {
	return (
		<div className={`cs_video_popup ${isTrue ? 'active' : ''}`}>
			<div className="cs_video_popup-overlay"></div>
			<div className="cs_video_popup-content">
				<div className="cs_video_popup-layer"></div>
				<div className="cs_video_popup-container">
					<div className="cs_video_popup-align">
						<div className="embed-responsive embed-responsive-16by9">
							<iframe className="embed-responsive-item" src={iframeSrc}></iframe>
						</div>
					</div>
					<div className="cs_video_popup-close" onClick={handelClose}></div>
				</div>
			</div>
		</div>
	);
};

export default VideoModal;
