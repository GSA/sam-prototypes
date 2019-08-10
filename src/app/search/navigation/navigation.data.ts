import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let searchSideNavigationData: SideNavigationModel = {
    navigationLinks: [
        { id: 'searchhome', text: 'Search Home', mode: NavigationMode.INTERNAL, route: '/search' },
        {
            id: 'contracting', text: 'Contracting', mode: NavigationMode.INTERNAL, route: '/search', children: [
                { id: 'contractOpportunites', text: 'Contract Opportunities', mode: NavigationMode.INTERNAL, route: '/search' },
                { id: 'contractData', text: 'Contract Data', mode: NavigationMode.INTERNAL, route: '/search' }
            ]
        }, {
            id: 'federalAssistance', text: 'Federal Assistance', mode: NavigationMode.INTERNAL, route: '/search', children: [

                {
                    id: 'assistancelist', mode: NavigationMode.INTERNAL,
                    route: '/search', text: 'Assistance Listings'
                }
            ]
        },
        {
            id: 'entityInformation', text: 'Entity Information', route: 'search', mode: NavigationMode.INTERNAL, children: [
                {
                    id: 'registrations', mode: NavigationMode.INTERNAL,
                    route: '/search', text: 'Entity Registrations'
                },
                {
                    id: 'exclusions', mode: NavigationMode.INTERNAL,
                    route: '/search', text: 'Exclusions'
                },
                {
                    id: 'disasterresponse', mode: NavigationMode.INTERNAL,
                    route: '/search', text: 'Disaster Response Registry'
                }
            ]
        },
        {
            id: 'federalHierarchy', route: '/search', mode: NavigationMode.INTERNAL,
            text: 'Federal Hierarchy'
        },
        {
            id: 'profile', route: '/search', mode: NavigationMode.INTERNAL,
            text: 'Wage Determinations',
            children: [
                {
                    id: 'wdbyid', mode: NavigationMode.INTERNAL,
                    route: '/search', text: 'Search By ID'
                },
                {
                    id: 'dba', mode: NavigationMode.INTERNAL,
                    route: '/search', text: 'DBA Wage Determinations'
                },
                {
                    id: 'sca', mode: NavigationMode.INTERNAL,
                    route: '/search', text: 'SCA Wage Determinations'
                }
            ]
        }
    ]
};



