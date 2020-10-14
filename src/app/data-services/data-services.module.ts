import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  SdsSearchModule,
} from '@gsa-sam/components';

import { DataServicesRoutingModule } from './data-services-routing.module';
import { DataServicesComponent } from './data-services.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
    SdsSearchModule,
    DataServicesRoutingModule,
  ],
  declarations: [DataServicesComponent],
  exports: [DataServicesComponent]
})
export class DataServicesModule {}
