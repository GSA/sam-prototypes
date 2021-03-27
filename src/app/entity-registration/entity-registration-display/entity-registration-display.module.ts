import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsIconModule
} from '@gsa-sam/components';
import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { AppLayoutModule } from '../../app-layout/app-layout.module';
import { ComponentsModule } from '../../components/components.module';

import { EntityRegistrationServiceModule } from '../../services/entity-registration-service/entity-registration-service.module';

import { EntityRegistrationDisplayRoutingModule } from './entity-registration-display-routing.module';
import { EntityRegistrationDisplayComponent } from './entity-registration-display.component';
import { EntityRegistrationSummaryComponent } from './entity-registration-summary.component';
import { SummaryReviewListComponent } from './summary-review-list.component';
import { SummaryAddressesComponent } from './summary-addresses.component';

@NgModule({
  declarations: [EntityRegistrationDisplayComponent, EntityRegistrationSummaryComponent, SummaryReviewListComponent, SummaryAddressesComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    AppLayoutModule,
    ComponentsModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsSubheaderModule,
    SdsIconModule,
    EntityRegistrationServiceModule,
    EntityRegistrationDisplayRoutingModule
  ],
  exports: [EntityRegistrationDisplayComponent, EntityRegistrationSummaryComponent, SummaryReviewListComponent, SummaryAddressesComponent]
})
export class EntityRegistrationDisplayModule { }
