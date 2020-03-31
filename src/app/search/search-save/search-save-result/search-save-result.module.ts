import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchSaveResultComponent } from './search-save-result.component';

@NgModule({
  declarations: [SearchSaveResultComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [SearchSaveResultComponent]
})
export class SearchSaveResultModule { }
