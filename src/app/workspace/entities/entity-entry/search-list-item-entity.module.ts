import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchResultListEntityDataItemComponent } from './search-list-item-entity.component';


@NgModule({
  declarations: [SearchResultListEntityDataItemComponent],
  imports: [
    CommonModule, FormsModule,

  ], exports: [SearchResultListEntityDataItemComponent]
})
export class SearchResultListEntityDataItemModule { }
