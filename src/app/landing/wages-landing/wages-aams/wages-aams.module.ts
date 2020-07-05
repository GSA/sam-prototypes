import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { WagesSubMenuModule } from '../wages-sub-menu/wages-sub-menu.module';

import { WagesAamsService } from './wages-aams-service/wages-aams.service';
import { WagesAamsRoutingModule } from './wages-aams-routing.module';
import { WagesAamsComponent } from './wages-aams.component';

@NgModule({
  declarations: [WagesAamsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SdsSubheaderModule,
    WagesSubMenuModule,
    WagesAamsRoutingModule
  ],
  exports: [WagesAamsComponent],
  providers: [WagesAamsService]
})
export class WagesAamsModule { }

