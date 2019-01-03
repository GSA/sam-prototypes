import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';

@NgModule({
  imports: [
    CommonModule,
    FeedRoutingModule
  ],
  declarations: [FeedComponent]
})
export class FeedModule { }
