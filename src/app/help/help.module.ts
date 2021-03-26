import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlySelectModule } from "@ngx-formly/core/select";
import { SdsSubheaderModule, SearchListServiceModule } from "@gsa-sam/layouts";

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

import { HelpRoutingModule } from "./help-routing.module";
import { HelpComponent } from "./help.component";
import { HelpItemModule } from "./help-item/help-item.module";
import { HelpServiceModule } from "./service/service.module";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";

@NgModule({
  declarations: [HelpComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsIconModule,
    FormlyModule,
    FormlySelectModule,
    SdsFiltersModule,
    SdsSubheaderModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSearchModule,
    SearchListServiceModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
    HelpItemModule,
    HelpServiceModule,
    HelpRoutingModule,
  ],
  exports: [HelpComponent],
  providers: [SDSFormlyUpdateComunicationService],
})
export class HelpModule {}
