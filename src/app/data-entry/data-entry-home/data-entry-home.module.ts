import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CardModule } from "../card/card.module";
import { SdsActionsMenuModule } from "@gsa-sam/layouts";
import { SdsIconModule, SdsSelectionPanelModule } from "@gsa-sam/components";
import { DataEntryHomeComponent } from "./data-entry-home.component";
import { DataEntryHomeRoutingModule } from "./data-entry-home-routing.module";

@NgModule({
  declarations: [DataEntryHomeComponent],
  imports: [
    CommonModule,
    DataEntryHomeRoutingModule,
    CardModule,
    SdsActionsMenuModule,
    SdsIconModule,
    SdsSelectionPanelModule,
  ],
  exports: [DataEntryHomeComponent],
})
export class DataEntryHomeModule {}
