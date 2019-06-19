import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatabankRoutingModule } from './databank-routing.module';
import { DatabankComponent } from './databank.component';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

@NgModule({
  imports: [CommonModule, SdsSubheaderModule, DatabankRoutingModule],
  declarations: [DatabankComponent]
})
export class DatabankModule {}
