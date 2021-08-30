import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SdsSubheaderModule } from "@gsa-sam/layouts";

import {AppLayoutModule} from '../app-layout.module';

import { RequestSubheaderComponent } from './request-subheader.component';



@NgModule({
  declarations: [
    RequestSubheaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SdsSubheaderModule,
    AppLayoutModule
  ],
  exports: [
    RequestSubheaderComponent
  ]
})
export class SubheaderModule { }
