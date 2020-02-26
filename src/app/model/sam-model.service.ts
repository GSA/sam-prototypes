import { Injectable, ElementRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NavigationMode } from '@gsa-sam/components';
import { LocationStrategy } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SamModelService {

  /**
   * Sign in
   */
  isSignedIn: boolean = false;

  signInItem =
    {
      imageClassPrefix: 'sds', imageClass: 'log-out', mode: NavigationMode.INTERNAL,
      text: 'Sign In', route: '/', id: 'signin'
    };
  signOutItem =
    {
      imageClassPrefix: 'sds', imageClass: 'log-out', mode: NavigationMode.INTERNAL,
      text: 'Sign Out', route: '/', id: 'signOut'
    };

  secondaryLinks = [{
    imageClassPrefix: 'sds', imageClass: 'request', mode: NavigationMode.INTERNAL,
    text: 'Requests', route: '/requests', id: 'request', hasCounter: true,
    selected: true
  },
  {
    imageClassPrefix: 'sds', imageClass: 'messages', text: 'Notifications', route: '/messages', mode: NavigationMode.INTERNAL,
    id: 'messages'
  },
  {
    imageClassPrefix: 'sds', imageClass: 'workspace', imageAltText: 'Workspace Icon', mode: NavigationMode.INTERNAL,
    text: 'Workspace', route: '/workspace', id: 'workspace'
  }];
  navigationLinks: [
    { text: 'Home', route: '/', mode: NavigationMode.INTERNAL, id: 'home' },
    { text: 'Search', route: '/search', mode: NavigationMode.INTERNAL, id: 'search' },
    { text: 'Databank', route: '/databank', mode: NavigationMode.INTERNAL, id: 'databank' },
    { text: 'Data Services', route: '/dataservices', mode: NavigationMode.INTERNAL, id: 'dataService' },
    { text: 'Help', route: '/help', mode: NavigationMode.INTERNAL, id: 'help' }
  ];

  modelHeader = {
    secondaryLinks: this.secondaryLinks.concat([this.signOutItem]),
    navigationLinks: [
      { text: 'Home', route: '/', mode: NavigationMode.INTERNAL, id: 'home' },
      { text: 'Search', route: '/search', mode: NavigationMode.INTERNAL, id: 'search' },
      { text: 'Databank', route: '/databank', mode: NavigationMode.INTERNAL, id: 'databank' },
      { text: 'Data Services', route: '/dataservices', mode: NavigationMode.INTERNAL, id: 'dataService' },
      { text: 'Help', route: '/help', mode: NavigationMode.INTERNAL, id: 'help' }
    ],
    home: {
      text: 'Home',
      logo: this.locationStrategy.getBaseHref() + 'assets/img/beta_samgov_horizontal.png',
      route: '/',
      id: 'home',
      mode: NavigationMode.INTERNAL,
    }
  };

  modelFooter = {
    footerLogo: {
      text: 'General Services Administration',
      imageSourcePath: this.locationStrategy.getBaseHref() + 'assets/img/logo-gsa.svg',
      imageAltText: 'GSA Logo'
    },
    linkSections: [
      {
        text: 'About beta.SAM.gov', links: [
          { text: 'About SAM.gov', mode: NavigationMode.INTERNAL, route: '/about/about-sam' },
          { text: 'Explore Our Community', mode: NavigationMode.INTERNAL, route: '/about/community' },
          { text: 'Release Notes', mode: NavigationMode.INTERNAL, route: '/about/release-notes' },
          { text: 'Disclaimers', mode: NavigationMode.INTERNAL, route: '/about/disclaimers' }
        ]
      },
      {
        text: 'Our Partners', links: [
          { text: 'Aquisition.gov', mode: NavigationMode.INTERNAL, route: '/' },
          { text: 'USASpending.gov', mode: NavigationMode.INTERNAL, route: '/' },
          { text: 'Grants.gov', mode: NavigationMode.INTERNAL, route: '/' },
          { text: 'More Partners', mode: NavigationMode.INTERNAL, route: '/' },
        ]
      },
      {
        text: 'Customer Service', links: [
          { text: 'Help', mode: NavigationMode.INTERNAL, route: '/help' },
          { text: 'Contact Federal Service Desk', mode: NavigationMode.INTERNAL, route: '/about/fsd' },
          { text: 'Resources', mode: NavigationMode.INTERNAL, route: '/about/resources' },
          { text: 'Policies', mode: NavigationMode.INTERNAL, route: '/about/policies' }
        ]
      }
    ]
  };


  /**
   * Constructor
   */
  constructor(public router: Router, private locationStrategy: LocationStrategy) {
  }

  signIn(redirectUrl?: string) {
    this.isSignedIn = true;
    if (redirectUrl) {
      this.router.navigateByUrl(redirectUrl);
    }
  }

  signOut(redirectUrl?: string) {
    this.isSignedIn = false;
    if (redirectUrl) {
      this.router.navigateByUrl(redirectUrl);
    }
  }

  goTo(url: string) {
    this.router.navigateByUrl(url);
  }

}
