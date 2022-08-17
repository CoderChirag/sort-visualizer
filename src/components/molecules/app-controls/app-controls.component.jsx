import { styled } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';

import { useAppControls } from '../../../hooks/useAppControls.hook';

const PlayButton = styled(Button)(({ theme }) => ({
	borderRadius: '100%',
	backgroundColor: theme.palette.secondary.main,
	color: theme.palette.secondary.contrastText,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '15px 15px',
	cursor: 'pointer',
	'&:hover': {
		backgroundColor:
			theme.palette.mode === 'light'
				? theme.palette.secondary.dark
				: theme.palette.secondary.light,
	},
}));

const AppControls = ({ stackTrace, setCurrentArr }) => {
	const [isPlaying, setIsPlaying] = useAppControls(stackTrace, setCurrentArr);

	return (
		<Grid container justifyContent='center' alignItems='center' spacing={2}>
			<Grid
				item
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<RestartAltIcon
					sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }}
				/>
			</Grid>
			<Grid
				item
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<SkipPreviousIcon
					sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }}
				/>
			</Grid>
			<Grid item>
				<PlayButton>
					{isPlaying ? (
						<PauseIcon
							sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }}
							onClick={() => setIsPlaying(false)}
						/>
					) : (
						<PlayArrowIcon
							sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }}
							onClick={() => setIsPlaying(true)}
						/>
					)}
				</PlayButton>
			</Grid>
			<Grid
				item
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<SkipNextIcon sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }} />
			</Grid>
			<Grid
				item
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				1x
			</Grid>
		</Grid>
	);
};

export default AppControls;
