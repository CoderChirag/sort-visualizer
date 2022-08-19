import {
	createNewStackTrace,
	addToStackTrace,
	getLastSortedIndices,
	swap,
	createFunctionalityKeys,
} from '../utils/algorithms/algorithm.util';

const SelectionSort = arr => {
	// Cretae a new Stack Trace
	const stackTrace = createNewStackTrace(arr);
	// Sorting Algorithm
	for (let i = 0; i < arr.length - 1; i++) {
		let minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			addToStackTrace(stackTrace, arr, getLastSortedIndices(stackTrace), [
				minIndex,
				j,
			]);
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		addToStackTrace(
			stackTrace,
			arr,
			getLastSortedIndices(stackTrace),
			[],
			[i, minIndex]
		);
		swap(arr, i, minIndex);
		addToStackTrace(stackTrace, arr, [
			...getLastSortedIndices(stackTrace),
			i,
		]);
	}
	return stackTrace;
};

export const selectionSortFunctionalityKeys = createFunctionalityKeys(
	'Comparing',
	'Swapping'
);

export default SelectionSort;
