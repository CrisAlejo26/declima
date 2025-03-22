import BreadCumb from '@/Components/Common/BreadCumb';
import RepairService from '@/Components/RepairService/RepairService';

const Repair = () => {
	return (
		<>
			<div className="service-deatils-page">
				<BreadCumb Title="Reparación aire acondicionado" />
				<RepairService />
			</div>
		</>
	);
};

export default Repair;
