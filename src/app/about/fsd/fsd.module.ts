import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsdRoutingModule } from './fsd-routing.module';
import { FsdComponent } from './fsd.component';

@NgModule({
  declarations: [FsdComponent],
  imports: [
    CommonModule,
    FsdRoutingModule
  ],
  exports: [FsdComponent]
})
export class FsdModule { }
