import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataEntryComponent } from "./data-entry.component";
import { DataEntryRoutingModule } from "./data-entry-routing.module";

import { SdsActionsMenuModule } from "@gsa-sam/layouts";
import { SdsIconModule, SdsSelectionPanelModule } from "@gsa-sam/components";
import { ReviewSubmitComponent } from "./review-submit/review-submit.component";

import { SdsFormlyModule } from "@gsa-sam/sam-formly";
import { FormlyModule } from "@ngx-formly/core";
import { DataEntryFormlyModule } from "./formly/formly-module";
import {
  NgxBootstrapIconsModule,
  chevronLeft,
  chevronRight,
  x,
  check,
} from "ngx-bootstrap-icons";
import { AppLayoutFormlyModule } from "../app-layout/formly/formly-module";
import { ExpandableCardModule } from "../app-layout/card/card.module";
import { DataEntryLayoutModule } from "../app-layout/data-entry-layout/data-entry-layout.module";
import { StepperModule } from "../app-layout/stepper/stepper.module";
import { DataEntryReportComponent } from "./report/report.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [DataEntryComponent, ReviewSubmitComponent, DataEntryReportComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExpandableCardModule,
    SdsActionsMenuModule,
    SdsIconModule,
    SdsSelectionPanelModule,
    StepperModule,
    DataEntryRoutingModule,
    SdsFormlyModule,
    DataEntryLayoutModule,
    FormlyModule.forRoot(),
    DataEntryFormlyModule,
    AppLayoutFormlyModule,

    NgxBootstrapIconsModule.pick({ chevronLeft, chevronRight, x, check }),
  ],
  exports: [ReviewSubmitComponent, DataEntryComponent, DataEntryReportComponent],
})
export class DataEntryModule { }
