import { ToolItem } from '../../sam-ui-elements/tools/tool-item';

export const SearchTools: ToolItem[] = [
	{
		title: 'Search',
		icon: 'fa fa-search fa-lg',
		info: 'Search menu',
		eventID: 'search',
		width: 'normal'
	},
	{
		title: 'Save',
		icon: 'fa fa-cloud fa-lg',
		info: 'Save search filters',
		eventID: 'save',
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

