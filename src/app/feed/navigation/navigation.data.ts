import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let feedNavigationData: SideNavigationModel = {
    navigationLinks: [
        { id: 'messagehome', text: 'All Messages', route: '/messages', mode: NavigationMode.INTERNAL },
        { id: 'contracting', text: 'Contracting', route: '/messages', mode: NavigationMode.INTERNAL },
        { id: 'entityInformation', text: 'Entity Information', route: '/messages', mode: NavigationMode.INTERNAL },
        { id: 'compliance', text: 'Compliance', route: '/messages', mode: NavigationMode.INTERNAL },
        { id: 'admin', text: 'Administrative', route: '/messages', mode: NavigationMode.INTERNAL }
    ]
};



