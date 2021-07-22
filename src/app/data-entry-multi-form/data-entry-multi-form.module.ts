import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SdsIconModule, SdsSelectionPanelModule, SdsToastModule } from '@gsa-sam/components';
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
import { SdsButtonGroupModule } from '@gsa-sam/sam-material-extensions';
import { DataEntryNgxStepperComponent } from './data-entry-ngx-stepper.component';
import { UsaStepIndicatorModule } from '@gsa-sam/ngx-uswds';
import { FormsModule } from '@angular/forms';

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
    DataEntryNgxStepperComponent
  ],
  providers: [
    DataEntryMultiFormStepsService,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SdsSelectionPanelModule,
    DataEntryLayoutModule,
    FormlyModule.forRoot(),
    SdsFormlyModule,
    DataEntryFormlyModule,
    AppLayoutFormlyModule,
    SdsIconModule,
    UsaStepIndicatorModule,
    NgxBootstrapIconsModule.pick({ chevronLeft, chevronRight, circle, slashCircleFill, checkCircleFill, question, save, x }),
    SdsToastModule,
    SdsButtonGroupModule,
    EntityReportingServiceModule,
    RouterModule.forChild(routes),
    SdsStepperModule,
  ],
})
export class DataEntryMultiFormModule { }