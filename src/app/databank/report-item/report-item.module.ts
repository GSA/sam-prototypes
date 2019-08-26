import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportItemComponent } from './report-item.component';

@NgModule({
  declarations: [ReportItemComponent],
  imports: [
    CommonModule
  ],
  exports: [ReportItemComponent]
})
export class ReportItemModule { }
