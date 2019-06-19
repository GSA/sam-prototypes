import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataServicesRoutingModule } from './data-services-routing.module';
import { DataServicesComponent } from './data-services.component';
import { SdsSubheaderModule } from '@gsa-sam/layouts';

@NgModule({
  imports: [
    CommonModule,
    DataServicesRoutingModule,
    SdsSubheaderModule
  ],
  declarations: [DataServicesComponent],
  exports: [DataServicesComponent]
})
export class DataServicesModule { }
