import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let aboutSideNavigationData: SideNavigationModel = {
    navigationLinks: [
        { id: 'aboutsam', text: 'About SAM.gov', mode: NavigationMode.INTERNAL, route: '/about/about-sam' },
        {
            id: 'resources', text: 'Resources', mode: NavigationMode.INTERNAL, route: '/about/resources', children: [
                { id: 'assistanceresources', text: 'Assistance Listings', mode: NavigationMode.INTERNAL, route: '/about/resources/assistancelistings' },
                { id: 'oppresources', text: 'Contract Opportunities', mode: NavigationMode.INTERNAL, route: '/about/resources/contractopportunities' },
                { id: 'contractdataresources', text: 'Contract Data', mode: NavigationMode.INTERNAL, route: '/about/resources/contractdata' },
                { id: 'entityresources', text: 'Entity Information', mode: NavigationMode.INTERNAL, route: '/about/resources/entities' },
                { id: 'wageresources', text: 'Wage Determinations', mode: NavigationMode.INTERNAL, route: '/about/resources/wagedeterminations' },
            ]
        },
        { id: 'fsd', text: 'Federal Service Desk', mode: NavigationMode.INTERNAL, route: '/about/fsd' },
        { id: 'community', text: 'Community', mode: NavigationMode.INTERNAL, route: '/about/community' },
        { id: 'partners', text: 'Partners', mode: NavigationMode.INTERNAL, route: '/about/partners' },
        { id: 'release-notes', text: 'Release Notes', mode: NavigationMode.INTERNAL, route: '/about/release-notes' },
        { id: 'policies', text: 'Policies', mode: NavigationMode.INTERNAL, route: '/about/policies' },
        { id: 'disclaimers', text: 'Disclaimers', mode: NavigationMode.INTERNAL, route: '/about/disclaimers' }
    ]
};



