import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DropDown from './DropDown';
import { routes } from '@/routes';

interface NavProps {
	setMobileToggle: (value: boolean) => void;
}

const Nav: React.FC<NavProps> = ({ setMobileToggle }) => {
	const pathname = usePathname(); // Obtiene la ruta actual

	// Función para obtener el href correcto para enlaces de anclaje
	const getAnchorLink = (anchor: string) => {
		return pathname === '/' ? anchor : '/' + anchor;
	};

	return (
		<ul className="cs_nav_list fw-medium">
			<li>
				<Link href="/" className="text-decoration-none">
					Inicio
				</Link>
			</li>
			<li>
				<Link
					href="/about"
					onClick={() => setMobileToggle(false)}
					className="text-decoration-none">
					La empresa
				</Link>
			</li>
			<li className="menu-item-has-children">
				<Link
					href={getAnchorLink('#service')}
					onClick={() => setMobileToggle(false)}
					className="text-decoration-none">
					Servicios
				</Link>
				<DropDown>
					<ul>
						<li>
							<Link
								href={routes.maintenanceService}
								onClick={() => setMobileToggle(false)}
								className="text-decoration-none">
								Mantenimiento
							</Link>
						</li>
						<li>
							<Link
								href={routes.repairService}
								onClick={() => setMobileToggle(false)}
								className="text-decoration-none">
								Reparación
							</Link>
						</li>
						<li>
							<Link
								href={routes.intalationService}
								onClick={() => setMobileToggle(false)}
								className="text-decoration-none">
								Instalación
							</Link>
						</li>
					</ul>
				</DropDown>
			</li>
			<li>
				<Link
					href="/blog"
					onClick={() => setMobileToggle(false)}
					className="text-decoration-none">
					Blog
				</Link>
			</li>
			<li>
				<Link
					href="/work"
					onClick={() => setMobileToggle(false)}
					className="text-decoration-none">
					Trabajos
				</Link>
			</li>
			<li>
				<Link
					href={getAnchorLink('#contact')}
					onClick={() => setMobileToggle(false)}
					className="text-decoration-none">
					Contacto
				</Link>
			</li>
		</ul>
	);
};

export default Nav;
