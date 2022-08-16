import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

import NavbarMenu from '../../components/atoms/navbar-menu/navbar-menu.component';
import Navbar from '../../components/molecules/navbar/navbar.component';
import Visualizer from '../../components/organisms/visualizer/visualizer.component';

const SortingNavigation = () => {
	const params = useParams();
	const [arrayLength, setArrayLength] = useState(5);
	const [array, setArray] = useState([]);

	const generateNewArray = () => {
		const newArray = [];
		for (let i = 0; i < arrayLength; i++) {
			newArray.push(Math.floor(Math.random() * arrayLength * 5) + 1);
		}
		setArray(newArray);
	};

	useEffect(() => {
		const newArray = [];
		for (let i = 0; i < arrayLength; i++) {
			newArray.push(Math.floor(Math.random() * arrayLength * 5) + 1);
		}
		setArray(newArray);
	}, [arrayLength]);

	const handleArrayLengthChange = (event, newValue) => {
		if (typeof newValue === 'number') {
			setArrayLength(newValue);
		}
	};

	return (
		<>
			<Navbar>
				<Button
					color='inherit'
					sx={{ display: { xs: 'none', md: 'block' } }}
					onClick={generateNewArray}
				>
					Randomize
				</Button>
				<Slider
					defaultValue={arrayLength}
					value={arrayLength}
					aria-label='Default'
					color='secondary'
					sx={{
						width: '10%',
						marginLeft: '25px',
						marginRight: '10px',
						display: { xs: 'none', md: 'block' },
					}}
					onChange={handleArrayLengthChange}
				/>
				<Typography
					variant='p'
					component='span'
					sx={{
						marginRight: '25px',
						marginLeft: '10px',
						display: { xs: 'none', md: 'block' },
					}}
				>
					{arrayLength}
				</Typography>
				<NavbarMenu
					sx={{ display: { xs: 'inline-flex', md: 'none' } }}
					randomizeHandler={generateNewArray}
					arrayLength={arrayLength}
					arrayLengthHandler={setArrayLength}
				/>
			</Navbar>
			<Visualizer algorithm={params.algorithm} array={array} />
		</>
	);
};

export default SortingNavigation;
