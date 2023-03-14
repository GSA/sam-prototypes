import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterLegalInformationRoutingModule } from './enter-legal-information-routing.module';
import { EnterLegalInformationComponent } from './enter-legal-information.component';


@NgModule({
  declarations: [
    EnterLegalInformationComponent
  ],
  imports: [
    CommonModule,
    EnterLegalInformationRoutingModule
  ]
})
export class EnterLegalInformationModule { }
