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
	Algorithm,
	FunctionalityColorMappingsLight,
	FunctionalityColorMappingsDark,
} from '../../../utils/mappings/mappings.utils';

const ColorBox = styled(Paper)(({ theme, darkBg, lightBg }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? darkBg : lightBg,
	width: '20px',
	height: '20px',
	marginRight: '12px',
}));

const Visualizer = ({ algorithm, array }) => {
	const [stackTrace, setStackTrace] = useState([]);
	const [currentArr, setCurrentArr] = useState([...array]);
	const [isPlaying, setIsPlaying, index] = useAppControls(
		stackTrace,
		setCurrentArr
	);

	useEffect(() => {
		const arr = [...array];
		const stackTrace = Algorithm[algorithm].stackTrace(arr);
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
							stackTrace={stackTrace}
							isPlaying={isPlaying}
							setIsPlaying={setIsPlaying}
						/>
					</Grid>
					{/* <Grid item sx={{ display: 'flex', marginRight: '30px' }}>
						<ColorBox
							darkBg={FunctionalityColorMappingsDark.unsorted}
							lightBg={FunctionalityColorMappingsLight.unsorted}
						/>
						<Typography variant='body1' component='span'>
							Unsorted
						</Typography>
					</Grid> */}
					{Algorithm[algorithm].functionalityKeys.functionalityA && (
						<Grid
							item
							sx={{ display: 'flex', marginRight: '30px' }}
						>
							<ColorBox
								darkBg={
									FunctionalityColorMappingsDark.functionalityA
								}
								lightBg={
									FunctionalityColorMappingsLight.functionalityA
								}
							/>
							<Typography variant='body1' component='span'>
								{
									Algorithm[algorithm].functionalityKeys
										.functionalityA
								}
							</Typography>
						</Grid>
					)}
					{Algorithm[algorithm].functionalityKeys.functionalityB && (
						<Grid
							item
							sx={{ display: 'flex', marginRight: '30px' }}
						>
							<ColorBox
								darkBg={
									FunctionalityColorMappingsDark.functionalityB
								}
								lightBg={
									FunctionalityColorMappingsLight.functionalityB
								}
							/>
							<Typography variant='body1' component='span'>
								{
									Algorithm[algorithm].functionalityKeys
										.functionalityB
								}
							</Typography>
						</Grid>
					)}
					{Algorithm[algorithm].functionalityKeys.functionalityC && (
						<Grid
							item
							sx={{ display: 'flex', marginRight: '30px' }}
						>
							<ColorBox
								darkBg={
									FunctionalityColorMappingsDark.functionalityC
								}
								lightBg={
									FunctionalityColorMappingsLight.functionalityC
								}
							/>
							<Typography variant='body1' component='span'>
								{
									Algorithm[algorithm].functionalityKeys
										.functionalityC
								}
							</Typography>
						</Grid>
					)}
					{Algorithm[algorithm].functionalityKeys.functionalityD && (
						<Grid
							item
							sx={{ display: 'flex', marginRight: '30px' }}
						>
							<ColorBox
								darkBg={
									FunctionalityColorMappingsDark.functionalityD
								}
								lightBg={
									FunctionalityColorMappingsLight.functionalityD
								}
							/>
							<Typography variant='body1' component='span'>
								{
									Algorithm[algorithm].functionalityKeys
										.functionalityD
								}
							</Typography>
						</Grid>
					)}
					<Grid item sx={{ display: 'flex', marginRight: '30px' }}>
						<ColorBox
							darkBg={FunctionalityColorMappingsDark.sorted}
							lightBg={FunctionalityColorMappingsLight.sorted}
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
