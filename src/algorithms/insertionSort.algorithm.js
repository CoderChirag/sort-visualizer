import {
	createNewStackTrace,
	addToStackTrace,
	getLastSortedIndices,
	swap,
	createFunctionalityKeys,
} from '../utils/algorithms/algorithm.util';

const InsertionSort = arr => {
	// Create a new stack trace
	const stackTrace = createNewStackTrace(arr);
	for (let i = 1; i < arr.length; i++) {
		let j = i - 1;
		// Visualize: The array upto index i-1 is sorted
		addToStackTrace(stackTrace, arr, [
			...getLastSortedIndices(stackTrace),
			j,
		]);
		while (j >= 0 && arr[j] > arr[j + 1]) {
			// Visualize: Compare the element at index j with the element at index j+1
			addToStackTrace(stackTrace, arr, getLastSortedIndices(stackTrace), [
				j,
				j + 1,
			]);
			swap(arr, j, j + 1);
			// Visualize: Swapping arr[j + 1] and arr[j]
			addToStackTrace(
				stackTrace,
				arr,
				getLastSortedIndices(stackTrace),
				[],
				[j, j + 1]
			);
			j--;
		}
	}
	// Visualize: The last index of the array is now sorted
	addToStackTrace(stackTrace, arr, [
		...getLastSortedIndices(stackTrace),
		arr.length - 1,
	]);
	return stackTrace;
};

export const insertionSortFunctionalityKeys = createFunctionalityKeys(
	'Comparing',
	'Swapping'
);

export default InsertionSort;
