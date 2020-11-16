import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';  
import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';
import { EntityRegistrationService } from '../../services/entity-registration-service/entity-registration.service';


@Component({
  selector: 'app-entity-registration-display',
  templateUrl: './entity-registration-display.component.html',
  styleUrls: ['./entity-registration-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityRegistrationDisplayComponent implements OnInit {

  public record: any;

  public subheaderActions = {
    buttons: [],
    actions: [
      { id: 'followAction', icon: 'bars', text: 'Follow' },
      { id: 'downloadAction', icon: 'bars', text: 'Download' }
    ]
  };
  
  navigationData: SideNavigationModel = {
    navigationLinks: [
        { id: 'registration', text: 'Entity Registration', mode: NavigationMode.INTERNAL, route: 'core-data', children: [
	        { id: 'core-data', text: 'Core Data', mode: NavigationMode.INTERNAL, route: 'core-data' },
	        { id: 'assertions', text: 'Assertions', mode: NavigationMode.INTERNAL, route: 'assertions' },
	        { id: 'reps-certs', text: 'Reps and Certs', mode: NavigationMode.INTERNAL, route: 'reps-certs' }
        ]},
        { id: 'ex-int', text: 'Exclusions and Integrity', mode: NavigationMode.INTERNAL, route: 'integrity' },
        { id: 'hierarchy', text: 'Entity Hierarchy', mode: NavigationMode.INTERNAL, route: 'exclusions' }
    ]
};

  constructor(private location: Location, private route: ActivatedRoute, private registrationService: EntityRegistrationService) { }

  ngOnInit() {  
    let uei = this.route.snapshot.paramMap.get('id');
    this.record = this.registrationService.getRecord(uei);
  }

  back() {
      this.location.back();
  }

  log(event) {

  }

}
