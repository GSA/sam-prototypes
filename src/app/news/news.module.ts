import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SdsSubheaderModule, SearchListServiceModule } from "@gsa-sam/layouts";

import {
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule,
  SdsSearchModule,
  SdsIconModule,
} from "@gsa-sam/components";

import { NewsDataModule } from "./news-data/news-data.module";
import { NewsItemModule } from "./news-item/news-item.module";
import { NewsRoutingModule } from "./news-routing.module";
import { NewsComponent } from "./news.component";

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    SdsIconModule,
    RouterModule,

    SdsSubheaderModule,
    SearchListServiceModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSearchModule,
    NewsDataModule,
    NewsItemModule,
    NewsRoutingModule,
  ],
  exports: [NewsComponent],
})
export class NewsModule {}
