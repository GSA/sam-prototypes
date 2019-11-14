import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaDisplayRoutingModule } from './sa-display-routing.module';
import { SaDisplayComponent } from './sa-display.component';

@NgModule({
  declarations: [SaDisplayComponent],
  imports: [
    CommonModule,
    SaDisplayRoutingModule
  ],
  exports: [SaDisplayComponent]
})
export class SaDisplayModule { }
