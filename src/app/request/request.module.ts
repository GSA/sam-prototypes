import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestRoutingModule } from './request-routing.module';
import { RequestComponent } from './request.component';

@NgModule({
  imports: [
    CommonModule,
    RequestRoutingModule
  ],
  declarations: [RequestComponent]
})
export class RequestModule { }
