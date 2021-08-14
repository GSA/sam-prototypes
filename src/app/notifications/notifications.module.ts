import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsSearchModule
} from "@gsa-sam/components";

import {
  SdsFiltersModule,
  SDSFormlyUpdateComunicationService,
} from "@gsa-sam/sam-formly";

import { SdsSubheaderModule, SearchListServiceModule } from "@gsa-sam/layouts";

import { FormlyModule } from "@ngx-formly/core";
import { FormsModule } from "@angular/forms";

import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { AppLayoutModule } from '../app-layout/app-layout.module';
import { WorkspaceLayoutModule } from '../app-layout/workspace-layout/workspace-layout.module';

import { NotificationsRoutingModule } from "./notifications-routing.module";
import { FeedServicesModule } from "../services/feed-services/feed-services.module";
import { NotificationsComponent } from "./notifications.component";
import { NotificationFiltersComponent } from './notification-filters/notification-filters.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule, 
    AppLayoutModule,
    WorkspaceLayoutModule,
    IconModule,
    FormlyModule,
    FormsModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SdsSearchModule,
    SdsSideNavigationModule,
    SdsAccordionModule,
    SdsSubheaderModule,
    SdsFiltersModule,
    SearchListServiceModule,
    NotificationsRoutingModule,
    FeedServicesModule
  ],
  declarations: [NotificationsComponent, NotificationFiltersComponent],
  exports: [NotificationFiltersComponent],
  providers: [SDSFormlyUpdateComunicationService]
})
export class NotificationsModule {}

