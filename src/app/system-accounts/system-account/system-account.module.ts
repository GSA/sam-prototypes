import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemAccountRoutingModule } from './system-account-routing.module';
import { SystemAccountComponent } from './system-account.component';

@NgModule({
  declarations: [SystemAccountComponent],
  imports: [
    CommonModule,
    SystemAccountRoutingModule
  ],
  exports: [SystemAccountComponent]
})
export class SystemAccountModule { }
