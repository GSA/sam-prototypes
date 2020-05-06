import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoPolicyRoutingModule } from './logo-policy-routing.module';
import { LogoPolicyComponent } from './logo-policy.component';

@NgModule({
  declarations: [LogoPolicyComponent],
  imports: [
    CommonModule,
    LogoPolicyRoutingModule
  ],
  exports: [LogoPolicyComponent]
})
export class LogoPolicyModule { }
