import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SamHeaderComponent } from './sam-header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CommonModule,
  	SamHeaderComponent
  ],
  declarations: [SamHeaderComponent]
})
export class SamHeaderModule { }
