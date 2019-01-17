import { ToolItem } from '../sam-ui-elements/tools/tool-item';

export const FeedTools: ToolItem[] = [
	{
		title: 'Messages',
		icon: 'fa fa-info-circle fa-lg',
		info: 'Search Help',
		eventID: 'messages',
		width: 'normal'
	},
	{
		title: 'Download',
		icon: 'fa fa-download fa-lg',
		info: 'Download search results',
		eventID: 'download',
		width: 'wide'
	}
];