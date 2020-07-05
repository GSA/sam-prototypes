import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { WagesSubMenuModule } from '../wages-sub-menu/wages-sub-menu.module';

import { WagesCrossIndexRoutingModule } from './wages-cross-index-routing.module';
import { WagesCrossIndexComponent } from './wages-cross-index.component';

@NgModule({
  declarations: [WagesCrossIndexComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SdsSubheaderModule,
    WagesSubMenuModule,
    WagesCrossIndexRoutingModule
  ],
  exports: [WagesCrossIndexComponent]
})
export class WagesCrossIndexModule { }

