import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  SdsSearchModule
} from '@gsa-sam/components';

import { EntityInformationLandingRoutingModule } from './entity-information-landing-routing.module';
import { EntityInformationLandingComponent } from './entity-information-landing.component';

@NgModule({
  declarations: [EntityInformationLandingComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsSearchModule,
    EntityInformationLandingRoutingModule
  ],
  exports: [EntityInformationLandingComponent]
})
export class EntityInformationLandingModule { }
