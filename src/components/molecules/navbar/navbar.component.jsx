import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position='static'
				color='primary'
				style={{
					boxShadow:
						'0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
				}}
			>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						component='span'
						sx={{ flexGrow: 1 }}
					>
						News
					</Typography>
					<Button color='inherit'>Login</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
