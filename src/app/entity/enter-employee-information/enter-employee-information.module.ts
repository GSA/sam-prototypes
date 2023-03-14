import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterEmployeeInformationRoutingModule } from './enter-employee-information-routing.module';
import { EnterEmployeeInformationComponent } from './enter-employee-information.component';


@NgModule({
  declarations: [
    EnterEmployeeInformationComponent
  ],
  imports: [
    CommonModule,
    EnterEmployeeInformationRoutingModule
  ]
})
export class EnterEmployeeInformationModule { }
