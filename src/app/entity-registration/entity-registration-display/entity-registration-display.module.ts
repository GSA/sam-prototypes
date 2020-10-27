import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  SdsSideNavigationModule,
  SdsToolbarModule
} from '@gsa-sam/components';
import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { EntityRegistrationServiceModule } from '../../services/entity-registration-service/entity-registration-service.module';


import { EntityRegistrationDisplayRoutingModule } from './entity-registration-display-routing.module';
import { EntityRegistrationDisplayComponent } from './entity-registration-display.component';

@NgModule({
  declarations: [EntityRegistrationDisplayComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsSubheaderModule,
    EntityRegistrationServiceModule,
    EntityRegistrationDisplayRoutingModule
  ],
  exports: [EntityRegistrationDisplayComponent]
})
export class EntityRegistrationDisplayModule { }
