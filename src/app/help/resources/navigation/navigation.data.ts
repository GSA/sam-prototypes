import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let helpNavigationData: SideNavigationModel = {
    navigationLinks: [
        { id: 'resourcehome', text: 'SAM.gov', mode: NavigationMode.INTERNAL, route: 'overview' },
        { id: 'entityRegistration', text: 'Entity Registration', route: 'registration', mode: NavigationMode.INTERNAL },
        { id: 'contracting', text: 'Contracting', mode: NavigationMode.INTERNAL, route: 'contracting' }, 
        { id: 'federalAssistance', text: 'Federal Assistance', mode: NavigationMode.INTERNAL, route: 'assistance' },
        { id: 'hierarchy', route: 'hierarchy', mode: NavigationMode.INTERNAL, text: 'Federal Hierarchy' },
        { id: 'exclusions', text: 'Exclusions', route: 'exclusion', mode: NavigationMode.INTERNAL },
        { id: 'compliance', mode: NavigationMode.INTERNAL, route: 'compliance', text: 'Compliance Reporting'},
        { id: 'pastperformance', mode: NavigationMode.INTERNAL, route: 'performance', text: 'Past Performance' },
        { id: 'wage', route: 'wage', mode: NavigationMode.INTERNAL, text: 'Wage Determinations' },
        { id: 'accounts', route: 'account', mode: NavigationMode.INTERNAL, text: 'User Accounts' }
    ]
};



