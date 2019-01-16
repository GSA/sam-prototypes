import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamSidebarModule } from '../../sam-ui-elements/sam-sidebar/sam-sidebar.module';
import { PerformanceDataRoutingModule } from './performance-data-routing.module';
import { PerformanceDataComponent } from './performance-data.component';


@NgModule({
  imports: [
    CommonModule,
    SamSidebarModule,
    PerformanceDataRoutingModule
  ],
  declarations: [PerformanceDataComponent]
})
export class PerformanceDataModule { }
