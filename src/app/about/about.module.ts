import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  SdsSelectionPanelModule
} from '@gsa-sam/components';

import { SdsSubheaderModule, SideToolbarModule } from '@gsa-sam/layouts';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    SdsSubheaderModule,    
    SdsSelectionPanelModule,
    SideToolbarModule,
    AboutRoutingModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
