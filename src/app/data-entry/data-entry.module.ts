import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataEntryComponent } from "./data-entry.component";
import { DataEntryRoutingModule } from "./data-entry-routing.module";

import {
  SdsSelectionPanelModule,
  SdsActionsMenuModule,
} from "@gsa-sam/components";
import { ReviewSubmitComponent } from "./review-submit/review-submit.component";

import { SdsFormlyModule, SdsStepperModule } from "@gsa-sam/sam-formly";
import { FormlyModule } from "@ngx-formly/core";
import { DataEntryFormlyModule } from "./formly/formly-module";
import { IconModule } from "@gsa-sam/ngx-uswds-icons";
import {
  NgxBootstrapIconsModule,
  chevronLeft,
  chevronRight,
  x,
  check,
} from "ngx-bootstrap-icons";
import { ExpandableCardModule } from "../app-layout/card/card.module";
import { DataEntryLayoutModule } from "../app-layout/data-entry-layout/data-entry-layout.module";

import { DataEntryReportComponent } from "./report/report.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddSubawardeeModalComponent } from "../data-entry-multi-form/modal/add-subawardee-modal.component";

@NgModule({
  declarations: [
    DataEntryComponent,
    ReviewSubmitComponent,
    DataEntryReportComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExpandableCardModule,
    SdsActionsMenuModule,
    IconModule,
    SdsSelectionPanelModule,
    DataEntryRoutingModule,
    SdsFormlyModule,
    DataEntryLayoutModule,
    FormlyModule.forRoot(),
    DataEntryFormlyModule,
    NgxBootstrapIconsModule.pick({
      chevronLeft,
      chevronRight,
      x,
      check,
    }),
  ],
  exports: [
    ReviewSubmitComponent,
    DataEntryComponent,
    DataEntryReportComponent,
  ],
})
export class DataEntryModule {}
