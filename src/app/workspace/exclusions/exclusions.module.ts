import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExclusionsRoutingModule } from './exclusions-routing.module';
import { ExclusionsComponent } from './exclusions.component';

@NgModule({
  imports: [
    CommonModule,
    ExclusionsRoutingModule
  ],
  declarations: [ExclusionsComponent],
  exports: [ExclusionsComponent]
})
export class ExclusionsModule { }
