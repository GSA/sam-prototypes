import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormlyModule } from "@ngx-formly/core";

import {
  logOut,
  SdsCollapseModule,
  SdsExternalLinkDirectivesModule,
  SdsIconModule,
} from "@gsa-sam/components";

import {
  SdsHeaderModule,
  SdsFooterModule,
  SdsFeedbackModule,
  SdsSystemAlertModule,
} from "@gsa-sam/layouts";

import { AppAlertsComponent } from "./app-alerts.component";
import { AppFooterComponent } from "./app-footer.component";
import { AppHeaderComponent } from "./app-header.component";
import { AppFeedbackComponent } from "./app-feedback.component";
import { NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent,
    AppFeedbackComponent,
    AppAlertsComponent,
  ],
  imports: [
    CommonModule,
    SdsHeaderModule,
    SdsFooterModule,
    SdsSystemAlertModule,
    SdsFeedbackModule,
    SdsCollapseModule,
    SdsExternalLinkDirectivesModule,
    SdsIconModule,
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent,
    AppFeedbackComponent,
    AppAlertsComponent,
  ],
})
export class AppLayoutModule {}
