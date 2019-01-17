import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamSearchInputModule } from '../sam-ui-elements/sam-search-input/sam-search-input.module';
import { SamSidebarModule } from '../sam-ui-elements/sam-sidebar/sam-sidebar.module';
import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';

@NgModule({
  imports: [
    CommonModule,
    SamSearchInputModule,
    SamSidebarModule,
    FeedRoutingModule
  ],
  declarations: [FeedComponent]
})
export class FeedModule { }
