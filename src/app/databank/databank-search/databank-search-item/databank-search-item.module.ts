import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DatabankSearchItemComponent } from './databank-search-item.component';

@NgModule({
  declarations: [DatabankSearchItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [DatabankSearchItemComponent]
})
export class DatabankSearchItemModule { }
