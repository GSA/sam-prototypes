import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeedItemComponent } from './feed-item.component';

@NgModule({
  declarations: [FeedItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [FeedItemComponent]
})
export class FeedItemModule { }
