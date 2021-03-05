import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let selectionPanelConfig: SideNavigationModel = {
    navigationLinks: [
        { id: 'about', text: 'About This Site', mode: NavigationMode.INTERNAL, route: '/about/about' },
        { id: 'contact', text: 'Contact', mode: NavigationMode.INTERNAL, route: '/about/contact' },
        { id: 'partners', text: 'Partners', mode: NavigationMode.INTERNAL, route: '/about/partners' },
        { id: 'external-resources', text: 'External Resources', mode: NavigationMode.INTERNAL, route: '/about/external-resources' },
    	{ id: 'privacy', text: 'Privacy Policy', mode: NavigationMode.INTERNAL, route: '/about/policies/privacy' },
    	{ id: 'disclaimers', text: 'Disclaimers', mode: NavigationMode.INTERNAL, route: '/about/policies/disclaimers' },
    	{ id: 'accessibility', text: 'Accessibility', mode: NavigationMode.INTERNAL, route: '/about/policies/accessibility' },
    	{ id: 'logo', text: 'Logo Policy', mode: NavigationMode.INTERNAL, route: '/about/policies/logo' }
    ]
};