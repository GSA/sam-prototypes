import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemAccountsWorkspaceRoutingModule } from './system-accounts-workspace-routing.module';
import { SystemAccountsWorkspaceComponent } from './system-accounts-workspace.component';

@NgModule({
  declarations: [SystemAccountsWorkspaceComponent],
  imports: [
    CommonModule,
    SystemAccountsWorkspaceRoutingModule
  ],
  exports: [SystemAccountsWorkspaceComponent]
})
export class SystemAccountsWorkspaceModule { }
