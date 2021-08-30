import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFormlyModule } from '@gsa-sam/sam-formly';

import { SystemAccountDetailsComponent } from './system-account-details.component';



@NgModule({
  declarations: [
    SystemAccountDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormlyModule,
    SdsFormlyModule
  ],
  exports: [
    SystemAccountDetailsComponent
  ]
})
export class SystemAccountDetailsModule { }
