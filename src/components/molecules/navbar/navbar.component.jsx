import { useState, useContext } from 'react';
import { useTheme, styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../../../contexts/theme/theme.context';
import { AlgoMappings } from '../../../utils/mappings/mappings.utils';

const drawerWidth = 250;

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'space-between',
}));

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Navbar = ({ children }) => {
	const theme = useTheme();
	const colorMode = useContext(ThemeContext);
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleDrawer = event => {
		if (
			event.type === 'keydown' &&
			(event.key === 'Tab' || event.key === 'Shift')
		) {
			return;
		}
		setMenuOpen(!menuOpen);
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				component='nav'
				position='fixed'
				sx={{
					backgroundColor: 'primary.main',
				}}
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
						<MenuIcon
							sx={{
								marginRight: { xs: '-15px', md: '15px' },
							}}
						/>
						<Drawer
							anchor='left'
							open={menuOpen}
							onClose={toggleDrawer}
							sx={{
								transform: 'none',
								transition:
									'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
								width: drawerWidth,
							}}
						>
							<Box
								sx={{
									width: drawerWidth,
									overflowX: 'hidden',
								}}
								role='presentation'
								onClick={toggleDrawer}
								onKeyDown={toggleDrawer}
							>
								<DrawerHeader>
									<Link to='/'>
										<Typography
											variant='h6'
											sx={{
												marginTop: '5px',
												justifySelf: 'center',
											}}
										>
											<HomeIcon
												sx={{
													marginBottom: '-4px',
													marginRight: '8px',
												}}
											/>
											Home
										</Typography>
									</Link>
									<IconButton onClick={toggleDrawer}>
										{theme.direction === 'ltr' ? (
											<ChevronLeftIcon />
										) : (
											<ChevronRightIcon />
										)}
									</IconButton>
								</DrawerHeader>
								<Divider />
								<Divider />
								<List
									subheader={
										<ListSubheader
											component='div'
											sx={{
												backgroundColor: 'inherit',
												fontSize: '1rem',
												fontWeight: '900',
												color: 'text.secondary',
											}}
										>
											Quadratic
										</ListSubheader>
									}
									sx={{ marginTop: '15px' }}
								>
									{Object.keys(AlgoMappings).map(algo => {
										return (
											AlgoMappings[algo].type ===
												'quadratic' && (
												<Link
													to={AlgoMappings[algo].link}
													key={algo}
												>
													<ListItemButton>
														<ListItemIcon
															sx={{ minWidth: 0 }}
														>
															<ChevronRightIcon
																sx={{
																	minWidth:
																		'auto',
																	marginRight:
																		'15px',
																	marginLeft:
																		'8px',
																}}
															/>
														</ListItemIcon>
														<ListItemText
															primary={
																AlgoMappings[
																	algo
																].name
															}
														></ListItemText>
													</ListItemButton>
												</Link>
											)
										);
									})}
								</List>
								<List
									subheader={
										<ListSubheader
											component='div'
											sx={{
												backgroundColor: 'inherit',
												fontSize: '1rem',
												fontWeight: '900',
												color: 'text.secondary',
											}}
										>
											Logarithmic
										</ListSubheader>
									}
									sx={{ marginTop: '15px' }}
								>
									{Object.keys(AlgoMappings).map(algo => {
										return (
											AlgoMappings[algo].type ===
												'logarithmic' && (
												<Link
													to={AlgoMappings[algo].link}
													key={algo}
												>
													<ListItemButton>
														<ListItemIcon
															sx={{ minWidth: 0 }}
														>
															<ChevronRightIcon
																sx={{
																	minWidth:
																		'auto',
																	marginRight:
																		'15px',
																	marginLeft:
																		'8px',
																}}
															/>
														</ListItemIcon>
														<ListItemText
															primary={
																AlgoMappings[
																	algo
																].name
															}
														></ListItemText>
													</ListItemButton>
												</Link>
											)
										);
									})}
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
					{/* <Button
						color='inherit'
						sx={{ display: { xs: 'none', md: 'block' } }}
					>
						Randomize
					</Button>
					<Slider
						defaultValue={10}
						valueLabelDisplay='auto'
						aria-label='Default'
						color='secondary'
						sx={{
							width: '10%',
							marginLeft: '25px',
							marginRight: '10px',
							display: { xs: 'none', md: 'block' },
						}}
					/> */}
					{children}
					<IconButton
						onClick={colorMode.toggleColorMode}
						color='inherit'
					>
						{theme.palette.mode === 'dark' ? (
							<Brightness7Icon sx={{ color: 'secondary.dark' }} />
						) : (
							<Brightness4Icon />
						)}
					</IconButton>
				</Toolbar>
			</AppBar>
			<Offset />
		</Box>
	);
};

export default Navbar;
