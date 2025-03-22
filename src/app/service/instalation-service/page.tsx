import { FC } from 'react';
import BreadCumb from '@/Components/Common/BreadCumb';
import InstallationService from '@/Components/InstallationService/InstallationService';

const Page: FC = () => {
	return (
		<div className="service-deatils-page">
			<BreadCumb Title="Instalación aire acondicionado" />
			<InstallationService />
		</div>
	);
};

export default Page;
