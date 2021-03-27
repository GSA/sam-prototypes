import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';  
import { SideNavigationModel, NavigationMode} from '@gsa-sam/components';
import { EntityRegistrationService } from '../../services/entity-registration-service/entity-registration.service';


@Component({
  selector: 'app-entity-registration-display',
  templateUrl: './entity-registration-display.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EntityRegistrationDisplayComponent implements OnInit {

  public record: any;
  
  navigationModel: SideNavigationModel = {
    navigationLinks: [
        { id: 'registration', text: 'Entity Registration', mode: NavigationMode.INTERNAL, route: 'core-data', children: [
	        { id: 'core-data', text: 'Core Data', mode: NavigationMode.INTERNAL, route: 'core-data',
              children: [
                { id: 'business-info', text: 'Business Information', mode: NavigationMode.INTERNAL, route: 'core-data#business-information'},
                { id: 'entity-types', text: 'Entity Types', mode: NavigationMode.INTERNAL, route: 'core-data#entity-types'},
                { id: 'financial-info', text: 'Financial Information', mode: NavigationMode.INTERNAL, route: 'core-data#financial-information'},
                { id: 'pocs', text: 'Points of Contact', mode: NavigationMode.INTERNAL, route: 'core-data#points-of-contact'},
                { id: 'security-info', text: 'Security Information', mode: NavigationMode.INTERNAL, route: 'core-data#security-information'},
              ] },
	        { id: 'assertions', text: 'Assertions', mode: NavigationMode.INTERNAL, route: 'assertions' },
	        { id: 'reps-certs', text: 'Reps and Certs', mode: NavigationMode.INTERNAL, route: 'reps-certs' }
        ]},
        { id: 'respqual', text: 'Responsibility/Qualification', mode: NavigationMode.INTERNAL, route: 'responsibility-qualification' },
        { id: 'history', text: 'History', mode: NavigationMode.INTERNAL, route: 'history' }
    ]
  };

  constructor(private route: ActivatedRoute, private registrationService: EntityRegistrationService) { }

  ngOnInit() {  
    let uei = this.route.snapshot.paramMap.get('id');
    this.record = this.registrationService.getRecord(uei);
  }

  onDownload(event) {
    console.log("Downloading...");
  }

  onFollow(event) {
      console.log("Following...");
  }

}
