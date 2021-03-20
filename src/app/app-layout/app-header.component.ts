import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map } from "rxjs/operators";
import { NavigationMode } from '@gsa-sam/components';
import { AppService } from '../services/app-service/app.service';

@Component({
  selector: 'app-header',
  template: `
	  <div class="bg-black padding-05">
		  <div class="grid-container text-base-light font-sans-3xs">
		      <div class="grid-row">
		        <div class="grid-fill">
		             This Website is a prototype intended to support usability testing only.
		        </div>
		    </div>
		  </div>
	  </div>
    <sds-header #header [model]="model" [showTopBanner]="false" [showHeaderLogo]="!isHomePage" (linkEvent)="navigateTo($event)"></sds-header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppHeaderComponent implements OnInit {

  isHomePage: boolean = true;
  @ViewChild("header", {static: true}) header;

  model: any;

  signInItem =
  {
      imageClassPrefix: 'sds', imageClass: 'log-out', mode: NavigationMode.INTERNAL,
      text: 'Sign In', route: '/workspace', id: 'signin'
  };

  secondaryLinksSignedIn = [
      {
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
      },
      {
        imageClassPrefix: 'sds', imageClass: 'log-out', mode: NavigationMode.INTERNAL,
        text: 'Sign Out', route: '/signout', id: 'signOut'
      }];

  constructor(
    public appService: AppService, 
    public router: Router, 
    public route: ActivatedRoute, 
    public locationStrategy: LocationStrategy,
    private cdr: ChangeDetectorRef,
  ) { 

       this.model = {
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
            { text: 'Search', route: '/search/search-home', mode: NavigationMode.INTERNAL, id: 'search' },
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

  }

  ngOnInit(): void {

      this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map((event: NavigationEnd) => {
          this.isHomePage = event.url == '/';

          let itemCode = 'id';
          let child = this.route.firstChild;
          let searchedValue = null;
          if (this.route.snapshot.data && this.route.snapshot.data[itemCode]) {
            searchedValue = this.route.snapshot.data[itemCode];
          }
          while (child) {
            if (child.snapshot.data && child.snapshot.data[itemCode]) {
              searchedValue = child.snapshot.data[itemCode];
            }
            if (child.firstChild) {
              child = child.firstChild;
            } else {
              child = null;
            }
          }
          return searchedValue;
        })
      )
      .subscribe((customData: any) => {
        this.header.select(customData);
        this.cdr.detectChanges();
      });
  }

  navigateTo(navigationLink) {
    console.log('Navigation to...');
  }
}
