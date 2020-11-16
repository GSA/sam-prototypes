import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { PartnersComponent } from './partners.component';
import { SdsIconModule } from '@gsa-sam/components';

@NgModule({
  declarations: [PartnersComponent],
  imports: [
    CommonModule,
    PartnersRoutingModule,
    SdsIconModule
  ],
  exports: [PartnersComponent]
})
export class PartnersModule { }
