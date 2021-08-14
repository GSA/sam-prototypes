import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

import { SdsSubheaderModule } from "@gsa-sam/layouts";
import { SdsSearchModule } from "@gsa-sam/components";
import { AppLayoutModule } from '../../app-layout/app-layout.module';

import { DownloadsRoutingModule } from "./downloads-routing.module";
import { DownloadsComponent } from "./downloads.component";

@NgModule({
  declarations: [DownloadsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AppLayoutModule,
    SdsSubheaderModule,
    SdsSearchModule,
    DownloadsRoutingModule,
  ],
  exports: [DownloadsComponent],
})
export class DownloadsModule {}
