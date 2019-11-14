import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaEditPermissionsRoutingModule } from './sa-edit-permissions-routing.module';
import { SaEditPermissionsComponent } from './sa-edit-permissions.component';

@NgModule({
  declarations: [SaEditPermissionsComponent],
  imports: [
    CommonModule,
    SaEditPermissionsRoutingModule
  ],
  exports: [SaEditPermissionsComponent]
})
export class SaEditPermissionsModule { }
