import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataServicesRoutingModule } from './data-services-routing.module';
import {
  DataServicesComponent,
  AlertComponent,
  OfficialComponent
} from './data-services.component';
import { SdsSubheaderModule } from '@gsa-sam/layouts';
import { SdsDialogModule } from '@gsa-sam/components';

@NgModule({
  imports: [
    CommonModule,
    DataServicesRoutingModule,
    SdsSubheaderModule,
    SdsDialogModule
  ],
  declarations: [DataServicesComponent, AlertComponent, OfficialComponent],
  exports: [DataServicesComponent],
  entryComponents: [AlertComponent, OfficialComponent]
})
export class DataServicesModule {}
