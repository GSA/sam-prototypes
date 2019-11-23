import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsItemComponent } from './news-item.component';

@NgModule({
  declarations: [NewsItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NewsItemComponent]
})
export class NewsItemModule { }
