import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { OpportunitiesWsItemModule } from "./opportunities-ws-item/opportunities-ws-item.module";

import {
  SdsSideNavigationModule,
  SdsAccordionModule,
  SdsPageModule,
  SdsSearchModule,
  SdsSideToolbarModule,
} from "@gsa-sam/components";
import {
  SdsFiltersModule,
  SDSFormlyUpdateComunicationService,
} from "@gsa-sam/sam-formly";
import { SdsSubheaderModule, SearchListServiceModule } from "@gsa-sam/layouts";
import { FormlyModule } from "@ngx-formly/core";

import { OpportunitiesComponent } from "./opportunities.component";
import { OpportunitiesRoutingModule } from "./opportunities-routing.module";

import { IconModule } from "@gsa-sam/ngx-uswds-icons";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";

@NgModule({
  imports: [
    CommonModule,
    OpportunitiesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OpportunitiesWsItemModule,
    SdsPageModule,
    SdsSideToolbarModule,
    SdsAccordionModule,
    SdsFiltersModule,
    SdsSideNavigationModule,
    SdsSearchModule,
    SdsSubheaderModule,
    IconModule,
    FormlyModule.forRoot(),
    SearchListServiceModule,
    NgxBootstrapIconsModule.pick(Object.assign(_.cloneDeep(allIcons))),
  ],
  declarations: [OpportunitiesComponent],
  exports: [OpportunitiesComponent],
})
export class OpportunitiesModule {}
