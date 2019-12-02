import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  SdsPageModule
} from '@gsa-sam/components';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { HelpFaqRoutingModule } from './help-faq-routing.module';
import { HelpFaqComponent } from './help-faq.component';

@NgModule({
  declarations: [HelpFaqComponent],
  imports: [
    CommonModule,    
    FontAwesomeModule,
    SdsPageModule,
    SdsSubheaderModule,
    HelpFaqRoutingModule
  ],
  exports: [HelpFaqComponent]
})
export class HelpFaqModule { }

