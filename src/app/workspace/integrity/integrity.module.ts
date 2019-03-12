import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntegrityRoutingModule } from './integrity-routing.module';
import { IntegrityComponent } from './integrity.component';

@NgModule({
  imports: [
    CommonModule,
    IntegrityRoutingModule
  ],
  declarations: [IntegrityComponent],
  exports: [IntegrityComponent]
})
export class IntegrityModule { }
