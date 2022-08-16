import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

import Navbar from '../../components/molecules/navbar/navbar.component';

const SortingNavigation = () => {
	const [arrayLength, setArrayLength] = useState(10);
	const [array, setArray] = useState([]);

	const generateNewArray = () => {
		const newArray = [];
		for (let i = 0; i < arrayLength; i++) {
			newArray.push(Math.floor(Math.random() * arrayLength * 5));
		}
		setArray(newArray);
	};

	useEffect(() => {
		const newArray = [];
		for (let i = 0; i < arrayLength; i++) {
			newArray.push(Math.floor(Math.random() * arrayLength * 5));
		}
		setArray(newArray);
	}, [arrayLength]);

	const handleArrayLengthChange = (event, newValue) => {
		if (typeof newValue === 'number') {
			setArrayLength(newValue);
		}
	};

	return (
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
				sx={{ marginRight: '25px', marginLeft: '10px' }}
			>
				{arrayLength}
			</Typography>
		</Navbar>
	);
};

export default SortingNavigation;
