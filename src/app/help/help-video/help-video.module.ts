import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  SdsPageModule
} from '@gsa-sam/components';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { HelpVideoRoutingModule } from './help-video-routing.module';
import { HelpVideoComponent } from './help-video.component';

@NgModule({
  declarations: [HelpVideoComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SdsPageModule,
    SdsSubheaderModule,
    HelpVideoRoutingModule
  ],
  exports: [HelpVideoComponent]
})
export class HelpVideoModule { }
