import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComplianceComponent } from './compliance.component';

@NgModule({
  declarations: [ComplianceComponent],
  imports: [
    CommonModule
  ],
  exports: [ComplianceComponent]
})
export class ComplianceModule { }
