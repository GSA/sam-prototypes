import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

import { SystemAccountEditorServiceModule } from '../system-account-editor-service/system-account-editor-service.module';
import { SystemAccountReviewRoutingModule } from './system-account-review-routing.module';
import { SystemAccountReviewComponent } from './system-account-review.component';


@NgModule({
  declarations: [SystemAccountReviewComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormlyModule,
    SdsFormlyModule,
    SystemAccountEditorServiceModule,
    SystemAccountReviewRoutingModule
  ],
  exports: [SystemAccountReviewComponent]
})
export class SystemAccountReviewModule { }
