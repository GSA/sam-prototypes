import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { WagesSubMenuModule } from '../wages-sub-menu/wages-sub-menu.module';

import { WagesLaborAdvisorsRoutingModule } from './wages-labor-advisors-routing.module';
import { WagesLaborAdvisorsComponent } from './wages-labor-advisors.component';

@NgModule({
  declarations: [WagesLaborAdvisorsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SdsSubheaderModule,
    WagesSubMenuModule,
    WagesLaborAdvisorsRoutingModule
  ],
  exports: [WagesLaborAdvisorsComponent]
})
export class WagesLaborAdvisorsModule { }
