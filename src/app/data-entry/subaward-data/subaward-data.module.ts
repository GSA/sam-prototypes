import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubawardDataComponent } from "./subaward-data.component";
import { SubawardRoutingModule } from "./subaward-routing.module";
import { CardModule } from "../card/card.module";
import { SdsActionsMenuModule } from "@gsa-sam/layouts";
import { SdsIconModule, SdsSelectionPanelModule } from "@gsa-sam/components";
import { SdsFiltersModule } from "@gsa-sam/sam-formly";
import { ReactiveFormsModule } from "@angular/forms";
import { FormlyModule } from "@ngx-formly/core";

@NgModule({
  declarations: [SubawardDataComponent],
  imports: [
    CommonModule,
    SubawardRoutingModule,
    CardModule,
    SdsActionsMenuModule,
    SdsIconModule,
    SdsSelectionPanelModule,
    SdsFiltersModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyModule,
  ],
  exports: [SubawardDataComponent],
})
export class SubawardDataModule {}
