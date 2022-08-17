import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#8ce889',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	height: '100%',
}));

const Frame = ({ bars, array }) => {
	return (
		<>
			<Grid container sx={{ height: '100%' }}>
				<Grid item xs={12} sx={{ height: { xs: '50%', md: '60%' } }}>
					<Item>xs=12</Item>
				</Grid>
			</Grid>
		</>
	);
};

export default Frame;
