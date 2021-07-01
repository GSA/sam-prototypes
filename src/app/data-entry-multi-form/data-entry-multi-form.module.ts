import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SdsIconModule, SdsSelectionPanelModule, SdsToastModule } from '@gsa-sam/components';
import { DataEntryLayoutModule } from '../app-layout/data-entry-layout/data-entry-layout.module';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';
import { DataEntryFormlyModule } from '../data-entry/formly/formly-module';
import { EntityReportingServiceModule } from '../services/entity-reporting-service/entity-reporting-service.module';
import { DataEntryMultiFormStepsService } from './data-entry-multi-form-steps.service';
import { AppLayoutFormlyModule } from '../app-layout/formly/formly-module';
import {
  NgxBootstrapIconsModule,
  chevronLeft,
  chevronRight,
  x,
  check,
} from "ngx-bootstrap-icons";
import { DataEntryAppComponent } from './data-entry-app.component';
import { SdsFormlyStepperModule } from '@gsa-sam/sam-formly';
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';

const routes: Routes = [
  {
    path: '',
    component: DataEntryAppComponent
  }
];

@NgModule({
  declarations: [
    DataEntryAppComponent,
  ],
  providers: [
    DataEntryMultiFormStepsService,
  ],
  imports: [
    CommonModule,
    SdsSelectionPanelModule,
    DataEntryLayoutModule,
    FormlyModule.forRoot(),
    SdsFormlyModule,
    DataEntryFormlyModule,
    AppLayoutFormlyModule,
    SdsIconModule,
    SdsToastModule,
    SdsButtonGroupModule,
    NgxBootstrapIconsModule.pick({ chevronLeft, chevronRight, x, check }),
    EntityReportingServiceModule,
    RouterModule.forChild(routes),
    SdsFormlyStepperModule,
  ],
})
export class DataEntryMultiFormModule { }