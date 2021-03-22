import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

import { NavigationMode } from '@gsa-sam/components';

@Component({
  selector: 'app-footer',
  template: `
	<sds-footer 
	  [model]="model"
	  [feedbackTemplate]="feedbackTemplate"
	  (linkEvent)="linkEvent.next($event)">
	</sds-footer>

	<ng-template #feedbackTemplate>
	  <app-feedback></app-feedback>
	</ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFooterComponent implements OnInit {

  public linkEvent = new BehaviorSubject<object>(null);

  constructor(public locationStrategy: LocationStrategy) { }

  ngOnInit() {
    this.linkEvent.subscribe((value) => {
      console.log('Link Event Clicked Change');
      console.log(value);
    });
  }

  model = {
    footerLogo: {
      agencyName: 'General Services Administration',
      imageSourcePath: this.locationStrategy.getBaseHref() + 'assets/img/logo-gsa.svg',
      imageAltText: 'GSA Logo'
    },
    disclaimer: `This is a U.S. General Services Administration Federal Government computer system that is <strong>"FOR OFFICIAL USE ONLY."</strong> This system is subject to monitoring. Individuals found performing unauthorized activities are subject to disciplinary action including criminal prosecution.`,
    linkSections: [
      {
        text: 'About beta.SAM.gov', links: [
          { text: 'About This Website', mode: NavigationMode.INTERNAL, route: '/about/about' },
          { text: 'Our Community', mode: NavigationMode.EXTERNAL, route: 'https://interact.gsa.gov/group/integrated-award-environment-iae-industry-community' },
          { text: 'Release Notes', mode: NavigationMode.EXTERNAL, route: 'https://fsd.gov' },
          { text: 'Alerts', mode: NavigationMode.EXTERNAL, route: 'https://fsd.gov' },
          { text: 'Announcements', mode: NavigationMode.EXTERNAL, route: 'https://fsd.gov' }
        ]
      },
      {
        text: 'Our Partners', links: [
          { text: 'Aquisition.gov', mode: NavigationMode.EXTERNAL, route: 'https://acquisition.gov' },
          { text: 'USASpending.gov', mode: NavigationMode.EXTERNAL, route: 'https://usaspending.gov' },
          { text: 'Grants.gov', mode: NavigationMode.EXTERNAL, route: 'https://grants.gov' },
          { text: 'More Partners', mode: NavigationMode.INTERNAL, route: '/about/partners' }
        ]
      },
      {
        text: 'Policies', links: [
          { text: 'Privacy Policy', mode: NavigationMode.INTERNAL, route: '/about/policies/privacy' },
          { text: 'Disclaimers', mode: NavigationMode.INTERNAL, route: '/about/policies/disclaimers' },
          { text: 'Freedom of Information Act', mode: NavigationMode.EXTERNAL, route: 'https://www.gsa.gov/reference/freedom-of-information-act-foia' },
          { text: 'Logo', mode: NavigationMode.INTERNAL, route: '/about/policies/logo' },
          { text: 'Accessibility', mode: NavigationMode.INTERNAL, route: '/about/policies/accessibility' }
        ]
      },
      {
        text: 'Customer Service', links: [
          { text: 'Help', mode: NavigationMode.INTERNAL, route: '/help' },
          { text: 'Federal Service Desk', mode: NavigationMode.EXTERNAL, route: 'https://fsd.gov' },
          { text: 'External Resources', mode: NavigationMode.INTERNAL, route: '/about/external-resources' },
          { text: 'Contact', mode: NavigationMode.INTERNAL, route: '/about/contact' }
        ]
      }
    ]
  };

}
