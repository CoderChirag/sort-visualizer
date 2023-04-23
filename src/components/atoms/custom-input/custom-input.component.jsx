import { useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';

import {
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';

export default function CustomInput({
	state,
	stateHandler,
	title,
	textContent,
	arrayLengthHandler,
	arrayStateHandler,
}) {
	const theme = useTheme();

	const inputArrayRef = useRef('');
	const [inputErrorConfig, setInputErrorConfig] = useState({
		error: false,
		helperText: '',
	});

	const handleInputSubmit = () => {
		const inputValue = inputArrayRef.current.value;

		if (!inputValue.match(/^\[(\s*\d+\s*,\s*)+(\d+\s*])$/)) {
			setInputErrorConfig({ error: true, helperText: 'Invalid Array' });
			return;
		}

		const array = inputValue
			.substring(1, inputValue.length - 1)
			.split(',')
			.map(num => parseInt(num.trim()));

		if (array.length < 5) {
			setInputErrorConfig({
				error: true,
				helperText: 'Minimum length of the array should be 5.',
			});
			return;
		}
		if (array.length > 100) {
			setInputErrorConfig({
				error: 'true',
				helperText: 'Maximum length of the array should be 100.',
			});
		}
		arrayLengthHandler(array.length);
		arrayStateHandler(array);
		stateHandler('closed');
	};

	const handleDialogClose = () => {
		setInputErrorConfig({ error: false, helperText: '' });
		stateHandler('closed');
	};

	return (
		<>
			<Dialog
				open={state === 'open' ? true : false}
				onClose={handleDialogClose}
			>
				<DialogTitle>{title}</DialogTitle>
				<DialogContent>
					<DialogContentText>{textContent}</DialogContentText>
					<TextField
						autoFocus
						margin='dense'
						id='name'
						label='Input Array'
						type='text'
						placeholder='[1,2,3,4,5]'
						fullWidth
						variant='standard'
						inputRef={inputArrayRef}
						error={inputErrorConfig.error}
						helperText={inputErrorConfig.helperText}
						onChange={setInputErrorConfig.bind(null, {
							error: false,
							helperText: '',
						})}
						sx={
							theme.palette.type === 'dark' &&
							!inputErrorConfig.error
								? {
										'& .Mui-focused': {
											color: '#fff !important',
											opacity: 0.7,
										},
										'& .Mui-focused:after': {
											borderBottom: '2px solid #fff',
										},
										'& .Mui-focused:before': {
											borderBottom: '2px solid #fff',
										},
								  }
								: theme.palette.type === 'light' &&
								  !inputErrorConfig.error
								? {
										'& .Mui-focused': {
											color: '#000 !important',
											opacity: 0.7,
										},
										'& .Mui-focused:after': {
											borderBottom: '2px solid #000',
										},
										'& .Mui-focused:before': {
											borderBottom: '2px solid #000',
										},
								  }
								: {}
						}
					/>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={handleDialogClose}
						sx={
							theme.palette.type === 'dark'
								? { color: '#fff' }
								: { color: '#000' }
						}
					>
						Cancel
					</Button>
					<Button
						onClick={handleInputSubmit}
						sx={
							theme.palette.type === 'dark'
								? { color: '#fff' }
								: { color: '#000' }
						}
					>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
		</>
	);
}
