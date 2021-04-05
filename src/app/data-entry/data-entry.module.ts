import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataEntryComponent } from "./data-entry.component";
import { DataEntryRoutingModule } from "./data-entry-routing.module";
import { CardModule } from "./card/card.module";
import { SdsActionsMenuModule } from "@gsa-sam/layouts";
import { SdsIconModule, SdsSelectionPanelModule } from "@gsa-sam/components";
import { ReviewSubmitComponent } from './review-submit/review-submit.component';
// import { SubawardDataModule } from "./subaward-data/subaward-data.module";
// import { ReviewDetailsModule } from "./review-details/review-details.module";
// import { ReviewContractModule } from "./review-contract/review-contract.module";
// import { RouterModule} from '@angular/router';

// import { DataEntry omeModule } from "./data-entry-home/data-entry-home.module";

@NgModule({
  declarations: [DataEntryComponent, ReviewSubmitComponent],
  imports: [CommonModule, 
    CardModule,
    // RouterModule,
    SdsActionsMenuModule,
    SdsIconModule,
    SdsSelectionPanelModule,
    // SubawardDataModule,
    // ReviewDetailsModule,
    // ReviewContractModule,
    DataEntryRoutingModule],
  exports: [ReviewSubmitComponent, DataEntryComponent],
})
export class DataEntryModule {}
