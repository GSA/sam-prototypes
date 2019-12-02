import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpTermRoutingModule } from './help-term-routing.module';
import { HelpTermComponent } from './help-term.component';

@NgModule({
  declarations: [HelpTermComponent],
  imports: [
    CommonModule,
    HelpTermRoutingModule
  ],
  exports: [HelpTermComponent]
})
export class HelpTermModule { }
