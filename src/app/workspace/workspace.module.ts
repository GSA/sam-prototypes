import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { WorkspaceComponent } from './workspace.component';
import { WorkspaceModelModule } from './service/workspace-model.module';
import { SdsSideNavigationModule, SdsToolbarModule, SdsAccordionModule, SdsPageModule } from '@gsa-sam/components';
@NgModule({
  imports: [
    CommonModule,
    WorkspaceRoutingModule, SdsSideNavigationModule,
    SdsToolbarModule, SdsAccordionModule, WorkspaceModelModule.forRoot(),
    SdsPageModule,    SdsToolbarModule, SdsSideNavigationModule, SdsAccordionModule
  ],
  declarations: [WorkspaceComponent],
  exports: [WorkspaceComponent]
})
export class WorkspaceModule { }
