import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Frame from '../../molecules/frame/frame.component';
import AppControls from '../../molecules/app-controls/app-controls.component';

import { useAppControls } from '../../../hooks/useAppControls.hook';
import { Algorithm } from '../../../utils/mappings/mappings.utils';

const Visualizer = ({ algorithm, array }) => {
	const [stackTrace, setStackTrace] = useState([]);
	const [currentArr, setCurrentArr] = useState([...array]);
	const [isPlaying, setIsPlaying, index] = useAppControls(
		stackTrace,
		setCurrentArr
	);

	useEffect(() => {
		const arr = [...array];
		const stackTrace = Algorithm[algorithm](arr);
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
				<Grid item xs={12} sx={{ height: { xs: '50%', md: '65%' } }}>
					{console.log(index)}
					<Frame
						array={currentArr}
						currentStackTraceInstance={
							index < stackTrace.length ? stackTrace[index] : null
						}
						playing={isPlaying}
					/>
				</Grid>
				<Grid item xs={12} sx={{ padding: '20px 0' }}>
					<AppControls
						stackTrace={stackTrace}
						isPlaying={isPlaying}
						setIsPlaying={setIsPlaying}
					/>
				</Grid>
			</Box>
		</>
	);
};

export default Visualizer;
