import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

const Bar = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	marginTop: 0,
	textAlign: 'center',
	color: theme.palette.text.secondary,
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'flex-end',
	borderBottomLeftRadius: 0,
	borderBottomRightRadius: 0,
	'&:first-of-type': {
		marginLeft: 0,
	},
	'&:last-of-type': {
		marginRight: 0,
	},
}));

const Bars = ({ array }) => {
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
				/>
			))}
			{/* <Paper
					elevation={0}
					key={`${index}__${num}`}
					sx={{
						height: `${(num / Math.max(...array)) * 100}%`,
						width: `${100 / array.length}%`,
					}}
				/> */}
		</>
	);
};

export default Bars;
