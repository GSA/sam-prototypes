import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let workspaceNavigationData: SideNavigationModel = {
    navigationLinks: [
        { id: 'workspaceHome', text: 'Workspace Home', mode: NavigationMode.INTERNAL, route: '/workspace' },
        { id: 'entityRegistration', text: 'Entity Registration', mode: NavigationMode.INTERNAL, route: '/workspace' },
        { id: 'entityReporting', text: 'Entity Reporting', mode: NavigationMode.INTERNAL, route: '/workspace' },
        { id: 'userDirectory', text: 'User Directory', mode: NavigationMode.INTERNAL, route: '/workspace' },
        { id: 'systemAccounts', text: 'System Accounts', mode: NavigationMode.INTERNAL, route: '/workspace' },
       	{
       		id: 'profile', text: 'Profile', mode: NavigationMode.INTERNAL, route: '/profile/account-details', children:
		    [
		        { id: 'details', text: 'Account Details', mode: NavigationMode.INTERNAL, route: '/profile/account-details' },
		        { id: 'roles', text: 'Roles', mode: NavigationMode.INTERNAL, route: '/profile/roles' },
		        { id: 'following', text: 'Following', mode: NavigationMode.INTERNAL, route: '/profile/following' },
		        { id: 'large-downloads', text: 'Large Downloads', mode: NavigationMode.INTERNAL, route: '/profile/downloads' },
		        { id: 'email-settings', text: 'Email Settings', mode: NavigationMode.INTERNAL, route: '/profile/email-settings' },
		        { id: 'data-services', text: 'Data Services', mode: NavigationMode.INTERNAL, route: '/profile/data-services' },
		        { id: 'history', text: 'History', mode: NavigationMode.INTERNAL, route: '/profile/history' }
		    ]
	    }
    ]
};