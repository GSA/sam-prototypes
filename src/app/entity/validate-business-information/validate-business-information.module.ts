import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from "@ngx-formly/core";
import { SdsFormlyModule } from "@gsa-sam/sam-formly";

import { ValidateBusinessInformationRoutingModule } from './validate-business-information-routing.module';
import { ValidateBusinessInformationComponent } from './validate-business-information.component';


@NgModule({
  declarations: [
    ValidateBusinessInformationComponent
  ],
  imports: [
    CommonModule,    
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    SdsFormlyModule,
    ValidateBusinessInformationRoutingModule
  ]
})
export class ValidateBusinessInformationModule { }


