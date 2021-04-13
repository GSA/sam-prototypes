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
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    SdsIconModule,
    RouterModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
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
