import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule,
  SdsSearchModule
} from "@gsa-sam/components";

import {
  SdsFiltersModule,
  SDSFormlyUpdateComunicationService,
} from "@gsa-sam/sam-formly";
import { SdsSubheaderModule, SearchListServiceModule } from "@gsa-sam/layouts";

import { FormlyModule } from "@ngx-formly/core";
import { FormsModule } from "@angular/forms";

import { RequestRoutingModule } from "./request-routing.module";
import { RequestServiceModule } from "./service/service.module";
import { RequestItemModule } from "./request-item/request-item.module";
import { RequestComponent } from "./request.component";
import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";

@NgModule({
  imports: [
    CommonModule,
    IconModule,
    FormlyModule,
    FormsModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSearchModule,
    SdsSideNavigationModule,
    SdsAccordionModule,
    SdsSubheaderModule,
    SdsFiltersModule,
    SearchListServiceModule,
    RequestRoutingModule,
    RequestServiceModule,
    RequestItemModule,

    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons))
    ),
  ],
  declarations: [RequestComponent],
})
export class RequestModule { }
