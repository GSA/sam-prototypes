import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExclusionRoutingModule } from './exclusion-routing.module';
import { ExclusionComponent } from './exclusion.component';

@NgModule({
  declarations: [ExclusionComponent],
  imports: [
    CommonModule,
    ExclusionRoutingModule
  ],
  exports: [ExclusionComponent]
})
export class ExclusionModule { }
