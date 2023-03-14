import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormlyModule } from '@ngx-formly/core';
import { SdsFormlyModule, SdsStepperModule } from '@gsa-sam/sam-formly';

import { EntityStartRoutingModule } from './entity-start-routing.module';
import { EntityStartComponent } from './entity-start.component';
import { EntityStartStepperComponent } from './entity-start-stepper.component';

import { UsaStepIndicatorModule } from '@gsa-sam/ngx-uswds';
import {
  NgxBootstrapIconsModule,
  chevronLeft,
  chevronRight,
  slashCircleFill,
  checkCircleFill,
  circle,
  question,
  save,
  dash,
  check,
  exclamationTriangle,
  x,
} from 'ngx-bootstrap-icons';

import { EntityModelModule } from '../entity-model/entity-model.module';

import { IconModule } from '@gsa-sam/ngx-uswds-icons';
import { SurveyQuestionOneComponent } from './survey-question-one.component';
import { SurveyQuestionTwoComponent } from './survey-question-two.component';
import { SurveyQuestionGovComponent } from './survey-question-gov.component';
import { SurveyQuestionForeignComponent } from './survey-question-foreign.component';
import { SurveyResultComponent } from './survey-result.component';


@NgModule({
  declarations: [
    EntityStartComponent,
    EntityStartStepperComponent,
    SurveyQuestionOneComponent,
    SurveyQuestionTwoComponent,
    SurveyQuestionGovComponent,
    SurveyQuestionForeignComponent,
    SurveyResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    SdsFormlyModule,
    EntityStartRoutingModule,
    UsaStepIndicatorModule,
    SdsStepperModule,
    NgxBootstrapIconsModule.pick({
      chevronLeft,
      chevronRight,
      circle,
      slashCircleFill,
      checkCircleFill,
      question,
      save,
      dash,
      check,
      exclamationTriangle,
      x,
    }),
    IconModule,
    EntityModelModule,
  ]
})
export class EntityStartModule { }
