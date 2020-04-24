import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckStatusRoutingModule } from './check-status-routing.module';
import { CheckStatusComponent } from './check-status.component';

@NgModule({
  declarations: [CheckStatusComponent],
  imports: [
    CommonModule,
    CheckStatusRoutingModule
  ],
  exports: [CheckStatusComponent]
})
export class CheckStatusModule { }
