import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let profileNavigationData: SideNavigationModel = {
    navigationLinks: [
        { id: 'details', text: 'Account Details', mode: NavigationMode.INTERNAL, route: '/profile/account-details' },
        { id: 'roles', text: 'Roles', mode: NavigationMode.INTERNAL, route: '/profile/roles' },
        { id: 'following', text: 'Following', mode: NavigationMode.INTERNAL, route: '/profile/following' },
        { id: 'large-downloads', text: 'Large Downloads', mode: NavigationMode.INTERNAL, route: '/profile/downloads' },
        { id: 'email-settings', text: 'Email Settings', mode: NavigationMode.INTERNAL, route: '/profile/email-settings' },
        { id: 'data-services', text: 'Data Services', mode: NavigationMode.INTERNAL, route: '/profile/data-services' },
        { id: 'history', text: 'History', mode: NavigationMode.INTERNAL, route: '/profile/history' }
    ]
};