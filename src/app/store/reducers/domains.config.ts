import { MenuItem } from '../../sam-ui-elements/menu/menu-item';

export const DomainMenu: MenuItem[] = [
    {
        title: 'Global',
        icon: 'fa fa-home',
        info: 'Global search and other features common to all of our data sets.',
        additionalInfo: 'none',
        url: ''
    },
    {
        title: 'Entities',
        icon: 'fa fa-building',
        info: 'Entity registrations and exlcusions information.',
        additionalInfo: 'formerly SAM.gov',
        url: ''
    },
    {
        title: 'Contracting',
        icon: 'fa fa-file-contract',
        info: 'Contracting opportunities, actions, and more.',
        additionalInfo: 'formerly FBO.gov and FPDS.gov',
        url: ''
    },
    {
        title: 'Federal Assistance',
        icon: 'fa fa-hands-helping',
        info: 'Information and reporting on grants, loans, and other types of assistance.',
        additionalInfo: 'formerly CFDA.gov',
        url: ''
    },
    {
        title: 'Federal Hierarchy',
        icon: 'fa fa-flag-usa',
        info: 'Hierarchy of federal awarding and funding organizations.',
        additionalInfo: 'none',
        url: ''
    },
    {
        title: 'Wage Determinations',
        icon: 'fa fa-money-bill',
        info: 'Labor categories, hourly wage rates and benefits.',
        additionalInfo: 'formerly WDOL.gov',
        url: ''
    }
];

