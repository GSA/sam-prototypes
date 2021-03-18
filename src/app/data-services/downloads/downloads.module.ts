import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { SdsSubheaderModule } from "@gsa-sam/layouts";
import { SdsIconModule, SdsSearchModule } from "@gsa-sam/components";

import { DownloadsRoutingModule } from "./downloads-routing.module";
import { DownloadsComponent } from "./downloads.component";

@NgModule({
  declarations: [DownloadsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsIconModule,
    SdsSubheaderModule,
    SdsSearchModule,
    DownloadsRoutingModule,
  ],
  exports: [DownloadsComponent],
})
export class DownloadsModule {}
