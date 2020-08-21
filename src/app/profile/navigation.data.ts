import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let profileNavigationData: SideNavigationModel = {
    navigationLinks: [
        { id: 'details', text: 'Account Details', mode: NavigationMode.INTERNAL, route: '/profile/account-details' },
        { id: 'roles', text: 'Roles', mode: NavigationMode.INTERNAL, route: '/profile/roles' },
        { id: 'history', text: 'History', mode: NavigationMode.INTERNAL, route: '/profile/history' }
    ]
};