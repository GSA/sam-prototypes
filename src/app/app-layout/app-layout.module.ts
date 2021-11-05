import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormlyModule } from "@ngx-formly/core";

import { chevronLeft, chevronRight, dash, x, fileText, plus, question, circleFill, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";

import {
  SdsCollapseModule,
  SdsExternalLinkDirectivesModule,
  SdsSideNavigationModule,
} from "@gsa-sam/components";

import {
  SdsHeaderModule,
  SdsFooterModule,
  SdsFeedbackModule,
  SdsSystemAlertModule,
  SdsSubheaderModule,
  SideToolbarModule,
} from "@gsa-sam/layouts";

import { AppAlertsComponent } from "./app-alerts.component";
import { AppFooterComponent } from "./app-footer.component";
import { AppHeaderComponent } from "./app-header.component";
import { AppFeedbackComponent } from "./app-feedback.component";
import { DisplaySubheaderComponent } from "./display-subheader.component";
import { SubheaderTitleComponent } from "./subheader-title.component";
import { BackButtonComponent } from "./back-button.component";
import { DisplayNavigationComponent } from "./display-navigation/display-navigation.component";
import { DisplaySectionComponent } from "./display-section.component";
import { DisplaySubsectionComponent } from "./display-subsection.component";
import { ResponsiveSidebarComponent } from "./responsive-sidebar.component";
import { IconModule, logOut, workspace, messages, request, logIn } from "@gsa-sam/ngx-uswds-icons";
import { UsaHeaderModule } from '@gsa-sam/ngx-uswds';
@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent,
    AppFeedbackComponent,
    AppAlertsComponent,
    DisplaySubheaderComponent,
    SubheaderTitleComponent,
    BackButtonComponent,
    DisplayNavigationComponent,
    DisplaySectionComponent,
    DisplaySubsectionComponent,
    ResponsiveSidebarComponent
  ],
  imports: [
    CommonModule,
    SdsFooterModule,
    SdsSubheaderModule,
    SdsSystemAlertModule,
    SdsFeedbackModule,
    SdsCollapseModule,
    SdsSideNavigationModule,
    SideToolbarModule,
    IconModule,
    SdsExternalLinkDirectivesModule,
    UsaHeaderModule,
    NgxBootstrapIconsModule.pick({ 
      chevronLeft, chevronRight, dash, x, 
      fileText, plus, question, logOut, workspace,
      messages, request, logIn })
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent,
    AppFeedbackComponent,
    AppAlertsComponent,
    DisplaySubheaderComponent,
    SubheaderTitleComponent,
    BackButtonComponent,
    DisplayNavigationComponent,
    DisplaySectionComponent,
    DisplaySubsectionComponent,
    ResponsiveSidebarComponent
  ],
})
export class AppLayoutModule { }
