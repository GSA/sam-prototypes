import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let navigationConfig: SideNavigationModel = {
    navigationLinks: [
    {
      text: 'Entities', id: 'entity-workspace', route: '/workspace/entities/federal', queryParams: {}, mode: NavigationMode.INTERNAL
    },
    {
      text: 'Exclusions', id: 'exclusions-workspace', route: '/workspace/exclusions', queryParams: {}, mode: NavigationMode.INTERNAL
    },
    {
      text: 'BioPreferred Reporting', id: 'biopreferred-reporting-workspace', route: '/workspace/entitycompliance/biopreferredreporting', queryParams: {}, mode: NavigationMode.INTERNAL
    },
    {
      text: 'Service Contract Reporting', id: 'scr-reporting-workspace', route: '/workspace/entitycompliance/servicecontractreporting', queryParams: {}, mode: NavigationMode.INTERNAL
    }]
 };