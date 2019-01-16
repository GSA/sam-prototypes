import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamCardComponent } from './sam-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SamCardComponent
  ],
  declarations: [SamCardComponent]
})
export class SamCardModule { }
