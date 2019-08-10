import { Injectable, ElementRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NavigationMode } from '@gsa-sam/components';

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
      imageClassPrefix: 'fas', imageClass: 'sign-out-alt', mode: NavigationMode.INTERNAL,
      text: 'Sign In', route: '/', id: 'signin'
    };
  signOutItem =
    {
      imageClassPrefix: 'fas', imageClass: 'sign-out-alt', mode: NavigationMode.INTERNAL,
      text: 'Sign Out', route: '/', id: 'signOut'
    };

  secondaryLinks = [{
    imageClassPrefix: 'fas', imageClass: 'comment', text: 'Messages', route: '/messages', mode: NavigationMode.INTERNAL, id: 'messages'
  },
  {
    imageClassPrefix: 'fas', imageClass: 'edit', mode: NavigationMode.INTERNAL,
    text: 'Requests', route: '/requests', id: 'request'
  },
  {
    imageClassPrefix: 'fas', imageClass: 'th', imageAltText: 'Workspace Icon', mode: NavigationMode.INTERNAL,
    text: 'Workspace', route: '/workspace', id: 'workspace'
  }];
  navigationLinks: [
    { text: 'Search', route: '/search', mode: NavigationMode.INTERNAL, id: 'search' },
    { text: 'Databank', route: '/databank', mode: NavigationMode.INTERNAL, id: 'databank' },
    { text: 'Data Services', route: '/dataservices', mode: NavigationMode.INTERNAL, id: 'dataService' },
    { text: 'Help', route: '/help', mode: NavigationMode.INTERNAL, id: 'help' }
  ];

  modelHeader = {
    secondaryLinks: this.secondaryLinks.concat([this.signOutItem]),
    navigationLinks: [
      { text: 'Search', route: '/search', mode: NavigationMode.INTERNAL, id: 'search' },
      { text: 'Databank', route: '/databank', mode: NavigationMode.INTERNAL, id: 'databank' },
      { text: 'Data Services', route: '/dataservices', mode: NavigationMode.INTERNAL, id: 'dataService' },
      { text: 'Help', route: '/help', mode: NavigationMode.INTERNAL, id: 'help' }
    ],
    home: {
      text: 'Home',
      route: '/',
      imageSourcePath: '/assets/img/sam-r9-logo-color.png',
      imageAltText: 'Beta Sam Logo', mode: NavigationMode.INTERNAL,
      id: 'home'
    }
  };

  modelFooter = {
    footerLogo: {
      text: 'General Services Administration',
      imageSourcePath: 'assets/sam-styles/img/logo-gsa.svg',
      imageAltText: 'GSA Logo'
    },
    linkSections: [
      {
        text: 'About beta.SAM.gov', links: [
          { text: 'Explore Our Community', mode: NavigationMode.INTERNAL, route: '/' },
          { text: 'Release Notes', mode: NavigationMode.INTERNAL, route: '/' }
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
          { text: 'Learning Center', mode: NavigationMode.INTERNAL, route: '/' },
          { text: 'Contact Federal Service Desk', mode: NavigationMode.INTERNAL, route: '/' },
          { text: 'Resources', mode: NavigationMode.INTERNAL, route: '/' },
          { text: 'Freedom of Information Act', mode: NavigationMode.INTERNAL, route: '/' },
        ]
      }
    ]
  };


  /**
   * Constructor
   */
  constructor(public router: Router) {
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
