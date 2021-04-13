import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormlyModule } from "@ngx-formly/core";

import { allIcons, NgxBootstrapIconsModule } from "ngx-bootstrap-icons";
import { allIcons as sdsAllIcons } from "@gsa-sam/components";
import _ from "lodash-es";

import {
  SdsCollapseModule,
  SdsExternalLinkDirectivesModule,
  SdsIconModule,
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
    SdsHeaderModule,
    SdsFooterModule,
    SdsSubheaderModule,
    SdsSystemAlertModule,
    SdsFeedbackModule,
    SdsCollapseModule,
    SdsSideNavigationModule,
    SideToolbarModule,
    SdsIconModule,
    SdsExternalLinkDirectivesModule,
    SdsIconModule,    
    NgxBootstrapIconsModule.pick(
      Object.assign(_.cloneDeep(allIcons), _.cloneDeep(sdsAllIcons))
    )
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
export class AppLayoutModule {}
