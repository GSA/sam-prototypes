import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { SdsActionsMenuModule } from "@gsa-sam/components";

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

import { AssistancelistRoutingModule } from "./assistancelist-routing.module";
import { AssistancelistComponent } from "./assistancelist.component";
import { AssistancelistItemModule } from "./assistancelist-item/assistancelist-item.module";
import { IconModule } from "@gsa-sam/ngx-uswds-icons";
import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import _ from "lodash-es";

@NgModule({
  declarations: [AssistancelistComponent],
  imports: [
    CommonModule,
    AssistancelistRoutingModule,
    FormsModule,
    IconModule,
    SdsSideNavigationModule,
    SdsSideToolbarModule,
    SdsActionsMenuModule,
    SdsAccordionModule,
    SdsPageModule,
    SdsSearchModule,
    SdsFiltersModule,
    SdsSubheaderModule,
    SearchListServiceModule,
    AssistancelistItemModule,
    FormlyModule,
    NgxBootstrapIconsModule.pick(Object.assign(_.cloneDeep(allIcons))),
  ],
  exports: [AssistancelistComponent],
  providers: [SDSFormlyUpdateComunicationService],
})
export class AssistancelistModule {}
