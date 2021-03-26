import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubawardDataModule } from "./subaward-data/subaward-data.module";
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, SubawardDataModule],
  exports: [CardComponent],
})
export class DataEntryModule {}
