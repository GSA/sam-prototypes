import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SdsIconModule, SdsSelectionPanelModule } from '@gsa-sam/components';
import { DataEntryLayoutModule } from '../app-layout/data-entry-layout/data-entry-layout.module';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFormlyModule, SdsStepperModule } from '@gsa-sam/sam-formly';
import { DataEntryFormlyModule } from '../data-entry/formly/formly-module';
import { EntityReportingServiceModule } from '../services/entity-reporting-service/entity-reporting-service.module';
import { DataEntryMultiFormStepsService } from './data-entry-multi-form-steps.service';
import { AppLayoutFormlyModule } from '../app-layout/formly/formly-module';
import {
  NgxBootstrapIconsModule,
  chevronLeft,
  chevronRight,
  slashCircleFill,
  checkCircleFill,
  circle,
  question,
  save,
  x
} from "ngx-bootstrap-icons";
import { DataEntryAppComponent } from './data-entry-app.component';
import { DataEntryCustomStepperComponent } from './data-entry-custom-stepper.component';

const routes: Routes = [
  {
    path: '',
    component: DataEntryAppComponent
  }
];

@NgModule({
  declarations: [
    DataEntryAppComponent,
    DataEntryCustomStepperComponent,
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
    NgxBootstrapIconsModule.pick({ chevronLeft, chevronRight, circle, slashCircleFill, checkCircleFill, question, save, x }),
    EntityReportingServiceModule,
    RouterModule.forChild(routes),
    SdsStepperModule,
  ],
})
export class DataEntryMultiFormModule { }