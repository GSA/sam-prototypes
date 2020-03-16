import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpPageRoutingModule } from './help-page-routing.module';
import { HelpPageComponent } from './help-page.component';

@NgModule({
  declarations: [HelpPageComponent],
  imports: [
    CommonModule,
    HelpPageRoutingModule
  ],
  exports: [HelpPageComponent]
})
export class HelpPageModule { }
