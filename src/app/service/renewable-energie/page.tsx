import BreadCumb from '@/Components/Common/BreadCumb';
import RepairService from '@/Components/RevewableEnergie/RevewableEnergie';

const Repair = () => {
	return (
		<>
			<div className="service-deatils-page">
				<BreadCumb Title="Energías renovables" />
				<RepairService />
			</div>
		</>
	);
};

export default Repair;
