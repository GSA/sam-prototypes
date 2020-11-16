import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SdsSubheaderModule } from '@gsa-sam/layouts';

import { HierarchyPickerModule } from '../../components/hierarchy-picker/hierarchy-picker.module';
import { HierarchyNavPickerModule } from '../../components/hierarchy-nav-picker/hierarchy-nav-picker.module';

import { DatabankServiceModule } from '../../services/databank-service/databank-service.module';

import { DatabankReportRoutingModule } from './databank-report-routing.module';
import { DatabankReportComponent } from './databank-report.component';

@NgModule({
  declarations: [DatabankReportComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    SdsSubheaderModule,
    HierarchyPickerModule,
    HierarchyNavPickerModule,
    DatabankServiceModule,
    DatabankReportRoutingModule
  ],
  exports: [DatabankReportComponent]
})
export class DatabankReportModule { }
