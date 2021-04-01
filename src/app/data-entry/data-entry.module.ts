import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubawardDataModule } from "./subaward-data/subaward-data.module";
import { ReviewDetailsModule } from "./review-details/review-details.module";
import { ReviewContractModule } from "./review-contract/review-contract.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SubawardDataModule,
    ReviewDetailsModule,
    ReviewContractModule,
  ],
  exports: [],
})
export class DataEntryModule {}
