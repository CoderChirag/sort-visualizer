import {
	createNewStackTrace,
	addToStackTrace,
	getLastSortedIndices,
	createFunctionalityKeys,
	createRange,
} from '../utils/algorithms/algorithm.util';

const MergeSort = arr => {
	// Create a new stack trace
	const stackTrace = createNewStackTrace(arr);

	// Merge Function
	function merge(array, start, mid, end) {
		const left = array.slice(start, mid);
		const right = array.slice(mid, end);
		let i = 0;
		let j = 0;
		let k = 0;
		while (i < left.length && j < right.length) {
			if (left[i] < right[j]) {
				array[k + start] = left[i++];
			} else {
				array[k + start] = right[j++];
			}
			k++;
		}
		while (i < left.length) {
			array[k + start] = left[i++];
			k++;
		}
		while (j < right.length) {
			array[k + start] = right[j++];
			k++;
		}
	}

	// Merge Sort Function
	function recursiveMergeSort(array, start, end) {
		if (start < end - 1) {
			const midPoint = Math.floor((start + end) / 2);
			// Visualize: Recursive Calling on the left half of the array
			addToStackTrace(
				stackTrace,
				array,
				getLastSortedIndices(stackTrace),
				[...createRange(start, midPoint)]
			);
			recursiveMergeSort(array, start, midPoint);
			// Visualize: Recursive Calling on the right half of the array
			addToStackTrace(
				stackTrace,
				array,
				getLastSortedIndices(stackTrace),
				[],
				[...createRange(midPoint, end)]
			);
			recursiveMergeSort(array, midPoint, end);
			// Visualize: Merging the two halves of the array
			addToStackTrace(
				stackTrace,
				array,
				getLastSortedIndices(stackTrace),
				[],
				[],
				[...createRange(start, end)]
			);
			merge(array, start, midPoint, end);
			addToStackTrace(stackTrace, array, [
				...getLastSortedIndices(stackTrace),
				...createRange(start, end),
			]);
		} else {
			addToStackTrace(stackTrace, array, [
				...getLastSortedIndices(stackTrace),
				start,
			]);
		}
	}

	recursiveMergeSort(arr, 0, arr.length);
	return stackTrace;
};

export const mergeSortFunctionalityKeys = createFunctionalityKeys(
	'Recursive calling on left',
	'Recursive calling on right',
	'Merging left and right'
);

export default MergeSort;
