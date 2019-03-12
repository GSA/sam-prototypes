import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisasterResponseRoutingModule } from './disaster-response-routing.module';
import { DisasterResponseComponent } from './disaster-response.component';

@NgModule({
  imports: [
    CommonModule,
    DisasterResponseRoutingModule
  ],
  declarations: [DisasterResponseComponent],
  exports: [DisasterResponseComponent]
})
export class DisasterResponseModule { }
