import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  SdsSearchModule,
  SdsVideoPlayerModule,
  SdsIconModule
} from '@gsa-sam/components';

import { ExclusionsFederalRoutingModule } from './exclusions-federal-routing.module';
import { ExclusionsFederalComponent } from './exclusions-federal.component';

@NgModule({
  declarations: [ExclusionsFederalComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    FormsModule,
    SdsSearchModule,
    SdsVideoPlayerModule,
    ExclusionsFederalRoutingModule,
    SdsIconModule
  ],
  exports: [ExclusionsFederalComponent]
})
export class ExclusionsFederalModule { }
