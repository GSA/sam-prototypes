import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvancedFiltersComponent } from './advanced-filters.component';

@NgModule({
  declarations: [AdvancedFiltersComponent],
  imports: [
    CommonModule
  ],
  exports: [AdvancedFiltersComponent]
})
export class AdvancedFiltersModule { }