/**
 *

export const SectionMenus = new Map<string, MenuObject>([
  ['Global', {} ],
  ['Entities', {} ]
]);

export const Domains: Domain[] = [
    {
        title: 'Global',
        icon: 'fa fa-home',
        description: 'Global search and other features common to all of our data sets.',
        formerSite: 'none',
        sections: 
        [
            {
                title: 'Search',
                icon: 'fa fa-search',
                description: 'Search for data across all of our data sets.',
                url: '/main/main-search',
                sidetoolKeys: 'about,filters,download,save,schedule',
                showPublic: true
            },
            {
                title: 'Databank',
                icon: 'fa fa-chart-area',
                description: 'Run any available report across all of our data.',
                url: '/main/main-databank',
                sidetoolKeys: 'about,filters',
                showPublic: true
            },
            {
                title: 'Workspace',
                icon: 'fa fa-desktop',
                description: 'Visit the landing page for accessing all of your work, including user and system account administration.',
                url: '/main/main-workspace',
                sidetoolKeys: 'about,filters,download',
                showPublic: true
            },
            {
                title: 'API Services',
                icon: 'fa fa-network-wired',
                description: 'See what data services, file extracts, and feeds we support.',
                url: '/main/main-services',
                sidetoolKeys: 'about',
                showPublic: true
            },
            {
                title: 'Help',
                icon: 'fa fa-question-circle',
                description: 'Explore our training videos, frequently asked questions, featured articles, and glossary terms.',
                url: '/main/main-help',
                sidetoolKeys: 'about,filters',
                showPublic: true
            }
        ]
    },
    {
        title: 'Entities',
        icon: 'fa fa-building',
        description: 'Entity registrations and exlcusions information.',
        formerSite: 'formerly SAM.gov',
        sections: 
        [
            {
                title: 'Search',
                icon: 'fa fa-search',
                description: 'Search for entities and exclusions, including our disaster response registry.',
                url: '/main/entities-search/entities-search-all',
                sidetoolKeys: 'about,filters,download,save,schedule',
                showPublic: true
            },
            {
                title: 'Databank',
                icon: 'fa fa-chart-area',
                description: 'Run standard and ad-hoc reports of entity and exclusions data',
                url: '/main/entities-databank',
                sidetoolKeys: 'about,filters',
                showPublic: true
            },
            {
                title: 'Workspace',
                icon: 'fa fa-desktop',
                description: 'Register and manage entities (non-federal users), or enter and manage exclusions (federal exclusions officials).',
                url: '/main/entities-workspace',
                sidetoolKeys: 'about,filters,download',
                showPublic: true
            },
            {
                title: 'API Services',
                icon: 'fa fa-network-wired',
                description: 'Connect to our entity and exclusions web services.',
                url: '/main/entities-services',
                sidetoolKeys: 'about',
                showPublic: true
            },
            {
                title: 'Help',
                icon: 'fa fa-question-circle',
                description: 'Explore our training videos, frequently asked questions, featured articles, and glossary terms.',
                url: '/main/entities-help',
                sidetoolKeys: 'about,filters',
                showPublic: true
            }
        ]
    },   
    {
        title: 'Contracting',
        icon: 'fa fa-file-contract',
        description: 'Contracting opportunities, actions, and more.',
        formerSite: 'formerly FBO.gov and FPDS.gov',
        sections: 
        [
            {
                title: 'Search',
                icon: 'fa fa-search',
                description: 'Search contract opportunities and contract data.',
                url: '/main/contracting-search',
                sidetoolKeys: 'about,filters,download,save,schedule',
                showPublic: true
            },
            {
                title: 'Databank',
                icon: 'fa fa-chart-area',
                description: 'Access or run contract opportunity and contract data reports, including static, standard, and ad-hoc reports.',
                url: '/main/contracting-databank',
                sidetoolKeys: 'about,filters',
                showPublic: true
            },
            {
                title: 'Workspace',
                icon: 'fa fa-desktop',
                description: 'Create and manage contract opportunities and contract data. Create or upload post-award reports including sub-awards.  Manage past performance.',
                url: '/main/contracting-workspace',
                sidetoolKeys: 'about,filters,download',
                showPublic: true
            },
            {
                title: 'API Services',
                icon: 'fa fa-network-wired',
                description: 'Connect to contract opportunities, contract data, post-award reports including sub-awards, and past performance data.',
                url: '/main/contracting-services',
                sidetoolKeys: 'about,filters',
                showPublic: true
            },
            {
                title: 'Help',
                icon: 'fa fa-question-circle',
                description: 'Explore our training videos, frequently asked questions, featured articles, and glossary terms.',
                url: '/main/contracting-help',
                sidetoolKeys: 'about,filters',
                showPublic: true
            }
        ]
    },
    {
        title: 'Federal Assistance',
        icon: 'fa fa-hands-helping',
        description: 'Information and reporting on grants, loans, and other types of assistance.',
        formerSite: 'formerly CFDA.gov',
        sections: 
        [
            {
                title: 'Search',
                icon: 'fa fa-search',
                description: 'Search assistance listings describing grant, loan, insurance, and other federal assistance.',
                url: '/main/assistance-search',
                sidetoolKeys: 'about,filters,download,save,schedule',
                showPublic: true
            },
            {
                title: 'Databank',
                icon: 'fa fa-chart-area',
                description: 'Run administrative reports against federal assistance data (federal users only).',
                url: '/main/assistance-databank',
                sidetoolKeys: 'about,filters',
                showPublic: true
            },
            {
                title: 'Workspace',
                icon: 'fa fa-desktop',
                description: 'Create, update, and manage assistance listings (federal users only).',
                url: '/main/assistance-workspace',
                sidetoolKeys: 'about,filters,download',
                showPublic: true
            },
            {
                title: 'API Services',
                icon: 'fa fa-network-wired',
                description: 'Download file extracts and connect to web services for assistance listings.',
                url: '/main/assistance-services',
                sidetoolKeys: 'about,filters',
                showPublic: true
            },
            {
                title: 'Help',
                icon: 'fa fa-question-circle',
                description: 'Explore our training videos, frequently asked questions, featured articles, and glossary terms.',
                url: '/main/assistance-help',
                sidetoolKeys: 'about,filters',
                showPublic: true
            }
        ]
    },
    {
        title: 'Federal Hierarchy',
        icon: 'fa fa-flag-usa',
        description: 'Hierarchy of federal awarding and funding organizations.',
        formerSite: 'none',
        sections: 
        [
            {
                title: 'Search',
                icon: 'fa fa-search',
                description: 'Search for data across all of our data sets.',
                url: '/main/hierarchy-search',
                sidetoolKeys: 'about,filters,download,save,schedule',
                showPublic: true
            },
            {
                title: 'Databank',
                icon: 'fa fa-chart-area',
                description: 'Run any available report across all of our data.',
                url: '/main/hierarchy-databank',
                sidetoolKeys: 'about,filters',
                showPublic: true
            },
            {
                title: 'Workspace',
                icon: 'fa fa-desktop',
                description: 'Visit the landing page for accessing all of your work, including user and system account administration.',
                url: '/main/hierarchy-workspace',
                sidetoolKeys: 'about,filters,download',
                showPublic: true
            },
            {
                title: 'API Services',
                icon: 'fa fa-network-wired',
                description: 'See what data services, file extracts, and feeds we support.',
                url: '/main/hierarchy-services',
                sidetoolKeys: 'about',
                showPublic: true
            },
            {
                title: 'Help',
                icon: 'fa fa-question-circle',
                description: 'Explore our training videos, frequently asked questions, featured articles, and glossary terms.',
                url: '/main/hierarchy-help',
                sidetoolKeys: 'about,filters',
                showPublic: true
            }
        ]
    },
    {
        title: 'Wage Determinations',
        icon: 'fa fa-money-bill',
        description: 'Labor categories, hourly wage rates and benefits.',
        formerSite: 'formerly WDOL.gov',
        sections: 
        [
            {
                title: 'Search',
                icon: 'fa fa-search',
                description: 'Search for wage determinations and collective bargaining agreements by ID, or use one of our workflows to find the wage determination you need.',
                url: '/main/wages-search',
                sidetoolKeys: 'about,filters,download,save,schedule',
                showPublic: true
            },
            {
                title: 'Databank',
                icon: 'fa fa-chart-area',
                description: 'Run ad-hoc reports against wage determination data.',
                url: '/main/wages-databank',
                sidetoolKeys: 'about,filters',
                showPublic: true
            },
            {
                title: 'Resource Library',
                icon: 'fa fa-book-reader',
                description: 'Find e-98 forms, labor advisors, all-agency memorandums, and other wage determination resources',
                url: '/main/wages-resources',
                sidetoolKeys: 'about',
                showPublic: true
            },
            {
                title: 'Help',
                icon: 'fa fa-question-circle',
                description: 'Explore our training videos, frequently asked questions, featured articles, and glossary terms.',
                url: '/main/wages-help',
                sidetoolKeys: 'about,filters',
                showPublic: true
            }
        ]
    }
];

*/
