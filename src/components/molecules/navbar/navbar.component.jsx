import { useState, useContext } from 'react';
import { useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import MailIcon from '@mui/icons-material/Mail';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { ThemeContext } from '../../../contexts/theme/theme.context';

const Navbar = () => {
	const theme = useTheme();
	const colorMode = useContext(ThemeContext);
	const [open, setOpen] = useState(false);

	const toggleDrawer = event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		setOpen(!open);
	};

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
						onClick={toggleDrawer}
					>
						<MenuIcon />
						<Drawer
							anchor='left'
							open={open}
							onClose={toggleDrawer}
						>
							<Box
								sx={{
									width: 250,
								}}
								role='presentation'
								onClick={toggleDrawer}
								onKeyDown={toggleDrawer}
							>
								<List>
									{[
										'Inbox',
										'Starred',
										'Send email',
										'Drafts',
									].map((text, index) => (
										<ListItem key={text} disablePadding>
											<ListItemButton>
												<ListItemIcon>
													{index % 2 === 0 ? (
														<InboxIcon color='text' />
													) : (
														<MailIcon color='text' />
													)}
												</ListItemIcon>
												<ListItemText primary={text} />
											</ListItemButton>
										</ListItem>
									))}
								</List>
								<Divider />
								<List>
									{['All mail', 'Trash', 'Spam'].map(
										(text, index) => (
											<ListItem key={text} disablePadding>
												<ListItemButton>
													<ListItemIcon>
														{index % 2 === 0 ? (
															<InboxIcon />
														) : (
															<MailIcon />
														)}
													</ListItemIcon>
													<ListItemText
														primary={text}
													/>
												</ListItemButton>
											</ListItem>
										)
									)}
								</List>
							</Box>
						</Drawer>
					</IconButton>
					<Typography
						variant='h5'
						component='span'
						sx={{ flexGrow: 1 }}
					>
						Sort Visualizer
					</Typography>
					<IconButton
						onClick={colorMode.toggleColorMode}
						color='inherit'
					>
						{theme.palette.mode === 'dark' ? (
							<Brightness7Icon />
						) : (
							<Brightness4Icon />
						)}
					</IconButton>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
