import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubawardDataModule } from "./subaward-data/subaward-data.module";
import { ReviewContractComponent } from './review-contract/review-contract.component';

@NgModule({
  declarations: [ReviewContractComponent],
  imports: [CommonModule, SubawardDataModule],
  exports: [ReviewContractComponent],
})
export class DataEntryModule {}
