import { useState, useEffect, useRef } from 'react';

export const useAppControls = (stackTrace, setCurrentArr) => {
	const [isPlaying, setisPlaying] = useState(false);
	const [index, setIndex] = useState(0);

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
		if (index < stackTrace.length && isPlaying) {
			timeout.current = setTimeout(() => {
				setCurrentArr([...stackTrace[index]['arr']]);
				setIndex(index + 1);
				timeout.current = null;
			}, 100);
		} else {
			if (timeout.current) {
				clearTimeout(timeout.current);
				timeout.current = null;
			}
			if (index === stackTrace.length) {
				setIndex(0);
			}
			setisPlaying(false);
		}
	}, [isPlaying, index, setCurrentArr, stackTrace]);

	return [isPlaying, setisPlaying, index];
};
