import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WagesLandingRoutingModule } from './wages-landing-routing.module';
import { WagesLandingComponent } from './wages-landing.component';

@NgModule({
  declarations: [WagesLandingComponent],
  imports: [
    CommonModule,
    WagesLandingRoutingModule
  ],
  exports: [WagesLandingComponent]
})
export class WagesLandingModule { }
