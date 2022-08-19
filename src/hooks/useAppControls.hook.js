import { useState, useEffect, useRef } from 'react';

export const useAppControls = (stackTrace, setCurrentArr) => {
	const [isPlaying, setisPlaying] = useState(false);
	const [index, setIndex] = useState(0);
	const [speed, setSpeed] = useState(1);
	const [playable, setPlayable] = useState(true);
	const [nextDisabled, setNextDisabled] = useState(false);
	const [prevDisabled, setPrevDisabled] = useState(false);

	let timeout = useRef(null);

	useEffect(() => {
		if (!isPlaying && timeout.current) {
			clearTimeout(timeout.current);
			timeout.current = null;
		}
	}, [isPlaying]);

	useEffect(() => {
		if (timeout.current) {
			clearTimeout(timeout.current);
			timeout.current = null;
		}
		setisPlaying(false);
		setIndex(0);
	}, [stackTrace]);

	useEffect(() => {
		if (index >= stackTrace.length - 1) {
			setNextDisabled(true);
			setPlayable(false);
		} else {
			setNextDisabled(false);
			setPlayable(true);
		}
		if (index === 0) {
			setPrevDisabled(true);
		} else {
			setPrevDisabled(false);
		}
	}, [index, stackTrace]);

	useEffect(() => {
		if (isPlaying) {
			if (index === 0) {
				setCurrentArr([...stackTrace[index + 1]['arr']]);
				setIndex(index + 1);
			} else if (index < stackTrace.length - 1) {
				setCurrentArr([...stackTrace[index]['arr']]);
				timeout.current = setTimeout(() => {
					setIndex(index + 1);
					timeout.current = null;
				}, 500 / speed);
			} else if (index === stackTrace.length - 1) {
				clearTimeout(timeout.current);
				setCurrentArr([...stackTrace[index]['arr']]);
				setisPlaying(false);
				// setIndex(0);
			}
		} else {
			if (index < stackTrace.length) {
				setCurrentArr([...stackTrace[index]['arr']]);
			}
		}

		return () => {
			clearTimeout(timeout.current);
		};
	}, [isPlaying, index, setCurrentArr, stackTrace, speed]);

	const skipToNextStep = () => {
		if (timeout.current) {
			clearTimeout(timeout.current);
			timeout.current = null;
		}
		if (index < stackTrace.length - 1) {
			setIndex(index + 1);
		}
	};

	const skipToPrevStep = () => {
		if (timeout.current) {
			clearTimeout(timeout.current);
			timeout.current = null;
		}
		if (index > 0) {
			setIndex(index - 1);
		}
	};

	const skipToFirstStep = () => {
		if (timeout.current) {
			clearTimeout(timeout.current);
			timeout.current = null;
		}
		setIndex(0);
	};

	return [
		isPlaying,
		setisPlaying,
		index,
		speed,
		setSpeed,
		skipToNextStep,
		skipToPrevStep,
		skipToFirstStep,
		playable,
		nextDisabled,
		prevDisabled,
	];
};
