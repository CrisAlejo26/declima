import BreadCumb from '@/Components/Common/BreadCumb';
import MaintenanceServiceDetail from '@/Components/MaintenanceService/MaintenanceService';

const RepairService = () => {
	return (
		<>
			<div className="service-deatils-page">
				<BreadCumb Title="Reparación aire acondicionado" />
				<MaintenanceServiceDetail />
			</div>
		</>
	);
};

export default RepairService;
