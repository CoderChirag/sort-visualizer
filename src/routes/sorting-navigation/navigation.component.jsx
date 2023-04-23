import { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import { Typography, Button, Slider, TextField, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import Menu from '../../components/atoms/menu/menu.component';
import Navbar from '../../components/molecules/navbar/navbar.component';
import Visualizer from '../../components/organisms/visualizer/visualizer.component';
import CustomInput from '../../components/atoms/custom-input/custom-input.component';
import NotFound from '../../components/organisms/404/not-found.component';

import { AlgoMappings } from '../../utils/mappings/mappings.utils';

const SortingNavigation = () => {
	const generateNewArray = length => {
		const newArray = [];
		for (let i = 0; i < length; i++) {
			newArray.push(Math.floor(Math.random() * arrayLength * 5) + 1);
		}
		return newArray;
	};

	const theme = useTheme();
	const params = useParams();
	const [arrayLength, setArrayLength] = useState(5);
	const [array, setArray] = useState(generateNewArray(arrayLength));
	const [isMenuOpen, setIsMenuOpen] = useState(null);
	const [customInputDialogState, setCustomInputDialogState] =
		useState('closed');

	const handleArrayLengthChange = (event, newValue) => {
		if (typeof newValue === 'number') {
			setArrayLength(newValue);
			setArray(generateNewArray(newValue));
		}
	};

	const decrementArrayLength = () => {
		if (arrayLength > 5) {
			setArrayLength(arrayLength - 1);
			setArray(generateNewArray(arrayLength - 1));
		}
	};

	const incrementArrayLength = () => {
		if (arrayLength < 100) {
			setArrayLength(arrayLength + 1);
			setArray(generateNewArray(arrayLength + 1));
		}
	};

	return (
		<>
			<Navbar>
				{AlgoMappings[params.algorithm] && (
					<>
						<CustomInput
							state={customInputDialogState}
							title={'Custom Array'}
							textContent={
								'Enter the array on which you want to visualize the sorting algorithm.'
							}
							stateHandler={setCustomInputDialogState}
							arrayLengthHandler={setArrayLength}
							arrayStateHandler={setArray}
						/>

						<Button
							color='inherit'
							sx={{ display: { xs: 'none', md: 'block' } }}
							onClick={setCustomInputDialogState.bind(
								null,
								'open'
							)}
						>
							Custom Array
						</Button>
						<Button
							color='inherit'
							sx={{ display: { xs: 'none', md: 'block' } }}
							onClick={() =>
								setArray(generateNewArray(arrayLength))
							}
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
							<MenuItem
								onClick={setCustomInputDialogState.bind(
									null,
									'open'
								)}
								disableRipple
							>
								{/* <CustomInput
									state={customInputDialogState}
									stateHandler={setCustomInputDialogState}
								>
									Custom Array
								</CustomInput> */}
								Custom Array
							</MenuItem>
							<MenuItem
								onClick={() =>
									setArray(generateNewArray(arrayLength))
								}
								disableRipple
							>
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
