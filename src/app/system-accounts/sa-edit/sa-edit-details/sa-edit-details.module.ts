import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaEditDetailsRoutingModule } from './sa-edit-details-routing.module';
import { SaEditDetailsComponent } from './sa-edit-details.component';

@NgModule({
  declarations: [SaEditDetailsComponent],
  imports: [
    CommonModule,
    SaEditDetailsRoutingModule
  ],
  exports: [SaEditDetailsComponent]
})
export class SaEditDetailsModule { }
