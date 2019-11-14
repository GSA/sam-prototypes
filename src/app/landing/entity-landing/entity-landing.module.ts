import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityLandingRoutingModule } from './entity-landing-routing.module';
import { EntityLandingComponent } from './entity-landing.component';

@NgModule({
  declarations: [EntityLandingComponent],
  imports: [
    CommonModule,
    EntityLandingRoutingModule
  ],
  exports: [EntityLandingComponent]
})
export class EntityLandingModule { }
