import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NotFound = () => {
	return (
		<Box
			sx={{
				width: '100%',
				height: {
					xs: 'calc(100vh - 56px)',
					sm: 'calc(100vh - 64px)',
				},
				padding: { xs: '15px 8px', md: '20px 18px' },
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Typography
				variant='h3'
				component='span'
				sx={{
					color: 'secondary.main',
					fontWeight: '900',
					fontSize: {
						xs: '2rem',
						sm: '3rem',
					},
				}}
			>
				404 | Not Found
			</Typography>
		</Box>
	);
};

export default NotFound;
