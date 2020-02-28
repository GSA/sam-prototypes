import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AssistanceResultComponent } from './assistance-result.component';

@NgModule({
  declarations: [AssistanceResultComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AssistanceResultComponent]
})
export class AssistanceResultModule { }
