import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let navigationConfig: SideNavigationModel = {
    navigationLinks: [
        { id: 'all', text: 'All Domains', mode: NavigationMode.INTERNAL, route: '/search' },
        { id: 'opportunities', text: 'Contract Opportunities', mode: NavigationMode.INTERNAL, route: '/search', queryParams: { 'index' : 'opportunities'}},
        { id: 'contractData', text: 'Contract Data', mode: NavigationMode.INTERNAL, route: '/search', queryParams: { 'index' : 'contractdata'}},
        {
            id: 'assistancelist', mode: NavigationMode.INTERNAL,
            route: '/search', queryParams: { 'index' : 'assistancelist'}, text: 'Assistance Listings'
        },
        {
            id: 'entityinfo', text: 'Entity Information', route: '/search', queryParams: { 'index' : 'entityinfo'}, mode: NavigationMode.INTERNAL, children: [
                {
                    id: 'entityinfo', mode: NavigationMode.INTERNAL,
                    route: '/search', queryParams: { 'index' : 'entityinfo'}, text: 'All Entity Information'
                },
                {
                    id: 'registrations', mode: NavigationMode.INTERNAL,
                    route: '/search', queryParams: { 'index' : 'registrations'}, text: 'Entity Registration Advanced Search'
                },
                {
                    id: 'exclusions', mode: NavigationMode.INTERNAL,
                    route: '/search', queryParams: { 'index' : 'exclusions'}, text: 'Exclusions Advanced Search'
                },
                {
                    id: 'integrity', mode: NavigationMode.INTERNAL,
                    route: '/search', queryParams: { 'index' : 'integrity'}, text: 'Integrity Information Advanced Search'
                },
                {
                    id: 'disasterresponse', mode: NavigationMode.INTERNAL,
                    route: '/search', queryParams: { 'index' : 'disasterresponse'}, text: 'Disaster Response Registry'
                }
            ]
        },
        {
            id: 'federalHierarchy', route: '/search', mode: NavigationMode.INTERNAL,
            text: 'Federal Hierarchy'
        },
        {
            id: 'wageDeterminations', route: '/search', queryParams: { 'index' : 'wdid'}, mode: NavigationMode.INTERNAL,
            text: 'Wage Determinations', children: [
                {
                    id: 'searchWdByID', mode: NavigationMode.INTERNAL,
                    route: '/search', queryParams: { 'index' : 'wdid'}, text: 'By Wage Determination ID'
                },
                {
                    id: 'dba', mode: NavigationMode.INTERNAL,
                    route: '/search', queryParams: { 'index' : 'dba'}, text: 'Construction (DBA)'
                },
                {
                    id: 'sca', mode: NavigationMode.INTERNAL,
                    route: '/search', queryParams: { 'index' : 'sca'}, text: 'Service Contracts (SCA)', children: [
                        {
                            id: 'cba', mode: NavigationMode.INTERNAL,
                            route: '/search', text: 'Collective Bargaining Agreements'
                        }
                    ]
                }
            ]
        }
    ]
};



