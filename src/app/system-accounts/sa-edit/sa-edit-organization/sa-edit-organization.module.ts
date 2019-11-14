import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaEditOrganizationRoutingModule } from './sa-edit-organization-routing.module';
import { SaEditOrganizationComponent } from './sa-edit-organization.component';

@NgModule({
  declarations: [SaEditOrganizationComponent],
  imports: [
    CommonModule,
    SaEditOrganizationRoutingModule
  ],
  exports: [SaEditOrganizationComponent]
})
export class SaEditOrganizationModule { }
