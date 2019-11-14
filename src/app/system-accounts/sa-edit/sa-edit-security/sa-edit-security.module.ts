import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaEditSecurityRoutingModule } from './sa-edit-security-routing.module';
import { SaEditSecurityComponent } from './sa-edit-security.component';

@NgModule({
  declarations: [SaEditSecurityComponent],
  imports: [
    CommonModule,
    SaEditSecurityRoutingModule
  ],
  exports: [SaEditSecurityComponent]
})
export class SaEditSecurityModule { }
