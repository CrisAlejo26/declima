import BreadCumb from '@/Components/Common/BreadCumb';
import MaintenanceServiceDetail from '@/Components/MaintenanceService/MaintenanceService';

const MaintenanceService = () => {
	return (
		<>
			<div className="service-deatils-page">
				<BreadCumb Title="Mantenimiento aire acondicionado" />
				<MaintenanceServiceDetail />
			</div>
		</>
	);
};

export default MaintenanceService;
