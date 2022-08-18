import BubbleSort, {
	bubbleSortFunctionalityKeys,
} from '../../algorithms/bubbleSort.algorithm';

export const Algorithm = {
	bubbleSort: {
		stackTrace: BubbleSort,
		functionalityKeys: bubbleSortFunctionalityKeys,
	},
};

export const FunctionalityColorMappingsLight = {
	unsorted: '#ffffffde',
	functionalityA: '#ffc107',
	functionalityB: '#dc3545',
	functionalityC: '#eb8888',
	functionalityD: '#17a2b8',
	sorted: '#28a745',
};

export const FunctionalityColorMappingsDark = {
	unsorted: '#ffffffde',
	functionalityA: '#c6ff00',
	// functionalityB: '#070422',
	// functionalityB: '#ff0',
	functionalityB: '#ffc107',
	// functionalityB: '#dc3545',
	functionalityC: '#17a2b8',
	functionalityD: 'rgb(200 238 233)',
	sorted: '#17f149',
};
