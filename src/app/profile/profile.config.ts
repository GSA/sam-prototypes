import { ToolItem } from '../sam-ui-elements/tools/tool-item';

export const ProfileTools: ToolItem[] = [
	{
		title: 'Profile',
		icon: 'fa fa-user fa-lg',
		info: 'User Profile',
		eventID: 'profile',
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