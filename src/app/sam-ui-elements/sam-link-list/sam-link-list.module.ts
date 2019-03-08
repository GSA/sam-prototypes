import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamLinkListComponent } from './sam-link-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SamLinkListComponent],
  exports: [SamLinkListComponent]
})
export class SamLinkListModule { }
