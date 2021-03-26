import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OpportunitiesWsItemModule } from "./opportunities-ws-item/opportunities-ws-item.module";

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

import { OpportunitiesComponent } from "./opportunities.component";
import { OpportunitiesRoutingModule } from "./opportunities-routing.module";

import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";

@NgModule({
  imports: [
    CommonModule,
    OpportunitiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OpportunitiesWsItemModule,
    SdsPageModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsFiltersModule,
    SdsSideNavigationModule,
    SdsSearchModule,
    SdsSubheaderModule,
    SdsIconModule,
    FormlyModule.forRoot(),
    SearchListServiceModule,
    NgxBootstrapIconsModule.pick(Object.assign(allIcons)),
  ],
  declarations: [OpportunitiesComponent],
  exports: [OpportunitiesComponent],
})
export class OpportunitiesModule {}
