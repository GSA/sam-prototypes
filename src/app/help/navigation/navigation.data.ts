import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let helpNavigationData: SideNavigationModel = {
    navigationLinks: [
        { id: 'helphome', text: 'All Help', mode: NavigationMode.INTERNAL, route: '/help/results', queryParams: { 'index' : 'all'}},
        { id: 'federalAssistance', text: 'Assistance Listings', mode: NavigationMode.INTERNAL, route: '/help/results', queryParams: { 'index' : 'assistancelist'}},
        { id: 'opportunities', text: 'Contract Opportunities', mode: NavigationMode.INTERNAL, route: '/help/results', queryParams: { 'index' : 'opportunities'}},
        { id: 'contractdata', text: 'Contract Data', mode: NavigationMode.INTERNAL, route: '/help/results', queryParams: { 'index' : 'contractdata'}},  
        { id: 'entityinfo', text: 'Entity Information', route: '/help/results', queryParams: { 'index' : 'entityinfo'}, mode: NavigationMode.INTERNAL },
        { id: 'federalHierarchy', route: '/help/results', queryParams: { 'index' : 'hierarchy'}, mode: NavigationMode.INTERNAL, text: 'Federal Hierarchy' },
        { id: 'wages', route: '/help/results', queryParams: { 'index' : 'wages'}, mode: NavigationMode.INTERNAL, text: 'Wage Determinations' }
    ]
};



