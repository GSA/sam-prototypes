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
  
  public signedIn: boolean = false;

  signInItem =
    {
      imageClassPrefix: 'sds', imageClass: 'log-out', mode: NavigationMode.INTERNAL,
      text: 'Sign In', route: '/workspace', id: 'signin'
    };
  signOutItem =
    {
      imageClassPrefix: 'sds', imageClass: 'log-out', mode: NavigationMode.INTERNAL,
      text: 'Sign Out', route: '/signout', id: 'signOut'
    };

  secondaryLinksSignedOut = [{
      imageClassPrefix: 'sds', imageClass: 'log-out', mode: NavigationMode.INTERNAL,
      text: 'Sign In', route: '/signout', id: 'signOut' 
  }]

  secondaryLinksSignedIn = [{
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
    secondaryLinks: [ this.signInItem ],
    navigationLinks: [
      { text: 'Home', id: 'home', children: [
          { text: 'Home Page', mode: NavigationMode.INTERNAL, route: '/' },
          { text: 'Entity Information', mode: NavigationMode.INTERNAL, route: '/home/entity-information' },
          { text: 'Entity Registration', mode: NavigationMode.INTERNAL, route: '/home/registration' },
          { text: 'Contract Opportunities', mode: NavigationMode.INTERNAL, route: '/home/opportunities' },
          { text: 'Contract Data', mode: NavigationMode.INTERNAL, route: '/home/entity-registration' },
          { text: 'Entity Compliance', mode: NavigationMode.INTERNAL, route: '/home/compliance' },
          { text: 'Federal Hierarchy', mode: NavigationMode.INTERNAL, route: '/home/hierarchy' },
          { text: 'Assistance Listings', mode: NavigationMode.INTERNAL, route: '/home/assistance' }
      ] },
      { text: 'Search', route: '/search', mode: NavigationMode.INTERNAL, id: 'search' },
      { text: 'Databank', route: '/databank', mode: NavigationMode.INTERNAL, id: 'databank' },
      { text: 'Data Services', route: '/dataservices', mode: NavigationMode.INTERNAL, id: 'dataService' },
      { text: 'Help', route: '/help', mode: NavigationMode.INTERNAL, id: 'help' }
    ],
    home: {
      text: 'Home',
      logo: this.locationStrategy.getBaseHref() + 'assets/img/logo-sam.svg',
      route: '/',
      id: 'home',
      mode: NavigationMode.INTERNAL,
    }
  };


  /**
   * Constructor
   */
  constructor(public router: Router, private locationStrategy: LocationStrategy) {
  }

  signIn(redirectUrl?: string) {
    this.signedIn = true;
    this.modelHeader.secondaryLinks = this.secondaryLinksSignedIn.concat([this.signOutItem]);
    if (redirectUrl) {
      this.router.navigateByUrl(redirectUrl);
    } else {
      this.router.navigateByUrl('/workspace');
    }
  }

  signOut(redirectUrl?: string) {
    this.signedIn = false;
    this.modelHeader.secondaryLinks = [ this.signInItem ];
    if (!redirectUrl) {
      this.router.navigateByUrl('/');
    } else {
      this.router.navigateByUrl(redirectUrl);
    }
  }

  goTo(url: string) {
    this.router.navigateByUrl(url);
  }

}
