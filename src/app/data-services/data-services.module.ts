import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataServicesRoutingModule } from './data-services-routing.module';
import { DataServicesComponent } from './data-services.component';

@NgModule({
  imports: [
    CommonModule,
    DataServicesRoutingModule
  ],
  declarations: [DataServicesComponent],
  exports: [DataServicesComponent]
})
export class DataServicesModule { }
