import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamSegmentComponent } from './sam-segment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  	SamSegmentComponent
  ],
  declarations: [SamSegmentComponent]
})
export class SamSegmentModule { }
