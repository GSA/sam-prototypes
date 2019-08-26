import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { HelpRoutingModule } from './help-routing.module';
import { HelpComponent } from './help.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SdsSubheaderModule,
    HelpRoutingModule
  ],
  declarations: [HelpComponent],
  exports: []
})
export class HelpModule { }
