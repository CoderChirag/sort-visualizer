export const newStackTrace = arr => {
	return [
		{
			arr: [...arr],
			functionalityA: [],
			functionalityB: [],
			functionalityC: [],
			functionalityD: [],
			sortedIndices: [],
		},
	];
};

export const addToStackTrace = (
	stackTrace,
	arr,
	sortedIndices = [],
	functionalityA = [],
	functionalityB = [],
	functionalityC = [],
	functionalityD = []
) => {
	stackTrace.push({
		arr: [...arr],
		functionalityA: [...functionalityA],
		functionalityB: [...functionalityB],
		functionalityC: [...functionalityC],
		functionalityD: [...functionalityD],
		sortedIndices: [...sortedIndices],
	});
};

export const getLastSortedIndices = stackTrace => {
	return stackTrace[stackTrace.length - 1].sortedIndices;
};

export const swap = (arr, i, j) => {
	arr[i] = arr[i] ^ arr[j];
	arr[j] = arr[i] ^ arr[j];
	arr[i] = arr[i] ^ arr[j];
};

export const createFunctionalityKeys = (
	functionalityA,
	functionalityB,
	functionalityC,
	functionalityD
) => {
	return { functionalityA, functionalityB, functionalityC, functionalityD };
};
