import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { SdsFiltersModule } from '@gsa-sam/sam-formly';
import { IconModule } from '@gsa-sam/ngx-uswds-icons';

import { StatusTrackerRoutingModule } from './status-tracker-routing.module';
import { StatusTrackerComponent } from './status-tracker.component';

@NgModule({
  declarations: [StatusTrackerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SdsFiltersModule,
    FormsModule,
    FormlyModule.forRoot(),
    StatusTrackerRoutingModule,
    IconModule
  ],
  exports: [StatusTrackerComponent]
})
export class StatusTrackerModule { }
