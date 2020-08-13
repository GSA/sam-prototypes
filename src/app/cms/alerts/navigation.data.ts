import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let cmsSideNav: SideNavigationModel = {
    navigationLinks: [
        { id: 'alerts', text: 'Alerts', mode: NavigationMode.INTERNAL, route: '/cms/alerts' },
        { id: 'news', text: 'News', mode: NavigationMode.INTERNAL, route: '/news' },
        { id: 'release-notes', text: 'Release Notes', mode: NavigationMode.INTERNAL, route: '/about/release-notes' }

    ]
};