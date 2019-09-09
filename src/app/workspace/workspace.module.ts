import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { WorkspaceModelModule } from './service/workspace-model.module';
import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule,
  SdsPageModule
} from '@gsa-sam/components';
import { SdsFiltersModule, SDSFormlyUpdateComunicationService } from '@gsa-sam/sam-formly';
import { SdsSubheaderModule, SearchListServiceModule } from '@gsa-sam/layouts';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';
import { AutocompleteSampleDataService } from './entities/entity-service/autocomplete-sample.service';
@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutingModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    WorkspaceModelModule.forRoot(),
    SdsPageModule,
    SdsToolbarModule,
    SdsSideNavigationModule,
    SdsAccordionModule,
    SdsSubheaderModule,
    SdsFiltersModule,
    SearchListServiceModule,
    FormsModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule
  ],
  declarations: [WorkspaceComponent],
  providers: [SDSFormlyUpdateComunicationService, AutocompleteSampleDataService],
  exports: [WorkspaceComponent]
})
export class WorkspaceModule {}
