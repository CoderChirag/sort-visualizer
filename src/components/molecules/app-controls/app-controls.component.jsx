import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import MenuItem from '@mui/material/MenuItem';

import Menu from '../../atoms/menu/menu.component';

const PlayButton = styled(Button)(({ theme }) => ({
	borderRadius: '100%',
	// backgroundColor: theme.palette.secondary.main,
	// color: theme.palette.secondary.contrastText,
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

const AppControls = ({
	isPlaying,
	setIsPlaying,
	speed,
	setSpeed,
	skipToNext,
	skipToPrev,
	skipToFirst,
	playable,
	prevDisabled,
	nextDisabled,
}) => {
	const theme = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const updateSpeed = event => {
		const speed = parseFloat(event.target.childNodes[0].data.split('x')[0]);
		setSpeed(speed);
		setIsMenuOpen(false);
	};

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
					sx={{
						fontSize: { xs: '2rem', sm: '2.5rem' },
						cursor: 'pointer',
					}}
					onClick={skipToFirst}
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
					sx={{
						fontSize: { xs: '2rem', sm: '2.5rem' },
						cursor: 'pointer',
						opacity: prevDisabled && 0.5,
					}}
					onClick={skipToPrev}
				/>
			</Grid>
			<Grid item onClick={() => setIsPlaying(prevVal => !prevVal)}>
				<PlayButton
					disabled={!playable}
					sx={{
						backgroundColor: playable
							? 'secondary.main'
							: theme.palette.grey[500],
						color: 'secondary.contrastText',
					}}
				>
					{playable && isPlaying ? (
						<PauseIcon
							sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }}
						/>
					) : (
						<PlayArrowIcon
							sx={{
								fontSize: { xs: '2rem', sm: '2.5rem' },
							}}
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
				<SkipNextIcon
					sx={{
						fontSize: { xs: '2rem', sm: '2.5rem' },
						cursor: 'pointer',
						opacity: nextDisabled && 0.5,
						'&:focus': {},
					}}
					onClick={skipToNext}
				/>
			</Grid>
			<Grid
				item
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					paddingLeft: '0!important',
				}}
			>
				<Menu
					anchorEl={isMenuOpen}
					setAnchorEl={setIsMenuOpen}
					text={speed}
				>
					<MenuItem disableRipple onClick={updateSpeed}>
						0.25x
					</MenuItem>
					<MenuItem disableRipple onClick={updateSpeed}>
						0.5x
					</MenuItem>
					<MenuItem disableRipple onClick={updateSpeed}>
						1x
					</MenuItem>
					<MenuItem disableRipple onClick={updateSpeed}>
						2x
					</MenuItem>
					<MenuItem disableRipple onClick={updateSpeed}>
						4x
					</MenuItem>
				</Menu>
			</Grid>
		</Grid>
	);
};

export default AppControls;
