import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';

import Frame from '../../molecules/frame/frame.component';

import { Algorithm } from '../../../utils/mappings/mappings.utils';

const Visualizer = ({ algorithm, array }) => {
	const [stackTrace, setStackTrace] = useState([]);

	useEffect(() => {
		const arr = [...array];
		const stackTrace = Algorithm[algorithm](arr);
		setStackTrace(stackTrace);
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
				<Frame bars={array.length} array={array} />
			</Box>
		</>
	);
};

export default Visualizer;
