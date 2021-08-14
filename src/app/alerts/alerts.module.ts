import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { SdsSubheaderModule, SearchListServiceModule } from "@gsa-sam/layouts";
import { SdsSearchModule } from "@gsa-sam/components";

import { AppLayoutModule } from '../app-layout/app-layout.module';

import { AlertDataModule } from "./alert-data/alert-data.module";
import { AlertItemModule } from "./alert-item/alert-item.module";
import { AlertsRoutingModule } from "./alerts-routing.module";
import { AlertsComponent } from "./alerts.component";

@NgModule({
  declarations: [AlertsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SdsSubheaderModule,
    SearchListServiceModule,
    SdsSearchModule,
    AppLayoutModule,
    AlertDataModule,
    AlertItemModule,
    AlertsRoutingModule,
  ],
  exports: [AlertsComponent],
})
export class AlertsModule {}
