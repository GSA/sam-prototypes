import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let navigationConfig: SideNavigationModel = {
    navigationLinks: [
        { id: 'all', text: 'All Domains', mode: NavigationMode.INTERNAL, route: '/search' },
        { id: 'opportunites', text: 'Contract Opportunities', mode: NavigationMode.INTERNAL, route: '/databank/databank-search', queryParams: { 'index' : 'opportunities'}},
        { id: 'contractData', text: 'Contract Data', mode: NavigationMode.INTERNAL, route: '/databank/databank-search', queryParams: { 'index' : 'contractdata'}},
        { id: 'assistanceList', text: 'Assistance Listings', mode: NavigationMode.INTERNAL, route: '/databank/databank-search', queryParams: { 'index' : 'assistanceList'}},
        { id: 'entityinformation', text: 'Entity Information', mode: NavigationMode.INTERNAL, route: '/databank/databank-search', queryParams: { 'index' : 'entityinformation'}},
        { id: 'hierarchy', text: 'Federal Hierarchy', mode: NavigationMode.INTERNAL, route: '/databank/databank-search', queryParams: { 'index' : 'hierarchy'}},
        { id: 'wagedeterminations', text: 'Wage Determinations', mode: NavigationMode.INTERNAL, route: '/databank/databank-search', queryParams: { 'index' : 'wagedeterminations'}}
    ]
};



