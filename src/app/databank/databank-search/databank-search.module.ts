import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsPageModule,
  SdsCollapseModule,
  SdsSearchModule,
  SdsIconModule,
} from "@gsa-sam/components";
import { SdsFiltersModule } from "@gsa-sam/sam-formly";
import { SdsSubheaderModule, SearchListServiceModule } from "@gsa-sam/layouts";
import { SdsAccordionModule } from "@gsa-sam/sam-material-extensions";

import { FormlyModule } from "@ngx-formly/core";
import { FormsModule } from "@angular/forms";

import { DatabankServiceModule } from "../../services/databank-service/databank-service.module";

import { DatabankSearchItemModule } from "./databank-search-item/databank-search-item.module";

import { DatabankSearchRoutingModule } from "./databank-search-routing.module";
import { DatabankSearchComponent } from "./databank-search.component";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";

@NgModule({
  declarations: [DatabankSearchComponent],
  imports: [
    CommonModule,
    FormlyModule,
    FormsModule,
    SdsIconModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsCollapseModule,
    SdsSearchModule,
    SdsSideNavigationModule,
    SdsAccordionModule,
    SdsSubheaderModule,
    SdsFiltersModule,
    DatabankSearchItemModule,
    SearchListServiceModule,
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    ),
    DatabankServiceModule,
    DatabankSearchRoutingModule,
  ],
  exports: [DatabankSearchComponent],
  providers: [],
})
export class DatabankSearchModule {}
