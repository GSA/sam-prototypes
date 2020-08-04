import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExclusionsRoutingModule } from './exclusions-routing.module';
import { ExclusionsComponent } from './exclusions.component';

@NgModule({
  declarations: [ExclusionsComponent],
  imports: [
    CommonModule,
    ExclusionsRoutingModule
  ],
  exports: [ExclusionsComponent]
})
export class ExclusionsModule { }
