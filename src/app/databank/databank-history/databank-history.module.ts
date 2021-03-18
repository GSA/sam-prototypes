import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import { DatabankHistoryRoutingModule } from "./databank-history-routing.module";
import { DatabankHistoryComponent } from "./databank-history.component";
import { SdsIconModule } from "@gsa-sam/components";

@NgModule({
  declarations: [DatabankHistoryComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsIconModule,
    SdsSubheaderModule,
    DatabankHistoryRoutingModule,
  ],
  exports: [DatabankHistoryComponent],
})
export class DatabankHistoryModule {}
