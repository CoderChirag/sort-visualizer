import BubbleSort, {
	bubbleSortFunctionalityKeys,
} from '../../algorithms/bubbleSort.algorithm';
import SelectionSort, {
	selectionSortFunctionalityKeys,
} from '../../algorithms/selectionSort.algorithm';

export const AlgoMappings = {
	bubbleSort: {
		name: 'Bubble Sort',
		link: '/sorting/bubbleSort',
		type: 'quadratic',
		stackTrace: BubbleSort,
		functionalityKeys: bubbleSortFunctionalityKeys,
	},
	selectionSort: {
		name: 'Selection Sort',
		link: '/sorting/selectionSort',
		type: 'quadratic',
		stackTrace: SelectionSort,
		functionalityKeys: selectionSortFunctionalityKeys,
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
	functionalityB: '#fe4080',
	functionalityC: '#17a2b8',
	functionalityD: 'rgb(200 238 233)',
	sorted: '#17f149',
};
