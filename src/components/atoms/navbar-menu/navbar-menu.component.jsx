import { useState } from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Typography } from '@mui/material';

const StyledMenu = styled(props => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'right',
		}}
		{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop: theme.spacing(0.5),
		minWidth: '140px',
		color:
			theme.palette.mode === 'light' ? '#000' : theme.palette.grey[300],
		boxShadow:
			'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
		backgroundColor:
			theme.palette.mode === 'light'
				? '#acfbbe'
				: theme.palette.grey[850],
		'& .MuiMenu-list': {
			padding: '4px 0',
		},
		'& .MuiMenuItem-root': {
			'& .MuiSvgIcon-root': {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			'&:active': {
				backgroundColor: alpha(
					theme.palette.primary.main,
					theme.palette.action.selectedOpacity
				),
			},
		},
	},
}));

const NavbarMenu = ({
	sx,
	randomizeHandler,
	arrayLength,
	arrayLengthHandler,
}) => {
	const theme = useTheme();

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleRandomize = () => {
		randomizeHandler();
		setAnchorEl(null);
	};

	const decrementArrayLength = () => {
		if (arrayLength > 0) {
			arrayLengthHandler(arrayLength - 1);
		}
	};

	const incrementArrayLength = () => {
		arrayLengthHandler(arrayLength + 1);
	};

	return (
		<>
			{console.log(theme)}
			<Button
				id='demo-customized-button'
				aria-controls={open ? 'demo-customized-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				variant='contained'
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
				sx={{ minWidth: '0px', width: 'max-content', ...sx }}
			></Button>
			<StyledMenu
				id='demo-customized-menu'
				MenuListProps={{
					'aria-labelledby': 'demo-customized-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				{/* <MenuItem onClick={handleClose} disableRipple>
					<EditIcon />
					Edit
				</MenuItem>
				<MenuItem onClick={handleClose} disableRipple>
					<FileCopyIcon />
					Duplicate
				</MenuItem>
				<Divider sx={{ my: 0.5 }} />
				<MenuItem onClick={handleClose} disableRipple>
					<ArchiveIcon />
					Archive
				</MenuItem>
				<MenuItem onClick={handleClose} disableRipple>
					<MoreHorizIcon />
					More
				</MenuItem> */}
				<MenuItem onClick={handleRandomize} disableRipple>
					Randomize
				</MenuItem>
				<MenuItem
					disableRipple
					sx={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<RemoveIcon
						style={{
							marginRight: 0,
							cursor: 'pointer',
							color:
								theme.palette.mode === 'light'
									? '#000'
									: '#fff',
						}}
						onClick={decrementArrayLength}
					/>
					<Typography variant='p' component='span'>
						{arrayLength}
					</Typography>
					<AddIcon
						style={{
							marginRight: '0',
							cursor: 'pointer',
							color:
								theme.palette.mode === 'light'
									? '#000'
									: '#fff',
						}}
						onClick={incrementArrayLength}
					/>
				</MenuItem>
			</StyledMenu>
		</>
	);
};

export default NavbarMenu;
