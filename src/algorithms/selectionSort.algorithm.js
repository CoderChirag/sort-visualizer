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
		// Visualize: Initial minIndex
		addToStackTrace(
			stackTrace,
			arr,
			getLastSortedIndices(stackTrace),
			[],
			[],
			[i]
		);
		let minIndex = i;
		for (let j = i + 1; j < arr.length; j++) {
			// Visualize: Comparing A[j] and A[minIndex]
			addToStackTrace(
				stackTrace,
				arr,
				getLastSortedIndices(stackTrace),
				[minIndex, j],
				[],
				[minIndex]
			);
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
				// Visualize: New minIndex
				addToStackTrace(
					stackTrace,
					arr,
					getLastSortedIndices(stackTrace),
					[],
					[],
					[j]
				);
			}
		}
		// Visualize: A[i] and A[minIndex] values to be swapped
		addToStackTrace(
			stackTrace,
			arr,
			getLastSortedIndices(stackTrace),
			[],
			[i, minIndex]
		);
		swap(arr, i, minIndex);
		// Visualize: A[i] and A[minIndex] swapped and A[i] now sorted
		addToStackTrace(stackTrace, arr, [
			...getLastSortedIndices(stackTrace),
			i,
		]);
	}
	// Visualize: Final Sorted Value
	addToStackTrace(stackTrace, arr, [
		...getLastSortedIndices(stackTrace),
		arr.length - 1,
	]);
	return stackTrace;
};

export const selectionSortFunctionalityKeys = createFunctionalityKeys(
	'Comparing',
	'Swapping',
	'MinIndex'
);

export default SelectionSort;
