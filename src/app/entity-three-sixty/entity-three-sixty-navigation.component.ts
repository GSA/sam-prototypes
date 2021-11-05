import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

@Component({
  selector: 'entity-three-sixty-navigation',
  template: `
     <responsive-sidebar title="Navigate To" (onApply)="onNavigateMobile()">
        <div class="usa-card__body bg-accent-cool-lighter" id="panelBody">
          <sds-side-navigation #sideNavigation [model]="sideMenu" (linkEvent)="onNavigateLink($event)"></sds-side-navigation> 
        </div>
    </responsive-sidebar>
  `
})
export class EntityThreeSixtyNavigationComponent implements OnInit {

  public sideMenu: SideNavigationModel = {
      navigationLinks: [
          { text: 'Registration', id: 'registration', route: 'registration', queryParams: {}, mode: NavigationMode.INTERNAL, children: [
            { text: 'Core Data', id: 'core-data', route: 'registration/core-data', queryParams: {}, mode: NavigationMode.INTERNAL },
            { text: 'Assertions', id: 'assertions', route: 'registration/assertions', queryParams: {}, mode: NavigationMode.INTERNAL },
            { text: 'Reps and Certs', id: 'reps', route: 'registration/reps', queryParams: {}, mode: NavigationMode.INTERNAL }
          ]},
          { text: 'Responsibility / Qualification', id: 'responsibility-qualification', route: 'responsibility-qualification', queryParams: {}, mode: NavigationMode.INTERNAL },
          { text: 'Entity Reporting', id: 'entity-reporting', route: 'entity-reporting', queryParams: {}, mode: NavigationMode.INTERNAL },
          { text: 'History', id: 'history', route: 'history', queryParams: {}, mode: NavigationMode.INTERNAL }
      ]
   };

  constructor() { }

  ngOnInit(): void {
  }

  onNavigateLink(event) {
    console.log("Navigating...");
  }

  onDialogOpen(event) {

  }

  onNavigateMobile() {

  }


}
