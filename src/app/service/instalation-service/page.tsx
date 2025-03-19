import { FC } from 'react';
import BreadCumb from '@/Components/Common/BreadCumb';
import MaintenanceServiceDetail from '@/Components/MaintenanceService/MaintenanceService';

const Page: FC = () => {
	return (
		<div className="service-deatils-page">
			<BreadCumb Title="Instalación aire acondicionado" />
			<MaintenanceServiceDetail />
		</div>
	);
};

export default Page;
