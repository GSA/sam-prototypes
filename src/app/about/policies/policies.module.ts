import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliciesRoutingModule } from './policies-routing.module';
import { PoliciesComponent } from './policies.component';

@NgModule({
  declarations: [PoliciesComponent],
  imports: [
    CommonModule,
    PoliciesRoutingModule
  ],
  exports: [PoliciesComponent]
})
export class PoliciesModule { }
