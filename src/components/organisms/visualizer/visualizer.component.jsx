import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Frame from '../../molecules/frame/frame.component';
import AppControls from '../../molecules/app-controls/app-controls.component';

import { useAppControls } from '../../../hooks/useAppControls.hook';
import {
	AlgoMappings,
	FunctionalityColorMappingsLight,
	FunctionalityColorMappingsDark,
} from '../../../utils/mappings/mappings.utils';

const ColorBox = styled(Paper)(({ theme, darkbg, lightbg }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? darkbg : lightbg,
	width: '20px',
	height: '20px',
	marginRight: '12px',
}));

const Visualizer = ({ algorithm, array }) => {
	const [stackTrace, setStackTrace] = useState([]);
	const [currentArr, setCurrentArr] = useState([...array]);
	const [
		isPlaying,
		setIsPlaying,
		index,
		speed,
		setSpeed,
		skipToNextStep,
		skipToPrevStep,
		skipToFirstStep,
		playable,
		nextDisabled,
		prevDisabled,
	] = useAppControls(stackTrace, setCurrentArr);

	useEffect(() => {
		const arr = [...array];
		const stackTrace = AlgoMappings[algorithm].stackTrace(arr);
		setStackTrace(stackTrace);
		setCurrentArr([...array]);
	}, [array, algorithm]);

	return (
		<>
			<Box
				sx={{
					width: '100%',
					height: {
						xs: 'calc(100vh - 56px)',
						sm: 'calc(100vh - 64px)',
					},
					padding: { xs: '15px 8px', md: '20px 18px' },
				}}
			>
				<Grid
					container
					sx={{
						height: '100%',
						justifyContent: { xs: 'center', md: 'flex-start' },
					}}
					columnSpacing={0}
					alignItems='flex-start'
				>
					<Grid
						item
						xs={12}
						sx={{ display: 'flex', justifyContent: 'center' }}
					>
						<Typography
							variant='h4'
							sx={{
								textDecoration: 'underline',
								fontSize: { md: '1.5rem' },
							}}
						>
							{AlgoMappings[algorithm].name}
						</Typography>
					</Grid>
					<Grid
						item
						xs={12}
						sx={{ height: { xs: '50%', md: '65%' } }}
					>
						<Frame
							array={currentArr}
							currentStackTraceInstance={
								index < stackTrace.length
									? stackTrace[index]
									: null
							}
							playing={isPlaying}
						/>
					</Grid>
					<Grid item xs={12}>
						<AppControls
							isPlaying={isPlaying}
							setIsPlaying={setIsPlaying}
							speed={speed}
							setSpeed={setSpeed}
							skipToNext={skipToNextStep}
							skipToPrev={skipToPrevStep}
							skipToFirst={skipToFirstStep}
							playable={playable}
							nextDisabled={nextDisabled}
							prevDisabled={prevDisabled}
						/>
					</Grid>
					{AlgoMappings[algorithm].functionalityKeys
						.functionalityA && (
						<Grid
							item
							sx={{ display: 'flex', marginRight: '30px' }}
						>
							<ColorBox
								darkbg={
									FunctionalityColorMappingsDark.functionalityA
								}
								lightbg={
									FunctionalityColorMappingsLight.functionalityA
								}
							/>
							<Typography variant='body1' component='span'>
								{
									AlgoMappings[algorithm].functionalityKeys
										.functionalityA
								}
							</Typography>
						</Grid>
					)}
					{AlgoMappings[algorithm].functionalityKeys
						.functionalityB && (
						<Grid
							item
							sx={{ display: 'flex', marginRight: '30px' }}
						>
							<ColorBox
								darkbg={
									FunctionalityColorMappingsDark.functionalityB
								}
								lightbg={
									FunctionalityColorMappingsLight.functionalityB
								}
							/>
							<Typography variant='body1' component='span'>
								{
									AlgoMappings[algorithm].functionalityKeys
										.functionalityB
								}
							</Typography>
						</Grid>
					)}
					{AlgoMappings[algorithm].functionalityKeys
						.functionalityC && (
						<Grid
							item
							sx={{ display: 'flex', marginRight: '30px' }}
						>
							<ColorBox
								darkbg={
									FunctionalityColorMappingsDark.functionalityC
								}
								lightbg={
									FunctionalityColorMappingsLight.functionalityC
								}
							/>
							<Typography variant='body1' component='span'>
								{
									AlgoMappings[algorithm].functionalityKeys
										.functionalityC
								}
							</Typography>
						</Grid>
					)}
					{AlgoMappings[algorithm].functionalityKeys
						.functionalityD && (
						<Grid
							item
							sx={{ display: 'flex', marginRight: '30px' }}
						>
							<ColorBox
								darkbg={
									FunctionalityColorMappingsDark.functionalityD
								}
								lightbg={
									FunctionalityColorMappingsLight.functionalityD
								}
							/>
							<Typography variant='body1' component='span'>
								{
									AlgoMappings[algorithm].functionalityKeys
										.functionalityD
								}
							</Typography>
						</Grid>
					)}
					<Grid item sx={{ display: 'flex', marginRight: '30px' }}>
						<ColorBox
							darkbg={FunctionalityColorMappingsDark.sorted}
							lightbg={FunctionalityColorMappingsLight.sorted}
						/>
						<Typography variant='body1' component='span'>
							Sorted
						</Typography>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Visualizer;
