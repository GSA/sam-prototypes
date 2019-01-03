import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigateRoutingModule } from './navigate-routing.module';
import { NavigateComponent } from './navigate.component';

@NgModule({
  imports: [
    CommonModule,
    NavigateRoutingModule
  ],
  declarations: [NavigateComponent]
})
export class NavigateModule { }
