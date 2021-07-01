import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemAccountFormRoutingModule } from './system-account-form-routing.module';
import { SystemAccountFormComponent } from './system-account-form.component';


@NgModule({
  declarations: [SystemAccountFormComponent],
  imports: [
    CommonModule,
    SystemAccountFormRoutingModule
  ],
  exports: [SystemAccountFormComponent]
})
export class SystemAccountFormModule { }
