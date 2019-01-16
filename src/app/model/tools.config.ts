import {ToolItem} from '../sam-ui-elements/tools';

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



export const GlobalTools: ToolItem[] = [
	{
		title: 'Help Desk',
		icon: 'fa fa-headphones fa-2x',
		info: 'Contact the help desk',
		eventID: 'helpdesk',
		width: 'normal'
	},
	{
		title: 'Glossary',
		icon: 'fas fa-book fa-2x',
		info: 'Look up glossary terms',
		eventID: 'glossary',
		width: 'normal'
	},
	{
		title: 'Feedback',
		icon: 'fa fa-comments fa-2x',
		info: 'Tell us what you think',
		eventID: 'feedback',
		width: 'normal'
	}
];