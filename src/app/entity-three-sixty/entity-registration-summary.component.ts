import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'entity-registration-summary',
  template: `
    <h1 class="margin-top-4">{{record.title}}</h1>
    <div class="grid-row grid-gap padding-bottom-1 margin-bottom-2 border-bottom-05 border-base-light">
      <div class="grid-col-6 tablet:grid-col-3">
        <div class="sds-field sds-field--stacked sds-field--large">
              <div class="sds-field__name"><span class="usa-tag sds-tag--info-purple">DUNS</span>Unique Entity ID</div>
              <div class="sds-field__value">{{ record.dunsNumber }}</div>
          </div>
      </div>
      <div class="grid-col-fill">
        <div class="sds-field sds-field--stacked sds-field--large">
              <div class="sds-field__name">CAGE/NCAGE</div>
              <div class="sds-field__value">{{ record.cageCode ? record.cageCode : "(blank)" }}</div>
          </div>
        </div>
        <div class="grid-col-6 tablet:grid-col-auto">
          <span class="sds-type--label-title">Expiration Date</span>
          <span class="sds-tag sds-tag--outline flex-justify-center width-auto">{{ record.registrationExpirationDate | date }}</span>
        </div>
        <div class="grid-col-6 tablet:grid-col-auto">
          <span class="sds-type--label-title">Status</span>
            <span class="sds-tag sds-tag--outline flex-justify-center width-auto">Active</span>
        </div>
    </div>
    <div class="grid-row grid-gap">
      <div class="grid-col-12 desktop:grid-col-6">
        <summary-addresses></summary-addresses>
      </div>
      <div class="grid-col-12 tablet:grid-col-6 desktop:grid-col-3">

      </div>
      <div class="grid-col-3 tablet:grid-col-6 desktop:grid-col-3">
        <summary-review-list></summary-review-list>
      </div>
    </div>
  `
})
export class EntityRegistrationSummaryComponent implements OnInit {

  @Input() record: any;

  constructor() { }

  ngOnInit(): void {
  }

}
