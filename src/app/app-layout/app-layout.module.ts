import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from "@ngx-formly/core";

import { SdsCollapseModule, SdsExternalLinkDirectivesModule, SdsIconModule } from "@gsa-sam/components";

import { SdsHeaderModule, SdsFooterModule, SdsFeedbackModule, SdsSystemAlertModule, SdsSubheaderModule } from "@gsa-sam/layouts";


import { AppAlertsComponent } from './app-alerts.component';
import { AppFooterComponent } from './app-footer.component';
import { AppHeaderComponent } from './app-header.component';
import { AppFeedbackComponent } from './app-feedback.component';
import { DisplaySubheaderComponent } from './display-subheader.component';
import { SubheaderTitleComponent } from './subheader-title.component';
import { BackButtonComponent } from './back-button.component';

@NgModule({
  declarations: [AppHeaderComponent, AppFooterComponent, AppFeedbackComponent, AppAlertsComponent, DisplaySubheaderComponent, SubheaderTitleComponent, BackButtonComponent],
  imports: [
    CommonModule,
    SdsHeaderModule,
    SdsFooterModule,
    SdsSubheaderModule,
    SdsSystemAlertModule,
    SdsFeedbackModule,
    SdsCollapseModule,
    SdsExternalLinkDirectivesModule,
    SdsIconModule
  ],
  exports: [AppHeaderComponent, AppFooterComponent, AppFeedbackComponent, AppAlertsComponent, DisplaySubheaderComponent, SubheaderTitleComponent, BackButtonComponent]
})
export class AppLayoutModule { }
