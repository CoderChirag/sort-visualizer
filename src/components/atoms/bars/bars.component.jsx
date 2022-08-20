import { useState, useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import {
	FunctionalityColorMappingsLight,
	FunctionalityColorMappingsDark,
} from '../../../utils/mappings/mappings.utils';

const Bar = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	marginTop: 0,
	textAlign: 'center',
	color:
		theme.palette.mode === 'dark' ? '#000' : theme.palette.text.secondary,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'flex-end',
	borderBottomLeftRadius: 0,
	borderBottomRightRadius: 0,
	backgroundColor:
		theme.palette.mode === 'dark'
			? FunctionalityColorMappingsDark.unsorted
			: FunctionalityColorMappingsLight.unsorted,
	transition: 'all 0.1s ease-in-out',
	'&:first-of-type': {
		marginLeft: 0,
	},
	'&:last-of-type': {
		marginRight: 0,
	},
}));

const Bars = ({ array, currentStackTraceInstance, playing }) => {
	const theme = useTheme();
	const [barsStates, setBarsStates] = useState([]);

	useEffect(() => {
		const newBarsStates = array.map((ele, index) => {
			let backgroundColor = null;
			if (currentStackTraceInstance?.functionalityA.includes(index)) {
				theme.palette.mode === 'light'
					? (backgroundColor =
							FunctionalityColorMappingsLight.functionalityA)
					: (backgroundColor =
							FunctionalityColorMappingsDark.functionalityA);
			}
			if (currentStackTraceInstance?.functionalityB.includes(index)) {
				theme.palette.mode === 'light'
					? (backgroundColor =
							FunctionalityColorMappingsLight.functionalityB)
					: (backgroundColor =
							FunctionalityColorMappingsDark.functionalityB);
			}
			if (currentStackTraceInstance?.functionalityC.includes(index)) {
				theme.palette.mode === 'light'
					? (backgroundColor =
							FunctionalityColorMappingsLight.functionalityC)
					: (backgroundColor =
							FunctionalityColorMappingsDark.functionalityC);
			}
			if (currentStackTraceInstance?.functionalityD.includes(index)) {
				theme.palette.mode === 'light'
					? (backgroundColor =
							FunctionalityColorMappingsLight.functionalityD)
					: (backgroundColor =
							FunctionalityColorMappingsDark.functionalityD);
			}
			if (currentStackTraceInstance?.sortedIndices.includes(index)) {
				theme.palette.mode === 'light'
					? (backgroundColor = FunctionalityColorMappingsLight.sorted)
					: (backgroundColor = FunctionalityColorMappingsDark.sorted);
			}
			return {
				isActive:
					currentStackTraceInstance?.functionalityA.includes(index) ||
					currentStackTraceInstance?.functionalityB.includes(index) ||
					currentStackTraceInstance?.functionalityC.includes(index) ||
					currentStackTraceInstance?.functionalityD.includes(index),
				isSorted:
					index ===
					currentStackTraceInstance?.sortedIndices[
						currentStackTraceInstance.sortedIndices.length - 1
					],
				backgroundColor,
			};
		});
		setBarsStates(newBarsStates);
	}, [currentStackTraceInstance, array, theme.palette.mode]);

	return (
		<>
			{array.map((num, index) => (
				<Bar
					key={`${index}__${num}`}
					sx={{
						height: `${(num / Math.max(...array)) * 100}%`,
						width: `${100 / array.length}%`,
						...(array.length >= 50
							? {
									margin: {
										xs: barsStates[index]?.isActive
											? 0.5
											: 0.08,
										md: barsStates[index]?.isActive
											? 0.8
											: 0.1,
									},
							  }
							: {}),
						...(array.length < 50
							? {
									margin: {
										xs: barsStates[index]?.isActive
											? 0.5
											: 0.1,
										md: barsStates[index]?.isActive
											? 1.5
											: playing
											? 0.2
											: 0.5,
									},
							  }
							: {}),
						...(array.length < 20
							? {
									margin: {
										xs: barsStates[index]?.isActive
											? 1.5
											: playing
											? 0.2
											: 0.5,
										md: barsStates[index]?.isActive
											? 5
											: playing
											? 0.2
											: 1,
									},
							  }
							: {}),
						marginBottom: '0!important',
						// marginLeft: {
						// 	xs: barsStates[index]?.isSorted
						// 		? `${theme.spacing(2)}!important`
						// 		: null,
						// 	md: barsStates[index]?.isSorted
						// 		? `${theme.spacing(5)}!important`
						// 		: null,
						// },
						backgroundColor:
							barsStates.length > index
								? barsStates[index].backgroundColor
								: null,
					}}
				>
					<Typography
						variant='h6'
						color='textSecondary'
						component='div'
						sx={{
							fontSize: {
								xs: '1rem',
								sm: '1.25rem',
							},
							display: {
								xs: `${
									100 / array.length <= 10
										? 'none'
										: 'inherit'
								}`,
								sm: `${
									100 / array.length <= 9 ? 'none' : 'inherit'
								}`,
								md: `${
									100 / array.length <= 4 ? 'none' : 'inherit'
								}`,
							},
							color:
								theme.palette.mode === 'dark'
									? '#000'
									: theme.palette.text.secondary,
						}}
					>
						{num}
					</Typography>
				</Bar>
			))}
		</>
	);
};

export default Bars;
