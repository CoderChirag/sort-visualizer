import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';

import { Algorithm } from '../../../utils/mappings/mappings.utils';

const Visualizer = ({ algorithm, array }) => {
	const [stackTrace, setStackTrace] = useState([]);

	useEffect(() => {
		const arr = [...array];
		const stackTrace = Algorithm[algorithm](arr);
		setStackTrace(stackTrace);
	}, [array, algorithm]);

	return <></>;
};

export default Visualizer;
