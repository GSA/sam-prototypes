import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SubawardDataComponent } from "./subaward-data.component";
import { SubawardRoutingModule } from "./subaward-routing.module";

@NgModule({
  declarations: [SubawardDataComponent],
  imports: [CommonModule, SubawardRoutingModule],
  exports: [SubawardDataComponent],
})
export class SubawardDataModule {}
