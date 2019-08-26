import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WageRoutingModule } from './wage-routing.module';
import { WageComponent } from './wage.component';

@NgModule({
  declarations: [WageComponent],
  imports: [
    CommonModule,
    WageRoutingModule
  ],
  exports: [WageComponent]
})
export class WageModule { }
