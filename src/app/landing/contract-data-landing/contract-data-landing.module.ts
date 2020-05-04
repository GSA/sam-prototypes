import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractDataLandingRoutingModule } from './contract-data-landing-routing.module';
import { ContractDataLandingComponent } from './contract-data-landing.component';

@NgModule({
  declarations: [ContractDataLandingComponent],
  imports: [
    CommonModule,
    ContractDataLandingRoutingModule
  ],
  exports: [ContractDataLandingComponent]
})
export class ContractDataLandingModule { }
