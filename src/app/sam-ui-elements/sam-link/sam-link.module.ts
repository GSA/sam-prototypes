import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SamLinkComponent } from './sam-link.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [SamLinkComponent],
  exports: [SamLinkComponent]
})
export class SamLinkModule { }
