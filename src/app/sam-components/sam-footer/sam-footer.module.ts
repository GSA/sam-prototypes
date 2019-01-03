import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SamFooterComponent } from './sam-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
  	SamFooterComponent
  ],
  declarations: [SamFooterComponent]
})
export class SamFooterModule { }
