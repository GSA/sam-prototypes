import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SdsSideNavigationModule,
  SdsToolbarModule,
  SdsAccordionModule
} from '@gsa-sam/components';

import { SaEditRoutingModule } from './sa-edit-routing.module';
import { SaEditComponent } from './sa-edit.component';

@NgModule({
  declarations: [SaEditComponent],
  imports: [
    CommonModule,
    SdsSideNavigationModule,
    SdsToolbarModule,
    SdsAccordionModule,
    SaEditRoutingModule
  ],
  exports: [SaEditComponent]
})
export class SaEditModule { }
