import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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
