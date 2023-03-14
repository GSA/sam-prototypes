import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValidateCageInformationRoutingModule } from './validate-cage-information-routing.module';
import { ValidateCageInformationComponent } from './validate-cage-information.component';


@NgModule({
  declarations: [
    ValidateCageInformationComponent
  ],
  imports: [
    CommonModule,
    ValidateCageInformationRoutingModule
  ]
})
export class ValidateCageInformationModule { }
