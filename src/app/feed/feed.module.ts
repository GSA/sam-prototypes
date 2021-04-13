import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule,
  SdsSearchModule,
  SdsIconModule,
} from "@gsa-sam/components";

import {
  SdsFiltersModule,
  SDSFormlyUpdateComunicationService,
} from "@gsa-sam/sam-formly";
import { SdsSubheaderModule, SearchListServiceModule } from "@gsa-sam/layouts";

import { FormlyModule } from "@ngx-formly/core";
import { FormsModule } from "@angular/forms";

import { FeedRoutingModule } from "./feed-routing.module";
import { FeedServiceModule } from "./service/feed-service.module";
import { FeedItemModule } from "./feed-item/feed-item.module";
import { FeedComponent } from "./feed.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";
@NgModule({
  imports: [
    CommonModule,
    SdsIconModule,
    FormlyModule,
    FormsModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSearchModule,
    SdsSideNavigationModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
    SdsAccordionModule,
    SdsSubheaderModule,
    SdsFiltersModule,
    SearchListServiceModule,
    FeedRoutingModule,
    FeedServiceModule,
    FeedItemModule,
  ],
  declarations: [FeedComponent],
})
export class FeedModule {}
