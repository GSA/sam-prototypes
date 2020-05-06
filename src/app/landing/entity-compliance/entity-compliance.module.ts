import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SdsSearchModule
} from '@gsa-sam/components';

import { EntityComplianceRoutingModule } from './entity-compliance-routing.module';
import { EntityComplianceComponent } from './entity-compliance.component';

@NgModule({
  declarations: [EntityComplianceComponent],
  imports: [
    CommonModule,
    SdsSearchModule,
    EntityComplianceRoutingModule
  ],
  exports: [EntityComplianceComponent]
})
export class EntityComplianceModule { }
