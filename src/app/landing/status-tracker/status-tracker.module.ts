import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';

import { StatusTrackerRoutingModule } from './status-tracker-routing.module';
import { StatusTrackerComponent } from './status-tracker.component';
import { SdsIconModule } from '@gsa-sam/components';

@NgModule({
  declarations: [StatusTrackerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsFiltersModule,
    FormsModule,
    FormlyModule.forRoot(),
    StatusTrackerRoutingModule,
    SdsIconModule
  ],
  exports: [StatusTrackerComponent]
})
export class StatusTrackerModule { }
