import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';

import { ContractDataLandingRoutingModule } from './contract-data-landing-routing.module';
import { ContractDataLandingComponent } from './contract-data-landing.component';

@NgModule({
  declarations: [ContractDataLandingComponent],
  imports: [
    CommonModule,
    SdsAccordionModule,
    ContractDataLandingRoutingModule
  ],
  exports: [ContractDataLandingComponent]
})
export class ContractDataLandingModule { }
