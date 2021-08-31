import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FormlyModule } from "@ngx-formly/core";
import { FormsModule } from "@angular/forms";

import { SdsFiltersModule } from "@gsa-sam/sam-formly";

import { SearchListServiceModule } from "@gsa-sam/layouts";

import { AppLayoutModule } from '../app-layout/app-layout.module';
import { WorkspaceLayoutModule } from '../app-layout/workspace-layout/workspace-layout.module';

import { RequestRoutingModule } from "./request-routing.module";
import { FeedServicesModule } from "../services/feed-services/feed-services.module";
import { RequestItemModule } from "./request-item/request-item.module";
import { RequestComponent } from "./request.component";
import { RequestFiltersComponent } from './request-filters/request-filters.component';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule,
    FormsModule,
    SdsFiltersModule,
    SearchListServiceModule,
    AppLayoutModule,
    WorkspaceLayoutModule,
    RequestRoutingModule,
    FeedServicesModule,
    RequestItemModule
  ],
  declarations: [RequestComponent, RequestFiltersComponent],
  exports: [RequestFiltersComponent]
})
export class RequestModule {}
