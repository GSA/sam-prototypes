import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubawardDataComponent } from "./subaward-data.component";
import { SubawardRoutingModule } from "./subaward-routing.module";
import { CardModule } from "../card/card.module";
import { SdsActionsMenuModule } from "@gsa-sam/layouts";
import { SdsIconModule, SdsSelectionPanelModule } from "@gsa-sam/components";

@NgModule({
  declarations: [SubawardDataComponent],
  imports: [
    CommonModule,
    SubawardRoutingModule,
    CardModule,
    SdsActionsMenuModule,
    SdsIconModule,
    SdsSelectionPanelModule,
  ],
  exports: [SubawardDataComponent],
})
export class SubawardDataModule {}
