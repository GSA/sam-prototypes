import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

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

import { DatabankRoutingModule } from "./databank-routing.module";
import { DatabankComponent } from "./databank.component";
import { NgxBootstrapIconsModule, allIcons } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";
@NgModule({
  imports: [
    CommonModule,
    FormlyModule,
    FormsModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSearchModule,
    SdsSideNavigationModule,
    SdsAccordionModule,
    SdsSubheaderModule,
    SdsFiltersModule,
    DatabankRoutingModule,
    SdsIconModule,
  ],
  declarations: [DatabankComponent],
})
export class DatabankModule {}
