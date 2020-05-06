import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SdsSubheaderModule } from '@gsa-sam/layouts';  

import {
    SdsPageModule,
    SdsSearchModule
  } from '@gsa-sam/components';

import { HelpPageRoutingModule } from './help-page-routing.module';
import { HelpPageComponent } from './help-page.component';

@NgModule({
  declarations: [HelpPageComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SdsSubheaderModule,
    SdsPageModule,
    SdsSearchModule,
    HelpPageRoutingModule
  ],
  exports: [HelpPageComponent]
})
export class HelpPageModule { }
