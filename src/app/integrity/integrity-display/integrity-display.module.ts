import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  SdsSideNavigationModule,
  SdsToolbarModule
} from '@gsa-sam/components';
import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { IntegrityServiceModule } from '../../services/integrity-service/integrity-service.module';

import { IntegrityDisplayRoutingModule } from './integrity-display-routing.module';
import { IntegrityDisplayComponent } from './integrity-display.component';

@NgModule({
  declarations: [IntegrityDisplayComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsSubheaderModule,
    IntegrityServiceModule,
    IntegrityDisplayRoutingModule
  ],
  exports: [IntegrityDisplayComponent]
})
export class IntegrityDisplayModule { }
