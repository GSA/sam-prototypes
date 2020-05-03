import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityComplianceRoutingModule } from './entity-compliance-routing.module';
import { EntityComplianceComponent } from './entity-compliance.component';

@NgModule({
  declarations: [EntityComplianceComponent],
  imports: [
    CommonModule,
    EntityComplianceRoutingModule
  ],
  exports: [EntityComplianceComponent]
})
export class EntityComplianceModule { }
