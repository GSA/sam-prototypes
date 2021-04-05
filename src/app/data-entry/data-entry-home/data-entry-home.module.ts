import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CardModule } from "../card/card.module";
import { SdsActionsMenuModule } from "@gsa-sam/layouts";
import { SdsIconModule, SdsSelectionPanelModule } from "@gsa-sam/components";
import { DataEntryHomeComponent } from "./data-entry-home.component";
import { DataEntryHomeRoutingModule } from "./data-entry-home-routing.module";
import { SubawardDataModule } from "../subaward-data/subaward-data.module";
import { ReviewDetailsModule } from "../review-details/review-details.module";
import { ReviewContractModule } from "../review-contract/review-contract.module";

@NgModule({
  declarations: [DataEntryHomeComponent],
  imports: [
    CommonModule,
    DataEntryHomeRoutingModule,
    CardModule,
    SdsActionsMenuModule,
    SdsIconModule,
    SdsSelectionPanelModule,
    SubawardDataModule,
    ReviewDetailsModule,
    ReviewContractModule,
  ],
  exports: [DataEntryHomeComponent],
})
export class DataEntryHomeModule {}
