import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterFinancialInformationRoutingModule } from './enter-financial-information-routing.module';
import { EnterFinancialInformationComponent } from './enter-financial-information.component';


@NgModule({
  declarations: [
    EnterFinancialInformationComponent
  ],
  imports: [
    CommonModule,
    EnterFinancialInformationRoutingModule
  ]
})
export class EnterFinancialInformationModule { }
