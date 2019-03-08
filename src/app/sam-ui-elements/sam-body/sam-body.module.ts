import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamBodyComponent } from './sam-body.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SamBodyComponent],
  exports: [SamBodyComponent]
})
export class SamBodyModule { }
