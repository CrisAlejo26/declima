import Link from 'next/link';
import DropDown from './DropDown';

interface NavProps {
	setMobileToggle: (value: boolean) => void;
}

const Nav: React.FC<NavProps> = ({ setMobileToggle }) => {
	return (
		<ul className="cs_nav_list fw-medium">
			<li className="menu-item-has-children">
				<Link href="/" className="text-decoration-none">
					Inicio
				</Link>
				<DropDown>
					<ul>
						<li>
							<Link
								href="/"
								onClick={() => setMobileToggle(false)}
								className="text-decoration-none">
								Inicio V1
							</Link>
						</li>
						<li>
							<Link
								href="/home2"
								onClick={() => setMobileToggle(false)}
								className="text-decoration-none">
								Inicio V2
							</Link>
						</li>
					</ul>
				</DropDown>
			</li>
			<li>
				<Link
					href="/about"
					onClick={() => setMobileToggle(false)}
					className="text-decoration-none">
					Acerca de
				</Link>
			</li>
			<li className="menu-item-has-children">
				<Link
					href="/service"
					onClick={() => setMobileToggle(false)}
					className="text-decoration-none">
					Servicios
				</Link>
				<DropDown>
					<ul>
						<li>
							<Link
								href="/service"
								onClick={() => setMobileToggle(false)}
								className="text-decoration-none">
								Servicios
							</Link>
						</li>
						<li>
							<Link
								href="/service/service-details"
								onClick={() => setMobileToggle(false)}
								className="text-decoration-none">
								Detalles del Servicio
							</Link>
						</li>
					</ul>
				</DropDown>
			</li>
			<li className="menu-item-has-children">
				<Link href="#" className="text-decoration-none">
					Páginas
				</Link>
				<DropDown>
					<ul>
						<li>
							<Link
								href="/team"
								onClick={() => setMobileToggle(false)}
								className="text-decoration-none">
								Equipo
							</Link>
						</li>
						<li>
							<Link
								href="/team/team-details"
								onClick={() => setMobileToggle(false)}
								className="text-decoration-none">
								Detalles del Equipo
							</Link>
						</li>
						<li>
							<Link
								href="/project"
								onClick={() => setMobileToggle(false)}
								className="text-decoration-none">
								Proyecto
							</Link>
						</li>
						<li>
							<Link
								href="/project/project-details"
								onClick={() => setMobileToggle(false)}
								className="text-decoration-none">
								Detalles del Proyecto
							</Link>
						</li>
					</ul>
				</DropDown>
			</li>
			<li className="menu-item-has-children">
				<Link
					href="/blog"
					onClick={() => setMobileToggle(false)}
					className="text-decoration-none">
					Blog
				</Link>
				<DropDown>
					<ul>
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
								href="/blog/blog-details"
								onClick={() => setMobileToggle(false)}
								className="text-decoration-none">
								Detalles del Blog
							</Link>
						</li>
					</ul>
				</DropDown>
			</li>
			<li>
				<Link
					href="/contact"
					onClick={() => setMobileToggle(false)}
					className="text-decoration-none">
					Contacto
				</Link>
			</li>
		</ul>
	);
};

export default Nav;
