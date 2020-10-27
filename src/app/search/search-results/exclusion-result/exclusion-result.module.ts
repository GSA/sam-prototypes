import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExclusionResultComponent } from './exclusion-result.component';

@NgModule({
  declarations: [ExclusionResultComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ExclusionResultComponent]
})
export class ExclusionResultModule { }
