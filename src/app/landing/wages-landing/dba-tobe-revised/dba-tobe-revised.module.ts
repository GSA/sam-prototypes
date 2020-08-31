import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbaTobeRevisedRoutingModule } from './dba-tobe-revised-routing.module';
import { DbaTobeRevisedComponent } from './dba-tobe-revised.component';

@NgModule({
  declarations: [DbaTobeRevisedComponent],
  imports: [
    CommonModule,
    DbaTobeRevisedRoutingModule
  ],
  exports: [DbaTobeRevisedComponent]
})
export class DbaTobeRevisedModule { }
