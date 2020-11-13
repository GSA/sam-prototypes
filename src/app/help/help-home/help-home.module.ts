import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
    SdsSearchModule,
    SdsIconModule
  } from '@gsa-sam/components';

import { HelpHomeRoutingModule } from './help-home-routing.module';
import { HelpHomeComponent } from './help-home.component';

@NgModule({
  declarations: [HelpHomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
    SdsSearchModule,
    HelpHomeRoutingModule,
    SdsIconModule
  ],
  exports: [HelpHomeComponent]
})
export class HelpHomeModule { }
