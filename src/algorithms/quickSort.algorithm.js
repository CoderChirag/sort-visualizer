import {
	createNewStackTrace,
	addToStackTrace,
	getLastSortedIndices,
	createFunctionalityKeys,
	createRange,
} from '../utils/algorithms/algorithm.util';

const QuickSort = arr => {
	// Create a new stack trace
	const stackTrace = createNewStackTrace(arr);
	// Partition Function
	function partition(arr, low, high) {
		const pivot = low;
		let swapIdx = low;
		addToStackTrace(stackTrace, arr, getLastSortedIndices(stackTrace), [
			pivot,
		]);
		// console.log('start');
		for (let i = low + 1; i < high; i++) {
			// console.log(swapIdx, i);
			if (arr[i] < arr[pivot]) {
				// console.log('Lower: ', swapIdx + 1, i);
				addToStackTrace(
					stackTrace,
					arr,
					getLastSortedIndices(stackTrace),
					[pivot],
					[...createRange(low + 1, swapIdx + 1), i],
					[...createRange(swapIdx + 1, i)]
				);
				swapIdx++;
				addToStackTrace(
					stackTrace,
					arr,
					getLastSortedIndices(stackTrace),
					[pivot],
					[...createRange(low + 1, swapIdx + 1)],
					[...createRange(swapIdx + 1, i)],
					[swapIdx, i]
				);
				[arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
				addToStackTrace(
					stackTrace,
					arr,
					getLastSortedIndices(stackTrace),
					[pivot],
					[...createRange(low + 1, swapIdx + 1)],
					[...createRange(swapIdx + 1, i + 1)],
					[]
				);
			} else {
				// console.log('Greater: ', swapIdx + 1, i + 1);
				addToStackTrace(
					stackTrace,
					arr,
					getLastSortedIndices(stackTrace),
					[pivot],
					[...createRange(low + 1, swapIdx + 1)],
					[...createRange(swapIdx + 1, i + 1), i]
				);
			}
		}
		addToStackTrace(
			stackTrace,
			arr,
			getLastSortedIndices(stackTrace),
			[pivot],
			[...createRange(low + 1, swapIdx + 1)],
			[...createRange(swapIdx + 1, high)],
			[swapIdx, pivot]
		);
		[arr[pivot], arr[swapIdx]] = [arr[swapIdx], arr[pivot]];
		addToStackTrace(
			stackTrace,
			arr,
			[...getLastSortedIndices(stackTrace), swapIdx],
			[swapIdx],
			[...createRange(0, swapIdx)].filter(i =>
				[...getLastSortedIndices(stackTrace), swapIdx].includes(i)
					? false
					: true
			),
			[...createRange(swapIdx + 1, high)].filter(i =>
				[...getLastSortedIndices(stackTrace), swapIdx].includes(i)
					? false
					: true
			)
		);
		return swapIdx;
	}

	// Quick Sort Function
	function recursiveQuickSort(array, low, high) {
		if (low >= high) return;
		const mid = partition(arr, low, high);
		recursiveQuickSort(arr, low, mid);
		recursiveQuickSort(arr, mid + 1, high);
	}

	recursiveQuickSort(arr, 0, arr.length);
	addToStackTrace(stackTrace, arr, createRange(0, arr.length));
	// console.log(stackTrace);
	return stackTrace;
};

export const quickSortFunctionalityKeys = createFunctionalityKeys(
	'Pivot Element',
	'Less than Pivot',
	'Greater than Pivot',
	'Swapping'
);

export default QuickSort;
