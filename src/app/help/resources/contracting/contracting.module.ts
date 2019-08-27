import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SdsAccordionModule
} from '@gsa-sam/components';

import { ContractingResourcesRoutingModule } from './contracting-routing.module';
import { ContractingResourcesComponent } from './contracting.component';

@NgModule({
  declarations: [ContractingResourcesComponent],
  imports: [
    CommonModule,
    SdsAccordionModule,
    ContractingResourcesRoutingModule
  ],
  exports: [ContractingResourcesComponent]
})
export class ContractingResourcesModule { }
