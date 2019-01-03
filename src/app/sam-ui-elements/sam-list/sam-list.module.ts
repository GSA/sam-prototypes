import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamListComponent } from './sam-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  	SamListComponent
  ],
  declarations: [SamListComponent]
})
export class SamListModule { }
