import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SdsSearchModule,
  SdsIconModule
} from '@gsa-sam/components';

import { EntityComplianceRoutingModule } from './entity-compliance-routing.module';
import { EntityComplianceComponent } from './entity-compliance.component';

@NgModule({
  declarations: [EntityComplianceComponent],
  imports: [
    CommonModule,
    SdsSearchModule,
    EntityComplianceRoutingModule,
    SdsIconModule
  ],
  exports: [EntityComplianceComponent]
})
export class EntityComplianceModule { }
