import { Outlet } from 'react-router-dom';
import Navbar from '../../components/molecules/navbar/navbar.component';

const Navigation = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default Navigation;
