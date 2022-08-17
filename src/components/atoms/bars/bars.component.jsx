import { styled, useTheme } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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
	backgroundColor: theme.palette.mode === 'dark' ? '#ffffffde' : '#fff',
	'&:first-of-type': {
		marginLeft: 0,
	},
	'&:last-of-type': {
		marginRight: 0,
	},
}));

const Bars = ({ array }) => {
	const theme = useTheme();

	return (
		<>
			{array.map((num, index) => (
				<Bar
					key={`${index}__${num}`}
					sx={{
						height: `${(num / Math.max(...array)) * 100}%`,
						width: `${100 / array.length}%`,
						...(array.length >= 50
							? { margin: { xs: 0.08, md: 0.1 } }
							: {}),
						...(array.length < 50
							? { margin: { xs: 0.25, md: 0.5 } }
							: {}),
						...(array.length < 20
							? { margin: { xs: 0.5, md: 1 } }
							: {}),
						marginBottom: '0!important',
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
