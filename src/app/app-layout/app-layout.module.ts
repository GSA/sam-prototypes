import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from "@ngx-formly/core";

import { 
	SdsCollapseModule, 
	SdsExternalLinkDirectivesModule, 
	SdsIconModule,	
  	SdsSideNavigationModule 
 } from "@gsa-sam/components";

import { 
	SdsHeaderModule, 
	SdsFooterModule, 
	SdsFeedbackModule, 
	SdsSystemAlertModule, 
	SdsSubheaderModule,
	SideToolbarModule 
} from "@gsa-sam/layouts";

import { AppAlertsComponent } from './app-alerts.component';
import { AppFooterComponent } from './app-footer.component';
import { AppHeaderComponent } from './app-header.component';
import { AppFeedbackComponent } from './app-feedback.component';
import { DisplaySubheaderComponent } from './display-subheader.component';
import { SubheaderTitleComponent } from './subheader-title.component';
import { BackButtonComponent } from './back-button.component';
import { DisplayNavigationComponent } from './display-navigation/display-navigation.component';
import { DisplaySectionComponent } from './display-section.component';
import { DisplaySubsectionComponent } from './display-subsection.component';
import { SubheaderButtonsComponent } from './subheader-buttons.component';
import { ResponsiveSidebarComponent } from './responsive-sidebar.component';
import { SearchResultComponent } from './search-result.component';

@NgModule({
  declarations: [AppHeaderComponent, AppFooterComponent, AppFeedbackComponent, AppAlertsComponent, DisplaySubheaderComponent, SubheaderTitleComponent, BackButtonComponent, DisplayNavigationComponent, DisplaySectionComponent, DisplaySubsectionComponent, SubheaderButtonsComponent, ResponsiveSidebarComponent, SearchResultComponent],
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
    SdsExternalLinkDirectivesModule,
    SdsIconModule
  ],
  exports: [AppHeaderComponent, AppFooterComponent, AppFeedbackComponent, AppAlertsComponent, DisplaySubheaderComponent, SubheaderTitleComponent, BackButtonComponent, DisplayNavigationComponent, DisplaySectionComponent, DisplaySubsectionComponent, SubheaderButtonsComponent, ResponsiveSidebarComponent, SearchResultComponent]
})
export class AppLayoutModule { }
