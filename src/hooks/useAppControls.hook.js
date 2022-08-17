import { useState, useEffect } from 'react';

export const useAppControls = (stackTrace, setCurrentArr) => {
	const [isPlaying, setisPlaying] = useState(false);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		setisPlaying(false);
	}, [stackTrace]);

	useEffect(() => {
		if (index < stackTrace.length && isPlaying) {
			setTimeout(() => {
				setCurrentArr([...stackTrace[index]['arr']]);
				setIndex(index + 1);
			}, 1000);
		} else {
			setisPlaying(false);
			setIndex(0);
		}
	}, [isPlaying, index, setCurrentArr, stackTrace]);

	return [isPlaying, setisPlaying];
};
