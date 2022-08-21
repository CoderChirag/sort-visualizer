import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import Menu from '../../components/atoms/menu/menu.component';
import Navbar from '../../components/molecules/navbar/navbar.component';
import Visualizer from '../../components/organisms/visualizer/visualizer.component';
import NotFound from '../../components/organisms/404/not-found.component';

import { AlgoMappings } from '../../utils/mappings/mappings.utils';

const SortingNavigation = () => {
	const theme = useTheme();
	const params = useParams();
	const [arrayLength, setArrayLength] = useState(5);
	const [array, setArray] = useState([]);
	const [isMenuOpen, setIsMenuOpen] = useState(null);

	const generateNewArray = () => {
		const newArray = [];
		for (let i = 0; i < arrayLength; i++) {
			newArray.push(Math.floor(Math.random() * arrayLength * 5) + 1);
		}
		setArray(newArray);
	};

	const handleArrayLengthChange = (event, newValue) => {
		if (typeof newValue === 'number') {
			setArrayLength(newValue);
		}
	};

	const decrementArrayLength = () => {
		if (arrayLength > 5) {
			setArrayLength(arrayLength - 1);
		}
	};

	const incrementArrayLength = () => {
		if (arrayLength < 100) {
			setArrayLength(arrayLength + 1);
		}
	};

	useEffect(() => {
		const newArray = [];
		for (let i = 0; i < arrayLength; i++) {
			newArray.push(Math.floor(Math.random() * arrayLength * 5) + 1);
		}
		setArray(newArray);
	}, [arrayLength]);

	return (
		<>
			<Navbar>
				{AlgoMappings[params.algorithm] && (
					<>
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
							min={5}
							max={100}
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
						<Menu
							anchorEl={isMenuOpen}
							setAnchorEl={setIsMenuOpen}
							sx={{ display: { xs: 'inline-flex', md: 'none' } }}
						>
							<MenuItem onClick={generateNewArray} disableRipple>
								Randomize
							</MenuItem>
							<MenuItem
								disableRipple
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<RemoveIcon
									style={{
										marginRight: 0,
										cursor: 'pointer',
										color:
											theme.palette.mode === 'light'
												? '#000'
												: '#fff',
									}}
									onClick={decrementArrayLength}
								/>
								<Typography variant='p' component='span'>
									{arrayLength}
								</Typography>
								<AddIcon
									style={{
										marginRight: '0',
										cursor: 'pointer',
										color:
											theme.palette.mode === 'light'
												? '#000'
												: '#fff',
									}}
									onClick={incrementArrayLength}
								/>
							</MenuItem>
						</Menu>
					</>
				)}
			</Navbar>
			{AlgoMappings[params.algorithm] ? (
				<Visualizer algorithm={params.algorithm} array={array} />
			) : (
				<NotFound />
			)}
		</>
	);
};

export default SortingNavigation;
