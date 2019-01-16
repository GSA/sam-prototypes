import { ToolItem } from '../../sam-ui-elements/tools/tool-item';

export const DataTools: ToolItem[] = [
	{
		title: 'Evaluation',
		icon: 'fa fa-star fa-lg',
		info: 'Past Performance Evaluation',
		eventID: 'evaluation',
		width: 'normal'
	},
	{
		title: 'History',
		icon: 'fa fa-history fa-lg',
		info: 'Show History',
		eventID: 'history',
		width: 'wide'
	},
	{
		title: 'Download',
		icon: 'fa fa-download fa-lg',
		info: 'Download search results',
		eventID: 'download',
		width: 'wide'
	}
];