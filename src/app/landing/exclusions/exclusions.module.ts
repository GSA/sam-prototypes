import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {
  SdsSearchModule,
  SdsVideoPlayerModule
} from '@gsa-sam/components';

import { ExclusionsRoutingModule } from './exclusions-routing.module';
import { ExclusionsComponent } from './exclusions.component';

@NgModule({
  declarations: [ExclusionsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SdsSearchModule,
    SdsVideoPlayerModule,
    ExclusionsRoutingModule
  ],
  exports: [ExclusionsComponent]
})
export class ExclusionsModule { }
