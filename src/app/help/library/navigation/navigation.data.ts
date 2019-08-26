import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let helpNavigationData: SideNavigationModel = {
    navigationLinks: [
        { id: 'helphome', text: 'All Help', mode: NavigationMode.INTERNAL, route: '/help' },
        { id: 'contracting', text: 'Contracting', mode: NavigationMode.INTERNAL, route: '/help' }, 
        { id: 'federalAssistance', text: 'Federal Assistance', mode: NavigationMode.INTERNAL, route: '/help' },
        { id: 'entityRegistration', text: 'Entity Registration', route: '/help', mode: NavigationMode.INTERNAL },
        { id: 'exclusions', text: 'Exclusions', route: '/help', mode: NavigationMode.INTERNAL },
        { id: 'compliance', mode: NavigationMode.INTERNAL, route: '/help', text: 'Compliance Reporting'},
        { id: 'pastperformance', mode: NavigationMode.INTERNAL, route: '/help', text: 'Past Performance' },
        { id: 'federalHierarchy', route: '/help', mode: NavigationMode.INTERNAL, text: 'Federal Hierarchy' },
        { id: 'accounts', route: '/help', mode: NavigationMode.INTERNAL, text: 'Accounts' }
    ]
};



