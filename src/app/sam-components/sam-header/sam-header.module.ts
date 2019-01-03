import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamHeaderComponent } from './sam-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
  	SamHeaderComponent
  ],
  declarations: [SamHeaderComponent]
})
export class SamHeaderModule { }
