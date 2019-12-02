import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import {
  SdsPageModule
} from '@gsa-sam/components';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { HelpFeatureRoutingModule } from './help-feature-routing.module';
import { HelpFeatureComponent } from './help-feature.component';

@NgModule({
  declarations: [HelpFeatureComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SdsPageModule,
    SdsSubheaderModule,
    HelpFeatureRoutingModule
  ],
  exports: [HelpFeatureComponent]
})
export class HelpFeatureModule { }
