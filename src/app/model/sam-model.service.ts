import { Injectable, ElementRef } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ToolItem } from '../sam-ui-elements/tools';
import { GlobalTools, SearchTools } from './tools.config';

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
      imageSourcePath: 'assets/icon/header-footer/Signin.png', imageAltText: 'Sign In Icon',
      text: 'Sign In', route: '/', id: 'signin'
    };
  signOutItem =
    {
      imageSourcePath: 'assets/icon/header-footer/SignOut.png', imageAltText: 'Sign Out Icon',
      text: 'Sign Out', route: '/', id: 'signOut'
    };

  secondaryLinks = [{
    imageSourcePath: 'assets/icon/header-footer/Messages.png',
    imageAltText: 'Messages Icon', text: 'Messages', route: '/messages', id: 'messages'
  },
  {
    imageSourcePath: 'assets/icon/header-footer/Requests.png', imageAltText: 'Requests Icon',
    text: 'Requests', route: '/', id: 'request'
  },
  {
    imageSourcePath: 'assets/icon/header-footer/Workspace.png', imageAltText: 'Workspace Icon',
    text: 'Workspace', route: '/workspace', id: 'workspace'
  }];
  navigationLinks: [
    { text: 'Search', route: '/search', id: 'search' },
    { text: 'Databank', route: '/databank', id: 'databank' },
    { text: 'Data Services', route: '/dataservices', id: 'dataService' },
    { text: 'Help', route: '/help', id: 'help' }
  ];




  modelHeader = {
    secondaryLinks: this.secondaryLinks.concat([this.signOutItem]),
    navigationLinks: [
      { text: 'Search', route: '/search', id: 'search' },
      { text: 'Databank', route: '/databank', id: 'databank' },
      { text: 'Data Services', route: '/dataservices', id: 'dataService' },
      { text: 'Help', route: '/help', id: 'help' }
    ],
    home: {
      text: 'Home',
      route: '/',
      imageSourcePath: '/assets/img/sam-r9-logo-color.png',
      imageAltText: 'Beta Sam Logo',
      id: 'home'
    }
  };

  modelFooter = {
    footerLogo: {
      text: 'General Services Administration',
      imageSourcePath: '/assets/sam-styles/img/logo-gsa.svg',
      imageAltText: 'GSA Logo'
    },
    linkSections: [
      {
        text: 'About beta.SAM.gov', links: [
          { text: 'Explore Our Community', route: '/' },
          { text: 'Release Notes', route: '/' }
        ]
      },
      {
        text: 'Our Partners', links: [
          { text: 'Aquisition.gov', route: '/' },
          { text: 'USASpending.gov', route: '/' },
          { text: 'Grants.gov', route: '/' },
          { text: 'More Partners', route: '/' },
        ]
      },
      {
        text: 'Customer Service', links: [
          { text: 'Learning Center', route: '/' },
          { text: 'Contact Federal Service Desk', route: '/' },
          { text: 'Resources', route: '/' },
          { text: 'Freedom of Information Act', route: '/' },
        ]
      }
    ]
  };

  isMainNavigationVisible: boolean = true;


  router: Router;
  domain: string;
  feature: string;

  /**
   * Constructor
   */
  constructor(router: Router) {
    // this.router = router;
    // router.events.subscribe((event) => {
    //   if (event instanceof NavigationStart) {
    //     this.isMainNavigationVisible = true;
    //   }
    // });
    // this.domain = 'all';
    // this.feature = 'none';
  }

  setFeature(feature: string) {
    this.feature = feature;
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

  setMainNavigationVisible(isVisible: boolean) {
    this.isMainNavigationVisible = isVisible;
  }

}
