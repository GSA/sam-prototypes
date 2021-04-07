import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataEntryComponent } from "./data-entry.component";
import { DataEntryRoutingModule } from "./data-entry-routing.module";
import { CardModule } from "./card/card.module";
import { SdsActionsMenuModule } from "@gsa-sam/layouts";
import { SdsIconModule, SdsSelectionPanelModule } from "@gsa-sam/components";
import { ReviewSubmitComponent } from "./review-submit/review-submit.component";
import { StepperModule } from "./stepper/stepper.module";
import { SdsFormlyModule } from "@gsa-sam/sam-formly";
import { FormlyModule } from "@ngx-formly/core";
import { PrototypeFormlyModule } from "./formly/formly-module";

@NgModule({
  declarations: [DataEntryComponent, ReviewSubmitComponent],
  imports: [
    CommonModule,
    CardModule,
    SdsActionsMenuModule,
    SdsIconModule,
    SdsSelectionPanelModule,
    StepperModule,
    DataEntryRoutingModule,
    SdsFormlyModule,
    FormlyModule.forRoot(),
    PrototypeFormlyModule,
  ],
  exports: [ReviewSubmitComponent, DataEntryComponent],
})
export class DataEntryModule {}
