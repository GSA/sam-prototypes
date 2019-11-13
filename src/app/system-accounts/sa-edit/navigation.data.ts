import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let systemAccountEditMenu: SideNavigationModel = {
    navigationLinks: [
        {
            id: 'account-home', text: 'Account Details', mode: NavigationMode.INTERNAL, route: '/system-account/edit/system-info', children: [
                { id: 'system-info', text: 'System Information', mode: NavigationMode.INTERNAL, route: '/system-account/edit/system-info' },
                { id: 'organization', text: 'Organization', mode: NavigationMode.INTERNAL, route: '/system-account/edit/organization' },
                { id: 'permissions', text: 'Permissions', mode: NavigationMode.INTERNAL, route: '/system-account/edit/permissions' },
                { id: 'security', text: 'Security', mode: NavigationMode.INTERNAL, route: '/system-account/edit/security' },
                { id: 'auth', text: 'Authorization', mode: NavigationMode.INTERNAL, route: '/system-account/edit/auth' },
                { id: 'review', text: 'Review', mode: NavigationMode.INTERNAL, route: '/system-account/edit/review' }
            ]
        }, 
        { id: 'reset-password', text: 'Reset Password', mode: NavigationMode.INTERNAL, route: '/system-account/reset-password' },
        { id: 'history', text: 'History', mode: NavigationMode.INTERNAL, route: '/system-account/history' }
    ]
};



