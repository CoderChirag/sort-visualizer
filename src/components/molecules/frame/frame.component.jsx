import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Bars from '../../atoms/bars/bars.component';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor:
		theme.palette.mode === 'dark' ? theme.palette.primary.light : '#8ce889',
	...theme.typography.body2,
	// padding: { xs: '20px 25px 10px 25px', md: '20px 25px 10px 25px' },
	// padding: '20px 25px 10px 25px',
	textAlign: 'center',
	color: theme.palette.text.secondary,
	height: '100%',
	width: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'flex-end',
	[theme.breakpoints.up('xs')]: {
		padding: '20px 5px 0px 5px',
	},
	[theme.breakpoints.up('sm')]: {
		padding: '20px 10px 0px 10px',
	},
	[theme.breakpoints.up('md')]: {
		padding: '20px 25px 0px 25px',
	},
}));

const Frame = ({ array, currentStackTraceInstance, playing }) => {
	return (
		<>
			<Item>
				<Bars
					array={array}
					currentStackTraceInstance={currentStackTraceInstance}
					playing={playing}
				/>
			</Item>
		</>
	);
};

export default Frame;
