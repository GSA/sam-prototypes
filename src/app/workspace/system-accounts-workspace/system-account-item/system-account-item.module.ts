import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { sds } from '@gsa-sam/sam-styles/src/icons/';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { SdsActionsMenuModule } from '@gsa-sam/layouts';

import { SystemAccountItemComponent } from './system-account-item.component';

@NgModule({
  declarations: [SystemAccountItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SdsActionsMenuModule
  ],
  exports: [SystemAccountItemComponent]
})
export class SystemAccountItemModule { }
