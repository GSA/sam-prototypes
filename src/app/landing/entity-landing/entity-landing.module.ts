import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityLandingRoutingModule } from './entity-landing-routing.module';
import { EntityLandingComponent } from './entity-landing.component';
import { BeforeYouStartComponent } from './before-you-start.component';
import { UpdatingRegistrationComponent } from './updating-registration.component';
import { WhoRegistersComponent } from './who-registers.component';
import { EntityStaticHelpComponent } from './entity-static-help.component';

@NgModule({
  declarations: [EntityLandingComponent, BeforeYouStartComponent, UpdatingRegistrationComponent, WhoRegistersComponent, EntityStaticHelpComponent],
  imports: [
    CommonModule,
    EntityLandingRoutingModule
  ],
  exports: [EntityLandingComponent, BeforeYouStartComponent, UpdatingRegistrationComponent, WhoRegistersComponent, EntityStaticHelpComponent]
})
export class EntityLandingModule { }
