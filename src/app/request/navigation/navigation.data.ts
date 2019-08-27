import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let requestNavigationData: SideNavigationModel = {
    navigationLinks: [
        { id: 'requesthome', text: 'All Requests', route: '/requests', mode: NavigationMode.INTERNAL },
        { id: 'contracting', text: 'Contracting', route: '/requests', mode: NavigationMode.INTERNAL },
        { id: 'entityInformation', text: 'Entity Information', route: '/requests', mode: NavigationMode.INTERNAL },
        { id: 'compliance', text: 'Compliance', route: '/requests', mode: NavigationMode.INTERNAL },
        { id: 'wageDetermination', text: 'Wage Determinations', route: './requests', mode: NavigationMode.INTERNAL },
        { id: 'admin', text: 'Administrative', route: '/requests', mode: NavigationMode.INTERNAL }
    ]
};



