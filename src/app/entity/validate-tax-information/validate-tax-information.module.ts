import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidateTaxInformationRoutingModule } from './validate-tax-information-routing.module';
import { ValidateTaxInformationComponent } from './validate-tax-information.component';


@NgModule({
  declarations: [
    ValidateTaxInformationComponent
  ],
  imports: [
    CommonModule,
    ValidateTaxInformationRoutingModule
  ]
})
export class ValidateTaxInformationModule { }
