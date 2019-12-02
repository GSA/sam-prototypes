import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let systemAccountsSideNavigationData: SideNavigationModel = {
    navigationLinks: [
        {
            id: 'edit', text: 'Account Details', mode: NavigationMode.INTERNAL, route: 'review', children: [
                { id: 'info', text: 'System Information', mode: NavigationMode.INTERNAL, route: 'info' },
                { id: 'organization', text: 'Organization', mode: NavigationMode.INTERNAL, route: 'organization' },
                { id: 'permissions', text: 'Permissions', mode: NavigationMode.INTERNAL, route: 'permissions' },
                { id: 'security', text: 'Security', mode: NavigationMode.INTERNAL, route: 'security' },
                { id: 'authorization', text: 'Authorization', mode: NavigationMode.INTERNAL, route: 'auth' }
            ]
        },
        { id: 'reset-password', text: 'Reset Password', mode: NavigationMode.INTERNAL, route: 'system-password' },
        { id: 'history', text: 'History', mode: NavigationMode.INTERNAL, route: 'history' }
    ]
};



