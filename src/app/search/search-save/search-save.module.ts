import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { SearchSaveRoutingModule } from "./search-save-routing.module";
import { SearchSaveComponent } from "./search-save.component";

import {
  SdsSideNavigationModule,
  SdsAccordionModule,
  SdsPageModule,
  SdsSearchModule,
  SdsDialogModule,
  SdsSideToolbarModule,
} from "@gsa-sam/components";
import {
  SdsFiltersModule,
  SDSFormlyUpdateComunicationService,
} from "@gsa-sam/sam-formly";
import { SdsSubheaderModule, SearchListServiceModule } from "@gsa-sam/layouts";

import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";
import { FormlySelectModule } from "@ngx-formly/core/select";

import { SearchSaveServiceModule } from "./search-save-service/search-save-service.module";

import { SearchSaveResultModule } from "./search-save-result/search-save-result.module";
import { IconModule } from "@gsa-sam/ngx-uswds-icons";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";

@NgModule({
  declarations: [SearchSaveComponent],
  imports: [
    CommonModule,
    SdsSideToolbarModule,
    RouterModule,
    IconModule,
    SdsSideNavigationModule,

    SdsAccordionModule,
    SdsPageModule,
    SdsSearchModule,
    SdsDialogModule,

    SdsSideNavigationModule,
    SdsSubheaderModule,
    SdsFiltersModule,
    SearchListServiceModule,
    FormsModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule,
    SearchSaveRoutingModule,
    SearchSaveServiceModule,
    SearchSaveResultModule,
    NgxBootstrapIconsModule.pick(Object.assign(_.cloneDeep(allIcons))),
  ],
})
export class SearchSaveModule {}
