import {
	newStackTrace,
	addToStackTrace,
	getLastSortedIndices,
	swap,
	createFunctionalityKeys,
} from '../utils/algorithms/algorithm-util';

const bubbleSort = arr => {
	// Create a new Stack Trace
	const stackTrace = newStackTrace(arr);
	// Sorting Algorithm
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			// Comparing A[j] and A[j+1]
			addToStackTrace(stackTrace, arr, getLastSortedIndices(stackTrace), [
				j,
				j + 1,
			]);
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
				// Swap A[j] and A[j+1]
				addToStackTrace(
					stackTrace,
					arr,
					getLastSortedIndices(stackTrace),
					[],
					[j, j + 1]
				);
			}
		}
		// Final Sorted Value
		addToStackTrace(stackTrace, arr, [
			...getLastSortedIndices(stackTrace),
			arr.length - 1 - i,
		]);
	}
	return stackTrace;
};

export const bubbleSortFunctionalityKeys = createFunctionalityKeys(
	'Comparing',
	'Swapping'
);

export default bubbleSort;
