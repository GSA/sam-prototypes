import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityInformationLandingRoutingModule } from './entity-information-landing-routing.module';
import { EntityInformationLandingComponent } from './entity-information-landing.component';

@NgModule({
  declarations: [EntityInformationLandingComponent],
  imports: [
    CommonModule,
    EntityInformationLandingRoutingModule
  ],
  exports: [EntityInformationLandingComponent]
})
export class EntityInformationLandingModule { }
