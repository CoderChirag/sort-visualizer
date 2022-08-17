import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Frame from '../../molecules/frame/frame.component';
import AppControls from '../../molecules/app-controls/app-controls.component';

import { Algorithm } from '../../../utils/mappings/mappings.utils';

const Visualizer = ({ algorithm, array }) => {
	const [stackTrace, setStackTrace] = useState([]);
	const [currentArr, setCurrentArr] = useState([...array]);

	useEffect(() => {
		const arr = [...array];
		const stackTrace = Algorithm[algorithm](arr);
		setStackTrace(stackTrace);
		setCurrentArr([...array]);
	}, [array, algorithm]);

	const playAnimation = () => {
		let index = 0;
		console.log(1);
		const interval = setInterval(() => {
			if (index < stackTrace.length) {
				// console.log(stackTrace[index]['arr']);
				setCurrentArr([...stackTrace[index]['arr']]);
				index++;
			} else {
				clearInterval(interval);
			}
		}, 1000);
	};

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
				{/* <Grid container columnSpacing={0}> */}
				<Grid item xs={12} sx={{ height: { xs: '50%', md: '65%' } }}>
					<Frame array={currentArr} />
				</Grid>
				<Grid item xs={12} sx={{ padding: '20px 0' }}>
					<AppControls
						stackTrace={stackTrace}
						setCurrentArr={setCurrentArr}
					/>
					{/* <Grid container justifyContent='center' spacing={0}>
						<Grid item>
							<Paper>ABC</Paper>
						</Grid>
					</Grid> */}
				</Grid>
			</Box>
		</>
	);
};

export default Visualizer;
